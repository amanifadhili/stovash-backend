import { getTreasuryMovements } from '../treasury-movement/queries.js';
import { prisma } from '../database/client.js';

describe('Tenant isolation — GetTreasuryMovements', () => {
  const tenantA = 'tenant-iso-tm-a';
  const tenantB = 'tenant-iso-tm-b';
  const shopA = 'shop-iso-tm-a';
  const shopB = 'shop-iso-tm-b';

  async function wipe() {
    await prisma.treasuryMovement.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
    await prisma.physicalAccount.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
    await prisma.logicalFund.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
  }

  beforeEach(async () => {
    await wipe();
    const fundA = await prisma.logicalFund.create({
      data: { tenantId: tenantA, shopId: shopA, code: 'CAPITAL', name: 'Capital' },
    });
    const acctA = await prisma.physicalAccount.create({
      data: {
        tenantId: tenantA,
        shopId: shopA,
        fundId: fundA.id,
        kind: 'CAPITAL_BANK',
        code: 'CAPITAL_BANK_A',
        name: 'Capital Bank',
        currency: 'RWF',
      },
    });
    const fundB = await prisma.logicalFund.create({
      data: { tenantId: tenantB, shopId: shopB, code: 'CAPITAL', name: 'Capital B' },
    });
    const acctB = await prisma.physicalAccount.create({
      data: {
        tenantId: tenantB,
        shopId: shopB,
        fundId: fundB.id,
        kind: 'CAPITAL_BANK',
        code: 'CAPITAL_BANK_B',
        name: 'Capital Bank B',
        currency: 'RWF',
      },
    });
    await prisma.treasuryMovement.createMany({
      data: [
        {
          tenantId: tenantA,
          shopId: shopA,
          movementType: 'OWNER_CAPITAL_IN',
          toPhysicalId: acctA.id,
          amountMinor: 5000n,
          financialTransactionId: 'ft-iso-tm-a',
          idempotencyKey: 'iso-tm-a',
          occurredOn: new Date('2026-08-17T00:00:00.000Z'),
        },
        {
          tenantId: tenantB,
          shopId: shopB,
          movementType: 'OWNER_CAPITAL_IN',
          toPhysicalId: acctB.id,
          amountMinor: 9000n,
          financialTransactionId: 'ft-iso-tm-b',
          idempotencyKey: 'iso-tm-b',
          occurredOn: new Date('2026-08-17T00:00:00.000Z'),
        },
      ],
    });
  });

  afterAll(async () => {
    await wipe();
    await prisma.$disconnect();
  });

  it('returns only tenant A movements for tenant A context', async () => {
    const result = await getTreasuryMovements(
      { tenantId: tenantA, shopId: shopA, traceId: 't-tm-a' },
      {},
    );
    expect(result.status).toBe('success');
    expect(result.data?.movements?.length).toBe(1);
    expect(result.data?.movements?.[0]?.movementType).toBe('OWNER_CAPITAL_IN');
  });

  it('does not leak tenant B movements when shop header is swapped within wrong tenant', async () => {
    const result = await getTreasuryMovements(
      { tenantId: tenantA, shopId: shopB, traceId: 't-tm-swapped' },
      {},
    );
    expect(result.status).toBe('success');
    expect(result.data?.movements?.length).toBe(0);
  });
});
