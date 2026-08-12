import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseItemsPayload } from './index.js';

export class GetPurchaseItemsQuery {
  constructor(
    public readonly payload: GetPurchaseItemsPayload,
    public readonly context?: IRequestContext
  ) {}
}