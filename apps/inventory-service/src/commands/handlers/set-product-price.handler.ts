import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { SetProductPriceCommand } from '../impl/set-product-price.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

@CommandHandler(SetProductPriceCommand)
export class SetProductPriceHandler extends BaseCommandHandler<SetProductPriceCommand> {
  async execute(command: SetProductPriceCommand): Promise<ICommandResponse<any>> {
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

      if (payload.sellingPrice === undefined || payload.sellingPrice === null || payload.sellingPrice <= 0) {
        return {
          status: 'error',
          traceId,
          message: 'Selling price must be greater than 0',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const product = await prisma.product.findFirst({
        where: {
          ...visibleToShopFilter(context.tenantId, context.shopId),
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

      const result = await prisma.$transaction(async (tx) => {
        await tx.productPrice.updateMany({
          where: {
            productId: payload.productId,
            validTo: null
          },
          data: {
            validTo: new Date()
          }
        });

        const newPrice = await tx.productPrice.create({
          data: {
            productId: payload.productId,
            tenantId: context.tenantId,
            sellingPrice: payload.sellingPrice,
            validFrom: new Date(),
            createdBy: context.userId || 'system'
          }
        });

        return newPrice;
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
        message: error.message || 'Failed to set product price',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
