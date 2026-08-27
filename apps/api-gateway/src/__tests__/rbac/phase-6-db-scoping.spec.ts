/**
 * Phase 6 — Database Scoping (OWN / ALL) & Shop Location Security Spec
 *
 * Verifies:
 * - Tenant isolation filter application
 * - OWN scope restriction enforcement (`createdById`, `createdBy`) for STAFF users
 * - ALL scope bypass for STAFF with ALL scope permission
 * - ADMIN role scope immunity
 * - Shop location filtering (`allowedShopIds`)
 * - Cross-shop transfer validation (`validateCrossShopTransferAccess`)
 */

import {
  applyDatabaseScopeFilter,
  validateCrossShopTransferAccess,
} from '@electronic-shop/database';

describe('Phase 6 — Database Scoping & Shop Location Security', () => {
  describe('applyDatabaseScopeFilter', () => {
    it('Task 6.1: Enforces tenantId on where clause', () => {
      const where: any = {};
      const context = { tenantId: 'tenant-100' };

      applyDatabaseScopeFilter(where, context);
      expect(where.tenantId).toBe('tenant-100');
    });

    it('Task 6.1: Enforces createdById when scope=OWN and role=STAFF', () => {
      const where: any = {};
      const context = {
        tenantId: 'tenant-100',
        userId: 'user-staff-1',
        role: 'STAFF',
        scope: 'OWN' as 'OWN' | 'ALL',
      };

      applyDatabaseScopeFilter(where, context);
      expect(where.createdById).toBe('user-staff-1');
    });

    it('Task 6.1: Supports custom ownerField (e.g., createdBy)', () => {
      const where: any = {};
      const context = {
        tenantId: 'tenant-100',
        userId: 'user-staff-1',
        role: 'STAFF',
        scope: 'OWN' as 'OWN' | 'ALL',
      };

      applyDatabaseScopeFilter(where, context, { ownerField: 'createdBy' });
      expect(where.createdBy).toBe('user-staff-1');
      expect(where.createdById).toBeUndefined();
    });

    it('Task 6.1: Does NOT apply createdById filter when role=ADMIN', () => {
      const where: any = {};
      const context = {
        tenantId: 'tenant-100',
        userId: 'user-admin-1',
        role: 'ADMIN',
        scope: 'OWN' as 'OWN' | 'ALL',
      };

      applyDatabaseScopeFilter(where, context);
      expect(where.createdById).toBeUndefined();
    });

    it('Task 6.1: Does NOT apply createdById filter when scope=ALL', () => {
      const where: any = {};
      const context = {
        tenantId: 'tenant-100',
        userId: 'user-staff-1',
        role: 'STAFF',
        scope: 'ALL' as 'OWN' | 'ALL',
      };

      applyDatabaseScopeFilter(where, context);
      expect(where.createdById).toBeUndefined();
    });

    it('Task 6.2: Enforces allowedShopIds in where clause', () => {
      const where: any = {};
      const context = {
        tenantId: 'tenant-100',
        allowedShopIds: ['shop-A', 'shop-B'],
      };

      applyDatabaseScopeFilter(where, context);
      expect(where.shopId).toEqual({ in: ['shop-A', 'shop-B'] });
    });
  });

  describe('validateCrossShopTransferAccess', () => {
    it('Task 6.2: ADMIN is always allowed to perform cross-shop transfers', () => {
      const context = { role: 'ADMIN', allowedShopIds: ['shop-A'] };
      const res = validateCrossShopTransferAccess('shop-A', 'shop-B', context as any);
      expect(res.allowed).toBe(true);
    });

    it('Task 6.2: STAFF with both shops in allowedShopIds is allowed', () => {
      const context = { role: 'STAFF', allowedShopIds: ['shop-A', 'shop-B'] };
      const res = validateCrossShopTransferAccess('shop-A', 'shop-B', context as any);
      expect(res.allowed).toBe(true);
    });

    it('Task 6.2: STAFF missing source shop is denied', () => {
      const context = { role: 'STAFF', allowedShopIds: ['shop-B'] };
      const res = validateCrossShopTransferAccess('shop-A', 'shop-B', context as any);
      expect(res.allowed).toBe(false);
      expect(res.reason).toContain('source shop (shop-A)');
    });

    it('Task 6.2: STAFF missing destination shop is denied', () => {
      const context = { role: 'STAFF', allowedShopIds: ['shop-A'] };
      const res = validateCrossShopTransferAccess('shop-A', 'shop-B', context as any);
      expect(res.allowed).toBe(false);
      expect(res.reason).toContain('destination shop (shop-B)');
    });
  });
});
