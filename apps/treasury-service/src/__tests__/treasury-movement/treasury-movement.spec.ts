import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { getTreasuryLoans, getTreasuryMovements, getProfitTransferPosition } from '../../treasury-movement/queries.js';
import { recordReconciliation, approveReconciliationAdjustment } from '../../treasury-movement/reconciliation.js';
import { TreasuryBooksClient } from '../../treasury-movement/types.js';
import { balanceOf, derivedBalances } from '../../treasury-movement/balances.js';
import { setShopTodayForTests } from '../../treasury-movement/calendar.js';

const DAY = '2026-08-17';

describe('Treasury movements (Phase 5)', () => {
  const tenantId = 'tenant-tm-phase5';
  const shopId = 'shop-tm-phase5';
  const context = { tenantId, shopId, userId: 'user-tm-phase5', traceId: 'trace-tm-phase5' };
  const bookCalls: any[] = [];
  let earned = 0n;

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
    earned = 0n;
  }

  async function accountsByKind() {
    const structure = await getFinancialStructure(context);
    const accounts = structure.data!.funds.flatMap((f) => f.accounts);
    return Object.fromEntries(accounts.map((a) => [a.kind, a]));
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

  it('does not debit this shop cash when fromPhysicalId belongs to another shop', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 200000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-wrong-id',
      },
      context,
      books,
    );
    const result = await createTreasuryMovement(
      {
        movementType: 'PURCHASE_PAYMENT',
        fromPhysicalId: '00000000-0000-4000-8000-000000000099',
        fromKind: 'OPS_CASH',
        amountMinor: 50000000,
        occurredOn: DAY,
        obligationSourceId: 'purchase-ghost',
        idempotencyKey: 'pay-wrong-shop',
      },
      context,
      books,
    );
    expect(result.status).toBe('error');
    expect(result.message).toMatch(/Unknown source account/);
    const balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.OPS_CASH.id)).toBe(0n);
  });

  it('tells the operator that empty operational cash is not owner capital', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 200000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-not-ops',
      },
      context,
      books,
    );
    const result = await createTreasuryMovement(
      {
        movementType: 'PURCHASE_PAYMENT',
        fromPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 50000000,
        occurredOn: DAY,
        obligationSourceId: 'purchase-ops',
        idempotencyKey: 'pay-empty-ops',
      },
      context,
      books,
    );
    expect(result.status).toBe('error');
    expect(result.message).toMatch(/have 0 RWF, need 500000 RWF/);
    expect(result.message).toMatch(/Capital Bank/);
  });

  it('scenario 17 and scenario 18: Capital→Operational creates an obligation; repayment reduces it', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 10000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-in',
      },
      context,
      books,
    );
    const loan = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 4000000,
        occurredOn: DAY,
        idempotencyKey: 'loan-1',
      },
      context,
      books,
    );
    expect(loan.status).toBe('success');
    expect(loan.data.financialTransactionId).toBeTruthy();
    expect(loan.data.id).toBeTruthy();

    let loans = await getTreasuryLoans(context);
    expect(loans.data.loans).toHaveLength(1);
    expect(loans.data.loans[0].outstandingMinor).toBe('4000000');

    const repay = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN_REPAY',
        loanId: loans.data.loans[0].id,
        fromPhysicalId: byKind.OPS_CASH.id,
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 4000000,
        occurredOn: DAY,
        idempotencyKey: 'loan-repay',
      },
      context,
      books,
    );
    expect(repay.status).toBe('success');
    loans = await getTreasuryLoans(context);
    expect(loans.data.loans[0].outstandingMinor).toBe('0');
    expect(loans.data.loans[0].status).toBe('REPAID');
  });

  it('scenario 14 and scenario 21: manager profit transfer then Profit→Capital growth creates no loan', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 8000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-in-2',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 8000000,
        occurredOn: DAY,
        idempotencyKey: 'loan-for-profit',
      },
      context,
      books,
    );
    earned = 8000000n;
    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_CASH.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 5000000,
        occurredOn: DAY,
        idempotencyKey: 'p-xfer',
      },
      context,
      books,
    );
    const growth = await createTreasuryMovement(
      {
        movementType: 'CAPITAL_GROWTH',
        fromPhysicalId: byKind.PROFIT_BANK.id,
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 3000000,
        occurredOn: DAY,
        idempotencyKey: 'growth',
      },
      context,
      books,
    );
    expect(growth.status).toBe('success');

    const profitHistory = await getTreasuryMovements(context, {
      movementTypes: ['PROFIT_TRANSFER', 'CAPITAL_GROWTH'],
    });
    expect(profitHistory.status).toBe('success');
    expect(profitHistory.data.movements.map((m: { movementType: string }) => m.movementType)).toEqual([
      'CAPITAL_GROWTH',
      'PROFIT_TRANSFER',
    ]);

    const loans = await getTreasuryLoans(context);
    expect(loans.data.loans.filter((l: any) => l.kind === 'INTERNAL_LOAN')).toHaveLength(1);
    expect(loans.data.loans.some((l: any) => l.kind === 'CAPITAL_GROWTH')).toBe(false);

    const structure = await getFinancialStructure(context);
    const capitalBank = structure.data!.funds
      .flatMap((f) => f.accounts)
      .find((a) => a.kind === 'CAPITAL_BANK');
    expect(capitalBank?.balanceMinor).toBe('3000000');
  });

  it('Cash→Main Bank is an internal transfer with no P&L type', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 2000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-in-3',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 2000000,
        occurredOn: DAY,
        idempotencyKey: 'loan-cash',
      },
      context,
      books,
    );
    bookCalls.length = 0;
    const moved = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.OPS_CASH.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 2000000,
        occurredOn: DAY,
        idempotencyKey: 'cash-to-bank',
      },
      context,
      books,
    );
    expect(moved.status).toBe('success');
    expect(bookCalls[0].type).toBe('INTERNAL_TRANSFER');
    expect(bookCalls[0].type).not.toMatch(/SALE|EXPENSE|REVENUE|COGS/);
  });

  it('blocks profit transfer when Operational cash is below the request', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 1000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-in-4',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 1000000,
        occurredOn: DAY,
        idempotencyKey: 'small-ops',
      },
      context,
      books,
    );
    earned = 5000000n;
    const blocked = await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_CASH.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 2000000,
        occurredOn: DAY,
        idempotencyKey: 'too-much',
      },
      context,
      books,
    );
    expect(blocked.status).toBe('error');
    expect(blocked.errorCode).toBe(ErrorCode.BUSINESS_RULE_VIOLATION);
    expect(blocked.message).toMatch(/Insufficient funds|Operational cash/);
  });

  it('reconciliation count does not change the balance until approved', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 5000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-in-5',
      },
      context,
      books,
    );
    const counted = await recordReconciliation(
      { physicalAccountId: byKind.CAPITAL_BANK.id, countedMinor: 4000000 },
      context,
    );
    expect(counted.status).toBe('success');
    expect(counted.data.differenceMinor).toBe('-1000000');

    let structure = await getFinancialStructure(context);
    expect(structure.data!.authority).toBe('treasury_movements');
    expect(structure.data!.funds.find((f) => f.code === 'CAPITAL')?.accounts.find((a) => a.kind === 'CAPITAL_BANK')?.balanceMinor).toBe(
      '5000000',
    );

    const approved = await approveReconciliationAdjustment(
      { reconciliationId: counted.data.id, reason: 'Till shortage after count' },
      context,
      books,
    );
    expect(approved.status).toBe('success');
    structure = await getFinancialStructure(context);
    expect(structure.data!.funds.find((f) => f.code === 'CAPITAL')?.accounts.find((a) => a.kind === 'CAPITAL_BANK')?.balanceMinor).toBe(
      '4000000',
    );
  });

  it('rejects a generic transfer and requires movementType', async () => {
    const result = await createTreasuryMovement({ amountMinor: 100, occurredOn: DAY } as any, context, books);
    expect(result.status).toBe('error');
    expect(result.message).toMatch(/movementType/);
  });

  it('sale payments credit Operational accounts; retry is one movement', async () => {
    const byKind = await accountsByKind();
    const first = await createTreasuryMovement(
      {
        movementType: 'SALE_PAYMENT',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 10000000,
        occurredOn: DAY,
        obligationSourceId: 'sale-cash-1',
        idempotencyKey: 'sale-pay-1',
      },
      context,
      books,
    );
    expect(first.status).toBe('success');
    const momo = await createTreasuryMovement(
      {
        movementType: 'SALE_PAYMENT',
        toPhysicalId: byKind.OPS_MOMO.id,
        amountMinor: 15000000,
        occurredOn: DAY,
        obligationSourceId: 'sale-cash-1',
        idempotencyKey: 'sale-pay-momo',
      },
      context,
      books,
    );
    const bank = await createTreasuryMovement(
      {
        movementType: 'SALE_PAYMENT',
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 25000000,
        occurredOn: DAY,
        obligationSourceId: 'sale-cash-1',
        idempotencyKey: 'sale-pay-bank',
      },
      context,
      books,
    );
    expect(momo.status).toBe('success');
    expect(bank.status).toBe('success');

    const replay = await createTreasuryMovement(
      {
        movementType: 'SALE_PAYMENT',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 10000000,
        occurredOn: DAY,
        obligationSourceId: 'sale-cash-1',
        idempotencyKey: 'sale-pay-1',
      },
      context,
      books,
    );
    expect(replay.data.existingIfReplay).toBe(true);
    expect(replay.data.id).toBe(first.data.id);

    const structure = await getFinancialStructure(context);
    const ops = structure.data!.funds.find((f) => f.code === 'OPERATIONAL');
    expect(ops?.accounts.find((a) => a.kind === 'OPS_CASH')?.balanceMinor).toBe('10000000');
    expect(ops?.accounts.find((a) => a.kind === 'OPS_MOMO')?.balanceMinor).toBe('15000000');
    expect(ops?.accounts.find((a) => a.kind === 'OPS_MAIN_BANK')?.balanceMinor).toBe('25000000');
    expect(bookCalls.filter((c) => c.type === 'SALE_PAYMENT')).toHaveLength(3);
  });

  it('purchase payment leaves Operational cash and is not a P&L type', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 20000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-for-ap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 20000000,
        occurredOn: DAY,
        idempotencyKey: 'loan-for-ap',
      },
      context,
      books,
    );
    const pay = await createTreasuryMovement(
      {
        movementType: 'PURCHASE_PAYMENT',
        fromPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 8000000,
        occurredOn: DAY,
        obligationSourceId: 'pur-1',
        idempotencyKey: 'pur-pay-1',
      },
      context,
      books,
    );
    expect(pay.status).toBe('success');
    const structure = await getFinancialStructure(context);
    expect(
      structure.data!.funds.find((f) => f.code === 'OPERATIONAL')?.accounts.find((a) => a.kind === 'OPS_CASH')?.balanceMinor,
    ).toBe('12000000');
    expect(bookCalls[bookCalls.length - 1].type).toBe('PURCHASE_PAYMENT');
  });

  it('unit expense leaves Operational cash and posts INVENTORY_CAPITALIZE', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 10000000,
        occurredOn: DAY,
        idempotencyKey: 'cap-for-unit-exp',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 10000000,
        occurredOn: DAY,
        idempotencyKey: 'loan-for-unit-exp',
      },
      context,
      books,
    );
    const exp = await createTreasuryMovement(
      {
        movementType: 'INVENTORY_CAPITALIZE',
        fromPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 3000000,
        occurredOn: DAY,
        obligationSourceId: 'item-1',
        idempotencyKey: 'unit-exp-1',
      },
      context,
      books,
    );
    expect(exp.status).toBe('success');
    const structure = await getFinancialStructure(context);
    expect(
      structure.data!.funds.find((f) => f.code === 'OPERATIONAL')?.accounts.find((a) => a.kind === 'OPS_CASH')?.balanceMinor,
    ).toBe('7000000');
    expect(bookCalls[bookCalls.length - 1].type).toBe('INVENTORY_CAPITALIZE');
  });

  it('scenario 10 — general expense is PR → Operational → payee and is not a loan', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 5_000_000,
        occurredOn: DAY,
        idempotencyKey: 'p7-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 2_000_000,
        occurredOn: DAY,
        idempotencyKey: 'p7-setup-loan',
      },
      context,
      books,
    );
    earned = 2_000_000n;
    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 2_000_000,
        occurredOn: DAY,
        idempotencyKey: 'p7-to-pr',
      },
      context,
      books,
    );
    const loansBefore = await getTreasuryLoans(context);
    const funding = await createTreasuryMovement(
      {
        movementType: 'GENERAL_EXPENSE_FUNDING',
        fromKind: 'PROFIT_BANK',
        toKind: 'OPS_MAIN_BANK',
        amountMinor: 1_000_000,
        occurredOn: DAY,
        idempotencyKey: 'p7-exp-fund',
      },
      context,
      books,
    );
    expect(funding.status).toBe('success');
    const payout = await createTreasuryMovement(
      {
        movementType: 'GENERAL_EXPENSE_PAYOUT',
        fromKind: 'OPS_MAIN_BANK',
        amountMinor: 1_000_000,
        occurredOn: DAY,
        expenseAccountCode: '6200',
        idempotencyKey: 'p7-exp-pay',
      },
      context,
      books,
    );
    expect(payout.status).toBe('success');
    const balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.PROFIT_BANK.id)).toBe(1_000_000n);
    expect(balanceOf(balances, byKind.OPS_MAIN_BANK.id)).toBe(0n);
    const loansAfter = await getTreasuryLoans(context);
    expect(loansAfter.data.loans.filter((l: any) => l.kind === 'INTERNAL_LOAN')).toHaveLength(
      loansBefore.data.loans.filter((l: any) => l.kind === 'INTERNAL_LOAN').length,
    );
    expect(bookCalls.map((c) => c.type)).toEqual(expect.arrayContaining(['GENERAL_EXPENSE_FUNDING', 'GENERAL_EXPENSE']));
    expect(bookCalls.filter((c) => c.type === 'INTERNAL_LOAN')).toHaveLength(1);
  });

  it('scenario 15 — available profit transfer is min(earned−transferred, ops cash), not the 800k typo', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 200_000_000,
        occurredOn: DAY,
        idempotencyKey: 'p7-typo-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 100_000_000,
        occurredOn: DAY,
        idempotencyKey: 'p7-typo-loan',
      },
      context,
      books,
    );
    books.getAllocation = async () => ({
      earnedMinor: '120000000',
      transferredMinor: '80000000',
      untransferredMinor: '40000000',
    });
    const pos = await getProfitTransferPosition(context, books);
    expect(pos.status).toBe('success');
    expect(pos.data.availableMinor).toBe('40000000');
    expect(pos.data.availableMinor).not.toBe('80000000');
    expect(pos.data.untransferredMinor).toBe('40000000');
    books.getAllocation = async () => ({
      earnedMinor: earned.toString(),
      transferredMinor: '0',
      untransferredMinor: earned.toString(),
    });
  });

  it('scenario 26: recon shortage does not change books until approved, then posts SHORTAGE', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 5000000,
        occurredOn: DAY,
        idempotencyKey: 's26-in',
      },
      context,
      books,
    );
    const counted = await recordReconciliation(
      { physicalAccountId: byKind.CAPITAL_BANK.id, countedMinor: 4000000, notes: 'till short' },
      context,
    );
    expect(counted.status).toBe('success');
    expect(counted.data.status).toBe('COUNTED');
    expect(counted.data.differenceMinor).toBe('-1000000');

    let structure = await getFinancialStructure(context);
    expect(
      structure.data!.funds.find((f) => f.code === 'CAPITAL')?.accounts.find((a) => a.kind === 'CAPITAL_BANK')
        ?.balanceMinor,
    ).toBe('5000000');

    const approved = await approveReconciliationAdjustment(
      { reconciliationId: counted.data.id, reason: 'Confirmed till shortage' },
      context,
      books,
    );
    expect(approved.status).toBe('success');
    expect(approved.data.status).toBe('ADJUSTED');
    expect(approved.data.adjustmentMovementId).toBeTruthy();

    const adj = bookCalls.find((c) => c.type === 'RECONCILIATION_ADJUSTMENT' && c.reconDirection === 'SHORTAGE');
    expect(adj).toBeTruthy();
    expect(adj.fromKind).toBe('CAPITAL_BANK');
    expect(adj.toKind).toBeNull();
    expect(adj.amountMinor).toBe('1000000');
    expect(adj.reason).toBe('Confirmed till shortage');

    structure = await getFinancialStructure(context);
    expect(
      structure.data!.funds.find((f) => f.code === 'CAPITAL')?.accounts.find((a) => a.kind === 'CAPITAL_BANK')
        ?.balanceMinor,
    ).toBe('4000000');
  });

  it('scenario 27: recon surplus does not change books until approved, then posts EXCESS', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 5000000,
        occurredOn: DAY,
        idempotencyKey: 's27-in',
      },
      context,
      books,
    );
    const counted = await recordReconciliation(
      { physicalAccountId: byKind.CAPITAL_BANK.id, countedMinor: 6500000, notes: 'till over' },
      context,
    );
    expect(counted.status).toBe('success');
    expect(counted.data.differenceMinor).toBe('1500000');

    let structure = await getFinancialStructure(context);
    expect(
      structure.data!.funds.find((f) => f.code === 'CAPITAL')?.accounts.find((a) => a.kind === 'CAPITAL_BANK')
        ?.balanceMinor,
    ).toBe('5000000');

    const approved = await approveReconciliationAdjustment(
      { reconciliationId: counted.data.id, reason: 'Confirmed till surplus' },
      context,
      books,
    );
    expect(approved.status).toBe('success');

    const adj = bookCalls.find((c) => c.type === 'RECONCILIATION_ADJUSTMENT' && c.reconDirection === 'EXCESS');
    expect(adj).toBeTruthy();
    expect(adj.toKind).toBe('CAPITAL_BANK');
    expect(adj.fromKind).toBeNull();
    expect(adj.amountMinor).toBe('1500000');
    expect(adj.reason).toBe('Confirmed till surplus');

    structure = await getFinancialStructure(context);
    expect(
      structure.data!.funds.find((f) => f.code === 'CAPITAL')?.accounts.find((a) => a.kind === 'CAPITAL_BANK')
        ?.balanceMinor,
    ).toBe('6500000');
  });

  it('scenario 16: Profit→Operational is an internal loan, not a transfer of profit ownership', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 5_000_000,
        occurredOn: DAY,
        idempotencyKey: 's16-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 5_000_000,
        occurredOn: DAY,
        idempotencyKey: 's16-setup',
      },
      context,
      books,
    );
    earned = 5_000_000n;
    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_CASH.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 5_000_000,
        occurredOn: DAY,
        idempotencyKey: 's16-pt',
      },
      context,
      books,
    );
    const loan = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.PROFIT_BANK.id,
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 2_000_000,
        occurredOn: DAY,
        idempotencyKey: 's16-pr-loan',
      },
      context,
      books,
    );
    expect(loan.status).toBe('success');
    const loans = await getTreasuryLoans(context);
    const open = loans.data.loans.find((l: any) => l.status === 'OPEN');
    expect(open.kind).toBe('INTERNAL_LOAN');
    expect(open.lenderFundCode).toBe('PROFIT_RESERVE');
    expect(open.outstandingMinor).toBe('2000000');
    expect(bookCalls[bookCalls.length - 1].type).toBe('INTERNAL_LOAN');
    expect(bookCalls[bookCalls.length - 1].type).not.toBe('CAPITAL_GROWTH');
  });

  it('scenario 19: external loan received credits a destination and creates a liability', async () => {
    const byKind = await accountsByKind();
    const received = await createTreasuryMovement(
      {
        movementType: 'EXTERNAL_LOAN',
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 3_000_000,
        occurredOn: DAY,
        counterpartyName: 'Bank of Kigali',
        idempotencyKey: 's19-ext',
      },
      context,
      books,
    );
    expect(received.status).toBe('success');
    const loans = await getTreasuryLoans(context);
    const ext = loans.data.loans.find((l: any) => l.kind === 'EXTERNAL_LOAN');
    expect(ext.outstandingMinor).toBe('3000000');
    expect(ext.partyName).toBe('Bank of Kigali');
    expect(bookCalls[bookCalls.length - 1].type).toBe('EXTERNAL_LOAN');
    const balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.OPS_MAIN_BANK.id)).toBe(3_000_000n);
  });

  it('scenario 20: external repayment splits principal vs interest', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'EXTERNAL_LOAN',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 3_000_000,
        occurredOn: DAY,
        counterpartyName: 'Bank of Kigali',
        idempotencyKey: 's20-ext',
      },
      context,
      books,
    );
    const loans = await getTreasuryLoans(context);
    const ext = loans.data.loans.find((l: any) => l.kind === 'EXTERNAL_LOAN' && l.status === 'OPEN');
    const principal = await createTreasuryMovement(
      {
        movementType: 'EXTERNAL_LOAN_REPAY_PRINCIPAL',
        fromPhysicalId: byKind.OPS_CASH.id,
        loanId: ext.id,
        amountMinor: 1_000_000,
        occurredOn: DAY,
        idempotencyKey: 's20-prin',
      },
      context,
      books,
    );
    expect(principal.status).toBe('success');
    const interest = await createTreasuryMovement(
      {
        movementType: 'EXTERNAL_LOAN_INTEREST',
        fromPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 200_000,
        occurredOn: DAY,
        idempotencyKey: 's20-int',
      },
      context,
      books,
    );
    expect(interest.status).toBe('success');
    const after = await getTreasuryLoans(context);
    expect(after.data.loans.find((l: any) => l.id === ext.id).outstandingMinor).toBe('2000000');
    expect(bookCalls.map((c) => c.type)).toEqual(
      expect.arrayContaining(['EXTERNAL_LOAN', 'EXTERNAL_LOAN_REPAY_PRINCIPAL', 'EXTERNAL_LOAN_INTEREST']),
    );
    const balances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(balances, byKind.OPS_CASH.id)).toBe(1_800_000n);
  });
});
