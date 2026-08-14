import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetChartOfAccountsQuery } from '../impl/get-chart-of-accounts.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { DEFAULT_LEDGER_ACCOUNTS } from '../../coa/default-accounts.js';

@QueryHandler(GetChartOfAccountsQuery)
export class GetChartOfAccountsHandler implements IQueryHandler<GetChartOfAccountsQuery> {
  async execute(query: GetChartOfAccountsQuery): Promise<ICommandResponse<any>> {
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

      let accounts = await prisma.ledgerAccount.findMany({
        where: { tenantId, shopId, deletedAt: null },
        orderBy: { code: 'asc' },
      });

      if (accounts.length === 0) {
        await prisma.ledgerAccount.createMany({
          data: DEFAULT_LEDGER_ACCOUNTS.map((a) => ({
            tenantId,
            shopId,
            code: a.code,
            name: a.name,
            type: a.type,
            balance: 0,
            createdBy: context?.userId || 'system',
          })),
        });
      } else {
        const existing = new Set(accounts.map((a) => a.code));
        const missing = DEFAULT_LEDGER_ACCOUNTS.filter((a) => !existing.has(a.code));
        if (missing.length > 0) {
          await prisma.ledgerAccount.createMany({
            data: missing.map((a) => ({
              tenantId,
              shopId,
              code: a.code,
              name: a.name,
              type: a.type,
              balance: 0,
              createdBy: context?.userId || 'system',
            })),
          });
        }
      }
      accounts = await prisma.ledgerAccount.findMany({
        where: { tenantId, shopId, deletedAt: null },
        orderBy: { code: 'asc' },
      });

      const filtered = payload.type ? accounts.filter((a) => a.type === payload.type) : accounts;

      const grouped = ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'].map((type) => ({
        type,
        accounts: filtered.filter((a) => a.type === type),
      }));

      return {
        status: 'success',
        traceId,
        data: {
          accounts: filtered,
          grouped,
          count: filtered.length,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to load chart of accounts',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
