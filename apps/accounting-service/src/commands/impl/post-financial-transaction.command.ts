import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { PostFinancialTransactionPayload } from '../../financial-transaction/types.js';

export class PostFinancialTransactionCommand extends BaseCommand<PostFinancialTransactionPayload> {
  constructor(payload: PostFinancialTransactionPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
