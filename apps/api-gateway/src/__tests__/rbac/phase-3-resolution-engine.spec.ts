/**
 * Phase 3 — Authorization Resolution Engine Unit Tests
 *
 * Tests every rule in the resolution engine against the spec:
 * - Rule 1: ADMIN immunity
 * - Rule 1b: Admin-only command restriction
 * - Rule 2a: Explicit user DENY
 * - Rule 2b: Explicit user GRANT
 * - Rule 2c: Expired permission falls through
 * - Rule 3: Template grant
 * - Rule 3b: Template scope merging
 * - Rule 4: Default deny
 * - Shop restriction enforcement
 */

import { authorizeUserAction } from '@electronic-shop/database';

// ---------------------------------------------------------------------------
// Mock Prisma factory
// ---------------------------------------------------------------------------

type MockUserPermission = {
  isGranted: boolean;
  scope: string;
  allowedShopIds: string[];
  expiresAt: Date | null;
} | null;

type MockTemplatePermission = {
  scope: string;
  allowedShopIds: string[];
};

function makePrisma(opts: {
  userPermission?: MockUserPermission;
  templateAssignments?: Array<{ templateId: string }>;
  templatePermissions?: MockTemplatePermission[];
  throwOnUserPermission?: boolean;
  throwOnTemplate?: boolean;
}): any {
  return {
    userPermission: {
      findUnique: jest.fn(() => {
        if (opts.throwOnUserPermission) throw new Error('DB error');
        return Promise.resolve(opts.userPermission ?? null);
      }),
    },
    userTemplateAssignment: {
      findMany: jest.fn(() => {
        if (opts.throwOnTemplate) throw new Error('DB error');
        return Promise.resolve(opts.templateAssignments ?? []);
      }),
    },
    templatePermission: {
      findMany: jest.fn(() => Promise.resolve(opts.templatePermissions ?? [])),
    },
  };
}

const ADMIN_CTX = { userId: 'u1', tenantId: 'tenant1', role: 'ADMIN' };
const STAFF_CTX = { userId: 'u1', tenantId: 'tenant1', role: 'STAFF' };
const MANAGER_CTX = { userId: 'u1', tenantId: 'tenant1', role: 'MANAGER' };

// ---------------------------------------------------------------------------
// Test suites
// ---------------------------------------------------------------------------

describe('Phase 3 — Resolution Engine: Rule 0 (Public bypass)', () => {
  it('LoginUser is always allowed regardless of role', async () => {
    const res = await authorizeUserAction(makePrisma({}), STAFF_CTX, 'LoginUser');
    expect(res.allowed).toBe(true);
    expect(res.source).toBe('PUBLIC_BYPASS');
    expect(res.scope).toBe('ALL');
  });

  it('CreateTenant is always allowed', async () => {
    const res = await authorizeUserAction(makePrisma({}), STAFF_CTX, 'CreateTenant');
    expect(res.allowed).toBe(true);
    expect(res.source).toBe('PUBLIC_BYPASS');
  });
});

describe('Phase 3 — Resolution Engine: Rule 1 (ADMIN immunity)', () => {
  it('ADMIN always gets allowed=true for any business command', async () => {
    const prisma = makePrisma({});
    const res = await authorizeUserAction(prisma, ADMIN_CTX, 'CreateSale');
    expect(res.allowed).toBe(true);
    expect(res.scope).toBe('ALL');
    expect(res.allowedShopIds).toEqual([]);
    expect(res.source).toBe('ADMIN_IMMUNITY');
  });

  it('ADMIN is allowed even for admin-only commands', async () => {
    const res = await authorizeUserAction(makePrisma({}), ADMIN_CTX, 'CreateShop');
    expect(res.allowed).toBe(true);
    expect(res.source).toBe('ADMIN_IMMUNITY');
  });

  it('ADMIN does NOT query userPermission (no DB calls needed)', async () => {
    const prisma = makePrisma({});
    await authorizeUserAction(prisma, ADMIN_CTX, 'GetProducts');
    expect(prisma.userPermission.findUnique).not.toHaveBeenCalled();
    expect(prisma.userTemplateAssignment.findMany).not.toHaveBeenCalled();
  });

  it('ADMIN gets ALL scope even when no permission record exists', async () => {
    const prisma = makePrisma({ userPermission: null, templateAssignments: [] });
    const res = await authorizeUserAction(prisma, ADMIN_CTX, 'GetSales');
    expect(res.allowed).toBe(true);
    expect(res.scope).toBe('ALL');
  });
});

