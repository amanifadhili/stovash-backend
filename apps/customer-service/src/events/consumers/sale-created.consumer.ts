import { prisma } from '../../database/client.js';

export const saleCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  
  try {
    // Update customer balance when sale is created
    // Customer owes money (AR increases)
    
    if (!payload.customerId) {
      console.log(`SaleCreated event has no customerId, skipping ledger update`);
      return;
    }

    // Get or create customer ledger
    let customerLedger = await prisma.customerLedger.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        customerId: payload.customerId
      }
    });

    if (!customerLedger) {
      customerLedger = await prisma.customerLedger.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          customerId: payload.customerId,
          balance: 0
        }
      });
    }

    // Update customer balance (increase AR)
    await prisma.customerLedger.update({
      where: { id: customerLedger.id },
      data: { balance: { increment: payload.totalAmount } }
    });

    // Create ledger entry
    await prisma.ledgerEntry.create({
      data: {
        customerLedgerId: customerLedger.id,
        referenceId: aggregateId,
        referenceType: 'Sale',
        debit: payload.totalAmount,
        credit: 0,
        description: `Sale ${aggregateId}`,
        balance: customerLedger.balance + payload.totalAmount
      }
    });

    console.log(`SaleCreated event processed for customer ${payload.customerId}: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleCreated event for customer:`, error);
    throw error;
  }
};
