import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateTenantPayload {
  name!: string;
  status?: string;
}

export class CreateTenantCommand extends BaseCommand<CreateTenantPayload> {
  constructor(payload: CreateTenantPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
