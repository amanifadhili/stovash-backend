import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostJournalEntryHandler } from '../commands/handlers/post-journal-entry.handler.js';
import { PostJournalEntryCommand } from '../commands/impl/post-journal-entry.command.js';
import { prisma } from '@electronic-shop/database';

describe('PostJournalEntry Integration', () => {
  let app: INestApplication;
  let handler: PostJournalEntryHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [PostJournalEntryHandler],
    }).compile();

    app = module.createNestApplication();
    handler = module.get<PostJournalEntryHandler>(PostJournalEntryHandler);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    // Clean up test data
    await prisma.journalEntry.deleteMany();
    await prisma.ledgerAccount.deleteMany();
    await prisma.workPeriod.deleteMany();
    await prisma.shop.deleteMany();
    await prisma.tenant.deleteMany();
  });

  it('should post a journal entry and update ledger balances', async () => {
    // Setup test data
    const tenant = await prisma.tenant.create({
      data: { name: 'Test Tenant', code: 'TEST' }
    });

    const shop = await prisma.shop.create({
      data: { tenantId: tenant.id, name: 'Test Shop', code: 'SHOP1' }
    });

    const workPeriod = await prisma.workPeriod.create({
      data: { tenantId: tenant.id, shopId: shop.id, status: 'OPEN' }
    });

    const cashAccount = await prisma.ledgerAccount.create({
      data: { tenantId: tenant.id, shopId: shop.id, code: '1001', name: 'Cash', type: 'ASSET', balance: 0 }
    });

    const revenueAccount = await prisma.ledgerAccount.create({
      data: { tenantId: tenant.id, shopId: shop.id, code: '4001', name: 'Sales Revenue', type: 'REVENUE', balance: 0 }
    });

    const command = new PostJournalEntryCommand(
      {
        workPeriodId: workPeriod.id,
        description: 'Test journal entry',
        entries: [
          { accountId: cashAccount.id, type: 'DEBIT', amount: 1000 },
          { accountId: revenueAccount.id, type: 'CREDIT', amount: 1000 }
        ]
      },
      { traceId: 'test-trace', tenantId: tenant.id, shopId: shop.id, userId: 'test-user' }
    );

    const result = await handler.execute(command);

    expect(result.status).toBe('success');

    // Verify journal entry was created
    const journalEntry = await prisma.journalEntry.findFirst({
      where: { description: 'Test journal entry' },
      include: { entries: true }
    });
    expect(journalEntry).toBeDefined();
    expect(journalEntry?.entries).toHaveLength(2);

    // Verify ledger balances were updated
    const updatedCash = await prisma.ledgerAccount.findUnique({ where: { id: cashAccount.id } });
    const updatedRevenue = await prisma.ledgerAccount.findUnique({ where: { id: revenueAccount.id } });

    expect(updatedCash?.balance).toBe(1000);
    expect(updatedRevenue?.balance).toBe(1000);
  });

  it('should fail when work period is closed', async () => {
    const tenant = await prisma.tenant.create({
      data: { name: 'Test Tenant', code: 'TEST' }
    });

    const shop = await prisma.shop.create({
      data: { tenantId: tenant.id, name: 'Test Shop', code: 'SHOP1' }
    });

    const workPeriod = await prisma.workPeriod.create({
      data: { tenantId: tenant.id, shopId: shop.id, status: 'CLOSED' }
    });

    const cashAccount = await prisma.ledgerAccount.create({
      data: { tenantId: tenant.id, shopId: shop.id, code: '1001', name: 'Cash', type: 'ASSET', balance: 0 }
    });

    const revenueAccount = await prisma.ledgerAccount.create({
      data: { tenantId: tenant.id, shopId: shop.id, code: '4001', name: 'Sales Revenue', type: 'REVENUE', balance: 0 }
    });

    const command = new PostJournalEntryCommand(
      {
        workPeriodId: workPeriod.id,
        description: 'Test journal entry',
        entries: [
          { accountId: cashAccount.id, type: 'DEBIT', amount: 1000 },
          { accountId: revenueAccount.id, type: 'CREDIT', amount: 1000 }
        ]
      },
      { traceId: 'test-trace', tenantId: tenant.id, shopId: shop.id, userId: 'test-user' }
    );

    const result = await handler.execute(command);

    expect(result.status).toBe('error');
    expect(result.errorCode).toBe('WORK_PERIOD_CLOSED');
  });
});
