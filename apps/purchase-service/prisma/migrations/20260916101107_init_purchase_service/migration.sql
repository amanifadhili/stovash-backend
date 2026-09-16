-- CreateEnum
CREATE TYPE "PurchaseCommercialStatus" AS ENUM ('DRAFT', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PurchaseReceivingStatus" AS ENUM ('NOT_RECEIVED', 'PARTIALLY_RECEIVED', 'FULLY_RECEIVED');

-- CreateEnum
CREATE TYPE "PurchasePaymentStatus" AS ENUM ('UNPAID', 'PARTIALLY_PAID', 'PAID');

-- CreateEnum
CREATE TYPE "PurchaseAccountingStatus" AS ENUM ('UNPOSTED', 'POSTED', 'REVERSED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'BANK_TRANSFER', 'MOBILE_MONEY', 'CHECK', 'CREDIT', 'OTHER');

-- CreateEnum
CREATE TYPE "ReceivingItemCondition" AS ENUM ('EXCELLENT', 'GOOD', 'FAIR', 'POOR', 'DAMAGED', 'REJECTED', 'WRONG_ITEM', 'ACCEPTED');

-- CreateTable
CREATE TABLE "purchases" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "purchaseNumber" TEXT NOT NULL,
    "supplierId" TEXT,
    "supplierName" TEXT NOT NULL,
    "supplierContact" TEXT,
    "supplierAddress" TEXT,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "supplierInvoiceNo" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "commercialStatus" "PurchaseCommercialStatus" NOT NULL DEFAULT 'DRAFT',
    "receivingStatus" "PurchaseReceivingStatus" NOT NULL DEFAULT 'NOT_RECEIVED',
    "paymentStatus" "PurchasePaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "accountingStatus" "PurchaseAccountingStatus" NOT NULL DEFAULT 'UNPOSTED',
    "subtotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discountTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "otherCostTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "grandTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amountPaid" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "amountOutstanding" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT,
    "approvedById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_items" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productSku" TEXT NOT NULL,
    "productTracking" TEXT NOT NULL,
    "orderedQty" DOUBLE PRECISION NOT NULL,
    "receivedQty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "acceptedQty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rejectedQty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "returnedQty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "discountAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discountType" TEXT,
    "otherCosts" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lineTotal" DOUBLE PRECISION NOT NULL,
    "acquisitionCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "purchaseSpecs" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_received_items" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "purchaseItemId" TEXT NOT NULL,
    "receivingId" TEXT,
    "serialNumber" TEXT,
    "imei1" TEXT,
    "imei2" TEXT,
    "condition" "ReceivingItemCondition" NOT NULL DEFAULT 'ACCEPTED',
    "actualSpecs" TEXT,
    "unitAcquisitionCost" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "confirmedAt" TIMESTAMP(3),
    "confirmedById" TEXT,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receivedById" TEXT NOT NULL,
    "notes" TEXT,
    "additionalCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "images" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_received_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_received_item_costs" (
    "id" TEXT NOT NULL,
    "receivedItemId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "addedById" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "purchase_received_item_costs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_receivings" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "receivingNumber" TEXT NOT NULL,
    "receivedById" TEXT NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receivedAtShop" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_receivings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_payments" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "paymentNumber" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'RWF',
    "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "accountId" TEXT,
    "accountName" TEXT,
    "reference" TEXT,
    "paidById" TEXT NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "accountingRef" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_returns" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "purchaseId" TEXT,
    "supplierId" TEXT NOT NULL,
    "returnNumber" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "refundAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reason" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_returns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_return_items" (
    "id" TEXT NOT NULL,
    "purchaseReturnId" TEXT NOT NULL,
    "purchaseItemId" TEXT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productSku" TEXT NOT NULL,
    "receivedItemId" TEXT,
    "serialNumber" TEXT,
    "imei1" TEXT,
    "imei2" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL,
    "refundAmount" DOUBLE PRECISION NOT NULL,
    "condition" TEXT,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_return_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_documents" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileSize" INTEGER,
    "mimeType" TEXT,
    "uploadedById" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "purchase_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_history" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "eventData" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "traceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchase_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_orders" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supplier_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_order_items" (
    "id" TEXT NOT NULL,
    "supplierOrderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supplier_order_items_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "purchases_purchaseNumber_key" ON "purchases"("purchaseNumber");

-- CreateIndex
CREATE INDEX "purchases_tenantId_idx" ON "purchases"("tenantId");

-- CreateIndex
CREATE INDEX "purchases_shopId_idx" ON "purchases"("shopId");

-- CreateIndex
CREATE INDEX "purchases_supplierId_idx" ON "purchases"("supplierId");

-- CreateIndex
CREATE INDEX "purchases_commercialStatus_idx" ON "purchases"("commercialStatus");

-- CreateIndex
CREATE INDEX "purchases_receivingStatus_idx" ON "purchases"("receivingStatus");

-- CreateIndex
CREATE INDEX "purchases_paymentStatus_idx" ON "purchases"("paymentStatus");

-- CreateIndex
CREATE INDEX "purchases_accountingStatus_idx" ON "purchases"("accountingStatus");

-- CreateIndex
CREATE INDEX "purchases_purchaseDate_idx" ON "purchases"("purchaseDate");

-- CreateIndex
CREATE INDEX "purchase_items_purchaseId_idx" ON "purchase_items"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_items_productId_idx" ON "purchase_items"("productId");

-- CreateIndex
CREATE INDEX "purchase_received_items_purchaseId_idx" ON "purchase_received_items"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_received_items_purchaseItemId_idx" ON "purchase_received_items"("purchaseItemId");

-- CreateIndex
CREATE INDEX "purchase_received_items_receivingId_idx" ON "purchase_received_items"("receivingId");

-- CreateIndex
CREATE INDEX "purchase_received_items_serialNumber_idx" ON "purchase_received_items"("serialNumber");

-- CreateIndex
CREATE INDEX "purchase_received_items_imei1_idx" ON "purchase_received_items"("imei1");

-- CreateIndex
CREATE INDEX "purchase_received_items_imei2_idx" ON "purchase_received_items"("imei2");

-- CreateIndex
CREATE INDEX "purchase_received_items_status_idx" ON "purchase_received_items"("status");

-- CreateIndex
CREATE INDEX "purchase_received_item_costs_receivedItemId_idx" ON "purchase_received_item_costs"("receivedItemId");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_receivings_receivingNumber_key" ON "purchase_receivings"("receivingNumber");

-- CreateIndex
CREATE INDEX "purchase_receivings_purchaseId_idx" ON "purchase_receivings"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_receivings_receivedById_idx" ON "purchase_receivings"("receivedById");

-- CreateIndex
CREATE INDEX "purchase_receivings_receivedAt_idx" ON "purchase_receivings"("receivedAt");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_payments_paymentNumber_key" ON "purchase_payments"("paymentNumber");

-- CreateIndex
CREATE INDEX "purchase_payments_purchaseId_idx" ON "purchase_payments"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_payments_paidById_idx" ON "purchase_payments"("paidById");

-- CreateIndex
CREATE INDEX "purchase_payments_paidAt_idx" ON "purchase_payments"("paidAt");

-- CreateIndex
CREATE INDEX "purchase_payments_paymentMethod_idx" ON "purchase_payments"("paymentMethod");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_returns_returnNumber_key" ON "purchase_returns"("returnNumber");

-- CreateIndex
CREATE INDEX "purchase_returns_tenantId_idx" ON "purchase_returns"("tenantId");

-- CreateIndex
CREATE INDEX "purchase_returns_shopId_idx" ON "purchase_returns"("shopId");

-- CreateIndex
CREATE INDEX "purchase_returns_purchaseId_idx" ON "purchase_returns"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_returns_supplierId_idx" ON "purchase_returns"("supplierId");

-- CreateIndex
CREATE INDEX "purchase_returns_status_idx" ON "purchase_returns"("status");

-- CreateIndex
CREATE INDEX "purchase_return_items_purchaseReturnId_idx" ON "purchase_return_items"("purchaseReturnId");

-- CreateIndex
CREATE INDEX "purchase_return_items_purchaseItemId_idx" ON "purchase_return_items"("purchaseItemId");

-- CreateIndex
CREATE INDEX "purchase_return_items_receivedItemId_idx" ON "purchase_return_items"("receivedItemId");

-- CreateIndex
CREATE INDEX "purchase_return_items_serialNumber_idx" ON "purchase_return_items"("serialNumber");

-- CreateIndex
CREATE INDEX "purchase_documents_purchaseId_idx" ON "purchase_documents"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_documents_documentType_idx" ON "purchase_documents"("documentType");

-- CreateIndex
CREATE INDEX "purchase_history_purchaseId_idx" ON "purchase_history"("purchaseId");

-- CreateIndex
CREATE INDEX "purchase_history_eventType_idx" ON "purchase_history"("eventType");

-- CreateIndex
CREATE INDEX "purchase_history_createdAt_idx" ON "purchase_history"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "supplier_orders_orderNumber_key" ON "supplier_orders"("orderNumber");

-- CreateIndex
CREATE INDEX "supplier_orders_tenantId_idx" ON "supplier_orders"("tenantId");

-- CreateIndex
CREATE INDEX "supplier_orders_shopId_idx" ON "supplier_orders"("shopId");

-- CreateIndex
CREATE INDEX "supplier_orders_supplierId_idx" ON "supplier_orders"("supplierId");

-- CreateIndex
CREATE INDEX "supplier_orders_status_idx" ON "supplier_orders"("status");

-- CreateIndex
CREATE INDEX "supplier_order_items_supplierOrderId_idx" ON "supplier_order_items"("supplierOrderId");

-- CreateIndex
CREATE INDEX "supplier_order_items_productId_idx" ON "supplier_order_items"("productId");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_idx" ON "audit_logs"("tenantId");

-- CreateIndex
CREATE INDEX "audit_logs_shopId_idx" ON "audit_logs"("shopId");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- AddForeignKey
ALTER TABLE "purchase_items" ADD CONSTRAINT "purchase_items_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_received_items" ADD CONSTRAINT "purchase_received_items_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_received_items" ADD CONSTRAINT "purchase_received_items_purchaseItemId_fkey" FOREIGN KEY ("purchaseItemId") REFERENCES "purchase_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_received_items" ADD CONSTRAINT "purchase_received_items_receivingId_fkey" FOREIGN KEY ("receivingId") REFERENCES "purchase_receivings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_received_item_costs" ADD CONSTRAINT "purchase_received_item_costs_receivedItemId_fkey" FOREIGN KEY ("receivedItemId") REFERENCES "purchase_received_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_receivings" ADD CONSTRAINT "purchase_receivings_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_payments" ADD CONSTRAINT "purchase_payments_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_returns" ADD CONSTRAINT "purchase_returns_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_return_items" ADD CONSTRAINT "purchase_return_items_purchaseReturnId_fkey" FOREIGN KEY ("purchaseReturnId") REFERENCES "purchase_returns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_return_items" ADD CONSTRAINT "purchase_return_items_purchaseItemId_fkey" FOREIGN KEY ("purchaseItemId") REFERENCES "purchase_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_documents" ADD CONSTRAINT "purchase_documents_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_history" ADD CONSTRAINT "purchase_history_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_order_items" ADD CONSTRAINT "supplier_order_items_supplierOrderId_fkey" FOREIGN KEY ("supplierOrderId") REFERENCES "supplier_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
