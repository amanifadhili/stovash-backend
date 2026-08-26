import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ApplySaleReturnItemInput {
  inventoryItemId?: string | null;
  productId?: string | null;
  serialNumber?: string | null;
  quantity?: number;
}

export class ApplySaleReturnPayload {
  saleId!: string;
  refundId!: string;
  shopId?: string;
  items!: ApplySaleReturnItemInput[];
  returnedBy?: string;
  customerId?: string | null;
  counterpartyName?: string | null;
  counterpartyPhone?: string | null;
}

export class ApplySaleReturnCommand extends BaseCommand<ApplySaleReturnPayload> {
  constructor(payload: ApplySaleReturnPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
