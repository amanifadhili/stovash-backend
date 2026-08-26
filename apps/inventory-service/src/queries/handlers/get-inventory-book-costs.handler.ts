import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetInventoryBookCostsQuery } from '../impl/get-inventory-book-costs.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { inventoryBookCost, inventoryExtrasCost } from '../../common/inventory-book-cost.js';

@QueryHandler(GetInventoryBookCostsQuery)
export class GetInventoryBookCostsHandler implements IQueryHandler<GetInventoryBookCostsQuery> {
  async execute(query: GetInventoryBookCostsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const ids = [...new Set((payload?.inventoryItemIds ?? []).map((id) => String(id || '').trim()).filter(Boolean))];
      if (ids.length === 0) {
        return { status: 'success', traceId, data: { items: [] } };
      }

      const items = await prisma.inventoryItem.findMany({
        where: { tenantId, id: { in: ids }, deletedAt: null },
        select: {
          id: true,
          purchaseCost: true,
          capitalizedCost: true,
          upgrades: { select: { cost: true } },
        },
      });

      return {
        status: 'success',
        traceId,
        data: {
          items: items.map((item) => ({
            id: item.id,
            purchaseCost: Number(item.purchaseCost) || 0,
            capitalizedCost: inventoryExtrasCost(item),
            bookCost: inventoryBookCost(item),
          })),
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch inventory book costs',
        errorCode: ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
