import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetStockUnitsQuery } from '../impl/get-stock-units.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { inventoryBookCost } from '../../common/inventory-book-cost.js';

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

      if (payload.status && payload.status.length) {
        where.status = { in: payload.status };
      } else {
        // Show all live units, including damaged/lost/stolen, so those filters work.
        where.status = { notIn: ['DISPOSED'] };
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
          product: {
            include: {
              prices: { select: { sellingPrice: true, validFrom: true }, orderBy: { validFrom: 'desc' }, take: 1 },
            },
          },
          upgrades: { select: { cost: true, description: true } },
        },
      });

      const data = items.map((item) => {
        const totalCost = inventoryBookCost(item);
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
          imageUrl:
            item.imageUrl ||
            (Array.isArray(item.images) && item.images[0]) ||
            item.product?.imageUrl ||
            (Array.isArray((item.product as any)?.images) && (item.product as any).images[0]) ||
            undefined,
          images: [],
          sellingPrice: item.sellingPrice ?? item.product?.prices?.[0]?.sellingPrice ?? 0,
          specifications: item.specifications ?? item.product?.specifications ?? null,
        };
      });

      const deviceCountRows = await prisma.inventoryItem.groupBy({
        by: ['status'],
        where: {
          tenantId,
          deletedAt: null,
          ...(shopId ? { shopId } : {}),
          status: { notIn: ['DISPOSED'] },
          NOT: { product: { type: 'ACCESSORY' } },
        },
        _count: { id: true },
      });
      const deviceStatusCounts = Object.fromEntries(
        deviceCountRows.map((row) => [row.status, row._count.id]),
      );

      return {
        status: 'success',
        traceId,
        data: {
          groups: [{ id: 'all', name: 'All Items', units: data }],
          units: data,
          count: data.length,
          deviceStatusCounts,
        },
      };
    } catch (error: any) {
      return { status: 'error', traceId, message: error.message || 'Failed to fetch stock units', errorCode: error.code || ErrorCode.INTERNAL_ERROR };
    }
  }
}
