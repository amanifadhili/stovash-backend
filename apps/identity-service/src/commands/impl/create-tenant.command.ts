import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateTenantPayload {
  name!: string;
  adminEmail!: string;
  adminPassword!: string;
  adminFirstName!: string;
  adminLastName!: string;
}

export class CreateTenantCommand extends BaseCommand<CreateTenantPayload> {
  constructor(payload: CreateTenantPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
