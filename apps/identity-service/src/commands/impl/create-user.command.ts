import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateUserPayload {
  tenantId!: string;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  role?: string;
}

export class CreateUserCommand extends BaseCommand<CreateUserPayload> {
  constructor(payload: CreateUserPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
