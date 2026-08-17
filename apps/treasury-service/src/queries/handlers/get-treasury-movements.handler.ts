import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetTreasuryMovementsQuery } from '../impl/get-treasury-movements.query.js';
import { getTreasuryMovements } from '../../treasury-movement/queries.js';

@QueryHandler(GetTreasuryMovementsQuery)
export class GetTreasuryMovementsHandler implements IQueryHandler<GetTreasuryMovementsQuery> {
  async execute(query: GetTreasuryMovementsQuery): Promise<ICommandResponse<any>> {
    return getTreasuryMovements(query.context);
  }
}
