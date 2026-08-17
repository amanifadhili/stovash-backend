import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetReceivablesQuery } from '../impl/get-receivables.query.js';
import { getReceivables } from '../../engine-ledger/queries.js';

@QueryHandler(GetReceivablesQuery)
export class GetReceivablesHandler implements IQueryHandler<GetReceivablesQuery> {
  async execute(query: GetReceivablesQuery): Promise<ICommandResponse<any>> {
    return getReceivables(query.context);
  }
}
