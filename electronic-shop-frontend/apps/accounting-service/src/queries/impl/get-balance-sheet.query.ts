import { IRequestContext } from '@electronic-shop/types';

export class GetBalanceSheetPayload {
  shopId?: string;
  workPeriodId?: string;
  asOfDate?: string;
}

export class GetBalanceSheetQuery {
  constructor(
    public readonly payload: GetBalanceSheetPayload,
    public readonly context?: IRequestContext
  ) {}
}
