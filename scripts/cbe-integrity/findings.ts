/**
 * Phase 6 integrity reporter (read-only).
 * Never UPDATE posted journal amounts, FT rows, or obligation outstanding.
 * Callers may print findings; they must not apply them as mutations of posted books.
 */

export type IntegrityFinding = {
  code:
    | 'CONFIRMED_SALE_NOT_POSTED'
    | 'PAYMENT_WITHOUT_MOVEMENT_REF'
    | 'MOVEMENT_WITHOUT_PAYMENT_REF'
    | 'CONFIRMED_SALE_WITHOUT_REVENUE_FT';
  id: string;
  detail: string;
};

export function findingsFromSales(input: {
  sales: Array<{ id: string; commercialStatus: string; accountingStatus: string }>;
  payments: Array<{ id: string; saleId: string; accountingRef: string | null }>;
}): IntegrityFinding[] {
  const findings: IntegrityFinding[] = [];
  for (const sale of input.sales) {
    if (sale.commercialStatus === 'CONFIRMED' && sale.accountingStatus !== 'POSTED') {
      findings.push({
        code: 'CONFIRMED_SALE_NOT_POSTED',
        id: sale.id,
        detail: `Sale ${sale.id} is CONFIRMED but accountingStatus=${sale.accountingStatus}`,
      });
    }
  }
  for (const payment of input.payments) {
    const refs = parseRefs(payment.accountingRef);
    if (!refs?.treasuryMovementId) {
      findings.push({
        code: 'PAYMENT_WITHOUT_MOVEMENT_REF',
        id: payment.id,
        detail: `SalePayment ${payment.id} on sale ${payment.saleId} has no treasuryMovementId`,
      });
    }
  }
  return findings;
}

export function findingsFromEngine(input: {
  confirmedSaleIds: string[];
  revenueSourceIds: string[];
  salePaymentMovementIds: string[];
  treasurySalePaymentMovementIds: string[];
}): IntegrityFinding[] {
  const findings: IntegrityFinding[] = [];
  const revenue = new Set(input.revenueSourceIds);
  for (const saleId of input.confirmedSaleIds) {
    if (!revenue.has(saleId)) {
      findings.push({
        code: 'CONFIRMED_SALE_WITHOUT_REVENUE_FT',
        id: saleId,
        detail: `Confirmed sale ${saleId} has no SALE_REVENUE FinancialTransaction sourceId`,
      });
    }
  }
  const paymentMovements = new Set(input.salePaymentMovementIds.filter(Boolean));
  for (const movementId of input.treasurySalePaymentMovementIds) {
    if (!paymentMovements.has(movementId)) {
      findings.push({
        code: 'MOVEMENT_WITHOUT_PAYMENT_REF',
        id: movementId,
        detail: `Treasury SALE_PAYMENT movement ${movementId} is not referenced by any SalePayment.accountingRef`,
      });
    }
  }
  return findings;
}

export function parseRefs(accountingRef: string | null | undefined): {
  treasuryMovementId?: string | null;
  treasuryFinancialTransactionId?: string | null;
  treasuryJournalId?: string | null;
} | null {
  if (!accountingRef) return null;
  try {
    const parsed = JSON.parse(accountingRef);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed;
  } catch {
    return null;
  }
}
