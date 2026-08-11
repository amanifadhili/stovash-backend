import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { ProcessSaleCommand } from './commands/impl/process-sale.command.js';
import { ConvertQuotationToSaleCommand } from './commands/impl/convert-quotation-to-sale.command.js';
import { RecordPartialPaymentCommand } from './commands/impl/record-partial-payment.command.js';
import { RecordBonusCommand } from './commands/impl/record-bonus.command.js';
import { ProcessLoanSaleCommand } from './commands/impl/process-loan-sale.command.js';

@Controller()
export class SalesServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'ProcessSale' })
  async handleProcessSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ConvertQuotationToSale' })
  async handleConvertQuotationToSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ConvertQuotationToSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordPartialPayment' })
  async handleRecordPartialPayment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordPartialPaymentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordBonus' })
  async handleRecordBonus(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordBonusCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessLoanSale' })
  async handleProcessLoanSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessLoanSaleCommand(data.payload, data.context));
  }
}
