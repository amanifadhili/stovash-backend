import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetSupplierQuery } from '../impl/get-supplier.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleRecordFilter } from '../../common/visibility.js';

@QueryHandler(GetSupplierQuery)
export class GetSupplierHandler implements IQueryHandler<GetSupplierQuery> {
  async execute(query: GetSupplierQuery): Promise<ICommandResponse<any>> {
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

      if (!payload?.id) {
        return {
          status: 'error',
          traceId,
          message: 'supplier id is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const activeShopId = context?.shopId || payload?.shopId;
      const supplier = await prisma.supplier.findFirst({
        where: visibleRecordFilter(tenantId, payload.id, activeShopId),
      });

      if (!supplier) {
        return {
          status: 'error',
          traceId,
          message: 'Supplier not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      return {
        status: 'success',
        traceId,
        data: supplier,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch supplier',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
