import { adjustShopBalance } from './shop-product-balance.js';

export const SELLABLE_ITEM_STATUSES = ['AVAILABLE', 'RESERVED', 'RENTED_IN'] as const;

export type SaleFulfillmentItem = {
  inventoryItemId?: string | null;
  productId?: string | null;
  serialNumber?: string | null;
  quantity?: number;
};

export type ApplySaleFulfillmentArgs = {
  tenantId: string;
  shopId: string;
  saleId: string;
  items: SaleFulfillmentItem[];
  fulfilledBy?: string;
  customerId?: string | null;
  /** Snapshot for Activity "With" (walk-in name or registered customer). */
  counterpartyName?: string | null;
  counterpartyPhone?: string | null;
};

type Tx = any;

/**
 * Atomically apply sale stock deduction. Idempotent per saleId + line.
 * Throws on insufficient / invalid stock (caller must not mark sale fulfilled).
 */
export async function applySaleFulfillmentInTx(
  tx: Tx,
  args: ApplySaleFulfillmentArgs,
): Promise<{ applied: number; skippedIdempotent: number }> {
  const { tenantId, shopId, saleId, items, fulfilledBy, customerId, counterpartyName, counterpartyPhone } =
    args;
  const actor = fulfilledBy || 'system';
  const partyName = (counterpartyName || '').trim() || null;
  const partyPhone = (counterpartyPhone || '').trim() || null;
  let applied = 0;
  let skippedIdempotent = 0;

  const accessoryQtyByProduct = new Map<string, number>();

  for (const item of items || []) {
    const qty = Math.max(1, Number(item.quantity) || 1);

    if (item.inventoryItemId) {
      const existingMove = await tx.inventoryMovement.findFirst({
        where: {
          tenantId,
          inventoryItemId: item.inventoryItemId,
          referenceId: saleId,
          referenceType: 'SALE',
          movementType: 'OUT',
        },
      });
      if (existingMove) {
        skippedIdempotent += 1;
        continue;
      }

      const invItem = await tx.inventoryItem.findFirst({
        where: { id: item.inventoryItemId, tenantId },
      });
      if (!invItem) {
        throw Object.assign(new Error(`Inventory item ${item.inventoryItemId} not found`), {
          code: 'NOT_FOUND',
        });
      }
      if (invItem.shopId !== shopId) {
        throw Object.assign(
          new Error(`Inventory item ${invItem.serialNumber} does not belong to this shop`),
          { code: 'UNAUTHORIZED' },
        );
      }
      if (invItem.status === 'SOLD') {
        // Already sold without our movement (legacy) — treat as conflict unless we own the sale.
        throw Object.assign(
          new Error(`Item ${invItem.serialNumber} is already SOLD`),
          { code: 'VALIDATION_ERROR' },
        );
      }
      if (!SELLABLE_ITEM_STATUSES.includes(invItem.status as any)) {
        throw Object.assign(
          new Error(
            `Item ${invItem.serialNumber} cannot be sold (status: ${invItem.status})`,
          ),
          { code: 'VALIDATION_ERROR' },
        );
      }

      const updated = await tx.inventoryItem.updateMany({
        where: {
          id: invItem.id,
          tenantId,
          shopId,
          status: { in: [...SELLABLE_ITEM_STATUSES] },
        },
        data: {
          status: 'SOLD',
          updatedBy: actor,
          version: { increment: 1 },
        },
      });
      if (updated.count !== 1) {
        throw Object.assign(
          new Error(`Could not lock item ${invItem.serialNumber} for sale (concurrent update)`),
          { code: 'VALIDATION_ERROR' },
        );
      }

      await tx.inventoryMovement.create({
        data: {
          tenantId,
          shopId,
          inventoryItemId: invItem.id,
          productId: invItem.productId || item.productId || null,
          customerId: customerId || null,
          counterpartyName: partyName,
          counterpartyPhone: partyPhone,
          movementType: 'OUT',
          quantity: qty,
          referenceId: saleId,
          referenceType: 'SALE',
          createdBy: actor,
        },
      });
      applied += 1;
      continue;
    }

    if (item.productId) {
      const serial = String(item.serialNumber || '');
      if (serial.startsWith('HOLD:')) {
        const existingHold = await tx.inventoryMovement.findFirst({
          where: {
            tenantId,
            productId: item.productId,
            referenceId: saleId,
            referenceType: 'INWARD_RENTAL_SALE',
            movementType: 'OUT',
          },
        });
        if (existingHold) {
          skippedIdempotent += 1;
          continue;
        }
        await tx.inventoryMovement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId: null,
            productId: item.productId,
            customerId: customerId || null,
            counterpartyName: partyName,
            counterpartyPhone: partyPhone,
            movementType: 'OUT',
            quantity: qty,
            referenceId: saleId,
            referenceType: 'INWARD_RENTAL_SALE',
            createdBy: actor,
          },
        });
        applied += 1;
        continue;
      }

      accessoryQtyByProduct.set(
        item.productId,
        (accessoryQtyByProduct.get(item.productId) || 0) + qty,
      );
    }
  }

  for (const [productId, qty] of accessoryQtyByProduct) {
    const existingOut = await tx.inventoryMovement.findFirst({
      where: {
        tenantId,
        productId,
        referenceId: saleId,
        referenceType: 'SALE',
        movementType: 'OUT',
      },
    });
    if (existingOut) {
      skippedIdempotent += 1;
      continue;
    }

    const product = await tx.product.findFirst({ where: { id: productId, tenantId } });
    if (!product) {
      throw Object.assign(new Error(`Product ${productId} not found`), { code: 'NOT_FOUND' });
    }

    await adjustShopBalance(tx, {
      tenantId,
      shopId,
      productId,
      delta: -qty,
      updatedBy: actor,
    });

    await tx.inventoryMovement.create({
      data: {
        tenantId,
        shopId,
        inventoryItemId: null,
        productId,
        customerId: customerId || null,
        counterpartyName: partyName,
        counterpartyPhone: partyPhone,
        movementType: 'OUT',
        quantity: qty,
        referenceId: saleId,
        referenceType: 'SALE',
        createdBy: actor,
      },
    });
    applied += 1;
  }

  return { applied, skippedIdempotent };
}

export async function applySaleFulfillment(
  prismaClient: { $transaction: (fn: (tx: any) => Promise<any>) => Promise<any> },
  args: ApplySaleFulfillmentArgs,
) {
  return prismaClient.$transaction(async (tx) => applySaleFulfillmentInTx(tx, args));
}
