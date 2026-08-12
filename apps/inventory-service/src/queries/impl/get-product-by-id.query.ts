import { IRequestContext } from '@electronic-shop/types';

export class GetProductByIdPayload {
  productId!: string;
}

export class GetProductByIdQuery {
  constructor(
    public readonly payload: GetProductByIdPayload,
    public readonly context?: IRequestContext
  ) {}
}
