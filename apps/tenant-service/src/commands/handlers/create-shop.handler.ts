import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateShopCommand } from '../impl/create-shop.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateShopCommand)
export class CreateShopHandler extends BaseCommandHandler<CreateShopCommand> {
  async execute(command: CreateShopCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID and shop name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const shop = await prisma.shop.create({
        data: {
          tenantId: payload.tenantId,
          name: payload.name,
          location: payload.address || null,
          status: payload.status || 'ACTIVE',
        }
      });

      return {
        status: 'success',
        traceId,
        data: shop
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create shop',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
