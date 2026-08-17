import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface CreatePurchaseUnitInput {
  serialNumber?: string;
  imei1?: string;
  imei2?: string;
  condition?: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR' | 'DAMAGED' | 'REJECTED' | 'WRONG_ITEM' | 'ACCEPTED';
  unitAcquisitionCost?: number;
  notes?: string;
  images?: string[];
  /** When true, unit is CONFIRMED and stocked immediately (RECEIVED path). */
  received?: boolean;
  /** NON_SERIALIZED batch size when a single unit row represents many qty. */
  quantity?: number;
}

export interface CreatePurchaseItemInput {
  productId: string;
  productName?: string;
  productSku?: string;
  productTracking?: string;
  orderedQty: number;
  unitPrice: number;
  discountAmount?: number;
  discountType?: 'PERCENTAGE' | 'FIXED';
  otherCosts?: number;
  purchaseSpecs?: string;
  notes?: string;
  /** Shared photos for every unit on this line (avoids duplicating data URLs N times). */
  images?: string[];
  units?: CreatePurchaseUnitInput[];
}

export interface CreatePurchasePayload {
  tenantId: string;
  shopId: string;
  supplierId?: string;
  supplierName: string;
  supplierContact?: string;
  supplierAddress?: string;
  purchaseDate?: string;
  supplierInvoiceNo?: string;
  currency?: string;
  exchangeRate?: number;
  notes?: string;
  items?: CreatePurchaseItemInput[];
  createdById: string;
  createdByName: string;
  traceId?: string;
}

export class CreatePurchaseCommand extends BaseCommand<CreatePurchasePayload> {
  constructor(payload: CreatePurchasePayload, context?: IRequestContext) {
    super(payload, context);
  }
}