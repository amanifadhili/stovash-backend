import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import {
  GENERAL_EXPENSE_CATEGORY_BY_CODE,
  GeneralExpenseCategoryCode,
} from './chart.js';
import { TreasuryMoveFn } from '../common/treasury-move.js';

export interface RecordGeneralExpensePayload {
  category: GeneralExpenseCategoryCode;
  amountMinor: number | string;
  occurredOn: string;
  paidTo?: string;
  notes?: string;
  idempotencyKey?: string;
  operationalKind?: 'OPS_MAIN_BANK' | 'OPS_CASH' | 'OPS_MOMO' | 'OPS_OTHER_BANK';
}

/**
 * Ratified physical path: Profit Reserve Bank → Operational → payee.
 * Funding is NOT an internal loan. Do not credit Profit Reserve as the payee leg.
 */
export async function recordGeneralExpense(
  payload: RecordGeneralExpensePayload,
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
      message: 'Treasury movement client is required for general expense cash legs',
      errorCode: ErrorCode.INTERNAL_ERROR,
    };
  }

  const category = GENERAL_EXPENSE_CATEGORY_BY_CODE[payload?.category as GeneralExpenseCategoryCode];
  if (!category) {
    return { status: 'error', traceId, message: 'Unknown expense category', errorCode: ErrorCode.VALIDATION_ERROR };
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

  const paidTo = payload?.paidTo ? requireNonEmptyString(payload.paidTo, 120) : null;
  const notes = payload?.notes ? requireNonEmptyString(payload.notes, 500) : null;
  const operationalKind = payload?.operationalKind || 'OPS_MAIN_BANK';
  const sourceId = payload?.idempotencyKey || randomUUID();

  const funding = await moveCash(
    {
      movementType: 'GENERAL_EXPENSE_FUNDING',
      amountMinor: amountMinor.toString(),
      occurredOn: payload.occurredOn,
      fromKind: 'PROFIT_BANK',
      toKind: operationalKind,
      notes: notes || undefined,
      idempotencyKey: `${sourceId}:funding`,
    },
    context,
  );
  if (funding.status === 'error') return funding;

  const payout = await moveCash(
    {
      movementType: 'GENERAL_EXPENSE_PAYOUT',
      amountMinor: amountMinor.toString(),
      occurredOn: payload.occurredOn,
      fromKind: operationalKind,
      expenseAccountCode: category.accountCode,
      counterpartyName: paidTo || undefined,
      notes: notes || undefined,
      idempotencyKey: `${sourceId}:payout`,
    },
    context,
  );
  if (payout.status === 'error') return payout;

  return {
    status: 'success',
    traceId,
    data: {
      category: category.code,
      categoryLabel: category.label,
      paidFrom: 'Profit Reserve Bank',
      cashMovement: 'PR_BANK_TO_OPERATIONAL_TO_PAYEE',
      amountMinor: amountMinor.toString(),
      operationalKind,
      paidTo: paidTo || null,
      isLoan: false,
      funding: funding.data,
      payout: payout.data,
      financialTransaction: payout.data,
      journal: payout.data,
    },
  };
}
