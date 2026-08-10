import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class SaleItem {
  productId!: string;
  quantity!: number;
  unitPrice!: number;
}

export class CreateSalePayload {
  tenantId!: string;
  shopId!: string;
  customerId?: string;
  items!: SaleItem[];
  status?: string;
}

export class CreateSaleCommand extends BaseCommand<CreateSalePayload> {
  constructor(payload: CreateSalePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
