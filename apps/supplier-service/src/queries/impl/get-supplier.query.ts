import { IRequestContext } from '@electronic-shop/types';

export class GetSupplierPayload {
  id: string;
}

export class GetSupplierQuery {
  constructor(
    public readonly payload: GetSupplierPayload,
    public readonly context?: IRequestContext
  ) {}
}
