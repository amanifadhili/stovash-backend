import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode, IRequestContext } from '@electronic-shop/types';

export class GetSaleReturnsByIdsPayload {
  ids!: string[];
}

export class GetSaleReturnsByIdsQuery {
  constructor(
    public readonly payload: GetSaleReturnsByIdsPayload,
    public readonly context: IRequestContext,
  ) {}
}

@QueryHandler(GetSaleReturnsByIdsQuery)
export class GetSaleReturnsByIdsHandler implements IQueryHandler<GetSaleReturnsByIdsQuery> {
  async execute(query: GetSaleReturnsByIdsQuery): Promise<ICommandResponse<any>> {
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
      const ids = (payload?.ids || []).filter((id) => typeof id === 'string' && id.trim());
      if (ids.length === 0) {
        return { status: 'success', traceId, data: { returns: [] } };
      }

      const returns = await prisma.saleReturn.findMany({
        where: { tenantId, id: { in: ids } },
        select: {
          id: true,
          saleId: true,
          customerId: true,
          Sale: { select: { id: true, customerName: true, customerId: true } },
        },
      });

      return {
        status: 'success',
        traceId,
        data: {
          returns: returns.map((r) => ({
            id: r.id,
            saleId: r.saleId,
            customerId: r.customerId || r.Sale?.customerId || null,
            customerName: r.Sale?.customerName || null,
          })),
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch sale returns',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
