import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseHistoryQuery } from '../impl/get-purchase-history.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseHistoryQuery)
export class GetPurchaseHistoryHandler implements IQueryHandler<GetPurchaseHistoryQuery> {
  async execute(query: GetPurchaseHistoryQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { purchaseId } = payload;

      const purchase = await prisma.purchase.findFirst({
        where: { id: purchaseId, tenantId: context?.tenantId, shopId: context?.shopId },
        select: { id: true },
      });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const history = await prisma.purchaseHistory.findMany({
        where: { purchaseId },
        orderBy: { createdAt: 'desc' },
      });

      return { status: 'success', traceId, data: history };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch history',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}