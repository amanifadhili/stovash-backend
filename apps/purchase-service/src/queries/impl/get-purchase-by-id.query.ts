import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseByIdPayload } from './index.js';

export class GetPurchaseByIdQuery {
  constructor(
    public readonly payload: GetPurchaseByIdPayload,
    public readonly context?: IRequestContext
  ) {}
}