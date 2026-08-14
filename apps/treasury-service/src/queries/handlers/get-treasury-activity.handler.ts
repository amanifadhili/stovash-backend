import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTreasuryActivityQuery } from '../impl/get-treasury-activity.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetTreasuryActivityQuery)
export class GetTreasuryActivityHandler implements IQueryHandler<GetTreasuryActivityQuery> {
  async execute(query: GetTreasuryActivityQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload?.shopId || context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const where = { tenantId, shopId };
      const [transfers, confirmations, reconciliations, deposits, loans] = await Promise.all([
        prisma.transfer.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          take: 50,
          include: { fromMethod: true, toMethod: true },
        }),
        prisma.physicalConfirmation.findMany({
          where,
          orderBy: { confirmedAt: 'desc' },
          take: 50,
          include: { method: true },
        }),
        prisma.reconciliation.findMany({
          where,
          orderBy: { reconciledAt: 'desc' },
          take: 50,
          include: { method: true },
        }),
        prisma.operationalDeposit.findMany({
          where,
          orderBy: { depositedAt: 'desc' },
          take: 50,
          include: { method: true },
        }),
        prisma.treasuryLoan.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          take: 50,
          include: { method: true, repayments: { orderBy: { createdAt: 'desc' } } },
        }),
      ]);

      return {
        status: 'success',
        traceId,
        data: { transfers, confirmations, reconciliations, deposits, loans },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load treasury activity',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
