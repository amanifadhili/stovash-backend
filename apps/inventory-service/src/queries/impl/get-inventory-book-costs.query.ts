import { IRequestContext } from '@electronic-shop/types';

export class GetInventoryBookCostsPayload {
  inventoryItemIds!: string[];
}

export class GetInventoryBookCostsQuery {
  constructor(
    public readonly payload: GetInventoryBookCostsPayload,
    public readonly context?: IRequestContext,
  ) {}
}
