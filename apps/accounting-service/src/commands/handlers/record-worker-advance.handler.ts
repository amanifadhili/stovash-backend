import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RecordWorkerAdvanceCommand } from '../impl/record-worker-advance.command.js';
import { recordWorkerAdvance } from '../../engine-ledger/record-worker-advance.js';
import { sendTreasuryMovement } from '../../common/treasury-move.js';

@CommandHandler(RecordWorkerAdvanceCommand)
export class RecordWorkerAdvanceHandler extends BaseCommandHandler<RecordWorkerAdvanceCommand> {
  constructor(@Inject('TREASURY_SERVICE') private readonly treasury: ClientProxy) {
    super();
  }

  async execute(command: RecordWorkerAdvanceCommand): Promise<ICommandResponse<any>> {
    return recordWorkerAdvance(command.payload, command.context, (payload, context) =>
      sendTreasuryMovement(this.treasury, payload, context),
    );
  }
}
