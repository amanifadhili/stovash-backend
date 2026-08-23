import { lastPurchaseUnitCostFromLots } from './last-purchase-unit-cost';

describe('lastPurchaseUnitCostFromLots', () => {
  it('weights by qty across lots of the same product', () => {
    expect(
      lastPurchaseUnitCostFromLots([
        { productId: 'a', qty: 10, unitCost: 1000 },
        { productId: 'a', qty: 10, unitCost: 2000 },
        { productId: 'b', qty: 4, unitCost: 500 },
      ]),
    ).toEqual({ a: 1500, b: 500 });
  });

  it('drops empty qty, zero cost, and blank product ids', () => {
    expect(
      lastPurchaseUnitCostFromLots([
        { productId: 'a', qty: 0, unitCost: 1000 },
        { productId: 'a', qty: 2, unitCost: 0 },
        { productId: '', qty: 3, unitCost: 900 },
      ]),
    ).toEqual({});
  });
});
