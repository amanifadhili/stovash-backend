import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ReceiveGoodsItemInput {
  productId!: string;
  serialNumber!: string;
  purchaseCost!: number;
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
