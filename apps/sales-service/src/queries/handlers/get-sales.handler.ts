import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSalesQuery } from '../impl/get-sales.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetSalesQuery)
export class GetSalesHandler implements IQueryHandler<GetSalesQuery> {
  async execute(query: GetSalesQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const {
        tenantId: payloadTenantId,
        shopId: payloadShopId,
        ids,
        customerId,
        sellerId,
        commercialStatus,
        fulfillmentStatus,
        paymentStatus,
        paymentStatuses,
        accountingStatus,
        dateFrom,
        dateTo,
        page = 1,
        pageSize = 20,
        sortBy = 'saleDate',
        sortDir = 'desc',
      } = payload;

      const tenantId = context?.tenantId || payloadTenantId;
      const where: any = { tenantId };
      if (context?.scope === 'OWN' && context?.role !== 'ADMIN' && context?.userId) {
        where.createdById = context.userId;
      }
      if (context?.allowedShopIds && context.allowedShopIds.length > 0) {
        where.shopId = { in: context.allowedShopIds };
      } else if (context?.shopId) {
        where.shopId = context.shopId;
      } else if (payloadShopId) {
        where.shopId = payloadShopId;
      }
      if (customerId) where.customerId = customerId;
      if (sellerId) where.sellerId = sellerId;
      if (commercialStatus) where.commercialStatus = commercialStatus;
      if (fulfillmentStatus) where.fulfillmentStatus = fulfillmentStatus;
      const statusList = Array.isArray(paymentStatuses)
        ? paymentStatuses.filter((s: unknown) => typeof s === 'string' && s.trim())
        : [];
      if (statusList.length > 0) {
        where.paymentStatus = { in: statusList };
      } else if (paymentStatus) {
        where.paymentStatus = paymentStatus;
      }
      if (accountingStatus) where.accountingStatus = accountingStatus;
      if (dateFrom || dateTo) {
        where.saleDate = {};
        if (dateFrom) where.saleDate.gte = new Date(dateFrom);
        if (dateTo) where.saleDate.lte = new Date(dateTo);
      }

      const orderField = sortBy === 'amountDue' ? 'amountDue' : 'saleDate';
      const orderDirection = sortDir === 'asc' ? 'asc' : 'desc';

      const [sales, total] = await Promise.all([
        prisma.sale.findMany({
          where,
          orderBy: { [orderField]: orderDirection },
          skip: (page - 1) * pageSize,
          take: pageSize,
          include: {
            items: { select: { id: true, productName: true, productSku: true, quantity: true, unitPrice: true, lineTotal: true, serialNumber: true, inventoryItemId: true } },
            payments: { select: { id: true, amount: true, method: true, paidAt: true } },
            _count: { select: { items: true, payments: true, returns: true, documents: true, warranties: true } },
          },
        }),
        prisma.sale.count({ where }),
      ]);

      return {
        status: 'success',
        traceId,
        data: {
          sales,
          pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch sales',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}