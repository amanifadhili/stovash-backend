import { IRequestContext } from '@electronic-shop/types';

export class GetProductsPayload {
  shopId?: string;
  search?: string;
}

export class GetProductsQuery {
  constructor(
    public readonly payload: GetProductsPayload,
    public readonly context?: IRequestContext
  ) {}
}
