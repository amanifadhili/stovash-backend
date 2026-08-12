
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model PurchaseItem
 * 
 */
export type PurchaseItem = $Result.DefaultSelection<Prisma.$PurchaseItemPayload>
/**
 * Model PurchaseReceivedItem
 * 
 */
export type PurchaseReceivedItem = $Result.DefaultSelection<Prisma.$PurchaseReceivedItemPayload>
/**
 * Model PurchaseReceiving
 * 
 */
export type PurchaseReceiving = $Result.DefaultSelection<Prisma.$PurchaseReceivingPayload>
/**
 * Model PurchasePayment
 * 
 */
export type PurchasePayment = $Result.DefaultSelection<Prisma.$PurchasePaymentPayload>
/**
 * Model PurchaseReturn
 * 
 */
export type PurchaseReturn = $Result.DefaultSelection<Prisma.$PurchaseReturnPayload>
/**
 * Model PurchaseReturnItem
 * 
 */
export type PurchaseReturnItem = $Result.DefaultSelection<Prisma.$PurchaseReturnItemPayload>
/**
 * Model PurchaseDocument
 * 
 */
export type PurchaseDocument = $Result.DefaultSelection<Prisma.$PurchaseDocumentPayload>
/**
 * Model PurchaseHistory
 * 
 */
export type PurchaseHistory = $Result.DefaultSelection<Prisma.$PurchaseHistoryPayload>
/**
 * Model SupplierOrder
 * 
 */
export type SupplierOrder = $Result.DefaultSelection<Prisma.$SupplierOrderPayload>
/**
 * Model SupplierOrderItem
 * 
 */
