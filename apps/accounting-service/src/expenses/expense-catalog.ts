export const EXPENSE_CATEGORIES = [
  { code: 'RENT', label: 'Rent', accountCode: '6200', accountName: 'Rent' },
  { code: 'ISUKU', label: 'Isuku', accountCode: '6210', accountName: 'Isuku (Cleaning)' },
  { code: 'ELECTRICITY', label: 'Electricity', accountCode: '6220', accountName: 'Electricity' },
  { code: 'INTERNET', label: 'Internet', accountCode: '6230', accountName: 'Internet' },
  { code: 'SALARIES', label: 'Salaries', accountCode: '6240', accountName: 'Salaries' },
  { code: 'TAXES', label: 'Taxes', accountCode: '6250', accountName: 'Taxes' },
  { code: 'FIELD', label: 'Field expenses', accountCode: '6260', accountName: 'Field expenses' },
] as const;

export type ExpenseCategoryCode = (typeof EXPENSE_CATEGORIES)[number]['code'];

export const EXPENSE_CATEGORY_BY_CODE = Object.fromEntries(
  EXPENSE_CATEGORIES.map((c) => [c.code, c]),
) as Record<ExpenseCategoryCode, (typeof EXPENSE_CATEGORIES)[number]>;

export const EXPENSE_ACCOUNT_CODES = EXPENSE_CATEGORIES.map((c) => c.accountCode);

export const PAYMENT_ACCOUNTS: Record<string, { code: string; name: string }> = {
  CASH: { code: '1001', name: 'Cash on Hand' },
  MOMO: { code: '1002', name: 'Mobile Money' },
  BANK: { code: '1003', name: 'Bank' },
  BANK_TRANSFER: { code: '1003', name: 'Bank' },
  CARD: { code: '1004', name: 'Card' },
};

export function categoryFromAccountCode(accountCode: string): (typeof EXPENSE_CATEGORIES)[number] | undefined {
  return EXPENSE_CATEGORIES.find((c) => c.accountCode === accountCode);
}

export function paymentMethodFromAccountCode(accountCode: string): string {
  if (accountCode === '1002') return 'MOMO';
  if (accountCode === '1003') return 'BANK';
  if (accountCode === '1004') return 'CARD';
  return 'CASH';
}
