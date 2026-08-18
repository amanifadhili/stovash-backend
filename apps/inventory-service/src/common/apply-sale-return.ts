export type SaleReturnItemInput = {
  inventoryItemId?: string | null;
  productId?: string | null;
  serialNumber?: string | null;
  quantity?: number;
};

export type ApplySaleReturnArgs = {
  tenantId: string;
  shopId: string;
  saleId: string;
  refundId: string;
  items: SaleReturnItemInput[];
  returnedBy?: string;
  customerId?: string | null;
};

type Tx = any;

/**
 * Physical refund restock: SOLD → RETURNED (never AVAILABLE).
 * Idempotent per refundId + inventoryItemId / product line.
 * AVAILABLE is owned by AssessReturnedItem.
 */
export async function applySaleReturnInTx(
  tx: Tx,
  args: ApplySaleReturnArgs,
): Promise<{ applied: number; skippedIdempotent: number }> {
  const { tenantId, shopId, refundId, items, returnedBy, customerId } = args;
  const actor = returnedBy || 'system';
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
          referenceId: refundId,
          referenceType: 'SALE_RETURN',
          movementType: 'IN',
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
      if (invItem.status !== 'SOLD' && invItem.status !== 'RETURNED') {
        throw Object.assign(
          new Error(`Item ${invItem.serialNumber} cannot be returned (status: ${invItem.status})`),
          { code: 'BUSINESS_RULE_VIOLATION' },
        );
      }

      await tx.inventoryItem.update({
        where: { id: invItem.id },
        data: { status: 'RETURNED', updatedBy: actor },
      });

      await tx.inventoryMovement.create({
        data: {
          tenantId,
          shopId,
          inventoryItemId: invItem.id,
          productId: invItem.productId,
          customerId: customerId || null,
          movementType: 'IN',
          quantity: qty,
          referenceId: refundId,
          referenceType: 'SALE_RETURN',
          createdBy: actor,
        },
      });
      applied += 1;
      continue;
    }

    const productId = item.productId;
    if (!productId) {
      throw Object.assign(new Error('productId is required when inventoryItemId is omitted'), {
        code: 'VALIDATION_ERROR',
      });
    }
    accessoryQtyByProduct.set(productId, (accessoryQtyByProduct.get(productId) || 0) + qty);
  }

  for (const [productId, qty] of accessoryQtyByProduct) {
    const existingMove = await tx.inventoryMovement.findFirst({
      where: {
        tenantId,
        productId,
        inventoryItemId: null,
        referenceId: refundId,
        referenceType: 'SALE_RETURN',
        movementType: 'IN',
      },
    });
    if (existingMove) {
      skippedIdempotent += 1;
      continue;
    }

    const product = await tx.product.findFirst({ where: { id: productId, tenantId } });
    if (!product) {
      throw Object.assign(new Error(`Product ${productId} not found`), { code: 'NOT_FOUND' });
    }

    await tx.inventoryMovement.create({
      data: {
        tenantId,
        shopId,
        inventoryItemId: null,
        productId,
        customerId: customerId || null,
        movementType: 'IN',
        quantity: qty,
        referenceId: refundId,
        referenceType: 'SALE_RETURN',
        createdBy: actor,
      },
    });
    applied += 1;
  }

  return { applied, skippedIdempotent };
}

export async function applySaleReturn(
  prismaClient: { $transaction: (fn: (tx: any) => Promise<any>) => Promise<any> },
  args: ApplySaleReturnArgs,
) {
  return prismaClient.$transaction(async (tx) => applySaleReturnInTx(tx, args));
}
