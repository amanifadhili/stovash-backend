import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class PurchaseReturnItem {
  productId!: string;
  serialNumber?: string;
  quantity!: number;
  refundAmount!: number;
}

export class CreatePurchaseReturnPayload {
  tenantId!: string;
  shopId!: string;
  purchaseId?: string;
  supplierId?: string;
  items!: PurchaseReturnItem[];
  totalAmount!: number;
  refundAmount!: number;
  reason?: string;
  status?: string;
}

export class CreatePurchaseReturnCommand extends BaseCommand<CreatePurchaseReturnPayload> {
  constructor(payload: CreatePurchaseReturnPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
