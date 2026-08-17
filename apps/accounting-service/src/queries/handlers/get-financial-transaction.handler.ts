import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetFinancialTransactionQuery } from '../impl/get-financial-transaction.query.js';
import { getFinancialTransaction } from '../../financial-transaction/get-financial-transaction.js';
import { FinancialTransactionDto } from '../../financial-transaction/types.js';

@QueryHandler(GetFinancialTransactionQuery)
export class GetFinancialTransactionHandler implements IQueryHandler<GetFinancialTransactionQuery> {
  async execute(
    query: GetFinancialTransactionQuery,
  ): Promise<ICommandResponse<FinancialTransactionDto>> {
    return getFinancialTransaction(query.payload, query.context);
  }
}
