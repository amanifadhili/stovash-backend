import { prisma } from '../../database/client.js';
import { applySaleFulfillment } from '../../common/apply-sale-fulfillment.js';

export const saleFulfilledConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.items || payload.items.length === 0) {
      console.log(`SaleFulfilled event has no items: ${aggregateId}`);
      return;
    }

    const tenantId = payload.tenantId || event.tenantId;
    const shopId = payload.shopId || event.shopId;
    const saleRef = payload.saleId || aggregateId;

    if (!tenantId || !shopId) {
      throw new Error(`SaleFulfilled missing tenantId/shopId for ${saleRef}`);
    }

    await applySaleFulfillment(prisma, {
      tenantId,
      shopId,
      saleId: saleRef,
      items: payload.items,
      fulfilledBy: payload.fulfilledBy || 'system',
      customerId: payload.customerId || null,
    });

    console.log(`SaleFulfilled event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleFulfilled event in inventory:`, error);
    throw error;
  }
};
