export class GetDashboardProductPerformanceQuery {
  constructor(
    public readonly payload: {
      from?: string;
      to?: string;
      shopId?: string;
      limit?: number;
    },
    public readonly context: any,
  ) {}
}
