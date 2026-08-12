import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class DeleteProductPayload {
  productId!: string;
}

export class DeleteProductCommand extends BaseCommand<DeleteProductPayload> {
  constructor(payload: DeleteProductPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
