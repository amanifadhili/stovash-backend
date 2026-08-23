import { saleCogsFrancs, unitCostWithExtras } from './sale-line-cost';

describe('sale line cost', () => {
  it('folds sale-form extras into unit cost', () => {
    expect(unitCostWithExtras(100_000, 20_000, 1)).toBe(120_000);
    expect(unitCostWithExtras(50_000, 10_000, 2)).toBe(55_000);
  });

  it('uses inventory book cost rather than purchase-only client cost', () => {
    const unitCost = unitCostWithExtras(120_000, 5_000, 1);
    expect(unitCost).toBe(125_000);
    expect(saleCogsFrancs([{ unitCost, quantity: 1 }])).toBe(125_000);
  });
});
