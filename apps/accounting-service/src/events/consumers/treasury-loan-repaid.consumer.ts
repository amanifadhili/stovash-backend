import { glForMethodType, postDoubleEntry } from '../ledger-posting.js';

export const treasuryLoanRepaidConsumer = async (event: any): Promise<void> => {
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
        ? `Loan repayment to ${who}`
        : `Loan collection from ${who}`,
      amount,
      debit: borrowed
        ? { code: '2200', name: 'Business Loans Payable', type: 'LIABILITY' }
        : cash,
      credit: borrowed
        ? cash
        : { code: '1200', name: 'Loans Receivable', type: 'ASSET' },
    });
    if (journal) {
      console.log(`TreasuryLoanRepaymentRecorded posted: ${aggregateId} journal ${journal.id} (correlationId: ${correlationId})`);
    }
  } catch (error) {
    console.error('Error processing TreasuryLoanRepaymentRecorded event:', error);
    throw error;
  }
};
