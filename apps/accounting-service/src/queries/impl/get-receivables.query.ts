import { IRequestContext } from '@electronic-shop/types';

export class GetReceivablesQuery {
  constructor(
    public readonly payload: Record<string, never>,
    public readonly context?: IRequestContext,
  ) {}
}
