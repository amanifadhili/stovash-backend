import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordPurchasePaymentCommand } from '../impl/record-purchase-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(RecordPurchasePaymentCommand)
export class RecordPurchasePaymentHandler extends BaseCommandHandler<RecordPurchasePaymentCommand> {
  async execute(command: RecordPurchasePaymentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const {
        purchaseId,
        paymentNumber,
        amount,
        currency = 'RWF',
        exchangeRate = 1.0,
        paymentMethod,
        accountId,
        accountName,
        reference,
        paidAt,
        notes,
        accountingRef,
      } = payload;
      const paidById = userId;
      const paidByName = userName;

      const purchase = await prisma.purchase.findFirst({ where: { id: purchaseId, tenantId, shopId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }

      if (purchase.commercialStatus === 'CANCELLED') {
        return { status: 'error', traceId, message: 'Cannot record payment for cancelled purchase', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const payment = await prisma.purchasePayment.create({
        data: {
          purchaseId,
          paymentNumber,
          amount,
          currency,
          exchangeRate,
          paymentMethod,
          accountId,
          accountName,
          reference,
          paidById,
          paidAt: paidAt ? new Date(paidAt) : new Date(),
          notes,
          accountingRef,
        },
      });

      // Update purchase payment totals
      const totalPaid = await prisma.purchasePayment.aggregate({
        where: { purchaseId },
        _sum: { amount: true },
      });
      const amountPaid = totalPaid._sum.amount || 0;
      const amountOutstanding = purchase.grandTotal - amountPaid;

      let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' = 'UNPAID';
      if (amountPaid === 0) paymentStatus = 'UNPAID';
      else if (amountPaid >= purchase.grandTotal) paymentStatus = 'PAID';
      else paymentStatus = 'PARTIALLY_PAID';

      await prisma.purchase.update({
        where: { id: purchaseId },
        data: { amountPaid, amountOutstanding, paymentStatus },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId,
          eventType: 'PAYMENT_RECEIVED',
          eventData: JSON.stringify({ paymentNumber, amount, method: paymentMethod, paidBy: paidByName }),
          userId: paidById,
          userName: paidByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: paidById,
          action: 'RecordPurchasePayment',
          resource: 'PurchasePayment',
          resourceId: payment.id,
          traceId,
          details: JSON.stringify({ paymentNumber, amount, method: paymentMethod }),
        },
      });

      return { status: 'success', traceId, data: payment };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}