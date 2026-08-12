import { IRequestContext } from '@electronic-shop/types';

export class GetAccountTransactionsPayload {
  shopId?: string;
  workPeriodId?: string;
  startDate?: string;
  endDate?: string;
}

export class GetAccountTransactionsQuery {
  constructor(
    public readonly payload: GetAccountTransactionsPayload,
    public readonly context?: IRequestContext
  ) {}
}
