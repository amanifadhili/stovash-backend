import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface CreatePurchaseReceivingPayload {
  purchaseId: string;
  receivingNumber: string;
  receivedById: string;
  receivedByName: string;
  receivedAtShop: string;
  notes?: string;
  traceId?: string;
}

export class CreatePurchaseReceivingCommand extends BaseCommand<CreatePurchaseReceivingPayload> {
  constructor(payload: CreatePurchaseReceivingPayload, context?: IRequestContext) {
    super(payload, context);
  }
}