import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateBrandPayload {
  brandId!: string;
  name?: string;
  description?: string;
}

export class UpdateBrandCommand extends BaseCommand<UpdateBrandPayload> {
  constructor(payload: UpdateBrandPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
