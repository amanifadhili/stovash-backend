import { IRequestContext } from '@electronic-shop/types';

export class GetDeviceSalesQuery {
  constructor(
    public readonly payload: { inventoryItemId?: string; serialNumber?: string },
    public readonly context?: IRequestContext
  ) {}
}
