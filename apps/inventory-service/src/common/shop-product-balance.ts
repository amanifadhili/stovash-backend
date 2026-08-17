/**
 * Per-shop accessory quantity helpers.
 * Product.quantityOnHand remains a denormalized sum of all shop balances.
 */

type Tx = {
  shopProductBalance: any;
  product: any;
};

export async function getShopBalanceQty(
  tx: Tx,
  args: { tenantId: string; shopId: string; productId: string },
): Promise<number> {
  const row = await tx.shopProductBalance.findUnique({
    where: {
      tenantId_shopId_productId: {
        tenantId: args.tenantId,
        shopId: args.shopId,
        productId: args.productId,
      },
    },
  });
  return Number(row?.quantityOnHand || 0);
}

/**
 * Apply delta to shop balance (create row if needed). Throws if result would be negative.
 * Also bumps Product.quantityOnHand by the same delta (denormalized sum).
 */
export async function adjustShopBalance(
  tx: Tx,
  args: {
    tenantId: string;
    shopId: string;
    productId: string;
    delta: number;
    updatedBy?: string;
  },
): Promise<number> {
  const delta = Number(args.delta) || 0;
  if (delta === 0) {
    return getShopBalanceQty(tx, args);
  }

  const existing = await tx.shopProductBalance.findUnique({
    where: {
      tenantId_shopId_productId: {
        tenantId: args.tenantId,
        shopId: args.shopId,
        productId: args.productId,
      },
    },
  });

  const current = Number(existing?.quantityOnHand || 0);
  const next = current + delta;
  if (next < -0.0001) {
    throw Object.assign(
      new Error(
        `Insufficient shop stock for product ${args.productId}: have ${current}, need ${Math.abs(delta)}`,
      ),
      { code: 'VALIDATION_ERROR' },
    );
  }

  if (existing) {
    await tx.shopProductBalance.update({
      where: { id: existing.id },
      data: {
        quantityOnHand: next,
        version: { increment: 1 },
      },
    });
  } else {
    await tx.shopProductBalance.create({
      data: {
        tenantId: args.tenantId,
        shopId: args.shopId,
        productId: args.productId,
        quantityOnHand: next,
      },
    });
  }

  await tx.product.update({
    where: { id: args.productId },
    data: {
      quantityOnHand: { increment: delta },
      ...(args.updatedBy ? { updatedBy: args.updatedBy } : {}),
    },
  });

  return next;
}
