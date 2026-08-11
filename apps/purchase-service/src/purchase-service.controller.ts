import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { ProcessPurchaseCommand } from './commands/impl/process-purchase.command.js';
import { RecordPurchasePaymentCommand } from './commands/impl/record-purchase-payment.command.js';

@Controller()
export class PurchaseServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'ProcessPurchase' })
  async handleProcessPurchase(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessPurchaseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordPurchasePayment' })
  async handleRecordPurchasePayment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordPurchasePaymentCommand(data.payload, data.context));
  }
}
