import {
  blendLastUnitCost,
  lastUnitCostFromSpecs,
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

describe('ownedUnsoldAccessoryPositionFromRows', () => {
  it('adds Lend-OUT qty as still ours and ignores zero on-hand leftover SKUs', () => {
    const position = ownedUnsoldAccessoryPositionFromRows([
      { onHand: 10, lendOutQty: 2, lastUnitCost: 1000, sellingPrice: 1500 },
      { onHand: 0, lendOutQty: 0, lastUnitCost: 500, sellingPrice: 800 },
    ]);
    expect(position.skuCount).toBe(1);
    expect(position.qty).toBe(12);
    expect(position.costFrancs).toBe(12000);
    expect(position.listFrancs).toBe(18000);
    expect(position.expectedProfitFrancs).toBe(6000);
  });

  it('does not treat Lend-IN as owned (only onHand + Lend-OUT)', () => {
    const position = ownedUnsoldAccessoryPositionFromRows([
      { onHand: 4, lendOutQty: 0, lastUnitCost: 2000, sellingPrice: 3000 },
    ]);
    expect(position.qty).toBe(4);
    expect(position.costFrancs).toBe(8000);
  });

  it('counts missing list and missing unit cost without dropping the other side', () => {
    const position = ownedUnsoldAccessoryPositionFromRows([
      { onHand: 3, lendOutQty: 0, lastUnitCost: 0, sellingPrice: 2000 },
      { onHand: 2, lendOutQty: 0, lastUnitCost: 500, sellingPrice: 0 },
    ]);
    expect(position.skuCount).toBe(2);
    expect(position.qty).toBe(5);
    expect(position.costFrancs).toBe(1000);
    expect(position.listFrancs).toBe(6000);
    expect(position.missingCostCount).toBe(1);
    expect(position.missingListCount).toBe(1);
  });

  it('blends last unit cost as a moving average', () => {
    expect(blendLastUnitCost(10, 1000, 10, 2000)).toBe(1500);
    expect(blendLastUnitCost(0, 0, 5, 800)).toBe(800);
    expect(blendLastUnitCost(10, 1000, 5, 0)).toBe(1000);
  });

  it('reads lastUnitCost from object specifications only', () => {
    expect(lastUnitCostFromSpecs({ lastUnitCost: 1500 })).toBe(1500);
    expect(lastUnitCostFromSpecs([{ key: 'lastUnitCost', value: 1500 }])).toBe(0);
    expect(lastUnitCostFromSpecs(null)).toBe(0);
  });
});
