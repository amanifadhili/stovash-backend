import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetReconciliationsQuery } from '../impl/get-reconciliations.query.js';
import { getReconciliations } from '../../treasury-movement/queries.js';

@QueryHandler(GetReconciliationsQuery)
export class GetReconciliationsHandler implements IQueryHandler<GetReconciliationsQuery> {
  async execute(query: GetReconciliationsQuery): Promise<ICommandResponse<any>> {
    return getReconciliations(query.context);
  }
}
