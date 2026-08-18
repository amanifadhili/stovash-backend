import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetFundBalancesQuery } from '../impl/get-fund-balances.query.js';
import { getFundBalances } from '../../treasury-movement/queries.js';

@QueryHandler(GetFundBalancesQuery)
export class GetFundBalancesHandler implements IQueryHandler<GetFundBalancesQuery> {
  async execute(query: GetFundBalancesQuery): Promise<ICommandResponse<any>> {
    return getFundBalances(query.context);
  }
}
