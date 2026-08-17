import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { recordFinancialReconDiff } from '@electronic-shop/metrics';
import { prisma as defaultPrisma } from '../database/client.js';
import { derivedBalances, balanceOf } from './balances.js';
import { createTreasuryMovement } from './create-treasury-movement.js';
import { parseAmountMinor } from './money.js';
import { shopTodayIso } from './calendar.js';
import { TreasuryBooksClient } from './types.js';

type Db = typeof defaultPrisma;

export async function recordReconciliation(
  payload: { physicalAccountId: string; countedMinor: number | string; notes?: string },
  context?: IRequestContext,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const counted = parseCounted(payload?.countedMinor);
  if (counted === null || !payload?.physicalAccountId) {
    return {
      status: 'error',
      traceId,
      message: 'physicalAccountId and countedMinor (integer RWF cents, including 0) are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const account = await db.physicalAccount.findFirst({
    where: { id: payload.physicalAccountId, tenantId, shopId },
  });
  if (!account) {
    return { status: 'error', traceId, message: 'Physical account not found', errorCode: ErrorCode.NOT_FOUND };
  }

  const balances = await derivedBalances(tenantId, shopId, db);
  const expected = balanceOf(balances, account.id);
  const difference = counted - expected;
  const absDiff = difference < 0n ? -difference : difference;
  recordFinancialReconDiff(absDiff, 'COUNTED');

  const row = await db.reconciliationCount.create({
    data: {
      tenantId,
      shopId,
      physicalAccountId: account.id,
      expectedMinor: expected,
      countedMinor: counted,
      differenceMinor: difference,
      status: 'COUNTED',
      countedBy: userId,
      notes: payload.notes?.trim() || null,
    },
  });

  return {
    status: 'success',
    traceId,
    data: serializeRecon(row),
  };
}

export async function approveReconciliationAdjustment(
  payload: { reconciliationId: string; reason: string },
  context?: IRequestContext,
  books?: TreasuryBooksClient,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }
  const reason = typeof payload?.reason === 'string' ? payload.reason.trim() : '';
  if (!payload?.reconciliationId || !reason) {
    return {
      status: 'error',
      traceId,
      message: 'reconciliationId and reason are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const row = await db.reconciliationCount.findFirst({
    where: { id: payload.reconciliationId, tenantId, shopId },
  });
  if (!row) {
    return { status: 'error', traceId, message: 'Reconciliation count not found', errorCode: ErrorCode.NOT_FOUND };
  }
  if (row.status === 'ADJUSTED') {
    return { status: 'success', traceId, data: serializeRecon(row) };
  }
  if (row.differenceMinor === 0n) {
    return {
      status: 'error',
      traceId,
      message: 'Counted amount matches the books. No adjustment to approve.',
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    };
  }

  const excess = row.differenceMinor > 0n;
  const amount = excess ? row.differenceMinor : -row.differenceMinor;
  const movement = await createTreasuryMovement(
    {
      movementType: 'RECONCILIATION_ADJUSTMENT',
      amountMinor: amount.toString(),
      occurredOn: shopTodayIso(),
      fromPhysicalId: excess ? null : row.physicalAccountId,
      toPhysicalId: excess ? row.physicalAccountId : null,
      reconDirection: excess ? 'EXCESS' : 'SHORTAGE',
      reason,
      idempotencyKey: `recon:${row.id}`,
    },
    context,
    books,
    db,
  );
  if (movement.status !== 'success') return movement;

  const updated = await db.reconciliationCount.update({
    where: { id: row.id },
    data: {
      status: 'ADJUSTED',
      reason,
      approvedBy: userId,
      approvedAt: new Date(),
      adjustmentMovementId: movement.data.id,
    },
  });

  return { status: 'success', traceId, data: serializeRecon(updated) };
}

function parseCounted(value: unknown): bigint | null {
  if (typeof value === 'bigint') return value >= 0n ? value : null;
  if (typeof value === 'number') {
    if (!Number.isInteger(value) || value < 0 || !Number.isSafeInteger(value)) return null;
    return BigInt(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!/^\d+$/.test(trimmed)) return null;
    return BigInt(trimmed);
  }
  return null;
}

export function serializeRecon(row: any) {
  return {
    id: row.id,
    physicalAccountId: row.physicalAccountId,
    expectedMinor: row.expectedMinor.toString(),
    countedMinor: row.countedMinor.toString(),
    differenceMinor: row.differenceMinor.toString(),
    status: row.status,
    notes: row.notes,
    reason: row.reason,
    adjustmentMovementId: row.adjustmentMovementId,
  };
}
