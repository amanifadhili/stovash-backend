import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class GetStaffPayload {
  tenantId?: string;
  shopId?: string;
}

export class GetStaffCommand extends BaseCommand<GetStaffPayload> {
  constructor(payload?: GetStaffPayload, context?: IRequestContext) {
    super(payload || {}, context);
  }
}
