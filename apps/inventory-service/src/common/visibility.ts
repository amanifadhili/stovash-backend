/**
 * Shared master data (products, brands, categories) can be either:
 * - shared at the tenant level (shopId is null), or
 * - owned by a specific shop (shopId is set).
 *
 * When reading such records the active shop must only see tenant-shared
 * records plus records it owns. This helper builds that Prisma `where`
 * condition.
 */
export function visibleToShopFilter(tenantId: string, shopId?: string | null): any {
  const where: any = { tenantId };
  if (shopId) {
    where.OR = [{ shopId: null }, { shopId }];
  } else {
    // No active shop context: only tenant-shared records are visible.
    where.shopId = null;
  }
  return where;
}

/**
 * Derive the effective shopId for a CREATE operation.
 * - Explicit null/empty payload.shopId  → shared at tenant level (returns null)
 * - A provided payload.shopId            → that shop
 * - Otherwise                            → the active shop context
 */
export function effectiveShopId(payloadShopId: unknown, contextShopId?: string | null): string | null {
  if (payloadShopId) return payloadShopId as string;
  if (payloadShopId === null || payloadShopId === '') return null;
  return contextShopId || null;
}

/**
 * Like visibleToShopFilter but used when locating a single record by id for
 * reads/updates/deletes: the record must belong to the tenant and be either
 * tenant-shared or owned by the active shop.
 */
export function visibleRecordFilter(tenantId: string, id: string, shopId?: string | null): any {
  return { ...visibleToShopFilter(tenantId, shopId), id };
}
