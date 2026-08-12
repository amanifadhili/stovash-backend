import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchasesQuery } from '../impl/get-purchases.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchasesQuery)
export class GetPurchasesHandler implements IQueryHandler<GetPurchasesQuery> {
  async execute(query: GetPurchasesQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const {
        tenantId,
        shopId,
        supplierId,
        commercialStatus,
        receivingStatus,
        paymentStatus,
        accountingStatus,
        dateFrom,
        dateTo,
        page = 1,
        pageSize = 20,
      } = payload;

      const where: any = { tenantId };
      if (shopId) where.shopId = shopId;
      if (supplierId) where.supplierId = supplierId;
      if (commercialStatus) where.commercialStatus = commercialStatus;
      if (receivingStatus) where.receivingStatus = receivingStatus;
      if (paymentStatus) where.paymentStatus = paymentStatus;
      if (accountingStatus) where.accountingStatus = accountingStatus;
      if (dateFrom || dateTo) {
        where.purchaseDate = {};
        if (dateFrom) where.purchaseDate.gte = new Date(dateFrom);
        if (dateTo) where.purchaseDate.lte = new Date(dateTo);
      }

      const [purchases, total] = await Promise.all([
        prisma.purchase.findMany({
          where,
          orderBy: { purchaseDate: 'desc' },
          skip: (page - 1) * pageSize,
          take: pageSize,
          include: {
            items: { select: { id: true, productName: true, orderedQty: true, lineTotal: true } },
            receivings: { select: { id: true, receivingNumber: true, receivedAt: true } },
            payments: { select: { id: true, amount: true, paymentMethod: true, paidAt: true } },
            _count: { select: { items: true, receivings: true, payments: true, returns: true } },
          },
        }),
        prisma.purchase.count({ where }),
      ]);

      return {
        status: 'success',
        traceId,
        data: {
          purchases,
          pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch purchases',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}