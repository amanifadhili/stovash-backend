import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateProductPayload {
  productId!: string;
  name?: string;
  description?: string;
  brandId?: string | null;
  categoryId?: string | null;
  productType?: string;
  trackingMethod?: string;
  specifications?: any[];
}

export class UpdateProductCommand extends BaseCommand<UpdateProductPayload> {
  constructor(payload: UpdateProductPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
