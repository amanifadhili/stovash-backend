import { CreateTenantHandler } from './create-tenant.handler.js';
import { CreateShopHandler } from './create-shop.handler.js';
import { CreateStaffHandler } from './create-staff.handler.js';
import { CreateRoleHandler } from './create-role.handler.js';
import { AssignRoleHandler } from './assign-role.handler.js';

export const CommandHandlers = [
  CreateTenantHandler,
  CreateShopHandler,
  CreateStaffHandler,
  CreateRoleHandler,
  AssignRoleHandler,
];
