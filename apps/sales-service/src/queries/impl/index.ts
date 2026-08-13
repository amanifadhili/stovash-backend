export interface GetSalesPayload {
  tenantId: string;
  shopId?: string;
  customerId?: string;
  sellerId?: string;
  commercialStatus?: string;
  fulfillmentStatus?: string;
  paymentStatus?: string;
  accountingStatus?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
}

export interface GetSaleByIdPayload {
  saleId: string;
}

export interface GetSaleHistoryPayload {
  saleId: string;
}

export * from './get-sales.query.js';
export * from './get-sale-by-id.query.js';
export * from './get-sale-history.query.js';