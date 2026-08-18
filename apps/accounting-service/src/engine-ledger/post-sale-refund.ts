import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction } from '../financial-transaction/serialize.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import {
  ACCOUNT_COGS,
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_INVENTORY,
  ACCOUNT_SALES_REVENUE,
} from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface PostSaleRefundPayload {
  saleId: string;
  kind: 'PHYSICAL' | 'GOODWILL';
  refundMinor: number | string;
  cogsMinor?: number | string;
  reason: string;
  occurredOn: string;
  idempotencyKey: string;
  description?: string;
}

/**
 * Reverse sale economics without mutating posted ConfirmSale rows.
 * Revenue reverse is a CORRECTION of SALE_REVENUE with opposite journal sides
 * (Dr 4000 / Cr 1200). Physical returns also reverse COGS (Dr 1300 / Cr 5000).
 * Obligation shrinks by min(refund, outstanding) — unpaid relief only.
 */
export async function postSaleRefund(
  payload: PostSaleRefundPayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const saleId = requireNonEmptyString(payload?.saleId, 80);
  const kind = payload?.kind;
  const reason = requireNonEmptyString(payload?.reason, 500);
  const idempotencyKey = requireNonEmptyString(payload?.idempotencyKey, 120);
  const refundMinor = parseAmountMinor(payload?.refundMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);

  if (!saleId || !reason || !idempotencyKey || refundMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'saleId, reason, idempotencyKey, positive refundMinor, and occurredOn are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }
  if (kind !== 'PHYSICAL' && kind !== 'GOODWILL') {
    return {
      status: 'error',
      traceId,
      message: 'kind must be PHYSICAL or GOODWILL',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  let cogsMinor = 0n;
  if (kind === 'PHYSICAL' && payload?.cogsMinor !== undefined && payload?.cogsMinor !== null && payload?.cogsMinor !== '' && Number(payload.cogsMinor) !== 0) {
    const parsed = parseAmountMinor(payload.cogsMinor);
    if (parsed === null) {
      return {
        status: 'error',
        traceId,
        message: 'cogsMinor must be a positive integer (RWF cents) when provided',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }
    cogsMinor = parsed;
  }

  const description = payload?.description || `Refund ${saleId}`;

  try {
    await ensureEngineChart(tenantId, shopId);

    const result = await prisma.$transaction(async (tx) => {
      const revenueOrigin = await tx.financialTransaction.findFirst({
        where: { tenantId, shopId, type: 'SALE_REVENUE', sourceId: saleId },
      });
      if (!revenueOrigin) {
        throw Object.assign(new Error('Original SALE_REVENUE not found for this sale'), {
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        });
      }

      const priorRevenueRefunds = await tx.financialTransaction.findMany({
        where: {
          tenantId,
          shopId,
          type: 'CORRECTION',
          sourceCommand: 'IssueRefund',
          sourceId: saleId,
          originalTransactionId: revenueOrigin.id,
        },
      });
      const alreadyRefunded = priorRevenueRefunds
        .filter((row: { idempotencyKey: string }) => row.idempotencyKey !== `IssueRefund:REVENUE:${saleId}:${idempotencyKey}`)
        .reduce((sum: bigint, row: { amountMinor: bigint }) => sum + row.amountMinor, 0n);
      if (alreadyRefunded + refundMinor > revenueOrigin.amountMinor) {
        throw Object.assign(new Error('Refund exceeds remaining sale revenue'), {
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        });
      }

      let cogsOrigin: { id: string; amountMinor: bigint } | null = null;
      if (cogsMinor > 0n) {
        cogsOrigin = await tx.financialTransaction.findFirst({
          where: { tenantId, shopId, type: 'SALE_COGS', sourceId: saleId },
        });
        if (!cogsOrigin) {
          throw Object.assign(new Error('Original SALE_COGS not found for this physical return'), {
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
          });
        }
        const priorCogs = await tx.financialTransaction.findMany({
          where: {
            tenantId,
            shopId,
            type: 'CORRECTION',
            sourceCommand: 'IssueRefund',
            sourceId: saleId,
            originalTransactionId: cogsOrigin.id,
          },
        });
        const alreadyCogs = priorCogs
          .filter((row: { idempotencyKey: string }) => row.idempotencyKey !== `IssueRefund:COGS:${saleId}:${idempotencyKey}`)
          .reduce((sum: bigint, row: { amountMinor: bigint }) => sum + row.amountMinor, 0n);
        if (alreadyCogs + cogsMinor > cogsOrigin.amountMinor) {
          throw Object.assign(new Error('Returned COGS exceeds original sale COGS'), {
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
          });
        }
      }

      const revenueWritten = await writeFinancialTransaction(
        tx,
        {
          type: 'CORRECTION',
          occurredOn: payload.occurredOn,
          amountMinor: refundMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'sales',
          sourceCommand: 'IssueRefund',
          sourceId: saleId,
          idempotencyKey: `IssueRefund:REVENUE:${saleId}:${idempotencyKey}`,
          description: `${description} · revenue reverse`,
          reason,
          originalTransactionId: revenueOrigin.id,
          metadata: { saleId, kind, leg: 'REVENUE' },
        },
        context,
      );
      if (revenueWritten.ok === false) {
        throw Object.assign(new Error(revenueWritten.response.message), { response: revenueWritten.response });
      }

      const revenueJournal = await postEngineJournal(tx, {
        tenantId,
        shopId,
        financialTransactionId: revenueWritten.row.id,
        description: `${description} · revenue reverse`,
        postedBy: userId,
        occurredOn,
        lines: [
          { accountCode: ACCOUNT_SALES_REVENUE, side: 'DEBIT', amountMinor: refundMinor },
          { accountCode: ACCOUNT_CUSTOMER_RECEIVABLE, side: 'CREDIT', amountMinor: refundMinor },
        ],
      });

      let cogsWritten: { ok: true; row: any; replay: boolean } | null = null;
      let cogsJournal: any = null;
      if (cogsMinor > 0n && cogsOrigin) {
        const written = await writeFinancialTransaction(
          tx,
          {
            type: 'CORRECTION',
            occurredOn: payload.occurredOn,
            amountMinor: cogsMinor.toString(),
            currency: 'RWF',
            sourceDomain: 'sales',
            sourceCommand: 'IssueRefund',
            sourceId: saleId,
            idempotencyKey: `IssueRefund:COGS:${saleId}:${idempotencyKey}`,
            description: `${description} · COGS reverse`,
            reason,
            originalTransactionId: cogsOrigin.id,
            metadata: { saleId, kind, leg: 'COGS' },
          },
          context,
        );
        if (written.ok === false) {
          throw Object.assign(new Error(written.response.message), { response: written.response });
        }
        cogsWritten = written;
        cogsJournal = await postEngineJournal(tx, {
          tenantId,
          shopId,
          financialTransactionId: written.row.id,
          description: `${description} · COGS reverse`,
          postedBy: userId,
          occurredOn,
          lines: [
            { accountCode: ACCOUNT_INVENTORY, side: 'DEBIT', amountMinor: cogsMinor },
            { accountCode: ACCOUNT_COGS, side: 'CREDIT', amountMinor: cogsMinor },
          ],
        });
      }

      const obligation = await tx.obligation.findFirst({
        where: { financialTransactionId: revenueOrigin.id, kind: 'CUSTOMER_RECEIVABLE' },
      });
      if (!obligation) {
        throw Object.assign(new Error('Customer receivable obligation not found'), {
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        });
      }

      const obligationRelief = refundMinor < obligation.outstandingMinor ? refundMinor : obligation.outstandingMinor;
      let nextObligation = obligation;
      if (!revenueWritten.replay && obligationRelief > 0n) {
        const next = obligation.outstandingMinor - obligationRelief;
        nextObligation = await tx.obligation.update({
          where: { id: obligation.id },
          data: { outstandingMinor: next, status: next === 0n ? 'SETTLED' : 'OPEN' },
        });
      }

      const profitDelta = refundMinor - cogsMinor;
      if (!revenueWritten.replay && profitDelta !== 0n) {
        const allocation = await tx.profitAllocation.findUnique({
          where: { tenantId_shopId: { tenantId, shopId } },
        });
        const earned = allocation?.earnedMinor ?? 0n;
        const transferred = allocation?.transferredMinor ?? 0n;
        const nextEarned = earned - profitDelta;
        if (transferred > 0n && nextEarned < transferred) {
          throw Object.assign(
            new Error('Refund would reduce earned profit below already-transferred profit'),
            { errorCode: ErrorCode.BUSINESS_RULE_VIOLATION },
          );
        }
        await tx.profitAllocation.upsert({
          where: { tenantId_shopId: { tenantId, shopId } },
          create: { tenantId, shopId, earnedMinor: nextEarned, transferredMinor: 0n },
          update: { earnedMinor: { increment: -profitDelta } },
        });
      }

      const remainingRevenueMinor = revenueOrigin.amountMinor - alreadyRefunded - refundMinor;
      const refundedToDateMinor = alreadyRefunded + refundMinor;

      return {
        revenueWritten,
        revenueJournal,
        cogsWritten,
        cogsJournal,
        obligation: nextObligation,
        profitDelta,
        remainingRevenueMinor: remainingRevenueMinor < 0n ? 0n : remainingRevenueMinor,
        refundedToDateMinor,
        originalRevenueId: revenueOrigin.id,
        originalRevenueAmount: revenueOrigin.amountMinor,
      };
    });

    const allocation = await prisma.profitAllocation.findUnique({
      where: { tenantId_shopId: { tenantId, shopId } },
    });

    return {
      status: 'success',
      traceId,
      data: {
        saleId,
        kind,
        refundMinor: refundMinor.toString(),
        cogsReversedMinor: cogsMinor.toString(),
        profitReversedMinor: result.profitDelta.toString(),
        remainingRevenueMinor: result.remainingRevenueMinor.toString(),
        refundedToDateMinor: result.refundedToDateMinor.toString(),
        financialTransaction: {
          ...serializeFinancialTransaction(result.revenueWritten.row),
          existingIfReplay: result.revenueWritten.replay,
        },
        cogsFinancialTransaction: result.cogsWritten
          ? {
              ...serializeFinancialTransaction(result.cogsWritten.row),
              existingIfReplay: result.cogsWritten.replay,
            }
          : null,
        revenueJournal: serializeJournal(result.revenueJournal),
        cogsJournal: result.cogsJournal ? serializeJournal(result.cogsJournal) : null,
        receivable: {
          id: result.obligation.id,
          outstandingMinor: result.obligation.outstandingMinor.toString(),
        },
        originalRevenueTransactionId: result.originalRevenueId,
        originalRevenueMinor: result.originalRevenueAmount.toString(),
        profitAllocation: {
          earnedMinor: (allocation?.earnedMinor ?? 0n).toString(),
          transferredMinor: (allocation?.transferredMinor ?? 0n).toString(),
        },
      },
    };
  } catch (error: any) {
    if (error?.response) return error.response;
    if (error instanceof UnbalancedJournalError) {
      return { status: 'error', traceId, message: error.message, errorCode: ErrorCode.BUSINESS_RULE_VIOLATION };
    }
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to post sale refund books',
      errorCode: error?.errorCode || error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