describe('Phase 3 — Resolution Engine: Rule 1b (Admin-only restriction)', () => {
  it('STAFF cannot access CreateShop (admin-only)', async () => {
    const res = await authorizeUserAction(makePrisma({}), STAFF_CTX, 'CreateShop');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('ADMIN_ONLY_RESTRICTION');
  });

  it('STAFF cannot access UpdateShop (admin-only)', async () => {
    const res = await authorizeUserAction(makePrisma({}), STAFF_CTX, 'UpdateShop');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('ADMIN_ONLY_RESTRICTION');
  });

  it('STAFF cannot access AssignTemplateToUser even with template grant', async () => {
    const prisma = makePrisma({
      templateAssignments: [{ templateId: 't1' }],
      templatePermissions: [{ scope: 'ALL', allowedShopIds: [] }],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'AssignTemplateToUser');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('ADMIN_ONLY_RESTRICTION');
    // DB should NOT even be queried for admin-only commands
    expect(prisma.userPermission.findUnique).not.toHaveBeenCalled();
  });

  it('MANAGER (non-admin) also cannot access admin-only commands', async () => {
    const res = await authorizeUserAction(makePrisma({}), MANAGER_CTX, 'CreateShop');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('ADMIN_ONLY_RESTRICTION');
  });
});

describe('Phase 3 — Resolution Engine: Rule 2 (Explicit UserPermission)', () => {
  it('explicit DENY returns EXPLICIT_USER_DENY', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: false,
        scope: 'ALL',
        allowedShopIds: [],
        expiresAt: null,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('EXPLICIT_USER_DENY');
  });

  it('explicit DENY beats template grants', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: false,
        scope: 'ALL',
        allowedShopIds: [],
        expiresAt: null,
      },
      templateAssignments: [{ templateId: 't1' }],
      templatePermissions: [{ scope: 'ALL', allowedShopIds: [] }],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('EXPLICIT_USER_DENY');
    // Templates should NOT be queried when explicit deny exists
    expect(prisma.userTemplateAssignment.findMany).not.toHaveBeenCalled();
  });

  it('explicit GRANT with scope=OWN returns OWN scope', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'OWN',
        allowedShopIds: [],
        expiresAt: null,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'GetSales');
    expect(res.allowed).toBe(true);
    expect(res.scope).toBe('OWN');
    expect(res.source).toBe('EXPLICIT_USER_GRANT');
  });

  it('explicit GRANT with scope=ALL returns ALL scope', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'ALL',
        allowedShopIds: [],
        expiresAt: null,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'GetSales');
    expect(res.allowed).toBe(true);
    expect(res.scope).toBe('ALL');
    expect(res.source).toBe('EXPLICIT_USER_GRANT');
  });

  it('expired explicit permission falls through to template check', async () => {
    const past = new Date(Date.now() - 1000); // 1 second ago
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'ALL',
        allowedShopIds: [],
        expiresAt: past,
      },
      templateAssignments: [],
      templatePermissions: [],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('DEFAULT_DENY');
  });

  it('non-expired permission (future expiresAt) is still active', async () => {
    const future = new Date(Date.now() + 1_000_000);
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'ALL',
        allowedShopIds: [],
        expiresAt: future,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(true);
    expect(res.source).toBe('EXPLICIT_USER_GRANT');
  });

  it('shop restriction in explicit grant blocks unauthorized shop', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'ALL',
        allowedShopIds: ['shop-A'],
        expiresAt: null,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale', 'shop-B');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('SHOP_RESTRICTION_DENIAL');
  });

  it('shop restriction allows access when shop matches', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'ALL',
        allowedShopIds: ['shop-A'],
        expiresAt: null,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale', 'shop-A');
    expect(res.allowed).toBe(true);
    expect(res.allowedShopIds).toEqual(['shop-A']);
  });

  it('empty allowedShopIds in grant = all shops permitted', async () => {
    const prisma = makePrisma({
      userPermission: {
        isGranted: true,
        scope: 'ALL',
        allowedShopIds: [],
        expiresAt: null,
      },
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale', 'any-shop');
    expect(res.allowed).toBe(true);
    expect(res.allowedShopIds).toEqual([]);
  });
});

describe('Phase 3 — Resolution Engine: Rule 3 (Template grant)', () => {
  it('template grant allows access when no explicit permission exists', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [{ templateId: 't1' }],
      templatePermissions: [{ scope: 'ALL', allowedShopIds: [] }],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'GetSales');
    expect(res.allowed).toBe(true);
    expect(res.source).toBe('TEMPLATE_GRANT');
  });

  it('multiple templates: ANY scope=ALL promotes effective scope to ALL', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [{ templateId: 't1' }, { templateId: 't2' }],
      templatePermissions: [
        { scope: 'OWN', allowedShopIds: ['shop-A'] },
        { scope: 'ALL', allowedShopIds: [] },
      ],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'GetSales');
    expect(res.allowed).toBe(true);
    expect(res.scope).toBe('ALL');
  });

  it('multiple templates: all OWN scope stays OWN', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [{ templateId: 't1' }, { templateId: 't2' }],
      templatePermissions: [
        { scope: 'OWN', allowedShopIds: ['shop-A'] },
        { scope: 'OWN', allowedShopIds: ['shop-B'] },
      ],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'GetSales');
    expect(res.allowed).toBe(true);
    expect(res.scope).toBe('OWN');
    // Union of shop lists
    expect(res.allowedShopIds.sort()).toEqual(['shop-A', 'shop-B']);
  });

  it('no templates assigned → default deny', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'GetSales');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('DEFAULT_DENY');
  });

  it('template shop restriction blocks unauthorized shop access', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [{ templateId: 't1' }],
      templatePermissions: [{ scope: 'ALL', allowedShopIds: ['shop-A'] }],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale', 'shop-B');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('SHOP_RESTRICTION_DENIAL');
  });
});

describe('Phase 3 — Resolution Engine: Rule 4 (Default deny)', () => {
  it('STAFF with no permissions gets DEFAULT_DENY', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(false);
    expect(res.scope).toBe('OWN');
    expect(res.source).toBe('DEFAULT_DENY');
  });

  it('DEFAULT_DENY reason references the actionKey', async () => {
    const prisma = makePrisma({
      userPermission: null,
      templateAssignments: [],
    });
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'IssueRefund');
    expect(res.reason).toContain('IssueRefund');
  });
});

describe('Phase 3 — Resolution Engine: DB error resilience', () => {
  it('userPermission DB error falls through to template check, not auto-allow', async () => {
    const prisma = makePrisma({
      throwOnUserPermission: true,
      templateAssignments: [],
    });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('DEFAULT_DENY');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('template DB error defaults to DENY, not auto-allow', async () => {
    const prisma = makePrisma({
      userPermission: null,
      throwOnTemplate: true,
    });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const res = await authorizeUserAction(prisma, STAFF_CTX, 'CreateSale');
    expect(res.allowed).toBe(false);
    expect(res.source).toBe('DEFAULT_DENY');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
