export interface GetDashboardSalesAnalyticsPayload {
  shopId?: string;
  from: string;
  to: string;
}

export class GetDashboardSalesAnalyticsQuery {
  constructor(
    public readonly payload: GetDashboardSalesAnalyticsPayload,
    public readonly context: any,
  ) {}
}
