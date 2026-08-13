import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { DeleteProductCommand } from '../impl/delete-product.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

const ACTIVE_INVENTORY_STATUSES = ['CREATED', 'RECEIVED', 'AVAILABLE', 'RESERVED'];

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler extends BaseCommandHandler<DeleteProductCommand> {
  async execute(command: DeleteProductCommand): Promise<ICommandResponse<any>> {
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

      const activeItems = await prisma.inventoryItem.count({
        where: {
          productId: payload.productId,
          status: { in: ACTIVE_INVENTORY_STATUSES },
          deletedAt: null
        }
      });

      if (activeItems > 0) {
        return {
          status: 'error',
          traceId,
          message: `Cannot delete product: ${activeItems} active inventory item(s) still exist`,
          errorCode: "CONFLICT"
        };
      }

      const updated = await prisma.product.update({
        where: { id: payload.productId },
        data: {
          deletedAt: new Date(),
          deletedBy: context.userId || 'system'
        }
      });

      return {
        status: 'success',
        traceId,
        data: { deleted: true, productId: updated.id }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to delete product',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
