import { prisma } from '../../database/client.js';
import { recordGeneralExpense } from '../../engine-ledger/record-general-expense.js';
import { recordWorkerAdvance } from '../../engine-ledger/record-worker-advance.js';
import { repayPettyCashAdvance } from '../../engine-ledger/repay-petty-cash-advance.js';
import { recordPettyCashExpense } from '../../engine-ledger/record-petty-cash-expense.js';
import { getAccountingAccounts, getJournals, getReceivables } from '../../engine-ledger/queries.js';
import { getEngineReport } from '../../engine-ledger/engine-report.js';
import { assertJournalBalanced, UnbalancedJournalError } from '../../engine-ledger/post-journal.js';
import { ACCOUNT_COGS, ACCOUNT_INVENTORY, ACCOUNT_PETTY_CASH, ACCOUNT_PROFIT_RESERVE_BANK, ACCOUNT_WORKER_ADVANCE } from '../../engine-ledger/chart.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { ICommandResponse, IRequestContext } from '@electronic-shop/types';

const TYPE_FOR: Record<string, string> = {
  GENERAL_EXPENSE_FUNDING: 'GENERAL_EXPENSE_FUNDING',
  GENERAL_EXPENSE_PAYOUT: 'GENERAL_EXPENSE',
  WORKER_ADVANCE: 'WORKER_ADVANCE',
  WORKER_ADVANCE_REPAY: 'WORKER_ADVANCE_REPAY',
  PETTY_CASH_EXPENSE: 'PETTY_CASH_EXPENSE',
};

async function inProcessTreasuryMove(
  payload: Record<string, unknown>,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const movementType = String(payload.movementType || '');
  const type = TYPE_FOR[movementType];
  const books = await postTreasuryBooks(
    {
      type,
      amountMinor: payload.amountMinor as string,
      occurredOn: payload.occurredOn as string,
      fromKind: (payload.fromKind as string) || null,
      toKind: (payload.toKind as string) || null,
      expenseAccountCode: payload.expenseAccountCode as string | undefined,
      partyName: payload.partyName as string | undefined,
      obligationId: payload.obligationId as string | undefined,
      obligationSourceId: payload.obligationSourceId as string | undefined,
      idempotencyKey: payload.idempotencyKey as string | undefined,
      description: movementType,
    },
    context,
  );
  if (books.status === 'error') return books;
  return {
    status: 'success',
    traceId: books.traceId,
    data: {
      id: `mv-${books.data.financialTransaction.id}`,
      movementType,
      financialTransactionId: books.data.financialTransaction.id,
      journalId: books.data.journal?.id,
      obligationId: books.data.obligation?.id || null,
      financialTransaction: books.data.financialTransaction,
      journal: books.data.journal,
    },
  };
}

const RENT_1M_FRANCS_CENTS = 100000000; // 1,000,000 RWF
const WORKER_30K_FRANCS_CENTS = 3000000; // 30,000 RWF

