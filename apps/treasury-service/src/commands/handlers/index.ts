import { CreatePaymentMethodHandler } from './create-payment-method.handler.js';
import { CreateTransferHandler } from './create-transfer.handler.js';
import { CreatePhysicalConfirmationHandler } from './create-physical-confirmation.handler.js';

export const CommandHandlers = [
  CreatePaymentMethodHandler,
  CreateTransferHandler,
  CreatePhysicalConfirmationHandler,
];
