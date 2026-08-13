import { saleFulfilledConsumer } from '../../events/consumers/sale-fulfilled.consumer.js';
import { saleReturnedConsumer } from '../../events/consumers/sale-returned.consumer.js';
import { returnedItemAssessedConsumer } from '../../events/consumers/returned-item-assessed.consumer.js';
import { prisma } from '../../database/client.js';

describe('Inventory sale fulfillment lifecycle (Specific Identification)', () => {
  const tenantId = 'tenant-inv-test';
  const shopId = 'shop-inv-test';

  beforeEach(async () => {
    await prisma.inventoryMovement.deleteMany();
    await prisma.auditLog.deleteMany();
    await prisma.inventoryItem.deleteMany();
    await prisma.product.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  async function seedSerializedItem(serial: string, cost: number) {
    const product = await prisma.product.create({
      data: {
        tenantId,
        sku: `SKU-${serial}`,
        name: `Product ${serial}`,
        trackingMethod: 'SERIALIZED',
      },
    });
    const item = await prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: serial,
        purchaseCost: cost,
        status: 'AVAILABLE',
      },
    });
    return { product, item };
  }

  it('transitions only the exact sold item AVAILABLE -> SOLD with exact COGS preserved', async () => {
    const sn002 = await seedSerializedItem('SN002', 700000);
    const sn001 = await seedSerializedItem('SN001', 750000);

    await saleFulfilledConsumer({
      aggregateId: 'sale-1',
      correlationId: 'trace-1',
      payload: {
        tenantId,
        shopId,
        saleId: 'sale-1',
        customerId: 'cus-001',
        fulfilledBy: 'user-1',
        items: [
          {
            saleItemId: 'si-1',
            productId: sn002.product.id,
            inventoryItemId: sn002.item.id,
            serialNumber: 'SN002',
            quantity: 1,
            unitCost: 700000,
            unitPrice: 1000000,
          },
        ],
      },
    });

    const soldItem = await prisma.inventoryItem.findUnique({ where: { id: sn002.item.id } });
    expect(soldItem?.status).toBe('SOLD');
    expect(soldItem?.purchaseCost).toBe(700000); // exact cost, never averaged

    const otherItem = await prisma.inventoryItem.findUnique({ where: { id: sn001.item.id } });
    expect(otherItem?.status).toBe('AVAILABLE');

    const movements = await prisma.inventoryMovement.findMany({
      where: { inventoryItemId: sn002.item.id },
    });
    expect(movements).toHaveLength(1);
    expect(movements[0]).toMatchObject({
      movementType: 'OUT',
      referenceType: 'SALE',
      referenceId: 'sale-1',
      customerId: 'cus-001',
      quantity: 1,
    });
  });

  it('is idempotent: an already-SOLD item is not re-processed or double-counted', async () => {
    const sn = await seedSerializedItem('SN100', 500000);
    const event = {
      aggregateId: 'sale-2',
      correlationId: 'trace-2',
      payload: {
        tenantId,
        shopId,
        saleId: 'sale-2',
        customerId: 'cus-002',
        fulfilledBy: 'user-1',
        items: [{ productId: sn.product.id, inventoryItemId: sn.item.id, serialNumber: 'SN100', quantity: 1 }],
      },
    };

    await saleFulfilledConsumer(event);
    await saleFulfilledConsumer(event);

    const item = await prisma.inventoryItem.findUnique({ where: { id: sn.item.id } });
    expect(item?.status).toBe('SOLD');
    const movements = await prisma.inventoryMovement.findMany({ where: { inventoryItemId: sn.item.id } });
    expect(movements).toHaveLength(1);
  });

  it('decrements product-level quantity for non-serialized sales', async () => {
    const product = await prisma.product.create({
      data: {
        tenantId,
        sku: 'SKU-MOUSE',
        name: 'Wireless Mouse',
        trackingMethod: 'NON_SERIALIZED',
        quantityOnHand: 5,
      },
    });

    await saleFulfilledConsumer({
      aggregateId: 'sale-3',
      correlationId: 'trace-3',
      payload: {
        tenantId,
        shopId,
        saleId: 'sale-3',
        customerId: 'cus-003',
        fulfilledBy: 'user-1',
        items: [{ productId: product.id, quantity: 2, unitPrice: 15000 }],
      },
    });

    const updated = await prisma.product.findUnique({ where: { id: product.id } });
    expect(updated?.quantityOnHand).toBe(3);

    const movements = await prisma.inventoryMovement.findMany({
      where: { productId: product.id },
    });
    expect(movements).toHaveLength(1);
    expect(movements[0]).toMatchObject({
      movementType: 'OUT',
      referenceType: 'SALE',
      referenceId: 'sale-3',
      customerId: 'cus-003',
      quantity: 2,
      inventoryItemId: null,
    });
  });

  it('marks a returned item RETURNED and only a SELLABLE assessment restocks it', async () => {
    const sn = await seedSerializedItem('SN200', 600000);

    // Sell it
    await saleFulfilledConsumer({
      aggregateId: 'sale-4',
      correlationId: 'trace-4',
      payload: {
        tenantId,
        shopId,
        saleId: 'sale-4',
        customerId: 'cus-004',
        items: [{ productId: sn.product.id, inventoryItemId: sn.item.id, serialNumber: 'SN200', quantity: 1 }],
      },
    });
    let item = await prisma.inventoryItem.findUnique({ where: { id: sn.item.id } });
    expect(item?.status).toBe('SOLD');

    // Return: item comes back but is NOT automatically sellable
    await saleReturnedConsumer({
      aggregateId: 'return-1',
      correlationId: 'trace-5',
      payload: {
        tenantId,
        shopId,
        returnId: 'return-1',
        customerId: 'cus-004',
        items: [{ saleReturnItemId: 'sri-1', inventoryItemId: sn.item.id, serialNumber: 'SN200', quantity: 1, conditionState: null }],
      },
    });
    item = await prisma.inventoryItem.findUnique({ where: { id: sn.item.id } });
    expect(item?.status).toBe('RETURNED');

    const inMovements = await prisma.inventoryMovement.findMany({
      where: { inventoryItemId: sn.item.id, referenceType: 'SALE_RETURN' },
    });
    expect(inMovements).toHaveLength(1);

    // Assessment: SELLABLE -> AVAILABLE
    await returnedItemAssessedConsumer({
      aggregateId: 'sri-1',
      correlationId: 'trace-6',
      payload: {
        tenantId,
        saleReturnItemId: 'sri-1',
        inventoryItemId: sn.item.id,
        serialNumber: 'SN200',
        conditionState: 'SELLABLE',
        assessedBy: 'user-2',
      },
    });
    item = await prisma.inventoryItem.findUnique({ where: { id: sn.item.id } });
    expect(item?.status).toBe('AVAILABLE');
  });

  it('keeps a DAMAGED returned item out of stock', async () => {
    const sn = await seedSerializedItem('SN300', 500000);
    await saleFulfilledConsumer({
      aggregateId: 'sale-5',
      correlationId: 'trace-7',
      payload: {
        tenantId,
        shopId,
        saleId: 'sale-5',
        items: [{ productId: sn.product.id, inventoryItemId: sn.item.id, serialNumber: 'SN300', quantity: 1 }],
      },
    });
    await saleReturnedConsumer({
      aggregateId: 'return-2',
      correlationId: 'trace-8',
      payload: {
        tenantId,
        shopId,
        returnId: 'return-2',
        items: [{ inventoryItemId: sn.item.id, serialNumber: 'SN300', quantity: 1 }],
      },
    });
    await returnedItemAssessedConsumer({
      aggregateId: 'sri-2',
      correlationId: 'trace-9',
      payload: {
        tenantId,
        saleReturnItemId: 'sri-2',
        inventoryItemId: sn.item.id,
        serialNumber: 'SN300',
        conditionState: 'DAMAGED',
        assessedBy: 'user-2',
      },
    });
    const item = await prisma.inventoryItem.findUnique({ where: { id: sn.item.id } });
    expect(item?.status).toBe('DAMAGED');
  });
});