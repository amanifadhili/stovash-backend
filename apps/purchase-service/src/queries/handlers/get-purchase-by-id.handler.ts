import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseByIdQuery } from '../impl/get-purchase-by-id.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseByIdQuery)
export class GetPurchaseByIdHandler implements IQueryHandler<GetPurchaseByIdQuery> {
  async execute(query: GetPurchaseByIdQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { purchaseId } = payload;

      const purchase = await prisma.purchase.findFirst({
        where: { id: purchaseId, tenantId: context?.tenantId, shopId: context?.shopId },
        include: {
          items: {
            include: {
              receivedItems: {
                include: {
                  receiving: { select: { receivingNumber: true, receivedAt: true } },
                  costs: true,
                },
              },
              returnItems: true,
            },
          },
          receivings: { include: { receivedItems: true } },
          payments: true,
          returns: { include: { items: true } },
          documents: true,
          history: { orderBy: { createdAt: 'desc' } },
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