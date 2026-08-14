import { IRequestContext } from '@electronic-shop/types';

export class CreateContactPayload {
  name!: string;
  phone?: string;
  email?: string;
  address?: string;
  type?: string; // RENTAL, SUPPLIER, CUSTOMER, GENERAL, SHOP
  notes?: string;
}

export class CreateContactCommand {
  constructor(
    public readonly payload: CreateContactPayload,
    public readonly context?: IRequestContext
  ) {}
}
