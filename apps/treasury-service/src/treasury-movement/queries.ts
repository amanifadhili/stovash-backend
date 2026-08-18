import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { derivedBalances, balanceOf } from './balances.js';
import { serializeMovement } from './create-treasury-movement.js';
import { serializeRecon } from './reconciliation.js';
import { getFinancialStructure } from '../financial-structure/get-financial-structure.js';
import { TREASURY_MOVEMENT_TYPE_SET, TreasuryBooksClient } from './types.js';

type Db = typeof defaultPrisma;

export async function getTreasuryMovements(
  context?: IRequestContext,
  payload?: { movementTypes?: string[]; limit?: number },
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }
  const types = (payload?.movementTypes ?? []).filter((type) => TREASURY_MOVEMENT_TYPE_SET.has(type));
  const take = payload?.limit && payload.limit > 0 ? Math.min(payload.limit, 500) : 200;
  const rows = await db.treasuryMovement.findMany({
    where: {
      tenantId,
      shopId,
      ...(types.length > 0 ? { movementType: { in: types } } : {}),
    },
    orderBy: { createdAt: 'desc' },
    take,
  });
  return {
    status: 'success',
    traceId,
    data: { movements: rows.map((row) => serializeMovement(row, false)), count: rows.length },
  };
}

export async function getTreasuryLoans(
  context?: IRequestContext,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }
  const rows = await db.treasuryObligation.findMany({
    where: { tenantId, shopId },
    orderBy: { createdAt: 'desc' },
  });
  return {
    status: 'success',
    traceId,
    data: {
      loans: rows.map((row) => ({
        id: row.id,
        kind: row.kind,
        lenderFundCode: row.lenderFundCode,
        borrowerFundCode: row.borrowerFundCode,
        partyName: row.partyName,
        outstandingMinor: row.outstandingMinor.toString(),
        status: row.status,
        financialTransactionId: row.financialTransactionId,
      })),
    },
  };
}

export async function getReconciliations(
  context?: IRequestContext,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }
  const rows = await db.reconciliationCount.findMany({
    where: { tenantId, shopId },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });
  return { status: 'success', traceId, data: { reconciliations: rows.map(serializeRecon) } };
}

export async function getProfitTransferPosition(
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
  if (!books) {
    return { status: 'error', traceId, message: 'Accounting books client is required', errorCode: ErrorCode.INTERNAL_ERROR };
  }

  const accounts = await db.physicalAccount.findMany({
    where: { tenantId, shopId },
    include: { fund: true },
  });
  const balances = await derivedBalances(tenantId, shopId, db);
  const operationalLiquidity = accounts
    .filter((a) => a.fund.code === 'OPERATIONAL')
    .reduce((sum, a) => sum + balanceOf(balances, a.id), 0n);
  const allocation = await books.getAllocation(context);
  const untransferred = BigInt(allocation.untransferredMinor || '0');
  const available =
    untransferred < operationalLiquidity ? untransferred : operationalLiquidity;

  return {
    status: 'success',
    traceId,
    data: {
      earnedMinor: allocation.earnedMinor,
      transferredMinor: allocation.transferredMinor,
      untransferredMinor: untransferred.toString(),
      operationalLiquidityMinor: operationalLiquidity.toString(),
      availableMinor: available < 0n ? '0' : available.toString(),
      note: 'Available = min(untransferred profit, Operational cash).',
    },
  };
}

export async function getFundBalances(
  context?: IRequestContext,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  return getFinancialStructure(context, db);
}
