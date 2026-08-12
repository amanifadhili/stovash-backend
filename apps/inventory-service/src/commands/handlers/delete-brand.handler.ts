import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { DeleteBrandCommand } from '../impl/delete-brand.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(DeleteBrandCommand)
export class DeleteBrandHandler extends BaseCommandHandler<DeleteBrandCommand> {
  async execute(command: DeleteBrandCommand): Promise<ICommandResponse<any>> {
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
        where: {
          id: payload.brandId,
          tenantId: context.tenantId
        }
      });

      if (!brand) {
        return {
          status: 'error',
          traceId,
          message: 'Brand not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const productCount = await prisma.product.count({
        where: {
          brandId: payload.brandId,
          deletedAt: null
        }
      });

      if (productCount > 0) {
        return {
          status: 'error',
          traceId,
          message: `Cannot delete brand: ${productCount} product(s) still reference it`,
          errorCode: "CONFLICT"
        };
      }

      await prisma.brand.delete({
        where: { id: payload.brandId }
      });

      return {
        status: 'success',
        traceId,
        data: { deleted: true, brandId: payload.brandId }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to delete brand',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
