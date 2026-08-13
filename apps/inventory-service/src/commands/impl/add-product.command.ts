import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class AddProductPayload {
  shopId?: string; // null = shared with all shops; set = owner shop
  sharedWithOtherShops?: boolean; // true = share (with sharedShopIds or all); false = this shop only
  sharedShopIds?: string[]; // shops to share with when sharedWithOtherShops is true
  name!: string;
  sku?: string;
  description?: string;
  brandId?: string;
  categoryId?: string;
  productType?: string;
  trackingMethod?: string;
  deviceType?: string;
  specifications?: any;
}

export class AddProductCommand extends BaseCommand<AddProductPayload> {
  constructor(payload: AddProductPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
