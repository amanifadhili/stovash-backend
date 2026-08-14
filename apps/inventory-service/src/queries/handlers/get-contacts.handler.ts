import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetContactsQuery } from '../impl/get-contacts.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetContactsQuery)
export class GetContactsHandler implements IQueryHandler<GetContactsQuery> {
  async execute(query: GetContactsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const where: any = { tenantId };
      if (payload.type === 'SHOP') {
        where.type = 'SHOP';
      } else {
        if (shopId) where.shopId = shopId;
        if (payload.type) where.type = payload.type;
      }
      if (payload.search) {
        where.OR = [
          { name: { contains: payload.search, mode: 'insensitive' } },
          { phone: { contains: payload.search, mode: 'insensitive' } },
          { email: { contains: payload.search, mode: 'insensitive' } }
        ];
      }

      const contacts = await prisma.contact.findMany({
        where,
        orderBy: { createdAt: 'desc' }
      });

      return {
        status: 'success',
        traceId,
        data: contacts
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch contacts',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
