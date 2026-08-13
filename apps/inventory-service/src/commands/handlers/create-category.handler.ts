import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateCategoryCommand } from '../impl/create-category.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter, effectiveShopId, resolveSharedConfig } from '../../common/visibility.js';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler extends BaseCommandHandler<CreateCategoryCommand> {
  async execute(command: CreateCategoryCommand): Promise<ICommandResponse<any>> {
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
          message: 'Category name is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.name.length > 100) {
        return {
          status: 'error',
          traceId,
          message: 'Category name must be 100 characters or less',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const { shopId, sharedShopIds } = resolveSharedConfig(payload, context.shopId);

      if (payload.parentId) {
        const parent = await prisma.category.findFirst({
          where: {
            ...visibleToShopFilter(context.tenantId, shopId),
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
      }

      const existing = await prisma.category.findFirst({
        where: {
          tenantId: context.tenantId,
          name: { equals: payload.name.trim(), mode: 'insensitive' },
          parentId: payload.parentId || null
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

      const category = await prisma.category.create({
        data: {
          tenantId: context.tenantId,
          shopId: shopId || null,
          sharedShopIds: sharedShopIds || [],
          name: payload.name.trim(),
          parentId: payload.parentId || null,
          createdBy: context.userId || 'system'
        }
      });

      return {
        status: 'success',
        traceId,
        data: category
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create category',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
