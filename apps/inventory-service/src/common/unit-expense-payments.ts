export type UnitExpensePaymentLine = {
  amount?: number;
  paymentMethod?: string;
  accountId?: string;
  reference?: string;
  idempotencyKey?: string;
};

export function paymentFrancsSum(payments: UnitExpensePaymentLine[] | undefined): number {
  return (payments ?? []).reduce((sum, line) => sum + (Number(line.amount) || 0), 0);
}

export function paymentsCoverCost(cost: number, payments: UnitExpensePaymentLine[] | undefined): boolean {
  if (!Number.isFinite(cost) || cost <= 0) return false;
  const paid = paymentFrancsSum(payments);
  return Math.abs(paid - cost) <= 0.0001;
}
