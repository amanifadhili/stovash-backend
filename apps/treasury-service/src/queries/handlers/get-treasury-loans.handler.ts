import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetTreasuryLoansQuery } from '../impl/get-treasury-loans.query.js';
import { getTreasuryLoans } from '../../treasury-movement/queries.js';

@QueryHandler(GetTreasuryLoansQuery)
export class GetTreasuryLoansHandler implements IQueryHandler<GetTreasuryLoansQuery> {
  async execute(query: GetTreasuryLoansQuery): Promise<ICommandResponse<any>> {
    return getTreasuryLoans(query.context);
  }
}
