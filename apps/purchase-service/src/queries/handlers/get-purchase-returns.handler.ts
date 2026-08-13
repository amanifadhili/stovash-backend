import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseReturnsQuery } from '../impl/get-purchase-returns.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseReturnsQuery)
export class GetPurchaseReturnsHandler implements IQueryHandler<GetPurchaseReturnsQuery> {
  async execute(query: GetPurchaseReturnsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { purchaseId, status, page = 1, pageSize = 20 } = payload;

      const where: any = { tenantId: context?.tenantId };
      if (context?.shopId) where.shopId = context?.shopId;
      if (purchaseId) where.purchaseId = purchaseId;
      if (status) where.status = status;

      const [returns, total] = await Promise.all([
        prisma.purchaseReturn.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          skip: (page - 1) * pageSize,
          take: pageSize,
          include: { items: true, purchase: { select: { purchaseNumber: true } } },
        }),
        prisma.purchaseReturn.count({ where }),
      ]);

      return {
        status: 'success',
        traceId,
        data: { returns, pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) } },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch returns',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}