import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { PostFinancialCorrectionCommand } from '../impl/post-financial-correction.command.js';
import { postFinancialCorrection } from '../../engine-ledger/post-financial-correction.js';

@CommandHandler(PostFinancialCorrectionCommand)
export class PostFinancialCorrectionHandler extends BaseCommandHandler<PostFinancialCorrectionCommand> {
  async execute(command: PostFinancialCorrectionCommand): Promise<ICommandResponse<any>> {
    return postFinancialCorrection(command.payload, command.context);
  }
}
