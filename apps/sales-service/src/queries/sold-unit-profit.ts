import { isoDay } from '../common/commercial-finance.js';

export const DEFAULT_SOLD_UNIT_PAGE_SIZE = 500;

export type SoldUnitStatus = 'SOLD' | 'RETURNED';

export interface SoldUnitRow {
  id: string;
  saleId: string;
  occurredOn: string;
  brandId: string | null;
  brandName: string;
  productName: string;
  serialNumber: string;
  quantity: number;
  costMinor: string;
  soldMinor: string;
  extraCostMinor: string;
  profitMinor: string;
  status: SoldUnitStatus;
}

export interface SoldUnitTotals {
  costMinor: string;
  soldMinor: string;
  extraCostMinor: string;
  profitMinor: string;
}

/** RWF francs → integer cents. Allows 0 and negatives (loss-making lines). */
export function francsToMinorInt(francs: unknown): bigint {
  const n = Number(francs);
  if (!Number.isFinite(n)) return 0n;
  return BigInt(Math.round(n * 100));
}

export function soldFrancs(item: {
  lineTotal?: unknown;
  total?: unknown;
  unitPrice?: unknown;
  quantity?: unknown;
}): number {
  const line = Number(item.lineTotal ?? item.total);
  if (Number.isFinite(line) && line !== 0) return line;
  return (Number(item.unitPrice) || 0) * (Number(item.quantity) || 0);
}

export function isReturnedLine(
  returnItems?: Array<{ saleReturn?: { status?: string | null } | null }>,
): boolean {
  return (returnItems ?? []).some((row) => {
    const status = String(row.saleReturn?.status || '').toUpperCase();
    return status === 'APPROVED' || status === 'COMPLETED';
  });
}

export function mapSaleItemToRow(
  item: {
    id: string;
    saleId?: string;
    productId?: string;
    productName?: string | null;
    productSku?: string | null;
    serialNumber?: string | null;
    imei1?: string | null;
    inventoryItemId?: string | null;
    quantity?: unknown;
    unitCost?: unknown;
    unitPrice?: unknown;
    lineTotal?: unknown;
    total?: unknown;
    additionalCost?: unknown;
    sale?: { id?: string; saleDate?: Date | string | null };
    returnItems?: Array<{ saleReturn?: { status?: string | null } | null }>;
  },
  brand?: { id?: string; name?: string } | null,
): SoldUnitRow {
  const qty = Number(item.quantity) || 0;
  const cost = francsToMinorInt((Number(item.unitCost) || 0) * qty);
  const extra = francsToMinorInt(item.additionalCost);
  const sold = francsToMinorInt(soldFrancs(item));
  const returned = isReturnedLine(item.returnItems);
  const profit = returned ? 0n : sold - cost;
  return {
    id: item.id,
    saleId: item.saleId ?? item.sale?.id ?? '',
    occurredOn: isoDay(item.sale?.saleDate),
    brandId: brand?.id ?? null,
    brandName: brand?.name || '—',
    productName: item.productName || item.productSku || item.productId || '—',
    serialNumber: item.serialNumber || item.imei1 || '',
    quantity: qty,
    costMinor: cost.toString(),
    soldMinor: sold.toString(),
    extraCostMinor: extra.toString(),
    profitMinor: profit.toString(),
    status: returned ? 'RETURNED' : 'SOLD',
  };
}

export function mapStockUnitToRow(unit: {
  id: string;
  productName?: string | null;
  serialNumber?: string | null;
  imei1?: string | null;
  purchaseCost?: unknown;
  totalCost?: unknown;
  sellingPrice?: unknown;
  status?: string;
  brand?: { id?: string; name?: string } | null;
  soldAt?: Date | string | null;
  updatedAt?: Date | string | null;
}): SoldUnitRow {
  const cost = francsToMinorInt(unit.totalCost ?? unit.purchaseCost);
  const sold = francsToMinorInt(unit.sellingPrice);
  const returned = String(unit.status || '').toUpperCase() === 'RETURNED';
  return {
    id: unit.id,
    saleId: '',
    occurredOn: isoDay(unit.soldAt ?? unit.updatedAt),
    brandId: unit.brand?.id ?? null,
    brandName: unit.brand?.name || '—',
    productName: unit.productName || '—',
    serialNumber: unit.serialNumber || unit.imei1 || '',
    quantity: 1,
    costMinor: cost.toString(),
    soldMinor: sold.toString(),
    extraCostMinor: '0',
    profitMinor: (returned ? 0n : sold - cost).toString(),
    status: returned ? 'RETURNED' : 'SOLD',
  };
}

export function mergeSaleAndStockRows(
  saleItems: Array<{ inventoryItemId?: string | null; serialNumber?: string | null }>,
  saleRows: SoldUnitRow[],
  stockUnits: Array<{
    id: string;
    serialNumber?: string | null;
    productName?: string | null;
    imei1?: string | null;
    purchaseCost?: unknown;
    totalCost?: unknown;
    sellingPrice?: unknown;
    status?: string;
    brand?: { id?: string; name?: string } | null;
    soldAt?: Date | string | null;
    updatedAt?: Date | string | null;
  }>,
): SoldUnitRow[] {
  const coveredIds = new Set(
    saleItems.map((item) => item.inventoryItemId).filter((id): id is string => Boolean(id)),
  );
  const coveredSerials = new Set(
    saleItems.map((item) => item.serialNumber).filter((serial): serial is string => Boolean(serial)),
  );
  const extra = stockUnits
    .filter((unit) => {
      if (coveredIds.has(unit.id)) return false;
      if (unit.serialNumber && coveredSerials.has(unit.serialNumber)) return false;
      return true;
    })
    .map(mapStockUnitToRow);
  return [...saleRows, ...extra];
}

export function brandMapFromProducts(
  products: Array<{ id?: string; brand?: { id?: string; name?: string } | null }>,
): Map<string, { id?: string; name?: string }> {
  const map = new Map<string, { id?: string; name?: string }>();
  for (const product of products) {
    if (product.id && product.brand) map.set(product.id, product.brand);
  }
  return map;
}

export function totalsOf(rows: SoldUnitRow[]): SoldUnitTotals {
  const acc = rows.reduce(
    (sum, row) => {
      sum.costMinor += BigInt(row.costMinor);
      sum.soldMinor += BigInt(row.soldMinor);
      sum.extraCostMinor += BigInt(row.extraCostMinor);
      sum.profitMinor += BigInt(row.profitMinor);
      return sum;
    },
    { costMinor: 0n, soldMinor: 0n, extraCostMinor: 0n, profitMinor: 0n },
  );
  return {
    costMinor: acc.costMinor.toString(),
    soldMinor: acc.soldMinor.toString(),
    extraCostMinor: acc.extraCostMinor.toString(),
    profitMinor: acc.profitMinor.toString(),
  };
}

export function paginateRows<T>(rows: T[], page = 1, pageSize = DEFAULT_SOLD_UNIT_PAGE_SIZE) {
  const p = Math.max(1, Number(page) || 1);
  const size = Math.min(1000, Math.max(1, Number(pageSize) || DEFAULT_SOLD_UNIT_PAGE_SIZE));
  const start = (p - 1) * size;
  return {
    page: p,
    pageSize: size,
    total: rows.length,
    totalPages: Math.max(1, Math.ceil(rows.length / size) || 1),
    items: rows.slice(start, start + size),
  };
}
