import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ApplySaleFulfillmentItemInput {
  inventoryItemId?: string | null;
  productId?: string | null;
  serialNumber?: string | null;
  quantity?: number;
}

export class ApplySaleFulfillmentPayload {
  saleId!: string;
  shopId?: string;
  items!: ApplySaleFulfillmentItemInput[];
  fulfilledBy?: string;
  customerId?: string | null;
  counterpartyName?: string | null;
  counterpartyPhone?: string | null;
}

export class ApplySaleFulfillmentCommand extends BaseCommand<ApplySaleFulfillmentPayload> {
  constructor(payload: ApplySaleFulfillmentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
