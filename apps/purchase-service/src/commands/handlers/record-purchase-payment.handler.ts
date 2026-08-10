import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordPurchasePaymentCommand } from '../impl/record-purchase-payment.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(RecordPurchasePaymentCommand)
export class RecordPurchasePaymentHandler extends BaseCommandHandler<RecordPurchasePaymentCommand> {
  async execute(command: RecordPurchasePaymentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.purchaseOrderId || !payload?.amount || !payload?.paymentMethod) {
        return {
          status: 'error',
          traceId,
          message: 'purchaseOrderId, amount, and paymentMethod are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify purchase order exists
      const purchaseOrder = await prisma.purchaseOrder.findUnique({
        where: { id: payload.purchaseOrderId }
      });

      if (!purchaseOrder) {
        return {
          status: 'error',
          traceId,
          message: `Purchase order ${payload.purchaseOrderId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (purchaseOrder.tenantId !== tenantId || purchaseOrder.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Purchase order does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      // Check active Work Period
      const workPeriod = await prisma.workPeriod.findFirst({
        where: { shopId, status: 'OPEN' },
        orderBy: { openedAt: 'desc' }
      });

      if (!workPeriod) {
        return {
          status: 'error',
          traceId,
          message: `Shop ${shopId} work period is CLOSED or missing. Payment recording is locked out.`,
          errorCode: ErrorCode.WORK_PERIOD_CLOSED
        };
      }

      const result = await prisma.$transaction(async (tx) => {
        // Helper function to resolve or create standard accounting ledger accounts
        const getOrCreateAccount = async (code: string, name: string, type: string) => {
          let acc = await tx.ledgerAccount.findFirst({
            where: { tenantId, shopId, code }
          });
          if (!acc) {
            acc = await tx.ledgerAccount.create({
              data: { tenantId, shopId, code, name, type }
            });
          }
          return acc;
        };

        const cashAcc = await getOrCreateAccount('1001', 'Cash on Hand', 'ASSET');
        const apAcc = await getOrCreateAccount('2001', 'Accounts Payable', 'LIABILITY');

        // Post journal entry for payment
        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            description: `Payment for PO #${purchaseOrder.poNumber}`,
            postedBy: context.userId || 'system',
            entries: {
              create: [
                { accountId: apAcc.id, type: 'DEBIT', amount: payload.amount },
                { accountId: cashAcc.id, type: 'CREDIT', amount: payload.amount }
              ]
            }
          },
          include: { entries: true }
        });

        // Update ledger balances
        await tx.ledgerAccount.update({
          where: { id: apAcc.id },
          data: { balance: { decrement: payload.amount } }
        });
        await tx.ledgerAccount.update({
          where: { id: cashAcc.id },
          data: { balance: { decrement: payload.amount } }
        });

        return { purchaseOrder, journalEntry };
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordPurchasePayment',
            resource: 'PurchaseOrder',
            resourceId: payload.purchaseOrderId,
            traceId: context.traceId || null,
            details: JSON.stringify({
              purchaseOrderId: payload.purchaseOrderId,
              amount: payload.amount,
              paymentMethod: payload.paymentMethod
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
        message: error.message || 'Failed to record purchase payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
