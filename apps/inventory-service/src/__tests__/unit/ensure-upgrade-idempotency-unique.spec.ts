import { createRequire } from 'module';
import { prisma } from '../../database/client.js';

const requireCjs = createRequire(__filename);
const {
  CONSTRAINT,
  findDuplicateKeys,
  ensureUpgradeIdempotencyUnique,
} = requireCjs('../../../scripts/ensure-upgrade-idempotency-unique.cjs');

describe('ensure-upgrade-idempotency-unique', () => {
  const tenantId = 'tenant-idem-dedup';
  const shopId = 'shop-idem-dedup';

  beforeAll(async () => {
    await prisma.$executeRawUnsafe(
      'ALTER TABLE inventory_upgrades ADD COLUMN IF NOT EXISTS "idempotencyKey" TEXT',
    );
    await prisma.$executeRawUnsafe(
      `ALTER TABLE inventory_upgrades DROP CONSTRAINT IF EXISTS "${CONSTRAINT}"`,
    );
    await prisma.$executeRawUnsafe(
      `DROP INDEX IF EXISTS "${CONSTRAINT}"`,
    );
  });

  beforeEach(async () => {
    await prisma.inventoryUpgrade.deleteMany({ where: { tenantId } });
    await prisma.inventoryItem.deleteMany({ where: { tenantId } });
    await prisma.product.deleteMany({ where: { tenantId } });
  });

  afterAll(async () => {
    await prisma.inventoryUpgrade.deleteMany({ where: { tenantId } });
    await prisma.inventoryItem.deleteMany({ where: { tenantId } });
    await prisma.product.deleteMany({ where: { tenantId } });
    await prisma.$disconnect();
  });

  async function seedItem(serial: string) {
    const product = await prisma.product.create({
      data: { tenantId, sku: `SKU-${serial}`, name: 'HP', trackingMethod: 'SERIALIZED' },
    });
    return prisma.inventoryItem.create({
      data: {
        tenantId,
        shopId,
        productId: product.id,
        serialNumber: serial,
        purchaseCost: 100000,
        status: 'AVAILABLE',
      },
    });
  }

  it('renames extra duplicate keys and leaves the oldest original', async () => {
    const itemA = await seedItem('SN-DEDUP-A');
    const itemB = await seedItem('SN-DEDUP-B');
    const first = await prisma.inventoryUpgrade.create({
      data: {
        tenantId,
        shopId,
        inventoryItemId: itemA.id,
        upgradeType: 'SSD',
        cost: 1000,
        idempotencyKey: 'dup-key',
      },
    });
    const second = await prisma.inventoryUpgrade.create({
      data: {
        tenantId,
        shopId,
        inventoryItemId: itemB.id,
        upgradeType: 'RAM',
        cost: 2000,
        idempotencyKey: 'dup-key',
      },
    });

    const before = await findDuplicateKeys(prisma);
    expect(before.some((row: { key: string; n: number }) => row.key === 'dup-key' && row.n === 2)).toBe(
      true,
    );

    const result = await ensureUpgradeIdempotencyUnique(prisma);
    expect(result.renamed).toHaveLength(1);
    expect(result.renamed[0].id).toBe(second.id);
    expect(result.renamed[0].new_key).toBe(`dup-key::dedup:${second.id}`);

    const kept = await prisma.inventoryUpgrade.findUnique({ where: { id: first.id } });
    const renamed = await prisma.inventoryUpgrade.findUnique({ where: { id: second.id } });
    expect(kept?.idempotencyKey).toBe('dup-key');
    expect(renamed?.idempotencyKey).toBe(`dup-key::dedup:${second.id}`);
    expect(await findDuplicateKeys(prisma)).toEqual([]);
  });
});
