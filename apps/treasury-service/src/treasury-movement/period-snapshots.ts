import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { calendarDaysInMonth, parseYearMonth, shopTodayIso, toCalendarIso } from './calendar.js';
import { parseOccurredOn } from './money.js';

type Db = typeof defaultPrisma;

const ADJUSTMENT_TYPES = new Set(['CORRECTION', 'REVERSAL', 'RECONCILIATION_ADJUSTMENT']);
const FUND_ORDER = ['CAPITAL', 'OPERATIONAL', 'PROFIT_RESERVE'];
const EQUATION = 'Opening + Inflows − Outflows ± Adjustments = Closing';

type Bucket = {
  opening: bigint;
  inflows: bigint;
  outflows: bigint;
  adjustments: bigint;
};

type AccountRow = {
  id: string;
  name: string;
  kind: string;
  fund: { code: string };
};

type MovementRow = {
  occurredOn: Date;
  movementType: string;
  amountMinor: bigint;
  fromPhysicalId: string | null;
  toPhysicalId: string | null;
};

export type PositionMinors = {
  openingMinor: string;
  inflowsMinor: string;
  outflowsMinor: string;
  adjustmentsMinor: string;
  closingMinor: string;
};

function emptyBucket(): Bucket {
  return { opening: 0n, inflows: 0n, outflows: 0n, adjustments: 0n };
}

function bucketFromOpening(opening: bigint): Bucket {
  return { opening, inflows: 0n, outflows: 0n, adjustments: 0n };
}

function closingOf(bucket: Bucket): bigint {
  return bucket.opening + bucket.inflows - bucket.outflows + bucket.adjustments;
}

function serializeBucket(bucket: Bucket): PositionMinors {
  return {
    openingMinor: bucket.opening.toString(),
    inflowsMinor: bucket.inflows.toString(),
    outflowsMinor: bucket.outflows.toString(),
    adjustmentsMinor: bucket.adjustments.toString(),
    closingMinor: closingOf(bucket).toString(),
  };
}

function applySigned(bucket: Bucket, signed: bigint, isAdjustment: boolean, onDay: boolean) {
  if (!onDay) {
    bucket.opening += signed;
    return;
  }
  if (isAdjustment) {
    bucket.adjustments += signed;
    return;
  }
  if (signed > 0n) bucket.inflows += signed;
  else if (signed < 0n) bucket.outflows += -signed;
}

function applyMovement(
  movement: MovementRow,
  accountById: Map<string, AccountRow>,
  physical: Map<string, Bucket>,
  funds: Map<string, Bucket>,
  focusDayIso: string,
) {
  const onDay = toCalendarIso(movement.occurredOn) === focusDayIso;
  const isAdjustment = ADJUSTMENT_TYPES.has(movement.movementType);
  const from = movement.fromPhysicalId ? accountById.get(movement.fromPhysicalId) : null;
  const to = movement.toPhysicalId ? accountById.get(movement.toPhysicalId) : null;

  if (to) {
    applySigned(physical.get(to.id)!, movement.amountMinor, isAdjustment, onDay);
    const fromFund = from?.fund.code;
    if (fromFund !== to.fund.code) {
      applySigned(funds.get(to.fund.code)!, movement.amountMinor, isAdjustment, onDay);
    }
  }
  if (from) {
    applySigned(physical.get(from.id)!, -movement.amountMinor, isAdjustment, onDay);
    const toFund = to?.fund.code;
    if (toFund !== from.fund.code) {
      applySigned(funds.get(from.fund.code)!, -movement.amountMinor, isAdjustment, onDay);
    }
  }
}

function emptyMaps(accounts: AccountRow[]) {
  const physical = new Map<string, Bucket>();
  const funds = new Map<string, Bucket>();
  for (const account of accounts) {
    physical.set(account.id, emptyBucket());
    if (!funds.has(account.fund.code)) funds.set(account.fund.code, emptyBucket());
  }
  return { physical, funds };
}

function snapshotRows(physical: Map<string, Bucket>, funds: Map<string, Bucket>) {
  const rows: Array<{
    scopeType: string;
    scopeKey: string;
    openingMinor: bigint;
    inflowsMinor: bigint;
    outflowsMinor: bigint;
    adjustmentsMinor: bigint;
    closingMinor: bigint;
  }> = [];
  for (const [id, bucket] of physical) {
    rows.push({
      scopeType: 'PHYSICAL',
      scopeKey: id,
      openingMinor: bucket.opening,
      inflowsMinor: bucket.inflows,
      outflowsMinor: bucket.outflows,
      adjustmentsMinor: bucket.adjustments,
      closingMinor: closingOf(bucket),
    });
  }
  for (const [code, bucket] of funds) {
    rows.push({
      scopeType: 'FUND',
      scopeKey: code,
      openingMinor: bucket.opening,
      inflowsMinor: bucket.inflows,
      outflowsMinor: bucket.outflows,
      adjustmentsMinor: bucket.adjustments,
      closingMinor: closingOf(bucket),
    });
  }
  return rows;
}

