import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateProductCommand } from '../impl/update-product.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter, resolveSharedConfig } from '../../common/visibility.js';

const VALID_PRODUCT_TYPES = ['PHYSICAL_GOOD', 'SERVICE'];
const VALID_TRACKING_METHODS = ['SERIALIZED', 'NON_SERIALIZED'];

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler extends BaseCommandHandler<UpdateProductCommand> {
  async execute(command: UpdateProductCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId)',
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

      const activeShopId = context.shopId;

      const product = await prisma.product.findFirst({
        where: {
          ...visibleToShopFilter(context.tenantId, activeShopId),
          id: payload.productId,
          deletedAt: null
        }
      });

      if (!product) {
        return {
          status: 'error',
          traceId,
          message: 'Product not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (payload.productType && !VALID_PRODUCT_TYPES.includes(payload.productType)) {
        return {
          status: 'error',
          traceId,
          message: `Invalid product type. Must be one of: ${VALID_PRODUCT_TYPES.join(', ')}`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.trackingMethod && !VALID_TRACKING_METHODS.includes(payload.trackingMethod)) {
        return {
          status: 'error',
          traceId,
          message: `Invalid tracking method. Must be one of: ${VALID_TRACKING_METHODS.join(', ')}`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const currentSpecs = (product.specifications && typeof product.specifications === 'object' && !Array.isArray(product.specifications))
        ? product.specifications
        : {};
      const newDeviceType = payload.deviceType || (currentSpecs as any).deviceType || 'DEVICE';
      const isAccessory = newDeviceType === 'ACCESSORY';

      const updateData: any = {};
      if (payload.sharedWithOtherShops !== undefined) {
        const cfg = resolveSharedConfig(payload, context.shopId);
        updateData.shopId = cfg.shopId || null;
        updateData.sharedShopIds = cfg.sharedShopIds || [];
      } else if (payload.shopId !== undefined) {
        updateData.shopId = payload.shopId || null;
        if (payload.sharedShopIds !== undefined) updateData.sharedShopIds = payload.sharedShopIds;
      }
      if (payload.name !== undefined) updateData.name = payload.name.trim();
      if (payload.description !== undefined) updateData.description = payload.description?.trim() || null;
      if (isAccessory) {
        updateData.trackingMethod = 'NON_SERIALIZED';
      } else {
        if (payload.trackingMethod !== undefined) updateData.trackingMethod = payload.trackingMethod;
      }
      if (payload.productType !== undefined) updateData.productType = payload.productType;

      const rawPayloadSpecs = payload.specifications && typeof payload.specifications === 'object' && !Array.isArray(payload.specifications) ? payload.specifications : {};
      updateData.specifications = {
        ...currentSpecs,
        ...rawPayloadSpecs,
        deviceType: newDeviceType
      };

      updateData.updatedBy = context.userId || 'system';
      updateData.version = { increment: 1 };

      const updated = await prisma.product.update({
        where: { id: payload.productId },
        data: updateData
      });

      return {
        status: 'success',
        traceId,
        data: updated
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update product',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
