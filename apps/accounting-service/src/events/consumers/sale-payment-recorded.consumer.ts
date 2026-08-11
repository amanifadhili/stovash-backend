import { prisma } from '../../database/client.js';

export const salePaymentRecordedConsumer = async (event: any): Promise<void> => {
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

    // Get or create Accounts Receivable account
    let arAccount = await prisma.ledgerAccount.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        code: '1101'
      }
    });

    if (!arAccount) {
      arAccount = await prisma.ledgerAccount.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          code: '1101',
          name: 'Accounts Receivable',
          type: 'ASSET',
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
        description: `Partial payment for order ${payload.orderNumber || payload.saleId}`,
        postedBy: 'system',
        status: 'POSTED',
        entries: {
          create: [
            { accountId: cashAccount.id, type: 'DEBIT', amount: payload.amount },
            { accountId: arAccount.id, type: 'CREDIT', amount: payload.amount }
          ]
        }
      }
    });

    // Update account balances
    await prisma.ledgerAccount.update({
      where: { id: cashAccount.id },
      data: { balance: { increment: payload.amount } }
    });

    await prisma.ledgerAccount.update({
      where: { id: arAccount.id },
      data: { balance: { decrement: payload.amount } }
    });

    console.log(`SalePaymentRecorded event processed: ${aggregateId} (correlationId: ${correlationId})`, journalEntry.id);
  } catch (error) {
    console.error(`Error processing SalePaymentRecorded event:`, error);
    throw error;
  }
};
