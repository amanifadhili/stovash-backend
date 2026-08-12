import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { CreateShopCommand } from './commands/impl/create-shop.command.js';
import { GetTenantShopsCommand } from './commands/impl/get-tenant-shops.command.js';
import { GetTenantCommand } from './commands/impl/get-tenant.command.js';
import { GetTenantSubscriptionCommand } from './commands/impl/get-tenant-subscription.command.js';

@Controller()
export class TenantServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'CreateShop' })
  async handleCreateShop(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateShopCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetTenantShops' })
  async handleGetTenantShops(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new GetTenantShopsCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetTenant' })
  async handleGetTenant(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new GetTenantCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetTenantSubscription' })
  async handleGetTenantSubscription(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new GetTenantSubscriptionCommand(data.payload, data.context));
  }
}
