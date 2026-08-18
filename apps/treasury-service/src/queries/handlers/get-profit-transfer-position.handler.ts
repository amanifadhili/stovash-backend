import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetProfitTransferPositionQuery } from '../impl/get-profit-transfer-position.query.js';
import { getProfitTransferPosition } from '../../treasury-movement/queries.js';
import { AccountingBooksBridge } from '../../treasury-movement/accounting-books-bridge.js';

@QueryHandler(GetProfitTransferPositionQuery)
export class GetProfitTransferPositionHandler implements IQueryHandler<GetProfitTransferPositionQuery> {
  constructor(private readonly books: AccountingBooksBridge) {}

  async execute(query: GetProfitTransferPositionQuery): Promise<ICommandResponse<any>> {
    return getProfitTransferPosition(query.context, this.books);
  }
}
