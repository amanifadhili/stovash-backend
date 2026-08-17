import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordSalePaymentCommand } from '../impl/record-sale-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import {
  francsToMinor,
  isoDay,
  NON_TILL_METHODS,
  operationalKindForMethod,
  sendFinanceCommand,
} from '../../common/commercial-finance.js';

@CommandHandler(RecordSalePaymentCommand)
export class RecordSalePaymentHandler extends BaseCommandHandler<RecordSalePaymentCommand> {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
    @Inject('TREASURY_SERVICE') private readonly treasuryClient: ClientProxy,
  ) {
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
      if (NON_TILL_METHODS.has(String(payload.method).toUpperCase())) {
        return {
          status: 'error',
          traceId,
          message: 'CREDIT is not a till method. Leave the unpaid remainder as receivable.',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      const toKind = operationalKindForMethod(payload.method);
      if (!toKind && !payload.accountId) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method must map to an Operational physical account (Cash, MoMo, or Bank)',
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

      const amountMinor = francsToMinor(payment.amount);
      if (!amountMinor) {
        await this.compensatePayment(sale.id, payment.id);
        return {
          status: 'error',
          traceId,
          message: 'Payment amount must convert to positive RWF cents',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const movement = await sendFinanceCommand(
        this.treasuryClient,
        'CreateTreasuryMovement',
        {
          movementType: 'SALE_PAYMENT',
          amountMinor,
          occurredOn: isoDay(date),
          toPhysicalId: payload.accountId || undefined,
          toKind,
          obligationSourceId: sale.id,
          idempotencyKey: payment.id,
          notes: payload.reference || undefined,
        },
        { tenantId, shopId: sale.shopId, userId: createdById, traceId },
      );
      if (movement.status === 'error') {
        await this.compensatePayment(sale.id, payment.id);
        return movement;
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
        data: { payment, sale: updated, treasuryMovement: movement.data },
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

  private async compensatePayment(saleId: string, paymentId: string) {
    await prisma.salePayment.delete({ where: { id: paymentId } }).catch(() => undefined);
    const sale = await prisma.sale.findUnique({ where: { id: saleId } });
    if (!sale) return;
    const payments = await prisma.salePayment.findMany({ where: { saleId } });
    const amountPaid = payments.reduce((s, p) => s + p.amount, 0);
    const amountDue = Math.max(0, sale.grandTotal - amountPaid);
    let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' = 'UNPAID';
    if (amountPaid <= 0) paymentStatus = 'UNPAID';
    else if (amountPaid >= sale.grandTotal) paymentStatus = 'PAID';
    else paymentStatus = 'PARTIALLY_PAID';
    await prisma.sale.update({ where: { id: saleId }, data: { amountPaid, amountDue, paymentStatus } });
  }
}