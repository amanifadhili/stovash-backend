import { glForMethodType, postDoubleEntry } from '../ledger-posting.js';

export const treasuryLoanRecordedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  try {
    const tenantId = payload?.tenantId || event.tenantId;
    const shopId = payload?.shopId || event.shopId;
    const amount = Number(payload?.amount);
    if (!tenantId || !shopId || !amount) return;

    const cash = glForMethodType(payload.methodType);
    const who = payload.counterparty || 'counterparty';
    const borrowed = payload.direction === 'BORROWED';
    const journal = await postDoubleEntry({
      tenantId,
      shopId,
      userId: event.createdBy,
      description: borrowed
        ? `Loan borrowed from ${who}`
        : `Loan lent to ${who}`,
      amount,
      debit: borrowed
        ? cash
        : { code: '1200', name: 'Loans Receivable', type: 'ASSET' },
      credit: borrowed
        ? { code: '2200', name: 'Business Loans Payable', type: 'LIABILITY' }
        : cash,
    });
    if (journal) {
      console.log(`TreasuryLoanRecorded posted: ${aggregateId} journal ${journal.id} (correlationId: ${correlationId})`);
    }
  } catch (error) {
    console.error('Error processing TreasuryLoanRecorded event:', error);
    throw error;
  }
};
