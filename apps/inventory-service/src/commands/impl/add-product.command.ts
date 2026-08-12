import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class AddProductPayload {
  name!: string;
  description?: string;
  sku?: string;
  brand?: string;
}

export class AddProductCommand extends BaseCommand<AddProductPayload> {
  constructor(payload: AddProductPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
