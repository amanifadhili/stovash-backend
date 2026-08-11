import { prisma } from '../../database/client.js';

export const purchaseCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.items || payload.items.length === 0) {
      console.log(`PurchaseCreated event has no items: ${aggregateId}`);
      return;
    }

    // Create serialized inventory items per AD-0016 lifecycle
    for (const item of payload.items) {
      if (!item.serialNumber || !item.productId) continue;

      const existingItem = await prisma.inventoryItem.findFirst({
        where: {
          tenantId: payload.tenantId,
          serialNumber: item.serialNumber
        }
      });

      if (existingItem) continue;

      // Create with RECEIVED status
      const invItem = await prisma.inventoryItem.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          productId: item.productId,
          serialNumber: item.serialNumber,
          purchaseCost: item.purchaseCost || 0,
          status: 'RECEIVED'
        }
      });

      // Transition to AVAILABLE
      await prisma.inventoryItem.update({
        where: { id: invItem.id },
        data: { status: 'AVAILABLE' }
      });

      // Record movement
      await prisma.inventoryMovement.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          inventoryItemId: invItem.id,
          movementType: 'IN',
          quantity: item.quantity || 1,
          referenceId: payload.purchaseId || aggregateId,
          referenceType: 'PURCHASE',
          createdBy: payload.createdBy || 'system'
        }
      });
    }

    console.log(`PurchaseCreated event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing PurchaseCreated event in inventory:`, error);
    throw error;
  }
};
