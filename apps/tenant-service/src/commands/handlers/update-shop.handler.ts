import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateShopCommand } from '../impl/update-shop.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(UpdateShopCommand)
export class UpdateShopHandler extends BaseCommandHandler<UpdateShopCommand> {
  async execute(command: UpdateShopCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = context?.tenantId;
      if (!tenantId || !payload?.shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Shop ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const existing = await prisma.shop.findFirst({
        where: { id: payload.shopId, tenantId },
      });

      if (!existing) {
        return {
          status: 'error',
          traceId,
          message: 'Shop not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      const shop = await prisma.shop.update({
        where: { id: payload.shopId },
        data: {
          ...(payload.name !== undefined ? { name: payload.name } : {}),
          ...(payload.address !== undefined ? { location: payload.address || null } : {}),
          ...(payload.status !== undefined ? { status: payload.status } : {}),
        },
      });

      return {
        status: 'success',
        traceId,
        data: {
          id: shop.id,
          tenantId: shop.tenantId,
          name: shop.name,
          address: shop.location,
          status: shop.status,
          createdAt: shop.createdAt,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update shop',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
