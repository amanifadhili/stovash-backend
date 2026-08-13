import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateProductPayload {
  productId!: string;
  shopId?: string | null; // null = shared with all shops; set = owner shop
  sharedWithOtherShops?: boolean;
  sharedShopIds?: string[];
  name?: string;
  description?: string;
  brandId?: string | null;
  categoryId?: string | null;
  productType?: string;
  trackingMethod?: string;
  deviceType?: string;
  specifications?: any;
}

export class UpdateProductCommand extends BaseCommand<UpdateProductPayload> {
  constructor(payload: UpdateProductPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
