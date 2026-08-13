import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface AddReceivedItemCostPayload {
  receivedItemId: string;
  label: string;
  amount: number;
  addedById?: string;
  addedByName?: string;
  notes?: string;
  traceId?: string;
}

export class AddReceivedItemCostCommand extends BaseCommand<AddReceivedItemCostPayload> {
  constructor(payload: AddReceivedItemCostPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
