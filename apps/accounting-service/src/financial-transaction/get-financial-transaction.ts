import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { GetFinancialTransactionPayload, FinancialTransactionDto } from './types.js';
import { requireNonEmptyString, serializeFinancialTransaction } from './serialize.js';

type AccountingPrisma = typeof defaultPrisma;

export async function getFinancialTransaction(
  payload: GetFinancialTransactionPayload,
  context?: IRequestContext,
  db: AccountingPrisma = defaultPrisma,
): Promise<ICommandResponse<FinancialTransactionDto>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;

  if (!tenantId) {
    return {
      status: 'error',
      traceId,
      message: 'tenantId is required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const id = payload?.id ? requireNonEmptyString(payload.id, 64) : null;
  const idempotencyKey = payload?.idempotencyKey
    ? requireNonEmptyString(payload.idempotencyKey, 128)
    : null;

  if (!id && !idempotencyKey) {
    return {
      status: 'error',
      traceId,
      message: 'id or idempotencyKey is required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const row = id
    ? await db.financialTransaction.findFirst({
        where: {
          id,
          tenantId,
          ...(shopId ? { shopId } : {}),
        },
      })
    : await db.financialTransaction.findFirst({
        where: {
          tenantId,
          idempotencyKey: idempotencyKey!,
          ...(shopId ? { shopId } : {}),
        },
      });

  if (!row) {
    return {
      status: 'error',
      traceId,
      message: 'Financial transaction not found',
      errorCode: ErrorCode.NOT_FOUND,
    };
  }

  return {
    status: 'success',
    traceId,
    data: serializeFinancialTransaction(row),
  };
}
