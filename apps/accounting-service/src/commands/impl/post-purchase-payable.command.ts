import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { PostPurchasePayablePayload } from '../../engine-ledger/post-purchase-books.js';

export class PostPurchasePayableCommand extends BaseCommand<PostPurchasePayablePayload> {
  constructor(payload: PostPurchasePayablePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
