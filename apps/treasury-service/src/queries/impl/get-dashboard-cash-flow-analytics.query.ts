export class GetDashboardCashFlowAnalyticsQuery {
  constructor(
    public readonly payload: { from?: string; to?: string },
    public readonly context: any,
  ) {}
}
