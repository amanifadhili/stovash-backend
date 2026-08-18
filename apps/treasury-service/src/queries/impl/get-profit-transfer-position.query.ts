import { IRequestContext } from '@electronic-shop/types';

export class GetProfitTransferPositionQuery {
  constructor(public readonly payload: Record<string, never>, public readonly context?: IRequestContext) {}
}
