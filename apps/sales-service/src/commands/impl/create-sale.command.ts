import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateSaleItemInput {
  productId!: string;
  productName?: string;
  productSku?: string;
  inventoryItemId?: string;
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  quantity!: number;
  unitPrice!: number;
  unitCost?: number; // exact acquisition cost of the selected inventory item
  discountType?: 'FIXED' | 'PERCENTAGE';
  discountAmount?: number;
  taxRate?: number;
  otherCharges?: number;
  notes?: string;
}

export class CreateSalePayload {
  customerId?: string;
  customerName?: string;
  sellerId?: string;
  sellerName?: string;
  saleDate?: string | Date;
  currency?: string;
  exchangeRate?: number;
  notes?: string;
  items!: CreateSaleItemInput[];
}

export class CreateSaleCommand extends BaseCommand<CreateSalePayload> {
  constructor(payload: CreateSalePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
