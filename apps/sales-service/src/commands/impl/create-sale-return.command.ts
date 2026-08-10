import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class SaleReturnItem {
  productId!: string;
  serialNumber!: string;
  quantity!: number;
  unitCost!: number;
  refundAmount!: number;
}

export class CreateSaleReturnPayload {
  tenantId!: string;
  shopId!: string;
  saleId?: string;
  customerId?: string;
  items!: SaleReturnItem[];
  totalAmount!: number;
  refundAmount!: number;
  reason?: string;
  status?: string;
}

export class CreateSaleReturnCommand extends BaseCommand<CreateSaleReturnPayload> {
  constructor(payload: CreateSaleReturnPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
