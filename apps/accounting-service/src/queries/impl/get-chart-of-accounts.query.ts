import { IRequestContext } from '@electronic-shop/types';

export class GetChartOfAccountsPayload {
  shopId?: string;
  type?: string;
}

export class GetChartOfAccountsQuery {
  constructor(
    public readonly payload: GetChartOfAccountsPayload,
    public readonly context?: IRequestContext,
  ) {}
}
