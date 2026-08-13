/**
 * Suppliers can be either:
 * - owned by a specific shop (shopId set), optionally shared with specific
 *   shops via sharedShopIds, or
 * - shared with ALL shops (shopId null).
 *
 * A shop can see a supplier if it is shared with all shops, the active shop
 * owns it, or it has been shared with the active shop.
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

/**
 * Resolve how a supplier should be persisted based on the explicit visibility
 * choice from the create/edit form. See inventory-service visibility.ts for
 * the full semantics.
 */
export function resolveSharedConfig(
  payload: any,
  contextShopId?: string | null,
): { shopId: string | null; sharedShopIds: string[] } {
  const hasFlag = payload?.sharedWithOtherShops !== undefined;
  if (!hasFlag) {
    const shopId = effectiveShopId(payload?.shopId, contextShopId);
    return { shopId, sharedShopIds: Array.isArray(payload?.sharedShopIds) ? payload.sharedShopIds : [] };
  }

  if (payload.sharedWithOtherShops === false) {
    return { shopId: contextShopId || null, sharedShopIds: [] };
  }

  const chosen = Array.isArray(payload?.sharedShopIds) ? payload.sharedShopIds.map((s: any) => String(s)).filter(Boolean) : [];
  if (chosen.length === 0) {
    return { shopId: null, sharedShopIds: [] };
  }
  return { shopId: contextShopId || null, sharedShopIds: chosen };
}
