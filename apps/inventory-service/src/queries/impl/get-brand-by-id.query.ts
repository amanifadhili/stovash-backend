import { IRequestContext } from '@electronic-shop/types';

export class GetBrandByIdPayload {
  brandId!: string;
}

export class GetBrandByIdQuery {
  constructor(
    public readonly payload: GetBrandByIdPayload,
    public readonly context?: IRequestContext
  ) {}
}
