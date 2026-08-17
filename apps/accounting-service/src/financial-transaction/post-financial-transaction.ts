import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { Prisma } from '../generated/prisma/index.js';
import { prisma as defaultPrisma } from '../database/client.js';
import {
  FINANCIAL_TRANSACTION_STATUS_POSTED,
  FINANCIAL_TRANSACTION_TYPE_SET,
  PostFinancialTransactionPayload,
  PostedFinancialTransactionDto,
} from './types.js';
import {
  parseAmountMinor,
  parseOccurredOn,
  requireNonEmptyString,
  serializeFinancialTransaction,
  toIsoDate,
} from './serialize.js';
import { calendarLockMessage, isLockExemptType } from './calendar.js';

type AccountingPrisma = typeof defaultPrisma;

function errorResponse(
  traceId: string,
  message: string,
  errorCode: ErrorCode,
): ICommandResponse<PostedFinancialTransactionDto> {
  return { status: 'error', traceId, message, errorCode };
}

/**
 * Insert or replay a FinancialTransaction row on the given client (engine writer).
 * Does not wrap its own transaction — caller owns atomicity with journal legs.
 */
export async function writeFinancialTransaction(
  db: any,
  payload: PostFinancialTransactionPayload,
  context?: IRequestContext,
): Promise<
  | { ok: true; row: any; replay: boolean }
  | { ok: false; response: ICommandResponse<PostedFinancialTransactionDto> }
> {
  const validated = validatePostPayload(payload, context);
  if (validated.ok === false) return { ok: false, response: validated.response };

  const { tenantId, shopId, userId, type, occurredOn, amountMinor, currency, sourceDomain, sourceCommand, sourceId, idempotencyKey, description, reason, originalTransactionId, metadata } =
    validated.value;

  const existing = await db.financialTransaction.findUnique({
    where: { tenantId_idempotencyKey: { tenantId, idempotencyKey } },
  });
  if (existing) {
    return { ok: true, row: existing, replay: true };
  }

  const occurredOnIso = toIsoDate(occurredOn);
  const lockMessage = calendarLockMessage(occurredOnIso, type);
  if (lockMessage) {
    return { ok: false, response: errorResponse(traceIdOf(context), lockMessage, ErrorCode.BUSINESS_RULE_VIOLATION) };
  }

  if (isLockExemptType(type)) {
    if (!reason) {
      return {
        ok: false,
        response: errorResponse(
          traceIdOf(context),
          'CORRECTION and REVERSAL require a reason',
          ErrorCode.VALIDATION_ERROR,
        ),
      };
    }
    if (!originalTransactionId) {
      return {
        ok: false,
        response: errorResponse(
          traceIdOf(context),
          'CORRECTION and REVERSAL require originalTransactionId',
          ErrorCode.VALIDATION_ERROR,
        ),
      };
    }
    const original = await db.financialTransaction.findFirst({
      where: { id: originalTransactionId, tenantId, shopId },
    });
    if (!original) {
      return {
        ok: false,
        response: errorResponse(traceIdOf(context), 'Original financial transaction not found', ErrorCode.NOT_FOUND),
      };
    }
  }

  const row = await db.financialTransaction.create({
    data: {
      tenantId,
      shopId,
      type,
      occurredOn,
      occurredAt: new Date(),
      actorUserId: context?.userId ?? null,
      sourceDomain,
      sourceCommand,
      sourceId,
      idempotencyKey,
      amountMinor,
      currency,
      description,
      reason,
      originalTransactionId: isLockExemptType(type) ? originalTransactionId : null,
      status: FINANCIAL_TRANSACTION_STATUS_POSTED,
      metadata,
      createdBy: userId,
    },
  });
  return { ok: true, row, replay: false };
}

function traceIdOf(context?: IRequestContext): string {
  return context?.traceId || 'unknown';
}

