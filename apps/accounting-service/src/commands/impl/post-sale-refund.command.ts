import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { PostSaleRefundPayload } from '../../engine-ledger/post-sale-refund.js';

export class PostSaleRefundCommand extends BaseCommand<PostSaleRefundPayload> {
  constructor(payload: PostSaleRefundPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
