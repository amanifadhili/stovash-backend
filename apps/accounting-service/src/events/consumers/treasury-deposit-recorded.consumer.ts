import { glForMethodType, postDoubleEntry } from '../ledger-posting.js';

export const treasuryDepositRecordedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  try {
    const tenantId = payload?.tenantId || event.tenantId;
    const shopId = payload?.shopId || event.shopId;
    const amount = Number(payload?.amount);
    if (!tenantId || !shopId || !amount) return;

    const cash = glForMethodType(payload.methodType);
    const journal = await postDoubleEntry({
      tenantId,
      shopId,
      userId: event.createdBy,
      description: `Owner deposit to ${payload.methodName || cash.name}`,
      amount,
      debit: cash,
      credit: { code: '3000', name: 'Owner Equity', type: 'EQUITY' },
    });
    if (journal) {
      console.log(`TreasuryDepositRecorded posted: ${aggregateId} journal ${journal.id} (correlationId: ${correlationId})`);
    }
  } catch (error) {
    console.error('Error processing TreasuryDepositRecorded event:', error);
    throw error;
  }
};
