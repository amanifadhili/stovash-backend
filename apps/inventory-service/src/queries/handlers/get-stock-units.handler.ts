import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetStockUnitsQuery } from '../impl/get-stock-units.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetStockUnitsQuery)
export class GetStockUnitsHandler implements IQueryHandler<GetStockUnitsQuery> {
  async execute(query: GetStockUnitsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;

    try {
      if (!tenantId) {
        return { status: 'error', traceId, message: 'tenantId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const where: any = {
        tenantId,
        deletedAt: null,
      };
      if (shopId) where.shopId = shopId;
      if (payload.productId) where.productId = payload.productId;
      if (payload.categoryId) where.product = { ...where.product, categoryId: payload.categoryId };
      if (payload.brandId) where.product = { ...where.product, brandId: payload.brandId };
      if (payload.status && payload.status.length) {
        where.status = { in: payload.status };
      } else {
        // On the stock/units view, show everything except disposed/lost/stolen by default.
        where.status = { notIn: ['DISPOSED', 'LOST', 'STOLEN'] };
      }
      if (payload.search) {
        where.OR = [
          { serialNumber: { contains: payload.search, mode: 'insensitive' } },
          { imei1: { contains: payload.search, mode: 'insensitive' } },
          { product: { name: { contains: payload.search, mode: 'insensitive' } } },
          { product: { sku: { contains: payload.search, mode: 'insensitive' } } },
        ];
      }

      const items = await prisma.inventoryItem.findMany({
        where,
        orderBy: [{ product: { name: 'asc' } }, { createdAt: 'desc' }],
        take: payload.limit && payload.limit > 0 ? payload.limit : undefined,
        include: {
          product: {
            include: {
              brand: { select: { id: true, name: true } },
              category: { select: { id: true, name: true } },
              prices: { select: { sellingPrice: true, validFrom: true }, orderBy: { validFrom: 'desc' }, take: 1 },
            },
          },
          upgrades: { select: { cost: true, description: true } },
        },
      });

      const data = items.map((item) => {
        const capitalized = (item.upgrades ?? []).reduce((s, u) => s + (Number(u.cost) || 0), 0);
        const totalCost = Number(item.purchaseCost || 0) + Number(item.capitalizedCost || 0) + capitalized;
        return {
          id: item.id,
          productId: item.productId,
          productName: item.product?.name || null,
          productSku: item.product?.sku || null,
          trackingMethod: item.product?.trackingMethod || 'SERIALIZED',
          serialNumber: item.serialNumber,
          purchaseCost: Number(item.purchaseCost || 0),
          totalCost,
          status: item.status,
          imageUrl: item.imageUrl || undefined,
          brand: item.product?.brand ? { id: item.product.brand.id, name: item.product.brand.name } : null,
          category: item.product?.category ? { id: item.product.category.id, name: item.product.category.name } : null,
          sellingPrice: item.product?.prices?.[0]?.sellingPrice || 0,
        };
      });

      // Group by category (preserving category order) for easy rendering.
      const groups = new Map<string, { id: string; name: string; units: any[] }>();
      for (const unit of data) {
        const cat = unit.category || { id: 'uncategorized', name: 'Uncategorized' };
        const key = cat.id;
        if (!groups.has(key)) groups.set(key, { id: cat.id, name: cat.name, units: [] });
        groups.get(key)!.units.push(unit);
      }

      return {
        status: 'success',
        traceId,
        data: { groups: Array.from(groups.values()), units: data, count: data.length },
      };
    } catch (error: any) {
      return { status: 'error', traceId, message: error.message || 'Failed to fetch stock units', errorCode: error.code || ErrorCode.INTERNAL_ERROR };
    }
  }
}
