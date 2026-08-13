import { IRequestContext } from '@electronic-shop/types';
import { GetSalesPayload } from './index.js';

export class GetSalesQuery {
  constructor(
    public readonly payload: GetSalesPayload,
    public readonly context?: IRequestContext
  ) {}
}