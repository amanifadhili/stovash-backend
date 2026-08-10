import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class PosSaleItemInput {
  inventoryItemId?: string;
  serialNumber?: string;
  unitPrice!: number;
}

export class ProcessPosSalePayload {
  items!: PosSaleItemInput[];
  paymentMethod?: 'CASH' | 'CARD' | 'CREDIT';
  notes?: string;
}

export class ProcessPosSaleCommand extends BaseCommand<ProcessPosSalePayload> {
  constructor(payload: ProcessPosSalePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
