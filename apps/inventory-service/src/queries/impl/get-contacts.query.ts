import { IRequestContext } from '@electronic-shop/types';

export class GetContactsPayload {
  type?: string; // RENTAL, SUPPLIER, CUSTOMER, GENERAL
  search?: string;
}

export class GetContactsQuery {
  constructor(
    public readonly payload: GetContactsPayload,
    public readonly context?: IRequestContext
  ) {}
}
