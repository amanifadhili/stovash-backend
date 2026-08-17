import { IRequestContext } from '@electronic-shop/types';

export class GetFinancialOverviewQuery {
  constructor(
    public readonly payload: { occurredOn?: string },
    public readonly context?: IRequestContext,
  ) {}
}
