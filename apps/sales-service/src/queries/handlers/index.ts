import { GetSalesHandler } from './get-sales.handler.js';
import { GetSaleByIdHandler } from './get-sale-by-id.handler.js';
import { GetSaleHistoryHandler } from './get-sale-history.handler.js';

export const QueryHandlers = [
  GetSalesHandler,
  GetSaleByIdHandler,
  GetSaleHistoryHandler,
];

export * from './get-sales.handler.js';
export * from './get-sale-by-id.handler.js';
export * from './get-sale-history.handler.js';