import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RecordOperationalDepositCommand } from './commands/impl/record-operational-deposit.command.js';
import { ReconcilePaymentMethodCommand } from './commands/impl/reconcile-payment-method.command.js';
import { CreatePaymentMethodCommand } from './commands/impl/create-payment-method.command.js';
import { CreateTransferCommand } from './commands/impl/create-transfer.command.js';
import { CreatePhysicalConfirmationCommand } from './commands/impl/create-physical-confirmation.command.js';
import { GetPaymentMethodsQuery } from './queries/impl/get-payment-methods.query.js';
import { GetTreasuryActivityQuery } from './queries/impl/get-treasury-activity.query.js';
import { RecordTreasuryLoanCommand } from './commands/impl/record-treasury-loan.command.js';
import { RecordLoanRepaymentCommand } from './commands/impl/record-loan-repayment.command.js';
import { CreatePhysicalAccountCommand } from './commands/impl/create-physical-account.command.js';
import { GetFinancialStructureQuery } from './queries/impl/get-financial-structure.query.js';
import { CreateTreasuryMovementCommand } from './commands/impl/create-treasury-movement.command.js';
import { RecordReconciliationCommand } from './commands/impl/record-reconciliation.command.js';
import { ApproveReconciliationAdjustmentCommand } from './commands/impl/approve-reconciliation-adjustment.command.js';
import { GetFundBalancesQuery } from './queries/impl/get-fund-balances.query.js';
import { GetTreasuryMovementsQuery } from './queries/impl/get-treasury-movements.query.js';
import { GetTreasuryLoansQuery } from './queries/impl/get-treasury-loans.query.js';
import { GetProfitTransferPositionQuery } from './queries/impl/get-profit-transfer-position.query.js';
import { GetReconciliationsQuery } from './queries/impl/get-reconciliations.query.js';
import { GetDailyPositionQuery } from './queries/impl/get-daily-position.query.js';
import { GetMonthlyPositionQuery } from './queries/impl/get-monthly-position.query.js';
import { GetFinancialOverviewQuery } from './queries/impl/get-financial-overview.query.js';
import { GetDashboardCashFlowAnalyticsQuery } from './queries/impl/get-dashboard-cash-flow-analytics.query.js';
import { GetDashboardLoanAnalyticsQuery } from './queries/impl/get-dashboard-loan-analytics.query.js';

@Controller()
export class TreasuryServiceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @MessagePattern({ cmd: 'RecordOperationalDeposit' })
  async handleRecordOperationalDeposit(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordOperationalDepositCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ReconcilePaymentMethod' })
  async handleReconcilePaymentMethod(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ReconcilePaymentMethodCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreatePaymentMethod' })
  async handleCreatePaymentMethod(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreatePaymentMethodCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateTransfer' })
  async handleCreateTransfer(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateTransferCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreatePhysicalConfirmation' })
  async handleCreatePhysicalConfirmation(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreatePhysicalConfirmationCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPaymentMethods' })
  async handleGetPaymentMethods(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPaymentMethodsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetTreasuryActivity' })
  async handleGetTreasuryActivity(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetTreasuryActivityQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'RecordTreasuryLoan' })
  async handleRecordTreasuryLoan(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordTreasuryLoanCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordLoanRepayment' })
  async handleRecordLoanRepayment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordLoanRepaymentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetFinancialStructure' })
  async handleGetFinancialStructure(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetFinancialStructureQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'CreatePhysicalAccount' })
  async handleCreatePhysicalAccount(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreatePhysicalAccountCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateTreasuryMovement' })
  async handleCreateTreasuryMovement(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateTreasuryMovementCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetFundBalances' })
  async handleGetFundBalances(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetFundBalancesQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetTreasuryMovements' })
  async handleGetTreasuryMovements(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetTreasuryMovementsQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetTreasuryLoans' })
  async handleGetTreasuryLoans(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetTreasuryLoansQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetProfitTransferPosition' })
  async handleGetProfitTransferPosition(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetProfitTransferPositionQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'RecordReconciliation' })
  async handleRecordReconciliation(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordReconciliationCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ApproveReconciliationAdjustment' })
  async handleApproveReconciliationAdjustment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ApproveReconciliationAdjustmentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetReconciliations' })
  async handleGetReconciliations(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetReconciliationsQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetDailyPosition' })
  async handleGetDailyPosition(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetDailyPositionQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetMonthlyPosition' })
  async handleGetMonthlyPosition(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetMonthlyPositionQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetFinancialOverview' })
  async handleGetFinancialOverview(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetFinancialOverviewQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetDashboardCashFlowAnalytics' })
  async handleGetDashboardCashFlowAnalytics(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardCashFlowAnalyticsQuery(data.payload || {}, data.context),
    );
  }

  @MessagePattern({ cmd: 'GetDashboardLoanAnalytics' })
  async handleGetDashboardLoanAnalytics(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardLoanAnalyticsQuery(data.payload || {}, data.context),
    );
  }
}
