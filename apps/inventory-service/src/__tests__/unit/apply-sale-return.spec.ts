import { applySaleFulfillment } from '../../common/apply-sale-fulfillment.js';
import { applySaleReturn } from '../../common/apply-sale-return.js';
import { prisma } from '../../database/client.js';

describe('applySaleReturn helper', () => {
  const tenantId = 'tenant-return-test';
  const shopId = 'shop-return-test';

  beforeEach(async () => {
    await prisma.inventoryMovement.deleteMany({ where: { tenantId } });
    await prisma.inventoryItem.deleteMany({ where: { tenantId } });
    await prisma.shopProductBalance.deleteMany({ where: { tenantId } });
    await prisma.product.deleteMany({ where: { tenantId } });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('moves SOLD to RETURNED and never AVAILABLE', async () => {
    const product = await prisma.product.create({
      data: { tenantId, sku: 'SKU-R1', name: 'Phone', trackingMethod: 'SERIALIZED' },
    });
    const item = await prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: 'SN-R1',
        purchaseCost: 100,
        status: 'AVAILABLE',
      },
    });

    await applySaleFulfillment(prisma, {
      tenantId,
      shopId,
      saleId: 'sale-r1',
      items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
      fulfilledBy: 'tester',
    });

    const result = await applySaleReturn(prisma, {
      tenantId,
      shopId,
      saleId: 'sale-r1',
      refundId: 'refund-r1',
      items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
      returnedBy: 'tester',
    });
    expect(result.applied).toBe(1);

    const returned = await prisma.inventoryItem.findUnique({ where: { id: item.id } });
    expect(returned?.status).toBe('RETURNED');
    expect(returned?.status).not.toBe('AVAILABLE');
  });

  it('is idempotent for the same refundId', async () => {
    const product = await prisma.product.create({
      data: { tenantId, sku: 'SKU-R2', name: 'Phone 2', trackingMethod: 'SERIALIZED' },
    });
    const item = await prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: 'SN-R2',
        purchaseCost: 100,
        status: 'AVAILABLE',
      },
    });

    await applySaleFulfillment(prisma, {
      tenantId,
      shopId,
      saleId: 'sale-r2',
      items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
      fulfilledBy: 'tester',
    });

    const args = {
      tenantId,
      shopId,
      saleId: 'sale-r2',
      refundId: 'refund-r2',
      items: [{ inventoryItemId: item.id, productId: product.id, quantity: 1 }],
      returnedBy: 'tester',
    };
    const first = await applySaleReturn(prisma, args);
    const second = await applySaleReturn(prisma, args);
    expect(first.applied).toBe(1);
    expect(second.skippedIdempotent).toBeGreaterThanOrEqual(1);

    const movements = await prisma.inventoryMovement.findMany({
      where: { inventoryItemId: item.id, referenceId: 'refund-r2', referenceType: 'SALE_RETURN' },
    });
    expect(movements).toHaveLength(1);
  });
});
