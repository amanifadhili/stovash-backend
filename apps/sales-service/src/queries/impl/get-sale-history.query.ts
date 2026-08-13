import { IRequestContext } from '@electronic-shop/types';
import { GetSaleHistoryPayload } from './index.js';

export class GetSaleHistoryQuery {
  constructor(
    public readonly payload: GetSaleHistoryPayload,
    public readonly context?: IRequestContext
  ) {}
}