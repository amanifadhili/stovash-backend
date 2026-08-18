import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetFinancialStructureQuery } from '../impl/get-financial-structure.query.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';
import { FinancialStructureDto } from '../../financial-structure/types.js';

@QueryHandler(GetFinancialStructureQuery)
export class GetFinancialStructureHandler implements IQueryHandler<GetFinancialStructureQuery> {
  async execute(query: GetFinancialStructureQuery): Promise<ICommandResponse<FinancialStructureDto>> {
    return getFinancialStructure(query.context);
  }
}
