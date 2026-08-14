import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetRentalsQuery } from '../impl/get-rentals.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetRentalsQuery)
export class GetRentalsHandler implements IQueryHandler<GetRentalsQuery> {
  async execute(query: GetRentalsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload?.agreementType ? undefined : context?.shopId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const where: any = { tenantId };
      if (shopId) where.shopId = shopId;
      if (payload.agreementType) where.agreementType = payload.agreementType;
      if (payload.status) where.status = payload.status;
      if (payload.search) {
        where.OR = [
          { personName: { contains: payload.search, mode: 'insensitive' } },
          { personPhone: { contains: payload.search, mode: 'insensitive' } },
          { notes: { contains: payload.search, mode: 'insensitive' } }
        ];
      }

      const rentals = await prisma.rentalAgreement.findMany({
        where,
        orderBy: { createdAt: 'desc' }
      });

      const itemIds = rentals.map((r: any) => r.inventoryItemId).filter(Boolean);
      const items = itemIds.length
        ? await prisma.inventoryItem.findMany({
            where: { tenantId, id: { in: itemIds } },
            include: {
              brand: { select: { id: true, name: true } },
              category: { select: { id: true, name: true } },
              product: { select: { id: true, name: true, sku: true, imageUrl: true, images: true } },
            },
          })
        : [];
      const itemById = new Map(items.map((i: any) => [i.id, i]));

      const data = rentals.map((r: any) => {
        const item = r.inventoryItemId ? itemById.get(r.inventoryItemId) : null;
        return {
          ...r,
          inventoryItem: item
            ? {
                id: item.id,
                productId: item.productId,
                name: item.name || item.product?.name || null,
                productName: item.name || item.product?.name || null,
                productSku: item.product?.sku || null,
                serialNumber: item.serialNumber,
                purchaseCost: Number(item.purchaseCost || 0),
                sellingPrice: item.sellingPrice,
                status: item.status,
                imageUrl: item.imageUrl || item.images?.[0] || item.product?.imageUrl || item.product?.images?.[0] || null,
                brand: item.brand,
                category: item.category,
                specifications: item.specifications,
              }
            : null,
        };
      });

      return {
        status: 'success',
        traceId,
        data
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch lendings',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
