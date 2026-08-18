export const ENGINE_CHART_ACCOUNTS: Array<{
  code: string;
  name: string;
  type: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
  fundCode?: 'CAPITAL' | 'OPERATIONAL' | 'PROFIT_RESERVE';
}> = [
  { code: '1140', name: 'Capital Bank', type: 'ASSET', fundCode: 'CAPITAL' },
  { code: '1150', name: 'Petty Cash', type: 'ASSET', fundCode: 'CAPITAL' },
  { code: '1110', name: 'Operational Cash', type: 'ASSET', fundCode: 'OPERATIONAL' },
  { code: '1120', name: 'Operational MoMo', type: 'ASSET', fundCode: 'OPERATIONAL' },
  { code: '1130', name: 'Operational Main Bank', type: 'ASSET', fundCode: 'OPERATIONAL' },
  { code: '1135', name: 'Other Operational Banks', type: 'ASSET', fundCode: 'OPERATIONAL' },
  { code: '1100', name: 'Profit Reserve Bank', type: 'ASSET', fundCode: 'PROFIT_RESERVE' },
  { code: '1200', name: 'Customer Receivable', type: 'ASSET' },
  { code: '1210', name: 'Worker Advance Receivable', type: 'ASSET' },
  { code: '1300', name: 'Inventory', type: 'ASSET' },
  { code: '2100', name: 'Supplier Payable', type: 'LIABILITY' },
  { code: '2200', name: 'External Loan Payable', type: 'LIABILITY' },
  { code: '3000', name: 'Owner Equity', type: 'EQUITY' },
  { code: '3990', name: 'Reconciliation adjustments', type: 'EQUITY' },
  { code: '4000', name: 'Sales Revenue', type: 'REVENUE' },
  { code: '5000', name: 'Cost of Goods Sold', type: 'EXPENSE' },
  { code: '6200', name: 'Rent', type: 'EXPENSE' },
  { code: '6210', name: 'Isuku (Cleaning)', type: 'EXPENSE' },
  { code: '6220', name: 'Electricity', type: 'EXPENSE' },
  { code: '6230', name: 'Internet', type: 'EXPENSE' },
  { code: '6240', name: 'Salaries', type: 'EXPENSE' },
  { code: '6250', name: 'Taxes', type: 'EXPENSE' },
  { code: '6260', name: 'Field expenses', type: 'EXPENSE' },
  { code: '6270', name: 'Loan interest', type: 'EXPENSE' },
  { code: '6280', name: 'Petty refreshments', type: 'EXPENSE' },
  { code: '6281', name: 'Petty minor expense', type: 'EXPENSE' },
  { code: '6282', name: 'Petty unexpected', type: 'EXPENSE' },
];

export const GENERAL_EXPENSE_CATEGORIES = [
  { code: 'RENT', label: 'Rent', accountCode: '6200' },
  { code: 'ISUKU', label: 'Isuku', accountCode: '6210' },
  { code: 'ELECTRICITY', label: 'Electricity', accountCode: '6220' },
  { code: 'INTERNET', label: 'Internet', accountCode: '6230' },
  { code: 'SALARIES', label: 'Salaries', accountCode: '6240' },
  { code: 'TAXES', label: 'Taxes', accountCode: '6250' },
  { code: 'FIELD', label: 'Field expenses', accountCode: '6260' },
] as const;

export type GeneralExpenseCategoryCode = (typeof GENERAL_EXPENSE_CATEGORIES)[number]['code'];

export const GENERAL_EXPENSE_CATEGORY_BY_CODE = Object.fromEntries(
  GENERAL_EXPENSE_CATEGORIES.map((c) => [c.code, c]),
) as Record<GeneralExpenseCategoryCode, (typeof GENERAL_EXPENSE_CATEGORIES)[number]>;

export const PETTY_EXPENSE_CATEGORIES = [
  { code: 'REFRESHMENTS', label: 'Refreshments', accountCode: '6280' },
  { code: 'MINOR', label: 'Minor expense', accountCode: '6281' },
  { code: 'UNEXPECTED', label: 'Unexpected', accountCode: '6282' },
] as const;

export type PettyExpenseCategoryCode = (typeof PETTY_EXPENSE_CATEGORIES)[number]['code'];

export const PETTY_EXPENSE_CATEGORY_BY_CODE = Object.fromEntries(
  PETTY_EXPENSE_CATEGORIES.map((c) => [c.code, c]),
) as Record<PettyExpenseCategoryCode, (typeof PETTY_EXPENSE_CATEGORIES)[number]>;

export const ACCOUNT_PROFIT_RESERVE_BANK = '1100';
export const ACCOUNT_PETTY_CASH = '1150';
export const ACCOUNT_CAPITAL_BANK = '1140';
export const ACCOUNT_OWNER_EQUITY = '3000';
export const ACCOUNT_EXTERNAL_LOAN_PAYABLE = '2200';
export const ACCOUNT_INTEREST_EXPENSE = '6270';
export const ACCOUNT_RECON_ADJUSTMENT = '3990';
export const ACCOUNT_WORKER_ADVANCE = '1210';
export const ACCOUNT_CUSTOMER_RECEIVABLE = '1200';
export const ACCOUNT_SUPPLIER_PAYABLE = '2100';
export const ACCOUNT_SALES_REVENUE = '4000';
export const ACCOUNT_INVENTORY = '1300';
export const ACCOUNT_COGS = '5000';

export const PHYSICAL_KIND_TO_CHART: Record<string, string> = {
  CAPITAL_BANK: ACCOUNT_CAPITAL_BANK,
  PETTY_CASH: ACCOUNT_PETTY_CASH,
  OPS_CASH: '1110',
  OPS_MOMO: '1120',
  OPS_MAIN_BANK: '1130',
  OPS_OTHER_BANK: '1135',
  PROFIT_BANK: ACCOUNT_PROFIT_RESERVE_BANK,
};
