import { IRequestContext } from '@electronic-shop/types';
import { GetPurchasesPayload } from './index.js';

export class GetPurchasesQuery {
  constructor(
    public readonly payload: GetPurchasesPayload,
    public readonly context?: IRequestContext
  ) {}
}