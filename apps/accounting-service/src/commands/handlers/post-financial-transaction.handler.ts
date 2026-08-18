import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { PostFinancialTransactionCommand } from '../impl/post-financial-transaction.command.js';
import { postFinancialTransaction } from '../../financial-transaction/post-financial-transaction.js';
import { PostedFinancialTransactionDto } from '../../financial-transaction/types.js';

@CommandHandler(PostFinancialTransactionCommand)
export class PostFinancialTransactionHandler extends BaseCommandHandler<PostFinancialTransactionCommand> {
  async execute(
    command: PostFinancialTransactionCommand,
  ): Promise<ICommandResponse<PostedFinancialTransactionDto>> {
    return postFinancialTransaction(command.payload, command.context);
  }
}