function validatePostPayload(
  payload: PostFinancialTransactionPayload,
  context?: IRequestContext,
):
  | { ok: true; value: any }
  | { ok: false; response: ICommandResponse<PostedFinancialTransactionDto> } {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { ok: false, response: errorResponse(traceId, 'tenantId and shopId are required', ErrorCode.VALIDATION_ERROR) };
  }

  const type = requireNonEmptyString(payload?.type, 64);
  if (!type || !FINANCIAL_TRANSACTION_TYPE_SET.has(type)) {
    return {
      ok: false,
      response: errorResponse(
        traceId,
        'Unknown financial transaction type. Generic TRANSFER is not allowed.',
        ErrorCode.VALIDATION_ERROR,
      ),
    };
  }

  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (!occurredOn) {
    return { ok: false, response: errorResponse(traceId, 'occurredOn must be a calendar date (YYYY-MM-DD)', ErrorCode.VALIDATION_ERROR) };
  }

  const amountMinor = parseAmountMinor(payload?.amountMinor);
  if (amountMinor === null) {
    return { ok: false, response: errorResponse(traceId, 'amountMinor must be an integer greater than 0 (RWF cents)', ErrorCode.VALIDATION_ERROR) };
  }

  const currency = requireNonEmptyString(payload?.currency ?? 'RWF', 3);
  if (!currency || currency !== 'RWF') {
    return { ok: false, response: errorResponse(traceId, 'currency must be RWF', ErrorCode.VALIDATION_ERROR) };
  }

  const sourceDomain = requireNonEmptyString(payload?.sourceDomain);
  const sourceCommand = requireNonEmptyString(payload?.sourceCommand);
  const sourceId = requireNonEmptyString(payload?.sourceId);
  if (!sourceDomain || !sourceCommand || !sourceId) {
    return {
      ok: false,
      response: errorResponse(traceId, 'sourceDomain, sourceCommand, and sourceId are required', ErrorCode.VALIDATION_ERROR),
    };
  }

  const idempotencyKey = requireNonEmptyString(payload?.idempotencyKey, 128);
  if (!idempotencyKey) {
    return { ok: false, response: errorResponse(traceId, 'idempotencyKey is required', ErrorCode.VALIDATION_ERROR) };
  }

  const description =
    payload?.description == null || String(payload.description).trim() === ''
      ? null
      : requireNonEmptyString(payload.description, 500);
  if (payload?.description != null && String(payload.description).trim() !== '' && description === null) {
    return { ok: false, response: errorResponse(traceId, 'description is invalid', ErrorCode.VALIDATION_ERROR) };
  }

  const reason =
    payload?.reason == null || String(payload.reason).trim() === ''
      ? null
      : requireNonEmptyString(payload.reason, 500);
  if (payload?.reason != null && String(payload.reason).trim() !== '' && reason === null) {
    return { ok: false, response: errorResponse(traceId, 'reason is invalid', ErrorCode.VALIDATION_ERROR) };
  }

  const metadata =
    payload?.metadata && typeof payload.metadata === 'object' && !Array.isArray(payload.metadata)
      ? (payload.metadata as Prisma.InputJsonValue)
      : Prisma.JsonNull;

  const originalTransactionId = payload?.originalTransactionId
    ? requireNonEmptyString(payload.originalTransactionId, 64)
    : null;
  if (payload?.originalTransactionId && !originalTransactionId) {
    return { ok: false, response: errorResponse(traceId, 'originalTransactionId is invalid', ErrorCode.VALIDATION_ERROR) };
  }

  return {
    ok: true,
    value: {
      tenantId,
      shopId,
      userId,
      type,
      occurredOn,
      amountMinor,
      currency,
      sourceDomain,
      sourceCommand,
      sourceId,
      idempotencyKey,
      description,
      reason,
      originalTransactionId,
      metadata,
    },
  };
}

export async function postFinancialTransaction(
  payload: PostFinancialTransactionPayload,
  context?: IRequestContext,
  db: AccountingPrisma = defaultPrisma,
): Promise<ICommandResponse<PostedFinancialTransactionDto>> {
  const traceId = context?.traceId || 'unknown';
  const userId = context?.userId || 'system';

  try {
    const written = await writeFinancialTransaction(db, payload, context);
    if (written.ok === false) return written.response;

    if (!written.replay) {
      try {
        await db.auditLog.create({
          data: {
            tenantId: written.row.tenantId,
            shopId: written.row.shopId,
            userId,
            action: 'PostFinancialTransaction',
            resource: 'FinancialTransaction',
            resourceId: written.row.id,
            traceId,
            details: JSON.stringify({
              type: written.row.type,
              amountMinor: written.row.amountMinor.toString(),
              idempotencyKey: written.row.idempotencyKey,
              sourceId: written.row.sourceId,
            }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }
    }

    return {
      status: 'success',
      traceId,
      data: {
        ...serializeFinancialTransaction(written.row),
        existingIfReplay: written.replay,
      },
    };
  } catch (error: any) {
    if (error?.code === 'P2002') {
      const key = requireNonEmptyString(payload?.idempotencyKey, 128);
      const tenantId = context?.tenantId;
      if (key && tenantId) {
        const existing = await db.financialTransaction.findUnique({
          where: { tenantId_idempotencyKey: { tenantId, idempotencyKey: key } },
        });
        if (existing) {
          return {
            status: 'success',
            traceId,
            data: { ...serializeFinancialTransaction(existing), existingIfReplay: true },
          };
        }
      }
    }
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to post financial transaction',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
