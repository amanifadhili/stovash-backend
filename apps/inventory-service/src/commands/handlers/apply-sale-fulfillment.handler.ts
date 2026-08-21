import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ApplySaleFulfillmentCommand } from '../impl/apply-sale-fulfillment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { applySaleFulfillment } from '../../common/apply-sale-fulfillment.js';

@CommandHandler(ApplySaleFulfillmentCommand)
export class ApplySaleFulfillmentHandler extends BaseCommandHandler<ApplySaleFulfillmentCommand> {
  async execute(command: ApplySaleFulfillmentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;
    const userId = context?.userId || payload.fulfilledBy || 'system';

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload?.saleId) {
        return {
          status: 'error',
          traceId,
          message: 'saleId is required',
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

      const result = await applySaleFulfillment(prisma, {
        tenantId,
        shopId,
        saleId: payload.saleId,
        items: payload.items,
        fulfilledBy: userId,
        customerId: payload.customerId || null,
        counterpartyName: payload.counterpartyName || null,
        counterpartyPhone: payload.counterpartyPhone || null,
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
        message: error.message || 'Failed to apply sale fulfillment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
