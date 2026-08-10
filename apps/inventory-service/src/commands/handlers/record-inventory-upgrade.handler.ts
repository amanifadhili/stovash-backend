import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordInventoryUpgradeCommand } from '../impl/record-inventory-upgrade.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(RecordInventoryUpgradeCommand)
export class RecordInventoryUpgradeHandler extends BaseCommandHandler<RecordInventoryUpgradeCommand> {
  async execute(command: RecordInventoryUpgradeCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.inventoryItemId || !payload?.upgradeType || payload?.cost === undefined) {
        return {
          status: 'error',
          traceId,
          message: 'inventoryItemId, upgradeType, and cost are required',
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

      const result = await prisma.$transaction(async (tx) => {
        // Create inventory upgrade record
        const upgrade = await tx.inventoryUpgrade.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: payload.inventoryItemId,
            upgradeType: payload.upgradeType,
            description: payload.description,
            cost: payload.cost
          }
        });

        // Update inventory item capitalized cost
        const updatedItem = await tx.inventoryItem.update({
          where: { id: payload.inventoryItemId },
          data: {
            capitalizedCost: { increment: payload.cost }
          }
        });

        return { upgrade, updatedItem };
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordInventoryUpgrade',
            resource: 'InventoryUpgrade',
            resourceId: result.upgrade.id,
            traceId: context.traceId || null,
            details: JSON.stringify({
              inventoryItemId: payload.inventoryItemId,
              upgradeType: payload.upgradeType,
              cost: payload.cost
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
        message: error.message || 'Failed to record inventory upgrade',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
