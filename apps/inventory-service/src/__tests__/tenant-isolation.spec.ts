import { GetStockUnitsHandler } from '../queries/handlers/get-stock-units.handler.js';
import { prisma } from '../database/client.js';

describe('Tenant isolation — GetStockUnits', () => {
  const tenantA = 'tenant-iso-inv-a';
  const tenantB = 'tenant-iso-inv-b';
  const shopA = 'shop-iso-inv-a';
  const shopB = 'shop-iso-inv-b';
  const handler = new GetStockUnitsHandler();
  let productA: string;
  let productB: string;

  async function wipe() {
    await prisma.inventoryItem.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
    await prisma.product.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
  }

  beforeEach(async () => {
    await wipe();
    const pa = await prisma.product.create({
      data: { tenantId: tenantA, sku: 'SKU-ISO-A', name: 'Phone A', trackingMethod: 'SERIALIZED' },
    });
    const pb = await prisma.product.create({
      data: { tenantId: tenantB, sku: 'SKU-ISO-B', name: 'Phone B', trackingMethod: 'SERIALIZED' },
    });
    productA = pa.id;
    productB = pb.id;
    await prisma.inventoryItem.createMany({
      data: [
        {
          tenantId: tenantA,
          shopId: shopA,
          productId: productA,
          serialNumber: 'SN-ISO-A-001',
          purchaseCost: 100,
          status: 'AVAILABLE',
        },
        {
          tenantId: tenantB,
          shopId: shopB,
          productId: productB,
          serialNumber: 'SN-ISO-B-001',
          purchaseCost: 200,
          status: 'AVAILABLE',
        },
      ],
    });
  });

  afterAll(async () => {
    await wipe();
    await prisma.$disconnect();
  });

  it('returns only tenant A stock for tenant A context', async () => {
    const result = await handler.execute({
      payload: { shopId: shopA },
      context: { tenantId: tenantA, shopId: shopA, traceId: 't-inv-a' },
    } as any);
    expect(result.status).toBe('success');
    expect(result.data?.units?.length).toBe(1);
    expect(result.data?.units?.[0]?.serialNumber).toBe('SN-ISO-A-001');
  });

  it('does not expose tenant B serials when querying as tenant A', async () => {
    const result = await handler.execute({
      payload: { shopId: shopB, search: 'SN-ISO-B' },
      context: { tenantId: tenantA, shopId: shopA, traceId: 't-inv-swapped' },
    } as any);
    expect(result.status).toBe('success');
    expect(result.data?.units?.length).toBe(0);
  });

  it('cross-shop within tenant A does not show shop B units', async () => {
    await prisma.inventoryItem.create({
      data: {
        tenantId: tenantA,
        shopId: 'shop-iso-inv-a-other',
        productId: productA,
        serialNumber: 'SN-ISO-A-OTHER',
        purchaseCost: 150,
        status: 'AVAILABLE',
      },
    });
    const result = await handler.execute({
      payload: { shopId: shopA },
      context: { tenantId: tenantA, shopId: shopA, traceId: 't-cross-shop' },
    } as any);
    expect(result.status).toBe('success');
    expect(result.data?.units?.every((u: any) => u.serialNumber !== 'SN-ISO-A-OTHER')).toBe(true);
  });
});
