import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { recordGeneralExpense } from '../../engine-ledger/record-general-expense.js';
import { recordWorkerAdvance } from '../../engine-ledger/record-worker-advance.js';
import { getAccountingAccounts, getJournals, getReceivables } from '../../engine-ledger/queries.js';
import { assertJournalBalanced, UnbalancedJournalError } from '../../engine-ledger/post-journal.js';
import { ACCOUNT_COGS, ACCOUNT_INVENTORY, ACCOUNT_PETTY_CASH, ACCOUNT_PROFIT_RESERVE_BANK, ACCOUNT_WORKER_ADVANCE } from '../../engine-ledger/chart.js';

const RENT_1M_FRANCS_CENTS = 100000000; // 1,000,000 RWF
const WORKER_30K_FRANCS_CENTS = 3000000; // 30,000 RWF

describe('Engine ledger (Phase 4)', () => {
  const tenantId = 'tenant-el-phase4';
  const shopId = 'shop-el-phase4';
  const context = { tenantId, shopId, userId: 'user-el-phase4', traceId: 'trace-el-phase4' };

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

  it('posts rent 1,000,000 RWF from Profit Reserve with a balanced journal', async () => {
    const ledgerUpdate = jest.spyOn(prisma.ledgerAccount, 'update');
    const result = await recordGeneralExpense(
      {
        category: 'RENT',
        amountMinor: RENT_1M_FRANCS_CENTS,
        occurredOn: '2026-08-17',
        idempotencyKey: 'rent-1m',
      },
      context,
    );

    expect(result.status).toBe('success');
    expect(result.data?.financialTransaction.type).toBe('GENERAL_EXPENSE');
    expect(result.data?.financialTransaction.amountMinor).toBe(String(RENT_1M_FRANCS_CENTS));
    expect(result.data?.paidFrom).toBe('Profit Reserve Bank');
    expect(result.data?.cashMovement).toBe('ACCOUNTING_ONLY');
    expect(result.data?.journal.lines).toHaveLength(2);

    const debit = result.data.journal.lines.find((l: any) => l.side === 'DEBIT');
    const credit = result.data.journal.lines.find((l: any) => l.side === 'CREDIT');
    expect(debit.accountCode).toBe('6200');
    expect(credit.accountCode).toBe(ACCOUNT_PROFIT_RESERVE_BANK);
    expect(debit.amountMinor).toBe(String(RENT_1M_FRANCS_CENTS));
    expect(credit.amountMinor).toBe(String(RENT_1M_FRANCS_CENTS));
    expect(ledgerUpdate).not.toHaveBeenCalled();
    ledgerUpdate.mockRestore();

    const accounts = await getAccountingAccounts(context);
    const rent = accounts.data.accounts.find((a: any) => a.code === '6200');
    const reserve = accounts.data.accounts.find((a: any) => a.code === ACCOUNT_PROFIT_RESERVE_BANK);
    expect(rent.balanceMinor).toBe(String(RENT_1M_FRANCS_CENTS));
    expect(reserve.balanceMinor).toBe(String(-RENT_1M_FRANCS_CENTS));

    const journals = await getJournals({}, context);
    expect(journals.data.journals[0].transactionType).toBe('GENERAL_EXPENSE');
  });

  it('records a 30,000 RWF worker advance as receivable, not expense', async () => {
    const result = await recordWorkerAdvance(
      {
        workerName: 'Jean',
        amountMinor: WORKER_30K_FRANCS_CENTS,
        occurredOn: '2026-08-17',
        idempotencyKey: 'advance-30k',
      },
      context,
    );

    expect(result.status).toBe('success');
    expect(result.data?.isExpense).toBe(false);
    expect(result.data?.kind).toBe('WORKER_ADVANCE');
    expect(result.data?.outstandingMinor).toBe(String(WORKER_30K_FRANCS_CENTS));
    expect(result.data?.financialTransaction.type).toBe('WORKER_ADVANCE');

    const debit = result.data.journal.lines.find((l: any) => l.side === 'DEBIT');
    const credit = result.data.journal.lines.find((l: any) => l.side === 'CREDIT');
    expect(debit.accountCode).toBe(ACCOUNT_WORKER_ADVANCE);
    expect(credit.accountCode).toBe(ACCOUNT_PETTY_CASH);
    expect(['6200', '6210', '6220', '6230', '6240', '6250', '6260']).not.toContain(debit.accountCode);

    const receivables = await getReceivables(context);
    expect(receivables.data.receivables).toHaveLength(1);
    expect(receivables.data.receivables[0].kind).toBe('WORKER_ADVANCE');
    expect(receivables.data.receivables[0].partyName).toBe('Jean');

    const accounts = await getAccountingAccounts(context);
    const expenseBalances = accounts.data.accounts
      .filter((a: any) => a.type === 'EXPENSE' && a.code !== ACCOUNT_COGS)
      .map((a: any) => a.balanceMinor);
    expect(expenseBalances.every((b: string) => b === '0')).toBe(true);
  });

  it('rejects an unbalanced journal', () => {
    expect(() =>
      assertJournalBalanced([
        { side: 'DEBIT', amountMinor: 100n },
        { side: 'CREDIT', amountMinor: 90n },
      ]),
    ).toThrow(UnbalancedJournalError);
    expect(() => assertJournalBalanced([{ side: 'DEBIT', amountMinor: 100n }])).toThrow(UnbalancedJournalError);
    expect(() =>
      assertJournalBalanced([
        { side: 'DEBIT', amountMinor: 100n },
        { side: 'CREDIT', amountMinor: 100n },
      ]),
    ).not.toThrow();
  });

  it('bootstraps COGS and Inventory even before sales post', async () => {
    const accounts = await getAccountingAccounts(context);
    const codes = accounts.data.accounts.map((a: any) => a.code);
    expect(codes).toContain(ACCOUNT_COGS);
    expect(codes).toContain(ACCOUNT_INVENTORY);
    expect(accounts.data.productCostCodes).toEqual(expect.arrayContaining([ACCOUNT_COGS, ACCOUNT_INVENTORY]));
    expect(accounts.data.profitAllocation.earnedMinor).toBe('0');
    expect(accounts.data.profitAllocation.transferredMinor).toBe('0');
    expect(accounts.data.accounts.find((a: any) => a.code === ACCOUNT_COGS).balanceMinor).toBe('0');
    expect(accounts.data.accounts.find((a: any) => a.code === ACCOUNT_INVENTORY).balanceMinor).toBe('0');
  });

  it('does not write old LedgerAccount.balance', async () => {
    const ledgerUpdate = jest.spyOn(prisma.ledgerAccount, 'update');
    const journalEntryCreate = jest.spyOn(prisma.journalEntry, 'create');
    await recordGeneralExpense(
      { category: 'RENT', amountMinor: 100, occurredOn: '2026-08-17', idempotencyKey: 'no-legacy' },
      context,
    );
    expect(ledgerUpdate).not.toHaveBeenCalled();
    expect(journalEntryCreate).not.toHaveBeenCalled();
    ledgerUpdate.mockRestore();
    journalEntryCreate.mockRestore();
  });
});
