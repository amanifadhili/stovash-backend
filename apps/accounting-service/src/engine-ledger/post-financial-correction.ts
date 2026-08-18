import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction, parseAmountMinor, parseOccurredOn, requireNonEmptyString, toIsoDate } from '../financial-transaction/serialize.js';
import { FinancialTransactionType } from '../financial-transaction/types.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface PostFinancialCorrectionPayload {
  originalTransactionId: string;
  kind: 'CORRECTION' | 'REVERSAL';
  amountMinor?: number | string;
  reason: string;
  occurredOn?: string;
  idempotencyKey?: string;
  description?: string;
}

export async function postFinancialCorrection(
  payload: PostFinancialCorrectionPayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const kind = payload?.kind;
  if (kind !== 'CORRECTION' && kind !== 'REVERSAL') {
    return {
      status: 'error',
      traceId,
      message: 'kind must be CORRECTION or REVERSAL',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const originalId = requireNonEmptyString(payload?.originalTransactionId, 64);
  const reason = requireNonEmptyString(payload?.reason, 500);
  if (!originalId || !reason) {
    return {
      status: 'error',
      traceId,
      message: 'originalTransactionId and reason are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  try {
    await ensureEngineChart(tenantId, shopId);

    const original = await prisma.financialTransaction.findFirst({
      where: { id: originalId, tenantId, shopId },
    });
    if (!original) {
      return { status: 'error', traceId, message: 'Original financial transaction not found', errorCode: ErrorCode.NOT_FOUND };
    }

    const amountMinor =
      kind === 'REVERSAL' ? original.amountMinor : parseAmountMinor(payload?.amountMinor);
    if (amountMinor === null) {
      return {
        status: 'error',
        traceId,
        message: 'amountMinor must be a positive integer (RWF cents) for a CORRECTION',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }

    const occurredOnIso = payload?.occurredOn?.trim() || toIsoDate(original.occurredOn);
    const occurredOn = parseOccurredOn(occurredOnIso);
    if (!occurredOn) {
      return {
        status: 'error',
        traceId,
        message: 'occurredOn must be a calendar date (YYYY-MM-DD)',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }

    const sourceId = payload?.idempotencyKey || randomUUID();
    const idempotencyKey = `PostFinancialCorrection:${kind}:${sourceId}`;
    const description =
      payload?.description ||
      (kind === 'REVERSAL'
        ? `Reversal of ${original.type} ${original.id}`
        : `Correction of ${original.type} ${original.id}`);

    const originalJournal = await prisma.postedJournal.findUnique({
      where: { financialTransactionId: original.id },
      include: { lines: { include: { account: true } } },
    });

    const result = await prisma.$transaction(async (tx) => {
      const written = await writeFinancialTransaction(
        tx,
        {
          type: kind,
          occurredOn: occurredOnIso,
          amountMinor: amountMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'accounting',
          sourceCommand: 'PostFinancialCorrection',
          sourceId,
          idempotencyKey,
          description,
          reason,
          originalTransactionId: original.id,
          metadata: { originalType: original.type, originalAmountMinor: original.amountMinor.toString() },
        },
        context,
      );
      if (written.ok === false) {
        throw Object.assign(new Error(written.response.message), { response: written.response });
      }

      let journal = null;
      if (!written.replay && originalJournal) {
        const lines = correctionLines(kind, original.amountMinor, amountMinor, originalJournal.lines);
        journal = await postEngineJournal(tx, {
          tenantId,
          shopId,
          financialTransactionId: written.row.id,
          description,
          postedBy: userId,
          occurredOn,
          lines,
        });
      } else if (written.replay) {
        journal = await tx.postedJournal.findUnique({
          where: { financialTransactionId: written.row.id },
          include: { lines: { include: { account: true } } },
        });
      }

      return { written, journal, original };
    });

    return {
      status: 'success',
      traceId,
      data: {
        financialTransaction: {
          ...serializeFinancialTransaction(result.written.row),
          existingIfReplay: result.written.replay,
        },
        original: serializeFinancialTransaction(result.original),
        journal: result.journal ? serializeJournal(result.journal) : null,
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
      message: error?.message || 'Failed to post financial correction',
      errorCode: error?.errorCode || error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}

function correctionLines(
  kind: 'CORRECTION' | 'REVERSAL',
  originalAmount: bigint,
  amountMinor: bigint,
  lines: Array<{ side: string; amountMinor: bigint; account: { code: string } }>,
): Array<{ accountCode: string; side: 'DEBIT' | 'CREDIT'; amountMinor: bigint }> {
  return lines.map((line) => {
    const scaled =
      kind === 'REVERSAL' || originalAmount === 0n
        ? line.amountMinor
        : (line.amountMinor * amountMinor) / originalAmount;
    const side = kind === 'REVERSAL' ? (line.side === 'DEBIT' ? 'CREDIT' : 'DEBIT') : (line.side as 'DEBIT' | 'CREDIT');
    return { accountCode: line.account.code, side, amountMinor: scaled };
  });
}

export type { FinancialTransactionType };
