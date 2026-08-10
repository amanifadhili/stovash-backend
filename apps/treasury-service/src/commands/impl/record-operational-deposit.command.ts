import { ICommand } from '@electronic-shop/types';

export class RecordOperationalDepositCommand implements ICommand {
  readonly command = 'RecordOperationalDeposit';
  readonly description = 'Record an operational deposit to a payment method';

  constructor(
    public readonly payload: {
      methodId: string;
      amount: number;
      notes?: string;
    },
    public readonly context: any
  ) {}
}
