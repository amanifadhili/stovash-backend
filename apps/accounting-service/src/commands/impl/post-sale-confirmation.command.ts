import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { PostSaleConfirmationPayload } from '../../engine-ledger/post-sale-books.js';

export class PostSaleConfirmationCommand extends BaseCommand<PostSaleConfirmationPayload> {
  constructor(payload: PostSaleConfirmationPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
