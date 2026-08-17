import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { getTreasuryLoans } from '../../treasury-movement/queries.js';
import { recordReconciliation, approveReconciliationAdjustment } from '../../treasury-movement/reconciliation.js';
import { derivedBalances, balanceOf } from '../../treasury-movement/balances.js';
import { TreasuryBooksClient } from '../../treasury-movement/types.js';
import { setShopTodayForTests } from '../../treasury-movement/calendar.js';

const DAY = '2026-08-17';

describe('Phase 9 treasury invariants', () => {
  const tenantId = 'tenant-inv-tm-p9';
  const shopId = 'shop-inv-tm-p9';
  const otherShop = 'shop-inv-tm-p9-b';
  const context = { tenantId, shopId, userId: 'user-inv-tm-p9', traceId: 'trace-inv-tm-p9' };
  const otherCtx = { ...context, shopId: otherShop };
  const bookCalls: any[] = [];
  let earned = 5_000_000n;

  const books: TreasuryBooksClient = {
    postBooks: async (payload) => {
      bookCalls.push(payload);
      return {
        financialTransaction: { id: `ft-${bookCalls.length}` },
        journal: { id: `j-${bookCalls.length}` },
      };
    },
    getAllocation: async () => ({
      earnedMinor: earned.toString(),
      transferredMinor: '0',
      untransferredMinor: earned.toString(),
    }),
  };

  async function wipe() {
    await prisma.periodSnapshot.deleteMany({ where: { period: { tenantId } } });
    await prisma.financialPeriod.deleteMany({ where: { tenantId } });
    await prisma.reconciliationCount.deleteMany({ where: { tenantId } });
    await prisma.treasuryMovement.deleteMany({ where: { tenantId } });
    await prisma.treasuryObligation.deleteMany({ where: { tenantId } });
    await prisma.physicalAccount.deleteMany({ where: { tenantId } });
    await prisma.logicalFund.deleteMany({ where: { tenantId } });
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    bookCalls.length = 0;
    earned = 5_000_000n;
  }

  async function accounts(shop = shopId) {
    const structure = await getFinancialStructure(shop === shopId ? context : otherCtx);
    const list = structure.data!.funds.flatMap((f) => f.accounts);
    return Object.fromEntries(list.map((a) => [a.kind, a]));
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

  it('1 — no balance change without a posted movement', async () => {
    const byKind = await accounts();
    const before = await derivedBalances(tenantId, shopId);
    expect(balanceOf(before, byKind.CAPITAL_BANK.id)).toBe(0n);
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 8_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv1-cap',
      },
      context,
      books,
    );
    const after = await derivedBalances(tenantId, shopId);
    expect(balanceOf(after, byKind.CAPITAL_BANK.id)).toBe(8_000_000n);
    expect(bookCalls[0].type).toBe('OWNER_CAPITAL_IN');
  });

  it('3/4 — internal capital loan creates repayable outstanding and is not profit', async () => {
    const byKind = await accounts();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 8_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv3-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 3_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv3-loan',
      },
      context,
      books,
    );
    expect(bookCalls[bookCalls.length - 1].type).toBe('INTERNAL_LOAN');
    const loans = await getTreasuryLoans(context);
    const open = loans.data.loans.find((l: any) => l.status === 'OPEN');
    expect(open.kind).toBe('INTERNAL_LOAN');
    expect(open.outstandingMinor).toBe('3000000');
  });

  it('5 — Profit→Capital is capital growth, not a loan', async () => {
    const byKind = await accounts();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 2_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv5-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 1_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv5-loan',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 400000,
        occurredOn: DAY,
        idempotencyKey: 'inv5-pt',
      },
      context,
      books,
    );
    const growth = await createTreasuryMovement(
      {
        movementType: 'CAPITAL_GROWTH',
        fromPhysicalId: byKind.PROFIT_BANK.id,
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 400000,
        occurredOn: DAY,
        idempotencyKey: 'inv5-growth',
      },
      context,
      books,
    );
    expect(growth.status).toBe('success');
    expect(bookCalls[bookCalls.length - 1].type).toBe('CAPITAL_GROWTH');
    const loans = await getTreasuryLoans(context);
    expect(loans.data.loans.filter((l: any) => l.kind === 'INTERNAL_LOAN')).toHaveLength(1);
  });

  it('6/7 — Petty Cash is Capital; Cash/MoMo/ops banks are Operational', async () => {
    const structure = await getFinancialStructure(context);
    const petty = structure.data!.funds.flatMap((f) => f.accounts).find((a) => a.kind === 'PETTY_CASH');
    const cash = structure.data!.funds.flatMap((f) => f.accounts).find((a) => a.kind === 'OPS_CASH');
    const momo = structure.data!.funds.flatMap((f) => f.accounts).find((a) => a.kind === 'OPS_MOMO');
    expect(petty?.fundCode).toBe('CAPITAL');
    expect(cash?.fundCode).toBe('OPERATIONAL');
    expect(momo?.fundCode).toBe('OPERATIONAL');
  });

  it('8 — sale payments credit Operational', async () => {
    const byKind = await accounts();
    const result = await createTreasuryMovement(
      {
        movementType: 'SALE_PAYMENT',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 250000,
        occurredOn: DAY,
        obligationSourceId: 'sale-inv-8',
        idempotencyKey: 'inv8-pay',
      },
      context,
      books,
    );
    expect(result.status).toBe('success');
    const balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.OPS_CASH.id)).toBe(250000n);
    expect(byKind.OPS_CASH.fundCode).toBe('OPERATIONAL');
  });

  it('12 — treasury transfer source amount equals destination amount', async () => {
    const byKind = await accounts();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 1_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv12-cap',
      },
      context,
      books,
    );
    const xfer = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.PETTY_CASH.id,
        amountMinor: 300000,
        occurredOn: DAY,
        idempotencyKey: 'inv12-xfer',
      },
      context,
      books,
    );
    expect(xfer.data.amountMinor).toBe('300000');
    const balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.CAPITAL_BANK.id)).toBe(700000n);
    expect(balanceOf(balances, byKind.PETTY_CASH.id)).toBe(300000n);
  });

  it('15 — recon count does not overwrite until approved', async () => {
    const byKind = await accounts();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 500000,
        occurredOn: DAY,
        idempotencyKey: 'inv15-cap',
      },
      context,
      books,
    );
    await recordReconciliation(
      { physicalAccountId: byKind.CAPITAL_BANK.id, countedMinor: 400000, notes: 'short' },
      context,
    );
    let balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.CAPITAL_BANK.id)).toBe(500000n);
    const recon = await prisma.reconciliationCount.findFirst({ where: { tenantId } });
    await approveReconciliationAdjustment({ reconciliationId: recon!.id, reason: 'Confirmed shortage' }, context, books);
    balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.CAPITAL_BANK.id)).toBe(400000n);
  });

  it('19 — profit transfer is capped by untransferred profit and operational cash', async () => {
    const byKind = await accounts();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 2_000_000,
        occurredOn: DAY,
        idempotencyKey: 'inv19-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 200000,
        occurredOn: DAY,
        idempotencyKey: 'inv19-loan',
      },
      context,
      books,
    );
    const blockedCash = await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 400000,
        occurredOn: DAY,
        idempotencyKey: 'inv19-over-cash',
      },
      context,
      books,
    );
    expect(blockedCash.status).toBe('error');
    earned = 100000n;
    const blockedProfit = await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 200000,
        occurredOn: DAY,
        idempotencyKey: 'inv19-over-profit',
      },
      context,
      books,
    );
    expect(blockedProfit.status).toBe('error');
    expect(blockedProfit.message).toMatch(/untransferred/i);
  });

  it('cross-shop: a movement cannot debit another shop’s physical account', async () => {
    const main = await accounts(shopId);
    await getFinancialStructure(otherCtx);
    const blocked = await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: main.CAPITAL_BANK.id,
        amountMinor: 1000,
        occurredOn: DAY,
        idempotencyKey: 'inv-cross',
      },
      otherCtx,
      books,
    );
    expect(blocked.status).toBe('error');
    expect(blocked.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
  });
});
