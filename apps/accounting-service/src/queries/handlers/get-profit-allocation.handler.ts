import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetProfitAllocationQuery } from '../impl/get-profit-allocation.query.js';
import { getProfitAllocation } from '../../engine-ledger/post-treasury-books.js';

@QueryHandler(GetProfitAllocationQuery)
export class GetProfitAllocationHandler implements IQueryHandler<GetProfitAllocationQuery> {
  async execute(query: GetProfitAllocationQuery): Promise<ICommandResponse<any>> {
    return getProfitAllocation(query.context);
  }
}
