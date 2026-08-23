export type PurchaseUnitCostLot = {
  productId: string;
  qty: number;
  unitCost: number;
};

/** Qty-weighted unit cost per product. Lots with no qty or cost are ignored. */
export function lastPurchaseUnitCostFromLots(
  lots: PurchaseUnitCostLot[],
): Record<string, number> {
  const sums = new Map<string, { cost: number; qty: number }>();
  for (const lot of lots) {
    const productId = String(lot.productId || '');
    const qty = Number(lot.qty) || 0;
    const unitCost = Number(lot.unitCost) || 0;
    if (!productId || qty <= 0 || unitCost <= 0) continue;
    const prev = sums.get(productId) || { cost: 0, qty: 0 };
    prev.cost += unitCost * qty;
    prev.qty += qty;
    sums.set(productId, prev);
  }
  const out: Record<string, number> = {};
  for (const [productId, row] of sums) {
    out[productId] = row.cost / row.qty;
  }
  return out;
}
