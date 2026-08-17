import { prisma } from '../../database/client.js';

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

    const amount = Number(payload.totalAmount ?? payload.grandTotal);
    if (!Number.isFinite(amount) || amount <= 0) {
      console.error(
        `SaleCreated missing finite totalAmount/grandTotal for sale ${aggregateId}: totalAmount=${payload.totalAmount} grandTotal=${payload.grandTotal}`,
      );
      return;
    }

    // Get or create Accounts Receivable account
    let arAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        code: '1200'
      }
    });

    if (!arAccount) {
      arAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '1200',
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
        code: '4001'
      }
    });

    if (!revenueAccount) {
      revenueAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '4001',
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
        description: `Sale ${aggregateId}`,
        postedBy: 'system',
        status: 'POSTED',
        entries: {
          create: [
            { accountId: arAccount.id, type: 'DEBIT', amount },
            { accountId: revenueAccount.id, type: 'CREDIT', amount }
          ]
        }
      }
    });

    // Update account balances
    await prisma.ledgerAccount.update({
      where: { id: arAccount.id },
      data: { balance: { increment: amount } }
    });

    await prisma.ledgerAccount.update({
      where: { id: revenueAccount.id },
      data: { balance: { increment: amount } }
    });

    console.log(`SaleCreated event processed: ${aggregateId} (correlationId: ${correlationId})`, journalEntry.id);
  } catch (error) {
    console.error(`Error processing SaleCreated event:`, error);
    throw error;
  }
};
