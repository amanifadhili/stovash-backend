import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { AddProductCommand } from './commands/impl/add-product.command.js';
import { AddInventoryItemCommand } from './commands/impl/add-inventory-item.command.js';
import { ProcessPosSaleCommand } from './commands/impl/process-pos-sale.command.js';
import { ReceiveGoodsCommand } from './commands/impl/receive-goods.command.js';
import { ProcessSalesReturnCommand } from './commands/impl/process-sales-return.command.js';
import { CreateWarrantyClaimCommand } from './commands/impl/create-warranty-claim.command.js';

@Controller()
export class InventoryServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'AddProduct' })
  async handleAddProduct(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddProductCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddInventoryItem' })
  async handleAddInventoryItem(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddInventoryItemCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessPosSale' })
  async handleProcessPosSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessPosSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ReceiveGoods' })
  async handleReceiveGoods(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ReceiveGoodsCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessSalesReturn' })
  async handleProcessSalesReturn(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessSalesReturnCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateWarrantyClaim' })
  async handleCreateWarrantyClaim(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateWarrantyClaimCommand(data.payload, data.context));
  }
}



