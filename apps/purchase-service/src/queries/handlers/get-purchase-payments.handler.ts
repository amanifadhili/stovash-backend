import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchasePaymentsQuery } from '../impl/get-purchase-payments.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchasePaymentsQuery)
export class GetPurchasePaymentsHandler implements IQueryHandler<GetPurchasePaymentsQuery> {
  async execute(query: GetPurchasePaymentsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { purchaseId } = payload;

      const payments = await prisma.purchasePayment.findMany({
        where: { purchaseId },
        orderBy: { paidAt: 'desc' },
      });

      return { status: 'success', traceId, data: payments };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch payments',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}