import { prisma } from '../../database/client.js';
import { postSaleConfirmation } from '../../engine-ledger/post-sale-books.js';
import { postPurchasePayable } from '../../engine-ledger/post-purchase-books.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { getAccountingAccounts, getReceivables } from '../../engine-ledger/queries.js';
import { getEngineReport } from '../../engine-ledger/engine-report.js';
import { setShopTodayForTests } from '../../financial-transaction/calendar.js';
import {
  ACCOUNT_COGS,
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_EXTERNAL_LOAN_PAYABLE,
  ACCOUNT_OWNER_EQUITY,
  ACCOUNT_SALES_REVENUE,
  ACCOUNT_SUPPLIER_PAYABLE,
  ACCOUNT_WORKER_ADVANCE,
} from '../../engine-ledger/chart.js';

/** Plan opening and sequence amounts are francs; engine money is RWF cents. */
const francs = (n: number) => n * 100;
const DAY = '2026-08-17';

const OPEN_CAPITAL = francs(5_000_000);
const OPEN_PETTY = francs(100_000);
const OPEN_PROFIT = francs(1_000_000);
const OPEN_OPS_BANK = francs(2_000_000);
const OPEN_CASH = francs(300_000);
const OPEN_MOMO = francs(500_000);
const OPEN_TOTAL =
  OPEN_CAPITAL + OPEN_PETTY + OPEN_PROFIT + OPEN_OPS_BANK + OPEN_CASH + OPEN_MOMO;

const PURCHASE = francs(800_000);
const SUPPLIER_PAY = francs(400_000);
const SALE = francs(500_000);
const COGS = francs(380_000);
const GROSS = francs(120_000);
const MIX_CASH = francs(200_000);
const MIX_MOMO = francs(150_000);
const MIX_BANK = francs(50_000);
const LATER_BANK = francs(100_000);
const ADVANCE = francs(20_000);
const PETTY_EXPENSE = francs(10_000);
const GENERAL_EXPENSE = francs(100_000);
const PROFIT_XFER = GROSS;
const LOAN = francs(100_000);
const GROWTH = francs(50_000);
const SHORTAGE = francs(10_000);

