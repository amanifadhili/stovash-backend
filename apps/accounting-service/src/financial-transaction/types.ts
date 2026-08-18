/**
 * Canonical financial transaction types (money-flow model A.2).
 * Do not add a generic TRANSFER. Phase 2 persists the type; legs come in phases 3–5.
 */
export const FINANCIAL_TRANSACTION_TYPES = [
  'OWNER_CAPITAL_IN',
  'INTERNAL_TRANSFER',
  'PROFIT_TRANSFER',
  'CAPITAL_GROWTH',
  'INTERNAL_LOAN',
  'INTERNAL_LOAN_REPAY',
  'EXTERNAL_LOAN',
  'EXTERNAL_LOAN_REPAY_PRINCIPAL',
  'EXTERNAL_LOAN_INTEREST',
  'SALE_REVENUE',
  'SALE_COGS',
  'SALE_PAYMENT',
  'CUSTOMER_REPAYMENT',
  'GENERAL_EXPENSE',
  'GENERAL_EXPENSE_FUNDING',
  'WORKER_ADVANCE',
  'WORKER_ADVANCE_REPAY',
  'PETTY_CASH_EXPENSE',
  'PURCHASE_PAYABLE',
  'PURCHASE_PAYMENT',
  'RECONCILIATION_ADJUSTMENT',
  'CORRECTION',
  'REVERSAL',
] as const;

export type FinancialTransactionType = (typeof FINANCIAL_TRANSACTION_TYPES)[number];

export const FINANCIAL_TRANSACTION_TYPE_SET = new Set<string>(FINANCIAL_TRANSACTION_TYPES);

export const FINANCIAL_TRANSACTION_STATUS_POSTED = 'POSTED' as const;

export type FinancialTransactionStatus = typeof FINANCIAL_TRANSACTION_STATUS_POSTED;

export interface PostFinancialTransactionPayload {
  type: FinancialTransactionType;
  occurredOn: string;
  amountMinor: number | string;
  currency?: string;
  sourceDomain: string;
  sourceCommand: string;
  sourceId: string;
  idempotencyKey: string;
  description?: string;
  reason?: string;
  originalTransactionId?: string;
  metadata?: Record<string, unknown>;
}

export interface GetFinancialTransactionPayload {
  id?: string;
  idempotencyKey?: string;
}

export interface FinancialTransactionDto {
  id: string;
  tenantId: string;
  shopId: string;
  type: FinancialTransactionType;
  occurredOn: string;
  occurredAt: string;
  actorUserId: string | null;
  sourceDomain: string;
  sourceCommand: string;
  sourceId: string;
  idempotencyKey: string;
  amountMinor: string;
  currency: string;
  description: string | null;
  reason: string | null;
  originalTransactionId: string | null;
  status: FinancialTransactionStatus;
  metadata: unknown;
}

export interface PostedFinancialTransactionDto extends FinancialTransactionDto {
  existingIfReplay: boolean;
}
