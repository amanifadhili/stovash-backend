import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOwnedUnsoldStockPositionQuery } from '../impl/get-owned-unsold-stock-position.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import {
  OWNED_UNSOLD_ITEM_STATUSES,
  ownedUnsoldStockPositionFromItems,
} from '../../common/owned-unsold-stock-position.js';

@QueryHandler(GetOwnedUnsoldStockPositionQuery)
export class GetOwnedUnsoldStockPositionHandler implements IQueryHandler<GetOwnedUnsoldStockPositionQuery> {
  async execute(query: GetOwnedUnsoldStockPositionQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload?.shopId || context?.shopId;

    try {
      if (!tenantId) {
        return { status: 'error', traceId, message: 'tenantId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const items = await prisma.inventoryItem.findMany({
        where: {
          tenantId,
          deletedAt: null,
          ...(shopId ? { shopId } : {}),
          status: { in: [...OWNED_UNSOLD_ITEM_STATUSES] },
          NOT: {
            product: {
              OR: [{ type: 'ACCESSORY' }, { sku: { startsWith: 'ACC-' } }],
            },
          },
        },
        select: {
          serialNumber: true,
          purchaseCost: true,
          capitalizedCost: true,
          sellingPrice: true,
          upgrades: { select: { cost: true } },
          product: {
            select: {
              sku: true,
              type: true,
              prices: { select: { sellingPrice: true }, orderBy: { validFrom: 'desc' }, take: 1 },
            },
          },
        },
      });

      return {
        status: 'success',
        traceId,
        data: ownedUnsoldStockPositionFromItems(items),
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch owned unsold stock position',
        errorCode: ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
