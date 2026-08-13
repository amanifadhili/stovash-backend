import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class AddProductPayload {
  shopId?: string; // null = shared at tenant level; set = owned by that shop
  name!: string;
  sku!: string;
  description?: string;
  brandId?: string;
  categoryId?: string;
  productType?: string;
  trackingMethod?: string;
  specifications?: any[];
}

export class AddProductCommand extends BaseCommand<AddProductPayload> {
  constructor(payload: AddProductPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
