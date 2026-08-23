/**
 * Inventory book cost is purchase plus capitalized extras once.
 * RecordInventoryUpgrade writes both InventoryUpgrade rows and capitalizedCost.
 * Legacy rows may have upgrades without capitalizedCost — use whichever is larger,
 * never the sum of both.
 */
export function inventoryExtrasCost(item: {
  capitalizedCost?: unknown;
  upgrades?: Array<{ cost?: unknown }> | null;
}): number {
  const capitalized = Number(item.capitalizedCost) || 0;
  const upgradeSum = (item.upgrades ?? []).reduce((sum, row) => sum + (Number(row.cost) || 0), 0);
  return Math.max(capitalized, upgradeSum);
}

export function inventoryBookCost(item: {
  purchaseCost?: unknown;
  capitalizedCost?: unknown;
  upgrades?: Array<{ cost?: unknown }> | null;
}): number {
  return (Number(item.purchaseCost) || 0) + inventoryExtrasCost(item);
}
