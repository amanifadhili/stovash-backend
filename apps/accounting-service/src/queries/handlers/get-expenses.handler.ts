import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetExpensesQuery } from '../impl/get-expenses.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import {
  EXPENSE_ACCOUNT_CODES,
  EXPENSE_CATEGORIES,
  categoryFromAccountCode,
  paymentMethodFromAccountCode,
} from '../../expenses/expense-catalog.js';

@QueryHandler(GetExpensesQuery)
export class GetExpensesHandler implements IQueryHandler<GetExpensesQuery> {
  async execute(query: GetExpensesQuery): Promise<ICommandResponse<any>> {
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
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const categoryFilter = payload.category
        ? EXPENSE_CATEGORIES.find((c) => c.code === payload.category)
        : undefined;
      const accountCodes = categoryFilter ? [categoryFilter.accountCode] : EXPENSE_ACCOUNT_CODES;

      const journalWhere: any = {
        tenantId,
        deletedAt: null,
        entries: {
          some: {
            type: 'DEBIT',
            account: { code: { in: accountCodes } },
          },
        },
      };
      if (shopId) journalWhere.shopId = shopId;
      if (payload.workPeriodId) journalWhere.workPeriodId = payload.workPeriodId;

      const journals = await prisma.journalEntry.findMany({
        where: journalWhere,
        orderBy: { createdAt: 'desc' },
        include: {
          entries: { include: { account: true } },
        },
      });

      const expenses = journals.map((je) => {
        const debit = je.entries.find((e) => e.type === 'DEBIT');
        const credit = je.entries.find((e) => e.type === 'CREDIT');
        const cat = categoryFromAccountCode(debit?.account?.code || '');
        return {
          id: je.id,
          date: je.createdAt,
          category: cat?.code || 'RENT',
          categoryLabel: cat?.label || debit?.account?.name || 'Expense',
          amount: Number(debit?.amount || 0),
          paymentMethod: paymentMethodFromAccountCode(credit?.account?.code || '1001'),
          description: je.description,
          status: je.status,
        };
      });

      const totalsByCategory = EXPENSE_CATEGORIES.map((c) => ({
        code: c.code,
        label: c.label,
        amount: expenses
          .filter((e) => e.category === c.code)
          .reduce((s, e) => s + e.amount, 0),
      }));

      return {
        status: 'success',
        traceId,
        data: {
          expenses,
          count: expenses.length,
          total: expenses.reduce((s, e) => s + e.amount, 0),
          totalsByCategory,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch expenses',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
