import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class FulfillSalePayload {
  saleId!: string;
}

export class FulfillSaleCommand extends BaseCommand<FulfillSalePayload> {
  constructor(payload: FulfillSalePayload, context?: IRequestContext) {
    super(payload, context);
  }
}