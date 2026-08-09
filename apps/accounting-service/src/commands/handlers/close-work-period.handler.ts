import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CloseWorkPeriodCommand } from '../impl/close-work-period.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CloseWorkPeriodCommand)
export class CloseWorkPeriodHandler extends BaseCommandHandler<CloseWorkPeriodCommand> {
  async execute(command: CloseWorkPeriodCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const targetShopId = payload?.shopId || context?.shopId;
    const targetStatus = payload?.targetStatus || 'CLOSED';

    try {
      let workPeriod = null;
      if (payload?.workPeriodId) {
        workPeriod = await prisma.workPeriod.findUnique({ where: { id: payload.workPeriodId } });
      } else if (targetShopId) {
        workPeriod = await prisma.workPeriod.findFirst({
          where: { shopId: targetShopId, status: { in: ['OPEN', 'PENDING_CLOSING', 'PENDING_RECONCILIATION'] } },
          orderBy: { openedAt: 'desc' }
        });
      }

      if (!workPeriod) {
        return {
          status: 'error',
          traceId,
          message: 'No active or specified work period found to transition/close',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (workPeriod.status === 'CLOSED' && targetStatus === 'CLOSED') {
        return {
          status: 'error',
          traceId,
          message: 'Work period is already CLOSED',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
        };
      }

      const updated = await prisma.workPeriod.update({
        where: { id: workPeriod.id },
        data: {
          status: targetStatus,
          closedBy: targetStatus === 'CLOSED' ? context?.userId || workPeriod.openedBy : workPeriod.closedBy,
          closedAt: targetStatus === 'CLOSED' ? new Date() : workPeriod.closedAt
        }
      });

      return {
        status: 'success',
        traceId,
        data: updated
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to close work period',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
