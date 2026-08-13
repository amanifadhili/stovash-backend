import { prisma } from '../../database/client.js';

export const saleReturnedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.items || payload.items.length === 0) {
      console.log(`SaleReturnCreated event has no items: ${aggregateId}`);
      return;
    }

    const tenantId = payload.tenantId;
    const shopId = payload.shopId;

    // Returned inventory does NOT automatically become sellable: the item is
    // marked RETURNED and only an explicit condition assessment can move it.
    for (const item of payload.items) {
      if (!item.inventoryItemId) continue;

      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, id: item.inventoryItemId },
      });
      if (!invItem) {
        console.log(`Inventory item ${item.inventoryItemId} not found (tenant ${tenantId})`);
        continue;
      }

      if (invItem.status === 'SOLD' || invItem.status === 'RETURNED') {
        await prisma.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: 'RETURNED', updatedBy: payload.returnedBy || 'system' },
        });
      }

      await prisma.inventoryMovement.create({
        data: {
          tenantId,
          shopId,
          inventoryItemId: invItem.id,
          productId: null,
          customerId: payload.customerId || null,
          movementType: 'IN',
          quantity: item.quantity || 1,
          referenceId: payload.returnId || aggregateId,
          referenceType: 'SALE_RETURN',
          createdBy: payload.returnedBy || 'system',
        },
      });
    }

    console.log(`SaleReturnCreated event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleReturnCreated event in inventory:`, error);
    throw error;
  }
};