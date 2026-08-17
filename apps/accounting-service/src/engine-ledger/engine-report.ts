import { ICommandResponse, IRequestContext } from '@electronic-shop/types';
import {
  ACCOUNT_COGS,
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_SALES_REVENUE,
  ACCOUNT_SUPPLIER_PAYABLE,
  ACCOUNT_WORKER_ADVANCE,
  GENERAL_EXPENSE_CATEGORIES,
} from './chart.js';
import { getAccountingAccounts, getReceivables } from './queries.js';

function asBigInt(value?: string | null): bigint {
  if (!value) return 0n;
  try {
    return BigInt(value);
  } catch {
    return 0n;
  }
}

function sumOpen(rows: Array<{ outstandingMinor: string; status: string }>): bigint {
  return rows
    .filter((row) => row.status === 'OPEN')
    .reduce((sum, row) => sum + asBigInt(row.outstandingMinor), 0n);
}

export async function getEngineReport(
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const accountsRes = await getAccountingAccounts(context);
  if (accountsRes.status !== 'success') return accountsRes;
  const recvRes = await getReceivables(context);
  if (recvRes.status !== 'success') return recvRes;

  const accounts: Array<{ code: string; name: string; type: string; balanceMinor: string }> =
    accountsRes.data.accounts ?? [];
  const byCode = new Map(accounts.map((a) => [a.code, a]));

  const revenueMinor = asBigInt(byCode.get(ACCOUNT_SALES_REVENUE)?.balanceMinor);
  const cogsMinor = asBigInt(byCode.get(ACCOUNT_COGS)?.balanceMinor);
  const grossProfitMinor = revenueMinor - cogsMinor;

  const expensesByCategory = GENERAL_EXPENSE_CATEGORIES.map((cat) => ({
    code: cat.code,
    name: cat.label,
    accountCode: cat.accountCode,
    amountMinor: asBigInt(byCode.get(cat.accountCode)?.balanceMinor).toString(),
  }));
  const interestMinor = asBigInt(byCode.get('6270')?.balanceMinor);
  const generalExpenseMinor = expensesByCategory.reduce((sum, row) => sum + asBigInt(row.amountMinor), 0n);
  const expensesMinor = generalExpenseMinor + interestMinor;

  const customerOutstandingMinor = sumOpen(recvRes.data.receivables.filter((r: any) => r.kind === 'CUSTOMER_RECEIVABLE'));
  const workerOutstandingMinor = sumOpen(recvRes.data.receivables.filter((r: any) => r.kind === 'WORKER_ADVANCE'));
  const supplierOutstandingMinor = sumOpen(recvRes.data.payables);

  const earnedMinor = asBigInt(accountsRes.data.profitAllocation?.earnedMinor);
  const transferredMinor = asBigInt(accountsRes.data.profitAllocation?.transferredMinor);
  const untransferredMinor = earnedMinor - transferredMinor;

  return {
    status: 'success',
    traceId: accountsRes.traceId,
    data: {
      revenueMinor: revenueMinor.toString(),
      cogsMinor: cogsMinor.toString(),
      grossProfitMinor: grossProfitMinor.toString(),
      expensesMinor: expensesMinor.toString(),
      interestMinor: interestMinor.toString(),
      generalExpenseMinor: generalExpenseMinor.toString(),
      chartArMinor: asBigInt(byCode.get(ACCOUNT_CUSTOMER_RECEIVABLE)?.balanceMinor).toString(),
      chartApMinor: asBigInt(byCode.get(ACCOUNT_SUPPLIER_PAYABLE)?.balanceMinor).toString(),
      chartWorkerAdvanceMinor: asBigInt(byCode.get(ACCOUNT_WORKER_ADVANCE)?.balanceMinor).toString(),
      profit: {
        earnedMinor: earnedMinor.toString(),
        transferredMinor: transferredMinor.toString(),
        untransferredMinor: untransferredMinor.toString(),
      },
      receivables: {
        customerOutstandingMinor: customerOutstandingMinor.toString(),
        workerOutstandingMinor: workerOutstandingMinor.toString(),
        rows: recvRes.data.receivables,
      },
      payables: {
        supplierOutstandingMinor: supplierOutstandingMinor.toString(),
        rows: recvRes.data.payables,
      },
      expensesByCategory,
      note: 'P&L and obligations are derived from posted engine journals. Not PaymentMethod.balance.',
    },
  };
}
