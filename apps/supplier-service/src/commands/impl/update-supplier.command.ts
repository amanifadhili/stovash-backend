import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateSupplierPayload {
  id: string;
  shopId?: string | null; // null = shared at tenant level; set = owned by that shop
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  status?: string;
}

export class UpdateSupplierCommand extends BaseCommand<UpdateSupplierPayload> {
  constructor(payload: UpdateSupplierPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
