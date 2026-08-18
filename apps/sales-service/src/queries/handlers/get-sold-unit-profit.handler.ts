import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { ErrorCode, ICommandResponse } from '@electronic-shop/types';
import { prisma } from '../../database/client.js';
import { GetSoldUnitProfitQuery } from '../impl/get-sold-unit-profit.query.js';
import {
  brandMapFromProducts,
  DEFAULT_SOLD_UNIT_PAGE_SIZE,
  mapSaleItemToRow,
  mergeSaleAndStockRows,
  paginateRows,
  totalsOf,
} from '../sold-unit-profit.js';

@QueryHandler(GetSoldUnitProfitQuery)
export class GetSoldUnitProfitHandler implements IQueryHandler<GetSoldUnitProfitQuery> {
  constructor(
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
  ) {}

  async execute(query: GetSoldUnitProfitQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    if (!tenantId) {
      return {
        status: 'error',
        traceId,
        message: 'tenantId is required',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }

    try {
      const saleWhere: Record<string, unknown> = {
        tenantId,
        commercialStatus: 'CONFIRMED',
      };
      if (shopId) saleWhere.shopId = shopId;

      const items = await prisma.saleItem.findMany({
        where: { sale: saleWhere },
        orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
        include: {
          sale: { select: { id: true, saleDate: true, commercialStatus: true } },
          returnItems: { include: { saleReturn: { select: { status: true } } } },
        },
      });

      const brandId = payload?.brandId?.trim();
      const [brandsByProduct, stockUnits] = await Promise.all([
        this.loadBrandMap(context),
        this.loadSoldStock(context, brandId),
      ]);
      for (const unit of stockUnits) {
        if (unit.productId && unit.brand) {
          brandsByProduct.set(unit.productId, unit.brand);
        }
      }

      let rows = mergeSaleAndStockRows(
        items,
        items.map((item) => mapSaleItemToRow(item, brandsByProduct.get(item.productId) ?? null)),
        stockUnits,
      );

      if (brandId) {
        rows = rows.filter((row) => row.brandId === brandId);
      }

      const page = paginateRows(
        rows,
        payload?.page,
        payload?.pageSize ?? DEFAULT_SOLD_UNIT_PAGE_SIZE,
      );

      return {
        status: 'success',
        traceId,
        data: {
          units: page.items,
          totals: totalsOf(rows),
          pagination: {
            page: page.page,
            pageSize: page.pageSize,
            total: page.total,
            totalPages: page.totalPages,
          },
          note: 'Sale lines win when present; otherwise SOLD stock cost and list price. Shop earned and available transfer stay on GetProfitTransferPosition.',
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch sold-unit profit',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async loadBrandMap(
    context?: GetSoldUnitProfitQuery['context'],
  ): Promise<Map<string, { id?: string; name?: string }>> {
    try {
      const result = await firstValueFrom(
        this.inventoryClient
          .send({ cmd: 'GetProducts' }, { payload: {}, context })
          .pipe(timeout(8000)),
      );
      const products = result?.data?.products ?? [];
      return brandMapFromProducts(Array.isArray(products) ? products : []);
    } catch {
      return new Map();
    }
  }

  private async loadSoldStock(
    context?: GetSoldUnitProfitQuery['context'],
    brandId?: string,
  ): Promise<Array<any>> {
    try {
      const result = await firstValueFrom(
        this.inventoryClient
          .send(
            { cmd: 'GetStockUnits' },
            { payload: { status: ['SOLD'], brandId: brandId || undefined }, context },
          )
          .pipe(timeout(8000)),
      );
      const units = result?.data?.units;
      return Array.isArray(units) ? units : [];
    } catch {
      return [];
    }
  }
}