export type SupplierOrderItem = $Result.DefaultSelection<Prisma.$SupplierOrderItemPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PurchaseCommercialStatus: {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type PurchaseCommercialStatus = (typeof PurchaseCommercialStatus)[keyof typeof PurchaseCommercialStatus]


export const PurchaseReceivingStatus: {
  NOT_RECEIVED: 'NOT_RECEIVED',
  PARTIALLY_RECEIVED: 'PARTIALLY_RECEIVED',
  FULLY_RECEIVED: 'FULLY_RECEIVED'
};

export type PurchaseReceivingStatus = (typeof PurchaseReceivingStatus)[keyof typeof PurchaseReceivingStatus]


export const PurchasePaymentStatus: {
  UNPAID: 'UNPAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID'
};

export type PurchasePaymentStatus = (typeof PurchasePaymentStatus)[keyof typeof PurchasePaymentStatus]


export const PurchaseAccountingStatus: {
  UNPOSTED: 'UNPOSTED',
  POSTED: 'POSTED',
  REVERSED: 'REVERSED'
};

export type PurchaseAccountingStatus = (typeof PurchaseAccountingStatus)[keyof typeof PurchaseAccountingStatus]


export const ReceivingItemCondition: {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  DAMAGED: 'DAMAGED',
  WRONG_ITEM: 'WRONG_ITEM'
};

export type ReceivingItemCondition = (typeof ReceivingItemCondition)[keyof typeof ReceivingItemCondition]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  MOBILE_MONEY: 'MOBILE_MONEY',
  CHECK: 'CHECK',
  CREDIT: 'CREDIT',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type PurchaseCommercialStatus = $Enums.PurchaseCommercialStatus

export const PurchaseCommercialStatus: typeof $Enums.PurchaseCommercialStatus

export type PurchaseReceivingStatus = $Enums.PurchaseReceivingStatus

export const PurchaseReceivingStatus: typeof $Enums.PurchaseReceivingStatus

export type PurchasePaymentStatus = $Enums.PurchasePaymentStatus

export const PurchasePaymentStatus: typeof $Enums.PurchasePaymentStatus

export type PurchaseAccountingStatus = $Enums.PurchaseAccountingStatus

export const PurchaseAccountingStatus: typeof $Enums.PurchaseAccountingStatus

export type ReceivingItemCondition = $Enums.ReceivingItemCondition

export const ReceivingItemCondition: typeof $Enums.ReceivingItemCondition

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Purchases
 * const purchases = await prisma.purchase.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Purchases
   * const purchases = await prisma.purchase.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs>;

  /**
   * `prisma.purchaseItem`: Exposes CRUD operations for the **PurchaseItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseItems
    * const purchaseItems = await prisma.purchaseItem.findMany()
    * ```
    */
  get purchaseItem(): Prisma.PurchaseItemDelegate<ExtArgs>;

  /**
   * `prisma.purchaseReceivedItem`: Exposes CRUD operations for the **PurchaseReceivedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseReceivedItems
    * const purchaseReceivedItems = await prisma.purchaseReceivedItem.findMany()
    * ```
    */
  get purchaseReceivedItem(): Prisma.PurchaseReceivedItemDelegate<ExtArgs>;

  /**
   * `prisma.purchaseReceiving`: Exposes CRUD operations for the **PurchaseReceiving** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseReceivings
    * const purchaseReceivings = await prisma.purchaseReceiving.findMany()
    * ```
    */
  get purchaseReceiving(): Prisma.PurchaseReceivingDelegate<ExtArgs>;

  /**
   * `prisma.purchasePayment`: Exposes CRUD operations for the **PurchasePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchasePayments
    * const purchasePayments = await prisma.purchasePayment.findMany()
    * ```
    */
  get purchasePayment(): Prisma.PurchasePaymentDelegate<ExtArgs>;

  /**
   * `prisma.purchaseReturn`: Exposes CRUD operations for the **PurchaseReturn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseReturns
    * const purchaseReturns = await prisma.purchaseReturn.findMany()
    * ```
    */
  get purchaseReturn(): Prisma.PurchaseReturnDelegate<ExtArgs>;

  /**
   * `prisma.purchaseReturnItem`: Exposes CRUD operations for the **PurchaseReturnItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseReturnItems
    * const purchaseReturnItems = await prisma.purchaseReturnItem.findMany()
    * ```
    */
  get purchaseReturnItem(): Prisma.PurchaseReturnItemDelegate<ExtArgs>;

  /**
   * `prisma.purchaseDocument`: Exposes CRUD operations for the **PurchaseDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseDocuments
    * const purchaseDocuments = await prisma.purchaseDocument.findMany()
    * ```
    */
  get purchaseDocument(): Prisma.PurchaseDocumentDelegate<ExtArgs>;

  /**
   * `prisma.purchaseHistory`: Exposes CRUD operations for the **PurchaseHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseHistories
    * const purchaseHistories = await prisma.purchaseHistory.findMany()
    * ```
    */
  get purchaseHistory(): Prisma.PurchaseHistoryDelegate<ExtArgs>;

  /**
   * `prisma.supplierOrder`: Exposes CRUD operations for the **SupplierOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierOrders
    * const supplierOrders = await prisma.supplierOrder.findMany()
    * ```
    */
  get supplierOrder(): Prisma.SupplierOrderDelegate<ExtArgs>;

  /**
   * `prisma.supplierOrderItem`: Exposes CRUD operations for the **SupplierOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierOrderItems
    * const supplierOrderItems = await prisma.supplierOrderItem.findMany()
    * ```
    */
  get supplierOrderItem(): Prisma.SupplierOrderItemDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "purchase" | "purchaseItem" | "purchaseReceivedItem" | "purchaseReceiving" | "purchasePayment" | "purchaseReturn" | "purchaseReturnItem" | "purchaseDocument" | "purchaseHistory" | "supplierOrder" | "supplierOrderItem" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      PurchaseItem: {
        payload: Prisma.$PurchaseItemPayload<ExtArgs>
        fields: Prisma.PurchaseItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          update: {
            args: Prisma.PurchaseItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseItem>
          }
          groupBy: {
            args: Prisma.PurchaseItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemCountAggregateOutputType> | number
          }
        }
      }
      PurchaseReceivedItem: {
        payload: Prisma.$PurchaseReceivedItemPayload<ExtArgs>
        fields: Prisma.PurchaseReceivedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseReceivedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseReceivedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseReceivedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseReceivedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseReceivedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseReceivedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseReceivedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseReceivedItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseReceivedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>
          }
          update: {
            args: Prisma.PurchaseReceivedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseReceivedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseReceivedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseReceivedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivedItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseReceivedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseReceivedItem>
          }
          groupBy: {
            args: Prisma.PurchaseReceivedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReceivedItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseReceivedItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReceivedItemCountAggregateOutputType> | number
          }
        }
      }
      PurchaseReceiving: {
        payload: Prisma.$PurchaseReceivingPayload<ExtArgs>
        fields: Prisma.PurchaseReceivingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseReceivingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseReceivingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>
          }
          findFirst: {
            args: Prisma.PurchaseReceivingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseReceivingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>
          }
          findMany: {
            args: Prisma.PurchaseReceivingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>[]
          }
          create: {
            args: Prisma.PurchaseReceivingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>
          }
          createMany: {
            args: Prisma.PurchaseReceivingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseReceivingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>[]
          }
          delete: {
            args: Prisma.PurchaseReceivingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>
          }
          update: {
            args: Prisma.PurchaseReceivingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseReceivingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseReceivingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseReceivingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReceivingPayload>
          }
          aggregate: {
            args: Prisma.PurchaseReceivingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseReceiving>
          }
          groupBy: {
            args: Prisma.PurchaseReceivingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReceivingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseReceivingCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReceivingCountAggregateOutputType> | number
          }
        }
      }
      PurchasePayment: {
        payload: Prisma.$PurchasePaymentPayload<ExtArgs>
        fields: Prisma.PurchasePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>
          }
          findFirst: {
            args: Prisma.PurchasePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>
          }
          findMany: {
            args: Prisma.PurchasePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>[]
          }
          create: {
            args: Prisma.PurchasePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>
          }
          createMany: {
            args: Prisma.PurchasePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchasePaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>[]
          }
          delete: {
            args: Prisma.PurchasePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>
          }
          update: {
            args: Prisma.PurchasePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>
          }
          deleteMany: {
            args: Prisma.PurchasePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchasePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePaymentPayload>
          }
          aggregate: {
            args: Prisma.PurchasePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchasePayment>
          }
          groupBy: {
            args: Prisma.PurchasePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasePaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasePaymentCountAggregateOutputType> | number
          }
        }
      }
      PurchaseReturn: {
        payload: Prisma.$PurchaseReturnPayload<ExtArgs>
        fields: Prisma.PurchaseReturnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseReturnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseReturnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>
          }
          findFirst: {
            args: Prisma.PurchaseReturnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseReturnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>
          }
          findMany: {
            args: Prisma.PurchaseReturnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>[]
          }
          create: {
            args: Prisma.PurchaseReturnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>
          }
          createMany: {
            args: Prisma.PurchaseReturnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseReturnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>[]
          }
          delete: {
            args: Prisma.PurchaseReturnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>
          }
          update: {
            args: Prisma.PurchaseReturnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseReturnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseReturnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseReturnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnPayload>
          }
          aggregate: {
            args: Prisma.PurchaseReturnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseReturn>
          }
          groupBy: {
            args: Prisma.PurchaseReturnGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReturnGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseReturnCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReturnCountAggregateOutputType> | number
          }
        }
      }
      PurchaseReturnItem: {
        payload: Prisma.$PurchaseReturnItemPayload<ExtArgs>
        fields: Prisma.PurchaseReturnItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseReturnItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseReturnItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseReturnItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseReturnItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseReturnItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseReturnItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseReturnItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseReturnItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseReturnItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>
          }
          update: {
            args: Prisma.PurchaseReturnItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseReturnItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseReturnItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseReturnItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseReturnItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseReturnItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseReturnItem>
          }
          groupBy: {
            args: Prisma.PurchaseReturnItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReturnItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseReturnItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseReturnItemCountAggregateOutputType> | number
          }
        }
      }
      PurchaseDocument: {
        payload: Prisma.$PurchaseDocumentPayload<ExtArgs>
        fields: Prisma.PurchaseDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>
          }
          findFirst: {
            args: Prisma.PurchaseDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>
          }
          findMany: {
            args: Prisma.PurchaseDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>[]
          }
          create: {
            args: Prisma.PurchaseDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>
          }
          createMany: {
            args: Prisma.PurchaseDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>[]
          }
          delete: {
            args: Prisma.PurchaseDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>
          }
          update: {
            args: Prisma.PurchaseDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseDocumentPayload>
          }
          aggregate: {
            args: Prisma.PurchaseDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseDocument>
          }
          groupBy: {
            args: Prisma.PurchaseDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseDocumentCountAggregateOutputType> | number
          }
        }
      }
      PurchaseHistory: {
        payload: Prisma.$PurchaseHistoryPayload<ExtArgs>
        fields: Prisma.PurchaseHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          findFirst: {
            args: Prisma.PurchaseHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          findMany: {
            args: Prisma.PurchaseHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>[]
          }
          create: {
            args: Prisma.PurchaseHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          createMany: {
            args: Prisma.PurchaseHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>[]
          }
          delete: {
            args: Prisma.PurchaseHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          update: {
            args: Prisma.PurchaseHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseHistoryPayload>
          }
          aggregate: {
            args: Prisma.PurchaseHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseHistory>
          }
          groupBy: {
            args: Prisma.PurchaseHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseHistoryCountAggregateOutputType> | number
          }
        }
      }
      SupplierOrder: {
        payload: Prisma.$SupplierOrderPayload<ExtArgs>
        fields: Prisma.SupplierOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>
          }
          findFirst: {
            args: Prisma.SupplierOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>
          }
          findMany: {
            args: Prisma.SupplierOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>[]
          }
          create: {
            args: Prisma.SupplierOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>
          }
          createMany: {
            args: Prisma.SupplierOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>[]
          }
          delete: {
            args: Prisma.SupplierOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>
          }
          update: {
            args: Prisma.SupplierOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>
          }
          deleteMany: {
            args: Prisma.SupplierOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderPayload>
          }
          aggregate: {
            args: Prisma.SupplierOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierOrder>
          }
          groupBy: {
            args: Prisma.SupplierOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierOrderCountAggregateOutputType> | number
          }
        }
      }
      SupplierOrderItem: {
        payload: Prisma.$SupplierOrderItemPayload<ExtArgs>
        fields: Prisma.SupplierOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>
          }
          findFirst: {
            args: Prisma.SupplierOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>
          }
          findMany: {
            args: Prisma.SupplierOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>[]
          }
          create: {
            args: Prisma.SupplierOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>
          }
          createMany: {
            args: Prisma.SupplierOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>[]
          }
          delete: {
            args: Prisma.SupplierOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>
          }
          update: {
            args: Prisma.SupplierOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.SupplierOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierOrderItemPayload>
          }
          aggregate: {
            args: Prisma.SupplierOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierOrderItem>
          }
          groupBy: {
            args: Prisma.SupplierOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierOrderItemCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    items: number
    receivedItems: number
    receivings: number
    payments: number
    returns: number
    documents: number
    history: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchaseCountOutputTypeCountItemsArgs
    receivedItems?: boolean | PurchaseCountOutputTypeCountReceivedItemsArgs
    receivings?: boolean | PurchaseCountOutputTypeCountReceivingsArgs
    payments?: boolean | PurchaseCountOutputTypeCountPaymentsArgs
    returns?: boolean | PurchaseCountOutputTypeCountReturnsArgs
    documents?: boolean | PurchaseCountOutputTypeCountDocumentsArgs
    history?: boolean | PurchaseCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountReceivedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReceivedItemWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountReceivingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReceivingWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasePaymentWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountReturnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReturnWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseDocumentWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseHistoryWhereInput
  }


  /**
   * Count Type PurchaseItemCountOutputType
   */

  export type PurchaseItemCountOutputType = {
    receivedItems: number
    returnItems: number
  }

  export type PurchaseItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedItems?: boolean | PurchaseItemCountOutputTypeCountReceivedItemsArgs
    returnItems?: boolean | PurchaseItemCountOutputTypeCountReturnItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseItemCountOutputType without action
   */
  export type PurchaseItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItemCountOutputType
     */
    select?: PurchaseItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseItemCountOutputType without action
   */
  export type PurchaseItemCountOutputTypeCountReceivedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReceivedItemWhereInput
  }

  /**
   * PurchaseItemCountOutputType without action
   */
  export type PurchaseItemCountOutputTypeCountReturnItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReturnItemWhereInput
  }


  /**
   * Count Type PurchaseReceivingCountOutputType
   */

  export type PurchaseReceivingCountOutputType = {
    receivedItems: number
  }

  export type PurchaseReceivingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receivedItems?: boolean | PurchaseReceivingCountOutputTypeCountReceivedItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseReceivingCountOutputType without action
   */
  export type PurchaseReceivingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivingCountOutputType
     */
    select?: PurchaseReceivingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseReceivingCountOutputType without action
   */
  export type PurchaseReceivingCountOutputTypeCountReceivedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReceivedItemWhereInput
  }


  /**
   * Count Type PurchaseReturnCountOutputType
   */

  export type PurchaseReturnCountOutputType = {
    items: number
  }

  export type PurchaseReturnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchaseReturnCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseReturnCountOutputType without action
   */
  export type PurchaseReturnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnCountOutputType
     */
    select?: PurchaseReturnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseReturnCountOutputType without action
   */
  export type PurchaseReturnCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReturnItemWhereInput
  }


  /**
   * Count Type SupplierOrderCountOutputType
   */

  export type SupplierOrderCountOutputType = {
    items: number
  }

  export type SupplierOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SupplierOrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SupplierOrderCountOutputType without action
   */
  export type SupplierOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderCountOutputType
     */
    select?: SupplierOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierOrderCountOutputType without action
   */
  export type SupplierOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    exchangeRate: number | null
    subtotal: number | null
    discountTotal: number | null
    taxTotal: number | null
    otherCostTotal: number | null
    grandTotal: number | null
    amountPaid: number | null
    amountOutstanding: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    exchangeRate: number | null
    subtotal: number | null
    discountTotal: number | null
    taxTotal: number | null
    otherCostTotal: number | null
    grandTotal: number | null
    amountPaid: number | null
    amountOutstanding: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    purchaseNumber: string | null
    supplierId: string | null
    supplierName: string | null
    supplierContact: string | null
    supplierAddress: string | null
    supplierTaxId: string | null
    purchaseDate: Date | null
    supplierInvoiceNo: string | null
    currency: string | null
    exchangeRate: number | null
    commercialStatus: $Enums.PurchaseCommercialStatus | null
    receivingStatus: $Enums.PurchaseReceivingStatus | null
    paymentStatus: $Enums.PurchasePaymentStatus | null
    accountingStatus: $Enums.PurchaseAccountingStatus | null
    subtotal: number | null
    discountTotal: number | null
    taxTotal: number | null
    otherCostTotal: number | null
    grandTotal: number | null
    amountPaid: number | null
    amountOutstanding: number | null
    notes: string | null
    approvedById: string | null
    approvedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    purchaseNumber: string | null
    supplierId: string | null
    supplierName: string | null
    supplierContact: string | null
    supplierAddress: string | null
    supplierTaxId: string | null
    purchaseDate: Date | null
    supplierInvoiceNo: string | null
    currency: string | null
    exchangeRate: number | null
    commercialStatus: $Enums.PurchaseCommercialStatus | null
    receivingStatus: $Enums.PurchaseReceivingStatus | null
    paymentStatus: $Enums.PurchasePaymentStatus | null
    accountingStatus: $Enums.PurchaseAccountingStatus | null
    subtotal: number | null
    discountTotal: number | null
    taxTotal: number | null
    otherCostTotal: number | null
    grandTotal: number | null
    amountPaid: number | null
    amountOutstanding: number | null
    notes: string | null
    approvedById: string | null
    approvedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    purchaseNumber: number
    supplierId: number
    supplierName: number
    supplierContact: number
    supplierAddress: number
    supplierTaxId: number
    purchaseDate: number
    supplierInvoiceNo: number
    currency: number
    exchangeRate: number
    commercialStatus: number
    receivingStatus: number
    paymentStatus: number
    accountingStatus: number
    subtotal: number
    discountTotal: number
    taxTotal: number
    otherCostTotal: number
    grandTotal: number
    amountPaid: number
    amountOutstanding: number
    notes: number
    approvedById: number
    approvedAt: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    exchangeRate?: true
    subtotal?: true
    discountTotal?: true
    taxTotal?: true
    otherCostTotal?: true
    grandTotal?: true
    amountPaid?: true
    amountOutstanding?: true
  }

  export type PurchaseSumAggregateInputType = {
    exchangeRate?: true
    subtotal?: true
    discountTotal?: true
    taxTotal?: true
    otherCostTotal?: true
    grandTotal?: true
    amountPaid?: true
    amountOutstanding?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    purchaseNumber?: true
    supplierId?: true
    supplierName?: true
    supplierContact?: true
    supplierAddress?: true
    supplierTaxId?: true
    purchaseDate?: true
    supplierInvoiceNo?: true
    currency?: true
    exchangeRate?: true
    commercialStatus?: true
    receivingStatus?: true
    paymentStatus?: true
    accountingStatus?: true
    subtotal?: true
    discountTotal?: true
    taxTotal?: true
    otherCostTotal?: true
    grandTotal?: true
    amountPaid?: true
    amountOutstanding?: true
    notes?: true
    approvedById?: true
    approvedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    purchaseNumber?: true
    supplierId?: true
    supplierName?: true
    supplierContact?: true
    supplierAddress?: true
    supplierTaxId?: true
    purchaseDate?: true
    supplierInvoiceNo?: true
    currency?: true
    exchangeRate?: true
    commercialStatus?: true
    receivingStatus?: true
    paymentStatus?: true
    accountingStatus?: true
    subtotal?: true
    discountTotal?: true
    taxTotal?: true
    otherCostTotal?: true
    grandTotal?: true
    amountPaid?: true
    amountOutstanding?: true
    notes?: true
    approvedById?: true
    approvedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    purchaseNumber?: true
    supplierId?: true
    supplierName?: true
    supplierContact?: true
    supplierAddress?: true
    supplierTaxId?: true
    purchaseDate?: true
    supplierInvoiceNo?: true
    currency?: true
    exchangeRate?: true
    commercialStatus?: true
    receivingStatus?: true
    paymentStatus?: true
    accountingStatus?: true
    subtotal?: true
    discountTotal?: true
    taxTotal?: true
    otherCostTotal?: true
    grandTotal?: true
    amountPaid?: true
    amountOutstanding?: true
    notes?: true
    approvedById?: true
    approvedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact: string | null
    supplierAddress: string | null
    supplierTaxId: string | null
    purchaseDate: Date
    supplierInvoiceNo: string | null
    currency: string
    exchangeRate: number
    commercialStatus: $Enums.PurchaseCommercialStatus
    receivingStatus: $Enums.PurchaseReceivingStatus
    paymentStatus: $Enums.PurchasePaymentStatus
    accountingStatus: $Enums.PurchaseAccountingStatus
    subtotal: number
    discountTotal: number
    taxTotal: number
    otherCostTotal: number
    grandTotal: number
    amountPaid: number
    amountOutstanding: number
    notes: string | null
    approvedById: string | null
    approvedAt: Date | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    purchaseNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    supplierContact?: boolean
    supplierAddress?: boolean
    supplierTaxId?: boolean
    purchaseDate?: boolean
    supplierInvoiceNo?: boolean
    currency?: boolean
    exchangeRate?: boolean
    commercialStatus?: boolean
    receivingStatus?: boolean
    paymentStatus?: boolean
    accountingStatus?: boolean
    subtotal?: boolean
    discountTotal?: boolean
    taxTotal?: boolean
    otherCostTotal?: boolean
    grandTotal?: boolean
    amountPaid?: boolean
    amountOutstanding?: boolean
    notes?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    receivedItems?: boolean | Purchase$receivedItemsArgs<ExtArgs>
    receivings?: boolean | Purchase$receivingsArgs<ExtArgs>
    payments?: boolean | Purchase$paymentsArgs<ExtArgs>
    returns?: boolean | Purchase$returnsArgs<ExtArgs>
    documents?: boolean | Purchase$documentsArgs<ExtArgs>
    history?: boolean | Purchase$historyArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    purchaseNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    supplierContact?: boolean
    supplierAddress?: boolean
    supplierTaxId?: boolean
    purchaseDate?: boolean
    supplierInvoiceNo?: boolean
    currency?: boolean
    exchangeRate?: boolean
    commercialStatus?: boolean
    receivingStatus?: boolean
    paymentStatus?: boolean
    accountingStatus?: boolean
    subtotal?: boolean
    discountTotal?: boolean
    taxTotal?: boolean
    otherCostTotal?: boolean
    grandTotal?: boolean
    amountPaid?: boolean
    amountOutstanding?: boolean
    notes?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    purchaseNumber?: boolean
    supplierId?: boolean
    supplierName?: boolean
    supplierContact?: boolean
    supplierAddress?: boolean
    supplierTaxId?: boolean
    purchaseDate?: boolean
    supplierInvoiceNo?: boolean
    currency?: boolean
    exchangeRate?: boolean
    commercialStatus?: boolean
    receivingStatus?: boolean
    paymentStatus?: boolean
    accountingStatus?: boolean
    subtotal?: boolean
    discountTotal?: boolean
    taxTotal?: boolean
    otherCostTotal?: boolean
    grandTotal?: boolean
    amountPaid?: boolean
    amountOutstanding?: boolean
    notes?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    receivedItems?: boolean | Purchase$receivedItemsArgs<ExtArgs>
    receivings?: boolean | Purchase$receivingsArgs<ExtArgs>
    payments?: boolean | Purchase$paymentsArgs<ExtArgs>
    returns?: boolean | Purchase$returnsArgs<ExtArgs>
    documents?: boolean | Purchase$documentsArgs<ExtArgs>
    history?: boolean | Purchase$historyArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      items: Prisma.$PurchaseItemPayload<ExtArgs>[]
      receivedItems: Prisma.$PurchaseReceivedItemPayload<ExtArgs>[]
      receivings: Prisma.$PurchaseReceivingPayload<ExtArgs>[]
      payments: Prisma.$PurchasePaymentPayload<ExtArgs>[]
      returns: Prisma.$PurchaseReturnPayload<ExtArgs>[]
      documents: Prisma.$PurchaseDocumentPayload<ExtArgs>[]
      history: Prisma.$PurchaseHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      purchaseNumber: string
      supplierId: string
      supplierName: string
      supplierContact: string | null
      supplierAddress: string | null
      supplierTaxId: string | null
      purchaseDate: Date
      supplierInvoiceNo: string | null
      currency: string
      exchangeRate: number
      commercialStatus: $Enums.PurchaseCommercialStatus
      receivingStatus: $Enums.PurchaseReceivingStatus
      paymentStatus: $Enums.PurchasePaymentStatus
      accountingStatus: $Enums.PurchaseAccountingStatus
      subtotal: number
      discountTotal: number
      taxTotal: number
      otherCostTotal: number
      grandTotal: number
      amountPaid: number
      amountOutstanding: number
      notes: string | null
      approvedById: string | null
      approvedAt: Date | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Purchase$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany"> | Null>
    receivedItems<T extends Purchase$receivedItemsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$receivedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findMany"> | Null>
    receivings<T extends Purchase$receivingsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$receivingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Purchase$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findMany"> | Null>
    returns<T extends Purchase$returnsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$returnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findMany"> | Null>
    documents<T extends Purchase$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    history<T extends Purchase$historyArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */ 
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly tenantId: FieldRef<"Purchase", 'String'>
    readonly shopId: FieldRef<"Purchase", 'String'>
    readonly purchaseNumber: FieldRef<"Purchase", 'String'>
    readonly supplierId: FieldRef<"Purchase", 'String'>
    readonly supplierName: FieldRef<"Purchase", 'String'>
    readonly supplierContact: FieldRef<"Purchase", 'String'>
    readonly supplierAddress: FieldRef<"Purchase", 'String'>
    readonly supplierTaxId: FieldRef<"Purchase", 'String'>
    readonly purchaseDate: FieldRef<"Purchase", 'DateTime'>
    readonly supplierInvoiceNo: FieldRef<"Purchase", 'String'>
    readonly currency: FieldRef<"Purchase", 'String'>
    readonly exchangeRate: FieldRef<"Purchase", 'Float'>
    readonly commercialStatus: FieldRef<"Purchase", 'PurchaseCommercialStatus'>
    readonly receivingStatus: FieldRef<"Purchase", 'PurchaseReceivingStatus'>
    readonly paymentStatus: FieldRef<"Purchase", 'PurchasePaymentStatus'>
    readonly accountingStatus: FieldRef<"Purchase", 'PurchaseAccountingStatus'>
    readonly subtotal: FieldRef<"Purchase", 'Float'>
    readonly discountTotal: FieldRef<"Purchase", 'Float'>
    readonly taxTotal: FieldRef<"Purchase", 'Float'>
    readonly otherCostTotal: FieldRef<"Purchase", 'Float'>
    readonly grandTotal: FieldRef<"Purchase", 'Float'>
    readonly amountPaid: FieldRef<"Purchase", 'Float'>
    readonly amountOutstanding: FieldRef<"Purchase", 'Float'>
    readonly notes: FieldRef<"Purchase", 'String'>
    readonly approvedById: FieldRef<"Purchase", 'String'>
    readonly approvedAt: FieldRef<"Purchase", 'DateTime'>
    readonly createdById: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase.items
   */
  export type Purchase$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * Purchase.receivedItems
   */
  export type Purchase$receivedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    where?: PurchaseReceivedItemWhereInput
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    cursor?: PurchaseReceivedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReceivedItemScalarFieldEnum | PurchaseReceivedItemScalarFieldEnum[]
  }

  /**
   * Purchase.receivings
   */
  export type Purchase$receivingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    where?: PurchaseReceivingWhereInput
    orderBy?: PurchaseReceivingOrderByWithRelationInput | PurchaseReceivingOrderByWithRelationInput[]
    cursor?: PurchaseReceivingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReceivingScalarFieldEnum | PurchaseReceivingScalarFieldEnum[]
  }

  /**
   * Purchase.payments
   */
  export type Purchase$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    where?: PurchasePaymentWhereInput
    orderBy?: PurchasePaymentOrderByWithRelationInput | PurchasePaymentOrderByWithRelationInput[]
    cursor?: PurchasePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasePaymentScalarFieldEnum | PurchasePaymentScalarFieldEnum[]
  }

  /**
   * Purchase.returns
   */
  export type Purchase$returnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    where?: PurchaseReturnWhereInput
    orderBy?: PurchaseReturnOrderByWithRelationInput | PurchaseReturnOrderByWithRelationInput[]
    cursor?: PurchaseReturnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReturnScalarFieldEnum | PurchaseReturnScalarFieldEnum[]
  }

  /**
   * Purchase.documents
   */
  export type Purchase$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    where?: PurchaseDocumentWhereInput
    orderBy?: PurchaseDocumentOrderByWithRelationInput | PurchaseDocumentOrderByWithRelationInput[]
    cursor?: PurchaseDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseDocumentScalarFieldEnum | PurchaseDocumentScalarFieldEnum[]
  }

  /**
   * Purchase.history
   */
  export type Purchase$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    where?: PurchaseHistoryWhereInput
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    cursor?: PurchaseHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseItem
   */

  export type AggregatePurchaseItem = {
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  export type PurchaseItemAvgAggregateOutputType = {
    orderedQty: number | null
    receivedQty: number | null
    acceptedQty: number | null
    rejectedQty: number | null
    returnedQty: number | null
    unitPrice: number | null
    discountAmount: number | null
    taxRate: number | null
    taxAmount: number | null
    otherCosts: number | null
    lineTotal: number | null
    acquisitionCost: number | null
  }

  export type PurchaseItemSumAggregateOutputType = {
    orderedQty: number | null
    receivedQty: number | null
    acceptedQty: number | null
    rejectedQty: number | null
    returnedQty: number | null
    unitPrice: number | null
    discountAmount: number | null
    taxRate: number | null
    taxAmount: number | null
    otherCosts: number | null
    lineTotal: number | null
    acquisitionCost: number | null
  }

  export type PurchaseItemMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    productId: string | null
    productName: string | null
    productSku: string | null
    productTracking: string | null
    orderedQty: number | null
    receivedQty: number | null
    acceptedQty: number | null
    rejectedQty: number | null
    returnedQty: number | null
    unitPrice: number | null
    discountAmount: number | null
    discountType: string | null
    taxRate: number | null
    taxAmount: number | null
    otherCosts: number | null
    lineTotal: number | null
    acquisitionCost: number | null
    purchaseSpecs: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseItemMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    productId: string | null
    productName: string | null
    productSku: string | null
    productTracking: string | null
    orderedQty: number | null
    receivedQty: number | null
    acceptedQty: number | null
    rejectedQty: number | null
    returnedQty: number | null
    unitPrice: number | null
    discountAmount: number | null
    discountType: string | null
    taxRate: number | null
    taxAmount: number | null
    otherCosts: number | null
    lineTotal: number | null
    acquisitionCost: number | null
    purchaseSpecs: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseItemCountAggregateOutputType = {
    id: number
    purchaseId: number
    productId: number
    productName: number
    productSku: number
    productTracking: number
    orderedQty: number
    receivedQty: number
    acceptedQty: number
    rejectedQty: number
    returnedQty: number
    unitPrice: number
    discountAmount: number
    discountType: number
    taxRate: number
    taxAmount: number
    otherCosts: number
    lineTotal: number
    acquisitionCost: number
    purchaseSpecs: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseItemAvgAggregateInputType = {
    orderedQty?: true
    receivedQty?: true
    acceptedQty?: true
    rejectedQty?: true
    returnedQty?: true
    unitPrice?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    otherCosts?: true
    lineTotal?: true
    acquisitionCost?: true
  }

  export type PurchaseItemSumAggregateInputType = {
    orderedQty?: true
    receivedQty?: true
    acceptedQty?: true
    rejectedQty?: true
    returnedQty?: true
    unitPrice?: true
    discountAmount?: true
    taxRate?: true
    taxAmount?: true
    otherCosts?: true
    lineTotal?: true
    acquisitionCost?: true
  }

  export type PurchaseItemMinAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    productName?: true
    productSku?: true
    productTracking?: true
    orderedQty?: true
    receivedQty?: true
    acceptedQty?: true
    rejectedQty?: true
    returnedQty?: true
    unitPrice?: true
    discountAmount?: true
    discountType?: true
    taxRate?: true
    taxAmount?: true
    otherCosts?: true
    lineTotal?: true
    acquisitionCost?: true
    purchaseSpecs?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseItemMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    productName?: true
    productSku?: true
    productTracking?: true
    orderedQty?: true
    receivedQty?: true
    acceptedQty?: true
    rejectedQty?: true
    returnedQty?: true
    unitPrice?: true
    discountAmount?: true
    discountType?: true
    taxRate?: true
    taxAmount?: true
    otherCosts?: true
    lineTotal?: true
    acquisitionCost?: true
    purchaseSpecs?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseItemCountAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    productName?: true
    productSku?: true
    productTracking?: true
    orderedQty?: true
    receivedQty?: true
    acceptedQty?: true
    rejectedQty?: true
    returnedQty?: true
    unitPrice?: true
    discountAmount?: true
    discountType?: true
    taxRate?: true
    taxAmount?: true
    otherCosts?: true
    lineTotal?: true
    acquisitionCost?: true
    purchaseSpecs?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItem to aggregate.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseItems
    **/
    _count?: true | PurchaseItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type GetPurchaseItemAggregateType<T extends PurchaseItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseItem[P]>
      : GetScalarType<T[P], AggregatePurchaseItem[P]>
  }




  export type PurchaseItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithAggregationInput | PurchaseItemOrderByWithAggregationInput[]
    by: PurchaseItemScalarFieldEnum[] | PurchaseItemScalarFieldEnum
    having?: PurchaseItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseItemCountAggregateInputType | true
    _avg?: PurchaseItemAvgAggregateInputType
    _sum?: PurchaseItemSumAggregateInputType
    _min?: PurchaseItemMinAggregateInputType
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type PurchaseItemGroupByOutputType = {
    id: string
    purchaseId: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty: number
    acceptedQty: number
    rejectedQty: number
    returnedQty: number
    unitPrice: number
    discountAmount: number
    discountType: string | null
    taxRate: number
    taxAmount: number
    otherCosts: number
    lineTotal: number
    acquisitionCost: number
    purchaseSpecs: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  type GetPurchaseItemGroupByPayload<T extends PurchaseItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    productName?: boolean
    productSku?: boolean
    productTracking?: boolean
    orderedQty?: boolean
    receivedQty?: boolean
    acceptedQty?: boolean
    rejectedQty?: boolean
    returnedQty?: boolean
    unitPrice?: boolean
    discountAmount?: boolean
    discountType?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    otherCosts?: boolean
    lineTotal?: boolean
    acquisitionCost?: boolean
    purchaseSpecs?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    receivedItems?: boolean | PurchaseItem$receivedItemsArgs<ExtArgs>
    returnItems?: boolean | PurchaseItem$returnItemsArgs<ExtArgs>
    _count?: boolean | PurchaseItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    productName?: boolean
    productSku?: boolean
    productTracking?: boolean
    orderedQty?: boolean
    receivedQty?: boolean
    acceptedQty?: boolean
    rejectedQty?: boolean
    returnedQty?: boolean
    unitPrice?: boolean
    discountAmount?: boolean
    discountType?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    otherCosts?: boolean
    lineTotal?: boolean
    acquisitionCost?: boolean
    purchaseSpecs?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    productName?: boolean
    productSku?: boolean
    productTracking?: boolean
    orderedQty?: boolean
    receivedQty?: boolean
    acceptedQty?: boolean
    rejectedQty?: boolean
    returnedQty?: boolean
    unitPrice?: boolean
    discountAmount?: boolean
    discountType?: boolean
    taxRate?: boolean
    taxAmount?: boolean
    otherCosts?: boolean
    lineTotal?: boolean
    acquisitionCost?: boolean
    purchaseSpecs?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    receivedItems?: boolean | PurchaseItem$receivedItemsArgs<ExtArgs>
    returnItems?: boolean | PurchaseItem$returnItemsArgs<ExtArgs>
    _count?: boolean | PurchaseItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchaseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseItem"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      receivedItems: Prisma.$PurchaseReceivedItemPayload<ExtArgs>[]
      returnItems: Prisma.$PurchaseReturnItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      productId: string
      productName: string
      productSku: string
      productTracking: string
      orderedQty: number
      receivedQty: number
      acceptedQty: number
      rejectedQty: number
      returnedQty: number
      unitPrice: number
      discountAmount: number
      discountType: string | null
      taxRate: number
      taxAmount: number
      otherCosts: number
      lineTotal: number
      acquisitionCost: number
      purchaseSpecs: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseItem"]>
    composites: {}
  }

  type PurchaseItemGetPayload<S extends boolean | null | undefined | PurchaseItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseItemPayload, S>

  type PurchaseItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseItemCountAggregateInputType | true
    }

  export interface PurchaseItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseItem'], meta: { name: 'PurchaseItem' } }
    /**
     * Find zero or one PurchaseItem that matches the filter.
     * @param {PurchaseItemFindUniqueArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseItemFindUniqueArgs>(args: SelectSubset<T, PurchaseItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseItemFindFirstArgs>(args?: SelectSubset<T, PurchaseItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany()
     * 
     * // Get first 10 PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseItemFindManyArgs>(args?: SelectSubset<T, PurchaseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseItem.
     * @param {PurchaseItemCreateArgs} args - Arguments to create a PurchaseItem.
     * @example
     * // Create one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.create({
     *   data: {
     *     // ... data to create a PurchaseItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseItemCreateArgs>(args: SelectSubset<T, PurchaseItemCreateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseItems.
     * @param {PurchaseItemCreateManyArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseItemCreateManyArgs>(args?: SelectSubset<T, PurchaseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseItems and returns the data saved in the database.
     * @param {PurchaseItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseItems and only return the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseItem.
     * @param {PurchaseItemDeleteArgs} args - Arguments to delete one PurchaseItem.
     * @example
     * // Delete one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseItemDeleteArgs>(args: SelectSubset<T, PurchaseItemDeleteArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseItem.
     * @param {PurchaseItemUpdateArgs} args - Arguments to update one PurchaseItem.
     * @example
     * // Update one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseItemUpdateArgs>(args: SelectSubset<T, PurchaseItemUpdateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseItems.
     * @param {PurchaseItemDeleteManyArgs} args - Arguments to filter PurchaseItems to delete.
     * @example
     * // Delete a few PurchaseItems
     * const { count } = await prisma.purchaseItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseItemUpdateManyArgs>(args: SelectSubset<T, PurchaseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseItem.
     * @param {PurchaseItemUpsertArgs} args - Arguments to update or create a PurchaseItem.
     * @example
     * // Update or create a PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseItemUpsertArgs>(args: SelectSubset<T, PurchaseItemUpsertArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemCountArgs} args - Arguments to filter PurchaseItems to count.
     * @example
     * // Count the number of PurchaseItems
     * const count = await prisma.purchaseItem.count({
     *   where: {
     *     // ... the filter for the PurchaseItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseItemCountArgs>(
      args?: Subset<T, PurchaseItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseItemAggregateArgs>(args: Subset<T, PurchaseItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseItemAggregateType<T>>

    /**
     * Group by PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseItem model
   */
  readonly fields: PurchaseItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receivedItems<T extends PurchaseItem$receivedItemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseItem$receivedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findMany"> | Null>
    returnItems<T extends PurchaseItem$returnItemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseItem$returnItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseItem model
   */ 
  interface PurchaseItemFieldRefs {
    readonly id: FieldRef<"PurchaseItem", 'String'>
    readonly purchaseId: FieldRef<"PurchaseItem", 'String'>
    readonly productId: FieldRef<"PurchaseItem", 'String'>
    readonly productName: FieldRef<"PurchaseItem", 'String'>
    readonly productSku: FieldRef<"PurchaseItem", 'String'>
    readonly productTracking: FieldRef<"PurchaseItem", 'String'>
    readonly orderedQty: FieldRef<"PurchaseItem", 'Float'>
    readonly receivedQty: FieldRef<"PurchaseItem", 'Float'>
    readonly acceptedQty: FieldRef<"PurchaseItem", 'Float'>
    readonly rejectedQty: FieldRef<"PurchaseItem", 'Float'>
    readonly returnedQty: FieldRef<"PurchaseItem", 'Float'>
    readonly unitPrice: FieldRef<"PurchaseItem", 'Float'>
    readonly discountAmount: FieldRef<"PurchaseItem", 'Float'>
    readonly discountType: FieldRef<"PurchaseItem", 'String'>
    readonly taxRate: FieldRef<"PurchaseItem", 'Float'>
    readonly taxAmount: FieldRef<"PurchaseItem", 'Float'>
    readonly otherCosts: FieldRef<"PurchaseItem", 'Float'>
    readonly lineTotal: FieldRef<"PurchaseItem", 'Float'>
    readonly acquisitionCost: FieldRef<"PurchaseItem", 'Float'>
    readonly purchaseSpecs: FieldRef<"PurchaseItem", 'String'>
    readonly notes: FieldRef<"PurchaseItem", 'String'>
    readonly createdAt: FieldRef<"PurchaseItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseItem findUnique
   */
  export type PurchaseItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findUniqueOrThrow
   */
  export type PurchaseItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findFirst
   */
  export type PurchaseItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findFirstOrThrow
   */
  export type PurchaseItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findMany
   */
  export type PurchaseItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItems to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem create
   */
  export type PurchaseItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseItem.
     */
    data: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
  }

  /**
   * PurchaseItem createMany
   */
  export type PurchaseItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseItem createManyAndReturn
   */
  export type PurchaseItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseItem update
   */
  export type PurchaseItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseItem.
     */
    data: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseItem to update.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem updateMany
   */
  export type PurchaseItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseItems.
     */
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseItems to update
     */
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseItem upsert
   */
  export type PurchaseItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseItem to update in case it exists.
     */
    where: PurchaseItemWhereUniqueInput
    /**
     * In case the PurchaseItem found by the `where` argument doesn't exist, create a new PurchaseItem with this data.
     */
    create: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
    /**
     * In case the PurchaseItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
  }

  /**
   * PurchaseItem delete
   */
  export type PurchaseItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseItem to delete.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem deleteMany
   */
  export type PurchaseItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItems to delete
     */
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseItem.receivedItems
   */
  export type PurchaseItem$receivedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    where?: PurchaseReceivedItemWhereInput
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    cursor?: PurchaseReceivedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReceivedItemScalarFieldEnum | PurchaseReceivedItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem.returnItems
   */
  export type PurchaseItem$returnItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    where?: PurchaseReturnItemWhereInput
    orderBy?: PurchaseReturnItemOrderByWithRelationInput | PurchaseReturnItemOrderByWithRelationInput[]
    cursor?: PurchaseReturnItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReturnItemScalarFieldEnum | PurchaseReturnItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem without action
   */
  export type PurchaseItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseReceivedItem
   */

  export type AggregatePurchaseReceivedItem = {
    _count: PurchaseReceivedItemCountAggregateOutputType | null
    _avg: PurchaseReceivedItemAvgAggregateOutputType | null
    _sum: PurchaseReceivedItemSumAggregateOutputType | null
    _min: PurchaseReceivedItemMinAggregateOutputType | null
    _max: PurchaseReceivedItemMaxAggregateOutputType | null
  }

  export type PurchaseReceivedItemAvgAggregateOutputType = {
    unitAcquisitionCost: number | null
  }

  export type PurchaseReceivedItemSumAggregateOutputType = {
    unitAcquisitionCost: number | null
  }

  export type PurchaseReceivedItemMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    purchaseItemId: string | null
    receivingId: string | null
    serialNumber: string | null
    imei1: string | null
    imei2: string | null
    condition: $Enums.ReceivingItemCondition | null
    actualSpecs: string | null
    unitAcquisitionCost: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type PurchaseReceivedItemMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    purchaseItemId: string | null
    receivingId: string | null
    serialNumber: string | null
    imei1: string | null
    imei2: string | null
    condition: $Enums.ReceivingItemCondition | null
    actualSpecs: string | null
    unitAcquisitionCost: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type PurchaseReceivedItemCountAggregateOutputType = {
    id: number
    purchaseId: number
    purchaseItemId: number
    receivingId: number
    serialNumber: number
    imei1: number
    imei2: number
    condition: number
    actualSpecs: number
    unitAcquisitionCost: number
    notes: number
    createdAt: number
    _all: number
  }


  export type PurchaseReceivedItemAvgAggregateInputType = {
    unitAcquisitionCost?: true
  }

  export type PurchaseReceivedItemSumAggregateInputType = {
    unitAcquisitionCost?: true
  }

  export type PurchaseReceivedItemMinAggregateInputType = {
    id?: true
    purchaseId?: true
    purchaseItemId?: true
    receivingId?: true
    serialNumber?: true
    imei1?: true
    imei2?: true
    condition?: true
    actualSpecs?: true
    unitAcquisitionCost?: true
    notes?: true
    createdAt?: true
  }

  export type PurchaseReceivedItemMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    purchaseItemId?: true
    receivingId?: true
    serialNumber?: true
    imei1?: true
    imei2?: true
    condition?: true
    actualSpecs?: true
    unitAcquisitionCost?: true
    notes?: true
    createdAt?: true
  }

  export type PurchaseReceivedItemCountAggregateInputType = {
    id?: true
    purchaseId?: true
    purchaseItemId?: true
    receivingId?: true
    serialNumber?: true
    imei1?: true
    imei2?: true
    condition?: true
    actualSpecs?: true
    unitAcquisitionCost?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseReceivedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReceivedItem to aggregate.
     */
    where?: PurchaseReceivedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivedItems to fetch.
     */
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseReceivedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseReceivedItems
    **/
    _count?: true | PurchaseReceivedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseReceivedItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseReceivedItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseReceivedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseReceivedItemMaxAggregateInputType
  }

  export type GetPurchaseReceivedItemAggregateType<T extends PurchaseReceivedItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseReceivedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseReceivedItem[P]>
      : GetScalarType<T[P], AggregatePurchaseReceivedItem[P]>
  }




  export type PurchaseReceivedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReceivedItemWhereInput
    orderBy?: PurchaseReceivedItemOrderByWithAggregationInput | PurchaseReceivedItemOrderByWithAggregationInput[]
    by: PurchaseReceivedItemScalarFieldEnum[] | PurchaseReceivedItemScalarFieldEnum
    having?: PurchaseReceivedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseReceivedItemCountAggregateInputType | true
    _avg?: PurchaseReceivedItemAvgAggregateInputType
    _sum?: PurchaseReceivedItemSumAggregateInputType
    _min?: PurchaseReceivedItemMinAggregateInputType
    _max?: PurchaseReceivedItemMaxAggregateInputType
  }

  export type PurchaseReceivedItemGroupByOutputType = {
    id: string
    purchaseId: string
    purchaseItemId: string
    receivingId: string
    serialNumber: string | null
    imei1: string | null
    imei2: string | null
    condition: $Enums.ReceivingItemCondition
    actualSpecs: string | null
    unitAcquisitionCost: number
    notes: string | null
    createdAt: Date
    _count: PurchaseReceivedItemCountAggregateOutputType | null
    _avg: PurchaseReceivedItemAvgAggregateOutputType | null
    _sum: PurchaseReceivedItemSumAggregateOutputType | null
    _min: PurchaseReceivedItemMinAggregateOutputType | null
    _max: PurchaseReceivedItemMaxAggregateOutputType | null
  }

  type GetPurchaseReceivedItemGroupByPayload<T extends PurchaseReceivedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseReceivedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseReceivedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseReceivedItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseReceivedItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseReceivedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    purchaseItemId?: boolean
    receivingId?: boolean
    serialNumber?: boolean
    imei1?: boolean
    imei2?: boolean
    condition?: boolean
    actualSpecs?: boolean
    unitAcquisitionCost?: boolean
    notes?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseItemDefaultArgs<ExtArgs>
    receiving?: boolean | PurchaseReceivingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReceivedItem"]>

  export type PurchaseReceivedItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    purchaseItemId?: boolean
    receivingId?: boolean
    serialNumber?: boolean
    imei1?: boolean
    imei2?: boolean
    condition?: boolean
    actualSpecs?: boolean
    unitAcquisitionCost?: boolean
    notes?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseItemDefaultArgs<ExtArgs>
    receiving?: boolean | PurchaseReceivingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReceivedItem"]>

  export type PurchaseReceivedItemSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    purchaseItemId?: boolean
    receivingId?: boolean
    serialNumber?: boolean
    imei1?: boolean
    imei2?: boolean
    condition?: boolean
    actualSpecs?: boolean
    unitAcquisitionCost?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type PurchaseReceivedItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseItemDefaultArgs<ExtArgs>
    receiving?: boolean | PurchaseReceivingDefaultArgs<ExtArgs>
  }
  export type PurchaseReceivedItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseItemDefaultArgs<ExtArgs>
    receiving?: boolean | PurchaseReceivingDefaultArgs<ExtArgs>
  }

  export type $PurchaseReceivedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseReceivedItem"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      purchaseItem: Prisma.$PurchaseItemPayload<ExtArgs>
      receiving: Prisma.$PurchaseReceivingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      purchaseItemId: string
      receivingId: string
      serialNumber: string | null
      imei1: string | null
      imei2: string | null
      condition: $Enums.ReceivingItemCondition
      actualSpecs: string | null
      unitAcquisitionCost: number
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["purchaseReceivedItem"]>
    composites: {}
  }

  type PurchaseReceivedItemGetPayload<S extends boolean | null | undefined | PurchaseReceivedItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseReceivedItemPayload, S>

  type PurchaseReceivedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseReceivedItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseReceivedItemCountAggregateInputType | true
    }

  export interface PurchaseReceivedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseReceivedItem'], meta: { name: 'PurchaseReceivedItem' } }
    /**
     * Find zero or one PurchaseReceivedItem that matches the filter.
     * @param {PurchaseReceivedItemFindUniqueArgs} args - Arguments to find a PurchaseReceivedItem
     * @example
     * // Get one PurchaseReceivedItem
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseReceivedItemFindUniqueArgs>(args: SelectSubset<T, PurchaseReceivedItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseReceivedItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseReceivedItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseReceivedItem
     * @example
     * // Get one PurchaseReceivedItem
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseReceivedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseReceivedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseReceivedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemFindFirstArgs} args - Arguments to find a PurchaseReceivedItem
     * @example
     * // Get one PurchaseReceivedItem
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseReceivedItemFindFirstArgs>(args?: SelectSubset<T, PurchaseReceivedItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseReceivedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseReceivedItem
     * @example
     * // Get one PurchaseReceivedItem
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseReceivedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseReceivedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseReceivedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseReceivedItems
     * const purchaseReceivedItems = await prisma.purchaseReceivedItem.findMany()
     * 
     * // Get first 10 PurchaseReceivedItems
     * const purchaseReceivedItems = await prisma.purchaseReceivedItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseReceivedItemWithIdOnly = await prisma.purchaseReceivedItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseReceivedItemFindManyArgs>(args?: SelectSubset<T, PurchaseReceivedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseReceivedItem.
     * @param {PurchaseReceivedItemCreateArgs} args - Arguments to create a PurchaseReceivedItem.
     * @example
     * // Create one PurchaseReceivedItem
     * const PurchaseReceivedItem = await prisma.purchaseReceivedItem.create({
     *   data: {
     *     // ... data to create a PurchaseReceivedItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseReceivedItemCreateArgs>(args: SelectSubset<T, PurchaseReceivedItemCreateArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseReceivedItems.
     * @param {PurchaseReceivedItemCreateManyArgs} args - Arguments to create many PurchaseReceivedItems.
     * @example
     * // Create many PurchaseReceivedItems
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseReceivedItemCreateManyArgs>(args?: SelectSubset<T, PurchaseReceivedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseReceivedItems and returns the data saved in the database.
     * @param {PurchaseReceivedItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseReceivedItems.
     * @example
     * // Create many PurchaseReceivedItems
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseReceivedItems and only return the `id`
     * const purchaseReceivedItemWithIdOnly = await prisma.purchaseReceivedItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseReceivedItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseReceivedItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseReceivedItem.
     * @param {PurchaseReceivedItemDeleteArgs} args - Arguments to delete one PurchaseReceivedItem.
     * @example
     * // Delete one PurchaseReceivedItem
     * const PurchaseReceivedItem = await prisma.purchaseReceivedItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseReceivedItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseReceivedItemDeleteArgs>(args: SelectSubset<T, PurchaseReceivedItemDeleteArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseReceivedItem.
     * @param {PurchaseReceivedItemUpdateArgs} args - Arguments to update one PurchaseReceivedItem.
     * @example
     * // Update one PurchaseReceivedItem
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseReceivedItemUpdateArgs>(args: SelectSubset<T, PurchaseReceivedItemUpdateArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseReceivedItems.
     * @param {PurchaseReceivedItemDeleteManyArgs} args - Arguments to filter PurchaseReceivedItems to delete.
     * @example
     * // Delete a few PurchaseReceivedItems
     * const { count } = await prisma.purchaseReceivedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseReceivedItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseReceivedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseReceivedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseReceivedItems
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseReceivedItemUpdateManyArgs>(args: SelectSubset<T, PurchaseReceivedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseReceivedItem.
     * @param {PurchaseReceivedItemUpsertArgs} args - Arguments to update or create a PurchaseReceivedItem.
     * @example
     * // Update or create a PurchaseReceivedItem
     * const purchaseReceivedItem = await prisma.purchaseReceivedItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseReceivedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseReceivedItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseReceivedItemUpsertArgs>(args: SelectSubset<T, PurchaseReceivedItemUpsertArgs<ExtArgs>>): Prisma__PurchaseReceivedItemClient<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseReceivedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemCountArgs} args - Arguments to filter PurchaseReceivedItems to count.
     * @example
     * // Count the number of PurchaseReceivedItems
     * const count = await prisma.purchaseReceivedItem.count({
     *   where: {
     *     // ... the filter for the PurchaseReceivedItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseReceivedItemCountArgs>(
      args?: Subset<T, PurchaseReceivedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseReceivedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseReceivedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseReceivedItemAggregateArgs>(args: Subset<T, PurchaseReceivedItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseReceivedItemAggregateType<T>>

    /**
     * Group by PurchaseReceivedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivedItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseReceivedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseReceivedItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseReceivedItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseReceivedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseReceivedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseReceivedItem model
   */
  readonly fields: PurchaseReceivedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseReceivedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseReceivedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    purchaseItem<T extends PurchaseItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseItemDefaultArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receiving<T extends PurchaseReceivingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReceivingDefaultArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseReceivedItem model
   */ 
  interface PurchaseReceivedItemFieldRefs {
    readonly id: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly purchaseId: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly purchaseItemId: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly receivingId: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly serialNumber: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly imei1: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly imei2: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly condition: FieldRef<"PurchaseReceivedItem", 'ReceivingItemCondition'>
    readonly actualSpecs: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly unitAcquisitionCost: FieldRef<"PurchaseReceivedItem", 'Float'>
    readonly notes: FieldRef<"PurchaseReceivedItem", 'String'>
    readonly createdAt: FieldRef<"PurchaseReceivedItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseReceivedItem findUnique
   */
  export type PurchaseReceivedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceivedItem to fetch.
     */
    where: PurchaseReceivedItemWhereUniqueInput
  }

  /**
   * PurchaseReceivedItem findUniqueOrThrow
   */
  export type PurchaseReceivedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceivedItem to fetch.
     */
    where: PurchaseReceivedItemWhereUniqueInput
  }

  /**
   * PurchaseReceivedItem findFirst
   */
  export type PurchaseReceivedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceivedItem to fetch.
     */
    where?: PurchaseReceivedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivedItems to fetch.
     */
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReceivedItems.
     */
    cursor?: PurchaseReceivedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReceivedItems.
     */
    distinct?: PurchaseReceivedItemScalarFieldEnum | PurchaseReceivedItemScalarFieldEnum[]
  }

  /**
   * PurchaseReceivedItem findFirstOrThrow
   */
  export type PurchaseReceivedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceivedItem to fetch.
     */
    where?: PurchaseReceivedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivedItems to fetch.
     */
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReceivedItems.
     */
    cursor?: PurchaseReceivedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReceivedItems.
     */
    distinct?: PurchaseReceivedItemScalarFieldEnum | PurchaseReceivedItemScalarFieldEnum[]
  }

  /**
   * PurchaseReceivedItem findMany
   */
  export type PurchaseReceivedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceivedItems to fetch.
     */
    where?: PurchaseReceivedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivedItems to fetch.
     */
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseReceivedItems.
     */
    cursor?: PurchaseReceivedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivedItems.
     */
    skip?: number
    distinct?: PurchaseReceivedItemScalarFieldEnum | PurchaseReceivedItemScalarFieldEnum[]
  }

  /**
   * PurchaseReceivedItem create
   */
  export type PurchaseReceivedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseReceivedItem.
     */
    data: XOR<PurchaseReceivedItemCreateInput, PurchaseReceivedItemUncheckedCreateInput>
  }

  /**
   * PurchaseReceivedItem createMany
   */
  export type PurchaseReceivedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseReceivedItems.
     */
    data: PurchaseReceivedItemCreateManyInput | PurchaseReceivedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseReceivedItem createManyAndReturn
   */
  export type PurchaseReceivedItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseReceivedItems.
     */
    data: PurchaseReceivedItemCreateManyInput | PurchaseReceivedItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseReceivedItem update
   */
  export type PurchaseReceivedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseReceivedItem.
     */
    data: XOR<PurchaseReceivedItemUpdateInput, PurchaseReceivedItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseReceivedItem to update.
     */
    where: PurchaseReceivedItemWhereUniqueInput
  }

  /**
   * PurchaseReceivedItem updateMany
   */
  export type PurchaseReceivedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseReceivedItems.
     */
    data: XOR<PurchaseReceivedItemUpdateManyMutationInput, PurchaseReceivedItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseReceivedItems to update
     */
    where?: PurchaseReceivedItemWhereInput
  }

  /**
   * PurchaseReceivedItem upsert
   */
  export type PurchaseReceivedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseReceivedItem to update in case it exists.
     */
    where: PurchaseReceivedItemWhereUniqueInput
    /**
     * In case the PurchaseReceivedItem found by the `where` argument doesn't exist, create a new PurchaseReceivedItem with this data.
     */
    create: XOR<PurchaseReceivedItemCreateInput, PurchaseReceivedItemUncheckedCreateInput>
    /**
     * In case the PurchaseReceivedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseReceivedItemUpdateInput, PurchaseReceivedItemUncheckedUpdateInput>
  }

  /**
   * PurchaseReceivedItem delete
   */
  export type PurchaseReceivedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseReceivedItem to delete.
     */
    where: PurchaseReceivedItemWhereUniqueInput
  }

  /**
   * PurchaseReceivedItem deleteMany
   */
  export type PurchaseReceivedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReceivedItems to delete
     */
    where?: PurchaseReceivedItemWhereInput
  }

  /**
   * PurchaseReceivedItem without action
   */
  export type PurchaseReceivedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseReceiving
   */

  export type AggregatePurchaseReceiving = {
    _count: PurchaseReceivingCountAggregateOutputType | null
    _min: PurchaseReceivingMinAggregateOutputType | null
    _max: PurchaseReceivingMaxAggregateOutputType | null
  }

  export type PurchaseReceivingMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    receivingNumber: string | null
    receivedById: string | null
    receivedAt: Date | null
    receivedAtShop: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseReceivingMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    receivingNumber: string | null
    receivedById: string | null
    receivedAt: Date | null
    receivedAtShop: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseReceivingCountAggregateOutputType = {
    id: number
    purchaseId: number
    receivingNumber: number
    receivedById: number
    receivedAt: number
    receivedAtShop: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseReceivingMinAggregateInputType = {
    id?: true
    purchaseId?: true
    receivingNumber?: true
    receivedById?: true
    receivedAt?: true
    receivedAtShop?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseReceivingMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    receivingNumber?: true
    receivedById?: true
    receivedAt?: true
    receivedAtShop?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseReceivingCountAggregateInputType = {
    id?: true
    purchaseId?: true
    receivingNumber?: true
    receivedById?: true
    receivedAt?: true
    receivedAtShop?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseReceivingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReceiving to aggregate.
     */
    where?: PurchaseReceivingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivings to fetch.
     */
    orderBy?: PurchaseReceivingOrderByWithRelationInput | PurchaseReceivingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseReceivingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseReceivings
    **/
    _count?: true | PurchaseReceivingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseReceivingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseReceivingMaxAggregateInputType
  }

  export type GetPurchaseReceivingAggregateType<T extends PurchaseReceivingAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseReceiving]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseReceiving[P]>
      : GetScalarType<T[P], AggregatePurchaseReceiving[P]>
  }




  export type PurchaseReceivingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReceivingWhereInput
    orderBy?: PurchaseReceivingOrderByWithAggregationInput | PurchaseReceivingOrderByWithAggregationInput[]
    by: PurchaseReceivingScalarFieldEnum[] | PurchaseReceivingScalarFieldEnum
    having?: PurchaseReceivingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseReceivingCountAggregateInputType | true
    _min?: PurchaseReceivingMinAggregateInputType
    _max?: PurchaseReceivingMaxAggregateInputType
  }

  export type PurchaseReceivingGroupByOutputType = {
    id: string
    purchaseId: string
    receivingNumber: string
    receivedById: string
    receivedAt: Date
    receivedAtShop: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PurchaseReceivingCountAggregateOutputType | null
    _min: PurchaseReceivingMinAggregateOutputType | null
    _max: PurchaseReceivingMaxAggregateOutputType | null
  }

  type GetPurchaseReceivingGroupByPayload<T extends PurchaseReceivingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseReceivingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseReceivingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseReceivingGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseReceivingGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseReceivingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    receivingNumber?: boolean
    receivedById?: boolean
    receivedAt?: boolean
    receivedAtShop?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    receivedItems?: boolean | PurchaseReceiving$receivedItemsArgs<ExtArgs>
    _count?: boolean | PurchaseReceivingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReceiving"]>

  export type PurchaseReceivingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    receivingNumber?: boolean
    receivedById?: boolean
    receivedAt?: boolean
    receivedAtShop?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReceiving"]>

  export type PurchaseReceivingSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    receivingNumber?: boolean
    receivedById?: boolean
    receivedAt?: boolean
    receivedAtShop?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseReceivingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    receivedItems?: boolean | PurchaseReceiving$receivedItemsArgs<ExtArgs>
    _count?: boolean | PurchaseReceivingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseReceivingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchaseReceivingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseReceiving"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      receivedItems: Prisma.$PurchaseReceivedItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      receivingNumber: string
      receivedById: string
      receivedAt: Date
      receivedAtShop: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseReceiving"]>
    composites: {}
  }

  type PurchaseReceivingGetPayload<S extends boolean | null | undefined | PurchaseReceivingDefaultArgs> = $Result.GetResult<Prisma.$PurchaseReceivingPayload, S>

  type PurchaseReceivingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseReceivingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseReceivingCountAggregateInputType | true
    }

  export interface PurchaseReceivingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseReceiving'], meta: { name: 'PurchaseReceiving' } }
    /**
     * Find zero or one PurchaseReceiving that matches the filter.
     * @param {PurchaseReceivingFindUniqueArgs} args - Arguments to find a PurchaseReceiving
     * @example
     * // Get one PurchaseReceiving
     * const purchaseReceiving = await prisma.purchaseReceiving.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseReceivingFindUniqueArgs>(args: SelectSubset<T, PurchaseReceivingFindUniqueArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseReceiving that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseReceivingFindUniqueOrThrowArgs} args - Arguments to find a PurchaseReceiving
     * @example
     * // Get one PurchaseReceiving
     * const purchaseReceiving = await prisma.purchaseReceiving.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseReceivingFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseReceivingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseReceiving that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingFindFirstArgs} args - Arguments to find a PurchaseReceiving
     * @example
     * // Get one PurchaseReceiving
     * const purchaseReceiving = await prisma.purchaseReceiving.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseReceivingFindFirstArgs>(args?: SelectSubset<T, PurchaseReceivingFindFirstArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseReceiving that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingFindFirstOrThrowArgs} args - Arguments to find a PurchaseReceiving
     * @example
     * // Get one PurchaseReceiving
     * const purchaseReceiving = await prisma.purchaseReceiving.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseReceivingFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseReceivingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseReceivings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseReceivings
     * const purchaseReceivings = await prisma.purchaseReceiving.findMany()
     * 
     * // Get first 10 PurchaseReceivings
     * const purchaseReceivings = await prisma.purchaseReceiving.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseReceivingWithIdOnly = await prisma.purchaseReceiving.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseReceivingFindManyArgs>(args?: SelectSubset<T, PurchaseReceivingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseReceiving.
     * @param {PurchaseReceivingCreateArgs} args - Arguments to create a PurchaseReceiving.
     * @example
     * // Create one PurchaseReceiving
     * const PurchaseReceiving = await prisma.purchaseReceiving.create({
     *   data: {
     *     // ... data to create a PurchaseReceiving
     *   }
     * })
     * 
     */
    create<T extends PurchaseReceivingCreateArgs>(args: SelectSubset<T, PurchaseReceivingCreateArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseReceivings.
     * @param {PurchaseReceivingCreateManyArgs} args - Arguments to create many PurchaseReceivings.
     * @example
     * // Create many PurchaseReceivings
     * const purchaseReceiving = await prisma.purchaseReceiving.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseReceivingCreateManyArgs>(args?: SelectSubset<T, PurchaseReceivingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseReceivings and returns the data saved in the database.
     * @param {PurchaseReceivingCreateManyAndReturnArgs} args - Arguments to create many PurchaseReceivings.
     * @example
     * // Create many PurchaseReceivings
     * const purchaseReceiving = await prisma.purchaseReceiving.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseReceivings and only return the `id`
     * const purchaseReceivingWithIdOnly = await prisma.purchaseReceiving.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseReceivingCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseReceivingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseReceiving.
     * @param {PurchaseReceivingDeleteArgs} args - Arguments to delete one PurchaseReceiving.
     * @example
     * // Delete one PurchaseReceiving
     * const PurchaseReceiving = await prisma.purchaseReceiving.delete({
     *   where: {
     *     // ... filter to delete one PurchaseReceiving
     *   }
     * })
     * 
     */
    delete<T extends PurchaseReceivingDeleteArgs>(args: SelectSubset<T, PurchaseReceivingDeleteArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseReceiving.
     * @param {PurchaseReceivingUpdateArgs} args - Arguments to update one PurchaseReceiving.
     * @example
     * // Update one PurchaseReceiving
     * const purchaseReceiving = await prisma.purchaseReceiving.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseReceivingUpdateArgs>(args: SelectSubset<T, PurchaseReceivingUpdateArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseReceivings.
     * @param {PurchaseReceivingDeleteManyArgs} args - Arguments to filter PurchaseReceivings to delete.
     * @example
     * // Delete a few PurchaseReceivings
     * const { count } = await prisma.purchaseReceiving.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseReceivingDeleteManyArgs>(args?: SelectSubset<T, PurchaseReceivingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseReceivings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseReceivings
     * const purchaseReceiving = await prisma.purchaseReceiving.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseReceivingUpdateManyArgs>(args: SelectSubset<T, PurchaseReceivingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseReceiving.
     * @param {PurchaseReceivingUpsertArgs} args - Arguments to update or create a PurchaseReceiving.
     * @example
     * // Update or create a PurchaseReceiving
     * const purchaseReceiving = await prisma.purchaseReceiving.upsert({
     *   create: {
     *     // ... data to create a PurchaseReceiving
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseReceiving we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseReceivingUpsertArgs>(args: SelectSubset<T, PurchaseReceivingUpsertArgs<ExtArgs>>): Prisma__PurchaseReceivingClient<$Result.GetResult<Prisma.$PurchaseReceivingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseReceivings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingCountArgs} args - Arguments to filter PurchaseReceivings to count.
     * @example
     * // Count the number of PurchaseReceivings
     * const count = await prisma.purchaseReceiving.count({
     *   where: {
     *     // ... the filter for the PurchaseReceivings we want to count
     *   }
     * })
    **/
    count<T extends PurchaseReceivingCountArgs>(
      args?: Subset<T, PurchaseReceivingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseReceivingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseReceiving.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseReceivingAggregateArgs>(args: Subset<T, PurchaseReceivingAggregateArgs>): Prisma.PrismaPromise<GetPurchaseReceivingAggregateType<T>>

    /**
     * Group by PurchaseReceiving.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReceivingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseReceivingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseReceivingGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseReceivingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseReceivingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseReceivingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseReceiving model
   */
  readonly fields: PurchaseReceivingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseReceiving.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseReceivingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receivedItems<T extends PurchaseReceiving$receivedItemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReceiving$receivedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReceivedItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseReceiving model
   */ 
  interface PurchaseReceivingFieldRefs {
    readonly id: FieldRef<"PurchaseReceiving", 'String'>
    readonly purchaseId: FieldRef<"PurchaseReceiving", 'String'>
    readonly receivingNumber: FieldRef<"PurchaseReceiving", 'String'>
    readonly receivedById: FieldRef<"PurchaseReceiving", 'String'>
    readonly receivedAt: FieldRef<"PurchaseReceiving", 'DateTime'>
    readonly receivedAtShop: FieldRef<"PurchaseReceiving", 'String'>
    readonly notes: FieldRef<"PurchaseReceiving", 'String'>
    readonly createdAt: FieldRef<"PurchaseReceiving", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseReceiving", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseReceiving findUnique
   */
  export type PurchaseReceivingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceiving to fetch.
     */
    where: PurchaseReceivingWhereUniqueInput
  }

  /**
   * PurchaseReceiving findUniqueOrThrow
   */
  export type PurchaseReceivingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceiving to fetch.
     */
    where: PurchaseReceivingWhereUniqueInput
  }

  /**
   * PurchaseReceiving findFirst
   */
  export type PurchaseReceivingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceiving to fetch.
     */
    where?: PurchaseReceivingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivings to fetch.
     */
    orderBy?: PurchaseReceivingOrderByWithRelationInput | PurchaseReceivingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReceivings.
     */
    cursor?: PurchaseReceivingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReceivings.
     */
    distinct?: PurchaseReceivingScalarFieldEnum | PurchaseReceivingScalarFieldEnum[]
  }

  /**
   * PurchaseReceiving findFirstOrThrow
   */
  export type PurchaseReceivingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceiving to fetch.
     */
    where?: PurchaseReceivingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivings to fetch.
     */
    orderBy?: PurchaseReceivingOrderByWithRelationInput | PurchaseReceivingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReceivings.
     */
    cursor?: PurchaseReceivingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReceivings.
     */
    distinct?: PurchaseReceivingScalarFieldEnum | PurchaseReceivingScalarFieldEnum[]
  }

  /**
   * PurchaseReceiving findMany
   */
  export type PurchaseReceivingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReceivings to fetch.
     */
    where?: PurchaseReceivingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReceivings to fetch.
     */
    orderBy?: PurchaseReceivingOrderByWithRelationInput | PurchaseReceivingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseReceivings.
     */
    cursor?: PurchaseReceivingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReceivings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReceivings.
     */
    skip?: number
    distinct?: PurchaseReceivingScalarFieldEnum | PurchaseReceivingScalarFieldEnum[]
  }

  /**
   * PurchaseReceiving create
   */
  export type PurchaseReceivingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseReceiving.
     */
    data: XOR<PurchaseReceivingCreateInput, PurchaseReceivingUncheckedCreateInput>
  }

  /**
   * PurchaseReceiving createMany
   */
  export type PurchaseReceivingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseReceivings.
     */
    data: PurchaseReceivingCreateManyInput | PurchaseReceivingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseReceiving createManyAndReturn
   */
  export type PurchaseReceivingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseReceivings.
     */
    data: PurchaseReceivingCreateManyInput | PurchaseReceivingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseReceiving update
   */
  export type PurchaseReceivingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseReceiving.
     */
    data: XOR<PurchaseReceivingUpdateInput, PurchaseReceivingUncheckedUpdateInput>
    /**
     * Choose, which PurchaseReceiving to update.
     */
    where: PurchaseReceivingWhereUniqueInput
  }

  /**
   * PurchaseReceiving updateMany
   */
  export type PurchaseReceivingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseReceivings.
     */
    data: XOR<PurchaseReceivingUpdateManyMutationInput, PurchaseReceivingUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseReceivings to update
     */
    where?: PurchaseReceivingWhereInput
  }

  /**
   * PurchaseReceiving upsert
   */
  export type PurchaseReceivingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseReceiving to update in case it exists.
     */
    where: PurchaseReceivingWhereUniqueInput
    /**
     * In case the PurchaseReceiving found by the `where` argument doesn't exist, create a new PurchaseReceiving with this data.
     */
    create: XOR<PurchaseReceivingCreateInput, PurchaseReceivingUncheckedCreateInput>
    /**
     * In case the PurchaseReceiving was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseReceivingUpdateInput, PurchaseReceivingUncheckedUpdateInput>
  }

  /**
   * PurchaseReceiving delete
   */
  export type PurchaseReceivingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
    /**
     * Filter which PurchaseReceiving to delete.
     */
    where: PurchaseReceivingWhereUniqueInput
  }

  /**
   * PurchaseReceiving deleteMany
   */
  export type PurchaseReceivingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReceivings to delete
     */
    where?: PurchaseReceivingWhereInput
  }

  /**
   * PurchaseReceiving.receivedItems
   */
  export type PurchaseReceiving$receivedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceivedItem
     */
    select?: PurchaseReceivedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivedItemInclude<ExtArgs> | null
    where?: PurchaseReceivedItemWhereInput
    orderBy?: PurchaseReceivedItemOrderByWithRelationInput | PurchaseReceivedItemOrderByWithRelationInput[]
    cursor?: PurchaseReceivedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReceivedItemScalarFieldEnum | PurchaseReceivedItemScalarFieldEnum[]
  }

  /**
   * PurchaseReceiving without action
   */
  export type PurchaseReceivingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReceiving
     */
    select?: PurchaseReceivingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReceivingInclude<ExtArgs> | null
  }


  /**
   * Model PurchasePayment
   */

  export type AggregatePurchasePayment = {
    _count: PurchasePaymentCountAggregateOutputType | null
    _avg: PurchasePaymentAvgAggregateOutputType | null
    _sum: PurchasePaymentSumAggregateOutputType | null
    _min: PurchasePaymentMinAggregateOutputType | null
    _max: PurchasePaymentMaxAggregateOutputType | null
  }

  export type PurchasePaymentAvgAggregateOutputType = {
    amount: number | null
    exchangeRate: number | null
  }

  export type PurchasePaymentSumAggregateOutputType = {
    amount: number | null
    exchangeRate: number | null
  }

  export type PurchasePaymentMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    paymentNumber: string | null
    amount: number | null
    currency: string | null
    exchangeRate: number | null
    paymentMethod: $Enums.PaymentMethod | null
    accountId: string | null
    accountName: string | null
    reference: string | null
    paidById: string | null
    paidAt: Date | null
    notes: string | null
    accountingRef: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchasePaymentMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    paymentNumber: string | null
    amount: number | null
    currency: string | null
    exchangeRate: number | null
    paymentMethod: $Enums.PaymentMethod | null
    accountId: string | null
    accountName: string | null
    reference: string | null
    paidById: string | null
    paidAt: Date | null
    notes: string | null
    accountingRef: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchasePaymentCountAggregateOutputType = {
    id: number
    purchaseId: number
    paymentNumber: number
    amount: number
    currency: number
    exchangeRate: number
    paymentMethod: number
    accountId: number
    accountName: number
    reference: number
    paidById: number
    paidAt: number
    notes: number
    accountingRef: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchasePaymentAvgAggregateInputType = {
    amount?: true
    exchangeRate?: true
  }

  export type PurchasePaymentSumAggregateInputType = {
    amount?: true
    exchangeRate?: true
  }

  export type PurchasePaymentMinAggregateInputType = {
    id?: true
    purchaseId?: true
    paymentNumber?: true
    amount?: true
    currency?: true
    exchangeRate?: true
    paymentMethod?: true
    accountId?: true
    accountName?: true
    reference?: true
    paidById?: true
    paidAt?: true
    notes?: true
    accountingRef?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchasePaymentMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    paymentNumber?: true
    amount?: true
    currency?: true
    exchangeRate?: true
    paymentMethod?: true
    accountId?: true
    accountName?: true
    reference?: true
    paidById?: true
    paidAt?: true
    notes?: true
    accountingRef?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchasePaymentCountAggregateInputType = {
    id?: true
    purchaseId?: true
    paymentNumber?: true
    amount?: true
    currency?: true
    exchangeRate?: true
    paymentMethod?: true
    accountId?: true
    accountName?: true
    reference?: true
    paidById?: true
    paidAt?: true
    notes?: true
    accountingRef?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchasePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasePayment to aggregate.
     */
    where?: PurchasePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasePayments to fetch.
     */
    orderBy?: PurchasePaymentOrderByWithRelationInput | PurchasePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchasePayments
    **/
    _count?: true | PurchasePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchasePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchasePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasePaymentMaxAggregateInputType
  }

  export type GetPurchasePaymentAggregateType<T extends PurchasePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchasePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchasePayment[P]>
      : GetScalarType<T[P], AggregatePurchasePayment[P]>
  }




  export type PurchasePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasePaymentWhereInput
    orderBy?: PurchasePaymentOrderByWithAggregationInput | PurchasePaymentOrderByWithAggregationInput[]
    by: PurchasePaymentScalarFieldEnum[] | PurchasePaymentScalarFieldEnum
    having?: PurchasePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasePaymentCountAggregateInputType | true
    _avg?: PurchasePaymentAvgAggregateInputType
    _sum?: PurchasePaymentSumAggregateInputType
    _min?: PurchasePaymentMinAggregateInputType
    _max?: PurchasePaymentMaxAggregateInputType
  }

  export type PurchasePaymentGroupByOutputType = {
    id: string
    purchaseId: string
    paymentNumber: string
    amount: number
    currency: string
    exchangeRate: number
    paymentMethod: $Enums.PaymentMethod
    accountId: string | null
    accountName: string | null
    reference: string | null
    paidById: string
    paidAt: Date
    notes: string | null
    accountingRef: string | null
    createdAt: Date
    updatedAt: Date
    _count: PurchasePaymentCountAggregateOutputType | null
    _avg: PurchasePaymentAvgAggregateOutputType | null
    _sum: PurchasePaymentSumAggregateOutputType | null
    _min: PurchasePaymentMinAggregateOutputType | null
    _max: PurchasePaymentMaxAggregateOutputType | null
  }

  type GetPurchasePaymentGroupByPayload<T extends PurchasePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasePaymentGroupByOutputType[P]>
        }
      >
    >


  export type PurchasePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    paymentNumber?: boolean
    amount?: boolean
    currency?: boolean
    exchangeRate?: boolean
    paymentMethod?: boolean
    accountId?: boolean
    accountName?: boolean
    reference?: boolean
    paidById?: boolean
    paidAt?: boolean
    notes?: boolean
    accountingRef?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasePayment"]>

  export type PurchasePaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    paymentNumber?: boolean
    amount?: boolean
    currency?: boolean
    exchangeRate?: boolean
    paymentMethod?: boolean
    accountId?: boolean
    accountName?: boolean
    reference?: boolean
    paidById?: boolean
    paidAt?: boolean
    notes?: boolean
    accountingRef?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasePayment"]>

  export type PurchasePaymentSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    paymentNumber?: boolean
    amount?: boolean
    currency?: boolean
    exchangeRate?: boolean
    paymentMethod?: boolean
    accountId?: boolean
    accountName?: boolean
    reference?: boolean
    paidById?: boolean
    paidAt?: boolean
    notes?: boolean
    accountingRef?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchasePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PurchasePaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchasePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchasePayment"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      paymentNumber: string
      amount: number
      currency: string
      exchangeRate: number
      paymentMethod: $Enums.PaymentMethod
      accountId: string | null
      accountName: string | null
      reference: string | null
      paidById: string
      paidAt: Date
      notes: string | null
      accountingRef: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchasePayment"]>
    composites: {}
  }

  type PurchasePaymentGetPayload<S extends boolean | null | undefined | PurchasePaymentDefaultArgs> = $Result.GetResult<Prisma.$PurchasePaymentPayload, S>

  type PurchasePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchasePaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchasePaymentCountAggregateInputType | true
    }

  export interface PurchasePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchasePayment'], meta: { name: 'PurchasePayment' } }
    /**
     * Find zero or one PurchasePayment that matches the filter.
     * @param {PurchasePaymentFindUniqueArgs} args - Arguments to find a PurchasePayment
     * @example
     * // Get one PurchasePayment
     * const purchasePayment = await prisma.purchasePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasePaymentFindUniqueArgs>(args: SelectSubset<T, PurchasePaymentFindUniqueArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchasePayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchasePaymentFindUniqueOrThrowArgs} args - Arguments to find a PurchasePayment
     * @example
     * // Get one PurchasePayment
     * const purchasePayment = await prisma.purchasePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchasePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentFindFirstArgs} args - Arguments to find a PurchasePayment
     * @example
     * // Get one PurchasePayment
     * const purchasePayment = await prisma.purchasePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasePaymentFindFirstArgs>(args?: SelectSubset<T, PurchasePaymentFindFirstArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchasePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentFindFirstOrThrowArgs} args - Arguments to find a PurchasePayment
     * @example
     * // Get one PurchasePayment
     * const purchasePayment = await prisma.purchasePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchasePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchasePayments
     * const purchasePayments = await prisma.purchasePayment.findMany()
     * 
     * // Get first 10 PurchasePayments
     * const purchasePayments = await prisma.purchasePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasePaymentWithIdOnly = await prisma.purchasePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchasePaymentFindManyArgs>(args?: SelectSubset<T, PurchasePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchasePayment.
     * @param {PurchasePaymentCreateArgs} args - Arguments to create a PurchasePayment.
     * @example
     * // Create one PurchasePayment
     * const PurchasePayment = await prisma.purchasePayment.create({
     *   data: {
     *     // ... data to create a PurchasePayment
     *   }
     * })
     * 
     */
    create<T extends PurchasePaymentCreateArgs>(args: SelectSubset<T, PurchasePaymentCreateArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchasePayments.
     * @param {PurchasePaymentCreateManyArgs} args - Arguments to create many PurchasePayments.
     * @example
     * // Create many PurchasePayments
     * const purchasePayment = await prisma.purchasePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasePaymentCreateManyArgs>(args?: SelectSubset<T, PurchasePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchasePayments and returns the data saved in the database.
     * @param {PurchasePaymentCreateManyAndReturnArgs} args - Arguments to create many PurchasePayments.
     * @example
     * // Create many PurchasePayments
     * const purchasePayment = await prisma.purchasePayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchasePayments and only return the `id`
     * const purchasePaymentWithIdOnly = await prisma.purchasePayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchasePaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchasePaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchasePayment.
     * @param {PurchasePaymentDeleteArgs} args - Arguments to delete one PurchasePayment.
     * @example
     * // Delete one PurchasePayment
     * const PurchasePayment = await prisma.purchasePayment.delete({
     *   where: {
     *     // ... filter to delete one PurchasePayment
     *   }
     * })
     * 
     */
    delete<T extends PurchasePaymentDeleteArgs>(args: SelectSubset<T, PurchasePaymentDeleteArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchasePayment.
     * @param {PurchasePaymentUpdateArgs} args - Arguments to update one PurchasePayment.
     * @example
     * // Update one PurchasePayment
     * const purchasePayment = await prisma.purchasePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasePaymentUpdateArgs>(args: SelectSubset<T, PurchasePaymentUpdateArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchasePayments.
     * @param {PurchasePaymentDeleteManyArgs} args - Arguments to filter PurchasePayments to delete.
     * @example
     * // Delete a few PurchasePayments
     * const { count } = await prisma.purchasePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasePaymentDeleteManyArgs>(args?: SelectSubset<T, PurchasePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchasePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchasePayments
     * const purchasePayment = await prisma.purchasePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasePaymentUpdateManyArgs>(args: SelectSubset<T, PurchasePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchasePayment.
     * @param {PurchasePaymentUpsertArgs} args - Arguments to update or create a PurchasePayment.
     * @example
     * // Update or create a PurchasePayment
     * const purchasePayment = await prisma.purchasePayment.upsert({
     *   create: {
     *     // ... data to create a PurchasePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchasePayment we want to update
     *   }
     * })
     */
    upsert<T extends PurchasePaymentUpsertArgs>(args: SelectSubset<T, PurchasePaymentUpsertArgs<ExtArgs>>): Prisma__PurchasePaymentClient<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchasePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentCountArgs} args - Arguments to filter PurchasePayments to count.
     * @example
     * // Count the number of PurchasePayments
     * const count = await prisma.purchasePayment.count({
     *   where: {
     *     // ... the filter for the PurchasePayments we want to count
     *   }
     * })
    **/
    count<T extends PurchasePaymentCountArgs>(
      args?: Subset<T, PurchasePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchasePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchasePaymentAggregateArgs>(args: Subset<T, PurchasePaymentAggregateArgs>): Prisma.PrismaPromise<GetPurchasePaymentAggregateType<T>>

    /**
     * Group by PurchasePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasePaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchasePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasePaymentGroupByArgs['orderBy'] }
        : { orderBy?: PurchasePaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchasePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchasePayment model
   */
  readonly fields: PurchasePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchasePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchasePayment model
   */ 
  interface PurchasePaymentFieldRefs {
    readonly id: FieldRef<"PurchasePayment", 'String'>
    readonly purchaseId: FieldRef<"PurchasePayment", 'String'>
    readonly paymentNumber: FieldRef<"PurchasePayment", 'String'>
    readonly amount: FieldRef<"PurchasePayment", 'Float'>
    readonly currency: FieldRef<"PurchasePayment", 'String'>
    readonly exchangeRate: FieldRef<"PurchasePayment", 'Float'>
    readonly paymentMethod: FieldRef<"PurchasePayment", 'PaymentMethod'>
    readonly accountId: FieldRef<"PurchasePayment", 'String'>
    readonly accountName: FieldRef<"PurchasePayment", 'String'>
    readonly reference: FieldRef<"PurchasePayment", 'String'>
    readonly paidById: FieldRef<"PurchasePayment", 'String'>
    readonly paidAt: FieldRef<"PurchasePayment", 'DateTime'>
    readonly notes: FieldRef<"PurchasePayment", 'String'>
    readonly accountingRef: FieldRef<"PurchasePayment", 'String'>
    readonly createdAt: FieldRef<"PurchasePayment", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchasePayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchasePayment findUnique
   */
  export type PurchasePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PurchasePayment to fetch.
     */
    where: PurchasePaymentWhereUniqueInput
  }

  /**
   * PurchasePayment findUniqueOrThrow
   */
  export type PurchasePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PurchasePayment to fetch.
     */
    where: PurchasePaymentWhereUniqueInput
  }

  /**
   * PurchasePayment findFirst
   */
  export type PurchasePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PurchasePayment to fetch.
     */
    where?: PurchasePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasePayments to fetch.
     */
    orderBy?: PurchasePaymentOrderByWithRelationInput | PurchasePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasePayments.
     */
    cursor?: PurchasePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasePayments.
     */
    distinct?: PurchasePaymentScalarFieldEnum | PurchasePaymentScalarFieldEnum[]
  }

  /**
   * PurchasePayment findFirstOrThrow
   */
  export type PurchasePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PurchasePayment to fetch.
     */
    where?: PurchasePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasePayments to fetch.
     */
    orderBy?: PurchasePaymentOrderByWithRelationInput | PurchasePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasePayments.
     */
    cursor?: PurchasePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasePayments.
     */
    distinct?: PurchasePaymentScalarFieldEnum | PurchasePaymentScalarFieldEnum[]
  }

  /**
   * PurchasePayment findMany
   */
  export type PurchasePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PurchasePayments to fetch.
     */
    where?: PurchasePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasePayments to fetch.
     */
    orderBy?: PurchasePaymentOrderByWithRelationInput | PurchasePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchasePayments.
     */
    cursor?: PurchasePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasePayments.
     */
    skip?: number
    distinct?: PurchasePaymentScalarFieldEnum | PurchasePaymentScalarFieldEnum[]
  }

  /**
   * PurchasePayment create
   */
  export type PurchasePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchasePayment.
     */
    data: XOR<PurchasePaymentCreateInput, PurchasePaymentUncheckedCreateInput>
  }

  /**
   * PurchasePayment createMany
   */
  export type PurchasePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchasePayments.
     */
    data: PurchasePaymentCreateManyInput | PurchasePaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchasePayment createManyAndReturn
   */
  export type PurchasePaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchasePayments.
     */
    data: PurchasePaymentCreateManyInput | PurchasePaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchasePayment update
   */
  export type PurchasePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchasePayment.
     */
    data: XOR<PurchasePaymentUpdateInput, PurchasePaymentUncheckedUpdateInput>
    /**
     * Choose, which PurchasePayment to update.
     */
    where: PurchasePaymentWhereUniqueInput
  }

  /**
   * PurchasePayment updateMany
   */
  export type PurchasePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchasePayments.
     */
    data: XOR<PurchasePaymentUpdateManyMutationInput, PurchasePaymentUncheckedUpdateManyInput>
    /**
     * Filter which PurchasePayments to update
     */
    where?: PurchasePaymentWhereInput
  }

  /**
   * PurchasePayment upsert
   */
  export type PurchasePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchasePayment to update in case it exists.
     */
    where: PurchasePaymentWhereUniqueInput
    /**
     * In case the PurchasePayment found by the `where` argument doesn't exist, create a new PurchasePayment with this data.
     */
    create: XOR<PurchasePaymentCreateInput, PurchasePaymentUncheckedCreateInput>
    /**
     * In case the PurchasePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasePaymentUpdateInput, PurchasePaymentUncheckedUpdateInput>
  }

  /**
   * PurchasePayment delete
   */
  export type PurchasePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
    /**
     * Filter which PurchasePayment to delete.
     */
    where: PurchasePaymentWhereUniqueInput
  }

  /**
   * PurchasePayment deleteMany
   */
  export type PurchasePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasePayments to delete
     */
    where?: PurchasePaymentWhereInput
  }

  /**
   * PurchasePayment without action
   */
  export type PurchasePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasePayment
     */
    select?: PurchasePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasePaymentInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseReturn
   */

  export type AggregatePurchaseReturn = {
    _count: PurchaseReturnCountAggregateOutputType | null
    _avg: PurchaseReturnAvgAggregateOutputType | null
    _sum: PurchaseReturnSumAggregateOutputType | null
    _min: PurchaseReturnMinAggregateOutputType | null
    _max: PurchaseReturnMaxAggregateOutputType | null
  }

  export type PurchaseReturnAvgAggregateOutputType = {
    totalAmount: number | null
    refundAmount: number | null
  }

  export type PurchaseReturnSumAggregateOutputType = {
    totalAmount: number | null
    refundAmount: number | null
  }

  export type PurchaseReturnMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    purchaseId: string | null
    supplierId: string | null
    returnNumber: string | null
    totalAmount: number | null
    refundAmount: number | null
    reason: string | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseReturnMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    purchaseId: string | null
    supplierId: string | null
    returnNumber: string | null
    totalAmount: number | null
    refundAmount: number | null
    reason: string | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseReturnCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    purchaseId: number
    supplierId: number
    returnNumber: number
    totalAmount: number
    refundAmount: number
    reason: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseReturnAvgAggregateInputType = {
    totalAmount?: true
    refundAmount?: true
  }

  export type PurchaseReturnSumAggregateInputType = {
    totalAmount?: true
    refundAmount?: true
  }

  export type PurchaseReturnMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    purchaseId?: true
    supplierId?: true
    returnNumber?: true
    totalAmount?: true
    refundAmount?: true
    reason?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseReturnMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    purchaseId?: true
    supplierId?: true
    returnNumber?: true
    totalAmount?: true
    refundAmount?: true
    reason?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseReturnCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    purchaseId?: true
    supplierId?: true
    returnNumber?: true
    totalAmount?: true
    refundAmount?: true
    reason?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseReturnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReturn to aggregate.
     */
    where?: PurchaseReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturns to fetch.
     */
    orderBy?: PurchaseReturnOrderByWithRelationInput | PurchaseReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseReturns
    **/
    _count?: true | PurchaseReturnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseReturnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseReturnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseReturnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseReturnMaxAggregateInputType
  }

  export type GetPurchaseReturnAggregateType<T extends PurchaseReturnAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseReturn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseReturn[P]>
      : GetScalarType<T[P], AggregatePurchaseReturn[P]>
  }




  export type PurchaseReturnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReturnWhereInput
    orderBy?: PurchaseReturnOrderByWithAggregationInput | PurchaseReturnOrderByWithAggregationInput[]
    by: PurchaseReturnScalarFieldEnum[] | PurchaseReturnScalarFieldEnum
    having?: PurchaseReturnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseReturnCountAggregateInputType | true
    _avg?: PurchaseReturnAvgAggregateInputType
    _sum?: PurchaseReturnSumAggregateInputType
    _min?: PurchaseReturnMinAggregateInputType
    _max?: PurchaseReturnMaxAggregateInputType
  }

  export type PurchaseReturnGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    purchaseId: string | null
    supplierId: string
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason: string | null
    status: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: PurchaseReturnCountAggregateOutputType | null
    _avg: PurchaseReturnAvgAggregateOutputType | null
    _sum: PurchaseReturnSumAggregateOutputType | null
    _min: PurchaseReturnMinAggregateOutputType | null
    _max: PurchaseReturnMaxAggregateOutputType | null
  }

  type GetPurchaseReturnGroupByPayload<T extends PurchaseReturnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseReturnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseReturnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseReturnGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseReturnGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseReturnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    supplierId?: boolean
    returnNumber?: boolean
    totalAmount?: boolean
    refundAmount?: boolean
    reason?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | PurchaseReturn$itemsArgs<ExtArgs>
    purchase?: boolean | PurchaseReturn$purchaseArgs<ExtArgs>
    _count?: boolean | PurchaseReturnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReturn"]>

  export type PurchaseReturnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    supplierId?: boolean
    returnNumber?: boolean
    totalAmount?: boolean
    refundAmount?: boolean
    reason?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseReturn$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReturn"]>

  export type PurchaseReturnSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    supplierId?: boolean
    returnNumber?: boolean
    totalAmount?: boolean
    refundAmount?: boolean
    reason?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseReturnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchaseReturn$itemsArgs<ExtArgs>
    purchase?: boolean | PurchaseReturn$purchaseArgs<ExtArgs>
    _count?: boolean | PurchaseReturnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseReturnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseReturn$purchaseArgs<ExtArgs>
  }

  export type $PurchaseReturnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseReturn"
    objects: {
      items: Prisma.$PurchaseReturnItemPayload<ExtArgs>[]
      purchase: Prisma.$PurchasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      purchaseId: string | null
      supplierId: string
      returnNumber: string
      totalAmount: number
      refundAmount: number
      reason: string | null
      status: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseReturn"]>
    composites: {}
  }

  type PurchaseReturnGetPayload<S extends boolean | null | undefined | PurchaseReturnDefaultArgs> = $Result.GetResult<Prisma.$PurchaseReturnPayload, S>

  type PurchaseReturnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseReturnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseReturnCountAggregateInputType | true
    }

  export interface PurchaseReturnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseReturn'], meta: { name: 'PurchaseReturn' } }
    /**
     * Find zero or one PurchaseReturn that matches the filter.
     * @param {PurchaseReturnFindUniqueArgs} args - Arguments to find a PurchaseReturn
     * @example
     * // Get one PurchaseReturn
     * const purchaseReturn = await prisma.purchaseReturn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseReturnFindUniqueArgs>(args: SelectSubset<T, PurchaseReturnFindUniqueArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseReturn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseReturnFindUniqueOrThrowArgs} args - Arguments to find a PurchaseReturn
     * @example
     * // Get one PurchaseReturn
     * const purchaseReturn = await prisma.purchaseReturn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseReturnFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseReturnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseReturn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnFindFirstArgs} args - Arguments to find a PurchaseReturn
     * @example
     * // Get one PurchaseReturn
     * const purchaseReturn = await prisma.purchaseReturn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseReturnFindFirstArgs>(args?: SelectSubset<T, PurchaseReturnFindFirstArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseReturn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnFindFirstOrThrowArgs} args - Arguments to find a PurchaseReturn
     * @example
     * // Get one PurchaseReturn
     * const purchaseReturn = await prisma.purchaseReturn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseReturnFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseReturnFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseReturns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseReturns
     * const purchaseReturns = await prisma.purchaseReturn.findMany()
     * 
     * // Get first 10 PurchaseReturns
     * const purchaseReturns = await prisma.purchaseReturn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseReturnWithIdOnly = await prisma.purchaseReturn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseReturnFindManyArgs>(args?: SelectSubset<T, PurchaseReturnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseReturn.
     * @param {PurchaseReturnCreateArgs} args - Arguments to create a PurchaseReturn.
     * @example
     * // Create one PurchaseReturn
     * const PurchaseReturn = await prisma.purchaseReturn.create({
     *   data: {
     *     // ... data to create a PurchaseReturn
     *   }
     * })
     * 
     */
    create<T extends PurchaseReturnCreateArgs>(args: SelectSubset<T, PurchaseReturnCreateArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseReturns.
     * @param {PurchaseReturnCreateManyArgs} args - Arguments to create many PurchaseReturns.
     * @example
     * // Create many PurchaseReturns
     * const purchaseReturn = await prisma.purchaseReturn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseReturnCreateManyArgs>(args?: SelectSubset<T, PurchaseReturnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseReturns and returns the data saved in the database.
     * @param {PurchaseReturnCreateManyAndReturnArgs} args - Arguments to create many PurchaseReturns.
     * @example
     * // Create many PurchaseReturns
     * const purchaseReturn = await prisma.purchaseReturn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseReturns and only return the `id`
     * const purchaseReturnWithIdOnly = await prisma.purchaseReturn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseReturnCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseReturnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseReturn.
     * @param {PurchaseReturnDeleteArgs} args - Arguments to delete one PurchaseReturn.
     * @example
     * // Delete one PurchaseReturn
     * const PurchaseReturn = await prisma.purchaseReturn.delete({
     *   where: {
     *     // ... filter to delete one PurchaseReturn
     *   }
     * })
     * 
     */
    delete<T extends PurchaseReturnDeleteArgs>(args: SelectSubset<T, PurchaseReturnDeleteArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseReturn.
     * @param {PurchaseReturnUpdateArgs} args - Arguments to update one PurchaseReturn.
     * @example
     * // Update one PurchaseReturn
     * const purchaseReturn = await prisma.purchaseReturn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseReturnUpdateArgs>(args: SelectSubset<T, PurchaseReturnUpdateArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseReturns.
     * @param {PurchaseReturnDeleteManyArgs} args - Arguments to filter PurchaseReturns to delete.
     * @example
     * // Delete a few PurchaseReturns
     * const { count } = await prisma.purchaseReturn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseReturnDeleteManyArgs>(args?: SelectSubset<T, PurchaseReturnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseReturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseReturns
     * const purchaseReturn = await prisma.purchaseReturn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseReturnUpdateManyArgs>(args: SelectSubset<T, PurchaseReturnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseReturn.
     * @param {PurchaseReturnUpsertArgs} args - Arguments to update or create a PurchaseReturn.
     * @example
     * // Update or create a PurchaseReturn
     * const purchaseReturn = await prisma.purchaseReturn.upsert({
     *   create: {
     *     // ... data to create a PurchaseReturn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseReturn we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseReturnUpsertArgs>(args: SelectSubset<T, PurchaseReturnUpsertArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseReturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnCountArgs} args - Arguments to filter PurchaseReturns to count.
     * @example
     * // Count the number of PurchaseReturns
     * const count = await prisma.purchaseReturn.count({
     *   where: {
     *     // ... the filter for the PurchaseReturns we want to count
     *   }
     * })
    **/
    count<T extends PurchaseReturnCountArgs>(
      args?: Subset<T, PurchaseReturnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseReturnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseReturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseReturnAggregateArgs>(args: Subset<T, PurchaseReturnAggregateArgs>): Prisma.PrismaPromise<GetPurchaseReturnAggregateType<T>>

    /**
     * Group by PurchaseReturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseReturnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseReturnGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseReturnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseReturnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseReturnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseReturn model
   */
  readonly fields: PurchaseReturnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseReturn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseReturnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends PurchaseReturn$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReturn$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findMany"> | Null>
    purchase<T extends PurchaseReturn$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReturn$purchaseArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseReturn model
   */ 
  interface PurchaseReturnFieldRefs {
    readonly id: FieldRef<"PurchaseReturn", 'String'>
    readonly tenantId: FieldRef<"PurchaseReturn", 'String'>
    readonly shopId: FieldRef<"PurchaseReturn", 'String'>
    readonly purchaseId: FieldRef<"PurchaseReturn", 'String'>
    readonly supplierId: FieldRef<"PurchaseReturn", 'String'>
    readonly returnNumber: FieldRef<"PurchaseReturn", 'String'>
    readonly totalAmount: FieldRef<"PurchaseReturn", 'Float'>
    readonly refundAmount: FieldRef<"PurchaseReturn", 'Float'>
    readonly reason: FieldRef<"PurchaseReturn", 'String'>
    readonly status: FieldRef<"PurchaseReturn", 'String'>
    readonly createdById: FieldRef<"PurchaseReturn", 'String'>
    readonly createdAt: FieldRef<"PurchaseReturn", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseReturn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseReturn findUnique
   */
  export type PurchaseReturnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturn to fetch.
     */
    where: PurchaseReturnWhereUniqueInput
  }

  /**
   * PurchaseReturn findUniqueOrThrow
   */
  export type PurchaseReturnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturn to fetch.
     */
    where: PurchaseReturnWhereUniqueInput
  }

  /**
   * PurchaseReturn findFirst
   */
  export type PurchaseReturnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturn to fetch.
     */
    where?: PurchaseReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturns to fetch.
     */
    orderBy?: PurchaseReturnOrderByWithRelationInput | PurchaseReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReturns.
     */
    cursor?: PurchaseReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReturns.
     */
    distinct?: PurchaseReturnScalarFieldEnum | PurchaseReturnScalarFieldEnum[]
  }

  /**
   * PurchaseReturn findFirstOrThrow
   */
  export type PurchaseReturnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturn to fetch.
     */
    where?: PurchaseReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturns to fetch.
     */
    orderBy?: PurchaseReturnOrderByWithRelationInput | PurchaseReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReturns.
     */
    cursor?: PurchaseReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReturns.
     */
    distinct?: PurchaseReturnScalarFieldEnum | PurchaseReturnScalarFieldEnum[]
  }

  /**
   * PurchaseReturn findMany
   */
  export type PurchaseReturnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturns to fetch.
     */
    where?: PurchaseReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturns to fetch.
     */
    orderBy?: PurchaseReturnOrderByWithRelationInput | PurchaseReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseReturns.
     */
    cursor?: PurchaseReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturns.
     */
    skip?: number
    distinct?: PurchaseReturnScalarFieldEnum | PurchaseReturnScalarFieldEnum[]
  }

  /**
   * PurchaseReturn create
   */
  export type PurchaseReturnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseReturn.
     */
    data: XOR<PurchaseReturnCreateInput, PurchaseReturnUncheckedCreateInput>
  }

  /**
   * PurchaseReturn createMany
   */
  export type PurchaseReturnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseReturns.
     */
    data: PurchaseReturnCreateManyInput | PurchaseReturnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseReturn createManyAndReturn
   */
  export type PurchaseReturnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseReturns.
     */
    data: PurchaseReturnCreateManyInput | PurchaseReturnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseReturn update
   */
  export type PurchaseReturnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseReturn.
     */
    data: XOR<PurchaseReturnUpdateInput, PurchaseReturnUncheckedUpdateInput>
    /**
     * Choose, which PurchaseReturn to update.
     */
    where: PurchaseReturnWhereUniqueInput
  }

  /**
   * PurchaseReturn updateMany
   */
  export type PurchaseReturnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseReturns.
     */
    data: XOR<PurchaseReturnUpdateManyMutationInput, PurchaseReturnUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseReturns to update
     */
    where?: PurchaseReturnWhereInput
  }

  /**
   * PurchaseReturn upsert
   */
  export type PurchaseReturnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseReturn to update in case it exists.
     */
    where: PurchaseReturnWhereUniqueInput
    /**
     * In case the PurchaseReturn found by the `where` argument doesn't exist, create a new PurchaseReturn with this data.
     */
    create: XOR<PurchaseReturnCreateInput, PurchaseReturnUncheckedCreateInput>
    /**
     * In case the PurchaseReturn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseReturnUpdateInput, PurchaseReturnUncheckedUpdateInput>
  }

  /**
   * PurchaseReturn delete
   */
  export type PurchaseReturnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
    /**
     * Filter which PurchaseReturn to delete.
     */
    where: PurchaseReturnWhereUniqueInput
  }

  /**
   * PurchaseReturn deleteMany
   */
  export type PurchaseReturnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReturns to delete
     */
    where?: PurchaseReturnWhereInput
  }

  /**
   * PurchaseReturn.items
   */
  export type PurchaseReturn$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    where?: PurchaseReturnItemWhereInput
    orderBy?: PurchaseReturnItemOrderByWithRelationInput | PurchaseReturnItemOrderByWithRelationInput[]
    cursor?: PurchaseReturnItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseReturnItemScalarFieldEnum | PurchaseReturnItemScalarFieldEnum[]
  }

  /**
   * PurchaseReturn.purchase
   */
  export type PurchaseReturn$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
  }

  /**
   * PurchaseReturn without action
   */
  export type PurchaseReturnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturn
     */
    select?: PurchaseReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseReturnItem
   */

  export type AggregatePurchaseReturnItem = {
    _count: PurchaseReturnItemCountAggregateOutputType | null
    _avg: PurchaseReturnItemAvgAggregateOutputType | null
    _sum: PurchaseReturnItemSumAggregateOutputType | null
    _min: PurchaseReturnItemMinAggregateOutputType | null
    _max: PurchaseReturnItemMaxAggregateOutputType | null
  }

  export type PurchaseReturnItemAvgAggregateOutputType = {
    quantity: number | null
    refundAmount: number | null
  }

  export type PurchaseReturnItemSumAggregateOutputType = {
    quantity: number | null
    refundAmount: number | null
  }

  export type PurchaseReturnItemMinAggregateOutputType = {
    id: string | null
    purchaseReturnId: string | null
    purchaseItemId: string | null
    productId: string | null
    productName: string | null
    productSku: string | null
    receivedItemId: string | null
    serialNumber: string | null
    imei1: string | null
    imei2: string | null
    quantity: number | null
    refundAmount: number | null
    condition: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PurchaseReturnItemMaxAggregateOutputType = {
    id: string | null
    purchaseReturnId: string | null
    purchaseItemId: string | null
    productId: string | null
    productName: string | null
    productSku: string | null
    receivedItemId: string | null
    serialNumber: string | null
    imei1: string | null
    imei2: string | null
    quantity: number | null
    refundAmount: number | null
    condition: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PurchaseReturnItemCountAggregateOutputType = {
    id: number
    purchaseReturnId: number
    purchaseItemId: number
    productId: number
    productName: number
    productSku: number
    receivedItemId: number
    serialNumber: number
    imei1: number
    imei2: number
    quantity: number
    refundAmount: number
    condition: number
    reason: number
    createdAt: number
    _all: number
  }


  export type PurchaseReturnItemAvgAggregateInputType = {
    quantity?: true
    refundAmount?: true
  }

  export type PurchaseReturnItemSumAggregateInputType = {
    quantity?: true
    refundAmount?: true
  }

  export type PurchaseReturnItemMinAggregateInputType = {
    id?: true
    purchaseReturnId?: true
    purchaseItemId?: true
    productId?: true
    productName?: true
    productSku?: true
    receivedItemId?: true
    serialNumber?: true
    imei1?: true
    imei2?: true
    quantity?: true
    refundAmount?: true
    condition?: true
    reason?: true
    createdAt?: true
  }

  export type PurchaseReturnItemMaxAggregateInputType = {
    id?: true
    purchaseReturnId?: true
    purchaseItemId?: true
    productId?: true
    productName?: true
    productSku?: true
    receivedItemId?: true
    serialNumber?: true
    imei1?: true
    imei2?: true
    quantity?: true
    refundAmount?: true
    condition?: true
    reason?: true
    createdAt?: true
  }

  export type PurchaseReturnItemCountAggregateInputType = {
    id?: true
    purchaseReturnId?: true
    purchaseItemId?: true
    productId?: true
    productName?: true
    productSku?: true
    receivedItemId?: true
    serialNumber?: true
    imei1?: true
    imei2?: true
    quantity?: true
    refundAmount?: true
    condition?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseReturnItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReturnItem to aggregate.
     */
    where?: PurchaseReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturnItems to fetch.
     */
    orderBy?: PurchaseReturnItemOrderByWithRelationInput | PurchaseReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseReturnItems
    **/
    _count?: true | PurchaseReturnItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseReturnItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseReturnItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseReturnItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseReturnItemMaxAggregateInputType
  }

  export type GetPurchaseReturnItemAggregateType<T extends PurchaseReturnItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseReturnItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseReturnItem[P]>
      : GetScalarType<T[P], AggregatePurchaseReturnItem[P]>
  }




  export type PurchaseReturnItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseReturnItemWhereInput
    orderBy?: PurchaseReturnItemOrderByWithAggregationInput | PurchaseReturnItemOrderByWithAggregationInput[]
    by: PurchaseReturnItemScalarFieldEnum[] | PurchaseReturnItemScalarFieldEnum
    having?: PurchaseReturnItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseReturnItemCountAggregateInputType | true
    _avg?: PurchaseReturnItemAvgAggregateInputType
    _sum?: PurchaseReturnItemSumAggregateInputType
    _min?: PurchaseReturnItemMinAggregateInputType
    _max?: PurchaseReturnItemMaxAggregateInputType
  }

  export type PurchaseReturnItemGroupByOutputType = {
    id: string
    purchaseReturnId: string
    purchaseItemId: string | null
    productId: string
    productName: string
    productSku: string
    receivedItemId: string | null
    serialNumber: string | null
    imei1: string | null
    imei2: string | null
    quantity: number
    refundAmount: number
    condition: string | null
    reason: string | null
    createdAt: Date
    _count: PurchaseReturnItemCountAggregateOutputType | null
    _avg: PurchaseReturnItemAvgAggregateOutputType | null
    _sum: PurchaseReturnItemSumAggregateOutputType | null
    _min: PurchaseReturnItemMinAggregateOutputType | null
    _max: PurchaseReturnItemMaxAggregateOutputType | null
  }

  type GetPurchaseReturnItemGroupByPayload<T extends PurchaseReturnItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseReturnItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseReturnItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseReturnItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseReturnItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseReturnItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseReturnId?: boolean
    purchaseItemId?: boolean
    productId?: boolean
    productName?: boolean
    productSku?: boolean
    receivedItemId?: boolean
    serialNumber?: boolean
    imei1?: boolean
    imei2?: boolean
    quantity?: boolean
    refundAmount?: boolean
    condition?: boolean
    reason?: boolean
    createdAt?: boolean
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseReturnItem$purchaseItemArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReturnItem"]>

  export type PurchaseReturnItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseReturnId?: boolean
    purchaseItemId?: boolean
    productId?: boolean
    productName?: boolean
    productSku?: boolean
    receivedItemId?: boolean
    serialNumber?: boolean
    imei1?: boolean
    imei2?: boolean
    quantity?: boolean
    refundAmount?: boolean
    condition?: boolean
    reason?: boolean
    createdAt?: boolean
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseReturnItem$purchaseItemArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReturnItem"]>

  export type PurchaseReturnItemSelectScalar = {
    id?: boolean
    purchaseReturnId?: boolean
    purchaseItemId?: boolean
    productId?: boolean
    productName?: boolean
    productSku?: boolean
    receivedItemId?: boolean
    serialNumber?: boolean
    imei1?: boolean
    imei2?: boolean
    quantity?: boolean
    refundAmount?: boolean
    condition?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type PurchaseReturnItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseReturnItem$purchaseItemArgs<ExtArgs>
  }
  export type PurchaseReturnItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
    purchaseItem?: boolean | PurchaseReturnItem$purchaseItemArgs<ExtArgs>
  }

  export type $PurchaseReturnItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseReturnItem"
    objects: {
      purchaseReturn: Prisma.$PurchaseReturnPayload<ExtArgs>
      purchaseItem: Prisma.$PurchaseItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseReturnId: string
      purchaseItemId: string | null
      productId: string
      productName: string
      productSku: string
      receivedItemId: string | null
      serialNumber: string | null
      imei1: string | null
      imei2: string | null
      quantity: number
      refundAmount: number
      condition: string | null
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["purchaseReturnItem"]>
    composites: {}
  }

  type PurchaseReturnItemGetPayload<S extends boolean | null | undefined | PurchaseReturnItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseReturnItemPayload, S>

  type PurchaseReturnItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseReturnItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseReturnItemCountAggregateInputType | true
    }

  export interface PurchaseReturnItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseReturnItem'], meta: { name: 'PurchaseReturnItem' } }
    /**
     * Find zero or one PurchaseReturnItem that matches the filter.
     * @param {PurchaseReturnItemFindUniqueArgs} args - Arguments to find a PurchaseReturnItem
     * @example
     * // Get one PurchaseReturnItem
     * const purchaseReturnItem = await prisma.purchaseReturnItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseReturnItemFindUniqueArgs>(args: SelectSubset<T, PurchaseReturnItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseReturnItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseReturnItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseReturnItem
     * @example
     * // Get one PurchaseReturnItem
     * const purchaseReturnItem = await prisma.purchaseReturnItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseReturnItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseReturnItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseReturnItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemFindFirstArgs} args - Arguments to find a PurchaseReturnItem
     * @example
     * // Get one PurchaseReturnItem
     * const purchaseReturnItem = await prisma.purchaseReturnItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseReturnItemFindFirstArgs>(args?: SelectSubset<T, PurchaseReturnItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseReturnItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseReturnItem
     * @example
     * // Get one PurchaseReturnItem
     * const purchaseReturnItem = await prisma.purchaseReturnItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseReturnItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseReturnItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseReturnItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseReturnItems
     * const purchaseReturnItems = await prisma.purchaseReturnItem.findMany()
     * 
     * // Get first 10 PurchaseReturnItems
     * const purchaseReturnItems = await prisma.purchaseReturnItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseReturnItemWithIdOnly = await prisma.purchaseReturnItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseReturnItemFindManyArgs>(args?: SelectSubset<T, PurchaseReturnItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseReturnItem.
     * @param {PurchaseReturnItemCreateArgs} args - Arguments to create a PurchaseReturnItem.
     * @example
     * // Create one PurchaseReturnItem
     * const PurchaseReturnItem = await prisma.purchaseReturnItem.create({
     *   data: {
     *     // ... data to create a PurchaseReturnItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseReturnItemCreateArgs>(args: SelectSubset<T, PurchaseReturnItemCreateArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseReturnItems.
     * @param {PurchaseReturnItemCreateManyArgs} args - Arguments to create many PurchaseReturnItems.
     * @example
     * // Create many PurchaseReturnItems
     * const purchaseReturnItem = await prisma.purchaseReturnItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseReturnItemCreateManyArgs>(args?: SelectSubset<T, PurchaseReturnItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseReturnItems and returns the data saved in the database.
     * @param {PurchaseReturnItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseReturnItems.
     * @example
     * // Create many PurchaseReturnItems
     * const purchaseReturnItem = await prisma.purchaseReturnItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseReturnItems and only return the `id`
     * const purchaseReturnItemWithIdOnly = await prisma.purchaseReturnItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseReturnItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseReturnItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseReturnItem.
     * @param {PurchaseReturnItemDeleteArgs} args - Arguments to delete one PurchaseReturnItem.
     * @example
     * // Delete one PurchaseReturnItem
     * const PurchaseReturnItem = await prisma.purchaseReturnItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseReturnItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseReturnItemDeleteArgs>(args: SelectSubset<T, PurchaseReturnItemDeleteArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseReturnItem.
     * @param {PurchaseReturnItemUpdateArgs} args - Arguments to update one PurchaseReturnItem.
     * @example
     * // Update one PurchaseReturnItem
     * const purchaseReturnItem = await prisma.purchaseReturnItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseReturnItemUpdateArgs>(args: SelectSubset<T, PurchaseReturnItemUpdateArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseReturnItems.
     * @param {PurchaseReturnItemDeleteManyArgs} args - Arguments to filter PurchaseReturnItems to delete.
     * @example
     * // Delete a few PurchaseReturnItems
     * const { count } = await prisma.purchaseReturnItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseReturnItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseReturnItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseReturnItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseReturnItems
     * const purchaseReturnItem = await prisma.purchaseReturnItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseReturnItemUpdateManyArgs>(args: SelectSubset<T, PurchaseReturnItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseReturnItem.
     * @param {PurchaseReturnItemUpsertArgs} args - Arguments to update or create a PurchaseReturnItem.
     * @example
     * // Update or create a PurchaseReturnItem
     * const purchaseReturnItem = await prisma.purchaseReturnItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseReturnItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseReturnItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseReturnItemUpsertArgs>(args: SelectSubset<T, PurchaseReturnItemUpsertArgs<ExtArgs>>): Prisma__PurchaseReturnItemClient<$Result.GetResult<Prisma.$PurchaseReturnItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseReturnItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemCountArgs} args - Arguments to filter PurchaseReturnItems to count.
     * @example
     * // Count the number of PurchaseReturnItems
     * const count = await prisma.purchaseReturnItem.count({
     *   where: {
     *     // ... the filter for the PurchaseReturnItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseReturnItemCountArgs>(
      args?: Subset<T, PurchaseReturnItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseReturnItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseReturnItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseReturnItemAggregateArgs>(args: Subset<T, PurchaseReturnItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseReturnItemAggregateType<T>>

    /**
     * Group by PurchaseReturnItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseReturnItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseReturnItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseReturnItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseReturnItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseReturnItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseReturnItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseReturnItem model
   */
  readonly fields: PurchaseReturnItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseReturnItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseReturnItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseReturn<T extends PurchaseReturnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReturnDefaultArgs<ExtArgs>>): Prisma__PurchaseReturnClient<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    purchaseItem<T extends PurchaseReturnItem$purchaseItemArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReturnItem$purchaseItemArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseReturnItem model
   */ 
  interface PurchaseReturnItemFieldRefs {
    readonly id: FieldRef<"PurchaseReturnItem", 'String'>
    readonly purchaseReturnId: FieldRef<"PurchaseReturnItem", 'String'>
    readonly purchaseItemId: FieldRef<"PurchaseReturnItem", 'String'>
    readonly productId: FieldRef<"PurchaseReturnItem", 'String'>
    readonly productName: FieldRef<"PurchaseReturnItem", 'String'>
    readonly productSku: FieldRef<"PurchaseReturnItem", 'String'>
    readonly receivedItemId: FieldRef<"PurchaseReturnItem", 'String'>
    readonly serialNumber: FieldRef<"PurchaseReturnItem", 'String'>
    readonly imei1: FieldRef<"PurchaseReturnItem", 'String'>
    readonly imei2: FieldRef<"PurchaseReturnItem", 'String'>
    readonly quantity: FieldRef<"PurchaseReturnItem", 'Float'>
    readonly refundAmount: FieldRef<"PurchaseReturnItem", 'Float'>
    readonly condition: FieldRef<"PurchaseReturnItem", 'String'>
    readonly reason: FieldRef<"PurchaseReturnItem", 'String'>
    readonly createdAt: FieldRef<"PurchaseReturnItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseReturnItem findUnique
   */
  export type PurchaseReturnItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturnItem to fetch.
     */
    where: PurchaseReturnItemWhereUniqueInput
  }

  /**
   * PurchaseReturnItem findUniqueOrThrow
   */
  export type PurchaseReturnItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturnItem to fetch.
     */
    where: PurchaseReturnItemWhereUniqueInput
  }

  /**
   * PurchaseReturnItem findFirst
   */
  export type PurchaseReturnItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturnItem to fetch.
     */
    where?: PurchaseReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturnItems to fetch.
     */
    orderBy?: PurchaseReturnItemOrderByWithRelationInput | PurchaseReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReturnItems.
     */
    cursor?: PurchaseReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReturnItems.
     */
    distinct?: PurchaseReturnItemScalarFieldEnum | PurchaseReturnItemScalarFieldEnum[]
  }

  /**
   * PurchaseReturnItem findFirstOrThrow
   */
  export type PurchaseReturnItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturnItem to fetch.
     */
    where?: PurchaseReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturnItems to fetch.
     */
    orderBy?: PurchaseReturnItemOrderByWithRelationInput | PurchaseReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseReturnItems.
     */
    cursor?: PurchaseReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseReturnItems.
     */
    distinct?: PurchaseReturnItemScalarFieldEnum | PurchaseReturnItemScalarFieldEnum[]
  }

  /**
   * PurchaseReturnItem findMany
   */
  export type PurchaseReturnItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseReturnItems to fetch.
     */
    where?: PurchaseReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseReturnItems to fetch.
     */
    orderBy?: PurchaseReturnItemOrderByWithRelationInput | PurchaseReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseReturnItems.
     */
    cursor?: PurchaseReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseReturnItems.
     */
    skip?: number
    distinct?: PurchaseReturnItemScalarFieldEnum | PurchaseReturnItemScalarFieldEnum[]
  }

  /**
   * PurchaseReturnItem create
   */
  export type PurchaseReturnItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseReturnItem.
     */
    data: XOR<PurchaseReturnItemCreateInput, PurchaseReturnItemUncheckedCreateInput>
  }

  /**
   * PurchaseReturnItem createMany
   */
  export type PurchaseReturnItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseReturnItems.
     */
    data: PurchaseReturnItemCreateManyInput | PurchaseReturnItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseReturnItem createManyAndReturn
   */
  export type PurchaseReturnItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseReturnItems.
     */
    data: PurchaseReturnItemCreateManyInput | PurchaseReturnItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseReturnItem update
   */
  export type PurchaseReturnItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseReturnItem.
     */
    data: XOR<PurchaseReturnItemUpdateInput, PurchaseReturnItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseReturnItem to update.
     */
    where: PurchaseReturnItemWhereUniqueInput
  }

  /**
   * PurchaseReturnItem updateMany
   */
  export type PurchaseReturnItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseReturnItems.
     */
    data: XOR<PurchaseReturnItemUpdateManyMutationInput, PurchaseReturnItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseReturnItems to update
     */
    where?: PurchaseReturnItemWhereInput
  }

  /**
   * PurchaseReturnItem upsert
   */
  export type PurchaseReturnItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseReturnItem to update in case it exists.
     */
    where: PurchaseReturnItemWhereUniqueInput
    /**
     * In case the PurchaseReturnItem found by the `where` argument doesn't exist, create a new PurchaseReturnItem with this data.
     */
    create: XOR<PurchaseReturnItemCreateInput, PurchaseReturnItemUncheckedCreateInput>
    /**
     * In case the PurchaseReturnItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseReturnItemUpdateInput, PurchaseReturnItemUncheckedUpdateInput>
  }

  /**
   * PurchaseReturnItem delete
   */
  export type PurchaseReturnItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseReturnItem to delete.
     */
    where: PurchaseReturnItemWhereUniqueInput
  }

  /**
   * PurchaseReturnItem deleteMany
   */
  export type PurchaseReturnItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseReturnItems to delete
     */
    where?: PurchaseReturnItemWhereInput
  }

  /**
   * PurchaseReturnItem.purchaseItem
   */
  export type PurchaseReturnItem$purchaseItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseReturnItem without action
   */
  export type PurchaseReturnItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseReturnItem
     */
    select?: PurchaseReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseReturnItemInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseDocument
   */

  export type AggregatePurchaseDocument = {
    _count: PurchaseDocumentCountAggregateOutputType | null
    _avg: PurchaseDocumentAvgAggregateOutputType | null
    _sum: PurchaseDocumentSumAggregateOutputType | null
    _min: PurchaseDocumentMinAggregateOutputType | null
    _max: PurchaseDocumentMaxAggregateOutputType | null
  }

  export type PurchaseDocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type PurchaseDocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type PurchaseDocumentMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    documentType: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    mimeType: string | null
    uploadedById: string | null
    uploadedAt: Date | null
    notes: string | null
  }

  export type PurchaseDocumentMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    documentType: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    mimeType: string | null
    uploadedById: string | null
    uploadedAt: Date | null
    notes: string | null
  }

  export type PurchaseDocumentCountAggregateOutputType = {
    id: number
    purchaseId: number
    documentType: number
    fileName: number
    fileUrl: number
    fileSize: number
    mimeType: number
    uploadedById: number
    uploadedAt: number
    notes: number
    _all: number
  }


  export type PurchaseDocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type PurchaseDocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type PurchaseDocumentMinAggregateInputType = {
    id?: true
    purchaseId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    uploadedById?: true
    uploadedAt?: true
    notes?: true
  }

  export type PurchaseDocumentMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    uploadedById?: true
    uploadedAt?: true
    notes?: true
  }

  export type PurchaseDocumentCountAggregateInputType = {
    id?: true
    purchaseId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    uploadedById?: true
    uploadedAt?: true
    notes?: true
    _all?: true
  }

  export type PurchaseDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseDocument to aggregate.
     */
    where?: PurchaseDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDocuments to fetch.
     */
    orderBy?: PurchaseDocumentOrderByWithRelationInput | PurchaseDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseDocuments
    **/
    _count?: true | PurchaseDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseDocumentMaxAggregateInputType
  }

  export type GetPurchaseDocumentAggregateType<T extends PurchaseDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseDocument[P]>
      : GetScalarType<T[P], AggregatePurchaseDocument[P]>
  }




  export type PurchaseDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseDocumentWhereInput
    orderBy?: PurchaseDocumentOrderByWithAggregationInput | PurchaseDocumentOrderByWithAggregationInput[]
    by: PurchaseDocumentScalarFieldEnum[] | PurchaseDocumentScalarFieldEnum
    having?: PurchaseDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseDocumentCountAggregateInputType | true
    _avg?: PurchaseDocumentAvgAggregateInputType
    _sum?: PurchaseDocumentSumAggregateInputType
    _min?: PurchaseDocumentMinAggregateInputType
    _max?: PurchaseDocumentMaxAggregateInputType
  }

  export type PurchaseDocumentGroupByOutputType = {
    id: string
    purchaseId: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize: number | null
    mimeType: string | null
    uploadedById: string
    uploadedAt: Date
    notes: string | null
    _count: PurchaseDocumentCountAggregateOutputType | null
    _avg: PurchaseDocumentAvgAggregateOutputType | null
    _sum: PurchaseDocumentSumAggregateOutputType | null
    _min: PurchaseDocumentMinAggregateOutputType | null
    _max: PurchaseDocumentMaxAggregateOutputType | null
  }

  type GetPurchaseDocumentGroupByPayload<T extends PurchaseDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseDocumentGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    uploadedById?: boolean
    uploadedAt?: boolean
    notes?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseDocument"]>

  export type PurchaseDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    uploadedById?: boolean
    uploadedAt?: boolean
    notes?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseDocument"]>

  export type PurchaseDocumentSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    uploadedById?: boolean
    uploadedAt?: boolean
    notes?: boolean
  }

  export type PurchaseDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PurchaseDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchaseDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseDocument"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      documentType: string
      fileName: string
      fileUrl: string
      fileSize: number | null
      mimeType: string | null
      uploadedById: string
      uploadedAt: Date
      notes: string | null
    }, ExtArgs["result"]["purchaseDocument"]>
    composites: {}
  }

  type PurchaseDocumentGetPayload<S extends boolean | null | undefined | PurchaseDocumentDefaultArgs> = $Result.GetResult<Prisma.$PurchaseDocumentPayload, S>

  type PurchaseDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseDocumentCountAggregateInputType | true
    }

  export interface PurchaseDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseDocument'], meta: { name: 'PurchaseDocument' } }
    /**
     * Find zero or one PurchaseDocument that matches the filter.
     * @param {PurchaseDocumentFindUniqueArgs} args - Arguments to find a PurchaseDocument
     * @example
     * // Get one PurchaseDocument
     * const purchaseDocument = await prisma.purchaseDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseDocumentFindUniqueArgs>(args: SelectSubset<T, PurchaseDocumentFindUniqueArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseDocumentFindUniqueOrThrowArgs} args - Arguments to find a PurchaseDocument
     * @example
     * // Get one PurchaseDocument
     * const purchaseDocument = await prisma.purchaseDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentFindFirstArgs} args - Arguments to find a PurchaseDocument
     * @example
     * // Get one PurchaseDocument
     * const purchaseDocument = await prisma.purchaseDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseDocumentFindFirstArgs>(args?: SelectSubset<T, PurchaseDocumentFindFirstArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentFindFirstOrThrowArgs} args - Arguments to find a PurchaseDocument
     * @example
     * // Get one PurchaseDocument
     * const purchaseDocument = await prisma.purchaseDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseDocuments
     * const purchaseDocuments = await prisma.purchaseDocument.findMany()
     * 
     * // Get first 10 PurchaseDocuments
     * const purchaseDocuments = await prisma.purchaseDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseDocumentWithIdOnly = await prisma.purchaseDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseDocumentFindManyArgs>(args?: SelectSubset<T, PurchaseDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseDocument.
     * @param {PurchaseDocumentCreateArgs} args - Arguments to create a PurchaseDocument.
     * @example
     * // Create one PurchaseDocument
     * const PurchaseDocument = await prisma.purchaseDocument.create({
     *   data: {
     *     // ... data to create a PurchaseDocument
     *   }
     * })
     * 
     */
    create<T extends PurchaseDocumentCreateArgs>(args: SelectSubset<T, PurchaseDocumentCreateArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseDocuments.
     * @param {PurchaseDocumentCreateManyArgs} args - Arguments to create many PurchaseDocuments.
     * @example
     * // Create many PurchaseDocuments
     * const purchaseDocument = await prisma.purchaseDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseDocumentCreateManyArgs>(args?: SelectSubset<T, PurchaseDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseDocuments and returns the data saved in the database.
     * @param {PurchaseDocumentCreateManyAndReturnArgs} args - Arguments to create many PurchaseDocuments.
     * @example
     * // Create many PurchaseDocuments
     * const purchaseDocument = await prisma.purchaseDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseDocuments and only return the `id`
     * const purchaseDocumentWithIdOnly = await prisma.purchaseDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseDocument.
     * @param {PurchaseDocumentDeleteArgs} args - Arguments to delete one PurchaseDocument.
     * @example
     * // Delete one PurchaseDocument
     * const PurchaseDocument = await prisma.purchaseDocument.delete({
     *   where: {
     *     // ... filter to delete one PurchaseDocument
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDocumentDeleteArgs>(args: SelectSubset<T, PurchaseDocumentDeleteArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseDocument.
     * @param {PurchaseDocumentUpdateArgs} args - Arguments to update one PurchaseDocument.
     * @example
     * // Update one PurchaseDocument
     * const purchaseDocument = await prisma.purchaseDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseDocumentUpdateArgs>(args: SelectSubset<T, PurchaseDocumentUpdateArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseDocuments.
     * @param {PurchaseDocumentDeleteManyArgs} args - Arguments to filter PurchaseDocuments to delete.
     * @example
     * // Delete a few PurchaseDocuments
     * const { count } = await prisma.purchaseDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDocumentDeleteManyArgs>(args?: SelectSubset<T, PurchaseDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseDocuments
     * const purchaseDocument = await prisma.purchaseDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseDocumentUpdateManyArgs>(args: SelectSubset<T, PurchaseDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseDocument.
     * @param {PurchaseDocumentUpsertArgs} args - Arguments to update or create a PurchaseDocument.
     * @example
     * // Update or create a PurchaseDocument
     * const purchaseDocument = await prisma.purchaseDocument.upsert({
     *   create: {
     *     // ... data to create a PurchaseDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseDocument we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseDocumentUpsertArgs>(args: SelectSubset<T, PurchaseDocumentUpsertArgs<ExtArgs>>): Prisma__PurchaseDocumentClient<$Result.GetResult<Prisma.$PurchaseDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentCountArgs} args - Arguments to filter PurchaseDocuments to count.
     * @example
     * // Count the number of PurchaseDocuments
     * const count = await prisma.purchaseDocument.count({
     *   where: {
     *     // ... the filter for the PurchaseDocuments we want to count
     *   }
     * })
    **/
    count<T extends PurchaseDocumentCountArgs>(
      args?: Subset<T, PurchaseDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseDocumentAggregateArgs>(args: Subset<T, PurchaseDocumentAggregateArgs>): Prisma.PrismaPromise<GetPurchaseDocumentAggregateType<T>>

    /**
     * Group by PurchaseDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseDocumentGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseDocument model
   */
  readonly fields: PurchaseDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseDocument model
   */ 
  interface PurchaseDocumentFieldRefs {
    readonly id: FieldRef<"PurchaseDocument", 'String'>
    readonly purchaseId: FieldRef<"PurchaseDocument", 'String'>
    readonly documentType: FieldRef<"PurchaseDocument", 'String'>
    readonly fileName: FieldRef<"PurchaseDocument", 'String'>
    readonly fileUrl: FieldRef<"PurchaseDocument", 'String'>
    readonly fileSize: FieldRef<"PurchaseDocument", 'Int'>
    readonly mimeType: FieldRef<"PurchaseDocument", 'String'>
    readonly uploadedById: FieldRef<"PurchaseDocument", 'String'>
    readonly uploadedAt: FieldRef<"PurchaseDocument", 'DateTime'>
    readonly notes: FieldRef<"PurchaseDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseDocument findUnique
   */
  export type PurchaseDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDocument to fetch.
     */
    where: PurchaseDocumentWhereUniqueInput
  }

  /**
   * PurchaseDocument findUniqueOrThrow
   */
  export type PurchaseDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDocument to fetch.
     */
    where: PurchaseDocumentWhereUniqueInput
  }

  /**
   * PurchaseDocument findFirst
   */
  export type PurchaseDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDocument to fetch.
     */
    where?: PurchaseDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDocuments to fetch.
     */
    orderBy?: PurchaseDocumentOrderByWithRelationInput | PurchaseDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseDocuments.
     */
    cursor?: PurchaseDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseDocuments.
     */
    distinct?: PurchaseDocumentScalarFieldEnum | PurchaseDocumentScalarFieldEnum[]
  }

  /**
   * PurchaseDocument findFirstOrThrow
   */
  export type PurchaseDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDocument to fetch.
     */
    where?: PurchaseDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDocuments to fetch.
     */
    orderBy?: PurchaseDocumentOrderByWithRelationInput | PurchaseDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseDocuments.
     */
    cursor?: PurchaseDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseDocuments.
     */
    distinct?: PurchaseDocumentScalarFieldEnum | PurchaseDocumentScalarFieldEnum[]
  }

  /**
   * PurchaseDocument findMany
   */
  export type PurchaseDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseDocuments to fetch.
     */
    where?: PurchaseDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseDocuments to fetch.
     */
    orderBy?: PurchaseDocumentOrderByWithRelationInput | PurchaseDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseDocuments.
     */
    cursor?: PurchaseDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseDocuments.
     */
    skip?: number
    distinct?: PurchaseDocumentScalarFieldEnum | PurchaseDocumentScalarFieldEnum[]
  }

  /**
   * PurchaseDocument create
   */
  export type PurchaseDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseDocument.
     */
    data: XOR<PurchaseDocumentCreateInput, PurchaseDocumentUncheckedCreateInput>
  }

  /**
   * PurchaseDocument createMany
   */
  export type PurchaseDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseDocuments.
     */
    data: PurchaseDocumentCreateManyInput | PurchaseDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseDocument createManyAndReturn
   */
  export type PurchaseDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseDocuments.
     */
    data: PurchaseDocumentCreateManyInput | PurchaseDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseDocument update
   */
  export type PurchaseDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseDocument.
     */
    data: XOR<PurchaseDocumentUpdateInput, PurchaseDocumentUncheckedUpdateInput>
    /**
     * Choose, which PurchaseDocument to update.
     */
    where: PurchaseDocumentWhereUniqueInput
  }

  /**
   * PurchaseDocument updateMany
   */
  export type PurchaseDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseDocuments.
     */
    data: XOR<PurchaseDocumentUpdateManyMutationInput, PurchaseDocumentUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseDocuments to update
     */
    where?: PurchaseDocumentWhereInput
  }

  /**
   * PurchaseDocument upsert
   */
  export type PurchaseDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseDocument to update in case it exists.
     */
    where: PurchaseDocumentWhereUniqueInput
    /**
     * In case the PurchaseDocument found by the `where` argument doesn't exist, create a new PurchaseDocument with this data.
     */
    create: XOR<PurchaseDocumentCreateInput, PurchaseDocumentUncheckedCreateInput>
    /**
     * In case the PurchaseDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseDocumentUpdateInput, PurchaseDocumentUncheckedUpdateInput>
  }

  /**
   * PurchaseDocument delete
   */
  export type PurchaseDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
    /**
     * Filter which PurchaseDocument to delete.
     */
    where: PurchaseDocumentWhereUniqueInput
  }

  /**
   * PurchaseDocument deleteMany
   */
  export type PurchaseDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseDocuments to delete
     */
    where?: PurchaseDocumentWhereInput
  }

  /**
   * PurchaseDocument without action
   */
  export type PurchaseDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseDocument
     */
    select?: PurchaseDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseDocumentInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseHistory
   */

  export type AggregatePurchaseHistory = {
    _count: PurchaseHistoryCountAggregateOutputType | null
    _min: PurchaseHistoryMinAggregateOutputType | null
    _max: PurchaseHistoryMaxAggregateOutputType | null
  }

  export type PurchaseHistoryMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    eventType: string | null
    eventData: string | null
    userId: string | null
    userName: string | null
    traceId: string | null
    createdAt: Date | null
  }

  export type PurchaseHistoryMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    eventType: string | null
    eventData: string | null
    userId: string | null
    userName: string | null
    traceId: string | null
    createdAt: Date | null
  }

  export type PurchaseHistoryCountAggregateOutputType = {
    id: number
    purchaseId: number
    eventType: number
    eventData: number
    userId: number
    userName: number
    traceId: number
    createdAt: number
    _all: number
  }


  export type PurchaseHistoryMinAggregateInputType = {
    id?: true
    purchaseId?: true
    eventType?: true
    eventData?: true
    userId?: true
    userName?: true
    traceId?: true
    createdAt?: true
  }

  export type PurchaseHistoryMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    eventType?: true
    eventData?: true
    userId?: true
    userName?: true
    traceId?: true
    createdAt?: true
  }

  export type PurchaseHistoryCountAggregateInputType = {
    id?: true
    purchaseId?: true
    eventType?: true
    eventData?: true
    userId?: true
    userName?: true
    traceId?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseHistory to aggregate.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseHistories
    **/
    _count?: true | PurchaseHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseHistoryMaxAggregateInputType
  }

  export type GetPurchaseHistoryAggregateType<T extends PurchaseHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseHistory[P]>
      : GetScalarType<T[P], AggregatePurchaseHistory[P]>
  }




  export type PurchaseHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseHistoryWhereInput
    orderBy?: PurchaseHistoryOrderByWithAggregationInput | PurchaseHistoryOrderByWithAggregationInput[]
    by: PurchaseHistoryScalarFieldEnum[] | PurchaseHistoryScalarFieldEnum
    having?: PurchaseHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseHistoryCountAggregateInputType | true
    _min?: PurchaseHistoryMinAggregateInputType
    _max?: PurchaseHistoryMaxAggregateInputType
  }

  export type PurchaseHistoryGroupByOutputType = {
    id: string
    purchaseId: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId: string | null
    createdAt: Date
    _count: PurchaseHistoryCountAggregateOutputType | null
    _min: PurchaseHistoryMinAggregateOutputType | null
    _max: PurchaseHistoryMaxAggregateOutputType | null
  }

  type GetPurchaseHistoryGroupByPayload<T extends PurchaseHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    userName?: boolean
    traceId?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseHistory"]>

  export type PurchaseHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    userName?: boolean
    traceId?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseHistory"]>

  export type PurchaseHistorySelectScalar = {
    id?: boolean
    purchaseId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    userName?: boolean
    traceId?: boolean
    createdAt?: boolean
  }

  export type PurchaseHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PurchaseHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchaseHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseHistory"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      eventType: string
      eventData: string
      userId: string
      userName: string
      traceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["purchaseHistory"]>
    composites: {}
  }

  type PurchaseHistoryGetPayload<S extends boolean | null | undefined | PurchaseHistoryDefaultArgs> = $Result.GetResult<Prisma.$PurchaseHistoryPayload, S>

  type PurchaseHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseHistoryCountAggregateInputType | true
    }

  export interface PurchaseHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseHistory'], meta: { name: 'PurchaseHistory' } }
    /**
     * Find zero or one PurchaseHistory that matches the filter.
     * @param {PurchaseHistoryFindUniqueArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseHistoryFindUniqueArgs>(args: SelectSubset<T, PurchaseHistoryFindUniqueArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseHistoryFindUniqueOrThrowArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryFindFirstArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseHistoryFindFirstArgs>(args?: SelectSubset<T, PurchaseHistoryFindFirstArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryFindFirstOrThrowArgs} args - Arguments to find a PurchaseHistory
     * @example
     * // Get one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseHistories
     * const purchaseHistories = await prisma.purchaseHistory.findMany()
     * 
     * // Get first 10 PurchaseHistories
     * const purchaseHistories = await prisma.purchaseHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseHistoryWithIdOnly = await prisma.purchaseHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseHistoryFindManyArgs>(args?: SelectSubset<T, PurchaseHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseHistory.
     * @param {PurchaseHistoryCreateArgs} args - Arguments to create a PurchaseHistory.
     * @example
     * // Create one PurchaseHistory
     * const PurchaseHistory = await prisma.purchaseHistory.create({
     *   data: {
     *     // ... data to create a PurchaseHistory
     *   }
     * })
     * 
     */
    create<T extends PurchaseHistoryCreateArgs>(args: SelectSubset<T, PurchaseHistoryCreateArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseHistories.
     * @param {PurchaseHistoryCreateManyArgs} args - Arguments to create many PurchaseHistories.
     * @example
     * // Create many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseHistoryCreateManyArgs>(args?: SelectSubset<T, PurchaseHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseHistories and returns the data saved in the database.
     * @param {PurchaseHistoryCreateManyAndReturnArgs} args - Arguments to create many PurchaseHistories.
     * @example
     * // Create many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseHistories and only return the `id`
     * const purchaseHistoryWithIdOnly = await prisma.purchaseHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseHistory.
     * @param {PurchaseHistoryDeleteArgs} args - Arguments to delete one PurchaseHistory.
     * @example
     * // Delete one PurchaseHistory
     * const PurchaseHistory = await prisma.purchaseHistory.delete({
     *   where: {
     *     // ... filter to delete one PurchaseHistory
     *   }
     * })
     * 
     */
    delete<T extends PurchaseHistoryDeleteArgs>(args: SelectSubset<T, PurchaseHistoryDeleteArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseHistory.
     * @param {PurchaseHistoryUpdateArgs} args - Arguments to update one PurchaseHistory.
     * @example
     * // Update one PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseHistoryUpdateArgs>(args: SelectSubset<T, PurchaseHistoryUpdateArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseHistories.
     * @param {PurchaseHistoryDeleteManyArgs} args - Arguments to filter PurchaseHistories to delete.
     * @example
     * // Delete a few PurchaseHistories
     * const { count } = await prisma.purchaseHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseHistoryDeleteManyArgs>(args?: SelectSubset<T, PurchaseHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseHistories
     * const purchaseHistory = await prisma.purchaseHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseHistoryUpdateManyArgs>(args: SelectSubset<T, PurchaseHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseHistory.
     * @param {PurchaseHistoryUpsertArgs} args - Arguments to update or create a PurchaseHistory.
     * @example
     * // Update or create a PurchaseHistory
     * const purchaseHistory = await prisma.purchaseHistory.upsert({
     *   create: {
     *     // ... data to create a PurchaseHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseHistory we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseHistoryUpsertArgs>(args: SelectSubset<T, PurchaseHistoryUpsertArgs<ExtArgs>>): Prisma__PurchaseHistoryClient<$Result.GetResult<Prisma.$PurchaseHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryCountArgs} args - Arguments to filter PurchaseHistories to count.
     * @example
     * // Count the number of PurchaseHistories
     * const count = await prisma.purchaseHistory.count({
     *   where: {
     *     // ... the filter for the PurchaseHistories we want to count
     *   }
     * })
    **/
    count<T extends PurchaseHistoryCountArgs>(
      args?: Subset<T, PurchaseHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseHistoryAggregateArgs>(args: Subset<T, PurchaseHistoryAggregateArgs>): Prisma.PrismaPromise<GetPurchaseHistoryAggregateType<T>>

    /**
     * Group by PurchaseHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseHistory model
   */
  readonly fields: PurchaseHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseHistory model
   */ 
  interface PurchaseHistoryFieldRefs {
    readonly id: FieldRef<"PurchaseHistory", 'String'>
    readonly purchaseId: FieldRef<"PurchaseHistory", 'String'>
    readonly eventType: FieldRef<"PurchaseHistory", 'String'>
    readonly eventData: FieldRef<"PurchaseHistory", 'String'>
    readonly userId: FieldRef<"PurchaseHistory", 'String'>
    readonly userName: FieldRef<"PurchaseHistory", 'String'>
    readonly traceId: FieldRef<"PurchaseHistory", 'String'>
    readonly createdAt: FieldRef<"PurchaseHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseHistory findUnique
   */
  export type PurchaseHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory findUniqueOrThrow
   */
  export type PurchaseHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory findFirst
   */
  export type PurchaseHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseHistories.
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseHistories.
     */
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseHistory findFirstOrThrow
   */
  export type PurchaseHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistory to fetch.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseHistories.
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseHistories.
     */
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseHistory findMany
   */
  export type PurchaseHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseHistories to fetch.
     */
    where?: PurchaseHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseHistories to fetch.
     */
    orderBy?: PurchaseHistoryOrderByWithRelationInput | PurchaseHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseHistories.
     */
    cursor?: PurchaseHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseHistories.
     */
    skip?: number
    distinct?: PurchaseHistoryScalarFieldEnum | PurchaseHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseHistory create
   */
  export type PurchaseHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseHistory.
     */
    data: XOR<PurchaseHistoryCreateInput, PurchaseHistoryUncheckedCreateInput>
  }

  /**
   * PurchaseHistory createMany
   */
  export type PurchaseHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseHistories.
     */
    data: PurchaseHistoryCreateManyInput | PurchaseHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseHistory createManyAndReturn
   */
  export type PurchaseHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseHistories.
     */
    data: PurchaseHistoryCreateManyInput | PurchaseHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseHistory update
   */
  export type PurchaseHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseHistory.
     */
    data: XOR<PurchaseHistoryUpdateInput, PurchaseHistoryUncheckedUpdateInput>
    /**
     * Choose, which PurchaseHistory to update.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory updateMany
   */
  export type PurchaseHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseHistories.
     */
    data: XOR<PurchaseHistoryUpdateManyMutationInput, PurchaseHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseHistories to update
     */
    where?: PurchaseHistoryWhereInput
  }

  /**
   * PurchaseHistory upsert
   */
  export type PurchaseHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseHistory to update in case it exists.
     */
    where: PurchaseHistoryWhereUniqueInput
    /**
     * In case the PurchaseHistory found by the `where` argument doesn't exist, create a new PurchaseHistory with this data.
     */
    create: XOR<PurchaseHistoryCreateInput, PurchaseHistoryUncheckedCreateInput>
    /**
     * In case the PurchaseHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseHistoryUpdateInput, PurchaseHistoryUncheckedUpdateInput>
  }

  /**
   * PurchaseHistory delete
   */
  export type PurchaseHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
    /**
     * Filter which PurchaseHistory to delete.
     */
    where: PurchaseHistoryWhereUniqueInput
  }

  /**
   * PurchaseHistory deleteMany
   */
  export type PurchaseHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseHistories to delete
     */
    where?: PurchaseHistoryWhereInput
  }

  /**
   * PurchaseHistory without action
   */
  export type PurchaseHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseHistory
     */
    select?: PurchaseHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseHistoryInclude<ExtArgs> | null
  }


  /**
   * Model SupplierOrder
   */

  export type AggregateSupplierOrder = {
    _count: SupplierOrderCountAggregateOutputType | null
    _avg: SupplierOrderAvgAggregateOutputType | null
    _sum: SupplierOrderSumAggregateOutputType | null
    _min: SupplierOrderMinAggregateOutputType | null
    _max: SupplierOrderMaxAggregateOutputType | null
  }

  export type SupplierOrderAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type SupplierOrderSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type SupplierOrderMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    supplierId: string | null
    orderNumber: string | null
    totalAmount: number | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierOrderMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    supplierId: string | null
    orderNumber: string | null
    totalAmount: number | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierOrderCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    supplierId: number
    orderNumber: number
    totalAmount: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierOrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type SupplierOrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type SupplierOrderMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    supplierId?: true
    orderNumber?: true
    totalAmount?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierOrderMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    supplierId?: true
    orderNumber?: true
    totalAmount?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierOrderCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    supplierId?: true
    orderNumber?: true
    totalAmount?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierOrder to aggregate.
     */
    where?: SupplierOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrders to fetch.
     */
    orderBy?: SupplierOrderOrderByWithRelationInput | SupplierOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierOrders
    **/
    _count?: true | SupplierOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierOrderMaxAggregateInputType
  }

  export type GetSupplierOrderAggregateType<T extends SupplierOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierOrder[P]>
      : GetScalarType<T[P], AggregateSupplierOrder[P]>
  }




  export type SupplierOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierOrderWhereInput
    orderBy?: SupplierOrderOrderByWithAggregationInput | SupplierOrderOrderByWithAggregationInput[]
    by: SupplierOrderScalarFieldEnum[] | SupplierOrderScalarFieldEnum
    having?: SupplierOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierOrderCountAggregateInputType | true
    _avg?: SupplierOrderAvgAggregateInputType
    _sum?: SupplierOrderSumAggregateInputType
    _min?: SupplierOrderMinAggregateInputType
    _max?: SupplierOrderMaxAggregateInputType
  }

  export type SupplierOrderGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    supplierId: string
    orderNumber: string
    totalAmount: number
    status: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierOrderCountAggregateOutputType | null
    _avg: SupplierOrderAvgAggregateOutputType | null
    _sum: SupplierOrderSumAggregateOutputType | null
    _min: SupplierOrderMinAggregateOutputType | null
    _max: SupplierOrderMaxAggregateOutputType | null
  }

  type GetSupplierOrderGroupByPayload<T extends SupplierOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierOrderGroupByOutputType[P]>
        }
      >
    >


  export type SupplierOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    supplierId?: boolean
    orderNumber?: boolean
    totalAmount?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | SupplierOrder$itemsArgs<ExtArgs>
    _count?: boolean | SupplierOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierOrder"]>

  export type SupplierOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    supplierId?: boolean
    orderNumber?: boolean
    totalAmount?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplierOrder"]>

  export type SupplierOrderSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    supplierId?: boolean
    orderNumber?: boolean
    totalAmount?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SupplierOrder$itemsArgs<ExtArgs>
    _count?: boolean | SupplierOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierOrder"
    objects: {
      items: Prisma.$SupplierOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      supplierId: string
      orderNumber: string
      totalAmount: number
      status: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplierOrder"]>
    composites: {}
  }

  type SupplierOrderGetPayload<S extends boolean | null | undefined | SupplierOrderDefaultArgs> = $Result.GetResult<Prisma.$SupplierOrderPayload, S>

  type SupplierOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierOrderCountAggregateInputType | true
    }

  export interface SupplierOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierOrder'], meta: { name: 'SupplierOrder' } }
    /**
     * Find zero or one SupplierOrder that matches the filter.
     * @param {SupplierOrderFindUniqueArgs} args - Arguments to find a SupplierOrder
     * @example
     * // Get one SupplierOrder
     * const supplierOrder = await prisma.supplierOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierOrderFindUniqueArgs>(args: SelectSubset<T, SupplierOrderFindUniqueArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierOrderFindUniqueOrThrowArgs} args - Arguments to find a SupplierOrder
     * @example
     * // Get one SupplierOrder
     * const supplierOrder = await prisma.supplierOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderFindFirstArgs} args - Arguments to find a SupplierOrder
     * @example
     * // Get one SupplierOrder
     * const supplierOrder = await prisma.supplierOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierOrderFindFirstArgs>(args?: SelectSubset<T, SupplierOrderFindFirstArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderFindFirstOrThrowArgs} args - Arguments to find a SupplierOrder
     * @example
     * // Get one SupplierOrder
     * const supplierOrder = await prisma.supplierOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierOrders
     * const supplierOrders = await prisma.supplierOrder.findMany()
     * 
     * // Get first 10 SupplierOrders
     * const supplierOrders = await prisma.supplierOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierOrderWithIdOnly = await prisma.supplierOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierOrderFindManyArgs>(args?: SelectSubset<T, SupplierOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierOrder.
     * @param {SupplierOrderCreateArgs} args - Arguments to create a SupplierOrder.
     * @example
     * // Create one SupplierOrder
     * const SupplierOrder = await prisma.supplierOrder.create({
     *   data: {
     *     // ... data to create a SupplierOrder
     *   }
     * })
     * 
     */
    create<T extends SupplierOrderCreateArgs>(args: SelectSubset<T, SupplierOrderCreateArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierOrders.
     * @param {SupplierOrderCreateManyArgs} args - Arguments to create many SupplierOrders.
     * @example
     * // Create many SupplierOrders
     * const supplierOrder = await prisma.supplierOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierOrderCreateManyArgs>(args?: SelectSubset<T, SupplierOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierOrders and returns the data saved in the database.
     * @param {SupplierOrderCreateManyAndReturnArgs} args - Arguments to create many SupplierOrders.
     * @example
     * // Create many SupplierOrders
     * const supplierOrder = await prisma.supplierOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierOrders and only return the `id`
     * const supplierOrderWithIdOnly = await prisma.supplierOrder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierOrder.
     * @param {SupplierOrderDeleteArgs} args - Arguments to delete one SupplierOrder.
     * @example
     * // Delete one SupplierOrder
     * const SupplierOrder = await prisma.supplierOrder.delete({
     *   where: {
     *     // ... filter to delete one SupplierOrder
     *   }
     * })
     * 
     */
    delete<T extends SupplierOrderDeleteArgs>(args: SelectSubset<T, SupplierOrderDeleteArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierOrder.
     * @param {SupplierOrderUpdateArgs} args - Arguments to update one SupplierOrder.
     * @example
     * // Update one SupplierOrder
     * const supplierOrder = await prisma.supplierOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierOrderUpdateArgs>(args: SelectSubset<T, SupplierOrderUpdateArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierOrders.
     * @param {SupplierOrderDeleteManyArgs} args - Arguments to filter SupplierOrders to delete.
     * @example
     * // Delete a few SupplierOrders
     * const { count } = await prisma.supplierOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierOrderDeleteManyArgs>(args?: SelectSubset<T, SupplierOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierOrders
     * const supplierOrder = await prisma.supplierOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierOrderUpdateManyArgs>(args: SelectSubset<T, SupplierOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierOrder.
     * @param {SupplierOrderUpsertArgs} args - Arguments to update or create a SupplierOrder.
     * @example
     * // Update or create a SupplierOrder
     * const supplierOrder = await prisma.supplierOrder.upsert({
     *   create: {
     *     // ... data to create a SupplierOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierOrder we want to update
     *   }
     * })
     */
    upsert<T extends SupplierOrderUpsertArgs>(args: SelectSubset<T, SupplierOrderUpsertArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderCountArgs} args - Arguments to filter SupplierOrders to count.
     * @example
     * // Count the number of SupplierOrders
     * const count = await prisma.supplierOrder.count({
     *   where: {
     *     // ... the filter for the SupplierOrders we want to count
     *   }
     * })
    **/
    count<T extends SupplierOrderCountArgs>(
      args?: Subset<T, SupplierOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierOrderAggregateArgs>(args: Subset<T, SupplierOrderAggregateArgs>): Prisma.PrismaPromise<GetSupplierOrderAggregateType<T>>

    /**
     * Group by SupplierOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierOrderGroupByArgs['orderBy'] }
        : { orderBy?: SupplierOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierOrder model
   */
  readonly fields: SupplierOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends SupplierOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, SupplierOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplierOrder model
   */ 
  interface SupplierOrderFieldRefs {
    readonly id: FieldRef<"SupplierOrder", 'String'>
    readonly tenantId: FieldRef<"SupplierOrder", 'String'>
    readonly shopId: FieldRef<"SupplierOrder", 'String'>
    readonly supplierId: FieldRef<"SupplierOrder", 'String'>
    readonly orderNumber: FieldRef<"SupplierOrder", 'String'>
    readonly totalAmount: FieldRef<"SupplierOrder", 'Float'>
    readonly status: FieldRef<"SupplierOrder", 'String'>
    readonly createdById: FieldRef<"SupplierOrder", 'String'>
    readonly createdAt: FieldRef<"SupplierOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SupplierOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierOrder findUnique
   */
  export type SupplierOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrder to fetch.
     */
    where: SupplierOrderWhereUniqueInput
  }

  /**
   * SupplierOrder findUniqueOrThrow
   */
  export type SupplierOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrder to fetch.
     */
    where: SupplierOrderWhereUniqueInput
  }

  /**
   * SupplierOrder findFirst
   */
  export type SupplierOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrder to fetch.
     */
    where?: SupplierOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrders to fetch.
     */
    orderBy?: SupplierOrderOrderByWithRelationInput | SupplierOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierOrders.
     */
    cursor?: SupplierOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierOrders.
     */
    distinct?: SupplierOrderScalarFieldEnum | SupplierOrderScalarFieldEnum[]
  }

  /**
   * SupplierOrder findFirstOrThrow
   */
  export type SupplierOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrder to fetch.
     */
    where?: SupplierOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrders to fetch.
     */
    orderBy?: SupplierOrderOrderByWithRelationInput | SupplierOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierOrders.
     */
    cursor?: SupplierOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierOrders.
     */
    distinct?: SupplierOrderScalarFieldEnum | SupplierOrderScalarFieldEnum[]
  }

  /**
   * SupplierOrder findMany
   */
  export type SupplierOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrders to fetch.
     */
    where?: SupplierOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrders to fetch.
     */
    orderBy?: SupplierOrderOrderByWithRelationInput | SupplierOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierOrders.
     */
    cursor?: SupplierOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrders.
     */
    skip?: number
    distinct?: SupplierOrderScalarFieldEnum | SupplierOrderScalarFieldEnum[]
  }

  /**
   * SupplierOrder create
   */
  export type SupplierOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierOrder.
     */
    data: XOR<SupplierOrderCreateInput, SupplierOrderUncheckedCreateInput>
  }

  /**
   * SupplierOrder createMany
   */
  export type SupplierOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierOrders.
     */
    data: SupplierOrderCreateManyInput | SupplierOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierOrder createManyAndReturn
   */
  export type SupplierOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierOrders.
     */
    data: SupplierOrderCreateManyInput | SupplierOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierOrder update
   */
  export type SupplierOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierOrder.
     */
    data: XOR<SupplierOrderUpdateInput, SupplierOrderUncheckedUpdateInput>
    /**
     * Choose, which SupplierOrder to update.
     */
    where: SupplierOrderWhereUniqueInput
  }

  /**
   * SupplierOrder updateMany
   */
  export type SupplierOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierOrders.
     */
    data: XOR<SupplierOrderUpdateManyMutationInput, SupplierOrderUncheckedUpdateManyInput>
    /**
     * Filter which SupplierOrders to update
     */
    where?: SupplierOrderWhereInput
  }

  /**
   * SupplierOrder upsert
   */
  export type SupplierOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierOrder to update in case it exists.
     */
    where: SupplierOrderWhereUniqueInput
    /**
     * In case the SupplierOrder found by the `where` argument doesn't exist, create a new SupplierOrder with this data.
     */
    create: XOR<SupplierOrderCreateInput, SupplierOrderUncheckedCreateInput>
    /**
     * In case the SupplierOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierOrderUpdateInput, SupplierOrderUncheckedUpdateInput>
  }

  /**
   * SupplierOrder delete
   */
  export type SupplierOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
    /**
     * Filter which SupplierOrder to delete.
     */
    where: SupplierOrderWhereUniqueInput
  }

  /**
   * SupplierOrder deleteMany
   */
  export type SupplierOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierOrders to delete
     */
    where?: SupplierOrderWhereInput
  }

  /**
   * SupplierOrder.items
   */
  export type SupplierOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    where?: SupplierOrderItemWhereInput
    orderBy?: SupplierOrderItemOrderByWithRelationInput | SupplierOrderItemOrderByWithRelationInput[]
    cursor?: SupplierOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierOrderItemScalarFieldEnum | SupplierOrderItemScalarFieldEnum[]
  }

  /**
   * SupplierOrder without action
   */
  export type SupplierOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrder
     */
    select?: SupplierOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderInclude<ExtArgs> | null
  }


  /**
   * Model SupplierOrderItem
   */

  export type AggregateSupplierOrderItem = {
    _count: SupplierOrderItemCountAggregateOutputType | null
    _avg: SupplierOrderItemAvgAggregateOutputType | null
    _sum: SupplierOrderItemSumAggregateOutputType | null
    _min: SupplierOrderItemMinAggregateOutputType | null
    _max: SupplierOrderItemMaxAggregateOutputType | null
  }

  export type SupplierOrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    total: number | null
  }

  export type SupplierOrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    total: number | null
  }

  export type SupplierOrderItemMinAggregateOutputType = {
    id: string | null
    supplierOrderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    total: number | null
    createdAt: Date | null
  }

  export type SupplierOrderItemMaxAggregateOutputType = {
    id: string | null
    supplierOrderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    total: number | null
    createdAt: Date | null
  }

  export type SupplierOrderItemCountAggregateOutputType = {
    id: number
    supplierOrderId: number
    productId: number
    quantity: number
    unitPrice: number
    total: number
    createdAt: number
    _all: number
  }


  export type SupplierOrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    total?: true
  }

  export type SupplierOrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    total?: true
  }

  export type SupplierOrderItemMinAggregateInputType = {
    id?: true
    supplierOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    total?: true
    createdAt?: true
  }

  export type SupplierOrderItemMaxAggregateInputType = {
    id?: true
    supplierOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    total?: true
    createdAt?: true
  }

  export type SupplierOrderItemCountAggregateInputType = {
    id?: true
    supplierOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierOrderItem to aggregate.
     */
    where?: SupplierOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrderItems to fetch.
     */
    orderBy?: SupplierOrderItemOrderByWithRelationInput | SupplierOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierOrderItems
    **/
    _count?: true | SupplierOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierOrderItemMaxAggregateInputType
  }

  export type GetSupplierOrderItemAggregateType<T extends SupplierOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierOrderItem[P]>
      : GetScalarType<T[P], AggregateSupplierOrderItem[P]>
  }




  export type SupplierOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierOrderItemWhereInput
    orderBy?: SupplierOrderItemOrderByWithAggregationInput | SupplierOrderItemOrderByWithAggregationInput[]
    by: SupplierOrderItemScalarFieldEnum[] | SupplierOrderItemScalarFieldEnum
    having?: SupplierOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierOrderItemCountAggregateInputType | true
    _avg?: SupplierOrderItemAvgAggregateInputType
    _sum?: SupplierOrderItemSumAggregateInputType
    _min?: SupplierOrderItemMinAggregateInputType
    _max?: SupplierOrderItemMaxAggregateInputType
  }

  export type SupplierOrderItemGroupByOutputType = {
    id: string
    supplierOrderId: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt: Date
    _count: SupplierOrderItemCountAggregateOutputType | null
    _avg: SupplierOrderItemAvgAggregateOutputType | null
    _sum: SupplierOrderItemSumAggregateOutputType | null
    _min: SupplierOrderItemMinAggregateOutputType | null
    _max: SupplierOrderItemMaxAggregateOutputType | null
  }

  type GetSupplierOrderItemGroupByPayload<T extends SupplierOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type SupplierOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    total?: boolean
    createdAt?: boolean
    supplierOrder?: boolean | SupplierOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierOrderItem"]>

  export type SupplierOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    total?: boolean
    createdAt?: boolean
    supplierOrder?: boolean | SupplierOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierOrderItem"]>

  export type SupplierOrderItemSelectScalar = {
    id?: boolean
    supplierOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type SupplierOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplierOrder?: boolean | SupplierOrderDefaultArgs<ExtArgs>
  }
  export type SupplierOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplierOrder?: boolean | SupplierOrderDefaultArgs<ExtArgs>
  }

  export type $SupplierOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierOrderItem"
    objects: {
      supplierOrder: Prisma.$SupplierOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierOrderId: string
      productId: string
      quantity: number
      unitPrice: number
      total: number
      createdAt: Date
    }, ExtArgs["result"]["supplierOrderItem"]>
    composites: {}
  }

  type SupplierOrderItemGetPayload<S extends boolean | null | undefined | SupplierOrderItemDefaultArgs> = $Result.GetResult<Prisma.$SupplierOrderItemPayload, S>

  type SupplierOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierOrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierOrderItemCountAggregateInputType | true
    }

  export interface SupplierOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierOrderItem'], meta: { name: 'SupplierOrderItem' } }
    /**
     * Find zero or one SupplierOrderItem that matches the filter.
     * @param {SupplierOrderItemFindUniqueArgs} args - Arguments to find a SupplierOrderItem
     * @example
     * // Get one SupplierOrderItem
     * const supplierOrderItem = await prisma.supplierOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierOrderItemFindUniqueArgs>(args: SelectSubset<T, SupplierOrderItemFindUniqueArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierOrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierOrderItemFindUniqueOrThrowArgs} args - Arguments to find a SupplierOrderItem
     * @example
     * // Get one SupplierOrderItem
     * const supplierOrderItem = await prisma.supplierOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemFindFirstArgs} args - Arguments to find a SupplierOrderItem
     * @example
     * // Get one SupplierOrderItem
     * const supplierOrderItem = await prisma.supplierOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierOrderItemFindFirstArgs>(args?: SelectSubset<T, SupplierOrderItemFindFirstArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemFindFirstOrThrowArgs} args - Arguments to find a SupplierOrderItem
     * @example
     * // Get one SupplierOrderItem
     * const supplierOrderItem = await prisma.supplierOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierOrderItems
     * const supplierOrderItems = await prisma.supplierOrderItem.findMany()
     * 
     * // Get first 10 SupplierOrderItems
     * const supplierOrderItems = await prisma.supplierOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierOrderItemWithIdOnly = await prisma.supplierOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierOrderItemFindManyArgs>(args?: SelectSubset<T, SupplierOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierOrderItem.
     * @param {SupplierOrderItemCreateArgs} args - Arguments to create a SupplierOrderItem.
     * @example
     * // Create one SupplierOrderItem
     * const SupplierOrderItem = await prisma.supplierOrderItem.create({
     *   data: {
     *     // ... data to create a SupplierOrderItem
     *   }
     * })
     * 
     */
    create<T extends SupplierOrderItemCreateArgs>(args: SelectSubset<T, SupplierOrderItemCreateArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierOrderItems.
     * @param {SupplierOrderItemCreateManyArgs} args - Arguments to create many SupplierOrderItems.
     * @example
     * // Create many SupplierOrderItems
     * const supplierOrderItem = await prisma.supplierOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierOrderItemCreateManyArgs>(args?: SelectSubset<T, SupplierOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierOrderItems and returns the data saved in the database.
     * @param {SupplierOrderItemCreateManyAndReturnArgs} args - Arguments to create many SupplierOrderItems.
     * @example
     * // Create many SupplierOrderItems
     * const supplierOrderItem = await prisma.supplierOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierOrderItems and only return the `id`
     * const supplierOrderItemWithIdOnly = await prisma.supplierOrderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierOrderItem.
     * @param {SupplierOrderItemDeleteArgs} args - Arguments to delete one SupplierOrderItem.
     * @example
     * // Delete one SupplierOrderItem
     * const SupplierOrderItem = await prisma.supplierOrderItem.delete({
     *   where: {
     *     // ... filter to delete one SupplierOrderItem
     *   }
     * })
     * 
     */
    delete<T extends SupplierOrderItemDeleteArgs>(args: SelectSubset<T, SupplierOrderItemDeleteArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierOrderItem.
     * @param {SupplierOrderItemUpdateArgs} args - Arguments to update one SupplierOrderItem.
     * @example
     * // Update one SupplierOrderItem
     * const supplierOrderItem = await prisma.supplierOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierOrderItemUpdateArgs>(args: SelectSubset<T, SupplierOrderItemUpdateArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierOrderItems.
     * @param {SupplierOrderItemDeleteManyArgs} args - Arguments to filter SupplierOrderItems to delete.
     * @example
     * // Delete a few SupplierOrderItems
     * const { count } = await prisma.supplierOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierOrderItemDeleteManyArgs>(args?: SelectSubset<T, SupplierOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierOrderItems
     * const supplierOrderItem = await prisma.supplierOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierOrderItemUpdateManyArgs>(args: SelectSubset<T, SupplierOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierOrderItem.
     * @param {SupplierOrderItemUpsertArgs} args - Arguments to update or create a SupplierOrderItem.
     * @example
     * // Update or create a SupplierOrderItem
     * const supplierOrderItem = await prisma.supplierOrderItem.upsert({
     *   create: {
     *     // ... data to create a SupplierOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends SupplierOrderItemUpsertArgs>(args: SelectSubset<T, SupplierOrderItemUpsertArgs<ExtArgs>>): Prisma__SupplierOrderItemClient<$Result.GetResult<Prisma.$SupplierOrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemCountArgs} args - Arguments to filter SupplierOrderItems to count.
     * @example
     * // Count the number of SupplierOrderItems
     * const count = await prisma.supplierOrderItem.count({
     *   where: {
     *     // ... the filter for the SupplierOrderItems we want to count
     *   }
     * })
    **/
    count<T extends SupplierOrderItemCountArgs>(
      args?: Subset<T, SupplierOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierOrderItemAggregateArgs>(args: Subset<T, SupplierOrderItemAggregateArgs>): Prisma.PrismaPromise<GetSupplierOrderItemAggregateType<T>>

    /**
     * Group by SupplierOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: SupplierOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierOrderItem model
   */
  readonly fields: SupplierOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplierOrder<T extends SupplierOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierOrderDefaultArgs<ExtArgs>>): Prisma__SupplierOrderClient<$Result.GetResult<Prisma.$SupplierOrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplierOrderItem model
   */ 
  interface SupplierOrderItemFieldRefs {
    readonly id: FieldRef<"SupplierOrderItem", 'String'>
    readonly supplierOrderId: FieldRef<"SupplierOrderItem", 'String'>
    readonly productId: FieldRef<"SupplierOrderItem", 'String'>
    readonly quantity: FieldRef<"SupplierOrderItem", 'Float'>
    readonly unitPrice: FieldRef<"SupplierOrderItem", 'Float'>
    readonly total: FieldRef<"SupplierOrderItem", 'Float'>
    readonly createdAt: FieldRef<"SupplierOrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierOrderItem findUnique
   */
  export type SupplierOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrderItem to fetch.
     */
    where: SupplierOrderItemWhereUniqueInput
  }

  /**
   * SupplierOrderItem findUniqueOrThrow
   */
  export type SupplierOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrderItem to fetch.
     */
    where: SupplierOrderItemWhereUniqueInput
  }

  /**
   * SupplierOrderItem findFirst
   */
  export type SupplierOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrderItem to fetch.
     */
    where?: SupplierOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrderItems to fetch.
     */
    orderBy?: SupplierOrderItemOrderByWithRelationInput | SupplierOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierOrderItems.
     */
    cursor?: SupplierOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierOrderItems.
     */
    distinct?: SupplierOrderItemScalarFieldEnum | SupplierOrderItemScalarFieldEnum[]
  }

  /**
   * SupplierOrderItem findFirstOrThrow
   */
  export type SupplierOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrderItem to fetch.
     */
    where?: SupplierOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrderItems to fetch.
     */
    orderBy?: SupplierOrderItemOrderByWithRelationInput | SupplierOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierOrderItems.
     */
    cursor?: SupplierOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierOrderItems.
     */
    distinct?: SupplierOrderItemScalarFieldEnum | SupplierOrderItemScalarFieldEnum[]
  }

  /**
   * SupplierOrderItem findMany
   */
  export type SupplierOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplierOrderItems to fetch.
     */
    where?: SupplierOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierOrderItems to fetch.
     */
    orderBy?: SupplierOrderItemOrderByWithRelationInput | SupplierOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierOrderItems.
     */
    cursor?: SupplierOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierOrderItems.
     */
    skip?: number
    distinct?: SupplierOrderItemScalarFieldEnum | SupplierOrderItemScalarFieldEnum[]
  }

  /**
   * SupplierOrderItem create
   */
  export type SupplierOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierOrderItem.
     */
    data: XOR<SupplierOrderItemCreateInput, SupplierOrderItemUncheckedCreateInput>
  }

  /**
   * SupplierOrderItem createMany
   */
  export type SupplierOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierOrderItems.
     */
    data: SupplierOrderItemCreateManyInput | SupplierOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierOrderItem createManyAndReturn
   */
  export type SupplierOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierOrderItems.
     */
    data: SupplierOrderItemCreateManyInput | SupplierOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierOrderItem update
   */
  export type SupplierOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierOrderItem.
     */
    data: XOR<SupplierOrderItemUpdateInput, SupplierOrderItemUncheckedUpdateInput>
    /**
     * Choose, which SupplierOrderItem to update.
     */
    where: SupplierOrderItemWhereUniqueInput
  }

  /**
   * SupplierOrderItem updateMany
   */
  export type SupplierOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierOrderItems.
     */
    data: XOR<SupplierOrderItemUpdateManyMutationInput, SupplierOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which SupplierOrderItems to update
     */
    where?: SupplierOrderItemWhereInput
  }

  /**
   * SupplierOrderItem upsert
   */
  export type SupplierOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierOrderItem to update in case it exists.
     */
    where: SupplierOrderItemWhereUniqueInput
    /**
     * In case the SupplierOrderItem found by the `where` argument doesn't exist, create a new SupplierOrderItem with this data.
     */
    create: XOR<SupplierOrderItemCreateInput, SupplierOrderItemUncheckedCreateInput>
    /**
     * In case the SupplierOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierOrderItemUpdateInput, SupplierOrderItemUncheckedUpdateInput>
  }

  /**
   * SupplierOrderItem delete
   */
  export type SupplierOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
    /**
     * Filter which SupplierOrderItem to delete.
     */
    where: SupplierOrderItemWhereUniqueInput
  }

  /**
   * SupplierOrderItem deleteMany
   */
  export type SupplierOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierOrderItems to delete
     */
    where?: SupplierOrderItemWhereInput
  }

  /**
   * SupplierOrderItem without action
   */
  export type SupplierOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierOrderItem
     */
    select?: SupplierOrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    traceId: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    traceId: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    userId: number
    action: number
    resource: number
    resourceId: number
    traceId: number
    details: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    traceId?: true
    details?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    traceId?: true
    details?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    traceId?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string | null
    userId: string | null
    action: string
    resource: string
    resourceId: string | null
    traceId: string | null
    details: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    traceId?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    traceId?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    traceId?: boolean
    details?: boolean
    createdAt?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string | null
      userId: string | null
      action: string
      resource: string
      resourceId: string | null
      traceId: string | null
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tenantId: FieldRef<"AuditLog", 'String'>
    readonly shopId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly traceId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PurchaseScalarFieldEnum: {
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

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchaseItemScalarFieldEnum: {
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

  export type PurchaseItemScalarFieldEnum = (typeof PurchaseItemScalarFieldEnum)[keyof typeof PurchaseItemScalarFieldEnum]


  export const PurchaseReceivedItemScalarFieldEnum: {
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

  export type PurchaseReceivedItemScalarFieldEnum = (typeof PurchaseReceivedItemScalarFieldEnum)[keyof typeof PurchaseReceivedItemScalarFieldEnum]


  export const PurchaseReceivingScalarFieldEnum: {
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

  export type PurchaseReceivingScalarFieldEnum = (typeof PurchaseReceivingScalarFieldEnum)[keyof typeof PurchaseReceivingScalarFieldEnum]


  export const PurchasePaymentScalarFieldEnum: {
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

  export type PurchasePaymentScalarFieldEnum = (typeof PurchasePaymentScalarFieldEnum)[keyof typeof PurchasePaymentScalarFieldEnum]


  export const PurchaseReturnScalarFieldEnum: {
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

  export type PurchaseReturnScalarFieldEnum = (typeof PurchaseReturnScalarFieldEnum)[keyof typeof PurchaseReturnScalarFieldEnum]


  export const PurchaseReturnItemScalarFieldEnum: {
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

  export type PurchaseReturnItemScalarFieldEnum = (typeof PurchaseReturnItemScalarFieldEnum)[keyof typeof PurchaseReturnItemScalarFieldEnum]


  export const PurchaseDocumentScalarFieldEnum: {
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

  export type PurchaseDocumentScalarFieldEnum = (typeof PurchaseDocumentScalarFieldEnum)[keyof typeof PurchaseDocumentScalarFieldEnum]


  export const PurchaseHistoryScalarFieldEnum: {
    id: 'id',
    purchaseId: 'purchaseId',
    eventType: 'eventType',
    eventData: 'eventData',
    userId: 'userId',
    userName: 'userName',
    traceId: 'traceId',
    createdAt: 'createdAt'
  };

  export type PurchaseHistoryScalarFieldEnum = (typeof PurchaseHistoryScalarFieldEnum)[keyof typeof PurchaseHistoryScalarFieldEnum]


  export const SupplierOrderScalarFieldEnum: {
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

  export type SupplierOrderScalarFieldEnum = (typeof SupplierOrderScalarFieldEnum)[keyof typeof SupplierOrderScalarFieldEnum]


  export const SupplierOrderItemScalarFieldEnum: {
    id: 'id',
    supplierOrderId: 'supplierOrderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type SupplierOrderItemScalarFieldEnum = (typeof SupplierOrderItemScalarFieldEnum)[keyof typeof SupplierOrderItemScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
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

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PurchaseCommercialStatus'
   */
  export type EnumPurchaseCommercialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseCommercialStatus'>
    


  /**
   * Reference to a field of type 'PurchaseCommercialStatus[]'
   */
  export type ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseCommercialStatus[]'>
    


  /**
   * Reference to a field of type 'PurchaseReceivingStatus'
   */
  export type EnumPurchaseReceivingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseReceivingStatus'>
    


  /**
   * Reference to a field of type 'PurchaseReceivingStatus[]'
   */
  export type ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseReceivingStatus[]'>
    


  /**
   * Reference to a field of type 'PurchasePaymentStatus'
   */
  export type EnumPurchasePaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchasePaymentStatus'>
    


  /**
   * Reference to a field of type 'PurchasePaymentStatus[]'
   */
  export type ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchasePaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PurchaseAccountingStatus'
   */
  export type EnumPurchaseAccountingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseAccountingStatus'>
    


  /**
   * Reference to a field of type 'PurchaseAccountingStatus[]'
   */
  export type ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseAccountingStatus[]'>
    


  /**
   * Reference to a field of type 'ReceivingItemCondition'
   */
  export type EnumReceivingItemConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReceivingItemCondition'>
    


  /**
   * Reference to a field of type 'ReceivingItemCondition[]'
   */
  export type ListEnumReceivingItemConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReceivingItemCondition[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    tenantId?: StringFilter<"Purchase"> | string
    shopId?: StringFilter<"Purchase"> | string
    purchaseNumber?: StringFilter<"Purchase"> | string
    supplierId?: StringFilter<"Purchase"> | string
    supplierName?: StringFilter<"Purchase"> | string
    supplierContact?: StringNullableFilter<"Purchase"> | string | null
    supplierAddress?: StringNullableFilter<"Purchase"> | string | null
    supplierTaxId?: StringNullableFilter<"Purchase"> | string | null
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    supplierInvoiceNo?: StringNullableFilter<"Purchase"> | string | null
    currency?: StringFilter<"Purchase"> | string
    exchangeRate?: FloatFilter<"Purchase"> | number
    commercialStatus?: EnumPurchaseCommercialStatusFilter<"Purchase"> | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFilter<"Purchase"> | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFilter<"Purchase"> | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFilter<"Purchase"> | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFilter<"Purchase"> | number
    discountTotal?: FloatFilter<"Purchase"> | number
    taxTotal?: FloatFilter<"Purchase"> | number
    otherCostTotal?: FloatFilter<"Purchase"> | number
    grandTotal?: FloatFilter<"Purchase"> | number
    amountPaid?: FloatFilter<"Purchase"> | number
    amountOutstanding?: FloatFilter<"Purchase"> | number
    notes?: StringNullableFilter<"Purchase"> | string | null
    approvedById?: StringNullableFilter<"Purchase"> | string | null
    approvedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdById?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    items?: PurchaseItemListRelationFilter
    receivedItems?: PurchaseReceivedItemListRelationFilter
    receivings?: PurchaseReceivingListRelationFilter
    payments?: PurchasePaymentListRelationFilter
    returns?: PurchaseReturnListRelationFilter
    documents?: PurchaseDocumentListRelationFilter
    history?: PurchaseHistoryListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    supplierContact?: SortOrderInput | SortOrder
    supplierAddress?: SortOrderInput | SortOrder
    supplierTaxId?: SortOrderInput | SortOrder
    purchaseDate?: SortOrder
    supplierInvoiceNo?: SortOrderInput | SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    commercialStatus?: SortOrder
    receivingStatus?: SortOrder
    paymentStatus?: SortOrder
    accountingStatus?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
    notes?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: PurchaseItemOrderByRelationAggregateInput
    receivedItems?: PurchaseReceivedItemOrderByRelationAggregateInput
    receivings?: PurchaseReceivingOrderByRelationAggregateInput
    payments?: PurchasePaymentOrderByRelationAggregateInput
    returns?: PurchaseReturnOrderByRelationAggregateInput
    documents?: PurchaseDocumentOrderByRelationAggregateInput
    history?: PurchaseHistoryOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    purchaseNumber?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    tenantId?: StringFilter<"Purchase"> | string
    shopId?: StringFilter<"Purchase"> | string
    supplierId?: StringFilter<"Purchase"> | string
    supplierName?: StringFilter<"Purchase"> | string
    supplierContact?: StringNullableFilter<"Purchase"> | string | null
    supplierAddress?: StringNullableFilter<"Purchase"> | string | null
    supplierTaxId?: StringNullableFilter<"Purchase"> | string | null
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    supplierInvoiceNo?: StringNullableFilter<"Purchase"> | string | null
    currency?: StringFilter<"Purchase"> | string
    exchangeRate?: FloatFilter<"Purchase"> | number
    commercialStatus?: EnumPurchaseCommercialStatusFilter<"Purchase"> | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFilter<"Purchase"> | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFilter<"Purchase"> | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFilter<"Purchase"> | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFilter<"Purchase"> | number
    discountTotal?: FloatFilter<"Purchase"> | number
    taxTotal?: FloatFilter<"Purchase"> | number
    otherCostTotal?: FloatFilter<"Purchase"> | number
    grandTotal?: FloatFilter<"Purchase"> | number
    amountPaid?: FloatFilter<"Purchase"> | number
    amountOutstanding?: FloatFilter<"Purchase"> | number
    notes?: StringNullableFilter<"Purchase"> | string | null
    approvedById?: StringNullableFilter<"Purchase"> | string | null
    approvedAt?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    createdById?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    items?: PurchaseItemListRelationFilter
    receivedItems?: PurchaseReceivedItemListRelationFilter
    receivings?: PurchaseReceivingListRelationFilter
    payments?: PurchasePaymentListRelationFilter
    returns?: PurchaseReturnListRelationFilter
    documents?: PurchaseDocumentListRelationFilter
    history?: PurchaseHistoryListRelationFilter
  }, "id" | "purchaseNumber">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    supplierContact?: SortOrderInput | SortOrder
    supplierAddress?: SortOrderInput | SortOrder
    supplierTaxId?: SortOrderInput | SortOrder
    purchaseDate?: SortOrder
    supplierInvoiceNo?: SortOrderInput | SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    commercialStatus?: SortOrder
    receivingStatus?: SortOrder
    paymentStatus?: SortOrder
    accountingStatus?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
    notes?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    tenantId?: StringWithAggregatesFilter<"Purchase"> | string
    shopId?: StringWithAggregatesFilter<"Purchase"> | string
    purchaseNumber?: StringWithAggregatesFilter<"Purchase"> | string
    supplierId?: StringWithAggregatesFilter<"Purchase"> | string
    supplierName?: StringWithAggregatesFilter<"Purchase"> | string
    supplierContact?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    supplierAddress?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    supplierTaxId?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    purchaseDate?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    supplierInvoiceNo?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    currency?: StringWithAggregatesFilter<"Purchase"> | string
    exchangeRate?: FloatWithAggregatesFilter<"Purchase"> | number
    commercialStatus?: EnumPurchaseCommercialStatusWithAggregatesFilter<"Purchase"> | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusWithAggregatesFilter<"Purchase"> | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusWithAggregatesFilter<"Purchase"> | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusWithAggregatesFilter<"Purchase"> | $Enums.PurchaseAccountingStatus
    subtotal?: FloatWithAggregatesFilter<"Purchase"> | number
    discountTotal?: FloatWithAggregatesFilter<"Purchase"> | number
    taxTotal?: FloatWithAggregatesFilter<"Purchase"> | number
    otherCostTotal?: FloatWithAggregatesFilter<"Purchase"> | number
    grandTotal?: FloatWithAggregatesFilter<"Purchase"> | number
    amountPaid?: FloatWithAggregatesFilter<"Purchase"> | number
    amountOutstanding?: FloatWithAggregatesFilter<"Purchase"> | number
    notes?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    approvedById?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"Purchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type PurchaseItemWhereInput = {
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    id?: StringFilter<"PurchaseItem"> | string
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    productName?: StringFilter<"PurchaseItem"> | string
    productSku?: StringFilter<"PurchaseItem"> | string
    productTracking?: StringFilter<"PurchaseItem"> | string
    orderedQty?: FloatFilter<"PurchaseItem"> | number
    receivedQty?: FloatFilter<"PurchaseItem"> | number
    acceptedQty?: FloatFilter<"PurchaseItem"> | number
    rejectedQty?: FloatFilter<"PurchaseItem"> | number
    returnedQty?: FloatFilter<"PurchaseItem"> | number
    unitPrice?: FloatFilter<"PurchaseItem"> | number
    discountAmount?: FloatFilter<"PurchaseItem"> | number
    discountType?: StringNullableFilter<"PurchaseItem"> | string | null
    taxRate?: FloatFilter<"PurchaseItem"> | number
    taxAmount?: FloatFilter<"PurchaseItem"> | number
    otherCosts?: FloatFilter<"PurchaseItem"> | number
    lineTotal?: FloatFilter<"PurchaseItem"> | number
    acquisitionCost?: FloatFilter<"PurchaseItem"> | number
    purchaseSpecs?: StringNullableFilter<"PurchaseItem"> | string | null
    notes?: StringNullableFilter<"PurchaseItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    receivedItems?: PurchaseReceivedItemListRelationFilter
    returnItems?: PurchaseReturnItemListRelationFilter
  }

  export type PurchaseItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    productTracking?: SortOrder
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    discountType?: SortOrderInput | SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
    purchaseSpecs?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    receivedItems?: PurchaseReceivedItemOrderByRelationAggregateInput
    returnItems?: PurchaseReturnItemOrderByRelationAggregateInput
  }

  export type PurchaseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    productName?: StringFilter<"PurchaseItem"> | string
    productSku?: StringFilter<"PurchaseItem"> | string
    productTracking?: StringFilter<"PurchaseItem"> | string
    orderedQty?: FloatFilter<"PurchaseItem"> | number
    receivedQty?: FloatFilter<"PurchaseItem"> | number
    acceptedQty?: FloatFilter<"PurchaseItem"> | number
    rejectedQty?: FloatFilter<"PurchaseItem"> | number
    returnedQty?: FloatFilter<"PurchaseItem"> | number
    unitPrice?: FloatFilter<"PurchaseItem"> | number
    discountAmount?: FloatFilter<"PurchaseItem"> | number
    discountType?: StringNullableFilter<"PurchaseItem"> | string | null
    taxRate?: FloatFilter<"PurchaseItem"> | number
    taxAmount?: FloatFilter<"PurchaseItem"> | number
    otherCosts?: FloatFilter<"PurchaseItem"> | number
    lineTotal?: FloatFilter<"PurchaseItem"> | number
    acquisitionCost?: FloatFilter<"PurchaseItem"> | number
    purchaseSpecs?: StringNullableFilter<"PurchaseItem"> | string | null
    notes?: StringNullableFilter<"PurchaseItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    receivedItems?: PurchaseReceivedItemListRelationFilter
    returnItems?: PurchaseReturnItemListRelationFilter
  }, "id">

  export type PurchaseItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    productTracking?: SortOrder
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    discountType?: SortOrderInput | SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
    purchaseSpecs?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseItemCountOrderByAggregateInput
    _avg?: PurchaseItemAvgOrderByAggregateInput
    _max?: PurchaseItemMaxOrderByAggregateInput
    _min?: PurchaseItemMinOrderByAggregateInput
    _sum?: PurchaseItemSumOrderByAggregateInput
  }

  export type PurchaseItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseItem"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseItem"> | string
    productId?: StringWithAggregatesFilter<"PurchaseItem"> | string
    productName?: StringWithAggregatesFilter<"PurchaseItem"> | string
    productSku?: StringWithAggregatesFilter<"PurchaseItem"> | string
    productTracking?: StringWithAggregatesFilter<"PurchaseItem"> | string
    orderedQty?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    receivedQty?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    acceptedQty?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    rejectedQty?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    returnedQty?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    discountAmount?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    discountType?: StringNullableWithAggregatesFilter<"PurchaseItem"> | string | null
    taxRate?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    taxAmount?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    otherCosts?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    lineTotal?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    acquisitionCost?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    purchaseSpecs?: StringNullableWithAggregatesFilter<"PurchaseItem"> | string | null
    notes?: StringNullableWithAggregatesFilter<"PurchaseItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseItem"> | Date | string
  }

  export type PurchaseReceivedItemWhereInput = {
    AND?: PurchaseReceivedItemWhereInput | PurchaseReceivedItemWhereInput[]
    OR?: PurchaseReceivedItemWhereInput[]
    NOT?: PurchaseReceivedItemWhereInput | PurchaseReceivedItemWhereInput[]
    id?: StringFilter<"PurchaseReceivedItem"> | string
    purchaseId?: StringFilter<"PurchaseReceivedItem"> | string
    purchaseItemId?: StringFilter<"PurchaseReceivedItem"> | string
    receivingId?: StringFilter<"PurchaseReceivedItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    imei1?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    imei2?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    condition?: EnumReceivingItemConditionFilter<"PurchaseReceivedItem"> | $Enums.ReceivingItemCondition
    actualSpecs?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    unitAcquisitionCost?: FloatFilter<"PurchaseReceivedItem"> | number
    notes?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReceivedItem"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    purchaseItem?: XOR<PurchaseItemRelationFilter, PurchaseItemWhereInput>
    receiving?: XOR<PurchaseReceivingRelationFilter, PurchaseReceivingWhereInput>
  }

  export type PurchaseReceivedItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    purchaseItemId?: SortOrder
    receivingId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    imei1?: SortOrderInput | SortOrder
    imei2?: SortOrderInput | SortOrder
    condition?: SortOrder
    actualSpecs?: SortOrderInput | SortOrder
    unitAcquisitionCost?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    purchaseItem?: PurchaseItemOrderByWithRelationInput
    receiving?: PurchaseReceivingOrderByWithRelationInput
  }

  export type PurchaseReceivedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseReceivedItemWhereInput | PurchaseReceivedItemWhereInput[]
    OR?: PurchaseReceivedItemWhereInput[]
    NOT?: PurchaseReceivedItemWhereInput | PurchaseReceivedItemWhereInput[]
    purchaseId?: StringFilter<"PurchaseReceivedItem"> | string
    purchaseItemId?: StringFilter<"PurchaseReceivedItem"> | string
    receivingId?: StringFilter<"PurchaseReceivedItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    imei1?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    imei2?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    condition?: EnumReceivingItemConditionFilter<"PurchaseReceivedItem"> | $Enums.ReceivingItemCondition
    actualSpecs?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    unitAcquisitionCost?: FloatFilter<"PurchaseReceivedItem"> | number
    notes?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReceivedItem"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    purchaseItem?: XOR<PurchaseItemRelationFilter, PurchaseItemWhereInput>
    receiving?: XOR<PurchaseReceivingRelationFilter, PurchaseReceivingWhereInput>
  }, "id">

  export type PurchaseReceivedItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    purchaseItemId?: SortOrder
    receivingId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    imei1?: SortOrderInput | SortOrder
    imei2?: SortOrderInput | SortOrder
    condition?: SortOrder
    actualSpecs?: SortOrderInput | SortOrder
    unitAcquisitionCost?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PurchaseReceivedItemCountOrderByAggregateInput
    _avg?: PurchaseReceivedItemAvgOrderByAggregateInput
    _max?: PurchaseReceivedItemMaxOrderByAggregateInput
    _min?: PurchaseReceivedItemMinOrderByAggregateInput
    _sum?: PurchaseReceivedItemSumOrderByAggregateInput
  }

  export type PurchaseReceivedItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseReceivedItemScalarWhereWithAggregatesInput | PurchaseReceivedItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseReceivedItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseReceivedItemScalarWhereWithAggregatesInput | PurchaseReceivedItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseReceivedItem"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseReceivedItem"> | string
    purchaseItemId?: StringWithAggregatesFilter<"PurchaseReceivedItem"> | string
    receivingId?: StringWithAggregatesFilter<"PurchaseReceivedItem"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"PurchaseReceivedItem"> | string | null
    imei1?: StringNullableWithAggregatesFilter<"PurchaseReceivedItem"> | string | null
    imei2?: StringNullableWithAggregatesFilter<"PurchaseReceivedItem"> | string | null
    condition?: EnumReceivingItemConditionWithAggregatesFilter<"PurchaseReceivedItem"> | $Enums.ReceivingItemCondition
    actualSpecs?: StringNullableWithAggregatesFilter<"PurchaseReceivedItem"> | string | null
    unitAcquisitionCost?: FloatWithAggregatesFilter<"PurchaseReceivedItem"> | number
    notes?: StringNullableWithAggregatesFilter<"PurchaseReceivedItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseReceivedItem"> | Date | string
  }

  export type PurchaseReceivingWhereInput = {
    AND?: PurchaseReceivingWhereInput | PurchaseReceivingWhereInput[]
    OR?: PurchaseReceivingWhereInput[]
    NOT?: PurchaseReceivingWhereInput | PurchaseReceivingWhereInput[]
    id?: StringFilter<"PurchaseReceiving"> | string
    purchaseId?: StringFilter<"PurchaseReceiving"> | string
    receivingNumber?: StringFilter<"PurchaseReceiving"> | string
    receivedById?: StringFilter<"PurchaseReceiving"> | string
    receivedAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    receivedAtShop?: StringFilter<"PurchaseReceiving"> | string
    notes?: StringNullableFilter<"PurchaseReceiving"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    receivedItems?: PurchaseReceivedItemListRelationFilter
  }

  export type PurchaseReceivingOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    receivingNumber?: SortOrder
    receivedById?: SortOrder
    receivedAt?: SortOrder
    receivedAtShop?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    receivedItems?: PurchaseReceivedItemOrderByRelationAggregateInput
  }

  export type PurchaseReceivingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receivingNumber?: string
    AND?: PurchaseReceivingWhereInput | PurchaseReceivingWhereInput[]
    OR?: PurchaseReceivingWhereInput[]
    NOT?: PurchaseReceivingWhereInput | PurchaseReceivingWhereInput[]
    purchaseId?: StringFilter<"PurchaseReceiving"> | string
    receivedById?: StringFilter<"PurchaseReceiving"> | string
    receivedAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    receivedAtShop?: StringFilter<"PurchaseReceiving"> | string
    notes?: StringNullableFilter<"PurchaseReceiving"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
    receivedItems?: PurchaseReceivedItemListRelationFilter
  }, "id" | "receivingNumber">

  export type PurchaseReceivingOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    receivingNumber?: SortOrder
    receivedById?: SortOrder
    receivedAt?: SortOrder
    receivedAtShop?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseReceivingCountOrderByAggregateInput
    _max?: PurchaseReceivingMaxOrderByAggregateInput
    _min?: PurchaseReceivingMinOrderByAggregateInput
  }

  export type PurchaseReceivingScalarWhereWithAggregatesInput = {
    AND?: PurchaseReceivingScalarWhereWithAggregatesInput | PurchaseReceivingScalarWhereWithAggregatesInput[]
    OR?: PurchaseReceivingScalarWhereWithAggregatesInput[]
    NOT?: PurchaseReceivingScalarWhereWithAggregatesInput | PurchaseReceivingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseReceiving"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseReceiving"> | string
    receivingNumber?: StringWithAggregatesFilter<"PurchaseReceiving"> | string
    receivedById?: StringWithAggregatesFilter<"PurchaseReceiving"> | string
    receivedAt?: DateTimeWithAggregatesFilter<"PurchaseReceiving"> | Date | string
    receivedAtShop?: StringWithAggregatesFilter<"PurchaseReceiving"> | string
    notes?: StringNullableWithAggregatesFilter<"PurchaseReceiving"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseReceiving"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseReceiving"> | Date | string
  }

  export type PurchasePaymentWhereInput = {
    AND?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    OR?: PurchasePaymentWhereInput[]
    NOT?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    id?: StringFilter<"PurchasePayment"> | string
    purchaseId?: StringFilter<"PurchasePayment"> | string
    paymentNumber?: StringFilter<"PurchasePayment"> | string
    amount?: FloatFilter<"PurchasePayment"> | number
    currency?: StringFilter<"PurchasePayment"> | string
    exchangeRate?: FloatFilter<"PurchasePayment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"PurchasePayment"> | $Enums.PaymentMethod
    accountId?: StringNullableFilter<"PurchasePayment"> | string | null
    accountName?: StringNullableFilter<"PurchasePayment"> | string | null
    reference?: StringNullableFilter<"PurchasePayment"> | string | null
    paidById?: StringFilter<"PurchasePayment"> | string
    paidAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    notes?: StringNullableFilter<"PurchasePayment"> | string | null
    accountingRef?: StringNullableFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    updatedAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type PurchasePaymentOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    paymentNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    accountId?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    paidById?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    accountingRef?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchasePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentNumber?: string
    AND?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    OR?: PurchasePaymentWhereInput[]
    NOT?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    purchaseId?: StringFilter<"PurchasePayment"> | string
    amount?: FloatFilter<"PurchasePayment"> | number
    currency?: StringFilter<"PurchasePayment"> | string
    exchangeRate?: FloatFilter<"PurchasePayment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"PurchasePayment"> | $Enums.PaymentMethod
    accountId?: StringNullableFilter<"PurchasePayment"> | string | null
    accountName?: StringNullableFilter<"PurchasePayment"> | string | null
    reference?: StringNullableFilter<"PurchasePayment"> | string | null
    paidById?: StringFilter<"PurchasePayment"> | string
    paidAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    notes?: StringNullableFilter<"PurchasePayment"> | string | null
    accountingRef?: StringNullableFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    updatedAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id" | "paymentNumber">

  export type PurchasePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    paymentNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    accountId?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    paidById?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    accountingRef?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchasePaymentCountOrderByAggregateInput
    _avg?: PurchasePaymentAvgOrderByAggregateInput
    _max?: PurchasePaymentMaxOrderByAggregateInput
    _min?: PurchasePaymentMinOrderByAggregateInput
    _sum?: PurchasePaymentSumOrderByAggregateInput
  }

  export type PurchasePaymentScalarWhereWithAggregatesInput = {
    AND?: PurchasePaymentScalarWhereWithAggregatesInput | PurchasePaymentScalarWhereWithAggregatesInput[]
    OR?: PurchasePaymentScalarWhereWithAggregatesInput[]
    NOT?: PurchasePaymentScalarWhereWithAggregatesInput | PurchasePaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchasePayment"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchasePayment"> | string
    paymentNumber?: StringWithAggregatesFilter<"PurchasePayment"> | string
    amount?: FloatWithAggregatesFilter<"PurchasePayment"> | number
    currency?: StringWithAggregatesFilter<"PurchasePayment"> | string
    exchangeRate?: FloatWithAggregatesFilter<"PurchasePayment"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"PurchasePayment"> | $Enums.PaymentMethod
    accountId?: StringNullableWithAggregatesFilter<"PurchasePayment"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"PurchasePayment"> | string | null
    reference?: StringNullableWithAggregatesFilter<"PurchasePayment"> | string | null
    paidById?: StringWithAggregatesFilter<"PurchasePayment"> | string
    paidAt?: DateTimeWithAggregatesFilter<"PurchasePayment"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"PurchasePayment"> | string | null
    accountingRef?: StringNullableWithAggregatesFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchasePayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchasePayment"> | Date | string
  }

  export type PurchaseReturnWhereInput = {
    AND?: PurchaseReturnWhereInput | PurchaseReturnWhereInput[]
    OR?: PurchaseReturnWhereInput[]
    NOT?: PurchaseReturnWhereInput | PurchaseReturnWhereInput[]
    id?: StringFilter<"PurchaseReturn"> | string
    tenantId?: StringFilter<"PurchaseReturn"> | string
    shopId?: StringFilter<"PurchaseReturn"> | string
    purchaseId?: StringNullableFilter<"PurchaseReturn"> | string | null
    supplierId?: StringFilter<"PurchaseReturn"> | string
    returnNumber?: StringFilter<"PurchaseReturn"> | string
    totalAmount?: FloatFilter<"PurchaseReturn"> | number
    refundAmount?: FloatFilter<"PurchaseReturn"> | number
    reason?: StringNullableFilter<"PurchaseReturn"> | string | null
    status?: StringFilter<"PurchaseReturn"> | string
    createdById?: StringFilter<"PurchaseReturn"> | string
    createdAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    items?: PurchaseReturnItemListRelationFilter
    purchase?: XOR<PurchaseNullableRelationFilter, PurchaseWhereInput> | null
  }

  export type PurchaseReturnOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: PurchaseReturnItemOrderByRelationAggregateInput
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchaseReturnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    returnNumber?: string
    AND?: PurchaseReturnWhereInput | PurchaseReturnWhereInput[]
    OR?: PurchaseReturnWhereInput[]
    NOT?: PurchaseReturnWhereInput | PurchaseReturnWhereInput[]
    tenantId?: StringFilter<"PurchaseReturn"> | string
    shopId?: StringFilter<"PurchaseReturn"> | string
    purchaseId?: StringNullableFilter<"PurchaseReturn"> | string | null
    supplierId?: StringFilter<"PurchaseReturn"> | string
    totalAmount?: FloatFilter<"PurchaseReturn"> | number
    refundAmount?: FloatFilter<"PurchaseReturn"> | number
    reason?: StringNullableFilter<"PurchaseReturn"> | string | null
    status?: StringFilter<"PurchaseReturn"> | string
    createdById?: StringFilter<"PurchaseReturn"> | string
    createdAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    items?: PurchaseReturnItemListRelationFilter
    purchase?: XOR<PurchaseNullableRelationFilter, PurchaseWhereInput> | null
  }, "id" | "returnNumber">

  export type PurchaseReturnOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseReturnCountOrderByAggregateInput
    _avg?: PurchaseReturnAvgOrderByAggregateInput
    _max?: PurchaseReturnMaxOrderByAggregateInput
    _min?: PurchaseReturnMinOrderByAggregateInput
    _sum?: PurchaseReturnSumOrderByAggregateInput
  }

  export type PurchaseReturnScalarWhereWithAggregatesInput = {
    AND?: PurchaseReturnScalarWhereWithAggregatesInput | PurchaseReturnScalarWhereWithAggregatesInput[]
    OR?: PurchaseReturnScalarWhereWithAggregatesInput[]
    NOT?: PurchaseReturnScalarWhereWithAggregatesInput | PurchaseReturnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    tenantId?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    shopId?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    purchaseId?: StringNullableWithAggregatesFilter<"PurchaseReturn"> | string | null
    supplierId?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    returnNumber?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    totalAmount?: FloatWithAggregatesFilter<"PurchaseReturn"> | number
    refundAmount?: FloatWithAggregatesFilter<"PurchaseReturn"> | number
    reason?: StringNullableWithAggregatesFilter<"PurchaseReturn"> | string | null
    status?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    createdById?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseReturn"> | Date | string
  }

  export type PurchaseReturnItemWhereInput = {
    AND?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    OR?: PurchaseReturnItemWhereInput[]
    NOT?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    id?: StringFilter<"PurchaseReturnItem"> | string
    purchaseReturnId?: StringFilter<"PurchaseReturnItem"> | string
    purchaseItemId?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    productId?: StringFilter<"PurchaseReturnItem"> | string
    productName?: StringFilter<"PurchaseReturnItem"> | string
    productSku?: StringFilter<"PurchaseReturnItem"> | string
    receivedItemId?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    serialNumber?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    imei1?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    imei2?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatFilter<"PurchaseReturnItem"> | number
    condition?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    reason?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReturnItem"> | Date | string
    purchaseReturn?: XOR<PurchaseReturnRelationFilter, PurchaseReturnWhereInput>
    purchaseItem?: XOR<PurchaseItemNullableRelationFilter, PurchaseItemWhereInput> | null
  }

  export type PurchaseReturnItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    purchaseItemId?: SortOrderInput | SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    receivedItemId?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    imei1?: SortOrderInput | SortOrder
    imei2?: SortOrderInput | SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    condition?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchaseReturn?: PurchaseReturnOrderByWithRelationInput
    purchaseItem?: PurchaseItemOrderByWithRelationInput
  }

  export type PurchaseReturnItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    OR?: PurchaseReturnItemWhereInput[]
    NOT?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    purchaseReturnId?: StringFilter<"PurchaseReturnItem"> | string
    purchaseItemId?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    productId?: StringFilter<"PurchaseReturnItem"> | string
    productName?: StringFilter<"PurchaseReturnItem"> | string
    productSku?: StringFilter<"PurchaseReturnItem"> | string
    receivedItemId?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    serialNumber?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    imei1?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    imei2?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatFilter<"PurchaseReturnItem"> | number
    condition?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    reason?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReturnItem"> | Date | string
    purchaseReturn?: XOR<PurchaseReturnRelationFilter, PurchaseReturnWhereInput>
    purchaseItem?: XOR<PurchaseItemNullableRelationFilter, PurchaseItemWhereInput> | null
  }, "id">

  export type PurchaseReturnItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    purchaseItemId?: SortOrderInput | SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    receivedItemId?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    imei1?: SortOrderInput | SortOrder
    imei2?: SortOrderInput | SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    condition?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PurchaseReturnItemCountOrderByAggregateInput
    _avg?: PurchaseReturnItemAvgOrderByAggregateInput
    _max?: PurchaseReturnItemMaxOrderByAggregateInput
    _min?: PurchaseReturnItemMinOrderByAggregateInput
    _sum?: PurchaseReturnItemSumOrderByAggregateInput
  }

  export type PurchaseReturnItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseReturnItemScalarWhereWithAggregatesInput | PurchaseReturnItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseReturnItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseReturnItemScalarWhereWithAggregatesInput | PurchaseReturnItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseReturnItem"> | string
    purchaseReturnId?: StringWithAggregatesFilter<"PurchaseReturnItem"> | string
    purchaseItemId?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    productId?: StringWithAggregatesFilter<"PurchaseReturnItem"> | string
    productName?: StringWithAggregatesFilter<"PurchaseReturnItem"> | string
    productSku?: StringWithAggregatesFilter<"PurchaseReturnItem"> | string
    receivedItemId?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    imei1?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    imei2?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatWithAggregatesFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatWithAggregatesFilter<"PurchaseReturnItem"> | number
    condition?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    reason?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseReturnItem"> | Date | string
  }

  export type PurchaseDocumentWhereInput = {
    AND?: PurchaseDocumentWhereInput | PurchaseDocumentWhereInput[]
    OR?: PurchaseDocumentWhereInput[]
    NOT?: PurchaseDocumentWhereInput | PurchaseDocumentWhereInput[]
    id?: StringFilter<"PurchaseDocument"> | string
    purchaseId?: StringFilter<"PurchaseDocument"> | string
    documentType?: StringFilter<"PurchaseDocument"> | string
    fileName?: StringFilter<"PurchaseDocument"> | string
    fileUrl?: StringFilter<"PurchaseDocument"> | string
    fileSize?: IntNullableFilter<"PurchaseDocument"> | number | null
    mimeType?: StringNullableFilter<"PurchaseDocument"> | string | null
    uploadedById?: StringFilter<"PurchaseDocument"> | string
    uploadedAt?: DateTimeFilter<"PurchaseDocument"> | Date | string
    notes?: StringNullableFilter<"PurchaseDocument"> | string | null
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type PurchaseDocumentOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchaseDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseDocumentWhereInput | PurchaseDocumentWhereInput[]
    OR?: PurchaseDocumentWhereInput[]
    NOT?: PurchaseDocumentWhereInput | PurchaseDocumentWhereInput[]
    purchaseId?: StringFilter<"PurchaseDocument"> | string
    documentType?: StringFilter<"PurchaseDocument"> | string
    fileName?: StringFilter<"PurchaseDocument"> | string
    fileUrl?: StringFilter<"PurchaseDocument"> | string
    fileSize?: IntNullableFilter<"PurchaseDocument"> | number | null
    mimeType?: StringNullableFilter<"PurchaseDocument"> | string | null
    uploadedById?: StringFilter<"PurchaseDocument"> | string
    uploadedAt?: DateTimeFilter<"PurchaseDocument"> | Date | string
    notes?: StringNullableFilter<"PurchaseDocument"> | string | null
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id">

  export type PurchaseDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PurchaseDocumentCountOrderByAggregateInput
    _avg?: PurchaseDocumentAvgOrderByAggregateInput
    _max?: PurchaseDocumentMaxOrderByAggregateInput
    _min?: PurchaseDocumentMinOrderByAggregateInput
    _sum?: PurchaseDocumentSumOrderByAggregateInput
  }

  export type PurchaseDocumentScalarWhereWithAggregatesInput = {
    AND?: PurchaseDocumentScalarWhereWithAggregatesInput | PurchaseDocumentScalarWhereWithAggregatesInput[]
    OR?: PurchaseDocumentScalarWhereWithAggregatesInput[]
    NOT?: PurchaseDocumentScalarWhereWithAggregatesInput | PurchaseDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseDocument"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseDocument"> | string
    documentType?: StringWithAggregatesFilter<"PurchaseDocument"> | string
    fileName?: StringWithAggregatesFilter<"PurchaseDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"PurchaseDocument"> | string
    fileSize?: IntNullableWithAggregatesFilter<"PurchaseDocument"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"PurchaseDocument"> | string | null
    uploadedById?: StringWithAggregatesFilter<"PurchaseDocument"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"PurchaseDocument"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"PurchaseDocument"> | string | null
  }

  export type PurchaseHistoryWhereInput = {
    AND?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    OR?: PurchaseHistoryWhereInput[]
    NOT?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    id?: StringFilter<"PurchaseHistory"> | string
    purchaseId?: StringFilter<"PurchaseHistory"> | string
    eventType?: StringFilter<"PurchaseHistory"> | string
    eventData?: StringFilter<"PurchaseHistory"> | string
    userId?: StringFilter<"PurchaseHistory"> | string
    userName?: StringFilter<"PurchaseHistory"> | string
    traceId?: StringNullableFilter<"PurchaseHistory"> | string | null
    createdAt?: DateTimeFilter<"PurchaseHistory"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type PurchaseHistoryOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    traceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchaseHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    OR?: PurchaseHistoryWhereInput[]
    NOT?: PurchaseHistoryWhereInput | PurchaseHistoryWhereInput[]
    purchaseId?: StringFilter<"PurchaseHistory"> | string
    eventType?: StringFilter<"PurchaseHistory"> | string
    eventData?: StringFilter<"PurchaseHistory"> | string
    userId?: StringFilter<"PurchaseHistory"> | string
    userName?: StringFilter<"PurchaseHistory"> | string
    traceId?: StringNullableFilter<"PurchaseHistory"> | string | null
    createdAt?: DateTimeFilter<"PurchaseHistory"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id">

  export type PurchaseHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    traceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PurchaseHistoryCountOrderByAggregateInput
    _max?: PurchaseHistoryMaxOrderByAggregateInput
    _min?: PurchaseHistoryMinOrderByAggregateInput
  }

  export type PurchaseHistoryScalarWhereWithAggregatesInput = {
    AND?: PurchaseHistoryScalarWhereWithAggregatesInput | PurchaseHistoryScalarWhereWithAggregatesInput[]
    OR?: PurchaseHistoryScalarWhereWithAggregatesInput[]
    NOT?: PurchaseHistoryScalarWhereWithAggregatesInput | PurchaseHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseHistory"> | string
    purchaseId?: StringWithAggregatesFilter<"PurchaseHistory"> | string
    eventType?: StringWithAggregatesFilter<"PurchaseHistory"> | string
    eventData?: StringWithAggregatesFilter<"PurchaseHistory"> | string
    userId?: StringWithAggregatesFilter<"PurchaseHistory"> | string
    userName?: StringWithAggregatesFilter<"PurchaseHistory"> | string
    traceId?: StringNullableWithAggregatesFilter<"PurchaseHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseHistory"> | Date | string
  }

  export type SupplierOrderWhereInput = {
    AND?: SupplierOrderWhereInput | SupplierOrderWhereInput[]
    OR?: SupplierOrderWhereInput[]
    NOT?: SupplierOrderWhereInput | SupplierOrderWhereInput[]
    id?: StringFilter<"SupplierOrder"> | string
    tenantId?: StringFilter<"SupplierOrder"> | string
    shopId?: StringFilter<"SupplierOrder"> | string
    supplierId?: StringFilter<"SupplierOrder"> | string
    orderNumber?: StringFilter<"SupplierOrder"> | string
    totalAmount?: FloatFilter<"SupplierOrder"> | number
    status?: StringFilter<"SupplierOrder"> | string
    createdById?: StringFilter<"SupplierOrder"> | string
    createdAt?: DateTimeFilter<"SupplierOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierOrder"> | Date | string
    items?: SupplierOrderItemListRelationFilter
  }

  export type SupplierOrderOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    supplierId?: SortOrder
    orderNumber?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: SupplierOrderItemOrderByRelationAggregateInput
  }

  export type SupplierOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: SupplierOrderWhereInput | SupplierOrderWhereInput[]
    OR?: SupplierOrderWhereInput[]
    NOT?: SupplierOrderWhereInput | SupplierOrderWhereInput[]
    tenantId?: StringFilter<"SupplierOrder"> | string
    shopId?: StringFilter<"SupplierOrder"> | string
    supplierId?: StringFilter<"SupplierOrder"> | string
    totalAmount?: FloatFilter<"SupplierOrder"> | number
    status?: StringFilter<"SupplierOrder"> | string
    createdById?: StringFilter<"SupplierOrder"> | string
    createdAt?: DateTimeFilter<"SupplierOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierOrder"> | Date | string
    items?: SupplierOrderItemListRelationFilter
  }, "id" | "orderNumber">

  export type SupplierOrderOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    supplierId?: SortOrder
    orderNumber?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierOrderCountOrderByAggregateInput
    _avg?: SupplierOrderAvgOrderByAggregateInput
    _max?: SupplierOrderMaxOrderByAggregateInput
    _min?: SupplierOrderMinOrderByAggregateInput
    _sum?: SupplierOrderSumOrderByAggregateInput
  }

  export type SupplierOrderScalarWhereWithAggregatesInput = {
    AND?: SupplierOrderScalarWhereWithAggregatesInput | SupplierOrderScalarWhereWithAggregatesInput[]
    OR?: SupplierOrderScalarWhereWithAggregatesInput[]
    NOT?: SupplierOrderScalarWhereWithAggregatesInput | SupplierOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierOrder"> | string
    tenantId?: StringWithAggregatesFilter<"SupplierOrder"> | string
    shopId?: StringWithAggregatesFilter<"SupplierOrder"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierOrder"> | string
    orderNumber?: StringWithAggregatesFilter<"SupplierOrder"> | string
    totalAmount?: FloatWithAggregatesFilter<"SupplierOrder"> | number
    status?: StringWithAggregatesFilter<"SupplierOrder"> | string
    createdById?: StringWithAggregatesFilter<"SupplierOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SupplierOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierOrder"> | Date | string
  }

  export type SupplierOrderItemWhereInput = {
    AND?: SupplierOrderItemWhereInput | SupplierOrderItemWhereInput[]
    OR?: SupplierOrderItemWhereInput[]
    NOT?: SupplierOrderItemWhereInput | SupplierOrderItemWhereInput[]
    id?: StringFilter<"SupplierOrderItem"> | string
    supplierOrderId?: StringFilter<"SupplierOrderItem"> | string
    productId?: StringFilter<"SupplierOrderItem"> | string
    quantity?: FloatFilter<"SupplierOrderItem"> | number
    unitPrice?: FloatFilter<"SupplierOrderItem"> | number
    total?: FloatFilter<"SupplierOrderItem"> | number
    createdAt?: DateTimeFilter<"SupplierOrderItem"> | Date | string
    supplierOrder?: XOR<SupplierOrderRelationFilter, SupplierOrderWhereInput>
  }

  export type SupplierOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    supplierOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    supplierOrder?: SupplierOrderOrderByWithRelationInput
  }

  export type SupplierOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierOrderItemWhereInput | SupplierOrderItemWhereInput[]
    OR?: SupplierOrderItemWhereInput[]
    NOT?: SupplierOrderItemWhereInput | SupplierOrderItemWhereInput[]
    supplierOrderId?: StringFilter<"SupplierOrderItem"> | string
    productId?: StringFilter<"SupplierOrderItem"> | string
    quantity?: FloatFilter<"SupplierOrderItem"> | number
    unitPrice?: FloatFilter<"SupplierOrderItem"> | number
    total?: FloatFilter<"SupplierOrderItem"> | number
    createdAt?: DateTimeFilter<"SupplierOrderItem"> | Date | string
    supplierOrder?: XOR<SupplierOrderRelationFilter, SupplierOrderWhereInput>
  }, "id">

  export type SupplierOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    supplierOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: SupplierOrderItemCountOrderByAggregateInput
    _avg?: SupplierOrderItemAvgOrderByAggregateInput
    _max?: SupplierOrderItemMaxOrderByAggregateInput
    _min?: SupplierOrderItemMinOrderByAggregateInput
    _sum?: SupplierOrderItemSumOrderByAggregateInput
  }

  export type SupplierOrderItemScalarWhereWithAggregatesInput = {
    AND?: SupplierOrderItemScalarWhereWithAggregatesInput | SupplierOrderItemScalarWhereWithAggregatesInput[]
    OR?: SupplierOrderItemScalarWhereWithAggregatesInput[]
    NOT?: SupplierOrderItemScalarWhereWithAggregatesInput | SupplierOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierOrderItem"> | string
    supplierOrderId?: StringWithAggregatesFilter<"SupplierOrderItem"> | string
    productId?: StringWithAggregatesFilter<"SupplierOrderItem"> | string
    quantity?: FloatWithAggregatesFilter<"SupplierOrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"SupplierOrderItem"> | number
    total?: FloatWithAggregatesFilter<"SupplierOrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SupplierOrderItem"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenantId?: StringFilter<"AuditLog"> | string
    shopId?: StringNullableFilter<"AuditLog"> | string | null
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    traceId?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    traceId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tenantId?: StringFilter<"AuditLog"> | string
    shopId?: StringNullableFilter<"AuditLog"> | string | null
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    traceId?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    traceId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    tenantId?: StringWithAggregatesFilter<"AuditLog"> | string
    shopId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resource?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    traceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutItemsInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseItemInput
    returnItems?: PurchaseReturnItemCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemUncheckedCreateInput = {
    id?: string
    purchaseId: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseItemInput
    returnItems?: PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseItemNestedInput
    returnItems?: PurchaseReturnItemUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseItemNestedInput
    returnItems?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseItemCreateManyInput = {
    id?: string
    purchaseId: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemCreateInput = {
    id?: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutReceivedItemsInput
    purchaseItem: PurchaseItemCreateNestedOneWithoutReceivedItemsInput
    receiving: PurchaseReceivingCreateNestedOneWithoutReceivedItemsInput
  }

  export type PurchaseReceivedItemUncheckedCreateInput = {
    id?: string
    purchaseId: string
    purchaseItemId: string
    receivingId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutReceivedItemsNestedInput
    purchaseItem?: PurchaseItemUpdateOneRequiredWithoutReceivedItemsNestedInput
    receiving?: PurchaseReceivingUpdateOneRequiredWithoutReceivedItemsNestedInput
  }

  export type PurchaseReceivedItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: StringFieldUpdateOperationsInput | string
    receivingId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemCreateManyInput = {
    id?: string
    purchaseId: string
    purchaseItemId: string
    receivingId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: StringFieldUpdateOperationsInput | string
    receivingId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivingCreateInput = {
    id?: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutReceivingsInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutReceivingInput
  }

  export type PurchaseReceivingUncheckedCreateInput = {
    id?: string
    purchaseId: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutReceivingInput
  }

  export type PurchaseReceivingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutReceivingsNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutReceivingNestedInput
  }

  export type PurchaseReceivingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutReceivingNestedInput
  }

  export type PurchaseReceivingCreateManyInput = {
    id?: string
    purchaseId: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReceivingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentCreateInput = {
    id?: string
    paymentNumber: string
    amount: number
    currency?: string
    exchangeRate?: number
    paymentMethod: $Enums.PaymentMethod
    accountId?: string | null
    accountName?: string | null
    reference?: string | null
    paidById: string
    paidAt?: Date | string
    notes?: string | null
    accountingRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutPaymentsInput
  }

  export type PurchasePaymentUncheckedCreateInput = {
    id?: string
    purchaseId: string
    paymentNumber: string
    amount: number
    currency?: string
    exchangeRate?: number
    paymentMethod: $Enums.PaymentMethod
    accountId?: string | null
    accountName?: string | null
    reference?: string | null
    paidById: string
    paidAt?: Date | string
    notes?: string | null
    accountingRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasePaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PurchasePaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentCreateManyInput = {
    id?: string
    purchaseId: string
    paymentNumber: string
    amount: number
    currency?: string
    exchangeRate?: number
    paymentMethod: $Enums.PaymentMethod
    accountId?: string | null
    accountName?: string | null
    reference?: string | null
    paidById: string
    paidAt?: Date | string
    notes?: string | null
    accountingRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasePaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemCreateNestedManyWithoutPurchaseReturnInput
    purchase?: PurchaseCreateNestedOneWithoutReturnsInput
  }

  export type PurchaseReturnUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseId?: string | null
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseReturnInput
  }

  export type PurchaseReturnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUpdateManyWithoutPurchaseReturnNestedInput
    purchase?: PurchaseUpdateOneWithoutReturnsNestedInput
  }

  export type PurchaseReturnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnNestedInput
  }

  export type PurchaseReturnCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseId?: string | null
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReturnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemCreateInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
    purchaseReturn: PurchaseReturnCreateNestedOneWithoutItemsInput
    purchaseItem?: PurchaseItemCreateNestedOneWithoutReturnItemsInput
  }

  export type PurchaseReturnItemUncheckedCreateInput = {
    id?: string
    purchaseReturnId: string
    purchaseItemId?: string | null
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseReturn?: PurchaseReturnUpdateOneRequiredWithoutItemsNestedInput
    purchaseItem?: PurchaseItemUpdateOneWithoutReturnItemsNestedInput
  }

  export type PurchaseReturnItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseReturnId?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemCreateManyInput = {
    id?: string
    purchaseReturnId: string
    purchaseItemId?: string | null
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseReturnId?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseDocumentCreateInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    uploadedById: string
    uploadedAt?: Date | string
    notes?: string | null
    purchase: PurchaseCreateNestedOneWithoutDocumentsInput
  }

  export type PurchaseDocumentUncheckedCreateInput = {
    id?: string
    purchaseId: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    uploadedById: string
    uploadedAt?: Date | string
    notes?: string | null
  }

  export type PurchaseDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase?: PurchaseUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type PurchaseDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseDocumentCreateManyInput = {
    id?: string
    purchaseId: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    uploadedById: string
    uploadedAt?: Date | string
    notes?: string | null
  }

  export type PurchaseDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseHistoryCreateInput = {
    id?: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId?: string | null
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutHistoryInput
  }

  export type PurchaseHistoryUncheckedCreateInput = {
    id?: string
    purchaseId: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PurchaseHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type PurchaseHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseHistoryCreateManyInput = {
    id?: string
    purchaseId: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PurchaseHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    orderNumber: string
    totalAmount: number
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SupplierOrderItemCreateNestedManyWithoutSupplierOrderInput
  }

  export type SupplierOrderUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    orderNumber: string
    totalAmount: number
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SupplierOrderItemUncheckedCreateNestedManyWithoutSupplierOrderInput
  }

  export type SupplierOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SupplierOrderItemUpdateManyWithoutSupplierOrderNestedInput
  }

  export type SupplierOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SupplierOrderItemUncheckedUpdateManyWithoutSupplierOrderNestedInput
  }

  export type SupplierOrderCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    orderNumber: string
    totalAmount: number
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderItemCreateInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt?: Date | string
    supplierOrder: SupplierOrderCreateNestedOneWithoutItemsInput
  }

  export type SupplierOrderItemUncheckedCreateInput = {
    id?: string
    supplierOrderId: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt?: Date | string
  }

  export type SupplierOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierOrder?: SupplierOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SupplierOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierOrderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderItemCreateManyInput = {
    id?: string
    supplierOrderId: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt?: Date | string
  }

  export type SupplierOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierOrderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    userId?: string | null
    action: string
    resource: string
    resourceId?: string | null
    traceId?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    userId?: string | null
    action: string
    resource: string
    resourceId?: string | null
    traceId?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    userId?: string | null
    action: string
    resource: string
    resourceId?: string | null
    traceId?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPurchaseCommercialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseCommercialStatus | EnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseCommercialStatusFilter<$PrismaModel> | $Enums.PurchaseCommercialStatus
  }

  export type EnumPurchaseReceivingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseReceivingStatus | EnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseReceivingStatusFilter<$PrismaModel> | $Enums.PurchaseReceivingStatus
  }

  export type EnumPurchasePaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePaymentStatus | EnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchasePaymentStatusFilter<$PrismaModel> | $Enums.PurchasePaymentStatus
  }

  export type EnumPurchaseAccountingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseAccountingStatus | EnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseAccountingStatusFilter<$PrismaModel> | $Enums.PurchaseAccountingStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PurchaseItemListRelationFilter = {
    every?: PurchaseItemWhereInput
    some?: PurchaseItemWhereInput
    none?: PurchaseItemWhereInput
  }

  export type PurchaseReceivedItemListRelationFilter = {
    every?: PurchaseReceivedItemWhereInput
    some?: PurchaseReceivedItemWhereInput
    none?: PurchaseReceivedItemWhereInput
  }

  export type PurchaseReceivingListRelationFilter = {
    every?: PurchaseReceivingWhereInput
    some?: PurchaseReceivingWhereInput
    none?: PurchaseReceivingWhereInput
  }

  export type PurchasePaymentListRelationFilter = {
    every?: PurchasePaymentWhereInput
    some?: PurchasePaymentWhereInput
    none?: PurchasePaymentWhereInput
  }

  export type PurchaseReturnListRelationFilter = {
    every?: PurchaseReturnWhereInput
    some?: PurchaseReturnWhereInput
    none?: PurchaseReturnWhereInput
  }

  export type PurchaseDocumentListRelationFilter = {
    every?: PurchaseDocumentWhereInput
    some?: PurchaseDocumentWhereInput
    none?: PurchaseDocumentWhereInput
  }

  export type PurchaseHistoryListRelationFilter = {
    every?: PurchaseHistoryWhereInput
    some?: PurchaseHistoryWhereInput
    none?: PurchaseHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseReceivedItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseReceivingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseReturnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    supplierContact?: SortOrder
    supplierAddress?: SortOrder
    supplierTaxId?: SortOrder
    purchaseDate?: SortOrder
    supplierInvoiceNo?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    commercialStatus?: SortOrder
    receivingStatus?: SortOrder
    paymentStatus?: SortOrder
    accountingStatus?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
    notes?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    exchangeRate?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    supplierContact?: SortOrder
    supplierAddress?: SortOrder
    supplierTaxId?: SortOrder
    purchaseDate?: SortOrder
    supplierInvoiceNo?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    commercialStatus?: SortOrder
    receivingStatus?: SortOrder
    paymentStatus?: SortOrder
    accountingStatus?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
    notes?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseNumber?: SortOrder
    supplierId?: SortOrder
    supplierName?: SortOrder
    supplierContact?: SortOrder
    supplierAddress?: SortOrder
    supplierTaxId?: SortOrder
    purchaseDate?: SortOrder
    supplierInvoiceNo?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    commercialStatus?: SortOrder
    receivingStatus?: SortOrder
    paymentStatus?: SortOrder
    accountingStatus?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
    notes?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    exchangeRate?: SortOrder
    subtotal?: SortOrder
    discountTotal?: SortOrder
    taxTotal?: SortOrder
    otherCostTotal?: SortOrder
    grandTotal?: SortOrder
    amountPaid?: SortOrder
    amountOutstanding?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPurchaseCommercialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseCommercialStatus | EnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseCommercialStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseCommercialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseCommercialStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseCommercialStatusFilter<$PrismaModel>
  }

  export type EnumPurchaseReceivingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseReceivingStatus | EnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseReceivingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseReceivingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseReceivingStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseReceivingStatusFilter<$PrismaModel>
  }

  export type EnumPurchasePaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePaymentStatus | EnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchasePaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchasePaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchasePaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchasePaymentStatusFilter<$PrismaModel>
  }

  export type EnumPurchaseAccountingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseAccountingStatus | EnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseAccountingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseAccountingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseAccountingStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseAccountingStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PurchaseRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type PurchaseReturnItemListRelationFilter = {
    every?: PurchaseReturnItemWhereInput
    some?: PurchaseReturnItemWhereInput
    none?: PurchaseReturnItemWhereInput
  }

  export type PurchaseReturnItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    productTracking?: SortOrder
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    discountType?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
    purchaseSpecs?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseItemAvgOrderByAggregateInput = {
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
  }

  export type PurchaseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    productTracking?: SortOrder
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    discountType?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
    purchaseSpecs?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    productTracking?: SortOrder
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    discountType?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
    purchaseSpecs?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseItemSumOrderByAggregateInput = {
    orderedQty?: SortOrder
    receivedQty?: SortOrder
    acceptedQty?: SortOrder
    rejectedQty?: SortOrder
    returnedQty?: SortOrder
    unitPrice?: SortOrder
    discountAmount?: SortOrder
    taxRate?: SortOrder
    taxAmount?: SortOrder
    otherCosts?: SortOrder
    lineTotal?: SortOrder
    acquisitionCost?: SortOrder
  }

  export type EnumReceivingItemConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.ReceivingItemCondition | EnumReceivingItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumReceivingItemConditionFilter<$PrismaModel> | $Enums.ReceivingItemCondition
  }

  export type PurchaseItemRelationFilter = {
    is?: PurchaseItemWhereInput
    isNot?: PurchaseItemWhereInput
  }

  export type PurchaseReceivingRelationFilter = {
    is?: PurchaseReceivingWhereInput
    isNot?: PurchaseReceivingWhereInput
  }

  export type PurchaseReceivedItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    purchaseItemId?: SortOrder
    receivingId?: SortOrder
    serialNumber?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    condition?: SortOrder
    actualSpecs?: SortOrder
    unitAcquisitionCost?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReceivedItemAvgOrderByAggregateInput = {
    unitAcquisitionCost?: SortOrder
  }

  export type PurchaseReceivedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    purchaseItemId?: SortOrder
    receivingId?: SortOrder
    serialNumber?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    condition?: SortOrder
    actualSpecs?: SortOrder
    unitAcquisitionCost?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReceivedItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    purchaseItemId?: SortOrder
    receivingId?: SortOrder
    serialNumber?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    condition?: SortOrder
    actualSpecs?: SortOrder
    unitAcquisitionCost?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReceivedItemSumOrderByAggregateInput = {
    unitAcquisitionCost?: SortOrder
  }

  export type EnumReceivingItemConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReceivingItemCondition | EnumReceivingItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumReceivingItemConditionWithAggregatesFilter<$PrismaModel> | $Enums.ReceivingItemCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReceivingItemConditionFilter<$PrismaModel>
    _max?: NestedEnumReceivingItemConditionFilter<$PrismaModel>
  }

  export type PurchaseReceivingCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    receivingNumber?: SortOrder
    receivedById?: SortOrder
    receivedAt?: SortOrder
    receivedAtShop?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseReceivingMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    receivingNumber?: SortOrder
    receivedById?: SortOrder
    receivedAt?: SortOrder
    receivedAtShop?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseReceivingMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    receivingNumber?: SortOrder
    receivedById?: SortOrder
    receivedAt?: SortOrder
    receivedAtShop?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PurchasePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    paymentNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    reference?: SortOrder
    paidById?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    accountingRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchasePaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    exchangeRate?: SortOrder
  }

  export type PurchasePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    paymentNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    reference?: SortOrder
    paidById?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    accountingRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchasePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    paymentNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    exchangeRate?: SortOrder
    paymentMethod?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    reference?: SortOrder
    paidById?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    accountingRef?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchasePaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    exchangeRate?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type PurchaseNullableRelationFilter = {
    is?: PurchaseWhereInput | null
    isNot?: PurchaseWhereInput | null
  }

  export type PurchaseReturnCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    supplierId?: SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseReturnAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    refundAmount?: SortOrder
  }

  export type PurchaseReturnMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    supplierId?: SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseReturnMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    supplierId?: SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseReturnSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    refundAmount?: SortOrder
  }

  export type PurchaseReturnRelationFilter = {
    is?: PurchaseReturnWhereInput
    isNot?: PurchaseReturnWhereInput
  }

  export type PurchaseItemNullableRelationFilter = {
    is?: PurchaseItemWhereInput | null
    isNot?: PurchaseItemWhereInput | null
  }

  export type PurchaseReturnItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    purchaseItemId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    receivedItemId?: SortOrder
    serialNumber?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    condition?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReturnItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    refundAmount?: SortOrder
  }

  export type PurchaseReturnItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    purchaseItemId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    receivedItemId?: SortOrder
    serialNumber?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    condition?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReturnItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    purchaseItemId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productSku?: SortOrder
    receivedItemId?: SortOrder
    serialNumber?: SortOrder
    imei1?: SortOrder
    imei2?: SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    condition?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReturnItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    refundAmount?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PurchaseDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    notes?: SortOrder
  }

  export type PurchaseDocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type PurchaseDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    notes?: SortOrder
  }

  export type PurchaseDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    notes?: SortOrder
  }

  export type PurchaseDocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PurchaseHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierOrderItemListRelationFilter = {
    every?: SupplierOrderItemWhereInput
    some?: SupplierOrderItemWhereInput
    none?: SupplierOrderItemWhereInput
  }

  export type SupplierOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierOrderCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    supplierId?: SortOrder
    orderNumber?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierOrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SupplierOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    supplierId?: SortOrder
    orderNumber?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierOrderMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    supplierId?: SortOrder
    orderNumber?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierOrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SupplierOrderRelationFilter = {
    is?: SupplierOrderWhereInput
    isNot?: SupplierOrderWhereInput
  }

  export type SupplierOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    supplierOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
  }

  export type SupplierOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    supplierOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    total?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    traceId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    traceId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    traceId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseItemCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput> | PurchaseReceivedItemCreateWithoutPurchaseInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
  }

  export type PurchaseReceivingCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseReceivingCreateWithoutPurchaseInput, PurchaseReceivingUncheckedCreateWithoutPurchaseInput> | PurchaseReceivingCreateWithoutPurchaseInput[] | PurchaseReceivingUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivingCreateOrConnectWithoutPurchaseInput | PurchaseReceivingCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseReceivingCreateManyPurchaseInputEnvelope
    connect?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
  }

  export type PurchasePaymentCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchasePaymentCreateWithoutPurchaseInput, PurchasePaymentUncheckedCreateWithoutPurchaseInput> | PurchasePaymentCreateWithoutPurchaseInput[] | PurchasePaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasePaymentCreateOrConnectWithoutPurchaseInput | PurchasePaymentCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchasePaymentCreateManyPurchaseInputEnvelope
    connect?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
  }

  export type PurchaseReturnCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseReturnCreateWithoutPurchaseInput, PurchaseReturnUncheckedCreateWithoutPurchaseInput> | PurchaseReturnCreateWithoutPurchaseInput[] | PurchaseReturnUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutPurchaseInput | PurchaseReturnCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseReturnCreateManyPurchaseInputEnvelope
    connect?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
  }

  export type PurchaseDocumentCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseDocumentCreateWithoutPurchaseInput, PurchaseDocumentUncheckedCreateWithoutPurchaseInput> | PurchaseDocumentCreateWithoutPurchaseInput[] | PurchaseDocumentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseDocumentCreateOrConnectWithoutPurchaseInput | PurchaseDocumentCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseDocumentCreateManyPurchaseInputEnvelope
    connect?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
  }

  export type PurchaseHistoryCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseHistoryCreateWithoutPurchaseInput, PurchaseHistoryUncheckedCreateWithoutPurchaseInput> | PurchaseHistoryCreateWithoutPurchaseInput[] | PurchaseHistoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseHistoryCreateOrConnectWithoutPurchaseInput | PurchaseHistoryCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseHistoryCreateManyPurchaseInputEnvelope
    connect?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput> | PurchaseReceivedItemCreateWithoutPurchaseInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
  }

  export type PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseReceivingCreateWithoutPurchaseInput, PurchaseReceivingUncheckedCreateWithoutPurchaseInput> | PurchaseReceivingCreateWithoutPurchaseInput[] | PurchaseReceivingUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivingCreateOrConnectWithoutPurchaseInput | PurchaseReceivingCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseReceivingCreateManyPurchaseInputEnvelope
    connect?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
  }

  export type PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchasePaymentCreateWithoutPurchaseInput, PurchasePaymentUncheckedCreateWithoutPurchaseInput> | PurchasePaymentCreateWithoutPurchaseInput[] | PurchasePaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasePaymentCreateOrConnectWithoutPurchaseInput | PurchasePaymentCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchasePaymentCreateManyPurchaseInputEnvelope
    connect?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
  }

  export type PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseReturnCreateWithoutPurchaseInput, PurchaseReturnUncheckedCreateWithoutPurchaseInput> | PurchaseReturnCreateWithoutPurchaseInput[] | PurchaseReturnUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutPurchaseInput | PurchaseReturnCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseReturnCreateManyPurchaseInputEnvelope
    connect?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
  }

  export type PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseDocumentCreateWithoutPurchaseInput, PurchaseDocumentUncheckedCreateWithoutPurchaseInput> | PurchaseDocumentCreateWithoutPurchaseInput[] | PurchaseDocumentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseDocumentCreateOrConnectWithoutPurchaseInput | PurchaseDocumentCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseDocumentCreateManyPurchaseInputEnvelope
    connect?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
  }

  export type PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseHistoryCreateWithoutPurchaseInput, PurchaseHistoryUncheckedCreateWithoutPurchaseInput> | PurchaseHistoryCreateWithoutPurchaseInput[] | PurchaseHistoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseHistoryCreateOrConnectWithoutPurchaseInput | PurchaseHistoryCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseHistoryCreateManyPurchaseInputEnvelope
    connect?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPurchaseCommercialStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseCommercialStatus
  }

  export type EnumPurchaseReceivingStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseReceivingStatus
  }

  export type EnumPurchasePaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchasePaymentStatus
  }

  export type EnumPurchaseAccountingStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseAccountingStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PurchaseItemUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput> | PurchaseReceivedItemCreateWithoutPurchaseInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseInputEnvelope
    set?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    disconnect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    delete?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    update?: PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
  }

  export type PurchaseReceivingUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseReceivingCreateWithoutPurchaseInput, PurchaseReceivingUncheckedCreateWithoutPurchaseInput> | PurchaseReceivingCreateWithoutPurchaseInput[] | PurchaseReceivingUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivingCreateOrConnectWithoutPurchaseInput | PurchaseReceivingCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseReceivingUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseReceivingUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseReceivingCreateManyPurchaseInputEnvelope
    set?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    disconnect?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    delete?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    connect?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    update?: PurchaseReceivingUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseReceivingUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseReceivingUpdateManyWithWhereWithoutPurchaseInput | PurchaseReceivingUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseReceivingScalarWhereInput | PurchaseReceivingScalarWhereInput[]
  }

  export type PurchasePaymentUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchasePaymentCreateWithoutPurchaseInput, PurchasePaymentUncheckedCreateWithoutPurchaseInput> | PurchasePaymentCreateWithoutPurchaseInput[] | PurchasePaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasePaymentCreateOrConnectWithoutPurchaseInput | PurchasePaymentCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchasePaymentUpsertWithWhereUniqueWithoutPurchaseInput | PurchasePaymentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchasePaymentCreateManyPurchaseInputEnvelope
    set?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    disconnect?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    delete?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    connect?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    update?: PurchasePaymentUpdateWithWhereUniqueWithoutPurchaseInput | PurchasePaymentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchasePaymentUpdateManyWithWhereWithoutPurchaseInput | PurchasePaymentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchasePaymentScalarWhereInput | PurchasePaymentScalarWhereInput[]
  }

  export type PurchaseReturnUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseReturnCreateWithoutPurchaseInput, PurchaseReturnUncheckedCreateWithoutPurchaseInput> | PurchaseReturnCreateWithoutPurchaseInput[] | PurchaseReturnUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutPurchaseInput | PurchaseReturnCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseReturnUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseReturnUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseReturnCreateManyPurchaseInputEnvelope
    set?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    disconnect?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    delete?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    connect?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    update?: PurchaseReturnUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseReturnUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseReturnUpdateManyWithWhereWithoutPurchaseInput | PurchaseReturnUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseReturnScalarWhereInput | PurchaseReturnScalarWhereInput[]
  }

  export type PurchaseDocumentUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseDocumentCreateWithoutPurchaseInput, PurchaseDocumentUncheckedCreateWithoutPurchaseInput> | PurchaseDocumentCreateWithoutPurchaseInput[] | PurchaseDocumentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseDocumentCreateOrConnectWithoutPurchaseInput | PurchaseDocumentCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseDocumentUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseDocumentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseDocumentCreateManyPurchaseInputEnvelope
    set?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    disconnect?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    delete?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    connect?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    update?: PurchaseDocumentUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseDocumentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseDocumentUpdateManyWithWhereWithoutPurchaseInput | PurchaseDocumentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseDocumentScalarWhereInput | PurchaseDocumentScalarWhereInput[]
  }

  export type PurchaseHistoryUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseHistoryCreateWithoutPurchaseInput, PurchaseHistoryUncheckedCreateWithoutPurchaseInput> | PurchaseHistoryCreateWithoutPurchaseInput[] | PurchaseHistoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseHistoryCreateOrConnectWithoutPurchaseInput | PurchaseHistoryCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseHistoryUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseHistoryUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseHistoryCreateManyPurchaseInputEnvelope
    set?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    disconnect?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    delete?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    connect?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    update?: PurchaseHistoryUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseHistoryUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseHistoryUpdateManyWithWhereWithoutPurchaseInput | PurchaseHistoryUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseHistoryScalarWhereInput | PurchaseHistoryScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput> | PurchaseReceivedItemCreateWithoutPurchaseInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseInputEnvelope
    set?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    disconnect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    delete?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    update?: PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
  }

  export type PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseReceivingCreateWithoutPurchaseInput, PurchaseReceivingUncheckedCreateWithoutPurchaseInput> | PurchaseReceivingCreateWithoutPurchaseInput[] | PurchaseReceivingUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReceivingCreateOrConnectWithoutPurchaseInput | PurchaseReceivingCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseReceivingUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseReceivingUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseReceivingCreateManyPurchaseInputEnvelope
    set?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    disconnect?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    delete?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    connect?: PurchaseReceivingWhereUniqueInput | PurchaseReceivingWhereUniqueInput[]
    update?: PurchaseReceivingUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseReceivingUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseReceivingUpdateManyWithWhereWithoutPurchaseInput | PurchaseReceivingUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseReceivingScalarWhereInput | PurchaseReceivingScalarWhereInput[]
  }

  export type PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchasePaymentCreateWithoutPurchaseInput, PurchasePaymentUncheckedCreateWithoutPurchaseInput> | PurchasePaymentCreateWithoutPurchaseInput[] | PurchasePaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchasePaymentCreateOrConnectWithoutPurchaseInput | PurchasePaymentCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchasePaymentUpsertWithWhereUniqueWithoutPurchaseInput | PurchasePaymentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchasePaymentCreateManyPurchaseInputEnvelope
    set?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    disconnect?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    delete?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    connect?: PurchasePaymentWhereUniqueInput | PurchasePaymentWhereUniqueInput[]
    update?: PurchasePaymentUpdateWithWhereUniqueWithoutPurchaseInput | PurchasePaymentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchasePaymentUpdateManyWithWhereWithoutPurchaseInput | PurchasePaymentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchasePaymentScalarWhereInput | PurchasePaymentScalarWhereInput[]
  }

  export type PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseReturnCreateWithoutPurchaseInput, PurchaseReturnUncheckedCreateWithoutPurchaseInput> | PurchaseReturnCreateWithoutPurchaseInput[] | PurchaseReturnUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutPurchaseInput | PurchaseReturnCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseReturnUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseReturnUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseReturnCreateManyPurchaseInputEnvelope
    set?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    disconnect?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    delete?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    connect?: PurchaseReturnWhereUniqueInput | PurchaseReturnWhereUniqueInput[]
    update?: PurchaseReturnUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseReturnUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseReturnUpdateManyWithWhereWithoutPurchaseInput | PurchaseReturnUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseReturnScalarWhereInput | PurchaseReturnScalarWhereInput[]
  }

  export type PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseDocumentCreateWithoutPurchaseInput, PurchaseDocumentUncheckedCreateWithoutPurchaseInput> | PurchaseDocumentCreateWithoutPurchaseInput[] | PurchaseDocumentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseDocumentCreateOrConnectWithoutPurchaseInput | PurchaseDocumentCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseDocumentUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseDocumentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseDocumentCreateManyPurchaseInputEnvelope
    set?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    disconnect?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    delete?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    connect?: PurchaseDocumentWhereUniqueInput | PurchaseDocumentWhereUniqueInput[]
    update?: PurchaseDocumentUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseDocumentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseDocumentUpdateManyWithWhereWithoutPurchaseInput | PurchaseDocumentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseDocumentScalarWhereInput | PurchaseDocumentScalarWhereInput[]
  }

  export type PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseHistoryCreateWithoutPurchaseInput, PurchaseHistoryUncheckedCreateWithoutPurchaseInput> | PurchaseHistoryCreateWithoutPurchaseInput[] | PurchaseHistoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseHistoryCreateOrConnectWithoutPurchaseInput | PurchaseHistoryCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseHistoryUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseHistoryUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseHistoryCreateManyPurchaseInputEnvelope
    set?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    disconnect?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    delete?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    connect?: PurchaseHistoryWhereUniqueInput | PurchaseHistoryWhereUniqueInput[]
    update?: PurchaseHistoryUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseHistoryUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseHistoryUpdateManyWithWhereWithoutPurchaseInput | PurchaseHistoryUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseHistoryScalarWhereInput | PurchaseHistoryScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutItemsInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseReceivedItemCreateNestedManyWithoutPurchaseItemInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReceivedItemCreateWithoutPurchaseItemInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseItemInputEnvelope
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
  }

  export type PurchaseReturnItemCreateNestedManyWithoutPurchaseItemInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReturnItemCreateWithoutPurchaseItemInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseItemInputEnvelope
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
  }

  export type PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseItemInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReceivedItemCreateWithoutPurchaseItemInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseItemInputEnvelope
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
  }

  export type PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseItemInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReturnItemCreateWithoutPurchaseItemInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseItemInputEnvelope
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
  }

  export type PurchaseUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    upsert?: PurchaseUpsertWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutItemsInput, PurchaseUpdateWithoutItemsInput>, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseReceivedItemUpdateManyWithoutPurchaseItemNestedInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReceivedItemCreateWithoutPurchaseItemInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput[]
    upsert?: PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseItemInput | PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseItemInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseItemInputEnvelope
    set?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    disconnect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    delete?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    update?: PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseItemInput | PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseItemInput[]
    updateMany?: PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseItemInput | PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseItemInput[]
    deleteMany?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
  }

  export type PurchaseReturnItemUpdateManyWithoutPurchaseItemNestedInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReturnItemCreateWithoutPurchaseItemInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput[]
    upsert?: PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseItemInput | PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseItemInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseItemInputEnvelope
    set?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    disconnect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    delete?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    update?: PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseItemInput | PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseItemInput[]
    updateMany?: PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseItemInput | PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseItemInput[]
    deleteMany?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
  }

  export type PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseItemNestedInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReceivedItemCreateWithoutPurchaseItemInput[] | PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput[]
    upsert?: PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseItemInput | PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseItemInput[]
    createMany?: PurchaseReceivedItemCreateManyPurchaseItemInputEnvelope
    set?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    disconnect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    delete?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    update?: PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseItemInput | PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseItemInput[]
    updateMany?: PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseItemInput | PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseItemInput[]
    deleteMany?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
  }

  export type PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseItemNestedInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput> | PurchaseReturnItemCreateWithoutPurchaseItemInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput[]
    upsert?: PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseItemInput | PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseItemInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseItemInputEnvelope
    set?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    disconnect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    delete?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    update?: PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseItemInput | PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseItemInput[]
    updateMany?: PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseItemInput | PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseItemInput[]
    deleteMany?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutReceivedItemsInput = {
    create?: XOR<PurchaseCreateWithoutReceivedItemsInput, PurchaseUncheckedCreateWithoutReceivedItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReceivedItemsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseItemCreateNestedOneWithoutReceivedItemsInput = {
    create?: XOR<PurchaseItemCreateWithoutReceivedItemsInput, PurchaseItemUncheckedCreateWithoutReceivedItemsInput>
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutReceivedItemsInput
    connect?: PurchaseItemWhereUniqueInput
  }

  export type PurchaseReceivingCreateNestedOneWithoutReceivedItemsInput = {
    create?: XOR<PurchaseReceivingCreateWithoutReceivedItemsInput, PurchaseReceivingUncheckedCreateWithoutReceivedItemsInput>
    connectOrCreate?: PurchaseReceivingCreateOrConnectWithoutReceivedItemsInput
    connect?: PurchaseReceivingWhereUniqueInput
  }

  export type EnumReceivingItemConditionFieldUpdateOperationsInput = {
    set?: $Enums.ReceivingItemCondition
  }

  export type PurchaseUpdateOneRequiredWithoutReceivedItemsNestedInput = {
    create?: XOR<PurchaseCreateWithoutReceivedItemsInput, PurchaseUncheckedCreateWithoutReceivedItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReceivedItemsInput
    upsert?: PurchaseUpsertWithoutReceivedItemsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutReceivedItemsInput, PurchaseUpdateWithoutReceivedItemsInput>, PurchaseUncheckedUpdateWithoutReceivedItemsInput>
  }

  export type PurchaseItemUpdateOneRequiredWithoutReceivedItemsNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutReceivedItemsInput, PurchaseItemUncheckedCreateWithoutReceivedItemsInput>
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutReceivedItemsInput
    upsert?: PurchaseItemUpsertWithoutReceivedItemsInput
    connect?: PurchaseItemWhereUniqueInput
    update?: XOR<XOR<PurchaseItemUpdateToOneWithWhereWithoutReceivedItemsInput, PurchaseItemUpdateWithoutReceivedItemsInput>, PurchaseItemUncheckedUpdateWithoutReceivedItemsInput>
  }

  export type PurchaseReceivingUpdateOneRequiredWithoutReceivedItemsNestedInput = {
    create?: XOR<PurchaseReceivingCreateWithoutReceivedItemsInput, PurchaseReceivingUncheckedCreateWithoutReceivedItemsInput>
    connectOrCreate?: PurchaseReceivingCreateOrConnectWithoutReceivedItemsInput
    upsert?: PurchaseReceivingUpsertWithoutReceivedItemsInput
    connect?: PurchaseReceivingWhereUniqueInput
    update?: XOR<XOR<PurchaseReceivingUpdateToOneWithWhereWithoutReceivedItemsInput, PurchaseReceivingUpdateWithoutReceivedItemsInput>, PurchaseReceivingUncheckedUpdateWithoutReceivedItemsInput>
  }

  export type PurchaseCreateNestedOneWithoutReceivingsInput = {
    create?: XOR<PurchaseCreateWithoutReceivingsInput, PurchaseUncheckedCreateWithoutReceivingsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReceivingsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseReceivedItemCreateNestedManyWithoutReceivingInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutReceivingInput, PurchaseReceivedItemUncheckedCreateWithoutReceivingInput> | PurchaseReceivedItemCreateWithoutReceivingInput[] | PurchaseReceivedItemUncheckedCreateWithoutReceivingInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutReceivingInput | PurchaseReceivedItemCreateOrConnectWithoutReceivingInput[]
    createMany?: PurchaseReceivedItemCreateManyReceivingInputEnvelope
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
  }

  export type PurchaseReceivedItemUncheckedCreateNestedManyWithoutReceivingInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutReceivingInput, PurchaseReceivedItemUncheckedCreateWithoutReceivingInput> | PurchaseReceivedItemCreateWithoutReceivingInput[] | PurchaseReceivedItemUncheckedCreateWithoutReceivingInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutReceivingInput | PurchaseReceivedItemCreateOrConnectWithoutReceivingInput[]
    createMany?: PurchaseReceivedItemCreateManyReceivingInputEnvelope
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
  }

  export type PurchaseUpdateOneRequiredWithoutReceivingsNestedInput = {
    create?: XOR<PurchaseCreateWithoutReceivingsInput, PurchaseUncheckedCreateWithoutReceivingsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReceivingsInput
    upsert?: PurchaseUpsertWithoutReceivingsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutReceivingsInput, PurchaseUpdateWithoutReceivingsInput>, PurchaseUncheckedUpdateWithoutReceivingsInput>
  }

  export type PurchaseReceivedItemUpdateManyWithoutReceivingNestedInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutReceivingInput, PurchaseReceivedItemUncheckedCreateWithoutReceivingInput> | PurchaseReceivedItemCreateWithoutReceivingInput[] | PurchaseReceivedItemUncheckedCreateWithoutReceivingInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutReceivingInput | PurchaseReceivedItemCreateOrConnectWithoutReceivingInput[]
    upsert?: PurchaseReceivedItemUpsertWithWhereUniqueWithoutReceivingInput | PurchaseReceivedItemUpsertWithWhereUniqueWithoutReceivingInput[]
    createMany?: PurchaseReceivedItemCreateManyReceivingInputEnvelope
    set?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    disconnect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    delete?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    update?: PurchaseReceivedItemUpdateWithWhereUniqueWithoutReceivingInput | PurchaseReceivedItemUpdateWithWhereUniqueWithoutReceivingInput[]
    updateMany?: PurchaseReceivedItemUpdateManyWithWhereWithoutReceivingInput | PurchaseReceivedItemUpdateManyWithWhereWithoutReceivingInput[]
    deleteMany?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
  }

  export type PurchaseReceivedItemUncheckedUpdateManyWithoutReceivingNestedInput = {
    create?: XOR<PurchaseReceivedItemCreateWithoutReceivingInput, PurchaseReceivedItemUncheckedCreateWithoutReceivingInput> | PurchaseReceivedItemCreateWithoutReceivingInput[] | PurchaseReceivedItemUncheckedCreateWithoutReceivingInput[]
    connectOrCreate?: PurchaseReceivedItemCreateOrConnectWithoutReceivingInput | PurchaseReceivedItemCreateOrConnectWithoutReceivingInput[]
    upsert?: PurchaseReceivedItemUpsertWithWhereUniqueWithoutReceivingInput | PurchaseReceivedItemUpsertWithWhereUniqueWithoutReceivingInput[]
    createMany?: PurchaseReceivedItemCreateManyReceivingInputEnvelope
    set?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    disconnect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    delete?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    connect?: PurchaseReceivedItemWhereUniqueInput | PurchaseReceivedItemWhereUniqueInput[]
    update?: PurchaseReceivedItemUpdateWithWhereUniqueWithoutReceivingInput | PurchaseReceivedItemUpdateWithWhereUniqueWithoutReceivingInput[]
    updateMany?: PurchaseReceivedItemUpdateManyWithWhereWithoutReceivingInput | PurchaseReceivedItemUpdateManyWithWhereWithoutReceivingInput[]
    deleteMany?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type PurchaseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentsInput
    upsert?: PurchaseUpsertWithoutPaymentsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutPaymentsInput, PurchaseUpdateWithoutPaymentsInput>, PurchaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type PurchaseReturnItemCreateNestedManyWithoutPurchaseReturnInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput> | PurchaseReturnItemCreateWithoutPurchaseReturnInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseReturnInputEnvelope
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
  }

  export type PurchaseCreateNestedOneWithoutReturnsInput = {
    create?: XOR<PurchaseCreateWithoutReturnsInput, PurchaseUncheckedCreateWithoutReturnsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReturnsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseReturnInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput> | PurchaseReturnItemCreateWithoutPurchaseReturnInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseReturnInputEnvelope
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
  }

  export type PurchaseReturnItemUpdateManyWithoutPurchaseReturnNestedInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput> | PurchaseReturnItemCreateWithoutPurchaseReturnInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput[]
    upsert?: PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseReturnInput | PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseReturnInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseReturnInputEnvelope
    set?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    disconnect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    delete?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    update?: PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseReturnInput | PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseReturnInput[]
    updateMany?: PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseReturnInput | PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseReturnInput[]
    deleteMany?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
  }

  export type PurchaseUpdateOneWithoutReturnsNestedInput = {
    create?: XOR<PurchaseCreateWithoutReturnsInput, PurchaseUncheckedCreateWithoutReturnsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReturnsInput
    upsert?: PurchaseUpsertWithoutReturnsInput
    disconnect?: PurchaseWhereInput | boolean
    delete?: PurchaseWhereInput | boolean
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutReturnsInput, PurchaseUpdateWithoutReturnsInput>, PurchaseUncheckedUpdateWithoutReturnsInput>
  }

  export type PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnNestedInput = {
    create?: XOR<PurchaseReturnItemCreateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput> | PurchaseReturnItemCreateWithoutPurchaseReturnInput[] | PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput[]
    connectOrCreate?: PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput | PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput[]
    upsert?: PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseReturnInput | PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseReturnInput[]
    createMany?: PurchaseReturnItemCreateManyPurchaseReturnInputEnvelope
    set?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    disconnect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    delete?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    connect?: PurchaseReturnItemWhereUniqueInput | PurchaseReturnItemWhereUniqueInput[]
    update?: PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseReturnInput | PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseReturnInput[]
    updateMany?: PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseReturnInput | PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseReturnInput[]
    deleteMany?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
  }

  export type PurchaseReturnCreateNestedOneWithoutItemsInput = {
    create?: XOR<PurchaseReturnCreateWithoutItemsInput, PurchaseReturnUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutItemsInput
    connect?: PurchaseReturnWhereUniqueInput
  }

  export type PurchaseItemCreateNestedOneWithoutReturnItemsInput = {
    create?: XOR<PurchaseItemCreateWithoutReturnItemsInput, PurchaseItemUncheckedCreateWithoutReturnItemsInput>
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutReturnItemsInput
    connect?: PurchaseItemWhereUniqueInput
  }

  export type PurchaseReturnUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PurchaseReturnCreateWithoutItemsInput, PurchaseReturnUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutItemsInput
    upsert?: PurchaseReturnUpsertWithoutItemsInput
    connect?: PurchaseReturnWhereUniqueInput
    update?: XOR<XOR<PurchaseReturnUpdateToOneWithWhereWithoutItemsInput, PurchaseReturnUpdateWithoutItemsInput>, PurchaseReturnUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseItemUpdateOneWithoutReturnItemsNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutReturnItemsInput, PurchaseItemUncheckedCreateWithoutReturnItemsInput>
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutReturnItemsInput
    upsert?: PurchaseItemUpsertWithoutReturnItemsInput
    disconnect?: PurchaseItemWhereInput | boolean
    delete?: PurchaseItemWhereInput | boolean
    connect?: PurchaseItemWhereUniqueInput
    update?: XOR<XOR<PurchaseItemUpdateToOneWithWhereWithoutReturnItemsInput, PurchaseItemUpdateWithoutReturnItemsInput>, PurchaseItemUncheckedUpdateWithoutReturnItemsInput>
  }

  export type PurchaseCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PurchaseCreateWithoutDocumentsInput, PurchaseUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutDocumentsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<PurchaseCreateWithoutDocumentsInput, PurchaseUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutDocumentsInput
    upsert?: PurchaseUpsertWithoutDocumentsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutDocumentsInput, PurchaseUpdateWithoutDocumentsInput>, PurchaseUncheckedUpdateWithoutDocumentsInput>
  }

  export type PurchaseCreateNestedOneWithoutHistoryInput = {
    create?: XOR<PurchaseCreateWithoutHistoryInput, PurchaseUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutHistoryInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<PurchaseCreateWithoutHistoryInput, PurchaseUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutHistoryInput
    upsert?: PurchaseUpsertWithoutHistoryInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutHistoryInput, PurchaseUpdateWithoutHistoryInput>, PurchaseUncheckedUpdateWithoutHistoryInput>
  }

  export type SupplierOrderItemCreateNestedManyWithoutSupplierOrderInput = {
    create?: XOR<SupplierOrderItemCreateWithoutSupplierOrderInput, SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput> | SupplierOrderItemCreateWithoutSupplierOrderInput[] | SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput[]
    connectOrCreate?: SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput | SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput[]
    createMany?: SupplierOrderItemCreateManySupplierOrderInputEnvelope
    connect?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
  }

  export type SupplierOrderItemUncheckedCreateNestedManyWithoutSupplierOrderInput = {
    create?: XOR<SupplierOrderItemCreateWithoutSupplierOrderInput, SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput> | SupplierOrderItemCreateWithoutSupplierOrderInput[] | SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput[]
    connectOrCreate?: SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput | SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput[]
    createMany?: SupplierOrderItemCreateManySupplierOrderInputEnvelope
    connect?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
  }

  export type SupplierOrderItemUpdateManyWithoutSupplierOrderNestedInput = {
    create?: XOR<SupplierOrderItemCreateWithoutSupplierOrderInput, SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput> | SupplierOrderItemCreateWithoutSupplierOrderInput[] | SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput[]
    connectOrCreate?: SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput | SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput[]
    upsert?: SupplierOrderItemUpsertWithWhereUniqueWithoutSupplierOrderInput | SupplierOrderItemUpsertWithWhereUniqueWithoutSupplierOrderInput[]
    createMany?: SupplierOrderItemCreateManySupplierOrderInputEnvelope
    set?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    disconnect?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    delete?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    connect?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    update?: SupplierOrderItemUpdateWithWhereUniqueWithoutSupplierOrderInput | SupplierOrderItemUpdateWithWhereUniqueWithoutSupplierOrderInput[]
    updateMany?: SupplierOrderItemUpdateManyWithWhereWithoutSupplierOrderInput | SupplierOrderItemUpdateManyWithWhereWithoutSupplierOrderInput[]
    deleteMany?: SupplierOrderItemScalarWhereInput | SupplierOrderItemScalarWhereInput[]
  }

  export type SupplierOrderItemUncheckedUpdateManyWithoutSupplierOrderNestedInput = {
    create?: XOR<SupplierOrderItemCreateWithoutSupplierOrderInput, SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput> | SupplierOrderItemCreateWithoutSupplierOrderInput[] | SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput[]
    connectOrCreate?: SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput | SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput[]
    upsert?: SupplierOrderItemUpsertWithWhereUniqueWithoutSupplierOrderInput | SupplierOrderItemUpsertWithWhereUniqueWithoutSupplierOrderInput[]
    createMany?: SupplierOrderItemCreateManySupplierOrderInputEnvelope
    set?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    disconnect?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    delete?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    connect?: SupplierOrderItemWhereUniqueInput | SupplierOrderItemWhereUniqueInput[]
    update?: SupplierOrderItemUpdateWithWhereUniqueWithoutSupplierOrderInput | SupplierOrderItemUpdateWithWhereUniqueWithoutSupplierOrderInput[]
    updateMany?: SupplierOrderItemUpdateManyWithWhereWithoutSupplierOrderInput | SupplierOrderItemUpdateManyWithWhereWithoutSupplierOrderInput[]
    deleteMany?: SupplierOrderItemScalarWhereInput | SupplierOrderItemScalarWhereInput[]
  }

  export type SupplierOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<SupplierOrderCreateWithoutItemsInput, SupplierOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SupplierOrderCreateOrConnectWithoutItemsInput
    connect?: SupplierOrderWhereUniqueInput
  }

  export type SupplierOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SupplierOrderCreateWithoutItemsInput, SupplierOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SupplierOrderCreateOrConnectWithoutItemsInput
    upsert?: SupplierOrderUpsertWithoutItemsInput
    connect?: SupplierOrderWhereUniqueInput
    update?: XOR<XOR<SupplierOrderUpdateToOneWithWhereWithoutItemsInput, SupplierOrderUpdateWithoutItemsInput>, SupplierOrderUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPurchaseCommercialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseCommercialStatus | EnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseCommercialStatusFilter<$PrismaModel> | $Enums.PurchaseCommercialStatus
  }

  export type NestedEnumPurchaseReceivingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseReceivingStatus | EnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseReceivingStatusFilter<$PrismaModel> | $Enums.PurchaseReceivingStatus
  }

  export type NestedEnumPurchasePaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePaymentStatus | EnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchasePaymentStatusFilter<$PrismaModel> | $Enums.PurchasePaymentStatus
  }

  export type NestedEnumPurchaseAccountingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseAccountingStatus | EnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseAccountingStatusFilter<$PrismaModel> | $Enums.PurchaseAccountingStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseCommercialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseCommercialStatus | EnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseCommercialStatus[] | ListEnumPurchaseCommercialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseCommercialStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseCommercialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseCommercialStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseCommercialStatusFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseReceivingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseReceivingStatus | EnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseReceivingStatus[] | ListEnumPurchaseReceivingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseReceivingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseReceivingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseReceivingStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseReceivingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPurchasePaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePaymentStatus | EnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchasePaymentStatus[] | ListEnumPurchasePaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchasePaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchasePaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchasePaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchasePaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseAccountingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseAccountingStatus | EnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseAccountingStatus[] | ListEnumPurchaseAccountingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseAccountingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseAccountingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseAccountingStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseAccountingStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumReceivingItemConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.ReceivingItemCondition | EnumReceivingItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumReceivingItemConditionFilter<$PrismaModel> | $Enums.ReceivingItemCondition
  }

  export type NestedEnumReceivingItemConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReceivingItemCondition | EnumReceivingItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReceivingItemCondition[] | ListEnumReceivingItemConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumReceivingItemConditionWithAggregatesFilter<$PrismaModel> | $Enums.ReceivingItemCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReceivingItemConditionFilter<$PrismaModel>
    _max?: NestedEnumReceivingItemConditionFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PurchaseItemCreateWithoutPurchaseInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseItemInput
    returnItems?: PurchaseReturnItemCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemUncheckedCreateWithoutPurchaseInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseItemInput
    returnItems?: PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemCreateManyPurchaseInputEnvelope = {
    data: PurchaseItemCreateManyPurchaseInput | PurchaseItemCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseReceivedItemCreateWithoutPurchaseInput = {
    id?: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
    purchaseItem: PurchaseItemCreateNestedOneWithoutReceivedItemsInput
    receiving: PurchaseReceivingCreateNestedOneWithoutReceivedItemsInput
  }

  export type PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput = {
    id?: string
    purchaseItemId: string
    receivingId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    create: XOR<PurchaseReceivedItemCreateWithoutPurchaseInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseReceivedItemCreateManyPurchaseInputEnvelope = {
    data: PurchaseReceivedItemCreateManyPurchaseInput | PurchaseReceivedItemCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseReceivingCreateWithoutPurchaseInput = {
    id?: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutReceivingInput
  }

  export type PurchaseReceivingUncheckedCreateWithoutPurchaseInput = {
    id?: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutReceivingInput
  }

  export type PurchaseReceivingCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseReceivingWhereUniqueInput
    create: XOR<PurchaseReceivingCreateWithoutPurchaseInput, PurchaseReceivingUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseReceivingCreateManyPurchaseInputEnvelope = {
    data: PurchaseReceivingCreateManyPurchaseInput | PurchaseReceivingCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchasePaymentCreateWithoutPurchaseInput = {
    id?: string
    paymentNumber: string
    amount: number
    currency?: string
    exchangeRate?: number
    paymentMethod: $Enums.PaymentMethod
    accountId?: string | null
    accountName?: string | null
    reference?: string | null
    paidById: string
    paidAt?: Date | string
    notes?: string | null
    accountingRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasePaymentUncheckedCreateWithoutPurchaseInput = {
    id?: string
    paymentNumber: string
    amount: number
    currency?: string
    exchangeRate?: number
    paymentMethod: $Enums.PaymentMethod
    accountId?: string | null
    accountName?: string | null
    reference?: string | null
    paidById: string
    paidAt?: Date | string
    notes?: string | null
    accountingRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasePaymentCreateOrConnectWithoutPurchaseInput = {
    where: PurchasePaymentWhereUniqueInput
    create: XOR<PurchasePaymentCreateWithoutPurchaseInput, PurchasePaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchasePaymentCreateManyPurchaseInputEnvelope = {
    data: PurchasePaymentCreateManyPurchaseInput | PurchasePaymentCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseReturnCreateWithoutPurchaseInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemCreateNestedManyWithoutPurchaseReturnInput
  }

  export type PurchaseReturnUncheckedCreateWithoutPurchaseInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseReturnInput
  }

  export type PurchaseReturnCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseReturnWhereUniqueInput
    create: XOR<PurchaseReturnCreateWithoutPurchaseInput, PurchaseReturnUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseReturnCreateManyPurchaseInputEnvelope = {
    data: PurchaseReturnCreateManyPurchaseInput | PurchaseReturnCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseDocumentCreateWithoutPurchaseInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    uploadedById: string
    uploadedAt?: Date | string
    notes?: string | null
  }

  export type PurchaseDocumentUncheckedCreateWithoutPurchaseInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    uploadedById: string
    uploadedAt?: Date | string
    notes?: string | null
  }

  export type PurchaseDocumentCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseDocumentWhereUniqueInput
    create: XOR<PurchaseDocumentCreateWithoutPurchaseInput, PurchaseDocumentUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseDocumentCreateManyPurchaseInputEnvelope = {
    data: PurchaseDocumentCreateManyPurchaseInput | PurchaseDocumentCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseHistoryCreateWithoutPurchaseInput = {
    id?: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PurchaseHistoryUncheckedCreateWithoutPurchaseInput = {
    id?: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PurchaseHistoryCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseHistoryWhereUniqueInput
    create: XOR<PurchaseHistoryCreateWithoutPurchaseInput, PurchaseHistoryUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseHistoryCreateManyPurchaseInputEnvelope = {
    data: PurchaseHistoryCreateManyPurchaseInput | PurchaseHistoryCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseItemScalarWhereInput = {
    AND?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    OR?: PurchaseItemScalarWhereInput[]
    NOT?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    id?: StringFilter<"PurchaseItem"> | string
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    productName?: StringFilter<"PurchaseItem"> | string
    productSku?: StringFilter<"PurchaseItem"> | string
    productTracking?: StringFilter<"PurchaseItem"> | string
    orderedQty?: FloatFilter<"PurchaseItem"> | number
    receivedQty?: FloatFilter<"PurchaseItem"> | number
    acceptedQty?: FloatFilter<"PurchaseItem"> | number
    rejectedQty?: FloatFilter<"PurchaseItem"> | number
    returnedQty?: FloatFilter<"PurchaseItem"> | number
    unitPrice?: FloatFilter<"PurchaseItem"> | number
    discountAmount?: FloatFilter<"PurchaseItem"> | number
    discountType?: StringNullableFilter<"PurchaseItem"> | string | null
    taxRate?: FloatFilter<"PurchaseItem"> | number
    taxAmount?: FloatFilter<"PurchaseItem"> | number
    otherCosts?: FloatFilter<"PurchaseItem"> | number
    lineTotal?: FloatFilter<"PurchaseItem"> | number
    acquisitionCost?: FloatFilter<"PurchaseItem"> | number
    purchaseSpecs?: StringNullableFilter<"PurchaseItem"> | string | null
    notes?: StringNullableFilter<"PurchaseItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseItem"> | Date | string
  }

  export type PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    update: XOR<PurchaseReceivedItemUpdateWithoutPurchaseInput, PurchaseReceivedItemUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseReceivedItemCreateWithoutPurchaseInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    data: XOR<PurchaseReceivedItemUpdateWithoutPurchaseInput, PurchaseReceivedItemUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseReceivedItemScalarWhereInput
    data: XOR<PurchaseReceivedItemUpdateManyMutationInput, PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseReceivedItemScalarWhereInput = {
    AND?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
    OR?: PurchaseReceivedItemScalarWhereInput[]
    NOT?: PurchaseReceivedItemScalarWhereInput | PurchaseReceivedItemScalarWhereInput[]
    id?: StringFilter<"PurchaseReceivedItem"> | string
    purchaseId?: StringFilter<"PurchaseReceivedItem"> | string
    purchaseItemId?: StringFilter<"PurchaseReceivedItem"> | string
    receivingId?: StringFilter<"PurchaseReceivedItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    imei1?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    imei2?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    condition?: EnumReceivingItemConditionFilter<"PurchaseReceivedItem"> | $Enums.ReceivingItemCondition
    actualSpecs?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    unitAcquisitionCost?: FloatFilter<"PurchaseReceivedItem"> | number
    notes?: StringNullableFilter<"PurchaseReceivedItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReceivedItem"> | Date | string
  }

  export type PurchaseReceivingUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseReceivingWhereUniqueInput
    update: XOR<PurchaseReceivingUpdateWithoutPurchaseInput, PurchaseReceivingUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseReceivingCreateWithoutPurchaseInput, PurchaseReceivingUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseReceivingUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseReceivingWhereUniqueInput
    data: XOR<PurchaseReceivingUpdateWithoutPurchaseInput, PurchaseReceivingUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseReceivingUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseReceivingScalarWhereInput
    data: XOR<PurchaseReceivingUpdateManyMutationInput, PurchaseReceivingUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseReceivingScalarWhereInput = {
    AND?: PurchaseReceivingScalarWhereInput | PurchaseReceivingScalarWhereInput[]
    OR?: PurchaseReceivingScalarWhereInput[]
    NOT?: PurchaseReceivingScalarWhereInput | PurchaseReceivingScalarWhereInput[]
    id?: StringFilter<"PurchaseReceiving"> | string
    purchaseId?: StringFilter<"PurchaseReceiving"> | string
    receivingNumber?: StringFilter<"PurchaseReceiving"> | string
    receivedById?: StringFilter<"PurchaseReceiving"> | string
    receivedAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    receivedAtShop?: StringFilter<"PurchaseReceiving"> | string
    notes?: StringNullableFilter<"PurchaseReceiving"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReceiving"> | Date | string
  }

  export type PurchasePaymentUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchasePaymentWhereUniqueInput
    update: XOR<PurchasePaymentUpdateWithoutPurchaseInput, PurchasePaymentUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchasePaymentCreateWithoutPurchaseInput, PurchasePaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchasePaymentUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchasePaymentWhereUniqueInput
    data: XOR<PurchasePaymentUpdateWithoutPurchaseInput, PurchasePaymentUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchasePaymentUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchasePaymentScalarWhereInput
    data: XOR<PurchasePaymentUpdateManyMutationInput, PurchasePaymentUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchasePaymentScalarWhereInput = {
    AND?: PurchasePaymentScalarWhereInput | PurchasePaymentScalarWhereInput[]
    OR?: PurchasePaymentScalarWhereInput[]
    NOT?: PurchasePaymentScalarWhereInput | PurchasePaymentScalarWhereInput[]
    id?: StringFilter<"PurchasePayment"> | string
    purchaseId?: StringFilter<"PurchasePayment"> | string
    paymentNumber?: StringFilter<"PurchasePayment"> | string
    amount?: FloatFilter<"PurchasePayment"> | number
    currency?: StringFilter<"PurchasePayment"> | string
    exchangeRate?: FloatFilter<"PurchasePayment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"PurchasePayment"> | $Enums.PaymentMethod
    accountId?: StringNullableFilter<"PurchasePayment"> | string | null
    accountName?: StringNullableFilter<"PurchasePayment"> | string | null
    reference?: StringNullableFilter<"PurchasePayment"> | string | null
    paidById?: StringFilter<"PurchasePayment"> | string
    paidAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    notes?: StringNullableFilter<"PurchasePayment"> | string | null
    accountingRef?: StringNullableFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    updatedAt?: DateTimeFilter<"PurchasePayment"> | Date | string
  }

  export type PurchaseReturnUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseReturnWhereUniqueInput
    update: XOR<PurchaseReturnUpdateWithoutPurchaseInput, PurchaseReturnUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseReturnCreateWithoutPurchaseInput, PurchaseReturnUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseReturnUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseReturnWhereUniqueInput
    data: XOR<PurchaseReturnUpdateWithoutPurchaseInput, PurchaseReturnUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseReturnUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseReturnScalarWhereInput
    data: XOR<PurchaseReturnUpdateManyMutationInput, PurchaseReturnUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseReturnScalarWhereInput = {
    AND?: PurchaseReturnScalarWhereInput | PurchaseReturnScalarWhereInput[]
    OR?: PurchaseReturnScalarWhereInput[]
    NOT?: PurchaseReturnScalarWhereInput | PurchaseReturnScalarWhereInput[]
    id?: StringFilter<"PurchaseReturn"> | string
    tenantId?: StringFilter<"PurchaseReturn"> | string
    shopId?: StringFilter<"PurchaseReturn"> | string
    purchaseId?: StringNullableFilter<"PurchaseReturn"> | string | null
    supplierId?: StringFilter<"PurchaseReturn"> | string
    returnNumber?: StringFilter<"PurchaseReturn"> | string
    totalAmount?: FloatFilter<"PurchaseReturn"> | number
    refundAmount?: FloatFilter<"PurchaseReturn"> | number
    reason?: StringNullableFilter<"PurchaseReturn"> | string | null
    status?: StringFilter<"PurchaseReturn"> | string
    createdById?: StringFilter<"PurchaseReturn"> | string
    createdAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
  }

  export type PurchaseDocumentUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseDocumentWhereUniqueInput
    update: XOR<PurchaseDocumentUpdateWithoutPurchaseInput, PurchaseDocumentUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseDocumentCreateWithoutPurchaseInput, PurchaseDocumentUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseDocumentUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseDocumentWhereUniqueInput
    data: XOR<PurchaseDocumentUpdateWithoutPurchaseInput, PurchaseDocumentUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseDocumentUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseDocumentScalarWhereInput
    data: XOR<PurchaseDocumentUpdateManyMutationInput, PurchaseDocumentUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseDocumentScalarWhereInput = {
    AND?: PurchaseDocumentScalarWhereInput | PurchaseDocumentScalarWhereInput[]
    OR?: PurchaseDocumentScalarWhereInput[]
    NOT?: PurchaseDocumentScalarWhereInput | PurchaseDocumentScalarWhereInput[]
    id?: StringFilter<"PurchaseDocument"> | string
    purchaseId?: StringFilter<"PurchaseDocument"> | string
    documentType?: StringFilter<"PurchaseDocument"> | string
    fileName?: StringFilter<"PurchaseDocument"> | string
    fileUrl?: StringFilter<"PurchaseDocument"> | string
    fileSize?: IntNullableFilter<"PurchaseDocument"> | number | null
    mimeType?: StringNullableFilter<"PurchaseDocument"> | string | null
    uploadedById?: StringFilter<"PurchaseDocument"> | string
    uploadedAt?: DateTimeFilter<"PurchaseDocument"> | Date | string
    notes?: StringNullableFilter<"PurchaseDocument"> | string | null
  }

  export type PurchaseHistoryUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseHistoryWhereUniqueInput
    update: XOR<PurchaseHistoryUpdateWithoutPurchaseInput, PurchaseHistoryUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseHistoryCreateWithoutPurchaseInput, PurchaseHistoryUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseHistoryUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseHistoryWhereUniqueInput
    data: XOR<PurchaseHistoryUpdateWithoutPurchaseInput, PurchaseHistoryUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseHistoryUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseHistoryScalarWhereInput
    data: XOR<PurchaseHistoryUpdateManyMutationInput, PurchaseHistoryUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseHistoryScalarWhereInput = {
    AND?: PurchaseHistoryScalarWhereInput | PurchaseHistoryScalarWhereInput[]
    OR?: PurchaseHistoryScalarWhereInput[]
    NOT?: PurchaseHistoryScalarWhereInput | PurchaseHistoryScalarWhereInput[]
    id?: StringFilter<"PurchaseHistory"> | string
    purchaseId?: StringFilter<"PurchaseHistory"> | string
    eventType?: StringFilter<"PurchaseHistory"> | string
    eventData?: StringFilter<"PurchaseHistory"> | string
    userId?: StringFilter<"PurchaseHistory"> | string
    userName?: StringFilter<"PurchaseHistory"> | string
    traceId?: StringNullableFilter<"PurchaseHistory"> | string | null
    createdAt?: DateTimeFilter<"PurchaseHistory"> | Date | string
  }

  export type PurchaseCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutItemsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
  }

  export type PurchaseReceivedItemCreateWithoutPurchaseItemInput = {
    id?: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutReceivedItemsInput
    receiving: PurchaseReceivingCreateNestedOneWithoutReceivedItemsInput
  }

  export type PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput = {
    id?: string
    purchaseId: string
    receivingId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemCreateOrConnectWithoutPurchaseItemInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    create: XOR<PurchaseReceivedItemCreateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput>
  }

  export type PurchaseReceivedItemCreateManyPurchaseItemInputEnvelope = {
    data: PurchaseReceivedItemCreateManyPurchaseItemInput | PurchaseReceivedItemCreateManyPurchaseItemInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseReturnItemCreateWithoutPurchaseItemInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
    purchaseReturn: PurchaseReturnCreateNestedOneWithoutItemsInput
  }

  export type PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput = {
    id?: string
    purchaseReturnId: string
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnItemCreateOrConnectWithoutPurchaseItemInput = {
    where: PurchaseReturnItemWhereUniqueInput
    create: XOR<PurchaseReturnItemCreateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput>
  }

  export type PurchaseReturnItemCreateManyPurchaseItemInputEnvelope = {
    data: PurchaseReturnItemCreateManyPurchaseItemInput | PurchaseReturnItemCreateManyPurchaseItemInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithoutItemsInput = {
    update: XOR<PurchaseUpdateWithoutItemsInput, PurchaseUncheckedUpdateWithoutItemsInput>
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutItemsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutItemsInput, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseReceivedItemUpsertWithWhereUniqueWithoutPurchaseItemInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    update: XOR<PurchaseReceivedItemUpdateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedUpdateWithoutPurchaseItemInput>
    create: XOR<PurchaseReceivedItemCreateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedCreateWithoutPurchaseItemInput>
  }

  export type PurchaseReceivedItemUpdateWithWhereUniqueWithoutPurchaseItemInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    data: XOR<PurchaseReceivedItemUpdateWithoutPurchaseItemInput, PurchaseReceivedItemUncheckedUpdateWithoutPurchaseItemInput>
  }

  export type PurchaseReceivedItemUpdateManyWithWhereWithoutPurchaseItemInput = {
    where: PurchaseReceivedItemScalarWhereInput
    data: XOR<PurchaseReceivedItemUpdateManyMutationInput, PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseItemInput>
  }

  export type PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseItemInput = {
    where: PurchaseReturnItemWhereUniqueInput
    update: XOR<PurchaseReturnItemUpdateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedUpdateWithoutPurchaseItemInput>
    create: XOR<PurchaseReturnItemCreateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseItemInput>
  }

  export type PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseItemInput = {
    where: PurchaseReturnItemWhereUniqueInput
    data: XOR<PurchaseReturnItemUpdateWithoutPurchaseItemInput, PurchaseReturnItemUncheckedUpdateWithoutPurchaseItemInput>
  }

  export type PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseItemInput = {
    where: PurchaseReturnItemScalarWhereInput
    data: XOR<PurchaseReturnItemUpdateManyMutationInput, PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseItemInput>
  }

  export type PurchaseReturnItemScalarWhereInput = {
    AND?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
    OR?: PurchaseReturnItemScalarWhereInput[]
    NOT?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
    id?: StringFilter<"PurchaseReturnItem"> | string
    purchaseReturnId?: StringFilter<"PurchaseReturnItem"> | string
    purchaseItemId?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    productId?: StringFilter<"PurchaseReturnItem"> | string
    productName?: StringFilter<"PurchaseReturnItem"> | string
    productSku?: StringFilter<"PurchaseReturnItem"> | string
    receivedItemId?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    serialNumber?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    imei1?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    imei2?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatFilter<"PurchaseReturnItem"> | number
    condition?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    reason?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReturnItem"> | Date | string
  }

  export type PurchaseCreateWithoutReceivedItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutReceivedItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutReceivedItemsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutReceivedItemsInput, PurchaseUncheckedCreateWithoutReceivedItemsInput>
  }

  export type PurchaseItemCreateWithoutReceivedItemsInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutItemsInput
    returnItems?: PurchaseReturnItemCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemUncheckedCreateWithoutReceivedItemsInput = {
    id?: string
    purchaseId: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    returnItems?: PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemCreateOrConnectWithoutReceivedItemsInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutReceivedItemsInput, PurchaseItemUncheckedCreateWithoutReceivedItemsInput>
  }

  export type PurchaseReceivingCreateWithoutReceivedItemsInput = {
    id?: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutReceivingsInput
  }

  export type PurchaseReceivingUncheckedCreateWithoutReceivedItemsInput = {
    id?: string
    purchaseId: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReceivingCreateOrConnectWithoutReceivedItemsInput = {
    where: PurchaseReceivingWhereUniqueInput
    create: XOR<PurchaseReceivingCreateWithoutReceivedItemsInput, PurchaseReceivingUncheckedCreateWithoutReceivedItemsInput>
  }

  export type PurchaseUpsertWithoutReceivedItemsInput = {
    update: XOR<PurchaseUpdateWithoutReceivedItemsInput, PurchaseUncheckedUpdateWithoutReceivedItemsInput>
    create: XOR<PurchaseCreateWithoutReceivedItemsInput, PurchaseUncheckedCreateWithoutReceivedItemsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutReceivedItemsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutReceivedItemsInput, PurchaseUncheckedUpdateWithoutReceivedItemsInput>
  }

  export type PurchaseUpdateWithoutReceivedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutReceivedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseItemUpsertWithoutReceivedItemsInput = {
    update: XOR<PurchaseItemUpdateWithoutReceivedItemsInput, PurchaseItemUncheckedUpdateWithoutReceivedItemsInput>
    create: XOR<PurchaseItemCreateWithoutReceivedItemsInput, PurchaseItemUncheckedCreateWithoutReceivedItemsInput>
    where?: PurchaseItemWhereInput
  }

  export type PurchaseItemUpdateToOneWithWhereWithoutReceivedItemsInput = {
    where?: PurchaseItemWhereInput
    data: XOR<PurchaseItemUpdateWithoutReceivedItemsInput, PurchaseItemUncheckedUpdateWithoutReceivedItemsInput>
  }

  export type PurchaseItemUpdateWithoutReceivedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
    returnItems?: PurchaseReturnItemUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutReceivedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnItems?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseReceivingUpsertWithoutReceivedItemsInput = {
    update: XOR<PurchaseReceivingUpdateWithoutReceivedItemsInput, PurchaseReceivingUncheckedUpdateWithoutReceivedItemsInput>
    create: XOR<PurchaseReceivingCreateWithoutReceivedItemsInput, PurchaseReceivingUncheckedCreateWithoutReceivedItemsInput>
    where?: PurchaseReceivingWhereInput
  }

  export type PurchaseReceivingUpdateToOneWithWhereWithoutReceivedItemsInput = {
    where?: PurchaseReceivingWhereInput
    data: XOR<PurchaseReceivingUpdateWithoutReceivedItemsInput, PurchaseReceivingUncheckedUpdateWithoutReceivedItemsInput>
  }

  export type PurchaseReceivingUpdateWithoutReceivedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutReceivingsNestedInput
  }

  export type PurchaseReceivingUncheckedUpdateWithoutReceivedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateWithoutReceivingsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutReceivingsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutReceivingsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutReceivingsInput, PurchaseUncheckedCreateWithoutReceivingsInput>
  }

  export type PurchaseReceivedItemCreateWithoutReceivingInput = {
    id?: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutReceivedItemsInput
    purchaseItem: PurchaseItemCreateNestedOneWithoutReceivedItemsInput
  }

  export type PurchaseReceivedItemUncheckedCreateWithoutReceivingInput = {
    id?: string
    purchaseId: string
    purchaseItemId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemCreateOrConnectWithoutReceivingInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    create: XOR<PurchaseReceivedItemCreateWithoutReceivingInput, PurchaseReceivedItemUncheckedCreateWithoutReceivingInput>
  }

  export type PurchaseReceivedItemCreateManyReceivingInputEnvelope = {
    data: PurchaseReceivedItemCreateManyReceivingInput | PurchaseReceivedItemCreateManyReceivingInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithoutReceivingsInput = {
    update: XOR<PurchaseUpdateWithoutReceivingsInput, PurchaseUncheckedUpdateWithoutReceivingsInput>
    create: XOR<PurchaseCreateWithoutReceivingsInput, PurchaseUncheckedCreateWithoutReceivingsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutReceivingsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutReceivingsInput, PurchaseUncheckedUpdateWithoutReceivingsInput>
  }

  export type PurchaseUpdateWithoutReceivingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutReceivingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseReceivedItemUpsertWithWhereUniqueWithoutReceivingInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    update: XOR<PurchaseReceivedItemUpdateWithoutReceivingInput, PurchaseReceivedItemUncheckedUpdateWithoutReceivingInput>
    create: XOR<PurchaseReceivedItemCreateWithoutReceivingInput, PurchaseReceivedItemUncheckedCreateWithoutReceivingInput>
  }

  export type PurchaseReceivedItemUpdateWithWhereUniqueWithoutReceivingInput = {
    where: PurchaseReceivedItemWhereUniqueInput
    data: XOR<PurchaseReceivedItemUpdateWithoutReceivingInput, PurchaseReceivedItemUncheckedUpdateWithoutReceivingInput>
  }

  export type PurchaseReceivedItemUpdateManyWithWhereWithoutReceivingInput = {
    where: PurchaseReceivedItemScalarWhereInput
    data: XOR<PurchaseReceivedItemUpdateManyMutationInput, PurchaseReceivedItemUncheckedUpdateManyWithoutReceivingInput>
  }

  export type PurchaseCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutPaymentsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
  }

  export type PurchaseUpsertWithoutPaymentsInput = {
    update: XOR<PurchaseUpdateWithoutPaymentsInput, PurchaseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutPaymentsInput, PurchaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type PurchaseUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseReturnItemCreateWithoutPurchaseReturnInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
    purchaseItem?: PurchaseItemCreateNestedOneWithoutReturnItemsInput
  }

  export type PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput = {
    id?: string
    purchaseItemId?: string | null
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnItemCreateOrConnectWithoutPurchaseReturnInput = {
    where: PurchaseReturnItemWhereUniqueInput
    create: XOR<PurchaseReturnItemCreateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput>
  }

  export type PurchaseReturnItemCreateManyPurchaseReturnInputEnvelope = {
    data: PurchaseReturnItemCreateManyPurchaseReturnInput | PurchaseReturnItemCreateManyPurchaseReturnInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutReturnsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutReturnsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutReturnsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutReturnsInput, PurchaseUncheckedCreateWithoutReturnsInput>
  }

  export type PurchaseReturnItemUpsertWithWhereUniqueWithoutPurchaseReturnInput = {
    where: PurchaseReturnItemWhereUniqueInput
    update: XOR<PurchaseReturnItemUpdateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedUpdateWithoutPurchaseReturnInput>
    create: XOR<PurchaseReturnItemCreateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput>
  }

  export type PurchaseReturnItemUpdateWithWhereUniqueWithoutPurchaseReturnInput = {
    where: PurchaseReturnItemWhereUniqueInput
    data: XOR<PurchaseReturnItemUpdateWithoutPurchaseReturnInput, PurchaseReturnItemUncheckedUpdateWithoutPurchaseReturnInput>
  }

  export type PurchaseReturnItemUpdateManyWithWhereWithoutPurchaseReturnInput = {
    where: PurchaseReturnItemScalarWhereInput
    data: XOR<PurchaseReturnItemUpdateManyMutationInput, PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnInput>
  }

  export type PurchaseUpsertWithoutReturnsInput = {
    update: XOR<PurchaseUpdateWithoutReturnsInput, PurchaseUncheckedUpdateWithoutReturnsInput>
    create: XOR<PurchaseCreateWithoutReturnsInput, PurchaseUncheckedCreateWithoutReturnsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutReturnsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutReturnsInput, PurchaseUncheckedUpdateWithoutReturnsInput>
  }

  export type PurchaseUpdateWithoutReturnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutReturnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseReturnCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase?: PurchaseCreateNestedOneWithoutReturnsInput
  }

  export type PurchaseReturnUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseId?: string | null
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReturnCreateOrConnectWithoutItemsInput = {
    where: PurchaseReturnWhereUniqueInput
    create: XOR<PurchaseReturnCreateWithoutItemsInput, PurchaseReturnUncheckedCreateWithoutItemsInput>
  }

  export type PurchaseItemCreateWithoutReturnItemsInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutItemsInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemUncheckedCreateWithoutReturnItemsInput = {
    id?: string
    purchaseId: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseItemInput
  }

  export type PurchaseItemCreateOrConnectWithoutReturnItemsInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutReturnItemsInput, PurchaseItemUncheckedCreateWithoutReturnItemsInput>
  }

  export type PurchaseReturnUpsertWithoutItemsInput = {
    update: XOR<PurchaseReturnUpdateWithoutItemsInput, PurchaseReturnUncheckedUpdateWithoutItemsInput>
    create: XOR<PurchaseReturnCreateWithoutItemsInput, PurchaseReturnUncheckedCreateWithoutItemsInput>
    where?: PurchaseReturnWhereInput
  }

  export type PurchaseReturnUpdateToOneWithWhereWithoutItemsInput = {
    where?: PurchaseReturnWhereInput
    data: XOR<PurchaseReturnUpdateWithoutItemsInput, PurchaseReturnUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseReturnUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneWithoutReturnsNestedInput
  }

  export type PurchaseReturnUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUpsertWithoutReturnItemsInput = {
    update: XOR<PurchaseItemUpdateWithoutReturnItemsInput, PurchaseItemUncheckedUpdateWithoutReturnItemsInput>
    create: XOR<PurchaseItemCreateWithoutReturnItemsInput, PurchaseItemUncheckedCreateWithoutReturnItemsInput>
    where?: PurchaseItemWhereInput
  }

  export type PurchaseItemUpdateToOneWithWhereWithoutReturnItemsInput = {
    where?: PurchaseItemWhereInput
    data: XOR<PurchaseItemUpdateWithoutReturnItemsInput, PurchaseItemUncheckedUpdateWithoutReturnItemsInput>
  }

  export type PurchaseItemUpdateWithoutReturnItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutReturnItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseCreateWithoutDocumentsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutDocumentsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    history?: PurchaseHistoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutDocumentsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutDocumentsInput, PurchaseUncheckedCreateWithoutDocumentsInput>
  }

  export type PurchaseUpsertWithoutDocumentsInput = {
    update: XOR<PurchaseUpdateWithoutDocumentsInput, PurchaseUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PurchaseCreateWithoutDocumentsInput, PurchaseUncheckedCreateWithoutDocumentsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutDocumentsInput, PurchaseUncheckedUpdateWithoutDocumentsInput>
  }

  export type PurchaseUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    history?: PurchaseHistoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateWithoutHistoryInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutHistoryInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseNumber: string
    supplierId: string
    supplierName: string
    supplierContact?: string | null
    supplierAddress?: string | null
    supplierTaxId?: string | null
    purchaseDate?: Date | string
    supplierInvoiceNo?: string | null
    currency?: string
    exchangeRate?: number
    commercialStatus?: $Enums.PurchaseCommercialStatus
    receivingStatus?: $Enums.PurchaseReceivingStatus
    paymentStatus?: $Enums.PurchasePaymentStatus
    accountingStatus?: $Enums.PurchaseAccountingStatus
    subtotal?: number
    discountTotal?: number
    taxTotal?: number
    otherCostTotal?: number
    grandTotal?: number
    amountPaid?: number
    amountOutstanding?: number
    notes?: string | null
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivedItems?: PurchaseReceivedItemUncheckedCreateNestedManyWithoutPurchaseInput
    receivings?: PurchaseReceivingUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
    documents?: PurchaseDocumentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutHistoryInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutHistoryInput, PurchaseUncheckedCreateWithoutHistoryInput>
  }

  export type PurchaseUpsertWithoutHistoryInput = {
    update: XOR<PurchaseUpdateWithoutHistoryInput, PurchaseUncheckedUpdateWithoutHistoryInput>
    create: XOR<PurchaseCreateWithoutHistoryInput, PurchaseUncheckedCreateWithoutHistoryInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutHistoryInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutHistoryInput, PurchaseUncheckedUpdateWithoutHistoryInput>
  }

  export type PurchaseUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    supplierName?: StringFieldUpdateOperationsInput | string
    supplierContact?: NullableStringFieldUpdateOperationsInput | string | null
    supplierAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supplierTaxId?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    commercialStatus?: EnumPurchaseCommercialStatusFieldUpdateOperationsInput | $Enums.PurchaseCommercialStatus
    receivingStatus?: EnumPurchaseReceivingStatusFieldUpdateOperationsInput | $Enums.PurchaseReceivingStatus
    paymentStatus?: EnumPurchasePaymentStatusFieldUpdateOperationsInput | $Enums.PurchasePaymentStatus
    accountingStatus?: EnumPurchaseAccountingStatusFieldUpdateOperationsInput | $Enums.PurchaseAccountingStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discountTotal?: FloatFieldUpdateOperationsInput | number
    taxTotal?: FloatFieldUpdateOperationsInput | number
    otherCostTotal?: FloatFieldUpdateOperationsInput | number
    grandTotal?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    amountOutstanding?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseNestedInput
    receivings?: PurchaseReceivingUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
    documents?: PurchaseDocumentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type SupplierOrderItemCreateWithoutSupplierOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt?: Date | string
  }

  export type SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt?: Date | string
  }

  export type SupplierOrderItemCreateOrConnectWithoutSupplierOrderInput = {
    where: SupplierOrderItemWhereUniqueInput
    create: XOR<SupplierOrderItemCreateWithoutSupplierOrderInput, SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput>
  }

  export type SupplierOrderItemCreateManySupplierOrderInputEnvelope = {
    data: SupplierOrderItemCreateManySupplierOrderInput | SupplierOrderItemCreateManySupplierOrderInput[]
    skipDuplicates?: boolean
  }

  export type SupplierOrderItemUpsertWithWhereUniqueWithoutSupplierOrderInput = {
    where: SupplierOrderItemWhereUniqueInput
    update: XOR<SupplierOrderItemUpdateWithoutSupplierOrderInput, SupplierOrderItemUncheckedUpdateWithoutSupplierOrderInput>
    create: XOR<SupplierOrderItemCreateWithoutSupplierOrderInput, SupplierOrderItemUncheckedCreateWithoutSupplierOrderInput>
  }

  export type SupplierOrderItemUpdateWithWhereUniqueWithoutSupplierOrderInput = {
    where: SupplierOrderItemWhereUniqueInput
    data: XOR<SupplierOrderItemUpdateWithoutSupplierOrderInput, SupplierOrderItemUncheckedUpdateWithoutSupplierOrderInput>
  }

  export type SupplierOrderItemUpdateManyWithWhereWithoutSupplierOrderInput = {
    where: SupplierOrderItemScalarWhereInput
    data: XOR<SupplierOrderItemUpdateManyMutationInput, SupplierOrderItemUncheckedUpdateManyWithoutSupplierOrderInput>
  }

  export type SupplierOrderItemScalarWhereInput = {
    AND?: SupplierOrderItemScalarWhereInput | SupplierOrderItemScalarWhereInput[]
    OR?: SupplierOrderItemScalarWhereInput[]
    NOT?: SupplierOrderItemScalarWhereInput | SupplierOrderItemScalarWhereInput[]
    id?: StringFilter<"SupplierOrderItem"> | string
    supplierOrderId?: StringFilter<"SupplierOrderItem"> | string
    productId?: StringFilter<"SupplierOrderItem"> | string
    quantity?: FloatFilter<"SupplierOrderItem"> | number
    unitPrice?: FloatFilter<"SupplierOrderItem"> | number
    total?: FloatFilter<"SupplierOrderItem"> | number
    createdAt?: DateTimeFilter<"SupplierOrderItem"> | Date | string
  }

  export type SupplierOrderCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    orderNumber: string
    totalAmount: number
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    orderNumber: string
    totalAmount: number
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierOrderCreateOrConnectWithoutItemsInput = {
    where: SupplierOrderWhereUniqueInput
    create: XOR<SupplierOrderCreateWithoutItemsInput, SupplierOrderUncheckedCreateWithoutItemsInput>
  }

  export type SupplierOrderUpsertWithoutItemsInput = {
    update: XOR<SupplierOrderUpdateWithoutItemsInput, SupplierOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<SupplierOrderCreateWithoutItemsInput, SupplierOrderUncheckedCreateWithoutItemsInput>
    where?: SupplierOrderWhereInput
  }

  export type SupplierOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: SupplierOrderWhereInput
    data: XOR<SupplierOrderUpdateWithoutItemsInput, SupplierOrderUncheckedUpdateWithoutItemsInput>
  }

  export type SupplierOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyPurchaseInput = {
    id?: string
    productId: string
    productName: string
    productSku: string
    productTracking: string
    orderedQty: number
    receivedQty?: number
    acceptedQty?: number
    rejectedQty?: number
    returnedQty?: number
    unitPrice: number
    discountAmount?: number
    discountType?: string | null
    taxRate?: number
    taxAmount?: number
    otherCosts?: number
    lineTotal: number
    acquisitionCost?: number
    purchaseSpecs?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReceivedItemCreateManyPurchaseInput = {
    id?: string
    purchaseItemId: string
    receivingId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivingCreateManyPurchaseInput = {
    id?: string
    receivingNumber: string
    receivedById: string
    receivedAt?: Date | string
    receivedAtShop: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchasePaymentCreateManyPurchaseInput = {
    id?: string
    paymentNumber: string
    amount: number
    currency?: string
    exchangeRate?: number
    paymentMethod: $Enums.PaymentMethod
    accountId?: string | null
    accountName?: string | null
    reference?: string | null
    paidById: string
    paidAt?: Date | string
    notes?: string | null
    accountingRef?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReturnCreateManyPurchaseInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId: string
    returnNumber: string
    totalAmount?: number
    refundAmount?: number
    reason?: string | null
    status?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseDocumentCreateManyPurchaseInput = {
    id?: string
    documentType: string
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    uploadedById: string
    uploadedAt?: Date | string
    notes?: string | null
  }

  export type PurchaseHistoryCreateManyPurchaseInput = {
    id?: string
    eventType: string
    eventData: string
    userId: string
    userName: string
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PurchaseItemUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutPurchaseItemNestedInput
    returnItems?: PurchaseReturnItemUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseItemNestedInput
    returnItems?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseItemNestedInput
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    productTracking?: StringFieldUpdateOperationsInput | string
    orderedQty?: FloatFieldUpdateOperationsInput | number
    receivedQty?: FloatFieldUpdateOperationsInput | number
    acceptedQty?: FloatFieldUpdateOperationsInput | number
    rejectedQty?: FloatFieldUpdateOperationsInput | number
    returnedQty?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discountAmount?: FloatFieldUpdateOperationsInput | number
    discountType?: NullableStringFieldUpdateOperationsInput | string | null
    taxRate?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    otherCosts?: FloatFieldUpdateOperationsInput | number
    lineTotal?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    purchaseSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItem?: PurchaseItemUpdateOneRequiredWithoutReceivedItemsNestedInput
    receiving?: PurchaseReceivingUpdateOneRequiredWithoutReceivedItemsNestedInput
  }

  export type PurchaseReceivedItemUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: StringFieldUpdateOperationsInput | string
    receivingId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: StringFieldUpdateOperationsInput | string
    receivingId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivingUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUpdateManyWithoutReceivingNestedInput
  }

  export type PurchaseReceivingUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedItems?: PurchaseReceivedItemUncheckedUpdateManyWithoutReceivingNestedInput
  }

  export type PurchaseReceivingUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    receivingNumber?: StringFieldUpdateOperationsInput | string
    receivedById?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAtShop?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    exchangeRate?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    paidById?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    accountingRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUpdateManyWithoutPurchaseReturnNestedInput
  }

  export type PurchaseReturnUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnNestedInput
  }

  export type PurchaseReturnUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseDocumentUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseDocumentUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseDocumentUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseHistoryUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseHistoryUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseHistoryUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemCreateManyPurchaseItemInput = {
    id?: string
    purchaseId: string
    receivingId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnItemCreateManyPurchaseItemInput = {
    id?: string
    purchaseReturnId: string
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemUpdateWithoutPurchaseItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutReceivedItemsNestedInput
    receiving?: PurchaseReceivingUpdateOneRequiredWithoutReceivedItemsNestedInput
  }

  export type PurchaseReceivedItemUncheckedUpdateWithoutPurchaseItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    receivingId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemUncheckedUpdateManyWithoutPurchaseItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    receivingId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUpdateWithoutPurchaseItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseReturn?: PurchaseReturnUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PurchaseReturnItemUncheckedUpdateWithoutPurchaseItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseReturnId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseReturnId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemCreateManyReceivingInput = {
    id?: string
    purchaseId: string
    purchaseItemId: string
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    condition?: $Enums.ReceivingItemCondition
    actualSpecs?: string | null
    unitAcquisitionCost: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReceivedItemUpdateWithoutReceivingInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutReceivedItemsNestedInput
    purchaseItem?: PurchaseItemUpdateOneRequiredWithoutReceivedItemsNestedInput
  }

  export type PurchaseReceivedItemUncheckedUpdateWithoutReceivingInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReceivedItemUncheckedUpdateManyWithoutReceivingInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumReceivingItemConditionFieldUpdateOperationsInput | $Enums.ReceivingItemCondition
    actualSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    unitAcquisitionCost?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemCreateManyPurchaseReturnInput = {
    id?: string
    purchaseItemId?: string | null
    productId: string
    productName: string
    productSku: string
    receivedItemId?: string | null
    serialNumber?: string | null
    imei1?: string | null
    imei2?: string | null
    quantity: number
    refundAmount: number
    condition?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUpdateWithoutPurchaseReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItem?: PurchaseItemUpdateOneWithoutReturnItemsNestedInput
  }

  export type PurchaseReturnItemUncheckedUpdateWithoutPurchaseReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseItemId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productSku?: StringFieldUpdateOperationsInput | string
    receivedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imei1?: NullableStringFieldUpdateOperationsInput | string | null
    imei2?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderItemCreateManySupplierOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    total: number
    createdAt?: Date | string
  }

  export type SupplierOrderItemUpdateWithoutSupplierOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderItemUncheckedUpdateWithoutSupplierOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierOrderItemUncheckedUpdateManyWithoutSupplierOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PurchaseCountOutputTypeDefaultArgs instead
     */
    export type PurchaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseItemCountOutputTypeDefaultArgs instead
     */
    export type PurchaseItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReceivingCountOutputTypeDefaultArgs instead
     */
    export type PurchaseReceivingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReceivingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReturnCountOutputTypeDefaultArgs instead
     */
    export type PurchaseReturnCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReturnCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierOrderCountOutputTypeDefaultArgs instead
     */
    export type SupplierOrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierOrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDefaultArgs instead
     */
    export type PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseItemDefaultArgs instead
     */
    export type PurchaseItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReceivedItemDefaultArgs instead
     */
    export type PurchaseReceivedItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReceivedItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReceivingDefaultArgs instead
     */
    export type PurchaseReceivingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReceivingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchasePaymentDefaultArgs instead
     */
    export type PurchasePaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchasePaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReturnDefaultArgs instead
     */
    export type PurchaseReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReturnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReturnItemDefaultArgs instead
     */
    export type PurchaseReturnItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReturnItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDocumentDefaultArgs instead
     */
    export type PurchaseDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseHistoryDefaultArgs instead
     */
    export type PurchaseHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierOrderDefaultArgs instead
     */
    export type SupplierOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierOrderItemDefaultArgs instead
     */
    export type SupplierOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierOrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}