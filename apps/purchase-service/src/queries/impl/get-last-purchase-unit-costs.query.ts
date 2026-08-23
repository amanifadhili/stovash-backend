import { IRequestContext } from '@electronic-shop/types';
import { GetLastPurchaseUnitCostsPayload } from './index.js';

export class GetLastPurchaseUnitCostsQuery {
  constructor(
    public readonly payload: GetLastPurchaseUnitCostsPayload,
    public readonly context?: IRequestContext,
  ) {}
}
