import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductsQuery } from '../impl/get-products.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

const DISPOSED_STATUSES = ['SOLD', 'RETURNED', 'DAMAGED', 'LOST', 'STOLEN', 'DISPOSED'];

@QueryHandler(GetProductsQuery)
export class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
  async execute(query: GetProductsQuery): Promise<ICommandResponse<any>> {
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

      const productWhere: any = {
        tenantId,
        deletedAt: null
      };

      if (payload.search) {
        productWhere.OR = [
          { name: { contains: payload.search, mode: 'insensitive' } },
          { sku: { contains: payload.search, mode: 'insensitive' } },
          { brand: { contains: payload.search, mode: 'insensitive' } }
        ];
      }

      const products = await prisma.product.findMany({
        where: productWhere,
        orderBy: { name: 'asc' }
      });

      const itemWhere: any = {
        tenantId,
        deletedAt: null,
        status: { notIn: DISPOSED_STATUSES }
      };
      if (shopId) itemWhere.shopId = shopId;

      const counts = await prisma.inventoryItem.groupBy({
        by: ['productId'],
        where: itemWhere,
        _count: { _all: true }
      });

      const stockByProduct = new Map(counts.map((c: { productId: string; _count: { _all: number } }) => [c.productId, c._count._all]));

      const mapped = products.map((p) => {
        const stock = stockByProduct.get(p.id) ?? 0;
        let status: string;
        if (stock === 0) status = 'Out of Stock';
        else if (stock < 10) status = 'Low Stock';
        else status = 'In Stock';
        return {
          id: p.id,
          name: p.name,
          sku: p.sku,
          description: p.description,
          brand: p.brand,
          stock,
          status
        };
      });

      return {
        status: 'success',
        traceId,
        data: {
          shopId,
          count: mapped.length,
          products: mapped
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch products',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
