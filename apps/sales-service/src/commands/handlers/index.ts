import { CreateSaleHandler } from './create-sale.handler.js';
import { CreateQuotationHandler } from './create-quotation.handler.js';
import { CreateSaleReturnHandler } from './create-sale-return.handler.js';
import { ProcessSaleHandler } from './process-sale.handler.js';
import { ConvertQuotationToSaleHandler } from './convert-quotation-to-sale.handler.js';
import { RecordPartialPaymentHandler } from './record-partial-payment.handler.js';

export const CommandHandlers = [
  CreateSaleHandler,
  CreateQuotationHandler,
  CreateSaleReturnHandler,
  ProcessSaleHandler,
  ConvertQuotationToSaleHandler,
  RecordPartialPaymentHandler
];
