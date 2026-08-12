import { IRequestContext } from '@electronic-shop/types';

export class GetProductsPayload {
  shopId?: string;
  search?: string;
  brandId?: string;
  categoryId?: string;
  status?: string;
  productType?: string;
}

export class GetProductsQuery {
  constructor(
    public readonly payload: GetProductsPayload,
    public readonly context?: IRequestContext
  ) {}
}
