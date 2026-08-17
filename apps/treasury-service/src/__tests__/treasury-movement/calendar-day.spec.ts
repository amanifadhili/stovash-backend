import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { getDailyPosition } from '../../treasury-movement/period-snapshots.js';
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

    const transfer = await createTreasuryMovement(
      {
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
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
    expect(bookCalls[bookCalls.length - 1].type).toBe('CORRECTION');
    expect(bookCalls[bookCalls.length - 1].originalType).toBe('OWNER_CAPITAL_IN');
    expect(bookCalls[bookCalls.length - 1].reason).toBe('Missed owner deposit');

    const originalRow = await prisma.treasuryMovement.findUnique({ where: { id: capitalIn.data!.id } });
    expect(originalRow?.amountMinor).toBe(100000n);

    const position = await getDailyPosition({ occurredOn: DAY }, context);
    expect(position.status).toBe('success');
    expect(position.data?.locked).toBe(true);

    const capitalBank = position.data!.physical.find((s: any) => s.scopeKey === byKind.CAPITAL_BANK.id);
    expect(capitalBank.openingMinor).toBe('0');
    expect(capitalBank.inflowsMinor).toBe('100000');
    expect(capitalBank.outflowsMinor).toBe('30000');
    expect(capitalBank.adjustmentsMinor).toBe('20000');
    expect(capitalBank.closingMinor).toBe('90000');
    expect(
      BigInt(capitalBank.openingMinor) +
        BigInt(capitalBank.inflowsMinor) -
        BigInt(capitalBank.outflowsMinor) +
        BigInt(capitalBank.adjustmentsMinor),
    ).toBe(BigInt(capitalBank.closingMinor));

    const petty = position.data!.physical.find((s: any) => s.scopeKey === byKind.PETTY_CASH.id);
    expect(petty.inflowsMinor).toBe('30000');
    expect(petty.closingMinor).toBe('30000');

    const capitalFund = position.data!.funds.find((s: any) => s.scopeKey === 'CAPITAL');
    expect(capitalFund.inflowsMinor).toBe('100000');
    expect(capitalFund.outflowsMinor).toBe('0');
    expect(capitalFund.adjustmentsMinor).toBe('20000');
    expect(capitalFund.closingMinor).toBe('120000');
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
        movementType: 'INTERNAL_TRANSFER',
        fromPhysicalId: byKind.CAPITAL_BANK.id,
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
    expect(overview.data.position.capitalMinor).toBe('100000');
    expect(overview.data.position.pettyCashMinor).toBe('30000');
    expect(overview.data.pnl.grossProfitMinor).toBe('12000000');
    expect(overview.data.cashMovement.inflows.find((r: any) => r.type === 'OWNER_CAPITAL_IN').amountMinor).toBe(
      '100000',
    );
    expect(overview.data.cashMovement.outflows.find((r: any) => r.type === 'INTERNAL_TRANSFER').amountMinor).toBe(
      '30000',
    );
  });
});
