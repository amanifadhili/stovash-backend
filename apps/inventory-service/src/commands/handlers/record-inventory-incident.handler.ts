import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordInventoryIncidentCommand } from '../impl/record-inventory-incident.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(RecordInventoryIncidentCommand)
export class RecordInventoryIncidentHandler extends BaseCommandHandler<RecordInventoryIncidentCommand> {
  async execute(command: RecordInventoryIncidentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.inventoryItemId || !payload?.incidentType) {
        return {
          status: 'error',
          traceId,
          message: 'inventoryItemId and incidentType are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!['DAMAGED', 'LOST', 'STOLEN'].includes(payload.incidentType)) {
        return {
          status: 'error',
          traceId,
          message: 'incidentType must be DAMAGED, LOST, or STOLEN',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify inventory item exists
      const invItem = await prisma.inventoryItem.findUnique({
        where: { id: payload.inventoryItemId }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item ${payload.inventoryItemId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (invItem.tenantId !== tenantId || invItem.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Inventory item does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      // Work period lockout enforced by gateway-provided context.workPeriodId
      const result = await prisma.$transaction(async (tx) => {
        // Update inventory item status to incident type
        const updatedItem = await tx.inventoryItem.update({
          where: { id: payload.inventoryItemId },
          data: { status: payload.incidentType }
        });

        // Record adjustment
        await tx.inventoryAdjustment.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: payload.inventoryItemId,
            adjustmentType: payload.incidentType,
            reason: payload.writeOffAmount ? `Write-off $${payload.writeOffAmount}` : null,
            quantity: 1,
            createdBy: context.userId || 'system'
          }
        });

        return { updatedItem };
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordInventoryIncident',
            resource: 'InventoryItem',
            resourceId: payload.inventoryItemId,
            traceId: context.traceId || null,
            details: JSON.stringify({
              incidentType: payload.incidentType,
              writeOffAmount: payload.writeOffAmount
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record inventory incident',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
