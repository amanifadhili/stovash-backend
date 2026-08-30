/// <reference types="jest" />
import { HttpException, HttpStatus } from '@nestjs/common';
import { of } from 'rxjs';
import {
  AppController,
  COMMAND_PERMISSIONS,
  COMMAND_ROLES,
} from '../../app.controller';

function mockClient() {
  return { send: jest.fn().mockReturnValue(of({ status: 'success', data: { ok: true }, traceId: 't' })) };
}

function makeController() {
  const inventory = mockClient();
  const sales = mockClient();
  const controller = new AppController(
    mockClient() as any,
    mockClient() as any,
    mockClient() as any,
    inventory as any,
    mockClient() as any,
    sales as any,
    mockClient() as any,
    mockClient() as any,
    {} as any,
  );
  return { controller, inventory, sales };
}

describe('Phase 5 — JWT permission lists do not 403 allowed roles (Legacy Fallback Mode)', () => {
  const originalEnv = process.env.ENABLE_DYNAMIC_RBAC;

  beforeEach(() => {
    process.env.ENABLE_DYNAMIC_RBAC = 'false';
  });

  afterEach(() => {
    process.env.ENABLE_DYNAMIC_RBAC = originalEnv;
  });

  it('every COMMAND_PERMISSIONS entry is empty (role-only, same as money)', () => {
    const nonempty = Object.entries(COMMAND_PERMISSIONS).filter(([, perms]) => perms.length > 0);
    expect(nonempty).toEqual([]);
  });

  it('JWT non-ADMIN still has an empty permission array in the guard source', () => {
    const guard = fsReadGuard();
    expect(guard).toContain("user.role === 'ADMIN' ? ['*'] : []");
  });

  it('MANAGER with JWT permissions [] can GetProducts and CreateSale', async () => {
    const { controller, inventory, sales } = makeController();
    const req = { context: { traceId: 'p5-mgr' }, user: { role: 'MANAGER', permissions: [] } };
    await controller.handleCommand(req, { command: 'GetProducts', payload: {} });
    expect(inventory.send).toHaveBeenCalledWith({ cmd: 'GetProducts' }, expect.any(Object));
    await controller.handleCommand(req, { command: 'CreateSale', payload: {} });
    expect(sales.send).toHaveBeenCalledWith({ cmd: 'CreateSale' }, expect.any(Object));
  });

  it('STAFF with JWT permissions [] can CreateSale and GetStockUnits, not AddProduct', async () => {
    const { controller, inventory, sales } = makeController();
    const req = { context: { traceId: 'p5-staff' }, user: { role: 'STAFF', permissions: [] } };
    await controller.handleCommand(req, { command: 'CreateSale', payload: {} });
    expect(sales.send).toHaveBeenCalledWith({ cmd: 'CreateSale' }, expect.any(Object));
    await controller.handleCommand(req, { command: 'GetStockUnits', payload: {} });
    expect(inventory.send).toHaveBeenCalledWith({ cmd: 'GetStockUnits' }, expect.any(Object));
    expect(COMMAND_ROLES.AddProduct).not.toContain('STAFF');
    try {
      await controller.handleCommand(req, { command: 'AddProduct', payload: {} });
      throw new Error('expected 403 for STAFF AddProduct');
    } catch (error: any) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.getStatus()).toBe(HttpStatus.FORBIDDEN);
    }
  });

  it('ACCOUNTANT with JWT permissions [] can GetProducts, not GetStockUnits', async () => {
    const { controller, inventory } = makeController();
    const req = { context: { traceId: 'p5-acc' }, user: { role: 'ACCOUNTANT', permissions: [] } };
    await controller.handleCommand(req, { command: 'GetProducts', payload: {} });
    expect(inventory.send).toHaveBeenCalledWith({ cmd: 'GetProducts' }, expect.any(Object));
    expect(COMMAND_ROLES.GetStockUnits).not.toContain('ACCOUNTANT');
    try {
      await controller.handleCommand(req, { command: 'GetStockUnits', payload: {} });
      throw new Error('expected 403 for ACCOUNTANT GetStockUnits');
    } catch (error: any) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.getStatus()).toBe(HttpStatus.FORBIDDEN);
    }
  });
});

function fsReadGuard(): string {
  const fs = require('fs') as typeof import('fs');
  const path = require('path') as typeof import('path');
  return fs.readFileSync(path.resolve(__dirname, '../../common/auth/jwt-auth.guard.ts'), 'utf8');
}
