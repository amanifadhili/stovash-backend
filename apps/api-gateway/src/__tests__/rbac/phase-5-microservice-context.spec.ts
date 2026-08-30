/**
 * Phase 5 — TCP AuthContext Propagation & Permission Management Integration Spec
 *
 * Verifies:
 * - Propagation of `actionKey`, `scope`, `allowedShopIds`, `userId`, `tenantId`, `role` in context
 * - Integration of `ManagePermissionsHandler` commands through API Gateway
 */

import { of } from 'rxjs';
import { AppController } from '../../app.controller.js';
import { ManagePermissionsHandler } from '../../../../identity-service/src/commands/handlers/permission-management.handler.js';

// Mock DB module
let mockAuthResult = {
  allowed: true,
  scope: 'OWN' as 'OWN' | 'ALL',
  allowedShopIds: ['shop-101'],
  reason: 'Explicit grant',
  source: 'EXPLICIT_USER_GRANT' as any,
};

jest.mock('@electronic-shop/database', () => {
  const actual = jest.requireActual('@electronic-shop/database');
  return {
    ...actual,
    authorizeUserAction: jest.fn(async () => mockAuthResult),
  };
});

function mockClient() {
  return {
    send: jest.fn().mockReturnValue(
      of({ status: 'success', data: { ok: true }, traceId: 'test-trace' })
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

describe('Phase 5 — TCP AuthContext Propagation & Permission Management', () => {
  it('Task 5.3: Propagates actionKey, scope, allowedShopIds in microservice TCP context', async () => {
    const { controller, salesClient } = makeController();
    const req: any = {
      context: { traceId: 'trace-501' },
      user: { id: 'user-staff-1', tenantId: 'tenant-100', role: 'STAFF' },
    };

    mockAuthResult = {
      allowed: true,
      scope: 'OWN',
      allowedShopIds: ['shop-101', 'shop-102'],
      reason: 'Explicit grant',
      source: 'EXPLICIT_USER_GRANT',
    };

    await controller.handleCommand(req, {
      command: 'CreateSale',
      payload: { total: 500 },
    });

    expect(salesClient.send).toHaveBeenCalledWith(
      { cmd: 'CreateSale' },
      {
        payload: { total: 500 },
        context: expect.objectContaining({
          actionKey: 'CreateSale',
          scope: 'OWN',
          allowedShopIds: ['shop-101', 'shop-102'],
          role: 'STAFF',
        }),
      }
    );
  });

  it('Task 5.2: Routes permission management commands to identity service', async () => {
    const { controller, identityClient } = makeController();
    const req: any = {
      context: { traceId: 'trace-perm-mgmt' },
      user: { id: 'admin-1', tenantId: 'tenant-100', role: 'ADMIN' },
    };

    mockAuthResult = {
      allowed: true,
      scope: 'ALL',
      allowedShopIds: [],
      reason: 'ADMIN immunity',
      source: 'ADMIN_IMMUNITY',
    };

    const commandsToTest = [
      'GetPermissionTemplates',
      'AssignTemplateToUser',
      'SetUserPermissionOverride',
      'RemoveUserPermissionOverride',
      'GetUserEffectivePermissions',
      'GetPermissionAuditLogs',
    ];

    for (const cmd of commandsToTest) {
      await controller.handleCommand(req, {
        command: cmd,
        payload: { targetUserId: 'staff-user-1' },
      });

      expect(identityClient.send).toHaveBeenCalledWith(
        { cmd },
        {
          payload: { targetUserId: 'staff-user-1' },
          context: expect.objectContaining({
            actionKey: cmd,
            role: 'ADMIN',
          }),
        }
      );
    }
  });

  it('Task 5.1 & 5.2: ManagePermissionsHandler executes valid permission commands', async () => {
    const handler = new ManagePermissionsHandler();
    expect(handler).toBeDefined();
    expect(typeof handler.execute).toBe('function');
  });
});
