import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddInventoryItemCommand } from '../impl/add-inventory-item.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AddInventoryItemCommand)
export class AddInventoryItemHandler extends BaseCommandHandler<AddInventoryItemCommand> {
  async execute(command: AddInventoryItemCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId || !context?.shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId / shopId)',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (!payload?.productId) {
        return {
          status: 'error',
          traceId,
          message: 'Product ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.serialNumber) {
        return {
          status: 'error',
          traceId,
          message: 'Serial number is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const product = await prisma.product.findFirst({
        where: {
          id: payload.productId,
          tenantId: context.tenantId,
          deletedAt: null,
          status: 'ACTIVE'
        }
      });

      if (!product) {
        return {
          status: 'error',
          traceId,
          message: 'Product not found or not active',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (product.trackingMethod === 'NON_SERIALIZED') {
        return {
          status: 'error',
          traceId,
          message: 'This product is non-serialized and cannot have individual serial numbers',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const existingItem = await prisma.inventoryItem.findFirst({
        where: { tenantId: context.tenantId, serialNumber: payload.serialNumber }
      });

      if (existingItem) {
        return {
          status: 'error',
          traceId,
          message: `Serial number '${payload.serialNumber}' already exists`,
          errorCode: "CONFLICT"
        };
      }

      const item = await prisma.inventoryItem.create({
        data: {
          tenantId: context.tenantId,
          shopId: context.shopId,
          productId: payload.productId,
          serialNumber: payload.serialNumber,
          purchaseCost: Number(payload.purchaseCost) || 0,
          status: 'AVAILABLE',
          createdBy: context.userId || 'system'
        }
      });

      return {
        status: 'success',
        traceId,
        data: item
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add inventory item',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
