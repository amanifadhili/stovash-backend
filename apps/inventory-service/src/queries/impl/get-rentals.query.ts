import { IRequestContext } from '@electronic-shop/types';

export class GetRentalsPayload {
  agreementType?: 'OUTWARD_RENTAL' | 'INWARD_CONSIGNMENT';
  status?: string;
  search?: string;
  productId?: string;
}

export class GetRentalsQuery {
  constructor(
    public readonly payload: GetRentalsPayload,
    public readonly context?: IRequestContext
  ) {}
}
