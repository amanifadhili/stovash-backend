import { GetSalesHandler } from './get-sales.handler.js';
import { GetSaleByIdHandler } from './get-sale-by-id.handler.js';
import { GetSaleHistoryHandler } from './get-sale-history.handler.js';
import { GetDeviceSalesHandler } from './get-device-sales.handler.js';
import { GetSoldUnitProfitHandler } from './get-sold-unit-profit.handler.js';

export const QueryHandlers = [
  GetSalesHandler,
  GetSaleByIdHandler,
  GetSaleHistoryHandler,
  GetDeviceSalesHandler,
  GetSoldUnitProfitHandler,
];

export * from './get-sales.handler.js';
export * from './get-sale-by-id.handler.js';
export * from './get-sale-history.handler.js';
export * from './get-device-sales.handler.js';
export * from './get-sold-unit-profit.handler.js';