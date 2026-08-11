import { prisma } from '../../database/client.js';

export const saleCreatedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.items || payload.items.length === 0) {
      console.log(`SaleCreated event has no items: ${aggregateId}`);
      return;
    }

    // Mark matching inventory items as SOLD per AD-0016 lifecycle
    for (const item of payload.items) {
      const serialNumber = item.serialNumber;
      if (!serialNumber) continue;

      const invItem = await prisma.inventoryItem.findFirst({
        where: {
          tenantId: payload.tenantId,
          serialNumber
        }
      });

      if (!invItem) continue;

      if (invItem.status !== 'SOLD') {
        // First transition to RESERVED
        await prisma.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: 'RESERVED' }
        });

        // Then transition to SOLD
        await prisma.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: 'SOLD' }
        });

        // Record movement
        await prisma.inventoryMovement.create({
          data: {
            tenantId: payload.tenantId,
            shopId: payload.shopId,
            inventoryItemId: invItem.id,
            movementType: 'OUT',
            quantity: item.quantity || 1,
            referenceId: payload.saleId || aggregateId,
            referenceType: 'SALE',
            createdBy: payload.createdBy || 'system'
          }
        });
      }
    }

    console.log(`SaleCreated event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleCreated event in inventory:`, error);
    throw error;
  }
};
