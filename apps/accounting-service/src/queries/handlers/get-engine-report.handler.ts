import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetEngineReportQuery } from '../impl/get-engine-report.query.js';
import { getEngineReport } from '../../engine-ledger/engine-report.js';

@QueryHandler(GetEngineReportQuery)
export class GetEngineReportHandler implements IQueryHandler<GetEngineReportQuery> {
  async execute(query: GetEngineReportQuery): Promise<ICommandResponse<any>> {
    return getEngineReport(query.context);
  }
}
