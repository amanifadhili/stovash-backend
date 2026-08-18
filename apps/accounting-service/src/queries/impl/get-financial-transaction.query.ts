import { IRequestContext } from '@electronic-shop/types';
import { GetFinancialTransactionPayload } from '../../financial-transaction/types.js';

export class GetFinancialTransactionQuery {
  constructor(
    public readonly payload: GetFinancialTransactionPayload,
    public readonly context?: IRequestContext,
  ) {}
}
