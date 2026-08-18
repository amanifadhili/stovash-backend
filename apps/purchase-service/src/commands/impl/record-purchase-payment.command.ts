import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface RecordPurchasePaymentPayload {
  purchaseId: string;
  paymentNumber?: string;
  idempotencyKey?: string;
  amount: number;
  currency?: string;
  exchangeRate?: number;
  paymentMethod: 'CASH' | 'BANK_TRANSFER' | 'MOBILE_MONEY' | 'CHECK' | 'CREDIT' | 'OTHER';
  accountId?: string;
  accountName?: string;
  reference?: string;
  paidById: string;
  paidByName: string;
  paidAt?: string;
  notes?: string;
  accountingRef?: string;
  traceId?: string;
}

export class RecordPurchasePaymentCommand extends BaseCommand<RecordPurchasePaymentPayload> {
  constructor(payload: RecordPurchasePaymentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}