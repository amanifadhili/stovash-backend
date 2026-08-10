import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class PurchaseItem {
  productId!: string;
  quantity!: number;
  unitCost!: number;
}

export class CreatePurchasePayload {
  tenantId!: string;
  shopId!: string;
  supplierId!: string;
  items!: PurchaseItem[];
  status?: string;
}

export class CreatePurchaseCommand extends BaseCommand<CreatePurchasePayload> {
  constructor(payload: CreatePurchasePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
