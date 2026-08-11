import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTrialBalanceQuery } from '../impl/get-trial-balance.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetTrialBalanceQuery)
export class GetTrialBalanceHandler implements IQueryHandler<GetTrialBalanceQuery> {
  async execute(query: GetTrialBalanceQuery): Promise<ICommandResponse<any>> {
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

      // Fetch all accounts for shop/tenant
      const accounts = await prisma.ledgerAccount.findMany({
        where: {
          tenantId,
          ...(shopId ? { shopId } : {})
        }
      });

      // Build filters for journal entries
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
          journalEntry: journalWhere
        },
        include: {
          account: true
        }
      });

      const accountMap: Record<string, { code: string; name: string; type: string; totalDebit: number; totalCredit: number; balance: number }> = {};

      for (const acc of accounts) {
        accountMap[acc.id] = {
          code: acc.code,
          name: acc.name,
          type: acc.type,
          totalDebit: 0,
          totalCredit: 0,
          balance: 0
        };
      }

      for (const entry of ledgerEntries) {
        if (!accountMap[entry.accountId]) {
          accountMap[entry.accountId] = {
            code: entry.account?.code || 'UNKNOWN',
            name: entry.account?.name || 'Unknown Account',
            type: entry.account?.type || 'ASSET',
            totalDebit: 0,
            totalCredit: 0,
            balance: 0
          };
        }

        if (entry.type === 'DEBIT') {
          accountMap[entry.accountId].totalDebit += entry.amount;
        } else {
          accountMap[entry.accountId].totalCredit += entry.amount;
        }
      }

      let totalDebits = 0;
      let totalCredits = 0;
      const reportRows = Object.values(accountMap).map(acc => {
        totalDebits += acc.totalDebit;
        totalCredits += acc.totalCredit;
        // Normal balance calculation
        const net = ['ASSET', 'EXPENSE'].includes(acc.type)
          ? acc.totalDebit - acc.totalCredit
          : acc.totalCredit - acc.totalDebit;
        return {
          ...acc,
          netBalance: net
        };
      });

      const isBalanced = Math.abs(totalDebits - totalCredits) < 0.01;

      return {
        status: 'success',
        traceId,
        data: {
          shopId,
          workPeriodId: payload.workPeriodId,
          totalDebits,
          totalCredits,
          isBalanced,
          accounts: reportRows
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to generate trial balance',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
