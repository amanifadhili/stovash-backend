
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PurchaseScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  purchaseNumber: 'purchaseNumber',
  supplierId: 'supplierId',
  supplierName: 'supplierName',
  supplierContact: 'supplierContact',
  supplierAddress: 'supplierAddress',
  supplierTaxId: 'supplierTaxId',
  purchaseDate: 'purchaseDate',
  supplierInvoiceNo: 'supplierInvoiceNo',
  currency: 'currency',
  exchangeRate: 'exchangeRate',
  commercialStatus: 'commercialStatus',
  receivingStatus: 'receivingStatus',
  paymentStatus: 'paymentStatus',
  accountingStatus: 'accountingStatus',
  subtotal: 'subtotal',
  discountTotal: 'discountTotal',
  taxTotal: 'taxTotal',
  otherCostTotal: 'otherCostTotal',
  grandTotal: 'grandTotal',
  amountPaid: 'amountPaid',
  amountOutstanding: 'amountOutstanding',
  notes: 'notes',
  approvedById: 'approvedById',
  approvedAt: 'approvedAt',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PurchaseItemScalarFieldEnum = {
  id: 'id',
  purchaseId: 'purchaseId',
  productId: 'productId',
  productName: 'productName',
  productSku: 'productSku',
  productTracking: 'productTracking',
  orderedQty: 'orderedQty',
  receivedQty: 'receivedQty',
  acceptedQty: 'acceptedQty',
  rejectedQty: 'rejectedQty',
  returnedQty: 'returnedQty',
  unitPrice: 'unitPrice',
  discountAmount: 'discountAmount',
  discountType: 'discountType',
  taxRate: 'taxRate',
  taxAmount: 'taxAmount',
  otherCosts: 'otherCosts',
  lineTotal: 'lineTotal',
  acquisitionCost: 'acquisitionCost',
  purchaseSpecs: 'purchaseSpecs',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PurchaseReceivedItemScalarFieldEnum = {
  id: 'id',
  purchaseId: 'purchaseId',
  purchaseItemId: 'purchaseItemId',
  receivingId: 'receivingId',
  serialNumber: 'serialNumber',
  imei1: 'imei1',
  imei2: 'imei2',
  condition: 'condition',
  actualSpecs: 'actualSpecs',
  unitAcquisitionCost: 'unitAcquisitionCost',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.PurchaseReceivingScalarFieldEnum = {
  id: 'id',
  purchaseId: 'purchaseId',
  receivingNumber: 'receivingNumber',
  receivedById: 'receivedById',
  receivedAt: 'receivedAt',
  receivedAtShop: 'receivedAtShop',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PurchasePaymentScalarFieldEnum = {
  id: 'id',
  purchaseId: 'purchaseId',
  paymentNumber: 'paymentNumber',
  amount: 'amount',
  currency: 'currency',
  exchangeRate: 'exchangeRate',
  paymentMethod: 'paymentMethod',
  accountId: 'accountId',
  accountName: 'accountName',
  reference: 'reference',
  paidById: 'paidById',
  paidAt: 'paidAt',
  notes: 'notes',
  accountingRef: 'accountingRef',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PurchaseReturnScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  purchaseId: 'purchaseId',
  supplierId: 'supplierId',
  returnNumber: 'returnNumber',
  totalAmount: 'totalAmount',
  refundAmount: 'refundAmount',
  reason: 'reason',
  status: 'status',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PurchaseReturnItemScalarFieldEnum = {
  id: 'id',
  purchaseReturnId: 'purchaseReturnId',
  purchaseItemId: 'purchaseItemId',
  productId: 'productId',
  productName: 'productName',
  productSku: 'productSku',
  receivedItemId: 'receivedItemId',
  serialNumber: 'serialNumber',
  imei1: 'imei1',
  imei2: 'imei2',
  quantity: 'quantity',
  refundAmount: 'refundAmount',
  condition: 'condition',
  reason: 'reason',
  createdAt: 'createdAt'
};

exports.Prisma.PurchaseDocumentScalarFieldEnum = {
  id: 'id',
  purchaseId: 'purchaseId',
  documentType: 'documentType',
  fileName: 'fileName',
  fileUrl: 'fileUrl',
  fileSize: 'fileSize',
  mimeType: 'mimeType',
  uploadedById: 'uploadedById',
  uploadedAt: 'uploadedAt',
  notes: 'notes'
};

exports.Prisma.PurchaseHistoryScalarFieldEnum = {
  id: 'id',
  purchaseId: 'purchaseId',
  eventType: 'eventType',
  eventData: 'eventData',
  userId: 'userId',
  userName: 'userName',
  traceId: 'traceId',
  createdAt: 'createdAt'
};

exports.Prisma.SupplierOrderScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  supplierId: 'supplierId',
  orderNumber: 'orderNumber',
  totalAmount: 'totalAmount',
  status: 'status',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SupplierOrderItemScalarFieldEnum = {
  id: 'id',
  supplierOrderId: 'supplierOrderId',
  productId: 'productId',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  total: 'total',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  userId: 'userId',
  action: 'action',
  resource: 'resource',
  resourceId: 'resourceId',
  traceId: 'traceId',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PurchaseCommercialStatus = exports.$Enums.PurchaseCommercialStatus = {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

exports.PurchaseReceivingStatus = exports.$Enums.PurchaseReceivingStatus = {
  NOT_RECEIVED: 'NOT_RECEIVED',
  PARTIALLY_RECEIVED: 'PARTIALLY_RECEIVED',
  FULLY_RECEIVED: 'FULLY_RECEIVED'
};

exports.PurchasePaymentStatus = exports.$Enums.PurchasePaymentStatus = {
  UNPAID: 'UNPAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID'
};

exports.PurchaseAccountingStatus = exports.$Enums.PurchaseAccountingStatus = {
  UNPOSTED: 'UNPOSTED',
  POSTED: 'POSTED',
  REVERSED: 'REVERSED'
};

exports.ReceivingItemCondition = exports.$Enums.ReceivingItemCondition = {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  DAMAGED: 'DAMAGED',
  WRONG_ITEM: 'WRONG_ITEM'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  MOBILE_MONEY: 'MOBILE_MONEY',
  CHECK: 'CHECK',
  CREDIT: 'CREDIT',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  Purchase: 'Purchase',
  PurchaseItem: 'PurchaseItem',
  PurchaseReceivedItem: 'PurchaseReceivedItem',
  PurchaseReceiving: 'PurchaseReceiving',
  PurchasePayment: 'PurchasePayment',
  PurchaseReturn: 'PurchaseReturn',
  PurchaseReturnItem: 'PurchaseReturnItem',
  PurchaseDocument: 'PurchaseDocument',
  PurchaseHistory: 'PurchaseHistory',
  SupplierOrder: 'SupplierOrder',
  SupplierOrderItem: 'SupplierOrderItem',
  AuditLog: 'AuditLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
