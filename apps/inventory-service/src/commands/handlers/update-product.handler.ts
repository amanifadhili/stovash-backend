import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateProductCommand } from '../impl/update-product.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

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

      const product = await prisma.product.findFirst({
        where: {
          id: payload.productId,
          tenantId: context.tenantId,
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

      if (payload.brandId) {
        const brand = await prisma.brand.findFirst({
          where: { id: payload.brandId, tenantId: context.tenantId }
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
          where: { id: payload.categoryId, tenantId: context.tenantId }
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

      const updateData: any = {};
      if (payload.name !== undefined) updateData.name = payload.name.trim();
      if (payload.description !== undefined) updateData.description = payload.description?.trim() || null;
      if (payload.brandId !== undefined) updateData.brandId = payload.brandId || null;
      if (payload.categoryId !== undefined) updateData.categoryId = payload.categoryId || null;
      if (payload.productType !== undefined) updateData.productType = payload.productType;
      if (payload.trackingMethod !== undefined) updateData.trackingMethod = payload.trackingMethod;
      if (payload.specifications !== undefined) updateData.specifications = payload.specifications;
      updateData.updatedBy = context.userId || 'system';
      updateData.version = { increment: 1 };

      const updated = await prisma.product.update({
        where: { id: payload.productId },
        data: updateData,
        include: {
          brand: true,
          category: true
        }
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
