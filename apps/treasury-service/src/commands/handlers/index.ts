import { CreatePaymentMethodHandler } from './create-payment-method.handler.js';
import { CreateTransferHandler } from './create-transfer.handler.js';
import { CreatePhysicalConfirmationHandler } from './create-physical-confirmation.handler.js';
import { RecordOperationalDepositHandler } from './record-operational-deposit.handler.js';
import { ReconcilePaymentMethodHandler } from './reconcile-payment-method.handler.js';
import { RecordTreasuryLoanHandler } from './record-treasury-loan.handler.js';
import { RecordLoanRepaymentHandler } from './record-loan-repayment.handler.js';
import { CreatePhysicalAccountHandler } from './create-physical-account.handler.js';
import { CreateTreasuryMovementHandler } from './create-treasury-movement.handler.js';
import { RecordReconciliationHandler } from './record-reconciliation.handler.js';
import { ApproveReconciliationAdjustmentHandler } from './approve-reconciliation-adjustment.handler.js';
import { SeedTreasuryOpeningBalancesHandler } from './seed-treasury-opening-balances.handler.js';

export const CommandHandlers = [
  CreatePaymentMethodHandler,
  CreateTransferHandler,
  CreatePhysicalConfirmationHandler,
  RecordOperationalDepositHandler,
  ReconcilePaymentMethodHandler,
  RecordTreasuryLoanHandler,
  RecordLoanRepaymentHandler,
  CreatePhysicalAccountHandler,
  CreateTreasuryMovementHandler,
  RecordReconciliationHandler,
  ApproveReconciliationAdjustmentHandler,
  SeedTreasuryOpeningBalancesHandler,
];
