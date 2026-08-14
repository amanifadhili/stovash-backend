import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface ReceivePurchaseUnitPayload {
  purchaseId: string;
  purchaseItemId: string;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  condition?: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR' | 'DAMAGED' | 'REJECTED' | 'WRONG_ITEM' | 'ACCEPTED';
  actualSpecs?: string;
  unitAcquisitionCost: number;
  receivedAt?: string;
  receivedById?: string;
  receivedByName?: string;
  notes?: string;
  traceId?: string;
}

export class ReceivePurchaseUnitCommand extends BaseCommand<ReceivePurchaseUnitPayload> {
  constructor(payload: ReceivePurchaseUnitPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
