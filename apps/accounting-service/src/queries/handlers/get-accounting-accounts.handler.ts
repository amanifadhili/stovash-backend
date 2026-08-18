import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetAccountingAccountsQuery } from '../impl/get-accounting-accounts.query.js';
import { getAccountingAccounts } from '../../engine-ledger/queries.js';

@QueryHandler(GetAccountingAccountsQuery)
export class GetAccountingAccountsHandler implements IQueryHandler<GetAccountingAccountsQuery> {
  async execute(query: GetAccountingAccountsQuery): Promise<ICommandResponse<any>> {
    return getAccountingAccounts(query.context);
  }
}
