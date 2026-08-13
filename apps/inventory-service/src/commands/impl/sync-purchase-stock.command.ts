import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class SyncPurchaseStockPayload {
  productId!: string;
  productTracking?: string;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  unitAcquisitionCost?: number;
  additionalCost?: number;
  condition?: string;
  purchaseId?: string;
  referenceId?: string;
}

export class SyncPurchaseStockCommand extends BaseCommand<SyncPurchaseStockPayload> {
  constructor(payload: SyncPurchaseStockPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
