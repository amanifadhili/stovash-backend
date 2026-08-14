import { glForMethodType, postJournalLines } from '../ledger-posting.js';

const SHOP_PAYABLE = { code: '2110', name: 'Shop lend payable', type: 'LIABILITY' };
const LEND_IN_FLOOR = { code: '6270', name: 'Lend-IN shop floor', type: 'EXPENSE' };
const LEND_IN_EXTRAS = { code: '6271', name: 'Lend-IN extras', type: 'EXPENSE' };

function cashAccountForMethod(method?: string) {
  const normalized = String(method || 'CASH').toUpperCase();
  if (normalized === 'MOMO' || normalized === 'MOBILE') return glForMethodType('MOBILE');
  if (normalized === 'BANK' || normalized === 'BANK_TRANSFER') return glForMethodType('BANK');
  if (normalized === 'CARD') return glForMethodType('CARD');
  return glForMethodType('CASH');
}

export const lendInSoldConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const tenantId = payload?.tenantId || event.tenantId;
    const shopId = payload?.shopId || event.shopId;
    const floor = Number(payload?.floor) || 0;
    if (!tenantId || !shopId) return;

    const shopName = payload?.shopName || 'shop';

    if (floor > 0) {
      const paidNow = Math.max(0, Math.min(floor, Number(payload?.ownerPayoutTotal) || 0));
      const unpaid = Math.max(0, floor - paidNow);
      const lines: Array<{ account: { code: string; name: string; type: string }; type: 'DEBIT' | 'CREDIT'; amount: number }> = [
        { account: LEND_IN_FLOOR, type: 'DEBIT', amount: floor },
      ];
      if (unpaid > 0) {
        lines.push({ account: SHOP_PAYABLE, type: 'CREDIT', amount: unpaid });
      }
      if (paidNow > 0) {
        lines.push({ account: cashAccountForMethod(payload?.payoutMethod), type: 'CREDIT', amount: paidNow });
      }
      const journal = await postJournalLines({
        tenantId,
        shopId,
        userId: event.createdBy,
        description: `Lend-IN floor to ${shopName}${payload?.rentalId ? ` (${payload.rentalId})` : ''}`,
        lines,
      });
      if (journal) {
        console.log(`LendInSold posted: ${aggregateId} journal ${journal.id} (correlationId: ${correlationId})`);
      }
    }

    const extras = Number(payload?.extras) || 0;
    if (payload?.extrasCash && extras > 0) {
      const extrasJournal = await postJournalLines({
        tenantId,
        shopId,
        userId: event.createdBy,
        description: `Lend-IN extras for ${shopName}${payload?.rentalId ? ` (${payload.rentalId})` : ''}`,
        lines: [
          { account: LEND_IN_EXTRAS, type: 'DEBIT', amount: extras },
          { account: cashAccountForMethod(payload?.extrasPaymentMethod), type: 'CREDIT', amount: extras },
        ],
      });
      if (extrasJournal) {
        console.log(`LendInSold extras posted: ${aggregateId} journal ${extrasJournal.id}`);
      }
    }
  } catch (error) {
    console.error('Error processing LendInSold event:', error);
    throw error;
  }
};
