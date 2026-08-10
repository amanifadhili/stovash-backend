import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateCustomerPayload {
  tenantId!: string;
  shopId?: string;
  firstName!: string;
  lastName!: string;
  email?: string;
  phone?: string;
  status?: string;
}

export class CreateCustomerCommand extends BaseCommand<CreateCustomerPayload> {
  constructor(payload: CreateCustomerPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
