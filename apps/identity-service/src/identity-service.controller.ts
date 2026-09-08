import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTenantCommand } from './commands/impl/create-tenant.command.js';
import { LoginUserCommand } from './commands/impl/login-user.command.js';
import { CreateUserCommand } from './commands/impl/create-user.command.js';
import { VerifyUserCommand } from './commands/impl/verify-user.command.js';
import { GetUsersCommand } from './commands/impl/get-users.command.js';
import { HandleGoogleUserCommand } from './commands/impl/handle-google-user.command.js';
import { CreateSessionCommand } from './commands/impl/create-session.command.js';
import { GetUserFromSessionCommand } from './commands/impl/get-user-from-session.command.js';
import { DeleteSessionCommand } from './commands/impl/delete-session.command.js';
import { CompleteGoogleOnboardingCommand } from './commands/impl/complete-google-onboarding.command.js';
import { RequestPasswordResetCommand } from './commands/impl/request-password-reset.command.js';
import { ResetPasswordCommand } from './commands/impl/reset-password.command.js';

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

  @MessagePattern({ cmd: 'RequestPasswordReset' })
  async handleRequestPasswordReset(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RequestPasswordResetCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ResetPassword' })
  async handleResetPassword(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ResetPasswordCommand(data.payload, data.context));
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

  @MessagePattern({ cmd: 'CreatePermissionTemplate' })
  async handleCreatePermissionTemplate(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('CreatePermissionTemplate', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'UpdatePermissionTemplate' })
  async handleUpdatePermissionTemplate(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('UpdatePermissionTemplate', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'DeletePermissionTemplate' })
  async handleDeletePermissionTemplate(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ManagePermissionsCommand('DeletePermissionTemplate', data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'handle_google_user' })
  async handleGoogleUser(@Payload() data: any) {
    return this.commandBus.execute(new HandleGoogleUserCommand(data));
  }

  @MessagePattern({ cmd: 'create_session' })
  async handleCreateSession(@Payload() data: any) {
    return this.commandBus.execute(new CreateSessionCommand(data));
  }

  @MessagePattern({ cmd: 'get_user_from_session' })
  async handleGetUserFromSession(@Payload() data: any) {
    return this.commandBus.execute(new GetUserFromSessionCommand(data));
  }

  @MessagePattern({ cmd: 'delete_session' })
  async handleDeleteSession(@Payload() data: any) {
    return this.commandBus.execute(new DeleteSessionCommand(data));
  }

  @MessagePattern({ cmd: 'CompleteGoogleOnboarding' })
  async handleCompleteGoogleOnboarding(@Payload() data: any) {
    return this.commandBus.execute(new CompleteGoogleOnboardingCommand(data));
  }
}
