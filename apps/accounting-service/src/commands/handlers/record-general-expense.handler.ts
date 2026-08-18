import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RecordGeneralExpenseCommand } from '../impl/record-general-expense.command.js';
import { recordGeneralExpense } from '../../engine-ledger/record-general-expense.js';
import { sendTreasuryMovement } from '../../common/treasury-move.js';

@CommandHandler(RecordGeneralExpenseCommand)
export class RecordGeneralExpenseHandler extends BaseCommandHandler<RecordGeneralExpenseCommand> {
  constructor(@Inject('TREASURY_SERVICE') private readonly treasury: ClientProxy) {
    super();
  }

  async execute(command: RecordGeneralExpenseCommand): Promise<ICommandResponse<any>> {
    return recordGeneralExpense(command.payload, command.context, (payload, context) =>
      sendTreasuryMovement(this.treasury, payload, context),
    );
  }
}
