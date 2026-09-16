-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT,
    "sharedShopIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_contacts" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supplier_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_balances" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supplier_balances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_payments" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "balanceId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "method" TEXT NOT NULL,
    "reference" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supplier_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_statements" (
    "id" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supplier_statements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "suppliers_tenantId_idx" ON "suppliers"("tenantId");

-- CreateIndex
CREATE INDEX "suppliers_shopId_idx" ON "suppliers"("shopId");

-- CreateIndex
CREATE INDEX "suppliers_status_idx" ON "suppliers"("status");

-- CreateIndex
CREATE INDEX "supplier_contacts_supplierId_idx" ON "supplier_contacts"("supplierId");

-- CreateIndex
CREATE INDEX "supplier_balances_supplierId_idx" ON "supplier_balances"("supplierId");

-- CreateIndex
CREATE INDEX "supplier_balances_tenantId_idx" ON "supplier_balances"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "supplier_balances_supplierId_tenantId_key" ON "supplier_balances"("supplierId", "tenantId");

-- CreateIndex
CREATE INDEX "supplier_payments_supplierId_idx" ON "supplier_payments"("supplierId");

-- CreateIndex
CREATE INDEX "supplier_payments_balanceId_idx" ON "supplier_payments"("balanceId");

-- CreateIndex
CREATE INDEX "supplier_statements_supplierId_idx" ON "supplier_statements"("supplierId");

-- CreateIndex
CREATE INDEX "supplier_statements_period_idx" ON "supplier_statements"("period");

-- CreateIndex
CREATE UNIQUE INDEX "supplier_statements_supplierId_period_key" ON "supplier_statements"("supplierId", "period");

-- AddForeignKey
ALTER TABLE "supplier_contacts" ADD CONSTRAINT "supplier_contacts_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_balances" ADD CONSTRAINT "supplier_balances_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_payments" ADD CONSTRAINT "supplier_payments_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_payments" ADD CONSTRAINT "supplier_payments_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "supplier_balances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_statements" ADD CONSTRAINT "supplier_statements_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
