import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface CreatePurchaseReturnPayload {
  tenantId: string;
  shopId: string;
  purchaseId?: string;
  supplierId: string;
  returnNumber: string;
  reason?: string;
  createdById: string;
  createdByName: string;
  traceId?: string;
}

export class CreatePurchaseReturnCommand extends BaseCommand<CreatePurchaseReturnPayload> {
  constructor(payload: CreatePurchaseReturnPayload, context?: IRequestContext) {
    super(payload, context);
  }
}