import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface CancelPurchaseUnitPayload {
  receivedItemId: string;
  reason?: string;
  cancelledById?: string;
  cancelledByName?: string;
  traceId?: string;
}

export class CancelPurchaseUnitCommand extends BaseCommand<CancelPurchaseUnitPayload> {
  constructor(payload: CancelPurchaseUnitPayload, context?: IRequestContext) {
    super(payload, context);
  }
}