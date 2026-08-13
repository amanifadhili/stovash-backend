import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface UpdatePurchaseItemPayload {
  purchaseItemId: string;
  orderedQty?: number;
  unitPrice?: number;
  discountAmount?: number;
  discountType?: 'PERCENTAGE' | 'FIXED';
  otherCosts?: number;
  purchaseSpecs?: string;
  notes?: string;
  updatedById: string;
  updatedByName: string;
  traceId?: string;
}

export class UpdatePurchaseItemCommand extends BaseCommand<UpdatePurchaseItemPayload> {
  constructor(payload: UpdatePurchaseItemPayload, context?: IRequestContext) {
    super(payload, context);
  }
}