import { prisma } from '../../database/client.js';
import { postSaleConfirmation } from '../../engine-ledger/post-sale-books.js';
import { postPurchasePayable } from '../../engine-ledger/post-purchase-books.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { getAccountingAccounts, getReceivables } from '../../engine-ledger/queries.js';
import { getEngineReport } from '../../engine-ledger/engine-report.js';
import {
  ACCOUNT_COGS,
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_INVENTORY,
  ACCOUNT_SALES_REVENUE,
  ACCOUNT_SUPPLIER_PAYABLE,
} from '../../engine-ledger/chart.js';
import { setShopTodayForTests } from '../../financial-transaction/calendar.js';

const DAY = '2026-08-17';
const SALE_500K = 50000000; // 500,000 RWF
const COST_380K = 38000000;
const PROFIT_120K = 12000000;
const PAID_200K = 20000000;
const AR_300K = 30000000;
const CASH_100K = 10000000;
const MOMO_150K = 15000000;
const BANK_250K = 25000000;

describe('Sale and purchase books (Phase 6)', () => {
  const tenantId = 'tenant-sale-phase6';
  const shopId = 'shop-sale-phase6';
  const context = { tenantId, shopId, userId: 'user-sale-phase6', traceId: 'trace-sale-phase6' };

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

  // scenario 1: full cash sale
  // scenario 2: full MoMo sale
  // scenario 3: full bank sale
  it.each([
    [1, 'OPS_CASH', 'full cash sale'],
    [2, 'OPS_MOMO', 'full MoMo sale'],
    [3, 'OPS_MAIN_BANK', 'full bank sale'],
  ] as const)('scenario %i: %s settles AR without extra revenue', async (n, toKind, _label) => {
    const saleId = `sale-full-${n}`;
    await postSaleConfirmation(
      {
        saleId,
        customerName: 'Full',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );
    const pay = await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        amountMinor: SALE_500K,
        occurredOn: DAY,
        toKind,
        obligationSourceId: saleId,
        idempotencyKey: `full-pay-${n}`,
      },
      context,
    );
    expect(pay.status).toBe('success');
    const ar = (await getReceivables(undefined, context)).data.receivables.find(
      (r: any) => r.sourceId === saleId,
    );
    expect(ar.outstandingMinor).toBe('0');
    const accounts = await getAccountingAccounts(context);
    expect(accounts.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE).balanceMinor).toBe(
      String(SALE_500K),
    );
    expect(accounts.data.profitAllocation.earnedMinor).toBe(String(PROFIT_120K));
  });

  it('scenario 7: credit sale — economics without requiring cash', async () => {
    const result = await postSaleConfirmation(
      {
        saleId: 'sale-gold-1',
        customerName: 'Jean',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );
    expect(result.status).toBe('success');
    expect(result.data.financialTransaction.type).toBe('SALE_REVENUE');
    expect(result.data.financialTransaction.amountMinor).toBe(String(SALE_500K));
    expect(result.data.cogsFinancialTransaction.type).toBe('SALE_COGS');
    expect(result.data.profitEarnedMinor).toBe(String(PROFIT_120K));
    expect(result.data.profitAllocation.earnedMinor).toBe(String(PROFIT_120K));
    expect(result.data.receivable.outstandingMinor).toBe(String(SALE_500K));
    const accounts = await getAccountingAccounts(context);
    expect(accounts.data.authority).toBe('posted_journal_lines');

    const revenueLines = result.data.revenueJournal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(revenueLines).toEqual([
      `DEBIT:${ACCOUNT_CUSTOMER_RECEIVABLE}`,
      `CREDIT:${ACCOUNT_SALES_REVENUE}`,
    ]);
    const cogsLines = result.data.cogsJournal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(cogsLines).toEqual([`DEBIT:${ACCOUNT_COGS}`, `CREDIT:${ACCOUNT_INVENTORY}`]);
  });

  it('scenario 5 and scenario 6: partial payment then later repayment does not create revenue', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-gold-2',
        customerName: 'Marie',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );

    const pay = await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        amountMinor: PAID_200K,
        occurredOn: DAY,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-gold-2',
        idempotencyKey: 'pay-200k',
      },
      context,
    );
    expect(pay.status).toBe('success');
    expect(pay.data.financialTransaction.type).toBe('SALE_PAYMENT');

    const receivables = await getReceivables(undefined, context);
    const ar = receivables.data.receivables.find((r: any) => r.kind === 'CUSTOMER_RECEIVABLE');
    expect(ar.outstandingMinor).toBe(String(AR_300K));
    expect(ar.sourceId).toBe('sale-gold-2');
    expect(ar.sourceCommand).toBe('ConfirmSale');
    expect(receivables.data.authority).toBe('engine_obligations');

    const bySource = await getReceivables({ sourceId: 'sale-gold-2', kind: 'CUSTOMER_RECEIVABLE' }, context);
    expect(bySource.status).toBe('success');
    expect(bySource.data.receivables).toHaveLength(1);
    expect(bySource.data.receivables[0].sourceId).toBe('sale-gold-2');

    const accountsAfterPay = await getAccountingAccounts(context);
    expect(accountsAfterPay.data.profitAllocation.earnedMinor).toBe(String(PROFIT_120K));
    const revenue = accountsAfterPay.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE);
    expect(revenue.balanceMinor).toBe(String(SALE_500K));

    const repay = await postTreasuryBooks(
      {
        type: 'CUSTOMER_REPAYMENT',
        amountMinor: AR_300K,
        occurredOn: DAY,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-gold-2',
        idempotencyKey: 'pay-300k',
      },
      context,
    );
    expect(repay.status).toBe('success');

    const afterRepay = await getAccountingAccounts(context);
    const revenueAfter = afterRepay.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE);
    expect(revenueAfter.balanceMinor).toBe(String(SALE_500K));
    expect(afterRepay.data.profitAllocation.earnedMinor).toBe(String(PROFIT_120K));
    const arAfter = (await getReceivables(undefined, context)).data.receivables.find((r: any) => r.kind === 'CUSTOMER_RECEIVABLE');
    expect(arAfter.outstandingMinor).toBe('0');
    expect(arAfter.status).toBe('SETTLED');
  });

  it('scenario 4: mixed payment sale hits Cash, MoMo, and Bank with no extra revenue', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-gold-3',
        customerName: 'Split',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );
    for (const [amount, kind, key] of [
      [CASH_100K, 'OPS_CASH', 't-cash'],
      [MOMO_150K, 'OPS_MOMO', 't-momo'],
      [BANK_250K, 'OPS_MAIN_BANK', 't-bank'],
    ] as const) {
      const posted = await postTreasuryBooks(
        {
          type: 'SALE_PAYMENT',
          amountMinor: amount,
          occurredOn: DAY,
          toKind: kind,
          obligationSourceId: 'sale-gold-3',
          idempotencyKey: key,
        },
        context,
      );
      expect(posted.status).toBe('success');
    }
    const accounts = await getAccountingAccounts(context);
    expect(accounts.data.accounts.find((a: any) => a.code === '1110').balanceMinor).toBe(String(CASH_100K));
    expect(accounts.data.accounts.find((a: any) => a.code === '1120').balanceMinor).toBe(String(MOMO_150K));
    expect(accounts.data.accounts.find((a: any) => a.code === '1130').balanceMinor).toBe(String(BANK_250K));
    expect(accounts.data.accounts.find((a: any) => a.code === ACCOUNT_SALES_REVENUE).balanceMinor).toBe(String(SALE_500K));
  });

  it('scenario 8 and scenario 9: unpaid purchase then partial supplier payment', async () => {
    const payable = await postPurchasePayable(
      {
        purchaseId: 'pur-gold-1',
        supplierName: 'Kigali Supplies',
        amountMinor: SALE_500K,
        occurredOn: DAY,
      },
      context,
    );
    expect(payable.status).toBe('success');
    expect(payable.data.payable.outstandingMinor).toBe(String(SALE_500K));

    const pay = await postTreasuryBooks(
      {
        type: 'PURCHASE_PAYMENT',
        amountMinor: PAID_200K,
        occurredOn: DAY,
        fromKind: 'OPS_CASH',
        obligationSourceId: 'pur-gold-1',
        idempotencyKey: 'pur-pay-200k',
      },
      context,
    );
    expect(pay.status).toBe('success');
    const listed = await getReceivables(undefined, context);
    expect(listed.data.payables[0].outstandingMinor).toBe(String(AR_300K));
    const inventory = (await getAccountingAccounts(context)).data.accounts.find((a: any) => a.code === ACCOUNT_INVENTORY);
    const ap = (await getAccountingAccounts(context)).data.accounts.find((a: any) => a.code === ACCOUNT_SUPPLIER_PAYABLE);
    expect(inventory.balanceMinor).toBe(String(SALE_500K));
    expect(ap.balanceMinor).toBe(String(AR_300K));
  });

  it('INVENTORY_CAPITALIZE debits Inventory and credits Operational Cash', async () => {
    const posted = await postTreasuryBooks(
      {
        type: 'INVENTORY_CAPITALIZE',
        amountMinor: CASH_100K,
        occurredOn: DAY,
        fromKind: 'OPS_CASH',
        obligationSourceId: 'item-cap-1',
        idempotencyKey: 'unit-exp-100k',
      },
      context,
    );
    expect(posted.status).toBe('success');
    const lines = posted.data.journal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(lines).toEqual([`DEBIT:${ACCOUNT_INVENTORY}`, 'CREDIT:1110']);
    const inventory = (await getAccountingAccounts(context)).data.accounts.find((a: any) => a.code === ACCOUNT_INVENTORY);
    expect(inventory.balanceMinor).toBe(String(CASH_100K));
  });

  it('scenario 28: duplicate sale payment request is one journal', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-gold-retry',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );
    const first = await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        amountMinor: PAID_200K,
        occurredOn: DAY,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-gold-retry',
        idempotencyKey: 'same-pay',
      },
      context,
    );
    const second = await postTreasuryBooks(
      {
        type: 'SALE_PAYMENT',
        amountMinor: PAID_200K,
        occurredOn: DAY,
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-gold-retry',
        idempotencyKey: 'same-pay',
      },
      context,
    );
    expect(first.status).toBe('success');
    expect(second.status).toBe('success');
    expect(second.data.financialTransaction.existingIfReplay).toBe(true);
    expect(second.data.financialTransaction.id).toBe(first.data.financialTransaction.id);
    const ar = (await getReceivables(undefined, context)).data.receivables.find((r: any) => r.kind === 'CUSTOMER_RECEIVABLE');
    expect(ar.outstandingMinor).toBe(String(AR_300K));
  });

  it('does not create a FinancialTransaction until ConfirmSale books are posted', async () => {
    const rows = await prisma.financialTransaction.findMany({ where: { tenantId } });
    expect(rows).toHaveLength(0);
  });

  it('engine report KPIs match the 500/380/120 sale fixture', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-gold-report',
        customerName: 'Jean',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );
    const report = await getEngineReport(context);
    expect(report.status).toBe('success');
    expect(report.data.revenueMinor).toBe(String(SALE_500K));
    expect(report.data.cogsMinor).toBe(String(COST_380K));
    expect(report.data.grossProfitMinor).toBe(String(PROFIT_120K));
    expect(report.data.profit.earnedMinor).toBe(String(PROFIT_120K));
    expect(report.data.receivables.customerOutstandingMinor).toBe(String(SALE_500K));
    expect(report.data.chartArMinor).toBe(String(SALE_500K));
  });
});
