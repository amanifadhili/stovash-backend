import { prisma } from '../../database/client.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { getAccountingAccounts } from '../../engine-ledger/queries.js';
import { ACCOUNT_RECON_ADJUSTMENT } from '../../engine-ledger/chart.js';

const DAY = '2026-08-17';
const DIFF = 10000000; // 100,000 RWF

describe('Reconciliation adjustment books (Phase 9)', () => {
  const tenantId = 'tenant-recon-phase9';
  const shopId = 'shop-recon-phase9';
  const context = { tenantId, shopId, userId: 'user-recon-phase9', traceId: 'trace-recon-phase9' };

  async function wipe() {
    await prisma.postedJournalLine.deleteMany({ where: { journal: { tenantId } } });
    await prisma.postedJournal.deleteMany({ where: { tenantId } });
    await prisma.obligation.deleteMany({ where: { tenantId } });
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

  it('scenario 26 analog: shortage is a loss (Dr 3990 / Cr Operational)', async () => {
    const result = await postTreasuryBooks(
      {
        type: 'RECONCILIATION_ADJUSTMENT',
        amountMinor: DIFF,
        occurredOn: DAY,
        fromKind: 'OPS_CASH',
        reconDirection: 'SHORTAGE',
        idempotencyKey: 'recon-short-26',
        reason: 'Till short after count',
      },
      context,
    );
    expect(result.status).toBe('success');
    expect(result.data.financialTransaction.type).toBe('RECONCILIATION_ADJUSTMENT');
    const lines = result.data.journal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(lines).toEqual([`DEBIT:${ACCOUNT_RECON_ADJUSTMENT}`, 'CREDIT:1110']);

    const accounts = await getAccountingAccounts(context);
    const byCode = Object.fromEntries(accounts.data.accounts.map((a: any) => [a.code, a.balanceMinor]));
    expect(byCode[ACCOUNT_RECON_ADJUSTMENT]).toBe(String(-DIFF));
    expect(byCode['1110']).toBe(String(-DIFF));
  });

  it('scenario 27 analog: surplus credits the counted account (Dr Operational / Cr 3990)', async () => {
    const result = await postTreasuryBooks(
      {
        type: 'RECONCILIATION_ADJUSTMENT',
        amountMinor: DIFF,
        occurredOn: DAY,
        toKind: 'OPS_CASH',
        reconDirection: 'EXCESS',
        idempotencyKey: 'recon-excess-27',
        reason: 'Till over after count',
      },
      context,
    );
    expect(result.status).toBe('success');
    const lines = result.data.journal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(lines).toEqual(['DEBIT:1110', `CREDIT:${ACCOUNT_RECON_ADJUSTMENT}`]);

    const accounts = await getAccountingAccounts(context);
    const byCode = Object.fromEntries(accounts.data.accounts.map((a: any) => [a.code, a.balanceMinor]));
    expect(byCode['1110']).toBe(String(DIFF));
    expect(byCode[ACCOUNT_RECON_ADJUSTMENT]).toBe(String(DIFF));
  });
});
