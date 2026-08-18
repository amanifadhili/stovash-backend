import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction } from '../financial-transaction/serialize.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import { FINANCIAL_TRANSACTION_TYPE_SET } from '../financial-transaction/types.js';
import {
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_EXTERNAL_LOAN_PAYABLE,
  ACCOUNT_INTEREST_EXPENSE,
  ACCOUNT_OWNER_EQUITY,
  ACCOUNT_PETTY_CASH,
  ACCOUNT_RECON_ADJUSTMENT,
  ACCOUNT_SUPPLIER_PAYABLE,
  ACCOUNT_WORKER_ADVANCE,
  PHYSICAL_KIND_TO_CHART,
} from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface PostTreasuryBooksPayload {
  type: string;
  occurredOn: string;
  amountMinor: number | string;
  fromKind?: string | null;
  toKind?: string | null;
  reconDirection?: 'EXCESS' | 'SHORTAGE';
  idempotencyKey?: string;
  description?: string;
  obligationSourceId?: string;
  originalType?: string;
  originalTransactionId?: string;
  reason?: string;
  expenseAccountCode?: string;
  partyName?: string;
  obligationId?: string;
}

function chartOf(kind?: string | null): string | null {
  if (!kind) return null;
  return PHYSICAL_KIND_TO_CHART[kind] ?? null;
}

