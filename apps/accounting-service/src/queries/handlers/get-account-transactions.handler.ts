import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAccountTransactionsQuery } from '../impl/get-account-transactions.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetAccountTransactionsQuery)
export class GetAccountTransactionsHandler implements IQueryHandler<GetAccountTransactionsQuery> {
  async execute(query: GetAccountTransactionsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = payload.shopId || context?.shopId;

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const journalWhere: any = { tenantId };
      if (shopId) journalWhere.shopId = shopId;
      if (payload.workPeriodId) journalWhere.workPeriodId = payload.workPeriodId;
      if (payload.startDate || payload.endDate) {
        journalWhere.createdAt = {};
        if (payload.startDate) journalWhere.createdAt.gte = new Date(payload.startDate);
        if (payload.endDate) journalWhere.createdAt.lte = new Date(payload.endDate);
      }

      const journalEntries = await prisma.journalEntry.findMany({
        where: journalWhere,
        orderBy: { createdAt: 'desc' },
        include: {
          entries: {
            orderBy: { createdAt: 'asc' },
            include: { account: true }
          }
        }
      });

      const transactions = journalEntries.map((je) => {
        let debit = 0;
        let credit = 0;
        let accountCode = '';
        let accountName = '';
        for (const e of je.entries) {
          if (e.type === 'DEBIT') debit += Number(e.amount);
          else credit += Number(e.amount);
          if (!accountCode && e.account) {
            accountCode = e.account.code;
            accountName = e.account.name;
          }
        }
        return {
          id: je.id,
          date: je.createdAt,
          description: je.description,
          debit,
          credit,
          accountCode,
          accountName,
          reference: je.id,
          entryType: 'journal',
          status: je.status
        };
      });

      return {
        status: 'success',
        traceId,
        data: {
          shopId,
          count: transactions.length,
          transactions
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch account transactions',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
