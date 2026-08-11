export enum ErrorCode {
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  BUSINESS_RULE_VIOLATION = 'BUSINESS_RULE_VIOLATION',
  INVALID_TENANT = 'INVALID_TENANT',
  INVALID_SHOP = 'INVALID_SHOP',
  WORK_PERIOD_CLOSED = 'WORK_PERIOD_CLOSED',
  TENANT_EXISTS = 'TENANT_EXISTS',
}

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode | string,
    message: string,
    public readonly details?: any,
    public readonly httpStatus: number = 400
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
