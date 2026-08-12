import { IRequestContext } from '@electronic-shop/types';

export class GetSuppliersPayload {
  shopId?: string;
  search?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export class GetSuppliersQuery {
  constructor(
    public readonly payload: GetSuppliersPayload,
    public readonly context?: IRequestContext
  ) {}
}
