import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { GetTenantSubscriptionCommand } from '../impl/get-tenant-subscription.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(GetTenantSubscriptionCommand)
export class GetTenantSubscriptionHandler extends BaseCommandHandler<GetTenantSubscriptionCommand> {
  async execute(command: GetTenantSubscriptionCommand): Promise<ICommandResponse<any>> {
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

      const subscription = await prisma.subscription.findUnique({
        where: { tenantId }
      });

      if (!subscription) {
        return {
          status: 'error',
          traceId,
          message: 'No subscription found for this tenant',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      return {
        status: 'success',
        traceId,
        data: subscription
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch subscription',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
