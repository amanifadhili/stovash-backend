import { ICommand } from '@electronic-shop/types';

export class ConvertQuotationToSaleCommand implements ICommand {
  readonly command = 'ConvertQuotationToSale';
  readonly description = 'Convert a quotation to a sale';

  constructor(
    public readonly payload: {
      quotationId: string;
      items: Array<{
        inventoryItemId?: string;
        serialNumber?: string;
        unitPrice: number;
      }>;
      paymentMethod?: string;
    },
    public readonly context: any
  ) {}
}
