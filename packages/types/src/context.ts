export interface IRequestContext {
  tenantId: string;
  shopId: string;
  userId: string;
  workPeriodId: string;
  traceId: string;
  ipAddress?: string;
  userAgent?: string;
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
