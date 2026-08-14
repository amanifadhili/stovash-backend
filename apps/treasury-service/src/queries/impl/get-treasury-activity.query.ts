import { IRequestContext } from '@electronic-shop/types';

export class GetTreasuryActivityPayload {
  shopId?: string;
}

export class GetTreasuryActivityQuery {
  constructor(
    public readonly payload: GetTreasuryActivityPayload,
    public readonly context?: IRequestContext,
  ) {}
}
