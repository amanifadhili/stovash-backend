import { prisma } from '../../database/client.js';

export const paymentMethodCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    // Create initial reconciliation record for the payment method
    await prisma.reconciliation.create({
      data: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        methodId: aggregateId,
        systemBalance: 0,
        physicalBalance: 0,
        difference: 0,
        reconciledAt: new Date(),
        reconciledBy: 'system'
      }
    });

    console.log(`PaymentMethodCreated event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing PaymentMethodCreated event:`, error);
    throw error;
  }
};
