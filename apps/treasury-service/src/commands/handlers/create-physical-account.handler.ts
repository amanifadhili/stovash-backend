import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { CreatePhysicalAccountCommand } from '../impl/create-physical-account.command.js';
import { createPhysicalAccount } from '../../financial-structure/create-physical-account.js';
import { PhysicalAccountDto } from '../../financial-structure/types.js';

@CommandHandler(CreatePhysicalAccountCommand)
export class CreatePhysicalAccountHandler extends BaseCommandHandler<CreatePhysicalAccountCommand> {
  async execute(command: CreatePhysicalAccountCommand): Promise<ICommandResponse<PhysicalAccountDto>> {
    return createPhysicalAccount(command.payload, command.context);
  }
}
