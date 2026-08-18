import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class RecordReconciliationCommand extends BaseCommand<{
  physicalAccountId: string;
  countedMinor: number | string;
  notes?: string;
}> {
  constructor(payload: { physicalAccountId: string; countedMinor: number | string; notes?: string }, context?: IRequestContext) {
    super(payload, context);
  }
}
