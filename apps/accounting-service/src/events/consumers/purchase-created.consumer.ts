import { prisma } from '@electronic-shop/database';

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
        type: 'LIABILITY',
        name: 'Accounts Payable'
      }
    });

    if (!apAccount) {
      apAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
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
        type: 'ASSET',
        name: 'Inventory'
      }
    });

    if (!inventoryAccount) {
      inventoryAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
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
        entryNumber: `JE-${Date.now()}`,
        description: `Purchase ${aggregateId}`,
        totalDebit: payload.totalCost,
        totalCredit: payload.totalCost,
        status: 'POSTED',
        referenceId: aggregateId,
        referenceType: 'Purchase'
      }
    });

    // Debit Inventory
    await prisma.ledgerEntry.create({
      data: {
        journalEntryId: journalEntry.id,
        ledgerAccountId: inventoryAccount.id,
        debit: payload.totalCost,
        credit: 0
      }
    });

    // Credit Accounts Payable
    await prisma.ledgerEntry.create({
      data: {
        journalEntryId: journalEntry.id,
        ledgerAccountId: apAccount.id,
        debit: 0,
        credit: payload.totalCost
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

    console.log(`PurchaseCreated event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing PurchaseCreated event:`, error);
    throw error;
  }
};
