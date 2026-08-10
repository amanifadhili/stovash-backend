import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetIncomeStatementQuery } from '../impl/get-income-statement.query.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetIncomeStatementQuery)
export class GetIncomeStatementHandler implements IQueryHandler<GetIncomeStatementQuery> {
  async execute(query: GetIncomeStatementQuery): Promise<ICommandResponse<any>> {
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

      const ledgerEntries = await prisma.ledgerEntry.findMany({
        where: {
          journalEntry: journalWhere,
          account: {
            type: { in: ['REVENUE', 'EXPENSE'] }
          }
        },
        include: {
          account: true
        }
      });

      const revenueMap: Record<string, { code: string; name: string; amount: number }> = {};
      const expenseMap: Record<string, { code: string; name: string; amount: number }> = {};

      let totalRevenue = 0;
      let totalExpense = 0;

      for (const entry of ledgerEntries) {
        const acc = entry.account;
        if (!acc) continue;

        if (acc.type === 'REVENUE') {
          if (!revenueMap[acc.id]) {
            revenueMap[acc.id] = { code: acc.code, name: acc.name, amount: 0 };
          }
          // Revenue increases with CREDIT, decreases with DEBIT
          const net = entry.type === 'CREDIT' ? entry.amount : -entry.amount;
          revenueMap[acc.id].amount += net;
          totalRevenue += net;
        } else if (acc.type === 'EXPENSE') {
          if (!expenseMap[acc.id]) {
            expenseMap[acc.id] = { code: acc.code, name: acc.name, amount: 0 };
          }
          // Expense increases with DEBIT, decreases with CREDIT
          const net = entry.type === 'DEBIT' ? entry.amount : -entry.amount;
          expenseMap[acc.id].amount += net;
          totalExpense += net;
        }
      }

      const netIncome = totalRevenue - totalExpense;

      return {
        status: 'success',
        traceId,
        data: {
          shopId,
          workPeriodId: payload.workPeriodId,
          totalRevenue,
          totalExpense,
          netIncome,
          revenues: Object.values(revenueMap),
          expenses: Object.values(expenseMap)
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to generate income statement',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
