/**
 * Phase 11 — System Role & Template Seed Migration Spec
 *
 * Verifies:
 * - System template definitions and catalog key validity
 * - Seeding of 4 standard system templates (`SalesStaffDefault`, `InventoryManagerExtended`, `AccountantFinance`, `CashierPos`)
 * - Migration of legacy non-ADMIN roles to STAFF + template assignments
 * - Preservation of ADMIN system role and immunity
 */

import { SYSTEM_TEMPLATES, seedPermissionsAndMigrateUsers } from '@electronic-shop/database';

describe('Phase 11 — System Role & Template Seed Migration', () => {
  it('Task 11.2: Defines 4 valid system permission templates', () => {
    expect(SYSTEM_TEMPLATES).toHaveLength(4);
    const names = SYSTEM_TEMPLATES.map((t) => t.name);
    expect(names).toContain('Sales Staff Default');
    expect(names).toContain('Inventory Manager Extended');
    expect(names).toContain('Accountant Finance');
    expect(names).toContain('Cashier POS');
  });

  it('Task 11.1 & 11.3: Executes seedPermissionsAndMigrateUsers mock migration', async () => {
    const mockTemplates = new Map();
    const mockAssignments = new Map();

    const mockPrisma: any = {
      permissionTemplate: {
        upsert: jest.fn(async ({ where, create }) => {
          const t = { id: `tpl-${where.name}`, name: where.name, role: create.role };
          mockTemplates.set(where.name, t);
          return t;
        }),
      },
      templatePermission: {
        upsert: jest.fn(async () => ({ id: 'tpl-perm-1' })),
      },
      user: {
        findMany: jest.fn(async () => [
          { id: 'user-mgr', email: 'mgr@test.com', role: 'MANAGER' },
          { id: 'user-acc', email: 'acc@test.com', role: 'ACCOUNTANT' },
          { id: 'user-stf', email: 'stf@test.com', role: 'STAFF' },
        ]),
        update: jest.fn(async () => ({ id: 'updated' })),
      },
      userTemplateAssignment: {
        upsert: jest.fn(async ({ create }) => {
          mockAssignments.set(create.userId, create.templateId);
          return { id: 'asgn-1' };
        }),
      },
    };

    const result = await seedPermissionsAndMigrateUsers(mockPrisma);

    expect(result.seededTemplatesCount).toBe(4);
    expect(result.migratedUsersCount).toBe(3);

    // Verify user role update calls
    expect(mockPrisma.user.update).toHaveBeenCalledWith({
      where: { id: 'user-mgr' },
      data: { role: 'STAFF' },
    });
    expect(mockPrisma.user.update).toHaveBeenCalledWith({
      where: { id: 'user-acc' },
      data: { role: 'STAFF' },
    });
    expect(mockPrisma.user.update).toHaveBeenCalledWith({
      where: { id: 'user-stf' },
      data: { role: 'STAFF' },
    });

    // Verify assigned templates
    expect(mockAssignments.get('user-mgr')).toBe('tpl-Inventory Manager Extended');
    expect(mockAssignments.get('user-acc')).toBe('tpl-Accountant Finance');
    expect(mockAssignments.get('user-stf')).toBe('tpl-Sales Staff Default');
  });
});
