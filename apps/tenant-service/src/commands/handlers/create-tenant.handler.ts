import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateTenantCommand } from '../impl/create-tenant.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateTenantCommand)
export class CreateTenantHandler extends BaseCommandHandler<CreateTenantCommand> {
  async execute(command: CreateTenantCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant name is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const tenant = await prisma.tenant.create({
        data: {
          name: payload.name,
          status: payload.status || 'ACTIVE',
        }
      });

      return {
        status: 'success',
        traceId,
        data: tenant
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create tenant',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
