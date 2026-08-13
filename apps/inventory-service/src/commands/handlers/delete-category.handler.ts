import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { DeleteCategoryCommand } from '../impl/delete-category.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleRecordFilter } from '../../common/visibility.js';

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryHandler extends BaseCommandHandler<DeleteCategoryCommand> {
  async execute(command: DeleteCategoryCommand): Promise<ICommandResponse<any>> {
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

      const childCount = await prisma.category.count({
        where: {
          parentId: payload.categoryId
        }
      });

      if (childCount > 0) {
        return {
          status: 'error',
          traceId,
          message: `Cannot delete category: ${childCount} subcategory(ies) still reference it`,
          errorCode: "CONFLICT"
        };
      }

      const productCount = await prisma.product.count({
        where: {
          categoryId: payload.categoryId,
          deletedAt: null
        }
      });

      if (productCount > 0) {
        return {
          status: 'error',
          traceId,
          message: `Cannot delete category: ${productCount} product(s) still reference it`,
          errorCode: "CONFLICT"
        };
      }

      await prisma.category.delete({
        where: { id: payload.categoryId }
      });

      return {
        status: 'success',
        traceId,
        data: { deleted: true, categoryId: payload.categoryId }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to delete category',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
