import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseReceivingsPayload } from './index.js';

export class GetPurchaseReceivingsQuery {
  constructor(
    public readonly payload: GetPurchaseReceivingsPayload,
    public readonly context?: IRequestContext
  ) {}
}