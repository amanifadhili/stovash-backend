/// <reference types="jest" />
import { findingsFromEngine, findingsFromSales, parseRefs } from '@cbe-integrity/findings';

describe('CBE Phase 6 integrity findings (report-only)', () => {
  it('flags confirmed sales that are not POSTED', () => {
    const findings = findingsFromSales({
      sales: [
        { id: 's-ok', commercialStatus: 'CONFIRMED', accountingStatus: 'POSTED' },
        { id: 's-bad', commercialStatus: 'CONFIRMED', accountingStatus: 'UNPOSTED' },
        { id: 's-draft', commercialStatus: 'DRAFT', accountingStatus: 'UNPOSTED' },
      ],
      payments: [],
    });
    expect(findings.map((f) => f.id)).toEqual(['s-bad']);
    expect(findings[0].code).toBe('CONFIRMED_SALE_NOT_POSTED');
  });

  it('flags payments without a treasury movement ref', () => {
    const findings = findingsFromSales({
      sales: [],
      payments: [
        { id: 'p-ok', saleId: 's1', accountingRef: JSON.stringify({ treasuryMovementId: 'mv-1' }) },
        { id: 'p-bad', saleId: 's1', accountingRef: null },
      ],
    });
    expect(findings.map((f) => f.id)).toEqual(['p-bad']);
    expect(findings[0].code).toBe('PAYMENT_WITHOUT_MOVEMENT_REF');
  });

  it('flags confirmed sales without a revenue FT and movements without payment refs', () => {
    const findings = findingsFromEngine({
      confirmedSaleIds: ['sale-1', 'sale-2'],
      revenueSourceIds: ['sale-1'],
      salePaymentMovementIds: ['mv-pay'],
      treasurySalePaymentMovementIds: ['mv-pay', 'mv-orphan'],
    });
    expect(findings.map((f) => `${f.code}:${f.id}`).sort()).toEqual([
      'CONFIRMED_SALE_WITHOUT_REVENUE_FT:sale-2',
      'MOVEMENT_WITHOUT_PAYMENT_REF:mv-orphan',
    ]);
  });

  it('parseRefs never throws and does not invent writes', () => {
    expect(parseRefs(null)).toBeNull();
    expect(parseRefs('not-json')).toBeNull();
    expect(parseRefs(JSON.stringify({ treasuryMovementId: 'mv-1' }))?.treasuryMovementId).toBe('mv-1');
  });
});
