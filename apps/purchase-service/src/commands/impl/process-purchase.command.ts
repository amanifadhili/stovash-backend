import { ICommand } from '@electronic-shop/types';

export class ProcessPurchaseCommand implements ICommand {
  readonly command = 'ProcessPurchase';
  readonly description = 'Process a purchase order receipt';

  constructor(
    public readonly payload: {
      vendorName: string;
      items: Array<{
        productId: string;
        serialNumber: string;
        purchaseCost: number;
        quantity?: number;
      }>;
      paymentAccountCode?: string;
    },
    public readonly context: any
  ) {}
}
