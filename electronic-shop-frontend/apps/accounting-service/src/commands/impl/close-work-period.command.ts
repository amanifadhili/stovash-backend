import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CloseWorkPeriodPayload {
  workPeriodId?: string;
  shopId?: string;
  targetStatus?: 'PENDING_CLOSING' | 'PENDING_RECONCILIATION' | 'CLOSED';
  notes?: string;
}

export class CloseWorkPeriodCommand extends BaseCommand<CloseWorkPeriodPayload> {
  constructor(payload: CloseWorkPeriodPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
