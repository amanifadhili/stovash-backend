/**
 * Shared master data (products, brands, categories) can be either:
 * - owned by a specific shop (shopId set), optionally shared with specific shops
 *   via sharedShopIds, or
 * - shared with ALL shops (shopId null).
 *
 * A shop can see a record if:
 *   - it is shared with all shops (shopId IS NULL), or
 *   - the active shop owns it (shopId = active), or
 *   - the record has been shared with the active shop (sharedShopIds has active).
 *
 * This helper builds that Prisma `where` condition.
 */
export function visibleToShopFilter(tenantId: string, shopId?: string | null): any {
  const where: any = { tenantId };
  if (shopId) {
    where.OR = [
      { shopId: null },
      { shopId },
      { sharedShopIds: { has: shopId } },
    ];
  } else {
    // No active shop context: only records shared with all shops are visible.
    where.shopId = null;
  }
  return where;
}

/**
 * Derive how a record should be persisted based on the explicit visibility
 * choice from the create/edit form:
 *   - sharedWithOtherShops === false  → owned by the active shop only
 *                                       (shopId = current shop, no shares)
 *   - sharedWithOtherShops === true and sharedShopIds provided
 *                                   → owned by the active shop, shared with the
 *                                     chosen shops
 *   - sharedWithOtherShops === true and NO shops chosen
 *                                   → shared with ALL shops (shopId = null)
 *
 * For backward compatibility, if the flag is absent we keep the current
 * shopId/shopId-null semantics from the payload.
 *
 * Returns { shopId, sharedShopIds }.
 */
export function resolveSharedConfig(
  payload: any,
  contextShopId?: string | null,
): { shopId: string | null; sharedShopIds: string[] } {
  const hasFlag = payload?.sharedWithOtherShops !== undefined;
  if (!hasFlag) {
    // Legacy path: derive from shopId as before.
    const shopId = effectiveShopId(payload?.shopId, contextShopId);
    return { shopId, sharedShopIds: Array.isArray(payload?.sharedShopIds) ? payload.sharedShopIds : [] };
  }

  if (payload.sharedWithOtherShops === false) {
    return { shopId: contextShopId || null, sharedShopIds: [] };
  }

  // sharedWithOtherShops === true
  const chosen = Array.isArray(payload?.sharedShopIds) ? payload.sharedShopIds.map((s: any) => String(s)).filter(Boolean) : [];
  if (chosen.length === 0) {
    // Share with all shops.
    return { shopId: null, sharedShopIds: [] };
  }
  // Share with chosen shops; owned by the current shop.
  return { shopId: contextShopId || null, sharedShopIds: chosen };
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

