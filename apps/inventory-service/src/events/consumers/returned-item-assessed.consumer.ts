import { prisma } from '../../database/client.js';

// Maps a returned item's assessed condition to an inventory lifecycle status.
// Only SELLABLE returns to AVAILABLE; everything else stays out of stock.
const CONDITION_TO_STATUS: Record<string, string> = {
  SELLABLE: 'AVAILABLE',
  DAMAGED: 'DAMAGED',
  REQUIRES_REPAIR: 'RETURNED',
  DEFECTIVE: 'RETURNED',
  QUARANTINED: 'RETURNED',
  RETURN_TO_SUPPLIER: 'RETURNED',
};

export const returnedItemAssessedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    const { saleReturnItemId, inventoryItemId, conditionState, tenantId } = payload;
    if (!inventoryItemId || !conditionState) {
      console.log(`ReturnedItemAssessed event missing inventoryItemId or conditionState: ${aggregateId}`);
      return;
    }

    const invItem = await prisma.inventoryItem.findFirst({
      where: { tenantId, id: inventoryItemId },
    });
    if (!invItem) {
      console.log(`Inventory item ${inventoryItemId} not found (tenant ${tenantId})`);
      return;
    }

    const status = CONDITION_TO_STATUS[conditionState] || 'RETURNED';
    if (invItem.status !== status) {
      await prisma.inventoryItem.update({
        where: { id: invItem.id },
        data: { status, updatedBy: payload.assessedBy || 'system' },
      });
    }

    await prisma.auditLog.create({
      data: {
        tenantId: payload.tenantId,
        shopId: invItem.shopId,
        userId: payload.assessedBy || null,
        action: 'AssessReturnedItem',
        resource: 'InventoryItem',
        resourceId: invItem.id,
        traceId: payload.traceId || null,
        details: JSON.stringify({
          saleReturnItemId,
          serialNumber: invItem.serialNumber,
          conditionState,
          status,
        }),
      },
    });

    console.log(`ReturnedItemAssessed event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing ReturnedItemAssessed event in inventory:`, error);
    throw error;
  }
};