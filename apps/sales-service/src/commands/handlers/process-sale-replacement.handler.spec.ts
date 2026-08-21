/// <reference types="jest" />
import { of } from 'rxjs';
import { Test, TestingModule } from '@nestjs/testing';

jest.mock('../../database/client.js', () => ({
  prisma: {
    sale: { findUnique: jest.fn() },
    saleItem: { findUnique: jest.fn(), update: jest.fn() },
    saleReturn: { findFirst: jest.fn(), create: jest.fn(), update: jest.fn() },
    saleHistory: { create: jest.fn() },
    auditLog: { create: jest.fn() },
  },
}));

import { prisma } from '../../database/client.js';
import { ProcessSaleReplacementHandler } from './process-sale-replacement.handler';
import { ProcessSaleReplacementCommand } from '../impl/process-sale-replacement.command';

const ctx = { tenantId: 't1', userId: 'u1', userName: 'Mgr', traceId: 'tr' } as any;

function basePayload(overrides: Partial<Record<string, string>> = {}) {
  return {
    saleId: 'sale-1',
    saleItemId: 'si-1',
    replacementInventoryItemId: 'inv-new',
    reason: 'Faulty screen',
    idempotencyKey: 'idem-1',
    ...overrides,
  };
}

describe('ProcessSaleReplacementHandler', () => {
  const inventoryClient = { send: jest.fn() };
  const eventBus = { publish: jest.fn().mockResolvedValue(true) };
  let handler: ProcessSaleReplacementHandler;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProcessSaleReplacementHandler,
        { provide: 'EVENT_BUS', useValue: eventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClient },
      ],
    }).compile();
    handler = module.get(ProcessSaleReplacementHandler);
  });

  it('rejects missing required fields', async () => {
    const res = await handler.execute(
      new ProcessSaleReplacementCommand(
        { saleId: '', saleItemId: '', replacementInventoryItemId: '', reason: '', idempotencyKey: '' },
        ctx,
      ),
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/required/i);
    expect(prisma.sale.findUnique).not.toHaveBeenCalled();
  });

  it('rejects missing reason', async () => {
    const res = await handler.execute(
      new ProcessSaleReplacementCommand(basePayload({ reason: '' }), ctx),
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/reason/i);
  });

  it('rejects when sale is not found for tenant', async () => {
    (prisma.sale.findUnique as jest.Mock).mockResolvedValue(null);
    const res = await handler.execute(
      new ProcessSaleReplacementCommand(basePayload(), ctx),
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/not found/i);
  });

  it('rejects accessory / non-serialized lines', async () => {
    (prisma.sale.findUnique as jest.Mock).mockResolvedValue({
      id: 'sale-1',
      tenantId: 't1',
      shopId: 'shop-1',
      commercialStatus: 'CONFIRMED',
      accountingStatus: 'POSTED',
      amountDue: 0,
      items: [{ id: 'si-1', inventoryItemId: null, productId: 'p1', quantity: 1 }],
      returns: [],
    });
    const res = await handler.execute(
      new ProcessSaleReplacementCommand(basePayload(), ctx),
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/serialized/i);
  });

  it('rejects replacing a unit with itself', async () => {
    (prisma.sale.findUnique as jest.Mock).mockResolvedValue({
      id: 'sale-1',
      tenantId: 't1',
      shopId: 'shop-1',
      commercialStatus: 'CONFIRMED',
      accountingStatus: 'POSTED',
      amountDue: 50_000,
      items: [
        {
          id: 'si-1',
          inventoryItemId: 'inv-same',
          productId: 'p1',
          serialNumber: 'SN1',
          quantity: 1,
          unitCost: 100,
        },
      ],
      returns: [],
    });
    const res = await handler.execute(
      new ProcessSaleReplacementCommand(
        basePayload({ replacementInventoryItemId: 'inv-same' }),
        ctx,
      ),
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/different/i);
  });

  it('rejects when replacement unit is not AVAILABLE', async () => {
    (prisma.sale.findUnique as jest.Mock).mockResolvedValue({
      id: 'sale-1',
      tenantId: 't1',
      shopId: 'shop-1',
      customerId: null,
      currency: 'RWF',
      exchangeRate: 1,
      commercialStatus: 'CONFIRMED',
      accountingStatus: 'POSTED',
      amountDue: 50_000,
      items: [
        {
          id: 'si-1',
          inventoryItemId: 'inv-old',
          productId: 'p1',
          productName: 'Laptop',
          productSku: 'L1',
          serialNumber: 'SN-OLD',
          quantity: 1,
          unitCost: 100,
          imei1: null,
          imei2: null,
        },
      ],
      returns: [],
    });
    (prisma.saleReturn.findFirst as jest.Mock).mockResolvedValue(null);
    inventoryClient.send.mockReturnValue(
      of({
        status: 'success',
        data: { unit: { id: 'inv-new', status: 'SOLD', serialNumber: 'SN-NEW', productId: 'p1' } },
      }),
    );

    const res = await handler.execute(
      new ProcessSaleReplacementCommand(basePayload(), ctx),
    );

    expect(res.status).toBe('error');
    expect(res.message).toMatch(/AVAILABLE/i);
    expect(inventoryClient.send).toHaveBeenCalledWith(
      { cmd: 'GetDeviceLife' },
      expect.any(Object),
    );
  });
});
