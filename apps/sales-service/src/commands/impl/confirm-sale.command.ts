import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ConfirmSalePayload {
  saleId!: string;
}

export class ConfirmSaleCommand extends BaseCommand<ConfirmSalePayload> {
  constructor(payload: ConfirmSalePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
