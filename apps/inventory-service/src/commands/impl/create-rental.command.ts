import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateRentalPayload {
  inventoryItemId?: string;
  productId?: string;
  customerId?: string;          // preferred: link to existing customer/contact
  personName?: string;          // fallback if no customerId
  personPhone?: string;
  agreementType!: 'OUTWARD_RENTAL' | 'INWARD_CONSIGNMENT';
  startDate?: string;
  notes?: string;
}

export class CreateRentalCommand extends BaseCommand<CreateRentalPayload> {
  constructor(payload: CreateRentalPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
