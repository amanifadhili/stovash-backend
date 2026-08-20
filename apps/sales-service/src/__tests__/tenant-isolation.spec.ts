import { GetSalesHandler } from '../queries/handlers/get-sales.handler.js';
import { prisma } from '../database/client.js';

describe('Tenant isolation — GetSales', () => {
  const tenantA = 'tenant-iso-sales-a';
  const tenantB = 'tenant-iso-sales-b';
  const shopA = 'shop-iso-sales-a';
  const shopB = 'shop-iso-sales-b';
  const handler = new GetSalesHandler();

  async function wipe() {
    await prisma.sale.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
  }

  beforeEach(async () => {
    await wipe();
    await prisma.sale.createMany({
      data: [
        {
          tenantId: tenantA,
          shopId: shopA,
          orderNumber: 'ORD-ISO-A-1',
          grandTotal: 1000,
          commercialStatus: 'CONFIRMED',
          fulfillmentStatus: 'FULFILLED',
          paymentStatus: 'PAID',
          accountingStatus: 'POSTED',
        },
        {
          tenantId: tenantB,
          shopId: shopB,
          orderNumber: 'ORD-ISO-B-1',
          grandTotal: 2000,
          commercialStatus: 'CONFIRMED',
          fulfillmentStatus: 'FULFILLED',
          paymentStatus: 'PAID',
          accountingStatus: 'POSTED',
        },
      ],
    });
  });

  afterAll(async () => {
    await wipe();
    await prisma.$disconnect();
  });

  it('returns only tenant A rows when context tenant is A', async () => {
    const result = await handler.execute({
      payload: {},
      context: { tenantId: tenantA, shopId: shopA, traceId: 't-a' },
    } as any);
    expect(result.status).toBe('success');
    expect(result.data?.sales?.length).toBe(1);
    expect(result.data?.sales?.[0]?.orderNumber).toBe('ORD-ISO-A-1');
  });

  it('does not leak tenant B rows when context tenant is A (swapped header scenario)', async () => {
    const result = await handler.execute({
      payload: { tenantId: tenantB, shopId: shopB },
      context: { tenantId: tenantA, shopId: shopA, traceId: 't-swapped' },
    } as any);
    expect(result.status).toBe('success');
    expect(result.data?.sales?.length).toBe(1);
    expect(result.data?.sales?.[0]?.tenantId).toBe(tenantA);
    expect(result.data?.sales?.every((s: any) => s.tenantId === tenantA)).toBe(true);
  });

  it('returns empty for tenant A when data exists only in tenant B', async () => {
    const result = await handler.execute({
      payload: {},
      context: { tenantId: 'tenant-iso-sales-empty', shopId: shopA, traceId: 't-empty' },
    } as any);
    expect(result.status).toBe('success');
    expect(result.data?.sales?.length).toBe(0);
  });
});
