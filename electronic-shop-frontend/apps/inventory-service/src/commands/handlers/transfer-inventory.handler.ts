import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { TransferInventoryCommand } from '../impl/transfer-inventory.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(TransferInventoryCommand)
export class TransferInventoryHandler extends BaseCommandHandler<TransferInventoryCommand> {
  async execute(command: TransferInventoryCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required in context for inventory transfer',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.serialNumber || !payload?.fromShopId || !payload?.toShopId) {
        return {
          status: 'error',
          traceId,
          message: 'serialNumber, fromShopId, and toShopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.fromShopId === payload.toShopId) {
        return {
          status: 'error',
          traceId,
          message: 'fromShopId and toShopId must be different',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Check active Work Period lockout for source shop
      const sourceWp = await prisma.workPeriod.findFirst({
        where: { shopId: payload.fromShopId, status: 'OPEN' },
        orderBy: { openedAt: 'desc' }
      });

      if (!sourceWp) {
        return {
          status: 'error',
          traceId,
          message: `Source shop ${payload.fromShopId} work period is CLOSED or missing. Transfers locked out.`,
          errorCode: ErrorCode.WORK_PERIOD_CLOSED
        };
      }

      // Check active Work Period for target shop, or auto-open if none exists
      let targetWp = await prisma.workPeriod.findFirst({
        where: { shopId: payload.toShopId, status: 'OPEN' },
        orderBy: { openedAt: 'desc' }
      });

      if (!targetWp) {
        targetWp = await prisma.workPeriod.create({
          data: {
            shopId: payload.toShopId,
            openedBy: context?.userId || 'system',
            status: 'OPEN'
          }
        });
      }


      // Find inventory item at source shop
      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, shopId: payload.fromShopId, serialNumber: payload.serialNumber }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item ${payload.serialNumber} not found in source shop ${payload.fromShopId}`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (invItem.status !== 'AVAILABLE') {
        return {
          status: 'error',
          traceId,
          message: `Item ${payload.serialNumber} is not AVAILABLE for transfer (status: ${invItem.status})`,
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
        };
      }

      const itemCost = invItem.purchaseCost || 0;
      const transferNumber = `TRF-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      // Helper function to resolve or create standard accounting ledger accounts for a shop
      const getOrCreateAccount = async (shopId: string, code: string, name: string, type: string) => {
        let acc = await prisma.ledgerAccount.findFirst({
          where: { tenantId, shopId, code }
        });
        if (!acc) {
          acc = await prisma.ledgerAccount.create({
            data: { tenantId, shopId, code, name, type }
          });
        }
        return acc;
      };

      const sourceInvAcc = await getOrCreateAccount(payload.fromShopId, '1002', 'Inventory Asset', 'ASSET');
      const targetInvAcc = await getOrCreateAccount(payload.toShopId, '1002', 'Inventory Asset', 'ASSET');

      const result = await prisma.$transaction(async (tx) => {
        // 1. Create InventoryTransfer audit record
        const transferRecord = await tx.inventoryTransfer.create({
          data: {
            tenantId,
            fromShopId: payload.fromShopId,
            toShopId: payload.toShopId,
            transferNumber,
            serialNumber: payload.serialNumber,
            status: 'COMPLETED',
            notes: payload.notes || 'Inter-branch stock transfer',
            createdById: context?.userId || 'system'
          }
        });

        // 2. Relocate InventoryItem to target shop
        const updatedInvItem = await tx.inventoryItem.update({
          where: { id: invItem.id },
          data: { shopId: payload.toShopId }
        });

        // 3. Post Inter-Branch Journal Entries (Debit Target Inventory Asset, Credit Source Inventory Asset)
        if (itemCost > 0) {
          // Source shop journal: Credit Inventory Asset
          await tx.journalEntry.create({
            data: {
              tenantId,
              shopId: payload.fromShopId,
              workPeriodId: sourceWp.id,
              description: `Stock Transfer Out #${transferNumber} - Serial: ${payload.serialNumber} to Shop ${payload.toShopId}`,
              postedBy: context?.userId || 'system',
              entries: {
                create: [
                  { accountId: sourceInvAcc.id, type: 'CREDIT', amount: itemCost }
                ]
              }
            }
          });

          // Target shop journal: Debit Inventory Asset
          await tx.journalEntry.create({
            data: {
              tenantId,
              shopId: payload.toShopId,
              workPeriodId: targetWp.id,
              description: `Stock Transfer In #${transferNumber} - Serial: ${payload.serialNumber} from Shop ${payload.fromShopId}`,
              postedBy: context?.userId || 'system',
              entries: {
                create: [
                  { accountId: targetInvAcc.id, type: 'DEBIT', amount: itemCost }
                ]
              }
            }
          });

          // Update balances
          await tx.ledgerAccount.update({
            where: { id: sourceInvAcc.id },
            data: { balance: { decrement: itemCost } }
          });
          await tx.ledgerAccount.update({
            where: { id: targetInvAcc.id },
            data: { balance: { increment: itemCost } }
          });
        }

        return { transferRecord, updatedInvItem };
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
        message: error.message || 'Failed to execute inventory transfer',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
