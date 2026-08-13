import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBrandsQuery } from '../impl/get-brands.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

@QueryHandler(GetBrandsQuery)
export class GetBrandsHandler implements IQueryHandler<GetBrandsQuery> {
  async execute(query: GetBrandsQuery): Promise<ICommandResponse<any>> {
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

      const where: any = visibleToShopFilter(tenantId, context.shopId);

      if (payload.search) {
        where.name = { contains: payload.search, mode: 'insensitive' };
      }

      const brands = await prisma.brand.findMany({
        where,
        orderBy: { name: 'asc' },
        include: {
          _count: {
            select: { products: { where: { deletedAt: null } } }
          }
        }
      });

      const mapped = brands.map((b: any) => ({
        id: b.id,
        name: b.name,
        description: b.description,
        productCount: b._count.products,
        createdAt: b.createdAt,
        createdBy: b.createdBy
      }));

      return {
        status: 'success',
        traceId,
        data: {
          count: mapped.length,
          brands: mapped
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch brands',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
