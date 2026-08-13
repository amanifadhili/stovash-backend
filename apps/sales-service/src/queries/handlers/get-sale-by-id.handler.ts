import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSaleByIdQuery } from '../impl/get-sale-by-id.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetSaleByIdQuery)
export class GetSaleByIdHandler implements IQueryHandler<GetSaleByIdQuery> {
  async execute(query: GetSaleByIdQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { saleId } = payload;

      const sale = await prisma.sale.findFirst({
        where: { id: saleId, tenantId: context?.tenantId, shopId: context?.shopId },
        include: {
          items: true,
          payments: { orderBy: { paidAt: 'desc' } },
          returns: { include: { items: true } },
          documents: true,
          warranties: true,
          history: { orderBy: { createdAt: 'desc' } },
        },
      });

      if (!sale) {
        return { status: 'error', traceId, message: 'Sale not found', errorCode: ErrorCode.NOT_FOUND };
      }

      return { status: 'success', traceId, data: sale };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}