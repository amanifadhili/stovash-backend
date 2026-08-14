import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetRentalsQuery } from '../impl/get-rentals.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetRentalsQuery)
export class GetRentalsHandler implements IQueryHandler<GetRentalsQuery> {
  async execute(query: GetRentalsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload?.agreementType ? undefined : context?.shopId;

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
      if (shopId) where.shopId = shopId;
      if (payload.agreementType) where.agreementType = payload.agreementType;
      if (payload.status) where.status = payload.status;
      if (payload.search) {
        where.OR = [
          { personName: { contains: payload.search, mode: 'insensitive' } },
          { personPhone: { contains: payload.search, mode: 'insensitive' } },
          { notes: { contains: payload.search, mode: 'insensitive' } }
        ];
      }

      const rentals = await prisma.rentalAgreement.findMany({
        where,
        orderBy: { createdAt: 'desc' }
      });

      return {
        status: 'success',
        traceId,
        data: rentals
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch rentals',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
