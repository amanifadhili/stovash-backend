import { ICommand } from '@electronic-shop/types';

export class RecordBonusCommand implements ICommand {
  readonly command = 'RecordBonus';
  readonly description = 'Record a bonus for sales staff or customer';

  constructor(
    public readonly payload: {
      recipientType: 'STAFF' | 'CUSTOMER';
      recipientId: string;
      amount: number;
      reason: string;
      salesOrderId?: string; // Optional reference to the sale that generated the bonus
    },
    public readonly context: any
  ) {}
}
