import { prisma } from '../../database/client.js';

export const purchaseCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    // Create AP journal entry for purchase
    // Debit Inventory/Asset, Credit Accounts Payable

    const workPeriod = await prisma.workPeriod.findFirst({
      where: {
        shopId: payload.shopId,
        status: 'OPEN'
      }
    });

    if (!workPeriod) {
      console.error(`No open work period found for shop ${payload.shopId}`);
      return;
    }

    // Get or create Accounts Payable account
    let apAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        code: '2100'
      }
    });

    if (!apAccount) {
      apAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '2100',
          name: 'Accounts Payable',
          type: 'LIABILITY',
          balance: 0
        }
      });
    }

    // Get or create Inventory/Asset account
    let inventoryAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        code: '1300'
      }
    });

    if (!inventoryAccount) {
      inventoryAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '1300',
          name: 'Inventory',
          type: 'ASSET',
          balance: 0
        }
      });
    }

    // Create journal entry
    const journalEntry = await prisma.journalEntry.create({
      data: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        workPeriodId: workPeriod.id,
        description: `Purchase ${aggregateId}`,
        postedBy: 'system',
        status: 'POSTED',
        entries: {
          create: [
            { accountId: inventoryAccount.id, type: 'DEBIT', amount: payload.totalCost },
            { accountId: apAccount.id, type: 'CREDIT', amount: payload.totalCost }
          ]
        }
      }
    });

    // Update account balances
    await prisma.ledgerAccount.update({
      where: { id: inventoryAccount.id },
      data: { balance: { increment: payload.totalCost } }
    });

    await prisma.ledgerAccount.update({
      where: { id: apAccount.id },
      data: { balance: { increment: payload.totalCost } }
    });

    console.log(`PurchaseCreated event processed: ${aggregateId} (correlationId: ${correlationId})`, journalEntry.id);
  } catch (error) {
    console.error(`Error processing PurchaseCreated event:`, error);
    throw error;
  }
};
