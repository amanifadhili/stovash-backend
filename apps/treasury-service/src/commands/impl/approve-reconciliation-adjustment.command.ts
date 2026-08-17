import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ApproveReconciliationAdjustmentCommand extends BaseCommand<{
  reconciliationId: string;
  reason: string;
}> {
  constructor(payload: { reconciliationId: string; reason: string }, context?: IRequestContext) {
    super(payload, context);
  }
}
