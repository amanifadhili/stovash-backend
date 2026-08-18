import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { PostSaleConfirmationCommand } from '../impl/post-sale-confirmation.command.js';
import { postSaleConfirmation } from '../../engine-ledger/post-sale-books.js';

@CommandHandler(PostSaleConfirmationCommand)
export class PostSaleConfirmationHandler extends BaseCommandHandler<PostSaleConfirmationCommand> {
  async execute(command: PostSaleConfirmationCommand): Promise<ICommandResponse<any>> {
    return postSaleConfirmation(command.payload, command.context);
  }
}
