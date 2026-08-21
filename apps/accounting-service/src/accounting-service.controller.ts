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
import { RecordExpenseCommand } from './commands/impl/record-expense.command.js';
import { GetExpensesQuery } from './queries/impl/get-expenses.query.js';
import { GetChartOfAccountsQuery } from './queries/impl/get-chart-of-accounts.query.js';
import { GetActiveWorkPeriodQuery } from './queries/impl/get-active-work-period.query.js';
import { PostFinancialTransactionCommand } from './commands/impl/post-financial-transaction.command.js';
import { GetFinancialTransactionQuery } from './queries/impl/get-financial-transaction.query.js';
import { RecordGeneralExpenseCommand } from './commands/impl/record-general-expense.command.js';
import { RecordWorkerAdvanceCommand } from './commands/impl/record-worker-advance.command.js';
import { RepayPettyCashAdvanceCommand } from './commands/impl/repay-petty-cash-advance.command.js';
import { RecordPettyCashExpenseCommand } from './commands/impl/record-petty-cash-expense.command.js';
import { GetAccountingAccountsQuery } from './queries/impl/get-accounting-accounts.query.js';
import { GetJournalsQuery } from './queries/impl/get-journals.query.js';
import { GetReceivablesQuery } from './queries/impl/get-receivables.query.js';
import { PostTreasuryBooksCommand } from './commands/impl/post-treasury-books.command.js';
import { GetProfitAllocationQuery } from './queries/impl/get-profit-allocation.query.js';
import { GetEngineReportQuery } from './queries/impl/get-engine-report.query.js';
import { PostSaleConfirmationCommand } from './commands/impl/post-sale-confirmation.command.js';
import { PostPurchasePayableCommand } from './commands/impl/post-purchase-payable.command.js';
import { PostFinancialCorrectionCommand } from './commands/impl/post-financial-correction.command.js';
import { PostSaleRefundCommand } from './commands/impl/post-sale-refund.command.js';
import { GetDashboardProfitAnalyticsQuery } from './queries/impl/get-dashboard-profit-analytics.query.js';
import { GetDashboardArApAnalyticsQuery } from './queries/impl/get-dashboard-ar-ap-analytics.query.js';

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

  @MessagePattern({ cmd: 'RecordExpense' })
  async handleRecordExpense(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordExpenseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetExpenses' })
  async handleGetExpenses(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetExpensesQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetChartOfAccounts' })
  async handleGetChartOfAccounts(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetChartOfAccountsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetActiveWorkPeriod' })
  async handleGetActiveWorkPeriod(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetActiveWorkPeriodQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'PostFinancialTransaction' })
  async handlePostFinancialTransaction(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostFinancialTransactionCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetFinancialTransaction' })
  async handleGetFinancialTransaction(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetFinancialTransactionQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordGeneralExpense' })
  async handleRecordGeneralExpense(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordGeneralExpenseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordWorkerAdvance' })
  async handleRecordWorkerAdvance(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordWorkerAdvanceCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordPettyCashAdvance' })
  async handleRecordPettyCashAdvance(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordWorkerAdvanceCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RepayPettyCashAdvance' })
  async handleRepayPettyCashAdvance(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RepayPettyCashAdvanceCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordPettyCashExpense' })
  async handleRecordPettyCashExpense(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordPettyCashExpenseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetAccountingAccounts' })
  async handleGetAccountingAccounts(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetAccountingAccountsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetJournals' })
  async handleGetJournals(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetJournalsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetReceivables' })
  async handleGetReceivables(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetReceivablesQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'PostTreasuryBooks' })
  async handlePostTreasuryBooks(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostTreasuryBooksCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetProfitAllocation' })
  async handleGetProfitAllocation(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetProfitAllocationQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetEngineReport' })
  async handleGetEngineReport(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetEngineReportQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetDashboardProfitAnalytics' })
  async handleGetDashboardProfitAnalytics(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardProfitAnalyticsQuery(data.payload || {}, data.context),
    );
  }

  @MessagePattern({ cmd: 'GetDashboardArApAnalytics' })
  async handleGetDashboardArApAnalytics(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardArApAnalyticsQuery(data.payload || {}, data.context),
    );
  }

  @MessagePattern({ cmd: 'PostSaleConfirmation' })
  async handlePostSaleConfirmation(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostSaleConfirmationCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'PostPurchasePayable' })
  async handlePostPurchasePayable(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostPurchasePayableCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'PostFinancialCorrection' })
  async handlePostFinancialCorrection(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostFinancialCorrectionCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'PostSaleRefund' })
  async handlePostSaleRefund(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new PostSaleRefundCommand(data.payload, data.context));
  }
}

