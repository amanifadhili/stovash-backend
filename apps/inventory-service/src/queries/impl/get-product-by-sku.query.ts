import { IRequestContext } from '@electronic-shop/types';

export class GetProductBySkuPayload {
  sku!: string;
}

export class GetProductBySkuQuery {
  constructor(
    public readonly payload: GetProductBySkuPayload,
    public readonly context?: IRequestContext
  ) {}
}
