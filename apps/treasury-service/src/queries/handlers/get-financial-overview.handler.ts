import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetFinancialOverviewQuery } from '../impl/get-financial-overview.query.js';
import { getFinancialOverview } from '../../treasury-movement/financial-overview.js';
import { AccountingBooksBridge } from '../../treasury-movement/accounting-books-bridge.js';

@QueryHandler(GetFinancialOverviewQuery)
export class GetFinancialOverviewHandler implements IQueryHandler<GetFinancialOverviewQuery> {
  constructor(private readonly books: AccountingBooksBridge) {}

  async execute(query: GetFinancialOverviewQuery): Promise<ICommandResponse<any>> {
    return getFinancialOverview(query.payload, query.context, this.books);
  }
}
