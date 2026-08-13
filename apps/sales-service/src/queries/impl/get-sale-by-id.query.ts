import { IRequestContext } from '@electronic-shop/types';
import { GetSaleByIdPayload } from './index.js';

export class GetSaleByIdQuery {
  constructor(
    public readonly payload: GetSaleByIdPayload,
    public readonly context?: IRequestContext
  ) {}
}