function sortAccounts(accounts: AccountRow[]): AccountRow[] {
  return [...accounts].sort((a, b) => {
    const ai = FUND_ORDER.indexOf(a.fund.code);
    const bi = FUND_ORDER.indexOf(b.fund.code);
    const ao = ai === -1 ? FUND_ORDER.length : ai;
    const bo = bi === -1 ? FUND_ORDER.length : bi;
    if (ao !== bo) return ao - bo;
    return a.name.localeCompare(b.name);
  });
}

export async function refreshPeriodSnapshots(
  tenantId: string,
  shopId: string,
  occurredOn: Date | string,
  db: Db = defaultPrisma,
) {
  const day = typeof occurredOn === 'string' ? parseOccurredOn(occurredOn) : occurredOn;
  if (!day) return null;

  const accounts = await db.physicalAccount.findMany({
    where: { tenantId, shopId },
    include: { fund: true },
  });
  const accountById = new Map(accounts.map((a) => [a.id, a]));

  const movements = await db.treasuryMovement.findMany({
    where: { tenantId, shopId, occurredOn: { lte: day } },
  });

  const { physical, funds } = emptyMaps(accounts);
  const focusDayIso = toCalendarIso(day);
  for (const movement of movements) {
    applyMovement(movement, accountById, physical, funds, focusDayIso);
  }

  const period = await db.financialPeriod.upsert({
    where: { tenantId_shopId_date: { tenantId, shopId, date: day } },
    create: { tenantId, shopId, date: day },
    update: {},
  });

  const rows = snapshotRows(physical, funds);

  await db.$transaction(
    rows.map((row) =>
      db.periodSnapshot.upsert({
        where: {
          periodId_scopeType_scopeKey: {
            periodId: period.id,
            scopeType: row.scopeType,
            scopeKey: row.scopeKey,
          },
        },
        create: { periodId: period.id, ...row },
        update: {
          openingMinor: row.openingMinor,
          inflowsMinor: row.inflowsMinor,
          outflowsMinor: row.outflowsMinor,
          adjustmentsMinor: row.adjustmentsMinor,
          closingMinor: row.closingMinor,
        },
      }),
    ),
  );

  return { period, rows };
}

