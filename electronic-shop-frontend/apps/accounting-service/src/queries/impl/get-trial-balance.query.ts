import { IRequestContext } from '@electronic-shop/types';

export class GetTrialBalancePayload {
  shopId?: string;
  workPeriodId?: string;
  startDate?: string;
  endDate?: string;
}

export class GetTrialBalanceQuery {
  constructor(
    public readonly payload: GetTrialBalancePayload,
    public readonly context?: IRequestContext
  ) {}
}
