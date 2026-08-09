export interface ICommandRequest<T = any> {
  command: string;
  payload: T;
  traceId?: string;
}

export interface ICommandResponse<T = any> {
  status: 'success' | 'error';
  message?: string;
  data?: T;
  traceId: string;
  errorCode?: string;
}

export interface ICommand {
  command: string;
  description?: string;
}

export interface IEvent<T = any> {
  eventId: string;
  eventType: string;
  eventVersion: string;
  tenantId: string;
  shopId: string;
  workPeriodId?: string;
  traceId: string;
  createdAt: Date;
  createdBy: string;
  payload: T;
}
