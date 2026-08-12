import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class DeleteBrandPayload {
  brandId!: string;
}

export class DeleteBrandCommand extends BaseCommand<DeleteBrandPayload> {
  constructor(payload: DeleteBrandPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
