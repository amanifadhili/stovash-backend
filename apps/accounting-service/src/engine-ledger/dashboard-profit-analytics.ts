import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import {
  ACCOUNT_COGS,
  ACCOUNT_SALES_REVENUE,
  GENERAL_EXPENSE_CATEGORIES,
} from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { parseOccurredOn, toIsoDate } from '../financial-transaction/serialize.js';

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const PETTY_CODES = ['6280', '6281', '6282'];

function asBigInt(value?: string | bigint | null): bigint {
  if (value == null) return 0n;
  try {
    return typeof value === 'bigint' ? value : BigInt(value);
  } catch {
    return 0n;
  }
}

function signedMinor(type: string, side: string, amount: bigint): bigint {
  const assetLike = type === 'ASSET' || type === 'EXPENSE';
  if (assetLike) return side === 'DEBIT' ? amount : -amount;
  return side === 'CREDIT' ? amount : -amount;
}

function parseBounds(from?: string, to?: string): { from: string; to: string } | null {
  const f = String(from || '').trim();
  const t = String(to || '').trim();
  if (!ISO_DAY.test(f) || !ISO_DAY.test(t) || f > t) return null;
  const a = Date.parse(`${f}T00:00:00Z`);
  const b = Date.parse(`${t}T00:00:00Z`);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  if (Math.floor((b - a) / 86400000) + 1 > MAX_SPAN_DAYS) return null;
  return { from: f, to: t };
}

function eachDayInclusive(from: string, to: string): string[] {
  const out: string[] = [];
  let cur = from;
  while (cur <= to) {
    out.push(cur);
    const [y, m, d] = cur.split('-').map(Number);
    const next = new Date(Date.UTC(y, m - 1, d + 1));
    cur = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}-${String(next.getUTCDate()).padStart(2, '0')}`;
  }
  return out;
}

/**
 * Period P&L + earned/transferred daily activity from posted journals / FTs.
 * Position (stock) from profit_allocations — lifetime, not period.
 */
export async function getDashboardProfitAnalytics(
  payload: { from?: string; to?: string } | undefined,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return {
      status: 'error',
      traceId,
      message: 'tenantId and shopId are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const bounds = parseBounds(payload?.from, payload?.to);
  if (!bounds) {
    return {
      status: 'error',
      traceId,
      message: 'Valid from/to (YYYY-MM-DD) required; max 366 days',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const fromDay = parseOccurredOn(bounds.from);
  const toDay = parseOccurredOn(bounds.to);
  if (!fromDay || !toDay) {
    return {
      status: 'error',
      traceId,
      message: 'Invalid calendar bounds',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  await ensureEngineChart(tenantId, shopId);

  const [journals, transfers, allocation] = await Promise.all([
    prisma.postedJournal.findMany({
      where: {
        tenantId,
        shopId,
        occurredOn: { gte: fromDay, lte: toDay },
      },
      include: {
        lines: { include: { account: true } },
      },
      orderBy: { occurredOn: 'asc' },
    }),
    prisma.financialTransaction.findMany({
      where: {
        tenantId,
        shopId,
        type: 'PROFIT_TRANSFER',
        status: 'POSTED',
        occurredOn: { gte: fromDay, lte: toDay },
      },
      select: { occurredOn: true, amountMinor: true },
    }),
    prisma.profitAllocation.findUnique({
      where: { tenantId_shopId: { tenantId, shopId } },
    }),
  ]);

  const byCodePeriod = new Map<string, bigint>();
  const byDayCode = new Map<string, Map<string, bigint>>();

  for (const journal of journals) {
    const day = toIsoDate(journal.occurredOn);
    if (!byDayCode.has(day)) byDayCode.set(day, new Map());
    const dayMap = byDayCode.get(day)!;
    for (const line of journal.lines) {
      const code = line.account.code;
      const delta = signedMinor(line.account.type, line.side, line.amountMinor);
      byCodePeriod.set(code, (byCodePeriod.get(code) ?? 0n) + delta);
      dayMap.set(code, (dayMap.get(code) ?? 0n) + delta);
    }
  }

  const revenueMinor = byCodePeriod.get(ACCOUNT_SALES_REVENUE) ?? 0n;
  const cogsMinor = byCodePeriod.get(ACCOUNT_COGS) ?? 0n;
  const grossProfitMinor = revenueMinor - cogsMinor;

  const expensesByCategory = GENERAL_EXPENSE_CATEGORIES.map((cat) => ({
    code: cat.code,
    name: cat.label,
    accountCode: cat.accountCode,
    amountMinor: (byCodePeriod.get(cat.accountCode) ?? 0n).toString(),
  }));
  const generalExpenseMinor = expensesByCategory.reduce(
    (sum, row) => sum + asBigInt(row.amountMinor),
    0n,
  );
  const pettyExpenseMinor = PETTY_CODES.reduce(
    (sum, code) => sum + (byCodePeriod.get(code) ?? 0n),
    0n,
  );
  const interestMinor = byCodePeriod.get('6270') ?? 0n;
  const netBusinessProfitMinor = grossProfitMinor - generalExpenseMinor - pettyExpenseMinor;

  const transferByDay = new Map<string, bigint>();
  for (const t of transfers) {
    const day = toIsoDate(t.occurredOn);
    transferByDay.set(day, (transferByDay.get(day) ?? 0n) + t.amountMinor);
  }

  const series = eachDayInclusive(bounds.from, bounds.to).map((date) => {
    const dayMap = byDayCode.get(date) ?? new Map();
    const dayRev = dayMap.get(ACCOUNT_SALES_REVENUE) ?? 0n;
    const dayCogs = dayMap.get(ACCOUNT_COGS) ?? 0n;
    const earned = dayRev - dayCogs;
    const earnedMinor = earned > 0n ? earned : 0n;
    return {
      date,
      earnedMinor: earnedMinor.toString(),
      transferredMinor: (transferByDay.get(date) ?? 0n).toString(),
      grossProfitMinor: earned.toString(),
    };
  });

  const earnedStock = allocation?.earnedMinor ?? 0n;
  const transferredStock = allocation?.transferredMinor ?? 0n;

  return {
    status: 'success',
    traceId,
    data: {
      from: bounds.from,
      to: bounds.to,
      period: {
        revenueMinor: revenueMinor.toString(),
        cogsMinor: cogsMinor.toString(),
        grossProfitMinor: grossProfitMinor.toString(),
        generalExpenseMinor: generalExpenseMinor.toString(),
        pettyExpenseMinor: pettyExpenseMinor.toString(),
        interestMinor: interestMinor.toString(),
        netBusinessProfitMinor: netBusinessProfitMinor.toString(),
        expensesByCategory,
      },
      series,
      position: {
        earnedMinor: earnedStock.toString(),
        transferredMinor: transferredStock.toString(),
        untransferredMinor: (earnedStock - transferredStock).toString(),
      },
      note: 'Period P&L from posted journals. Position is lifetime profit allocation (not period).',
    },
  };
}
