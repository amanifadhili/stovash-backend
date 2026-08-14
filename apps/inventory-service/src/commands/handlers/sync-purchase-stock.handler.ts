import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { SyncPurchaseStockCommand } from '../impl/sync-purchase-stock.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

/**
 * Synchronously stocks inventory for a confirmed purchase unit.
 *  - SERIALIZED    -> create a serialized InventoryItem (RECEIVED -> AVAILABLE)
 *  - NON_SERIALIZED-> increment the product-level quantityOnHand
 * Idempotent: skips when the serialized item (or the same IN movement reference)
 * already exists, so a later async PurchaseUnitConfirmed event cannot double-count.
 */
@CommandHandler(SyncPurchaseStockCommand)
export class SyncPurchaseStockHandler extends BaseCommandHandler<SyncPurchaseStockCommand> {
  async execute(command: SyncPurchaseStockCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId) {
        return { status: 'error', traceId, message: 'tenantId and shopId are required in context', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (!payload?.productId) {
        return { status: 'error', traceId, message: 'productId is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const product = await prisma.product.findFirst({ where: { id: payload.productId, tenantId } });
      if (!product) {
        return { status: 'error', traceId, message: 'Product not found for this tenant', errorCode: ErrorCode.NOT_FOUND };
      }

      const tracking = payload.productTracking || product.trackingMethod || 'SERIALIZED';

      if (tracking === 'NON_SERIALIZED') {
        // Idempotency: one IN movement per purchase reference.
        const referenceId = payload.referenceId || payload.purchaseId || null;
        const qty = Math.max(1, Number(payload.quantity) || 1);
        const imageList = Array.isArray(payload.images) ? payload.images.slice(0, 5) : [];
        if (referenceId) {
          const existing = await prisma.inventoryMovement.findFirst({
            where: { tenantId, productId: product.id, referenceId, referenceType: 'PURCHASE', movementType: 'IN' },
          });
          if (existing) {
            return { status: 'success', traceId, data: { skipped: true, reason: 'stock already recorded' } };
          }
        }

        const quantityOnHand = (product.quantityOnHand || 0) + qty;
        const updateData: any = { quantityOnHand, updatedBy: userId };
        // Persist package images when provided (first purchase photo becomes primary).
        if (imageList.length > 0) {
          updateData.images = imageList;
          updateData.imageUrl = imageList[0];
        } else if (payload.name || payload.specifications) {
          // still allow identity enrichment without images
        }
        if (payload.specifications) {
          updateData.specifications = payload.specifications;
        }

        const updated = await prisma.product.update({
          where: { id: product.id },
          data: updateData,
        });

        await prisma.inventoryMovement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: null,
            productId: product.id,
            movementType: 'IN',
            quantity: qty,
            referenceId,
            referenceType: 'PURCHASE',
            createdBy: userId,
          },
        });

        return { status: 'success', traceId, data: { product: updated, quantity: qty } };
      }

      // SERIALIZED path
      if (!payload.serialNumber) {
        return { status: 'error', traceId, message: 'serialNumber is required for serialized stock', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const existing = await prisma.inventoryItem.findFirst({ where: { tenantId, serialNumber: payload.serialNumber } });
      if (existing) {
        return { status: 'success', traceId, data: { skipped: true, reason: 'serial already in inventory' } };
      }

      const purchaseCost = (Number(payload.unitAcquisitionCost) || 0) + (Number(payload.additionalCost) || 0);
      const imageList = Array.isArray(payload.images) ? payload.images.slice(0, 5) : [];
      const invItem = await prisma.inventoryItem.create({
        data: {
          tenantId,
          shopId,
          productId: product.id,
          name: payload.name?.trim() || product.name || null,
          brandId: payload.brandId || product.brandId || null,
          categoryId: payload.categoryId || product.categoryId || null,
          sellingPrice: payload.sellingPrice != null ? Number(payload.sellingPrice) : null,
          specifications: payload.specifications ?? product.specifications ?? undefined,
          imei1: payload.imei1 || null,
          imei2: payload.imei2 || null,
          condition: payload.condition || null,
          notes: payload.notes || null,
          images: imageList,
          serialNumber: payload.serialNumber,
          purchaseCost,
          imageUrl: imageList.length > 0 ? imageList[0] : undefined,
          status: 'RECEIVED',
          createdBy: userId,
        },
      });

      const available = await prisma.inventoryItem.update({
        where: { id: invItem.id },
        data: { status: 'AVAILABLE', updatedBy: userId },
      });

      await prisma.inventoryMovement.create({
        data: {
          tenantId,
          shopId,
          inventoryItemId: invItem.id,
          movementType: 'IN',
          quantity: 1,
          referenceId: payload.referenceId || payload.purchaseId || null,
          referenceType: 'PURCHASE',
          createdBy: userId,
        },
      });

      return { status: 'success', traceId, data: { item: available } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to sync purchase stock',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
