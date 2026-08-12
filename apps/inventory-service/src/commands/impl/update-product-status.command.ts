import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateProductStatusPayload {
  productId!: string;
  status!: string;
}

export class UpdateProductStatusCommand extends BaseCommand<UpdateProductStatusPayload> {
  constructor(payload: UpdateProductStatusPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
