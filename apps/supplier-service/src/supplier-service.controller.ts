import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSupplierCommand } from './commands/impl/create-supplier.command.js';
import { UpdateSupplierCommand } from './commands/impl/update-supplier.command.js';
import { DeleteSupplierCommand } from './commands/impl/delete-supplier.command.js';
import { GetSuppliersQuery } from './queries/impl/get-suppliers.query.js';
import { GetSupplierQuery } from './queries/impl/get-supplier.query.js';

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

  @MessagePattern({ cmd: 'GetSupplier' })
  async handleGetSupplier(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetSupplierQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdateSupplier' })
  async handleUpdateSupplier(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdateSupplierCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'DeleteSupplier' })
  async handleDeleteSupplier(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new DeleteSupplierCommand(data.payload, data.context));
  }
}
