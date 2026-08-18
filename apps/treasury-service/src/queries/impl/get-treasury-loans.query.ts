import { IRequestContext } from '@electronic-shop/types';

export class GetTreasuryLoansQuery {
  constructor(public readonly payload: Record<string, never>, public readonly context?: IRequestContext) {}
}