describe('Phase 10 golden path', () => {
  const tenantId = 'tenant-golden-p10';
  const shopId = 'shop-golden-p10';
  const context = { tenantId, shopId, userId: 'user-golden-p10', traceId: 'trace-golden-p10' };

  async function wipe() {
    await prisma.postedJournalLine.deleteMany({ where: { journal: { tenantId } } });
    await prisma.postedJournal.deleteMany({ where: { tenantId } });
    await prisma.obligation.deleteMany({ where: { tenantId } });
    await prisma.profitAllocation.deleteMany({ where: { tenantId } });
    await prisma.chartAccount.deleteMany({ where: { tenantId } });
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    await prisma.financialTransaction.deleteMany({ where: { tenantId } });
  }

  async function bal(code: string): Promise<bigint> {
    const accounts = await getAccountingAccounts(context);
    return BigInt(accounts.data.accounts.find((a: any) => a.code === code)?.balanceMinor ?? '0');
  }

  async function post(label: string, payload: Parameters<typeof postTreasuryBooks>[0]) {
    const result = await postTreasuryBooks(payload, context);
    expect(result.status).toBe('success');
    if (result.status !== 'success') throw new Error(`${label}: ${result.message}`);
    return result;
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

  it('opening snapshot plus the ratified sequence closes to identity and matching KPIs', async () => {
    const started = Date.now();

    await post('owner capital', {
      type: 'OWNER_CAPITAL_IN',
      amountMinor: OPEN_TOTAL,
      occurredOn: DAY,
      toKind: 'CAPITAL_BANK',
      idempotencyKey: 'gold-cap',
    });
    await post('petty from capital', {
      type: 'INTERNAL_TRANSFER',
      amountMinor: OPEN_PETTY,
      occurredOn: DAY,
      fromKind: 'CAPITAL_BANK',
      toKind: 'PETTY_CASH',
      idempotencyKey: 'gold-petty',
    });
    const opsPool = OPEN_OPS_BANK + OPEN_CASH + OPEN_MOMO + OPEN_PROFIT;
    await post('ops loan', {
      type: 'INTERNAL_LOAN',
      amountMinor: opsPool,
      occurredOn: DAY,
      fromKind: 'CAPITAL_BANK',
      toKind: 'OPS_MAIN_BANK',
      idempotencyKey: 'gold-ops-loan',
    });
    await post('split cash', {
      type: 'INTERNAL_TRANSFER',
      amountMinor: OPEN_CASH,
      occurredOn: DAY,
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'OPS_CASH',
      idempotencyKey: 'gold-cash',
    });
    await post('split momo', {
      type: 'INTERNAL_TRANSFER',
      amountMinor: OPEN_MOMO,
      occurredOn: DAY,
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'OPS_MOMO',
      idempotencyKey: 'gold-momo',
    });
    await prisma.profitAllocation.upsert({
      where: { tenantId_shopId: { tenantId, shopId } },
      create: { tenantId, shopId, earnedMinor: BigInt(OPEN_PROFIT), transferredMinor: 0n },
      update: { earnedMinor: BigInt(OPEN_PROFIT), transferredMinor: 0n },
    });
    await post('opening profit transfer', {
      type: 'PROFIT_TRANSFER',
      amountMinor: OPEN_PROFIT,
      occurredOn: DAY,
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'PROFIT_BANK',
      idempotencyKey: 'gold-pr',
    });

    expect(await bal('1140')).toBe(BigInt(OPEN_CAPITAL));
    expect(await bal('1150')).toBe(BigInt(OPEN_PETTY));
    expect(await bal('1100')).toBe(BigInt(OPEN_PROFIT));
    expect(await bal('1130')).toBe(BigInt(OPEN_OPS_BANK));
    expect(await bal('1110')).toBe(BigInt(OPEN_CASH));
    expect(await bal('1120')).toBe(BigInt(OPEN_MOMO));

    const opening = {
      '1140': await bal('1140'),
      '1150': await bal('1150'),
      '1100': await bal('1100'),
      '1130': await bal('1130'),
      '1110': await bal('1110'),
      '1120': await bal('1120'),
    };

    const purchase = await postPurchasePayable(
      {
        purchaseId: 'gold-pur-1',
        supplierName: 'Kigali Supplies',
        amountMinor: PURCHASE,
        occurredOn: DAY,
      },
      context,
    );
    expect(purchase.status).toBe('success');
    await post('partial supplier payment', {
      type: 'PURCHASE_PAYMENT',
      amountMinor: SUPPLIER_PAY,
      occurredOn: DAY,
      fromKind: 'OPS_MAIN_BANK',
      obligationSourceId: 'gold-pur-1',
      idempotencyKey: 'gold-ap-pay',
    });

    const saleStarted = Date.now();
    const sale = await postSaleConfirmation(
      {
        saleId: 'gold-sale-1',
        customerName: 'Jean',
        revenueMinor: SALE,
        cogsMinor: COGS,
        occurredOn: DAY,
      },
      context,
    );
    expect(sale.status).toBe('success');
    await post('mixed cash', {
      type: 'SALE_PAYMENT',
      amountMinor: MIX_CASH,
      occurredOn: DAY,
      toKind: 'OPS_CASH',
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 'gold-mix-cash',
    });
    expect(Date.now() - saleStarted).toBeLessThan(5000);

    const cashPay = await prisma.financialTransaction.findFirst({
      where: { tenantId, type: 'SALE_PAYMENT', sourceId: 'gold-mix-cash' },
    });
    expect(cashPay).toBeTruthy();
    expect(cashPay!.amountMinor).toBe(BigInt(MIX_CASH));
    expect(cashPay!.sourceCommand).toBe('CreateTreasuryMovement');
    expect(cashPay!.createdBy).toBe(context.userId);
    const meta = cashPay!.metadata as { toKind?: string };
    expect(meta.toKind).toBe('OPS_CASH');
    const cashJournal = await prisma.postedJournal.findUnique({
      where: { financialTransactionId: cashPay!.id },
      include: { lines: { include: { account: true } } },
    });
    const debitCash = cashJournal!.lines.find((l) => l.side === 'DEBIT');
    expect(debitCash?.account.code).toBe('1110');
    expect(debitCash?.amountMinor).toBe(BigInt(MIX_CASH));

    await post('mixed momo', {
      type: 'SALE_PAYMENT',
      amountMinor: MIX_MOMO,
      occurredOn: DAY,
      toKind: 'OPS_MOMO',
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 'gold-mix-momo',
    });
    await post('mixed bank', {
      type: 'SALE_PAYMENT',
      amountMinor: MIX_BANK,
      occurredOn: DAY,
      toKind: 'OPS_MAIN_BANK',
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 'gold-mix-bank',
    });
    await post('later pay', {
      type: 'SALE_PAYMENT',
      amountMinor: LATER_BANK,
      occurredOn: DAY,
      toKind: 'OPS_MAIN_BANK',
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 'gold-later',
    });

    await post('petty advance', {
      type: 'WORKER_ADVANCE',
      amountMinor: ADVANCE,
      occurredOn: DAY,
      fromKind: 'PETTY_CASH',
      partyName: 'Jean',
      idempotencyKey: 'gold-adv',
    });
    await post('petty expense', {
      type: 'PETTY_CASH_EXPENSE',
      amountMinor: PETTY_EXPENSE,
      occurredOn: DAY,
      fromKind: 'PETTY_CASH',
      expenseAccountCode: '6281',
      idempotencyKey: 'gold-petty-exp',
    });
    await post('general funding', {
      type: 'GENERAL_EXPENSE_FUNDING',
      amountMinor: GENERAL_EXPENSE,
      occurredOn: DAY,
      fromKind: 'PROFIT_BANK',
      toKind: 'OPS_MAIN_BANK',
      idempotencyKey: 'gold-exp-fund',
    });
    await post('general payout', {
      type: 'GENERAL_EXPENSE',
      amountMinor: GENERAL_EXPENSE,
      occurredOn: DAY,
      fromKind: 'OPS_MAIN_BANK',
      expenseAccountCode: '6200',
      idempotencyKey: 'gold-exp-pay',
    });
    await post('profit transfer', {
      type: 'PROFIT_TRANSFER',
      amountMinor: PROFIT_XFER,
      occurredOn: DAY,
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'PROFIT_BANK',
      idempotencyKey: 'gold-pt',
    });
    await post('internal loan', {
      type: 'INTERNAL_LOAN',
      amountMinor: LOAN,
      occurredOn: DAY,
      fromKind: 'CAPITAL_BANK',
      toKind: 'OPS_CASH',
      idempotencyKey: 'gold-loan',
    });
    await post('loan repay', {
      type: 'INTERNAL_LOAN_REPAY',
      amountMinor: LOAN,
      occurredOn: DAY,
      fromKind: 'OPS_CASH',
      toKind: 'CAPITAL_BANK',
      idempotencyKey: 'gold-loan-repay',
    });
    await post('capital growth', {
      type: 'CAPITAL_GROWTH',
      amountMinor: GROWTH,
      occurredOn: DAY,
      fromKind: 'PROFIT_BANK',
      toKind: 'CAPITAL_BANK',
      idempotencyKey: 'gold-growth',
    });
    await post('recon shortage', {
      type: 'RECONCILIATION_ADJUSTMENT',
      amountMinor: SHORTAGE,
      occurredOn: DAY,
      fromKind: 'OPS_CASH',
      reconDirection: 'SHORTAGE',
      reason: 'Till short after count',
      idempotencyKey: 'gold-recon',
    });

    const closing = {
      '1140': await bal('1140'),
      '1150': await bal('1150'),
      '1100': await bal('1100'),
      '1130': await bal('1130'),
      '1110': await bal('1110'),
      '1120': await bal('1120'),
    };

    expect(closing['1140']).toBe(opening['1140'] + BigInt(GROWTH));
    expect(closing['1150']).toBe(opening['1150'] - BigInt(ADVANCE) - BigInt(PETTY_EXPENSE));
    expect(closing['1100']).toBe(
      opening['1100'] - BigInt(GENERAL_EXPENSE) + BigInt(PROFIT_XFER) - BigInt(GROWTH),
    );
    expect(closing['1130']).toBe(
      opening['1130'] -
        BigInt(SUPPLIER_PAY) +
        BigInt(MIX_BANK) +
        BigInt(LATER_BANK) +
        BigInt(GENERAL_EXPENSE) -
        BigInt(GENERAL_EXPENSE) -
        BigInt(PROFIT_XFER),
    );
    expect(closing['1110']).toBe(opening['1110'] + BigInt(MIX_CASH) - BigInt(SHORTAGE));
    expect(closing['1120']).toBe(opening['1120'] + BigInt(MIX_MOMO));

    const report = await getEngineReport(context);
    expect(report.status).toBe('success');
    expect(report.data.revenueMinor).toBe(String(SALE));
    expect(report.data.cogsMinor).toBe(String(COGS));
    expect(report.data.grossProfitMinor).toBe(String(GROSS));
    expect(report.data.generalExpenseMinor).toBe(String(GENERAL_EXPENSE));
    expect(report.data.pettyExpenseMinor).toBe(String(PETTY_EXPENSE));
    expect(report.data.netBusinessProfitMinor).toBe(String(GROSS - GENERAL_EXPENSE - PETTY_EXPENSE));
    expect(report.data.receivables.customerOutstandingMinor).toBe('0');
    expect(report.data.receivables.workerOutstandingMinor).toBe(String(ADVANCE));
    expect(report.data.payables.supplierOutstandingMinor).toBe(String(PURCHASE - SUPPLIER_PAY));
    expect(report.data.chartArMinor).toBe('0');
    expect(report.data.chartWorkerAdvanceMinor).toBe(String(ADVANCE));
    expect(report.data.chartApMinor).toBe(String(PURCHASE - SUPPLIER_PAY));
    expect(report.data.profit.untransferredMinor).toBe('0');

    const receivables = await getReceivables(undefined, context);
    const ar = receivables.data.receivables.find((r: any) => r.kind === 'CUSTOMER_RECEIVABLE');
    expect(ar.outstandingMinor).toBe('0');
    expect(ar.status).toBe('SETTLED');
    expect(await bal(ACCOUNT_SALES_REVENUE)).toBe(BigInt(SALE));
    expect(await bal(ACCOUNT_COGS)).toBe(BigInt(COGS));
    expect(await bal(ACCOUNT_CUSTOMER_RECEIVABLE)).toBe(0n);
    expect(await bal(ACCOUNT_WORKER_ADVANCE)).toBe(BigInt(ADVANCE));
    expect(await bal(ACCOUNT_SUPPLIER_PAYABLE)).toBe(BigInt(PURCHASE - SUPPLIER_PAY));
    expect(await bal(ACCOUNT_EXTERNAL_LOAN_PAYABLE)).toBe(0n);
    expect(await bal(ACCOUNT_OWNER_EQUITY)).toBe(BigInt(OPEN_TOTAL));
    expect(await bal('3990')).toBe(-BigInt(SHORTAGE));

    expect(Date.now() - started).toBeLessThan(15000);
  });
});
