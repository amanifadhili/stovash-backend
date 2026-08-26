import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetDashboardLoanAnalyticsQuery } from '../impl/get-dashboard-loan-analytics.query.js';
import { getDashboardLoanAnalytics } from '../../treasury-movement/dashboard-loan-analytics.js';

@QueryHandler(GetDashboardLoanAnalyticsQuery)
export class GetDashboardLoanAnalyticsHandler
  implements IQueryHandler<GetDashboardLoanAnalyticsQuery>
{
  async execute(query: GetDashboardLoanAnalyticsQuery): Promise<ICommandResponse<any>> {
    return getDashboardLoanAnalytics(query.payload, query.context);
  }
}
