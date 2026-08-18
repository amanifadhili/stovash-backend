import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { PostTreasuryBooksPayload } from '../../engine-ledger/post-treasury-books.js';

export class PostTreasuryBooksCommand extends BaseCommand<PostTreasuryBooksPayload> {
  constructor(payload: PostTreasuryBooksPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
