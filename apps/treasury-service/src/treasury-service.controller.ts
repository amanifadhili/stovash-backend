import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { RecordOperationalDepositCommand } from './commands/impl/record-operational-deposit.command.js';
import { ReconcilePaymentMethodCommand } from './commands/impl/reconcile-payment-method.command.js';
import { CreatePaymentMethodCommand } from './commands/impl/create-payment-method.command.js';
import { CreateTransferCommand } from './commands/impl/create-transfer.command.js';
import { CreatePhysicalConfirmationCommand } from './commands/impl/create-physical-confirmation.command.js';

@Controller()
export class TreasuryServiceController {
  constructor(private readonly commandBus: CommandBus) {}

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
}
