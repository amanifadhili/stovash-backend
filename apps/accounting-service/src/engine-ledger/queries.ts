import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { ENGINE_CHART_ACCOUNTS, GENERAL_EXPENSE_CATEGORIES } from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { serializeJournal } from './serialize.js';
import { parseOccurredOn } from '../financial-transaction/serialize.js';
import { shopTodayIso } from '../financial-transaction/calendar.js';

function signedMinor(type: string, side: string, amount: bigint): bigint {
  const assetLike = type === 'ASSET' || type === 'EXPENSE';
  if (assetLike) return side === 'DEBIT' ? amount : -amount;
  return side === 'CREDIT' ? amount : -amount;
}

export async function getAccountingAccounts(
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  await ensureEngineChart(tenantId, shopId);
  const accounts = await prisma.chartAccount.findMany({
    where: { tenantId, shopId },
    include: { lines: true },
    orderBy: { code: 'asc' },
  });

  const mapped = accounts.map((account) => {
    let balance = 0n;
    for (const line of account.lines) {
      balance += signedMinor(account.type, line.side, line.amountMinor);
    }
    return {
      id: account.id,
      code: account.code,
      name: account.name,
      type: account.type,
      fundCode: account.fundCode,
      balanceMinor: balance.toString(),
    };
  });

  const grouped = ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'].map((type) => ({
    type,
    accounts: mapped.filter((a) => a.type === type),
  }));

  const allocation = await prisma.profitAllocation.findUnique({
    where: { tenantId_shopId: { tenantId, shopId } },
  });

  return {
    status: 'success',
    traceId,
    data: {
      accounts: mapped,
      grouped,
      count: mapped.length,
      expenseCategories: GENERAL_EXPENSE_CATEGORIES,
      productCostCodes: ENGINE_CHART_ACCOUNTS.filter((a) => a.code === '1300' || a.code === '5000').map((a) => a.code),
      profitAllocation: {
        earnedMinor: (allocation?.earnedMinor ?? 0n).toString(),
        transferredMinor: (allocation?.transferredMinor ?? 0n).toString(),
      },
      note: 'Balances are derived from posted engine journals.',
    },
  };
}

export async function getJournals(
  payload: { type?: string; occurredOn?: string } | undefined,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const occurredOn = payload?.occurredOn ? parseOccurredOn(payload.occurredOn) : null;
  if (payload?.occurredOn && !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'occurredOn must be a calendar date (YYYY-MM-DD)',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const journals = await prisma.postedJournal.findMany({
    where: { tenantId, shopId, ...(occurredOn ? { occurredOn } : {}) },
    include: { lines: { include: { account: true } } },
    orderBy: { createdAt: 'desc' },
    take: 100,
  });

  const txnIds = journals.map((j) => j.financialTransactionId);
  const txns = txnIds.length
    ? await prisma.financialTransaction.findMany({ where: { id: { in: txnIds } } })
    : [];
  const txnById = new Map(txns.map((t) => [t.id, t]));

  let rows = journals.map((journal) => {
    const txn = txnById.get(journal.financialTransactionId);
    return {
      ...serializeJournal(journal),
      transactionType: txn?.type ?? null,
      originalTransactionId: txn?.originalTransactionId ?? null,
      reason: txn?.reason ?? null,
      amountMinor: txn?.amountMinor?.toString() ?? null,
    };
  });
  if (payload?.type) {
    rows = rows.filter((r) => r.transactionType === payload.type);
  }

  const today = shopTodayIso();
  const selected = payload?.occurredOn?.slice(0, 10) ?? today;

  return {
    status: 'success',
    traceId,
    data: {
      journals: rows,
      count: rows.length,
      shopToday: today,
      occurredOn: selected,
      locked: selected < today,
    },
  };
}

export async function getReceivables(
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const rows = await prisma.obligation.findMany({
    where: { tenantId, shopId, kind: { in: ['WORKER_ADVANCE', 'CUSTOMER_RECEIVABLE', 'SUPPLIER_PAYABLE'] } },
    orderBy: { createdAt: 'desc' },
  });

  const mapped = rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    partyName: r.partyName,
    outstandingMinor: r.outstandingMinor.toString(),
    status: r.status,
    financialTransactionId: r.financialTransactionId,
  }));

  return {
    status: 'success',
    traceId,
    data: {
      receivables: mapped.filter((r) => r.kind !== 'SUPPLIER_PAYABLE'),
      payables: mapped.filter((r) => r.kind === 'SUPPLIER_PAYABLE'),
      count: mapped.length,
    },
  };
}
