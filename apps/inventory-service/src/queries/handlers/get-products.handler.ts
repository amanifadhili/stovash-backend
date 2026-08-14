import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductsQuery } from '../impl/get-products.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

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

      const visibility = visibleToShopFilter(tenantId, shopId);

      if (payload.search) {
        productWhere.OR = [
          { name: { contains: payload.search, mode: 'insensitive' } },
          { sku: { contains: payload.search, mode: 'insensitive' } },
          { description: { contains: payload.search, mode: 'insensitive' } }
        ];
      }

      if (payload.brandId) {
        productWhere.brandId = payload.brandId;
      }

      if (payload.categoryId) {
        productWhere.categoryId = payload.categoryId;
      }

      if (payload.status) {
        productWhere.status = payload.status;
      }

      if (payload.productType) {
        productWhere.productType = payload.productType;
      }

      productWhere.OR = [...(visibility.OR || []), ...(productWhere.OR || [])];
      if (visibility.shopId !== undefined) {
        productWhere.shopId = visibility.shopId;
      }

      const products = await prisma.product.findMany({
        where: productWhere,
        include: {
          brand: true,
          category: true,
          prices: {
            where: { validTo: null },
            take: 1
          }
        },
        orderBy: { name: 'asc' }
      });

      const itemWhere: any = {
        tenantId,
        deletedAt: null,
        status: { notIn: DISPOSED_STATUSES }
      };
      if (shopId) itemWhere.shopId = shopId;

      const productIds = products.map((p: any) => p.id);
      if (productIds.length > 0) {
        const counts = await prisma.inventoryItem.groupBy({
          by: ['productId'],
          where: { ...itemWhere, productId: { in: productIds } },
          _count: { _all: true }
        });

        const stockByProduct = new Map(counts.map((c: any) => [c.productId, c._count._all]));

        const mapped = products.map((p: any) => {
          const isNonSerialized = (p.trackingMethod || '') === 'NON_SERIALIZED';
          const stock = isNonSerialized
            ? Number(p.quantityOnHand || 0)
            : (stockByProduct.get(p.id) ?? 0);
          let stockStatus: string;
          if (stock === 0) stockStatus = 'Out of Stock';
          else if (stock < 10) stockStatus = 'Low Stock';
          else stockStatus = 'In Stock';

          return {
            id: p.id,
            sku: p.sku,
            name: p.name,
            description: p.description,
            deviceType: p.specifications?.deviceType || 'DEVICE',
            productType: p.productType,
            trackingMethod: p.trackingMethod,
            status: p.status,
            specifications: p.specifications,
            imageUrl: p.imageUrl || (Array.isArray(p.images) && p.images[0]) || null,
            images: Array.isArray(p.images) ? p.images : [],
            brand: p.brand ? { id: p.brand.id, name: p.brand.name } : null,
            category: p.category ? { id: p.category.id, name: p.category.name } : null,
            currentPrice: p.prices[0] ? {
              sellingPrice: p.prices[0].sellingPrice,
              validFrom: p.prices[0].validFrom
            } : null,
            stock,
            quantityOnHand: Number(p.quantityOnHand || 0),
            stockStatus,
            shopId: p.shopId,
            sharedShopIds: p.sharedShopIds ?? [],
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
            version: p.version
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
      }

      const mapped = products.map((p: any) => {
        const isNonSerialized = (p.trackingMethod || '') === 'NON_SERIALIZED';
        const stock = isNonSerialized ? Number(p.quantityOnHand || 0) : 0;
        return {
          id: p.id,
          sku: p.sku,
          name: p.name,
          description: p.description,
          deviceType: p.specifications?.deviceType || 'DEVICE',
          productType: p.productType,
          trackingMethod: p.trackingMethod,
          status: p.status,
          specifications: p.specifications,
          imageUrl: p.imageUrl || (Array.isArray(p.images) && p.images[0]) || null,
          images: Array.isArray(p.images) ? p.images : [],
          brand: p.brand ? { id: p.brand.id, name: p.brand.name } : null,
          category: p.category ? { id: p.category.id, name: p.category.name } : null,
          currentPrice: p.prices[0] ? {
            sellingPrice: p.prices[0].sellingPrice,
            validFrom: p.prices[0].validFrom
          } : null,
          stock,
          quantityOnHand: Number(p.quantityOnHand || 0),
          stockStatus: stock === 0 ? 'Out of Stock' : stock < 10 ? 'Low Stock' : 'In Stock',
          shopId: p.shopId,
          sharedShopIds: p.sharedShopIds ?? [],
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
          version: p.version
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
