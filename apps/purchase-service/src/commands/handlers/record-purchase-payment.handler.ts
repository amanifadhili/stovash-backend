import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordPurchasePaymentCommand } from '../impl/record-purchase-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { postPurchasePayableBooks, readPayableProjection } from '../../common/post-purchase-finance.js';
import { createHash } from 'node:crypto';
import {
  francsToMinor,
  isoDay,
  NON_TILL_METHODS,
  operationalKindForMethod,
  sendFinanceCommand,
} from '../../common/commercial-finance.js';

@CommandHandler(RecordPurchasePaymentCommand)
export class RecordPurchasePaymentHandler extends BaseCommandHandler<RecordPurchasePaymentCommand> {
  constructor(
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
    @Inject('TREASURY_SERVICE') private readonly treasuryClient: ClientProxy,
  ) {
    super();
  }

  async execute(command: RecordPurchasePaymentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const {
        purchaseId,
        paymentNumber,
        idempotencyKey,
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

      if (NON_TILL_METHODS.has(String(paymentMethod).toUpperCase())) {
        return {
          status: 'error',
          traceId,
          message: 'CREDIT is not a treasury method. Leave the unpaid remainder as supplier payable.',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      const fromKind = operationalKindForMethod(paymentMethod);
      if (!fromKind && !accountId) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method must map to an Operational physical account (Cash, MoMo, or Bank)',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const purchase = await prisma.purchase.findFirst({ where: { id: purchaseId, tenantId, shopId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }

      if (purchase.commercialStatus === 'CANCELLED') {
        return { status: 'error', traceId, message: 'Cannot record payment for cancelled purchase', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const financeContext = { tenantId, shopId: purchase.shopId, userId: paidById, traceId };
      let payableBooks: ICommandResponse<any> | null = null;
      if (purchase.commercialStatus === 'CONFIRMED' && Number(purchase.grandTotal) > 0) {
        payableBooks = await postPurchasePayableBooks(this.accountingClient, purchase, financeContext);
        if (payableBooks.status === 'error') return payableBooks;
      }

      // Phase 4: idempotency + remaining-due invariants.
      // - FE supplies a stable `idempotencyKey`; we deterministically derive `paymentNumber`.
      // - Replays (same paymentNumber) do not double-write history/audit.
      const stableIdempotencyKey = idempotencyKey ? String(idempotencyKey) : undefined;
      const derivedPaymentNumber = stableIdempotencyKey
        ? `PAY-${purchaseId}-${createHash('sha256').update(stableIdempotencyKey).digest('hex').slice(0, 12)}`
        : paymentNumber;

      if (!derivedPaymentNumber) {
        return {
          status: 'error',
          traceId,
          message: 'paymentNumber is required (or provide idempotencyKey)',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const existing = await prisma.purchasePayment.findFirst({
        where: { purchaseId, paymentNumber: derivedPaymentNumber },
      });

      // DB authority rule:
      // - CONFIRMED purchases project from AP obligation (engine books),
      // - DRAFT fallback uses local arithmetic (no AP yet).
      const payableMinorBefore = Number(payableBooks?.data?.payable?.outstandingMinor ?? NaN);
      const amountOutstandingFromAp = Number.isFinite(payableMinorBefore) ? payableMinorBefore / 100 : null;
      const totalPaidBefore = await prisma.purchasePayment.aggregate({
        where: { purchaseId },
        _sum: { amount: true },
      });
      const amountPaidBefore = totalPaidBefore._sum.amount || 0;
      const amountOutstandingBefore =
        amountOutstandingFromAp !== null
          ? amountOutstandingFromAp
          : purchase.grandTotal - amountPaidBefore;

      const didCreatePayment = !existing;
      const payment = didCreatePayment
        ? await prisma.purchasePayment.create({
            data: {
              purchaseId,
              paymentNumber: derivedPaymentNumber,
              amount,
              currency,
              exchangeRate,
              paymentMethod: String(paymentMethod).toUpperCase() === 'MOMO' ? 'MOBILE_MONEY' : paymentMethod,
              accountId,
              accountName,
              reference,
              paidById,
              paidAt: paidAt ? new Date(paidAt) : new Date(),
              notes,
              accountingRef,
            },
          })
        : existing;

      if (didCreatePayment) {
        if (amount > amountOutstandingBefore + 0.0001) {
          await this.compensatePayment(purchaseId, payment.id, purchase.grandTotal);
          return {
            status: 'error',
            traceId,
            message: 'Payment amount cannot exceed remaining supplier payable',
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
          };
        }
      }

      const totalPaid = await prisma.purchasePayment.aggregate({
        where: { purchaseId },
        _sum: { amount: true },
      });
      const amountPaid = totalPaid._sum.amount || 0;
      const amountOutstanding =
        amountOutstandingFromAp !== null
          ? Math.max(0, didCreatePayment ? amountOutstandingFromAp - Number(payment.amount) : amountOutstandingFromAp)
          : purchase.grandTotal - amountPaid;

      let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' = 'UNPAID';
      if (amountPaid === 0) paymentStatus = 'UNPAID';
      else if (amountPaid >= purchase.grandTotal) paymentStatus = 'PAID';
      else paymentStatus = 'PARTIALLY_PAID';

      await prisma.purchase.update({
        where: { id: purchaseId },
        data: { amountPaid, amountOutstanding, paymentStatus },
      });

      const amountMinor = francsToMinor(payment.amount);
      if (!amountMinor) {
        if (didCreatePayment) {
          await this.compensatePayment(purchaseId, payment.id, purchase.grandTotal);
        }
        return {
          status: 'error',
          traceId,
          message: 'Payment amount must convert to positive RWF cents',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const movementIdempotencyKey = stableIdempotencyKey || derivedPaymentNumber || payment.id;
      const movement = await sendFinanceCommand(
        this.treasuryClient,
        'CreateTreasuryMovement',
        {
          movementType: 'PURCHASE_PAYMENT',
          amountMinor,
          occurredOn: isoDay(payment.paidAt),
          fromPhysicalId: accountId || undefined,
          fromKind,
          obligationSourceId: purchase.id,
          idempotencyKey: movementIdempotencyKey,
          notes: reference || undefined,
        },
        financeContext,
      );
      if (movement.status === 'error') {
        if (didCreatePayment) {
          await this.compensatePayment(purchaseId, payment.id, purchase.grandTotal);
        }
        return movement;
      }

      // Phase 6 authority: project AP outstanding from engine Obligation after cash moved.
      const postProjection = await readPayableProjection(this.accountingClient, purchase, financeContext);
      if (postProjection) {
        await prisma.purchase.update({
          where: { id: purchaseId },
          data: {
            amountPaid: postProjection.amountPaid,
            amountOutstanding: postProjection.amountOutstanding,
            paymentStatus: postProjection.paymentStatus,
          },
        });
      }

      const financeRefs = {
        treasuryMovementId: movement.data?.id || null,
        treasuryFinancialTransactionId: movement.data?.financialTransactionId || null,
        treasuryJournalId: movement.data?.journalId || null,
        purchasePayableFinancialTransactionId: payableBooks?.data?.financialTransaction?.id || null,
      };
      const accountingRefValue = JSON.stringify(financeRefs);
      await prisma.purchasePayment.update({
        where: { id: payment.id },
        data: { accountingRef: accountingRefValue },
      });

      if (didCreatePayment) {
        await prisma.purchaseHistory.create({
          data: {
            purchaseId,
            eventType: 'PAYMENT_RECEIVED',
            eventData: JSON.stringify({
              paymentNumber: derivedPaymentNumber,
              amount: payment.amount,
              method: paymentMethod,
              paidBy: paidByName,
            }),
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
            details: JSON.stringify({ paymentNumber: derivedPaymentNumber, amount: payment.amount, method: paymentMethod }),
          },
        });
      }

      return {
        status: 'success',
        traceId,
        data: {
          ...payment,
          accountingRef: accountingRefValue,
          financeRefs,
          treasuryMovement: movement.data,
          idempotencyKey: stableIdempotencyKey,
          projectionSource: postProjection ? 'engine_obligation' : 'purchase_payments_fallback',
          amountPaid: postProjection?.amountPaid ?? amountPaid,
          amountOutstanding: postProjection?.amountOutstanding ?? amountOutstanding,
          paymentStatus: postProjection?.paymentStatus ?? paymentStatus,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async compensatePayment(purchaseId: string, paymentId: string, grandTotal: number) {
    await prisma.purchasePayment.delete({ where: { id: paymentId } }).catch(() => undefined);
    const totalPaid = await prisma.purchasePayment.aggregate({
      where: { purchaseId },
      _sum: { amount: true },
    });
    const amountPaid = totalPaid._sum.amount || 0;
    const amountOutstanding = grandTotal - amountPaid;
    let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' = 'UNPAID';
    if (amountPaid === 0) paymentStatus = 'UNPAID';
    else if (amountPaid >= grandTotal) paymentStatus = 'PAID';
    else paymentStatus = 'PARTIALLY_PAID';
    await prisma.purchase.update({
      where: { id: purchaseId },
      data: { amountPaid, amountOutstanding, paymentStatus },
    });
  }
}
