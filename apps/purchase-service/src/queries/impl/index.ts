export interface GetPurchasesPayload {
  tenantId: string;
  shopId?: string;
  supplierId?: string;
  commercialStatus?: string;
  receivingStatus?: string;
  paymentStatus?: string;
  accountingStatus?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
}

export interface GetPurchaseByIdPayload {
  purchaseId: string;
}

export interface GetPurchaseByNumberPayload {
  purchaseNumber: string;
}

export interface GetPurchaseItemsPayload {
  purchaseId: string;
}

export interface GetPurchaseReceivingsPayload {
  purchaseId: string;
}

export interface GetPurchasePaymentsPayload {
  purchaseId: string;
}

export interface GetPurchaseReturnsPayload {
  purchaseId?: string;
  tenantId: string;
  shopId?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface GetPurchaseDocumentsPayload {
  purchaseId: string;
}

export interface GetPurchaseHistoryPayload {
  purchaseId: string;
}

export interface GetLastPurchaseUnitCostsPayload {
  productIds: string[];
  shopId?: string;
}

export * from './get-purchases.query.js';
export * from './get-purchase-by-id.query.js';
export * from './get-purchase-by-number.query.js';
export * from './get-purchase-items.query.js';
export * from './get-purchase-receivings.query.js';
export * from './get-purchase-payments.query.js';
export * from './get-purchase-returns.query.js';
export * from './get-purchase-documents.query.js';
export * from './get-purchase-history.query.js';
export * from './get-last-purchase-unit-costs.query.js';