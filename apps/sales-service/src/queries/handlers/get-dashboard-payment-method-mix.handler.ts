import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ErrorCode, ICommandResponse } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { francsToMinorInt } from '../sold-unit-profit.js';

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_SPAN_DAYS = 366;
const SHOP_TZ = 'Africa/Kigali';

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

function shopDayKey(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: SHOP_TZ }).format(d);
}

export class GetDashboardPaymentMethodMixQuery {
  constructor(
    public readonly payload: { from?: string; to?: string; shopId?: string },
    public readonly context: any,
  ) {}
}

@QueryHandler(GetDashboardPaymentMethodMixQuery)
export class GetDashboardPaymentMethodMixHandler
  implements IQueryHandler<GetDashboardPaymentMethodMixQuery>
{
  async execute(query: GetDashboardPaymentMethodMixQuery): Promise<ICommandResponse<any>> {
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
      const toDt = new Date(`${bounds.to}T23:59:59.999Z`);
      fromDt.setUTCDate(fromDt.getUTCDate() - 1);
      toDt.setUTCDate(toDt.getUTCDate() + 1);

      const saleWhere: Record<string, unknown> = {
        tenantId,
        commercialStatus: 'CONFIRMED',
      };
      if (shopId) saleWhere.shopId = shopId;

      const payments = await prisma.salePayment.findMany({
        where: {
          paidAt: { gte: fromDt, lte: toDt },
          sale: saleWhere,
        },
        select: {
          method: true,
          amount: true,
          paidAt: true,
        },
      });

      const byMethod = new Map<string, number>();
      for (const p of payments) {
        const day = shopDayKey(p.paidAt);
        if (day < bounds.from || day > bounds.to) continue;
        const method = String(p.method || 'OTHER').toUpperCase();
        byMethod.set(method, (byMethod.get(method) || 0) + (Number(p.amount) || 0));
      }

      let totalFrancs = 0;
      for (const v of byMethod.values()) totalFrancs += v;
      const totalMinor = francsToMinorInt(totalFrancs);
      const slices = [...byMethod.entries()]
        .map(([method, francs]) => {
          const amountMinor = francsToMinorInt(francs);
          const percentage =
            totalFrancs > 0 ? Math.round((francs / totalFrancs) * 1000) / 10 : 0;
          return { method, amountMinor: String(amountMinor), percentage };
        })
        .sort((a, b) => Number(b.amountMinor) - Number(a.amountMinor));

      return {
        status: 'success',
        traceId,
        data: {
          from: bounds.from,
          to: bounds.to,
          totalMinor: String(totalMinor),
          slices,
          note: 'Aggregated from SalePayment rows (multi-method sales counted per payment).',
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load payment method mix',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
