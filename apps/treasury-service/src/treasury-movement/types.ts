export const TREASURY_MOVEMENT_TYPES = [
  'OWNER_CAPITAL_IN',
  'OPENING_BALANCE_IN',
  'INTERNAL_TRANSFER',
  'OPERATIONAL_CONSOLIDATION',
  'PROFIT_TRANSFER',
  'CAPITAL_GROWTH',
  'INTERNAL_LOAN',
  'INTERNAL_LOAN_REPAY',
  'EXTERNAL_LOAN',
  'EXTERNAL_LOAN_REPAY_PRINCIPAL',
  'EXTERNAL_LOAN_INTEREST',
  'RECONCILIATION_ADJUSTMENT',
  'SALE_PAYMENT',
  'SALE_REFUND',
  'PURCHASE_PAYMENT',
  'INVENTORY_CAPITALIZE',
  'GENERAL_EXPENSE_FUNDING',
  'GENERAL_EXPENSE_PAYOUT',
  'WORKER_ADVANCE',
  'WORKER_ADVANCE_REPAY',
  'PETTY_CASH_EXPENSE',
  'CORRECTION',
  'REVERSAL',
] as const;

export type TreasuryMovementType = (typeof TREASURY_MOVEMENT_TYPES)[number];

export const TREASURY_MOVEMENT_TYPE_SET = new Set<string>(TREASURY_MOVEMENT_TYPES);

export const FINANCIAL_TYPE_FOR_MOVEMENT: Record<TreasuryMovementType, string> = {
  OWNER_CAPITAL_IN: 'OWNER_CAPITAL_IN',
  OPENING_BALANCE_IN: 'OPENING_BALANCE_IN',
  INTERNAL_TRANSFER: 'INTERNAL_TRANSFER',
  OPERATIONAL_CONSOLIDATION: 'INTERNAL_TRANSFER',
  PROFIT_TRANSFER: 'PROFIT_TRANSFER',
  CAPITAL_GROWTH: 'CAPITAL_GROWTH',
  INTERNAL_LOAN: 'INTERNAL_LOAN',
  INTERNAL_LOAN_REPAY: 'INTERNAL_LOAN_REPAY',
  EXTERNAL_LOAN: 'EXTERNAL_LOAN',
  EXTERNAL_LOAN_REPAY_PRINCIPAL: 'EXTERNAL_LOAN_REPAY_PRINCIPAL',
  EXTERNAL_LOAN_INTEREST: 'EXTERNAL_LOAN_INTEREST',
  RECONCILIATION_ADJUSTMENT: 'RECONCILIATION_ADJUSTMENT',
  SALE_PAYMENT: 'SALE_PAYMENT',
  SALE_REFUND: 'SALE_REFUND',
  PURCHASE_PAYMENT: 'PURCHASE_PAYMENT',
  INVENTORY_CAPITALIZE: 'INVENTORY_CAPITALIZE',
  GENERAL_EXPENSE_FUNDING: 'GENERAL_EXPENSE_FUNDING',
  GENERAL_EXPENSE_PAYOUT: 'GENERAL_EXPENSE',
  WORKER_ADVANCE: 'WORKER_ADVANCE',
  WORKER_ADVANCE_REPAY: 'WORKER_ADVANCE_REPAY',
  PETTY_CASH_EXPENSE: 'PETTY_CASH_EXPENSE',
  CORRECTION: 'CORRECTION',
  REVERSAL: 'REVERSAL',
};

export interface CreateTreasuryMovementPayload {
  movementType: TreasuryMovementType;
  amountMinor: number | string;
  occurredOn: string;
  fromPhysicalId?: string | null;
  toPhysicalId?: string | null;
  loanId?: string;
  counterpartyName?: string;
  reason?: string;
  notes?: string;
  idempotencyKey?: string;
  reconDirection?: 'EXCESS' | 'SHORTAGE';
  obligationSourceId?: string;
  toKind?: string | null;
  fromKind?: string | null;
  originalMovementId?: string;
  expenseAccountCode?: string;
  partyName?: string;
  obligationId?: string;
}

export interface TreasuryBooksClient {
  postBooks: (
    payload: {
      type: string;
      occurredOn: string;
      amountMinor: string;
      fromKind?: string | null;
      toKind?: string | null;
      reconDirection?: 'EXCESS' | 'SHORTAGE';
      idempotencyKey: string;
      description?: string;
      originalType?: string | null;
      originalTransactionId?: string;
      reason?: string;
      obligationSourceId?: string;
      expenseAccountCode?: string;
      partyName?: string;
      obligationId?: string;
    },
    context: any,
  ) => Promise<{ financialTransaction: { id: string }; journal: { id: string }; obligation?: { id: string } }>;
  getAllocation: (context: any) => Promise<{
    earnedMinor: string;
    transferredMinor: string;
    untransferredMinor: string;
  }>;
  getEngineReport?: (context: any) => Promise<any>;
}
