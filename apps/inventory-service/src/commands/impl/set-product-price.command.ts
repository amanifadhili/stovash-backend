import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class SetProductPricePayload {
  productId!: string;
  sellingPrice!: number;
}

export class SetProductPriceCommand extends BaseCommand<SetProductPricePayload> {
  constructor(payload: SetProductPricePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
