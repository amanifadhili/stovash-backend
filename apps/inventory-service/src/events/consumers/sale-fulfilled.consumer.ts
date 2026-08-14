import { prisma } from '../../database/client.js';

export const saleFulfilledConsumer = async (event: any): Promise<void> => {
  const { payload, aggregateId, correlationId } = event;

  try {
    if (!payload?.items || payload.items.length === 0) {
      console.log(`SaleFulfilled event has no items: ${aggregateId}`);
      return;
    }

    const tenantId = payload.tenantId || event.tenantId;
    const shopId = payload.shopId || event.shopId;
    const saleRef = payload.saleId || aggregateId;

    const accessoryQtyByProduct = new Map<string, number>();

    for (const item of payload.items) {
      // Serialized path: transition the EXACT inventory item AVAILABLE -> SOLD.
      if (item.inventoryItemId) {
        const invItem = await prisma.inventoryItem.findFirst({
          where: { tenantId, id: item.inventoryItemId },
        });

        if (!invItem) {
          console.log(`Inventory item ${item.inventoryItemId} not found (tenant ${tenantId})`);
          continue;
        }

        if (invItem.status === 'SOLD') continue; // idempotent re-delivery

        if (invItem.status !== 'AVAILABLE' && invItem.status !== 'RESERVED' && invItem.status !== 'RENTED_IN') {
          console.log(`Item ${invItem.serialNumber} cannot be sold (status: ${invItem.status})`);
          continue;
        }

        await prisma.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: 'SOLD', updatedBy: payload.fulfilledBy || 'system' },
        });

        await prisma.inventoryMovement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: invItem.id,
            productId: null,
            customerId: payload.customerId || null,
            movementType: 'OUT',
            quantity: item.quantity || 1,
            referenceId: saleRef,
            referenceType: 'SALE',
            createdBy: payload.fulfilledBy || 'system',
          },
        });
        continue;
      }

      if (item.productId) {
        const serial = String(item.serialNumber || '');
        if (serial.startsWith('HOLD:')) {
          const qty = Number(item.quantity) || 1;
          const existingHold = await prisma.inventoryMovement.findFirst({
            where: {
              tenantId,
              productId: item.productId,
              referenceId: saleRef,
              referenceType: 'INWARD_RENTAL_SALE',
              movementType: 'OUT',
            },
          });
          if (!existingHold) {
            await prisma.inventoryMovement.create({
              data: {
                tenantId,
                shopId,
                inventoryItemId: null,
                productId: item.productId,
                customerId: payload.customerId || null,
                movementType: 'OUT',
                quantity: qty,
                referenceId: saleRef,
                referenceType: 'INWARD_RENTAL_SALE',
                createdBy: payload.fulfilledBy || 'system',
              },
            });
          }
          continue;
        }
        const qty = Number(item.quantity) || 1;
        accessoryQtyByProduct.set(item.productId, (accessoryQtyByProduct.get(item.productId) || 0) + qty);
      }
    }

    for (const [productId, qty] of accessoryQtyByProduct) {
      const product = await prisma.product.findFirst({
        where: { tenantId, id: productId },
      });
      if (!product) {
        console.log(`Product ${productId} not found (tenant ${tenantId})`);
        continue;
      }

      const existingOut = await prisma.inventoryMovement.findFirst({
        where: {
          tenantId,
          productId: product.id,
          referenceId: saleRef,
          referenceType: 'SALE',
          movementType: 'OUT',
        },
      });
      if (existingOut) continue;

      const onHand = Number(product.quantityOnHand || 0);
      if (onHand < qty) {
        console.error(
          `Insufficient accessory stock for ${product.name} (${product.id}): have ${onHand}, need ${qty} (sale ${saleRef})`,
        );
        continue;
      }

      await prisma.product.update({
        where: { id: product.id },
        data: { quantityOnHand: onHand - qty, updatedBy: payload.fulfilledBy || 'system' },
      });

      await prisma.inventoryMovement.create({
        data: {
          tenantId,
          shopId,
          inventoryItemId: null,
          productId: product.id,
          customerId: payload.customerId || null,
          movementType: 'OUT',
          quantity: qty,
          referenceId: saleRef,
          referenceType: 'SALE',
          createdBy: payload.fulfilledBy || 'system',
        },
      });
    }

    console.log(`SaleFulfilled event processed: ${aggregateId} (correlationId: ${correlationId})`);
  } catch (error) {
    console.error(`Error processing SaleFulfilled event in inventory:`, error);
    throw error;
  }
};