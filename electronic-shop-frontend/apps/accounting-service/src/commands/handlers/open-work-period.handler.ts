import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { OpenWorkPeriodCommand } from '../impl/open-work-period.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(OpenWorkPeriodCommand)
export class OpenWorkPeriodHandler extends BaseCommandHandler<OpenWorkPeriodCommand> {
  async execute(command: OpenWorkPeriodCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const targetShopId = payload?.shopId || context?.shopId;

    try {
      if (!targetShopId || !context?.userId) {
        return {
          status: 'error',
          traceId,
          message: 'ShopId and userId are required to open a work period',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Check if there is already an OPEN work period for this shop
      const existingOpen = await prisma.workPeriod.findFirst({
        where: { shopId: targetShopId, status: 'OPEN' }
      });

      if (existingOpen) {
        return {
          status: 'success',
          traceId,
          message: 'Work period is already OPEN',
          data: existingOpen
        };
      }

      const newWorkPeriod = await prisma.workPeriod.create({
        data: {
          shopId: targetShopId,
          openedBy: context.userId,
          status: 'OPEN'
        }
      });

      return {
        status: 'success',
        traceId,
        data: newWorkPeriod
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to open work period',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
