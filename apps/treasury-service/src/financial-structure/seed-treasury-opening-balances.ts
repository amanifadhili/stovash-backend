import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { ensureFinancialStructure } from './bootstrap.js';
import { SeedTreasuryOpeningBalancesPayload } from '../commands/impl/seed-treasury-opening-balances.command.js';

type TreasuryPrisma = typeof defaultPrisma;

export async function seedTreasuryOpeningBalances(
  payload: SeedTreasuryOpeningBalancesPayload,
  context?: IRequestContext,
  db: TreasuryPrisma = defaultPrisma,
): Promise<ICommandResponse<{ seededCount: number; totalCapitalMinor: string }>> {
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

  const items = payload?.accounts ?? [];
  if (!Array.isArray(items) || items.length === 0) {
    return {
      status: 'error',
      traceId,
      message: 'accounts array must not be empty',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  try {
    // 1. Ensure basic logical funds exist
    await ensureFinancialStructure(tenantId, shopId, userId, db);

    let totalCapital = BigInt(0);

    // 2. Perform atomic database seeding transaction
    await db.$transaction(async (tx) => {
      for (const item of items) {
        const code = item.code?.trim() || `OPS_CUSTOM_${randomUUID().slice(0, 8)}`;
        const name = item.name?.trim() || 'Treasury Account';
        const currency = item.currency?.trim() || 'RWF';
        const amountMinor = BigInt(item.amountMinor || '0');

        totalCapital += amountMinor;

        // Map code to fund code
        let fundCode = 'OPERATIONAL';
        if (code === '1100' || code === '1150' || item.fundCode === 'PROFIT_RESERVE' || item.name?.includes('Profit Reserve') || item.name?.includes('Petty Cash')) {
          fundCode = 'PROFIT_RESERVE';
        } else if (code === '1140' || item.fundCode === 'CAPITAL' || item.name?.includes('Capital')) {
          fundCode = 'CAPITAL';
        }

        const fund = await tx.logicalFund.findUnique({
          where: { tenantId_shopId_code: { tenantId, shopId, code: fundCode } },
        });

        if (!fund) continue;

        let accountId = '';
        // Check if account already exists
        const existing = await tx.physicalAccount.findUnique({
          where: { tenantId_shopId_code: { tenantId, shopId, code } },
        });

        if (existing) {
          accountId = existing.id;
          await tx.physicalAccount.update({
            where: { id: existing.id },
            data: {
              name,
              currency,
            },
          });
        } else {
          const created = await tx.physicalAccount.create({
            data: {
              tenantId,
              shopId,
              fundId: fund.id,
              kind: item.kind || 'OPS_OTHER_BANK',
              code,
              name,
              currency,
              createdBy: userId,
            },
          });
          accountId = created.id;
        }

        if (amountMinor > 0n) {
          const idempotencyKey = `seed-opening-${tenantId}-${shopId}-${code}`;
          await tx.treasuryMovement.upsert({
            where: { tenantId_idempotencyKey: { tenantId, idempotencyKey } },
            create: {
              tenantId,
              shopId,
              movementType: 'OWNER_CAPITAL_IN',
              fromPhysicalId: null,
              toPhysicalId: accountId,
              amountMinor,
              financialTransactionId: randomUUID(),
              occurredOn: new Date(),
              idempotencyKey,
              reason: 'Opening Balance Seeding (Setup Mode)',
              notes: item.notes || 'Initial opening balance',
              createdBy: userId,
            },
            update: {
              amountMinor,
              toPhysicalId: accountId,
            },
          });
        }
      }

      // Log Audit Entry for opening balance seeding
      await tx.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'SeedTreasuryOpeningBalances',
          resource: 'PhysicalAccount',
          traceId,
          details: JSON.stringify({ seededCount: items.length, totalCapitalMinor: totalCapital.toString() }),
        },
      });
    });

    return {
      status: 'success',
      traceId,
      data: {
        seededCount: items.length,
        totalCapitalMinor: totalCapital.toString(),
      },
    };
  } catch (error: any) {
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to seed treasury opening balances',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
