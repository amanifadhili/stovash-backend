import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessSalesReturnCommand } from '../impl/process-sales-return.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(ProcessSalesReturnCommand)
export class ProcessSalesReturnHandler extends BaseCommandHandler<ProcessSalesReturnCommand> {
  async execute(command: ProcessSalesReturnCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context for processing sales returns',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.serialNumber || payload.refundAmount === undefined) {
        return {
          status: 'error',
          traceId,
          message: 'serialNumber and refundAmount are required',
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
          message: `Shop ${shopId} work period is CLOSED or missing. Returns processing is locked out.`,
          errorCode: ErrorCode.WORK_PERIOD_CLOSED
        };
      }

      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, shopId, serialNumber: payload.serialNumber }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item with serial number ${payload.serialNumber} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const restock = payload.restock !== undefined ? payload.restock : true;
      const cogsAmount = invItem.purchaseCost || 0;

      // Helper function to resolve or create standard accounting ledger accounts for the shop
      const getOrCreateAccount = async (code: string, name: string, type: string) => {
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

      const cashAcc = await getOrCreateAccount('1001', 'Cash on Hand', 'ASSET');
      const revAcc = await getOrCreateAccount('4001', 'Sales Revenue', 'REVENUE');
      const cogsAcc = await getOrCreateAccount('5001', 'Cost of Goods Sold', 'EXPENSE');
      const invAcc = await getOrCreateAccount('1002', 'Inventory Asset', 'ASSET');

      const returnNumber = `RET-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const result = await prisma.$transaction(async (tx) => {
        // 1. Create SalesReturn
        const salesReturn = await tx.salesReturn.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            returnNumber,
            salesOrderId: payload.salesOrderId || null,
            serialNumber: payload.serialNumber,
            refundAmount: payload.refundAmount,
            cogsAmount: restock ? cogsAmount : 0,
            reason: payload.reason || 'Customer Return',
            restock,
            createdById: context.userId || 'system'
          }
        });

        // 2. Update InventoryItem status
        const newStatus = restock ? 'AVAILABLE' : 'DEFECTIVE';
        const updatedInvItem = await tx.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: newStatus }
        });

        // 3. Post Reversal Journal Entries
        const journalEntriesList = [
          { accountId: revAcc.id, type: 'DEBIT', amount: payload.refundAmount },
          { accountId: cashAcc.id, type: 'CREDIT', amount: payload.refundAmount }
        ];

        if (restock && cogsAmount > 0) {
          journalEntriesList.push({ accountId: invAcc.id, type: 'DEBIT', amount: cogsAmount });
          journalEntriesList.push({ accountId: cogsAcc.id, type: 'CREDIT', amount: cogsAmount });
        }

        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            description: `Sales Return #${returnNumber} for item ${payload.serialNumber}`,
            postedBy: context.userId || 'system',
            entries: { create: journalEntriesList }
          },
          include: { entries: true }
        });

        // Update balances
        await tx.ledgerAccount.update({
          where: { id: revAcc.id },
          data: { balance: { decrement: payload.refundAmount } }
        });
        await tx.ledgerAccount.update({
          where: { id: cashAcc.id },
          data: { balance: { decrement: payload.refundAmount } }
        });

        if (restock && cogsAmount > 0) {
          await tx.ledgerAccount.update({
            where: { id: invAcc.id },
            data: { balance: { increment: cogsAmount } }
          });
          await tx.ledgerAccount.update({
            where: { id: cogsAcc.id },
            data: { balance: { decrement: cogsAmount } }
          });
        }

        return { salesReturn, updatedInvItem, journalEntry };
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
        message: error.message || 'Failed to process sales return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
