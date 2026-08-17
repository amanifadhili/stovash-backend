import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { getDailyPosition } from './period-snapshots.js';
import { getProfitTransferPosition, getReconciliations, getTreasuryLoans } from './queries.js';
import { parseOccurredOn, toIsoDate } from './money.js';
import { shopTodayIso } from './calendar.js';
import { TreasuryBooksClient } from './types.js';

type Db = typeof defaultPrisma;

function asBigInt(value?: string | null): bigint {
  if (!value) return 0n;
  try {
    return BigInt(value);
  } catch {
    return 0n;
  }
}

function bump(map: Map<string, bigint>, key: string, amount: bigint) {
  map.set(key, (map.get(key) ?? 0n) + amount);
}

function serializeBuckets(map: Map<string, bigint>) {
  return [...map.entries()]
    .filter(([, amount]) => amount !== 0n)
    .map(([type, amountMinor]) => ({ type, amountMinor: amountMinor.toString() }))
    .sort((a, b) => a.type.localeCompare(b.type));
}

export async function getFinancialOverview(
  payload: { occurredOn?: string } | undefined,
  context?: IRequestContext,
  books?: TreasuryBooksClient,
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

  const [positionRes, profitRes, loansRes, reconRes] = await Promise.all([
    getDailyPosition({ occurredOn: selected }, context, db),
    books
      ? getProfitTransferPosition(context, books, db)
      : Promise.resolve({ status: 'error' as const, data: null, message: 'Accounting books client is required' }),
    getTreasuryLoans(context, db),
    getReconciliations(context, db),
  ]);

  if (positionRes.status !== 'success') return positionRes;

  const movements = await db.treasuryMovement.findMany({
    where: { tenantId, shopId, occurredOn: day },
    orderBy: { createdAt: 'asc' },
  });
  const inflows = new Map<string, bigint>();
  const outflows = new Map<string, bigint>();
  for (const movement of movements) {
    if (movement.toPhysicalId) bump(inflows, movement.movementType, movement.amountMinor);
    if (movement.fromPhysicalId) bump(outflows, movement.movementType, movement.amountMinor);
  }

  const physical = positionRes.data.physical ?? [];
  const funds = positionRes.data.funds ?? [];
  const fundClosing = (code: string) => funds.find((s: any) => s.scopeKey === code)?.closingMinor ?? '0';
  const physicalClosing = (kind: string) =>
    physical.find((s: any) => s.kind === kind)?.closingMinor ?? '0';

  const loans = loansRes.status === 'success' ? loansRes.data.loans ?? [] : [];
  const openLoans = loans.filter((l: any) => l.status === 'OPEN');
  const internalOutstandingMinor = openLoans
    .filter((l: any) => l.kind === 'INTERNAL_LOAN')
    .reduce((sum: bigint, l: any) => sum + asBigInt(l.outstandingMinor), 0n);
  const externalOutstandingMinor = openLoans
    .filter((l: any) => l.kind === 'EXTERNAL_LOAN')
    .reduce((sum: bigint, l: any) => sum + asBigInt(l.outstandingMinor), 0n);

  let pnl: any = null;
  if (books?.getEngineReport) {
    try {
      pnl = await books.getEngineReport(context);
    } catch {
      pnl = null;
    }
  }

  const profit = profitRes.status === 'success' ? profitRes.data : null;

  return {
    status: 'success',
    traceId,
    data: {
      date: toIsoDate(day),
      shopToday: today,
      locked: selected < today,
      equation: positionRes.data.equation,
      position: {
        capitalMinor: fundClosing('CAPITAL'),
        pettyCashMinor: physicalClosing('PETTY_CASH'),
        operationalMinor: fundClosing('OPERATIONAL'),
        profitReserveMinor: fundClosing('PROFIT_RESERVE'),
        funds,
        physical,
      },
      profit: profit
        ? {
            earnedMinor: profit.earnedMinor,
            transferredMinor: profit.transferredMinor,
            untransferredMinor: profit.untransferredMinor,
            operationalLiquidityMinor: profit.operationalLiquidityMinor,
            availableMinor: profit.availableMinor,
          }
        : null,
      cashMovement: {
        inflows: serializeBuckets(inflows),
        outflows: serializeBuckets(outflows),
      },
      loans: {
        internalOutstandingMinor: internalOutstandingMinor.toString(),
        externalOutstandingMinor: externalOutstandingMinor.toString(),
        outstandingMinor: (internalOutstandingMinor + externalOutstandingMinor).toString(),
        rows: loans,
      },
      recon: reconRes.status === 'success' ? reconRes.data.reconciliations ?? [] : [],
      pnl,
      note: 'Figures are derived from treasury movements and engine journals. Not PaymentMethod.balance.',
    },
  };
}
