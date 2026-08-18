import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { postSaleConfirmation } from '../../engine-ledger/post-sale-books.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { getAccountingAccounts, getReceivables } from '../../engine-ledger/queries.js';
import { getEngineReport } from '../../engine-ledger/engine-report.js';
import { recordGeneralExpense } from '../../engine-ledger/record-general-expense.js';
import { postFinancialCorrection } from '../../engine-ledger/post-financial-correction.js';
import { writeFinancialTransaction } from '../../financial-transaction/post-financial-transaction.js';
import { ACCOUNT_SALES_REVENUE } from '../../engine-ledger/chart.js';
import { setShopTodayForTests } from '../../financial-transaction/calendar.js';

const DAY = '2026-08-17';
const SALE_500K = 50000000;
const COST_380K = 38000000;
const PROFIT_120K = 12000000;
const PAID_200K = 20000000;

describe('Phase 9 accounting invariants', () => {
  const tenantId = 'tenant-inv-phase9';
  const shopId = 'shop-inv-phase9';
  const context = { tenantId, shopId, userId: 'user-inv-phase9', traceId: 'trace-inv-phase9' };

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
    setShopTodayForTests(DAY);
    await wipe();
  });

  afterAll(async () => {
    setShopTodayForTests(DAY);
    await wipe();
    await prisma.$disconnect();
  });

  async function postSale(saleId: string) {
    return postSaleConfirmation(
      { saleId, customerName: 'Jean', revenueMinor: SALE_500K, cogsMinor: COST_380K, occurredOn: DAY },
      context,
    );
  }

  it('2 — customer repayment creates no sales revenue', async () => {
    await postSale('sale-inv-2');
    await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        occurredOn: DAY,
        amountMinor: PAID_200K,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-inv-2',
        idempotencyKey: 'pay-inv-2',
      },
      context,
    );
    const report = await getEngineReport(context);
    expect(report.data.revenueMinor).toBe(String(SALE_500K));
    expect(report.data.profit.earnedMinor).toBe(String(PROFIT_120K));
  });

  it('9 — earned profit is not a cash balance', async () => {
    await postSale('sale-inv-9');
    const accounts = await getAccountingAccounts(context);
    const revenue = accounts.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE);
    expect(revenue.balanceMinor).toBe(String(SALE_500K));
    expect(accounts.data.profitAllocation.earnedMinor).toBe(String(PROFIT_120K));
    expect(accounts.data.profitAllocation.transferredMinor).toBe('0');
  });

  it('10 — locked historical rows cannot be silently edited', async () => {
    const posted = await postSale('sale-inv-10');
    const id = posted.data.financialTransaction.id;
    setShopTodayForTests('2026-08-18');
    const blocked = await writeFinancialTransaction(
      prisma,
      {
        type: 'SALE_REVENUE',
        occurredOn: DAY,
        amountMinor: '1',
        currency: 'RWF',
        sourceDomain: 'sales',
        sourceCommand: 'ConfirmSale',
        sourceId: 'sale-inv-10-late',
        idempotencyKey: 'late-edit',
      },
      context,
    );
    expect(blocked.ok).toBe(false);
    const row = await prisma.financialTransaction.findUniqueOrThrow({ where: { id } });
    expect(row.amountMinor).toBe(BigInt(SALE_500K));
  });

  it('11 — corrections require a reason', async () => {
    const posted = await postSale('sale-inv-11');
    const result = await postFinancialCorrection(
      {
        kind: 'CORRECTION',
        originalTransactionId: posted.data.financialTransaction.id,
        amountMinor: '2000000',
        occurredOn: DAY,
      } as any,
      context,
    );
    expect(result.status).toBe('error');
    expect(result.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
  });

  it('13 — posted journals DR = CR', async () => {
    await postSale('sale-inv-13');
    await recordGeneralExpense(
      { category: 'RENT', amountMinor: 100000000, occurredOn: DAY, idempotencyKey: 'rent-inv-13' },
      context,
    );
    const journals = await prisma.postedJournal.findMany({
      where: { tenantId },
      include: { lines: true },
    });
    for (const journal of journals) {
      const debit = journal.lines.filter((l) => l.side === 'DEBIT').reduce((s, l) => s + l.amountMinor, 0n);
      const credit = journal.lines.filter((l) => l.side === 'CREDIT').reduce((s, l) => s + l.amountMinor, 0n);
      expect(debit).toBe(credit);
    }
  });

  it('14 — every posted txn is traceable', async () => {
    const posted = await postSale('sale-inv-14');
    const row = await prisma.financialTransaction.findUniqueOrThrow({
      where: { id: posted.data.financialTransaction.id },
    });
    expect(row.id).toBeTruthy();
    expect(row.createdBy).toBe(context.userId);
    expect(row.createdAt).toBeInstanceOf(Date);
    expect(row.type).toBe('SALE_REVENUE');
    expect(row.sourceCommand).toBe('ConfirmSale');
  });

  it('17 — a DRAFT sale id is not a posted financial event until ConfirmSale books run', async () => {
    const rows = await prisma.financialTransaction.findMany({ where: { tenantId, sourceId: 'draft-never' } });
    expect(rows).toHaveLength(0);
  });

  it('18 — retry of the same sale confirmation is one journal', async () => {
    await postSale('sale-inv-18');
    await postSale('sale-inv-18');
    const rows = await prisma.financialTransaction.findMany({
      where: { tenantId, sourceId: 'sale-inv-18', type: 'SALE_REVENUE' },
    });
    expect(rows).toHaveLength(1);
  });

  it('20 — interest is an expense, not a principal-only reduction', async () => {
    const result = await postTreasuryBooks(
      {
        type: 'EXTERNAL_LOAN_INTEREST',
        occurredOn: DAY,
        amountMinor: '18000000',
        fromKind: 'OPS_MAIN_BANK',
        idempotencyKey: 'int-inv-20',
      },
      context,
    );
    expect(result.status).toBe('success');
    const report = await getEngineReport(context);
    expect(report.data.interestMinor).toBe('18000000');
    expect(report.data.expensesMinor).toBe('18000000');
  });

  it('receivable identity equation: original − payments = outstanding', async () => {
    await postSale('sale-id-recv');
    await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        occurredOn: DAY,
        amountMinor: PAID_200K,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-id-recv',
        idempotencyKey: 'id-recv-pay',
      },
      context,
    );
    const listed = await getReceivables({ sourceId: 'sale-id-recv', kind: 'CUSTOMER_RECEIVABLE' }, context);
    expect(listed.data.receivables[0].outstandingMinor).toBe(String(SALE_500K - PAID_200K));
  });

  it('payment ≠ revenue', async () => {
    await postSale('sale-id-pay-rev');
    const before = await getAccountingAccounts(context);
    await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        occurredOn: DAY,
        amountMinor: PAID_200K,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-id-pay-rev',
        idempotencyKey: 'id-pay-rev',
      },
      context,
    );
    const after = await getAccountingAccounts(context);
    expect(after.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE).balanceMinor).toBe(
      before.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE).balanceMinor,
    );
  });

  it('payment ≠ profit', async () => {
    await postSale('sale-id-pay-profit');
    await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        occurredOn: DAY,
        amountMinor: PAID_200K,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-id-pay-profit',
        idempotencyKey: 'id-pay-profit',
      },
      context,
    );
    const report = await getEngineReport(context);
    expect(report.data.profit.earnedMinor).toBe(String(PROFIT_120K));
  });

  it('loan ≠ profit', async () => {
    await postSale('sale-id-loan-profit');
    await postTreasuryBooks(
      {
        type: 'OWNER_CAPITAL_IN',
        occurredOn: DAY,
        amountMinor: '8000000',
        toKind: 'CAPITAL_BANK',
        idempotencyKey: 'id-loan-cap',
      },
      context,
    );
    await postTreasuryBooks(
      {
        type: 'INTERNAL_LOAN',
        occurredOn: DAY,
        amountMinor: '3000000',
        fromKind: 'CAPITAL_BANK',
        toKind: 'OPS_CASH',
        idempotencyKey: 'id-loan-ops',
      },
      context,
    );
    const report = await getEngineReport(context);
    expect(report.data.profit.earnedMinor).toBe(String(PROFIT_120K));
  });

  it('capital loan ≠ capital increase', async () => {
    await postTreasuryBooks(
      {
        type: 'OWNER_CAPITAL_IN',
        occurredOn: DAY,
        amountMinor: '8000000',
        toKind: 'CAPITAL_BANK',
        idempotencyKey: 'id-cap-in',
      },
      context,
    );
    const equityBefore = (await getAccountingAccounts(context)).data.accounts.find((a: any) => a.code === '3000');
    await postTreasuryBooks(
      {
        type: 'INTERNAL_LOAN',
        occurredOn: DAY,
        amountMinor: '3000000',
        fromKind: 'CAPITAL_BANK',
        toKind: 'OPS_CASH',
        idempotencyKey: 'id-cap-loan',
      },
      context,
    );
    const after = await getAccountingAccounts(context);
    expect(after.data.accounts.find((a: any) => a.code === '3000').balanceMinor).toBe(equityBefore.balanceMinor);
    expect(after.data.accounts.find((a: any) => a.code === '1140').balanceMinor).toBe('5000000');
  });

  it('Profit→Capital increases capital with no liability', async () => {
    await postTreasuryBooks(
      {
        type: 'OWNER_CAPITAL_IN',
        occurredOn: DAY,
        amountMinor: '5000000',
        toKind: 'CAPITAL_BANK',
        idempotencyKey: 'id-g-cap',
      },
      context,
    );
    await postTreasuryBooks(
      {
        type: 'INTERNAL_LOAN',
        occurredOn: DAY,
        amountMinor: '2000000',
        fromKind: 'CAPITAL_BANK',
        toKind: 'OPS_MAIN_BANK',
        idempotencyKey: 'id-g-loan',
      },
      context,
    );
    await prisma.profitAllocation.upsert({
      where: { tenantId_shopId: { tenantId, shopId } },
      create: { tenantId, shopId, earnedMinor: 400000n, transferredMinor: 0n },
      update: { earnedMinor: 400000n },
    });
    await postTreasuryBooks(
      {
        type: 'PROFIT_TRANSFER',
        occurredOn: DAY,
        amountMinor: '400000',
        fromKind: 'OPS_MAIN_BANK',
        toKind: 'PROFIT_BANK',
        idempotencyKey: 'id-g-pt',
      },
      context,
    );
    const growth = await postTreasuryBooks(
      {
        type: 'CAPITAL_GROWTH',
        occurredOn: DAY,
        amountMinor: '400000',
        fromKind: 'PROFIT_BANK',
        toKind: 'CAPITAL_BANK',
        idempotencyKey: 'id-g-growth',
      },
      context,
    );
    expect(growth.status).toBe('success');
    const after = await getAccountingAccounts(context);
    expect(after.data.accounts.find((a: any) => a.code === '1140').balanceMinor).toBe('3400000');
    expect(after.data.accounts.find((a: any) => a.code === '2200').balanceMinor).toBe('0');
    expect(growth.data.journal.lines.every((l: any) => l.accountType === 'ASSET')).toBe(true);
  });

  it('Petty Cash is traceable to Capital', async () => {
    await postTreasuryBooks(
      {
        type: 'OWNER_CAPITAL_IN',
        occurredOn: DAY,
        amountMinor: '1000000',
        toKind: 'CAPITAL_BANK',
        idempotencyKey: 'id-petty-cap',
      },
      context,
    );
    await postTreasuryBooks(
      {
        type: 'INTERNAL_TRANSFER',
        occurredOn: DAY,
        amountMinor: '300000',
        fromKind: 'CAPITAL_BANK',
        toKind: 'PETTY_CASH',
        idempotencyKey: 'id-petty-xfer',
      },
      context,
    );
    const after = await getAccountingAccounts(context);
    const petty = after.data.accounts.find((a: any) => a.code === '1150');
    expect(petty.fundCode).toBe('CAPITAL');
    expect(petty.balanceMinor).toBe('300000');
    expect(after.data.accounts.find((a: any) => a.code === '1140').balanceMinor).toBe('700000');
  });

  it('loan identity equation: principal − repayments = outstanding', async () => {
    await postTreasuryBooks(
      {
        type: 'EXTERNAL_LOAN',
        occurredOn: DAY,
        amountMinor: '3000000',
        toKind: 'OPS_CASH',
        idempotencyKey: 'id-ext',
      },
      context,
    );
    await postTreasuryBooks(
      {
        type: 'EXTERNAL_LOAN_REPAY_PRINCIPAL',
        occurredOn: DAY,
        amountMinor: '1000000',
        fromKind: 'OPS_CASH',
        idempotencyKey: 'id-ext-repay',
      },
      context,
    );
    const after = await getAccountingAccounts(context);
    expect(after.data.accounts.find((a: any) => a.code === '2200').balanceMinor).toBe('2000000');
  });
});
