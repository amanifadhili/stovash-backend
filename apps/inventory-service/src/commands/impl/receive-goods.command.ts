import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ReceiveGoodsItemInput {
  productId?: string;
  name?: string;
  deviceType?: string; // DEVICE, ACCESSORY
  brandId?: string;
  categoryId?: string;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  condition?: string;
  notes?: string;
  images?: string[];
  specifications?: any;
  quantity?: number; // >1 for Accessories, defaults to 1
  purchaseCost!: number;
  sellingPrice?: number;
}

export class ReceiveGoodsPayload {
  vendorName!: string;
  items!: ReceiveGoodsItemInput[];
  paymentAccountCode?: string; // e.g. 2001 (Accounts Payable) or 1001 (Cash)
  notes?: string;
}

export class ReceiveGoodsCommand extends BaseCommand<ReceiveGoodsPayload> {
  constructor(payload: ReceiveGoodsPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
