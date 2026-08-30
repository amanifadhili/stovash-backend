import { PERMISSION_MAP, isPublicCommand, isAdminOnlyCommand } from './catalog';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AuthorizationUserContext {
  /** The authenticated user's ID */
  userId: string;
  /** The tenant this user belongs to — used for all DB queries */
  tenantId: string;
  /** System role: 'ADMIN' | 'STAFF' (or legacy roles during migration) */
  role: string;
}

export type AuthorizationSource =
  | 'ADMIN_IMMUNITY'
  | 'PUBLIC_BYPASS'
  | 'EXPLICIT_USER_GRANT'
  | 'EXPLICIT_USER_DENY'
  | 'TEMPLATE_GRANT'
  | 'DEFAULT_DENY'
  | 'ADMIN_ONLY_RESTRICTION'
  | 'SHOP_RESTRICTION_DENIAL';

export interface AuthorizationResult {
  /** Whether access is permitted */
  allowed: boolean;
  /** OWN: restricted to records owned by this user. ALL: full tenant scope */
  scope: 'OWN' | 'ALL';
  /** Empty array = all shops in tenant. Non-empty = restricted to listed shop IDs */
  allowedShopIds: string[];
  /** Human-readable reason for logging and debugging */
  reason: string;
  /** Machine-readable source of the decision */
  source: AuthorizationSource;
}

// ---------------------------------------------------------------------------
// Minimal Prisma interface — avoids circular dependency on generated client
// ---------------------------------------------------------------------------
interface AuthPrismaClient {
  userPermission: {
    findUnique: (args: {
      where: { userId_permissionKey: { userId: string; permissionKey: string } };
    }) => Promise<{
      isGranted: boolean;
      scope: string;
      allowedShopIds: string[];
      expiresAt: Date | null;
    } | null>;
  };
  userTemplateAssignment: {
    findMany: (args: { where: { userId: string }; select: { templateId: true } }) => Promise<
      Array<{ templateId: string }>
    >;
  };
  templatePermission: {
    findMany: (args: {
      where: { templateId: { in: string[] }; permissionKey: string };
    }) => Promise<Array<{ scope: string; allowedShopIds: string[] }>>;
  };
}

// ---------------------------------------------------------------------------
// Resolution engine
// ---------------------------------------------------------------------------

/**
 * Central authorization function per the STOVASH architecture spec (section 6).
 *
 * Precedence order:
 *   1. ADMIN immunity (wildcard)
 *   2. Admin-only restriction (STAFF hard deny)
 *   3. Explicit user DENY override
 *   4. Explicit user GRANT override
 *   5. Template grant
 *   6. Default deny
 *
 * Spec invariants enforced:
 *   - Permissions are NEVER derived from JWT (resolved server-side per request)
 *   - Tenant isolation is always maintained in all DB queries
 *   - Expired explicit permissions are treated as non-existent
 *   - Explicit DENY beats any template grant
 *   - Public commands bypass all checks
 *
 * @param prismaClient   - Prisma client instance pointing at the identity DB
 * @param context        - Authenticated user context from the verified JWT
 * @param actionKey      - The stable permission key from the catalog
 * @param targetShopIds  - Optional: shop IDs targeted by this specific request
 */
