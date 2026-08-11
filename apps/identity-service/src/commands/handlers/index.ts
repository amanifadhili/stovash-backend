import { LoginUserHandler } from './login-user.handler.js';
import { CreateUserHandler } from './create-user.handler.js';
import { CreateTenantHandler } from './create-tenant.handler.js';
import { VerifyUserHandler } from './verify-user.handler.js';

export const CommandHandlers = [LoginUserHandler, CreateUserHandler, CreateTenantHandler, VerifyUserHandler];
