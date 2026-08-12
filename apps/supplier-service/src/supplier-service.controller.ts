import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSupplierCommand } from './commands/impl/create-supplier.command.js';
import { GetSuppliersQuery } from './queries/impl/get-suppliers.query.js';

@Controller()
export class SupplierServiceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @MessagePattern({ cmd: 'CreateSupplier' })
  async handleCreateSupplier(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateSupplierCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetSuppliers' })
  async handleGetSuppliers(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetSuppliersQuery(data.payload, data.context));
  }
}
