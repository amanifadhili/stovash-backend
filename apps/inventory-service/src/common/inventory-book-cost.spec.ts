import { inventoryBookCost, inventoryExtrasCost } from './inventory-book-cost';

describe('inventoryBookCost', () => {
  it('uses purchase + capitalized without adding upgrade rows again', () => {
    const item = {
      purchaseCost: 100_000,
      capitalizedCost: 20_000,
      upgrades: [{ cost: 20_000 }],
    };
    expect(inventoryExtrasCost(item)).toBe(20_000);
    expect(inventoryBookCost(item)).toBe(120_000);
  });

  it('falls back to upgrade rows when capitalizedCost is empty', () => {
    expect(
      inventoryBookCost({
        purchaseCost: 100_000,
        capitalizedCost: 0,
        upgrades: [{ cost: 8_000 }, { cost: 12_000 }],
      }),
    ).toBe(120_000);
  });

  it('uses capitalizedCost when there are no upgrade rows', () => {
    expect(inventoryBookCost({ purchaseCost: 100_000, capitalizedCost: 20_000, upgrades: [] })).toBe(
      120_000,
    );
  });
});
