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
}
