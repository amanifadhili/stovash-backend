import { IRequestContext } from '@electronic-shop/types';

export interface GetSoldUnitProfitPayload {
  brandId?: string;
  page?: number;
  pageSize?: number;
}

export class GetSoldUnitProfitQuery {
  constructor(
    public readonly payload: GetSoldUnitProfitPayload,
    public readonly context?: IRequestContext,
  ) {}
}
