import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseReturnsPayload } from './index.js';

export class GetPurchaseReturnsQuery {
  constructor(
    public readonly payload: GetPurchaseReturnsPayload,
    public readonly context?: IRequestContext
  ) {}
}