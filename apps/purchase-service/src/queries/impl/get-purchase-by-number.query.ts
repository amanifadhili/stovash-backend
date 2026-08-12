import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseByNumberPayload } from './index.js';

export class GetPurchaseByNumberQuery {
  constructor(
    public readonly payload: GetPurchaseByNumberPayload,
    public readonly context?: IRequestContext
  ) {}
}