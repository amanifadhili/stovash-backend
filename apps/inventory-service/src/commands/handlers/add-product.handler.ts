import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddProductCommand } from '../impl/add-product.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter, effectiveShopId } from '../../common/visibility.js';

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

      if (!payload?.sku || payload.sku.trim().length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'SKU is required',
          errorCode: ErrorCode.VALIDATION_ERROR
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

      const shopId = effectiveShopId(payload.shopId, context.shopId);

      const existingSku = await prisma.product.findFirst({
        where: {
          tenantId: context.tenantId,
          sku: payload.sku.trim()
        }
      });

      if (existingSku) {
        return {
          status: 'error',
          traceId,
          message: `Product with SKU "${payload.sku}" already exists`,
          errorCode: "CONFLICT"
        };
      }

      if (payload.brandId) {
        const brand = await prisma.brand.findFirst({
          where: { ...visibleToShopFilter(context.tenantId, shopId), id: payload.brandId }
        });
        if (!brand) {
          return {
            status: 'error',
            traceId,
            message: 'Brand not found',
            errorCode: ErrorCode.NOT_FOUND
          };
        }
      }

      if (payload.categoryId) {
        const category = await prisma.category.findFirst({
          where: { ...visibleToShopFilter(context.tenantId, shopId), id: payload.categoryId }
        });
        if (!category) {
          return {
            status: 'error',
            traceId,
            message: 'Category not found',
            errorCode: ErrorCode.NOT_FOUND
          };
        }
      }

      const product = await prisma.product.create({
        data: {
          tenantId: context.tenantId,
          shopId: shopId || null,
          sku: payload.sku.trim(),
          name: payload.name.trim(),
          description: payload.description?.trim() || null,
          brandId: payload.brandId || null,
          categoryId: payload.categoryId || null,
          productType: payload.productType || 'PHYSICAL_GOOD',
          trackingMethod: payload.trackingMethod || 'SERIALIZED',
          status: 'ACTIVE',
          specifications: payload.specifications || null,
          createdBy: context.userId || 'system'
        },
        include: {
          brand: true,
          category: true
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
