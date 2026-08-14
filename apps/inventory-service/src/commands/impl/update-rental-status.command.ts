import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class OwnerPayoutLine {
  method!: string;
  amount!: number;
  reference?: string;
}

export class UpdateRentalStatusPayload {
  rentalId!: string;
  status!: 'RETURNED' | 'SOLD' | 'CANCELLED';
  salePrice?: number;
  ownerPayoutTotal?: number;
  ownerPayoutDetails?: OwnerPayoutLine[];
  commissionAmount?: number;
  maintenanceCost?: number;
  notes?: string;
}

export class UpdateRentalStatusCommand extends BaseCommand<UpdateRentalStatusPayload> {
  constructor(payload: UpdateRentalStatusPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
