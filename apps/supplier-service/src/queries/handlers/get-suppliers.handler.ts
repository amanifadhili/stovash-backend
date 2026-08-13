import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetSuppliersQuery } from '../impl/get-suppliers.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

@QueryHandler(GetSuppliersQuery)
export class GetSuppliersHandler implements IQueryHandler<GetSuppliersQuery> {
  async execute(query: GetSuppliersQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      // Suppliers can be tenant-shared (shopId null) or shop-owned (shopId set).
      // The active shop sees shared suppliers plus the ones it owns.
      const activeShopId = context?.shopId || payload?.shopId;
      const { search, status, page = 1, pageSize = 20 } = payload;
      const where: any = visibleToShopFilter(tenantId, activeShopId);
      if (status) where.status = status;
      if (search) where.name = { contains: search, mode: 'insensitive' };

      const [suppliers, total] = await Promise.all([
        prisma.supplier.findMany({
          where,
          orderBy: { name: 'asc' },
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        prisma.supplier.count({ where }),
      ]);

      return {
        status: 'success',
        traceId,
        data: {
          suppliers,
          pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch suppliers',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
