import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetDashboardCashFlowAnalyticsQuery } from '../impl/get-dashboard-cash-flow-analytics.query.js';
import { getDashboardCashFlowAnalytics } from '../../treasury-movement/dashboard-cash-flow-analytics.js';

@QueryHandler(GetDashboardCashFlowAnalyticsQuery)
export class GetDashboardCashFlowAnalyticsHandler
  implements IQueryHandler<GetDashboardCashFlowAnalyticsQuery>
{
  async execute(query: GetDashboardCashFlowAnalyticsQuery): Promise<ICommandResponse<any>> {
    return getDashboardCashFlowAnalytics(query.payload, query.context);
  }
}
