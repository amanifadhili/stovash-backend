import { AddProductHandler } from './add-product.handler.js';
import { AddInventoryItemHandler } from './add-inventory-item.handler.js';
import { ProcessPosSaleHandler } from './process-pos-sale.handler.js';
import { ReceiveGoodsHandler } from './receive-goods.handler.js';

export const CommandHandlers = [
  AddProductHandler,
  AddInventoryItemHandler,
  ProcessPosSaleHandler,
  ReceiveGoodsHandler
];


