import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetDashboardProfitAnalyticsQuery } from '../impl/get-dashboard-profit-analytics.query.js';
import { getDashboardProfitAnalytics } from '../../engine-ledger/dashboard-profit-analytics.js';

@QueryHandler(GetDashboardProfitAnalyticsQuery)
export class GetDashboardProfitAnalyticsHandler
  implements IQueryHandler<GetDashboardProfitAnalyticsQuery>
{
  async execute(query: GetDashboardProfitAnalyticsQuery): Promise<ICommandResponse<any>> {
    return getDashboardProfitAnalytics(query.payload, query.context);
  }
}
