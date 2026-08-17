import { IRequestContext } from '@electronic-shop/types';

export class GetTreasuryMovementsQuery {
  constructor(public readonly payload: Record<string, never>, public readonly context?: IRequestContext) {}
}
