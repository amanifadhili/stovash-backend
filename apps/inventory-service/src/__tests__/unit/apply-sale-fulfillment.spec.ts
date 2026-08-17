import { applySaleFulfillment } from '../../common/apply-sale-fulfillment.js';
import { prisma } from '../../database/client.js';

describe('applySaleFulfillment helper', () => {
  const tenantId = 'tenant-apply-test';
  const shopId = 'shop-apply-test';

  beforeEach(async () => {
    await prisma.inventoryMovement.deleteMany({ where: { tenantId } });
    await prisma.inventoryItem.deleteMany({ where: { tenantId } });
    await prisma.shopProductBalance.deleteMany({ where: { tenantId } });
    await prisma.product.deleteMany({ where: { tenantId } });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('sells a device once and rejects a second concurrent-style apply', async () => {
    const product = await prisma.product.create({
      data: { tenantId, sku: 'SKU-A1', name: 'Phone', trackingMethod: 'SERIALIZED' },
    });
    const item = await prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: 'SN-A1',
        purchaseCost: 100,
        status: 'AVAILABLE',
      },
    });

    await applySaleFulfillment(prisma, {
      tenantId,
      shopId,
      saleId: 'sale-a',
      items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
      fulfilledBy: 'tester',
    });

    const sold = await prisma.inventoryItem.findUnique({ where: { id: item.id } });
    expect(sold?.status).toBe('SOLD');

    await expect(
      applySaleFulfillment(prisma, {
        tenantId,
        shopId,
        saleId: 'sale-b',
        items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
        fulfilledBy: 'tester',
      }),
    ).rejects.toThrow(/already SOLD|cannot be sold/);
  });

  it('is idempotent for the same saleId', async () => {
    const product = await prisma.product.create({
      data: { tenantId, sku: 'SKU-A2', name: 'Phone 2', trackingMethod: 'SERIALIZED' },
    });
    const item = await prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: 'SN-A2',
        purchaseCost: 100,
        status: 'AVAILABLE',
      },
    });

    const args = {
      tenantId,
      shopId,
      saleId: 'sale-idem',
      items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
      fulfilledBy: 'tester',
    };

    const first = await applySaleFulfillment(prisma, args);
    const second = await applySaleFulfillment(prisma, args);
    expect(first.applied).toBe(1);
    expect(second.skippedIdempotent).toBeGreaterThanOrEqual(1);

    const movements = await prisma.inventoryMovement.findMany({
      where: { inventoryItemId: item.id, referenceId: 'sale-idem' },
    });
    expect(movements).toHaveLength(1);
  });
});
