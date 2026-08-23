import { prisma } from '../../database/client.js';
import { adjustShopBalance, getShopBalanceQty } from '../../common/shop-product-balance.js';
import {
  blendLastUnitCost,
  lastUnitCostFromSpecs,
  specsRecord,
} from '../../common/owned-unsold-stock-position.js';

/**
 * Consumes PurchaseUnitConfirmed events from the purchase service. Creates the
 * matching inventory stock:
 *  - SERIALIZED products  -> a serialized InventoryItem (RECEIVED -> AVAILABLE)
 *  - NON_SERIALIZED       -> increments shop product balance
 * Skips when the serialized item already exists (idempotent re-delivery).
 */
export const purchaseUnitConfirmedConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.productId) {
      console.log(`PurchaseUnitConfirmed event missing productId: ${aggregateId}`);
      return;
    }

    const tenantId = payload.tenantId;
    const shopId = payload.shopId;
    const productId = payload.productId;
    const serialNumber = payload.serialNumber;
    const tracking = payload.productTracking || 'SERIALIZED';

    if (tracking === 'NON_SERIALIZED') {
      const product = await prisma.product.findFirst({ where: { tenantId, id: productId } });
      if (!product) {
        console.log(`Product ${productId} not found (tenant ${tenantId})`);
        return;
      }
      if (!shopId) {
        console.log(`PurchaseUnitConfirmed non-serialized missing shopId: ${aggregateId}`);
        return;
      }

      const referenceId = payload.referenceId || aggregateId || null;
      if (referenceId) {
        const existing = await prisma.inventoryMovement.findFirst({
          where: { tenantId, productId: product.id, referenceId, referenceType: 'PURCHASE', movementType: 'IN' },
        });
        if (existing) {
          console.log(`Purchase stock already recorded (idempotent skip): ${aggregateId}`);
          return;
        }
      }

      const qty = Math.max(1, Number(payload.quantity) || 1);
      const inboundCost =
        (Number(payload.unitAcquisitionCost) || 0) + (Number(payload.additionalCost) || 0);
      const oldQty = await getShopBalanceQty(prisma, { tenantId, shopId, productId: product.id });
      const lastUnitCost = blendLastUnitCost(
        oldQty,
        lastUnitCostFromSpecs(product.specifications),
        qty,
        inboundCost,
      );

      await prisma.$transaction(async (tx) => {
        await adjustShopBalance(tx, {
          tenantId,
          shopId,
          productId: product.id,
          delta: qty,
          updatedBy: payload.createdBy || 'system',
        });
        if (lastUnitCost > 0) {
          await tx.product.update({
            where: { id: product.id },
            data: {
              specifications: {
                ...specsRecord(product.specifications),
                lastUnitCost,
              },
              updatedBy: payload.createdBy || 'system',
            },
          });
        }
        await tx.inventoryMovement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: null,
            productId: product.id,
            movementType: 'IN',
            quantity: qty,
            referenceId,
            referenceType: 'PURCHASE',
            createdBy: payload.createdBy || 'system',
          },
        });
      });

      console.log(`PurchaseUnitConfirmed (non-serialized) processed: ${aggregateId}`);
      return;
    }

    // Serialized path: create the serialized stock item if not present.
    if (!serialNumber) {
      console.log(`PurchaseUnitConfirmed serialized item missing serialNumber: ${aggregateId}`);
      return;
    }

    const existing = await prisma.inventoryItem.findFirst({
      where: { tenantId, serialNumber },
    });
    if (existing) {
      console.log(`Inventory item ${serialNumber} already exists (idempotent skip): ${aggregateId}`);
      return;
    }

     const purchaseCost = (payload.unitAcquisitionCost || 0) + (payload.additionalCost || 0);
     const imageList = Array.isArray(payload.images) ? payload.images : undefined;
     const invItem = await prisma.inventoryItem.create({
       data: {
         tenantId,
         shopId,
         productId,
         serialNumber,
         purchaseCost,
         imageUrl: imageList && imageList.length > 0 ? imageList[0] : undefined,
         status: 'RECEIVED',
         createdBy: payload.createdBy || 'system',
       },
     });

    await prisma.inventoryItem.update({
      where: { id: invItem.id },
      data: { status: 'AVAILABLE', updatedBy: payload.createdBy || 'system' },
    });

    await prisma.inventoryMovement.create({
      data: {
        tenantId,
        shopId,
        inventoryItemId: invItem.id,
        movementType: 'IN',
        quantity: 1,
        referenceId: payload.purchaseId || aggregateId,
        referenceType: 'PURCHASE',
        createdBy: payload.createdBy || 'system',
      },
    });

    console.log(`PurchaseUnitConfirmed (serialized) processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing PurchaseUnitConfirmed event in inventory:`, error);
    throw error;
  }
};