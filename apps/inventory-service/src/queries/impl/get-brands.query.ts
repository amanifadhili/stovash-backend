import { IRequestContext } from '@electronic-shop/types';

export class GetBrandsPayload {
  search?: string;
}

export class GetBrandsQuery {
  constructor(
    public readonly payload: GetBrandsPayload,
    public readonly context?: IRequestContext
  ) {}
}
