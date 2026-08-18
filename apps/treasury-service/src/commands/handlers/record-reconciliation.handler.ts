import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RecordReconciliationCommand } from '../impl/record-reconciliation.command.js';
import { recordReconciliation } from '../../treasury-movement/reconciliation.js';

@CommandHandler(RecordReconciliationCommand)
export class RecordReconciliationHandler extends BaseCommandHandler<RecordReconciliationCommand> {
  async execute(command: RecordReconciliationCommand): Promise<ICommandResponse<any>> {
    return recordReconciliation(command.payload, command.context);
  }
}
