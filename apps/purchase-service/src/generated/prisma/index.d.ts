
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
 * Model PurchasePayment
 * 
 */
export type PurchasePayment = $Result.DefaultSelection<Prisma.$PurchasePaymentPayload>
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
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

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
   * `prisma.purchasePayment`: Exposes CRUD operations for the **PurchasePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchasePayments
    * const purchasePayments = await prisma.purchasePayment.findMany()
    * ```
    */
  get purchasePayment(): Prisma.PurchasePaymentDelegate<ExtArgs>;

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
    PurchasePayment: 'PurchasePayment',
    SupplierOrder: 'SupplierOrder',
    SupplierOrderItem: 'SupplierOrderItem',
    PurchaseReturn: 'PurchaseReturn',
    PurchaseReturnItem: 'PurchaseReturnItem',
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
      modelProps: "purchase" | "purchaseItem" | "purchasePayment" | "supplierOrder" | "supplierOrderItem" | "purchaseReturn" | "purchaseReturnItem" | "auditLog"
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
    payments: number
    returns: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchaseCountOutputTypeCountItemsArgs
    payments?: boolean | PurchaseCountOutputTypeCountPaymentsArgs
    returns?: boolean | PurchaseCountOutputTypeCountReturnsArgs
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
    totalAmount: number | null
    totalCost: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    totalAmount: number | null
    totalCost: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    poNumber: string | null
    supplierId: string | null
    totalAmount: number | null
    totalCost: number | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    poNumber: string | null
    supplierId: string | null
    totalAmount: number | null
    totalCost: number | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    poNumber: number
    supplierId: number
    totalAmount: number
    totalCost: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    totalAmount?: true
    totalCost?: true
  }

  export type PurchaseSumAggregateInputType = {
    totalAmount?: true
    totalCost?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    poNumber?: true
    supplierId?: true
    totalAmount?: true
    totalCost?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    poNumber?: true
    supplierId?: true
    totalAmount?: true
    totalCost?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    poNumber?: true
    supplierId?: true
    totalAmount?: true
    totalCost?: true
    status?: true
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
    poNumber: string
    supplierId: string | null
    totalAmount: number
    totalCost: number
    status: string
    createdById: string | null
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
    poNumber?: boolean
    supplierId?: boolean
    totalAmount?: boolean
    totalCost?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    payments?: boolean | Purchase$paymentsArgs<ExtArgs>
    returns?: boolean | Purchase$returnsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    poNumber?: boolean
    supplierId?: boolean
    totalAmount?: boolean
    totalCost?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    poNumber?: boolean
    supplierId?: boolean
    totalAmount?: boolean
    totalCost?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    payments?: boolean | Purchase$paymentsArgs<ExtArgs>
    returns?: boolean | Purchase$returnsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      items: Prisma.$PurchaseItemPayload<ExtArgs>[]
      payments: Prisma.$PurchasePaymentPayload<ExtArgs>[]
      returns: Prisma.$PurchaseReturnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      poNumber: string
      supplierId: string | null
      totalAmount: number
      totalCost: number
      status: string
      createdById: string | null
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
    payments<T extends Purchase$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePaymentPayload<ExtArgs>, T, "findMany"> | Null>
    returns<T extends Purchase$returnsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$returnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseReturnPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly poNumber: FieldRef<"Purchase", 'String'>
    readonly supplierId: FieldRef<"Purchase", 'String'>
    readonly totalAmount: FieldRef<"Purchase", 'Float'>
    readonly totalCost: FieldRef<"Purchase", 'Float'>
    readonly status: FieldRef<"Purchase", 'String'>
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
    quantity: number | null
    purchaseCost: number | null
    total: number | null
  }

  export type PurchaseItemSumAggregateOutputType = {
    quantity: number | null
    purchaseCost: number | null
    total: number | null
  }

  export type PurchaseItemMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    purchaseCost: number | null
    total: number | null
    createdAt: Date | null
  }

  export type PurchaseItemMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    purchaseCost: number | null
    total: number | null
    createdAt: Date | null
  }

  export type PurchaseItemCountAggregateOutputType = {
    id: number
    purchaseId: number
    productId: number
    serialNumber: number
    quantity: number
    purchaseCost: number
    total: number
    createdAt: number
    _all: number
  }


  export type PurchaseItemAvgAggregateInputType = {
    quantity?: true
    purchaseCost?: true
    total?: true
  }

  export type PurchaseItemSumAggregateInputType = {
    quantity?: true
    purchaseCost?: true
    total?: true
  }

  export type PurchaseItemMinAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    purchaseCost?: true
    total?: true
    createdAt?: true
  }

  export type PurchaseItemMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    purchaseCost?: true
    total?: true
    createdAt?: true
  }

  export type PurchaseItemCountAggregateInputType = {
    id?: true
    purchaseId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    purchaseCost?: true
    total?: true
    createdAt?: true
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
    serialNumber: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt: Date
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
    serialNumber?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    total?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    total?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    purchaseCost?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type PurchaseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchaseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseItem"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseId: string
      productId: string
      serialNumber: string | null
      quantity: number
      purchaseCost: number
      total: number
      createdAt: Date
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
    readonly serialNumber: FieldRef<"PurchaseItem", 'String'>
    readonly quantity: FieldRef<"PurchaseItem", 'Float'>
    readonly purchaseCost: FieldRef<"PurchaseItem", 'Float'>
    readonly total: FieldRef<"PurchaseItem", 'Float'>
    readonly createdAt: FieldRef<"PurchaseItem", 'DateTime'>
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
  }

  export type PurchasePaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PurchasePaymentMinAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type PurchasePaymentMaxAggregateOutputType = {
    id: string | null
    purchaseId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type PurchasePaymentCountAggregateOutputType = {
    id: number
    purchaseId: number
    amount: number
    method: number
    reference: number
    createdAt: number
    _all: number
  }


  export type PurchasePaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PurchasePaymentSumAggregateInputType = {
    amount?: true
  }

  export type PurchasePaymentMinAggregateInputType = {
    id?: true
    purchaseId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type PurchasePaymentMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type PurchasePaymentCountAggregateInputType = {
    id?: true
    purchaseId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
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
    amount: number
    method: string
    reference: string | null
    createdAt: Date
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
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasePayment"]>

  export type PurchasePaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasePayment"]>

  export type PurchasePaymentSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
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
      amount: number
      method: string
      reference: string | null
      createdAt: Date
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
    readonly amount: FieldRef<"PurchasePayment", 'Float'>
    readonly method: FieldRef<"PurchasePayment", 'String'>
    readonly reference: FieldRef<"PurchasePayment", 'String'>
    readonly createdAt: FieldRef<"PurchasePayment", 'DateTime'>
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
    createdById: string | null
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
      createdById: string | null
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
    supplierId: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason: string | null
    status: string
    createdById: string | null
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
    Purchase?: boolean | PurchaseReturn$PurchaseArgs<ExtArgs>
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
    Purchase?: boolean | PurchaseReturn$PurchaseArgs<ExtArgs>
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
    Purchase?: boolean | PurchaseReturn$PurchaseArgs<ExtArgs>
    _count?: boolean | PurchaseReturnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseReturnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Purchase?: boolean | PurchaseReturn$PurchaseArgs<ExtArgs>
  }

  export type $PurchaseReturnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseReturn"
    objects: {
      items: Prisma.$PurchaseReturnItemPayload<ExtArgs>[]
      Purchase: Prisma.$PurchasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      purchaseId: string | null
      supplierId: string | null
      returnNumber: string
      totalAmount: number
      refundAmount: number
      reason: string | null
      status: string
      createdById: string | null
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
    Purchase<T extends PurchaseReturn$PurchaseArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseReturn$PurchaseArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * PurchaseReturn.Purchase
   */
  export type PurchaseReturn$PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    refundAmount: number | null
    createdAt: Date | null
  }

  export type PurchaseReturnItemMaxAggregateOutputType = {
    id: string | null
    purchaseReturnId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    refundAmount: number | null
    createdAt: Date | null
  }

  export type PurchaseReturnItemCountAggregateOutputType = {
    id: number
    purchaseReturnId: number
    productId: number
    serialNumber: number
    quantity: number
    refundAmount: number
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
    productId?: true
    serialNumber?: true
    quantity?: true
    refundAmount?: true
    createdAt?: true
  }

  export type PurchaseReturnItemMaxAggregateInputType = {
    id?: true
    purchaseReturnId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    refundAmount?: true
    createdAt?: true
  }

  export type PurchaseReturnItemCountAggregateInputType = {
    id?: true
    purchaseReturnId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    refundAmount?: true
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
    productId: string
    serialNumber: string | null
    quantity: number
    refundAmount: number
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
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    refundAmount?: boolean
    createdAt?: boolean
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReturnItem"]>

  export type PurchaseReturnItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseReturnId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    refundAmount?: boolean
    createdAt?: boolean
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseReturnItem"]>

  export type PurchaseReturnItemSelectScalar = {
    id?: boolean
    purchaseReturnId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    refundAmount?: boolean
    createdAt?: boolean
  }

  export type PurchaseReturnItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
  }
  export type PurchaseReturnItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseReturn?: boolean | PurchaseReturnDefaultArgs<ExtArgs>
  }

  export type $PurchaseReturnItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseReturnItem"
    objects: {
      purchaseReturn: Prisma.$PurchaseReturnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      purchaseReturnId: string
      productId: string
      serialNumber: string | null
      quantity: number
      refundAmount: number
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
    readonly productId: FieldRef<"PurchaseReturnItem", 'String'>
    readonly serialNumber: FieldRef<"PurchaseReturnItem", 'String'>
    readonly quantity: FieldRef<"PurchaseReturnItem", 'Float'>
    readonly refundAmount: FieldRef<"PurchaseReturnItem", 'Float'>
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
    poNumber: 'poNumber',
    supplierId: 'supplierId',
    totalAmount: 'totalAmount',
    totalCost: 'totalCost',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchaseItemScalarFieldEnum: {
    id: 'id',
    purchaseId: 'purchaseId',
    productId: 'productId',
    serialNumber: 'serialNumber',
    quantity: 'quantity',
    purchaseCost: 'purchaseCost',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type PurchaseItemScalarFieldEnum = (typeof PurchaseItemScalarFieldEnum)[keyof typeof PurchaseItemScalarFieldEnum]


  export const PurchasePaymentScalarFieldEnum: {
    id: 'id',
    purchaseId: 'purchaseId',
    amount: 'amount',
    method: 'method',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type PurchasePaymentScalarFieldEnum = (typeof PurchasePaymentScalarFieldEnum)[keyof typeof PurchasePaymentScalarFieldEnum]


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
    productId: 'productId',
    serialNumber: 'serialNumber',
    quantity: 'quantity',
    refundAmount: 'refundAmount',
    createdAt: 'createdAt'
  };

  export type PurchaseReturnItemScalarFieldEnum = (typeof PurchaseReturnItemScalarFieldEnum)[keyof typeof PurchaseReturnItemScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    poNumber?: StringFilter<"Purchase"> | string
    supplierId?: StringNullableFilter<"Purchase"> | string | null
    totalAmount?: FloatFilter<"Purchase"> | number
    totalCost?: FloatFilter<"Purchase"> | number
    status?: StringFilter<"Purchase"> | string
    createdById?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    items?: PurchaseItemListRelationFilter
    payments?: PurchasePaymentListRelationFilter
    returns?: PurchaseReturnListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    poNumber?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: PurchaseItemOrderByRelationAggregateInput
    payments?: PurchasePaymentOrderByRelationAggregateInput
    returns?: PurchaseReturnOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    poNumber?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    tenantId?: StringFilter<"Purchase"> | string
    shopId?: StringFilter<"Purchase"> | string
    supplierId?: StringNullableFilter<"Purchase"> | string | null
    totalAmount?: FloatFilter<"Purchase"> | number
    totalCost?: FloatFilter<"Purchase"> | number
    status?: StringFilter<"Purchase"> | string
    createdById?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    items?: PurchaseItemListRelationFilter
    payments?: PurchasePaymentListRelationFilter
    returns?: PurchaseReturnListRelationFilter
  }, "id" | "poNumber">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    poNumber?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
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
    poNumber?: StringWithAggregatesFilter<"Purchase"> | string
    supplierId?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    totalCost?: FloatWithAggregatesFilter<"Purchase"> | number
    status?: StringWithAggregatesFilter<"Purchase"> | string
    createdById?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
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
    serialNumber?: StringNullableFilter<"PurchaseItem"> | string | null
    quantity?: FloatFilter<"PurchaseItem"> | number
    purchaseCost?: FloatFilter<"PurchaseItem"> | number
    total?: FloatFilter<"PurchaseItem"> | number
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type PurchaseItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchaseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    purchaseId?: StringFilter<"PurchaseItem"> | string
    productId?: StringFilter<"PurchaseItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseItem"> | string | null
    quantity?: FloatFilter<"PurchaseItem"> | number
    purchaseCost?: FloatFilter<"PurchaseItem"> | number
    total?: FloatFilter<"PurchaseItem"> | number
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id">

  export type PurchaseItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
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
    serialNumber?: StringNullableWithAggregatesFilter<"PurchaseItem"> | string | null
    quantity?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    purchaseCost?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    total?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseItem"> | Date | string
  }

  export type PurchasePaymentWhereInput = {
    AND?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    OR?: PurchasePaymentWhereInput[]
    NOT?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    id?: StringFilter<"PurchasePayment"> | string
    purchaseId?: StringFilter<"PurchasePayment"> | string
    amount?: FloatFilter<"PurchasePayment"> | number
    method?: StringFilter<"PurchasePayment"> | string
    reference?: StringNullableFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type PurchasePaymentOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchasePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    OR?: PurchasePaymentWhereInput[]
    NOT?: PurchasePaymentWhereInput | PurchasePaymentWhereInput[]
    purchaseId?: StringFilter<"PurchasePayment"> | string
    amount?: FloatFilter<"PurchasePayment"> | number
    method?: StringFilter<"PurchasePayment"> | string
    reference?: StringNullableFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeFilter<"PurchasePayment"> | Date | string
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id">

  export type PurchasePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    amount?: FloatWithAggregatesFilter<"PurchasePayment"> | number
    method?: StringWithAggregatesFilter<"PurchasePayment"> | string
    reference?: StringNullableWithAggregatesFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchasePayment"> | Date | string
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
    createdById?: StringNullableFilter<"SupplierOrder"> | string | null
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
    createdById?: SortOrderInput | SortOrder
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
    createdById?: StringNullableFilter<"SupplierOrder"> | string | null
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
    createdById?: SortOrderInput | SortOrder
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
    createdById?: StringNullableWithAggregatesFilter<"SupplierOrder"> | string | null
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

  export type PurchaseReturnWhereInput = {
    AND?: PurchaseReturnWhereInput | PurchaseReturnWhereInput[]
    OR?: PurchaseReturnWhereInput[]
    NOT?: PurchaseReturnWhereInput | PurchaseReturnWhereInput[]
    id?: StringFilter<"PurchaseReturn"> | string
    tenantId?: StringFilter<"PurchaseReturn"> | string
    shopId?: StringFilter<"PurchaseReturn"> | string
    purchaseId?: StringNullableFilter<"PurchaseReturn"> | string | null
    supplierId?: StringNullableFilter<"PurchaseReturn"> | string | null
    returnNumber?: StringFilter<"PurchaseReturn"> | string
    totalAmount?: FloatFilter<"PurchaseReturn"> | number
    refundAmount?: FloatFilter<"PurchaseReturn"> | number
    reason?: StringNullableFilter<"PurchaseReturn"> | string | null
    status?: StringFilter<"PurchaseReturn"> | string
    createdById?: StringNullableFilter<"PurchaseReturn"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    items?: PurchaseReturnItemListRelationFilter
    Purchase?: XOR<PurchaseNullableRelationFilter, PurchaseWhereInput> | null
  }

  export type PurchaseReturnOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: PurchaseReturnItemOrderByRelationAggregateInput
    Purchase?: PurchaseOrderByWithRelationInput
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
    supplierId?: StringNullableFilter<"PurchaseReturn"> | string | null
    totalAmount?: FloatFilter<"PurchaseReturn"> | number
    refundAmount?: FloatFilter<"PurchaseReturn"> | number
    reason?: StringNullableFilter<"PurchaseReturn"> | string | null
    status?: StringFilter<"PurchaseReturn"> | string
    createdById?: StringNullableFilter<"PurchaseReturn"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    items?: PurchaseReturnItemListRelationFilter
    Purchase?: XOR<PurchaseNullableRelationFilter, PurchaseWhereInput> | null
  }, "id" | "returnNumber">

  export type PurchaseReturnOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    returnNumber?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
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
    supplierId?: StringNullableWithAggregatesFilter<"PurchaseReturn"> | string | null
    returnNumber?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    totalAmount?: FloatWithAggregatesFilter<"PurchaseReturn"> | number
    refundAmount?: FloatWithAggregatesFilter<"PurchaseReturn"> | number
    reason?: StringNullableWithAggregatesFilter<"PurchaseReturn"> | string | null
    status?: StringWithAggregatesFilter<"PurchaseReturn"> | string
    createdById?: StringNullableWithAggregatesFilter<"PurchaseReturn"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseReturn"> | Date | string
  }

  export type PurchaseReturnItemWhereInput = {
    AND?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    OR?: PurchaseReturnItemWhereInput[]
    NOT?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    id?: StringFilter<"PurchaseReturnItem"> | string
    purchaseReturnId?: StringFilter<"PurchaseReturnItem"> | string
    productId?: StringFilter<"PurchaseReturnItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatFilter<"PurchaseReturnItem"> | number
    createdAt?: DateTimeFilter<"PurchaseReturnItem"> | Date | string
    purchaseReturn?: XOR<PurchaseReturnRelationFilter, PurchaseReturnWhereInput>
  }

  export type PurchaseReturnItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
    purchaseReturn?: PurchaseReturnOrderByWithRelationInput
  }

  export type PurchaseReturnItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    OR?: PurchaseReturnItemWhereInput[]
    NOT?: PurchaseReturnItemWhereInput | PurchaseReturnItemWhereInput[]
    purchaseReturnId?: StringFilter<"PurchaseReturnItem"> | string
    productId?: StringFilter<"PurchaseReturnItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatFilter<"PurchaseReturnItem"> | number
    createdAt?: DateTimeFilter<"PurchaseReturnItem"> | Date | string
    purchaseReturn?: XOR<PurchaseReturnRelationFilter, PurchaseReturnWhereInput>
  }, "id">

  export type PurchaseReturnItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
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
    productId?: StringWithAggregatesFilter<"PurchaseReturnItem"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatWithAggregatesFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatWithAggregatesFilter<"PurchaseReturnItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseReturnItem"> | Date | string
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
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutItemsInput
  }

  export type PurchaseItemUncheckedCreateInput = {
    id?: string
    purchaseId: string
    productId: string
    serialNumber?: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt?: Date | string
  }

  export type PurchaseItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyInput = {
    id?: string
    purchaseId: string
    productId: string
    serialNumber?: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt?: Date | string
  }

  export type PurchaseItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentCreateInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutPaymentsInput
  }

  export type PurchasePaymentUncheckedCreateInput = {
    id?: string
    purchaseId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type PurchasePaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PurchasePaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentCreateManyInput = {
    id?: string
    purchaseId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type PurchasePaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdById?: string | null
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
    createdById?: string | null
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
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdById?: string | null
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
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PurchaseReturnCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemCreateNestedManyWithoutPurchaseReturnInput
    Purchase?: PurchaseCreateNestedOneWithoutReturnsInput
  }

  export type PurchaseReturnUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseId?: string | null
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemUncheckedCreateNestedManyWithoutPurchaseReturnInput
  }

  export type PurchaseReturnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUpdateManyWithoutPurchaseReturnNestedInput
    Purchase?: PurchaseUpdateOneWithoutReturnsNestedInput
  }

  export type PurchaseReturnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnNestedInput
  }

  export type PurchaseReturnCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseId?: string | null
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReturnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemCreateInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    refundAmount: number
    createdAt?: Date | string
    purchaseReturn: PurchaseReturnCreateNestedOneWithoutItemsInput
  }

  export type PurchaseReturnItemUncheckedCreateInput = {
    id?: string
    purchaseReturnId: string
    productId: string
    serialNumber?: string | null
    quantity: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseReturn?: PurchaseReturnUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PurchaseReturnItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseReturnId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemCreateManyInput = {
    id?: string
    purchaseReturnId: string
    productId: string
    serialNumber?: string | null
    quantity: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseReturnId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
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

  export type PurchaseItemListRelationFilter = {
    every?: PurchaseItemWhereInput
    some?: PurchaseItemWhereInput
    none?: PurchaseItemWhereInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseReturnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    poNumber?: SortOrder
    supplierId?: SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    poNumber?: SortOrder
    supplierId?: SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    poNumber?: SortOrder
    supplierId?: SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    totalCost?: SortOrder
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

  export type PurchaseRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type PurchaseItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
  }

  export type PurchaseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    purchaseCost?: SortOrder
    total?: SortOrder
  }

  export type PurchasePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasePaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PurchasePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasePaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type PurchaseReturnItemListRelationFilter = {
    every?: PurchaseReturnItemWhereInput
    some?: PurchaseReturnItemWhereInput
    none?: PurchaseReturnItemWhereInput
  }

  export type PurchaseNullableRelationFilter = {
    is?: PurchaseWhereInput | null
    isNot?: PurchaseWhereInput | null
  }

  export type PurchaseReturnItemOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type PurchaseReturnItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReturnItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    refundAmount?: SortOrder
  }

  export type PurchaseReturnItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReturnItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseReturnItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    refundAmount?: SortOrder
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

  export type PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type PurchaseCreateNestedOneWithoutItemsInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    upsert?: PurchaseUpsertWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutItemsInput, PurchaseUpdateWithoutItemsInput>, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentsInput
    upsert?: PurchaseUpsertWithoutPaymentsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutPaymentsInput, PurchaseUpdateWithoutPaymentsInput>, PurchaseUncheckedUpdateWithoutPaymentsInput>
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

  export type PurchaseReturnUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PurchaseReturnCreateWithoutItemsInput, PurchaseReturnUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseReturnCreateOrConnectWithoutItemsInput
    upsert?: PurchaseReturnUpsertWithoutItemsInput
    connect?: PurchaseReturnWhereUniqueInput
    update?: XOR<XOR<PurchaseReturnUpdateToOneWithWhereWithoutItemsInput, PurchaseReturnUpdateWithoutItemsInput>, PurchaseReturnUncheckedUpdateWithoutItemsInput>
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

  export type PurchaseItemCreateWithoutPurchaseInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt?: Date | string
  }

  export type PurchaseItemUncheckedCreateWithoutPurchaseInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt?: Date | string
  }

  export type PurchaseItemCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemCreateManyPurchaseInputEnvelope = {
    data: PurchaseItemCreateManyPurchaseInput | PurchaseItemCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type PurchasePaymentCreateWithoutPurchaseInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type PurchasePaymentUncheckedCreateWithoutPurchaseInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
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
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseReturnItemCreateNestedManyWithoutPurchaseReturnInput
  }

  export type PurchaseReturnUncheckedCreateWithoutPurchaseInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
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
    serialNumber?: StringNullableFilter<"PurchaseItem"> | string | null
    quantity?: FloatFilter<"PurchaseItem"> | number
    purchaseCost?: FloatFilter<"PurchaseItem"> | number
    total?: FloatFilter<"PurchaseItem"> | number
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
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
    amount?: FloatFilter<"PurchasePayment"> | number
    method?: StringFilter<"PurchasePayment"> | string
    reference?: StringNullableFilter<"PurchasePayment"> | string | null
    createdAt?: DateTimeFilter<"PurchasePayment"> | Date | string
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
    supplierId?: StringNullableFilter<"PurchaseReturn"> | string | null
    returnNumber?: StringFilter<"PurchaseReturn"> | string
    totalAmount?: FloatFilter<"PurchaseReturn"> | number
    refundAmount?: FloatFilter<"PurchaseReturn"> | number
    reason?: StringNullableFilter<"PurchaseReturn"> | string | null
    status?: StringFilter<"PurchaseReturn"> | string
    createdById?: StringNullableFilter<"PurchaseReturn"> | string | null
    createdAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseReturn"> | Date | string
  }

  export type PurchaseCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutItemsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
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
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    returns?: PurchaseReturnUncheckedCreateNestedManyWithoutPurchaseInput
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
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    returns?: PurchaseReturnUncheckedUpdateManyWithoutPurchaseNestedInput
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
    createdById?: string | null
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
    createdById?: string | null
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
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemCreateWithoutPurchaseReturnInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUncheckedCreateWithoutPurchaseReturnInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    refundAmount: number
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
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutReturnsInput = {
    id?: string
    tenantId: string
    shopId: string
    poNumber: string
    supplierId?: string | null
    totalAmount: number
    totalCost: number
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: PurchasePaymentUncheckedCreateNestedManyWithoutPurchaseInput
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

  export type PurchaseReturnItemScalarWhereInput = {
    AND?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
    OR?: PurchaseReturnItemScalarWhereInput[]
    NOT?: PurchaseReturnItemScalarWhereInput | PurchaseReturnItemScalarWhereInput[]
    id?: StringFilter<"PurchaseReturnItem"> | string
    purchaseReturnId?: StringFilter<"PurchaseReturnItem"> | string
    productId?: StringFilter<"PurchaseReturnItem"> | string
    serialNumber?: StringNullableFilter<"PurchaseReturnItem"> | string | null
    quantity?: FloatFilter<"PurchaseReturnItem"> | number
    refundAmount?: FloatFilter<"PurchaseReturnItem"> | number
    createdAt?: DateTimeFilter<"PurchaseReturnItem"> | Date | string
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
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutReturnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: PurchasePaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseReturnCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Purchase?: PurchaseCreateNestedOneWithoutReturnsInput
  }

  export type PurchaseReturnUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    purchaseId?: string | null
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseReturnCreateOrConnectWithoutItemsInput = {
    where: PurchaseReturnWhereUniqueInput
    create: XOR<PurchaseReturnCreateWithoutItemsInput, PurchaseReturnUncheckedCreateWithoutItemsInput>
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
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Purchase?: PurchaseUpdateOneWithoutReturnsNestedInput
  }

  export type PurchaseReturnUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyPurchaseInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    purchaseCost: number
    total: number
    createdAt?: Date | string
  }

  export type PurchasePaymentCreateManyPurchaseInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type PurchaseReturnCreateManyPurchaseInput = {
    id?: string
    tenantId: string
    shopId: string
    supplierId?: string | null
    returnNumber: string
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasePaymentUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUpdateManyWithoutPurchaseReturnNestedInput
  }

  export type PurchaseReturnUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnNestedInput
  }

  export type PurchaseReturnUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PurchaseReturnItemCreateManyPurchaseReturnInput = {
    id?: string
    productId: string
    serialNumber?: string | null
    quantity: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type PurchaseReturnItemUpdateWithoutPurchaseReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUncheckedUpdateWithoutPurchaseReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseReturnItemUncheckedUpdateManyWithoutPurchaseReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
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
     * @deprecated Use SupplierOrderCountOutputTypeDefaultArgs instead
     */
    export type SupplierOrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierOrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReturnCountOutputTypeDefaultArgs instead
     */
    export type PurchaseReturnCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReturnCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDefaultArgs instead
     */
    export type PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseItemDefaultArgs instead
     */
    export type PurchaseItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchasePaymentDefaultArgs instead
     */
    export type PurchasePaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchasePaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierOrderDefaultArgs instead
     */
    export type SupplierOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierOrderItemDefaultArgs instead
     */
    export type SupplierOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierOrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReturnDefaultArgs instead
     */
    export type PurchaseReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReturnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseReturnItemDefaultArgs instead
     */
    export type PurchaseReturnItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseReturnItemDefaultArgs<ExtArgs>
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