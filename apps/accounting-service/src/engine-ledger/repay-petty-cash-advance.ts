import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import { TreasuryMoveFn } from '../common/treasury-move.js';

export interface RepayPettyCashAdvancePayload {
  obligationId?: string;
  obligationSourceId?: string;
  amountMinor: number | string;
  occurredOn: string;
  notes?: string;
  idempotencyKey?: string;
}

/** Worker → Petty Cash. Reduces worker AR. Not income. */
export async function repayPettyCashAdvance(
  payload: RepayPettyCashAdvancePayload,
  context?: IRequestContext,
  moveCash?: TreasuryMoveFn,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }
  if (!moveCash) {
    return {
      status: 'error',
      traceId,
      message: 'Treasury movement client is required for petty cash',
      errorCode: ErrorCode.INTERNAL_ERROR,
    };
  }

  const amountMinor = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (amountMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'amountMinor must be a positive integer (RWF cents) and occurredOn must be YYYY-MM-DD',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }
  if (!payload?.obligationId && !payload?.obligationSourceId) {
    return {
      status: 'error',
      traceId,
      message: 'obligationId is required to repay a worker advance',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const notes = payload?.notes ? requireNonEmptyString(payload.notes, 500) : null;
  const sourceId = payload?.idempotencyKey || randomUUID();

  const movement = await moveCash(
    {
      movementType: 'WORKER_ADVANCE_REPAY',
      amountMinor: amountMinor.toString(),
      occurredOn: payload.occurredOn,
      toKind: 'PETTY_CASH',
      obligationId: payload.obligationId,
      obligationSourceId: payload.obligationSourceId,
      notes: notes || undefined,
      idempotencyKey: sourceId,
    },
    context,
  );
  if (movement.status === 'error') return movement;

  return {
    status: 'success',
    traceId,
    data: {
      id: movement.data?.obligationId || payload.obligationId || null,
      kind: 'WORKER_ADVANCE',
      isExpense: false,
      cashMovement: 'WORKER_TO_PETTY',
      treasuryMovement: movement.data,
    },
  };
}
