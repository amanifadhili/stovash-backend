import { IRequestContext } from '@electronic-shop/types';

export class GetPaymentMethodsPayload {
  shopId?: string;
  type?: string;
}

export class GetPaymentMethodsQuery {
  constructor(
    public readonly payload: GetPaymentMethodsPayload,
    public readonly context?: IRequestContext,
  ) {}
}
