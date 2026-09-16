import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class GetMyShopsPayload {
  tenantId?: string;
}

export class GetMyShopsCommand extends BaseCommand<GetMyShopsPayload> {
  constructor(payload?: GetMyShopsPayload, context?: IRequestContext) {
    super(payload || {}, context);
  }
}
