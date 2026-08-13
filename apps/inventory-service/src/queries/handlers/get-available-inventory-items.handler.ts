import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAvailableInventoryItemsQuery } from '../impl/get-available-inventory-items.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetAvailableInventoryItemsQuery)
export class GetAvailableInventoryItemsHandler implements IQueryHandler<GetAvailableInventoryItemsQuery> {
  async execute(query: GetAvailableInventoryItemsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const where: any = {
        tenantId,
        status: 'AVAILABLE',
        deletedAt: null,
      };

      if (payload.productId) {
        where.productId = payload.productId;
      }
      if (shopId) {
        where.shopId = shopId;
      }
      if (payload.search) {
        where.OR = [
          { serialNumber: { contains: payload.search, mode: 'insensitive' } },
          { product: { name: { contains: payload.search, mode: 'insensitive' } } },
        ];
      }

      const items = await prisma.inventoryItem.findMany({
        where,
        orderBy: { createdAt: 'asc' },
        take: payload.limit && payload.limit > 0 ? payload.limit : undefined,
        include: {
          product: {
            select: { id: true, name: true, sku: true, trackingMethod: true },
          },
          upgrades: true,
        },
      });

      const data = items.map((item) => {
        const capitalizedCost = (item.upgrades ?? []).reduce((s, u) => s + (Number(u.cost) || 0), 0);
        return {
          id: item.id,
          productId: item.productId,
          productName: item.product?.name || null,
          productSku: item.product?.sku || null,
          serialNumber: item.serialNumber,
          purchaseCost: item.purchaseCost,
          capitalizedCost: item.capitalizedCost + capitalizedCost,
          totalCost: item.purchaseCost + item.capitalizedCost + capitalizedCost,
          status: item.status,
        };
      });

      return {
        status: 'success',
        traceId,
        data,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch available inventory items',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}