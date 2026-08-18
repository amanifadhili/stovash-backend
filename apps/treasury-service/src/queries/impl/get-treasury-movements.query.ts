import { IRequestContext } from '@electronic-shop/types';

export class GetTreasuryMovementsQuery {
  constructor(
    public readonly payload: { movementTypes?: string[]; limit?: number },
    public readonly context?: IRequestContext,
  ) {}
}
