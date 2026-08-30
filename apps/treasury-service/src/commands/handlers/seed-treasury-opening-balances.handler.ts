import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { SeedTreasuryOpeningBalancesCommand } from '../impl/seed-treasury-opening-balances.command.js';
import { seedTreasuryOpeningBalances } from '../../financial-structure/seed-treasury-opening-balances.js';

@CommandHandler(SeedTreasuryOpeningBalancesCommand)
export class SeedTreasuryOpeningBalancesHandler extends BaseCommandHandler<SeedTreasuryOpeningBalancesCommand> {
  async execute(
    command: SeedTreasuryOpeningBalancesCommand,
  ): Promise<ICommandResponse<{ seededCount: number; totalCapitalMinor: string }>> {
    return seedTreasuryOpeningBalances(command.payload, command.context);
  }
}
