import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordSalePaymentCommand } from '../impl/record-sale-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import { createHash } from 'node:crypto';
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
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
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

      const date = payload.paidAt ? new Date(payload.paidAt) : new Date();
      const year = date.getFullYear();
      const prefix = `PAY-${year}-`;
      const amount = Number(payload.amount);

      const idempotencyKey = payload.idempotencyKey || null;
      const keyForNumber = idempotencyKey ? `${sale.id}:${idempotencyKey}` : null;
      const stablePaymentNumber = keyForNumber
        ? (() => {
            // Stable 6-digit suffix from key; keeps paymentNumber formatting for existing UI/tests.
            const hex = createHash('sha256').update(keyForNumber).digest('hex');
            const seq = parseInt(hex.slice(-6), 16) % 1_000_000;
            return `${prefix}${String(seq).padStart(6, '0')}`;
          })()
        : null;

      let payment: any = null;
      let didCreatePayment = false;

      // Phase 3: enforce amount <= remaining due for new payment rows.
      // For idempotent retries: if the payment row already exists, we allow the request to replay.
      if (stablePaymentNumber) {
        payment = await prisma.salePayment.findFirst({
          where: { saleId: sale.id, paymentNumber: stablePaymentNumber },
        });
      }

      if (!payment) {
        const preProjection = await this.readReceivableProjection(sale, { tenantId, shopId: sale.shopId, userId: createdById, traceId });
        const existingPayments = await prisma.salePayment.findMany({
          where: { saleId: sale.id },
          select: { amount: true },
        });
        const amountPaid = existingPayments.reduce((s, p) => s + p.amount, 0);
        const localAmountDue = Math.max(0, sale.grandTotal - amountPaid);
        const amountDue = preProjection?.amountDue ?? localAmountDue;

        if (amount > amountDue + 0.0001) {
          return {
            status: 'error',
            traceId,
            message: 'Payment amount exceeds remaining due',
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
          };
        }

        if (stablePaymentNumber) {
          try {
            payment = await prisma.salePayment.create({
              data: {
                saleId: sale.id,
                paymentNumber: stablePaymentNumber,
                amount,
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
            didCreatePayment = true;
          } catch (createErr: any) {
            // Unique clash during retry: treat as replay if the row exists.
            if (createErr?.code === 'P2002') {
              payment = await prisma.salePayment.findFirst({
                where: { saleId: sale.id, paymentNumber: stablePaymentNumber },
              });
              didCreatePayment = false;
            } else {
              throw createErr;
            }
          }
        } else {
          // Non-idempotent legacy behavior: generate a unique payment number.
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
                  amount,
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
              didCreatePayment = true;
            } catch (createErr: any) {
              if (createErr?.code === 'P2002') continue;
              throw createErr;
            }
          }
        }
      }

      if (!payment) {
        return {
          status: 'error',
          traceId,
          message: 'Unable to create (or replay) the sale payment',
          errorCode: ErrorCode.INTERNAL_ERROR,
        };
      }

      // Recompute the sale's paid state from ALL recorded payments (never mutate history).
      const payments = await prisma.salePayment.findMany({ where: { saleId: sale.id } });
      const localAmountPaid = payments.reduce((s, p) => s + p.amount, 0);
      const localAmountDue = Math.max(0, sale.grandTotal - localAmountPaid);
      let amountPaid = localAmountPaid;
      let amountDue = localAmountDue;
      let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' =
        localAmountPaid <= 0 ? 'UNPAID' : localAmountPaid >= sale.grandTotal ? 'PAID' : 'PARTIALLY_PAID';

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: { amountPaid, amountDue, paymentStatus },
      });

      const amountMinor = francsToMinor(payment.amount);
      if (!amountMinor) {
        if (didCreatePayment) {
          await this.compensatePayment(sale.id, payment.id);
        }
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
          idempotencyKey: idempotencyKey || payment.id,
          notes: payload.reference || undefined,
        },
        { tenantId, shopId: sale.shopId, userId: createdById, traceId },
      );
      if (movement.status === 'error') {
        if (didCreatePayment) {
          await this.compensatePayment(sale.id, payment.id);
        }
        return movement;
      }

      const financeRefs = {
        treasuryMovementId: movement.data?.id || null,
        treasuryFinancialTransactionId: movement.data?.financialTransactionId || null,
        treasuryJournalId: movement.data?.journalId || null,
      };
      const accountingRefValue = JSON.stringify(financeRefs);
      await prisma.salePayment.update({
        where: { id: payment.id },
        data: { accountingRef: accountingRefValue },
      });

      // Phase 6 authority: project Sale due/paid from engine Obligation when available.
      const postProjection = await this.readReceivableProjection(sale, {
        tenantId,
        shopId: sale.shopId,
        userId: createdById,
        traceId,
      });
      if (postProjection) {
        amountDue = postProjection.amountDue;
        amountPaid = postProjection.amountPaid;
        paymentStatus = postProjection.paymentStatus;
        await prisma.sale.update({
          where: { id: sale.id },
          data: { amountPaid, amountDue, paymentStatus },
        });
      }

      if (didCreatePayment) {
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
              financeRefs,
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
      }

      return {
        status: 'success',
        traceId,
        data: {
          payment: { ...payment, accountingRef: accountingRefValue },
          sale: {
            ...updated,
            amountPaid,
            amountDue,
            paymentStatus,
          },
          treasuryMovement: movement.data,
          financeRefs,
          projectionSource: postProjection ? 'engine_obligation' : 'sale_payments_fallback',
        },
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

  private async readReceivableProjection(
    sale: { id: string; grandTotal: number; shopId: string },
    financeContext: { tenantId: string; shopId: string; userId: string; traceId: string },
  ): Promise<{ amountDue: number; amountPaid: number; paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' } | null> {
    const receivables = await sendFinanceCommand(
      this.accountingClient,
      'GetReceivables',
      { sourceId: sale.id, kind: 'CUSTOMER_RECEIVABLE' },
      financeContext,
    );
    if (receivables.status === 'error') return null;
    const row = (receivables.data?.receivables || []).find((r: any) => r.sourceId === sale.id);
    const outstandingMinor = row?.outstandingMinor;
    if (typeof outstandingMinor !== 'string' && typeof outstandingMinor !== 'number') return null;
    const outstandingCents = Number(outstandingMinor);
    if (!Number.isFinite(outstandingCents) || outstandingCents < 0) return null;

    const amountDue = Math.max(0, outstandingCents / 100);
    const amountPaid = Math.max(0, sale.grandTotal - amountDue);
    const paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' =
      amountPaid <= 0 ? 'UNPAID' : amountDue <= 0 ? 'PAID' : 'PARTIALLY_PAID';
    return { amountDue, amountPaid, paymentStatus };
  }
}