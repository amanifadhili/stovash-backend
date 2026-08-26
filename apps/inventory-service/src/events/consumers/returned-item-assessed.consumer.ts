import { prisma } from '../../database/client.js';
import { inventoryStatusForReturnCondition } from '../../common/return-condition-status.js';

/**
 * Event fallback / audit path. Prefer sync ApplyReturnedItemAssessment from sales-service.
 * Idempotent: no-op when status already matches.
 */
export const returnedItemAssessedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId, tenantId: envelopeTenantId } = event;

  try {
    const saleReturnItemId = payload?.saleReturnItemId;
    const inventoryItemId = payload?.inventoryItemId;
    const conditionState = payload?.conditionState;
    const tenantId = payload?.tenantId || envelopeTenantId;

    if (!inventoryItemId || !conditionState) {
      console.log(`ReturnedItemAssessed event missing inventoryItemId or conditionState: ${aggregateId}`);
      return;
    }
    if (!tenantId) {
      console.log(`ReturnedItemAssessed event missing tenantId: ${aggregateId}`);
      return;
    }

    const invItem = await prisma.inventoryItem.findFirst({
      where: { tenantId, id: inventoryItemId },
    });
    if (!invItem) {
      console.log(`Inventory item ${inventoryItemId} not found (tenant ${tenantId})`);
      return;
    }

    const status = inventoryStatusForReturnCondition(conditionState);
    if (invItem.status !== status) {
      await prisma.inventoryItem.update({
        where: { id: invItem.id },
        data: { status, updatedBy: payload.assessedBy || 'system' },
      });
    }

    await prisma.auditLog.create({
      data: {
        tenantId,
        shopId: invItem.shopId,
        userId: payload.assessedBy || null,
        action: 'AssessReturnedItem',
        resource: 'InventoryItem',
        resourceId: invItem.id,
        traceId: payload.traceId || correlationId || null,
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
