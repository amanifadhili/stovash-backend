import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseByNumberQuery } from '../impl/get-purchase-by-number.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseByNumberQuery)
export class GetPurchaseByNumberHandler implements IQueryHandler<GetPurchaseByNumberQuery> {
  async execute(query: GetPurchaseByNumberQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { purchaseNumber } = payload;

      const purchase = await prisma.purchase.findUnique({
        where: { purchaseNumber },
        include: {
          items: true,
          receivings: true,
          payments: true,
          returns: true,
        },
      });

      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }

      return { status: 'success', traceId, data: purchase };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}