describe('Engine ledger (Phase 4 / 7)', () => {
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

  it('posts rent 1,000,000 RWF as PR Bank → Operational → payee (not a loan)', async () => {
    const ledgerUpdate = jest.spyOn(prisma.ledgerAccount, 'update');
    const result = await recordGeneralExpense(
      {
        category: 'RENT',
        amountMinor: RENT_1M_FRANCS_CENTS,
        occurredOn: '2026-08-17',
        idempotencyKey: 'rent-1m',
      },
      context,
      inProcessTreasuryMove,
    );

    expect(result.status).toBe('success');
    expect(result.data?.cashMovement).toBe('PR_BANK_TO_OPERATIONAL_TO_PAYEE');
    expect(result.data?.paidFrom).toBe('Profit Reserve Bank');
    expect(result.data?.isLoan).toBe(false);
    expect(result.data?.funding.movementType).toBe('GENERAL_EXPENSE_FUNDING');
    expect(result.data?.payout.movementType).toBe('GENERAL_EXPENSE_PAYOUT');

    const fundingLines = result.data.funding.journal.lines;
    const payoutLines = result.data.payout.journal.lines;
    expect(fundingLines.find((l: any) => l.side === 'DEBIT').accountCode).toBe('1130');
    expect(fundingLines.find((l: any) => l.side === 'CREDIT').accountCode).toBe(ACCOUNT_PROFIT_RESERVE_BANK);
    expect(payoutLines.find((l: any) => l.side === 'DEBIT').accountCode).toBe('6200');
    expect(payoutLines.find((l: any) => l.side === 'CREDIT').accountCode).toBe('1130');
    expect(ledgerUpdate).not.toHaveBeenCalled();
    ledgerUpdate.mockRestore();

    const accounts = await getAccountingAccounts(context);
    const rent = accounts.data.accounts.find((a: any) => a.code === '6200');
    const reserve = accounts.data.accounts.find((a: any) => a.code === ACCOUNT_PROFIT_RESERVE_BANK);
    const opsBank = accounts.data.accounts.find((a: any) => a.code === '1130');
    expect(rent.balanceMinor).toBe(String(RENT_1M_FRANCS_CENTS));
    expect(reserve.balanceMinor).toBe(String(-RENT_1M_FRANCS_CENTS));
    expect(opsBank.balanceMinor).toBe('0');

    const journals = await getJournals({}, context);
    const types = journals.data.journals.map((j: any) => j.transactionType);
    expect(types).toEqual(expect.arrayContaining(['GENERAL_EXPENSE_FUNDING', 'GENERAL_EXPENSE']));
    expect(types).not.toContain('INTERNAL_LOAN');

    const report = await getEngineReport(context);
    expect(report.data.generalExpenseMinor).toBe(String(RENT_1M_FRANCS_CENTS));
    expect(report.data.netBusinessProfitMinor).toBe(String(-RENT_1M_FRANCS_CENTS));
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
      inProcessTreasuryMove,
    );

    expect(result.status).toBe('success');
    expect(result.data?.isExpense).toBe(false);
    expect(result.data?.kind).toBe('WORKER_ADVANCE');
    expect(result.data?.outstandingMinor).toBe(String(WORKER_30K_FRANCS_CENTS));

    const debit = result.data.financialTransaction.journal.lines.find((l: any) => l.side === 'DEBIT');
    const credit = result.data.financialTransaction.journal.lines.find((l: any) => l.side === 'CREDIT');
    expect(debit.accountCode).toBe(ACCOUNT_WORKER_ADVANCE);
    expect(credit.accountCode).toBe(ACCOUNT_PETTY_CASH);
    expect(['6200', '6210', '6220', '6230', '6240', '6250', '6260']).not.toContain(debit.accountCode);

    const receivables = await getReceivables(undefined, context);
    expect(receivables.data.receivables).toHaveLength(1);
    expect(receivables.data.receivables[0].kind).toBe('WORKER_ADVANCE');
    expect(receivables.data.receivables[0].partyName).toBe('Jean');

    const accounts = await getAccountingAccounts(context);
    const expenseBalances = accounts.data.accounts
      .filter((a: any) => a.type === 'EXPENSE' && a.code !== ACCOUNT_COGS)
      .map((a: any) => a.balanceMinor);
    expect(expenseBalances.every((b: string) => b === '0')).toBe(true);
  });

  it('repays a worker advance back to Petty Cash and reduces AR', async () => {
    const advanced = await recordWorkerAdvance(
      {
        workerName: 'Jean',
        amountMinor: WORKER_30K_FRANCS_CENTS,
        occurredOn: '2026-08-17',
        idempotencyKey: 'advance-repay-src',
      },
      context,
      inProcessTreasuryMove,
    );
    const repaid = await repayPettyCashAdvance(
      {
        obligationId: advanced.data.id,
        amountMinor: WORKER_30K_FRANCS_CENTS,
        occurredOn: '2026-08-17',
        idempotencyKey: 'advance-repay-1',
      },
      context,
      inProcessTreasuryMove,
    );
    expect(repaid.status).toBe('success');
    const receivables = await getReceivables(undefined, context);
    const open = receivables.data.receivables.filter((r: any) => r.status === 'OPEN');
    expect(open).toHaveLength(0);
    const accounts = await getAccountingAccounts(context);
    expect(accounts.data.accounts.find((a: any) => a.code === ACCOUNT_WORKER_ADVANCE).balanceMinor).toBe('0');
    expect(accounts.data.accounts.find((a: any) => a.code === ACCOUNT_PETTY_CASH).balanceMinor).toBe('0');
  });

  it('posts petty minor expense from Petty Cash, not Operational', async () => {
    const result = await recordPettyCashExpense(
      {
        category: 'MINOR',
        amountMinor: 500000,
        occurredOn: '2026-08-17',
        idempotencyKey: 'petty-minor-1',
      },
      context,
      inProcessTreasuryMove,
    );
    expect(result.status).toBe('success');
    expect(result.data.fromPettyCash).toBe(true);
    const debit = result.data.treasuryMovement.journal.lines.find((l: any) => l.side === 'DEBIT');
    const credit = result.data.treasuryMovement.journal.lines.find((l: any) => l.side === 'CREDIT');
    expect(debit.accountCode).toBe('6281');
    expect(credit.accountCode).toBe(ACCOUNT_PETTY_CASH);
    const accounts = await getAccountingAccounts(context);
    expect(accounts.data.accounts.find((a: any) => a.code === '1130').balanceMinor).toBe('0');
    expect(accounts.data.accounts.find((a: any) => a.code === '1110').balanceMinor).toBe('0');
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
      inProcessTreasuryMove,
    );
    expect(ledgerUpdate).not.toHaveBeenCalled();
    expect(journalEntryCreate).not.toHaveBeenCalled();
    ledgerUpdate.mockRestore();
    journalEntryCreate.mockRestore();
  });
});
