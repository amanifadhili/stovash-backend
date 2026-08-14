import { prisma } from '../database/client.js';

export const METHOD_GL: Record<string, { code: string; name: string; type: string }> = {
  CASH: { code: '1001', name: 'Cash on Hand', type: 'ASSET' },
  MOBILE: { code: '1002', name: 'Mobile Money', type: 'ASSET' },
  BANK: { code: '1003', name: 'Bank', type: 'ASSET' },
  CARD: { code: '1004', name: 'Card', type: 'ASSET' },
};

export function glForMethodType(type?: string) {
  return METHOD_GL[type || ''] || METHOD_GL.CASH;
}

export async function getOrCreateAccount(
  tenantId: string,
  shopId: string,
  code: string,
  name: string,
  type: string,
) {
  let account = await prisma.ledgerAccount.findFirst({
    where: { tenantId, shopId, code },
  });
  if (!account) {
    account = await prisma.ledgerAccount.create({
      data: { tenantId, shopId, code, name, type, balance: 0 },
    });
  }
  return account;
}

export async function ensureOpenWorkPeriod(tenantId: string, shopId: string, userId?: string) {
  let workPeriod = await prisma.workPeriod.findFirst({
    where: { shopId, status: 'OPEN' },
    orderBy: { openedAt: 'desc' },
  });
  if (!workPeriod) {
    workPeriod = await prisma.workPeriod.create({
      data: {
        tenantId,
        shopId,
        openedBy: userId || 'system',
        createdBy: userId || 'system',
        status: 'OPEN',
      },
    });
  }
  return workPeriod;
}

function balanceDelta(accountType: string, entryType: 'DEBIT' | 'CREDIT', amount: number) {
  const signed = entryType === 'DEBIT' ? amount : -amount;
  if (accountType === 'LIABILITY' || accountType === 'EQUITY' || accountType === 'REVENUE') {
    return -signed;
  }
  return signed;
}

export async function postDoubleEntry(opts: {
  tenantId: string;
  shopId: string;
  userId?: string;
  description: string;
  amount: number;
  debit: { code: string; name: string; type: string };
  credit: { code: string; name: string; type: string };
}) {
  const amount = Number(opts.amount);
  if (!Number.isFinite(amount) || amount <= 0) return null;
  if (opts.debit.code === opts.credit.code) return null;

  const workPeriod = await ensureOpenWorkPeriod(opts.tenantId, opts.shopId, opts.userId);
  const debitAccount = await getOrCreateAccount(
    opts.tenantId,
    opts.shopId,
    opts.debit.code,
    opts.debit.name,
    opts.debit.type,
  );
  const creditAccount = await getOrCreateAccount(
    opts.tenantId,
    opts.shopId,
    opts.credit.code,
    opts.credit.name,
    opts.credit.type,
  );

  const journalEntry = await prisma.journalEntry.create({
    data: {
      tenantId: opts.tenantId,
      shopId: opts.shopId,
      workPeriodId: workPeriod.id,
      description: opts.description,
      postedBy: opts.userId || 'system',
      status: 'POSTED',
      entries: {
        create: [
          { accountId: debitAccount.id, type: 'DEBIT', amount },
          { accountId: creditAccount.id, type: 'CREDIT', amount },
        ],
      },
    },
  });

  await prisma.ledgerAccount.update({
    where: { id: debitAccount.id },
    data: { balance: { increment: balanceDelta(debitAccount.type, 'DEBIT', amount) } },
  });
  await prisma.ledgerAccount.update({
    where: { id: creditAccount.id },
    data: { balance: { increment: balanceDelta(creditAccount.type, 'CREDIT', amount) } },
  });

  return journalEntry;
}
