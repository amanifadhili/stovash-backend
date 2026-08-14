import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateRentalStatusPayload {
  rentalId!: string;
  status!: 'RETURNED' | 'SOLD' | 'CANCELLED';
  salePrice?: number; // Needed if status === 'SOLD'
  maintenanceCost?: number; // Optional maintenance cost billed/incurred
  notes?: string;
}

export class UpdateRentalStatusCommand extends BaseCommand<UpdateRentalStatusPayload> {
  constructor(payload: UpdateRentalStatusPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
