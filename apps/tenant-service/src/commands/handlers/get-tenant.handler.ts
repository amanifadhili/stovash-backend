import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { GetTenantCommand } from '../impl/get-tenant.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(GetTenantCommand)
export class GetTenantHandler extends BaseCommandHandler<GetTenantCommand> {
  async execute(command: GetTenantCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const tenant = await prisma.tenant.findUnique({
        where: { id: tenantId }
      });

      if (!tenant) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      return {
        status: 'success',
        traceId,
        data: tenant
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch tenant',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
