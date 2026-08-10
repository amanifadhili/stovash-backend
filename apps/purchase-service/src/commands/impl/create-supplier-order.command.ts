import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class SupplierOrderItem {
  productId!: string;
  quantity!: number;
  unitPrice!: number;
}

export class CreateSupplierOrderPayload {
  tenantId!: string;
  shopId!: string;
  supplierId!: string;
  items!: SupplierOrderItem[];
  status?: string;
}

export class CreateSupplierOrderCommand extends BaseCommand<CreateSupplierOrderPayload> {
  constructor(payload: CreateSupplierOrderPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
