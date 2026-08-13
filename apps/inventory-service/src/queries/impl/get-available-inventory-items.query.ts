import { IRequestContext } from '@electronic-shop/types';

export class GetAvailableInventoryItemsPayload {
  productId?: string;
  shopId?: string;
  search?: string;
  limit?: number;
}

export class GetAvailableInventoryItemsQuery {
  constructor(
    public readonly payload: GetAvailableInventoryItemsPayload,
    public readonly context?: IRequestContext
  ) {}
}