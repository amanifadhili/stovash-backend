import { GetTrialBalanceHandler } from './get-trial-balance.handler.js';
import { GetIncomeStatementHandler } from './get-income-statement.handler.js';
import { GetBalanceSheetHandler } from './get-balance-sheet.handler.js';
import { GetAccountTransactionsHandler } from './get-account-transactions.handler.js';

export const QueryHandlers = [
  GetTrialBalanceHandler,
  GetIncomeStatementHandler,
  GetBalanceSheetHandler,
  GetAccountTransactionsHandler
];
