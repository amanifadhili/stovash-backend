import { IRequestContext } from '@electronic-shop/types';

export class GetActiveWorkPeriodPayload {
  shopId?: string;
}

export class GetActiveWorkPeriodQuery {
  constructor(
    public readonly payload: GetActiveWorkPeriodPayload,
    public readonly context?: IRequestContext,
  ) {}
}
