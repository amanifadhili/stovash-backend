import { AddProductHandler } from './add-product.handler.js';
import { UpdateProductHandler } from './update-product.handler.js';
import { DeleteProductHandler } from './delete-product.handler.js';
import { UpdateProductStatusHandler } from './update-product-status.handler.js';
import { SetProductPriceHandler } from './set-product-price.handler.js';
import { AddInventoryItemHandler } from './add-inventory-item.handler.js';
import { SyncPurchaseStockHandler } from './sync-purchase-stock.handler.js';
import { ProcessPosSaleHandler } from './process-pos-sale.handler.js';
import { ReceiveGoodsHandler } from './receive-goods.handler.js';
import { ProcessSalesReturnHandler } from './process-sales-return.handler.js';
import { CreateWarrantyClaimHandler } from './create-warranty-claim.handler.js';
import { TransferInventoryHandler } from './transfer-inventory.handler.js';
import { RecordInventoryUpgradeHandler } from './record-inventory-upgrade.handler.js';
import { RecordInventoryIncidentHandler } from './record-inventory-incident.handler.js';
import { CreateBrandHandler } from './create-brand.handler.js';
import { UpdateBrandHandler } from './update-brand.handler.js';
import { DeleteBrandHandler } from './delete-brand.handler.js';
import { CreateCategoryHandler } from './create-category.handler.js';
import { UpdateCategoryHandler } from './update-category.handler.js';
import { DeleteCategoryHandler } from './delete-category.handler.js';
import { CreateRentalHandler } from './create-rental.handler.js';
import { UpdateRentalStatusHandler } from './update-rental-status.handler.js';
import { CreateContactHandler } from './create-contact.handler.js';

export const CommandHandlers = [
  AddProductHandler,
  UpdateProductHandler,
  DeleteProductHandler,
  UpdateProductStatusHandler,
  SetProductPriceHandler,
  AddInventoryItemHandler,
  SyncPurchaseStockHandler,
  ProcessPosSaleHandler,
  ReceiveGoodsHandler,
  ProcessSalesReturnHandler,
  CreateWarrantyClaimHandler,
  TransferInventoryHandler,
  RecordInventoryUpgradeHandler,
  RecordInventoryIncidentHandler,
  CreateBrandHandler,
  UpdateBrandHandler,
  DeleteBrandHandler,
  CreateCategoryHandler,
  UpdateCategoryHandler,
  DeleteCategoryHandler,
  CreateRentalHandler,
  UpdateRentalStatusHandler,
  CreateContactHandler
];
