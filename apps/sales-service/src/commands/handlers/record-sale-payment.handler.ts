import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordSalePaymentCommand } from '../impl/record-sale-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(RecordSalePaymentCommand)
export class RecordSalePaymentHandler extends BaseCommandHandler<RecordSalePaymentCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordSalePaymentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      if (!payload?.saleId || !payload?.amount || payload.amount <= 0) {
        return {
          status: 'error',
          traceId,
          message: 'saleId and a positive amount are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload.method) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const sale = await prisma.sale.findUnique({ where: { id: payload.saleId } });
      if (!sale || sale.tenantId !== tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale not found for this tenant',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }
      if (sale.commercialStatus === 'DRAFT' || sale.commercialStatus === 'CANCELLED') {
        return {
          status: 'error',
          traceId,
          message: 'Payments can only be recorded on confirmed sales',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      // Generate a unique payment number (retry loop on unique clash).
      const date = payload.paidAt ? new Date(payload.paidAt) : new Date();
      const year = date.getFullYear();
      const prefix = `PAY-${year}-`;
      let payment: any = null;
      for (let attempt = 0; attempt < 10 && !payment; attempt++) {
        const last = await prisma.salePayment.findFirst({
          where: { paymentNumber: { startsWith: prefix } },
          orderBy: { paymentNumber: 'desc' },
          select: { paymentNumber: true },
        });
        let nextNumber = 1;
        if (last) {
          const parsed = parseInt(String(last.paymentNumber).split('-')[2] || '0', 10);
          if (!Number.isNaN(parsed)) nextNumber = parsed + 1;
        }
        const paymentNumber = `${prefix}${String(nextNumber).padStart(6, '0')}`;
        try {
          payment = await prisma.salePayment.create({
            data: {
              saleId: sale.id,
              paymentNumber,
              amount: Number(payload.amount),
              currency: payload.currency || sale.currency || 'RWF',
              exchangeRate: payload.exchangeRate || 1.0,
              method: payload.method,
              reference: payload.reference || null,
              accountId: payload.accountId || null,
              accountName: payload.accountName || null,
              paidById: createdById,
              paidAt: date,
              notes: payload.notes || null,
            },
          });
        } catch (createErr: any) {
          if (createErr?.code === 'P2002') continue;
          throw createErr;
        }
      }

      if (!payment) {
        return {
          status: 'error',
          traceId,
          message: 'Unable to generate a unique payment number',
          errorCode: ErrorCode.INTERNAL_ERROR,
        };
      }

      // Recompute the sale's paid state from ALL recorded payments (never mutate history).
      const payments = await prisma.salePayment.findMany({ where: { saleId: sale.id } });
      const amountPaid = payments.reduce((s, p) => s + p.amount, 0);
      const amountDue = Math.max(0, sale.grandTotal - amountPaid);
      let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' = 'UNPAID';
      if (amountPaid <= 0) paymentStatus = 'UNPAID';
      else if (amountPaid >= sale.grandTotal) paymentStatus = 'PAID';
      else paymentStatus = 'PARTIALLY_PAID';

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: { amountPaid, amountDue, paymentStatus },
      });

      // Credit sales create a customer receivable entry.
      if (payload.method === 'CREDIT' && sale.customerId) {
        const lastReceivable = await prisma.customerReceivable.findFirst({
          where: { customerId: sale.customerId },
          orderBy: { createdAt: 'desc' },
        });
        const balance = (lastReceivable?.balance || 0) + Number(payload.amount);
        await prisma.customerReceivable.create({
          data: {
            tenantId,
            shopId: sale.shopId,
            customerId: sale.customerId,
            saleId: sale.id,
            date,
            debit: Number(payload.amount),
            credit: 0,
            balance,
            reference: payment.paymentNumber || null,
            createdById: createdById,
          },
        });
      }

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'PAYMENT_RECEIVED',
          eventData: JSON.stringify({
            paymentNumber: payment.paymentNumber,
            amount: payment.amount,
            method: payment.method,
            paymentStatus,
            amountPaid,
            amountDue,
            recordedBy: userName,
          }),
          userId: createdById,
          userName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId: sale.shopId,
          userId: createdById,
          action: 'RecordSalePayment',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({ paymentNumber: payment.paymentNumber, amount: payment.amount, method: payment.method }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SalePaymentRecorded',
          aggregateId: payment.id,
          aggregateType: 'SalePayment',
          tenantId,
          shopId: sale.shopId,
          payload: {
            paymentId: payment.id,
            paymentNumber: payment.paymentNumber,
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            amount: payment.amount,
            method: payment.method,
            reference: payment.reference || null,
            accountId: payment.accountId || null,
            paidAt: date.toISOString(),
            paymentStatus,
            amountPaid,
            amountDue,
            recordedBy: createdById,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.payment-recorded',
      );

      return {
        status: 'success',
        traceId,
        data: { payment, sale: updated },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record sale payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}