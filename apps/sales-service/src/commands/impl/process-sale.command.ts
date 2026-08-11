import { ICommand } from '@electronic-shop/types';

export class ProcessSaleCommand implements ICommand {
  readonly command = 'ProcessSale';
  readonly description = 'Process a POS sale';

  constructor(
    public readonly payload: {
      items: Array<{
        inventoryItemId?: string;
        serialNumber?: string;
        productId?: string;
        unitCost: number;
        unitPrice: number;
      }>;
      paymentMethod?: string;
    },
    public readonly context: any
  ) {}
}
