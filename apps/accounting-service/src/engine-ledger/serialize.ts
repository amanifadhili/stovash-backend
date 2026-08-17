export function serializeJournal(journal: any) {
  return {
    id: journal.id,
    financialTransactionId: journal.financialTransactionId,
    description: journal.description,
    status: journal.status,
    occurredOn:
      journal.occurredOn instanceof Date ? journal.occurredOn.toISOString().slice(0, 10) : journal.occurredOn,
    postedBy: journal.postedBy,
    lines: (journal.lines ?? []).map((line: any) => ({
      id: line.id,
      side: line.side,
      amountMinor: line.amountMinor.toString(),
      accountCode: line.account?.code,
      accountName: line.account?.name,
      accountType: line.account?.type,
    })),
  };
}
