export const LOGICAL_FUND_CODES = ['CAPITAL', 'OPERATIONAL', 'PROFIT_RESERVE'] as const;
export type LogicalFundCode = (typeof LOGICAL_FUND_CODES)[number];

export const PHYSICAL_ACCOUNT_KINDS = [
  'CAPITAL_BANK',
  'PETTY_CASH',
  'OPS_MAIN_BANK',
  'OPS_CASH',
  'OPS_MOMO',
  'OPS_OTHER_BANK',
  'PROFIT_BANK',
] as const;
export type PhysicalAccountKind = (typeof PHYSICAL_ACCOUNT_KINDS)[number];

export const MANDATORY_ACCOUNT_KINDS = [
  'CAPITAL_BANK',
  'PETTY_CASH',
  'OPS_MAIN_BANK',
  'OPS_CASH',
  'OPS_MOMO',
  'PROFIT_BANK',
] as const;

export const KIND_TO_FUND: Record<Exclude<PhysicalAccountKind, 'OPS_OTHER_BANK'>, LogicalFundCode> = {
  CAPITAL_BANK: 'CAPITAL',
  PETTY_CASH: 'CAPITAL',
  OPS_MAIN_BANK: 'OPERATIONAL',
  OPS_CASH: 'OPERATIONAL',
  OPS_MOMO: 'OPERATIONAL',
  PROFIT_BANK: 'PROFIT_RESERVE',
};

export const FUND_TREE: Array<{
  code: LogicalFundCode;
  name: string;
  accounts: Array<{ kind: PhysicalAccountKind; code: string; name: string }>;
}> = [
  {
    code: 'CAPITAL',
    name: 'Capital',
    accounts: [
      { kind: 'CAPITAL_BANK', code: 'CAPITAL_BANK', name: 'Capital Bank' },
      { kind: 'PETTY_CASH', code: 'PETTY_CASH', name: 'Petty Cash' },
    ],
  },
  {
    code: 'OPERATIONAL',
    name: 'Operational',
    accounts: [
      { kind: 'OPS_MAIN_BANK', code: 'OPS_MAIN_BANK', name: 'Operational Main Bank' },
      { kind: 'OPS_CASH', code: 'OPS_CASH', name: 'Cash' },
      { kind: 'OPS_MOMO', code: 'OPS_MOMO', name: 'MoMo' },
    ],
  },
  {
    code: 'PROFIT_RESERVE',
    name: 'Profit Reserve',
    accounts: [{ kind: 'PROFIT_BANK', code: 'PROFIT_BANK', name: 'Profit Reserve Bank' }],
  },
];

export interface PhysicalAccountDto {
  id: string;
  fundId: string;
  fundCode: LogicalFundCode;
  kind: PhysicalAccountKind;
  code: string;
  name: string;
  currency: string;
  isActive: boolean;
  /** Derived from treasury movements. Always "0" until Phase 5. */
  balanceMinor: string;
}

export interface LogicalFundDto {
  id: string;
  code: LogicalFundCode;
  name: string;
  currency: string;
  balanceMinor: string;
  accounts: PhysicalAccountDto[];
}

export interface FinancialStructureDto {
  funds: LogicalFundDto[];
  currency: string;
  note: string;
  /** Phase 6: treasury SoT is Σ posted movements (approved recon is a movement). */
  authority?: 'treasury_movements';
}

export interface CreatePhysicalAccountPayload {
  name: string;
  kind?: PhysicalAccountKind;
  fundCode?: LogicalFundCode;
}

export const ZERO_BALANCE_NOTE =
  'Balances are derived from posted treasury movements. None have been posted yet. Opening money is OWNER_CAPITAL_IN in a later phase — not a typed till number.';
