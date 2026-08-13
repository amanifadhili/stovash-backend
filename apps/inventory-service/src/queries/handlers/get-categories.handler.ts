import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../impl/get-categories.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { visibleToShopFilter } from '../../common/visibility.js';

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {
  async execute(query: GetCategoriesQuery): Promise<ICommandResponse<any>> {
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

      if (payload.parentId !== undefined) {
        where.parentId = payload.parentId;
      }

      const categories = await prisma.category.findMany({
        where,
        orderBy: { name: 'asc' },
        include: {
          children: {
            orderBy: { name: 'asc' }
          },
          _count: {
            select: { products: { where: { deletedAt: null } } }
          }
        }
      });

      const mapped = categories.map((c: any) => ({
        id: c.id,
        name: c.name,
        parentId: c.parentId,
        productCount: c._count.products,
        children: c.children.map((child: any) => ({
          id: child.id,
          name: child.name,
          parentId: child.parentId
        })),
        shopId: c.shopId,
        sharedShopIds: c.sharedShopIds ?? [],
        createdAt: c.createdAt,
        createdBy: c.createdBy
      }));

      return {
        status: 'success',
        traceId,
        data: {
          count: mapped.length,
          categories: mapped
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch categories',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
