import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { getDailyPosition, getMonthlyPosition } from '../../treasury-movement/period-snapshots.js';
import { getFinancialOverview } from '../../treasury-movement/financial-overview.js';
import { setShopTodayForTests } from '../../treasury-movement/calendar.js';
import { TreasuryBooksClient } from '../../treasury-movement/types.js';

const DAY = '2026-08-17';

describe('Phase 7 treasury calendar day', () => {
  const tenantId = 'tenant-tm-phase7';
  const shopId = 'shop-tm-phase7';
  const context = { tenantId, shopId, userId: 'user-tm-phase7', traceId: 'trace-tm-phase7' };
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

  it('rejects an ordinary movement on a locked day', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p7-cap',
      },
      context,
      books,
    );
    setShopTodayForTests('2026-08-18');
    const blocked = await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 1000,
        occurredOn: DAY,
        idempotencyKey: 'p7-cap-late',
      },
      context,
      books,
    );
    expect(blocked.status).toBe('error');
    expect(blocked.errorCode).toBe(ErrorCode.BUSINESS_RULE_VIOLATION);
    expect(blocked.message).toMatch(/locked/i);
  });

  it('snapshot math matches movements for a fixture day, including a +20k correction', async () => {
    const byKind = await accountsByKind();
    const capitalIn = await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p7-snap-cap',
      },
      context,
      books,
    );
    expect(capitalIn.status).toBe('success');

    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p7-snap-loan',
      },
      context,
      books,
    );

    const ptBooks: TreasuryBooksClient = {
      ...books,
      getAllocation: async () => ({
        earnedMinor: '100000',
        transferredMinor: '0',
        untransferredMinor: '100000',
      }),
    };

    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p7-snap-pt',
      },
      context,
      ptBooks,
    );

    const transfer = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.PROFIT_BANK.id,
        toPhysicalId: byKind.PETTY_CASH.id,
        amountMinor: 30000,
        occurredOn: DAY,
        idempotencyKey: 'p7-snap-xfer',
      },
      context,
      books,
    );
    expect(transfer.status).toBe('success');

    setShopTodayForTests('2026-08-18');
    const correction = await createTreasuryMovement(
      {
        movementType: 'CORRECTION',
        originalMovementId: capitalIn.data!.id,
        amountMinor: 20000,
        occurredOn: DAY,
        reason: 'Missed owner deposit',
        idempotencyKey: 'p7-snap-corr',
      },
      context,
      books,
    );
    expect(correction.status).toBe('success');

    const position = await getDailyPosition({ occurredOn: DAY }, context);
    expect(position.status).toBe('success');
    expect(position.data?.locked).toBe(true);

    const petty = position.data!.physical.find((s: any) => s.scopeKey === byKind.PETTY_CASH.id);
    expect(petty.inflowsMinor).toBe('30000');
    expect(petty.closingMinor).toBe('30000');

    const profitFund = position.data!.funds.find((s: any) => s.scopeKey === 'PROFIT_RESERVE');
    expect(profitFund.inflowsMinor).toBe('100000');
    expect(profitFund.closingMinor).toBe('100000');
  });

  it('financial overview KPIs match the fixture day snapshots and cash types', async () => {
    const byKind = await accountsByKind();
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p8-ov-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p8-ov-loan',
      },
      context,
      books,
    );

    const ptBooks: TreasuryBooksClient = {
      ...books,
      getAllocation: async () => ({
        earnedMinor: '100000',
        transferredMinor: '0',
        untransferredMinor: '100000',
      }),
    };

    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 100000,
        occurredOn: DAY,
        idempotencyKey: 'p8-ov-pt',
      },
      context,
      ptBooks,
    );

    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.PROFIT_BANK.id,
        toPhysicalId: byKind.PETTY_CASH.id,
        amountMinor: 30000,
        occurredOn: DAY,
        idempotencyKey: 'p8-ov-xfer',
      },
      context,
      books,
    );
    const overviewBooks: TreasuryBooksClient = {
      ...books,
      getEngineReport: async () => ({
        revenueMinor: '50000000',
        cogsMinor: '38000000',
        grossProfitMinor: '12000000',
        profit: { earnedMinor: '12000000', transferredMinor: '0', untransferredMinor: '12000000' },
        receivables: { customerOutstandingMinor: '50000000', workerOutstandingMinor: '0' },
        payables: { supplierOutstandingMinor: '0' },
      }),
    };
    const overview = await getFinancialOverview({ occurredOn: DAY }, context, overviewBooks);
    expect(overview.status).toBe('success');
    expect(overview.data.position.pettyCashMinor).toBe('30000');
    expect(overview.data.pnl.grossProfitMinor).toBe('12000000');
    expect(overview.data.cashMovement.inflows.find((r: any) => r.type === 'OWNER_CAPITAL_IN').amountMinor).toBe(
      '100000',
    );
    expect(overview.data.cashMovement.outflows.find((r: any) => r.type === 'INTERNAL_TRANSFER').amountMinor).toBe(
      '30000',
    );
  });

  it('monthly cashbook: day-2 opening equals day-1 closing and month totals are API fields', async () => {
    const byKind = await accountsByKind();
    setShopTodayForTests('2026-08-16');
    await createTreasuryMovement(
      {
        movementType: 'OWNER_CAPITAL_IN',
        toPhysicalId: byKind.CAPITAL_BANK.id,
        amountMinor: 100000,
        occurredOn: '2026-08-16',
        idempotencyKey: 'p7-month-cap',
      },
      context,
      books,
    );
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_LOAN',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
        toPhysicalId: byKind.OPS_MAIN_BANK.id,
        amountMinor: 100000,
        occurredOn: '2026-08-16',
        idempotencyKey: 'p7-month-loan',
      },
      context,
      books,
    );

    const ptBooks: TreasuryBooksClient = {
      ...books,
      getAllocation: async () => ({
        earnedMinor: '100000',
        transferredMinor: '0',
        untransferredMinor: '100000',
      }),
    };

    await createTreasuryMovement(
      {
        movementType: 'PROFIT_TRANSFER',
        fromPhysicalId: byKind.OPS_MAIN_BANK.id,
        toPhysicalId: byKind.PROFIT_BANK.id,
        amountMinor: 100000,
        occurredOn: '2026-08-16',
        idempotencyKey: 'p7-month-pt',
      },
      context,
      ptBooks,
    );

    setShopTodayForTests('2026-08-17');
    await createTreasuryMovement(
      {
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.PROFIT_BANK.id,
        toPhysicalId: byKind.PETTY_CASH.id,
        amountMinor: 30000,
        occurredOn: '2026-08-17',
        idempotencyKey: 'p7-month-xfer',
      },
      context,
      books,
    );

    const month = await getMonthlyPosition({ yearMonth: '2026-08' }, context);
    expect(month.status).toBe('success');
    expect(month.data?.yearMonth).toBe('2026-08');
    expect(month.data?.locked).toBe(false);
    expect(month.data?.days).toHaveLength(31);

    const profitId = byKind.PROFIT_BANK.id;
    const pettyId = byKind.PETTY_CASH.id;
    const day16 = month.data!.days.find((d: any) => d.date === '2026-08-16');
    const day17 = month.data!.days.find((d: any) => d.date === '2026-08-17');
    const day18 = month.data!.days.find((d: any) => d.date === '2026-08-18');

    expect(day16.physical[profitId].openingMinor).toBe('0');
    expect(day16.physical[profitId].inflowsMinor).toBe('100000');
    expect(day16.physical[profitId].closingMinor).toBe('100000');
    expect(day17.physical[profitId].openingMinor).toBe(day16.physical[profitId].closingMinor);
    expect(day17.physical[profitId].outflowsMinor).toBe('30000');
    expect(day17.physical[profitId].closingMinor).toBe('70000');
    expect(day17.physical[pettyId].inflowsMinor).toBe('30000');
    expect(day17.physical[pettyId].closingMinor).toBe('30000');
    expect(day18.physical[profitId]).toBeNull();

    const totals = month.data!.monthTotals[profitId];
    expect(totals.openingMinor).toBe('0');
    expect(totals.inflowsMinor).toBe('100000');
    expect(totals.outflowsMinor).toBe('30000');
    expect(totals.closingMinor).toBe('70000');
    expect(
      BigInt(totals.openingMinor) + BigInt(totals.inflowsMinor) - BigInt(totals.outflowsMinor) + BigInt(totals.adjustmentsMinor),
    ).toBe(BigInt(totals.closingMinor));
  });

  it('rejects a future calendar month', async () => {
    const future = await getMonthlyPosition({ yearMonth: '2026-09' }, context);
    expect(future.status).toBe('error');
    expect(future.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
    expect(future.message).toMatch(/future/i);

    const bad = await getMonthlyPosition({ yearMonth: '2026-13' }, context);
    expect(bad.status).toBe('error');
    expect(bad.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
  });
});
