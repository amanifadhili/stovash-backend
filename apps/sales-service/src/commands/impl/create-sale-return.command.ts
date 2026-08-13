import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateSaleReturnItemInput {
  saleItemId?: string;
  inventoryItemId?: string;
  productId!: string;
  serialNumber?: string;
  quantity!: number;
  unitCost?: number;
  originalAmount?: number;
  approvedRefund?: number;
  refundedAmount?: number;
  retainedAmount?: number;
  conditionState?: string; // SELLABLE, DAMAGED, REQUIRES_REPAIR, DEFECTIVE, QUARANTINED, RETURN_TO_SUPPLIER
  notes?: string;
}

export class CreateSaleReturnPayload {
  saleId?: string;
  customerId?: string;
  currency?: string;
  exchangeRate?: number;
  refundMethod?: string;
  reason?: string;
  items!: CreateSaleReturnItemInput[];
}

export class CreateSaleReturnCommand extends BaseCommand<CreateSaleReturnPayload> {
  constructor(payload: CreateSaleReturnPayload, context?: IRequestContext) {
    super(payload, context);
  }
}