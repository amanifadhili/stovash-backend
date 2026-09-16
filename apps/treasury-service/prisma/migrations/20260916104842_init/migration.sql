-- CreateTable
CREATE TABLE "payment_methods" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "accountNumber" TEXT,
    "bankName" TEXT,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transfers" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "fromMethodId" TEXT NOT NULL,
    "toMethodId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "reference" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "approvedBy" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transfers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physical_confirmations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "methodId" TEXT NOT NULL,
    "confirmedBy" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "confirmedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "physical_confirmations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operational_deposits" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "methodId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "depositedBy" TEXT NOT NULL,
    "notes" TEXT,
    "depositedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "operational_deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reconciliations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "methodId" TEXT NOT NULL,
    "systemBalance" DOUBLE PRECISION NOT NULL,
    "physicalBalance" DOUBLE PRECISION NOT NULL,
    "difference" DOUBLE PRECISION NOT NULL,
    "reconciledBy" TEXT NOT NULL,
    "reconciledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "reconciliations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treasury_loans" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "counterparty" TEXT NOT NULL,
    "principal" DOUBLE PRECISION NOT NULL,
    "outstanding" DOUBLE PRECISION NOT NULL,
    "methodId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "notes" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "treasury_loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treasury_loan_repayments" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "loanId" TEXT NOT NULL,
    "methodId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "treasury_loan_repayments_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "logical_funds" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logical_funds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physical_accounts" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "fundId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "physical_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treasury_movements" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "movementType" TEXT NOT NULL,
    "fromPhysicalId" TEXT,
    "toPhysicalId" TEXT,
    "amountMinor" BIGINT NOT NULL,
    "financialTransactionId" TEXT NOT NULL,
    "journalId" TEXT,
    "occurredOn" DATE NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "reason" TEXT,
    "notes" TEXT,
    "originalMovementId" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "treasury_movements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financial_periods" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "financial_periods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "period_snapshots" (
    "id" TEXT NOT NULL,
    "periodId" TEXT NOT NULL,
    "scopeType" TEXT NOT NULL,
    "scopeKey" TEXT NOT NULL,
    "openingMinor" BIGINT NOT NULL,
    "inflowsMinor" BIGINT NOT NULL,
    "outflowsMinor" BIGINT NOT NULL,
    "adjustmentsMinor" BIGINT NOT NULL,
    "closingMinor" BIGINT NOT NULL,

    CONSTRAINT "period_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treasury_obligations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "lenderFundCode" TEXT,
    "borrowerFundCode" TEXT,
    "partyName" TEXT NOT NULL,
    "outstandingMinor" BIGINT NOT NULL,
    "financialTransactionId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "treasury_obligations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reconciliation_counts" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "physicalAccountId" TEXT NOT NULL,
    "expectedMinor" BIGINT NOT NULL,
    "countedMinor" BIGINT NOT NULL,
    "differenceMinor" BIGINT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'COUNTED',
    "countedBy" TEXT NOT NULL,
    "notes" TEXT,
    "reason" TEXT,
    "approvedBy" TEXT,
    "approvedAt" TIMESTAMP(3),
    "adjustmentMovementId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reconciliation_counts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "payment_methods_tenantId_idx" ON "payment_methods"("tenantId");

-- CreateIndex
CREATE INDEX "payment_methods_shopId_idx" ON "payment_methods"("shopId");

-- CreateIndex
CREATE INDEX "payment_methods_type_idx" ON "payment_methods"("type");

-- CreateIndex
CREATE INDEX "transfers_tenantId_idx" ON "transfers"("tenantId");

-- CreateIndex
CREATE INDEX "transfers_shopId_idx" ON "transfers"("shopId");

-- CreateIndex
CREATE INDEX "transfers_fromMethodId_idx" ON "transfers"("fromMethodId");

-- CreateIndex
CREATE INDEX "transfers_toMethodId_idx" ON "transfers"("toMethodId");

-- CreateIndex
CREATE INDEX "transfers_status_idx" ON "transfers"("status");

-- CreateIndex
CREATE INDEX "physical_confirmations_tenantId_idx" ON "physical_confirmations"("tenantId");

-- CreateIndex
CREATE INDEX "physical_confirmations_shopId_idx" ON "physical_confirmations"("shopId");

-- CreateIndex
CREATE INDEX "physical_confirmations_methodId_idx" ON "physical_confirmations"("methodId");

-- CreateIndex
CREATE INDEX "physical_confirmations_confirmedAt_idx" ON "physical_confirmations"("confirmedAt");

-- CreateIndex
CREATE INDEX "operational_deposits_tenantId_idx" ON "operational_deposits"("tenantId");

-- CreateIndex
CREATE INDEX "operational_deposits_shopId_idx" ON "operational_deposits"("shopId");

-- CreateIndex
CREATE INDEX "operational_deposits_methodId_idx" ON "operational_deposits"("methodId");

-- CreateIndex
CREATE INDEX "operational_deposits_depositedAt_idx" ON "operational_deposits"("depositedAt");

-- CreateIndex
CREATE INDEX "reconciliations_tenantId_idx" ON "reconciliations"("tenantId");

-- CreateIndex
CREATE INDEX "reconciliations_shopId_idx" ON "reconciliations"("shopId");

-- CreateIndex
CREATE INDEX "reconciliations_methodId_idx" ON "reconciliations"("methodId");

