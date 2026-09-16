-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "type" TEXT NOT NULL DEFAULT 'RENTAL',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT,
    "sharedShopIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "type" TEXT NOT NULL DEFAULT 'DEVICE',
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "productType" TEXT NOT NULL DEFAULT 'PHYSICAL_GOOD',
    "trackingMethod" TEXT NOT NULL DEFAULT 'SERIALIZED',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "specifications" JSONB,
    "quantityOnHand" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "imageUrl" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_product_balances" (
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

-- CreateTable
CREATE TABLE "inventory_items" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT,
    "sellingPrice" DOUBLE PRECISION,
    "specifications" JSONB,
    "imei1" TEXT,
    "imei2" TEXT,
    "condition" TEXT,
    "notes" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "serialNumber" TEXT NOT NULL,
    "purchaseCost" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CREATED',
    "capitalizedCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "inventory_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_upgrades" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "inventoryItemId" TEXT NOT NULL,
    "upgradeType" TEXT NOT NULL,
    "description" TEXT,
    "details" JSONB,
    "idempotencyKey" TEXT,
    "cost" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inventory_upgrades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_transfers" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "fromShopId" TEXT NOT NULL,
    "toShopId" TEXT NOT NULL,
    "transferNumber" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'COMPLETED',
    "notes" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inventory_transfers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warranty_claims" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "customerName" TEXT,
    "issueDescription" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'LOGGED',
    "resolution" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "warranty_claims_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_prices" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "sellingPrice" DOUBLE PRECISION NOT NULL,
    "validFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,

    CONSTRAINT "product_prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_movements" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "inventoryItemId" TEXT,
    "productId" TEXT,
    "customerId" TEXT,
    "counterpartyName" TEXT,
    "counterpartyPhone" TEXT,
    "movementType" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "referenceId" TEXT,
    "referenceType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,

    CONSTRAINT "inventory_movements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_adjustments" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "inventoryItemId" TEXT NOT NULL,
    "adjustmentType" TEXT NOT NULL,
    "reason" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,

    CONSTRAINT "inventory_adjustments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "resourceId" TEXT,
    "traceId" TEXT,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rental_agreements" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "inventoryItemId" TEXT,
    "productId" TEXT,
    "contactId" TEXT,
    "personName" TEXT NOT NULL,
    "personPhone" TEXT,
    "agreementType" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expectedReturn" TIMESTAMP(3),
    "actualReturn" TIMESTAMP(3),
    "rentalFee" DOUBLE PRECISION,
    "ownerAgreedCost" DOUBLE PRECISION,
    "salePrice" DOUBLE PRECISION,
    "ownerPayoutTotal" DOUBLE PRECISION,
    "ownerPayoutDetails" JSONB,
    "commissionAmount" DOUBLE PRECISION,
    "maintenanceCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "notes" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rental_agreements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contacts_tenantId_idx" ON "contacts"("tenantId");

-- CreateIndex
CREATE INDEX "contacts_shopId_idx" ON "contacts"("shopId");

-- CreateIndex
CREATE INDEX "contacts_type_idx" ON "contacts"("type");

-- CreateIndex
CREATE INDEX "products_tenantId_idx" ON "products"("tenantId");

-- CreateIndex
CREATE INDEX "products_shopId_idx" ON "products"("shopId");

-- CreateIndex
CREATE INDEX "products_status_idx" ON "products"("status");

-- CreateIndex
CREATE UNIQUE INDEX "products_tenantId_sku_key" ON "products"("tenantId", "sku");

-- CreateIndex
CREATE INDEX "shop_product_balances_tenantId_shopId_idx" ON "shop_product_balances"("tenantId", "shopId");

-- CreateIndex
CREATE INDEX "shop_product_balances_productId_idx" ON "shop_product_balances"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "shop_product_balances_tenantId_shopId_productId_key" ON "shop_product_balances"("tenantId", "shopId", "productId");

-- CreateIndex
CREATE INDEX "inventory_items_tenantId_idx" ON "inventory_items"("tenantId");

-- CreateIndex
CREATE INDEX "inventory_items_shopId_idx" ON "inventory_items"("shopId");

-- CreateIndex
CREATE INDEX "inventory_items_productId_idx" ON "inventory_items"("productId");

-- CreateIndex
CREATE INDEX "inventory_items_status_idx" ON "inventory_items"("status");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_items_tenantId_serialNumber_key" ON "inventory_items"("tenantId", "serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_upgrades_idempotencyKey_key" ON "inventory_upgrades"("idempotencyKey");

