import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { PostFinancialCorrectionPayload } from '../../engine-ledger/post-financial-correction.js';

export class PostFinancialCorrectionCommand extends BaseCommand<PostFinancialCorrectionPayload> {
  constructor(payload: PostFinancialCorrectionPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
