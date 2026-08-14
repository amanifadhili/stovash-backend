import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetActiveWorkPeriodQuery } from '../impl/get-active-work-period.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetActiveWorkPeriodQuery)
export class GetActiveWorkPeriodHandler implements IQueryHandler<GetActiveWorkPeriodQuery> {
  async execute(query: GetActiveWorkPeriodQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const shopId = payload.shopId || context?.shopId;

    try {
      if (!shopId) {
        return {
          status: 'error',
          traceId,
          message: 'shopId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const workPeriod = await prisma.workPeriod.findFirst({
        where: {
          shopId,
          status: { in: ['OPEN', 'PENDING_CLOSING', 'PENDING_RECONCILIATION'] },
        },
        orderBy: { openedAt: 'desc' },
      });

      return {
        status: 'success',
        traceId,
        data: {
          workPeriod: workPeriod || null,
          isOpen: workPeriod?.status === 'OPEN',
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load work period',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
