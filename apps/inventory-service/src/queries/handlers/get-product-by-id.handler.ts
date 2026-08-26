import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductByIdQuery } from '../impl/get-product-by-id.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';
import { lastUnitCostFromSpecs } from '../../common/owned-unsold-stock-position.js';

const DISPOSED_STATUSES = ['SOLD', 'RETURNED', 'DAMAGED', 'LOST', 'STOLEN', 'DISPOSED'];

@QueryHandler(GetProductByIdQuery)
export class GetProductByIdHandler implements IQueryHandler<GetProductByIdQuery> {
  async execute(query: GetProductByIdQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.productId) {
        return {
          status: 'error',
          traceId,
          message: 'Product ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const product = await prisma.product.findFirst({
        where: {
          ...visibleToShopFilter(tenantId, context.shopId),
          id: payload.productId,
          deletedAt: null
        },
        include: {
          brand: true,
          category: true,
          prices: {
            where: { validTo: null },
            take: 1
          },
          shopBalances: context?.shopId
            ? { where: { shopId: context.shopId }, take: 1 }
            : true,
          _count: {
            select: {
              items: {
                where: {
                  deletedAt: null,
                  status: { notIn: DISPOSED_STATUSES }
                }
              }
            }
          }
        }
      });

      if (!product) {
        return {
          status: 'error',
          traceId,
          message: 'Product not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const shopQty = Array.isArray(product.shopBalances)
        ? product.shopBalances.reduce((sum, row) => sum + Number(row.quantityOnHand || 0), 0)
        : Number(product.quantityOnHand || 0);
      const lastUnitCost = lastUnitCostFromSpecs(product.specifications);

      return {
        status: 'success',
        traceId,
        data: {
          id: product.id,
          sku: product.sku,
          name: product.name,
          description: product.description,
          productType: product.productType,
          trackingMethod: product.trackingMethod,
          status: product.status,
          specifications: product.specifications,
          imageUrl: product.imageUrl || (Array.isArray(product.images) && product.images[0]) || null,
          lastUnitCost,
          brand: product.brand ? {
            id: product.brand.id,
            name: product.brand.name
          } : null,
          category: product.category ? {
            id: product.category.id,
            name: product.category.name
          } : null,
          currentPrice: product.prices[0] ? {
            id: product.prices[0].id,
            sellingPrice: product.prices[0].sellingPrice,
            validFrom: product.prices[0].validFrom
          } : null,
          stock: shopQty,
          quantityOnHand: shopQty,
          stockCount: product._count.items,
          createdAt: product.createdAt,
          createdBy: product.createdBy,
          updatedAt: product.updatedAt,
          updatedBy: product.updatedBy,
          version: product.version
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch product',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
