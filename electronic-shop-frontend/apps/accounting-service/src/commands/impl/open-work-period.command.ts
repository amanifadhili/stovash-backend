import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class OpenWorkPeriodPayload {
  shopId?: string;
  notes?: string;
}

export class OpenWorkPeriodCommand extends BaseCommand<OpenWorkPeriodPayload> {
  constructor(payload: OpenWorkPeriodPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
