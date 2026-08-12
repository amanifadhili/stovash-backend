import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { PostJournalEntryCommand } from './commands/impl/post-journal-entry.command.js';
import { CreateLedgerAccountCommand } from './commands/impl/create-ledger-account.command.js';
import { OpenWorkPeriodCommand } from './commands/impl/open-work-period.command.js';
import { CloseWorkPeriodCommand } from './commands/impl/close-work-period.command.js';
import { GetTrialBalanceQuery } from './queries/impl/get-trial-balance.query.js';
import { GetIncomeStatementQuery } from './queries/impl/get-income-statement.query.js';
import { GetBalanceSheetQuery } from './queries/impl/get-balance-sheet.query.js';
import { GetAccountTransactionsQuery } from './queries/impl/get-account-transactions.query.js';

@Controller()
export class AccountingServiceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

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

  @MessagePattern({ cmd: 'GetTrialBalance' })
  async handleGetTrialBalance(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetTrialBalanceQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetIncomeStatement' })
  async handleGetIncomeStatement(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetIncomeStatementQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetBalanceSheet' })
  async handleGetBalanceSheet(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetBalanceSheetQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetAccountTransactions' })
  async handleGetAccountTransactions(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetAccountTransactionsQuery(data.payload, data.context));
  }
}


