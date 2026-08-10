import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class AddInventoryItemPayload {
  productId!: string;
  serialNumber!: string;
  purchaseCost!: number;
}

export class AddInventoryItemCommand extends BaseCommand<AddInventoryItemPayload> {
  constructor(payload: AddInventoryItemPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
