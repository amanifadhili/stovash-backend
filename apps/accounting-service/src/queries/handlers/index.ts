import { GetTrialBalanceHandler } from './get-trial-balance.handler.js';
import { GetIncomeStatementHandler } from './get-income-statement.handler.js';
import { GetBalanceSheetHandler } from './get-balance-sheet.handler.js';
import { GetAccountTransactionsHandler } from './get-account-transactions.handler.js';
import { GetExpensesHandler } from './get-expenses.handler.js';
import { GetChartOfAccountsHandler } from './get-chart-of-accounts.handler.js';
import { GetActiveWorkPeriodHandler } from './get-active-work-period.handler.js';

export const QueryHandlers = [
  GetTrialBalanceHandler,
  GetIncomeStatementHandler,
  GetBalanceSheetHandler,
  GetAccountTransactionsHandler,
  GetExpensesHandler,
  GetChartOfAccountsHandler,
  GetActiveWorkPeriodHandler,
];
