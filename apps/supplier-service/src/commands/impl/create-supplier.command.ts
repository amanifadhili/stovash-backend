import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateSupplierPayload {
  tenantId!: string;
  shopId?: string;
  name!: string;
  email?: string;
  phone?: string;
  address?: string;
  status?: string;
}

export class CreateSupplierCommand extends BaseCommand<CreateSupplierPayload> {
  constructor(payload: CreateSupplierPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
