import {
  blendLastUnitCost,
  ownedUnsoldAccessoryPositionFromRows,
  ownedUnsoldStockPositionFromItems,
} from './owned-unsold-stock-position';

describe('ownedUnsoldStockPositionFromItems', () => {
  it('sums book cost and list, and keeps Lend-OUT', () => {
    const position = ownedUnsoldStockPositionFromItems([
      { purchaseCost: 100000, capitalizedCost: 20000, sellingPrice: 150000 },
      { purchaseCost: 80000, sellingPrice: 110000, product: { prices: [{ sellingPrice: 110000 }] } },
    ]);
    expect(position.unitCount).toBe(2);
    expect(position.costFrancs).toBe(200000);
    expect(position.listFrancs).toBe(260000);
    expect(position.expectedProfitFrancs).toBe(60000);
    expect(position.missingListCount).toBe(0);
  });

  it('drops accessories even if they slip into the item set', () => {
    const position = ownedUnsoldStockPositionFromItems([
      { purchaseCost: 100000, sellingPrice: 150000, product: { sku: 'PHN-1' } },
      { purchaseCost: 5000, sellingPrice: 8000, product: { type: 'ACCESSORY', sku: 'ACC-1' } },
    ]);
    expect(position.unitCount).toBe(1);
    expect(position.costFrancs).toBe(100000);
    expect(position.listFrancs).toBe(150000);
  });

  it('counts missing list prices without dropping cost', () => {
    const position = ownedUnsoldStockPositionFromItems([
      { purchaseCost: 40000, sellingPrice: 0 },
    ]);
    expect(position.costFrancs).toBe(40000);
    expect(position.listFrancs).toBe(0);
    expect(position.expectedProfitFrancs).toBe(-40000);
    expect(position.missingListCount).toBe(1);
  });
});
