import { CreateSaleHandler } from './create-sale.handler.js';
import { ConfirmSaleHandler } from './confirm-sale.handler.js';
import { CancelSaleHandler } from './cancel-sale.handler.js';
import { FulfillSaleHandler } from './fulfill-sale.handler.js';
import { RecordSalePaymentHandler } from './record-sale-payment.handler.js';
import { CreateSaleReturnHandler } from './create-sale-return.handler.js';
import { IssueRefundHandler } from './issue-refund.handler.js';
import { ProcessSaleReplacementHandler } from './process-sale-replacement.handler.js';
import { AssessReturnedItemHandler } from './assess-returned-item.handler.js';
import { CreateWarrantyHandler } from './create-warranty.handler.js';
import { CreateQuotationHandler } from './create-quotation.handler.js';
import { ProcessSaleHandler } from './process-sale.handler.js';
import { ConvertQuotationToSaleHandler } from './convert-quotation-to-sale.handler.js';
import { RecordPartialPaymentHandler } from './record-partial-payment.handler.js';
import { RecordBonusHandler } from './record-bonus.handler.js';
import { ProcessLoanSaleHandler } from './process-loan-sale.handler.js';

export const CommandHandlers = [
  CreateSaleHandler,
  ConfirmSaleHandler,
  CancelSaleHandler,
  FulfillSaleHandler,
  RecordSalePaymentHandler,
  CreateSaleReturnHandler,
  IssueRefundHandler,
  ProcessSaleReplacementHandler,
  AssessReturnedItemHandler,
  CreateWarrantyHandler,
  CreateQuotationHandler,
  ProcessSaleHandler,
  ConvertQuotationToSaleHandler,
  RecordPartialPaymentHandler,
  RecordBonusHandler,
  ProcessLoanSaleHandler
];