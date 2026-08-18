/// <reference types="jest" />
import { of, throwError } from 'rxjs';

jest.mock('../../database/client.js', () => ({
  prisma: {
    saleItem: {
      findMany: jest.fn(),
    },
  },
}));

import { prisma } from '../../database/client.js';
import { GetSoldUnitProfitHandler } from './get-sold-unit-profit.handler';
import { GetSoldUnitProfitQuery } from '../impl/get-sold-unit-profit.query';

const findMany = prisma.saleItem.findMany as jest.Mock;

function hpItem(overrides: Record<string, unknown> = {}) {
  return {
    id: 'item-hp',
    saleId: 'sale-1',
    productId: 'prod-hp',
    productName: 'EliteBook 840',
    serialNumber: 'SN-HP-1',
    quantity: 1,
    unitCost: 380000,
    unitPrice: 500000,
    lineTotal: 500000,
    additionalCost: 0,
    sale: { id: 'sale-1', saleDate: new Date('2026-08-18T10:00:00Z'), commercialStatus: 'CONFIRMED' },
    returnItems: [],
    ...overrides,
  };
}

describe('GetSoldUnitProfitHandler', () => {
  const context = { tenantId: 't1', shopId: 's1', traceId: 'tr' };

  beforeEach(() => {
    findMany.mockReset();
  });

  it('returns confirmed HP lines with API minors and excludes DRAFT via query filter', async () => {
    findMany.mockResolvedValue([hpItem()]);
    const inventory = {
      send: jest.fn().mockReturnValue(
        of({
          status: 'success',
          data: { products: [{ id: 'prod-hp', brand: { id: 'brand-hp', name: 'HP' } }] },
        }),
      ),
    };
    const handler = new GetSoldUnitProfitHandler(inventory as any);
    const result = await handler.execute(new GetSoldUnitProfitQuery({ page: 1, pageSize: 50 }, context));

    expect(findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { sale: { tenantId: 't1', shopId: 's1', commercialStatus: 'CONFIRMED' } },
      }),
    );
    expect(result.status).toBe('success');
    expect(result.data.units).toHaveLength(1);
    expect(result.data.units[0]).toMatchObject({
      brandName: 'HP',
      costMinor: '38000000',
      soldMinor: '50000000',
      profitMinor: '12000000',
      status: 'SOLD',
    });
    expect(result.data.totals.profitMinor).toBe('12000000');
  });

  it('keeps returned status and zero remaining profit; totals ignore page size', async () => {
    findMany.mockResolvedValue([
      hpItem(),
      hpItem({
        id: 'item-2',
        productName: 'Pavilion',
        serialNumber: 'SN-2',
        unitCost: 200000,
        lineTotal: 300000,
        returnItems: [{ saleReturn: { status: 'COMPLETED' } }],
      }),
    ]);
    const inventory = { send: jest.fn().mockReturnValue(of({ status: 'success', data: { products: [] } })) };
    const handler = new GetSoldUnitProfitHandler(inventory as any);
    const result = await handler.execute(new GetSoldUnitProfitQuery({ page: 1, pageSize: 1 }, context));

    expect(result.data.units).toHaveLength(1);
    expect(result.data.pagination.total).toBe(2);
    expect(result.data.totals.costMinor).toBe('58000000');
    expect(result.data.totals.soldMinor).toBe('80000000');
    expect(result.data.totals.profitMinor).toBe('12000000');
    const returned = (
      await handler.execute(new GetSoldUnitProfitQuery({ page: 1, pageSize: 50 }, context))
    ).data.units.find((row: { id: string }) => row.id === 'item-2');
    expect(returned.status).toBe('RETURNED');
    expect(returned.profitMinor).toBe('0');
  });

  it('still returns money rows when inventory is down', async () => {
    findMany.mockResolvedValue([hpItem()]);
    const inventory = { send: jest.fn().mockReturnValue(throwError(() => new Error('down'))) };
    const handler = new GetSoldUnitProfitHandler(inventory as any);
    const result = await handler.execute(new GetSoldUnitProfitQuery({}, context));
    expect(result.status).toBe('success');
    expect(result.data.units[0].brandName).toBe('—');
    expect(result.data.units[0].profitMinor).toBe('12000000');
  });

  it('requires tenantId', async () => {
    const handler = new GetSoldUnitProfitHandler({ send: jest.fn() } as any);
    const result = await handler.execute(new GetSoldUnitProfitQuery({}, { traceId: 'x' } as any));
    expect(result.status).toBe('error');
  });

  it('includes SOLD stock units when the shop has no confirmed sale lines', async () => {
    findMany.mockResolvedValue([]);
    const inventory = {
      send: jest.fn().mockImplementation((pattern: { cmd: string }) => {
        if (pattern.cmd === 'GetStockUnits') {
          return of({
            status: 'success',
            data: {
              units: [
                {
                  id: 'inv-hp',
                  productId: 'prod-hp',
                  productName: 'EliteBook 840',
                  serialNumber: 'SN-HP-1',
                  purchaseCost: 380000,
                  totalCost: 380000,
                  sellingPrice: 500000,
                  status: 'SOLD',
                  brand: { id: 'brand-hp', name: 'HP' },
                },
              ],
            },
          });
        }
        return of({ status: 'success', data: { products: [] } });
      }),
    };
    const handler = new GetSoldUnitProfitHandler(inventory as any);
    const result = await handler.execute(new GetSoldUnitProfitQuery({}, context));
    expect(result.status).toBe('success');
    expect(result.data.units).toHaveLength(1);
    expect(result.data.units[0]).toMatchObject({
      id: 'inv-hp',
      brandName: 'HP',
      costMinor: '38000000',
      soldMinor: '50000000',
      profitMinor: '12000000',
    });
  });
});
