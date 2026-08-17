import { prisma as defaultPrisma } from '../database/client.js';
import { FUND_TREE } from './types.js';

type TreasuryPrisma = typeof defaultPrisma;

export async function ensureFinancialStructure(
  tenantId: string,
  shopId: string,
  actorUserId: string,
  db: TreasuryPrisma = defaultPrisma,
) {
  await db.$transaction(async (tx) => {
    for (const fundDef of FUND_TREE) {
      let fund = await tx.logicalFund.findUnique({
        where: { tenantId_shopId_code: { tenantId, shopId, code: fundDef.code } },
      });
      if (!fund) {
        fund = await tx.logicalFund.create({
          data: {
            tenantId,
            shopId,
            code: fundDef.code,
            name: fundDef.name,
            currency: 'RWF',
          },
        });
      }

      for (const accountDef of fundDef.accounts) {
        const existing = await tx.physicalAccount.findUnique({
          where: { tenantId_shopId_code: { tenantId, shopId, code: accountDef.code } },
        });
        if (existing) continue;
        await tx.physicalAccount.create({
          data: {
            tenantId,
            shopId,
            fundId: fund.id,
            kind: accountDef.kind,
            code: accountDef.code,
            name: accountDef.name,
            currency: 'RWF',
            createdBy: actorUserId,
          },
        });
      }
    }
  });
}
