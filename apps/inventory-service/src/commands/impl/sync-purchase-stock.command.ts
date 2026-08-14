import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class SyncPurchaseStockPayload {
  productId!: string;
  productTracking?: string;
  /** Stock-owned fields (denormalized onto InventoryItem). */
  name?: string;
  brandId?: string;
  categoryId?: string;
  sellingPrice?: number;
  specifications?: any;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  condition?: string;
  notes?: string;
  unitAcquisitionCost?: number;
  additionalCost?: number;
  images?: string[];
  purchaseId?: string;
  referenceId?: string;
  /** NON_SERIALIZED stock-in quantity (default 1). */
  quantity?: number;
}

export class SyncPurchaseStockCommand extends BaseCommand<SyncPurchaseStockPayload> {
  constructor(payload: SyncPurchaseStockPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
