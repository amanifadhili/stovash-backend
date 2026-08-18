import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { PostSaleRefundCommand } from '../impl/post-sale-refund.command.js';
import { postSaleRefund } from '../../engine-ledger/post-sale-refund.js';

@CommandHandler(PostSaleRefundCommand)
export class PostSaleRefundHandler extends BaseCommandHandler<PostSaleRefundCommand> {
  async execute(command: PostSaleRefundCommand): Promise<ICommandResponse<any>> {
    return postSaleRefund(command.payload, command.context);
  }
}
