import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { ensureFinancialStructure } from './bootstrap.js';
import { derivedBalances, balanceOf } from '../treasury-movement/balances.js';
import {
  FinancialStructureDto,
  FUND_TREE,
  LogicalFundCode,
  LogicalFundDto,
  PhysicalAccountKind,
} from './types.js';

type TreasuryPrisma = typeof defaultPrisma;

const FUND_ORDER = FUND_TREE.map((f) => f.code);

function sumMinor(values: string[]): string {
  let total = 0n;
  for (const value of values) {
    total += BigInt(value);
  }
  return total.toString();
}

export async function getFinancialStructure(
  context?: IRequestContext,
  db: TreasuryPrisma = defaultPrisma,
): Promise<ICommandResponse<FinancialStructureDto>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return {
      status: 'error',
      traceId,
      message: 'tenantId and shopId are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  try {
    await ensureFinancialStructure(tenantId, shopId, userId, db);

    const funds = await db.logicalFund.findMany({
      where: { tenantId, shopId },
      include: { accounts: { orderBy: { createdAt: 'asc' } } },
    });

    const balances = await derivedBalances(tenantId, shopId, db);
    const byCode = new Map(funds.map((fund) => [fund.code, fund]));
    const ordered: LogicalFundDto[] = FUND_ORDER.map((code) => {
      const fund = byCode.get(code);
      if (!fund) {
        throw new Error(`Missing bootstrapped fund ${code}`);
      }
      const accounts = fund.accounts.map((account) => ({
        id: account.id,
        fundId: fund.id,
        fundCode: fund.code as LogicalFundCode,
        kind: account.kind as PhysicalAccountKind,
        code: account.code,
        name: account.name,
        currency: account.currency,
        isActive: account.isActive,
        balanceMinor: balanceOf(balances, account.id).toString(),
      }));
      return {
        id: fund.id,
        code: fund.code as LogicalFundCode,
        name: fund.name,
        currency: fund.currency,
        balanceMinor: sumMinor(accounts.map((a) => a.balanceMinor)),
        accounts,
      };
    });

    const hasMoney = ordered.some((f) => f.balanceMinor !== '0');
    return {
      status: 'success',
      traceId,
      data: {
        funds: ordered,
        currency: 'RWF',
        authority: 'treasury_movements',
        note: hasMoney
          ? 'Balances are the sum of posted treasury movements (including approved recon). You cannot type a till number.'
          : 'Balances are derived from posted treasury movements. None have been posted yet. Opening money is OWNER_CAPITAL_IN — not a typed till number.',
      },
    };
  } catch (error: any) {
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to load financial structure',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
