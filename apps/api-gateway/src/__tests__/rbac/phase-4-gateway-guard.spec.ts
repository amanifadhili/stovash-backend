/**
 * Phase 4 — Gateway PermissionGuard & Command Flow Integration Tests
 *
 * Verifies:
 * - Public command bypass
 * - ADMIN immunity
 * - Dynamic resolution check for STAFF
 * - Structured HTTP 403 Forbidden response payload
 * - Sanitization of client-supplied `scope` and `allowedShopIds` in request body
 * - Context enrichment (`req.context.actionKey`, `req.context.scope`, `req.context.allowedShopIds`)
 * - Legacy fallback behavior when `ENABLE_DYNAMIC_RBAC=false`
 */

import { HttpException, HttpStatus } from '@nestjs/common';
import { of } from 'rxjs';

// Mock DB module before importing controller
let mockAuthResult = {
  allowed: true,
  scope: 'ALL' as 'OWN' | 'ALL',
  allowedShopIds: [] as string[],
  reason: 'ADMIN immunity',
  source: 'ADMIN_IMMUNITY' as any,
};
let authorizeCallCount = 0;

jest.mock('@electronic-shop/database', () => {
  const actual = jest.requireActual('@electronic-shop/database');
  return {
    ...actual,
    authorizeUserAction: jest.fn(async () => {
      authorizeCallCount++;
      return mockAuthResult;
    }),
  };
});

import { AppController } from '../../app.controller.js';

function mockClient() {
  return {
    send: jest.fn().mockReturnValue(
      of({ status: 'success', data: { ok: true }, traceId: 'test-trace-id' })
    ),
  };
}

function makeController() {
  const identityClient = mockClient();
  const tenantClient = mockClient();
  const accountingClient = mockClient();
  const inventoryClient = mockClient();
  const purchaseClient = mockClient();
  const salesClient = mockClient();
  const supplierClient = mockClient();
  const treasuryClient = mockClient();
  const readinessService = {} as any;

  const controller = new AppController(
    identityClient as any,
    tenantClient as any,
    accountingClient as any,
    inventoryClient as any,
    purchaseClient as any,
    salesClient as any,
    supplierClient as any,
    treasuryClient as any,
    readinessService
  );

  return {
    controller,
    identityClient,
    salesClient,
    inventoryClient,
    purchaseClient,
    accountingClient,
  };
}

describe('Phase 4 — Gateway PermissionGuard & Command Flow', () => {
  const originalEnv = process.env.ENABLE_DYNAMIC_RBAC;

  beforeEach(() => {
    authorizeCallCount = 0;
    mockAuthResult = {
      allowed: true,
      scope: 'ALL',
      allowedShopIds: [],
      reason: 'ADMIN immunity',
      source: 'ADMIN_IMMUNITY',
    };
  });

  afterEach(() => {
    process.env.ENABLE_DYNAMIC_RBAC = originalEnv;
  });

  it('Task 4.1 & 4.3: Allowed action updates context and forwards to microservice', async () => {
    const { controller, salesClient } = makeController();
    const req: any = {
      context: { traceId: 'trace-1' },
      user: { id: 'u-admin-1', tenantId: 't-1', role: 'ADMIN' },
    };

    const res = await controller.handleCommand(req, {
      command: 'CreateSale',
      payload: { amount: 100 },
    });

    expect(req.context.actionKey).toBe('CreateSale');
    expect(req.context.scope).toBe('ALL');
    expect(req.context.allowedShopIds).toEqual([]);
    expect(req.context.role).toBe('ADMIN');
    expect(salesClient.send).toHaveBeenCalled();
    expect(res).toEqual({ status: 'success', data: { ok: true }, traceId: 'test-trace-id' });
  });

  it('Task 4.3: Forbidden action throws 403 with structured response', async () => {
    const { controller } = makeController();
    const req: any = {
      context: { traceId: 'trace-forbidden' },
      user: { id: 'u-staff-1', tenantId: 't-1', role: 'STAFF' },
    };

    mockAuthResult = {
      allowed: false,
      scope: 'OWN',
      allowedShopIds: [],
      reason: "Default deny: user has no active grant for permission 'CreateSale'",
      source: 'DEFAULT_DENY',
    };

    try {
      await controller.handleCommand(req, {
        command: 'CreateSale',
        payload: {},
      });
      throw new Error('Expected 403 Forbidden exception');
    } catch (err: any) {
      expect(err).toBeInstanceOf(HttpException);
      expect(err.getStatus()).toBe(HttpStatus.FORBIDDEN);
      const response = err.getResponse();
      expect(response).toMatchObject({
        status: 'error',
        errorCode: 'FORBIDDEN',
        actionKey: 'CreateSale',
        reason: expect.stringContaining('Default deny'),
        source: 'DEFAULT_DENY',
        traceId: 'trace-forbidden',
      });
    }
  });

  it('Task 4.4: Client-injected scope and allowedShopIds in payload are stripped', async () => {
    const { controller, salesClient } = makeController();
    const req: any = {
      context: { traceId: 'trace-spoof' },
      user: { id: 'u-staff-2', tenantId: 't-1', role: 'STAFF' },
    };

    mockAuthResult = {
      allowed: true,
      scope: 'OWN',
      allowedShopIds: ['shop-A'],
      reason: 'Explicit grant',
      source: 'EXPLICIT_USER_GRANT',
    };

    const maliciousPayload: any = {
      items: [{ id: 'p1' }],
      scope: 'ALL', // Client trying to spoof ALL scope in body
      allowedShopIds: ['shop-B', 'shop-C'], // Client trying to spoof shops
    };

    await controller.handleCommand(req, {
      command: 'CreateSale',
      payload: maliciousPayload,
    });

    // Client body parameters must be stripped
    expect(maliciousPayload.scope).toBeUndefined();
    expect(maliciousPayload.allowedShopIds).toBeUndefined();

    // Server-verified context must be enforced
    expect(req.context.scope).toBe('OWN');
    expect(req.context.allowedShopIds).toEqual(['shop-A']);
    expect(salesClient.send).toHaveBeenCalled();
  });

  it('Task 4.2: ENABLE_DYNAMIC_RBAC=false falls back to legacy role guard', async () => {
    process.env.ENABLE_DYNAMIC_RBAC = 'false';
    const { controller, salesClient } = makeController();
    const req: any = {
      context: { traceId: 'trace-legacy' },
      user: { id: 'u-staff-3', tenantId: 't-1', role: 'STAFF' },
    };

    // CreateSale in COMMAND_ROLES allows STAFF
    await controller.handleCommand(req, {
      command: 'CreateSale',
      payload: {},
    });

    expect(salesClient.send).toHaveBeenCalled();
  });

  it('Task 4.1: Public command bypasses authorization check', async () => {
    const { controller, identityClient } = makeController();
    const req: any = {
      context: { traceId: 'trace-public' },
    };

    await controller.handleCommand(req, {
      command: 'LoginUser',
      payload: { email: 'test@example.com', password: 'secret' },
    });

    // Public command must NOT trigger authorizeUserAction query
    expect(authorizeCallCount).toBe(0);
    expect(identityClient.send).toHaveBeenCalled();
  });
});
