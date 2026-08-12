import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface AddPurchaseItemPayload {
  purchaseId: string;
  productId: string;
  productName: string;
  productSku: string;
  productTracking: string;
  orderedQty: number;
  unitPrice: number;
  discountAmount?: number;
  discountType?: 'PERCENTAGE' | 'FIXED';
  taxRate?: number;
  otherCosts?: number;
  purchaseSpecs?: string;
  notes?: string;
  createdById: string;
  createdByName: string;
  traceId?: string;
}

export class AddPurchaseItemCommand extends BaseCommand<AddPurchaseItemPayload> {
  constructor(payload: AddPurchaseItemPayload, context?: IRequestContext) {
    super(payload, context);
  }
}