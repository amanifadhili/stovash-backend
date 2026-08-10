import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class QuotationItem {
  productId!: string;
  quantity!: number;
  unitPrice!: number;
  discount?: number;
}

export class CreateQuotationPayload {
  tenantId!: string;
  shopId!: string;
  customerId?: string;
  items!: QuotationItem[];
  validUntil!: Date;
  status?: string;
}

export class CreateQuotationCommand extends BaseCommand<CreateQuotationPayload> {
  constructor(payload: CreateQuotationPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
