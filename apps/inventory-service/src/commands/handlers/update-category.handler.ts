import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateCategoryCommand } from '../impl/update-category.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleRecordFilter, visibleToShopFilter } from '../../common/visibility.js';

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryHandler extends BaseCommandHandler<UpdateCategoryCommand> {
  async execute(command: UpdateCategoryCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.categoryId) {
        return {
          status: 'error',
          traceId,
          message: 'Category ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const category = await prisma.category.findFirst({
        where: visibleRecordFilter(context.tenantId, payload.categoryId, context.shopId)
      });

      if (!category) {
        return {
          status: 'error',
          traceId,
          message: 'Category not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (payload.parentId === payload.categoryId) {
        return {
          status: 'error',
          traceId,
          message: 'Category cannot be its own parent',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.parentId) {
        const parent = await prisma.category.findFirst({
          where: {
            ...visibleToShopFilter(context.tenantId, context.shopId),
            id: payload.parentId
          }
        });

        if (!parent) {
          return {
            status: 'error',
            traceId,
            message: 'Parent category not found',
            errorCode: ErrorCode.NOT_FOUND
          };
        }

        if (parent.parentId === payload.categoryId) {
          return {
            status: 'error',
            traceId,
            message: 'Cannot set parent to a direct child',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }
      }

      if (payload.name !== undefined) {
        if (payload.name.trim().length === 0) {
          return {
            status: 'error',
            traceId,
            message: 'Category name cannot be empty',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }

        const existing = await prisma.category.findFirst({
          where: {
            tenantId: context.tenantId,
            name: { equals: payload.name.trim(), mode: 'insensitive' },
            parentId: payload.parentId !== undefined ? (payload.parentId || null) : category.parentId,
            id: { not: payload.categoryId }
          }
        });

        if (existing) {
          return {
            status: 'error',
            traceId,
            message: `Category "${payload.name}" already exists in this location`,
            errorCode: "CONFLICT"
          };
        }
      }

      const updated = await prisma.category.update({
        where: { id: payload.categoryId },
        data: {
          ...(payload.shopId !== undefined && { shopId: payload.shopId || null }),
          ...(payload.name !== undefined && { name: payload.name.trim() }),
          ...(payload.parentId !== undefined && { parentId: payload.parentId || null })
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
        message: error.message || 'Failed to update category',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
