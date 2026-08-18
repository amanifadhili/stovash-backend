import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ApplySaleReturnCommand } from '../impl/apply-sale-return.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { applySaleReturn } from '../../common/apply-sale-return.js';

@CommandHandler(ApplySaleReturnCommand)
export class ApplySaleReturnHandler extends BaseCommandHandler<ApplySaleReturnCommand> {
  async execute(command: ApplySaleReturnCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;
    const userId = context?.userId || payload.returnedBy || 'system';

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload?.saleId || !payload?.refundId) {
        return {
          status: 'error',
          traceId,
          message: 'saleId and refundId are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'items are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const result = await applySaleReturn(prisma, {
        tenantId,
        shopId,
        saleId: payload.saleId,
        refundId: payload.refundId,
        items: payload.items,
        returnedBy: userId,
        customerId: payload.customerId || null,
      });

      return {
        status: 'success',
        traceId,
        data: result,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to apply sale return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
