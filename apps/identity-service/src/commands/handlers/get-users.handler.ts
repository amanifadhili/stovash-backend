import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { GetUsersCommand } from '../impl/get-users.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(GetUsersCommand)
export class GetUsersHandler extends BaseCommandHandler<GetUsersCommand> {
  async execute(command: GetUsersCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const users = await prisma.user.findMany({
        where: { tenantId },
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          tenantId: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          status: true,
          createdAt: true,
        },
      });

      return {
        status: 'success',
        traceId,
        data: users,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch users',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
