import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBrandByIdQuery } from '../impl/get-brand-by-id.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleRecordFilter } from '../../common/visibility.js';

@QueryHandler(GetBrandByIdQuery)
export class GetBrandByIdHandler implements IQueryHandler<GetBrandByIdQuery> {
  async execute(query: GetBrandByIdQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.brandId) {
        return {
          status: 'error',
          traceId,
          message: 'Brand ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const brand = await prisma.brand.findFirst({
        where: visibleRecordFilter(tenantId, payload.brandId, context.shopId),
        include: {
          _count: {
            select: { products: { where: { deletedAt: null } } }
          }
        }
      });

      if (!brand) {
        return {
          status: 'error',
          traceId,
          message: 'Brand not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      return {
        status: 'success',
        traceId,
        data: {
          id: brand.id,
          name: brand.name,
          description: brand.description,
          productCount: brand._count.products,
          createdAt: brand.createdAt,
          createdBy: brand.createdBy
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch brand',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
