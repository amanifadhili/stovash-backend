import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import { PETTY_EXPENSE_CATEGORY_BY_CODE, PettyExpenseCategoryCode } from './chart.js';
import { TreasuryMoveFn } from '../common/treasury-move.js';

export interface RecordPettyCashExpensePayload {
  category: PettyExpenseCategoryCode;
  amountMinor: number | string;
  occurredOn: string;
  notes?: string;
  idempotencyKey?: string;
}

/** Petty Cash → expense. Never Operational. */
export async function recordPettyCashExpense(
  payload: RecordPettyCashExpensePayload,
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

  const category = PETTY_EXPENSE_CATEGORY_BY_CODE[payload?.category as PettyExpenseCategoryCode];
  if (!category) {
    return { status: 'error', traceId, message: 'Unknown petty expense category', errorCode: ErrorCode.VALIDATION_ERROR };
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

  const notes = payload?.notes ? requireNonEmptyString(payload.notes, 500) : null;
  const sourceId = payload?.idempotencyKey || randomUUID();

  const movement = await moveCash(
    {
      movementType: 'PETTY_CASH_EXPENSE',
      amountMinor: amountMinor.toString(),
      occurredOn: payload.occurredOn,
      fromKind: 'PETTY_CASH',
      expenseAccountCode: category.accountCode,
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
      category: category.code,
      categoryLabel: category.label,
      isExpense: true,
      fromPettyCash: true,
      cashMovement: 'PETTY_CASH_TO_EXPENSE',
      amountMinor: amountMinor.toString(),
      treasuryMovement: movement.data,
    },
  };
}
