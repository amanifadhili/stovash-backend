import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CancelSalePayload {
  saleId!: string;
  reason?: string;
}

export class CancelSaleCommand extends BaseCommand<CancelSalePayload> {
  constructor(payload: CancelSalePayload, context?: IRequestContext) {
    super(payload, context);
  }
}