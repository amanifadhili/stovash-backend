import { IRequestContext } from '@electronic-shop/types';

export class GetDailyPositionQuery {
  constructor(
    public readonly payload: { occurredOn?: string },
    public readonly context?: IRequestContext,
  ) {}
}
