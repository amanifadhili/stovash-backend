import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddProductCommand } from '../impl/add-product.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter, effectiveShopId, resolveSharedConfig } from '../../common/visibility.js';

const VALID_PRODUCT_TYPES = ['PHYSICAL_GOOD', 'SERVICE'];
const VALID_TRACKING_METHODS = ['SERIALIZED', 'NON_SERIALIZED'];

@CommandHandler(AddProductCommand)
export class AddProductHandler extends BaseCommandHandler<AddProductCommand> {
  async execute(command: AddProductCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.name || payload.name.trim().length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Product name is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const deviceType = payload.deviceType || 'DEVICE';
      const isAccessory = deviceType === 'ACCESSORY';

      // Auto-generate SKU if missing
      let sku = payload.sku?.trim();
      if (!sku) {
        const prefix = isAccessory ? 'ACC' : 'DEV';
        const cleanName = payload.name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 5).toUpperCase() || 'ITEM';
        sku = `${prefix}-${cleanName}-${Date.now().toString(36).toUpperCase()}`;
      }

      if (payload.productType && !VALID_PRODUCT_TYPES.includes(payload.productType)) {
        return {
          status: 'error',
          traceId,
          message: `Invalid product type. Must be one of: ${VALID_PRODUCT_TYPES.join(', ')}`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const trackingMethod = isAccessory ? 'NON_SERIALIZED' : (payload.trackingMethod || 'SERIALIZED');
      if (trackingMethod && !VALID_TRACKING_METHODS.includes(trackingMethod)) {
        return {
          status: 'error',
          traceId,
          message: `Invalid tracking method. Must be one of: ${VALID_TRACKING_METHODS.join(', ')}`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const { shopId, sharedShopIds } = resolveSharedConfig(payload, context.shopId);

      const existingSku = await prisma.product.findFirst({
        where: {
          tenantId: context.tenantId,
          sku
        }
      });

      if (existingSku) {
        sku = `${sku}-${Math.floor(Math.random() * 1000)}`;
      }

      const rawSpecs = payload.specifications;
      const specObj = (rawSpecs && typeof rawSpecs === 'object' && !Array.isArray(rawSpecs)) ? rawSpecs : {};
      const specifications = { ...specObj, deviceType };

      const imageList = Array.isArray(payload.images) ? payload.images.filter(Boolean).slice(0, 5) : [];

      const product = await prisma.product.create({
        data: {
          tenantId: context.tenantId,
          shopId: shopId || null,
          sharedShopIds: sharedShopIds || [],
          type: deviceType,
          sku,
          name: payload.name.trim(),
          description: payload.description?.trim() || null,
          productType: payload.productType || 'PHYSICAL_GOOD',
          trackingMethod,
          status: 'ACTIVE',
          specifications,
          images: imageList,
          imageUrl: payload.imageUrl || imageList[0] || null,
          createdBy: context.userId || 'system'
        }
      });

      return {
        status: 'success',
        traceId,
        data: product
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add product',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
