import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ICommandResponse } from '@electronic-shop/types';
import { GetTreasuryMovementsQuery } from '../impl/get-treasury-movements.query.js';
import { getTreasuryMovements } from '../../treasury-movement/queries.js';

@QueryHandler(GetTreasuryMovementsQuery)
export class GetTreasuryMovementsHandler implements IQueryHandler<GetTreasuryMovementsQuery> {
  async execute(query: GetTreasuryMovementsQuery): Promise<ICommandResponse<any>> {
    const raw = query.payload as { movementTypes?: string[]; limit?: number; payload?: { movementTypes?: string[]; limit?: number } } | undefined;
    const payload =
      raw && Array.isArray(raw.movementTypes)
        ? raw
        : raw?.payload && typeof raw.payload === "object"
          ? raw.payload
          : raw ?? {};
    return getTreasuryMovements(query.context, payload);
  }
}
