import { GetPurchasesHandler } from './get-purchases.handler.js';
import { GetPurchaseByIdHandler } from './get-purchase-by-id.handler.js';
import { GetPurchaseByNumberHandler } from './get-purchase-by-number.handler.js';
import { GetPurchaseItemsHandler } from './get-purchase-items.handler.js';
import { GetPurchaseReceivingsHandler } from './get-purchase-receivings.handler.js';
import { GetPurchasePaymentsHandler } from './get-purchase-payments.handler.js';
import { GetPurchaseReturnsHandler } from './get-purchase-returns.handler.js';
import { GetPurchaseDocumentsHandler } from './get-purchase-documents.handler.js';
import { GetPurchaseHistoryHandler } from './get-purchase-history.handler.js';
import { GetLastPurchaseUnitCostsHandler } from './get-last-purchase-unit-costs.handler.js';

export const QueryHandlers = [
  GetPurchasesHandler,
  GetPurchaseByIdHandler,
  GetPurchaseByNumberHandler,
  GetPurchaseItemsHandler,
  GetPurchaseReceivingsHandler,
  GetPurchasePaymentsHandler,
  GetPurchaseReturnsHandler,
  GetPurchaseDocumentsHandler,
  GetPurchaseHistoryHandler,
  GetLastPurchaseUnitCostsHandler,
];

export * from './get-purchases.handler.js';
export * from './get-purchase-by-id.handler.js';
export * from './get-purchase-by-number.handler.js';
export * from './get-purchase-items.handler.js';
export * from './get-purchase-receivings.handler.js';
export * from './get-purchase-payments.handler.js';
export * from './get-purchase-returns.handler.js';
export * from './get-purchase-documents.handler.js';
export * from './get-purchase-history.handler.js';
export * from './get-last-purchase-unit-costs.handler.js';