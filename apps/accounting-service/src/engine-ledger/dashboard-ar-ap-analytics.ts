import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { parseOccurredOn, toIsoDate } from '../financial-transaction/serialize.js';

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const AR_COLLECT_TYPES = ['CUSTOMER_REPAYMENT'] as const;
const AP_PAY_TYPES = ['PURCHASE_PAYMENT'] as const;
const WORKER_REPAY_TYPES = ['WORKER_ADVANCE_REPAY'] as const;

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
 * Period AR collections / AP payments + open top parties.
 * Aging omitted — Obligation has no dueDate.
 */
export async function getDashboardArApAnalytics(
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

  const collectTypes = [...AR_COLLECT_TYPES, ...AP_PAY_TYPES, ...WORKER_REPAY_TYPES];

  const [txns, obligations] = await Promise.all([
    prisma.financialTransaction.findMany({
      where: {
        tenantId,
        shopId,
        status: 'POSTED',
        type: { in: collectTypes },
        occurredOn: { gte: fromDay, lte: toDay },
      },
      select: { type: true, occurredOn: true, amountMinor: true },
      orderBy: { occurredOn: 'asc' },
    }),
    prisma.obligation.findMany({
      where: {
        tenantId,
        shopId,
        status: 'OPEN',
        kind: { in: ['CUSTOMER_RECEIVABLE', 'SUPPLIER_PAYABLE', 'WORKER_ADVANCE'] },
      },
      select: {
        kind: true,
        partyName: true,
        outstandingMinor: true,
      },
      orderBy: { outstandingMinor: 'desc' },
      take: 200,
    }),
  ]);

  const byDay = new Map<string, { ar: bigint; ap: bigint; worker: bigint }>();
  for (const day of eachDayInclusive(bounds.from, bounds.to)) {
    byDay.set(day, { ar: 0n, ap: 0n, worker: 0n });
  }

  let arCollectedMinor = 0n;
  let apPaidMinor = 0n;
  let workerRecoveredMinor = 0n;

  for (const t of txns) {
    const day = toIsoDate(t.occurredOn);
    const bucket = byDay.get(day) || { ar: 0n, ap: 0n, worker: 0n };
    if ((AR_COLLECT_TYPES as readonly string[]).includes(t.type)) {
      bucket.ar += t.amountMinor;
      arCollectedMinor += t.amountMinor;
    } else if ((AP_PAY_TYPES as readonly string[]).includes(t.type)) {
      bucket.ap += t.amountMinor;
      apPaidMinor += t.amountMinor;
    } else if ((WORKER_REPAY_TYPES as readonly string[]).includes(t.type)) {
      bucket.worker += t.amountMinor;
      workerRecoveredMinor += t.amountMinor;
    }
    byDay.set(day, bucket);
  }

  let arOutstandingMinor = 0n;
  let apOutstandingMinor = 0n;
  let workerOutstandingMinor = 0n;
  for (const o of obligations) {
    if (o.kind === 'CUSTOMER_RECEIVABLE') arOutstandingMinor += o.outstandingMinor;
    else if (o.kind === 'SUPPLIER_PAYABLE') apOutstandingMinor += o.outstandingMinor;
    else if (o.kind === 'WORKER_ADVANCE') workerOutstandingMinor += o.outstandingMinor;
  }

  const topParties = obligations
    .filter((o) => o.kind === 'CUSTOMER_RECEIVABLE' || o.kind === 'SUPPLIER_PAYABLE')
    .slice(0, 8)
    .map((o) => ({
      kind: o.kind,
      partyName: o.partyName || 'Unknown',
      outstandingMinor: o.outstandingMinor.toString(),
    }));

  const series = [...byDay.entries()].map(([date, b]) => ({
    date,
    arCollectedMinor: b.ar.toString(),
    apPaidMinor: b.ap.toString(),
    workerRecoveredMinor: b.worker.toString(),
  }));

  return {
    status: 'success',
    traceId,
    data: {
      from: bounds.from,
      to: bounds.to,
      position: {
        arOutstandingMinor: arOutstandingMinor.toString(),
        apOutstandingMinor: apOutstandingMinor.toString(),
        workerAdvanceOutstandingMinor: workerOutstandingMinor.toString(),
      },
      totals: {
        arCollectedMinor: arCollectedMinor.toString(),
        apPaidMinor: apPaidMinor.toString(),
        workerRecoveredMinor: workerRecoveredMinor.toString(),
      },
      series,
      topParties,
      note: 'Collections from CUSTOMER_REPAYMENT / PURCHASE_PAYMENT / WORKER_ADVANCE_REPAY. Aging not available (no dueDate). Position is open obligations now.',
    },
  };
}
