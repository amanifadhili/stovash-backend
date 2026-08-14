import { glForMethodType, postDoubleEntry } from '../ledger-posting.js';

export const treasuryTransferCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  try {
    const tenantId = payload?.tenantId || event.tenantId;
    const shopId = payload?.shopId || event.shopId;
    const amount = Number(payload?.amount);
    if (!tenantId || !shopId || !amount) return;

    const from = glForMethodType(payload.fromType);
    const to = glForMethodType(payload.toType);
    const journal = await postDoubleEntry({
      tenantId,
      shopId,
      userId: event.createdBy,
      description: `Transfer ${payload.fromName || from.name} → ${payload.toName || to.name}${payload.reference ? ` (${payload.reference})` : ''}`,
      amount,
      debit: to,
      credit: from,
    });
    if (journal) {
      console.log(`TreasuryTransferCreated posted: ${aggregateId} journal ${journal.id} (correlationId: ${correlationId})`);
    }
  } catch (error) {
    console.error('Error processing TreasuryTransferCreated event:', error);
    throw error;
  }
};
