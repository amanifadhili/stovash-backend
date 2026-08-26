import { IRequestContext } from '@electronic-shop/types';

export class GetOwnedUnsoldStockPositionPayload {
  shopId?: string;
}

export class GetOwnedUnsoldStockPositionQuery {
  constructor(
    public readonly payload: GetOwnedUnsoldStockPositionPayload,
    public readonly context?: IRequestContext,
  ) {}
}
