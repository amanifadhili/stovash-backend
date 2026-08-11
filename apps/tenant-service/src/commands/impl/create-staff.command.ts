import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateStaffPayload {
  tenantId!: string;
  shopId!: string;
  userId!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phone?: string;
  role?: string;
  status?: string;
}

export class CreateStaffCommand extends BaseCommand<CreateStaffPayload> {
  constructor(payload: CreateStaffPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
