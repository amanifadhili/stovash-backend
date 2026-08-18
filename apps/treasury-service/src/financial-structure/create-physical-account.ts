import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { ensureFinancialStructure } from './bootstrap.js';
import { PhysicalAccountDto, PhysicalAccountKind } from './types.js';

type TreasuryPrisma = typeof defaultPrisma;

const OPENING_BALANCE_KEYS = ['balance', 'initialBalance', 'openingBalance', 'amount', 'amountMinor'];

export async function createPhysicalAccount(
  payload: any,
  context?: IRequestContext,
  db: TreasuryPrisma = defaultPrisma,
): Promise<ICommandResponse<PhysicalAccountDto>> {
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

  if (payload && OPENING_BALANCE_KEYS.some((key) => payload[key] != null)) {
    return {
      status: 'error',
      traceId,
      message:
        'CreatePhysicalAccount cannot set a balance. Opening money is OWNER_CAPITAL_IN in a later phase.',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const name = typeof payload?.name === 'string' ? payload.name.trim() : '';
  if (!name || name.length > 80) {
    return {
      status: 'error',
      traceId,
      message: 'name is required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const kind = (payload?.kind as PhysicalAccountKind | undefined) || 'OPS_OTHER_BANK';
  const requestedFund = payload?.fundCode as string | undefined;

  if (kind === 'PETTY_CASH' && requestedFund === 'OPERATIONAL') {
    return {
      status: 'error',
      traceId,
      message: 'Petty Cash belongs to Capital. It cannot sit under Operational.',
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    };
  }

  if (kind === 'PETTY_CASH') {
    return {
      status: 'error',
      traceId,
      message: 'Petty Cash is a mandatory Capital account and is created on shop bootstrap.',
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    };
  }

  if (kind !== 'OPS_OTHER_BANK') {
    return {
      status: 'error',
      traceId,
      message: 'Only extra Operational banks can be created. Mandatory accounts are bootstrapped.',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  if (requestedFund && requestedFund !== 'OPERATIONAL') {
    return {
      status: 'error',
      traceId,
      message: 'Extra physical accounts must sit under Operational.',
      errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
    };
  }

  try {
    await ensureFinancialStructure(tenantId, shopId, userId, db);

    const fund = await db.logicalFund.findUnique({
      where: { tenantId_shopId_code: { tenantId, shopId, code: 'OPERATIONAL' } },
    });
    if (!fund) {
      return {
        status: 'error',
        traceId,
        message: 'Operational fund is missing',
        errorCode: ErrorCode.INTERNAL_ERROR,
      };
    }

    const slug = name
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 24);
    const code = `OPS_OTHER_BANK:${slug || 'BANK'}:${randomUUID().slice(0, 8)}`;

    const account = await db.physicalAccount.create({
      data: {
        tenantId,
        shopId,
        fundId: fund.id,
        kind: 'OPS_OTHER_BANK',
        code,
        name,
        currency: 'RWF',
        createdBy: userId,
      },
    });

    try {
      await db.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'CreatePhysicalAccount',
          resource: 'PhysicalAccount',
          resourceId: account.id,
          traceId,
          details: JSON.stringify({ kind: account.kind, name, fundCode: 'OPERATIONAL' }),
        },
      });
    } catch (auditError) {
      console.error('Failed to log audit action:', auditError);
    }

    return {
      status: 'success',
      traceId,
      data: {
        id: account.id,
        fundId: fund.id,
        fundCode: 'OPERATIONAL',
        kind: 'OPS_OTHER_BANK',
        code: account.code,
        name: account.name,
        currency: account.currency,
        isActive: account.isActive,
        balanceMinor: '0',
      },
    };
  } catch (error: any) {
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to create physical account',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
