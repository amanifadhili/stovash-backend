import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class DeleteSupplierPayload {
  id: string;
}

export class DeleteSupplierCommand extends BaseCommand<DeleteSupplierPayload> {
  constructor(payload: DeleteSupplierPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
