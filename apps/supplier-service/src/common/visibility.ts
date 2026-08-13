/**
 * Suppliers can be either:
 * - shared at the tenant level (shopId is null), or
 * - owned by a specific shop (shopId is set).
 *
 * When reading suppliers the active shop must only see tenant-shared
 * suppliers plus suppliers it owns.
 */
export function visibleToShopFilter(tenantId: string, shopId?: string | null): any {
  const where: any = { tenantId };
  if (shopId) {
    where.OR = [{ shopId: null }, { shopId }];
  } else {
    where.shopId = null;
  }
  return where;
}

export function visibleRecordFilter(tenantId: string, id: string, shopId?: string | null): any {
  return { ...visibleToShopFilter(tenantId, shopId), id };
}

export function effectiveShopId(payloadShopId: unknown, contextShopId?: string | null): string | null {
  if (payloadShopId) return payloadShopId as string;
  if (payloadShopId === null || payloadShopId === '') return null;
  return contextShopId || null;
}
