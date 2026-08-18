-- Phase 10: GetFundBalances is Σ treasury_movements for the shop.
-- Prefix (tenantId, shopId) already exists on occurredOn; add from/to for
-- account-scoped movement lookups. Do not DROP legacy till tables here.

CREATE INDEX IF NOT EXISTS "treasury_movements_tenantId_shopId_fromPhysicalId_idx"
  ON "treasury_movements"("tenantId", "shopId", "fromPhysicalId");

CREATE INDEX IF NOT EXISTS "treasury_movements_tenantId_shopId_toPhysicalId_idx"
  ON "treasury_movements"("tenantId", "shopId", "toPhysicalId");
