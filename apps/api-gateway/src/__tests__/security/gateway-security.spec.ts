import { UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { of } from 'rxjs';
import { JwtAuthGuard } from '../../common/auth/jwt-auth.guard';
import {
  AppController,
  COMMAND_ROLES,
  RETIRED_FINANCIAL_COMMANDS,
  STAFF_CANNOT_APPROVE,
} from '../../app.controller';
import { RateLimitMiddleware } from '../../middleware/rate-limit.middleware';

describe('Gateway security and tenant context', () => {
  describe('JWT tenant binding', () => {
    it('JwtAuthGuard overwrites header tenant with token tenant', async () => {
      const guard = new JwtAuthGuard(
        {
          send: () =>
            of({
              status: 'success',
              data: { id: 'u1', status: 'ACTIVE', role: 'ADMIN', tenantId: 'jwt-tenant-real' },
            }),
        } as any,
        { send: () => of({ status: 'success', data: { status: 'ACTIVE' } }) } as any,
      );
      const request: any = {
        body: { command: 'GetSales' },
        headers: { authorization: 'Bearer fake' },
        context: { tenantId: 'header-tenant-malicious', traceId: 't' },
      };
      await guard.canActivate({
        switchToHttp: () => ({ getRequest: () => request }),
      } as any);
      expect(request.context.tenantId).toBe('jwt-tenant-real');
      expect(request.context.tenantId).not.toBe('header-tenant-malicious');
    });
  });

  describe('RBAC matrix', () => {
    it('STAFF cannot approve reconciliation adjustment', () => {
      expect(COMMAND_ROLES.ApproveReconciliationAdjustment).not.toContain('STAFF');
      expect(STAFF_CANNOT_APPROVE).toContain('ApproveReconciliationAdjustment');
    });

    it('STAFF cannot issue profit transfer movements blocked by role list', () => {
      const profitTransferRoles = COMMAND_ROLES.CreateTreasuryMovement ?? [];
      expect(profitTransferRoles).not.toContain('STAFF');
    });

    it('retired financial commands are blocked at gateway', () => {
      expect(RETIRED_FINANCIAL_COMMANDS.has('PostJournalEntry')).toBe(true);
      expect(RETIRED_FINANCIAL_COMMANDS.has('ProcessPosSale')).toBe(true);
    });
  });

  describe('JwtAuthGuard authentication failures', () => {
    it('rejects missing authorization header', async () => {
      const guard = new JwtAuthGuard({ send: jest.fn() } as any, { send: jest.fn() } as any);
      await expect(
        guard.canActivate({
          switchToHttp: () => ({ getRequest: () => ({ body: { command: 'GetSales' }, headers: {} }) }),
        } as any),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it('rejects forged JWT when identity verify fails', async () => {
      const guard = new JwtAuthGuard(
        { send: () => of({ status: 'error', message: 'invalid token' }) } as any,
        { send: jest.fn() } as any,
      );
      await expect(
        guard.canActivate({
          switchToHttp: () => ({
            getRequest: () => ({
              body: { command: 'GetSales' },
              headers: { authorization: 'Bearer forged.jwt.token' },
              context: { traceId: 't' },
            }),
          }),
        } as any),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it('blocks inactive subscription for non-exempt commands', async () => {
      const guard = new JwtAuthGuard(
        {
          send: () =>
            of({
              status: 'success',
              data: { id: 'u1', status: 'ACTIVE', role: 'ADMIN', tenantId: 't1' },
            }),
        } as any,
        { send: () => of({ status: 'success', data: { status: 'EXPIRED' } }) } as any,
      );
      await expect(
        guard.canActivate({
          switchToHttp: () => ({
            getRequest: () => ({
              body: { command: 'GetSales' },
              headers: { authorization: 'Bearer token' },
              context: { traceId: 't' },
            }),
          }),
        } as any),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });
  });

  describe('Rate limit middleware', () => {
    it('exempts LoginUser from per-user rate bucket', () => {
      const mw = new RateLimitMiddleware();
      const next = jest.fn();
      mw.use({ body: { command: 'LoginUser' }, headers: {}, ip: '1.2.3.4' } as any, {} as any, next);
      expect(next).toHaveBeenCalled();
    });
  });

  describe('Public surface', () => {
    it('exposes /health and /metrics handlers on AppController', () => {
      const controller = new AppController(
        {} as any,
        {} as any,
        {} as any,
        {} as any,
        {} as any,
        {} as any,
        {} as any,
        {} as any,
      );
      expect(typeof controller.getHealth).toBe('function');
      expect(typeof controller.getMetrics).toBe('function');
    });
  });
});
