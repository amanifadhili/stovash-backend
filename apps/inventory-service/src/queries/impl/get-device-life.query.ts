import { IRequestContext } from '@electronic-shop/types';

export class GetDeviceLifePayload {
  inventoryItemId!: string;
}

export class GetDeviceLifeQuery {
  constructor(
    public readonly payload: GetDeviceLifePayload,
    public readonly context?: IRequestContext
  ) {}
}
