import { IRequestContext } from '@electronic-shop/types';

export class GetStockUnitsPayload {
  shopId?: string;
  productId?: string;
  categoryId?: string;
  brandId?: string;
  status?: string[];
  search?: string;
  limit?: number;
}

export class GetStockUnitsQuery {
  constructor(
    public readonly payload: GetStockUnitsPayload,
    public readonly context?: IRequestContext
  ) {}
}
