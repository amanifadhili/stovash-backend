import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class GetTenantSubscriptionPayload {
  tenantId?: string;
}

export class GetTenantSubscriptionCommand extends BaseCommand<GetTenantSubscriptionPayload> {
  constructor(payload?: GetTenantSubscriptionPayload, context?: IRequestContext) {
    super(payload || {}, context);
  }
}
