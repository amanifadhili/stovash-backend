import { GetSalesHandler } from './get-sales.handler.js';
import { GetSaleByIdHandler } from './get-sale-by-id.handler.js';
import { GetSaleHistoryHandler } from './get-sale-history.handler.js';
import { GetDeviceSalesHandler } from './get-device-sales.handler.js';
import { GetSoldUnitProfitHandler } from './get-sold-unit-profit.handler.js';
import { GetSaleReturnsByIdsHandler } from './get-sale-returns-by-ids.handler.js';
import { GetDashboardSalesAnalyticsHandler } from './get-dashboard-sales-analytics.handler.js';
import { GetDashboardPaymentMethodMixHandler } from './get-dashboard-payment-method-mix.handler.js';
import { GetDashboardProductPerformanceHandler } from './get-dashboard-product-performance.handler.js';

export const QueryHandlers = [
  GetSalesHandler,
  GetSaleByIdHandler,
  GetSaleHistoryHandler,
  GetDeviceSalesHandler,
  GetSoldUnitProfitHandler,
  GetSaleReturnsByIdsHandler,
  GetDashboardSalesAnalyticsHandler,
  GetDashboardPaymentMethodMixHandler,
  GetDashboardProductPerformanceHandler,
];

export * from './get-sales.handler.js';
export * from './get-sale-by-id.handler.js';
export * from './get-sale-history.handler.js';
export * from './get-device-sales.handler.js';
export * from './get-sold-unit-profit.handler.js';
export * from './get-sale-returns-by-ids.handler.js';
export * from './get-dashboard-sales-analytics.handler.js';
export * from './get-dashboard-payment-method-mix.handler.js';
export * from './get-dashboard-product-performance.handler.js';
