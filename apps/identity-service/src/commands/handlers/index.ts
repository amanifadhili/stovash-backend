import { CreateTenantHandler } from './create-tenant.handler.js';
import { LoginUserHandler } from './login-user.handler.js';
import { CreateUserHandler } from './create-user.handler.js';

export const CommandHandlers = [CreateTenantHandler, LoginUserHandler, CreateUserHandler];
