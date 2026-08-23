import { inventoryBookCost } from './inventory-book-cost.js';

/** Must stay in sync with stovash `OWNED_UNSOLD_STATUSES`. Lend-IN is not ours. */
export const OWNED_UNSOLD_ITEM_STATUSES = ['AVAILABLE', 'RESERVED', 'RENTED_OUT'] as const;

export type OwnedUnsoldStockPosition = {
  unitCount: number;
  costFrancs: number;
  listFrancs: number;
  expectedProfitFrancs: number;
  missingListCount: number;
};

export type OwnedUnsoldAccessoryPosition = {
  skuCount: number;
  qty: number;
  costFrancs: number;
  listFrancs: number;
  expectedProfitFrancs: number;
  missingListCount: number;
  missingCostCount: number;
};

export type AccessoryPositionRow = {
  onHand: number;
  lendOutQty: number;
  lastUnitCost: number;
  sellingPrice: number;
};

export function lastUnitCostFromSpecs(specs: unknown): number {
  if (!specs || typeof specs !== 'object') return 0;
  const n = Number((specs as Record<string, unknown>).lastUnitCost);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function blendLastUnitCost(
  oldQty: number,
  oldAvg: number,
  inboundQty: number,
  inboundCost: number,
): number {
  const inQty = Number(inboundQty) || 0;
  const inCost = Number(inboundCost) || 0;
  if (inQty <= 0 || inCost <= 0) return Number(oldAvg) || 0;
  const prevQty = Math.max(0, Number(oldQty) || 0);
  const prevAvg = Number(oldAvg) || 0;
  return (prevAvg * prevQty + inCost * inQty) / (prevQty + inQty);
}

export function ownedUnsoldAccessoryPositionFromRows(
  rows: AccessoryPositionRow[],
): OwnedUnsoldAccessoryPosition {
  let skuCount = 0;
  let qty = 0;
  let costFrancs = 0;
  let listFrancs = 0;
  let missingListCount = 0;
  let missingCostCount = 0;
  for (const row of rows) {
    const ownedQty = Math.max(0, Number(row.onHand) || 0) + Math.max(0, Number(row.lendOutQty) || 0);
    if (ownedQty <= 0) continue;
    skuCount += 1;
    qty += ownedQty;
    const unitCost = Number(row.lastUnitCost) || 0;
    const list = Number(row.sellingPrice) || 0;
    costFrancs += unitCost * ownedQty;
    listFrancs += (list > 0 ? list : 0) * ownedQty;
    if (unitCost <= 0) missingCostCount += 1;
    if (list <= 0) missingListCount += 1;
  }
  return {
    skuCount,
    qty,
    costFrancs,
    listFrancs,
    expectedProfitFrancs: listFrancs - costFrancs,
    missingListCount,
    missingCostCount,
  };
}

export type OwnedUnsoldStockItem = {
  serialNumber?: string | null;
  purchaseCost?: unknown;
  capitalizedCost?: unknown;
  sellingPrice?: unknown;
  upgrades?: Array<{ cost?: unknown }> | null;
  product?: {
    sku?: string | null;
    type?: string | null;
    prices?: Array<{ sellingPrice?: unknown }>;
  } | null;
};

export function isAccessoryStockItem(item: OwnedUnsoldStockItem): boolean {
  if (String(item.product?.type || '').toUpperCase() === 'ACCESSORY') return true;
  if (String(item.product?.sku || '').startsWith('ACC-')) return true;
  if (String(item.serialNumber || '').startsWith('ACC-')) return true;
  return false;
}

export function listPriceFrancs(item: OwnedUnsoldStockItem): number {
  const list = Number(item.sellingPrice ?? item.product?.prices?.[0]?.sellingPrice);
  return Number.isFinite(list) && list > 0 ? list : 0;
}

export function ownedUnsoldStockPositionFromItems(items: OwnedUnsoldStockItem[]): OwnedUnsoldStockPosition {
  let unitCount = 0;
  let costFrancs = 0;
  let listFrancs = 0;
  let missingListCount = 0;
  for (const item of items) {
    if (isAccessoryStockItem(item)) continue;
    unitCount += 1;
    costFrancs += inventoryBookCost(item);
    const list = listPriceFrancs(item);
    listFrancs += list;
    if (list <= 0) missingListCount += 1;
  }
  return {
    unitCount,
    costFrancs,
    listFrancs,
    expectedProfitFrancs: listFrancs - costFrancs,
    missingListCount,
  };
}
