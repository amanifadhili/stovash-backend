import { IRequestContext } from '@electronic-shop/types';

export interface GetReceivablesPayload {
  kind?: 'WORKER_ADVANCE' | 'CUSTOMER_RECEIVABLE' | 'SUPPLIER_PAYABLE';
  status?: 'OPEN' | 'SETTLED';
  sourceId?: string;
}

export class GetReceivablesQuery {
  constructor(
    public readonly payload: GetReceivablesPayload = {},
    public readonly context?: IRequestContext,
  ) {}
}
