import { ICommand } from '@electronic-shop/types';

export class ReconcilePaymentMethodCommand implements ICommand {
  readonly command = 'ReconcilePaymentMethod';
  readonly description = 'Reconcile payment method system balance with physical balance';

  constructor(
    public readonly payload: {
      methodId: string;
      physicalBalance: number;
      notes?: string;
    },
    public readonly context: any
  ) {}
}
