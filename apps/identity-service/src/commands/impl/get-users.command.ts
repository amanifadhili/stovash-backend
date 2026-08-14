import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class GetUsersPayload {
  tenantId?: string;
}

export class GetUsersCommand extends BaseCommand<GetUsersPayload> {
  constructor(payload?: GetUsersPayload, context?: IRequestContext) {
    super(payload || {}, context);
  }
}
