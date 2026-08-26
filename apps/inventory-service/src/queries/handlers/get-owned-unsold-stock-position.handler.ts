import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { GetOwnedUnsoldStockPositionQuery } from '../impl/get-owned-unsold-stock-position.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import {
  OWNED_UNSOLD_ITEM_STATUSES,
  coalesceLastUnitCost,
  lastUnitCostFromSpecs,
  ownedUnsoldAccessoryPositionFromRows,
  ownedUnsoldStockPositionFromItems,
  specsSeededWithLastUnitCost,
} from '../../common/owned-unsold-stock-position.js';

@QueryHandler(GetOwnedUnsoldStockPositionQuery)
export class GetOwnedUnsoldStockPositionHandler implements IQueryHandler<GetOwnedUnsoldStockPositionQuery> {
  constructor(@Inject('PURCHASE_SERVICE') private readonly purchaseClient: ClientProxy) {}

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

      const prepared = products.map((product) => {
        const onHand = shopId
          ? Number(product.shopBalances[0]?.quantityOnHand || 0)
          : product.shopBalances.reduce((sum, row) => sum + Number(row.quantityOnHand || 0), 0);
        const lendOutQty = lendOutByProduct.get(product.id) || 0;
        return {
          id: product.id,
          specifications: product.specifications,
          onHand,
          lendOutQty,
          ownedQty: Math.max(0, onHand) + Math.max(0, lendOutQty),
          lastUnitCost: lastUnitCostFromSpecs(product.specifications),
          sellingPrice: Number(product.prices[0]?.sellingPrice || 0),
        };
      });

      const missingCostIds = prepared
        .filter((row) => row.ownedQty > 0 && row.lastUnitCost <= 0)
        .map((row) => row.id);

      const purchaseCosts = await this.lastPurchaseUnitCosts(missingCostIds, shopId, context);

      const toPersist: Array<{ id: string; specifications: unknown; lastUnitCost: number }> = [];
      const accessories = ownedUnsoldAccessoryPositionFromRows(
        prepared.map((row) => {
          const lastUnitCost = coalesceLastUnitCost(row.lastUnitCost, purchaseCosts[row.id] || 0);
          if (
            row.ownedQty > 0 &&
            row.lastUnitCost <= 0 &&
            lastUnitCost > 0
          ) {
            toPersist.push({
              id: row.id,
              specifications: row.specifications,
              lastUnitCost,
            });
          }
          return {
            onHand: row.onHand,
            lendOutQty: row.lendOutQty,
            lastUnitCost,
            sellingPrice: row.sellingPrice,
          };
        }),
      );

      if (toPersist.length > 0) {
        await Promise.all(
          toPersist.map((row) =>
            prisma.product.update({
              where: { id: row.id },
              data: {
                specifications: specsSeededWithLastUnitCost(
                  row.specifications,
                  row.lastUnitCost,
                ) as never,
              },
            }),
          ),
        ).catch(() => undefined);
      }

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

  private async lastPurchaseUnitCosts(
    productIds: string[],
    shopId: string | undefined,
    context: unknown,
  ): Promise<Record<string, number>> {
    if (productIds.length === 0) return {};
    try {
      const res: any = await firstValueFrom(
        this.purchaseClient
          .send(
            { cmd: 'GetLastPurchaseUnitCosts' },
            { payload: { productIds, shopId }, context },
          )
          .pipe(timeout(8000)),
      );
      const costs = res?.data?.costs;
      return costs && typeof costs === 'object' ? costs : {};
    } catch {
      return {};
    }
  }
}
