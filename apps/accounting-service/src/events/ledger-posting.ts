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

export async function postJournalLines(opts: {
  tenantId: string;
  shopId: string;
  userId?: string;
  description: string;
  lines: Array<{ account: { code: string; name: string; type: string }; type: 'DEBIT' | 'CREDIT'; amount: number }>;
}) {
  const lines = opts.lines.filter((l) => Number.isFinite(Number(l.amount)) && Number(l.amount) > 0);
  if (lines.length < 2) return null;

  const debitTotal = lines.filter((l) => l.type === 'DEBIT').reduce((s, l) => s + Number(l.amount), 0);
  const creditTotal = lines.filter((l) => l.type === 'CREDIT').reduce((s, l) => s + Number(l.amount), 0);
  if (Math.abs(debitTotal - creditTotal) > 0.01) {
    console.error(`Unbalanced journal skipped: ${opts.description} DR ${debitTotal} CR ${creditTotal}`);
    return null;
  }

  const workPeriod = await ensureOpenWorkPeriod(opts.tenantId, opts.shopId, opts.userId);
  const resolved = [];
  for (const line of lines) {
    const account = await getOrCreateAccount(
      opts.tenantId,
      opts.shopId,
      line.account.code,
      line.account.name,
      line.account.type,
    );
    resolved.push({ account, type: line.type, amount: Number(line.amount) });
  }

  const journalEntry = await prisma.journalEntry.create({
    data: {
      tenantId: opts.tenantId,
      shopId: opts.shopId,
      workPeriodId: workPeriod.id,
      description: opts.description,
      postedBy: opts.userId || 'system',
      status: 'POSTED',
      entries: {
        create: resolved.map((l) => ({
          accountId: l.account.id,
          type: l.type,
          amount: l.amount,
        })),
      },
    },
  });

  for (const line of resolved) {
    await prisma.ledgerAccount.update({
      where: { id: line.account.id },
      data: { balance: { increment: balanceDelta(line.account.type, line.type, line.amount) } },
    });
  }

  return journalEntry;
}
