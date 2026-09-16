-- CreateTable
CREATE TABLE "ledger_accounts" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ledger_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_entries" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "workPeriodId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "postedBy" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "batchId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "journal_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posting_batches" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "workPeriodId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "postedBy" TEXT,
    "postedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "posting_batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ledger_entries" (
    "id" TEXT NOT NULL,
    "journalEntryId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ledger_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_periods" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT,
    "shopId" TEXT NOT NULL,
    "openedBy" TEXT NOT NULL,
    "closedBy" TEXT,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "totalRevenue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalExpense" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "grossProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "work_periods_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "financial_transactions" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "occurredOn" DATE NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actorUserId" TEXT,
    "sourceDomain" TEXT NOT NULL,
    "sourceCommand" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "amountMinor" BIGINT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "description" TEXT,
    "reason" TEXT,
    "originalTransactionId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'POSTED',
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "financial_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chart_accounts" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fundCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chart_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posted_journals" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "financialTransactionId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'POSTED',
    "postedBy" TEXT NOT NULL,
    "occurredOn" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posted_journals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posted_journal_lines" (
    "id" TEXT NOT NULL,
    "journalId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "amountMinor" BIGINT NOT NULL,

    CONSTRAINT "posted_journal_lines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obligations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "partyName" TEXT NOT NULL,
    "outstandingMinor" BIGINT NOT NULL,
    "financialTransactionId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "obligations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profit_allocations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "earnedMinor" BIGINT NOT NULL DEFAULT 0,
    "transferredMinor" BIGINT NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profit_allocations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ledger_accounts_tenantId_idx" ON "ledger_accounts"("tenantId");

-- CreateIndex
CREATE INDEX "ledger_accounts_shopId_idx" ON "ledger_accounts"("shopId");

-- CreateIndex
CREATE INDEX "ledger_accounts_parentId_idx" ON "ledger_accounts"("parentId");

-- CreateIndex
CREATE INDEX "ledger_accounts_code_idx" ON "ledger_accounts"("code");

-- CreateIndex
CREATE INDEX "ledger_accounts_type_idx" ON "ledger_accounts"("type");

-- CreateIndex
CREATE INDEX "journal_entries_tenantId_idx" ON "journal_entries"("tenantId");

-- CreateIndex
CREATE INDEX "journal_entries_shopId_idx" ON "journal_entries"("shopId");

-- CreateIndex
CREATE INDEX "journal_entries_workPeriodId_idx" ON "journal_entries"("workPeriodId");

-- CreateIndex
CREATE INDEX "journal_entries_status_idx" ON "journal_entries"("status");

-- CreateIndex
CREATE INDEX "journal_entries_batchId_idx" ON "journal_entries"("batchId");

-- CreateIndex
CREATE INDEX "posting_batches_tenantId_idx" ON "posting_batches"("tenantId");

-- CreateIndex
CREATE INDEX "posting_batches_shopId_idx" ON "posting_batches"("shopId");

-- CreateIndex
CREATE INDEX "posting_batches_workPeriodId_idx" ON "posting_batches"("workPeriodId");

-- CreateIndex
CREATE INDEX "posting_batches_status_idx" ON "posting_batches"("status");

-- CreateIndex
CREATE INDEX "ledger_entries_journalEntryId_idx" ON "ledger_entries"("journalEntryId");

-- CreateIndex
CREATE INDEX "ledger_entries_accountId_idx" ON "ledger_entries"("accountId");

-- CreateIndex
CREATE INDEX "ledger_entries_type_idx" ON "ledger_entries"("type");

-- CreateIndex
CREATE INDEX "work_periods_tenantId_idx" ON "work_periods"("tenantId");

-- CreateIndex
CREATE INDEX "work_periods_shopId_idx" ON "work_periods"("shopId");

-- CreateIndex
CREATE INDEX "work_periods_status_idx" ON "work_periods"("status");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_idx" ON "audit_logs"("tenantId");

-- CreateIndex
CREATE INDEX "audit_logs_shopId_idx" ON "audit_logs"("shopId");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- CreateIndex
CREATE INDEX "financial_transactions_tenantId_shopId_occurredOn_idx" ON "financial_transactions"("tenantId", "shopId", "occurredOn");

-- CreateIndex
CREATE INDEX "financial_transactions_tenantId_sourceId_idx" ON "financial_transactions"("tenantId", "sourceId");

-- CreateIndex
CREATE INDEX "financial_transactions_originalTransactionId_idx" ON "financial_transactions"("originalTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "financial_transactions_tenantId_idempotencyKey_key" ON "financial_transactions"("tenantId", "idempotencyKey");

-- CreateIndex
CREATE INDEX "chart_accounts_tenantId_shopId_type_idx" ON "chart_accounts"("tenantId", "shopId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "chart_accounts_tenantId_shopId_code_key" ON "chart_accounts"("tenantId", "shopId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "posted_journals_financialTransactionId_key" ON "posted_journals"("financialTransactionId");

-- CreateIndex
CREATE INDEX "posted_journals_tenantId_shopId_occurredOn_idx" ON "posted_journals"("tenantId", "shopId", "occurredOn");

-- CreateIndex
CREATE INDEX "posted_journal_lines_journalId_idx" ON "posted_journal_lines"("journalId");

-- CreateIndex
CREATE INDEX "posted_journal_lines_accountId_idx" ON "posted_journal_lines"("accountId");

-- CreateIndex
CREATE INDEX "obligations_tenantId_shopId_kind_idx" ON "obligations"("tenantId", "shopId", "kind");

-- CreateIndex
CREATE INDEX "obligations_financialTransactionId_idx" ON "obligations"("financialTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "profit_allocations_tenantId_shopId_key" ON "profit_allocations"("tenantId", "shopId");

-- AddForeignKey
ALTER TABLE "ledger_accounts" ADD CONSTRAINT "ledger_accounts_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ledger_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "posting_batches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger_entries" ADD CONSTRAINT "ledger_entries_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "ledger_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger_entries" ADD CONSTRAINT "ledger_entries_journalEntryId_fkey" FOREIGN KEY ("journalEntryId") REFERENCES "journal_entries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posted_journal_lines" ADD CONSTRAINT "posted_journal_lines_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "posted_journals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posted_journal_lines" ADD CONSTRAINT "posted_journal_lines_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "chart_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
