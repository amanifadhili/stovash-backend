import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface SeedTreasuryAccountItem {
  code: string;
  name: string;
  kind?: string;
  fundCode?: string;
  amountMinor: string;
  currency?: string;
  notes?: string;
}

export interface SeedTreasuryOpeningBalancesPayload {
  accounts: SeedTreasuryAccountItem[];
}

export class SeedTreasuryOpeningBalancesCommand extends BaseCommand<SeedTreasuryOpeningBalancesPayload> {
  constructor(
    public readonly payload: SeedTreasuryOpeningBalancesPayload,
    public readonly context?: IRequestContext,
  ) {
    super(payload, context);
  }
}
