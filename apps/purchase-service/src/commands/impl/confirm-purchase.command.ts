import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface ConfirmPurchasePayload {
  purchaseId: string;
  approvedById: string;
  approvedByName: string;
  traceId?: string;
}

export class ConfirmPurchaseCommand extends BaseCommand<ConfirmPurchasePayload> {
  constructor(payload: ConfirmPurchasePayload, context?: IRequestContext) {
    super(payload, context);
  }
}