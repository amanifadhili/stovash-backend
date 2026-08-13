import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateBrandCommand } from '../impl/update-brand.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleRecordFilter, resolveSharedConfig } from '../../common/visibility.js';

@CommandHandler(UpdateBrandCommand)
export class UpdateBrandHandler extends BaseCommandHandler<UpdateBrandCommand> {
  async execute(command: UpdateBrandCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.brandId) {
        return {
          status: 'error',
          traceId,
          message: 'Brand ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const brand = await prisma.brand.findFirst({
        where: visibleRecordFilter(context.tenantId, payload.brandId, context.shopId)
      });

      if (!brand) {
        return {
          status: 'error',
          traceId,
          message: 'Brand not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (payload.name !== undefined) {
        if (payload.name.trim().length === 0) {
          return {
            status: 'error',
            traceId,
            message: 'Brand name cannot be empty',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }

        if (payload.name.length > 100) {
          return {
            status: 'error',
            traceId,
            message: 'Brand name must be 100 characters or less',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }

        const existing = await prisma.brand.findFirst({
          where: {
            tenantId: context.tenantId,
            name: { equals: payload.name.trim(), mode: 'insensitive' },
            id: { not: payload.brandId }
          }
        });

        if (existing) {
          return {
            status: 'error',
            traceId,
            message: `Brand "${payload.name}" already exists`,
            errorCode: "CONFLICT"
          };
        }
      }

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

      const updated = await prisma.brand.update({
        where: { id: payload.brandId },
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
        message: error.message || 'Failed to update brand',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
