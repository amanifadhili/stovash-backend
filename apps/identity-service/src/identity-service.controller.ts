import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTenantCommand } from './commands/impl/create-tenant.command.js';
import { LoginUserCommand } from './commands/impl/login-user.command.js';
import { CreateUserCommand } from './commands/impl/create-user.command.js';
import { VerifyUserCommand } from './commands/impl/verify-user.command.js';

@Controller()
export class IdentityServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  @MessagePattern({ cmd: 'CreateTenant' })
  async handleCreateTenant(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateTenantCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'LoginUser' })
  async handleLoginUser(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new LoginUserCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'VerifyUser' })
  async handleVerifyUser(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new VerifyUserCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateUser' })
  async handleCreateUser(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateUserCommand(data.payload, data.context));
  }
}
