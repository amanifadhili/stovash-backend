
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

exports.Prisma.SaleScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  workPeriodId: 'workPeriodId',
  orderNumber: 'orderNumber',
  customerId: 'customerId',
  customerName: 'customerName',
  sellerId: 'sellerId',
  sellerName: 'sellerName',
  saleDate: 'saleDate',
  currency: 'currency',
  exchangeRate: 'exchangeRate',
  status: 'status',
  commercialStatus: 'commercialStatus',
  fulfillmentStatus: 'fulfillmentStatus',
  paymentStatus: 'paymentStatus',
  accountingStatus: 'accountingStatus',
  subtotal: 'subtotal',
  discountTotal: 'discountTotal',
  taxTotal: 'taxTotal',
  otherChargesTotal: 'otherChargesTotal',
  grandTotal: 'grandTotal',
  amountPaid: 'amountPaid',
  amountDue: 'amountDue',
  totalAmount: 'totalAmount',
  totalCost: 'totalCost',
  profit: 'profit',
  paymentMethod: 'paymentMethod',
  notes: 'notes',
  confirmedById: 'confirmedById',
  confirmedAt: 'confirmedAt',
  fulfilledById: 'fulfilledById',
  fulfilledAt: 'fulfilledAt',
  cancelledById: 'cancelledById',
  cancelledAt: 'cancelledAt',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SaleItemScalarFieldEnum = {
  id: 'id',
  saleId: 'saleId',
  productId: 'productId',
  productName: 'productName',
  productSku: 'productSku',
  inventoryItemId: 'inventoryItemId',
  serialNumber: 'serialNumber',
  imei1: 'imei1',
  imei2: 'imei2',
  quantity: 'quantity',
  unitCost: 'unitCost',
  unitPrice: 'unitPrice',
  discountType: 'discountType',
  discountAmount: 'discountAmount',
  taxRate: 'taxRate',
  taxAmount: 'taxAmount',
  otherCharges: 'otherCharges',
  netTotal: 'netTotal',
  lineTotal: 'lineTotal',
  total: 'total',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SalePaymentScalarFieldEnum = {
  id: 'id',
  saleId: 'saleId',
  paymentNumber: 'paymentNumber',
  amount: 'amount',
  currency: 'currency',
  exchangeRate: 'exchangeRate',
  method: 'method',
  reference: 'reference',
  accountId: 'accountId',
  accountName: 'accountName',
  paidById: 'paidById',
  paidAt: 'paidAt',
  notes: 'notes',
  accountingRef: 'accountingRef',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SaleHistoryScalarFieldEnum = {
  id: 'id',
  saleId: 'saleId',
  eventType: 'eventType',
  eventData: 'eventData',
  userId: 'userId',
  userName: 'userName',
  traceId: 'traceId',
  createdAt: 'createdAt'
};

exports.Prisma.SaleDocumentScalarFieldEnum = {
  id: 'id',
  saleId: 'saleId',
  documentType: 'documentType',
  fileName: 'fileName',
  fileUrl: 'fileUrl',
  fileSize: 'fileSize',
  mimeType: 'mimeType',
  uploadedById: 'uploadedById',
  uploadedAt: 'uploadedAt',
  notes: 'notes'
};

exports.Prisma.SaleWarrantyScalarFieldEnum = {
  id: 'id',
  saleId: 'saleId',
  saleItemId: 'saleItemId',
  inventoryItemId: 'inventoryItemId',
  warrantyType: 'warrantyType',
  startDate: 'startDate',
  endDate: 'endDate',
  terms: 'terms',
  notes: 'notes',
  createdById: 'createdById',
  createdAt: 'createdAt'
};

exports.Prisma.CustomerReceivableScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  customerId: 'customerId',
  saleId: 'saleId',
  date: 'date',
  debit: 'debit',
  credit: 'credit',
  balance: 'balance',
  reference: 'reference',
  createdById: 'createdById',
  createdAt: 'createdAt'
};

exports.Prisma.QuotationScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  quoteNumber: 'quoteNumber',
  customerId: 'customerId',
  totalAmount: 'totalAmount',
  validUntil: 'validUntil',
  status: 'status',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.QuotationItemScalarFieldEnum = {
  id: 'id',
  quotationId: 'quotationId',
  productId: 'productId',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  discount: 'discount',
  total: 'total',
  createdAt: 'createdAt'
};

exports.Prisma.SaleReturnScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  workPeriodId: 'workPeriodId',
  returnNumber: 'returnNumber',
  saleId: 'saleId',
  customerId: 'customerId',
  currency: 'currency',
  exchangeRate: 'exchangeRate',
  totalAmount: 'totalAmount',
  originalAmount: 'originalAmount',
  approvedRefund: 'approvedRefund',
  refundedAmount: 'refundedAmount',
  retainedAmount: 'retainedAmount',
  refundAmount: 'refundAmount',
  refundMethod: 'refundMethod',
  reason: 'reason',
  status: 'status',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SaleReturnItemScalarFieldEnum = {
  id: 'id',
  saleReturnId: 'saleReturnId',
  saleItemId: 'saleItemId',
  inventoryItemId: 'inventoryItemId',
  productId: 'productId',
  serialNumber: 'serialNumber',
  quantity: 'quantity',
  unitCost: 'unitCost',
  originalAmount: 'originalAmount',
  approvedRefund: 'approvedRefund',
  refundedAmount: 'refundedAmount',
  retainedAmount: 'retainedAmount',
  conditionState: 'conditionState',
  refundAmount: 'refundAmount',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.BonusScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  customerId: 'customerId',
  amount: 'amount',
  type: 'type',
  description: 'description',
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
exports.SaleCommercialStatus = exports.$Enums.SaleCommercialStatus = {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

exports.SaleFulfillmentStatus = exports.$Enums.SaleFulfillmentStatus = {
  NOT_FULFILLED: 'NOT_FULFILLED',
  PARTIALLY_FULFILLED: 'PARTIALLY_FULFILLED',
  FULFILLED: 'FULFILLED'
};

exports.SalePaymentStatus = exports.$Enums.SalePaymentStatus = {
  UNPAID: 'UNPAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID'
};

exports.SaleAccountingStatus = exports.$Enums.SaleAccountingStatus = {
  UNPOSTED: 'UNPOSTED',
  POSTED: 'POSTED',
  REVERSED: 'REVERSED'
};

exports.Prisma.ModelName = {
  Sale: 'Sale',
  SaleItem: 'SaleItem',
  SalePayment: 'SalePayment',
  SaleHistory: 'SaleHistory',
  SaleDocument: 'SaleDocument',
  SaleWarranty: 'SaleWarranty',
  CustomerReceivable: 'CustomerReceivable',
  Quotation: 'Quotation',
  QuotationItem: 'QuotationItem',
  SaleReturn: 'SaleReturn',
  SaleReturnItem: 'SaleReturnItem',
  Bonus: 'Bonus',
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
