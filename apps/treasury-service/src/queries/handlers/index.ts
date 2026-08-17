import { GetPaymentMethodsHandler } from './get-payment-methods.handler.js';
import { GetTreasuryActivityHandler } from './get-treasury-activity.handler.js';
import { GetFinancialStructureHandler } from './get-financial-structure.handler.js';
import { GetFundBalancesHandler } from './get-fund-balances.handler.js';
import { GetTreasuryMovementsHandler } from './get-treasury-movements.handler.js';
import { GetTreasuryLoansHandler } from './get-treasury-loans.handler.js';
import { GetProfitTransferPositionHandler } from './get-profit-transfer-position.handler.js';
import { GetReconciliationsHandler } from './get-reconciliations.handler.js';
import { GetDailyPositionHandler } from './get-daily-position.handler.js';
import { GetFinancialOverviewHandler } from './get-financial-overview.handler.js';

export const QueryHandlers = [
  GetPaymentMethodsHandler,
  GetTreasuryActivityHandler,
  GetFinancialStructureHandler,
  GetFundBalancesHandler,
  GetTreasuryMovementsHandler,
  GetTreasuryLoansHandler,
  GetProfitTransferPositionHandler,
  GetReconciliationsHandler,
  GetDailyPositionHandler,
  GetFinancialOverviewHandler,
];
