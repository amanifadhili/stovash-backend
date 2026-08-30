import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductBySkuQuery } from '../impl/get-product-by-sku.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

const DISPOSED_STATUSES = ['SOLD', 'RETURNED', 'DAMAGED', 'LOST', 'STOLEN', 'DISPOSED'];

@QueryHandler(GetProductBySkuQuery)
export class GetProductBySkuHandler implements IQueryHandler<GetProductBySkuQuery> {
  async execute(query: GetProductBySkuQuery): Promise<ICommandResponse<any>> {
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

      if (!payload?.sku) {
        return {
          status: 'error',
          traceId,
          message: 'SKU is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const product = await prisma.product.findFirst({
        where: {
          ...visibleToShopFilter(tenantId, context.shopId),
          sku: payload.sku,
          deletedAt: null
        },
        include: {
          prices: {
            where: { validTo: null },
            take: 1
          },
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
          currentPrice: product.prices[0] ? {
            id: product.prices[0].id,
            sellingPrice: product.prices[0].sellingPrice,
            validFrom: product.prices[0].validFrom
          } : null,
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
