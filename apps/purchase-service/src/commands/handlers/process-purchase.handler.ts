import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessPurchaseCommand } from '../impl/process-purchase.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ProcessPurchaseCommand)
export class ProcessPurchaseHandler extends BaseCommandHandler<ProcessPurchaseCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ProcessPurchaseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context for purchasing & receiving goods',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'At least one item is required to receive goods',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload.vendorName) {
        return {
          status: 'error',
          traceId,
          message: 'vendorName is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Check active Work Period and enforce period lockout
      const workPeriod = await prisma.workPeriod.findFirst({
        where: { shopId, status: 'OPEN' },
        orderBy: { openedAt: 'desc' }
      });

      if (!workPeriod) {
        return {
          status: 'error',
          traceId,
          message: `Shop ${shopId} work period is CLOSED or missing. Goods receiving is locked out.`,
          errorCode: ErrorCode.WORK_PERIOD_CLOSED
        };
      }

      // Calculate totals and verify unique serial numbers
      let totalAmount = 0;
      for (const item of payload.items) {
        if (!item.productId || !item.serialNumber || item.purchaseCost === undefined) {
          return {
            status: 'error',
            traceId,
            message: 'Each item must have productId, serialNumber, and purchaseCost',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }

        const existingItem = await prisma.inventoryItem.findFirst({
          where: { tenantId, serialNumber: item.serialNumber }
        });

        if (existingItem) {
          return {
            status: 'error',
            traceId,
            message: `Serial number ${item.serialNumber} already exists in inventory`,
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
          };
        }

        totalAmount += item.purchaseCost;
      }

      // Helper function to resolve or create standard accounting ledger accounts for the shop
      const getOrCreateAccount = async (code: string, name: string, type: string) => {
        let acc = await prisma.ledgerAccount.findFirst({
          where: { tenantId, shopId, code }
        });
        if (!acc) {
          acc = await prisma.ledgerAccount.create({
            data: {
              tenantId,
              shopId,
              code,
              name,
              type
            }
          });
        }
        return acc;
      };

      const invAcc = await getOrCreateAccount('1002', 'Inventory Asset', 'ASSET');
      const creditAccCode = payload.paymentAccountCode || '2001';
      const creditAccName = creditAccCode === '1001' ? 'Cash on Hand' : 'Accounts Payable';
      const creditAccType = creditAccCode === '1001' ? 'ASSET' : 'LIABILITY';
      const creditAcc = await getOrCreateAccount(creditAccCode, creditAccName, creditAccType);

      const poNumber = `PO-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const result = await prisma.$transaction(async (tx) => {
        // 1. Create PurchaseOrder & PurchaseOrderItems
        const purchaseOrder = await tx.purchaseOrder.create({
          data: {
            tenantId,
            shopId,
            poNumber,
            vendorName: payload.vendorName,
            totalAmount,
            status: 'RECEIVED',
            createdById: context.userId || 'system',
            items: {
              create: payload.items.map((i: any) => ({
                productId: i.productId,
                serialNumber: i.serialNumber,
                purchaseCost: i.purchaseCost
              }))
            }
          },
          include: { items: true }
        });

        // 2. Create serialized InventoryItems with proper lifecycle status
        const createdInventoryItems = [];
        for (const item of payload.items) {
          // Create item with RECEIVED status per AD-0016 lifecycle
          const invItem = await tx.inventoryItem.create({
            data: {
              tenantId,
              shopId,
              productId: item.productId,
              serialNumber: item.serialNumber,
              purchaseCost: item.purchaseCost,
              status: 'RECEIVED'
            }
          });
          
          // Immediately transition to AVAILABLE after receiving
          const updatedItem = await tx.inventoryItem.update({
            where: { id: invItem.id },
            data: { status: 'AVAILABLE' }
          });
          
          createdInventoryItems.push(updatedItem);
        }

        // 3. Post Journal Entry (Debit Inventory Asset, Credit AP/Cash)
        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            description: `Goods Receipt PO #${poNumber} - Vendor: ${payload.vendorName}`,
            postedBy: context.userId || 'system',
            entries: {
              create: [
                { accountId: invAcc.id, type: 'DEBIT', amount: totalAmount },
                { accountId: creditAcc.id, type: 'CREDIT', amount: totalAmount }
              ]
            }
          },
          include: { entries: true }
        });

        // Update ledger balances
        await tx.ledgerAccount.update({
          where: { id: invAcc.id },
          data: { balance: { increment: totalAmount } }
        });
        await tx.ledgerAccount.update({
          where: { id: creditAcc.id },
          data: { balance: { increment: totalAmount } }
        });

        return { purchaseOrder, createdInventoryItems, journalEntry };
      });

      // Publish PurchaseCreated event
      await this.eventBus.publish(
        {
          eventType: 'PurchaseCreated',
          aggregateId: result.purchaseOrder.id,
          aggregateType: 'PurchaseOrder',
          payload: result.purchaseOrder,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'purchase.created'
      );

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context?.userId || null,
            action: 'ProcessPurchase',
            resource: 'PurchaseOrder',
            resourceId: result.purchaseOrder.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              poNumber,
              vendorName: payload.vendorName,
              totalAmount,
              itemCount: payload.items.length
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to receive goods',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
