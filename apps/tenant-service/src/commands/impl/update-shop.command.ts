import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateShopPayload {
  shopId!: string;
  name?: string;
  address?: string;
  status?: string;
}

export class UpdateShopCommand extends BaseCommand<UpdateShopPayload> {
  constructor(payload: UpdateShopPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
