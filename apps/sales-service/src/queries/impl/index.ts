export interface GetSalesPayload {
  tenantId: string;
  shopId?: string;
  customerId?: string;
  sellerId?: string;
  commercialStatus?: string;
  fulfillmentStatus?: string;
  /** Single payment status (legacy). Prefer paymentStatuses when filtering several. */
  paymentStatus?: string;
  /** e.g. UNPAID + PARTIALLY_PAID for Balances. */
  paymentStatuses?: string[];
  accountingStatus?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
  /** Default saleDate. Use amountDue for receivables boards. */
  sortBy?: "saleDate" | "amountDue";
  sortDir?: "asc" | "desc";
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
export * from './get-sold-unit-profit.query.js';