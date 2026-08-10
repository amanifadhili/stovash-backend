import { CreatePurchaseHandler } from './create-purchase.handler.js';
import { CreateSupplierOrderHandler } from './create-supplier-order.handler.js';
import { CreatePurchaseReturnHandler } from './create-purchase-return.handler.js';
import { ProcessPurchaseHandler } from './process-purchase.handler.js';

export const CommandHandlers = [
  CreatePurchaseHandler,
  CreateSupplierOrderHandler,
  CreatePurchaseReturnHandler,
  ProcessPurchaseHandler,
];
