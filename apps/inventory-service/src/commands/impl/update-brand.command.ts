import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateBrandPayload {
  brandId!: string;
  shopId?: string | null; // null = shared with all shops; set = owner shop
  sharedWithOtherShops?: boolean;
  sharedShopIds?: string[];
  name?: string;
  description?: string;
}

export class UpdateBrandCommand extends BaseCommand<UpdateBrandPayload> {
  constructor(payload: UpdateBrandPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
