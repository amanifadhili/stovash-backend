import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import { TreasuryMoveFn } from '../common/treasury-move.js';

export interface RecordWorkerAdvancePayload {
  workerName: string;
  amountMinor: number | string;
  occurredOn: string;
  notes?: string;
  idempotencyKey?: string;
}

/** Petty Cash −, worker AR +. Not an expense. */
export async function recordWorkerAdvance(
  payload: RecordWorkerAdvancePayload,
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

  const workerName = requireNonEmptyString(payload?.workerName, 120);
  const amountMinor = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (!workerName || amountMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'workerName, positive amountMinor (RWF cents), and occurredOn are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const notes = payload?.notes ? requireNonEmptyString(payload.notes, 500) : null;
  const sourceId = payload?.idempotencyKey || randomUUID();

  const movement = await moveCash(
    {
      movementType: 'WORKER_ADVANCE',
      amountMinor: amountMinor.toString(),
      occurredOn: payload.occurredOn,
      fromKind: 'PETTY_CASH',
      partyName: workerName,
      notes: notes || undefined,
      obligationSourceId: sourceId,
      idempotencyKey: sourceId,
    },
    context,
  );
  if (movement.status === 'error') return movement;

  return {
    status: 'success',
    traceId,
    data: {
      id: movement.data?.obligationId || movement.data?.obligation?.id || null,
      kind: 'WORKER_ADVANCE',
      partyName: workerName,
      outstandingMinor: amountMinor.toString(),
      isExpense: false,
      cashMovement: 'PETTY_CASH_OUT',
      financialTransaction: movement.data,
      treasuryMovement: movement.data,
    },
  };
}
