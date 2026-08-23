import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOwnedUnsoldStockPositionQuery } from '../impl/get-owned-unsold-stock-position.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import {
  OWNED_UNSOLD_ITEM_STATUSES,
  lastUnitCostFromSpecs,
  ownedUnsoldAccessoryPositionFromRows,
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

      const [items, products, lendOutRows] = await Promise.all([
        prisma.inventoryItem.findMany({
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
        }),
        prisma.product.findMany({
          where: {
            tenantId,
            deletedAt: null,
            OR: [
              { type: 'ACCESSORY' },
              { sku: { startsWith: 'ACC-' } },
              { trackingMethod: 'NON_SERIALIZED' },
            ],
          },
          select: {
            id: true,
            specifications: true,
            quantityOnHand: true,
            prices: { select: { sellingPrice: true }, orderBy: { validFrom: 'desc' }, take: 1 },
            shopBalances: shopId
              ? { where: { shopId }, select: { quantityOnHand: true } }
              : { select: { quantityOnHand: true } },
          },
        }),
        prisma.rentalAgreement.groupBy({
          by: ['productId'],
          where: {
            tenantId,
            ...(shopId ? { shopId } : {}),
            status: 'ACTIVE',
            agreementType: 'OUTWARD_RENTAL',
            inventoryItemId: null,
            productId: { not: null },
          },
          _sum: { quantity: true },
        }),
      ]);

      const lendOutByProduct = new Map(
        lendOutRows
          .filter((row) => row.productId)
          .map((row) => [row.productId as string, Number(row._sum.quantity || 0)]),
      );

      const accessories = ownedUnsoldAccessoryPositionFromRows(
        products.map((product) => {
          const onHand = shopId
            ? Number(product.shopBalances[0]?.quantityOnHand || 0)
            : product.shopBalances.reduce((sum, row) => sum + Number(row.quantityOnHand || 0), 0);
          return {
            onHand,
            lendOutQty: lendOutByProduct.get(product.id) || 0,
            lastUnitCost: lastUnitCostFromSpecs(product.specifications),
            sellingPrice: Number(product.prices[0]?.sellingPrice || 0),
          };
        }),
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...ownedUnsoldStockPositionFromItems(items),
          accessories,
        },
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
