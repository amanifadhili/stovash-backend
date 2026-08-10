import { Injectable } from '@nestjs/common';
import { prisma } from '@electronic-shop/database';

@Injectable()
export class FinancialStatementsReport {
  async getTrialBalance(tenantId: string, shopId: string) {
    const accounts = await prisma.ledgerAccount.findMany({
      where: { tenantId, shopId },
      orderBy: { code: 'asc' }
    });

    const trialBalance = accounts.map(account => ({
      code: account.code,
      name: account.name,
      type: account.type,
      balance: account.balance,
      debit: account.type === 'ASSET' || account.type === 'EXPENSE' ? account.balance : 0,
      credit: account.type === 'LIABILITY' || account.type === 'EQUITY' || account.type === 'REVENUE' ? account.balance : 0
    }));

    const totalDebits = trialBalance.reduce((sum, acc) => sum + acc.debit, 0);
    const totalCredits = trialBalance.reduce((sum, acc) => sum + acc.credit, 0);

    return {
      accounts: trialBalance,
      summary: {
        totalDebits,
        totalCredits,
        isBalanced: Math.abs(totalDebits - totalCredits) < 0.01
      }
    };
  }

  async getIncomeStatement(tenantId: string, shopId: string, startDate: string, endDate: string) {
    const revenueAccounts = await prisma.ledgerAccount.findMany({
      where: { tenantId, shopId, type: 'REVENUE' }
    });

    const expenseAccounts = await prisma.ledgerAccount.findMany({
      where: { tenantId, shopId, type: 'EXPENSE' }
    });

    const totalRevenue = revenueAccounts.reduce((sum, acc) => sum + acc.balance, 0);
    const totalExpenses = expenseAccounts.reduce((sum, acc) => sum + acc.balance, 0);
    const grossProfit = totalRevenue - totalExpenses;

    return {
      revenue: {
        accounts: revenueAccounts,
        total: totalRevenue
      },
      expenses: {
        accounts: expenseAccounts,
        total: totalExpenses
      },
      grossProfit
    };
  }

  async getBalanceSheet(tenantId: string, shopId: string) {
    const assets = await prisma.ledgerAccount.findMany({
      where: { tenantId, shopId, type: 'ASSET' }
    });

    const liabilities = await prisma.ledgerAccount.findMany({
      where: { tenantId, shopId, type: 'LIABILITY' }
    });

    const equity = await prisma.ledgerAccount.findMany({
      where: { tenantId, shopId, type: 'EQUITY' }
    });

    const totalAssets = assets.reduce((sum, acc) => sum + acc.balance, 0);
    const totalLiabilities = liabilities.reduce((sum, acc) => sum + acc.balance, 0);
    const totalEquity = equity.reduce((sum, acc) => sum + acc.balance, 0);

    return {
      assets: {
        accounts: assets,
        total: totalAssets
      },
      liabilities: {
        accounts: liabilities,
        total: totalLiabilities
      },
      equity: {
        accounts: equity,
        total: totalEquity
      },
      totalLiabilitiesAndEquity: totalLiabilities + totalEquity,
      isBalanced: Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01
    };
  }
}
