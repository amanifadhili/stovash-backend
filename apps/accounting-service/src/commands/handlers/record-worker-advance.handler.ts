import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RecordWorkerAdvanceCommand } from '../impl/record-worker-advance.command.js';
import { recordWorkerAdvance } from '../../engine-ledger/record-worker-advance.js';

@CommandHandler(RecordWorkerAdvanceCommand)
export class RecordWorkerAdvanceHandler extends BaseCommandHandler<RecordWorkerAdvanceCommand> {
  async execute(command: RecordWorkerAdvanceCommand): Promise<ICommandResponse<any>> {
    return recordWorkerAdvance(command.payload, command.context);
  }
}
