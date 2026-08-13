import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateWarrantyPayload {
  saleId!: string;
  saleItemId?: string;
  inventoryItemId?: string;
  warrantyType?: string; // MANUFACTURER, SELLER, EXTENDED
  startDate?: string | Date;
  endDate?: string | Date;
  terms?: string;
  notes?: string;
}

export class CreateWarrantyCommand extends BaseCommand<CreateWarrantyPayload> {
  constructor(payload: CreateWarrantyPayload, context?: IRequestContext) {
    super(payload, context);
  }
}