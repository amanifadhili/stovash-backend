import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetDailyPositionQuery } from '../impl/get-daily-position.query.js';
import { getDailyPosition } from '../../treasury-movement/period-snapshots.js';

@QueryHandler(GetDailyPositionQuery)
export class GetDailyPositionHandler implements IQueryHandler<GetDailyPositionQuery> {
  async execute(query: GetDailyPositionQuery): Promise<ICommandResponse<any>> {
    return getDailyPosition(query.payload, query.context);
  }
}
