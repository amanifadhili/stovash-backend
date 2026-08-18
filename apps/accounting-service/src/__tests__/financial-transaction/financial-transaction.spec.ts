import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { postFinancialTransaction } from '../../financial-transaction/post-financial-transaction.js';
import { getFinancialTransaction } from '../../financial-transaction/get-financial-transaction.js';
import { parseAmountMinor } from '../../financial-transaction/serialize.js';
import { PostFinancialTransactionPayload } from '../../financial-transaction/types.js';
import { setShopTodayForTests } from '../../financial-transaction/calendar.js';

describe('FinancialTransaction engine', () => {
  const tenantId = 'tenant-ft-phase2';
  const shopId = 'shop-ft-phase2';
  const context = {
    tenantId,
    shopId,
    userId: 'user-ft-phase2',
    traceId: 'trace-ft-phase2',
  };

  function payload(overrides: Partial<PostFinancialTransactionPayload> = {}): PostFinancialTransactionPayload {
    return {
      type: 'OWNER_CAPITAL_IN',
      occurredOn: '2026-08-17',
      amountMinor: 50000,
      currency: 'RWF',
      sourceDomain: 'test',
      sourceCommand: 'PostFinancialTransaction',
      sourceId: 'src-1',
      idempotencyKey: `key-${Date.now()}-${Math.random()}`,
      description: 'Owner capital in',
      ...overrides,
    };
  }

  beforeEach(async () => {
    setShopTodayForTests('2026-08-17');
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    await prisma.financialTransaction.deleteMany({ where: { tenantId } });
  });

  afterAll(async () => {
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    await prisma.financialTransaction.deleteMany({ where: { tenantId } });
    await prisma.$disconnect();
  });

  it('posts a typed transaction and reads it back', async () => {
    const posted = await postFinancialTransaction(payload({ idempotencyKey: 'read-back-1', amountMinor: '12500' }), context);
    expect(posted.status).toBe('success');
    expect(posted.data?.status).toBe('POSTED');
    expect(posted.data?.existingIfReplay).toBe(false);
    expect(posted.data?.type).toBe('OWNER_CAPITAL_IN');
    expect(posted.data?.amountMinor).toBe('12500');
    expect(posted.data?.currency).toBe('RWF');

    const byId = await getFinancialTransaction({ id: posted.data!.id }, context);
    expect(byId.status).toBe('success');
    expect(byId.data?.id).toBe(posted.data?.id);
    expect(byId.data?.occurredOn).toBe('2026-08-17');

    const byKey = await getFinancialTransaction({ idempotencyKey: 'read-back-1' }, context);
    expect(byKey.data?.id).toBe(posted.data?.id);
  });

  it('duplicate idempotencyKey is a no-op (same id)', async () => {
    const first = await postFinancialTransaction(payload({ idempotencyKey: 'same-key', amountMinor: 100 }), context);
    const second = await postFinancialTransaction(payload({ idempotencyKey: 'same-key', amountMinor: 999 }), context);

    expect(first.status).toBe('success');
    expect(second.status).toBe('success');
    expect(second.data?.existingIfReplay).toBe(true);
    expect(second.data?.id).toBe(first.data?.id);
    expect(second.data?.amountMinor).toBe('100');

    const rows = await prisma.financialTransaction.findMany({ where: { tenantId, idempotencyKey: 'same-key' } });
    expect(rows).toHaveLength(1);
  });

  it('rejects unknown type', async () => {
    const result = await postFinancialTransaction(payload({ type: 'TRANSFER' as any }), context);
    expect(result.status).toBe('error');
    expect(result.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
    expect(result.message).toMatch(/Unknown financial transaction type/);
  });

  it('rejects amountMinor ≤ 0', async () => {
    const zero = await postFinancialTransaction(payload({ amountMinor: 0 }), context);
    const negative = await postFinancialTransaction(payload({ amountMinor: -1 }), context);
    const decimal = await postFinancialTransaction(payload({ amountMinor: 1.5 }), context);

    expect(zero.status).toBe('error');
    expect(negative.status).toBe('error');
    expect(decimal.status).toBe('error');
    expect(zero.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
  });

  it('rejects missing tenantId/shopId', async () => {
    const noTenant = await postFinancialTransaction(payload(), { shopId, traceId: 't' } as any);
    const noShop = await postFinancialTransaction(payload(), { tenantId, traceId: 't' } as any);

    expect(noTenant.status).toBe('error');
    expect(noShop.status).toBe('error');
    expect(noTenant.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
    expect(noShop.errorCode).toBe(ErrorCode.VALIDATION_ERROR);
  });

  it('rejects missing sourceDomain / sourceCommand / sourceId', async () => {
    const missing = await postFinancialTransaction(
      payload({ sourceDomain: '', sourceCommand: '', sourceId: '' }),
      context,
    );
    expect(missing.status).toBe('error');
    expect(missing.message).toMatch(/sourceDomain/);
  });

  it('persists amountMinor as BigInt cents and keeps old ledger tables', async () => {
    const posted = await postFinancialTransaction(payload({ idempotencyKey: 'bigint-cents', amountMinor: 199 }), context);
    const row = await prisma.financialTransaction.findUnique({ where: { id: posted.data!.id } });
    expect(typeof row?.amountMinor).toBe('bigint');
    expect(row?.amountMinor).toBe(199n);
    expect(row?.status).toBe('POSTED');
    expect(prisma.ledgerAccount).toBeDefined();
    expect(prisma.workPeriod).toBeDefined();
  });

  it('does not call Prisma ledgerAccount.update / paymentMethod.update', async () => {
    const ledgerUpdate = jest.spyOn(prisma.ledgerAccount, 'update');
    const ledgerCreate = jest.spyOn(prisma.ledgerAccount, 'create');
    const journalCreate = jest.spyOn(prisma.journalEntry, 'create');

    await postFinancialTransaction(payload({ idempotencyKey: 'no-legacy-books' }), context);

    expect(ledgerUpdate).not.toHaveBeenCalled();
    expect(ledgerCreate).not.toHaveBeenCalled();
    expect(journalCreate).not.toHaveBeenCalled();
    expect((prisma as any).paymentMethod).toBeUndefined();

    ledgerUpdate.mockRestore();
    ledgerCreate.mockRestore();
    journalCreate.mockRestore();
  });

  it.todo('DR=CR journal legs balance (Phase 4)');
  it.todo('transfer legs balance across physical accounts (Phase 5)');

  it('parseAmountMinor accepts only positive integers', () => {
    expect(parseAmountMinor(1)).toBe(1n);
    expect(parseAmountMinor('250')).toBe(250n);
    expect(parseAmountMinor(0)).toBeNull();
    expect(parseAmountMinor('0')).toBeNull();
    expect(parseAmountMinor(1.25)).toBeNull();
    expect(parseAmountMinor('12.0')).toBeNull();
  });
});
