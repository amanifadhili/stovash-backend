import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface CreatePurchasePayload {
  tenantId: string;
  shopId: string;
  supplierId: string;
  supplierName: string;
  supplierContact?: string;
  supplierAddress?: string;
  supplierTaxId?: string;
  purchaseDate?: string;
  supplierInvoiceNo?: string;
  currency?: string;
  exchangeRate?: number;
  notes?: string;
  createdById: string;
  createdByName: string;
  traceId?: string;
}

export class CreatePurchaseCommand extends BaseCommand<CreatePurchasePayload> {
  constructor(payload: CreatePurchasePayload, context?: IRequestContext) {
    super(payload, context);
  }
}