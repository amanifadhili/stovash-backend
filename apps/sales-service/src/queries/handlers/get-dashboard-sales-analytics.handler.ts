import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ErrorCode, ICommandResponse } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { GetDashboardSalesAnalyticsQuery } from '../impl/get-dashboard-sales-analytics.query.js';
import { francsToMinorInt } from '../sold-unit-profit.js';

const SHOP_TZ = 'Africa/Kigali';
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;

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
  const span = Math.floor((b - a) / 86400000) + 1;
  if (span > MAX_SPAN_DAYS) return null;
  return { from: f, to: t };
}

function eachDayInclusive(from: string, to: string): string[] {
  const out: string[] = [];
  let cur = from;
  while (cur <= to) {
    out.push(cur);
    const [y, m, d] = cur.split('-').map(Number);
    const next = new Date(Date.UTC(y, m - 1, d + 1));
    cur = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, '0')}-${String(next.getUTCDate()).padStart(2, '0')}`;
  }
  return out;
}

@QueryHandler(GetDashboardSalesAnalyticsQuery)
export class GetDashboardSalesAnalyticsHandler
  implements IQueryHandler<GetDashboardSalesAnalyticsQuery>
{
  async execute(query: GetDashboardSalesAnalyticsQuery): Promise<ICommandResponse<any>> {
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

    try {
      const fromDt = new Date(`${bounds.from}T00:00:00.000Z`);
      // Inclusive end-of-day in UTC window large enough to cover Kigali calendar day
      const toDt = new Date(`${bounds.to}T23:59:59.999Z`);
      // Expand window by ±1 day so Kigali-local edges aren't clipped by UTC storage
      fromDt.setUTCDate(fromDt.getUTCDate() - 1);
      toDt.setUTCDate(toDt.getUTCDate() + 1);

      const where: Record<string, unknown> = {
        tenantId,
        commercialStatus: 'CONFIRMED',
        saleDate: { gte: fromDt, lte: toDt },
      };
      if (shopId) where.shopId = shopId;

      const sales = await prisma.sale.findMany({
        where,
        select: { id: true, saleDate: true, grandTotal: true },
        orderBy: { saleDate: 'asc' },
      });

      const byDay = new Map<string, { count: number; revenueFrancs: number }>();
      for (const day of eachDayInclusive(bounds.from, bounds.to)) {
        byDay.set(day, { count: 0, revenueFrancs: 0 });
      }

      for (const sale of sales) {
        const day = shopDayKey(sale.saleDate);
        if (day < bounds.from || day > bounds.to) continue;
        const bucket = byDay.get(day) || { count: 0, revenueFrancs: 0 };
        bucket.count += 1;
        bucket.revenueFrancs += Number(sale.grandTotal) || 0;
        byDay.set(day, bucket);
      }

      let totalCount = 0;
      let totalFrancs = 0;
      const series = [...byDay.entries()].map(([date, b]) => {
        totalCount += b.count;
        totalFrancs += b.revenueFrancs;
        const revenueMinor = String(francsToMinorInt(b.revenueFrancs));
        const avgTicketMinor =
          b.count > 0 ? String(francsToMinorInt(b.revenueFrancs / b.count)) : '0';
        return {
          date,
          revenueMinor,
          salesCount: b.count,
          avgTicketMinor,
        };
      });

      const revenueMinor = String(francsToMinorInt(totalFrancs));
      const avgTicketMinor =
        totalCount > 0 ? String(francsToMinorInt(totalFrancs / totalCount)) : '0';

      return {
        status: 'success',
        traceId,
        data: {
          from: bounds.from,
          to: bounds.to,
          totals: {
            revenueMinor,
            salesCount: totalCount,
            avgTicketMinor,
          },
          series,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load dashboard sales analytics',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
