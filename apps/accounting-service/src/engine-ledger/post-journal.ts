export class UnbalancedJournalError extends Error {
  constructor(debit: string, credit: string) {
    super(`Journal is unbalanced: debit ${debit} != credit ${credit}`);
    this.name = 'UnbalancedJournalError';
  }
}

export function assertJournalBalanced(lines: Array<{ side: string; amountMinor: bigint }>) {
  let debit = 0n;
  let credit = 0n;
  for (const line of lines) {
    if (line.amountMinor <= 0n) {
      throw new UnbalancedJournalError('non-positive line', '0');
    }
    if (line.side === 'DEBIT') debit += line.amountMinor;
    else if (line.side === 'CREDIT') credit += line.amountMinor;
    else throw new UnbalancedJournalError(`bad side ${line.side}`, '0');
  }
  if (debit !== credit || debit === 0n) {
    throw new UnbalancedJournalError(debit.toString(), credit.toString());
  }
}

export async function postEngineJournal(
  tx: any,
  args: {
    tenantId: string;
    shopId: string;
    financialTransactionId: string;
    description: string;
    postedBy: string;
    occurredOn: Date;
    lines: Array<{ accountCode: string; side: 'DEBIT' | 'CREDIT'; amountMinor: bigint }>;
  },
) {
  assertJournalBalanced(args.lines);

  const existing = await tx.postedJournal.findUnique({
    where: { financialTransactionId: args.financialTransactionId },
    include: { lines: { include: { account: true } } },
  });
  if (existing) return existing;

  const codes = [...new Set(args.lines.map((l) => l.accountCode))];
  const accounts = await tx.chartAccount.findMany({
    where: { tenantId: args.tenantId, shopId: args.shopId, code: { in: codes } },
  });
  const byCode = new Map<string, { id: string; code: string }>(
    accounts.map((a: { id: string; code: string }) => [a.code, a]),
  );
  for (const code of codes) {
    if (!byCode.has(code)) {
      throw new Error(`Chart account ${code} is missing`);
    }
  }

  return tx.postedJournal.create({
    data: {
      tenantId: args.tenantId,
      shopId: args.shopId,
      financialTransactionId: args.financialTransactionId,
      description: args.description,
      status: 'POSTED',
      postedBy: args.postedBy,
      occurredOn: args.occurredOn,
      lines: {
        create: args.lines.map((line) => {
          const account = byCode.get(line.accountCode);
          if (!account) throw new Error(`Chart account ${line.accountCode} is missing`);
          return {
            accountId: account.id,
            side: line.side,
            amountMinor: line.amountMinor,
          };
        }),
      },
    },
    include: { lines: { include: { account: true } } },
  });
}
