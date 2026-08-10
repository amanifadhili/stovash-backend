import { IRequestContext } from '@electronic-shop/types';

export class GetIncomeStatementPayload {
  shopId?: string;
  workPeriodId?: string;
  startDate?: string;
  endDate?: string;
}

export class GetIncomeStatementQuery {
  constructor(
    public readonly payload: GetIncomeStatementPayload,
    public readonly context?: IRequestContext
  ) {}
}
