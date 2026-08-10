import { prisma } from '@electronic-shop/database';

export const saleCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  
  try {
    // Create AR journal entry for sale
    // Debit Accounts Receivable, Credit Sales Revenue
    
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

    // Get or create Accounts Receivable account
    let arAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        type: 'ASSET',
        name: 'Accounts Receivable'
      }
    });

    if (!arAccount) {
      arAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          name: 'Accounts Receivable',
          type: 'ASSET',
          balance: 0
        }
      });
    }

    // Get or create Sales Revenue account
    let revenueAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        type: 'REVENUE',
        name: 'Sales Revenue'
      }
    });

    if (!revenueAccount) {
      revenueAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          name: 'Sales Revenue',
          type: 'REVENUE',
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
        description: `Sale ${aggregateId}`,
        totalDebit: payload.totalAmount,
        totalCredit: payload.totalAmount,
        status: 'POSTED',
        referenceId: aggregateId,
        referenceType: 'Sale'
      }
    });

    // Debit Accounts Receivable
    await prisma.ledgerEntry.create({
      data: {
        journalEntryId: journalEntry.id,
        ledgerAccountId: arAccount.id,
        debit: payload.totalAmount,
        credit: 0
      }
    });

    // Credit Sales Revenue
    await prisma.ledgerEntry.create({
      data: {
        journalEntryId: journalEntry.id,
        ledgerAccountId: revenueAccount.id,
        debit: 0,
        credit: payload.totalAmount
      }
    });

    // Update account balances
    await prisma.ledgerAccount.update({
      where: { id: arAccount.id },
      data: { balance: { increment: payload.totalAmount } }
    });

    await prisma.ledgerAccount.update({
      where: { id: revenueAccount.id },
      data: { balance: { increment: payload.totalAmount } }
    });

    console.log(`SaleCreated event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleCreated event:`, error);
    throw error;
  }
};
