import { IRequestContext } from '@electronic-shop/types';
import { GetPurchasePaymentsPayload } from './index.js';

export class GetPurchasePaymentsQuery {
  constructor(
    public readonly payload: GetPurchasePaymentsPayload,
    public readonly context?: IRequestContext
  ) {}
}