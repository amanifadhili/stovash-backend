import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { PostTreasuryBooksCommand } from '../impl/post-treasury-books.command.js';
import { postTreasuryBooks } from '../../engine-ledger/post-treasury-books.js';

@CommandHandler(PostTreasuryBooksCommand)
export class PostTreasuryBooksHandler extends BaseCommandHandler<PostTreasuryBooksCommand> {
  async execute(command: PostTreasuryBooksCommand): Promise<ICommandResponse<any>> {
    return postTreasuryBooks(command.payload, command.context);
  }
}