-- CreateIndex
CREATE INDEX "inventory_upgrades_tenantId_idx" ON "inventory_upgrades"("tenantId");

-- CreateIndex
CREATE INDEX "inventory_upgrades_shopId_idx" ON "inventory_upgrades"("shopId");

-- CreateIndex
CREATE INDEX "inventory_upgrades_inventoryItemId_idx" ON "inventory_upgrades"("inventoryItemId");

-- CreateIndex
CREATE INDEX "inventory_upgrades_upgradeType_idx" ON "inventory_upgrades"("upgradeType");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_transfers_transferNumber_key" ON "inventory_transfers"("transferNumber");

-- CreateIndex
CREATE INDEX "inventory_transfers_tenantId_idx" ON "inventory_transfers"("tenantId");

-- CreateIndex
CREATE INDEX "inventory_transfers_fromShopId_idx" ON "inventory_transfers"("fromShopId");

-- CreateIndex
CREATE INDEX "inventory_transfers_toShopId_idx" ON "inventory_transfers"("toShopId");

-- CreateIndex
CREATE INDEX "inventory_transfers_status_idx" ON "inventory_transfers"("status");

-- CreateIndex
CREATE INDEX "warranty_claims_tenantId_idx" ON "warranty_claims"("tenantId");

-- CreateIndex
CREATE INDEX "warranty_claims_shopId_idx" ON "warranty_claims"("shopId");

-- CreateIndex
CREATE INDEX "warranty_claims_serialNumber_idx" ON "warranty_claims"("serialNumber");

-- CreateIndex
CREATE INDEX "warranty_claims_status_idx" ON "warranty_claims"("status");

-- CreateIndex
CREATE INDEX "product_prices_productId_idx" ON "product_prices"("productId");

-- CreateIndex
CREATE INDEX "product_prices_tenantId_idx" ON "product_prices"("tenantId");

-- CreateIndex
CREATE INDEX "inventory_movements_tenantId_idx" ON "inventory_movements"("tenantId");

-- CreateIndex
CREATE INDEX "inventory_movements_shopId_idx" ON "inventory_movements"("shopId");

-- CreateIndex
CREATE INDEX "inventory_movements_inventoryItemId_idx" ON "inventory_movements"("inventoryItemId");

-- CreateIndex
CREATE INDEX "inventory_movements_productId_idx" ON "inventory_movements"("productId");

-- CreateIndex
CREATE INDEX "inventory_movements_movementType_idx" ON "inventory_movements"("movementType");

-- CreateIndex
CREATE INDEX "inventory_movements_referenceType_idx" ON "inventory_movements"("referenceType");

-- CreateIndex
CREATE INDEX "inventory_adjustments_tenantId_idx" ON "inventory_adjustments"("tenantId");

-- CreateIndex
CREATE INDEX "inventory_adjustments_shopId_idx" ON "inventory_adjustments"("shopId");

-- CreateIndex
CREATE INDEX "inventory_adjustments_inventoryItemId_idx" ON "inventory_adjustments"("inventoryItemId");

-- CreateIndex
CREATE INDEX "inventory_adjustments_adjustmentType_idx" ON "inventory_adjustments"("adjustmentType");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_idx" ON "audit_logs"("tenantId");

-- CreateIndex
CREATE INDEX "audit_logs_shopId_idx" ON "audit_logs"("shopId");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- CreateIndex
CREATE INDEX "rental_agreements_tenantId_idx" ON "rental_agreements"("tenantId");

-- CreateIndex
CREATE INDEX "rental_agreements_shopId_idx" ON "rental_agreements"("shopId");

-- CreateIndex
CREATE INDEX "rental_agreements_agreementType_idx" ON "rental_agreements"("agreementType");

-- CreateIndex
CREATE INDEX "rental_agreements_status_idx" ON "rental_agreements"("status");

-- CreateIndex
CREATE INDEX "rental_agreements_contactId_idx" ON "rental_agreements"("contactId");

-- AddForeignKey
ALTER TABLE "shop_product_balances" ADD CONSTRAINT "shop_product_balances_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_items" ADD CONSTRAINT "inventory_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_upgrades" ADD CONSTRAINT "inventory_upgrades_inventoryItemId_fkey" FOREIGN KEY ("inventoryItemId") REFERENCES "inventory_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_prices" ADD CONSTRAINT "product_prices_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
