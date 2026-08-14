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
      if (payload.categoryId) where.OR = [
        ...(where.OR || []),
        { categoryId: payload.categoryId },
        { product: { categoryId: payload.categoryId } },
      ];
      if (payload.brandId) {
        where.AND = [
          ...(where.AND || []),
          { OR: [{ brandId: payload.brandId }, { product: { brandId: payload.brandId } }] },
        ];
      }
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
          { name: { contains: payload.search, mode: 'insensitive' } },
          { product: { name: { contains: payload.search, mode: 'insensitive' } } },
          { product: { sku: { contains: payload.search, mode: 'insensitive' } } },
        ];
      }

      const items = await prisma.inventoryItem.findMany({
        where,
        orderBy: [{ createdAt: 'desc' }],
        take: payload.limit && payload.limit > 0 ? payload.limit : undefined,
        include: {
          brand: { select: { id: true, name: true } },
          category: { select: { id: true, name: true } },
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
        const brand = item.brand
          ? { id: item.brand.id, name: item.brand.name }
          : item.product?.brand
            ? { id: item.product.brand.id, name: item.product.brand.name }
            : null;
        const category = item.category
          ? { id: item.category.id, name: item.category.name }
          : item.product?.category
            ? { id: item.product.category.id, name: item.product.category.name }
            : null;
        const productSpecs = (item.product?.specifications && typeof item.product.specifications === 'object')
          ? (item.product.specifications as Record<string, unknown>)
          : null;
        const sku = item.product?.sku || '';
        const deviceType =
          (item.specifications as any)?.deviceType ||
          productSpecs?.deviceType ||
          (sku.startsWith('ACC-') ? 'ACCESSORY' : null) ||
          ((item.product as any)?.type === 'ACCESSORY' ? 'ACCESSORY' : null) ||
          'DEVICE';

        return {
          id: item.id,
          productId: item.productId,
          productName: item.name || item.product?.name || null,
          productSku: item.product?.sku || null,
          deviceType,
          trackingMethod: item.product?.trackingMethod || 'SERIALIZED',
          serialNumber: item.serialNumber,
          imei1: item.imei1 || null,
          imei2: item.imei2 || null,
          condition: item.condition || null,
          notes: item.notes || null,
          purchaseCost: Number(item.purchaseCost || 0),
          totalCost,
          status: item.status,
          imageUrl: item.imageUrl || (Array.isArray(item.images) && item.images[0]) || undefined,
          images: [],
          brand,
          category,
          sellingPrice: item.sellingPrice ?? item.product?.prices?.[0]?.sellingPrice ?? 0,
          specifications: item.specifications ?? item.product?.specifications ?? null,
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
