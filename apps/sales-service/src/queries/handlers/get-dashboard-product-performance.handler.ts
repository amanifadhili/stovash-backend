import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { ErrorCode, ICommandResponse } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { GetDashboardProductPerformanceQuery } from '../impl/get-dashboard-product-performance.query.js';
import {
  francsToMinorInt,
  isReturnedLine,
  soldFrancs,
} from '../sold-unit-profit.js';

const SHOP_TZ = 'Africa/Kigali';
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const DEFAULT_LIMIT = 8;

function shopDayKey(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: SHOP_TZ }).format(d);
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

type Agg = {
  productId: string;
  productName: string;
  units: number;
  revenueMinor: bigint;
  costMinor: bigint;
  grossProfitMinor: bigint;
  brandId: string;
  brandName: string;
  categoryId: string;
  categoryName: string;
};

@QueryHandler(GetDashboardProductPerformanceQuery)
export class GetDashboardProductPerformanceHandler
  implements IQueryHandler<GetDashboardProductPerformanceQuery>
{
  constructor(
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
  ) {}

  async execute(
    query: GetDashboardProductPerformanceQuery,
  ): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId || payload?.shopId;

    if (!tenantId) {
      return {
        status: 'error',
        traceId,
        message: 'tenantId is required',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }

    const bounds = parseBounds(payload?.from, payload?.to);
    if (!bounds) {
      return {
        status: 'error',
        traceId,
        message: 'Valid from/to (YYYY-MM-DD) required; max 366 days',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }

    const limit =
      typeof payload?.limit === 'number' && payload.limit > 0
        ? Math.min(payload.limit, 25)
        : DEFAULT_LIMIT;

    try {
      const fromDt = new Date(`${bounds.from}T00:00:00.000Z`);
      const toDt = new Date(`${bounds.to}T23:59:59.999Z`);
      fromDt.setUTCDate(fromDt.getUTCDate() - 1);
      toDt.setUTCDate(toDt.getUTCDate() + 1);

      const saleWhere: Record<string, unknown> = {
        tenantId,
        commercialStatus: 'CONFIRMED',
        saleDate: { gte: fromDt, lte: toDt },
      };
      if (shopId) saleWhere.shopId = shopId;

      const [items, productsRes] = await Promise.all([
        prisma.saleItem.findMany({
          where: { sale: saleWhere },
          select: {
            productId: true,
            productName: true,
            productSku: true,
            quantity: true,
            unitCost: true,
            unitPrice: true,
            lineTotal: true,
            total: true,
            additionalCost: true,
            sale: { select: { saleDate: true } },
            returnItems: {
              include: { saleReturn: { select: { status: true } } },
            },
          },
        }),
        firstValueFrom(
          this.inventoryClient
            .send({ cmd: 'GetProducts' }, { payload: {}, context })
            .pipe(timeout(15000)),
        ).catch(() => null),
      ]);

      const productMeta = new Map<
        string,
        { brandId: string; brandName: string; categoryId: string; categoryName: string; name: string }
      >();
      const productList =
        productsRes?.status === 'success'
          ? (productsRes.data?.products ?? productsRes.data ?? [])
          : [];
      for (const p of productList as any[]) {
        if (!p?.id) continue;
        productMeta.set(String(p.id), {
          name: String(p.name || ''),
          brandId: p.brandId || p.brand?.id || '—',
          brandName: p.brand?.name || p.brandName || '—',
          categoryId: p.categoryId || p.category?.id || '—',
          categoryName: p.category?.name || p.categoryName || '—',
        });
      }

      const byProduct = new Map<string, Agg>();

      for (const item of items) {
        const day = shopDayKey(new Date(item.sale.saleDate));
        if (day < bounds.from || day > bounds.to) continue;
        if (isReturnedLine(item.returnItems)) continue;

        const productId = String(item.productId || 'unknown');
        const meta = productMeta.get(productId);
        const qty = Number(item.quantity) || 0;
        const revenue = francsToMinorInt(soldFrancs(item));
        const cost =
          francsToMinorInt((Number(item.unitCost) || 0) * qty) +
          francsToMinorInt(item.additionalCost);
        const gp = revenue - cost;

        const cur = byProduct.get(productId) || {
          productId,
          productName:
            item.productName ||
            item.productSku ||
            meta?.name ||
            productId,
          units: 0,
          revenueMinor: 0n,
          costMinor: 0n,
          grossProfitMinor: 0n,
          brandId: meta?.brandId || '—',
          brandName: meta?.brandName || '—',
          categoryId: meta?.categoryId || '—',
          categoryName: meta?.categoryName || '—',
        };
        cur.units += qty;
        cur.revenueMinor += revenue;
        cur.costMinor += cost;
        cur.grossProfitMinor += gp;
        byProduct.set(productId, cur);
      }

      const productRows = [...byProduct.values()].sort((a, b) =>
        Number(b.revenueMinor - a.revenueMinor),
      );

      const topProducts = productRows.slice(0, limit).map((r) => ({
        productId: r.productId,
        productName: r.productName,
        units: r.units,
        revenueMinor: r.revenueMinor.toString(),
        grossProfitMinor: r.grossProfitMinor.toString(),
      }));

      const rollup = (
        keyFn: (r: Agg) => string,
        nameFn: (r: Agg) => string,
        idKey: 'categoryId' | 'brandId',
        nameKey: 'categoryName' | 'brandName',
      ) => {
        const map = new Map<
          string,
          { id: string; name: string; units: number; revenueMinor: bigint; grossProfitMinor: bigint }
        >();
        for (const r of productRows) {
          const id = keyFn(r);
          const cur = map.get(id) || {
            id,
            name: nameFn(r),
            units: 0,
            revenueMinor: 0n,
            grossProfitMinor: 0n,
          };
          cur.units += r.units;
          cur.revenueMinor += r.revenueMinor;
          cur.grossProfitMinor += r.grossProfitMinor;
          map.set(id, cur);
        }
        return [...map.values()]
          .sort((a, b) => Number(b.revenueMinor - a.revenueMinor))
          .slice(0, limit)
          .map((r) => ({
            [idKey]: r.id,
            [nameKey]: r.name,
            units: r.units,
            revenueMinor: r.revenueMinor.toString(),
            grossProfitMinor: r.grossProfitMinor.toString(),
          }));
      };

      const byCategory = rollup(
        (r) => r.categoryId,
        (r) => r.categoryName,
        'categoryId',
        'categoryName',
      );
      const byBrand = rollup(
        (r) => r.brandId,
        (r) => r.brandName,
        'brandId',
        'brandName',
      );

      return {
        status: 'success',
        traceId,
        data: {
          from: bounds.from,
          to: bounds.to,
          topProducts,
          byCategory,
          byBrand,
          note: 'Confirmed sales only; returned lines excluded. Brand/category from inventory GetProducts.',
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load product performance',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