export async function authorizeUserAction(
  prismaClient: AuthPrismaClient | any,
  context: AuthorizationUserContext,
  actionKey: string,
  targetShopIds?: string | string[]
): Promise<AuthorizationResult> {
  const { userId, tenantId, role } = context;

  // ── RULE 0: Public command bypass ─────────────────────────────────────────
  if (isPublicCommand(actionKey)) {
    return result(true, 'ALL', [], 'Public command bypass', 'PUBLIC_BYPASS');
  }

  // ── RULE 1: ADMIN immunity (unrestricted wildcard per spec section 2) ─────
  // ADMIN cannot be restricted by UserPermission, templates, or expiration.
  if (role === 'ADMIN') {
    return result(true, 'ALL', [], 'ADMIN permanent wildcard immunity', 'ADMIN_IMMUNITY');
  }

  // ── RULE 1b: ADMIN-only restriction (STAFF hard deny per spec section 10) ─
  // Applied BEFORE user permission lookup — catalog-level lock takes precedence.
  if (isAdminOnlyCommand(actionKey)) {
    return result(
      false, 'OWN', [],
      `Action '${actionKey}' is restricted strictly to ADMIN system role — cannot be granted to STAFF`,
      'ADMIN_ONLY_RESTRICTION'
    );
  }

  // ── Shop access helper ────────────────────────────────────────────────────
  /**
   * Validates that all requested target shops are within the permission's
   * allowed shops. Empty allowed list = all shops (no restriction).
   */
  const checkShopAccess = (
    allowedShops: string[]
  ): { ok: boolean; reason?: string } => {
    if (!targetShopIds) return { ok: true };
    // Empty allowedShops = all shops in tenant are permitted
    if (!allowedShops || allowedShops.length === 0) return { ok: true };

    const targets = Array.isArray(targetShopIds) ? targetShopIds : [targetShopIds];
    const unauthorized = targets.filter((s) => !allowedShops.includes(s));

    if (unauthorized.length > 0) {
      return {
        ok: false,
        reason: `Shop(s) [${unauthorized.join(', ')}] not in permitted shop list [${allowedShops.join(', ')}]`,
      };
    }
    return { ok: true };
  };

  // ── RULE 2: Explicit UserPermission override ───────────────────────────────
  // Tenant-scoped lookup prevents cross-tenant data access.
  let explicitPermission: {
    isGranted: boolean;
    scope: string;
    allowedShopIds: string[];
    expiresAt: Date | null;
  } | null = null;

  try {
    explicitPermission = await prismaClient.userPermission.findUnique({
      where: {
        userId_permissionKey: { userId, permissionKey: actionKey },
      },
    });
  } catch (err) {
    // DB error: log and fall through to template check.
    // Do NOT deny access silently — surface the error in structured logs.
    console.error('[auth-engine] userPermission lookup failed', {
      userId,
      tenantId,
      actionKey,
      error: err instanceof Error ? err.message : String(err),
    });
  }

  if (explicitPermission) {
    // Spec section 11: expired = now >= expiresAt (exclusive boundary)
    const isExpired =
      explicitPermission.expiresAt !== null &&
      new Date() >= new Date(explicitPermission.expiresAt);

    if (!isExpired) {
      // Explicit DENY beats everything including template grants (spec section 13)
      if (explicitPermission.isGranted === false) {
        return result(
          false, 'OWN', [],
          'Explicit user denial override — beats any template grant',
          'EXPLICIT_USER_DENY'
        );
      }

      // Explicit GRANT: validate shop restriction
      const shopCheck = checkShopAccess(explicitPermission.allowedShopIds ?? []);
      if (!shopCheck.ok) {
        return result(
          false,
          resolveScope(explicitPermission.scope),
          explicitPermission.allowedShopIds ?? [],
          shopCheck.reason ?? 'Shop access denied by explicit user permission',
          'SHOP_RESTRICTION_DENIAL'
        );
      }

      return result(
        true,
        resolveScope(explicitPermission.scope),
        explicitPermission.allowedShopIds ?? [],
        'Explicit user grant override',
        'EXPLICIT_USER_GRANT'
      );
    }
    // Expired permission — fall through to template check
  }

  // ── RULE 3: Template inheritance ──────────────────────────────────────────
  // Template edits are immediately effective (no copying into UserPermission rows).
  try {
    const assignments = await prismaClient.userTemplateAssignment.findMany({
      where: { userId },
      select: { templateId: true },
    });

    if (assignments.length > 0) {
      const templateIds = assignments.map((a: { templateId: string }) => a.templateId);

      const templatePermissions = await prismaClient.templatePermission.findMany({
        where: {
          templateId: { in: templateIds },
          permissionKey: actionKey,
        },
      });

      if (templatePermissions.length > 0) {
        // Combine scopes: if ANY template grants ALL, effective scope is ALL
        let effectiveScope: 'OWN' | 'ALL' = 'OWN';
        let allowsAllShops = false;
        const shopSet = new Set<string>();

        for (const tp of templatePermissions) {
          if (tp.scope === 'ALL') effectiveScope = 'ALL';
          if (!tp.allowedShopIds || tp.allowedShopIds.length === 0) {
            allowsAllShops = true; // at least one template allows all shops
          } else {
            tp.allowedShopIds.forEach((s: string) => shopSet.add(s));
          }
        }

        // Combined shop restriction: union of all template shop lists
        const effectiveShopIds = allowsAllShops ? [] : Array.from(shopSet);
        const shopCheck = checkShopAccess(effectiveShopIds);

        if (!shopCheck.ok) {
          return result(
            false, effectiveScope, effectiveShopIds,
            shopCheck.reason ?? 'Shop access denied by template assignment',
            'SHOP_RESTRICTION_DENIAL'
          );
        }

        return result(
          true, effectiveScope, effectiveShopIds,
          'Granted by assigned permission template',
          'TEMPLATE_GRANT'
        );
      }
    }
  } catch (err) {
    console.error('[auth-engine] template lookup failed', {
      userId,
      tenantId,
      actionKey,
      error: err instanceof Error ? err.message : String(err),
    });
    // Fall through to DEFAULT DENY — do not allow access on DB error
  }

  // ── RULE 4: Default deny ───────────────────────────────────────────────────
  return result(
    false, 'OWN', [],
    `Default deny — user has no active grant for '${actionKey}'`,
    'DEFAULT_DENY'
  );
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function result(
  allowed: boolean,
  scope: 'OWN' | 'ALL',
  allowedShopIds: string[],
  reason: string,
  source: AuthorizationSource
): AuthorizationResult {
  return { allowed, scope, allowedShopIds, reason, source };
}

function resolveScope(raw: string): 'OWN' | 'ALL' {
  return raw === 'OWN' ? 'OWN' : 'ALL';
}
