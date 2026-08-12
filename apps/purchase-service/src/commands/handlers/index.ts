import { CreatePurchaseHandler } from './create-purchase.handler.js';
import { AddPurchaseItemHandler } from './add-purchase-item.handler.js';
import { UpdatePurchaseItemHandler } from './update-purchase-item.handler.js';
import { RemovePurchaseItemHandler } from './remove-purchase-item.handler.js';
import { ConfirmPurchaseHandler } from './confirm-purchase.handler.js';
import { CancelPurchaseHandler } from './cancel-purchase.handler.js';
import { CreatePurchaseReceivingHandler } from './create-purchase-receiving.handler.js';
import { AddReceivedItemsHandler } from './add-received-items.handler.js';
import { RecordPurchasePaymentHandler } from './record-purchase-payment.handler.js';
import { CreatePurchaseReturnHandler } from './create-purchase-return.handler.js';
import { AddPurchaseReturnItemsHandler } from './add-purchase-return-items.handler.js';
import { AddPurchaseDocumentHandler } from './add-purchase-document.handler.js';

export const CommandHandlers = [
  CreatePurchaseHandler,
  AddPurchaseItemHandler,
  UpdatePurchaseItemHandler,
  RemovePurchaseItemHandler,
  ConfirmPurchaseHandler,
  CancelPurchaseHandler,
  CreatePurchaseReceivingHandler,
  AddReceivedItemsHandler,
  RecordPurchasePaymentHandler,
  CreatePurchaseReturnHandler,
  AddPurchaseReturnItemsHandler,
  AddPurchaseDocumentHandler,
];

export * from './create-purchase.handler.js';
export * from './add-purchase-item.handler.js';
export * from './update-purchase-item.handler.js';
export * from './remove-purchase-item.handler.js';
export * from './confirm-purchase.handler.js';
export * from './cancel-purchase.handler.js';
export * from './create-purchase-receiving.handler.js';
export * from './add-received-items.handler.js';
export * from './record-purchase-payment.handler.js';
export * from './create-purchase-return.handler.js';
export * from './add-purchase-return-items.handler.js';
export * from './add-purchase-document.handler.js';