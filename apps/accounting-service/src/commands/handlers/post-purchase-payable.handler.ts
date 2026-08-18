import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { PostPurchasePayableCommand } from '../impl/post-purchase-payable.command.js';
import { postPurchasePayable } from '../../engine-ledger/post-purchase-books.js';

@CommandHandler(PostPurchasePayableCommand)
export class PostPurchasePayableHandler extends BaseCommandHandler<PostPurchasePayableCommand> {
  async execute(command: PostPurchasePayableCommand): Promise<ICommandResponse<any>> {
    return postPurchasePayable(command.payload, command.context);
  }
}
