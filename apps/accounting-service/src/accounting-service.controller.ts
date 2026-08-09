import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { PostJournalEntryCommand } from './commands/impl/post-journal-entry.command.js';
import { CreateLedgerAccountCommand } from './commands/impl/create-ledger-account.command.js';
import { OpenWorkPeriodCommand } from './commands/impl/open-work-period.command.js';
import { CloseWorkPeriodCommand } from './commands/impl/close-work-period.command.js';

@Controller()
export class AccountingServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'PostJournalEntry' })
  async handlePostJournalEntry(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostJournalEntryCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateLedgerAccount' })
  async handleCreateLedgerAccount(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateLedgerAccountCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'OpenWorkPeriod' })
  async handleOpenWorkPeriod(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new OpenWorkPeriodCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CloseWorkPeriod' })
  async handleCloseWorkPeriod(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CloseWorkPeriodCommand(data.payload, data.context));
  }
}

