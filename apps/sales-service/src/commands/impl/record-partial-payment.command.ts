import { ICommand } from '@electronic-shop/types';

export class RecordPartialPaymentCommand implements ICommand {
  readonly command = 'RecordPartialPayment';
  readonly description = 'Record a partial payment for a sale';

  constructor(
    public readonly payload: {
      salesOrderId: string;
      amount: number;
      paymentMethod: string;
    },
    public readonly context: any
  ) {}
}
