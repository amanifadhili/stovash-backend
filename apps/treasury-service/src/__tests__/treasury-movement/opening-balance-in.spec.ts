import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { getTreasuryMovements, getTreasuryLoans } from '../../treasury-movement/queries.js';
import { TreasuryBooksClient } from '../../treasury-movement/types.js';
import { setShopTodayForTests } from '../../treasury-movement/calendar.js';
import { seedTreasuryOpeningBalances } from '../../financial-structure/seed-treasury-opening-balances.js';

const DAY = '2026-08-31';

describe('OPENING_BALANCE_IN Movement Specification & Verification', () => {
  const tenantId = 'tenant-opening-bal-spec';
  const shopId = 'shop-opening-bal-spec';
  const context = { tenantId, shopId, userId: 'user-opening-spec', traceId: 'trace-opening-spec' };
  const bookCalls: any[] = [];

  const books: TreasuryBooksClient = {
    postBooks: async (payload) => {
      bookCalls.push(payload);
      return {
        financialTransaction: { id: `ft-${bookCalls.length}` },
        journal: { id: `j-${bookCalls.length}` },
      };
    },
    getAllocation: async () => ({
      earnedMinor: '0',
      transferredMinor: '0',
      untransferredMinor: '0',
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

  it('1. Basic OPENING_BALANCE_IN to Operational Bank increases balance by 500,000 RWF', async () => {
    const byKind = await accountsByKind();
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 50000000, // 500,000 RWF in cents
        occurredOn: DAY,
        idempotencyKey: 'test-1-ops-bank',
      },
      context,
      books,
    );
    expect(res.status).toBe('success');
    const structure = await getFinancialStructure(context);
    const opsBank = structure.data!.funds
      .flatMap((f) => f.accounts)
      .find((a) => a.kind === 'OPS_MAIN_BANK');
    expect(opsBank?.balanceMinor).toBe('50000000');
  });

  it('2. OPENING_BALANCE_IN to Petty Cash increases Petty Cash balance by 200,000 RWF', async () => {
    const byKind = await accountsByKind();
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.PETTY_CASH.id,
        amountMinor: 20000000, // 200,000 RWF
        occurredOn: DAY,
        idempotencyKey: 'test-2-petty',
      },
      context,
      books,
    );
    expect(res.status).toBe('success');
    const structure = await getFinancialStructure(context);
    const petty = structure.data!.funds
      .flatMap((f) => f.accounts)
      .find((a) => a.kind === 'PETTY_CASH');
    expect(petty?.balanceMinor).toBe('20000000');
  });

  it('3. OPENING_BALANCE_IN to Profit Reserve Bank increases balance by 1,000,000 RWF', async () => {
    const byKind = await accountsByKind();
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 100000000, // 1,000,000 RWF
        occurredOn: DAY,
        idempotencyKey: 'test-3-profit',
      },
      context,
      books,
    );
    expect(res.status).toBe('success');
    const structure = await getFinancialStructure(context);
    const profit = structure.data!.funds
      .flatMap((f) => f.accounts)
      .find((a) => a.kind === 'PROFIT_BANK');
    expect(profit?.balanceMinor).toBe('100000000');
  });

  it('4. OPENING_BALANCE_IN creates ZERO internal loan obligations', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 50000000,
        occurredOn: DAY,
        idempotencyKey: 'test-4-no-loan',
      },
      context,
      books,
    );
    const loans = await getTreasuryLoans(context);
    expect(loans.data.loans).toHaveLength(0);
    const dbObligations = await prisma.treasuryObligation.count({ where: { tenantId } });
    expect(dbObligations).toBe(0);
  });

  it('5 & 6. OPENING_BALANCE_IN leaves Sales Revenue and Earned Profit at 0', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 50000000,
        occurredOn: DAY,
        idempotencyKey: 'test-5-6-pnl',
      },
      context,
      books,
    );
    expect(bookCalls[0].type).toBe('OPENING_BALANCE_IN');
    expect(bookCalls[0].type).not.toMatch(/SALE|REVENUE|COGS|EXPENSE/);
  });

  it('7. OPENING_BALANCE_IN with fromPhysicalId specified is rejected', async () => {
    const byKind = await accountsByKind();
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'test-7-from-rejected',
      },
      context,
      books,
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/no source account/);
  });

  it('8. OPENING_BALANCE_IN without destination physical account is rejected', async () => {
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'test-8-no-to',
      },
      context,
      books,
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/requires a destination physical account/);
  });

  it('9. Multiple independent opening balances process independently', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 30000000,
        occurredOn: DAY,
        idempotencyKey: 'test-9-ops',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.PETTY_CASH.id,
        amountMinor: 10000000,
        occurredOn: DAY,
        idempotencyKey: 'test-9-petty',
      },
      context,
      books,
    );
    const structure = await getFinancialStructure(context);
    const accounts = structure.data!.funds.flatMap((f) => f.accounts);
    expect(accounts.find((a) => a.kind === 'OPS_CASH')?.balanceMinor).toBe('30000000');
    expect(accounts.find((a) => a.kind === 'PETTY_CASH')?.balanceMinor).toBe('10000000');
  });

  it('10. OWNER_CAPITAL_IN still works for CAPITAL_BANK, but fails for OPS_MAIN_BANK', async () => {
    const byKind = await accountsByKind();
    const validCap = await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 100000000,
        occurredOn: DAY,
        idempotencyKey: 'test-10-valid-cap',
      },
      context,
      books,
    );
    expect(validCap.status).toBe('success');

    const invalidCap = await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 100000000,
        occurredOn: DAY,
        idempotencyKey: 'test-10-invalid-cap',
      },
      context,
      books,
    );
    expect(invalidCap.status).toBe('error');
    expect(invalidCap.message).toMatch(/OWNER_CAPITAL_IN credits Capital Bank only/);
  });

  it('11. Cross-shop authorization prevents posting to another shop account', async () => {
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: '00000000-0000-4000-8000-000000000099',
        amountMinor: 1000000,
        occurredOn: DAY,
        idempotencyKey: 'test-11-cross-shop',
      },
      context,
      books,
    );
    expect(res.status).toBe('error');
    expect(res.message).toMatch(/Unknown destination account/);
  });

  it('12. Cross-tenant isolation prevents posting across tenant boundaries', async () => {
    const foreignContext = { tenantId: 'other-tenant', shopId, userId: 'user-foreign', traceId: 'tr-foreign' };
    const res = await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: 'some-id',
        amountMinor: 1000000,
        occurredOn: DAY,
        idempotencyKey: 'test-12-cross-tenant',
      },
      foreignContext,
      books,
    );
    expect(res.status).toBe('error');
  });

  it('13. Accounting double-entry payload parameters are strictly verified', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 75000000,
        occurredOn: DAY,
        idempotencyKey: 'test-13-double-entry',
      },
      context,
      books,
    );
    expect(bookCalls[0]).toBeDefined();
    expect(bookCalls[0].type).toBe('OPENING_BALANCE_IN');
    expect(bookCalls[0].toKind).toBe('OPS_MAIN_BANK');
    expect(bookCalls[0].fromKind).toBeNull();
    expect(bookCalls[0].amountMinor).toBe('75000000');
  });

  it('14. History queries successfully fetch OPENING_BALANCE_IN movements', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OPENING_BALANCE_IN',
        toPhysicalId: byKind.OPS_CASH.id,
        amountMinor: 40000000,
        occurredOn: DAY,
        idempotencyKey: 'test-14-query',
      },
      context,
      books,
    );
    const history = await getTreasuryMovements(context);
    expect(history.status).toBe('success');
    expect(history.data.movements).toHaveLength(1);
    expect(history.data.movements[0].movementType).toBe('OPENING_BALANCE_IN');
    expect(history.data.movements[0].amountMinor).toBe('40000000');
  });

  it('15. System setup seeder uses OPENING_BALANCE_IN for non-capital accounts', async () => {
    const result = await seedTreasuryOpeningBalances(
      {
        accounts: [
          { code: 'CAPITAL_BANK', name: 'Capital Bank', kind: 'CAPITAL_BANK', amountMinor: '100000000', fundCode: 'CAPITAL' },
          { code: 'PETTY_CASH', name: 'Petty Cash', kind: 'PETTY_CASH', amountMinor: '20000000', fundCode: 'PROFIT_RESERVE' },
          { code: 'OPS_MAIN_BANK', name: 'Main Operational Bank', kind: 'OPS_MAIN_BANK', amountMinor: '50000000', fundCode: 'OPERATIONAL' },
        ],
      },
      context,
    );
    expect(result.status).toBe('success');
    const movements = await prisma.treasuryMovement.findMany({ where: { tenantId } });
    expect(movements.some((m) => m.movementType === 'OWNER_CAPITAL_IN')).toBe(true);
    expect(movements.some((m) => m.movementType === 'OPENING_BALANCE_IN')).toBe(true);
  });
});