export async function getDailyPosition(
  payload: { occurredOn?: string } | undefined,
  context?: IRequestContext,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const today = shopTodayIso();
  const selected = payload?.occurredOn?.trim() || today;
  const day = parseOccurredOn(selected);
  if (!day) {
    return {
      status: 'error',
      traceId,
      message: 'occurredOn must be a calendar date (YYYY-MM-DD)',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const refreshed = await refreshPeriodSnapshots(tenantId, shopId, day, db);
  const accounts = await db.physicalAccount.findMany({
    where: { tenantId, shopId },
    include: { fund: true },
  });
  const accountById = new Map(accounts.map((a) => [a.id, a]));

  const snapshots = (refreshed?.rows ?? []).map((row) => {
    const account = row.scopeType === 'PHYSICAL' ? accountById.get(row.scopeKey) : null;
    return {
      scopeType: row.scopeType,
      scopeKey: row.scopeKey,
      name: account?.name ?? row.scopeKey,
      kind: account?.kind ?? null,
      fundCode: account?.fund.code ?? (row.scopeType === 'FUND' ? row.scopeKey : null),
      openingMinor: row.openingMinor.toString(),
      inflowsMinor: row.inflowsMinor.toString(),
      outflowsMinor: row.outflowsMinor.toString(),
      adjustmentsMinor: row.adjustmentsMinor.toString(),
      closingMinor: row.closingMinor.toString(),
    };
  });

  return {
    status: 'success',
    traceId,
    data: {
      date: toCalendarIso(day),
      shopToday: today,
      locked: toCalendarIso(day) < today,
      equation: EQUATION,
      snapshots,
      funds: snapshots.filter((s) => s.scopeType === 'FUND'),
      physical: snapshots.filter((s) => s.scopeType === 'PHYSICAL'),
    },
  };
}

export async function getMonthlyPosition(
  payload: { yearMonth?: string } | undefined,
  context?: IRequestContext,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const today = shopTodayIso();
  const currentMonth = today.slice(0, 7);
  const selected = payload?.yearMonth?.trim() || currentMonth;
  const parsed = parseYearMonth(selected);
  if (!parsed) {
    return {
      status: 'error',
      traceId,
      message: 'yearMonth must be a calendar month (YYYY-MM)',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }
  if (parsed.yearMonth > currentMonth) {
    return {
      status: 'error',
      traceId,
      message: 'Cannot load a future calendar month.',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const monthEnd = parseOccurredOn(parsed.endIso);
  if (!monthEnd) {
    return {
      status: 'error',
      traceId,
      message: 'yearMonth must be a calendar month (YYYY-MM)',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const accounts = sortAccounts(
    await db.physicalAccount.findMany({
      where: { tenantId, shopId },
      include: { fund: true },
    }),
  );
  const accountById = new Map(accounts.map((a) => [a.id, a]));

  const movements = await db.treasuryMovement.findMany({
    where: { tenantId, shopId, occurredOn: { lte: monthEnd } },
  });

  const byDay = new Map<string, MovementRow[]>();
  const preMonth: MovementRow[] = [];
  for (const movement of movements) {
    const iso = toCalendarIso(movement.occurredOn);
    if (iso < parsed.startIso) {
      preMonth.push(movement);
      continue;
    }
    if (iso > parsed.endIso) continue;
    const list = byDay.get(iso) ?? [];
    list.push(movement);
    byDay.set(iso, list);
  }

  const pre = emptyMaps(accounts);
  for (const movement of preMonth) {
    applyMovement(movement, accountById, pre.physical, pre.funds, parsed.startIso);
  }

  const running = new Map<string, bigint>();
  for (const account of accounts) {
    running.set(account.id, closingOf(pre.physical.get(account.id)!));
  }

  const monthIn = new Map<string, bigint>();
  const monthOut = new Map<string, bigint>();
  const monthAdj = new Map<string, bigint>();
  for (const account of accounts) {
    monthIn.set(account.id, 0n);
    monthOut.set(account.id, 0n);
    monthAdj.set(account.id, 0n);
  }

  const day1Opening: Record<string, string> = {};
  let lastPosted: Record<string, PositionMinors> | null = null;

  const days = calendarDaysInMonth(parsed.yearMonth).map((date) => {
    const locked = date < today;
    if (date > today) {
      const physical: Record<string, PositionMinors | null> = {};
      for (const account of accounts) physical[account.id] = null;
      return { date, locked: false, physical };
    }

    const { physical, funds } = emptyMaps(accounts);
    for (const account of accounts) {
      physical.set(account.id, bucketFromOpening(running.get(account.id) ?? 0n));
    }
    for (const movement of byDay.get(date) ?? []) {
      applyMovement(movement, accountById, physical, funds, date);
    }

    const snapshot: Record<string, PositionMinors | null> = {};
    for (const account of accounts) {
      const bucket = physical.get(account.id)!;
      const serialized = serializeBucket(bucket);
      snapshot[account.id] = serialized;
      running.set(account.id, closingOf(bucket));
      monthIn.set(account.id, (monthIn.get(account.id) ?? 0n) + bucket.inflows);
      monthOut.set(account.id, (monthOut.get(account.id) ?? 0n) + bucket.outflows);
      monthAdj.set(account.id, (monthAdj.get(account.id) ?? 0n) + bucket.adjustments);
    }
    if (!lastPosted) {
      for (const account of accounts) {
        day1Opening[account.id] = snapshot[account.id]!.openingMinor;
      }
    }
    lastPosted = snapshot as Record<string, PositionMinors>;
    return { date, locked, physical: snapshot };
  });

  const monthTotals: Record<string, PositionMinors> = {};
  for (const account of accounts) {
    monthTotals[account.id] = {
      openingMinor: day1Opening[account.id] ?? (running.get(account.id) ?? 0n).toString(),
      inflowsMinor: (monthIn.get(account.id) ?? 0n).toString(),
      outflowsMinor: (monthOut.get(account.id) ?? 0n).toString(),
      adjustmentsMinor: (monthAdj.get(account.id) ?? 0n).toString(),
      closingMinor: lastPosted?.[account.id]?.closingMinor ?? day1Opening[account.id] ?? '0',
    };
  }

  return {
    status: 'success',
    traceId,
    data: {
      yearMonth: parsed.yearMonth,
      shopToday: today,
      locked: parsed.yearMonth < currentMonth,
      equation: EQUATION,
      accounts: accounts.map((account) => ({
        id: account.id,
        name: account.name,
        kind: account.kind,
        fundCode: account.fund.code,
      })),
      days,
      monthTotals,
    },
  };
}
