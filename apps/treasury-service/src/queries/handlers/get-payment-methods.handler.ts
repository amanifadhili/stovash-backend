import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPaymentMethodsQuery } from '../impl/get-payment-methods.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

const DEFAULT_METHODS = [
  { name: 'Cash', type: 'CASH' },
  { name: 'MoMo', type: 'MOBILE' },
  { name: 'Bank', type: 'BANK' },
];

@QueryHandler(GetPaymentMethodsQuery)
export class GetPaymentMethodsHandler implements IQueryHandler<GetPaymentMethodsQuery> {
  async execute(query: GetPaymentMethodsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      let methods = await prisma.paymentMethod.findMany({
        where: { tenantId, shopId, isActive: true },
        orderBy: { name: 'asc' },
      });

      if (methods.length === 0) {
        await prisma.paymentMethod.createMany({
          data: DEFAULT_METHODS.map((m) => ({
            tenantId,
            shopId,
            name: m.name,
            type: m.type,
            balance: 0,
            currency: 'RWF',
            isActive: true,
          })),
        });
        methods = await prisma.paymentMethod.findMany({
          where: { tenantId, shopId, isActive: true },
          orderBy: { name: 'asc' },
        });
      }

      const filtered = payload.type ? methods.filter((m) => m.type === payload.type) : methods;
      const total = filtered.reduce((s, m) => s + Number(m.balance || 0), 0);

      return {
        status: 'success',
        traceId,
        data: {
          methods: filtered,
          count: filtered.length,
          total,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load payment methods',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
