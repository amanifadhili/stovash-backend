import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetJournalsQuery } from '../impl/get-journals.query.js';
import { getJournals } from '../../engine-ledger/queries.js';

@QueryHandler(GetJournalsQuery)
export class GetJournalsHandler implements IQueryHandler<GetJournalsQuery> {
  async execute(query: GetJournalsQuery): Promise<ICommandResponse<any>> {
    return getJournals(query.payload, query.context);
  }
}
