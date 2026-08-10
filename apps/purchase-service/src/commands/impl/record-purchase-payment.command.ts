import { ICommand } from '@electronic-shop/types';

export class RecordPurchasePaymentCommand implements ICommand {
  readonly command = 'RecordPurchasePayment';
  readonly description = 'Record a payment for a purchase order';

  constructor(
    public readonly payload: {
      purchaseOrderId: string;
      amount: number;
      paymentMethod: string;
    },
    public readonly context: any
  ) {}
}
