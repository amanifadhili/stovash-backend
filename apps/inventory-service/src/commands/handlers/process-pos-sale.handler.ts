import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessPosSaleCommand } from '../impl/process-pos-sale.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(ProcessPosSaleCommand)
export class ProcessPosSaleHandler extends BaseCommandHandler<ProcessPosSaleCommand> {
  async execute(command: ProcessPosSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context for POS sales',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'At least one item is required to process a POS sale',
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
          message: `Shop ${shopId} work period is CLOSED or missing. POS sales are locked out.`,
          errorCode: ErrorCode.WORK_PERIOD_CLOSED
        };
      }

      // Validate & fetch inventory items
      const allocatedItems: Array<{ invItem: any; unitPrice: number; unitCost: number }> = [];
      let totalAmount = 0;
      let totalCost = 0;

      for (const itemInput of payload.items) {
        let invItem = null;
        if (itemInput.inventoryItemId) {
          invItem = await prisma.inventoryItem.findUnique({ where: { id: itemInput.inventoryItemId } });
        } else if (itemInput.serialNumber) {
          invItem = await prisma.inventoryItem.findFirst({
            where: { tenantId, shopId, serialNumber: itemInput.serialNumber }
          });
        }

        if (!invItem) {
          return {
            status: 'error',
            traceId,
            message: `Inventory item ${itemInput.inventoryItemId || itemInput.serialNumber} not found`,
            errorCode: ErrorCode.NOT_FOUND
          };
        }

        if (invItem.status !== 'AVAILABLE') {
          return {
            status: 'error',
            traceId,
            message: `Item ${invItem.serialNumber} is not AVAILABLE (current status: ${invItem.status})`,
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
          };
        }


        allocatedItems.push({
          invItem,
          unitPrice: itemInput.unitPrice,
          unitCost: invItem.purchaseCost
        });

        totalAmount += itemInput.unitPrice;
        totalCost += invItem.purchaseCost;
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

      const cashAcc = await getOrCreateAccount('1001', 'Cash on Hand', 'ASSET');
      const revAcc = await getOrCreateAccount('4001', 'Sales Revenue', 'REVENUE');
      const cogsAcc = await getOrCreateAccount('5001', 'Cost of Goods Sold', 'EXPENSE');
      const invAcc = await getOrCreateAccount('1002', 'Inventory Asset', 'ASSET');

      // Execute transaction for Sale, Inventory Status update, and Journal Entries
      const orderNumber = `POS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const result = await prisma.$transaction(async (tx) => {
        // 1. Create SalesOrder
        const salesOrder = await tx.salesOrder.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            orderNumber,
            totalAmount,
            totalCost,
            paymentMethod: payload.paymentMethod || 'CASH',
            status: 'COMPLETED',
            createdById: context.userId || 'system',
            items: {
              create: allocatedItems.map(item => ({
                inventoryItemId: item.invItem.id,
                serialNumber: item.invItem.serialNumber,
                unitCost: item.unitCost,
                unitPrice: item.unitPrice
              }))
            }
          },
          include: { items: true }
        });

        // 2. Mark inventory items as SOLD
        for (const item of allocatedItems) {
          await tx.inventoryItem.update({
            where: { id: item.invItem.id },
            data: { status: 'SOLD' }
          });
        }

        // 3. Post Journal Entry for Revenue (Debit Cash, Credit Revenue) & COGS (Debit COGS, Credit Inventory)
        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            description: `POS Sale Order #${orderNumber}`,
            postedBy: context.userId || 'system',
            entries: {
              create: [
                { accountId: cashAcc.id, type: 'DEBIT', amount: totalAmount },
                { accountId: revAcc.id, type: 'CREDIT', amount: totalAmount },
                { accountId: cogsAcc.id, type: 'DEBIT', amount: totalCost },
                { accountId: invAcc.id, type: 'CREDIT', amount: totalCost }
              ]
            }
          },
          include: { entries: true }
        });

        // Update balances for ledger accounts
        await tx.ledgerAccount.update({
          where: { id: cashAcc.id },
          data: { balance: { increment: totalAmount } }
        });
        await tx.ledgerAccount.update({
          where: { id: revAcc.id },
          data: { balance: { increment: totalAmount } }
        });
        await tx.ledgerAccount.update({
          where: { id: cogsAcc.id },
          data: { balance: { increment: totalCost } }
        });
        await tx.ledgerAccount.update({
          where: { id: invAcc.id },
          data: { balance: { decrement: totalCost } }
        });

        return { salesOrder, journalEntry };
      });

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to process POS sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
