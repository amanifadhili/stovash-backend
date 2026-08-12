import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoryByIdQuery } from '../impl/get-category-by-id.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetCategoryByIdQuery)
export class GetCategoryByIdHandler implements IQueryHandler<GetCategoryByIdQuery> {
  async execute(query: GetCategoryByIdQuery): Promise<ICommandResponse<any>> {
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

      if (!payload?.categoryId) {
        return {
          status: 'error',
          traceId,
          message: 'Category ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const category = await prisma.category.findFirst({
        where: {
          id: payload.categoryId,
          tenantId
        },
        include: {
          parent: true,
          children: {
            orderBy: { name: 'asc' }
          },
          _count: {
            select: { products: { where: { deletedAt: null } } }
          }
        }
      });

      if (!category) {
        return {
          status: 'error',
          traceId,
          message: 'Category not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      return {
        status: 'success',
        traceId,
        data: {
          id: category.id,
          name: category.name,
          parentId: category.parentId,
          parent: category.parent ? {
            id: category.parent.id,
            name: category.parent.name
          } : null,
          children: category.children.map((child: any) => ({
            id: child.id,
            name: child.name
          })),
          productCount: category._count.products,
          createdAt: category.createdAt,
          createdBy: category.createdBy
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch category',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
