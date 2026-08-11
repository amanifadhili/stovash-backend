import { prisma } from '../../database/client.js';

export const saleCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload.customerId) {
      console.log(`SaleCreated event has no customerId, skipping ledger update`);
      return;
    }

    const customer = await prisma.customer.findUnique({
      where: { id: payload.customerId }
    });

    if (!customer) {
      console.log(`Customer ${payload.customerId} not found, skipping ledger update`);
      return;
    }

    // Update customer outstanding balance (AR increases)
    await prisma.customer.update({
      where: { id: payload.customerId },
      data: { balance: { increment: payload.totalAmount || 0 } }
    });

    // Record a statement entry for the current period
    const now = new Date();
    const period = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;

    await prisma.customerStatement.upsert({
      where: {
        customerId_period: {
          customerId: payload.customerId,
          period
        }
      },
      create: {
        customerId: payload.customerId,
        period,
        balance: payload.totalAmount || 0
      },
      update: {
        balance: { increment: payload.totalAmount || 0 }
      }
    });

    console.log(`SaleCreated event processed for customer ${payload.customerId}: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleCreated event for customer:`, error);
    throw error;
  }
};
