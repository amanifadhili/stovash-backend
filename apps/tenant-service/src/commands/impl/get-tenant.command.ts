import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class GetTenantPayload {
  tenantId?: string;
}

export class GetTenantCommand extends BaseCommand<GetTenantPayload> {
  constructor(payload?: GetTenantPayload, context?: IRequestContext) {
    super(payload || {}, context);
  }
}
