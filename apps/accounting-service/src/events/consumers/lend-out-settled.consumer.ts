import { glForMethodType, postJournalLines } from '../ledger-posting.js';

const SHOP_RECEIVABLE = { code: '1110', name: 'Shop lend receivable', type: 'ASSET' };
const REVENUE = { code: '4000', name: 'Sales Revenue', type: 'REVENUE' };
const COGS = { code: '5000', name: 'Cost of Goods Sold', type: 'EXPENSE' };
const INVENTORY = { code: '1300', name: 'Inventory', type: 'ASSET' };

function cashAccountForMethod(method?: string) {
  const normalized = String(method || 'CASH').toUpperCase();
  if (normalized === 'MOMO' || normalized === 'MOBILE') return glForMethodType('MOBILE');
  if (normalized === 'BANK' || normalized === 'BANK_TRANSFER') return glForMethodType('BANK');
  if (normalized === 'CARD') return glForMethodType('CARD');
  return glForMethodType('CASH');
}

export const lendOutSettledConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const tenantId = payload?.tenantId || event.tenantId;
    const shopId = payload?.shopId || event.shopId;
    const floor = Number(payload?.floor) || 0;
    if (!tenantId || !shopId || floor <= 0) return;

    const receivedNow = Math.max(0, Math.min(floor, Number(payload?.receivedNow) || 0));
    const unpaid = Math.max(0, floor - receivedNow);
    const shopName = payload?.shopName || 'shop';
    const unitCost = Number(payload?.unitCost) || 0;

    const settleLines: Array<{ account: { code: string; name: string; type: string }; type: 'DEBIT' | 'CREDIT'; amount: number }> = [
      { account: REVENUE, type: 'CREDIT', amount: floor },
    ];
    if (receivedNow > 0) {
      settleLines.push({ account: cashAccountForMethod(payload?.payoutMethod), type: 'DEBIT', amount: receivedNow });
    }
    if (unpaid > 0) {
      settleLines.push({ account: SHOP_RECEIVABLE, type: 'DEBIT', amount: unpaid });
    }

    const settleJournal = await postJournalLines({
      tenantId,
      shopId,
      userId: event.createdBy,
      description: `Lend-OUT settle from ${shopName}${payload?.rentalId ? ` (${payload.rentalId})` : ''}`,
      lines: settleLines,
    });
    if (settleJournal) {
      console.log(`LendOutSettled posted: ${aggregateId} journal ${settleJournal.id} (correlationId: ${correlationId})`);
    }

    if (unitCost > 0) {
      const cogsJournal = await postJournalLines({
        tenantId,
        shopId,
        userId: event.createdBy,
        description: `Lend-OUT COGS ${shopName}${payload?.rentalId ? ` (${payload.rentalId})` : ''}`,
        lines: [
          { account: COGS, type: 'DEBIT', amount: unitCost },
          { account: INVENTORY, type: 'CREDIT', amount: unitCost },
        ],
      });
      if (cogsJournal) {
        console.log(`LendOutSettled COGS posted: ${aggregateId} journal ${cogsJournal.id}`);
      }
    }
  } catch (error) {
    console.error('Error processing LendOutSettled event:', error);
    throw error;
  }
};