-- CreateIndex
CREATE INDEX "reconciliations_reconciledAt_idx" ON "reconciliations"("reconciledAt");

-- CreateIndex
CREATE INDEX "treasury_loans_tenantId_idx" ON "treasury_loans"("tenantId");

-- CreateIndex
CREATE INDEX "treasury_loans_shopId_idx" ON "treasury_loans"("shopId");

-- CreateIndex
CREATE INDEX "treasury_loans_direction_idx" ON "treasury_loans"("direction");

-- CreateIndex
CREATE INDEX "treasury_loans_status_idx" ON "treasury_loans"("status");

-- CreateIndex
CREATE INDEX "treasury_loan_repayments_tenantId_idx" ON "treasury_loan_repayments"("tenantId");

-- CreateIndex
CREATE INDEX "treasury_loan_repayments_shopId_idx" ON "treasury_loan_repayments"("shopId");

-- CreateIndex
CREATE INDEX "treasury_loan_repayments_loanId_idx" ON "treasury_loan_repayments"("loanId");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_idx" ON "audit_logs"("tenantId");

-- CreateIndex
CREATE INDEX "audit_logs_shopId_idx" ON "audit_logs"("shopId");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- CreateIndex
CREATE INDEX "logical_funds_tenantId_shopId_idx" ON "logical_funds"("tenantId", "shopId");

-- CreateIndex
CREATE UNIQUE INDEX "logical_funds_tenantId_shopId_code_key" ON "logical_funds"("tenantId", "shopId", "code");

-- CreateIndex
CREATE INDEX "physical_accounts_tenantId_shopId_idx" ON "physical_accounts"("tenantId", "shopId");

-- CreateIndex
CREATE INDEX "physical_accounts_fundId_idx" ON "physical_accounts"("fundId");

-- CreateIndex
CREATE INDEX "physical_accounts_kind_idx" ON "physical_accounts"("kind");

-- CreateIndex
CREATE UNIQUE INDEX "physical_accounts_tenantId_shopId_code_key" ON "physical_accounts"("tenantId", "shopId", "code");

-- CreateIndex
CREATE INDEX "treasury_movements_tenantId_shopId_occurredOn_idx" ON "treasury_movements"("tenantId", "shopId", "occurredOn");

-- CreateIndex
CREATE INDEX "treasury_movements_tenantId_shopId_fromPhysicalId_idx" ON "treasury_movements"("tenantId", "shopId", "fromPhysicalId");

-- CreateIndex
CREATE INDEX "treasury_movements_tenantId_shopId_toPhysicalId_idx" ON "treasury_movements"("tenantId", "shopId", "toPhysicalId");

-- CreateIndex
CREATE INDEX "treasury_movements_financialTransactionId_idx" ON "treasury_movements"("financialTransactionId");

-- CreateIndex
CREATE INDEX "treasury_movements_originalMovementId_idx" ON "treasury_movements"("originalMovementId");

-- CreateIndex
CREATE UNIQUE INDEX "treasury_movements_tenantId_idempotencyKey_key" ON "treasury_movements"("tenantId", "idempotencyKey");

-- CreateIndex
CREATE UNIQUE INDEX "financial_periods_tenantId_shopId_date_key" ON "financial_periods"("tenantId", "shopId", "date");

-- CreateIndex
CREATE INDEX "period_snapshots_periodId_idx" ON "period_snapshots"("periodId");

-- CreateIndex
CREATE UNIQUE INDEX "period_snapshots_periodId_scopeType_scopeKey_key" ON "period_snapshots"("periodId", "scopeType", "scopeKey");

-- CreateIndex
CREATE INDEX "treasury_obligations_tenantId_shopId_kind_idx" ON "treasury_obligations"("tenantId", "shopId", "kind");

-- CreateIndex
CREATE INDEX "treasury_obligations_financialTransactionId_idx" ON "treasury_obligations"("financialTransactionId");

-- CreateIndex
CREATE INDEX "reconciliation_counts_tenantId_shopId_status_idx" ON "reconciliation_counts"("tenantId", "shopId", "status");

-- CreateIndex
CREATE INDEX "reconciliation_counts_physicalAccountId_idx" ON "reconciliation_counts"("physicalAccountId");

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_fromMethodId_fkey" FOREIGN KEY ("fromMethodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_toMethodId_fkey" FOREIGN KEY ("toMethodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_confirmations" ADD CONSTRAINT "physical_confirmations_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operational_deposits" ADD CONSTRAINT "operational_deposits_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliations" ADD CONSTRAINT "reconciliations_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treasury_loans" ADD CONSTRAINT "treasury_loans_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treasury_loan_repayments" ADD CONSTRAINT "treasury_loan_repayments_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "treasury_loans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treasury_loan_repayments" ADD CONSTRAINT "treasury_loan_repayments_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_accounts" ADD CONSTRAINT "physical_accounts_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "logical_funds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treasury_movements" ADD CONSTRAINT "treasury_movements_fromPhysicalId_fkey" FOREIGN KEY ("fromPhysicalId") REFERENCES "physical_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treasury_movements" ADD CONSTRAINT "treasury_movements_toPhysicalId_fkey" FOREIGN KEY ("toPhysicalId") REFERENCES "physical_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "period_snapshots" ADD CONSTRAINT "period_snapshots_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "financial_periods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliation_counts" ADD CONSTRAINT "reconciliation_counts_physicalAccountId_fkey" FOREIGN KEY ("physicalAccountId") REFERENCES "physical_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
