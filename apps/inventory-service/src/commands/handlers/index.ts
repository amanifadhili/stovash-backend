import { AddProductHandler } from './add-product.handler.js';
import { AddInventoryItemHandler } from './add-inventory-item.handler.js';
import { ProcessPosSaleHandler } from './process-pos-sale.handler.js';
import { ReceiveGoodsHandler } from './receive-goods.handler.js';
import { ProcessSalesReturnHandler } from './process-sales-return.handler.js';
import { CreateWarrantyClaimHandler } from './create-warranty-claim.handler.js';
import { TransferInventoryHandler } from './transfer-inventory.handler.js';

export const CommandHandlers = [
  AddProductHandler,
  AddInventoryItemHandler,
  ProcessPosSaleHandler,
  ReceiveGoodsHandler,
  ProcessSalesReturnHandler,
  CreateWarrantyClaimHandler,
  TransferInventoryHandler
];