function journalLines(
  type: string,
  amount: bigint,
  fromKind?: string | null,
  toKind?: string | null,
  reconDirection?: 'EXCESS' | 'SHORTAGE',
  expenseAccountCode?: string | null,
): Array<{ accountCode: string; side: 'DEBIT' | 'CREDIT'; amountMinor: bigint }> | { error: string } {
  const fromChart = chartOf(fromKind);
  const toChart = chartOf(toKind);

  if (type === 'OWNER_CAPITAL_IN') {
    if (!toChart) return { error: 'OWNER_CAPITAL_IN requires Capital Bank' };
    return [
      { accountCode: toChart, side: 'DEBIT', amountMinor: amount },
      { accountCode: ACCOUNT_OWNER_EQUITY, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (
    type === 'INTERNAL_TRANSFER' ||
    type === 'INTERNAL_LOAN' ||
    type === 'INTERNAL_LOAN_REPAY' ||
    type === 'CAPITAL_GROWTH' ||
    type === 'PROFIT_TRANSFER' ||
    type === 'GENERAL_EXPENSE_FUNDING'
  ) {
    if (!fromChart || !toChart) return { error: `${type} requires source and destination accounts` };
    return [
      { accountCode: toChart, side: 'DEBIT', amountMinor: amount },
      { accountCode: fromChart, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'EXTERNAL_LOAN') {
    if (!toChart) return { error: 'EXTERNAL_LOAN requires a destination account' };
    return [
      { accountCode: toChart, side: 'DEBIT', amountMinor: amount },
      { accountCode: ACCOUNT_EXTERNAL_LOAN_PAYABLE, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'EXTERNAL_LOAN_REPAY_PRINCIPAL') {
    if (!fromChart) return { error: 'Principal repayment requires a source account' };
    return [
      { accountCode: ACCOUNT_EXTERNAL_LOAN_PAYABLE, side: 'DEBIT', amountMinor: amount },
      { accountCode: fromChart, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'EXTERNAL_LOAN_INTEREST') {
    if (!fromChart) return { error: 'Interest requires a source account' };
    return [
      { accountCode: ACCOUNT_INTEREST_EXPENSE, side: 'DEBIT', amountMinor: amount },
      { accountCode: fromChart, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'RECONCILIATION_ADJUSTMENT') {
    const asset = toChart || fromChart;
    if (!asset) return { error: 'Reconciliation adjustment requires a physical account' };
    if (reconDirection === 'EXCESS') {
      return [
        { accountCode: asset, side: 'DEBIT', amountMinor: amount },
        { accountCode: ACCOUNT_RECON_ADJUSTMENT, side: 'CREDIT', amountMinor: amount },
      ];
    }
    return [
      { accountCode: ACCOUNT_RECON_ADJUSTMENT, side: 'DEBIT', amountMinor: amount },
      { accountCode: asset, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'SALE_PAYMENT' || type === 'CUSTOMER_REPAYMENT') {
    if (!toChart) return { error: `${type} requires an Operational destination account` };
    return [
      { accountCode: toChart, side: 'DEBIT', amountMinor: amount },
      { accountCode: ACCOUNT_CUSTOMER_RECEIVABLE, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'PURCHASE_PAYMENT') {
    if (!fromChart) return { error: 'PURCHASE_PAYMENT requires an Operational source account' };
    return [
      { accountCode: ACCOUNT_SUPPLIER_PAYABLE, side: 'DEBIT', amountMinor: amount },
      { accountCode: fromChart, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'GENERAL_EXPENSE') {
    if (!fromChart) return { error: 'General expense payout requires an Operational source account' };
    if (!expenseAccountCode) return { error: 'General expense payout requires an expense account' };
    return [
      { accountCode: expenseAccountCode, side: 'DEBIT', amountMinor: amount },
      { accountCode: fromChart, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'WORKER_ADVANCE') {
    if (fromKind && fromKind !== 'PETTY_CASH') return { error: 'Worker advance must credit Petty Cash' };
    return [
      { accountCode: ACCOUNT_WORKER_ADVANCE, side: 'DEBIT', amountMinor: amount },
      { accountCode: ACCOUNT_PETTY_CASH, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'WORKER_ADVANCE_REPAY') {
    return [
      { accountCode: ACCOUNT_PETTY_CASH, side: 'DEBIT', amountMinor: amount },
      { accountCode: ACCOUNT_WORKER_ADVANCE, side: 'CREDIT', amountMinor: amount },
    ];
  }

  if (type === 'PETTY_CASH_EXPENSE') {
    if (!expenseAccountCode) return { error: 'Petty expense requires an expense account' };
    return [
      { accountCode: expenseAccountCode, side: 'DEBIT', amountMinor: amount },
      { accountCode: ACCOUNT_PETTY_CASH, side: 'CREDIT', amountMinor: amount },
    ];
  }

  return { error: `No journal template for ${type}` };
}

function booksJournalLines(
  type: string,
  amount: bigint,
  fromKind?: string | null,
  toKind?: string | null,
  reconDirection?: 'EXCESS' | 'SHORTAGE',
  originalType?: string | null,
  expenseAccountCode?: string | null,
): Array<{ accountCode: string; side: 'DEBIT' | 'CREDIT'; amountMinor: bigint }> | { error: string } {
  if (type === 'CORRECTION' || type === 'REVERSAL') {
    const templateType = originalType || type;
    const inner = journalLines(templateType, amount, fromKind, toKind, reconDirection, expenseAccountCode);
    if ('error' in inner) return inner;
    if (type === 'REVERSAL') {
      return inner.map((line) => ({
        ...line,
        side: line.side === 'DEBIT' ? 'CREDIT' : 'DEBIT',
      }));
    }
    return inner;
  }
  return journalLines(type, amount, fromKind, toKind, reconDirection, expenseAccountCode);
}

export async function postTreasuryBooks(
  payload: PostTreasuryBooksPayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const type = requireNonEmptyString(payload?.type, 64);
  if (!type || !FINANCIAL_TRANSACTION_TYPE_SET.has(type)) {
    return {
      status: 'error',
      traceId,
      message: 'Unknown financial transaction type. Generic TRANSFER is not allowed.',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const amountMinor = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (amountMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'amountMinor must be a positive integer (RWF cents) and occurredOn must be YYYY-MM-DD',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const linesOrError = booksJournalLines(
    type,
    amountMinor,
    payload.fromKind,
    payload.toKind,
    payload.reconDirection,
    payload.originalType,
    payload.expenseAccountCode,
  );
  if ('error' in linesOrError) {
    return { status: 'error', traceId, message: linesOrError.error, errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const sourceId = payload?.idempotencyKey || randomUUID();
  const idempotencyKey = `PostTreasuryBooks:${sourceId}`;
  const description = payload?.description || type;

  try {
    await ensureEngineChart(tenantId, shopId);

    const result = await prisma.$transaction(async (tx) => {
      if (type === 'PROFIT_TRANSFER') {
        const allocation = await tx.profitAllocation.findUnique({
          where: { tenantId_shopId: { tenantId, shopId } },
        });
        const earned = allocation?.earnedMinor ?? 0n;
        const transferred = allocation?.transferredMinor ?? 0n;
        if (amountMinor > earned - transferred) {
          throw Object.assign(new Error('Profit transfer exceeds untransferred profit'), {
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
          });
        }
      }

      const written = await writeFinancialTransaction(
        tx,
        {
          type: type as any,
          occurredOn: payload.occurredOn,
          amountMinor: amountMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'treasury',
          sourceCommand: 'CreateTreasuryMovement',
          sourceId,
          idempotencyKey,
          description,
          reason: payload.reason,
          originalTransactionId: payload.originalTransactionId,
          metadata: {
            fromKind: payload.fromKind ?? null,
            toKind: payload.toKind ?? null,
            obligationSourceId: payload.obligationSourceId ?? null,
            originalType: payload.originalType ?? null,
            expenseAccountCode: payload.expenseAccountCode ?? null,
            partyName: payload.partyName ?? null,
          },
        },
        context,
      );
      if (written.ok === false) {
        throw Object.assign(new Error(written.response.message), { response: written.response });
      }

      if (!written.replay && type === 'PROFIT_TRANSFER') {
        await tx.profitAllocation.upsert({
          where: { tenantId_shopId: { tenantId, shopId } },
          create: { tenantId, shopId, earnedMinor: 0n, transferredMinor: amountMinor },
          update: { transferredMinor: { increment: amountMinor } },
        });
      }

      if (!written.replay && (type === 'SALE_PAYMENT' || type === 'CUSTOMER_REPAYMENT')) {
        await reduceObligation(tx, {
          tenantId,
          shopId,
          kind: 'CUSTOMER_RECEIVABLE',
          originType: 'SALE_REVENUE',
          sourceId: payload.obligationSourceId,
          amountMinor,
        });
      }

      if (!written.replay && type === 'PURCHASE_PAYMENT') {
        await reduceObligation(tx, {
          tenantId,
          shopId,
          kind: 'SUPPLIER_PAYABLE',
          originType: 'PURCHASE_PAYABLE',
          sourceId: payload.obligationSourceId,
          amountMinor,
        });
      }

      let obligation: { id: string; outstandingMinor: bigint; partyName: string; status: string } | null = null;
      if (type === 'WORKER_ADVANCE') {
        const partyName = requireNonEmptyString(payload.partyName, 120) || 'Worker';
        if (!written.replay) {
          obligation = await tx.obligation.create({
            data: {
              tenantId,
              shopId,
              kind: 'WORKER_ADVANCE',
              partyName,
              outstandingMinor: amountMinor,
              financialTransactionId: written.row.id,
              status: 'OPEN',
            },
          });
        } else {
          obligation = await tx.obligation.findFirst({
            where: { financialTransactionId: written.row.id, kind: 'WORKER_ADVANCE' },
          });
        }
      }

      if (type === 'WORKER_ADVANCE_REPAY') {
        obligation = await reduceWorkerAdvance(tx, {
          tenantId,
          shopId,
          obligationId: payload.obligationId,
          sourceId: payload.obligationSourceId,
          amountMinor,
          replay: written.replay,
        });
      }

      const journal = await postEngineJournal(tx, {
        tenantId,
        shopId,
        financialTransactionId: written.row.id,
        description,
        postedBy: userId,
        occurredOn,
        lines: linesOrError,
      });

      return { written, journal, obligation };
    });

    return {
      status: 'success',
      traceId,
      data: {
        financialTransaction: {
          ...serializeFinancialTransaction(result.written.row),
          existingIfReplay: result.written.replay,
        },
        journal: serializeJournal(result.journal),
        obligation: result.obligation
          ? {
              id: result.obligation.id,
              partyName: result.obligation.partyName,
              outstandingMinor: result.obligation.outstandingMinor.toString(),
              status: result.obligation.status,
              kind: 'WORKER_ADVANCE',
            }
          : null,
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
      message: error?.message || 'Failed to post treasury books',
      errorCode: error?.errorCode || error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}

async function reduceWorkerAdvance(
  tx: any,
  args: {
    tenantId: string;
    shopId: string;
    obligationId?: string;
    sourceId?: string;
    amountMinor: bigint;
    replay: boolean;
  },
) {
  let obligation = args.obligationId
    ? await tx.obligation.findFirst({
        where: { id: args.obligationId, tenantId: args.tenantId, shopId: args.shopId, kind: 'WORKER_ADVANCE' },
      })
    : null;
  if (!obligation && args.sourceId) {
    const origin = await tx.financialTransaction.findFirst({
      where: { tenantId: args.tenantId, shopId: args.shopId, type: 'WORKER_ADVANCE', sourceId: args.sourceId },
    });
    if (origin) {
      obligation = await tx.obligation.findFirst({
        where: { financialTransactionId: origin.id, kind: 'WORKER_ADVANCE' },
      });
    }
  }
  if (!obligation) {
    throw Object.assign(new Error('Worker advance obligation not found'), {
      errorCode: ErrorCode.NOT_FOUND,
    });
  }
  if (args.replay) return obligation;
  if (args.amountMinor > obligation.outstandingMinor) {
    throw Object.assign(new Error('Repayment exceeds outstanding worker advance'), {
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    });
  }
  const next = obligation.outstandingMinor - args.amountMinor;
  return tx.obligation.update({
    where: { id: obligation.id },
    data: { outstandingMinor: next, status: next === 0n ? 'SETTLED' : 'OPEN' },
  });
}

async function reduceObligation(
  tx: any,
  args: {
    tenantId: string;
    shopId: string;
    kind: string;
    originType: string;
    sourceId?: string;
    amountMinor: bigint;
  },
) {
  if (!args.sourceId) {
    throw Object.assign(new Error('obligationSourceId is required to apply this payment'), {
      errorCode: ErrorCode.VALIDATION_ERROR,
    });
  }
  const origin = await tx.financialTransaction.findFirst({
    where: { tenantId: args.tenantId, shopId: args.shopId, type: args.originType, sourceId: args.sourceId },
  });
  if (!origin) {
    throw Object.assign(new Error('No matching receivable/payable for this payment'), {
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    });
  }
  const obligation = await tx.obligation.findFirst({
    where: { financialTransactionId: origin.id, kind: args.kind },
  });
  if (!obligation) {
    throw Object.assign(new Error('Obligation not found'), { errorCode: ErrorCode.BUSINESS_RULE_VIOLATION });
  }
  if (args.amountMinor > obligation.outstandingMinor) {
    throw Object.assign(new Error('Payment exceeds outstanding receivable/payable'), {
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    });
  }
  const next = obligation.outstandingMinor - args.amountMinor;
  await tx.obligation.update({
    where: { id: obligation.id },
    data: { outstandingMinor: next, status: next === 0n ? 'SETTLED' : 'OPEN' },
  });
}

export async function getProfitAllocation(context?: IRequestContext): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }
  await ensureEngineChart(tenantId, shopId);
  const allocation = await prisma.profitAllocation.findUnique({
    where: { tenantId_shopId: { tenantId, shopId } },
  });
  const earnedMinor = (allocation?.earnedMinor ?? 0n).toString();
  const transferredMinor = (allocation?.transferredMinor ?? 0n).toString();
  const untransferredMinor = ((allocation?.earnedMinor ?? 0n) - (allocation?.transferredMinor ?? 0n)).toString();
  return {
    status: 'success',
    traceId,
    data: { earnedMinor, transferredMinor, untransferredMinor },
  };
}
