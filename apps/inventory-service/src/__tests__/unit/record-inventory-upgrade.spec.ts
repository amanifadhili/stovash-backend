import { of } from 'rxjs';
import { RecordInventoryUpgradeHandler } from '../../commands/handlers/record-inventory-upgrade.handler.js';
import { RecordInventoryUpgradeCommand } from '../../commands/impl/record-inventory-upgrade.command.js';
import { prisma } from '../../database/client.js';

describe('RecordInventoryUpgradeHandler', () => {
  const tenantId = 'tenant-unit-exp';
  const shopId = 'shop-unit-exp';
  const ctx = { tenantId, shopId, userId: 'user-unit-exp', traceId: 'trace-unit-exp' };
  let handler: RecordInventoryUpgradeHandler;
  let treasurySend: jest.Mock;

  beforeAll(async () => {
    await prisma.$executeRawUnsafe(
      'ALTER TABLE inventory_upgrades ADD COLUMN IF NOT EXISTS details JSONB',
    );
    await prisma.$executeRawUnsafe(
      'ALTER TABLE inventory_upgrades ADD COLUMN IF NOT EXISTS "idempotencyKey" TEXT',
    );
  });

  beforeEach(async () => {
    await prisma.inventoryUpgrade.deleteMany({ where: { tenantId } });
    await prisma.inventoryItem.deleteMany({ where: { tenantId } });
    await prisma.product.deleteMany({ where: { tenantId } });
    treasurySend = jest.fn(() => of({ status: 'success', data: { id: 'mv-1' } }));
    handler = new RecordInventoryUpgradeHandler({ send: treasurySend } as any);
  });

  afterAll(async () => {
    await prisma.inventoryUpgrade.deleteMany({ where: { tenantId } });
    await prisma.inventoryItem.deleteMany({ where: { tenantId } });
    await prisma.product.deleteMany({ where: { tenantId } });
    await prisma.$disconnect();
  });

  async function seedItem() {
    const product = await prisma.product.create({
      data: { tenantId, sku: 'SKU-EXP', name: 'HP', trackingMethod: 'SERIALIZED' },
    });
    return prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: 'SN-EXP-1',
        purchaseCost: 400000,
        status: 'AVAILABLE',
      },
    });
  }

  it('posts INVENTORY_CAPITALIZE then raises capitalizedCost', async () => {
    const item = await seedItem();
    const result = await handler.execute(
      new RecordInventoryUpgradeCommand(
        {
          inventoryItemId: item.id,
          upgradeType: 'MAINTENANCE',
          cost: 15000,
          details: { work: 'screen' },
          occurredOn: '2026-08-19',
          idempotencyKey: 'cap-test-1',
          payments: [{ amount: 10000, paymentMethod: 'CASH' }, { amount: 5000, paymentMethod: 'MOMO' }],
        },
        ctx,
      ),
    );
    expect(result.status).toBe('success');
    expect(treasurySend).toHaveBeenCalledTimes(2);
    const firstPayload = treasurySend.mock.calls[0][1].payload;
    expect(firstPayload.movementType).toBe('INVENTORY_CAPITALIZE');
    const updated = await prisma.inventoryItem.findUnique({ where: { id: item.id } });
    expect(Number(updated?.capitalizedCost)).toBe(15000);
  });

  it('does not capitalize when treasury fails', async () => {
    treasurySend.mockReturnValueOnce(of({ status: 'error', message: 'till empty', errorCode: 'VALIDATION_ERROR' }));
    const item = await seedItem();
    const result = await handler.execute(
      new RecordInventoryUpgradeCommand(
        {
          inventoryItemId: item.id,
          upgradeType: 'REPAIR',
          cost: 8000,
          payments: [{ amount: 8000, paymentMethod: 'CASH' }],
        },
        ctx,
      ),
    );
    expect(result.status).toBe('error');
    const updated = await prisma.inventoryItem.findUnique({ where: { id: item.id } });
    expect(Number(updated?.capitalizedCost || 0)).toBe(0);
    const upgrades = await prisma.inventoryUpgrade.count({ where: { inventoryItemId: item.id } });
    expect(upgrades).toBe(0);
  });
});
