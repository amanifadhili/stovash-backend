import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface ReceivedItemData {
  purchaseItemId: string;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  condition: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR' | 'DAMAGED' | 'REJECTED' | 'WRONG_ITEM' | 'ACCEPTED';
  actualSpecs?: string;
  unitAcquisitionCost: number;
  notes?: string;
  images?: string[];
  received?: boolean;
}

export interface AddReceivedItemsPayload {
  receivingId: string;
  items: ReceivedItemData[];
  recordedById: string;
  recordedByName: string;
  traceId?: string;
}

export class AddReceivedItemsCommand extends BaseCommand<AddReceivedItemsPayload> {
  constructor(payload: AddReceivedItemsPayload, context?: IRequestContext) {
    super(payload, context);
  }
}