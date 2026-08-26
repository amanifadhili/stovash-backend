import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetDashboardArApAnalyticsQuery } from '../impl/get-dashboard-ar-ap-analytics.query.js';
import { getDashboardArApAnalytics } from '../../engine-ledger/dashboard-ar-ap-analytics.js';

@QueryHandler(GetDashboardArApAnalyticsQuery)
export class GetDashboardArApAnalyticsHandler
  implements IQueryHandler<GetDashboardArApAnalyticsQuery>
{
  async execute(query: GetDashboardArApAnalyticsQuery): Promise<ICommandResponse<any>> {
    return getDashboardArApAnalytics(query.payload, query.context);
  }
}
