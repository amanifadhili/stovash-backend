import { GetTrialBalanceHandler } from './get-trial-balance.handler.js';
import { GetIncomeStatementHandler } from './get-income-statement.handler.js';
import { GetBalanceSheetHandler } from './get-balance-sheet.handler.js';
import { GetAccountTransactionsHandler } from './get-account-transactions.handler.js';
import { GetExpensesHandler } from './get-expenses.handler.js';
import { GetChartOfAccountsHandler } from './get-chart-of-accounts.handler.js';
import { GetActiveWorkPeriodHandler } from './get-active-work-period.handler.js';
import { GetFinancialTransactionHandler } from './get-financial-transaction.handler.js';
import { GetAccountingAccountsHandler } from './get-accounting-accounts.handler.js';
import { GetJournalsHandler } from './get-journals.handler.js';
import { GetReceivablesHandler } from './get-receivables.handler.js';
import { GetProfitAllocationHandler } from './get-profit-allocation.handler.js';
import { GetEngineReportHandler } from './get-engine-report.handler.js';
import { GetDashboardProfitAnalyticsHandler } from './get-dashboard-profit-analytics.handler.js';
import { GetDashboardArApAnalyticsHandler } from './get-dashboard-ar-ap-analytics.handler.js';

export const QueryHandlers = [
  GetTrialBalanceHandler,
  GetIncomeStatementHandler,
  GetBalanceSheetHandler,
  GetAccountTransactionsHandler,
  GetExpensesHandler,
  GetChartOfAccountsHandler,
  GetActiveWorkPeriodHandler,
  GetFinancialTransactionHandler,
  GetAccountingAccountsHandler,
  GetJournalsHandler,
  GetReceivablesHandler,
  GetProfitAllocationHandler,
  GetEngineReportHandler,
  GetDashboardProfitAnalyticsHandler,
  GetDashboardArApAnalyticsHandler,
];
