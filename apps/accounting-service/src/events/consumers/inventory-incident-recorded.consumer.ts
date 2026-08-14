import { prisma } from '../../database/client.js';

const LOSS_LABELS: Record<string, string> = {
  DAMAGED: 'Inventory damage',
  LOST: 'Inventory loss',
  STOLEN: 'Inventory theft',
};

async function getOrCreateAccount(
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

export const inventoryIncidentRecordedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.postToBooks) {
      console.log(`Inventory incident ${aggregateId} has no book impact (not owned stock or zero cost)`);
      return;
    }

    const amount = Number(payload.writeOffAmount) || 0;
    if (amount <= 0) return;

    const tenantId = payload.tenantId || event.tenantId;
    const shopId = payload.shopId || event.shopId;

    const workPeriod = await prisma.workPeriod.findFirst({
      where: { shopId, status: 'OPEN' },
    });
    if (!workPeriod) {
      console.error(`No open work period found for shop ${shopId} — inventory loss not posted`);
      return;
    }

    const inventoryAccount = await getOrCreateAccount(tenantId, shopId, '1300', 'Inventory', 'ASSET');
    const lossAccount = await getOrCreateAccount(
      tenantId,
      shopId,
      '6100',
      'Inventory Loss',
      'EXPENSE',
    );

    const label = LOSS_LABELS[payload.incidentType] || 'Inventory write-off';
    const who = payload.serialNumber
      ? `${payload.productName || 'Unit'} · ${payload.serialNumber}`
      : `${payload.productName || 'Stock'} × ${payload.quantity || 1}`;

    const journalEntry = await prisma.journalEntry.create({
      data: {
        tenantId,
        shopId,
        workPeriodId: workPeriod.id,
        description: `${label}: ${who}`,
        postedBy: event.createdBy || 'system',
        status: 'POSTED',
        entries: {
          create: [
            { accountId: lossAccount.id, type: 'DEBIT', amount },
            { accountId: inventoryAccount.id, type: 'CREDIT', amount },
          ],
        },
      },
    });

    await prisma.ledgerAccount.update({
      where: { id: lossAccount.id },
      data: { balance: { increment: amount } },
    });
    await prisma.ledgerAccount.update({
      where: { id: inventoryAccount.id },
      data: { balance: { decrement: amount } },
    });

    console.log(
      `InventoryIncidentRecorded posted: ${aggregateId} journal ${journalEntry.id} (correlationId: ${correlationId})`,
    );
  } catch (error) {
    console.error('Error processing InventoryIncidentRecorded event:', error);
    throw error;
  }
};
