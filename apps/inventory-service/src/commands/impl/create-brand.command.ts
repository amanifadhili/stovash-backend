import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateBrandPayload {
  shopId?: string; // null = shared at tenant level; set = owned by that shop
  name!: string;
  description?: string;
}

export class CreateBrandCommand extends BaseCommand<CreateBrandPayload> {
  constructor(payload: CreateBrandPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
