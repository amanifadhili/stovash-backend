import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetMonthlyPositionQuery } from '../impl/get-monthly-position.query.js';
import { getMonthlyPosition } from '../../treasury-movement/period-snapshots.js';

@QueryHandler(GetMonthlyPositionQuery)
export class GetMonthlyPositionHandler implements IQueryHandler<GetMonthlyPositionQuery> {
  async execute(query: GetMonthlyPositionQuery): Promise<ICommandResponse<any>> {
    return getMonthlyPosition(query.payload, query.context);
  }
}
