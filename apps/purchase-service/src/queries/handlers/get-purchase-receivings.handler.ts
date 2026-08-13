import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseReceivingsQuery } from '../impl/get-purchase-receivings.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseReceivingsQuery)
export class GetPurchaseReceivingsHandler implements IQueryHandler<GetPurchaseReceivingsQuery> {
  async execute(query: GetPurchaseReceivingsQuery): Promise<ICommandResponse<any>> {
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

      const receivings = await prisma.purchaseReceiving.findMany({
        where: { purchaseId },
        include: { receivedItems: true },
        orderBy: { receivedAt: 'desc' },
      });

      return { status: 'success', traceId, data: receivings };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch receivings',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}