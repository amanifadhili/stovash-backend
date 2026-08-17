import { prisma } from '../../database/client.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { ACCOUNT_CAPITAL_BANK, ACCOUNT_INTEREST_EXPENSE, ACCOUNT_OWNER_EQUITY } from '../../engine-ledger/chart.js';

describe('Treasury books journals (Phase 5)', () => {
  const tenantId = 'tenant-tb-phase5';
  const shopId = 'shop-tb-phase5';
  const context = { tenantId, shopId, userId: 'user-tb-phase5', traceId: 'trace-tb-phase5' };

  async function wipe() {
    await prisma.postedJournalLine.deleteMany({ where: { journal: { tenantId } } });
    await prisma.postedJournal.deleteMany({ where: { tenantId } });
    await prisma.profitAllocation.deleteMany({ where: { tenantId } });
    await prisma.chartAccount.deleteMany({ where: { tenantId } });
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    await prisma.financialTransaction.deleteMany({ where: { tenantId } });
  }

  beforeEach(async () => {
    await wipe();
  });

  afterAll(async () => {
    await wipe();
    await prisma.$disconnect();
  });

  it('OWNER_CAPITAL_IN debits Capital Bank and credits equity', async () => {
    const result = await postTreasuryBooks(
      {
        type: 'OWNER_CAPITAL_IN',
        amountMinor: 1000,
        occurredOn: '2026-08-17',
        toKind: 'CAPITAL_BANK',
        idempotencyKey: 'eq-1',
      },
      context,
    );
    expect(result.status).toBe('success');
    const codes = result.data.journal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(codes).toEqual([`DEBIT:${ACCOUNT_CAPITAL_BANK}`, `CREDIT:${ACCOUNT_OWNER_EQUITY}`]);
  });

  it('INTERNAL_TRANSFER / loan / growth journals are asset reclass only (no P&L)', async () => {
    for (const [type, fromKind, toKind, key] of [
      ['INTERNAL_TRANSFER', 'OPS_CASH', 'OPS_MAIN_BANK', 'xfer'],
      ['INTERNAL_LOAN', 'CAPITAL_BANK', 'OPS_CASH', 'loan'],
      ['CAPITAL_GROWTH', 'PROFIT_BANK', 'CAPITAL_BANK', 'grow'],
    ] as const) {
      const result = await postTreasuryBooks(
        { type, amountMinor: 500, occurredOn: '2026-08-17', fromKind, toKind, idempotencyKey: key },
        context,
      );
      expect(result.status).toBe('success');
      const types = result.data.journal.lines.map((l: any) => l.accountType);
      expect(types.every((t: string) => t === 'ASSET')).toBe(true);
    }
  });

  it('external loan interest is an expense, not principal', async () => {
    const result = await postTreasuryBooks(
      {
        type: 'EXTERNAL_LOAN_INTEREST',
        amountMinor: 250,
        occurredOn: '2026-08-17',
        fromKind: 'OPS_CASH',
        idempotencyKey: 'int-1',
      },
      context,
    );
    expect(result.status).toBe('success');
    const debit = result.data.journal.lines.find((l: any) => l.side === 'DEBIT');
    expect(debit.accountCode).toBe(ACCOUNT_INTEREST_EXPENSE);
    expect(debit.accountType).toBe('EXPENSE');
  });
});
