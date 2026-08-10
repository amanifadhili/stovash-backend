import { CreateSaleHandler } from './create-sale.handler.js';
import { CreateQuotationHandler } from './create-quotation.handler.js';
import { CreateSaleReturnHandler } from './create-sale-return.handler.js';

export const CommandHandlers = [
  CreateSaleHandler,
  CreateQuotationHandler,
  CreateSaleReturnHandler
];
