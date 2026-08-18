import { prisma } from '../../database/client.js';
import { postSaleConfirmation } from '../../engine-ledger/post-sale-books.js';
import { postSaleRefund } from '../../engine-ledger/post-sale-refund.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';
import { getAccountingAccounts, getReceivables } from '../../engine-ledger/queries.js';
import {
  ACCOUNT_COGS,
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_INVENTORY,
  ACCOUNT_SALES_REVENUE,
} from '../../engine-ledger/chart.js';

const DAY = '2026-08-17';
const SALE_500K = 50000000;
const COST_380K = 38000000;
const PROFIT_120K = 12000000;

describe('Sale refund books (Phase 8)', () => {
  const tenantId = 'tenant-refund-phase8';
  const shopId = 'shop-refund-phase8';
  const context = { tenantId, shopId, userId: 'user-refund-phase8', traceId: 'trace-refund-phase8' };

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

  it('scenario 22 analog: physical refund reverses revenue and COGS without mutating the original sale rows', async () => {
    const sale = await postSaleConfirmation(
      {
        saleId: 'sale-physical-22',
        customerName: 'Jean',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );
    expect(sale.status).toBe('success');
    const originalRevenueId = sale.data.financialTransaction.id;
    const originalCogsId = sale.data.cogsFinancialTransaction.id;

    const updateSpy = jest.spyOn(prisma.financialTransaction, 'update');
    const refund = await postSaleRefund(
      {
        saleId: 'sale-physical-22',
        kind: 'PHYSICAL',
        refundMinor: SALE_500K,
        cogsMinor: COST_380K,
        reason: 'Customer returned the device',
        occurredOn: DAY,
        idempotencyKey: 'refund-22',
      },
      context,
    );
    expect(refund.status).toBe('success');
    expect(updateSpy).not.toHaveBeenCalled();
    updateSpy.mockRestore();

    const originalRevenue = await prisma.financialTransaction.findUnique({ where: { id: originalRevenueId } });
    expect(originalRevenue?.amountMinor).toBe(BigInt(SALE_500K));
    expect(originalRevenue?.type).toBe('SALE_REVENUE');

    const originalCogs = await prisma.financialTransaction.findUnique({ where: { id: originalCogsId } });
    expect(originalCogs?.amountMinor).toBe(BigInt(COST_380K));
    expect(originalCogs?.type).toBe('SALE_COGS');

    expect(refund.data.financialTransaction.type).toBe('CORRECTION');
    expect(refund.data.financialTransaction.originalTransactionId).toBe(originalRevenueId);
    expect(refund.data.financialTransaction.reason).toBe('Customer returned the device');
    const revenueLines = refund.data.revenueJournal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(revenueLines).toEqual([
      `DEBIT:${ACCOUNT_SALES_REVENUE}`,
      `CREDIT:${ACCOUNT_CUSTOMER_RECEIVABLE}`,
    ]);
    const cogsLines = refund.data.cogsJournal.lines.map((l: any) => `${l.side}:${l.accountCode}`);
    expect(cogsLines).toEqual([`DEBIT:${ACCOUNT_INVENTORY}`, `CREDIT:${ACCOUNT_COGS}`]);
    expect(refund.data.receivable.outstandingMinor).toBe('0');
    expect(refund.data.profitAllocation.earnedMinor).toBe('0');
    expect(refund.data.remainingRevenueMinor).toBe('0');

    const accounts = await getAccountingAccounts(context);
    const byCode = Object.fromEntries(accounts.data.accounts.map((a: any) => [a.code, a.balanceMinor]));
    expect(byCode[ACCOUNT_SALES_REVENUE]).toBe('0');
    expect(byCode[ACCOUNT_COGS]).toBe('0');
    expect(byCode[ACCOUNT_CUSTOMER_RECEIVABLE]).toBe('0');
  });

  it('scenario 23 analog: goodwill refund reverses revenue only and leaves stock/COGS books intact', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-goodwill-23',
        customerName: 'Marie',
        revenueMinor: SALE_500K,
        cogsMinor: COST_380K,
        occurredOn: DAY,
      },
      context,
    );

    const refund = await postSaleRefund(
      {
        saleId: 'sale-goodwill-23',
        kind: 'GOODWILL',
        refundMinor: SALE_500K,
        reason: 'Goodwill for delayed delivery',
        occurredOn: DAY,
        idempotencyKey: 'refund-23',
      },
      context,
    );
    expect(refund.status).toBe('success');
    expect(refund.data.cogsFinancialTransaction).toBeNull();
    expect(refund.data.cogsJournal).toBeNull();
    expect(refund.data.profitAllocation.earnedMinor).toBe(String(-COST_380K));
    expect(refund.data.receivable.outstandingMinor).toBe('0');

    const cogsRows = await prisma.financialTransaction.findMany({
      where: { tenantId, type: 'SALE_COGS' },
    });
    expect(cogsRows).toHaveLength(1);
    expect(cogsRows[0].amountMinor).toBe(BigInt(COST_380K));
  });

  it('paid refund then SALE_REFUND nets AR to zero without reducing obligation twice', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-paid-refund',
        customerName: 'Ken',
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
        toKind: 'OPS_CASH',
        obligationSourceId: 'sale-paid-refund',
        idempotencyKey: 'pay-paid-refund',
      },
      context,
    );
    expect(pay.status).toBe('success');

    const refund = await postSaleRefund(
      {
        saleId: 'sale-paid-refund',
        kind: 'GOODWILL',
        refundMinor: SALE_500K,
        reason: 'Customer cancelled after paying',
        occurredOn: DAY,
        idempotencyKey: 'refund-paid',
      },
      context,
    );
    expect(refund.status).toBe('success');
    expect(refund.data.receivable.outstandingMinor).toBe('0');

    const cash = await postTreasuryBooks(
      {
        type: 'SALE_REFUND',
        amountMinor: SALE_500K,
        occurredOn: DAY,
        fromKind: 'OPS_CASH',
        obligationSourceId: 'sale-paid-refund',
        reason: 'Customer cancelled after paying',
        idempotencyKey: 'cash-paid-refund',
      },
      context,
    );
    expect(cash.status).toBe('success');
    expect(cash.data.financialTransaction.type).toBe('SALE_REFUND');
    const ar = (await getReceivables({ sourceId: 'sale-paid-refund' }, context)).data.receivables[0];
    expect(ar.outstandingMinor).toBe('0');

    const accounts = await getAccountingAccounts(context);
    const arBal = accounts.data.accounts.find((a: any) => a.code === ACCOUNT_CUSTOMER_RECEIVABLE);
    expect(arBal.balanceMinor).toBe('0');
  });

  it('rejects a refund without a reason and does not mutate posted amounts', async () => {
    const sale = await postSaleConfirmation(
      {
        saleId: 'sale-no-reason',
        customerName: 'Jean',
        revenueMinor: SALE_500K,
        occurredOn: DAY,
      },
      context,
    );
    const refund = await postSaleRefund(
      {
        saleId: 'sale-no-reason',
        kind: 'GOODWILL',
        refundMinor: SALE_500K,
        reason: '',
        occurredOn: DAY,
        idempotencyKey: 'no-reason',
      } as any,
      context,
    );
    expect(refund.status).toBe('error');
    const original = await prisma.financialTransaction.findUnique({
      where: { id: sale.data.financialTransaction.id },
    });
    expect(original?.amountMinor).toBe(BigInt(SALE_500K));
  });

  it('replays the same IssueRefund key without a second CORRECTION row', async () => {
    await postSaleConfirmation(
      {
        saleId: 'sale-refund-idemp',
        customerName: 'Jean',
        revenueMinor: SALE_500K,
        occurredOn: DAY,
      },
      context,
    );
    const payload = {
      saleId: 'sale-refund-idemp',
      kind: 'GOODWILL' as const,
      refundMinor: SALE_500K,
      reason: 'Duplicate click',
      occurredOn: DAY,
      idempotencyKey: 'same-refund',
    };
    const first = await postSaleRefund(payload, context);
    const second = await postSaleRefund(payload, context);
    expect(first.status).toBe('success');
    expect(second.status).toBe('success');
    expect(second.data.financialTransaction.existingIfReplay).toBe(true);
    expect(second.data.financialTransaction.id).toBe(first.data.financialTransaction.id);
    const corrections = await prisma.financialTransaction.findMany({
      where: { tenantId, type: 'CORRECTION' },
    });
    expect(corrections).toHaveLength(1);
  });
});
