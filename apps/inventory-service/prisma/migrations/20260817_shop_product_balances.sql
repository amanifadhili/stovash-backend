-- ShopProductBalance: per-shop accessory quantities
-- Run via: prisma db push / migrate, then optional backfill below.

CREATE TABLE IF NOT EXISTS "shop_product_balances" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "productId" TEXT NOT NULL,
  "quantityOnHand" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "version" INTEGER NOT NULL DEFAULT 1,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "shop_product_balances_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "shop_product_balances_tenantId_shopId_productId_key"
  ON "shop_product_balances"("tenantId", "shopId", "productId");

CREATE INDEX IF NOT EXISTS "shop_product_balances_tenantId_shopId_idx"
  ON "shop_product_balances"("tenantId", "shopId");

CREATE INDEX IF NOT EXISTS "shop_product_balances_productId_idx"
  ON "shop_product_balances"("productId");

-- Backfill: products with shopId set
INSERT INTO "shop_product_balances" ("id", "tenantId", "shopId", "productId", "quantityOnHand", "version", "updatedAt", "createdAt")
SELECT gen_random_uuid()::text, p."tenantId", p."shopId", p."id", p."quantityOnHand", 1, NOW(), NOW()
FROM "products" p
WHERE p."shopId" IS NOT NULL
  AND p."trackingMethod" = 'NON_SERIALIZED'
  AND p."quantityOnHand" <> 0
  AND NOT EXISTS (
    SELECT 1 FROM "shop_product_balances" b
    WHERE b."tenantId" = p."tenantId" AND b."shopId" = p."shopId" AND b."productId" = p."id"
  );

-- Backfill: tenant-shared products (shopId null) — attach to shops that already have IN movements
INSERT INTO "shop_product_balances" ("id", "tenantId", "shopId", "productId", "quantityOnHand", "version", "updatedAt", "createdAt")
SELECT gen_random_uuid()::text, p."tenantId", m."shopId", p."id", p."quantityOnHand", 1, NOW(), NOW()
FROM "products" p
JOIN LATERAL (
  SELECT DISTINCT im."shopId"
  FROM "inventory_movements" im
  WHERE im."tenantId" = p."tenantId" AND im."productId" = p."id"
  LIMIT 1
) m ON true
WHERE p."shopId" IS NULL
  AND p."trackingMethod" = 'NON_SERIALIZED'
  AND p."quantityOnHand" <> 0
  AND NOT EXISTS (
    SELECT 1 FROM "shop_product_balances" b
    WHERE b."tenantId" = p."tenantId" AND b."shopId" = m."shopId" AND b."productId" = p."id"
  );
