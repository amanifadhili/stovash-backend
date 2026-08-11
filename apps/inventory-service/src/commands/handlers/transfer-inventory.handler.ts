import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { TransferInventoryCommand } from '../impl/transfer-inventory.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(TransferInventoryCommand)
export class TransferInventoryHandler extends BaseCommandHandler<TransferInventoryCommand> {
  async execute(command: TransferInventoryCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required in context for inventory transfer',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.serialNumber || !payload?.fromShopId || !payload?.toShopId) {
        return {
          status: 'error',
          traceId,
          message: 'serialNumber, fromShopId, and toShopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.fromShopId === payload.toShopId) {
        return {
          status: 'error',
          traceId,
          message: 'fromShopId and toShopId must be different',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Find inventory item at source shop (own model only)
      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, shopId: payload.fromShopId, serialNumber: payload.serialNumber }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item ${payload.serialNumber} not found in source shop ${payload.fromShopId}`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (invItem.status !== 'AVAILABLE') {
        return {
          status: 'error',
          traceId,
          message: `Item ${payload.serialNumber} is not AVAILABLE for transfer (status: ${invItem.status})`,
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
        };
      }

      const transferNumber = `TRF-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const result = await prisma.$transaction(async (tx) => {
        // 1. Create InventoryTransfer audit record
        const transferRecord = await tx.inventoryTransfer.create({
          data: {
            tenantId,
            fromShopId: payload.fromShopId,
            toShopId: payload.toShopId,
            transferNumber,
            serialNumber: payload.serialNumber,
            status: 'COMPLETED',
            notes: payload.notes || 'Inter-branch stock transfer',
            createdById: context?.userId || 'system'
          }
        });

        // 2. Relocate InventoryItem to target shop
        const updatedInvItem = await tx.inventoryItem.update({
          where: { id: invItem.id },
          data: { shopId: payload.toShopId }
        });

        // 3. Record movements for source and target shops
        await tx.inventoryMovement.create({
          data: {
            tenantId,
            shopId: payload.fromShopId,
            inventoryItemId: invItem.id,
            movementType: 'TRANSFER_OUT',
            quantity: 1,
            referenceId: transferRecord.id,
            referenceType: 'INVENTORY_TRANSFER',
            createdBy: context?.userId || 'system'
          }
        });

        await tx.inventoryMovement.create({
          data: {
            tenantId,
            shopId: payload.toShopId,
            inventoryItemId: invItem.id,
            movementType: 'TRANSFER_IN',
            quantity: 1,
            referenceId: transferRecord.id,
            referenceType: 'INVENTORY_TRANSFER',
            createdBy: context?.userId || 'system'
          }
        });

        return { transferRecord, updatedInvItem };
      });

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to execute inventory transfer',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
