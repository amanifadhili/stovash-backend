import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface ReturnItemData {
  purchaseItemId?: string;
  productId: string;
  productName: string;
  productSku: string;
  receivedItemId?: string;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  quantity: number;
  refundAmount: number;
  condition?: string;
  reason?: string;
}

export interface AddPurchaseReturnItemsPayload {
  purchaseReturnId: string;
  items: ReturnItemData[];
  recordedById: string;
  recordedByName: string;
  traceId?: string;
}

export class AddPurchaseReturnItemsCommand extends BaseCommand<AddPurchaseReturnItemsPayload> {
  constructor(payload: AddPurchaseReturnItemsPayload, context?: IRequestContext) {
    super(payload, context);
  }
}