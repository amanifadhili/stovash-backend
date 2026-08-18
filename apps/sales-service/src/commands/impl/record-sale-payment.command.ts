import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class RecordSalePaymentPayload {
  saleId!: string;
  amount!: number;
  method!: string; // CASH, MOMO, BANK_TRANSFER, CARD, CREDIT, CHECK, OTHER
  reference?: string;
  // Stable caller-provided key so retries don't create duplicate payments/treasury movements.
  // (Frontend sends this; backend treats missing key as non-idempotent.)
  idempotencyKey?: string;
  accountId?: string;
  accountName?: string;
  currency?: string;
  exchangeRate?: number;
  paidAt?: string | Date;
  notes?: string;
}

export class RecordSalePaymentCommand extends BaseCommand<RecordSalePaymentPayload> {
  constructor(payload: RecordSalePaymentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}