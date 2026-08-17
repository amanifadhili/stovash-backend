import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { shopTodayIso, toCalendarIso } from './calendar.js';
import { parseOccurredOn } from './money.js';

type Db = typeof defaultPrisma;

const ADJUSTMENT_TYPES = new Set(['CORRECTION', 'REVERSAL', 'RECONCILIATION_ADJUSTMENT']);

type Bucket = {
  opening: bigint;
  inflows: bigint;
  outflows: bigint;
  adjustments: bigint;
};

function emptyBucket(): Bucket {
  return { opening: 0n, inflows: 0n, outflows: 0n, adjustments: 0n };
}

function closingOf(bucket: Bucket): bigint {
  return bucket.opening + bucket.inflows - bucket.outflows + bucket.adjustments;
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

  const physical = new Map<string, Bucket>();
  const funds = new Map<string, Bucket>();
  for (const account of accounts) {
    physical.set(account.id, emptyBucket());
    if (!funds.has(account.fund.code)) funds.set(account.fund.code, emptyBucket());
  }

  const apply = (
    bucket: Bucket,
    signed: bigint,
    isAdjustment: boolean,
    onDay: boolean,
  ) => {
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
  };

  for (const movement of movements) {
    const iso = toCalendarIso(movement.occurredOn);
    const onDay = iso === toCalendarIso(day);
    const isAdjustment = ADJUSTMENT_TYPES.has(movement.movementType);
    const from = movement.fromPhysicalId ? accountById.get(movement.fromPhysicalId) : null;
    const to = movement.toPhysicalId ? accountById.get(movement.toPhysicalId) : null;

    if (to) {
      apply(physical.get(to.id)!, movement.amountMinor, isAdjustment, onDay);
      const fromFund = from?.fund.code;
      if (fromFund !== to.fund.code) {
        apply(funds.get(to.fund.code)!, movement.amountMinor, isAdjustment, onDay);
      }
    }
    if (from) {
      apply(physical.get(from.id)!, -movement.amountMinor, isAdjustment, onDay);
      const toFund = to?.fund.code;
      if (toFund !== from.fund.code) {
        apply(funds.get(from.fund.code)!, -movement.amountMinor, isAdjustment, onDay);
      }
    }
  }

  const period = await db.financialPeriod.upsert({
    where: { tenantId_shopId_date: { tenantId, shopId, date: day } },
    create: { tenantId, shopId, date: day },
    update: {},
  });

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
      equation: 'Opening + Inflows − Outflows ± Adjustments = Closing',
      snapshots,
      funds: snapshots.filter((s) => s.scopeType === 'FUND'),
      physical: snapshots.filter((s) => s.scopeType === 'PHYSICAL'),
    },
  };
}
