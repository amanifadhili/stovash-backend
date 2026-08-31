import { ErrorCode } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { createPhysicalAccount } from '../../financial-structure/create-physical-account.js';
import { MANDATORY_ACCOUNT_KINDS } from '../../financial-structure/types.js';

describe('Financial structure (Phase 3)', () => {
  const tenantId = 'tenant-fs-phase3';
  const shopId = 'shop-fs-phase3';
  const context = { tenantId, shopId, userId: 'user-fs-phase3', traceId: 'trace-fs-phase3' };

  beforeEach(async () => {
    await prisma.physicalAccount.deleteMany({ where: { tenantId } });
    await prisma.logicalFund.deleteMany({ where: { tenantId } });
    await prisma.auditLog.deleteMany({ where: { tenantId } });
  });

  afterAll(async () => {
    await prisma.physicalAccount.deleteMany({ where: { tenantId } });
    await prisma.logicalFund.deleteMany({ where: { tenantId } });
    await prisma.auditLog.deleteMany({ where: { tenantId } });
    await prisma.$disconnect();
  });

  it('creates the mandatory tree on first get', async () => {
    const first = await getFinancialStructure(context);
    expect(first.status).toBe('success');
    const funds = first.data!.funds;
    expect(funds.map((f) => f.code)).toEqual(['CAPITAL', 'OPERATIONAL', 'PROFIT_RESERVE']);

    const kinds = funds.flatMap((f) => f.accounts.map((a) => a.kind));
    for (const kind of MANDATORY_ACCOUNT_KINDS) {
      expect(kinds).toContain(kind);
    }
    expect(kinds).toHaveLength(6);

    const second = await getFinancialStructure(context);
    expect(second.data!.funds.flatMap((f) => f.accounts)).toHaveLength(6);
  });

  it('places Petty Cash under Profit Reserve', async () => {
    const result = await getFinancialStructure(context);
    const petty = result.data!.funds
      .flatMap((f) => f.accounts)
      .find((a) => a.kind === 'PETTY_CASH');
    expect(petty?.fundCode).toBe('PROFIT_RESERVE');
  });

  it('cannot attach Petty Cash to Operational', async () => {
    await getFinancialStructure(context);
    const result = await createPhysicalAccount(
      { name: 'Bad petty', kind: 'PETTY_CASH', fundCode: 'OPERATIONAL' },
      context,
    );
    expect(result.status).toBe('error');
    expect(result.errorCode).toBe(ErrorCode.BUSINESS_RULE_VIOLATION);
    expect(result.message).toMatch(/Petty Cash belongs to Profit Reserve/);
  });

  it('fund total equals the sum of children (all zero)', async () => {
    const result = await getFinancialStructure(context);
    expect(result.data!.authority).toBe('treasury_movements');
    for (const fund of result.data!.funds) {
      const sum = fund.accounts.reduce((acc, a) => acc + BigInt(a.balanceMinor), 0n);
      expect(fund.balanceMinor).toBe(sum.toString());
      expect(fund.balanceMinor).toBe('0');
      expect(fund.accounts.every((a) => a.balanceMinor === '0')).toBe(true);
    }
  });

  it('CreatePhysicalAccount has no opening amount and stays at zero', async () => {
    await getFinancialStructure(context);
    const created = await createPhysicalAccount({ name: 'Equity Bank' }, context);
    expect(created.status).toBe('success');
    expect(created.data?.kind).toBe('OPS_OTHER_BANK');
    expect(created.data?.fundCode).toBe('OPERATIONAL');
    expect(created.data?.balanceMinor).toBe('0');
    expect((created.data as any).balance).toBeUndefined();

    const rejected = await createPhysicalAccount(
      { name: 'With cash', initialBalance: 5000 } as any,
      context,
    );
    expect(rejected.status).toBe('error');
    expect(rejected.message).toMatch(/cannot set a balance/);
  });

  it('rejects extra Capital banks (A.3.8 default: Operational only)', async () => {
    await getFinancialStructure(context);
    const result = await createPhysicalAccount({ name: 'BK Capital', kind: 'CAPITAL_BANK' }, context);
    expect(result.status).toBe('error');
    expect(result.message).toMatch(/Only extra Operational banks/);
  });

  it('lists the extra Operational bank on the next GetFinancialStructure', async () => {
    await getFinancialStructure(context);
    const created = await createPhysicalAccount({ name: 'I&M Bank' }, context);
    const again = await getFinancialStructure(context);
    const ops = again.data!.funds.find((f) => f.code === 'OPERATIONAL');
    expect(ops?.accounts.some((a) => a.id === created.data?.id && a.kind === 'OPS_OTHER_BANK')).toBe(true);
    expect(ops?.accounts.find((a) => a.kind === 'OPS_CASH')?.fundCode).toBe('OPERATIONAL');
    expect(ops?.accounts.find((a) => a.kind === 'OPS_MOMO')?.fundCode).toBe('OPERATIONAL');
  });

  it('does not store a SoT balance column on PhysicalAccount', async () => {
    const tree = await getFinancialStructure(context);
    const id = tree.data!.funds[0].accounts[0].id;
    const row = await prisma.physicalAccount.findUnique({ where: { id } });
    expect(row).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(row, 'balance')).toBe(false);
    expect(prisma.paymentMethod).toBeDefined();
  });
});
