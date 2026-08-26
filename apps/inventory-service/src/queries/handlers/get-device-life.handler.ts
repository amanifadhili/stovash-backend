import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDeviceLifeQuery } from '../impl/get-device-life.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { inventoryBookCost, inventoryExtrasCost } from '../../common/inventory-book-cost.js';

@QueryHandler(GetDeviceLifeQuery)
export class GetDeviceLifeHandler implements IQueryHandler<GetDeviceLifeQuery> {
  async execute(query: GetDeviceLifeQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId) {
        return { status: 'error', traceId, message: 'tenantId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (!payload?.inventoryItemId) {
        return { status: 'error', traceId, message: 'inventoryItemId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const where: any = { id: payload.inventoryItemId, tenantId, deletedAt: null };
      if (shopId) where.shopId = shopId;

      const item = await prisma.inventoryItem.findFirst({
        where,
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
          upgrades: { orderBy: { createdAt: 'asc' } },
        },
      });

      if (!item) {
        return { status: 'error', traceId, message: 'Device not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const [movements, rentals, transfers, adjustments, warranties] = await Promise.all([
        prisma.inventoryMovement.findMany({
          where: { tenantId, inventoryItemId: item.id },
          orderBy: { createdAt: 'asc' },
        }),
        prisma.rentalAgreement.findMany({
          where: { tenantId, inventoryItemId: item.id },
          orderBy: { createdAt: 'asc' },
        }),
        prisma.inventoryTransfer.findMany({
          where: { tenantId, serialNumber: item.serialNumber },
          orderBy: { createdAt: 'asc' },
        }),
        prisma.inventoryAdjustment.findMany({
          where: { tenantId, inventoryItemId: item.id },
          orderBy: { createdAt: 'asc' },
        }),
        prisma.warrantyClaim.findMany({
          where: { tenantId, serialNumber: item.serialNumber },
          orderBy: { createdAt: 'asc' },
        }),
      ]);

      const purchaseCost = Number(item.purchaseCost || 0);
      const extrasCost = inventoryExtrasCost(item);
      const totalCost = inventoryBookCost(item);
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

      return {
        status: 'success',
        traceId,
        data: {
          unit: {
            id: item.id,
            productId: item.productId,
            productName: item.name || item.product?.name || null,
            productSku: item.product?.sku || null,
            serialNumber: item.serialNumber,
            imei1: item.imei1 || null,
            imei2: item.imei2 || null,
            condition: item.condition || null,
            notes: item.notes || null,
            status: item.status,
            shopId: item.shopId,
            imageUrl: item.imageUrl || item.images?.[0] || item.product?.imageUrl || item.product?.images?.[0] || null,
            images: item.images || [],
            brand,
            category,
            sellingPrice: item.sellingPrice ?? item.product?.prices?.[0]?.sellingPrice ?? 0,
            specifications: item.specifications ?? item.product?.specifications ?? null,
            awaitingAssess: item.status === 'RETURNED',
            createdAt: item.createdAt,
          },
          costs: {
            purchaseCost,
            capitalizedCost: extrasCost,
            upgradeCost: extrasCost,
            totalCost,
            upgrades: (item.upgrades ?? []).map((u) => ({
              id: u.id,
              upgradeType: u.upgradeType,
              description: u.description,
              details: (u as { details?: unknown }).details ?? null,
              cost: Number(u.cost) || 0,
              createdAt: u.createdAt,
            })),
          },
          movements: movements.map((m) => ({
            id: m.id,
            movementType: m.movementType,
            quantity: Number(m.quantity) || 1,
            referenceId: m.referenceId,
            referenceType: m.referenceType,
            shopId: m.shopId,
            createdAt: m.createdAt,
            createdBy: m.createdBy,
          })),
          rentals,
          transfers,
          adjustments,
          warranties,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch device life',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
