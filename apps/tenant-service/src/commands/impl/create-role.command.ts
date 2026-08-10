import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateRolePayload {
  tenantId!: string;
  name!: string;
  description?: string;
  permissions?: string[];
}

export class CreateRoleCommand extends BaseCommand<CreateRolePayload> {
  constructor(payload: CreateRolePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
