
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

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  name: 'name',
  phone: 'phone',
  email: 'email',
  address: 'address',
  type: 'type',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  sharedShopIds: 'sharedShopIds',
  type: 'type',
  sku: 'sku',
  name: 'name',
  description: 'description',
  brandId: 'brandId',
  categoryId: 'categoryId',
  productType: 'productType',
  trackingMethod: 'trackingMethod',
  status: 'status',
  specifications: 'specifications',
  quantityOnHand: 'quantityOnHand',
  imageUrl: 'imageUrl',
  images: 'images',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  version: 'version'
};

exports.Prisma.ShopProductBalanceScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  productId: 'productId',
  quantityOnHand: 'quantityOnHand',
  version: 'version',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.InventoryItemScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  productId: 'productId',
  name: 'name',
  brandId: 'brandId',
  categoryId: 'categoryId',
  sellingPrice: 'sellingPrice',
  specifications: 'specifications',
  imei1: 'imei1',
  imei2: 'imei2',
  condition: 'condition',
  notes: 'notes',
  images: 'images',
  serialNumber: 'serialNumber',
  purchaseCost: 'purchaseCost',
  status: 'status',
  capitalizedCost: 'capitalizedCost',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  version: 'version'
};

exports.Prisma.InventoryUpgradeScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  inventoryItemId: 'inventoryItemId',
  upgradeType: 'upgradeType',
  description: 'description',
  details: 'details',
  idempotencyKey: 'idempotencyKey',
  cost: 'cost',
  createdAt: 'createdAt'
};

exports.Prisma.InventoryTransferScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  fromShopId: 'fromShopId',
  toShopId: 'toShopId',
  transferNumber: 'transferNumber',
  serialNumber: 'serialNumber',
  status: 'status',
  notes: 'notes',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WarrantyClaimScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  serialNumber: 'serialNumber',
  customerName: 'customerName',
  issueDescription: 'issueDescription',
  status: 'status',
  resolution: 'resolution',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  sharedShopIds: 'sharedShopIds',
  name: 'name',
  parentId: 'parentId',
  createdAt: 'createdAt',
  createdBy: 'createdBy'
};

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  sharedShopIds: 'sharedShopIds',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  createdBy: 'createdBy'
};

exports.Prisma.ProductPriceScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  tenantId: 'tenantId',
  sellingPrice: 'sellingPrice',
  validFrom: 'validFrom',
  validTo: 'validTo',
  createdAt: 'createdAt',
  createdBy: 'createdBy'
};

exports.Prisma.InventoryMovementScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  inventoryItemId: 'inventoryItemId',
  productId: 'productId',
  customerId: 'customerId',
  movementType: 'movementType',
  quantity: 'quantity',
  referenceId: 'referenceId',
  referenceType: 'referenceType',
  createdAt: 'createdAt',
  createdBy: 'createdBy'
};

exports.Prisma.InventoryAdjustmentScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  inventoryItemId: 'inventoryItemId',
  adjustmentType: 'adjustmentType',
  reason: 'reason',
  quantity: 'quantity',
  createdAt: 'createdAt',
  createdBy: 'createdBy'
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

exports.Prisma.RentalAgreementScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  inventoryItemId: 'inventoryItemId',
  productId: 'productId',
  contactId: 'contactId',
  personName: 'personName',
  personPhone: 'personPhone',
  agreementType: 'agreementType',
  startDate: 'startDate',
  expectedReturn: 'expectedReturn',
  actualReturn: 'actualReturn',
  rentalFee: 'rentalFee',
  ownerAgreedCost: 'ownerAgreedCost',
  salePrice: 'salePrice',
  ownerPayoutTotal: 'ownerPayoutTotal',
  ownerPayoutDetails: 'ownerPayoutDetails',
  commissionAmount: 'commissionAmount',
  maintenanceCost: 'maintenanceCost',
  quantity: 'quantity',
  status: 'status',
  notes: 'notes',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Contact: 'Contact',
  Product: 'Product',
  ShopProductBalance: 'ShopProductBalance',
  InventoryItem: 'InventoryItem',
  InventoryUpgrade: 'InventoryUpgrade',
  InventoryTransfer: 'InventoryTransfer',
  WarrantyClaim: 'WarrantyClaim',
  Category: 'Category',
  Brand: 'Brand',
  ProductPrice: 'ProductPrice',
  InventoryMovement: 'InventoryMovement',
  InventoryAdjustment: 'InventoryAdjustment',
  AuditLog: 'AuditLog',
  RentalAgreement: 'RentalAgreement'
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
