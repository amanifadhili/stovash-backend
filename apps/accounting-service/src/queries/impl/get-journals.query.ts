import { IRequestContext } from '@electronic-shop/types';

export class GetJournalsQuery {
  constructor(
    public readonly payload: { type?: string; occurredOn?: string },
    public readonly context?: IRequestContext,
  ) {}
}
