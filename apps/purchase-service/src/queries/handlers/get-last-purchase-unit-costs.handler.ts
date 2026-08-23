import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetLastPurchaseUnitCostsQuery } from '../impl/get-last-purchase-unit-costs.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { lastPurchaseUnitCostFromLots } from '../../common/last-purchase-unit-cost.js';

@QueryHandler(GetLastPurchaseUnitCostsQuery)
export class GetLastPurchaseUnitCostsHandler implements IQueryHandler<GetLastPurchaseUnitCostsQuery> {
  async execute(query: GetLastPurchaseUnitCostsQuery): Promise<ICommandResponse<{ costs: Record<string, number> }>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const productIds = [...new Set((payload?.productIds || []).filter(Boolean))];
    const shopId = payload?.shopId || context?.shopId;

    try {
      if (!tenantId) {
        return { status: 'error', traceId, message: 'tenantId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (productIds.length === 0) {
        return { status: 'success', traceId, data: { costs: {} } };
      }

      const shopCosts = await this.costsFor(tenantId, productIds, shopId);
      const missing = productIds.filter((id) => !(Number(shopCosts[id]) > 0));
      const tenantCosts =
        shopId && missing.length > 0 ? await this.costsFor(tenantId, missing, undefined) : {};

      return {
        status: 'success',
        traceId,
        data: { costs: { ...tenantCosts, ...shopCosts } },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch last purchase unit costs',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async costsFor(
    tenantId: string,
    productIds: string[],
    shopId?: string,
  ): Promise<Record<string, number>> {
    const items = await prisma.purchaseItem.findMany({
      where: {
        productId: { in: productIds },
        purchase: {
          tenantId,
          ...(shopId ? { shopId } : {}),
        },
        OR: [{ acceptedQty: { gt: 0 } }, { receivedQty: { gt: 0 } }],
      },
      select: {
        productId: true,
        acceptedQty: true,
        receivedQty: true,
        acquisitionCost: true,
      },
    });
    return lastPurchaseUnitCostFromLots(
      items.map((item) => ({
        productId: item.productId,
        qty: Number(item.acceptedQty) > 0 ? Number(item.acceptedQty) : Number(item.receivedQty) || 0,
        unitCost: Number(item.acquisitionCost) || 0,
      })),
    );
  }
}
