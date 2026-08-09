import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { AddProductCommand } from './commands/impl/add-product.command.js';
import { AddInventoryItemCommand } from './commands/impl/add-inventory-item.command.js';

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
}
