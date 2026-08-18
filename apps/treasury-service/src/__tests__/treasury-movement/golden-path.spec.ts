import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { getTreasuryLoans } from '../../treasury-movement/queries.js';
import { recordReconciliation, approveReconciliationAdjustment } from '../../treasury-movement/reconciliation.js';
import { balanceOf, derivedBalances } from '../../treasury-movement/balances.js';
import { TreasuryBooksClient } from '../../treasury-movement/types.js';
import { setShopTodayForTests } from '../../treasury-movement/calendar.js';

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

const PURCHASE_PAY = francs(400_000);
const MIX_CASH = francs(200_000);
const MIX_MOMO = francs(150_000);
const MIX_BANK = francs(50_000);
const LATER_BANK = francs(100_000);
const ADVANCE = francs(20_000);
const PETTY_EXPENSE = francs(10_000);
const GENERAL_EXPENSE = francs(100_000);
const PROFIT_XFER = francs(120_000);
const LOAN = francs(100_000);
const GROWTH = francs(50_000);
const SHORTAGE = francs(10_000);

describe('Phase 10 treasury golden path', () => {
  const tenantId = 'tenant-gold-tm-p10';
  const shopId = 'shop-gold-tm-p10';
  const context = { tenantId, shopId, userId: 'user-gold-tm-p10', traceId: 'trace-gold-tm-p10' };
  const bookCalls: any[] = [];
  let earned = 0n;
  let transferred = 0n;

  const books: TreasuryBooksClient = {
    postBooks: async (payload) => {
      bookCalls.push(payload);
      if (payload.type === 'PROFIT_TRANSFER') transferred += BigInt(payload.amountMinor);
      return {
        financialTransaction: { id: `ft-${bookCalls.length}` },
        journal: { id: `j-${bookCalls.length}` },
      };
    },
    getAllocation: async () => ({
      earnedMinor: earned.toString(),
      transferredMinor: transferred.toString(),
      untransferredMinor: (earned - transferred).toString(),
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
    transferred = 0n;
  }

  async function accountsByKind() {
    const structure = await getFinancialStructure(context);
    const accounts = structure.data!.funds.flatMap((f) => f.accounts);
    return Object.fromEntries(accounts.map((a) => [a.kind, a]));
  }

  async function move(label: string, payload: Parameters<typeof createTreasuryMovement>[0]) {
    const result = await createTreasuryMovement(payload, context, books);
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

  it('closing = opening + inflows − outflows ± approved adjustments', async () => {
    const byKind = await accountsByKind();
    await move('owner capital', {
      movementType: 'OWNER_CAPITAL_IN',
      toKind: 'CAPITAL_BANK',
      amountMinor: OPEN_TOTAL,
      occurredOn: DAY,
      idempotencyKey: 't-cap',
    });
    await move('petty', {
      movementType: 'INTERNAL_TRANSFER',
      fromKind: 'CAPITAL_BANK',
      toKind: 'PETTY_CASH',
      amountMinor: OPEN_PETTY,
      occurredOn: DAY,
      idempotencyKey: 't-petty',
    });
    const opsPool = OPEN_OPS_BANK + OPEN_CASH + OPEN_MOMO + OPEN_PROFIT;
    await move('ops loan', {
      movementType: 'INTERNAL_LOAN',
      fromKind: 'CAPITAL_BANK',
      toKind: 'OPS_MAIN_BANK',
      amountMinor: opsPool,
      occurredOn: DAY,
      idempotencyKey: 't-ops-loan',
    });
    await move('split cash', {
      movementType: 'INTERNAL_TRANSFER',
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'OPS_CASH',
      amountMinor: OPEN_CASH,
      occurredOn: DAY,
      idempotencyKey: 't-cash',
    });
    await move('split momo', {
      movementType: 'INTERNAL_TRANSFER',
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'OPS_MOMO',
      amountMinor: OPEN_MOMO,
      occurredOn: DAY,
      idempotencyKey: 't-momo',
    });
    earned = BigInt(OPEN_PROFIT);
    await move('opening profit transfer', {
      movementType: 'PROFIT_TRANSFER',
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'PROFIT_BANK',
      amountMinor: OPEN_PROFIT,
      occurredOn: DAY,
      idempotencyKey: 't-pr',
    });

    const openingBalances = await derivedBalances(tenantId, shopId);
    expect(balanceOf(openingBalances, byKind.CAPITAL_BANK.id)).toBe(BigInt(OPEN_CAPITAL));
    expect(balanceOf(openingBalances, byKind.PETTY_CASH.id)).toBe(BigInt(OPEN_PETTY));
    expect(balanceOf(openingBalances, byKind.PROFIT_BANK.id)).toBe(BigInt(OPEN_PROFIT));
    expect(balanceOf(openingBalances, byKind.OPS_MAIN_BANK.id)).toBe(BigInt(OPEN_OPS_BANK));
    expect(balanceOf(openingBalances, byKind.OPS_CASH.id)).toBe(BigInt(OPEN_CASH));
    expect(balanceOf(openingBalances, byKind.OPS_MOMO.id)).toBe(BigInt(OPEN_MOMO));

    const seedIds = new Set(
      (await prisma.treasuryMovement.findMany({ where: { tenantId }, select: { id: true } })).map((r) => r.id),
    );

    await move('purchase payment', {
      movementType: 'PURCHASE_PAYMENT',
      fromKind: 'OPS_MAIN_BANK',
      amountMinor: PURCHASE_PAY,
      occurredOn: DAY,
      obligationSourceId: 'gold-pur-1',
      idempotencyKey: 't-ap',
    });
    await move('mixed cash', {
      movementType: 'SALE_PAYMENT',
      toKind: 'OPS_CASH',
      amountMinor: MIX_CASH,
      occurredOn: DAY,
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 't-mix-cash',
    });

    const cashIn = await prisma.treasuryMovement.findFirst({
      where: { tenantId, movementType: 'SALE_PAYMENT', toPhysicalId: byKind.OPS_CASH.id },
    });
    expect(cashIn?.amountMinor).toBe(BigInt(MIX_CASH));
    expect(cashIn?.createdBy).toBe(context.userId);
    expect(cashIn?.financialTransactionId).toBeTruthy();
    const audit = await prisma.auditLog.findFirst({
      where: { tenantId, action: 'CreateTreasuryMovement', resourceId: cashIn!.id },
    });
    expect(audit?.userId).toBe(context.userId);
    expect(audit?.traceId).toBe(context.traceId);
    const details = JSON.parse(audit!.details || '{}');
    expect(details.movementType).toBe('SALE_PAYMENT');
    expect(details.amountMinor).toBe(String(MIX_CASH));
    expect(details.financialTransactionId).toBe(cashIn!.financialTransactionId);

    await move('mixed momo', {
      movementType: 'SALE_PAYMENT',
      toKind: 'OPS_MOMO',
      amountMinor: MIX_MOMO,
      occurredOn: DAY,
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 't-mix-momo',
    });
    await move('mixed bank', {
      movementType: 'SALE_PAYMENT',
      toKind: 'OPS_MAIN_BANK',
      amountMinor: MIX_BANK,
      occurredOn: DAY,
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 't-mix-bank',
    });
    await move('later pay', {
      movementType: 'SALE_PAYMENT',
      toKind: 'OPS_MAIN_BANK',
      amountMinor: LATER_BANK,
      occurredOn: DAY,
      obligationSourceId: 'gold-sale-1',
      idempotencyKey: 't-later',
    });
    await move('petty advance', {
      movementType: 'WORKER_ADVANCE',
      fromKind: 'PETTY_CASH',
      amountMinor: ADVANCE,
      occurredOn: DAY,
      partyName: 'Jean',
      idempotencyKey: 't-adv',
    });
    await move('petty expense', {
      movementType: 'PETTY_CASH_EXPENSE',
      fromKind: 'PETTY_CASH',
      amountMinor: PETTY_EXPENSE,
      occurredOn: DAY,
      expenseAccountCode: '6281',
      idempotencyKey: 't-pe',
    });
    await move('expense funding', {
      movementType: 'GENERAL_EXPENSE_FUNDING',
      fromKind: 'PROFIT_BANK',
      toKind: 'OPS_MAIN_BANK',
      amountMinor: GENERAL_EXPENSE,
      occurredOn: DAY,
      idempotencyKey: 't-exp-f',
    });
    await move('expense payout', {
      movementType: 'GENERAL_EXPENSE_PAYOUT',
      fromKind: 'OPS_MAIN_BANK',
      amountMinor: GENERAL_EXPENSE,
      occurredOn: DAY,
      expenseAccountCode: '6200',
      idempotencyKey: 't-exp-p',
    });
    earned += BigInt(PROFIT_XFER);
    await move('profit transfer', {
      movementType: 'PROFIT_TRANSFER',
      fromKind: 'OPS_MAIN_BANK',
      toKind: 'PROFIT_BANK',
      amountMinor: PROFIT_XFER,
      occurredOn: DAY,
      idempotencyKey: 't-pt',
    });
    await move('internal loan', {
      movementType: 'INTERNAL_LOAN',
      fromKind: 'CAPITAL_BANK',
      toKind: 'OPS_CASH',
      amountMinor: LOAN,
      occurredOn: DAY,
      idempotencyKey: 't-loan',
    });
    const loans = await getTreasuryLoans(context);
    const seqLoan = loans.data.loans.find(
      (l: any) => l.status === 'OPEN' && l.outstandingMinor === String(LOAN),
    );
    expect(seqLoan).toBeTruthy();
    await move('loan repay', {
      movementType: 'INTERNAL_LOAN_REPAY',
      fromKind: 'OPS_CASH',
      toKind: 'CAPITAL_BANK',
      loanId: seqLoan.id,
      amountMinor: LOAN,
      occurredOn: DAY,
      idempotencyKey: 't-repay',
    });
    const afterRepay = await getTreasuryLoans(context);
    expect(afterRepay.data.loans.find((l: any) => l.id === seqLoan.id).outstandingMinor).toBe('0');

    await move('capital growth', {
      movementType: 'CAPITAL_GROWTH',
      fromKind: 'PROFIT_BANK',
      toKind: 'CAPITAL_BANK',
      amountMinor: GROWTH,
      occurredOn: DAY,
      idempotencyKey: 't-growth',
    });
    expect(bookCalls[bookCalls.length - 1].type).toBe('CAPITAL_GROWTH');
    expect(afterRepay.data.loans.some((l: any) => l.kind === 'CAPITAL_GROWTH')).toBe(false);

    const counted = await recordReconciliation(
      { physicalAccountId: byKind.OPS_CASH.id, countedMinor: OPEN_CASH + MIX_CASH - SHORTAGE, notes: 'till short' },
      context,
    );
    expect(counted.status).toBe('success');
    const beforeAdj = await derivedBalances(tenantId, shopId);
    expect(balanceOf(beforeAdj, byKind.OPS_CASH.id)).toBe(BigInt(OPEN_CASH + MIX_CASH));
    const approved = await approveReconciliationAdjustment(
      { reconciliationId: counted.data.id, reason: 'Confirmed till shortage' },
      context,
      books,
    );
    expect(approved.status).toBe('success');

    const later = await prisma.treasuryMovement.findMany({ where: { tenantId } });
    const window = later.filter((m) => !seedIds.has(m.id));
    const closing = await derivedBalances(tenantId, shopId);
    for (const account of Object.values(byKind) as Array<{ id: string; kind: string }>) {
      const inflows = window
        .filter((m) => m.toPhysicalId === account.id)
        .reduce((s, m) => s + m.amountMinor, 0n);
      const outflows = window
        .filter((m) => m.fromPhysicalId === account.id)
        .reduce((s, m) => s + m.amountMinor, 0n);
      expect(balanceOf(closing, account.id)).toBe(
        balanceOf(openingBalances, account.id) + inflows - outflows,
      );
    }

    expect(balanceOf(closing, byKind.CAPITAL_BANK.id)).toBe(BigInt(OPEN_CAPITAL + GROWTH));
    expect(balanceOf(closing, byKind.PETTY_CASH.id)).toBe(BigInt(OPEN_PETTY - ADVANCE - PETTY_EXPENSE));
    expect(balanceOf(closing, byKind.OPS_CASH.id)).toBe(BigInt(OPEN_CASH + MIX_CASH - SHORTAGE));
    expect(byKind.PETTY_CASH.fundCode).toBe('CAPITAL');
  });
});
