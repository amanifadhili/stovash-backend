import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseItemsQuery } from '../impl/get-purchase-items.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseItemsQuery)
export class GetPurchaseItemsHandler implements IQueryHandler<GetPurchaseItemsQuery> {
  async execute(query: GetPurchaseItemsQuery): Promise<ICommandResponse<any>> {
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

      const items = await prisma.purchaseItem.findMany({
        where: { purchaseId },
        include: {
          receivedItems: { include: { receiving: { select: { receivingNumber: true, receivedAt: true } } } },
          returnItems: true,
        },
        orderBy: { createdAt: 'asc' },
      });

      return { status: 'success', traceId, data: items };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch purchase items',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}