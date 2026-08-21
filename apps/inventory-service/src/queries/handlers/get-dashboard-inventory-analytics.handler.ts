import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetDashboardInventoryAnalyticsQuery } from '../impl/get-dashboard-inventory-analytics.query.js';
import { getDashboardInventoryAnalytics } from '../dashboard-inventory-analytics.js';

@QueryHandler(GetDashboardInventoryAnalyticsQuery)
export class GetDashboardInventoryAnalyticsHandler
  implements IQueryHandler<GetDashboardInventoryAnalyticsQuery>
{
  async execute(
    query: GetDashboardInventoryAnalyticsQuery,
  ): Promise<ICommandResponse<any>> {
    return getDashboardInventoryAnalytics(query.payload, query.context);
  }
}
