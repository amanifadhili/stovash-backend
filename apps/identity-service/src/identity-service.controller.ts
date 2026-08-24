import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTenantCommand } from './commands/impl/create-tenant.command.js';
import { LoginUserCommand } from './commands/impl/login-user.command.js';
import { CreateUserCommand } from './commands/impl/create-user.command.js';
import { VerifyUserCommand } from './commands/impl/verify-user.command.js';
import { GetUsersCommand } from './commands/impl/get-users.command.js';

import { ManagePermissionsCommand } from './commands/handlers/permission-management.handler.js';

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

  @MessagePattern({ cmd: 'GetUsers' })
  async handleGetUsers(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new GetUsersCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPermissionTemplates' })
  async handleGetPermissionTemplates(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('GetPermissionTemplates', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'AssignTemplateToUser' })
  async handleAssignTemplateToUser(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('AssignTemplateToUser', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'SetUserPermissionOverride' })
  async handleSetUserPermissionOverride(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('SetUserPermissionOverride', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'RemoveUserPermissionOverride' })
  async handleRemoveUserPermissionOverride(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('RemoveUserPermissionOverride', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetUserEffectivePermissions' })
  async handleGetUserEffectivePermissions(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('GetUserEffectivePermissions', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetPermissionAuditLogs' })
  async handleGetPermissionAuditLogs(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('GetPermissionAuditLogs', data.payload || {}, data.context));
  }
}
