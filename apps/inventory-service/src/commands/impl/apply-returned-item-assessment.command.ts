import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ApplyReturnedItemAssessmentPayload {
  inventoryItemId!: string;
  saleReturnItemId!: string;
  conditionState!: string;
  assessedBy?: string;
}

export class ApplyReturnedItemAssessmentCommand extends BaseCommand<ApplyReturnedItemAssessmentPayload> {
  constructor(payload: ApplyReturnedItemAssessmentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
