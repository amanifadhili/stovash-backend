import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseHistoryPayload } from './index.js';

export class GetPurchaseHistoryQuery {
  constructor(
    public readonly payload: GetPurchaseHistoryPayload,
    public readonly context?: IRequestContext
  ) {}
}