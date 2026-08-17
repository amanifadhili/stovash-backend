import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { CreateTreasuryMovementCommand } from '../impl/create-treasury-movement.command.js';
import { createTreasuryMovement } from '../../treasury-movement/create-treasury-movement.js';
import { AccountingBooksBridge } from '../../treasury-movement/accounting-books-bridge.js';

@CommandHandler(CreateTreasuryMovementCommand)
export class CreateTreasuryMovementHandler extends BaseCommandHandler<CreateTreasuryMovementCommand> {
  constructor(private readonly books: AccountingBooksBridge) {
    super();
  }

  async execute(command: CreateTreasuryMovementCommand): Promise<ICommandResponse<any>> {
    return createTreasuryMovement(command.payload, command.context, this.books);
  }
}
