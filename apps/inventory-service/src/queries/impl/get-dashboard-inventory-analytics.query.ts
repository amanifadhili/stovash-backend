export class GetDashboardInventoryAnalyticsQuery {
  constructor(
    public readonly payload: {
      from?: string;
      to?: string;
      shopId?: string;
      lowStockThreshold?: number;
    },
    public readonly context: any,
  ) {}
}
