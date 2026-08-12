import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface RemovePurchaseItemPayload {
  purchaseItemId: string;
  deletedById: string;
  deletedByName: string;
  traceId?: string;
}

export class RemovePurchaseItemCommand extends BaseCommand<RemovePurchaseItemPayload> {
  constructor(payload: RemovePurchaseItemPayload, context?: IRequestContext) {
    super(payload, context);
  }
}