export interface IRequestContext {
  tenantId: string;
  shopId: string;
  userId: string;
  workPeriodId: string;
  traceId: string;
  role?: string;
  roles?: string[];
  permissions?: string[];
  ipAddress?: string;
  userAgent?: string;
  // Enriched by the gateway from the verified JWT so downstream services can
  // seed tenant-scoped records (e.g. Staff) without extra lookups.
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface ITenantContext {
  id: string;
  isActive: boolean;
}

export interface IShopContext {
  id: string;
  tenantId: string;
  isActive: boolean;
}

export interface IWorkPeriodContext {
  id: string;
  shopId: string;
  status: 'OPEN' | 'CLOSED' | 'PENDING_CLOSING' | 'PENDING_RECONCILIATION';
}

export interface IUserContext {
  id: string;
  tenantId: string;
  isActive: boolean;
  roles: string[];
  permissions: string[];
}
