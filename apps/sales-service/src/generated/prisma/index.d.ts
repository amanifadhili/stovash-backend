
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
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model SalePayment
 * 
 */
export type SalePayment = $Result.DefaultSelection<Prisma.$SalePaymentPayload>
/**
 * Model Quotation
 * 
 */
export type Quotation = $Result.DefaultSelection<Prisma.$QuotationPayload>
/**
 * Model QuotationItem
 * 
 */
export type QuotationItem = $Result.DefaultSelection<Prisma.$QuotationItemPayload>
/**
 * Model SaleReturn
 * 
 */
export type SaleReturn = $Result.DefaultSelection<Prisma.$SaleReturnPayload>
/**
 * Model SaleReturnItem
 * 
 */
export type SaleReturnItem = $Result.DefaultSelection<Prisma.$SaleReturnItemPayload>
/**
 * Model Bonus
 * 
 */
export type Bonus = $Result.DefaultSelection<Prisma.$BonusPayload>
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
 * // Fetch zero or more Sales
 * const sales = await prisma.sale.findMany()
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
   * // Fetch zero or more Sales
   * const sales = await prisma.sale.findMany()
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
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs>;

  /**
   * `prisma.salePayment`: Exposes CRUD operations for the **SalePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalePayments
    * const salePayments = await prisma.salePayment.findMany()
    * ```
    */
  get salePayment(): Prisma.SalePaymentDelegate<ExtArgs>;

  /**
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<ExtArgs>;

  /**
   * `prisma.quotationItem`: Exposes CRUD operations for the **QuotationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotationItems
    * const quotationItems = await prisma.quotationItem.findMany()
    * ```
    */
  get quotationItem(): Prisma.QuotationItemDelegate<ExtArgs>;

  /**
   * `prisma.saleReturn`: Exposes CRUD operations for the **SaleReturn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleReturns
    * const saleReturns = await prisma.saleReturn.findMany()
    * ```
    */
  get saleReturn(): Prisma.SaleReturnDelegate<ExtArgs>;

  /**
   * `prisma.saleReturnItem`: Exposes CRUD operations for the **SaleReturnItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleReturnItems
    * const saleReturnItems = await prisma.saleReturnItem.findMany()
    * ```
    */
  get saleReturnItem(): Prisma.SaleReturnItemDelegate<ExtArgs>;

  /**
   * `prisma.bonus`: Exposes CRUD operations for the **Bonus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bonuses
    * const bonuses = await prisma.bonus.findMany()
    * ```
    */
  get bonus(): Prisma.BonusDelegate<ExtArgs>;

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
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    SalePayment: 'SalePayment',
    Quotation: 'Quotation',
    QuotationItem: 'QuotationItem',
    SaleReturn: 'SaleReturn',
    SaleReturnItem: 'SaleReturnItem',
    Bonus: 'Bonus',
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
      modelProps: "sale" | "saleItem" | "salePayment" | "quotation" | "quotationItem" | "saleReturn" | "saleReturnItem" | "bonus" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      SalePayment: {
        payload: Prisma.$SalePaymentPayload<ExtArgs>
        fields: Prisma.SalePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>
          }
          findFirst: {
            args: Prisma.SalePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>
          }
          findMany: {
            args: Prisma.SalePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>[]
          }
          create: {
            args: Prisma.SalePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>
          }
          createMany: {
            args: Prisma.SalePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalePaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>[]
          }
          delete: {
            args: Prisma.SalePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>
          }
          update: {
            args: Prisma.SalePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>
          }
          deleteMany: {
            args: Prisma.SalePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePaymentPayload>
          }
          aggregate: {
            args: Prisma.SalePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalePayment>
          }
          groupBy: {
            args: Prisma.SalePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalePaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<SalePaymentCountAggregateOutputType> | number
          }
        }
      }
      Quotation: {
        payload: Prisma.$QuotationPayload<ExtArgs>
        fields: Prisma.QuotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findFirst: {
            args: Prisma.QuotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findMany: {
            args: Prisma.QuotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          create: {
            args: Prisma.QuotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          createMany: {
            args: Prisma.QuotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          delete: {
            args: Prisma.QuotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          update: {
            args: Prisma.QuotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          deleteMany: {
            args: Prisma.QuotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          aggregate: {
            args: Prisma.QuotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotation>
          }
          groupBy: {
            args: Prisma.QuotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationCountAggregateOutputType> | number
          }
        }
      }
      QuotationItem: {
        payload: Prisma.$QuotationItemPayload<ExtArgs>
        fields: Prisma.QuotationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          findFirst: {
            args: Prisma.QuotationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          findMany: {
            args: Prisma.QuotationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          create: {
            args: Prisma.QuotationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          createMany: {
            args: Prisma.QuotationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          delete: {
            args: Prisma.QuotationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          update: {
            args: Prisma.QuotationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          deleteMany: {
            args: Prisma.QuotationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuotationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          aggregate: {
            args: Prisma.QuotationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotationItem>
          }
          groupBy: {
            args: Prisma.QuotationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationItemCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationItemCountAggregateOutputType> | number
          }
        }
      }
      SaleReturn: {
        payload: Prisma.$SaleReturnPayload<ExtArgs>
        fields: Prisma.SaleReturnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleReturnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleReturnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>
          }
          findFirst: {
            args: Prisma.SaleReturnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleReturnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>
          }
          findMany: {
            args: Prisma.SaleReturnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>[]
          }
          create: {
            args: Prisma.SaleReturnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>
          }
          createMany: {
            args: Prisma.SaleReturnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleReturnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>[]
          }
          delete: {
            args: Prisma.SaleReturnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>
          }
          update: {
            args: Prisma.SaleReturnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>
          }
          deleteMany: {
            args: Prisma.SaleReturnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleReturnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleReturnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnPayload>
          }
          aggregate: {
            args: Prisma.SaleReturnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleReturn>
          }
          groupBy: {
            args: Prisma.SaleReturnGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleReturnGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleReturnCountArgs<ExtArgs>
            result: $Utils.Optional<SaleReturnCountAggregateOutputType> | number
          }
        }
      }
      SaleReturnItem: {
        payload: Prisma.$SaleReturnItemPayload<ExtArgs>
        fields: Prisma.SaleReturnItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleReturnItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleReturnItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>
          }
          findFirst: {
            args: Prisma.SaleReturnItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleReturnItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>
          }
          findMany: {
            args: Prisma.SaleReturnItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>[]
          }
          create: {
            args: Prisma.SaleReturnItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>
          }
          createMany: {
            args: Prisma.SaleReturnItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleReturnItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>[]
          }
          delete: {
            args: Prisma.SaleReturnItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>
          }
          update: {
            args: Prisma.SaleReturnItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleReturnItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleReturnItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleReturnItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleReturnItemPayload>
          }
          aggregate: {
            args: Prisma.SaleReturnItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleReturnItem>
          }
          groupBy: {
            args: Prisma.SaleReturnItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleReturnItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleReturnItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleReturnItemCountAggregateOutputType> | number
          }
        }
      }
      Bonus: {
        payload: Prisma.$BonusPayload<ExtArgs>
        fields: Prisma.BonusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BonusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BonusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          findFirst: {
            args: Prisma.BonusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BonusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          findMany: {
            args: Prisma.BonusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>[]
          }
          create: {
            args: Prisma.BonusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          createMany: {
            args: Prisma.BonusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BonusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>[]
          }
          delete: {
            args: Prisma.BonusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          update: {
            args: Prisma.BonusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          deleteMany: {
            args: Prisma.BonusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BonusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BonusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          aggregate: {
            args: Prisma.BonusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBonus>
          }
          groupBy: {
            args: Prisma.BonusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BonusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BonusCountArgs<ExtArgs>
            result: $Utils.Optional<BonusCountAggregateOutputType> | number
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
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
    payments: number
    returns: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
    payments?: boolean | SaleCountOutputTypeCountPaymentsArgs
    returns?: boolean | SaleCountOutputTypeCountReturnsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePaymentWhereInput
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountReturnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleReturnWhereInput
  }


  /**
   * Count Type QuotationCountOutputType
   */

  export type QuotationCountOutputType = {
    items: number
  }

  export type QuotationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuotationCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCountOutputType
     */
    select?: QuotationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationItemWhereInput
  }


  /**
   * Count Type SaleReturnCountOutputType
   */

  export type SaleReturnCountOutputType = {
    items: number
  }

  export type SaleReturnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleReturnCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleReturnCountOutputType without action
   */
  export type SaleReturnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnCountOutputType
     */
    select?: SaleReturnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleReturnCountOutputType without action
   */
  export type SaleReturnCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleReturnItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    totalAmount: number | null
    totalCost: number | null
    profit: number | null
  }

  export type SaleSumAggregateOutputType = {
    totalAmount: number | null
    totalCost: number | null
    profit: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    orderNumber: string | null
    customerId: string | null
    totalAmount: number | null
    totalCost: number | null
    profit: number | null
    paymentMethod: string | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    orderNumber: string | null
    customerId: string | null
    totalAmount: number | null
    totalCost: number | null
    profit: number | null
    paymentMethod: string | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    workPeriodId: number
    orderNumber: number
    customerId: number
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    totalAmount?: true
    totalCost?: true
    profit?: true
  }

  export type SaleSumAggregateInputType = {
    totalAmount?: true
    totalCost?: true
    profit?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    orderNumber?: true
    customerId?: true
    totalAmount?: true
    totalCost?: true
    profit?: true
    paymentMethod?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    orderNumber?: true
    customerId?: true
    totalAmount?: true
    totalCost?: true
    profit?: true
    paymentMethod?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    orderNumber?: true
    customerId?: true
    totalAmount?: true
    totalCost?: true
    profit?: true
    paymentMethod?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    workPeriodId: string | null
    orderNumber: string
    customerId: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod: string
    status: string
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    orderNumber?: boolean
    customerId?: boolean
    totalAmount?: boolean
    totalCost?: boolean
    profit?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Sale$itemsArgs<ExtArgs>
    payments?: boolean | Sale$paymentsArgs<ExtArgs>
    returns?: boolean | Sale$returnsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    orderNumber?: boolean
    customerId?: boolean
    totalAmount?: boolean
    totalCost?: boolean
    profit?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    orderNumber?: boolean
    customerId?: boolean
    totalAmount?: boolean
    totalCost?: boolean
    profit?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Sale$itemsArgs<ExtArgs>
    payments?: boolean | Sale$paymentsArgs<ExtArgs>
    returns?: boolean | Sale$returnsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      items: Prisma.$SaleItemPayload<ExtArgs>[]
      payments: Prisma.$SalePaymentPayload<ExtArgs>[]
      returns: Prisma.$SaleReturnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      workPeriodId: string | null
      orderNumber: string
      customerId: string | null
      totalAmount: number
      totalCost: number
      profit: number
      paymentMethod: string
      status: string
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Sale$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findMany"> | Null>
    returns<T extends Sale$returnsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$returnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Sale model
   */ 
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly tenantId: FieldRef<"Sale", 'String'>
    readonly shopId: FieldRef<"Sale", 'String'>
    readonly workPeriodId: FieldRef<"Sale", 'String'>
    readonly orderNumber: FieldRef<"Sale", 'String'>
    readonly customerId: FieldRef<"Sale", 'String'>
    readonly totalAmount: FieldRef<"Sale", 'Float'>
    readonly totalCost: FieldRef<"Sale", 'Float'>
    readonly profit: FieldRef<"Sale", 'Float'>
    readonly paymentMethod: FieldRef<"Sale", 'String'>
    readonly status: FieldRef<"Sale", 'String'>
    readonly createdById: FieldRef<"Sale", 'String'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly updatedAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale.payments
   */
  export type Sale$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    where?: SalePaymentWhereInput
    orderBy?: SalePaymentOrderByWithRelationInput | SalePaymentOrderByWithRelationInput[]
    cursor?: SalePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalePaymentScalarFieldEnum | SalePaymentScalarFieldEnum[]
  }

  /**
   * Sale.returns
   */
  export type Sale$returnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    where?: SaleReturnWhereInput
    orderBy?: SaleReturnOrderByWithRelationInput | SaleReturnOrderByWithRelationInput[]
    cursor?: SaleReturnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleReturnScalarFieldEnum | SaleReturnScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
    unitPrice: number | null
    discount: number | null
    tax: number | null
    total: number | null
  }

  export type SaleItemSumAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
    unitPrice: number | null
    discount: number | null
    tax: number | null
    total: number | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    unitCost: number | null
    unitPrice: number | null
    discount: number | null
    tax: number | null
    total: number | null
    createdAt: Date | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    unitCost: number | null
    unitPrice: number | null
    discount: number | null
    tax: number | null
    total: number | null
    createdAt: Date | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    serialNumber: number
    quantity: number
    unitCost: number
    unitPrice: number
    discount: number
    tax: number
    total: number
    createdAt: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    quantity?: true
    unitCost?: true
    unitPrice?: true
    discount?: true
    tax?: true
    total?: true
  }

  export type SaleItemSumAggregateInputType = {
    quantity?: true
    unitCost?: true
    unitPrice?: true
    discount?: true
    tax?: true
    total?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    unitCost?: true
    unitPrice?: true
    discount?: true
    tax?: true
    total?: true
    createdAt?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    unitCost?: true
    unitPrice?: true
    discount?: true
    tax?: true
    total?: true
    createdAt?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    unitCost?: true
    unitPrice?: true
    discount?: true
    tax?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: string
    saleId: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount: number
    tax: number
    total: number
    createdAt: Date
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    unitCost?: boolean
    unitPrice?: boolean
    discount?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    unitCost?: boolean
    unitPrice?: boolean
    discount?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    unitCost?: boolean
    unitPrice?: boolean
    discount?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: string
      productId: string
      serialNumber: string
      quantity: number
      unitCost: number
      unitPrice: number
      discount: number
      tax: number
      total: number
      createdAt: Date
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
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
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SaleItem model
   */ 
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'String'>
    readonly saleId: FieldRef<"SaleItem", 'String'>
    readonly productId: FieldRef<"SaleItem", 'String'>
    readonly serialNumber: FieldRef<"SaleItem", 'String'>
    readonly quantity: FieldRef<"SaleItem", 'Float'>
    readonly unitCost: FieldRef<"SaleItem", 'Float'>
    readonly unitPrice: FieldRef<"SaleItem", 'Float'>
    readonly discount: FieldRef<"SaleItem", 'Float'>
    readonly tax: FieldRef<"SaleItem", 'Float'>
    readonly total: FieldRef<"SaleItem", 'Float'>
    readonly createdAt: FieldRef<"SaleItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model SalePayment
   */

  export type AggregateSalePayment = {
    _count: SalePaymentCountAggregateOutputType | null
    _avg: SalePaymentAvgAggregateOutputType | null
    _sum: SalePaymentSumAggregateOutputType | null
    _min: SalePaymentMinAggregateOutputType | null
    _max: SalePaymentMaxAggregateOutputType | null
  }

  export type SalePaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type SalePaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type SalePaymentMinAggregateOutputType = {
    id: string | null
    saleId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type SalePaymentMaxAggregateOutputType = {
    id: string | null
    saleId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type SalePaymentCountAggregateOutputType = {
    id: number
    saleId: number
    amount: number
    method: number
    reference: number
    createdAt: number
    _all: number
  }


  export type SalePaymentAvgAggregateInputType = {
    amount?: true
  }

  export type SalePaymentSumAggregateInputType = {
    amount?: true
  }

  export type SalePaymentMinAggregateInputType = {
    id?: true
    saleId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type SalePaymentMaxAggregateInputType = {
    id?: true
    saleId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type SalePaymentCountAggregateInputType = {
    id?: true
    saleId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type SalePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePayment to aggregate.
     */
    where?: SalePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePayments to fetch.
     */
    orderBy?: SalePaymentOrderByWithRelationInput | SalePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalePayments
    **/
    _count?: true | SalePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalePaymentMaxAggregateInputType
  }

  export type GetSalePaymentAggregateType<T extends SalePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateSalePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalePayment[P]>
      : GetScalarType<T[P], AggregateSalePayment[P]>
  }




  export type SalePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePaymentWhereInput
    orderBy?: SalePaymentOrderByWithAggregationInput | SalePaymentOrderByWithAggregationInput[]
    by: SalePaymentScalarFieldEnum[] | SalePaymentScalarFieldEnum
    having?: SalePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalePaymentCountAggregateInputType | true
    _avg?: SalePaymentAvgAggregateInputType
    _sum?: SalePaymentSumAggregateInputType
    _min?: SalePaymentMinAggregateInputType
    _max?: SalePaymentMaxAggregateInputType
  }

  export type SalePaymentGroupByOutputType = {
    id: string
    saleId: string
    amount: number
    method: string
    reference: string | null
    createdAt: Date
    _count: SalePaymentCountAggregateOutputType | null
    _avg: SalePaymentAvgAggregateOutputType | null
    _sum: SalePaymentSumAggregateOutputType | null
    _min: SalePaymentMinAggregateOutputType | null
    _max: SalePaymentMaxAggregateOutputType | null
  }

  type GetSalePaymentGroupByPayload<T extends SalePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SalePaymentGroupByOutputType[P]>
        }
      >
    >


  export type SalePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePayment"]>

  export type SalePaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePayment"]>

  export type SalePaymentSelectScalar = {
    id?: boolean
    saleId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type SalePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SalePaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $SalePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalePayment"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: string
      amount: number
      method: string
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["salePayment"]>
    composites: {}
  }

  type SalePaymentGetPayload<S extends boolean | null | undefined | SalePaymentDefaultArgs> = $Result.GetResult<Prisma.$SalePaymentPayload, S>

  type SalePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalePaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalePaymentCountAggregateInputType | true
    }

  export interface SalePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalePayment'], meta: { name: 'SalePayment' } }
    /**
     * Find zero or one SalePayment that matches the filter.
     * @param {SalePaymentFindUniqueArgs} args - Arguments to find a SalePayment
     * @example
     * // Get one SalePayment
     * const salePayment = await prisma.salePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalePaymentFindUniqueArgs>(args: SelectSubset<T, SalePaymentFindUniqueArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalePayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalePaymentFindUniqueOrThrowArgs} args - Arguments to find a SalePayment
     * @example
     * // Get one SalePayment
     * const salePayment = await prisma.salePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, SalePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentFindFirstArgs} args - Arguments to find a SalePayment
     * @example
     * // Get one SalePayment
     * const salePayment = await prisma.salePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalePaymentFindFirstArgs>(args?: SelectSubset<T, SalePaymentFindFirstArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentFindFirstOrThrowArgs} args - Arguments to find a SalePayment
     * @example
     * // Get one SalePayment
     * const salePayment = await prisma.salePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, SalePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalePayments
     * const salePayments = await prisma.salePayment.findMany()
     * 
     * // Get first 10 SalePayments
     * const salePayments = await prisma.salePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salePaymentWithIdOnly = await prisma.salePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalePaymentFindManyArgs>(args?: SelectSubset<T, SalePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalePayment.
     * @param {SalePaymentCreateArgs} args - Arguments to create a SalePayment.
     * @example
     * // Create one SalePayment
     * const SalePayment = await prisma.salePayment.create({
     *   data: {
     *     // ... data to create a SalePayment
     *   }
     * })
     * 
     */
    create<T extends SalePaymentCreateArgs>(args: SelectSubset<T, SalePaymentCreateArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalePayments.
     * @param {SalePaymentCreateManyArgs} args - Arguments to create many SalePayments.
     * @example
     * // Create many SalePayments
     * const salePayment = await prisma.salePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalePaymentCreateManyArgs>(args?: SelectSubset<T, SalePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalePayments and returns the data saved in the database.
     * @param {SalePaymentCreateManyAndReturnArgs} args - Arguments to create many SalePayments.
     * @example
     * // Create many SalePayments
     * const salePayment = await prisma.salePayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalePayments and only return the `id`
     * const salePaymentWithIdOnly = await prisma.salePayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalePaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, SalePaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalePayment.
     * @param {SalePaymentDeleteArgs} args - Arguments to delete one SalePayment.
     * @example
     * // Delete one SalePayment
     * const SalePayment = await prisma.salePayment.delete({
     *   where: {
     *     // ... filter to delete one SalePayment
     *   }
     * })
     * 
     */
    delete<T extends SalePaymentDeleteArgs>(args: SelectSubset<T, SalePaymentDeleteArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalePayment.
     * @param {SalePaymentUpdateArgs} args - Arguments to update one SalePayment.
     * @example
     * // Update one SalePayment
     * const salePayment = await prisma.salePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalePaymentUpdateArgs>(args: SelectSubset<T, SalePaymentUpdateArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalePayments.
     * @param {SalePaymentDeleteManyArgs} args - Arguments to filter SalePayments to delete.
     * @example
     * // Delete a few SalePayments
     * const { count } = await prisma.salePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalePaymentDeleteManyArgs>(args?: SelectSubset<T, SalePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalePayments
     * const salePayment = await prisma.salePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalePaymentUpdateManyArgs>(args: SelectSubset<T, SalePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalePayment.
     * @param {SalePaymentUpsertArgs} args - Arguments to update or create a SalePayment.
     * @example
     * // Update or create a SalePayment
     * const salePayment = await prisma.salePayment.upsert({
     *   create: {
     *     // ... data to create a SalePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalePayment we want to update
     *   }
     * })
     */
    upsert<T extends SalePaymentUpsertArgs>(args: SelectSubset<T, SalePaymentUpsertArgs<ExtArgs>>): Prisma__SalePaymentClient<$Result.GetResult<Prisma.$SalePaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentCountArgs} args - Arguments to filter SalePayments to count.
     * @example
     * // Count the number of SalePayments
     * const count = await prisma.salePayment.count({
     *   where: {
     *     // ... the filter for the SalePayments we want to count
     *   }
     * })
    **/
    count<T extends SalePaymentCountArgs>(
      args?: Subset<T, SalePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalePaymentAggregateArgs>(args: Subset<T, SalePaymentAggregateArgs>): Prisma.PrismaPromise<GetSalePaymentAggregateType<T>>

    /**
     * Group by SalePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePaymentGroupByArgs} args - Group by arguments.
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
      T extends SalePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalePaymentGroupByArgs['orderBy'] }
        : { orderBy?: SalePaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalePayment model
   */
  readonly fields: SalePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SalePayment model
   */ 
  interface SalePaymentFieldRefs {
    readonly id: FieldRef<"SalePayment", 'String'>
    readonly saleId: FieldRef<"SalePayment", 'String'>
    readonly amount: FieldRef<"SalePayment", 'Float'>
    readonly method: FieldRef<"SalePayment", 'String'>
    readonly reference: FieldRef<"SalePayment", 'String'>
    readonly createdAt: FieldRef<"SalePayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalePayment findUnique
   */
  export type SalePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalePayment to fetch.
     */
    where: SalePaymentWhereUniqueInput
  }

  /**
   * SalePayment findUniqueOrThrow
   */
  export type SalePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalePayment to fetch.
     */
    where: SalePaymentWhereUniqueInput
  }

  /**
   * SalePayment findFirst
   */
  export type SalePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalePayment to fetch.
     */
    where?: SalePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePayments to fetch.
     */
    orderBy?: SalePaymentOrderByWithRelationInput | SalePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePayments.
     */
    cursor?: SalePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePayments.
     */
    distinct?: SalePaymentScalarFieldEnum | SalePaymentScalarFieldEnum[]
  }

  /**
   * SalePayment findFirstOrThrow
   */
  export type SalePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalePayment to fetch.
     */
    where?: SalePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePayments to fetch.
     */
    orderBy?: SalePaymentOrderByWithRelationInput | SalePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePayments.
     */
    cursor?: SalePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePayments.
     */
    distinct?: SalePaymentScalarFieldEnum | SalePaymentScalarFieldEnum[]
  }

  /**
   * SalePayment findMany
   */
  export type SalePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * Filter, which SalePayments to fetch.
     */
    where?: SalePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePayments to fetch.
     */
    orderBy?: SalePaymentOrderByWithRelationInput | SalePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalePayments.
     */
    cursor?: SalePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePayments.
     */
    skip?: number
    distinct?: SalePaymentScalarFieldEnum | SalePaymentScalarFieldEnum[]
  }

  /**
   * SalePayment create
   */
  export type SalePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SalePayment.
     */
    data: XOR<SalePaymentCreateInput, SalePaymentUncheckedCreateInput>
  }

  /**
   * SalePayment createMany
   */
  export type SalePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalePayments.
     */
    data: SalePaymentCreateManyInput | SalePaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalePayment createManyAndReturn
   */
  export type SalePaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalePayments.
     */
    data: SalePaymentCreateManyInput | SalePaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalePayment update
   */
  export type SalePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SalePayment.
     */
    data: XOR<SalePaymentUpdateInput, SalePaymentUncheckedUpdateInput>
    /**
     * Choose, which SalePayment to update.
     */
    where: SalePaymentWhereUniqueInput
  }

  /**
   * SalePayment updateMany
   */
  export type SalePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalePayments.
     */
    data: XOR<SalePaymentUpdateManyMutationInput, SalePaymentUncheckedUpdateManyInput>
    /**
     * Filter which SalePayments to update
     */
    where?: SalePaymentWhereInput
  }

  /**
   * SalePayment upsert
   */
  export type SalePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SalePayment to update in case it exists.
     */
    where: SalePaymentWhereUniqueInput
    /**
     * In case the SalePayment found by the `where` argument doesn't exist, create a new SalePayment with this data.
     */
    create: XOR<SalePaymentCreateInput, SalePaymentUncheckedCreateInput>
    /**
     * In case the SalePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalePaymentUpdateInput, SalePaymentUncheckedUpdateInput>
  }

  /**
   * SalePayment delete
   */
  export type SalePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
    /**
     * Filter which SalePayment to delete.
     */
    where: SalePaymentWhereUniqueInput
  }

  /**
   * SalePayment deleteMany
   */
  export type SalePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePayments to delete
     */
    where?: SalePaymentWhereInput
  }

  /**
   * SalePayment without action
   */
  export type SalePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePayment
     */
    select?: SalePaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePaymentInclude<ExtArgs> | null
  }


  /**
   * Model Quotation
   */

  export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  export type QuotationAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type QuotationSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type QuotationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    quoteNumber: string | null
    customerId: string | null
    totalAmount: number | null
    validUntil: Date | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuotationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    quoteNumber: string | null
    customerId: string | null
    totalAmount: number | null
    validUntil: Date | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    quoteNumber: number
    customerId: number
    totalAmount: number
    validUntil: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuotationAvgAggregateInputType = {
    totalAmount?: true
  }

  export type QuotationSumAggregateInputType = {
    totalAmount?: true
  }

  export type QuotationMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    quoteNumber?: true
    customerId?: true
    totalAmount?: true
    validUntil?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    quoteNumber?: true
    customerId?: true
    totalAmount?: true
    validUntil?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    quoteNumber?: true
    customerId?: true
    totalAmount?: true
    validUntil?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType
  }

  export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotation[P]>
      : GetScalarType<T[P], AggregateQuotation[P]>
  }




  export type QuotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithAggregationInput | QuotationOrderByWithAggregationInput[]
    by: QuotationScalarFieldEnum[] | QuotationScalarFieldEnum
    having?: QuotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCountAggregateInputType | true
    _avg?: QuotationAvgAggregateInputType
    _sum?: QuotationSumAggregateInputType
    _min?: QuotationMinAggregateInputType
    _max?: QuotationMaxAggregateInputType
  }

  export type QuotationGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    quoteNumber: string
    customerId: string | null
    totalAmount: number
    validUntil: Date
    status: string
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationGroupByOutputType[P]>
        }
      >
    >


  export type QuotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    quoteNumber?: boolean
    customerId?: boolean
    totalAmount?: boolean
    validUntil?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Quotation$itemsArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    quoteNumber?: boolean
    customerId?: boolean
    totalAmount?: boolean
    validUntil?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    quoteNumber?: boolean
    customerId?: boolean
    totalAmount?: boolean
    validUntil?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Quotation$itemsArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quotation"
    objects: {
      items: Prisma.$QuotationItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      quoteNumber: string
      customerId: string | null
      totalAmount: number
      validUntil: Date
      status: string
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quotation"]>
    composites: {}
  }

  type QuotationGetPayload<S extends boolean | null | undefined | QuotationDefaultArgs> = $Result.GetResult<Prisma.$QuotationPayload, S>

  type QuotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuotationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuotationCountAggregateInputType | true
    }

  export interface QuotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quotation'], meta: { name: 'Quotation' } }
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationFindUniqueArgs>(args: SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quotation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationFindFirstArgs>(args?: SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     * 
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationFindManyArgs>(args?: SelectSubset<T, QuotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     * 
     */
    create<T extends QuotationCreateArgs>(args: SelectSubset<T, QuotationCreateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quotations.
     * @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationCreateManyArgs>(args?: SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotations and returns the data saved in the database.
     * @param {QuotationCreateManyAndReturnArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     * 
     */
    delete<T extends QuotationDeleteArgs>(args: SelectSubset<T, QuotationDeleteArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationUpdateArgs>(args: SelectSubset<T, QuotationUpdateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationDeleteManyArgs>(args?: SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationUpdateManyArgs>(args: SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
     */
    upsert<T extends QuotationUpsertArgs>(args: SelectSubset<T, QuotationUpsertArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(
      args?: Subset<T, QuotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationAggregateArgs>(args: Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>

    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
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
      T extends QuotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationGroupByArgs['orderBy'] }
        : { orderBy?: QuotationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quotation model
   */
  readonly fields: QuotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Quotation$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Quotation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Quotation model
   */ 
  interface QuotationFieldRefs {
    readonly id: FieldRef<"Quotation", 'String'>
    readonly tenantId: FieldRef<"Quotation", 'String'>
    readonly shopId: FieldRef<"Quotation", 'String'>
    readonly quoteNumber: FieldRef<"Quotation", 'String'>
    readonly customerId: FieldRef<"Quotation", 'String'>
    readonly totalAmount: FieldRef<"Quotation", 'Float'>
    readonly validUntil: FieldRef<"Quotation", 'DateTime'>
    readonly status: FieldRef<"Quotation", 'String'>
    readonly createdById: FieldRef<"Quotation", 'String'>
    readonly createdAt: FieldRef<"Quotation", 'DateTime'>
    readonly updatedAt: FieldRef<"Quotation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quotation findUnique
   */
  export type QuotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findUniqueOrThrow
   */
  export type QuotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findFirst
   */
  export type QuotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findFirstOrThrow
   */
  export type QuotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findMany
   */
  export type QuotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotations to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation create
   */
  export type QuotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Quotation.
     */
    data: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
  }

  /**
   * Quotation createMany
   */
  export type QuotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation createManyAndReturn
   */
  export type QuotationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation update
   */
  export type QuotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Quotation.
     */
    data: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
    /**
     * Choose, which Quotation to update.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation updateMany
   */
  export type QuotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
  }

  /**
   * Quotation upsert
   */
  export type QuotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: QuotationWhereUniqueInput
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
  }

  /**
   * Quotation delete
   */
  export type QuotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter which Quotation to delete.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation deleteMany
   */
  export type QuotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: QuotationWhereInput
  }

  /**
   * Quotation.items
   */
  export type Quotation$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    where?: QuotationItemWhereInput
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    cursor?: QuotationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * Quotation without action
   */
  export type QuotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
  }


  /**
   * Model QuotationItem
   */

  export type AggregateQuotationItem = {
    _count: QuotationItemCountAggregateOutputType | null
    _avg: QuotationItemAvgAggregateOutputType | null
    _sum: QuotationItemSumAggregateOutputType | null
    _min: QuotationItemMinAggregateOutputType | null
    _max: QuotationItemMaxAggregateOutputType | null
  }

  export type QuotationItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    discount: number | null
    total: number | null
  }

  export type QuotationItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    discount: number | null
    total: number | null
  }

  export type QuotationItemMinAggregateOutputType = {
    id: string | null
    quotationId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    discount: number | null
    total: number | null
    createdAt: Date | null
  }

  export type QuotationItemMaxAggregateOutputType = {
    id: string | null
    quotationId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    discount: number | null
    total: number | null
    createdAt: Date | null
  }

  export type QuotationItemCountAggregateOutputType = {
    id: number
    quotationId: number
    productId: number
    quantity: number
    unitPrice: number
    discount: number
    total: number
    createdAt: number
    _all: number
  }


  export type QuotationItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    discount?: true
    total?: true
  }

  export type QuotationItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    discount?: true
    total?: true
  }

  export type QuotationItemMinAggregateInputType = {
    id?: true
    quotationId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    total?: true
    createdAt?: true
  }

  export type QuotationItemMaxAggregateInputType = {
    id?: true
    quotationId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    total?: true
    createdAt?: true
  }

  export type QuotationItemCountAggregateInputType = {
    id?: true
    quotationId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type QuotationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationItem to aggregate.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotationItems
    **/
    _count?: true | QuotationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationItemMaxAggregateInputType
  }

  export type GetQuotationItemAggregateType<T extends QuotationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotationItem[P]>
      : GetScalarType<T[P], AggregateQuotationItem[P]>
  }




  export type QuotationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationItemWhereInput
    orderBy?: QuotationItemOrderByWithAggregationInput | QuotationItemOrderByWithAggregationInput[]
    by: QuotationItemScalarFieldEnum[] | QuotationItemScalarFieldEnum
    having?: QuotationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationItemCountAggregateInputType | true
    _avg?: QuotationItemAvgAggregateInputType
    _sum?: QuotationItemSumAggregateInputType
    _min?: QuotationItemMinAggregateInputType
    _max?: QuotationItemMaxAggregateInputType
  }

  export type QuotationItemGroupByOutputType = {
    id: string
    quotationId: string
    productId: string
    quantity: number
    unitPrice: number
    discount: number
    total: number
    createdAt: Date
    _count: QuotationItemCountAggregateOutputType | null
    _avg: QuotationItemAvgAggregateOutputType | null
    _sum: QuotationItemSumAggregateOutputType | null
    _min: QuotationItemMinAggregateOutputType | null
    _max: QuotationItemMaxAggregateOutputType | null
  }

  type GetQuotationItemGroupByPayload<T extends QuotationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationItemGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationItemGroupByOutputType[P]>
        }
      >
    >


  export type QuotationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    total?: boolean
    createdAt?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    total?: boolean
    createdAt?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectScalar = {
    id?: boolean
    quotationId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type QuotationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }
  export type QuotationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }

  export type $QuotationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotationItem"
    objects: {
      quotation: Prisma.$QuotationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quotationId: string
      productId: string
      quantity: number
      unitPrice: number
      discount: number
      total: number
      createdAt: Date
    }, ExtArgs["result"]["quotationItem"]>
    composites: {}
  }

  type QuotationItemGetPayload<S extends boolean | null | undefined | QuotationItemDefaultArgs> = $Result.GetResult<Prisma.$QuotationItemPayload, S>

  type QuotationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuotationItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuotationItemCountAggregateInputType | true
    }

  export interface QuotationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotationItem'], meta: { name: 'QuotationItem' } }
    /**
     * Find zero or one QuotationItem that matches the filter.
     * @param {QuotationItemFindUniqueArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationItemFindUniqueArgs>(args: SelectSubset<T, QuotationItemFindUniqueArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuotationItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuotationItemFindUniqueOrThrowArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuotationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindFirstArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationItemFindFirstArgs>(args?: SelectSubset<T, QuotationItemFindFirstArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuotationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindFirstOrThrowArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuotationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotationItems
     * const quotationItems = await prisma.quotationItem.findMany()
     * 
     * // Get first 10 QuotationItems
     * const quotationItems = await prisma.quotationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationItemFindManyArgs>(args?: SelectSubset<T, QuotationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuotationItem.
     * @param {QuotationItemCreateArgs} args - Arguments to create a QuotationItem.
     * @example
     * // Create one QuotationItem
     * const QuotationItem = await prisma.quotationItem.create({
     *   data: {
     *     // ... data to create a QuotationItem
     *   }
     * })
     * 
     */
    create<T extends QuotationItemCreateArgs>(args: SelectSubset<T, QuotationItemCreateArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuotationItems.
     * @param {QuotationItemCreateManyArgs} args - Arguments to create many QuotationItems.
     * @example
     * // Create many QuotationItems
     * const quotationItem = await prisma.quotationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationItemCreateManyArgs>(args?: SelectSubset<T, QuotationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotationItems and returns the data saved in the database.
     * @param {QuotationItemCreateManyAndReturnArgs} args - Arguments to create many QuotationItems.
     * @example
     * // Create many QuotationItems
     * const quotationItem = await prisma.quotationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotationItems and only return the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuotationItem.
     * @param {QuotationItemDeleteArgs} args - Arguments to delete one QuotationItem.
     * @example
     * // Delete one QuotationItem
     * const QuotationItem = await prisma.quotationItem.delete({
     *   where: {
     *     // ... filter to delete one QuotationItem
     *   }
     * })
     * 
     */
    delete<T extends QuotationItemDeleteArgs>(args: SelectSubset<T, QuotationItemDeleteArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuotationItem.
     * @param {QuotationItemUpdateArgs} args - Arguments to update one QuotationItem.
     * @example
     * // Update one QuotationItem
     * const quotationItem = await prisma.quotationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationItemUpdateArgs>(args: SelectSubset<T, QuotationItemUpdateArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuotationItems.
     * @param {QuotationItemDeleteManyArgs} args - Arguments to filter QuotationItems to delete.
     * @example
     * // Delete a few QuotationItems
     * const { count } = await prisma.quotationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationItemDeleteManyArgs>(args?: SelectSubset<T, QuotationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotationItems
     * const quotationItem = await prisma.quotationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationItemUpdateManyArgs>(args: SelectSubset<T, QuotationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuotationItem.
     * @param {QuotationItemUpsertArgs} args - Arguments to update or create a QuotationItem.
     * @example
     * // Update or create a QuotationItem
     * const quotationItem = await prisma.quotationItem.upsert({
     *   create: {
     *     // ... data to create a QuotationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotationItem we want to update
     *   }
     * })
     */
    upsert<T extends QuotationItemUpsertArgs>(args: SelectSubset<T, QuotationItemUpsertArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuotationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemCountArgs} args - Arguments to filter QuotationItems to count.
     * @example
     * // Count the number of QuotationItems
     * const count = await prisma.quotationItem.count({
     *   where: {
     *     // ... the filter for the QuotationItems we want to count
     *   }
     * })
    **/
    count<T extends QuotationItemCountArgs>(
      args?: Subset<T, QuotationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationItemAggregateArgs>(args: Subset<T, QuotationItemAggregateArgs>): Prisma.PrismaPromise<GetQuotationItemAggregateType<T>>

    /**
     * Group by QuotationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemGroupByArgs} args - Group by arguments.
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
      T extends QuotationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationItemGroupByArgs['orderBy'] }
        : { orderBy?: QuotationItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuotationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotationItem model
   */
  readonly fields: QuotationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotation<T extends QuotationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationDefaultArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the QuotationItem model
   */ 
  interface QuotationItemFieldRefs {
    readonly id: FieldRef<"QuotationItem", 'String'>
    readonly quotationId: FieldRef<"QuotationItem", 'String'>
    readonly productId: FieldRef<"QuotationItem", 'String'>
    readonly quantity: FieldRef<"QuotationItem", 'Float'>
    readonly unitPrice: FieldRef<"QuotationItem", 'Float'>
    readonly discount: FieldRef<"QuotationItem", 'Float'>
    readonly total: FieldRef<"QuotationItem", 'Float'>
    readonly createdAt: FieldRef<"QuotationItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuotationItem findUnique
   */
  export type QuotationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem findUniqueOrThrow
   */
  export type QuotationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem findFirst
   */
  export type QuotationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem findFirstOrThrow
   */
  export type QuotationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem findMany
   */
  export type QuotationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItems to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem create
   */
  export type QuotationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The data needed to create a QuotationItem.
     */
    data: XOR<QuotationItemCreateInput, QuotationItemUncheckedCreateInput>
  }

  /**
   * QuotationItem createMany
   */
  export type QuotationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotationItems.
     */
    data: QuotationItemCreateManyInput | QuotationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotationItem createManyAndReturn
   */
  export type QuotationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuotationItems.
     */
    data: QuotationItemCreateManyInput | QuotationItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationItem update
   */
  export type QuotationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The data needed to update a QuotationItem.
     */
    data: XOR<QuotationItemUpdateInput, QuotationItemUncheckedUpdateInput>
    /**
     * Choose, which QuotationItem to update.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem updateMany
   */
  export type QuotationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotationItems.
     */
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyInput>
    /**
     * Filter which QuotationItems to update
     */
    where?: QuotationItemWhereInput
  }

  /**
   * QuotationItem upsert
   */
  export type QuotationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The filter to search for the QuotationItem to update in case it exists.
     */
    where: QuotationItemWhereUniqueInput
    /**
     * In case the QuotationItem found by the `where` argument doesn't exist, create a new QuotationItem with this data.
     */
    create: XOR<QuotationItemCreateInput, QuotationItemUncheckedCreateInput>
    /**
     * In case the QuotationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationItemUpdateInput, QuotationItemUncheckedUpdateInput>
  }

  /**
   * QuotationItem delete
   */
  export type QuotationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter which QuotationItem to delete.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem deleteMany
   */
  export type QuotationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationItems to delete
     */
    where?: QuotationItemWhereInput
  }

  /**
   * QuotationItem without action
   */
  export type QuotationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
  }


  /**
   * Model SaleReturn
   */

  export type AggregateSaleReturn = {
    _count: SaleReturnCountAggregateOutputType | null
    _avg: SaleReturnAvgAggregateOutputType | null
    _sum: SaleReturnSumAggregateOutputType | null
    _min: SaleReturnMinAggregateOutputType | null
    _max: SaleReturnMaxAggregateOutputType | null
  }

  export type SaleReturnAvgAggregateOutputType = {
    totalAmount: number | null
    refundAmount: number | null
  }

  export type SaleReturnSumAggregateOutputType = {
    totalAmount: number | null
    refundAmount: number | null
  }

  export type SaleReturnMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    returnNumber: string | null
    saleId: string | null
    customerId: string | null
    totalAmount: number | null
    refundAmount: number | null
    reason: string | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleReturnMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    returnNumber: string | null
    saleId: string | null
    customerId: string | null
    totalAmount: number | null
    refundAmount: number | null
    reason: string | null
    status: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SaleReturnCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    workPeriodId: number
    returnNumber: number
    saleId: number
    customerId: number
    totalAmount: number
    refundAmount: number
    reason: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SaleReturnAvgAggregateInputType = {
    totalAmount?: true
    refundAmount?: true
  }

  export type SaleReturnSumAggregateInputType = {
    totalAmount?: true
    refundAmount?: true
  }

  export type SaleReturnMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    returnNumber?: true
    saleId?: true
    customerId?: true
    totalAmount?: true
    refundAmount?: true
    reason?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleReturnMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    returnNumber?: true
    saleId?: true
    customerId?: true
    totalAmount?: true
    refundAmount?: true
    reason?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SaleReturnCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    returnNumber?: true
    saleId?: true
    customerId?: true
    totalAmount?: true
    refundAmount?: true
    reason?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SaleReturnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleReturn to aggregate.
     */
    where?: SaleReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturns to fetch.
     */
    orderBy?: SaleReturnOrderByWithRelationInput | SaleReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleReturns
    **/
    _count?: true | SaleReturnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleReturnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleReturnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleReturnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleReturnMaxAggregateInputType
  }

  export type GetSaleReturnAggregateType<T extends SaleReturnAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleReturn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleReturn[P]>
      : GetScalarType<T[P], AggregateSaleReturn[P]>
  }




  export type SaleReturnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleReturnWhereInput
    orderBy?: SaleReturnOrderByWithAggregationInput | SaleReturnOrderByWithAggregationInput[]
    by: SaleReturnScalarFieldEnum[] | SaleReturnScalarFieldEnum
    having?: SaleReturnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleReturnCountAggregateInputType | true
    _avg?: SaleReturnAvgAggregateInputType
    _sum?: SaleReturnSumAggregateInputType
    _min?: SaleReturnMinAggregateInputType
    _max?: SaleReturnMaxAggregateInputType
  }

  export type SaleReturnGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    workPeriodId: string | null
    returnNumber: string
    saleId: string | null
    customerId: string | null
    totalAmount: number
    refundAmount: number
    reason: string | null
    status: string
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: SaleReturnCountAggregateOutputType | null
    _avg: SaleReturnAvgAggregateOutputType | null
    _sum: SaleReturnSumAggregateOutputType | null
    _min: SaleReturnMinAggregateOutputType | null
    _max: SaleReturnMaxAggregateOutputType | null
  }

  type GetSaleReturnGroupByPayload<T extends SaleReturnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleReturnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleReturnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleReturnGroupByOutputType[P]>
            : GetScalarType<T[P], SaleReturnGroupByOutputType[P]>
        }
      >
    >


  export type SaleReturnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    returnNumber?: boolean
    saleId?: boolean
    customerId?: boolean
    totalAmount?: boolean
    refundAmount?: boolean
    reason?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | SaleReturn$itemsArgs<ExtArgs>
    Sale?: boolean | SaleReturn$SaleArgs<ExtArgs>
    _count?: boolean | SaleReturnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleReturn"]>

  export type SaleReturnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    returnNumber?: boolean
    saleId?: boolean
    customerId?: boolean
    totalAmount?: boolean
    refundAmount?: boolean
    reason?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Sale?: boolean | SaleReturn$SaleArgs<ExtArgs>
  }, ExtArgs["result"]["saleReturn"]>

  export type SaleReturnSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    returnNumber?: boolean
    saleId?: boolean
    customerId?: boolean
    totalAmount?: boolean
    refundAmount?: boolean
    reason?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SaleReturnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleReturn$itemsArgs<ExtArgs>
    Sale?: boolean | SaleReturn$SaleArgs<ExtArgs>
    _count?: boolean | SaleReturnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleReturnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sale?: boolean | SaleReturn$SaleArgs<ExtArgs>
  }

  export type $SaleReturnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleReturn"
    objects: {
      items: Prisma.$SaleReturnItemPayload<ExtArgs>[]
      Sale: Prisma.$SalePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      workPeriodId: string | null
      returnNumber: string
      saleId: string | null
      customerId: string | null
      totalAmount: number
      refundAmount: number
      reason: string | null
      status: string
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["saleReturn"]>
    composites: {}
  }

  type SaleReturnGetPayload<S extends boolean | null | undefined | SaleReturnDefaultArgs> = $Result.GetResult<Prisma.$SaleReturnPayload, S>

  type SaleReturnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleReturnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleReturnCountAggregateInputType | true
    }

  export interface SaleReturnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleReturn'], meta: { name: 'SaleReturn' } }
    /**
     * Find zero or one SaleReturn that matches the filter.
     * @param {SaleReturnFindUniqueArgs} args - Arguments to find a SaleReturn
     * @example
     * // Get one SaleReturn
     * const saleReturn = await prisma.saleReturn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleReturnFindUniqueArgs>(args: SelectSubset<T, SaleReturnFindUniqueArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SaleReturn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleReturnFindUniqueOrThrowArgs} args - Arguments to find a SaleReturn
     * @example
     * // Get one SaleReturn
     * const saleReturn = await prisma.saleReturn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleReturnFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleReturnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SaleReturn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnFindFirstArgs} args - Arguments to find a SaleReturn
     * @example
     * // Get one SaleReturn
     * const saleReturn = await prisma.saleReturn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleReturnFindFirstArgs>(args?: SelectSubset<T, SaleReturnFindFirstArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SaleReturn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnFindFirstOrThrowArgs} args - Arguments to find a SaleReturn
     * @example
     * // Get one SaleReturn
     * const saleReturn = await prisma.saleReturn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleReturnFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleReturnFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SaleReturns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleReturns
     * const saleReturns = await prisma.saleReturn.findMany()
     * 
     * // Get first 10 SaleReturns
     * const saleReturns = await prisma.saleReturn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleReturnWithIdOnly = await prisma.saleReturn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleReturnFindManyArgs>(args?: SelectSubset<T, SaleReturnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SaleReturn.
     * @param {SaleReturnCreateArgs} args - Arguments to create a SaleReturn.
     * @example
     * // Create one SaleReturn
     * const SaleReturn = await prisma.saleReturn.create({
     *   data: {
     *     // ... data to create a SaleReturn
     *   }
     * })
     * 
     */
    create<T extends SaleReturnCreateArgs>(args: SelectSubset<T, SaleReturnCreateArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SaleReturns.
     * @param {SaleReturnCreateManyArgs} args - Arguments to create many SaleReturns.
     * @example
     * // Create many SaleReturns
     * const saleReturn = await prisma.saleReturn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleReturnCreateManyArgs>(args?: SelectSubset<T, SaleReturnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleReturns and returns the data saved in the database.
     * @param {SaleReturnCreateManyAndReturnArgs} args - Arguments to create many SaleReturns.
     * @example
     * // Create many SaleReturns
     * const saleReturn = await prisma.saleReturn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleReturns and only return the `id`
     * const saleReturnWithIdOnly = await prisma.saleReturn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleReturnCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleReturnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SaleReturn.
     * @param {SaleReturnDeleteArgs} args - Arguments to delete one SaleReturn.
     * @example
     * // Delete one SaleReturn
     * const SaleReturn = await prisma.saleReturn.delete({
     *   where: {
     *     // ... filter to delete one SaleReturn
     *   }
     * })
     * 
     */
    delete<T extends SaleReturnDeleteArgs>(args: SelectSubset<T, SaleReturnDeleteArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SaleReturn.
     * @param {SaleReturnUpdateArgs} args - Arguments to update one SaleReturn.
     * @example
     * // Update one SaleReturn
     * const saleReturn = await prisma.saleReturn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleReturnUpdateArgs>(args: SelectSubset<T, SaleReturnUpdateArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SaleReturns.
     * @param {SaleReturnDeleteManyArgs} args - Arguments to filter SaleReturns to delete.
     * @example
     * // Delete a few SaleReturns
     * const { count } = await prisma.saleReturn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleReturnDeleteManyArgs>(args?: SelectSubset<T, SaleReturnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleReturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleReturns
     * const saleReturn = await prisma.saleReturn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleReturnUpdateManyArgs>(args: SelectSubset<T, SaleReturnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaleReturn.
     * @param {SaleReturnUpsertArgs} args - Arguments to update or create a SaleReturn.
     * @example
     * // Update or create a SaleReturn
     * const saleReturn = await prisma.saleReturn.upsert({
     *   create: {
     *     // ... data to create a SaleReturn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleReturn we want to update
     *   }
     * })
     */
    upsert<T extends SaleReturnUpsertArgs>(args: SelectSubset<T, SaleReturnUpsertArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SaleReturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnCountArgs} args - Arguments to filter SaleReturns to count.
     * @example
     * // Count the number of SaleReturns
     * const count = await prisma.saleReturn.count({
     *   where: {
     *     // ... the filter for the SaleReturns we want to count
     *   }
     * })
    **/
    count<T extends SaleReturnCountArgs>(
      args?: Subset<T, SaleReturnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleReturnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleReturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleReturnAggregateArgs>(args: Subset<T, SaleReturnAggregateArgs>): Prisma.PrismaPromise<GetSaleReturnAggregateType<T>>

    /**
     * Group by SaleReturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnGroupByArgs} args - Group by arguments.
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
      T extends SaleReturnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleReturnGroupByArgs['orderBy'] }
        : { orderBy?: SaleReturnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleReturnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleReturnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleReturn model
   */
  readonly fields: SaleReturnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleReturn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleReturnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends SaleReturn$itemsArgs<ExtArgs> = {}>(args?: Subset<T, SaleReturn$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "findMany"> | Null>
    Sale<T extends SaleReturn$SaleArgs<ExtArgs> = {}>(args?: Subset<T, SaleReturn$SaleArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the SaleReturn model
   */ 
  interface SaleReturnFieldRefs {
    readonly id: FieldRef<"SaleReturn", 'String'>
    readonly tenantId: FieldRef<"SaleReturn", 'String'>
    readonly shopId: FieldRef<"SaleReturn", 'String'>
    readonly workPeriodId: FieldRef<"SaleReturn", 'String'>
    readonly returnNumber: FieldRef<"SaleReturn", 'String'>
    readonly saleId: FieldRef<"SaleReturn", 'String'>
    readonly customerId: FieldRef<"SaleReturn", 'String'>
    readonly totalAmount: FieldRef<"SaleReturn", 'Float'>
    readonly refundAmount: FieldRef<"SaleReturn", 'Float'>
    readonly reason: FieldRef<"SaleReturn", 'String'>
    readonly status: FieldRef<"SaleReturn", 'String'>
    readonly createdById: FieldRef<"SaleReturn", 'String'>
    readonly createdAt: FieldRef<"SaleReturn", 'DateTime'>
    readonly updatedAt: FieldRef<"SaleReturn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaleReturn findUnique
   */
  export type SaleReturnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturn to fetch.
     */
    where: SaleReturnWhereUniqueInput
  }

  /**
   * SaleReturn findUniqueOrThrow
   */
  export type SaleReturnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturn to fetch.
     */
    where: SaleReturnWhereUniqueInput
  }

  /**
   * SaleReturn findFirst
   */
  export type SaleReturnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturn to fetch.
     */
    where?: SaleReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturns to fetch.
     */
    orderBy?: SaleReturnOrderByWithRelationInput | SaleReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleReturns.
     */
    cursor?: SaleReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleReturns.
     */
    distinct?: SaleReturnScalarFieldEnum | SaleReturnScalarFieldEnum[]
  }

  /**
   * SaleReturn findFirstOrThrow
   */
  export type SaleReturnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturn to fetch.
     */
    where?: SaleReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturns to fetch.
     */
    orderBy?: SaleReturnOrderByWithRelationInput | SaleReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleReturns.
     */
    cursor?: SaleReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleReturns.
     */
    distinct?: SaleReturnScalarFieldEnum | SaleReturnScalarFieldEnum[]
  }

  /**
   * SaleReturn findMany
   */
  export type SaleReturnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturns to fetch.
     */
    where?: SaleReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturns to fetch.
     */
    orderBy?: SaleReturnOrderByWithRelationInput | SaleReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleReturns.
     */
    cursor?: SaleReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturns.
     */
    skip?: number
    distinct?: SaleReturnScalarFieldEnum | SaleReturnScalarFieldEnum[]
  }

  /**
   * SaleReturn create
   */
  export type SaleReturnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleReturn.
     */
    data: XOR<SaleReturnCreateInput, SaleReturnUncheckedCreateInput>
  }

  /**
   * SaleReturn createMany
   */
  export type SaleReturnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleReturns.
     */
    data: SaleReturnCreateManyInput | SaleReturnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleReturn createManyAndReturn
   */
  export type SaleReturnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SaleReturns.
     */
    data: SaleReturnCreateManyInput | SaleReturnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleReturn update
   */
  export type SaleReturnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleReturn.
     */
    data: XOR<SaleReturnUpdateInput, SaleReturnUncheckedUpdateInput>
    /**
     * Choose, which SaleReturn to update.
     */
    where: SaleReturnWhereUniqueInput
  }

  /**
   * SaleReturn updateMany
   */
  export type SaleReturnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleReturns.
     */
    data: XOR<SaleReturnUpdateManyMutationInput, SaleReturnUncheckedUpdateManyInput>
    /**
     * Filter which SaleReturns to update
     */
    where?: SaleReturnWhereInput
  }

  /**
   * SaleReturn upsert
   */
  export type SaleReturnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleReturn to update in case it exists.
     */
    where: SaleReturnWhereUniqueInput
    /**
     * In case the SaleReturn found by the `where` argument doesn't exist, create a new SaleReturn with this data.
     */
    create: XOR<SaleReturnCreateInput, SaleReturnUncheckedCreateInput>
    /**
     * In case the SaleReturn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleReturnUpdateInput, SaleReturnUncheckedUpdateInput>
  }

  /**
   * SaleReturn delete
   */
  export type SaleReturnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
    /**
     * Filter which SaleReturn to delete.
     */
    where: SaleReturnWhereUniqueInput
  }

  /**
   * SaleReturn deleteMany
   */
  export type SaleReturnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleReturns to delete
     */
    where?: SaleReturnWhereInput
  }

  /**
   * SaleReturn.items
   */
  export type SaleReturn$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    where?: SaleReturnItemWhereInput
    orderBy?: SaleReturnItemOrderByWithRelationInput | SaleReturnItemOrderByWithRelationInput[]
    cursor?: SaleReturnItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleReturnItemScalarFieldEnum | SaleReturnItemScalarFieldEnum[]
  }

  /**
   * SaleReturn.Sale
   */
  export type SaleReturn$SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
  }

  /**
   * SaleReturn without action
   */
  export type SaleReturnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturn
     */
    select?: SaleReturnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnInclude<ExtArgs> | null
  }


  /**
   * Model SaleReturnItem
   */

  export type AggregateSaleReturnItem = {
    _count: SaleReturnItemCountAggregateOutputType | null
    _avg: SaleReturnItemAvgAggregateOutputType | null
    _sum: SaleReturnItemSumAggregateOutputType | null
    _min: SaleReturnItemMinAggregateOutputType | null
    _max: SaleReturnItemMaxAggregateOutputType | null
  }

  export type SaleReturnItemAvgAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
    refundAmount: number | null
  }

  export type SaleReturnItemSumAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
    refundAmount: number | null
  }

  export type SaleReturnItemMinAggregateOutputType = {
    id: string | null
    saleReturnId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    unitCost: number | null
    refundAmount: number | null
    createdAt: Date | null
  }

  export type SaleReturnItemMaxAggregateOutputType = {
    id: string | null
    saleReturnId: string | null
    productId: string | null
    serialNumber: string | null
    quantity: number | null
    unitCost: number | null
    refundAmount: number | null
    createdAt: Date | null
  }

  export type SaleReturnItemCountAggregateOutputType = {
    id: number
    saleReturnId: number
    productId: number
    serialNumber: number
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt: number
    _all: number
  }


  export type SaleReturnItemAvgAggregateInputType = {
    quantity?: true
    unitCost?: true
    refundAmount?: true
  }

  export type SaleReturnItemSumAggregateInputType = {
    quantity?: true
    unitCost?: true
    refundAmount?: true
  }

  export type SaleReturnItemMinAggregateInputType = {
    id?: true
    saleReturnId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    unitCost?: true
    refundAmount?: true
    createdAt?: true
  }

  export type SaleReturnItemMaxAggregateInputType = {
    id?: true
    saleReturnId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    unitCost?: true
    refundAmount?: true
    createdAt?: true
  }

  export type SaleReturnItemCountAggregateInputType = {
    id?: true
    saleReturnId?: true
    productId?: true
    serialNumber?: true
    quantity?: true
    unitCost?: true
    refundAmount?: true
    createdAt?: true
    _all?: true
  }

  export type SaleReturnItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleReturnItem to aggregate.
     */
    where?: SaleReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturnItems to fetch.
     */
    orderBy?: SaleReturnItemOrderByWithRelationInput | SaleReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleReturnItems
    **/
    _count?: true | SaleReturnItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleReturnItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleReturnItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleReturnItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleReturnItemMaxAggregateInputType
  }

  export type GetSaleReturnItemAggregateType<T extends SaleReturnItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleReturnItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleReturnItem[P]>
      : GetScalarType<T[P], AggregateSaleReturnItem[P]>
  }




  export type SaleReturnItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleReturnItemWhereInput
    orderBy?: SaleReturnItemOrderByWithAggregationInput | SaleReturnItemOrderByWithAggregationInput[]
    by: SaleReturnItemScalarFieldEnum[] | SaleReturnItemScalarFieldEnum
    having?: SaleReturnItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleReturnItemCountAggregateInputType | true
    _avg?: SaleReturnItemAvgAggregateInputType
    _sum?: SaleReturnItemSumAggregateInputType
    _min?: SaleReturnItemMinAggregateInputType
    _max?: SaleReturnItemMaxAggregateInputType
  }

  export type SaleReturnItemGroupByOutputType = {
    id: string
    saleReturnId: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt: Date
    _count: SaleReturnItemCountAggregateOutputType | null
    _avg: SaleReturnItemAvgAggregateOutputType | null
    _sum: SaleReturnItemSumAggregateOutputType | null
    _min: SaleReturnItemMinAggregateOutputType | null
    _max: SaleReturnItemMaxAggregateOutputType | null
  }

  type GetSaleReturnItemGroupByPayload<T extends SaleReturnItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleReturnItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleReturnItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleReturnItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleReturnItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleReturnItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleReturnId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    unitCost?: boolean
    refundAmount?: boolean
    createdAt?: boolean
    saleReturn?: boolean | SaleReturnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleReturnItem"]>

  export type SaleReturnItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleReturnId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    unitCost?: boolean
    refundAmount?: boolean
    createdAt?: boolean
    saleReturn?: boolean | SaleReturnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleReturnItem"]>

  export type SaleReturnItemSelectScalar = {
    id?: boolean
    saleReturnId?: boolean
    productId?: boolean
    serialNumber?: boolean
    quantity?: boolean
    unitCost?: boolean
    refundAmount?: boolean
    createdAt?: boolean
  }

  export type SaleReturnItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleReturn?: boolean | SaleReturnDefaultArgs<ExtArgs>
  }
  export type SaleReturnItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleReturn?: boolean | SaleReturnDefaultArgs<ExtArgs>
  }

  export type $SaleReturnItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleReturnItem"
    objects: {
      saleReturn: Prisma.$SaleReturnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleReturnId: string
      productId: string
      serialNumber: string
      quantity: number
      unitCost: number
      refundAmount: number
      createdAt: Date
    }, ExtArgs["result"]["saleReturnItem"]>
    composites: {}
  }

  type SaleReturnItemGetPayload<S extends boolean | null | undefined | SaleReturnItemDefaultArgs> = $Result.GetResult<Prisma.$SaleReturnItemPayload, S>

  type SaleReturnItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleReturnItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleReturnItemCountAggregateInputType | true
    }

  export interface SaleReturnItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleReturnItem'], meta: { name: 'SaleReturnItem' } }
    /**
     * Find zero or one SaleReturnItem that matches the filter.
     * @param {SaleReturnItemFindUniqueArgs} args - Arguments to find a SaleReturnItem
     * @example
     * // Get one SaleReturnItem
     * const saleReturnItem = await prisma.saleReturnItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleReturnItemFindUniqueArgs>(args: SelectSubset<T, SaleReturnItemFindUniqueArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SaleReturnItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleReturnItemFindUniqueOrThrowArgs} args - Arguments to find a SaleReturnItem
     * @example
     * // Get one SaleReturnItem
     * const saleReturnItem = await prisma.saleReturnItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleReturnItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleReturnItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SaleReturnItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemFindFirstArgs} args - Arguments to find a SaleReturnItem
     * @example
     * // Get one SaleReturnItem
     * const saleReturnItem = await prisma.saleReturnItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleReturnItemFindFirstArgs>(args?: SelectSubset<T, SaleReturnItemFindFirstArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SaleReturnItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemFindFirstOrThrowArgs} args - Arguments to find a SaleReturnItem
     * @example
     * // Get one SaleReturnItem
     * const saleReturnItem = await prisma.saleReturnItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleReturnItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleReturnItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SaleReturnItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleReturnItems
     * const saleReturnItems = await prisma.saleReturnItem.findMany()
     * 
     * // Get first 10 SaleReturnItems
     * const saleReturnItems = await prisma.saleReturnItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleReturnItemWithIdOnly = await prisma.saleReturnItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleReturnItemFindManyArgs>(args?: SelectSubset<T, SaleReturnItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SaleReturnItem.
     * @param {SaleReturnItemCreateArgs} args - Arguments to create a SaleReturnItem.
     * @example
     * // Create one SaleReturnItem
     * const SaleReturnItem = await prisma.saleReturnItem.create({
     *   data: {
     *     // ... data to create a SaleReturnItem
     *   }
     * })
     * 
     */
    create<T extends SaleReturnItemCreateArgs>(args: SelectSubset<T, SaleReturnItemCreateArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SaleReturnItems.
     * @param {SaleReturnItemCreateManyArgs} args - Arguments to create many SaleReturnItems.
     * @example
     * // Create many SaleReturnItems
     * const saleReturnItem = await prisma.saleReturnItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleReturnItemCreateManyArgs>(args?: SelectSubset<T, SaleReturnItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleReturnItems and returns the data saved in the database.
     * @param {SaleReturnItemCreateManyAndReturnArgs} args - Arguments to create many SaleReturnItems.
     * @example
     * // Create many SaleReturnItems
     * const saleReturnItem = await prisma.saleReturnItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleReturnItems and only return the `id`
     * const saleReturnItemWithIdOnly = await prisma.saleReturnItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleReturnItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleReturnItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SaleReturnItem.
     * @param {SaleReturnItemDeleteArgs} args - Arguments to delete one SaleReturnItem.
     * @example
     * // Delete one SaleReturnItem
     * const SaleReturnItem = await prisma.saleReturnItem.delete({
     *   where: {
     *     // ... filter to delete one SaleReturnItem
     *   }
     * })
     * 
     */
    delete<T extends SaleReturnItemDeleteArgs>(args: SelectSubset<T, SaleReturnItemDeleteArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SaleReturnItem.
     * @param {SaleReturnItemUpdateArgs} args - Arguments to update one SaleReturnItem.
     * @example
     * // Update one SaleReturnItem
     * const saleReturnItem = await prisma.saleReturnItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleReturnItemUpdateArgs>(args: SelectSubset<T, SaleReturnItemUpdateArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SaleReturnItems.
     * @param {SaleReturnItemDeleteManyArgs} args - Arguments to filter SaleReturnItems to delete.
     * @example
     * // Delete a few SaleReturnItems
     * const { count } = await prisma.saleReturnItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleReturnItemDeleteManyArgs>(args?: SelectSubset<T, SaleReturnItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleReturnItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleReturnItems
     * const saleReturnItem = await prisma.saleReturnItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleReturnItemUpdateManyArgs>(args: SelectSubset<T, SaleReturnItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaleReturnItem.
     * @param {SaleReturnItemUpsertArgs} args - Arguments to update or create a SaleReturnItem.
     * @example
     * // Update or create a SaleReturnItem
     * const saleReturnItem = await prisma.saleReturnItem.upsert({
     *   create: {
     *     // ... data to create a SaleReturnItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleReturnItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleReturnItemUpsertArgs>(args: SelectSubset<T, SaleReturnItemUpsertArgs<ExtArgs>>): Prisma__SaleReturnItemClient<$Result.GetResult<Prisma.$SaleReturnItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SaleReturnItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemCountArgs} args - Arguments to filter SaleReturnItems to count.
     * @example
     * // Count the number of SaleReturnItems
     * const count = await prisma.saleReturnItem.count({
     *   where: {
     *     // ... the filter for the SaleReturnItems we want to count
     *   }
     * })
    **/
    count<T extends SaleReturnItemCountArgs>(
      args?: Subset<T, SaleReturnItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleReturnItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleReturnItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleReturnItemAggregateArgs>(args: Subset<T, SaleReturnItemAggregateArgs>): Prisma.PrismaPromise<GetSaleReturnItemAggregateType<T>>

    /**
     * Group by SaleReturnItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleReturnItemGroupByArgs} args - Group by arguments.
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
      T extends SaleReturnItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleReturnItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleReturnItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleReturnItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleReturnItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleReturnItem model
   */
  readonly fields: SaleReturnItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleReturnItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleReturnItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleReturn<T extends SaleReturnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleReturnDefaultArgs<ExtArgs>>): Prisma__SaleReturnClient<$Result.GetResult<Prisma.$SaleReturnPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SaleReturnItem model
   */ 
  interface SaleReturnItemFieldRefs {
    readonly id: FieldRef<"SaleReturnItem", 'String'>
    readonly saleReturnId: FieldRef<"SaleReturnItem", 'String'>
    readonly productId: FieldRef<"SaleReturnItem", 'String'>
    readonly serialNumber: FieldRef<"SaleReturnItem", 'String'>
    readonly quantity: FieldRef<"SaleReturnItem", 'Float'>
    readonly unitCost: FieldRef<"SaleReturnItem", 'Float'>
    readonly refundAmount: FieldRef<"SaleReturnItem", 'Float'>
    readonly createdAt: FieldRef<"SaleReturnItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaleReturnItem findUnique
   */
  export type SaleReturnItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturnItem to fetch.
     */
    where: SaleReturnItemWhereUniqueInput
  }

  /**
   * SaleReturnItem findUniqueOrThrow
   */
  export type SaleReturnItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturnItem to fetch.
     */
    where: SaleReturnItemWhereUniqueInput
  }

  /**
   * SaleReturnItem findFirst
   */
  export type SaleReturnItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturnItem to fetch.
     */
    where?: SaleReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturnItems to fetch.
     */
    orderBy?: SaleReturnItemOrderByWithRelationInput | SaleReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleReturnItems.
     */
    cursor?: SaleReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleReturnItems.
     */
    distinct?: SaleReturnItemScalarFieldEnum | SaleReturnItemScalarFieldEnum[]
  }

  /**
   * SaleReturnItem findFirstOrThrow
   */
  export type SaleReturnItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturnItem to fetch.
     */
    where?: SaleReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturnItems to fetch.
     */
    orderBy?: SaleReturnItemOrderByWithRelationInput | SaleReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleReturnItems.
     */
    cursor?: SaleReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleReturnItems.
     */
    distinct?: SaleReturnItemScalarFieldEnum | SaleReturnItemScalarFieldEnum[]
  }

  /**
   * SaleReturnItem findMany
   */
  export type SaleReturnItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleReturnItems to fetch.
     */
    where?: SaleReturnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleReturnItems to fetch.
     */
    orderBy?: SaleReturnItemOrderByWithRelationInput | SaleReturnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleReturnItems.
     */
    cursor?: SaleReturnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleReturnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleReturnItems.
     */
    skip?: number
    distinct?: SaleReturnItemScalarFieldEnum | SaleReturnItemScalarFieldEnum[]
  }

  /**
   * SaleReturnItem create
   */
  export type SaleReturnItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleReturnItem.
     */
    data: XOR<SaleReturnItemCreateInput, SaleReturnItemUncheckedCreateInput>
  }

  /**
   * SaleReturnItem createMany
   */
  export type SaleReturnItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleReturnItems.
     */
    data: SaleReturnItemCreateManyInput | SaleReturnItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleReturnItem createManyAndReturn
   */
  export type SaleReturnItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SaleReturnItems.
     */
    data: SaleReturnItemCreateManyInput | SaleReturnItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleReturnItem update
   */
  export type SaleReturnItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleReturnItem.
     */
    data: XOR<SaleReturnItemUpdateInput, SaleReturnItemUncheckedUpdateInput>
    /**
     * Choose, which SaleReturnItem to update.
     */
    where: SaleReturnItemWhereUniqueInput
  }

  /**
   * SaleReturnItem updateMany
   */
  export type SaleReturnItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleReturnItems.
     */
    data: XOR<SaleReturnItemUpdateManyMutationInput, SaleReturnItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleReturnItems to update
     */
    where?: SaleReturnItemWhereInput
  }

  /**
   * SaleReturnItem upsert
   */
  export type SaleReturnItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleReturnItem to update in case it exists.
     */
    where: SaleReturnItemWhereUniqueInput
    /**
     * In case the SaleReturnItem found by the `where` argument doesn't exist, create a new SaleReturnItem with this data.
     */
    create: XOR<SaleReturnItemCreateInput, SaleReturnItemUncheckedCreateInput>
    /**
     * In case the SaleReturnItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleReturnItemUpdateInput, SaleReturnItemUncheckedUpdateInput>
  }

  /**
   * SaleReturnItem delete
   */
  export type SaleReturnItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
    /**
     * Filter which SaleReturnItem to delete.
     */
    where: SaleReturnItemWhereUniqueInput
  }

  /**
   * SaleReturnItem deleteMany
   */
  export type SaleReturnItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleReturnItems to delete
     */
    where?: SaleReturnItemWhereInput
  }

  /**
   * SaleReturnItem without action
   */
  export type SaleReturnItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleReturnItem
     */
    select?: SaleReturnItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleReturnItemInclude<ExtArgs> | null
  }


  /**
   * Model Bonus
   */

  export type AggregateBonus = {
    _count: BonusCountAggregateOutputType | null
    _avg: BonusAvgAggregateOutputType | null
    _sum: BonusSumAggregateOutputType | null
    _min: BonusMinAggregateOutputType | null
    _max: BonusMaxAggregateOutputType | null
  }

  export type BonusAvgAggregateOutputType = {
    amount: number | null
  }

  export type BonusSumAggregateOutputType = {
    amount: number | null
  }

  export type BonusMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    customerId: string | null
    amount: number | null
    type: string | null
    description: string | null
    createdAt: Date | null
  }

  export type BonusMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    customerId: string | null
    amount: number | null
    type: string | null
    description: string | null
    createdAt: Date | null
  }

  export type BonusCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    customerId: number
    amount: number
    type: number
    description: number
    createdAt: number
    _all: number
  }


  export type BonusAvgAggregateInputType = {
    amount?: true
  }

  export type BonusSumAggregateInputType = {
    amount?: true
  }

  export type BonusMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    customerId?: true
    amount?: true
    type?: true
    description?: true
    createdAt?: true
  }

  export type BonusMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    customerId?: true
    amount?: true
    type?: true
    description?: true
    createdAt?: true
  }

  export type BonusCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    customerId?: true
    amount?: true
    type?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type BonusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bonus to aggregate.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bonuses
    **/
    _count?: true | BonusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BonusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BonusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BonusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BonusMaxAggregateInputType
  }

  export type GetBonusAggregateType<T extends BonusAggregateArgs> = {
        [P in keyof T & keyof AggregateBonus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBonus[P]>
      : GetScalarType<T[P], AggregateBonus[P]>
  }




  export type BonusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonusWhereInput
    orderBy?: BonusOrderByWithAggregationInput | BonusOrderByWithAggregationInput[]
    by: BonusScalarFieldEnum[] | BonusScalarFieldEnum
    having?: BonusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BonusCountAggregateInputType | true
    _avg?: BonusAvgAggregateInputType
    _sum?: BonusSumAggregateInputType
    _min?: BonusMinAggregateInputType
    _max?: BonusMaxAggregateInputType
  }

  export type BonusGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    customerId: string | null
    amount: number
    type: string
    description: string | null
    createdAt: Date
    _count: BonusCountAggregateOutputType | null
    _avg: BonusAvgAggregateOutputType | null
    _sum: BonusSumAggregateOutputType | null
    _min: BonusMinAggregateOutputType | null
    _max: BonusMaxAggregateOutputType | null
  }

  type GetBonusGroupByPayload<T extends BonusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BonusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BonusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BonusGroupByOutputType[P]>
            : GetScalarType<T[P], BonusGroupByOutputType[P]>
        }
      >
    >


  export type BonusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    customerId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bonus"]>

  export type BonusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    customerId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bonus"]>

  export type BonusSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    customerId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
  }


  export type $BonusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bonus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      customerId: string | null
      amount: number
      type: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["bonus"]>
    composites: {}
  }

  type BonusGetPayload<S extends boolean | null | undefined | BonusDefaultArgs> = $Result.GetResult<Prisma.$BonusPayload, S>

  type BonusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BonusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BonusCountAggregateInputType | true
    }

  export interface BonusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bonus'], meta: { name: 'Bonus' } }
    /**
     * Find zero or one Bonus that matches the filter.
     * @param {BonusFindUniqueArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BonusFindUniqueArgs>(args: SelectSubset<T, BonusFindUniqueArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bonus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BonusFindUniqueOrThrowArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BonusFindUniqueOrThrowArgs>(args: SelectSubset<T, BonusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bonus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusFindFirstArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BonusFindFirstArgs>(args?: SelectSubset<T, BonusFindFirstArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bonus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusFindFirstOrThrowArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BonusFindFirstOrThrowArgs>(args?: SelectSubset<T, BonusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bonuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bonuses
     * const bonuses = await prisma.bonus.findMany()
     * 
     * // Get first 10 Bonuses
     * const bonuses = await prisma.bonus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bonusWithIdOnly = await prisma.bonus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BonusFindManyArgs>(args?: SelectSubset<T, BonusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bonus.
     * @param {BonusCreateArgs} args - Arguments to create a Bonus.
     * @example
     * // Create one Bonus
     * const Bonus = await prisma.bonus.create({
     *   data: {
     *     // ... data to create a Bonus
     *   }
     * })
     * 
     */
    create<T extends BonusCreateArgs>(args: SelectSubset<T, BonusCreateArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bonuses.
     * @param {BonusCreateManyArgs} args - Arguments to create many Bonuses.
     * @example
     * // Create many Bonuses
     * const bonus = await prisma.bonus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BonusCreateManyArgs>(args?: SelectSubset<T, BonusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bonuses and returns the data saved in the database.
     * @param {BonusCreateManyAndReturnArgs} args - Arguments to create many Bonuses.
     * @example
     * // Create many Bonuses
     * const bonus = await prisma.bonus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bonuses and only return the `id`
     * const bonusWithIdOnly = await prisma.bonus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BonusCreateManyAndReturnArgs>(args?: SelectSubset<T, BonusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bonus.
     * @param {BonusDeleteArgs} args - Arguments to delete one Bonus.
     * @example
     * // Delete one Bonus
     * const Bonus = await prisma.bonus.delete({
     *   where: {
     *     // ... filter to delete one Bonus
     *   }
     * })
     * 
     */
    delete<T extends BonusDeleteArgs>(args: SelectSubset<T, BonusDeleteArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bonus.
     * @param {BonusUpdateArgs} args - Arguments to update one Bonus.
     * @example
     * // Update one Bonus
     * const bonus = await prisma.bonus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BonusUpdateArgs>(args: SelectSubset<T, BonusUpdateArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bonuses.
     * @param {BonusDeleteManyArgs} args - Arguments to filter Bonuses to delete.
     * @example
     * // Delete a few Bonuses
     * const { count } = await prisma.bonus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BonusDeleteManyArgs>(args?: SelectSubset<T, BonusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bonuses
     * const bonus = await prisma.bonus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BonusUpdateManyArgs>(args: SelectSubset<T, BonusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bonus.
     * @param {BonusUpsertArgs} args - Arguments to update or create a Bonus.
     * @example
     * // Update or create a Bonus
     * const bonus = await prisma.bonus.upsert({
     *   create: {
     *     // ... data to create a Bonus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bonus we want to update
     *   }
     * })
     */
    upsert<T extends BonusUpsertArgs>(args: SelectSubset<T, BonusUpsertArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCountArgs} args - Arguments to filter Bonuses to count.
     * @example
     * // Count the number of Bonuses
     * const count = await prisma.bonus.count({
     *   where: {
     *     // ... the filter for the Bonuses we want to count
     *   }
     * })
    **/
    count<T extends BonusCountArgs>(
      args?: Subset<T, BonusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BonusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BonusAggregateArgs>(args: Subset<T, BonusAggregateArgs>): Prisma.PrismaPromise<GetBonusAggregateType<T>>

    /**
     * Group by Bonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusGroupByArgs} args - Group by arguments.
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
      T extends BonusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BonusGroupByArgs['orderBy'] }
        : { orderBy?: BonusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BonusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBonusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bonus model
   */
  readonly fields: BonusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bonus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BonusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Bonus model
   */ 
  interface BonusFieldRefs {
    readonly id: FieldRef<"Bonus", 'String'>
    readonly tenantId: FieldRef<"Bonus", 'String'>
    readonly shopId: FieldRef<"Bonus", 'String'>
    readonly customerId: FieldRef<"Bonus", 'String'>
    readonly amount: FieldRef<"Bonus", 'Float'>
    readonly type: FieldRef<"Bonus", 'String'>
    readonly description: FieldRef<"Bonus", 'String'>
    readonly createdAt: FieldRef<"Bonus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bonus findUnique
   */
  export type BonusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus findUniqueOrThrow
   */
  export type BonusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus findFirst
   */
  export type BonusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bonuses.
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bonuses.
     */
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * Bonus findFirstOrThrow
   */
  export type BonusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bonuses.
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bonuses.
     */
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * Bonus findMany
   */
  export type BonusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Filter, which Bonuses to fetch.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bonuses.
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * Bonus create
   */
  export type BonusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * The data needed to create a Bonus.
     */
    data: XOR<BonusCreateInput, BonusUncheckedCreateInput>
  }

  /**
   * Bonus createMany
   */
  export type BonusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bonuses.
     */
    data: BonusCreateManyInput | BonusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bonus createManyAndReturn
   */
  export type BonusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bonuses.
     */
    data: BonusCreateManyInput | BonusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bonus update
   */
  export type BonusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * The data needed to update a Bonus.
     */
    data: XOR<BonusUpdateInput, BonusUncheckedUpdateInput>
    /**
     * Choose, which Bonus to update.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus updateMany
   */
  export type BonusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bonuses.
     */
    data: XOR<BonusUpdateManyMutationInput, BonusUncheckedUpdateManyInput>
    /**
     * Filter which Bonuses to update
     */
    where?: BonusWhereInput
  }

  /**
   * Bonus upsert
   */
  export type BonusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * The filter to search for the Bonus to update in case it exists.
     */
    where: BonusWhereUniqueInput
    /**
     * In case the Bonus found by the `where` argument doesn't exist, create a new Bonus with this data.
     */
    create: XOR<BonusCreateInput, BonusUncheckedCreateInput>
    /**
     * In case the Bonus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BonusUpdateInput, BonusUncheckedUpdateInput>
  }

  /**
   * Bonus delete
   */
  export type BonusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Filter which Bonus to delete.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus deleteMany
   */
  export type BonusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bonuses to delete
     */
    where?: BonusWhereInput
  }

  /**
   * Bonus without action
   */
  export type BonusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
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


  export const SaleScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    workPeriodId: 'workPeriodId',
    orderNumber: 'orderNumber',
    customerId: 'customerId',
    totalAmount: 'totalAmount',
    totalCost: 'totalCost',
    profit: 'profit',
    paymentMethod: 'paymentMethod',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    serialNumber: 'serialNumber',
    quantity: 'quantity',
    unitCost: 'unitCost',
    unitPrice: 'unitPrice',
    discount: 'discount',
    tax: 'tax',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const SalePaymentScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    amount: 'amount',
    method: 'method',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type SalePaymentScalarFieldEnum = (typeof SalePaymentScalarFieldEnum)[keyof typeof SalePaymentScalarFieldEnum]


  export const QuotationScalarFieldEnum: {
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

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const QuotationItemScalarFieldEnum: {
    id: 'id',
    quotationId: 'quotationId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    discount: 'discount',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type QuotationItemScalarFieldEnum = (typeof QuotationItemScalarFieldEnum)[keyof typeof QuotationItemScalarFieldEnum]


  export const SaleReturnScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    workPeriodId: 'workPeriodId',
    returnNumber: 'returnNumber',
    saleId: 'saleId',
    customerId: 'customerId',
    totalAmount: 'totalAmount',
    refundAmount: 'refundAmount',
    reason: 'reason',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SaleReturnScalarFieldEnum = (typeof SaleReturnScalarFieldEnum)[keyof typeof SaleReturnScalarFieldEnum]


  export const SaleReturnItemScalarFieldEnum: {
    id: 'id',
    saleReturnId: 'saleReturnId',
    productId: 'productId',
    serialNumber: 'serialNumber',
    quantity: 'quantity',
    unitCost: 'unitCost',
    refundAmount: 'refundAmount',
    createdAt: 'createdAt'
  };

  export type SaleReturnItemScalarFieldEnum = (typeof SaleReturnItemScalarFieldEnum)[keyof typeof SaleReturnItemScalarFieldEnum]


  export const BonusScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    customerId: 'customerId',
    amount: 'amount',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type BonusScalarFieldEnum = (typeof BonusScalarFieldEnum)[keyof typeof BonusScalarFieldEnum]


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


  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    tenantId?: StringFilter<"Sale"> | string
    shopId?: StringFilter<"Sale"> | string
    workPeriodId?: StringNullableFilter<"Sale"> | string | null
    orderNumber?: StringFilter<"Sale"> | string
    customerId?: StringNullableFilter<"Sale"> | string | null
    totalAmount?: FloatFilter<"Sale"> | number
    totalCost?: FloatFilter<"Sale"> | number
    profit?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    status?: StringFilter<"Sale"> | string
    createdById?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    items?: SaleItemListRelationFilter
    payments?: SalePaymentListRelationFilter
    returns?: SaleReturnListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrderInput | SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: SaleItemOrderByRelationAggregateInput
    payments?: SalePaymentOrderByRelationAggregateInput
    returns?: SaleReturnOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    tenantId?: StringFilter<"Sale"> | string
    shopId?: StringFilter<"Sale"> | string
    workPeriodId?: StringNullableFilter<"Sale"> | string | null
    customerId?: StringNullableFilter<"Sale"> | string | null
    totalAmount?: FloatFilter<"Sale"> | number
    totalCost?: FloatFilter<"Sale"> | number
    profit?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    status?: StringFilter<"Sale"> | string
    createdById?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    items?: SaleItemListRelationFilter
    payments?: SalePaymentListRelationFilter
    returns?: SaleReturnListRelationFilter
  }, "id" | "orderNumber">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrderInput | SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    tenantId?: StringWithAggregatesFilter<"Sale"> | string
    shopId?: StringWithAggregatesFilter<"Sale"> | string
    workPeriodId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    orderNumber?: StringWithAggregatesFilter<"Sale"> | string
    customerId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Sale"> | number
    totalCost?: FloatWithAggregatesFilter<"Sale"> | number
    profit?: FloatWithAggregatesFilter<"Sale"> | number
    paymentMethod?: StringWithAggregatesFilter<"Sale"> | string
    status?: StringWithAggregatesFilter<"Sale"> | string
    createdById?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    serialNumber?: StringFilter<"SaleItem"> | string
    quantity?: FloatFilter<"SaleItem"> | number
    unitCost?: FloatFilter<"SaleItem"> | number
    unitPrice?: FloatFilter<"SaleItem"> | number
    discount?: FloatFilter<"SaleItem"> | number
    tax?: FloatFilter<"SaleItem"> | number
    total?: FloatFilter<"SaleItem"> | number
    createdAt?: DateTimeFilter<"SaleItem"> | Date | string
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    sale?: SaleOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    serialNumber?: StringFilter<"SaleItem"> | string
    quantity?: FloatFilter<"SaleItem"> | number
    unitCost?: FloatFilter<"SaleItem"> | number
    unitPrice?: FloatFilter<"SaleItem"> | number
    discount?: FloatFilter<"SaleItem"> | number
    tax?: FloatFilter<"SaleItem"> | number
    total?: FloatFilter<"SaleItem"> | number
    createdAt?: DateTimeFilter<"SaleItem"> | Date | string
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleItem"> | string
    saleId?: StringWithAggregatesFilter<"SaleItem"> | string
    productId?: StringWithAggregatesFilter<"SaleItem"> | string
    serialNumber?: StringWithAggregatesFilter<"SaleItem"> | string
    quantity?: FloatWithAggregatesFilter<"SaleItem"> | number
    unitCost?: FloatWithAggregatesFilter<"SaleItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"SaleItem"> | number
    discount?: FloatWithAggregatesFilter<"SaleItem"> | number
    tax?: FloatWithAggregatesFilter<"SaleItem"> | number
    total?: FloatWithAggregatesFilter<"SaleItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SaleItem"> | Date | string
  }

  export type SalePaymentWhereInput = {
    AND?: SalePaymentWhereInput | SalePaymentWhereInput[]
    OR?: SalePaymentWhereInput[]
    NOT?: SalePaymentWhereInput | SalePaymentWhereInput[]
    id?: StringFilter<"SalePayment"> | string
    saleId?: StringFilter<"SalePayment"> | string
    amount?: FloatFilter<"SalePayment"> | number
    method?: StringFilter<"SalePayment"> | string
    reference?: StringNullableFilter<"SalePayment"> | string | null
    createdAt?: DateTimeFilter<"SalePayment"> | Date | string
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
  }

  export type SalePaymentOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sale?: SaleOrderByWithRelationInput
  }

  export type SalePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalePaymentWhereInput | SalePaymentWhereInput[]
    OR?: SalePaymentWhereInput[]
    NOT?: SalePaymentWhereInput | SalePaymentWhereInput[]
    saleId?: StringFilter<"SalePayment"> | string
    amount?: FloatFilter<"SalePayment"> | number
    method?: StringFilter<"SalePayment"> | string
    reference?: StringNullableFilter<"SalePayment"> | string | null
    createdAt?: DateTimeFilter<"SalePayment"> | Date | string
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
  }, "id">

  export type SalePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SalePaymentCountOrderByAggregateInput
    _avg?: SalePaymentAvgOrderByAggregateInput
    _max?: SalePaymentMaxOrderByAggregateInput
    _min?: SalePaymentMinOrderByAggregateInput
    _sum?: SalePaymentSumOrderByAggregateInput
  }

  export type SalePaymentScalarWhereWithAggregatesInput = {
    AND?: SalePaymentScalarWhereWithAggregatesInput | SalePaymentScalarWhereWithAggregatesInput[]
    OR?: SalePaymentScalarWhereWithAggregatesInput[]
    NOT?: SalePaymentScalarWhereWithAggregatesInput | SalePaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalePayment"> | string
    saleId?: StringWithAggregatesFilter<"SalePayment"> | string
    amount?: FloatWithAggregatesFilter<"SalePayment"> | number
    method?: StringWithAggregatesFilter<"SalePayment"> | string
    reference?: StringNullableWithAggregatesFilter<"SalePayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SalePayment"> | Date | string
  }

  export type QuotationWhereInput = {
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    id?: StringFilter<"Quotation"> | string
    tenantId?: StringFilter<"Quotation"> | string
    shopId?: StringFilter<"Quotation"> | string
    quoteNumber?: StringFilter<"Quotation"> | string
    customerId?: StringNullableFilter<"Quotation"> | string | null
    totalAmount?: FloatFilter<"Quotation"> | number
    validUntil?: DateTimeFilter<"Quotation"> | Date | string
    status?: StringFilter<"Quotation"> | string
    createdById?: StringNullableFilter<"Quotation"> | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
    updatedAt?: DateTimeFilter<"Quotation"> | Date | string
    items?: QuotationItemListRelationFilter
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    quoteNumber?: SortOrder
    customerId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: QuotationItemOrderByRelationAggregateInput
  }

  export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quoteNumber?: string
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    tenantId?: StringFilter<"Quotation"> | string
    shopId?: StringFilter<"Quotation"> | string
    customerId?: StringNullableFilter<"Quotation"> | string | null
    totalAmount?: FloatFilter<"Quotation"> | number
    validUntil?: DateTimeFilter<"Quotation"> | Date | string
    status?: StringFilter<"Quotation"> | string
    createdById?: StringNullableFilter<"Quotation"> | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
    updatedAt?: DateTimeFilter<"Quotation"> | Date | string
    items?: QuotationItemListRelationFilter
  }, "id" | "quoteNumber">

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    quoteNumber?: SortOrder
    customerId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuotationCountOrderByAggregateInput
    _avg?: QuotationAvgOrderByAggregateInput
    _max?: QuotationMaxOrderByAggregateInput
    _min?: QuotationMinOrderByAggregateInput
    _sum?: QuotationSumOrderByAggregateInput
  }

  export type QuotationScalarWhereWithAggregatesInput = {
    AND?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    OR?: QuotationScalarWhereWithAggregatesInput[]
    NOT?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quotation"> | string
    tenantId?: StringWithAggregatesFilter<"Quotation"> | string
    shopId?: StringWithAggregatesFilter<"Quotation"> | string
    quoteNumber?: StringWithAggregatesFilter<"Quotation"> | string
    customerId?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Quotation"> | number
    validUntil?: DateTimeWithAggregatesFilter<"Quotation"> | Date | string
    status?: StringWithAggregatesFilter<"Quotation"> | string
    createdById?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quotation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quotation"> | Date | string
  }

  export type QuotationItemWhereInput = {
    AND?: QuotationItemWhereInput | QuotationItemWhereInput[]
    OR?: QuotationItemWhereInput[]
    NOT?: QuotationItemWhereInput | QuotationItemWhereInput[]
    id?: StringFilter<"QuotationItem"> | string
    quotationId?: StringFilter<"QuotationItem"> | string
    productId?: StringFilter<"QuotationItem"> | string
    quantity?: FloatFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    discount?: FloatFilter<"QuotationItem"> | number
    total?: FloatFilter<"QuotationItem"> | number
    createdAt?: DateTimeFilter<"QuotationItem"> | Date | string
    quotation?: XOR<QuotationRelationFilter, QuotationWhereInput>
  }

  export type QuotationItemOrderByWithRelationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    quotation?: QuotationOrderByWithRelationInput
  }

  export type QuotationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationItemWhereInput | QuotationItemWhereInput[]
    OR?: QuotationItemWhereInput[]
    NOT?: QuotationItemWhereInput | QuotationItemWhereInput[]
    quotationId?: StringFilter<"QuotationItem"> | string
    productId?: StringFilter<"QuotationItem"> | string
    quantity?: FloatFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    discount?: FloatFilter<"QuotationItem"> | number
    total?: FloatFilter<"QuotationItem"> | number
    createdAt?: DateTimeFilter<"QuotationItem"> | Date | string
    quotation?: XOR<QuotationRelationFilter, QuotationWhereInput>
  }, "id">

  export type QuotationItemOrderByWithAggregationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: QuotationItemCountOrderByAggregateInput
    _avg?: QuotationItemAvgOrderByAggregateInput
    _max?: QuotationItemMaxOrderByAggregateInput
    _min?: QuotationItemMinOrderByAggregateInput
    _sum?: QuotationItemSumOrderByAggregateInput
  }

  export type QuotationItemScalarWhereWithAggregatesInput = {
    AND?: QuotationItemScalarWhereWithAggregatesInput | QuotationItemScalarWhereWithAggregatesInput[]
    OR?: QuotationItemScalarWhereWithAggregatesInput[]
    NOT?: QuotationItemScalarWhereWithAggregatesInput | QuotationItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuotationItem"> | string
    quotationId?: StringWithAggregatesFilter<"QuotationItem"> | string
    productId?: StringWithAggregatesFilter<"QuotationItem"> | string
    quantity?: FloatWithAggregatesFilter<"QuotationItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"QuotationItem"> | number
    discount?: FloatWithAggregatesFilter<"QuotationItem"> | number
    total?: FloatWithAggregatesFilter<"QuotationItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuotationItem"> | Date | string
  }

  export type SaleReturnWhereInput = {
    AND?: SaleReturnWhereInput | SaleReturnWhereInput[]
    OR?: SaleReturnWhereInput[]
    NOT?: SaleReturnWhereInput | SaleReturnWhereInput[]
    id?: StringFilter<"SaleReturn"> | string
    tenantId?: StringFilter<"SaleReturn"> | string
    shopId?: StringFilter<"SaleReturn"> | string
    workPeriodId?: StringNullableFilter<"SaleReturn"> | string | null
    returnNumber?: StringFilter<"SaleReturn"> | string
    saleId?: StringNullableFilter<"SaleReturn"> | string | null
    customerId?: StringNullableFilter<"SaleReturn"> | string | null
    totalAmount?: FloatFilter<"SaleReturn"> | number
    refundAmount?: FloatFilter<"SaleReturn"> | number
    reason?: StringNullableFilter<"SaleReturn"> | string | null
    status?: StringFilter<"SaleReturn"> | string
    createdById?: StringNullableFilter<"SaleReturn"> | string | null
    createdAt?: DateTimeFilter<"SaleReturn"> | Date | string
    updatedAt?: DateTimeFilter<"SaleReturn"> | Date | string
    items?: SaleReturnItemListRelationFilter
    Sale?: XOR<SaleNullableRelationFilter, SaleWhereInput> | null
  }

  export type SaleReturnOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrderInput | SortOrder
    returnNumber?: SortOrder
    saleId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: SaleReturnItemOrderByRelationAggregateInput
    Sale?: SaleOrderByWithRelationInput
  }

  export type SaleReturnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    returnNumber?: string
    AND?: SaleReturnWhereInput | SaleReturnWhereInput[]
    OR?: SaleReturnWhereInput[]
    NOT?: SaleReturnWhereInput | SaleReturnWhereInput[]
    tenantId?: StringFilter<"SaleReturn"> | string
    shopId?: StringFilter<"SaleReturn"> | string
    workPeriodId?: StringNullableFilter<"SaleReturn"> | string | null
    saleId?: StringNullableFilter<"SaleReturn"> | string | null
    customerId?: StringNullableFilter<"SaleReturn"> | string | null
    totalAmount?: FloatFilter<"SaleReturn"> | number
    refundAmount?: FloatFilter<"SaleReturn"> | number
    reason?: StringNullableFilter<"SaleReturn"> | string | null
    status?: StringFilter<"SaleReturn"> | string
    createdById?: StringNullableFilter<"SaleReturn"> | string | null
    createdAt?: DateTimeFilter<"SaleReturn"> | Date | string
    updatedAt?: DateTimeFilter<"SaleReturn"> | Date | string
    items?: SaleReturnItemListRelationFilter
    Sale?: XOR<SaleNullableRelationFilter, SaleWhereInput> | null
  }, "id" | "returnNumber">

  export type SaleReturnOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrderInput | SortOrder
    returnNumber?: SortOrder
    saleId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SaleReturnCountOrderByAggregateInput
    _avg?: SaleReturnAvgOrderByAggregateInput
    _max?: SaleReturnMaxOrderByAggregateInput
    _min?: SaleReturnMinOrderByAggregateInput
    _sum?: SaleReturnSumOrderByAggregateInput
  }

  export type SaleReturnScalarWhereWithAggregatesInput = {
    AND?: SaleReturnScalarWhereWithAggregatesInput | SaleReturnScalarWhereWithAggregatesInput[]
    OR?: SaleReturnScalarWhereWithAggregatesInput[]
    NOT?: SaleReturnScalarWhereWithAggregatesInput | SaleReturnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleReturn"> | string
    tenantId?: StringWithAggregatesFilter<"SaleReturn"> | string
    shopId?: StringWithAggregatesFilter<"SaleReturn"> | string
    workPeriodId?: StringNullableWithAggregatesFilter<"SaleReturn"> | string | null
    returnNumber?: StringWithAggregatesFilter<"SaleReturn"> | string
    saleId?: StringNullableWithAggregatesFilter<"SaleReturn"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"SaleReturn"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"SaleReturn"> | number
    refundAmount?: FloatWithAggregatesFilter<"SaleReturn"> | number
    reason?: StringNullableWithAggregatesFilter<"SaleReturn"> | string | null
    status?: StringWithAggregatesFilter<"SaleReturn"> | string
    createdById?: StringNullableWithAggregatesFilter<"SaleReturn"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SaleReturn"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SaleReturn"> | Date | string
  }

  export type SaleReturnItemWhereInput = {
    AND?: SaleReturnItemWhereInput | SaleReturnItemWhereInput[]
    OR?: SaleReturnItemWhereInput[]
    NOT?: SaleReturnItemWhereInput | SaleReturnItemWhereInput[]
    id?: StringFilter<"SaleReturnItem"> | string
    saleReturnId?: StringFilter<"SaleReturnItem"> | string
    productId?: StringFilter<"SaleReturnItem"> | string
    serialNumber?: StringFilter<"SaleReturnItem"> | string
    quantity?: FloatFilter<"SaleReturnItem"> | number
    unitCost?: FloatFilter<"SaleReturnItem"> | number
    refundAmount?: FloatFilter<"SaleReturnItem"> | number
    createdAt?: DateTimeFilter<"SaleReturnItem"> | Date | string
    saleReturn?: XOR<SaleReturnRelationFilter, SaleReturnWhereInput>
  }

  export type SaleReturnItemOrderByWithRelationInput = {
    id?: SortOrder
    saleReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
    saleReturn?: SaleReturnOrderByWithRelationInput
  }

  export type SaleReturnItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleReturnItemWhereInput | SaleReturnItemWhereInput[]
    OR?: SaleReturnItemWhereInput[]
    NOT?: SaleReturnItemWhereInput | SaleReturnItemWhereInput[]
    saleReturnId?: StringFilter<"SaleReturnItem"> | string
    productId?: StringFilter<"SaleReturnItem"> | string
    serialNumber?: StringFilter<"SaleReturnItem"> | string
    quantity?: FloatFilter<"SaleReturnItem"> | number
    unitCost?: FloatFilter<"SaleReturnItem"> | number
    refundAmount?: FloatFilter<"SaleReturnItem"> | number
    createdAt?: DateTimeFilter<"SaleReturnItem"> | Date | string
    saleReturn?: XOR<SaleReturnRelationFilter, SaleReturnWhereInput>
  }, "id">

  export type SaleReturnItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
    _count?: SaleReturnItemCountOrderByAggregateInput
    _avg?: SaleReturnItemAvgOrderByAggregateInput
    _max?: SaleReturnItemMaxOrderByAggregateInput
    _min?: SaleReturnItemMinOrderByAggregateInput
    _sum?: SaleReturnItemSumOrderByAggregateInput
  }

  export type SaleReturnItemScalarWhereWithAggregatesInput = {
    AND?: SaleReturnItemScalarWhereWithAggregatesInput | SaleReturnItemScalarWhereWithAggregatesInput[]
    OR?: SaleReturnItemScalarWhereWithAggregatesInput[]
    NOT?: SaleReturnItemScalarWhereWithAggregatesInput | SaleReturnItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleReturnItem"> | string
    saleReturnId?: StringWithAggregatesFilter<"SaleReturnItem"> | string
    productId?: StringWithAggregatesFilter<"SaleReturnItem"> | string
    serialNumber?: StringWithAggregatesFilter<"SaleReturnItem"> | string
    quantity?: FloatWithAggregatesFilter<"SaleReturnItem"> | number
    unitCost?: FloatWithAggregatesFilter<"SaleReturnItem"> | number
    refundAmount?: FloatWithAggregatesFilter<"SaleReturnItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SaleReturnItem"> | Date | string
  }

  export type BonusWhereInput = {
    AND?: BonusWhereInput | BonusWhereInput[]
    OR?: BonusWhereInput[]
    NOT?: BonusWhereInput | BonusWhereInput[]
    id?: StringFilter<"Bonus"> | string
    tenantId?: StringFilter<"Bonus"> | string
    shopId?: StringFilter<"Bonus"> | string
    customerId?: StringNullableFilter<"Bonus"> | string | null
    amount?: FloatFilter<"Bonus"> | number
    type?: StringFilter<"Bonus"> | string
    description?: StringNullableFilter<"Bonus"> | string | null
    createdAt?: DateTimeFilter<"Bonus"> | Date | string
  }

  export type BonusOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type BonusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BonusWhereInput | BonusWhereInput[]
    OR?: BonusWhereInput[]
    NOT?: BonusWhereInput | BonusWhereInput[]
    tenantId?: StringFilter<"Bonus"> | string
    shopId?: StringFilter<"Bonus"> | string
    customerId?: StringNullableFilter<"Bonus"> | string | null
    amount?: FloatFilter<"Bonus"> | number
    type?: StringFilter<"Bonus"> | string
    description?: StringNullableFilter<"Bonus"> | string | null
    createdAt?: DateTimeFilter<"Bonus"> | Date | string
  }, "id">

  export type BonusOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BonusCountOrderByAggregateInput
    _avg?: BonusAvgOrderByAggregateInput
    _max?: BonusMaxOrderByAggregateInput
    _min?: BonusMinOrderByAggregateInput
    _sum?: BonusSumOrderByAggregateInput
  }

  export type BonusScalarWhereWithAggregatesInput = {
    AND?: BonusScalarWhereWithAggregatesInput | BonusScalarWhereWithAggregatesInput[]
    OR?: BonusScalarWhereWithAggregatesInput[]
    NOT?: BonusScalarWhereWithAggregatesInput | BonusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bonus"> | string
    tenantId?: StringWithAggregatesFilter<"Bonus"> | string
    shopId?: StringWithAggregatesFilter<"Bonus"> | string
    customerId?: StringNullableWithAggregatesFilter<"Bonus"> | string | null
    amount?: FloatWithAggregatesFilter<"Bonus"> | number
    type?: StringWithAggregatesFilter<"Bonus"> | string
    description?: StringNullableWithAggregatesFilter<"Bonus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bonus"> | Date | string
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

  export type SaleCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemCreateNestedManyWithoutSaleInput
    payments?: SalePaymentCreateNestedManyWithoutSaleInput
    returns?: SaleReturnCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    payments?: SalePaymentUncheckedCreateNestedManyWithoutSaleInput
    returns?: SaleReturnUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    payments?: SalePaymentUpdateManyWithoutSaleNestedInput
    returns?: SaleReturnUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    payments?: SalePaymentUncheckedUpdateManyWithoutSaleNestedInput
    returns?: SaleReturnUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount?: number
    tax?: number
    total: number
    createdAt?: Date | string
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: string
    saleId: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount?: number
    tax?: number
    total: number
    createdAt?: Date | string
  }

  export type SaleItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManyInput = {
    id?: string
    saleId: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount?: number
    tax?: number
    total: number
    createdAt?: Date | string
  }

  export type SaleItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePaymentCreateInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    sale: SaleCreateNestedOneWithoutPaymentsInput
  }

  export type SalePaymentUncheckedCreateInput = {
    id?: string
    saleId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SalePaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SalePaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePaymentCreateManyInput = {
    id?: string
    saleId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SalePaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    quoteNumber: string
    customerId?: string | null
    totalAmount: number
    validUntil: Date | string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuotationItemCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    quoteNumber: string
    customerId?: string | null
    totalAmount: number
    validUntil: Date | string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: QuotationItemUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    quoteNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuotationItemUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    quoteNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    quoteNumber: string
    customerId?: string | null
    totalAmount: number
    validUntil: Date | string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    quoteNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    quoteNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemCreateInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    discount?: number
    total: number
    createdAt?: Date | string
    quotation: QuotationCreateNestedOneWithoutItemsInput
  }

  export type QuotationItemUncheckedCreateInput = {
    id?: string
    quotationId: string
    productId: string
    quantity: number
    unitPrice: number
    discount?: number
    total: number
    createdAt?: Date | string
  }

  export type QuotationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotation?: QuotationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type QuotationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemCreateManyInput = {
    id?: string
    quotationId: string
    productId: string
    quantity: number
    unitPrice: number
    discount?: number
    total: number
    createdAt?: Date | string
  }

  export type QuotationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleReturnItemCreateNestedManyWithoutSaleReturnInput
    Sale?: SaleCreateNestedOneWithoutReturnsInput
  }

  export type SaleReturnUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    saleId?: string | null
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInput
  }

  export type SaleReturnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleReturnItemUpdateManyWithoutSaleReturnNestedInput
    Sale?: SaleUpdateOneWithoutReturnsNestedInput
  }

  export type SaleReturnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    saleId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleReturnItemUncheckedUpdateManyWithoutSaleReturnNestedInput
  }

  export type SaleReturnCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    saleId?: string | null
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleReturnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    saleId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemCreateInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt?: Date | string
    saleReturn: SaleReturnCreateNestedOneWithoutItemsInput
  }

  export type SaleReturnItemUncheckedCreateInput = {
    id?: string
    saleReturnId: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type SaleReturnItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleReturn?: SaleReturnUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleReturnItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleReturnId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemCreateManyInput = {
    id?: string
    saleReturnId: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type SaleReturnItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleReturnId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    customerId?: string | null
    amount: number
    type: string
    description?: string | null
    createdAt?: Date | string
  }

  export type BonusUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    customerId?: string | null
    amount: number
    type: string
    description?: string | null
    createdAt?: Date | string
  }

  export type BonusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    customerId?: string | null
    amount: number
    type: string
    description?: string | null
    createdAt?: Date | string
  }

  export type BonusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type SalePaymentListRelationFilter = {
    every?: SalePaymentWhereInput
    some?: SalePaymentWhereInput
    none?: SalePaymentWhereInput
  }

  export type SaleReturnListRelationFilter = {
    every?: SaleReturnWhereInput
    some?: SaleReturnWhereInput
    none?: SaleReturnWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleReturnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
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

  export type SaleRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type SalePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type SalePaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type SalePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type SalePaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type QuotationItemListRelationFilter = {
    every?: QuotationItemWhereInput
    some?: QuotationItemWhereInput
    none?: QuotationItemWhereInput
  }

  export type QuotationItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    quoteNumber?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuotationAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type QuotationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    quoteNumber?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    quoteNumber?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    validUntil?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuotationSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type QuotationRelationFilter = {
    is?: QuotationWhereInput
    isNot?: QuotationWhereInput
  }

  export type QuotationItemCountOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
  }

  export type QuotationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationItemMinOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    total?: SortOrder
  }

  export type SaleReturnItemListRelationFilter = {
    every?: SaleReturnItemWhereInput
    some?: SaleReturnItemWhereInput
    none?: SaleReturnItemWhereInput
  }

  export type SaleNullableRelationFilter = {
    is?: SaleWhereInput | null
    isNot?: SaleWhereInput | null
  }

  export type SaleReturnItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleReturnCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    returnNumber?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleReturnAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    refundAmount?: SortOrder
  }

  export type SaleReturnMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    returnNumber?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleReturnMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    returnNumber?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    refundAmount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SaleReturnSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    refundAmount?: SortOrder
  }

  export type SaleReturnRelationFilter = {
    is?: SaleReturnWhereInput
    isNot?: SaleReturnWhereInput
  }

  export type SaleReturnItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleReturnItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
  }

  export type SaleReturnItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleReturnItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleReturnId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleReturnItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    refundAmount?: SortOrder
  }

  export type BonusCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BonusAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BonusMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BonusMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BonusSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SalePaymentCreateNestedManyWithoutSaleInput = {
    create?: XOR<SalePaymentCreateWithoutSaleInput, SalePaymentUncheckedCreateWithoutSaleInput> | SalePaymentCreateWithoutSaleInput[] | SalePaymentUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePaymentCreateOrConnectWithoutSaleInput | SalePaymentCreateOrConnectWithoutSaleInput[]
    createMany?: SalePaymentCreateManySaleInputEnvelope
    connect?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
  }

  export type SaleReturnCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleReturnCreateWithoutSaleInput, SaleReturnUncheckedCreateWithoutSaleInput> | SaleReturnCreateWithoutSaleInput[] | SaleReturnUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleReturnCreateOrConnectWithoutSaleInput | SaleReturnCreateOrConnectWithoutSaleInput[]
    createMany?: SaleReturnCreateManySaleInputEnvelope
    connect?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SalePaymentUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SalePaymentCreateWithoutSaleInput, SalePaymentUncheckedCreateWithoutSaleInput> | SalePaymentCreateWithoutSaleInput[] | SalePaymentUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePaymentCreateOrConnectWithoutSaleInput | SalePaymentCreateOrConnectWithoutSaleInput[]
    createMany?: SalePaymentCreateManySaleInputEnvelope
    connect?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
  }

  export type SaleReturnUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleReturnCreateWithoutSaleInput, SaleReturnUncheckedCreateWithoutSaleInput> | SaleReturnCreateWithoutSaleInput[] | SaleReturnUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleReturnCreateOrConnectWithoutSaleInput | SaleReturnCreateOrConnectWithoutSaleInput[]
    createMany?: SaleReturnCreateManySaleInputEnvelope
    connect?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
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

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SalePaymentUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SalePaymentCreateWithoutSaleInput, SalePaymentUncheckedCreateWithoutSaleInput> | SalePaymentCreateWithoutSaleInput[] | SalePaymentUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePaymentCreateOrConnectWithoutSaleInput | SalePaymentCreateOrConnectWithoutSaleInput[]
    upsert?: SalePaymentUpsertWithWhereUniqueWithoutSaleInput | SalePaymentUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SalePaymentCreateManySaleInputEnvelope
    set?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    disconnect?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    delete?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    connect?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    update?: SalePaymentUpdateWithWhereUniqueWithoutSaleInput | SalePaymentUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SalePaymentUpdateManyWithWhereWithoutSaleInput | SalePaymentUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SalePaymentScalarWhereInput | SalePaymentScalarWhereInput[]
  }

  export type SaleReturnUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleReturnCreateWithoutSaleInput, SaleReturnUncheckedCreateWithoutSaleInput> | SaleReturnCreateWithoutSaleInput[] | SaleReturnUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleReturnCreateOrConnectWithoutSaleInput | SaleReturnCreateOrConnectWithoutSaleInput[]
    upsert?: SaleReturnUpsertWithWhereUniqueWithoutSaleInput | SaleReturnUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleReturnCreateManySaleInputEnvelope
    set?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    disconnect?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    delete?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    connect?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    update?: SaleReturnUpdateWithWhereUniqueWithoutSaleInput | SaleReturnUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleReturnUpdateManyWithWhereWithoutSaleInput | SaleReturnUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleReturnScalarWhereInput | SaleReturnScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SalePaymentUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SalePaymentCreateWithoutSaleInput, SalePaymentUncheckedCreateWithoutSaleInput> | SalePaymentCreateWithoutSaleInput[] | SalePaymentUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalePaymentCreateOrConnectWithoutSaleInput | SalePaymentCreateOrConnectWithoutSaleInput[]
    upsert?: SalePaymentUpsertWithWhereUniqueWithoutSaleInput | SalePaymentUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SalePaymentCreateManySaleInputEnvelope
    set?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    disconnect?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    delete?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    connect?: SalePaymentWhereUniqueInput | SalePaymentWhereUniqueInput[]
    update?: SalePaymentUpdateWithWhereUniqueWithoutSaleInput | SalePaymentUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SalePaymentUpdateManyWithWhereWithoutSaleInput | SalePaymentUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SalePaymentScalarWhereInput | SalePaymentScalarWhereInput[]
  }

  export type SaleReturnUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleReturnCreateWithoutSaleInput, SaleReturnUncheckedCreateWithoutSaleInput> | SaleReturnCreateWithoutSaleInput[] | SaleReturnUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleReturnCreateOrConnectWithoutSaleInput | SaleReturnCreateOrConnectWithoutSaleInput[]
    upsert?: SaleReturnUpsertWithWhereUniqueWithoutSaleInput | SaleReturnUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleReturnCreateManySaleInputEnvelope
    set?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    disconnect?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    delete?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    connect?: SaleReturnWhereUniqueInput | SaleReturnWhereUniqueInput[]
    update?: SaleReturnUpdateWithWhereUniqueWithoutSaleInput | SaleReturnUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleReturnUpdateManyWithWhereWithoutSaleInput | SaleReturnUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleReturnScalarWhereInput | SaleReturnScalarWhereInput[]
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SaleCreateWithoutPaymentsInput, SaleUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutPaymentsInput
    connect?: SaleWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SaleCreateWithoutPaymentsInput, SaleUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutPaymentsInput
    upsert?: SaleUpsertWithoutPaymentsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutPaymentsInput, SaleUpdateWithoutPaymentsInput>, SaleUncheckedUpdateWithoutPaymentsInput>
  }

  export type QuotationItemCreateNestedManyWithoutQuotationInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
  }

  export type QuotationItemUncheckedCreateNestedManyWithoutQuotationInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
  }

  export type QuotationItemUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    upsert?: QuotationItemUpsertWithWhereUniqueWithoutQuotationInput | QuotationItemUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    set?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    disconnect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    delete?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    update?: QuotationItemUpdateWithWhereUniqueWithoutQuotationInput | QuotationItemUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: QuotationItemUpdateManyWithWhereWithoutQuotationInput | QuotationItemUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
  }

  export type QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    upsert?: QuotationItemUpsertWithWhereUniqueWithoutQuotationInput | QuotationItemUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    set?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    disconnect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    delete?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    update?: QuotationItemUpdateWithWhereUniqueWithoutQuotationInput | QuotationItemUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: QuotationItemUpdateManyWithWhereWithoutQuotationInput | QuotationItemUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
  }

  export type QuotationCreateNestedOneWithoutItemsInput = {
    create?: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutItemsInput
    connect?: QuotationWhereUniqueInput
  }

  export type QuotationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutItemsInput
    upsert?: QuotationUpsertWithoutItemsInput
    connect?: QuotationWhereUniqueInput
    update?: XOR<XOR<QuotationUpdateToOneWithWhereWithoutItemsInput, QuotationUpdateWithoutItemsInput>, QuotationUncheckedUpdateWithoutItemsInput>
  }

  export type SaleReturnItemCreateNestedManyWithoutSaleReturnInput = {
    create?: XOR<SaleReturnItemCreateWithoutSaleReturnInput, SaleReturnItemUncheckedCreateWithoutSaleReturnInput> | SaleReturnItemCreateWithoutSaleReturnInput[] | SaleReturnItemUncheckedCreateWithoutSaleReturnInput[]
    connectOrCreate?: SaleReturnItemCreateOrConnectWithoutSaleReturnInput | SaleReturnItemCreateOrConnectWithoutSaleReturnInput[]
    createMany?: SaleReturnItemCreateManySaleReturnInputEnvelope
    connect?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
  }

  export type SaleCreateNestedOneWithoutReturnsInput = {
    create?: XOR<SaleCreateWithoutReturnsInput, SaleUncheckedCreateWithoutReturnsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutReturnsInput
    connect?: SaleWhereUniqueInput
  }

  export type SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInput = {
    create?: XOR<SaleReturnItemCreateWithoutSaleReturnInput, SaleReturnItemUncheckedCreateWithoutSaleReturnInput> | SaleReturnItemCreateWithoutSaleReturnInput[] | SaleReturnItemUncheckedCreateWithoutSaleReturnInput[]
    connectOrCreate?: SaleReturnItemCreateOrConnectWithoutSaleReturnInput | SaleReturnItemCreateOrConnectWithoutSaleReturnInput[]
    createMany?: SaleReturnItemCreateManySaleReturnInputEnvelope
    connect?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
  }

  export type SaleReturnItemUpdateManyWithoutSaleReturnNestedInput = {
    create?: XOR<SaleReturnItemCreateWithoutSaleReturnInput, SaleReturnItemUncheckedCreateWithoutSaleReturnInput> | SaleReturnItemCreateWithoutSaleReturnInput[] | SaleReturnItemUncheckedCreateWithoutSaleReturnInput[]
    connectOrCreate?: SaleReturnItemCreateOrConnectWithoutSaleReturnInput | SaleReturnItemCreateOrConnectWithoutSaleReturnInput[]
    upsert?: SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput | SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput[]
    createMany?: SaleReturnItemCreateManySaleReturnInputEnvelope
    set?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    disconnect?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    delete?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    connect?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    update?: SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput | SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput[]
    updateMany?: SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput | SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput[]
    deleteMany?: SaleReturnItemScalarWhereInput | SaleReturnItemScalarWhereInput[]
  }

  export type SaleUpdateOneWithoutReturnsNestedInput = {
    create?: XOR<SaleCreateWithoutReturnsInput, SaleUncheckedCreateWithoutReturnsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutReturnsInput
    upsert?: SaleUpsertWithoutReturnsInput
    disconnect?: SaleWhereInput | boolean
    delete?: SaleWhereInput | boolean
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutReturnsInput, SaleUpdateWithoutReturnsInput>, SaleUncheckedUpdateWithoutReturnsInput>
  }

  export type SaleReturnItemUncheckedUpdateManyWithoutSaleReturnNestedInput = {
    create?: XOR<SaleReturnItemCreateWithoutSaleReturnInput, SaleReturnItemUncheckedCreateWithoutSaleReturnInput> | SaleReturnItemCreateWithoutSaleReturnInput[] | SaleReturnItemUncheckedCreateWithoutSaleReturnInput[]
    connectOrCreate?: SaleReturnItemCreateOrConnectWithoutSaleReturnInput | SaleReturnItemCreateOrConnectWithoutSaleReturnInput[]
    upsert?: SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput | SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput[]
    createMany?: SaleReturnItemCreateManySaleReturnInputEnvelope
    set?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    disconnect?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    delete?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    connect?: SaleReturnItemWhereUniqueInput | SaleReturnItemWhereUniqueInput[]
    update?: SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput | SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput[]
    updateMany?: SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput | SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput[]
    deleteMany?: SaleReturnItemScalarWhereInput | SaleReturnItemScalarWhereInput[]
  }

  export type SaleReturnCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleReturnCreateWithoutItemsInput, SaleReturnUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleReturnCreateOrConnectWithoutItemsInput
    connect?: SaleReturnWhereUniqueInput
  }

  export type SaleReturnUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleReturnCreateWithoutItemsInput, SaleReturnUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleReturnCreateOrConnectWithoutItemsInput
    upsert?: SaleReturnUpsertWithoutItemsInput
    connect?: SaleReturnWhereUniqueInput
    update?: XOR<XOR<SaleReturnUpdateToOneWithWhereWithoutItemsInput, SaleReturnUpdateWithoutItemsInput>, SaleReturnUncheckedUpdateWithoutItemsInput>
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

  export type SaleItemCreateWithoutSaleInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount?: number
    tax?: number
    total: number
    createdAt?: Date | string
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount?: number
    tax?: number
    total: number
    createdAt?: Date | string
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type SalePaymentCreateWithoutSaleInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SalePaymentUncheckedCreateWithoutSaleInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SalePaymentCreateOrConnectWithoutSaleInput = {
    where: SalePaymentWhereUniqueInput
    create: XOR<SalePaymentCreateWithoutSaleInput, SalePaymentUncheckedCreateWithoutSaleInput>
  }

  export type SalePaymentCreateManySaleInputEnvelope = {
    data: SalePaymentCreateManySaleInput | SalePaymentCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type SaleReturnCreateWithoutSaleInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleReturnItemCreateNestedManyWithoutSaleReturnInput
  }

  export type SaleReturnUncheckedCreateWithoutSaleInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInput
  }

  export type SaleReturnCreateOrConnectWithoutSaleInput = {
    where: SaleReturnWhereUniqueInput
    create: XOR<SaleReturnCreateWithoutSaleInput, SaleReturnUncheckedCreateWithoutSaleInput>
  }

  export type SaleReturnCreateManySaleInputEnvelope = {
    data: SaleReturnCreateManySaleInput | SaleReturnCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    serialNumber?: StringFilter<"SaleItem"> | string
    quantity?: FloatFilter<"SaleItem"> | number
    unitCost?: FloatFilter<"SaleItem"> | number
    unitPrice?: FloatFilter<"SaleItem"> | number
    discount?: FloatFilter<"SaleItem"> | number
    tax?: FloatFilter<"SaleItem"> | number
    total?: FloatFilter<"SaleItem"> | number
    createdAt?: DateTimeFilter<"SaleItem"> | Date | string
  }

  export type SalePaymentUpsertWithWhereUniqueWithoutSaleInput = {
    where: SalePaymentWhereUniqueInput
    update: XOR<SalePaymentUpdateWithoutSaleInput, SalePaymentUncheckedUpdateWithoutSaleInput>
    create: XOR<SalePaymentCreateWithoutSaleInput, SalePaymentUncheckedCreateWithoutSaleInput>
  }

  export type SalePaymentUpdateWithWhereUniqueWithoutSaleInput = {
    where: SalePaymentWhereUniqueInput
    data: XOR<SalePaymentUpdateWithoutSaleInput, SalePaymentUncheckedUpdateWithoutSaleInput>
  }

  export type SalePaymentUpdateManyWithWhereWithoutSaleInput = {
    where: SalePaymentScalarWhereInput
    data: XOR<SalePaymentUpdateManyMutationInput, SalePaymentUncheckedUpdateManyWithoutSaleInput>
  }

  export type SalePaymentScalarWhereInput = {
    AND?: SalePaymentScalarWhereInput | SalePaymentScalarWhereInput[]
    OR?: SalePaymentScalarWhereInput[]
    NOT?: SalePaymentScalarWhereInput | SalePaymentScalarWhereInput[]
    id?: StringFilter<"SalePayment"> | string
    saleId?: StringFilter<"SalePayment"> | string
    amount?: FloatFilter<"SalePayment"> | number
    method?: StringFilter<"SalePayment"> | string
    reference?: StringNullableFilter<"SalePayment"> | string | null
    createdAt?: DateTimeFilter<"SalePayment"> | Date | string
  }

  export type SaleReturnUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleReturnWhereUniqueInput
    update: XOR<SaleReturnUpdateWithoutSaleInput, SaleReturnUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleReturnCreateWithoutSaleInput, SaleReturnUncheckedCreateWithoutSaleInput>
  }

  export type SaleReturnUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleReturnWhereUniqueInput
    data: XOR<SaleReturnUpdateWithoutSaleInput, SaleReturnUncheckedUpdateWithoutSaleInput>
  }

  export type SaleReturnUpdateManyWithWhereWithoutSaleInput = {
    where: SaleReturnScalarWhereInput
    data: XOR<SaleReturnUpdateManyMutationInput, SaleReturnUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleReturnScalarWhereInput = {
    AND?: SaleReturnScalarWhereInput | SaleReturnScalarWhereInput[]
    OR?: SaleReturnScalarWhereInput[]
    NOT?: SaleReturnScalarWhereInput | SaleReturnScalarWhereInput[]
    id?: StringFilter<"SaleReturn"> | string
    tenantId?: StringFilter<"SaleReturn"> | string
    shopId?: StringFilter<"SaleReturn"> | string
    workPeriodId?: StringNullableFilter<"SaleReturn"> | string | null
    returnNumber?: StringFilter<"SaleReturn"> | string
    saleId?: StringNullableFilter<"SaleReturn"> | string | null
    customerId?: StringNullableFilter<"SaleReturn"> | string | null
    totalAmount?: FloatFilter<"SaleReturn"> | number
    refundAmount?: FloatFilter<"SaleReturn"> | number
    reason?: StringNullableFilter<"SaleReturn"> | string | null
    status?: StringFilter<"SaleReturn"> | string
    createdById?: StringNullableFilter<"SaleReturn"> | string | null
    createdAt?: DateTimeFilter<"SaleReturn"> | Date | string
    updatedAt?: DateTimeFilter<"SaleReturn"> | Date | string
  }

  export type SaleCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: SalePaymentCreateNestedManyWithoutSaleInput
    returns?: SaleReturnCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: SalePaymentUncheckedCreateNestedManyWithoutSaleInput
    returns?: SaleReturnUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SalePaymentUpdateManyWithoutSaleNestedInput
    returns?: SaleReturnUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SalePaymentUncheckedUpdateManyWithoutSaleNestedInput
    returns?: SaleReturnUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemCreateNestedManyWithoutSaleInput
    returns?: SaleReturnCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    returns?: SaleReturnUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutPaymentsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutPaymentsInput, SaleUncheckedCreateWithoutPaymentsInput>
  }

  export type SaleUpsertWithoutPaymentsInput = {
    update: XOR<SaleUpdateWithoutPaymentsInput, SaleUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SaleCreateWithoutPaymentsInput, SaleUncheckedCreateWithoutPaymentsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutPaymentsInput, SaleUncheckedUpdateWithoutPaymentsInput>
  }

  export type SaleUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    returns?: SaleReturnUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    returns?: SaleReturnUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type QuotationItemCreateWithoutQuotationInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    discount?: number
    total: number
    createdAt?: Date | string
  }

  export type QuotationItemUncheckedCreateWithoutQuotationInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    discount?: number
    total: number
    createdAt?: Date | string
  }

  export type QuotationItemCreateOrConnectWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    create: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput>
  }

  export type QuotationItemCreateManyQuotationInputEnvelope = {
    data: QuotationItemCreateManyQuotationInput | QuotationItemCreateManyQuotationInput[]
    skipDuplicates?: boolean
  }

  export type QuotationItemUpsertWithWhereUniqueWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    update: XOR<QuotationItemUpdateWithoutQuotationInput, QuotationItemUncheckedUpdateWithoutQuotationInput>
    create: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput>
  }

  export type QuotationItemUpdateWithWhereUniqueWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    data: XOR<QuotationItemUpdateWithoutQuotationInput, QuotationItemUncheckedUpdateWithoutQuotationInput>
  }

  export type QuotationItemUpdateManyWithWhereWithoutQuotationInput = {
    where: QuotationItemScalarWhereInput
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyWithoutQuotationInput>
  }

  export type QuotationItemScalarWhereInput = {
    AND?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
    OR?: QuotationItemScalarWhereInput[]
    NOT?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
    id?: StringFilter<"QuotationItem"> | string
    quotationId?: StringFilter<"QuotationItem"> | string
    productId?: StringFilter<"QuotationItem"> | string
    quantity?: FloatFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    discount?: FloatFilter<"QuotationItem"> | number
    total?: FloatFilter<"QuotationItem"> | number
    createdAt?: DateTimeFilter<"QuotationItem"> | Date | string
  }

  export type QuotationCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    quoteNumber: string
    customerId?: string | null
    totalAmount: number
    validUntil: Date | string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuotationUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    quoteNumber: string
    customerId?: string | null
    totalAmount: number
    validUntil: Date | string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuotationCreateOrConnectWithoutItemsInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
  }

  export type QuotationUpsertWithoutItemsInput = {
    update: XOR<QuotationUpdateWithoutItemsInput, QuotationUncheckedUpdateWithoutItemsInput>
    create: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    where?: QuotationWhereInput
  }

  export type QuotationUpdateToOneWithWhereWithoutItemsInput = {
    where?: QuotationWhereInput
    data: XOR<QuotationUpdateWithoutItemsInput, QuotationUncheckedUpdateWithoutItemsInput>
  }

  export type QuotationUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    quoteNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    quoteNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemCreateWithoutSaleReturnInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type SaleReturnItemUncheckedCreateWithoutSaleReturnInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type SaleReturnItemCreateOrConnectWithoutSaleReturnInput = {
    where: SaleReturnItemWhereUniqueInput
    create: XOR<SaleReturnItemCreateWithoutSaleReturnInput, SaleReturnItemUncheckedCreateWithoutSaleReturnInput>
  }

  export type SaleReturnItemCreateManySaleReturnInputEnvelope = {
    data: SaleReturnItemCreateManySaleReturnInput | SaleReturnItemCreateManySaleReturnInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutReturnsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemCreateNestedManyWithoutSaleInput
    payments?: SalePaymentCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutReturnsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    orderNumber: string
    customerId?: string | null
    totalAmount: number
    totalCost: number
    profit: number
    paymentMethod?: string
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    payments?: SalePaymentUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutReturnsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutReturnsInput, SaleUncheckedCreateWithoutReturnsInput>
  }

  export type SaleReturnItemUpsertWithWhereUniqueWithoutSaleReturnInput = {
    where: SaleReturnItemWhereUniqueInput
    update: XOR<SaleReturnItemUpdateWithoutSaleReturnInput, SaleReturnItemUncheckedUpdateWithoutSaleReturnInput>
    create: XOR<SaleReturnItemCreateWithoutSaleReturnInput, SaleReturnItemUncheckedCreateWithoutSaleReturnInput>
  }

  export type SaleReturnItemUpdateWithWhereUniqueWithoutSaleReturnInput = {
    where: SaleReturnItemWhereUniqueInput
    data: XOR<SaleReturnItemUpdateWithoutSaleReturnInput, SaleReturnItemUncheckedUpdateWithoutSaleReturnInput>
  }

  export type SaleReturnItemUpdateManyWithWhereWithoutSaleReturnInput = {
    where: SaleReturnItemScalarWhereInput
    data: XOR<SaleReturnItemUpdateManyMutationInput, SaleReturnItemUncheckedUpdateManyWithoutSaleReturnInput>
  }

  export type SaleReturnItemScalarWhereInput = {
    AND?: SaleReturnItemScalarWhereInput | SaleReturnItemScalarWhereInput[]
    OR?: SaleReturnItemScalarWhereInput[]
    NOT?: SaleReturnItemScalarWhereInput | SaleReturnItemScalarWhereInput[]
    id?: StringFilter<"SaleReturnItem"> | string
    saleReturnId?: StringFilter<"SaleReturnItem"> | string
    productId?: StringFilter<"SaleReturnItem"> | string
    serialNumber?: StringFilter<"SaleReturnItem"> | string
    quantity?: FloatFilter<"SaleReturnItem"> | number
    unitCost?: FloatFilter<"SaleReturnItem"> | number
    refundAmount?: FloatFilter<"SaleReturnItem"> | number
    createdAt?: DateTimeFilter<"SaleReturnItem"> | Date | string
  }

  export type SaleUpsertWithoutReturnsInput = {
    update: XOR<SaleUpdateWithoutReturnsInput, SaleUncheckedUpdateWithoutReturnsInput>
    create: XOR<SaleCreateWithoutReturnsInput, SaleUncheckedCreateWithoutReturnsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutReturnsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutReturnsInput, SaleUncheckedUpdateWithoutReturnsInput>
  }

  export type SaleUpdateWithoutReturnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    payments?: SalePaymentUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutReturnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    payments?: SalePaymentUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleReturnCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Sale?: SaleCreateNestedOneWithoutReturnsInput
  }

  export type SaleReturnUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    saleId?: string | null
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleReturnCreateOrConnectWithoutItemsInput = {
    where: SaleReturnWhereUniqueInput
    create: XOR<SaleReturnCreateWithoutItemsInput, SaleReturnUncheckedCreateWithoutItemsInput>
  }

  export type SaleReturnUpsertWithoutItemsInput = {
    update: XOR<SaleReturnUpdateWithoutItemsInput, SaleReturnUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleReturnCreateWithoutItemsInput, SaleReturnUncheckedCreateWithoutItemsInput>
    where?: SaleReturnWhereInput
  }

  export type SaleReturnUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleReturnWhereInput
    data: XOR<SaleReturnUpdateWithoutItemsInput, SaleReturnUncheckedUpdateWithoutItemsInput>
  }

  export type SaleReturnUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sale?: SaleUpdateOneWithoutReturnsNestedInput
  }

  export type SaleReturnUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    saleId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    unitPrice: number
    discount?: number
    tax?: number
    total: number
    createdAt?: Date | string
  }

  export type SalePaymentCreateManySaleInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SaleReturnCreateManySaleInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    returnNumber: string
    customerId?: string | null
    totalAmount: number
    refundAmount: number
    reason?: string | null
    status?: string
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePaymentUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePaymentUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePaymentUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleReturnItemUpdateManyWithoutSaleReturnNestedInput
  }

  export type SaleReturnUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleReturnItemUncheckedUpdateManyWithoutSaleReturnNestedInput
  }

  export type SaleReturnUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    returnNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemCreateManyQuotationInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    discount?: number
    total: number
    createdAt?: Date | string
  }

  export type QuotationItemUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemUncheckedUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationItemUncheckedUpdateManyWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemCreateManySaleReturnInput = {
    id?: string
    productId: string
    serialNumber: string
    quantity: number
    unitCost: number
    refundAmount: number
    createdAt?: Date | string
  }

  export type SaleReturnItemUpdateWithoutSaleReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemUncheckedUpdateWithoutSaleReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleReturnItemUncheckedUpdateManyWithoutSaleReturnInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    refundAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SaleCountOutputTypeDefaultArgs instead
     */
    export type SaleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuotationCountOutputTypeDefaultArgs instead
     */
    export type QuotationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuotationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleReturnCountOutputTypeDefaultArgs instead
     */
    export type SaleReturnCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleReturnCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleDefaultArgs instead
     */
    export type SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleItemDefaultArgs instead
     */
    export type SaleItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalePaymentDefaultArgs instead
     */
    export type SalePaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalePaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuotationDefaultArgs instead
     */
    export type QuotationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuotationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuotationItemDefaultArgs instead
     */
    export type QuotationItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuotationItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleReturnDefaultArgs instead
     */
    export type SaleReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleReturnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleReturnItemDefaultArgs instead
     */
    export type SaleReturnItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleReturnItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BonusDefaultArgs instead
     */
    export type BonusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BonusDefaultArgs<ExtArgs>
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