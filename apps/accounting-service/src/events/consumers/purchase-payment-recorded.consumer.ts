import { prisma } from '../../database/client.js';

export const purchasePaymentRecordedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
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

    // Get or create Cash account
    let cashAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        code: '1001'
      }
    });

    if (!cashAccount) {
      cashAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '1001',
          name: 'Cash on Hand',
          type: 'ASSET',
          balance: 0
        }
      });
    }

    // Get or create Accounts Payable account
    let apAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        code: '2001'
      }
    });

    if (!apAccount) {
      apAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '2001',
          name: 'Accounts Payable',
          type: 'LIABILITY',
          balance: 0
        }
      });
    }

    // Create journal entry for payment
    const journalEntry = await prisma.journalEntry.create({
      data: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        workPeriodId: workPeriod.id,
        description: `Payment for PO ${payload.poNumber || payload.purchaseId}`,
        postedBy: 'system',
        status: 'POSTED',
        entries: {
          create: [
            { accountId: apAccount.id, type: 'DEBIT', amount: payload.amount },
            { accountId: cashAccount.id, type: 'CREDIT', amount: payload.amount }
          ]
        }
      }
    });

    // Update account balances
    await prisma.ledgerAccount.update({
      where: { id: apAccount.id },
      data: { balance: { decrement: payload.amount } }
    });

    await prisma.ledgerAccount.update({
      where: { id: cashAccount.id },
      data: { balance: { decrement: payload.amount } }
    });

    console.log(`PurchasePaymentRecorded event processed: ${aggregateId} (correlationId: ${correlationId})`, journalEntry.id);
  } catch (error) {
    console.error(`Error processing PurchasePaymentRecorded event:`, error);
    throw error;
  }
};
