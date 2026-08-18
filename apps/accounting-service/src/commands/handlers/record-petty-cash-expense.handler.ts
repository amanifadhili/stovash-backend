import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RecordPettyCashExpenseCommand } from '../impl/record-petty-cash-expense.command.js';
import { recordPettyCashExpense } from '../../engine-ledger/record-petty-cash-expense.js';
import { sendTreasuryMovement } from '../../common/treasury-move.js';

@CommandHandler(RecordPettyCashExpenseCommand)
export class RecordPettyCashExpenseHandler extends BaseCommandHandler<RecordPettyCashExpenseCommand> {
  constructor(@Inject('TREASURY_SERVICE') private readonly treasury: ClientProxy) {
    super();
  }

  async execute(command: RecordPettyCashExpenseCommand): Promise<ICommandResponse<any>> {
    return recordPettyCashExpense(command.payload, command.context, (payload, context) =>
      sendTreasuryMovement(this.treasury, payload, context),
    );
  }
}
