import { CreateTenantHandler } from './create-tenant.handler.js';
import { CreateShopHandler } from './create-shop.handler.js';
import { CreateStaffHandler } from './create-staff.handler.js';
import { CreateRoleHandler } from './create-role.handler.js';
import { AssignRoleHandler } from './assign-role.handler.js';
import { GetTenantShopsHandler } from './get-tenant-shops.handler.js';
import { GetTenantHandler } from './get-tenant.handler.js';
import { GetTenantSubscriptionHandler } from './get-tenant-subscription.handler.js';

export const CommandHandlers = [
  CreateTenantHandler,
  CreateShopHandler,
  CreateStaffHandler,
  CreateRoleHandler,
  AssignRoleHandler,
  GetTenantShopsHandler,
  GetTenantHandler,
  GetTenantSubscriptionHandler,
];
