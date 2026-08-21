import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { parseOccurredOn, toIsoDate } from './money.js';

type Db = typeof defaultPrisma;

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const REPAY_TYPES = new Set(['INTERNAL_LOAN_REPAY', 'EXTERNAL_LOAN_REPAY_PRINCIPAL']);

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
 * Loan outstanding snapshot + principal repayments in period.
 */
export async function getDashboardLoanAnalytics(
  payload: { from?: string; to?: string } | undefined,
  context?: IRequestContext,
  db: Db = defaultPrisma,
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

  const [loans, movements] = await Promise.all([
    db.treasuryObligation.findMany({
      where: { tenantId, shopId },
      orderBy: { outstandingMinor: 'desc' },
    }),
    db.treasuryMovement.findMany({
      where: {
        tenantId,
        shopId,
        movementType: { in: [...REPAY_TYPES] },
        occurredOn: { gte: fromDay, lte: toDay },
      },
      select: { movementType: true, occurredOn: true, amountMinor: true },
      orderBy: { occurredOn: 'asc' },
    }),
  ]);

  let internalOutstandingMinor = 0n;
  let externalOutstandingMinor = 0n;
  const openLoans = loans.filter((l) => l.status === 'OPEN');
  for (const l of openLoans) {
    if (l.kind === 'INTERNAL_LOAN') internalOutstandingMinor += l.outstandingMinor;
    else if (l.kind === 'EXTERNAL_LOAN') externalOutstandingMinor += l.outstandingMinor;
  }

  const byDay = new Map<string, { internal: bigint; external: bigint }>();
  for (const day of eachDayInclusive(bounds.from, bounds.to)) {
    byDay.set(day, { internal: 0n, external: 0n });
  }

  let internalRepaidMinor = 0n;
  let externalRepaidMinor = 0n;
  for (const m of movements) {
    const day = toIsoDate(m.occurredOn);
    const bucket = byDay.get(day) || { internal: 0n, external: 0n };
    if (m.movementType === 'INTERNAL_LOAN_REPAY') {
      bucket.internal += m.amountMinor;
      internalRepaidMinor += m.amountMinor;
    } else if (m.movementType === 'EXTERNAL_LOAN_REPAY_PRINCIPAL') {
      bucket.external += m.amountMinor;
      externalRepaidMinor += m.amountMinor;
    }
    byDay.set(day, bucket);
  }

  const series = [...byDay.entries()].map(([date, b]) => ({
    date,
    internalRepaidMinor: b.internal.toString(),
    externalRepaidMinor: b.external.toString(),
    repaidMinor: (b.internal + b.external).toString(),
  }));

  const openRows = openLoans.slice(0, 8).map((l) => ({
    id: l.id,
    kind: l.kind,
    partyName: l.partyName || 'Unknown',
    outstandingMinor: l.outstandingMinor.toString(),
  }));

  return {
    status: 'success',
    traceId,
    data: {
      from: bounds.from,
      to: bounds.to,
      position: {
        internalOutstandingMinor: internalOutstandingMinor.toString(),
        externalOutstandingMinor: externalOutstandingMinor.toString(),
        openCount: openLoans.length,
      },
      totals: {
        internalRepaidMinor: internalRepaidMinor.toString(),
        externalRepaidMinor: externalRepaidMinor.toString(),
        repaidMinor: (internalRepaidMinor + externalRepaidMinor).toString(),
      },
      series,
      openLoans: openRows,
      note: 'Outstanding is current open TreasuryObligation. Period series = principal repayments only.',
    },
  };
}
