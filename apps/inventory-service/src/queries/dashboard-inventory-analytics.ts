import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const SHOP_TZ = 'Africa/Kigali';
const IN_SHOP_STATUSES = ['AVAILABLE', 'RENTED_IN'] as const;
const DEFAULT_LOW_THRESHOLD = 2;

function shopDayKey(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: SHOP_TZ }).format(d);
}

function shopTodayIso(): string {
  return shopDayKey(new Date());
}

function parseBounds(from?: string, to?: string): { from: string; to: string } | null {
  const f = String(from || '').trim();
  const t = String(to || '').trim();
  if (!ISO_DAY.test(f) || !ISO_DAY.test(t) || f > t) return null;
  const a = Date.parse(`${f}T00:00:00Z`);
  const b = Date.parse(`${t}T00:00:00Z`);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  if (Math.floor((b - a) / 86400000) + 1 > MAX_SPAN_DAYS) return null;
  return { from: f, to: t };
}

/**
 * As-of stock health + optional period movement volume.
 * IN_SHOP = AVAILABLE + RENTED_IN (matches frontend unit-status).
 */
export async function getDashboardInventoryAnalytics(
  payload: {
    from?: string;
    to?: string;
    shopId?: string;
    lowStockThreshold?: number;
  } | undefined,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = payload?.shopId || context?.shopId;

  if (!tenantId) {
    return {
      status: 'error',
      traceId,
      message: 'tenantId is required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const threshold =
    typeof payload?.lowStockThreshold === 'number' && payload.lowStockThreshold >= 0
      ? payload.lowStockThreshold
      : DEFAULT_LOW_THRESHOLD;

  const asOf = shopTodayIso();
  const unitWhere: Record<string, unknown> = {
    tenantId,
    deletedAt: null,
    status: { notIn: ['DISPOSED'] },
  };
  if (shopId) unitWhere.shopId = shopId;

  const [statusRows, inShopByProduct, products, shopBalances] = await Promise.all([
    prisma.inventoryItem.groupBy({
      by: ['status'],
      where: {
        ...unitWhere,
        NOT: { product: { type: 'ACCESSORY' } },
      },
      _count: { id: true },
    }),
    prisma.inventoryItem.groupBy({
      by: ['productId'],
      where: {
        ...unitWhere,
        status: { in: [...IN_SHOP_STATUSES] },
      },
      _count: { id: true },
    }),
    prisma.product.findMany({
      where: {
        tenantId,
        deletedAt: null,
        status: { in: ['ACTIVE', 'DRAFT'] },
      },
      select: {
        id: true,
        name: true,
        trackingMethod: true,
        quantityOnHand: true,
        type: true,
      },
      take: 2000,
    }),
    shopId
      ? prisma.shopProductBalance.findMany({
          where: { tenantId, shopId },
          select: { productId: true, quantityOnHand: true },
        })
      : Promise.resolve([] as Array<{ productId: string; quantityOnHand: number }>),
  ]);

  const statusCounts: Record<string, number> = {};
  for (const row of statusRows) {
    statusCounts[row.status] = row._count.id;
  }
  const inShopCount =
    (statusCounts['AVAILABLE'] || 0) + (statusCounts['RENTED_IN'] || 0);

  const inShopMap = new Map(
    inShopByProduct.map((r) => [r.productId, r._count.id]),
  );
  const balanceMap = new Map(
    shopBalances.map((b) => [b.productId, Number(b.quantityOnHand) || 0]),
  );

  const lowStock: Array<{
    productId: string;
    productName: string;
    trackingMethod: string;
    quantityOnHand: number;
    inShopUnits: number;
  }> = [];
  let outOfStockCount = 0;

  for (const p of products) {
    const tracking = String(p.trackingMethod || 'SERIALIZED');
    const inShopUnits = inShopMap.get(p.id) || 0;
    let qty = 0;
    if (tracking === 'NON_SERIALIZED') {
      qty = shopId
        ? (balanceMap.get(p.id) ?? (Number(p.quantityOnHand) || 0))
        : Number(p.quantityOnHand) || 0;
    } else {
      qty = inShopUnits;
    }
    if (qty <= 0) {
      outOfStockCount += 1;
      lowStock.push({
        productId: p.id,
        productName: p.name,
        trackingMethod: tracking,
        quantityOnHand: qty,
        inShopUnits,
      });
    } else if (qty <= threshold) {
      lowStock.push({
        productId: p.id,
        productName: p.name,
        trackingMethod: tracking,
        quantityOnHand: qty,
        inShopUnits,
      });
    }
  }

  lowStock.sort((a, b) => a.quantityOnHand - b.quantityOnHand);
  const lowStockTop = lowStock.slice(0, 12);

  let movement: {
    from: string;
    to: string;
    byType: Array<{ movementType: string; quantity: number; count: number }>;
  } | null = null;

  const bounds = parseBounds(payload?.from, payload?.to);
  if (bounds) {
    const fromDt = new Date(`${bounds.from}T00:00:00.000Z`);
    const toDt = new Date(`${bounds.to}T23:59:59.999Z`);
    fromDt.setUTCDate(fromDt.getUTCDate() - 1);
    toDt.setUTCDate(toDt.getUTCDate() + 1);

    const movWhere: Record<string, unknown> = {
      tenantId,
      createdAt: { gte: fromDt, lte: toDt },
    };
    if (shopId) movWhere.shopId = shopId;

    const movements = await prisma.inventoryMovement.findMany({
      where: movWhere,
      select: { movementType: true, quantity: true, createdAt: true },
    });

    const byType = new Map<string, { quantity: number; count: number }>();
    for (const m of movements) {
      const day = shopDayKey(m.createdAt);
      if (day < bounds.from || day > bounds.to) continue;
      const key = String(m.movementType || 'UNKNOWN');
      const cur = byType.get(key) || { quantity: 0, count: 0 };
      cur.quantity += Number(m.quantity) || 0;
      cur.count += 1;
      byType.set(key, cur);
    }
    movement = {
      from: bounds.from,
      to: bounds.to,
      byType: [...byType.entries()]
        .map(([movementType, v]) => ({
          movementType,
          quantity: v.quantity,
          count: v.count,
        }))
        .sort((a, b) => a.movementType.localeCompare(b.movementType)),
    };
  }

  return {
    status: 'success',
    traceId,
    data: {
      asOf,
      statusCounts,
      inShopCount,
      outOfStockCount,
      lowStockThreshold: threshold,
      lowStock: lowStockTop,
      movement,
      note: 'Position is as-of now. Movement uses period from/to when provided. Low stock threshold defaults to 2 (no reorderLevel on products).',
    },
  };
}
