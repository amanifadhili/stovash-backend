import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSaleHistoryQuery } from '../impl/get-sale-history.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetSaleHistoryQuery)
export class GetSaleHistoryHandler implements IQueryHandler<GetSaleHistoryQuery> {
  async execute(query: GetSaleHistoryQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { saleId } = payload;

      const sale = await prisma.sale.findFirst({
        where: { id: saleId, tenantId: context?.tenantId, shopId: context?.shopId },
        select: { id: true },
      });

      if (!sale) {
        return { status: 'error', traceId, message: 'Sale not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const history = await prisma.saleHistory.findMany({
        where: { saleId },
        orderBy: { createdAt: 'desc' },
      });

      return { status: 'success', traceId, data: { saleId, history } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch sale history',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}