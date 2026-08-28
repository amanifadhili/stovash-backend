import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateProductStatusCommand } from '../impl/update-product-status.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

const VALID_STATUSES = ['DRAFT', 'ACTIVE', 'INACTIVE', 'DISCONTINUED', 'ARCHIVED'];

const VALID_TRANSITIONS: Record<string, string[]> = {
  DRAFT: ['ACTIVE'],
  ACTIVE: ['INACTIVE', 'DISCONTINUED'],
  INACTIVE: ['ACTIVE'],
  DISCONTINUED: ['ARCHIVED'],
  ARCHIVED: []
};

const BLOCKED_BY_ACTIVE_INVENTORY = ['DISCONTINUED', 'ARCHIVED'];

@CommandHandler(UpdateProductStatusCommand)
export class UpdateProductStatusHandler extends BaseCommandHandler<UpdateProductStatusCommand> {
  async execute(command: UpdateProductStatusCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.productId || !payload?.status) {
        return {
          status: 'error',
          traceId,
          message: 'Product ID and status are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!VALID_STATUSES.includes(payload.status)) {
        return {
          status: 'error',
          traceId,
          message: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`,
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

      const allowedTransitions = VALID_TRANSITIONS[product.status] || [];
      if (!allowedTransitions.includes(payload.status)) {
        return {
          status: 'error',
          traceId,
          message: `Cannot transition from ${product.status} to ${payload.status}`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (BLOCKED_BY_ACTIVE_INVENTORY.includes(payload.status)) {
        const activeItems = await prisma.inventoryItem.count({
          where: {
            productId: payload.productId,
            status: { in: ['CREATED', 'RECEIVED', 'AVAILABLE', 'RESERVED'] },
            deletedAt: null
          }
        });

        if (activeItems > 0) {
          return {
            status: 'error',
            traceId,
            message: `Cannot ${payload.status.toLowerCase()} product: ${activeItems} active inventory item(s) still exist`,
            errorCode: "CONFLICT"
          };
        }
      }

      const updated = await prisma.product.update({
        where: { id: payload.productId },
        data: {
          status: payload.status,
          updatedBy: context.userId || 'system',
          version: { increment: 1 }
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
        message: error.message || 'Failed to update product status',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
