import { CreatePaymentMethodHandler } from './create-payment-method.handler.js';
import { CreateTransferHandler } from './create-transfer.handler.js';
import { CreatePhysicalConfirmationHandler } from './create-physical-confirmation.handler.js';
import { RecordOperationalDepositHandler } from './record-operational-deposit.handler.js';
import { ReconcilePaymentMethodHandler } from './reconcile-payment-method.handler.js';
import { RecordTreasuryLoanHandler } from './record-treasury-loan.handler.js';
import { RecordLoanRepaymentHandler } from './record-loan-repayment.handler.js';

export const CommandHandlers = [
  CreatePaymentMethodHandler,
  CreateTransferHandler,
  CreatePhysicalConfirmationHandler,
  RecordOperationalDepositHandler,
  ReconcilePaymentMethodHandler,
  RecordTreasuryLoanHandler,
  RecordLoanRepaymentHandler,
];
