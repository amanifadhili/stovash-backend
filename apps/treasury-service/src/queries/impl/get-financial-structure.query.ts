import { IRequestContext } from '@electronic-shop/types';

export class GetFinancialStructureQuery {
  constructor(
    public readonly payload: Record<string, never> = {},
    public readonly context?: IRequestContext,
  ) {}
}
