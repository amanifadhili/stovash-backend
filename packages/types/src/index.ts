export interface ICommandContext {
  tenantId: string;
  shopId: string;
  userId: string;
  workPeriodId: string;
  traceId: string;
}

export interface ICommandRequest<T = any> {
  command: string;
  payload: T;
}

export interface IApiResponse<T = any> {
  status: 'success' | 'error';
  message?: string;
  data?: T;
  traceId?: string;
  errorCode?: string;
}
