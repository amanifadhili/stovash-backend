import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class AssessReturnedItemPayload {
  saleReturnItemId!: string;
  conditionState!: string; // SELLABLE, DAMAGED, REQUIRES_REPAIR, DEFECTIVE, QUARANTINED, RETURN_TO_SUPPLIER
  notes?: string;
}

export class AssessReturnedItemCommand extends BaseCommand<AssessReturnedItemPayload> {
  constructor(payload: AssessReturnedItemPayload, context?: IRequestContext) {
    super(payload, context);
  }
}