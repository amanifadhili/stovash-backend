import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { RepayPettyCashAdvanceCommand } from '../impl/repay-petty-cash-advance.command.js';
import { repayPettyCashAdvance } from '../../engine-ledger/repay-petty-cash-advance.js';
import { sendTreasuryMovement } from '../../common/treasury-move.js';

@CommandHandler(RepayPettyCashAdvanceCommand)
export class RepayPettyCashAdvanceHandler extends BaseCommandHandler<RepayPettyCashAdvanceCommand> {
  constructor(@Inject('TREASURY_SERVICE') private readonly treasury: ClientProxy) {
    super();
  }

  async execute(command: RepayPettyCashAdvanceCommand): Promise<ICommandResponse<any>> {
    return repayPettyCashAdvance(command.payload, command.context, (payload, context) =>
      sendTreasuryMovement(this.treasury, payload, context),
    );
  }
}
