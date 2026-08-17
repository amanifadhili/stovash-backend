import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RecordGeneralExpenseCommand } from '../impl/record-general-expense.command.js';
import { recordGeneralExpense } from '../../engine-ledger/record-general-expense.js';

@CommandHandler(RecordGeneralExpenseCommand)
export class RecordGeneralExpenseHandler extends BaseCommandHandler<RecordGeneralExpenseCommand> {
  async execute(command: RecordGeneralExpenseCommand): Promise<ICommandResponse<any>> {
    return recordGeneralExpense(command.payload, command.context);
  }
}
