import { prisma } from '../../database/client.js';

export const paymentMethodCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;
  
  try {
    // Initialize payment method balance
    // Create initial reconciliation record
    
    // Get or create operational balance record for this payment method
    const existingBalance = await prisma.operationalBalance.findFirst({
      where: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        paymentMethodId: aggregateId
      }
    });

    if (!existingBalance) {
      await prisma.operationalBalance.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          paymentMethodId: aggregateId,
          balance: 0,
          lastUpdated: new Date()
        }
      });
    }

    // Create initial reconciliation record
    await prisma.reconciliation.create({
      data: {
        tenantId: payload.tenantId,
        shopId: payload.shopId,
        paymentMethodId: aggregateId,
        systemBalance: 0,
        physicalBalance: 0,
        difference: 0,
        status: 'RECONCILED',
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
