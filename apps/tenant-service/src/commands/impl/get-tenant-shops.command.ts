import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class GetTenantShopsPayload {
  tenantId?: string;
}

export class GetTenantShopsCommand extends BaseCommand<GetTenantShopsPayload> {
  constructor(payload?: GetTenantShopsPayload, context?: IRequestContext) {
    super(payload || {}, context);
  }
}
