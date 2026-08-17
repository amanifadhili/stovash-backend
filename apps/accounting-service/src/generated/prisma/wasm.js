
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

exports.Prisma.LedgerAccountScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  code: 'code',
  name: 'name',
  type: 'type',
  balance: 'balance',
  parentId: 'parentId',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  version: 'version'
};

exports.Prisma.JournalEntryScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  workPeriodId: 'workPeriodId',
  description: 'description',
  postedBy: 'postedBy',
  status: 'status',
  batchId: 'batchId',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  version: 'version'
};

exports.Prisma.PostingBatchScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  workPeriodId: 'workPeriodId',
  name: 'name',
  description: 'description',
  status: 'status',
  postedBy: 'postedBy',
  postedAt: 'postedAt',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  version: 'version'
};

exports.Prisma.LedgerEntryScalarFieldEnum = {
  id: 'id',
  journalEntryId: 'journalEntryId',
  accountId: 'accountId',
  type: 'type',
  amount: 'amount',
  createdAt: 'createdAt'
};

exports.Prisma.WorkPeriodScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  openedBy: 'openedBy',
  closedBy: 'closedBy',
  openedAt: 'openedAt',
  closedAt: 'closedAt',
  status: 'status',
  totalRevenue: 'totalRevenue',
  totalExpense: 'totalExpense',
  netProfit: 'netProfit',
  grossProfit: 'grossProfit',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  version: 'version'
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

exports.Prisma.FinancialTransactionScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  type: 'type',
  occurredOn: 'occurredOn',
  occurredAt: 'occurredAt',
  actorUserId: 'actorUserId',
  sourceDomain: 'sourceDomain',
  sourceCommand: 'sourceCommand',
  sourceId: 'sourceId',
  idempotencyKey: 'idempotencyKey',
  amountMinor: 'amountMinor',
  currency: 'currency',
  description: 'description',
  reason: 'reason',
  originalTransactionId: 'originalTransactionId',
  status: 'status',
  metadata: 'metadata',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChartAccountScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  code: 'code',
  name: 'name',
  type: 'type',
  fundCode: 'fundCode',
  createdAt: 'createdAt'
};

exports.Prisma.PostedJournalScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  financialTransactionId: 'financialTransactionId',
  description: 'description',
  status: 'status',
  postedBy: 'postedBy',
  occurredOn: 'occurredOn',
  createdAt: 'createdAt'
};

exports.Prisma.PostedJournalLineScalarFieldEnum = {
  id: 'id',
  journalId: 'journalId',
  accountId: 'accountId',
  side: 'side',
  amountMinor: 'amountMinor'
};

exports.Prisma.ObligationScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  kind: 'kind',
  partyName: 'partyName',
  outstandingMinor: 'outstandingMinor',
  financialTransactionId: 'financialTransactionId',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.ProfitAllocationScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  shopId: 'shopId',
  earnedMinor: 'earnedMinor',
  transferredMinor: 'transferredMinor',
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
  LedgerAccount: 'LedgerAccount',
  JournalEntry: 'JournalEntry',
  PostingBatch: 'PostingBatch',
  LedgerEntry: 'LedgerEntry',
  WorkPeriod: 'WorkPeriod',
  AuditLog: 'AuditLog',
  FinancialTransaction: 'FinancialTransaction',
  ChartAccount: 'ChartAccount',
  PostedJournal: 'PostedJournal',
  PostedJournalLine: 'PostedJournalLine',
  Obligation: 'Obligation',
  ProfitAllocation: 'ProfitAllocation'
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
