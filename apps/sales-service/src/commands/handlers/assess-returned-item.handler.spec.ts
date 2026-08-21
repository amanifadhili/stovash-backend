/// <reference types="jest" />
import { of } from 'rxjs';
import { Test, TestingModule } from '@nestjs/testing';

jest.mock('../../database/client.js', () => ({
  prisma: {
    saleReturnItem: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    saleHistory: { create: jest.fn() },
    auditLog: { create: jest.fn() },
  },
}));

import { prisma } from '../../database/client.js';
import { AssessReturnedItemHandler } from './assess-returned-item.handler';
import { AssessReturnedItemCommand } from '../impl/assess-returned-item.command';

describe('AssessReturnedItemHandler', () => {
  const inventoryClient = { send: jest.fn() };
  const eventBus = { publish: jest.fn().mockResolvedValue(true) };
  let handler: AssessReturnedItemHandler;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AssessReturnedItemHandler,
        { provide: 'EVENT_BUS', useValue: eventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClient },
      ],
    }).compile();
    handler = module.get(AssessReturnedItemHandler);
  });

  it('rejects invalid conditionState', async () => {
    const res = await handler.execute(
      new AssessReturnedItemCommand(
        { saleReturnItemId: 'sri-1', conditionState: 'NOPE' },
        { tenantId: 't1', userId: 'u1', userName: 'Mgr', traceId: 'tr' } as any,
      ),
    );
    expect(res.status).toBe('error');
    expect(inventoryClient.send).not.toHaveBeenCalled();
  });

  it('applies inventory then updates return item for SELLABLE', async () => {
    (prisma.saleReturnItem.findUnique as jest.Mock).mockResolvedValue({
      id: 'sri-1',
      inventoryItemId: 'inv-1',
      serialNumber: 'SN1',
      saleReturnId: 'sr-1',
      notes: null,
      saleReturn: {
        id: 'sr-1',
        tenantId: 't1',
        shopId: 'shop-1',
        saleId: 'sale-1',
      },
    });
    inventoryClient.send.mockReturnValue(
      of({ status: 'success', data: { status: 'AVAILABLE' } }),
    );
    (prisma.saleReturnItem.update as jest.Mock).mockResolvedValue({
      id: 'sri-1',
      conditionState: 'SELLABLE',
    });

    const res = await handler.execute(
      new AssessReturnedItemCommand(
        { saleReturnItemId: 'sri-1', conditionState: 'SELLABLE', notes: 'ok' },
        { tenantId: 't1', userId: 'u1', userName: 'Mgr', traceId: 'tr' } as any,
      ),
    );

    expect(res.status).toBe('success');
    expect(inventoryClient.send).toHaveBeenCalledWith(
      { cmd: 'ApplyReturnedItemAssessment' },
      expect.objectContaining({
        payload: expect.objectContaining({
          inventoryItemId: 'inv-1',
          conditionState: 'SELLABLE',
        }),
      }),
    );
    expect(prisma.saleReturnItem.update).toHaveBeenCalled();
    expect(eventBus.publish).toHaveBeenCalled();
  });

  it('does not update sale return when inventory apply fails', async () => {
    (prisma.saleReturnItem.findUnique as jest.Mock).mockResolvedValue({
      id: 'sri-1',
      inventoryItemId: 'inv-1',
      serialNumber: 'SN1',
      saleReturnId: 'sr-1',
      notes: null,
      saleReturn: {
        id: 'sr-1',
        tenantId: 't1',
        shopId: 'shop-1',
        saleId: 'sale-1',
      },
    });
    inventoryClient.send.mockReturnValue(
      of({ status: 'error', message: 'stock locked' }),
    );

    const res = await handler.execute(
      new AssessReturnedItemCommand(
        { saleReturnItemId: 'sri-1', conditionState: 'DAMAGED' },
        { tenantId: 't1', userId: 'u1', userName: 'Mgr', traceId: 'tr' } as any,
      ),
    );

    expect(res.status).toBe('error');
    expect(prisma.saleReturnItem.update).not.toHaveBeenCalled();
  });
});
