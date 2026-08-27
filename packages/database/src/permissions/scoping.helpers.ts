/**
 * Database Scoping & Shop Location Security Helpers
 *
 * Enforces OWN/ALL data visibility restrictions and shop location filtering
 * across Prisma queries for all microservices.
 */

export interface ScopeFilterOptions {
  /** Field representing entity ownership (defaults to 'createdById') */
  ownerField?: 'createdById' | 'createdBy' | 'userId' | 'sellerId' | string;
  /** Field representing shop location (defaults to 'shopId') */
  shopField?: 'shopId' | 'fromShopId' | 'toShopId' | string;
}

export interface SecurityContext {
  role?: 'ADMIN' | 'STAFF' | string;
  scope?: 'OWN' | 'ALL';
  userId?: string;
  tenantId?: string;
  allowedShopIds?: string[];
  shopId?: string;
}

/**
 * Mutates/enriches a Prisma `where` clause with ownership and shop location constraints.
 *
 * @param where The base Prisma query where object
 * @param context The request/command security context
 * @param options Custom options for field names
 */
export function applyDatabaseScopeFilter(
  where: Record<string, any>,
  context?: SecurityContext,
  options: ScopeFilterOptions = {}
): Record<string, any> {
  if (!context) return where;

  // Rule 1: Tenant Isolation
  if (context.tenantId && !where.tenantId) {
    where.tenantId = context.tenantId;
  }

  // Rule 2: OWN Scope Enforcement (non-ADMIN)
  if (context.scope === 'OWN' && context.role !== 'ADMIN' && context.userId) {
    const ownerField = options.ownerField || 'createdById';
    where[ownerField] = context.userId;
  }

  // Rule 3: Shop Location Filtering
  const shopField = options.shopField || 'shopId';

  // If user has an explicit allowedShopIds restriction array
  if (context.allowedShopIds && Array.isArray(context.allowedShopIds) && context.allowedShopIds.length > 0) {
    where[shopField] = { in: context.allowedShopIds };
  } else if (context.shopId) {
    where[shopField] = context.shopId;
  }

  return where;
}

/**
 * Validates cross-shop operations (such as TransferInventory).
 * Ensures non-ADMIN users have permission for BOTH source and destination shops.
 */
export function validateCrossShopTransferAccess(
  fromShopId: string,
  toShopId: string,
  context?: SecurityContext
): { allowed: boolean; reason?: string } {
  if (!context || context.role === 'ADMIN') {
    return { allowed: true };
  }

  // If no allowedShopIds array is specified, allow by default
  if (!context.allowedShopIds || context.allowedShopIds.length === 0) {
    return { allowed: true };
  }

  const canAccessFrom = context.allowedShopIds.includes(fromShopId);
  const canAccessTo = context.allowedShopIds.includes(toShopId);

  if (!canAccessFrom || !canAccessTo) {
    const deniedShop = !canAccessFrom ? `source shop (${fromShopId})` : `destination shop (${toShopId})`;
    return {
      allowed: false,
      reason: `Transfer denied: User is not authorized for ${deniedShop}.`,
    };
  }

  return { allowed: true };
}
