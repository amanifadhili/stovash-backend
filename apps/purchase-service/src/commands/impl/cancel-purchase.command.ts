import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface CancelPurchasePayload {
  purchaseId: string;
  cancelledById: string;
  cancelledByName: string;
  reason: string;
  traceId?: string;
}

export class CancelPurchaseCommand extends BaseCommand<CancelPurchasePayload> {
  constructor(payload: CancelPurchasePayload, context?: IRequestContext) {
    super(payload, context);
  }
}