import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBalanceSheetQuery } from '../impl/get-balance-sheet.query.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetBalanceSheetQuery)
export class GetBalanceSheetHandler implements IQueryHandler<GetBalanceSheetQuery> {
  async execute(query: GetBalanceSheetQuery): Promise<ICommandResponse<any>> {
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
      if (payload.asOfDate) {
        journalWhere.createdAt = { lte: new Date(payload.asOfDate) };
      }

      const ledgerEntries = await prisma.ledgerEntry.findMany({
        where: { journalEntry: journalWhere },
        include: { account: true }
      });

      const assetMap: Record<string, { code: string; name: string; amount: number }> = {};
      const liabilityMap: Record<string, { code: string; name: string; amount: number }> = {};
      const equityMap: Record<string, { code: string; name: string; amount: number }> = {};

      let totalAssets = 0;
      let totalLiabilities = 0;
      let totalEquityAccounts = 0;
      let totalRevenue = 0;
      let totalExpense = 0;

      for (const entry of ledgerEntries) {
        const acc = entry.account;
        if (!acc) continue;

        if (acc.type === 'ASSET') {
          if (!assetMap[acc.id]) assetMap[acc.id] = { code: acc.code, name: acc.name, amount: 0 };
          const net = entry.type === 'DEBIT' ? entry.amount : -entry.amount;
          assetMap[acc.id].amount += net;
          totalAssets += net;
        } else if (acc.type === 'LIABILITY') {
          if (!liabilityMap[acc.id]) liabilityMap[acc.id] = { code: acc.code, name: acc.name, amount: 0 };
          const net = entry.type === 'CREDIT' ? entry.amount : -entry.amount;
          liabilityMap[acc.id].amount += net;
          totalLiabilities += net;
        } else if (acc.type === 'EQUITY') {
          if (!equityMap[acc.id]) equityMap[acc.id] = { code: acc.code, name: acc.name, amount: 0 };
          const net = entry.type === 'CREDIT' ? entry.amount : -entry.amount;
          equityMap[acc.id].amount += net;
          totalEquityAccounts += net;
        } else if (acc.type === 'REVENUE') {
          const net = entry.type === 'CREDIT' ? entry.amount : -entry.amount;
          totalRevenue += net;
        } else if (acc.type === 'EXPENSE') {
          const net = entry.type === 'DEBIT' ? entry.amount : -entry.amount;
          totalExpense += net;
        }
      }

      const retainedEarnings = totalRevenue - totalExpense;
      const totalEquity = totalEquityAccounts + retainedEarnings;
      const isBalanced = Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01;

      return {
        status: 'success',
        traceId,
        data: {
          shopId,
          asOfDate: payload.asOfDate,
          totalAssets,
          totalLiabilities,
          totalEquityAccounts,
          retainedEarnings,
          totalEquity,
          isBalanced,
          assets: Object.values(assetMap),
          liabilities: Object.values(liabilityMap),
          equity: Object.values(equityMap)
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to generate balance sheet',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
