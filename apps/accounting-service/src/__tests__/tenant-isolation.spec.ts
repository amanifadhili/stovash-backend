import { getJournals } from '../engine-ledger/queries.js';
import { prisma } from '../database/client.js';
import { setShopTodayForTests } from '../financial-transaction/calendar.js';

describe('Tenant isolation — GetJournals', () => {
  const tenantA = 'tenant-iso-acct-a';
  const tenantB = 'tenant-iso-acct-b';
  const shopA = 'shop-iso-acct-a';
  const shopB = 'shop-iso-acct-b';
  const day = '2026-08-17';

  async function wipe() {
    await prisma.postedJournalLine.deleteMany({
      where: { journal: { tenantId: { in: [tenantA, tenantB] } } },
    });
    await prisma.postedJournal.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
    await prisma.financialTransaction.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
    await prisma.chartAccount.deleteMany({ where: { tenantId: { in: [tenantA, tenantB] } } });
  }

  beforeEach(async () => {
    setShopTodayForTests(day);
    await wipe();
    const ftA = await prisma.financialTransaction.create({
      data: {
        tenantId: tenantA,
        shopId: shopA,
        type: 'OWNER_CAPITAL_IN',
        amountMinor: 1000n,
        idempotencyKey: 'iso-ft-a',
        sourceDomain: 'treasury',
        sourceCommand: 'CreateTreasuryMovement',
        sourceId: 'iso-src-a',
        occurredOn: new Date(`${day}T00:00:00.000Z`),
      },
    });
    const ftB = await prisma.financialTransaction.create({
      data: {
        tenantId: tenantB,
        shopId: shopB,
        type: 'OWNER_CAPITAL_IN',
        amountMinor: 2000n,
        idempotencyKey: 'iso-ft-b',
        sourceDomain: 'treasury',
        sourceCommand: 'CreateTreasuryMovement',
        sourceId: 'iso-src-b',
        occurredOn: new Date(`${day}T00:00:00.000Z`),
      },
    });
    await prisma.postedJournal.createMany({
      data: [
        {
          tenantId: tenantA,
          shopId: shopA,
          financialTransactionId: ftA.id,
          occurredOn: new Date(`${day}T00:00:00.000Z`),
          description: 'Tenant A journal',
          postedBy: 'user-a',
        },
        {
          tenantId: tenantB,
          shopId: shopB,
          financialTransactionId: ftB.id,
          occurredOn: new Date(`${day}T00:00:00.000Z`),
          description: 'Tenant B journal',
          postedBy: 'user-b',
        },
      ],
    });
  });

  afterAll(async () => {
    await wipe();
    await prisma.$disconnect();
  });

  it('returns only tenant A journals for tenant A context', async () => {
    const result = await getJournals({}, { tenantId: tenantA, shopId: shopA, traceId: 't-j-a' });
    expect(result.status).toBe('success');
    expect(result.data?.journals?.length).toBe(1);
    expect(result.data?.journals?.[0]?.description).toBe('Tenant A journal');
  });

  it('does not leak tenant B journals when context is tenant A', async () => {
    const result = await getJournals(
      { occurredOn: day },
      { tenantId: tenantA, shopId: shopB, traceId: 't-j-swapped-shop' },
    );
    expect(result.status).toBe('success');
    expect(result.data?.journals?.length).toBe(0);
  });
});
