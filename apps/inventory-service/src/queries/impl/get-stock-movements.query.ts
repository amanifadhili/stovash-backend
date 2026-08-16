import { IRequestContext } from '@electronic-shop/types';

export class GetStockMovementsPayload {
  shopId?: string;
  from?: string;
  to?: string;
  movementType?: string;
  referenceType?: string;
  search?: string;
  limit?: number;
  offset?: number;
  /** When true, run a separate COUNT(*) — skipped by default for faster lists. */
  includeCount?: boolean;
}

export class GetStockMovementsQuery {
  constructor(
    public readonly payload: GetStockMovementsPayload,
    public readonly context?: IRequestContext
  ) {}
}
