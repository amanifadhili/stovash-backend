import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class TransferInventoryPayload {
  serialNumber!: string;
  fromShopId!: string;
  toShopId!: string;
  notes?: string;
}

export class TransferInventoryCommand extends BaseCommand<TransferInventoryPayload> {
  constructor(payload: TransferInventoryPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
