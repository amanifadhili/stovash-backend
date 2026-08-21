import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { parseOccurredOn, toIsoDate } from './money.js';

type Db = typeof defaultPrisma;

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const ADJUSTMENT_TYPES = new Set(['CORRECTION', 'REVERSAL', 'RECONCILIATION_ADJUSTMENT']);
const OPS_KINDS = new Set(['OPS_CASH', 'OPS_MOMO', 'OPS_MAIN_BANK', 'OPS_OTHER_BANK']);

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
 * Operational physical inflows/outflows by day (same leg rules as financial overview).
 */
export async function getDashboardCashFlowAnalytics(
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

  const physicals = await db.physicalAccount.findMany({
    where: { tenantId, shopId },
    include: { fund: { select: { code: true } } },
  });
  const opsIds = new Set(
    physicals
      .filter((p) => p.fund?.code === 'OPERATIONAL' || OPS_KINDS.has(String(p.kind || '')))
      .map((p) => p.id),
  );

  const movements = await db.treasuryMovement.findMany({
    where: {
      tenantId,
      shopId,
      occurredOn: { gte: fromDay, lte: toDay },
    },
    orderBy: { occurredOn: 'asc' },
  });

  const byDay = new Map<string, { inflows: bigint; outflows: bigint }>();
  for (const day of eachDayInclusive(bounds.from, bounds.to)) {
    byDay.set(day, { inflows: 0n, outflows: 0n });
  }

  const byKind = new Map<string, { inflows: bigint; outflows: bigint }>();
  const kindById = new Map(physicals.map((p) => [p.id, String(p.kind || 'UNKNOWN')]));

  for (const m of movements) {
    if (ADJUSTMENT_TYPES.has(m.movementType)) continue;
    const day = toIsoDate(m.occurredOn);
    const bucket = byDay.get(day) || { inflows: 0n, outflows: 0n };
    const amt = m.amountMinor;

    if (m.toPhysicalId && opsIds.has(m.toPhysicalId)) {
      bucket.inflows += amt;
      const kind = kindById.get(m.toPhysicalId) || 'UNKNOWN';
      const k = byKind.get(kind) || { inflows: 0n, outflows: 0n };
      k.inflows += amt;
      byKind.set(kind, k);
    }
    if (m.fromPhysicalId && opsIds.has(m.fromPhysicalId)) {
      bucket.outflows += amt;
      const kind = kindById.get(m.fromPhysicalId) || 'UNKNOWN';
      const k = byKind.get(kind) || { inflows: 0n, outflows: 0n };
      k.outflows += amt;
      byKind.set(kind, k);
    }
    byDay.set(day, bucket);
  }

  let inflowsMinor = 0n;
  let outflowsMinor = 0n;
  const series = [...byDay.entries()].map(([date, b]) => {
    inflowsMinor += b.inflows;
    outflowsMinor += b.outflows;
    return {
      date,
      inflowsMinor: b.inflows.toString(),
      outflowsMinor: b.outflows.toString(),
      netMinor: (b.inflows - b.outflows).toString(),
    };
  });

  return {
    status: 'success',
    traceId,
    data: {
      from: bounds.from,
      to: bounds.to,
      totals: {
        inflowsMinor: inflowsMinor.toString(),
        outflowsMinor: outflowsMinor.toString(),
        netMinor: (inflowsMinor - outflowsMinor).toString(),
      },
      series,
      byKind: [...byKind.entries()].map(([kind, b]) => ({
        kind,
        inflowsMinor: b.inflows.toString(),
        outflowsMinor: b.outflows.toString(),
      })),
      note: 'Operational physical legs only (Cash / MoMo / Bank). Adjustments excluded.',
    },
  };
}
