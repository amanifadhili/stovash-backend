import { IRequestContext } from '@electronic-shop/types';

export class GetMonthlyPositionQuery {
  constructor(
    public readonly payload: { yearMonth?: string },
    public readonly context?: IRequestContext,
  ) {}
}
