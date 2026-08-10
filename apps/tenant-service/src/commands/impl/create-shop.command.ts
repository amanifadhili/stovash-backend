import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateShopPayload {
  tenantId!: string;
  name!: string;
  address?: string;
  phone?: string;
  status?: string;
}

export class CreateShopCommand extends BaseCommand<CreateShopPayload> {
  constructor(payload: CreateShopPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
