import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class RecordInventoryIncidentPayload {
  inventoryItemId?: string;
  productId?: string;
  quantity?: number;
  incidentType!: 'DAMAGED' | 'LOST' | 'STOLEN';
  description?: string;
  writeOffAmount?: number;
}

export class RecordInventoryIncidentCommand extends BaseCommand<RecordInventoryIncidentPayload> {
  constructor(payload: RecordInventoryIncidentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
