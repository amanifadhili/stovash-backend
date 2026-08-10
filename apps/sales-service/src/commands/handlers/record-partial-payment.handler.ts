import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordPartialPaymentCommand } from '../impl/record-partial-payment.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(RecordPartialPaymentCommand)
export class RecordPartialPaymentHandler extends BaseCommandHandler<RecordPartialPaymentCommand> {
  async execute(command: RecordPartialPaymentCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.salesOrderId || !payload?.amount || !payload?.paymentMethod) {
        return {
          status: 'error',
          traceId,
          message: 'salesOrderId, amount, and paymentMethod are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify sales order exists
      const salesOrder = await prisma.salesOrder.findUnique({
        where: { id: payload.salesOrderId }
      });

      if (!salesOrder) {
        return {
          status: 'error',
          traceId,
          message: `Sales order ${payload.salesOrderId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (salesOrder.tenantId !== tenantId || salesOrder.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Sales order does not belong to this tenant/shop',
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
        const arAcc = await getOrCreateAccount('1101', 'Accounts Receivable', 'ASSET');

        // Post journal entry for payment
        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            description: `Partial payment for order ${salesOrder.orderNumber}`,
            postedBy: context.userId || 'system',
            entries: {
              create: [
                { accountId: cashAcc.id, type: 'DEBIT', amount: payload.amount },
                { accountId: arAcc.id, type: 'CREDIT', amount: payload.amount }
              ]
            }
          },
          include: { entries: true }
        });

        // Update ledger balances
        await tx.ledgerAccount.update({
          where: { id: cashAcc.id },
          data: { balance: { increment: payload.amount } }
        });
        await tx.ledgerAccount.update({
          where: { id: arAcc.id },
          data: { balance: { decrement: payload.amount } }
        });

        return { salesOrder, journalEntry };
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordPartialPayment',
            resource: 'SalesOrder',
            resourceId: payload.salesOrderId,
            traceId: context.traceId || null,
            details: JSON.stringify({
              salesOrderId: payload.salesOrderId,
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
        message: error.message || 'Failed to record partial payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
