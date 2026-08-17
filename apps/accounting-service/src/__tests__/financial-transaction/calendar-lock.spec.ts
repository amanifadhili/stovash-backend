import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { postFinancialTransaction } from '../../financial-transaction/post-financial-transaction.js';
import { setShopTodayForTests } from '../../financial-transaction/calendar.js';
import { postFinancialCorrection } from '../../engine-ledger/post-financial-correction.js';
import { PostFinancialTransactionPayload } from '../../financial-transaction/types.js';

describe('Phase 7 calendar-day lock', () => {
  const tenantId = 'tenant-ft-phase7';
  const shopId = 'shop-ft-phase7';
  const context = {
    tenantId,
    shopId,
    userId: 'user-ft-phase7',
    traceId: 'trace-ft-phase7',
  };

  function payload(overrides: Partial<PostFinancialTransactionPayload> = {}): PostFinancialTransactionPayload {
    return {
      type: 'OWNER_CAPITAL_IN',
      occurredOn: '2026-08-17',
      amountMinor: 100000,
      currency: 'RWF',
      sourceDomain: 'test',
      sourceCommand: 'PostFinancialTransaction',
      sourceId: 'src-p7',
      idempotencyKey: `key-${Date.now()}-${Math.random()}`,
      description: 'Owner capital in',
      ...overrides,
    };
  }

  async function wipe() {
    await prisma.postedJournalLine.deleteMany({ where: { journal: { tenantId } } }).catch(() => undefined);
    await prisma.postedJournal.deleteMany({ where: { tenantId } });
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    await prisma.financialTransaction.deleteMany({ where: { tenantId } });
  }

  beforeEach(async () => {
    setShopTodayForTests('2026-08-17');
    await wipe();
  });

  afterAll(async () => {
    setShopTodayForTests('2026-08-17');
    await wipe();
    await prisma.$disconnect();
  });

  it('rejects an ordinary post to yesterday once the calendar day has rolled', async () => {
    const posted = await postFinancialTransaction(payload({ idempotencyKey: 'p7-orig-lock' }), context);
    expect(posted.status).toBe('success');

    setShopTodayForTests('2026-08-18');
    const blocked = await postFinancialTransaction(
      payload({ type: 'SALE_REVENUE', idempotencyKey: 'p7-yesterday', amountMinor: 50000 }),
      context,
    );
    expect(blocked.status).toBe('error');
    expect(blocked.errorCode).toBe(ErrorCode.BUSINESS_RULE_VIOLATION);
    expect(blocked.message).toMatch(/locked/i);

    const sameDay = await postFinancialTransaction(
      payload({ occurredOn: '2026-08-18', idempotencyKey: 'p7-today', amountMinor: 100 }),
      context,
    );
    expect(sameDay.status).toBe('success');
  });

  it('replays yesterday by idempotency without creating a new row', async () => {
    const first = await postFinancialTransaction(payload({ idempotencyKey: 'p7-replay' }), context);
    expect(first.status).toBe('success');
    setShopTodayForTests('2026-08-18');
    const replay = await postFinancialTransaction(payload({ idempotencyKey: 'p7-replay', amountMinor: 1 }), context);
    expect(replay.status).toBe('success');
    expect(replay.data?.existingIfReplay).toBe(true);
    expect(replay.data?.id).toBe(first.data?.id);
    expect(replay.data?.amountMinor).toBe('100000');
  });

  it('posts a +20k correction without mutating the original 100k row', async () => {
    const original = await postFinancialTransaction(payload({ idempotencyKey: 'p7-100k' }), context);
    expect(original.status).toBe('success');
    setShopTodayForTests('2026-08-18');

    const updateSpy = jest.spyOn(prisma.financialTransaction, 'update');
    const correction = await postFinancialCorrection(
      {
        originalTransactionId: original.data!.id,
        kind: 'CORRECTION',
        amountMinor: 20000,
        reason: 'Missed owner deposit',
        occurredOn: '2026-08-17',
        idempotencyKey: 'p7-plus-20k',
      },
      context,
    );
    expect(correction.status).toBe('success');
    expect(updateSpy).not.toHaveBeenCalled();
    updateSpy.mockRestore();

    const originalRow = await prisma.financialTransaction.findUnique({ where: { id: original.data!.id } });
    expect(originalRow?.amountMinor).toBe(100000n);

    const correctionRow = await prisma.financialTransaction.findUnique({
      where: { id: correction.data!.financialTransaction.id },
    });
    expect(correctionRow?.type).toBe('CORRECTION');
    expect(correctionRow?.amountMinor).toBe(20000n);
    expect(correctionRow?.originalTransactionId).toBe(original.data!.id);
    expect(correctionRow?.reason).toBe('Missed owner deposit');
    expect(correctionRow?.actorUserId).toBe(context.userId);

    const related = await prisma.financialTransaction.findMany({
      where: {
        tenantId,
        OR: [{ id: original.data!.id }, { originalTransactionId: original.data!.id }],
      },
    });
    const effective = related.reduce((sum, row) => sum + row.amountMinor, 0n);
    expect(effective).toBe(120000n);
  });

  it('posts a reversal that leaves the original −500k row visible', async () => {
    const original = await postFinancialTransaction(
      payload({ idempotencyKey: 'p7-500k', amountMinor: 500000 }),
      context,
    );
    expect(original.status).toBe('success');
    setShopTodayForTests('2026-08-18');

    const reversal = await postFinancialCorrection(
      {
        originalTransactionId: original.data!.id,
        kind: 'REVERSAL',
        reason: 'Posted to the wrong day',
        occurredOn: '2026-08-17',
        idempotencyKey: 'p7-rev-500k',
      },
      context,
    );
    expect(reversal.status).toBe('success');
    expect(reversal.data?.original.id).toBe(original.data!.id);
    expect(reversal.data?.financialTransaction.type).toBe('REVERSAL');
    expect(reversal.data?.financialTransaction.amountMinor).toBe('500000');

    const stillThere = await prisma.financialTransaction.findUnique({ where: { id: original.data!.id } });
    expect(stillThere?.amountMinor).toBe(500000n);
    expect(stillThere?.type).toBe('OWNER_CAPITAL_IN');

    const listed = await prisma.financialTransaction.findMany({
      where: { tenantId, shopId },
      orderBy: { createdAt: 'asc' },
    });
    expect(listed.map((row) => row.type)).toEqual(['OWNER_CAPITAL_IN', 'REVERSAL']);
  });

  it('rejects a correction without a reason', async () => {
    const original = await postFinancialTransaction(payload({ idempotencyKey: 'p7-no-reason' }), context);
    setShopTodayForTests('2026-08-18');
    const missing = await postFinancialCorrection(
      {
        originalTransactionId: original.data!.id,
        kind: 'CORRECTION',
        amountMinor: 20000,
        reason: '   ',
        occurredOn: '2026-08-17',
      } as any,
      context,
    );
    expect(missing.status).toBe('error');
    expect(missing.message).toMatch(/reason/i);
  });
});
