-- CreateEnum
CREATE TYPE "SaleCommercialStatus" AS ENUM ('DRAFT', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "SaleFulfillmentStatus" AS ENUM ('NOT_FULFILLED', 'PARTIALLY_FULFILLED', 'FULFILLED');

-- CreateEnum
CREATE TYPE "SalePaymentStatus" AS ENUM ('UNPAID', 'PARTIALLY_PAID', 'PAID');

-- CreateEnum
CREATE TYPE "SaleAccountingStatus" AS ENUM ('UNPOSTED', 'POSTED', 'REVERSED');

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "workPeriodId" TEXT,
    "orderNumber" TEXT NOT NULL,
    "customerId" TEXT,
    "customerName" TEXT,
    "sellerId" TEXT,
    "sellerName" TEXT,
    "saleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "status" TEXT NOT NULL DEFAULT 'COMPLETED',
    "commercialStatus" "SaleCommercialStatus" NOT NULL DEFAULT 'DRAFT',
    "fulfillmentStatus" "SaleFulfillmentStatus" NOT NULL DEFAULT 'NOT_FULFILLED',
    "paymentStatus" "SalePaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "accountingStatus" "SaleAccountingStatus" NOT NULL DEFAULT 'UNPOSTED',
    "subtotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discountTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "taxTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "otherChargesTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "additionalCostTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "grandTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amountPaid" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amountDue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "profit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "paymentMethod" TEXT NOT NULL DEFAULT 'CASH',
    "notes" TEXT,
    "confirmedById" TEXT,
    "confirmedAt" TIMESTAMP(3),
    "fulfilledById" TEXT,
    "fulfilledAt" TIMESTAMP(3),
    "cancelledById" TEXT,
    "cancelledAt" TIMESTAMP(3),
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_items" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT,
    "productSku" TEXT,
    "inventoryItemId" TEXT,
    "serialNumber" TEXT NOT NULL DEFAULT '',
    "imei1" TEXT,
    "imei2" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "unitCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "discountType" TEXT,
    "discountAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "taxRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "taxAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "otherCharges" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "additionalCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "additionalCostPaymentMethod" TEXT,
    "netTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lineTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sale_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_payments" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "paymentNumber" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "method" TEXT NOT NULL,
    "reference" TEXT,
    "accountId" TEXT,
    "accountName" TEXT,
    "paidById" TEXT,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "accountingRef" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sale_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_history" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "eventData" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "traceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sale_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_documents" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileSize" INTEGER,
    "mimeType" TEXT,
    "uploadedById" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "sale_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_warranties" (
    "id" TEXT NOT NULL,
    "saleId" TEXT NOT NULL,
    "saleItemId" TEXT,
    "inventoryItemId" TEXT,
    "warrantyType" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "terms" TEXT,
    "notes" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sale_warranties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_receivables" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "saleId" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "debit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "credit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reference" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_receivables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "quoteNumber" TEXT NOT NULL,
    "customerId" TEXT,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotation_items" (
    "id" TEXT NOT NULL,
    "quotationId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quotation_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_returns" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "workPeriodId" TEXT,
    "returnNumber" TEXT NOT NULL,
    "saleId" TEXT,
    "customerId" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "originalAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "approvedRefund" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "refundedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "retainedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "refundAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "refundMethod" TEXT,
    "reason" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sale_returns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_return_items" (
    "id" TEXT NOT NULL,
    "saleReturnId" TEXT NOT NULL,
    "saleItemId" TEXT,
    "inventoryItemId" TEXT,
    "productId" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unitCost" DOUBLE PRECISION NOT NULL,
    "originalAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "approvedRefund" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "refundedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "retainedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "conditionState" TEXT,
    "refundAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sale_return_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bonuses" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "customerId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bonuses_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "sales_orderNumber_key" ON "sales"("orderNumber");

-- CreateIndex
CREATE INDEX "sales_tenantId_idx" ON "sales"("tenantId");

-- CreateIndex
CREATE INDEX "sales_shopId_idx" ON "sales"("shopId");

-- CreateIndex
CREATE INDEX "sales_workPeriodId_idx" ON "sales"("workPeriodId");

-- CreateIndex
CREATE INDEX "sales_customerId_idx" ON "sales"("customerId");

-- CreateIndex
CREATE INDEX "sales_sellerId_idx" ON "sales"("sellerId");

-- CreateIndex
CREATE INDEX "sales_commercialStatus_idx" ON "sales"("commercialStatus");

-- CreateIndex
CREATE INDEX "sales_fulfillmentStatus_idx" ON "sales"("fulfillmentStatus");

-- CreateIndex
CREATE INDEX "sales_paymentStatus_idx" ON "sales"("paymentStatus");

-- CreateIndex
CREATE INDEX "sales_accountingStatus_idx" ON "sales"("accountingStatus");

-- CreateIndex
CREATE INDEX "sales_saleDate_idx" ON "sales"("saleDate");

-- CreateIndex
CREATE INDEX "sale_items_saleId_idx" ON "sale_items"("saleId");

-- CreateIndex
CREATE INDEX "sale_items_productId_idx" ON "sale_items"("productId");

-- CreateIndex
CREATE INDEX "sale_items_inventoryItemId_idx" ON "sale_items"("inventoryItemId");

-- CreateIndex
CREATE UNIQUE INDEX "sale_payments_paymentNumber_key" ON "sale_payments"("paymentNumber");

-- CreateIndex
CREATE INDEX "sale_payments_saleId_idx" ON "sale_payments"("saleId");

-- CreateIndex
CREATE INDEX "sale_payments_paidById_idx" ON "sale_payments"("paidById");

-- CreateIndex
CREATE INDEX "sale_payments_paidAt_idx" ON "sale_payments"("paidAt");

-- CreateIndex
CREATE INDEX "sale_payments_method_idx" ON "sale_payments"("method");

-- CreateIndex
CREATE INDEX "sale_history_saleId_idx" ON "sale_history"("saleId");

-- CreateIndex
CREATE INDEX "sale_history_eventType_idx" ON "sale_history"("eventType");

-- CreateIndex
CREATE INDEX "sale_history_createdAt_idx" ON "sale_history"("createdAt");

-- CreateIndex
CREATE INDEX "sale_documents_saleId_idx" ON "sale_documents"("saleId");

-- CreateIndex
CREATE INDEX "sale_documents_documentType_idx" ON "sale_documents"("documentType");

-- CreateIndex
CREATE UNIQUE INDEX "sale_warranties_saleItemId_key" ON "sale_warranties"("saleItemId");

-- CreateIndex
CREATE INDEX "sale_warranties_saleId_idx" ON "sale_warranties"("saleId");

-- CreateIndex
CREATE INDEX "sale_warranties_inventoryItemId_idx" ON "sale_warranties"("inventoryItemId");

-- CreateIndex
CREATE INDEX "customer_receivables_tenantId_idx" ON "customer_receivables"("tenantId");

-- CreateIndex
CREATE INDEX "customer_receivables_shopId_idx" ON "customer_receivables"("shopId");

-- CreateIndex
CREATE INDEX "customer_receivables_customerId_idx" ON "customer_receivables"("customerId");

-- CreateIndex
CREATE INDEX "customer_receivables_saleId_idx" ON "customer_receivables"("saleId");

-- CreateIndex
CREATE UNIQUE INDEX "quotations_quoteNumber_key" ON "quotations"("quoteNumber");

-- CreateIndex
CREATE INDEX "quotations_tenantId_idx" ON "quotations"("tenantId");

-- CreateIndex
CREATE INDEX "quotations_shopId_idx" ON "quotations"("shopId");

-- CreateIndex
CREATE INDEX "quotations_customerId_idx" ON "quotations"("customerId");

-- CreateIndex
CREATE INDEX "quotations_status_idx" ON "quotations"("status");

-- CreateIndex
CREATE INDEX "quotation_items_quotationId_idx" ON "quotation_items"("quotationId");

-- CreateIndex
CREATE INDEX "quotation_items_productId_idx" ON "quotation_items"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "sale_returns_returnNumber_key" ON "sale_returns"("returnNumber");

-- CreateIndex
CREATE INDEX "sale_returns_tenantId_idx" ON "sale_returns"("tenantId");

-- CreateIndex
CREATE INDEX "sale_returns_shopId_idx" ON "sale_returns"("shopId");

-- CreateIndex
CREATE INDEX "sale_returns_saleId_idx" ON "sale_returns"("saleId");

-- CreateIndex
CREATE INDEX "sale_returns_customerId_idx" ON "sale_returns"("customerId");

-- CreateIndex
CREATE INDEX "sale_returns_status_idx" ON "sale_returns"("status");

-- CreateIndex
CREATE INDEX "sale_return_items_saleReturnId_idx" ON "sale_return_items"("saleReturnId");

-- CreateIndex
CREATE INDEX "sale_return_items_saleItemId_idx" ON "sale_return_items"("saleItemId");

-- CreateIndex
CREATE INDEX "sale_return_items_productId_idx" ON "sale_return_items"("productId");

-- CreateIndex
CREATE INDEX "bonuses_tenantId_idx" ON "bonuses"("tenantId");

-- CreateIndex
CREATE INDEX "bonuses_shopId_idx" ON "bonuses"("shopId");

-- CreateIndex
CREATE INDEX "bonuses_customerId_idx" ON "bonuses"("customerId");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_idx" ON "audit_logs"("tenantId");

-- CreateIndex
CREATE INDEX "audit_logs_shopId_idx" ON "audit_logs"("shopId");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- AddForeignKey
ALTER TABLE "sale_items" ADD CONSTRAINT "sale_items_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_payments" ADD CONSTRAINT "sale_payments_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_history" ADD CONSTRAINT "sale_history_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_documents" ADD CONSTRAINT "sale_documents_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_warranties" ADD CONSTRAINT "sale_warranties_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_warranties" ADD CONSTRAINT "sale_warranties_saleItemId_fkey" FOREIGN KEY ("saleItemId") REFERENCES "sale_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotation_items" ADD CONSTRAINT "quotation_items_quotationId_fkey" FOREIGN KEY ("quotationId") REFERENCES "quotations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_returns" ADD CONSTRAINT "sale_returns_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_items" ADD CONSTRAINT "sale_return_items_saleReturnId_fkey" FOREIGN KEY ("saleReturnId") REFERENCES "sale_returns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_items" ADD CONSTRAINT "sale_return_items_saleItemId_fkey" FOREIGN KEY ("saleItemId") REFERENCES "sale_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
