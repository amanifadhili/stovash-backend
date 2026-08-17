
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
 * Model LedgerAccount
 * 
 */
export type LedgerAccount = $Result.DefaultSelection<Prisma.$LedgerAccountPayload>
/**
 * Model JournalEntry
 * 
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>
/**
 * Model PostingBatch
 * 
 */
export type PostingBatch = $Result.DefaultSelection<Prisma.$PostingBatchPayload>
/**
 * Model LedgerEntry
 * 
 */
export type LedgerEntry = $Result.DefaultSelection<Prisma.$LedgerEntryPayload>
/**
 * Model WorkPeriod
 * 
 */
export type WorkPeriod = $Result.DefaultSelection<Prisma.$WorkPeriodPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model FinancialTransaction
 * Canonical money event. Phase 2 persists the typed row only — no journal legs,
 * no LedgerAccount.balance / till updates. Amount is integer RWF cents (BigInt).
 */
export type FinancialTransaction = $Result.DefaultSelection<Prisma.$FinancialTransactionPayload>
/**
 * Model ChartAccount
 * Phase 4 engine chart. Balances are derived from PostedJournalLine, never stored.
 */
export type ChartAccount = $Result.DefaultSelection<Prisma.$ChartAccountPayload>
/**
 * Model PostedJournal
 * 
 */
export type PostedJournal = $Result.DefaultSelection<Prisma.$PostedJournalPayload>
/**
 * Model PostedJournalLine
 * 
 */
export type PostedJournalLine = $Result.DefaultSelection<Prisma.$PostedJournalLinePayload>
/**
 * Model Obligation
 * 
 */
export type Obligation = $Result.DefaultSelection<Prisma.$ObligationPayload>
/**
 * Model ProfitAllocation
 * 
 */
export type ProfitAllocation = $Result.DefaultSelection<Prisma.$ProfitAllocationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LedgerAccounts
 * const ledgerAccounts = await prisma.ledgerAccount.findMany()
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
   * // Fetch zero or more LedgerAccounts
   * const ledgerAccounts = await prisma.ledgerAccount.findMany()
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
   * `prisma.ledgerAccount`: Exposes CRUD operations for the **LedgerAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerAccounts
    * const ledgerAccounts = await prisma.ledgerAccount.findMany()
    * ```
    */
  get ledgerAccount(): Prisma.LedgerAccountDelegate<ExtArgs>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs>;

  /**
   * `prisma.postingBatch`: Exposes CRUD operations for the **PostingBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostingBatches
    * const postingBatches = await prisma.postingBatch.findMany()
    * ```
    */
  get postingBatch(): Prisma.PostingBatchDelegate<ExtArgs>;

  /**
   * `prisma.ledgerEntry`: Exposes CRUD operations for the **LedgerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerEntries
    * const ledgerEntries = await prisma.ledgerEntry.findMany()
    * ```
    */
  get ledgerEntry(): Prisma.LedgerEntryDelegate<ExtArgs>;

  /**
   * `prisma.workPeriod`: Exposes CRUD operations for the **WorkPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkPeriods
    * const workPeriods = await prisma.workPeriod.findMany()
    * ```
    */
  get workPeriod(): Prisma.WorkPeriodDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.financialTransaction`: Exposes CRUD operations for the **FinancialTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialTransactions
    * const financialTransactions = await prisma.financialTransaction.findMany()
    * ```
    */
  get financialTransaction(): Prisma.FinancialTransactionDelegate<ExtArgs>;

  /**
   * `prisma.chartAccount`: Exposes CRUD operations for the **ChartAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChartAccounts
    * const chartAccounts = await prisma.chartAccount.findMany()
    * ```
    */
  get chartAccount(): Prisma.ChartAccountDelegate<ExtArgs>;

  /**
   * `prisma.postedJournal`: Exposes CRUD operations for the **PostedJournal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostedJournals
    * const postedJournals = await prisma.postedJournal.findMany()
    * ```
    */
  get postedJournal(): Prisma.PostedJournalDelegate<ExtArgs>;

  /**
   * `prisma.postedJournalLine`: Exposes CRUD operations for the **PostedJournalLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostedJournalLines
    * const postedJournalLines = await prisma.postedJournalLine.findMany()
    * ```
    */
  get postedJournalLine(): Prisma.PostedJournalLineDelegate<ExtArgs>;

  /**
   * `prisma.obligation`: Exposes CRUD operations for the **Obligation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obligations
    * const obligations = await prisma.obligation.findMany()
    * ```
    */
  get obligation(): Prisma.ObligationDelegate<ExtArgs>;

  /**
   * `prisma.profitAllocation`: Exposes CRUD operations for the **ProfitAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfitAllocations
    * const profitAllocations = await prisma.profitAllocation.findMany()
    * ```
    */
  get profitAllocation(): Prisma.ProfitAllocationDelegate<ExtArgs>;
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ledgerAccount" | "journalEntry" | "postingBatch" | "ledgerEntry" | "workPeriod" | "auditLog" | "financialTransaction" | "chartAccount" | "postedJournal" | "postedJournalLine" | "obligation" | "profitAllocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LedgerAccount: {
        payload: Prisma.$LedgerAccountPayload<ExtArgs>
        fields: Prisma.LedgerAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          findFirst: {
            args: Prisma.LedgerAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          findMany: {
            args: Prisma.LedgerAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>[]
          }
          create: {
            args: Prisma.LedgerAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          createMany: {
            args: Prisma.LedgerAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>[]
          }
          delete: {
            args: Prisma.LedgerAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          update: {
            args: Prisma.LedgerAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          deleteMany: {
            args: Prisma.LedgerAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LedgerAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          aggregate: {
            args: Prisma.LedgerAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerAccount>
          }
          groupBy: {
            args: Prisma.LedgerAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerAccountCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
          }
        }
      }
      PostingBatch: {
        payload: Prisma.$PostingBatchPayload<ExtArgs>
        fields: Prisma.PostingBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostingBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostingBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>
          }
          findFirst: {
            args: Prisma.PostingBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostingBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>
          }
          findMany: {
            args: Prisma.PostingBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>[]
          }
          create: {
            args: Prisma.PostingBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>
          }
          createMany: {
            args: Prisma.PostingBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostingBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>[]
          }
          delete: {
            args: Prisma.PostingBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>
          }
          update: {
            args: Prisma.PostingBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>
          }
          deleteMany: {
            args: Prisma.PostingBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostingBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostingBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostingBatchPayload>
          }
          aggregate: {
            args: Prisma.PostingBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostingBatch>
          }
          groupBy: {
            args: Prisma.PostingBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostingBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostingBatchCountArgs<ExtArgs>
            result: $Utils.Optional<PostingBatchCountAggregateOutputType> | number
          }
        }
      }
      LedgerEntry: {
        payload: Prisma.$LedgerEntryPayload<ExtArgs>
        fields: Prisma.LedgerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findFirst: {
            args: Prisma.LedgerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findMany: {
            args: Prisma.LedgerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          create: {
            args: Prisma.LedgerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          createMany: {
            args: Prisma.LedgerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          delete: {
            args: Prisma.LedgerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          update: {
            args: Prisma.LedgerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          deleteMany: {
            args: Prisma.LedgerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LedgerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          aggregate: {
            args: Prisma.LedgerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerEntry>
          }
          groupBy: {
            args: Prisma.LedgerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryCountAggregateOutputType> | number
          }
        }
      }
      WorkPeriod: {
        payload: Prisma.$WorkPeriodPayload<ExtArgs>
        fields: Prisma.WorkPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>
          }
          findFirst: {
            args: Prisma.WorkPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>
          }
          findMany: {
            args: Prisma.WorkPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>[]
          }
          create: {
            args: Prisma.WorkPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>
          }
          createMany: {
            args: Prisma.WorkPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>[]
          }
          delete: {
            args: Prisma.WorkPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>
          }
          update: {
            args: Prisma.WorkPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>
          }
          deleteMany: {
            args: Prisma.WorkPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPeriodPayload>
          }
          aggregate: {
            args: Prisma.WorkPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkPeriod>
          }
          groupBy: {
            args: Prisma.WorkPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<WorkPeriodCountAggregateOutputType> | number
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
      FinancialTransaction: {
        payload: Prisma.$FinancialTransactionPayload<ExtArgs>
        fields: Prisma.FinancialTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findFirst: {
            args: Prisma.FinancialTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findMany: {
            args: Prisma.FinancialTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          create: {
            args: Prisma.FinancialTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          createMany: {
            args: Prisma.FinancialTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          delete: {
            args: Prisma.FinancialTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          update: {
            args: Prisma.FinancialTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FinancialTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinancialTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          aggregate: {
            args: Prisma.FinancialTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialTransaction>
          }
          groupBy: {
            args: Prisma.FinancialTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionCountAggregateOutputType> | number
          }
        }
      }
      ChartAccount: {
        payload: Prisma.$ChartAccountPayload<ExtArgs>
        fields: Prisma.ChartAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChartAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChartAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>
          }
          findFirst: {
            args: Prisma.ChartAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChartAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>
          }
          findMany: {
            args: Prisma.ChartAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>[]
          }
          create: {
            args: Prisma.ChartAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>
          }
          createMany: {
            args: Prisma.ChartAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChartAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>[]
          }
          delete: {
            args: Prisma.ChartAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>
          }
          update: {
            args: Prisma.ChartAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>
          }
          deleteMany: {
            args: Prisma.ChartAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChartAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChartAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartAccountPayload>
          }
          aggregate: {
            args: Prisma.ChartAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChartAccount>
          }
          groupBy: {
            args: Prisma.ChartAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChartAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChartAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ChartAccountCountAggregateOutputType> | number
          }
        }
      }
      PostedJournal: {
        payload: Prisma.$PostedJournalPayload<ExtArgs>
        fields: Prisma.PostedJournalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostedJournalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostedJournalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>
          }
          findFirst: {
            args: Prisma.PostedJournalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostedJournalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>
          }
          findMany: {
            args: Prisma.PostedJournalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>[]
          }
          create: {
            args: Prisma.PostedJournalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>
          }
          createMany: {
            args: Prisma.PostedJournalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostedJournalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>[]
          }
          delete: {
            args: Prisma.PostedJournalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>
          }
          update: {
            args: Prisma.PostedJournalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>
          }
          deleteMany: {
            args: Prisma.PostedJournalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostedJournalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostedJournalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalPayload>
          }
          aggregate: {
            args: Prisma.PostedJournalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostedJournal>
          }
          groupBy: {
            args: Prisma.PostedJournalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostedJournalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostedJournalCountArgs<ExtArgs>
            result: $Utils.Optional<PostedJournalCountAggregateOutputType> | number
          }
        }
      }
      PostedJournalLine: {
        payload: Prisma.$PostedJournalLinePayload<ExtArgs>
        fields: Prisma.PostedJournalLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostedJournalLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostedJournalLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>
          }
          findFirst: {
            args: Prisma.PostedJournalLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostedJournalLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>
          }
          findMany: {
            args: Prisma.PostedJournalLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>[]
          }
          create: {
            args: Prisma.PostedJournalLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>
          }
          createMany: {
            args: Prisma.PostedJournalLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostedJournalLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>[]
          }
          delete: {
            args: Prisma.PostedJournalLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>
          }
          update: {
            args: Prisma.PostedJournalLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>
          }
          deleteMany: {
            args: Prisma.PostedJournalLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostedJournalLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostedJournalLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostedJournalLinePayload>
          }
          aggregate: {
            args: Prisma.PostedJournalLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostedJournalLine>
          }
          groupBy: {
            args: Prisma.PostedJournalLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostedJournalLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostedJournalLineCountArgs<ExtArgs>
            result: $Utils.Optional<PostedJournalLineCountAggregateOutputType> | number
          }
        }
      }
      Obligation: {
        payload: Prisma.$ObligationPayload<ExtArgs>
        fields: Prisma.ObligationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObligationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObligationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          findFirst: {
            args: Prisma.ObligationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObligationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          findMany: {
            args: Prisma.ObligationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>[]
          }
          create: {
            args: Prisma.ObligationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          createMany: {
            args: Prisma.ObligationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObligationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>[]
          }
          delete: {
            args: Prisma.ObligationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          update: {
            args: Prisma.ObligationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          deleteMany: {
            args: Prisma.ObligationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObligationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObligationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObligationPayload>
          }
          aggregate: {
            args: Prisma.ObligationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObligation>
          }
          groupBy: {
            args: Prisma.ObligationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObligationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObligationCountArgs<ExtArgs>
            result: $Utils.Optional<ObligationCountAggregateOutputType> | number
          }
        }
      }
      ProfitAllocation: {
        payload: Prisma.$ProfitAllocationPayload<ExtArgs>
        fields: Prisma.ProfitAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfitAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfitAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>
          }
          findFirst: {
            args: Prisma.ProfitAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfitAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>
          }
          findMany: {
            args: Prisma.ProfitAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>[]
          }
          create: {
            args: Prisma.ProfitAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>
          }
          createMany: {
            args: Prisma.ProfitAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfitAllocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>[]
          }
          delete: {
            args: Prisma.ProfitAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>
          }
          update: {
            args: Prisma.ProfitAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>
          }
          deleteMany: {
            args: Prisma.ProfitAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfitAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfitAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitAllocationPayload>
          }
          aggregate: {
            args: Prisma.ProfitAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfitAllocation>
          }
          groupBy: {
            args: Prisma.ProfitAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfitAllocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfitAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<ProfitAllocationCountAggregateOutputType> | number
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
   * Count Type LedgerAccountCountOutputType
   */

  export type LedgerAccountCountOutputType = {
    children: number
    entries: number
  }

  export type LedgerAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | LedgerAccountCountOutputTypeCountChildrenArgs
    entries?: boolean | LedgerAccountCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * LedgerAccountCountOutputType without action
   */
  export type LedgerAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccountCountOutputType
     */
    select?: LedgerAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LedgerAccountCountOutputType without action
   */
  export type LedgerAccountCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerAccountWhereInput
  }

  /**
   * LedgerAccountCountOutputType without action
   */
  export type LedgerAccountCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
  }


  /**
   * Count Type JournalEntryCountOutputType
   */

  export type JournalEntryCountOutputType = {
    entries: number
  }

  export type JournalEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | JournalEntryCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryCountOutputType
     */
    select?: JournalEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
  }


  /**
   * Count Type PostingBatchCountOutputType
   */

  export type PostingBatchCountOutputType = {
    journalEntries: number
  }

  export type PostingBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntries?: boolean | PostingBatchCountOutputTypeCountJournalEntriesArgs
  }

  // Custom InputTypes
  /**
   * PostingBatchCountOutputType without action
   */
  export type PostingBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatchCountOutputType
     */
    select?: PostingBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostingBatchCountOutputType without action
   */
  export type PostingBatchCountOutputTypeCountJournalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
  }


  /**
   * Count Type ChartAccountCountOutputType
   */

  export type ChartAccountCountOutputType = {
    lines: number
  }

  export type ChartAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | ChartAccountCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * ChartAccountCountOutputType without action
   */
  export type ChartAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccountCountOutputType
     */
    select?: ChartAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChartAccountCountOutputType without action
   */
  export type ChartAccountCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostedJournalLineWhereInput
  }


  /**
   * Count Type PostedJournalCountOutputType
   */

  export type PostedJournalCountOutputType = {
    lines: number
  }

  export type PostedJournalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | PostedJournalCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * PostedJournalCountOutputType without action
   */
  export type PostedJournalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalCountOutputType
     */
    select?: PostedJournalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostedJournalCountOutputType without action
   */
  export type PostedJournalCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostedJournalLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LedgerAccount
   */

  export type AggregateLedgerAccount = {
    _count: LedgerAccountCountAggregateOutputType | null
    _avg: LedgerAccountAvgAggregateOutputType | null
    _sum: LedgerAccountSumAggregateOutputType | null
    _min: LedgerAccountMinAggregateOutputType | null
    _max: LedgerAccountMaxAggregateOutputType | null
  }

  export type LedgerAccountAvgAggregateOutputType = {
    balance: number | null
    version: number | null
  }

  export type LedgerAccountSumAggregateOutputType = {
    balance: number | null
    version: number | null
  }

  export type LedgerAccountMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    code: string | null
    name: string | null
    type: string | null
    balance: number | null
    parentId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type LedgerAccountMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    code: string | null
    name: string | null
    type: string | null
    balance: number | null
    parentId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type LedgerAccountCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    code: number
    name: number
    type: number
    balance: number
    parentId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    version: number
    _all: number
  }


  export type LedgerAccountAvgAggregateInputType = {
    balance?: true
    version?: true
  }

  export type LedgerAccountSumAggregateInputType = {
    balance?: true
    version?: true
  }

  export type LedgerAccountMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    code?: true
    name?: true
    type?: true
    balance?: true
    parentId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type LedgerAccountMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    code?: true
    name?: true
    type?: true
    balance?: true
    parentId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type LedgerAccountCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    code?: true
    name?: true
    type?: true
    balance?: true
    parentId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
    _all?: true
  }

  export type LedgerAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerAccount to aggregate.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerAccounts
    **/
    _count?: true | LedgerAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerAccountMaxAggregateInputType
  }

  export type GetLedgerAccountAggregateType<T extends LedgerAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerAccount[P]>
      : GetScalarType<T[P], AggregateLedgerAccount[P]>
  }




  export type LedgerAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerAccountWhereInput
    orderBy?: LedgerAccountOrderByWithAggregationInput | LedgerAccountOrderByWithAggregationInput[]
    by: LedgerAccountScalarFieldEnum[] | LedgerAccountScalarFieldEnum
    having?: LedgerAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerAccountCountAggregateInputType | true
    _avg?: LedgerAccountAvgAggregateInputType
    _sum?: LedgerAccountSumAggregateInputType
    _min?: LedgerAccountMinAggregateInputType
    _max?: LedgerAccountMaxAggregateInputType
  }

  export type LedgerAccountGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance: number
    parentId: string | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number
    _count: LedgerAccountCountAggregateOutputType | null
    _avg: LedgerAccountAvgAggregateOutputType | null
    _sum: LedgerAccountSumAggregateOutputType | null
    _min: LedgerAccountMinAggregateOutputType | null
    _max: LedgerAccountMaxAggregateOutputType | null
  }

  type GetLedgerAccountGroupByPayload<T extends LedgerAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerAccountGroupByOutputType[P]>
        }
      >
    >


  export type LedgerAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    parentId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    parent?: boolean | LedgerAccount$parentArgs<ExtArgs>
    children?: boolean | LedgerAccount$childrenArgs<ExtArgs>
    entries?: boolean | LedgerAccount$entriesArgs<ExtArgs>
    _count?: boolean | LedgerAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerAccount"]>

  export type LedgerAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    parentId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    parent?: boolean | LedgerAccount$parentArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerAccount"]>

  export type LedgerAccountSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    parentId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
  }

  export type LedgerAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | LedgerAccount$parentArgs<ExtArgs>
    children?: boolean | LedgerAccount$childrenArgs<ExtArgs>
    entries?: boolean | LedgerAccount$entriesArgs<ExtArgs>
    _count?: boolean | LedgerAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LedgerAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | LedgerAccount$parentArgs<ExtArgs>
  }

  export type $LedgerAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerAccount"
    objects: {
      parent: Prisma.$LedgerAccountPayload<ExtArgs> | null
      children: Prisma.$LedgerAccountPayload<ExtArgs>[]
      entries: Prisma.$LedgerEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      code: string
      name: string
      type: string
      balance: number
      parentId: string | null
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
      version: number
    }, ExtArgs["result"]["ledgerAccount"]>
    composites: {}
  }

  type LedgerAccountGetPayload<S extends boolean | null | undefined | LedgerAccountDefaultArgs> = $Result.GetResult<Prisma.$LedgerAccountPayload, S>

  type LedgerAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LedgerAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LedgerAccountCountAggregateInputType | true
    }

  export interface LedgerAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerAccount'], meta: { name: 'LedgerAccount' } }
    /**
     * Find zero or one LedgerAccount that matches the filter.
     * @param {LedgerAccountFindUniqueArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerAccountFindUniqueArgs>(args: SelectSubset<T, LedgerAccountFindUniqueArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LedgerAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LedgerAccountFindUniqueOrThrowArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LedgerAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountFindFirstArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerAccountFindFirstArgs>(args?: SelectSubset<T, LedgerAccountFindFirstArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LedgerAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountFindFirstOrThrowArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LedgerAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerAccounts
     * const ledgerAccounts = await prisma.ledgerAccount.findMany()
     * 
     * // Get first 10 LedgerAccounts
     * const ledgerAccounts = await prisma.ledgerAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerAccountWithIdOnly = await prisma.ledgerAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerAccountFindManyArgs>(args?: SelectSubset<T, LedgerAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LedgerAccount.
     * @param {LedgerAccountCreateArgs} args - Arguments to create a LedgerAccount.
     * @example
     * // Create one LedgerAccount
     * const LedgerAccount = await prisma.ledgerAccount.create({
     *   data: {
     *     // ... data to create a LedgerAccount
     *   }
     * })
     * 
     */
    create<T extends LedgerAccountCreateArgs>(args: SelectSubset<T, LedgerAccountCreateArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LedgerAccounts.
     * @param {LedgerAccountCreateManyArgs} args - Arguments to create many LedgerAccounts.
     * @example
     * // Create many LedgerAccounts
     * const ledgerAccount = await prisma.ledgerAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerAccountCreateManyArgs>(args?: SelectSubset<T, LedgerAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerAccounts and returns the data saved in the database.
     * @param {LedgerAccountCreateManyAndReturnArgs} args - Arguments to create many LedgerAccounts.
     * @example
     * // Create many LedgerAccounts
     * const ledgerAccount = await prisma.ledgerAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerAccounts and only return the `id`
     * const ledgerAccountWithIdOnly = await prisma.ledgerAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LedgerAccount.
     * @param {LedgerAccountDeleteArgs} args - Arguments to delete one LedgerAccount.
     * @example
     * // Delete one LedgerAccount
     * const LedgerAccount = await prisma.ledgerAccount.delete({
     *   where: {
     *     // ... filter to delete one LedgerAccount
     *   }
     * })
     * 
     */
    delete<T extends LedgerAccountDeleteArgs>(args: SelectSubset<T, LedgerAccountDeleteArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LedgerAccount.
     * @param {LedgerAccountUpdateArgs} args - Arguments to update one LedgerAccount.
     * @example
     * // Update one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerAccountUpdateArgs>(args: SelectSubset<T, LedgerAccountUpdateArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LedgerAccounts.
     * @param {LedgerAccountDeleteManyArgs} args - Arguments to filter LedgerAccounts to delete.
     * @example
     * // Delete a few LedgerAccounts
     * const { count } = await prisma.ledgerAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerAccountDeleteManyArgs>(args?: SelectSubset<T, LedgerAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerAccounts
     * const ledgerAccount = await prisma.ledgerAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerAccountUpdateManyArgs>(args: SelectSubset<T, LedgerAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LedgerAccount.
     * @param {LedgerAccountUpsertArgs} args - Arguments to update or create a LedgerAccount.
     * @example
     * // Update or create a LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.upsert({
     *   create: {
     *     // ... data to create a LedgerAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerAccount we want to update
     *   }
     * })
     */
    upsert<T extends LedgerAccountUpsertArgs>(args: SelectSubset<T, LedgerAccountUpsertArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LedgerAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountCountArgs} args - Arguments to filter LedgerAccounts to count.
     * @example
     * // Count the number of LedgerAccounts
     * const count = await prisma.ledgerAccount.count({
     *   where: {
     *     // ... the filter for the LedgerAccounts we want to count
     *   }
     * })
    **/
    count<T extends LedgerAccountCountArgs>(
      args?: Subset<T, LedgerAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LedgerAccountAggregateArgs>(args: Subset<T, LedgerAccountAggregateArgs>): Prisma.PrismaPromise<GetLedgerAccountAggregateType<T>>

    /**
     * Group by LedgerAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountGroupByArgs} args - Group by arguments.
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
      T extends LedgerAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerAccountGroupByArgs['orderBy'] }
        : { orderBy?: LedgerAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LedgerAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerAccount model
   */
  readonly fields: LedgerAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends LedgerAccount$parentArgs<ExtArgs> = {}>(args?: Subset<T, LedgerAccount$parentArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    children<T extends LedgerAccount$childrenArgs<ExtArgs> = {}>(args?: Subset<T, LedgerAccount$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findMany"> | Null>
    entries<T extends LedgerAccount$entriesArgs<ExtArgs> = {}>(args?: Subset<T, LedgerAccount$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the LedgerAccount model
   */ 
  interface LedgerAccountFieldRefs {
    readonly id: FieldRef<"LedgerAccount", 'String'>
    readonly tenantId: FieldRef<"LedgerAccount", 'String'>
    readonly shopId: FieldRef<"LedgerAccount", 'String'>
    readonly code: FieldRef<"LedgerAccount", 'String'>
    readonly name: FieldRef<"LedgerAccount", 'String'>
    readonly type: FieldRef<"LedgerAccount", 'String'>
    readonly balance: FieldRef<"LedgerAccount", 'Float'>
    readonly parentId: FieldRef<"LedgerAccount", 'String'>
    readonly createdAt: FieldRef<"LedgerAccount", 'DateTime'>
    readonly createdBy: FieldRef<"LedgerAccount", 'String'>
    readonly updatedAt: FieldRef<"LedgerAccount", 'DateTime'>
    readonly updatedBy: FieldRef<"LedgerAccount", 'String'>
    readonly deletedAt: FieldRef<"LedgerAccount", 'DateTime'>
    readonly deletedBy: FieldRef<"LedgerAccount", 'String'>
    readonly version: FieldRef<"LedgerAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LedgerAccount findUnique
   */
  export type LedgerAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount findUniqueOrThrow
   */
  export type LedgerAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount findFirst
   */
  export type LedgerAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerAccounts.
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerAccounts.
     */
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount findFirstOrThrow
   */
  export type LedgerAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerAccounts.
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerAccounts.
     */
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount findMany
   */
  export type LedgerAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccounts to fetch.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerAccounts.
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount create
   */
  export type LedgerAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerAccount.
     */
    data: XOR<LedgerAccountCreateInput, LedgerAccountUncheckedCreateInput>
  }

  /**
   * LedgerAccount createMany
   */
  export type LedgerAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerAccounts.
     */
    data: LedgerAccountCreateManyInput | LedgerAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerAccount createManyAndReturn
   */
  export type LedgerAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LedgerAccounts.
     */
    data: LedgerAccountCreateManyInput | LedgerAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerAccount update
   */
  export type LedgerAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerAccount.
     */
    data: XOR<LedgerAccountUpdateInput, LedgerAccountUncheckedUpdateInput>
    /**
     * Choose, which LedgerAccount to update.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount updateMany
   */
  export type LedgerAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerAccounts.
     */
    data: XOR<LedgerAccountUpdateManyMutationInput, LedgerAccountUncheckedUpdateManyInput>
    /**
     * Filter which LedgerAccounts to update
     */
    where?: LedgerAccountWhereInput
  }

  /**
   * LedgerAccount upsert
   */
  export type LedgerAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerAccount to update in case it exists.
     */
    where: LedgerAccountWhereUniqueInput
    /**
     * In case the LedgerAccount found by the `where` argument doesn't exist, create a new LedgerAccount with this data.
     */
    create: XOR<LedgerAccountCreateInput, LedgerAccountUncheckedCreateInput>
    /**
     * In case the LedgerAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerAccountUpdateInput, LedgerAccountUncheckedUpdateInput>
  }

  /**
   * LedgerAccount delete
   */
  export type LedgerAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter which LedgerAccount to delete.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount deleteMany
   */
  export type LedgerAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerAccounts to delete
     */
    where?: LedgerAccountWhereInput
  }

  /**
   * LedgerAccount.parent
   */
  export type LedgerAccount$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    where?: LedgerAccountWhereInput
  }

  /**
   * LedgerAccount.children
   */
  export type LedgerAccount$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    where?: LedgerAccountWhereInput
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    cursor?: LedgerAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount.entries
   */
  export type LedgerAccount$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    cursor?: LedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerAccount without action
   */
  export type LedgerAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryAvgAggregateOutputType = {
    version: number | null
  }

  export type JournalEntrySumAggregateOutputType = {
    version: number | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    description: string | null
    postedBy: string | null
    status: string | null
    batchId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    description: string | null
    postedBy: string | null
    status: string | null
    batchId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    workPeriodId: number
    description: number
    postedBy: number
    status: number
    batchId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    version: number
    _all: number
  }


  export type JournalEntryAvgAggregateInputType = {
    version?: true
  }

  export type JournalEntrySumAggregateInputType = {
    version?: true
  }

  export type JournalEntryMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    description?: true
    postedBy?: true
    status?: true
    batchId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    description?: true
    postedBy?: true
    status?: true
    batchId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    description?: true
    postedBy?: true
    status?: true
    batchId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _avg?: JournalEntryAvgAggregateInputType
    _sum?: JournalEntrySumAggregateInputType
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status: string
    batchId: string | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    description?: boolean
    postedBy?: boolean
    status?: boolean
    batchId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    batch?: boolean | JournalEntry$batchArgs<ExtArgs>
    entries?: boolean | JournalEntry$entriesArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    description?: boolean
    postedBy?: boolean
    status?: boolean
    batchId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    batch?: boolean | JournalEntry$batchArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    description?: boolean
    postedBy?: boolean
    status?: boolean
    batchId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
  }

  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | JournalEntry$batchArgs<ExtArgs>
    entries?: boolean | JournalEntry$entriesArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | JournalEntry$batchArgs<ExtArgs>
  }

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      batch: Prisma.$PostingBatchPayload<ExtArgs> | null
      entries: Prisma.$LedgerEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      workPeriodId: string
      description: string
      postedBy: string
      status: string
      batchId: string | null
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
      version: number
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     * 
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     * 
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntries and returns the data saved in the database.
     * @param {JournalEntryCreateManyAndReturnArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
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
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends JournalEntry$batchArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$batchArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    entries<T extends JournalEntry$entriesArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the JournalEntry model
   */ 
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'String'>
    readonly tenantId: FieldRef<"JournalEntry", 'String'>
    readonly shopId: FieldRef<"JournalEntry", 'String'>
    readonly workPeriodId: FieldRef<"JournalEntry", 'String'>
    readonly description: FieldRef<"JournalEntry", 'String'>
    readonly postedBy: FieldRef<"JournalEntry", 'String'>
    readonly status: FieldRef<"JournalEntry", 'String'>
    readonly batchId: FieldRef<"JournalEntry", 'String'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly createdBy: FieldRef<"JournalEntry", 'String'>
    readonly updatedAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly updatedBy: FieldRef<"JournalEntry", 'String'>
    readonly deletedAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly deletedBy: FieldRef<"JournalEntry", 'String'>
    readonly version: FieldRef<"JournalEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry createManyAndReturn
   */
  export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
  }

  /**
   * JournalEntry.batch
   */
  export type JournalEntry$batchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    where?: PostingBatchWhereInput
  }

  /**
   * JournalEntry.entries
   */
  export type JournalEntry$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    cursor?: LedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
  }


  /**
   * Model PostingBatch
   */

  export type AggregatePostingBatch = {
    _count: PostingBatchCountAggregateOutputType | null
    _avg: PostingBatchAvgAggregateOutputType | null
    _sum: PostingBatchSumAggregateOutputType | null
    _min: PostingBatchMinAggregateOutputType | null
    _max: PostingBatchMaxAggregateOutputType | null
  }

  export type PostingBatchAvgAggregateOutputType = {
    version: number | null
  }

  export type PostingBatchSumAggregateOutputType = {
    version: number | null
  }

  export type PostingBatchMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    name: string | null
    description: string | null
    status: string | null
    postedBy: string | null
    postedAt: Date | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type PostingBatchMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    workPeriodId: string | null
    name: string | null
    description: string | null
    status: string | null
    postedBy: string | null
    postedAt: Date | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type PostingBatchCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    workPeriodId: number
    name: number
    description: number
    status: number
    postedBy: number
    postedAt: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    version: number
    _all: number
  }


  export type PostingBatchAvgAggregateInputType = {
    version?: true
  }

  export type PostingBatchSumAggregateInputType = {
    version?: true
  }

  export type PostingBatchMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    name?: true
    description?: true
    status?: true
    postedBy?: true
    postedAt?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type PostingBatchMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    name?: true
    description?: true
    status?: true
    postedBy?: true
    postedAt?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type PostingBatchCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    workPeriodId?: true
    name?: true
    description?: true
    status?: true
    postedBy?: true
    postedAt?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
    _all?: true
  }

  export type PostingBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostingBatch to aggregate.
     */
    where?: PostingBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostingBatches to fetch.
     */
    orderBy?: PostingBatchOrderByWithRelationInput | PostingBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostingBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostingBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostingBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostingBatches
    **/
    _count?: true | PostingBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostingBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostingBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostingBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostingBatchMaxAggregateInputType
  }

  export type GetPostingBatchAggregateType<T extends PostingBatchAggregateArgs> = {
        [P in keyof T & keyof AggregatePostingBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostingBatch[P]>
      : GetScalarType<T[P], AggregatePostingBatch[P]>
  }




  export type PostingBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostingBatchWhereInput
    orderBy?: PostingBatchOrderByWithAggregationInput | PostingBatchOrderByWithAggregationInput[]
    by: PostingBatchScalarFieldEnum[] | PostingBatchScalarFieldEnum
    having?: PostingBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostingBatchCountAggregateInputType | true
    _avg?: PostingBatchAvgAggregateInputType
    _sum?: PostingBatchSumAggregateInputType
    _min?: PostingBatchMinAggregateInputType
    _max?: PostingBatchMaxAggregateInputType
  }

  export type PostingBatchGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    workPeriodId: string | null
    name: string
    description: string | null
    status: string
    postedBy: string | null
    postedAt: Date | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number
    _count: PostingBatchCountAggregateOutputType | null
    _avg: PostingBatchAvgAggregateOutputType | null
    _sum: PostingBatchSumAggregateOutputType | null
    _min: PostingBatchMinAggregateOutputType | null
    _max: PostingBatchMaxAggregateOutputType | null
  }

  type GetPostingBatchGroupByPayload<T extends PostingBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostingBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostingBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostingBatchGroupByOutputType[P]>
            : GetScalarType<T[P], PostingBatchGroupByOutputType[P]>
        }
      >
    >


  export type PostingBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    postedBy?: boolean
    postedAt?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    journalEntries?: boolean | PostingBatch$journalEntriesArgs<ExtArgs>
    _count?: boolean | PostingBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postingBatch"]>

  export type PostingBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    postedBy?: boolean
    postedAt?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
  }, ExtArgs["result"]["postingBatch"]>

  export type PostingBatchSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    workPeriodId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    postedBy?: boolean
    postedAt?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
  }

  export type PostingBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntries?: boolean | PostingBatch$journalEntriesArgs<ExtArgs>
    _count?: boolean | PostingBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostingBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostingBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostingBatch"
    objects: {
      journalEntries: Prisma.$JournalEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      workPeriodId: string | null
      name: string
      description: string | null
      status: string
      postedBy: string | null
      postedAt: Date | null
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
      version: number
    }, ExtArgs["result"]["postingBatch"]>
    composites: {}
  }

  type PostingBatchGetPayload<S extends boolean | null | undefined | PostingBatchDefaultArgs> = $Result.GetResult<Prisma.$PostingBatchPayload, S>

  type PostingBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostingBatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostingBatchCountAggregateInputType | true
    }

  export interface PostingBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostingBatch'], meta: { name: 'PostingBatch' } }
    /**
     * Find zero or one PostingBatch that matches the filter.
     * @param {PostingBatchFindUniqueArgs} args - Arguments to find a PostingBatch
     * @example
     * // Get one PostingBatch
     * const postingBatch = await prisma.postingBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostingBatchFindUniqueArgs>(args: SelectSubset<T, PostingBatchFindUniqueArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostingBatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostingBatchFindUniqueOrThrowArgs} args - Arguments to find a PostingBatch
     * @example
     * // Get one PostingBatch
     * const postingBatch = await prisma.postingBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostingBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, PostingBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostingBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchFindFirstArgs} args - Arguments to find a PostingBatch
     * @example
     * // Get one PostingBatch
     * const postingBatch = await prisma.postingBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostingBatchFindFirstArgs>(args?: SelectSubset<T, PostingBatchFindFirstArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostingBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchFindFirstOrThrowArgs} args - Arguments to find a PostingBatch
     * @example
     * // Get one PostingBatch
     * const postingBatch = await prisma.postingBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostingBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, PostingBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostingBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostingBatches
     * const postingBatches = await prisma.postingBatch.findMany()
     * 
     * // Get first 10 PostingBatches
     * const postingBatches = await prisma.postingBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postingBatchWithIdOnly = await prisma.postingBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostingBatchFindManyArgs>(args?: SelectSubset<T, PostingBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostingBatch.
     * @param {PostingBatchCreateArgs} args - Arguments to create a PostingBatch.
     * @example
     * // Create one PostingBatch
     * const PostingBatch = await prisma.postingBatch.create({
     *   data: {
     *     // ... data to create a PostingBatch
     *   }
     * })
     * 
     */
    create<T extends PostingBatchCreateArgs>(args: SelectSubset<T, PostingBatchCreateArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostingBatches.
     * @param {PostingBatchCreateManyArgs} args - Arguments to create many PostingBatches.
     * @example
     * // Create many PostingBatches
     * const postingBatch = await prisma.postingBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostingBatchCreateManyArgs>(args?: SelectSubset<T, PostingBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostingBatches and returns the data saved in the database.
     * @param {PostingBatchCreateManyAndReturnArgs} args - Arguments to create many PostingBatches.
     * @example
     * // Create many PostingBatches
     * const postingBatch = await prisma.postingBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostingBatches and only return the `id`
     * const postingBatchWithIdOnly = await prisma.postingBatch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostingBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, PostingBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostingBatch.
     * @param {PostingBatchDeleteArgs} args - Arguments to delete one PostingBatch.
     * @example
     * // Delete one PostingBatch
     * const PostingBatch = await prisma.postingBatch.delete({
     *   where: {
     *     // ... filter to delete one PostingBatch
     *   }
     * })
     * 
     */
    delete<T extends PostingBatchDeleteArgs>(args: SelectSubset<T, PostingBatchDeleteArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostingBatch.
     * @param {PostingBatchUpdateArgs} args - Arguments to update one PostingBatch.
     * @example
     * // Update one PostingBatch
     * const postingBatch = await prisma.postingBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostingBatchUpdateArgs>(args: SelectSubset<T, PostingBatchUpdateArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostingBatches.
     * @param {PostingBatchDeleteManyArgs} args - Arguments to filter PostingBatches to delete.
     * @example
     * // Delete a few PostingBatches
     * const { count } = await prisma.postingBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostingBatchDeleteManyArgs>(args?: SelectSubset<T, PostingBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostingBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostingBatches
     * const postingBatch = await prisma.postingBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostingBatchUpdateManyArgs>(args: SelectSubset<T, PostingBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostingBatch.
     * @param {PostingBatchUpsertArgs} args - Arguments to update or create a PostingBatch.
     * @example
     * // Update or create a PostingBatch
     * const postingBatch = await prisma.postingBatch.upsert({
     *   create: {
     *     // ... data to create a PostingBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostingBatch we want to update
     *   }
     * })
     */
    upsert<T extends PostingBatchUpsertArgs>(args: SelectSubset<T, PostingBatchUpsertArgs<ExtArgs>>): Prisma__PostingBatchClient<$Result.GetResult<Prisma.$PostingBatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostingBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchCountArgs} args - Arguments to filter PostingBatches to count.
     * @example
     * // Count the number of PostingBatches
     * const count = await prisma.postingBatch.count({
     *   where: {
     *     // ... the filter for the PostingBatches we want to count
     *   }
     * })
    **/
    count<T extends PostingBatchCountArgs>(
      args?: Subset<T, PostingBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostingBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostingBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostingBatchAggregateArgs>(args: Subset<T, PostingBatchAggregateArgs>): Prisma.PrismaPromise<GetPostingBatchAggregateType<T>>

    /**
     * Group by PostingBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostingBatchGroupByArgs} args - Group by arguments.
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
      T extends PostingBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostingBatchGroupByArgs['orderBy'] }
        : { orderBy?: PostingBatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostingBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostingBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostingBatch model
   */
  readonly fields: PostingBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostingBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostingBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journalEntries<T extends PostingBatch$journalEntriesArgs<ExtArgs> = {}>(args?: Subset<T, PostingBatch$journalEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PostingBatch model
   */ 
  interface PostingBatchFieldRefs {
    readonly id: FieldRef<"PostingBatch", 'String'>
    readonly tenantId: FieldRef<"PostingBatch", 'String'>
    readonly shopId: FieldRef<"PostingBatch", 'String'>
    readonly workPeriodId: FieldRef<"PostingBatch", 'String'>
    readonly name: FieldRef<"PostingBatch", 'String'>
    readonly description: FieldRef<"PostingBatch", 'String'>
    readonly status: FieldRef<"PostingBatch", 'String'>
    readonly postedBy: FieldRef<"PostingBatch", 'String'>
    readonly postedAt: FieldRef<"PostingBatch", 'DateTime'>
    readonly createdAt: FieldRef<"PostingBatch", 'DateTime'>
    readonly createdBy: FieldRef<"PostingBatch", 'String'>
    readonly updatedAt: FieldRef<"PostingBatch", 'DateTime'>
    readonly updatedBy: FieldRef<"PostingBatch", 'String'>
    readonly deletedAt: FieldRef<"PostingBatch", 'DateTime'>
    readonly deletedBy: FieldRef<"PostingBatch", 'String'>
    readonly version: FieldRef<"PostingBatch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostingBatch findUnique
   */
  export type PostingBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * Filter, which PostingBatch to fetch.
     */
    where: PostingBatchWhereUniqueInput
  }

  /**
   * PostingBatch findUniqueOrThrow
   */
  export type PostingBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * Filter, which PostingBatch to fetch.
     */
    where: PostingBatchWhereUniqueInput
  }

  /**
   * PostingBatch findFirst
   */
  export type PostingBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * Filter, which PostingBatch to fetch.
     */
    where?: PostingBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostingBatches to fetch.
     */
    orderBy?: PostingBatchOrderByWithRelationInput | PostingBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostingBatches.
     */
    cursor?: PostingBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostingBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostingBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostingBatches.
     */
    distinct?: PostingBatchScalarFieldEnum | PostingBatchScalarFieldEnum[]
  }

  /**
   * PostingBatch findFirstOrThrow
   */
  export type PostingBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * Filter, which PostingBatch to fetch.
     */
    where?: PostingBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostingBatches to fetch.
     */
    orderBy?: PostingBatchOrderByWithRelationInput | PostingBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostingBatches.
     */
    cursor?: PostingBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostingBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostingBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostingBatches.
     */
    distinct?: PostingBatchScalarFieldEnum | PostingBatchScalarFieldEnum[]
  }

  /**
   * PostingBatch findMany
   */
  export type PostingBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * Filter, which PostingBatches to fetch.
     */
    where?: PostingBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostingBatches to fetch.
     */
    orderBy?: PostingBatchOrderByWithRelationInput | PostingBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostingBatches.
     */
    cursor?: PostingBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostingBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostingBatches.
     */
    skip?: number
    distinct?: PostingBatchScalarFieldEnum | PostingBatchScalarFieldEnum[]
  }

  /**
   * PostingBatch create
   */
  export type PostingBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a PostingBatch.
     */
    data: XOR<PostingBatchCreateInput, PostingBatchUncheckedCreateInput>
  }

  /**
   * PostingBatch createMany
   */
  export type PostingBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostingBatches.
     */
    data: PostingBatchCreateManyInput | PostingBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostingBatch createManyAndReturn
   */
  export type PostingBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostingBatches.
     */
    data: PostingBatchCreateManyInput | PostingBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostingBatch update
   */
  export type PostingBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a PostingBatch.
     */
    data: XOR<PostingBatchUpdateInput, PostingBatchUncheckedUpdateInput>
    /**
     * Choose, which PostingBatch to update.
     */
    where: PostingBatchWhereUniqueInput
  }

  /**
   * PostingBatch updateMany
   */
  export type PostingBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostingBatches.
     */
    data: XOR<PostingBatchUpdateManyMutationInput, PostingBatchUncheckedUpdateManyInput>
    /**
     * Filter which PostingBatches to update
     */
    where?: PostingBatchWhereInput
  }

  /**
   * PostingBatch upsert
   */
  export type PostingBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the PostingBatch to update in case it exists.
     */
    where: PostingBatchWhereUniqueInput
    /**
     * In case the PostingBatch found by the `where` argument doesn't exist, create a new PostingBatch with this data.
     */
    create: XOR<PostingBatchCreateInput, PostingBatchUncheckedCreateInput>
    /**
     * In case the PostingBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostingBatchUpdateInput, PostingBatchUncheckedUpdateInput>
  }

  /**
   * PostingBatch delete
   */
  export type PostingBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
    /**
     * Filter which PostingBatch to delete.
     */
    where: PostingBatchWhereUniqueInput
  }

  /**
   * PostingBatch deleteMany
   */
  export type PostingBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostingBatches to delete
     */
    where?: PostingBatchWhereInput
  }

  /**
   * PostingBatch.journalEntries
   */
  export type PostingBatch$journalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    cursor?: JournalEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * PostingBatch without action
   */
  export type PostingBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostingBatch
     */
    select?: PostingBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostingBatchInclude<ExtArgs> | null
  }


  /**
   * Model LedgerEntry
   */

  export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  export type LedgerEntryAvgAggregateOutputType = {
    amount: number | null
  }

  export type LedgerEntrySumAggregateOutputType = {
    amount: number | null
  }

  export type LedgerEntryMinAggregateOutputType = {
    id: string | null
    journalEntryId: string | null
    accountId: string | null
    type: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type LedgerEntryMaxAggregateOutputType = {
    id: string | null
    journalEntryId: string | null
    accountId: string | null
    type: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type LedgerEntryCountAggregateOutputType = {
    id: number
    journalEntryId: number
    accountId: number
    type: number
    amount: number
    createdAt: number
    _all: number
  }


  export type LedgerEntryAvgAggregateInputType = {
    amount?: true
  }

  export type LedgerEntrySumAggregateInputType = {
    amount?: true
  }

  export type LedgerEntryMinAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    type?: true
    amount?: true
    createdAt?: true
  }

  export type LedgerEntryMaxAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    type?: true
    amount?: true
    createdAt?: true
  }

  export type LedgerEntryCountAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    type?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntry to aggregate.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerEntries
    **/
    _count?: true | LedgerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerEntry[P]>
      : GetScalarType<T[P], AggregateLedgerEntry[P]>
  }




  export type LedgerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithAggregationInput | LedgerEntryOrderByWithAggregationInput[]
    by: LedgerEntryScalarFieldEnum[] | LedgerEntryScalarFieldEnum
    having?: LedgerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerEntryCountAggregateInputType | true
    _avg?: LedgerEntryAvgAggregateInputType
    _sum?: LedgerEntrySumAggregateInputType
    _min?: LedgerEntryMinAggregateInputType
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type LedgerEntryGroupByOutputType = {
    id: string
    journalEntryId: string
    accountId: string
    type: string
    amount: number
    createdAt: Date
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
        }
      >
    >


  export type LedgerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectScalar = {
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type LedgerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }
  export type LedgerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
  }

  export type $LedgerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerEntry"
    objects: {
      account: Prisma.$LedgerAccountPayload<ExtArgs>
      journalEntry: Prisma.$JournalEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journalEntryId: string
      accountId: string
      type: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["ledgerEntry"]>
    composites: {}
  }

  type LedgerEntryGetPayload<S extends boolean | null | undefined | LedgerEntryDefaultArgs> = $Result.GetResult<Prisma.$LedgerEntryPayload, S>

  type LedgerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LedgerEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LedgerEntryCountAggregateInputType | true
    }

  export interface LedgerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'], meta: { name: 'LedgerEntry' } }
    /**
     * Find zero or one LedgerEntry that matches the filter.
     * @param {LedgerEntryFindUniqueArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEntryFindUniqueArgs>(args: SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LedgerEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEntryFindFirstArgs>(args?: SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany()
     * 
     * // Get first 10 LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerEntryFindManyArgs>(args?: SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LedgerEntry.
     * @param {LedgerEntryCreateArgs} args - Arguments to create a LedgerEntry.
     * @example
     * // Create one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.create({
     *   data: {
     *     // ... data to create a LedgerEntry
     *   }
     * })
     * 
     */
    create<T extends LedgerEntryCreateArgs>(args: SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LedgerEntries.
     * @param {LedgerEntryCreateManyArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerEntryCreateManyArgs>(args?: SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerEntries and returns the data saved in the database.
     * @param {LedgerEntryCreateManyAndReturnArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LedgerEntry.
     * @param {LedgerEntryDeleteArgs} args - Arguments to delete one LedgerEntry.
     * @example
     * // Delete one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.delete({
     *   where: {
     *     // ... filter to delete one LedgerEntry
     *   }
     * })
     * 
     */
    delete<T extends LedgerEntryDeleteArgs>(args: SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LedgerEntry.
     * @param {LedgerEntryUpdateArgs} args - Arguments to update one LedgerEntry.
     * @example
     * // Update one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerEntryUpdateArgs>(args: SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LedgerEntries.
     * @param {LedgerEntryDeleteManyArgs} args - Arguments to filter LedgerEntries to delete.
     * @example
     * // Delete a few LedgerEntries
     * const { count } = await prisma.ledgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerEntryDeleteManyArgs>(args?: SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerEntryUpdateManyArgs>(args: SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LedgerEntry.
     * @param {LedgerEntryUpsertArgs} args - Arguments to update or create a LedgerEntry.
     * @example
     * // Update or create a LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.upsert({
     *   create: {
     *     // ... data to create a LedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEntryUpsertArgs>(args: SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryCountArgs} args - Arguments to filter LedgerEntries to count.
     * @example
     * // Count the number of LedgerEntries
     * const count = await prisma.ledgerEntry.count({
     *   where: {
     *     // ... the filter for the LedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends LedgerEntryCountArgs>(
      args?: Subset<T, LedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LedgerEntryAggregateArgs>(args: Subset<T, LedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>

    /**
     * Group by LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryGroupByArgs} args - Group by arguments.
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
      T extends LedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerEntry model
   */
  readonly fields: LedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends LedgerAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerAccountDefaultArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    journalEntry<T extends JournalEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntryDefaultArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LedgerEntry model
   */ 
  interface LedgerEntryFieldRefs {
    readonly id: FieldRef<"LedgerEntry", 'String'>
    readonly journalEntryId: FieldRef<"LedgerEntry", 'String'>
    readonly accountId: FieldRef<"LedgerEntry", 'String'>
    readonly type: FieldRef<"LedgerEntry", 'String'>
    readonly amount: FieldRef<"LedgerEntry", 'Float'>
    readonly createdAt: FieldRef<"LedgerEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerEntry findUnique
   */
  export type LedgerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findUniqueOrThrow
   */
  export type LedgerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findFirst
   */
  export type LedgerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findFirstOrThrow
   */
  export type LedgerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findMany
   */
  export type LedgerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry create
   */
  export type LedgerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerEntry.
     */
    data: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
  }

  /**
   * LedgerEntry createMany
   */
  export type LedgerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerEntry createManyAndReturn
   */
  export type LedgerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntry update
   */
  export type LedgerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerEntry.
     */
    data: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
    /**
     * Choose, which LedgerEntry to update.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry updateMany
   */
  export type LedgerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput
  }

  /**
   * LedgerEntry upsert
   */
  export type LedgerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerEntry to update in case it exists.
     */
    where: LedgerEntryWhereUniqueInput
    /**
     * In case the LedgerEntry found by the `where` argument doesn't exist, create a new LedgerEntry with this data.
     */
    create: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
    /**
     * In case the LedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
  }

  /**
   * LedgerEntry delete
   */
  export type LedgerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter which LedgerEntry to delete.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry deleteMany
   */
  export type LedgerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntries to delete
     */
    where?: LedgerEntryWhereInput
  }

  /**
   * LedgerEntry without action
   */
  export type LedgerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
  }


  /**
   * Model WorkPeriod
   */

  export type AggregateWorkPeriod = {
    _count: WorkPeriodCountAggregateOutputType | null
    _avg: WorkPeriodAvgAggregateOutputType | null
    _sum: WorkPeriodSumAggregateOutputType | null
    _min: WorkPeriodMinAggregateOutputType | null
    _max: WorkPeriodMaxAggregateOutputType | null
  }

  export type WorkPeriodAvgAggregateOutputType = {
    totalRevenue: number | null
    totalExpense: number | null
    netProfit: number | null
    grossProfit: number | null
    version: number | null
  }

  export type WorkPeriodSumAggregateOutputType = {
    totalRevenue: number | null
    totalExpense: number | null
    netProfit: number | null
    grossProfit: number | null
    version: number | null
  }

  export type WorkPeriodMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    openedBy: string | null
    closedBy: string | null
    openedAt: Date | null
    closedAt: Date | null
    status: string | null
    totalRevenue: number | null
    totalExpense: number | null
    netProfit: number | null
    grossProfit: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    version: number | null
  }

  export type WorkPeriodMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    openedBy: string | null
    closedBy: string | null
    openedAt: Date | null
    closedAt: Date | null
    status: string | null
    totalRevenue: number | null
    totalExpense: number | null
    netProfit: number | null
    grossProfit: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    version: number | null
  }

  export type WorkPeriodCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    openedBy: number
    closedBy: number
    openedAt: number
    closedAt: number
    status: number
    totalRevenue: number
    totalExpense: number
    netProfit: number
    grossProfit: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    version: number
    _all: number
  }


  export type WorkPeriodAvgAggregateInputType = {
    totalRevenue?: true
    totalExpense?: true
    netProfit?: true
    grossProfit?: true
    version?: true
  }

  export type WorkPeriodSumAggregateInputType = {
    totalRevenue?: true
    totalExpense?: true
    netProfit?: true
    grossProfit?: true
    version?: true
  }

  export type WorkPeriodMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    openedBy?: true
    closedBy?: true
    openedAt?: true
    closedAt?: true
    status?: true
    totalRevenue?: true
    totalExpense?: true
    netProfit?: true
    grossProfit?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    version?: true
  }

  export type WorkPeriodMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    openedBy?: true
    closedBy?: true
    openedAt?: true
    closedAt?: true
    status?: true
    totalRevenue?: true
    totalExpense?: true
    netProfit?: true
    grossProfit?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    version?: true
  }

  export type WorkPeriodCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    openedBy?: true
    closedBy?: true
    openedAt?: true
    closedAt?: true
    status?: true
    totalRevenue?: true
    totalExpense?: true
    netProfit?: true
    grossProfit?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    version?: true
    _all?: true
  }

  export type WorkPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkPeriod to aggregate.
     */
    where?: WorkPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPeriods to fetch.
     */
    orderBy?: WorkPeriodOrderByWithRelationInput | WorkPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkPeriods
    **/
    _count?: true | WorkPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkPeriodMaxAggregateInputType
  }

  export type GetWorkPeriodAggregateType<T extends WorkPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkPeriod[P]>
      : GetScalarType<T[P], AggregateWorkPeriod[P]>
  }




  export type WorkPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkPeriodWhereInput
    orderBy?: WorkPeriodOrderByWithAggregationInput | WorkPeriodOrderByWithAggregationInput[]
    by: WorkPeriodScalarFieldEnum[] | WorkPeriodScalarFieldEnum
    having?: WorkPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkPeriodCountAggregateInputType | true
    _avg?: WorkPeriodAvgAggregateInputType
    _sum?: WorkPeriodSumAggregateInputType
    _min?: WorkPeriodMinAggregateInputType
    _max?: WorkPeriodMaxAggregateInputType
  }

  export type WorkPeriodGroupByOutputType = {
    id: string
    tenantId: string | null
    shopId: string
    openedBy: string
    closedBy: string | null
    openedAt: Date
    closedAt: Date | null
    status: string
    totalRevenue: number
    totalExpense: number
    netProfit: number
    grossProfit: number
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    version: number
    _count: WorkPeriodCountAggregateOutputType | null
    _avg: WorkPeriodAvgAggregateOutputType | null
    _sum: WorkPeriodSumAggregateOutputType | null
    _min: WorkPeriodMinAggregateOutputType | null
    _max: WorkPeriodMaxAggregateOutputType | null
  }

  type GetWorkPeriodGroupByPayload<T extends WorkPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], WorkPeriodGroupByOutputType[P]>
        }
      >
    >


  export type WorkPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    openedBy?: boolean
    closedBy?: boolean
    openedAt?: boolean
    closedAt?: boolean
    status?: boolean
    totalRevenue?: boolean
    totalExpense?: boolean
    netProfit?: boolean
    grossProfit?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    version?: boolean
  }, ExtArgs["result"]["workPeriod"]>

  export type WorkPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    openedBy?: boolean
    closedBy?: boolean
    openedAt?: boolean
    closedAt?: boolean
    status?: boolean
    totalRevenue?: boolean
    totalExpense?: boolean
    netProfit?: boolean
    grossProfit?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    version?: boolean
  }, ExtArgs["result"]["workPeriod"]>

  export type WorkPeriodSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    openedBy?: boolean
    closedBy?: boolean
    openedAt?: boolean
    closedAt?: boolean
    status?: boolean
    totalRevenue?: boolean
    totalExpense?: boolean
    netProfit?: boolean
    grossProfit?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    version?: boolean
  }


  export type $WorkPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkPeriod"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string | null
      shopId: string
      openedBy: string
      closedBy: string | null
      openedAt: Date
      closedAt: Date | null
      status: string
      totalRevenue: number
      totalExpense: number
      netProfit: number
      grossProfit: number
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
      updatedBy: string | null
      version: number
    }, ExtArgs["result"]["workPeriod"]>
    composites: {}
  }

  type WorkPeriodGetPayload<S extends boolean | null | undefined | WorkPeriodDefaultArgs> = $Result.GetResult<Prisma.$WorkPeriodPayload, S>

  type WorkPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkPeriodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkPeriodCountAggregateInputType | true
    }

  export interface WorkPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkPeriod'], meta: { name: 'WorkPeriod' } }
    /**
     * Find zero or one WorkPeriod that matches the filter.
     * @param {WorkPeriodFindUniqueArgs} args - Arguments to find a WorkPeriod
     * @example
     * // Get one WorkPeriod
     * const workPeriod = await prisma.workPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkPeriodFindUniqueArgs>(args: SelectSubset<T, WorkPeriodFindUniqueArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkPeriod that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkPeriodFindUniqueOrThrowArgs} args - Arguments to find a WorkPeriod
     * @example
     * // Get one WorkPeriod
     * const workPeriod = await prisma.workPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodFindFirstArgs} args - Arguments to find a WorkPeriod
     * @example
     * // Get one WorkPeriod
     * const workPeriod = await prisma.workPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkPeriodFindFirstArgs>(args?: SelectSubset<T, WorkPeriodFindFirstArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodFindFirstOrThrowArgs} args - Arguments to find a WorkPeriod
     * @example
     * // Get one WorkPeriod
     * const workPeriod = await prisma.workPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkPeriods
     * const workPeriods = await prisma.workPeriod.findMany()
     * 
     * // Get first 10 WorkPeriods
     * const workPeriods = await prisma.workPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workPeriodWithIdOnly = await prisma.workPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkPeriodFindManyArgs>(args?: SelectSubset<T, WorkPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkPeriod.
     * @param {WorkPeriodCreateArgs} args - Arguments to create a WorkPeriod.
     * @example
     * // Create one WorkPeriod
     * const WorkPeriod = await prisma.workPeriod.create({
     *   data: {
     *     // ... data to create a WorkPeriod
     *   }
     * })
     * 
     */
    create<T extends WorkPeriodCreateArgs>(args: SelectSubset<T, WorkPeriodCreateArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkPeriods.
     * @param {WorkPeriodCreateManyArgs} args - Arguments to create many WorkPeriods.
     * @example
     * // Create many WorkPeriods
     * const workPeriod = await prisma.workPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkPeriodCreateManyArgs>(args?: SelectSubset<T, WorkPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkPeriods and returns the data saved in the database.
     * @param {WorkPeriodCreateManyAndReturnArgs} args - Arguments to create many WorkPeriods.
     * @example
     * // Create many WorkPeriods
     * const workPeriod = await prisma.workPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkPeriods and only return the `id`
     * const workPeriodWithIdOnly = await prisma.workPeriod.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkPeriod.
     * @param {WorkPeriodDeleteArgs} args - Arguments to delete one WorkPeriod.
     * @example
     * // Delete one WorkPeriod
     * const WorkPeriod = await prisma.workPeriod.delete({
     *   where: {
     *     // ... filter to delete one WorkPeriod
     *   }
     * })
     * 
     */
    delete<T extends WorkPeriodDeleteArgs>(args: SelectSubset<T, WorkPeriodDeleteArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkPeriod.
     * @param {WorkPeriodUpdateArgs} args - Arguments to update one WorkPeriod.
     * @example
     * // Update one WorkPeriod
     * const workPeriod = await prisma.workPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkPeriodUpdateArgs>(args: SelectSubset<T, WorkPeriodUpdateArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkPeriods.
     * @param {WorkPeriodDeleteManyArgs} args - Arguments to filter WorkPeriods to delete.
     * @example
     * // Delete a few WorkPeriods
     * const { count } = await prisma.workPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkPeriodDeleteManyArgs>(args?: SelectSubset<T, WorkPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkPeriods
     * const workPeriod = await prisma.workPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkPeriodUpdateManyArgs>(args: SelectSubset<T, WorkPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkPeriod.
     * @param {WorkPeriodUpsertArgs} args - Arguments to update or create a WorkPeriod.
     * @example
     * // Update or create a WorkPeriod
     * const workPeriod = await prisma.workPeriod.upsert({
     *   create: {
     *     // ... data to create a WorkPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkPeriod we want to update
     *   }
     * })
     */
    upsert<T extends WorkPeriodUpsertArgs>(args: SelectSubset<T, WorkPeriodUpsertArgs<ExtArgs>>): Prisma__WorkPeriodClient<$Result.GetResult<Prisma.$WorkPeriodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodCountArgs} args - Arguments to filter WorkPeriods to count.
     * @example
     * // Count the number of WorkPeriods
     * const count = await prisma.workPeriod.count({
     *   where: {
     *     // ... the filter for the WorkPeriods we want to count
     *   }
     * })
    **/
    count<T extends WorkPeriodCountArgs>(
      args?: Subset<T, WorkPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkPeriodAggregateArgs>(args: Subset<T, WorkPeriodAggregateArgs>): Prisma.PrismaPromise<GetWorkPeriodAggregateType<T>>

    /**
     * Group by WorkPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPeriodGroupByArgs} args - Group by arguments.
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
      T extends WorkPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkPeriodGroupByArgs['orderBy'] }
        : { orderBy?: WorkPeriodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkPeriod model
   */
  readonly fields: WorkPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WorkPeriod model
   */ 
  interface WorkPeriodFieldRefs {
    readonly id: FieldRef<"WorkPeriod", 'String'>
    readonly tenantId: FieldRef<"WorkPeriod", 'String'>
    readonly shopId: FieldRef<"WorkPeriod", 'String'>
    readonly openedBy: FieldRef<"WorkPeriod", 'String'>
    readonly closedBy: FieldRef<"WorkPeriod", 'String'>
    readonly openedAt: FieldRef<"WorkPeriod", 'DateTime'>
    readonly closedAt: FieldRef<"WorkPeriod", 'DateTime'>
    readonly status: FieldRef<"WorkPeriod", 'String'>
    readonly totalRevenue: FieldRef<"WorkPeriod", 'Float'>
    readonly totalExpense: FieldRef<"WorkPeriod", 'Float'>
    readonly netProfit: FieldRef<"WorkPeriod", 'Float'>
    readonly grossProfit: FieldRef<"WorkPeriod", 'Float'>
    readonly createdAt: FieldRef<"WorkPeriod", 'DateTime'>
    readonly createdBy: FieldRef<"WorkPeriod", 'String'>
    readonly updatedAt: FieldRef<"WorkPeriod", 'DateTime'>
    readonly updatedBy: FieldRef<"WorkPeriod", 'String'>
    readonly version: FieldRef<"WorkPeriod", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkPeriod findUnique
   */
  export type WorkPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * Filter, which WorkPeriod to fetch.
     */
    where: WorkPeriodWhereUniqueInput
  }

  /**
   * WorkPeriod findUniqueOrThrow
   */
  export type WorkPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * Filter, which WorkPeriod to fetch.
     */
    where: WorkPeriodWhereUniqueInput
  }

  /**
   * WorkPeriod findFirst
   */
  export type WorkPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * Filter, which WorkPeriod to fetch.
     */
    where?: WorkPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPeriods to fetch.
     */
    orderBy?: WorkPeriodOrderByWithRelationInput | WorkPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkPeriods.
     */
    cursor?: WorkPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkPeriods.
     */
    distinct?: WorkPeriodScalarFieldEnum | WorkPeriodScalarFieldEnum[]
  }

  /**
   * WorkPeriod findFirstOrThrow
   */
  export type WorkPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * Filter, which WorkPeriod to fetch.
     */
    where?: WorkPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPeriods to fetch.
     */
    orderBy?: WorkPeriodOrderByWithRelationInput | WorkPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkPeriods.
     */
    cursor?: WorkPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkPeriods.
     */
    distinct?: WorkPeriodScalarFieldEnum | WorkPeriodScalarFieldEnum[]
  }

  /**
   * WorkPeriod findMany
   */
  export type WorkPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * Filter, which WorkPeriods to fetch.
     */
    where?: WorkPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPeriods to fetch.
     */
    orderBy?: WorkPeriodOrderByWithRelationInput | WorkPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkPeriods.
     */
    cursor?: WorkPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPeriods.
     */
    skip?: number
    distinct?: WorkPeriodScalarFieldEnum | WorkPeriodScalarFieldEnum[]
  }

  /**
   * WorkPeriod create
   */
  export type WorkPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * The data needed to create a WorkPeriod.
     */
    data: XOR<WorkPeriodCreateInput, WorkPeriodUncheckedCreateInput>
  }

  /**
   * WorkPeriod createMany
   */
  export type WorkPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkPeriods.
     */
    data: WorkPeriodCreateManyInput | WorkPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkPeriod createManyAndReturn
   */
  export type WorkPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkPeriods.
     */
    data: WorkPeriodCreateManyInput | WorkPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkPeriod update
   */
  export type WorkPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * The data needed to update a WorkPeriod.
     */
    data: XOR<WorkPeriodUpdateInput, WorkPeriodUncheckedUpdateInput>
    /**
     * Choose, which WorkPeriod to update.
     */
    where: WorkPeriodWhereUniqueInput
  }

  /**
   * WorkPeriod updateMany
   */
  export type WorkPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkPeriods.
     */
    data: XOR<WorkPeriodUpdateManyMutationInput, WorkPeriodUncheckedUpdateManyInput>
    /**
     * Filter which WorkPeriods to update
     */
    where?: WorkPeriodWhereInput
  }

  /**
   * WorkPeriod upsert
   */
  export type WorkPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * The filter to search for the WorkPeriod to update in case it exists.
     */
    where: WorkPeriodWhereUniqueInput
    /**
     * In case the WorkPeriod found by the `where` argument doesn't exist, create a new WorkPeriod with this data.
     */
    create: XOR<WorkPeriodCreateInput, WorkPeriodUncheckedCreateInput>
    /**
     * In case the WorkPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkPeriodUpdateInput, WorkPeriodUncheckedUpdateInput>
  }

  /**
   * WorkPeriod delete
   */
  export type WorkPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
    /**
     * Filter which WorkPeriod to delete.
     */
    where: WorkPeriodWhereUniqueInput
  }

  /**
   * WorkPeriod deleteMany
   */
  export type WorkPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkPeriods to delete
     */
    where?: WorkPeriodWhereInput
  }

  /**
   * WorkPeriod without action
   */
  export type WorkPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPeriod
     */
    select?: WorkPeriodSelect<ExtArgs> | null
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
   * Model FinancialTransaction
   */

  export type AggregateFinancialTransaction = {
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  export type FinancialTransactionAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type FinancialTransactionSumAggregateOutputType = {
    amountMinor: bigint | null
  }

  export type FinancialTransactionMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    type: string | null
    occurredOn: Date | null
    occurredAt: Date | null
    actorUserId: string | null
    sourceDomain: string | null
    sourceCommand: string | null
    sourceId: string | null
    idempotencyKey: string | null
    amountMinor: bigint | null
    currency: string | null
    description: string | null
    reason: string | null
    originalTransactionId: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
  }

  export type FinancialTransactionMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    type: string | null
    occurredOn: Date | null
    occurredAt: Date | null
    actorUserId: string | null
    sourceDomain: string | null
    sourceCommand: string | null
    sourceId: string | null
    idempotencyKey: string | null
    amountMinor: bigint | null
    currency: string | null
    description: string | null
    reason: string | null
    originalTransactionId: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
  }

  export type FinancialTransactionCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    type: number
    occurredOn: number
    occurredAt: number
    actorUserId: number
    sourceDomain: number
    sourceCommand: number
    sourceId: number
    idempotencyKey: number
    amountMinor: number
    currency: number
    description: number
    reason: number
    originalTransactionId: number
    status: number
    metadata: number
    createdAt: number
    createdBy: number
    updatedAt: number
    _all: number
  }


  export type FinancialTransactionAvgAggregateInputType = {
    amountMinor?: true
  }

  export type FinancialTransactionSumAggregateInputType = {
    amountMinor?: true
  }

  export type FinancialTransactionMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    type?: true
    occurredOn?: true
    occurredAt?: true
    actorUserId?: true
    sourceDomain?: true
    sourceCommand?: true
    sourceId?: true
    idempotencyKey?: true
    amountMinor?: true
    currency?: true
    description?: true
    reason?: true
    originalTransactionId?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
  }

  export type FinancialTransactionMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    type?: true
    occurredOn?: true
    occurredAt?: true
    actorUserId?: true
    sourceDomain?: true
    sourceCommand?: true
    sourceId?: true
    idempotencyKey?: true
    amountMinor?: true
    currency?: true
    description?: true
    reason?: true
    originalTransactionId?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
  }

  export type FinancialTransactionCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    type?: true
    occurredOn?: true
    occurredAt?: true
    actorUserId?: true
    sourceDomain?: true
    sourceCommand?: true
    sourceId?: true
    idempotencyKey?: true
    amountMinor?: true
    currency?: true
    description?: true
    reason?: true
    originalTransactionId?: true
    status?: true
    metadata?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransaction to aggregate.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialTransactions
    **/
    _count?: true | FinancialTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type GetFinancialTransactionAggregateType<T extends FinancialTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialTransaction[P]>
      : GetScalarType<T[P], AggregateFinancialTransaction[P]>
  }




  export type FinancialTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithAggregationInput | FinancialTransactionOrderByWithAggregationInput[]
    by: FinancialTransactionScalarFieldEnum[] | FinancialTransactionScalarFieldEnum
    having?: FinancialTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialTransactionCountAggregateInputType | true
    _avg?: FinancialTransactionAvgAggregateInputType
    _sum?: FinancialTransactionSumAggregateInputType
    _min?: FinancialTransactionMinAggregateInputType
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type FinancialTransactionGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    type: string
    occurredOn: Date
    occurredAt: Date
    actorUserId: string | null
    sourceDomain: string
    sourceCommand: string
    sourceId: string
    idempotencyKey: string
    amountMinor: bigint
    currency: string
    description: string | null
    reason: string | null
    originalTransactionId: string | null
    status: string
    metadata: JsonValue | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  type GetFinancialTransactionGroupByPayload<T extends FinancialTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FinancialTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    type?: boolean
    occurredOn?: boolean
    occurredAt?: boolean
    actorUserId?: boolean
    sourceDomain?: boolean
    sourceCommand?: boolean
    sourceId?: boolean
    idempotencyKey?: boolean
    amountMinor?: boolean
    currency?: boolean
    description?: boolean
    reason?: boolean
    originalTransactionId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    type?: boolean
    occurredOn?: boolean
    occurredAt?: boolean
    actorUserId?: boolean
    sourceDomain?: boolean
    sourceCommand?: boolean
    sourceId?: boolean
    idempotencyKey?: boolean
    amountMinor?: boolean
    currency?: boolean
    description?: boolean
    reason?: boolean
    originalTransactionId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    type?: boolean
    occurredOn?: boolean
    occurredAt?: boolean
    actorUserId?: boolean
    sourceDomain?: boolean
    sourceCommand?: boolean
    sourceId?: boolean
    idempotencyKey?: boolean
    amountMinor?: boolean
    currency?: boolean
    description?: boolean
    reason?: boolean
    originalTransactionId?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
  }


  export type $FinancialTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      type: string
      occurredOn: Date
      occurredAt: Date
      actorUserId: string | null
      sourceDomain: string
      sourceCommand: string
      sourceId: string
      idempotencyKey: string
      amountMinor: bigint
      currency: string
      description: string | null
      reason: string | null
      originalTransactionId: string | null
      status: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
    }, ExtArgs["result"]["financialTransaction"]>
    composites: {}
  }

  type FinancialTransactionGetPayload<S extends boolean | null | undefined | FinancialTransactionDefaultArgs> = $Result.GetResult<Prisma.$FinancialTransactionPayload, S>

  type FinancialTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinancialTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinancialTransactionCountAggregateInputType | true
    }

  export interface FinancialTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialTransaction'], meta: { name: 'FinancialTransaction' } }
    /**
     * Find zero or one FinancialTransaction that matches the filter.
     * @param {FinancialTransactionFindUniqueArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialTransactionFindUniqueArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FinancialTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinancialTransactionFindUniqueOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FinancialTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialTransactionFindFirstArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FinancialTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FinancialTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany()
     * 
     * // Get first 10 FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialTransactionFindManyArgs>(args?: SelectSubset<T, FinancialTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FinancialTransaction.
     * @param {FinancialTransactionCreateArgs} args - Arguments to create a FinancialTransaction.
     * @example
     * // Create one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.create({
     *   data: {
     *     // ... data to create a FinancialTransaction
     *   }
     * })
     * 
     */
    create<T extends FinancialTransactionCreateArgs>(args: SelectSubset<T, FinancialTransactionCreateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FinancialTransactions.
     * @param {FinancialTransactionCreateManyArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialTransactionCreateManyArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialTransactions and returns the data saved in the database.
     * @param {FinancialTransactionCreateManyAndReturnArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FinancialTransaction.
     * @param {FinancialTransactionDeleteArgs} args - Arguments to delete one FinancialTransaction.
     * @example
     * // Delete one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.delete({
     *   where: {
     *     // ... filter to delete one FinancialTransaction
     *   }
     * })
     * 
     */
    delete<T extends FinancialTransactionDeleteArgs>(args: SelectSubset<T, FinancialTransactionDeleteArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FinancialTransaction.
     * @param {FinancialTransactionUpdateArgs} args - Arguments to update one FinancialTransaction.
     * @example
     * // Update one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialTransactionUpdateArgs>(args: SelectSubset<T, FinancialTransactionUpdateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FinancialTransactions.
     * @param {FinancialTransactionDeleteManyArgs} args - Arguments to filter FinancialTransactions to delete.
     * @example
     * // Delete a few FinancialTransactions
     * const { count } = await prisma.financialTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialTransactionDeleteManyArgs>(args?: SelectSubset<T, FinancialTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialTransactionUpdateManyArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinancialTransaction.
     * @param {FinancialTransactionUpsertArgs} args - Arguments to update or create a FinancialTransaction.
     * @example
     * // Update or create a FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.upsert({
     *   create: {
     *     // ... data to create a FinancialTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FinancialTransactionUpsertArgs>(args: SelectSubset<T, FinancialTransactionUpsertArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionCountArgs} args - Arguments to filter FinancialTransactions to count.
     * @example
     * // Count the number of FinancialTransactions
     * const count = await prisma.financialTransaction.count({
     *   where: {
     *     // ... the filter for the FinancialTransactions we want to count
     *   }
     * })
    **/
    count<T extends FinancialTransactionCountArgs>(
      args?: Subset<T, FinancialTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialTransactionAggregateArgs>(args: Subset<T, FinancialTransactionAggregateArgs>): Prisma.PrismaPromise<GetFinancialTransactionAggregateType<T>>

    /**
     * Group by FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionGroupByArgs} args - Group by arguments.
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
      T extends FinancialTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FinancialTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialTransaction model
   */
  readonly fields: FinancialTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FinancialTransaction model
   */ 
  interface FinancialTransactionFieldRefs {
    readonly id: FieldRef<"FinancialTransaction", 'String'>
    readonly tenantId: FieldRef<"FinancialTransaction", 'String'>
    readonly shopId: FieldRef<"FinancialTransaction", 'String'>
    readonly type: FieldRef<"FinancialTransaction", 'String'>
    readonly occurredOn: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly occurredAt: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly actorUserId: FieldRef<"FinancialTransaction", 'String'>
    readonly sourceDomain: FieldRef<"FinancialTransaction", 'String'>
    readonly sourceCommand: FieldRef<"FinancialTransaction", 'String'>
    readonly sourceId: FieldRef<"FinancialTransaction", 'String'>
    readonly idempotencyKey: FieldRef<"FinancialTransaction", 'String'>
    readonly amountMinor: FieldRef<"FinancialTransaction", 'BigInt'>
    readonly currency: FieldRef<"FinancialTransaction", 'String'>
    readonly description: FieldRef<"FinancialTransaction", 'String'>
    readonly reason: FieldRef<"FinancialTransaction", 'String'>
    readonly originalTransactionId: FieldRef<"FinancialTransaction", 'String'>
    readonly status: FieldRef<"FinancialTransaction", 'String'>
    readonly metadata: FieldRef<"FinancialTransaction", 'Json'>
    readonly createdAt: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly createdBy: FieldRef<"FinancialTransaction", 'String'>
    readonly updatedAt: FieldRef<"FinancialTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialTransaction findUnique
   */
  export type FinancialTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findUniqueOrThrow
   */
  export type FinancialTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findFirst
   */
  export type FinancialTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findFirstOrThrow
   */
  export type FinancialTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findMany
   */
  export type FinancialTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Filter, which FinancialTransactions to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction create
   */
  export type FinancialTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a FinancialTransaction.
     */
    data: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
  }

  /**
   * FinancialTransaction createMany
   */
  export type FinancialTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialTransaction createManyAndReturn
   */
  export type FinancialTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialTransaction update
   */
  export type FinancialTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a FinancialTransaction.
     */
    data: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
    /**
     * Choose, which FinancialTransaction to update.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction updateMany
   */
  export type FinancialTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
  }

  /**
   * FinancialTransaction upsert
   */
  export type FinancialTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the FinancialTransaction to update in case it exists.
     */
    where: FinancialTransactionWhereUniqueInput
    /**
     * In case the FinancialTransaction found by the `where` argument doesn't exist, create a new FinancialTransaction with this data.
     */
    create: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
    /**
     * In case the FinancialTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
  }

  /**
   * FinancialTransaction delete
   */
  export type FinancialTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Filter which FinancialTransaction to delete.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction deleteMany
   */
  export type FinancialTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransactions to delete
     */
    where?: FinancialTransactionWhereInput
  }

  /**
   * FinancialTransaction without action
   */
  export type FinancialTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
  }


  /**
   * Model ChartAccount
   */

  export type AggregateChartAccount = {
    _count: ChartAccountCountAggregateOutputType | null
    _min: ChartAccountMinAggregateOutputType | null
    _max: ChartAccountMaxAggregateOutputType | null
  }

  export type ChartAccountMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    code: string | null
    name: string | null
    type: string | null
    fundCode: string | null
    createdAt: Date | null
  }

  export type ChartAccountMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    code: string | null
    name: string | null
    type: string | null
    fundCode: string | null
    createdAt: Date | null
  }

  export type ChartAccountCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    code: number
    name: number
    type: number
    fundCode: number
    createdAt: number
    _all: number
  }


  export type ChartAccountMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    code?: true
    name?: true
    type?: true
    fundCode?: true
    createdAt?: true
  }

  export type ChartAccountMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    code?: true
    name?: true
    type?: true
    fundCode?: true
    createdAt?: true
  }

  export type ChartAccountCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    code?: true
    name?: true
    type?: true
    fundCode?: true
    createdAt?: true
    _all?: true
  }

  export type ChartAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChartAccount to aggregate.
     */
    where?: ChartAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartAccounts to fetch.
     */
    orderBy?: ChartAccountOrderByWithRelationInput | ChartAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChartAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChartAccounts
    **/
    _count?: true | ChartAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChartAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChartAccountMaxAggregateInputType
  }

  export type GetChartAccountAggregateType<T extends ChartAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateChartAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChartAccount[P]>
      : GetScalarType<T[P], AggregateChartAccount[P]>
  }




  export type ChartAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartAccountWhereInput
    orderBy?: ChartAccountOrderByWithAggregationInput | ChartAccountOrderByWithAggregationInput[]
    by: ChartAccountScalarFieldEnum[] | ChartAccountScalarFieldEnum
    having?: ChartAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChartAccountCountAggregateInputType | true
    _min?: ChartAccountMinAggregateInputType
    _max?: ChartAccountMaxAggregateInputType
  }

  export type ChartAccountGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    fundCode: string | null
    createdAt: Date
    _count: ChartAccountCountAggregateOutputType | null
    _min: ChartAccountMinAggregateOutputType | null
    _max: ChartAccountMaxAggregateOutputType | null
  }

  type GetChartAccountGroupByPayload<T extends ChartAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChartAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChartAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChartAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ChartAccountGroupByOutputType[P]>
        }
      >
    >


  export type ChartAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    fundCode?: boolean
    createdAt?: boolean
    lines?: boolean | ChartAccount$linesArgs<ExtArgs>
    _count?: boolean | ChartAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chartAccount"]>

  export type ChartAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    fundCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chartAccount"]>

  export type ChartAccountSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    fundCode?: boolean
    createdAt?: boolean
  }

  export type ChartAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | ChartAccount$linesArgs<ExtArgs>
    _count?: boolean | ChartAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChartAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChartAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChartAccount"
    objects: {
      lines: Prisma.$PostedJournalLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      code: string
      name: string
      type: string
      fundCode: string | null
      createdAt: Date
    }, ExtArgs["result"]["chartAccount"]>
    composites: {}
  }

  type ChartAccountGetPayload<S extends boolean | null | undefined | ChartAccountDefaultArgs> = $Result.GetResult<Prisma.$ChartAccountPayload, S>

  type ChartAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChartAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChartAccountCountAggregateInputType | true
    }

  export interface ChartAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChartAccount'], meta: { name: 'ChartAccount' } }
    /**
     * Find zero or one ChartAccount that matches the filter.
     * @param {ChartAccountFindUniqueArgs} args - Arguments to find a ChartAccount
     * @example
     * // Get one ChartAccount
     * const chartAccount = await prisma.chartAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChartAccountFindUniqueArgs>(args: SelectSubset<T, ChartAccountFindUniqueArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChartAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChartAccountFindUniqueOrThrowArgs} args - Arguments to find a ChartAccount
     * @example
     * // Get one ChartAccount
     * const chartAccount = await prisma.chartAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChartAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ChartAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChartAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountFindFirstArgs} args - Arguments to find a ChartAccount
     * @example
     * // Get one ChartAccount
     * const chartAccount = await prisma.chartAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChartAccountFindFirstArgs>(args?: SelectSubset<T, ChartAccountFindFirstArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChartAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountFindFirstOrThrowArgs} args - Arguments to find a ChartAccount
     * @example
     * // Get one ChartAccount
     * const chartAccount = await prisma.chartAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChartAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ChartAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChartAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChartAccounts
     * const chartAccounts = await prisma.chartAccount.findMany()
     * 
     * // Get first 10 ChartAccounts
     * const chartAccounts = await prisma.chartAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chartAccountWithIdOnly = await prisma.chartAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChartAccountFindManyArgs>(args?: SelectSubset<T, ChartAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChartAccount.
     * @param {ChartAccountCreateArgs} args - Arguments to create a ChartAccount.
     * @example
     * // Create one ChartAccount
     * const ChartAccount = await prisma.chartAccount.create({
     *   data: {
     *     // ... data to create a ChartAccount
     *   }
     * })
     * 
     */
    create<T extends ChartAccountCreateArgs>(args: SelectSubset<T, ChartAccountCreateArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChartAccounts.
     * @param {ChartAccountCreateManyArgs} args - Arguments to create many ChartAccounts.
     * @example
     * // Create many ChartAccounts
     * const chartAccount = await prisma.chartAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChartAccountCreateManyArgs>(args?: SelectSubset<T, ChartAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChartAccounts and returns the data saved in the database.
     * @param {ChartAccountCreateManyAndReturnArgs} args - Arguments to create many ChartAccounts.
     * @example
     * // Create many ChartAccounts
     * const chartAccount = await prisma.chartAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChartAccounts and only return the `id`
     * const chartAccountWithIdOnly = await prisma.chartAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChartAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, ChartAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChartAccount.
     * @param {ChartAccountDeleteArgs} args - Arguments to delete one ChartAccount.
     * @example
     * // Delete one ChartAccount
     * const ChartAccount = await prisma.chartAccount.delete({
     *   where: {
     *     // ... filter to delete one ChartAccount
     *   }
     * })
     * 
     */
    delete<T extends ChartAccountDeleteArgs>(args: SelectSubset<T, ChartAccountDeleteArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChartAccount.
     * @param {ChartAccountUpdateArgs} args - Arguments to update one ChartAccount.
     * @example
     * // Update one ChartAccount
     * const chartAccount = await prisma.chartAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChartAccountUpdateArgs>(args: SelectSubset<T, ChartAccountUpdateArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChartAccounts.
     * @param {ChartAccountDeleteManyArgs} args - Arguments to filter ChartAccounts to delete.
     * @example
     * // Delete a few ChartAccounts
     * const { count } = await prisma.chartAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChartAccountDeleteManyArgs>(args?: SelectSubset<T, ChartAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChartAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChartAccounts
     * const chartAccount = await prisma.chartAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChartAccountUpdateManyArgs>(args: SelectSubset<T, ChartAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChartAccount.
     * @param {ChartAccountUpsertArgs} args - Arguments to update or create a ChartAccount.
     * @example
     * // Update or create a ChartAccount
     * const chartAccount = await prisma.chartAccount.upsert({
     *   create: {
     *     // ... data to create a ChartAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChartAccount we want to update
     *   }
     * })
     */
    upsert<T extends ChartAccountUpsertArgs>(args: SelectSubset<T, ChartAccountUpsertArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChartAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountCountArgs} args - Arguments to filter ChartAccounts to count.
     * @example
     * // Count the number of ChartAccounts
     * const count = await prisma.chartAccount.count({
     *   where: {
     *     // ... the filter for the ChartAccounts we want to count
     *   }
     * })
    **/
    count<T extends ChartAccountCountArgs>(
      args?: Subset<T, ChartAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChartAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChartAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChartAccountAggregateArgs>(args: Subset<T, ChartAccountAggregateArgs>): Prisma.PrismaPromise<GetChartAccountAggregateType<T>>

    /**
     * Group by ChartAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAccountGroupByArgs} args - Group by arguments.
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
      T extends ChartAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChartAccountGroupByArgs['orderBy'] }
        : { orderBy?: ChartAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChartAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChartAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChartAccount model
   */
  readonly fields: ChartAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChartAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChartAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends ChartAccount$linesArgs<ExtArgs> = {}>(args?: Subset<T, ChartAccount$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ChartAccount model
   */ 
  interface ChartAccountFieldRefs {
    readonly id: FieldRef<"ChartAccount", 'String'>
    readonly tenantId: FieldRef<"ChartAccount", 'String'>
    readonly shopId: FieldRef<"ChartAccount", 'String'>
    readonly code: FieldRef<"ChartAccount", 'String'>
    readonly name: FieldRef<"ChartAccount", 'String'>
    readonly type: FieldRef<"ChartAccount", 'String'>
    readonly fundCode: FieldRef<"ChartAccount", 'String'>
    readonly createdAt: FieldRef<"ChartAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChartAccount findUnique
   */
  export type ChartAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * Filter, which ChartAccount to fetch.
     */
    where: ChartAccountWhereUniqueInput
  }

  /**
   * ChartAccount findUniqueOrThrow
   */
  export type ChartAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * Filter, which ChartAccount to fetch.
     */
    where: ChartAccountWhereUniqueInput
  }

  /**
   * ChartAccount findFirst
   */
  export type ChartAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * Filter, which ChartAccount to fetch.
     */
    where?: ChartAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartAccounts to fetch.
     */
    orderBy?: ChartAccountOrderByWithRelationInput | ChartAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChartAccounts.
     */
    cursor?: ChartAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartAccounts.
     */
    distinct?: ChartAccountScalarFieldEnum | ChartAccountScalarFieldEnum[]
  }

  /**
   * ChartAccount findFirstOrThrow
   */
  export type ChartAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * Filter, which ChartAccount to fetch.
     */
    where?: ChartAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartAccounts to fetch.
     */
    orderBy?: ChartAccountOrderByWithRelationInput | ChartAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChartAccounts.
     */
    cursor?: ChartAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartAccounts.
     */
    distinct?: ChartAccountScalarFieldEnum | ChartAccountScalarFieldEnum[]
  }

  /**
   * ChartAccount findMany
   */
  export type ChartAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * Filter, which ChartAccounts to fetch.
     */
    where?: ChartAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartAccounts to fetch.
     */
    orderBy?: ChartAccountOrderByWithRelationInput | ChartAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChartAccounts.
     */
    cursor?: ChartAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartAccounts.
     */
    skip?: number
    distinct?: ChartAccountScalarFieldEnum | ChartAccountScalarFieldEnum[]
  }

  /**
   * ChartAccount create
   */
  export type ChartAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ChartAccount.
     */
    data: XOR<ChartAccountCreateInput, ChartAccountUncheckedCreateInput>
  }

  /**
   * ChartAccount createMany
   */
  export type ChartAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChartAccounts.
     */
    data: ChartAccountCreateManyInput | ChartAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChartAccount createManyAndReturn
   */
  export type ChartAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChartAccounts.
     */
    data: ChartAccountCreateManyInput | ChartAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChartAccount update
   */
  export type ChartAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ChartAccount.
     */
    data: XOR<ChartAccountUpdateInput, ChartAccountUncheckedUpdateInput>
    /**
     * Choose, which ChartAccount to update.
     */
    where: ChartAccountWhereUniqueInput
  }

  /**
   * ChartAccount updateMany
   */
  export type ChartAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChartAccounts.
     */
    data: XOR<ChartAccountUpdateManyMutationInput, ChartAccountUncheckedUpdateManyInput>
    /**
     * Filter which ChartAccounts to update
     */
    where?: ChartAccountWhereInput
  }

  /**
   * ChartAccount upsert
   */
  export type ChartAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ChartAccount to update in case it exists.
     */
    where: ChartAccountWhereUniqueInput
    /**
     * In case the ChartAccount found by the `where` argument doesn't exist, create a new ChartAccount with this data.
     */
    create: XOR<ChartAccountCreateInput, ChartAccountUncheckedCreateInput>
    /**
     * In case the ChartAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChartAccountUpdateInput, ChartAccountUncheckedUpdateInput>
  }

  /**
   * ChartAccount delete
   */
  export type ChartAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
    /**
     * Filter which ChartAccount to delete.
     */
    where: ChartAccountWhereUniqueInput
  }

  /**
   * ChartAccount deleteMany
   */
  export type ChartAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChartAccounts to delete
     */
    where?: ChartAccountWhereInput
  }

  /**
   * ChartAccount.lines
   */
  export type ChartAccount$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    where?: PostedJournalLineWhereInput
    orderBy?: PostedJournalLineOrderByWithRelationInput | PostedJournalLineOrderByWithRelationInput[]
    cursor?: PostedJournalLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostedJournalLineScalarFieldEnum | PostedJournalLineScalarFieldEnum[]
  }

  /**
   * ChartAccount without action
   */
  export type ChartAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartAccount
     */
    select?: ChartAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartAccountInclude<ExtArgs> | null
  }


  /**
   * Model PostedJournal
   */

  export type AggregatePostedJournal = {
    _count: PostedJournalCountAggregateOutputType | null
    _min: PostedJournalMinAggregateOutputType | null
    _max: PostedJournalMaxAggregateOutputType | null
  }

  export type PostedJournalMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    financialTransactionId: string | null
    description: string | null
    status: string | null
    postedBy: string | null
    occurredOn: Date | null
    createdAt: Date | null
  }

  export type PostedJournalMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    financialTransactionId: string | null
    description: string | null
    status: string | null
    postedBy: string | null
    occurredOn: Date | null
    createdAt: Date | null
  }

  export type PostedJournalCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    financialTransactionId: number
    description: number
    status: number
    postedBy: number
    occurredOn: number
    createdAt: number
    _all: number
  }


  export type PostedJournalMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    financialTransactionId?: true
    description?: true
    status?: true
    postedBy?: true
    occurredOn?: true
    createdAt?: true
  }

  export type PostedJournalMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    financialTransactionId?: true
    description?: true
    status?: true
    postedBy?: true
    occurredOn?: true
    createdAt?: true
  }

  export type PostedJournalCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    financialTransactionId?: true
    description?: true
    status?: true
    postedBy?: true
    occurredOn?: true
    createdAt?: true
    _all?: true
  }

  export type PostedJournalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostedJournal to aggregate.
     */
    where?: PostedJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournals to fetch.
     */
    orderBy?: PostedJournalOrderByWithRelationInput | PostedJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostedJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostedJournals
    **/
    _count?: true | PostedJournalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostedJournalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostedJournalMaxAggregateInputType
  }

  export type GetPostedJournalAggregateType<T extends PostedJournalAggregateArgs> = {
        [P in keyof T & keyof AggregatePostedJournal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostedJournal[P]>
      : GetScalarType<T[P], AggregatePostedJournal[P]>
  }




  export type PostedJournalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostedJournalWhereInput
    orderBy?: PostedJournalOrderByWithAggregationInput | PostedJournalOrderByWithAggregationInput[]
    by: PostedJournalScalarFieldEnum[] | PostedJournalScalarFieldEnum
    having?: PostedJournalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostedJournalCountAggregateInputType | true
    _min?: PostedJournalMinAggregateInputType
    _max?: PostedJournalMaxAggregateInputType
  }

  export type PostedJournalGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    financialTransactionId: string
    description: string
    status: string
    postedBy: string
    occurredOn: Date
    createdAt: Date
    _count: PostedJournalCountAggregateOutputType | null
    _min: PostedJournalMinAggregateOutputType | null
    _max: PostedJournalMaxAggregateOutputType | null
  }

  type GetPostedJournalGroupByPayload<T extends PostedJournalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostedJournalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostedJournalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostedJournalGroupByOutputType[P]>
            : GetScalarType<T[P], PostedJournalGroupByOutputType[P]>
        }
      >
    >


  export type PostedJournalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    financialTransactionId?: boolean
    description?: boolean
    status?: boolean
    postedBy?: boolean
    occurredOn?: boolean
    createdAt?: boolean
    lines?: boolean | PostedJournal$linesArgs<ExtArgs>
    _count?: boolean | PostedJournalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postedJournal"]>

  export type PostedJournalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    financialTransactionId?: boolean
    description?: boolean
    status?: boolean
    postedBy?: boolean
    occurredOn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["postedJournal"]>

  export type PostedJournalSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    financialTransactionId?: boolean
    description?: boolean
    status?: boolean
    postedBy?: boolean
    occurredOn?: boolean
    createdAt?: boolean
  }

  export type PostedJournalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | PostedJournal$linesArgs<ExtArgs>
    _count?: boolean | PostedJournalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostedJournalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostedJournalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostedJournal"
    objects: {
      lines: Prisma.$PostedJournalLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      financialTransactionId: string
      description: string
      status: string
      postedBy: string
      occurredOn: Date
      createdAt: Date
    }, ExtArgs["result"]["postedJournal"]>
    composites: {}
  }

  type PostedJournalGetPayload<S extends boolean | null | undefined | PostedJournalDefaultArgs> = $Result.GetResult<Prisma.$PostedJournalPayload, S>

  type PostedJournalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostedJournalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostedJournalCountAggregateInputType | true
    }

  export interface PostedJournalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostedJournal'], meta: { name: 'PostedJournal' } }
    /**
     * Find zero or one PostedJournal that matches the filter.
     * @param {PostedJournalFindUniqueArgs} args - Arguments to find a PostedJournal
     * @example
     * // Get one PostedJournal
     * const postedJournal = await prisma.postedJournal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostedJournalFindUniqueArgs>(args: SelectSubset<T, PostedJournalFindUniqueArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostedJournal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostedJournalFindUniqueOrThrowArgs} args - Arguments to find a PostedJournal
     * @example
     * // Get one PostedJournal
     * const postedJournal = await prisma.postedJournal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostedJournalFindUniqueOrThrowArgs>(args: SelectSubset<T, PostedJournalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostedJournal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalFindFirstArgs} args - Arguments to find a PostedJournal
     * @example
     * // Get one PostedJournal
     * const postedJournal = await prisma.postedJournal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostedJournalFindFirstArgs>(args?: SelectSubset<T, PostedJournalFindFirstArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostedJournal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalFindFirstOrThrowArgs} args - Arguments to find a PostedJournal
     * @example
     * // Get one PostedJournal
     * const postedJournal = await prisma.postedJournal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostedJournalFindFirstOrThrowArgs>(args?: SelectSubset<T, PostedJournalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostedJournals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostedJournals
     * const postedJournals = await prisma.postedJournal.findMany()
     * 
     * // Get first 10 PostedJournals
     * const postedJournals = await prisma.postedJournal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postedJournalWithIdOnly = await prisma.postedJournal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostedJournalFindManyArgs>(args?: SelectSubset<T, PostedJournalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostedJournal.
     * @param {PostedJournalCreateArgs} args - Arguments to create a PostedJournal.
     * @example
     * // Create one PostedJournal
     * const PostedJournal = await prisma.postedJournal.create({
     *   data: {
     *     // ... data to create a PostedJournal
     *   }
     * })
     * 
     */
    create<T extends PostedJournalCreateArgs>(args: SelectSubset<T, PostedJournalCreateArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostedJournals.
     * @param {PostedJournalCreateManyArgs} args - Arguments to create many PostedJournals.
     * @example
     * // Create many PostedJournals
     * const postedJournal = await prisma.postedJournal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostedJournalCreateManyArgs>(args?: SelectSubset<T, PostedJournalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostedJournals and returns the data saved in the database.
     * @param {PostedJournalCreateManyAndReturnArgs} args - Arguments to create many PostedJournals.
     * @example
     * // Create many PostedJournals
     * const postedJournal = await prisma.postedJournal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostedJournals and only return the `id`
     * const postedJournalWithIdOnly = await prisma.postedJournal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostedJournalCreateManyAndReturnArgs>(args?: SelectSubset<T, PostedJournalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostedJournal.
     * @param {PostedJournalDeleteArgs} args - Arguments to delete one PostedJournal.
     * @example
     * // Delete one PostedJournal
     * const PostedJournal = await prisma.postedJournal.delete({
     *   where: {
     *     // ... filter to delete one PostedJournal
     *   }
     * })
     * 
     */
    delete<T extends PostedJournalDeleteArgs>(args: SelectSubset<T, PostedJournalDeleteArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostedJournal.
     * @param {PostedJournalUpdateArgs} args - Arguments to update one PostedJournal.
     * @example
     * // Update one PostedJournal
     * const postedJournal = await prisma.postedJournal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostedJournalUpdateArgs>(args: SelectSubset<T, PostedJournalUpdateArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostedJournals.
     * @param {PostedJournalDeleteManyArgs} args - Arguments to filter PostedJournals to delete.
     * @example
     * // Delete a few PostedJournals
     * const { count } = await prisma.postedJournal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostedJournalDeleteManyArgs>(args?: SelectSubset<T, PostedJournalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostedJournals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostedJournals
     * const postedJournal = await prisma.postedJournal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostedJournalUpdateManyArgs>(args: SelectSubset<T, PostedJournalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostedJournal.
     * @param {PostedJournalUpsertArgs} args - Arguments to update or create a PostedJournal.
     * @example
     * // Update or create a PostedJournal
     * const postedJournal = await prisma.postedJournal.upsert({
     *   create: {
     *     // ... data to create a PostedJournal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostedJournal we want to update
     *   }
     * })
     */
    upsert<T extends PostedJournalUpsertArgs>(args: SelectSubset<T, PostedJournalUpsertArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostedJournals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalCountArgs} args - Arguments to filter PostedJournals to count.
     * @example
     * // Count the number of PostedJournals
     * const count = await prisma.postedJournal.count({
     *   where: {
     *     // ... the filter for the PostedJournals we want to count
     *   }
     * })
    **/
    count<T extends PostedJournalCountArgs>(
      args?: Subset<T, PostedJournalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostedJournalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostedJournal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostedJournalAggregateArgs>(args: Subset<T, PostedJournalAggregateArgs>): Prisma.PrismaPromise<GetPostedJournalAggregateType<T>>

    /**
     * Group by PostedJournal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalGroupByArgs} args - Group by arguments.
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
      T extends PostedJournalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostedJournalGroupByArgs['orderBy'] }
        : { orderBy?: PostedJournalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostedJournalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostedJournalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostedJournal model
   */
  readonly fields: PostedJournalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostedJournal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostedJournalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends PostedJournal$linesArgs<ExtArgs> = {}>(args?: Subset<T, PostedJournal$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PostedJournal model
   */ 
  interface PostedJournalFieldRefs {
    readonly id: FieldRef<"PostedJournal", 'String'>
    readonly tenantId: FieldRef<"PostedJournal", 'String'>
    readonly shopId: FieldRef<"PostedJournal", 'String'>
    readonly financialTransactionId: FieldRef<"PostedJournal", 'String'>
    readonly description: FieldRef<"PostedJournal", 'String'>
    readonly status: FieldRef<"PostedJournal", 'String'>
    readonly postedBy: FieldRef<"PostedJournal", 'String'>
    readonly occurredOn: FieldRef<"PostedJournal", 'DateTime'>
    readonly createdAt: FieldRef<"PostedJournal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostedJournal findUnique
   */
  export type PostedJournalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournal to fetch.
     */
    where: PostedJournalWhereUniqueInput
  }

  /**
   * PostedJournal findUniqueOrThrow
   */
  export type PostedJournalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournal to fetch.
     */
    where: PostedJournalWhereUniqueInput
  }

  /**
   * PostedJournal findFirst
   */
  export type PostedJournalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournal to fetch.
     */
    where?: PostedJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournals to fetch.
     */
    orderBy?: PostedJournalOrderByWithRelationInput | PostedJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostedJournals.
     */
    cursor?: PostedJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostedJournals.
     */
    distinct?: PostedJournalScalarFieldEnum | PostedJournalScalarFieldEnum[]
  }

  /**
   * PostedJournal findFirstOrThrow
   */
  export type PostedJournalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournal to fetch.
     */
    where?: PostedJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournals to fetch.
     */
    orderBy?: PostedJournalOrderByWithRelationInput | PostedJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostedJournals.
     */
    cursor?: PostedJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostedJournals.
     */
    distinct?: PostedJournalScalarFieldEnum | PostedJournalScalarFieldEnum[]
  }

  /**
   * PostedJournal findMany
   */
  export type PostedJournalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournals to fetch.
     */
    where?: PostedJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournals to fetch.
     */
    orderBy?: PostedJournalOrderByWithRelationInput | PostedJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostedJournals.
     */
    cursor?: PostedJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournals.
     */
    skip?: number
    distinct?: PostedJournalScalarFieldEnum | PostedJournalScalarFieldEnum[]
  }

  /**
   * PostedJournal create
   */
  export type PostedJournalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * The data needed to create a PostedJournal.
     */
    data: XOR<PostedJournalCreateInput, PostedJournalUncheckedCreateInput>
  }

  /**
   * PostedJournal createMany
   */
  export type PostedJournalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostedJournals.
     */
    data: PostedJournalCreateManyInput | PostedJournalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostedJournal createManyAndReturn
   */
  export type PostedJournalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostedJournals.
     */
    data: PostedJournalCreateManyInput | PostedJournalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostedJournal update
   */
  export type PostedJournalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * The data needed to update a PostedJournal.
     */
    data: XOR<PostedJournalUpdateInput, PostedJournalUncheckedUpdateInput>
    /**
     * Choose, which PostedJournal to update.
     */
    where: PostedJournalWhereUniqueInput
  }

  /**
   * PostedJournal updateMany
   */
  export type PostedJournalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostedJournals.
     */
    data: XOR<PostedJournalUpdateManyMutationInput, PostedJournalUncheckedUpdateManyInput>
    /**
     * Filter which PostedJournals to update
     */
    where?: PostedJournalWhereInput
  }

  /**
   * PostedJournal upsert
   */
  export type PostedJournalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * The filter to search for the PostedJournal to update in case it exists.
     */
    where: PostedJournalWhereUniqueInput
    /**
     * In case the PostedJournal found by the `where` argument doesn't exist, create a new PostedJournal with this data.
     */
    create: XOR<PostedJournalCreateInput, PostedJournalUncheckedCreateInput>
    /**
     * In case the PostedJournal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostedJournalUpdateInput, PostedJournalUncheckedUpdateInput>
  }

  /**
   * PostedJournal delete
   */
  export type PostedJournalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
    /**
     * Filter which PostedJournal to delete.
     */
    where: PostedJournalWhereUniqueInput
  }

  /**
   * PostedJournal deleteMany
   */
  export type PostedJournalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostedJournals to delete
     */
    where?: PostedJournalWhereInput
  }

  /**
   * PostedJournal.lines
   */
  export type PostedJournal$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    where?: PostedJournalLineWhereInput
    orderBy?: PostedJournalLineOrderByWithRelationInput | PostedJournalLineOrderByWithRelationInput[]
    cursor?: PostedJournalLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostedJournalLineScalarFieldEnum | PostedJournalLineScalarFieldEnum[]
  }

  /**
   * PostedJournal without action
   */
  export type PostedJournalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournal
     */
    select?: PostedJournalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalInclude<ExtArgs> | null
  }


  /**
   * Model PostedJournalLine
   */

  export type AggregatePostedJournalLine = {
    _count: PostedJournalLineCountAggregateOutputType | null
    _avg: PostedJournalLineAvgAggregateOutputType | null
    _sum: PostedJournalLineSumAggregateOutputType | null
    _min: PostedJournalLineMinAggregateOutputType | null
    _max: PostedJournalLineMaxAggregateOutputType | null
  }

  export type PostedJournalLineAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type PostedJournalLineSumAggregateOutputType = {
    amountMinor: bigint | null
  }

  export type PostedJournalLineMinAggregateOutputType = {
    id: string | null
    journalId: string | null
    accountId: string | null
    side: string | null
    amountMinor: bigint | null
  }

  export type PostedJournalLineMaxAggregateOutputType = {
    id: string | null
    journalId: string | null
    accountId: string | null
    side: string | null
    amountMinor: bigint | null
  }

  export type PostedJournalLineCountAggregateOutputType = {
    id: number
    journalId: number
    accountId: number
    side: number
    amountMinor: number
    _all: number
  }


  export type PostedJournalLineAvgAggregateInputType = {
    amountMinor?: true
  }

  export type PostedJournalLineSumAggregateInputType = {
    amountMinor?: true
  }

  export type PostedJournalLineMinAggregateInputType = {
    id?: true
    journalId?: true
    accountId?: true
    side?: true
    amountMinor?: true
  }

  export type PostedJournalLineMaxAggregateInputType = {
    id?: true
    journalId?: true
    accountId?: true
    side?: true
    amountMinor?: true
  }

  export type PostedJournalLineCountAggregateInputType = {
    id?: true
    journalId?: true
    accountId?: true
    side?: true
    amountMinor?: true
    _all?: true
  }

  export type PostedJournalLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostedJournalLine to aggregate.
     */
    where?: PostedJournalLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournalLines to fetch.
     */
    orderBy?: PostedJournalLineOrderByWithRelationInput | PostedJournalLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostedJournalLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournalLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournalLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostedJournalLines
    **/
    _count?: true | PostedJournalLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostedJournalLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostedJournalLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostedJournalLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostedJournalLineMaxAggregateInputType
  }

  export type GetPostedJournalLineAggregateType<T extends PostedJournalLineAggregateArgs> = {
        [P in keyof T & keyof AggregatePostedJournalLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostedJournalLine[P]>
      : GetScalarType<T[P], AggregatePostedJournalLine[P]>
  }




  export type PostedJournalLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostedJournalLineWhereInput
    orderBy?: PostedJournalLineOrderByWithAggregationInput | PostedJournalLineOrderByWithAggregationInput[]
    by: PostedJournalLineScalarFieldEnum[] | PostedJournalLineScalarFieldEnum
    having?: PostedJournalLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostedJournalLineCountAggregateInputType | true
    _avg?: PostedJournalLineAvgAggregateInputType
    _sum?: PostedJournalLineSumAggregateInputType
    _min?: PostedJournalLineMinAggregateInputType
    _max?: PostedJournalLineMaxAggregateInputType
  }

  export type PostedJournalLineGroupByOutputType = {
    id: string
    journalId: string
    accountId: string
    side: string
    amountMinor: bigint
    _count: PostedJournalLineCountAggregateOutputType | null
    _avg: PostedJournalLineAvgAggregateOutputType | null
    _sum: PostedJournalLineSumAggregateOutputType | null
    _min: PostedJournalLineMinAggregateOutputType | null
    _max: PostedJournalLineMaxAggregateOutputType | null
  }

  type GetPostedJournalLineGroupByPayload<T extends PostedJournalLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostedJournalLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostedJournalLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostedJournalLineGroupByOutputType[P]>
            : GetScalarType<T[P], PostedJournalLineGroupByOutputType[P]>
        }
      >
    >


  export type PostedJournalLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalId?: boolean
    accountId?: boolean
    side?: boolean
    amountMinor?: boolean
    journal?: boolean | PostedJournalDefaultArgs<ExtArgs>
    account?: boolean | ChartAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postedJournalLine"]>

  export type PostedJournalLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalId?: boolean
    accountId?: boolean
    side?: boolean
    amountMinor?: boolean
    journal?: boolean | PostedJournalDefaultArgs<ExtArgs>
    account?: boolean | ChartAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postedJournalLine"]>

  export type PostedJournalLineSelectScalar = {
    id?: boolean
    journalId?: boolean
    accountId?: boolean
    side?: boolean
    amountMinor?: boolean
  }

  export type PostedJournalLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journal?: boolean | PostedJournalDefaultArgs<ExtArgs>
    account?: boolean | ChartAccountDefaultArgs<ExtArgs>
  }
  export type PostedJournalLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journal?: boolean | PostedJournalDefaultArgs<ExtArgs>
    account?: boolean | ChartAccountDefaultArgs<ExtArgs>
  }

  export type $PostedJournalLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostedJournalLine"
    objects: {
      journal: Prisma.$PostedJournalPayload<ExtArgs>
      account: Prisma.$ChartAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      journalId: string
      accountId: string
      side: string
      amountMinor: bigint
    }, ExtArgs["result"]["postedJournalLine"]>
    composites: {}
  }

  type PostedJournalLineGetPayload<S extends boolean | null | undefined | PostedJournalLineDefaultArgs> = $Result.GetResult<Prisma.$PostedJournalLinePayload, S>

  type PostedJournalLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostedJournalLineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostedJournalLineCountAggregateInputType | true
    }

  export interface PostedJournalLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostedJournalLine'], meta: { name: 'PostedJournalLine' } }
    /**
     * Find zero or one PostedJournalLine that matches the filter.
     * @param {PostedJournalLineFindUniqueArgs} args - Arguments to find a PostedJournalLine
     * @example
     * // Get one PostedJournalLine
     * const postedJournalLine = await prisma.postedJournalLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostedJournalLineFindUniqueArgs>(args: SelectSubset<T, PostedJournalLineFindUniqueArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostedJournalLine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostedJournalLineFindUniqueOrThrowArgs} args - Arguments to find a PostedJournalLine
     * @example
     * // Get one PostedJournalLine
     * const postedJournalLine = await prisma.postedJournalLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostedJournalLineFindUniqueOrThrowArgs>(args: SelectSubset<T, PostedJournalLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostedJournalLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineFindFirstArgs} args - Arguments to find a PostedJournalLine
     * @example
     * // Get one PostedJournalLine
     * const postedJournalLine = await prisma.postedJournalLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostedJournalLineFindFirstArgs>(args?: SelectSubset<T, PostedJournalLineFindFirstArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostedJournalLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineFindFirstOrThrowArgs} args - Arguments to find a PostedJournalLine
     * @example
     * // Get one PostedJournalLine
     * const postedJournalLine = await prisma.postedJournalLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostedJournalLineFindFirstOrThrowArgs>(args?: SelectSubset<T, PostedJournalLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostedJournalLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostedJournalLines
     * const postedJournalLines = await prisma.postedJournalLine.findMany()
     * 
     * // Get first 10 PostedJournalLines
     * const postedJournalLines = await prisma.postedJournalLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postedJournalLineWithIdOnly = await prisma.postedJournalLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostedJournalLineFindManyArgs>(args?: SelectSubset<T, PostedJournalLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostedJournalLine.
     * @param {PostedJournalLineCreateArgs} args - Arguments to create a PostedJournalLine.
     * @example
     * // Create one PostedJournalLine
     * const PostedJournalLine = await prisma.postedJournalLine.create({
     *   data: {
     *     // ... data to create a PostedJournalLine
     *   }
     * })
     * 
     */
    create<T extends PostedJournalLineCreateArgs>(args: SelectSubset<T, PostedJournalLineCreateArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostedJournalLines.
     * @param {PostedJournalLineCreateManyArgs} args - Arguments to create many PostedJournalLines.
     * @example
     * // Create many PostedJournalLines
     * const postedJournalLine = await prisma.postedJournalLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostedJournalLineCreateManyArgs>(args?: SelectSubset<T, PostedJournalLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostedJournalLines and returns the data saved in the database.
     * @param {PostedJournalLineCreateManyAndReturnArgs} args - Arguments to create many PostedJournalLines.
     * @example
     * // Create many PostedJournalLines
     * const postedJournalLine = await prisma.postedJournalLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostedJournalLines and only return the `id`
     * const postedJournalLineWithIdOnly = await prisma.postedJournalLine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostedJournalLineCreateManyAndReturnArgs>(args?: SelectSubset<T, PostedJournalLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostedJournalLine.
     * @param {PostedJournalLineDeleteArgs} args - Arguments to delete one PostedJournalLine.
     * @example
     * // Delete one PostedJournalLine
     * const PostedJournalLine = await prisma.postedJournalLine.delete({
     *   where: {
     *     // ... filter to delete one PostedJournalLine
     *   }
     * })
     * 
     */
    delete<T extends PostedJournalLineDeleteArgs>(args: SelectSubset<T, PostedJournalLineDeleteArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostedJournalLine.
     * @param {PostedJournalLineUpdateArgs} args - Arguments to update one PostedJournalLine.
     * @example
     * // Update one PostedJournalLine
     * const postedJournalLine = await prisma.postedJournalLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostedJournalLineUpdateArgs>(args: SelectSubset<T, PostedJournalLineUpdateArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostedJournalLines.
     * @param {PostedJournalLineDeleteManyArgs} args - Arguments to filter PostedJournalLines to delete.
     * @example
     * // Delete a few PostedJournalLines
     * const { count } = await prisma.postedJournalLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostedJournalLineDeleteManyArgs>(args?: SelectSubset<T, PostedJournalLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostedJournalLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostedJournalLines
     * const postedJournalLine = await prisma.postedJournalLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostedJournalLineUpdateManyArgs>(args: SelectSubset<T, PostedJournalLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostedJournalLine.
     * @param {PostedJournalLineUpsertArgs} args - Arguments to update or create a PostedJournalLine.
     * @example
     * // Update or create a PostedJournalLine
     * const postedJournalLine = await prisma.postedJournalLine.upsert({
     *   create: {
     *     // ... data to create a PostedJournalLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostedJournalLine we want to update
     *   }
     * })
     */
    upsert<T extends PostedJournalLineUpsertArgs>(args: SelectSubset<T, PostedJournalLineUpsertArgs<ExtArgs>>): Prisma__PostedJournalLineClient<$Result.GetResult<Prisma.$PostedJournalLinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostedJournalLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineCountArgs} args - Arguments to filter PostedJournalLines to count.
     * @example
     * // Count the number of PostedJournalLines
     * const count = await prisma.postedJournalLine.count({
     *   where: {
     *     // ... the filter for the PostedJournalLines we want to count
     *   }
     * })
    **/
    count<T extends PostedJournalLineCountArgs>(
      args?: Subset<T, PostedJournalLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostedJournalLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostedJournalLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostedJournalLineAggregateArgs>(args: Subset<T, PostedJournalLineAggregateArgs>): Prisma.PrismaPromise<GetPostedJournalLineAggregateType<T>>

    /**
     * Group by PostedJournalLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostedJournalLineGroupByArgs} args - Group by arguments.
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
      T extends PostedJournalLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostedJournalLineGroupByArgs['orderBy'] }
        : { orderBy?: PostedJournalLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostedJournalLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostedJournalLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostedJournalLine model
   */
  readonly fields: PostedJournalLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostedJournalLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostedJournalLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journal<T extends PostedJournalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostedJournalDefaultArgs<ExtArgs>>): Prisma__PostedJournalClient<$Result.GetResult<Prisma.$PostedJournalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    account<T extends ChartAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChartAccountDefaultArgs<ExtArgs>>): Prisma__ChartAccountClient<$Result.GetResult<Prisma.$ChartAccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PostedJournalLine model
   */ 
  interface PostedJournalLineFieldRefs {
    readonly id: FieldRef<"PostedJournalLine", 'String'>
    readonly journalId: FieldRef<"PostedJournalLine", 'String'>
    readonly accountId: FieldRef<"PostedJournalLine", 'String'>
    readonly side: FieldRef<"PostedJournalLine", 'String'>
    readonly amountMinor: FieldRef<"PostedJournalLine", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * PostedJournalLine findUnique
   */
  export type PostedJournalLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournalLine to fetch.
     */
    where: PostedJournalLineWhereUniqueInput
  }

  /**
   * PostedJournalLine findUniqueOrThrow
   */
  export type PostedJournalLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournalLine to fetch.
     */
    where: PostedJournalLineWhereUniqueInput
  }

  /**
   * PostedJournalLine findFirst
   */
  export type PostedJournalLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournalLine to fetch.
     */
    where?: PostedJournalLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournalLines to fetch.
     */
    orderBy?: PostedJournalLineOrderByWithRelationInput | PostedJournalLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostedJournalLines.
     */
    cursor?: PostedJournalLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournalLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournalLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostedJournalLines.
     */
    distinct?: PostedJournalLineScalarFieldEnum | PostedJournalLineScalarFieldEnum[]
  }

  /**
   * PostedJournalLine findFirstOrThrow
   */
  export type PostedJournalLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournalLine to fetch.
     */
    where?: PostedJournalLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournalLines to fetch.
     */
    orderBy?: PostedJournalLineOrderByWithRelationInput | PostedJournalLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostedJournalLines.
     */
    cursor?: PostedJournalLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournalLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournalLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostedJournalLines.
     */
    distinct?: PostedJournalLineScalarFieldEnum | PostedJournalLineScalarFieldEnum[]
  }

  /**
   * PostedJournalLine findMany
   */
  export type PostedJournalLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * Filter, which PostedJournalLines to fetch.
     */
    where?: PostedJournalLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostedJournalLines to fetch.
     */
    orderBy?: PostedJournalLineOrderByWithRelationInput | PostedJournalLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostedJournalLines.
     */
    cursor?: PostedJournalLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostedJournalLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostedJournalLines.
     */
    skip?: number
    distinct?: PostedJournalLineScalarFieldEnum | PostedJournalLineScalarFieldEnum[]
  }

  /**
   * PostedJournalLine create
   */
  export type PostedJournalLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * The data needed to create a PostedJournalLine.
     */
    data: XOR<PostedJournalLineCreateInput, PostedJournalLineUncheckedCreateInput>
  }

  /**
   * PostedJournalLine createMany
   */
  export type PostedJournalLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostedJournalLines.
     */
    data: PostedJournalLineCreateManyInput | PostedJournalLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostedJournalLine createManyAndReturn
   */
  export type PostedJournalLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostedJournalLines.
     */
    data: PostedJournalLineCreateManyInput | PostedJournalLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostedJournalLine update
   */
  export type PostedJournalLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * The data needed to update a PostedJournalLine.
     */
    data: XOR<PostedJournalLineUpdateInput, PostedJournalLineUncheckedUpdateInput>
    /**
     * Choose, which PostedJournalLine to update.
     */
    where: PostedJournalLineWhereUniqueInput
  }

  /**
   * PostedJournalLine updateMany
   */
  export type PostedJournalLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostedJournalLines.
     */
    data: XOR<PostedJournalLineUpdateManyMutationInput, PostedJournalLineUncheckedUpdateManyInput>
    /**
     * Filter which PostedJournalLines to update
     */
    where?: PostedJournalLineWhereInput
  }

  /**
   * PostedJournalLine upsert
   */
  export type PostedJournalLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * The filter to search for the PostedJournalLine to update in case it exists.
     */
    where: PostedJournalLineWhereUniqueInput
    /**
     * In case the PostedJournalLine found by the `where` argument doesn't exist, create a new PostedJournalLine with this data.
     */
    create: XOR<PostedJournalLineCreateInput, PostedJournalLineUncheckedCreateInput>
    /**
     * In case the PostedJournalLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostedJournalLineUpdateInput, PostedJournalLineUncheckedUpdateInput>
  }

  /**
   * PostedJournalLine delete
   */
  export type PostedJournalLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
    /**
     * Filter which PostedJournalLine to delete.
     */
    where: PostedJournalLineWhereUniqueInput
  }

  /**
   * PostedJournalLine deleteMany
   */
  export type PostedJournalLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostedJournalLines to delete
     */
    where?: PostedJournalLineWhereInput
  }

  /**
   * PostedJournalLine without action
   */
  export type PostedJournalLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostedJournalLine
     */
    select?: PostedJournalLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostedJournalLineInclude<ExtArgs> | null
  }


  /**
   * Model Obligation
   */

  export type AggregateObligation = {
    _count: ObligationCountAggregateOutputType | null
    _avg: ObligationAvgAggregateOutputType | null
    _sum: ObligationSumAggregateOutputType | null
    _min: ObligationMinAggregateOutputType | null
    _max: ObligationMaxAggregateOutputType | null
  }

  export type ObligationAvgAggregateOutputType = {
    outstandingMinor: number | null
  }

  export type ObligationSumAggregateOutputType = {
    outstandingMinor: bigint | null
  }

  export type ObligationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    kind: string | null
    partyName: string | null
    outstandingMinor: bigint | null
    financialTransactionId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ObligationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    kind: string | null
    partyName: string | null
    outstandingMinor: bigint | null
    financialTransactionId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ObligationCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    kind: number
    partyName: number
    outstandingMinor: number
    financialTransactionId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ObligationAvgAggregateInputType = {
    outstandingMinor?: true
  }

  export type ObligationSumAggregateInputType = {
    outstandingMinor?: true
  }

  export type ObligationMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    kind?: true
    partyName?: true
    outstandingMinor?: true
    financialTransactionId?: true
    status?: true
    createdAt?: true
  }

  export type ObligationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    kind?: true
    partyName?: true
    outstandingMinor?: true
    financialTransactionId?: true
    status?: true
    createdAt?: true
  }

  export type ObligationCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    kind?: true
    partyName?: true
    outstandingMinor?: true
    financialTransactionId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ObligationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obligation to aggregate.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obligations
    **/
    _count?: true | ObligationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObligationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObligationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObligationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObligationMaxAggregateInputType
  }

  export type GetObligationAggregateType<T extends ObligationAggregateArgs> = {
        [P in keyof T & keyof AggregateObligation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObligation[P]>
      : GetScalarType<T[P], AggregateObligation[P]>
  }




  export type ObligationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObligationWhereInput
    orderBy?: ObligationOrderByWithAggregationInput | ObligationOrderByWithAggregationInput[]
    by: ObligationScalarFieldEnum[] | ObligationScalarFieldEnum
    having?: ObligationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObligationCountAggregateInputType | true
    _avg?: ObligationAvgAggregateInputType
    _sum?: ObligationSumAggregateInputType
    _min?: ObligationMinAggregateInputType
    _max?: ObligationMaxAggregateInputType
  }

  export type ObligationGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    kind: string
    partyName: string
    outstandingMinor: bigint
    financialTransactionId: string
    status: string
    createdAt: Date
    _count: ObligationCountAggregateOutputType | null
    _avg: ObligationAvgAggregateOutputType | null
    _sum: ObligationSumAggregateOutputType | null
    _min: ObligationMinAggregateOutputType | null
    _max: ObligationMaxAggregateOutputType | null
  }

  type GetObligationGroupByPayload<T extends ObligationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObligationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObligationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObligationGroupByOutputType[P]>
            : GetScalarType<T[P], ObligationGroupByOutputType[P]>
        }
      >
    >


  export type ObligationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    kind?: boolean
    partyName?: boolean
    outstandingMinor?: boolean
    financialTransactionId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["obligation"]>

  export type ObligationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    kind?: boolean
    partyName?: boolean
    outstandingMinor?: boolean
    financialTransactionId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["obligation"]>

  export type ObligationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    kind?: boolean
    partyName?: boolean
    outstandingMinor?: boolean
    financialTransactionId?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $ObligationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obligation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      kind: string
      partyName: string
      outstandingMinor: bigint
      financialTransactionId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["obligation"]>
    composites: {}
  }

  type ObligationGetPayload<S extends boolean | null | undefined | ObligationDefaultArgs> = $Result.GetResult<Prisma.$ObligationPayload, S>

  type ObligationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObligationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObligationCountAggregateInputType | true
    }

  export interface ObligationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obligation'], meta: { name: 'Obligation' } }
    /**
     * Find zero or one Obligation that matches the filter.
     * @param {ObligationFindUniqueArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObligationFindUniqueArgs>(args: SelectSubset<T, ObligationFindUniqueArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Obligation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ObligationFindUniqueOrThrowArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObligationFindUniqueOrThrowArgs>(args: SelectSubset<T, ObligationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Obligation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationFindFirstArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObligationFindFirstArgs>(args?: SelectSubset<T, ObligationFindFirstArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Obligation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationFindFirstOrThrowArgs} args - Arguments to find a Obligation
     * @example
     * // Get one Obligation
     * const obligation = await prisma.obligation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObligationFindFirstOrThrowArgs>(args?: SelectSubset<T, ObligationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Obligations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obligations
     * const obligations = await prisma.obligation.findMany()
     * 
     * // Get first 10 Obligations
     * const obligations = await prisma.obligation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obligationWithIdOnly = await prisma.obligation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObligationFindManyArgs>(args?: SelectSubset<T, ObligationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Obligation.
     * @param {ObligationCreateArgs} args - Arguments to create a Obligation.
     * @example
     * // Create one Obligation
     * const Obligation = await prisma.obligation.create({
     *   data: {
     *     // ... data to create a Obligation
     *   }
     * })
     * 
     */
    create<T extends ObligationCreateArgs>(args: SelectSubset<T, ObligationCreateArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Obligations.
     * @param {ObligationCreateManyArgs} args - Arguments to create many Obligations.
     * @example
     * // Create many Obligations
     * const obligation = await prisma.obligation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObligationCreateManyArgs>(args?: SelectSubset<T, ObligationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obligations and returns the data saved in the database.
     * @param {ObligationCreateManyAndReturnArgs} args - Arguments to create many Obligations.
     * @example
     * // Create many Obligations
     * const obligation = await prisma.obligation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obligations and only return the `id`
     * const obligationWithIdOnly = await prisma.obligation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObligationCreateManyAndReturnArgs>(args?: SelectSubset<T, ObligationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Obligation.
     * @param {ObligationDeleteArgs} args - Arguments to delete one Obligation.
     * @example
     * // Delete one Obligation
     * const Obligation = await prisma.obligation.delete({
     *   where: {
     *     // ... filter to delete one Obligation
     *   }
     * })
     * 
     */
    delete<T extends ObligationDeleteArgs>(args: SelectSubset<T, ObligationDeleteArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Obligation.
     * @param {ObligationUpdateArgs} args - Arguments to update one Obligation.
     * @example
     * // Update one Obligation
     * const obligation = await prisma.obligation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObligationUpdateArgs>(args: SelectSubset<T, ObligationUpdateArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Obligations.
     * @param {ObligationDeleteManyArgs} args - Arguments to filter Obligations to delete.
     * @example
     * // Delete a few Obligations
     * const { count } = await prisma.obligation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObligationDeleteManyArgs>(args?: SelectSubset<T, ObligationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obligations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obligations
     * const obligation = await prisma.obligation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObligationUpdateManyArgs>(args: SelectSubset<T, ObligationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Obligation.
     * @param {ObligationUpsertArgs} args - Arguments to update or create a Obligation.
     * @example
     * // Update or create a Obligation
     * const obligation = await prisma.obligation.upsert({
     *   create: {
     *     // ... data to create a Obligation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obligation we want to update
     *   }
     * })
     */
    upsert<T extends ObligationUpsertArgs>(args: SelectSubset<T, ObligationUpsertArgs<ExtArgs>>): Prisma__ObligationClient<$Result.GetResult<Prisma.$ObligationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Obligations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationCountArgs} args - Arguments to filter Obligations to count.
     * @example
     * // Count the number of Obligations
     * const count = await prisma.obligation.count({
     *   where: {
     *     // ... the filter for the Obligations we want to count
     *   }
     * })
    **/
    count<T extends ObligationCountArgs>(
      args?: Subset<T, ObligationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObligationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obligation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObligationAggregateArgs>(args: Subset<T, ObligationAggregateArgs>): Prisma.PrismaPromise<GetObligationAggregateType<T>>

    /**
     * Group by Obligation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligationGroupByArgs} args - Group by arguments.
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
      T extends ObligationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObligationGroupByArgs['orderBy'] }
        : { orderBy?: ObligationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObligationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObligationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obligation model
   */
  readonly fields: ObligationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obligation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObligationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Obligation model
   */ 
  interface ObligationFieldRefs {
    readonly id: FieldRef<"Obligation", 'String'>
    readonly tenantId: FieldRef<"Obligation", 'String'>
    readonly shopId: FieldRef<"Obligation", 'String'>
    readonly kind: FieldRef<"Obligation", 'String'>
    readonly partyName: FieldRef<"Obligation", 'String'>
    readonly outstandingMinor: FieldRef<"Obligation", 'BigInt'>
    readonly financialTransactionId: FieldRef<"Obligation", 'String'>
    readonly status: FieldRef<"Obligation", 'String'>
    readonly createdAt: FieldRef<"Obligation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Obligation findUnique
   */
  export type ObligationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation findUniqueOrThrow
   */
  export type ObligationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation findFirst
   */
  export type ObligationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obligations.
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obligations.
     */
    distinct?: ObligationScalarFieldEnum | ObligationScalarFieldEnum[]
  }

  /**
   * Obligation findFirstOrThrow
   */
  export type ObligationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Filter, which Obligation to fetch.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obligations.
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obligations.
     */
    distinct?: ObligationScalarFieldEnum | ObligationScalarFieldEnum[]
  }

  /**
   * Obligation findMany
   */
  export type ObligationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Filter, which Obligations to fetch.
     */
    where?: ObligationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obligations to fetch.
     */
    orderBy?: ObligationOrderByWithRelationInput | ObligationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obligations.
     */
    cursor?: ObligationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obligations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obligations.
     */
    skip?: number
    distinct?: ObligationScalarFieldEnum | ObligationScalarFieldEnum[]
  }

  /**
   * Obligation create
   */
  export type ObligationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * The data needed to create a Obligation.
     */
    data: XOR<ObligationCreateInput, ObligationUncheckedCreateInput>
  }

  /**
   * Obligation createMany
   */
  export type ObligationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obligations.
     */
    data: ObligationCreateManyInput | ObligationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obligation createManyAndReturn
   */
  export type ObligationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Obligations.
     */
    data: ObligationCreateManyInput | ObligationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obligation update
   */
  export type ObligationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * The data needed to update a Obligation.
     */
    data: XOR<ObligationUpdateInput, ObligationUncheckedUpdateInput>
    /**
     * Choose, which Obligation to update.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation updateMany
   */
  export type ObligationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obligations.
     */
    data: XOR<ObligationUpdateManyMutationInput, ObligationUncheckedUpdateManyInput>
    /**
     * Filter which Obligations to update
     */
    where?: ObligationWhereInput
  }

  /**
   * Obligation upsert
   */
  export type ObligationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * The filter to search for the Obligation to update in case it exists.
     */
    where: ObligationWhereUniqueInput
    /**
     * In case the Obligation found by the `where` argument doesn't exist, create a new Obligation with this data.
     */
    create: XOR<ObligationCreateInput, ObligationUncheckedCreateInput>
    /**
     * In case the Obligation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObligationUpdateInput, ObligationUncheckedUpdateInput>
  }

  /**
   * Obligation delete
   */
  export type ObligationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
    /**
     * Filter which Obligation to delete.
     */
    where: ObligationWhereUniqueInput
  }

  /**
   * Obligation deleteMany
   */
  export type ObligationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obligations to delete
     */
    where?: ObligationWhereInput
  }

  /**
   * Obligation without action
   */
  export type ObligationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obligation
     */
    select?: ObligationSelect<ExtArgs> | null
  }


  /**
   * Model ProfitAllocation
   */

  export type AggregateProfitAllocation = {
    _count: ProfitAllocationCountAggregateOutputType | null
    _avg: ProfitAllocationAvgAggregateOutputType | null
    _sum: ProfitAllocationSumAggregateOutputType | null
    _min: ProfitAllocationMinAggregateOutputType | null
    _max: ProfitAllocationMaxAggregateOutputType | null
  }

  export type ProfitAllocationAvgAggregateOutputType = {
    earnedMinor: number | null
    transferredMinor: number | null
  }

  export type ProfitAllocationSumAggregateOutputType = {
    earnedMinor: bigint | null
    transferredMinor: bigint | null
  }

  export type ProfitAllocationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    earnedMinor: bigint | null
    transferredMinor: bigint | null
    updatedAt: Date | null
  }

  export type ProfitAllocationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    earnedMinor: bigint | null
    transferredMinor: bigint | null
    updatedAt: Date | null
  }

  export type ProfitAllocationCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    earnedMinor: number
    transferredMinor: number
    updatedAt: number
    _all: number
  }


  export type ProfitAllocationAvgAggregateInputType = {
    earnedMinor?: true
    transferredMinor?: true
  }

  export type ProfitAllocationSumAggregateInputType = {
    earnedMinor?: true
    transferredMinor?: true
  }

  export type ProfitAllocationMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    earnedMinor?: true
    transferredMinor?: true
    updatedAt?: true
  }

  export type ProfitAllocationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    earnedMinor?: true
    transferredMinor?: true
    updatedAt?: true
  }

  export type ProfitAllocationCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    earnedMinor?: true
    transferredMinor?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfitAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitAllocation to aggregate.
     */
    where?: ProfitAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitAllocations to fetch.
     */
    orderBy?: ProfitAllocationOrderByWithRelationInput | ProfitAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfitAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfitAllocations
    **/
    _count?: true | ProfitAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfitAllocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfitAllocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfitAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfitAllocationMaxAggregateInputType
  }

  export type GetProfitAllocationAggregateType<T extends ProfitAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregateProfitAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfitAllocation[P]>
      : GetScalarType<T[P], AggregateProfitAllocation[P]>
  }




  export type ProfitAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfitAllocationWhereInput
    orderBy?: ProfitAllocationOrderByWithAggregationInput | ProfitAllocationOrderByWithAggregationInput[]
    by: ProfitAllocationScalarFieldEnum[] | ProfitAllocationScalarFieldEnum
    having?: ProfitAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfitAllocationCountAggregateInputType | true
    _avg?: ProfitAllocationAvgAggregateInputType
    _sum?: ProfitAllocationSumAggregateInputType
    _min?: ProfitAllocationMinAggregateInputType
    _max?: ProfitAllocationMaxAggregateInputType
  }

  export type ProfitAllocationGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    earnedMinor: bigint
    transferredMinor: bigint
    updatedAt: Date
    _count: ProfitAllocationCountAggregateOutputType | null
    _avg: ProfitAllocationAvgAggregateOutputType | null
    _sum: ProfitAllocationSumAggregateOutputType | null
    _min: ProfitAllocationMinAggregateOutputType | null
    _max: ProfitAllocationMaxAggregateOutputType | null
  }

  type GetProfitAllocationGroupByPayload<T extends ProfitAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfitAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfitAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfitAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], ProfitAllocationGroupByOutputType[P]>
        }
      >
    >


  export type ProfitAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    earnedMinor?: boolean
    transferredMinor?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profitAllocation"]>

  export type ProfitAllocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    earnedMinor?: boolean
    transferredMinor?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profitAllocation"]>

  export type ProfitAllocationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    earnedMinor?: boolean
    transferredMinor?: boolean
    updatedAt?: boolean
  }


  export type $ProfitAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfitAllocation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      earnedMinor: bigint
      transferredMinor: bigint
      updatedAt: Date
    }, ExtArgs["result"]["profitAllocation"]>
    composites: {}
  }

  type ProfitAllocationGetPayload<S extends boolean | null | undefined | ProfitAllocationDefaultArgs> = $Result.GetResult<Prisma.$ProfitAllocationPayload, S>

  type ProfitAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfitAllocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfitAllocationCountAggregateInputType | true
    }

  export interface ProfitAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfitAllocation'], meta: { name: 'ProfitAllocation' } }
    /**
     * Find zero or one ProfitAllocation that matches the filter.
     * @param {ProfitAllocationFindUniqueArgs} args - Arguments to find a ProfitAllocation
     * @example
     * // Get one ProfitAllocation
     * const profitAllocation = await prisma.profitAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfitAllocationFindUniqueArgs>(args: SelectSubset<T, ProfitAllocationFindUniqueArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProfitAllocation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfitAllocationFindUniqueOrThrowArgs} args - Arguments to find a ProfitAllocation
     * @example
     * // Get one ProfitAllocation
     * const profitAllocation = await prisma.profitAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfitAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfitAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProfitAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationFindFirstArgs} args - Arguments to find a ProfitAllocation
     * @example
     * // Get one ProfitAllocation
     * const profitAllocation = await prisma.profitAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfitAllocationFindFirstArgs>(args?: SelectSubset<T, ProfitAllocationFindFirstArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProfitAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationFindFirstOrThrowArgs} args - Arguments to find a ProfitAllocation
     * @example
     * // Get one ProfitAllocation
     * const profitAllocation = await prisma.profitAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfitAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfitAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProfitAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfitAllocations
     * const profitAllocations = await prisma.profitAllocation.findMany()
     * 
     * // Get first 10 ProfitAllocations
     * const profitAllocations = await prisma.profitAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profitAllocationWithIdOnly = await prisma.profitAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfitAllocationFindManyArgs>(args?: SelectSubset<T, ProfitAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProfitAllocation.
     * @param {ProfitAllocationCreateArgs} args - Arguments to create a ProfitAllocation.
     * @example
     * // Create one ProfitAllocation
     * const ProfitAllocation = await prisma.profitAllocation.create({
     *   data: {
     *     // ... data to create a ProfitAllocation
     *   }
     * })
     * 
     */
    create<T extends ProfitAllocationCreateArgs>(args: SelectSubset<T, ProfitAllocationCreateArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProfitAllocations.
     * @param {ProfitAllocationCreateManyArgs} args - Arguments to create many ProfitAllocations.
     * @example
     * // Create many ProfitAllocations
     * const profitAllocation = await prisma.profitAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfitAllocationCreateManyArgs>(args?: SelectSubset<T, ProfitAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfitAllocations and returns the data saved in the database.
     * @param {ProfitAllocationCreateManyAndReturnArgs} args - Arguments to create many ProfitAllocations.
     * @example
     * // Create many ProfitAllocations
     * const profitAllocation = await prisma.profitAllocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfitAllocations and only return the `id`
     * const profitAllocationWithIdOnly = await prisma.profitAllocation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfitAllocationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfitAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProfitAllocation.
     * @param {ProfitAllocationDeleteArgs} args - Arguments to delete one ProfitAllocation.
     * @example
     * // Delete one ProfitAllocation
     * const ProfitAllocation = await prisma.profitAllocation.delete({
     *   where: {
     *     // ... filter to delete one ProfitAllocation
     *   }
     * })
     * 
     */
    delete<T extends ProfitAllocationDeleteArgs>(args: SelectSubset<T, ProfitAllocationDeleteArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProfitAllocation.
     * @param {ProfitAllocationUpdateArgs} args - Arguments to update one ProfitAllocation.
     * @example
     * // Update one ProfitAllocation
     * const profitAllocation = await prisma.profitAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfitAllocationUpdateArgs>(args: SelectSubset<T, ProfitAllocationUpdateArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProfitAllocations.
     * @param {ProfitAllocationDeleteManyArgs} args - Arguments to filter ProfitAllocations to delete.
     * @example
     * // Delete a few ProfitAllocations
     * const { count } = await prisma.profitAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfitAllocationDeleteManyArgs>(args?: SelectSubset<T, ProfitAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfitAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfitAllocations
     * const profitAllocation = await prisma.profitAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfitAllocationUpdateManyArgs>(args: SelectSubset<T, ProfitAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProfitAllocation.
     * @param {ProfitAllocationUpsertArgs} args - Arguments to update or create a ProfitAllocation.
     * @example
     * // Update or create a ProfitAllocation
     * const profitAllocation = await prisma.profitAllocation.upsert({
     *   create: {
     *     // ... data to create a ProfitAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfitAllocation we want to update
     *   }
     * })
     */
    upsert<T extends ProfitAllocationUpsertArgs>(args: SelectSubset<T, ProfitAllocationUpsertArgs<ExtArgs>>): Prisma__ProfitAllocationClient<$Result.GetResult<Prisma.$ProfitAllocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProfitAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationCountArgs} args - Arguments to filter ProfitAllocations to count.
     * @example
     * // Count the number of ProfitAllocations
     * const count = await prisma.profitAllocation.count({
     *   where: {
     *     // ... the filter for the ProfitAllocations we want to count
     *   }
     * })
    **/
    count<T extends ProfitAllocationCountArgs>(
      args?: Subset<T, ProfitAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfitAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfitAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfitAllocationAggregateArgs>(args: Subset<T, ProfitAllocationAggregateArgs>): Prisma.PrismaPromise<GetProfitAllocationAggregateType<T>>

    /**
     * Group by ProfitAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitAllocationGroupByArgs} args - Group by arguments.
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
      T extends ProfitAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfitAllocationGroupByArgs['orderBy'] }
        : { orderBy?: ProfitAllocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfitAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfitAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfitAllocation model
   */
  readonly fields: ProfitAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfitAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfitAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProfitAllocation model
   */ 
  interface ProfitAllocationFieldRefs {
    readonly id: FieldRef<"ProfitAllocation", 'String'>
    readonly tenantId: FieldRef<"ProfitAllocation", 'String'>
    readonly shopId: FieldRef<"ProfitAllocation", 'String'>
    readonly earnedMinor: FieldRef<"ProfitAllocation", 'BigInt'>
    readonly transferredMinor: FieldRef<"ProfitAllocation", 'BigInt'>
    readonly updatedAt: FieldRef<"ProfitAllocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfitAllocation findUnique
   */
  export type ProfitAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * Filter, which ProfitAllocation to fetch.
     */
    where: ProfitAllocationWhereUniqueInput
  }

  /**
   * ProfitAllocation findUniqueOrThrow
   */
  export type ProfitAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * Filter, which ProfitAllocation to fetch.
     */
    where: ProfitAllocationWhereUniqueInput
  }

  /**
   * ProfitAllocation findFirst
   */
  export type ProfitAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * Filter, which ProfitAllocation to fetch.
     */
    where?: ProfitAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitAllocations to fetch.
     */
    orderBy?: ProfitAllocationOrderByWithRelationInput | ProfitAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitAllocations.
     */
    cursor?: ProfitAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitAllocations.
     */
    distinct?: ProfitAllocationScalarFieldEnum | ProfitAllocationScalarFieldEnum[]
  }

  /**
   * ProfitAllocation findFirstOrThrow
   */
  export type ProfitAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * Filter, which ProfitAllocation to fetch.
     */
    where?: ProfitAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitAllocations to fetch.
     */
    orderBy?: ProfitAllocationOrderByWithRelationInput | ProfitAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitAllocations.
     */
    cursor?: ProfitAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitAllocations.
     */
    distinct?: ProfitAllocationScalarFieldEnum | ProfitAllocationScalarFieldEnum[]
  }

  /**
   * ProfitAllocation findMany
   */
  export type ProfitAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * Filter, which ProfitAllocations to fetch.
     */
    where?: ProfitAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitAllocations to fetch.
     */
    orderBy?: ProfitAllocationOrderByWithRelationInput | ProfitAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfitAllocations.
     */
    cursor?: ProfitAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitAllocations.
     */
    skip?: number
    distinct?: ProfitAllocationScalarFieldEnum | ProfitAllocationScalarFieldEnum[]
  }

  /**
   * ProfitAllocation create
   */
  export type ProfitAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * The data needed to create a ProfitAllocation.
     */
    data: XOR<ProfitAllocationCreateInput, ProfitAllocationUncheckedCreateInput>
  }

  /**
   * ProfitAllocation createMany
   */
  export type ProfitAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfitAllocations.
     */
    data: ProfitAllocationCreateManyInput | ProfitAllocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfitAllocation createManyAndReturn
   */
  export type ProfitAllocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProfitAllocations.
     */
    data: ProfitAllocationCreateManyInput | ProfitAllocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfitAllocation update
   */
  export type ProfitAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * The data needed to update a ProfitAllocation.
     */
    data: XOR<ProfitAllocationUpdateInput, ProfitAllocationUncheckedUpdateInput>
    /**
     * Choose, which ProfitAllocation to update.
     */
    where: ProfitAllocationWhereUniqueInput
  }

  /**
   * ProfitAllocation updateMany
   */
  export type ProfitAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfitAllocations.
     */
    data: XOR<ProfitAllocationUpdateManyMutationInput, ProfitAllocationUncheckedUpdateManyInput>
    /**
     * Filter which ProfitAllocations to update
     */
    where?: ProfitAllocationWhereInput
  }

  /**
   * ProfitAllocation upsert
   */
  export type ProfitAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * The filter to search for the ProfitAllocation to update in case it exists.
     */
    where: ProfitAllocationWhereUniqueInput
    /**
     * In case the ProfitAllocation found by the `where` argument doesn't exist, create a new ProfitAllocation with this data.
     */
    create: XOR<ProfitAllocationCreateInput, ProfitAllocationUncheckedCreateInput>
    /**
     * In case the ProfitAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfitAllocationUpdateInput, ProfitAllocationUncheckedUpdateInput>
  }

  /**
   * ProfitAllocation delete
   */
  export type ProfitAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
    /**
     * Filter which ProfitAllocation to delete.
     */
    where: ProfitAllocationWhereUniqueInput
  }

  /**
   * ProfitAllocation deleteMany
   */
  export type ProfitAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitAllocations to delete
     */
    where?: ProfitAllocationWhereInput
  }

  /**
   * ProfitAllocation without action
   */
  export type ProfitAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitAllocation
     */
    select?: ProfitAllocationSelect<ExtArgs> | null
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


  export const LedgerAccountScalarFieldEnum: {
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

  export type LedgerAccountScalarFieldEnum = (typeof LedgerAccountScalarFieldEnum)[keyof typeof LedgerAccountScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
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

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const PostingBatchScalarFieldEnum: {
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

  export type PostingBatchScalarFieldEnum = (typeof PostingBatchScalarFieldEnum)[keyof typeof PostingBatchScalarFieldEnum]


  export const LedgerEntryScalarFieldEnum: {
    id: 'id',
    journalEntryId: 'journalEntryId',
    accountId: 'accountId',
    type: 'type',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type LedgerEntryScalarFieldEnum = (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum]


  export const WorkPeriodScalarFieldEnum: {
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

  export type WorkPeriodScalarFieldEnum = (typeof WorkPeriodScalarFieldEnum)[keyof typeof WorkPeriodScalarFieldEnum]


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


  export const FinancialTransactionScalarFieldEnum: {
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

  export type FinancialTransactionScalarFieldEnum = (typeof FinancialTransactionScalarFieldEnum)[keyof typeof FinancialTransactionScalarFieldEnum]


  export const ChartAccountScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    code: 'code',
    name: 'name',
    type: 'type',
    fundCode: 'fundCode',
    createdAt: 'createdAt'
  };

  export type ChartAccountScalarFieldEnum = (typeof ChartAccountScalarFieldEnum)[keyof typeof ChartAccountScalarFieldEnum]


  export const PostedJournalScalarFieldEnum: {
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

  export type PostedJournalScalarFieldEnum = (typeof PostedJournalScalarFieldEnum)[keyof typeof PostedJournalScalarFieldEnum]


  export const PostedJournalLineScalarFieldEnum: {
    id: 'id',
    journalId: 'journalId',
    accountId: 'accountId',
    side: 'side',
    amountMinor: 'amountMinor'
  };

  export type PostedJournalLineScalarFieldEnum = (typeof PostedJournalLineScalarFieldEnum)[keyof typeof PostedJournalLineScalarFieldEnum]


  export const ObligationScalarFieldEnum: {
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

  export type ObligationScalarFieldEnum = (typeof ObligationScalarFieldEnum)[keyof typeof ObligationScalarFieldEnum]


  export const ProfitAllocationScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    earnedMinor: 'earnedMinor',
    transferredMinor: 'transferredMinor',
    updatedAt: 'updatedAt'
  };

  export type ProfitAllocationScalarFieldEnum = (typeof ProfitAllocationScalarFieldEnum)[keyof typeof ProfitAllocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type LedgerAccountWhereInput = {
    AND?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    OR?: LedgerAccountWhereInput[]
    NOT?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    id?: StringFilter<"LedgerAccount"> | string
    tenantId?: StringFilter<"LedgerAccount"> | string
    shopId?: StringFilter<"LedgerAccount"> | string
    code?: StringFilter<"LedgerAccount"> | string
    name?: StringFilter<"LedgerAccount"> | string
    type?: StringFilter<"LedgerAccount"> | string
    balance?: FloatFilter<"LedgerAccount"> | number
    parentId?: StringNullableFilter<"LedgerAccount"> | string | null
    createdAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    createdBy?: StringNullableFilter<"LedgerAccount"> | string | null
    updatedAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    updatedBy?: StringNullableFilter<"LedgerAccount"> | string | null
    deletedAt?: DateTimeNullableFilter<"LedgerAccount"> | Date | string | null
    deletedBy?: StringNullableFilter<"LedgerAccount"> | string | null
    version?: IntFilter<"LedgerAccount"> | number
    parent?: XOR<LedgerAccountNullableRelationFilter, LedgerAccountWhereInput> | null
    children?: LedgerAccountListRelationFilter
    entries?: LedgerEntryListRelationFilter
  }

  export type LedgerAccountOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    parent?: LedgerAccountOrderByWithRelationInput
    children?: LedgerAccountOrderByRelationAggregateInput
    entries?: LedgerEntryOrderByRelationAggregateInput
  }

  export type LedgerAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    OR?: LedgerAccountWhereInput[]
    NOT?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    tenantId?: StringFilter<"LedgerAccount"> | string
    shopId?: StringFilter<"LedgerAccount"> | string
    code?: StringFilter<"LedgerAccount"> | string
    name?: StringFilter<"LedgerAccount"> | string
    type?: StringFilter<"LedgerAccount"> | string
    balance?: FloatFilter<"LedgerAccount"> | number
    parentId?: StringNullableFilter<"LedgerAccount"> | string | null
    createdAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    createdBy?: StringNullableFilter<"LedgerAccount"> | string | null
    updatedAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    updatedBy?: StringNullableFilter<"LedgerAccount"> | string | null
    deletedAt?: DateTimeNullableFilter<"LedgerAccount"> | Date | string | null
    deletedBy?: StringNullableFilter<"LedgerAccount"> | string | null
    version?: IntFilter<"LedgerAccount"> | number
    parent?: XOR<LedgerAccountNullableRelationFilter, LedgerAccountWhereInput> | null
    children?: LedgerAccountListRelationFilter
    entries?: LedgerEntryListRelationFilter
  }, "id">

  export type LedgerAccountOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: LedgerAccountCountOrderByAggregateInput
    _avg?: LedgerAccountAvgOrderByAggregateInput
    _max?: LedgerAccountMaxOrderByAggregateInput
    _min?: LedgerAccountMinOrderByAggregateInput
    _sum?: LedgerAccountSumOrderByAggregateInput
  }

  export type LedgerAccountScalarWhereWithAggregatesInput = {
    AND?: LedgerAccountScalarWhereWithAggregatesInput | LedgerAccountScalarWhereWithAggregatesInput[]
    OR?: LedgerAccountScalarWhereWithAggregatesInput[]
    NOT?: LedgerAccountScalarWhereWithAggregatesInput | LedgerAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerAccount"> | string
    tenantId?: StringWithAggregatesFilter<"LedgerAccount"> | string
    shopId?: StringWithAggregatesFilter<"LedgerAccount"> | string
    code?: StringWithAggregatesFilter<"LedgerAccount"> | string
    name?: StringWithAggregatesFilter<"LedgerAccount"> | string
    type?: StringWithAggregatesFilter<"LedgerAccount"> | string
    balance?: FloatWithAggregatesFilter<"LedgerAccount"> | number
    parentId?: StringNullableWithAggregatesFilter<"LedgerAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LedgerAccount"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"LedgerAccount"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"LedgerAccount"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"LedgerAccount"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"LedgerAccount"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"LedgerAccount"> | string | null
    version?: IntWithAggregatesFilter<"LedgerAccount"> | number
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    tenantId?: StringFilter<"JournalEntry"> | string
    shopId?: StringFilter<"JournalEntry"> | string
    workPeriodId?: StringFilter<"JournalEntry"> | string
    description?: StringFilter<"JournalEntry"> | string
    postedBy?: StringFilter<"JournalEntry"> | string
    status?: StringFilter<"JournalEntry"> | string
    batchId?: StringNullableFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    createdBy?: StringNullableFilter<"JournalEntry"> | string | null
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedBy?: StringNullableFilter<"JournalEntry"> | string | null
    deletedAt?: DateTimeNullableFilter<"JournalEntry"> | Date | string | null
    deletedBy?: StringNullableFilter<"JournalEntry"> | string | null
    version?: IntFilter<"JournalEntry"> | number
    batch?: XOR<PostingBatchNullableRelationFilter, PostingBatchWhereInput> | null
    entries?: LedgerEntryListRelationFilter
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    description?: SortOrder
    postedBy?: SortOrder
    status?: SortOrder
    batchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    batch?: PostingBatchOrderByWithRelationInput
    entries?: LedgerEntryOrderByRelationAggregateInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    tenantId?: StringFilter<"JournalEntry"> | string
    shopId?: StringFilter<"JournalEntry"> | string
    workPeriodId?: StringFilter<"JournalEntry"> | string
    description?: StringFilter<"JournalEntry"> | string
    postedBy?: StringFilter<"JournalEntry"> | string
    status?: StringFilter<"JournalEntry"> | string
    batchId?: StringNullableFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    createdBy?: StringNullableFilter<"JournalEntry"> | string | null
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedBy?: StringNullableFilter<"JournalEntry"> | string | null
    deletedAt?: DateTimeNullableFilter<"JournalEntry"> | Date | string | null
    deletedBy?: StringNullableFilter<"JournalEntry"> | string | null
    version?: IntFilter<"JournalEntry"> | number
    batch?: XOR<PostingBatchNullableRelationFilter, PostingBatchWhereInput> | null
    entries?: LedgerEntryListRelationFilter
  }, "id">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    description?: SortOrder
    postedBy?: SortOrder
    status?: SortOrder
    batchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _avg?: JournalEntryAvgOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
    _sum?: JournalEntrySumOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JournalEntry"> | string
    tenantId?: StringWithAggregatesFilter<"JournalEntry"> | string
    shopId?: StringWithAggregatesFilter<"JournalEntry"> | string
    workPeriodId?: StringWithAggregatesFilter<"JournalEntry"> | string
    description?: StringWithAggregatesFilter<"JournalEntry"> | string
    postedBy?: StringWithAggregatesFilter<"JournalEntry"> | string
    status?: StringWithAggregatesFilter<"JournalEntry"> | string
    batchId?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"JournalEntry"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    version?: IntWithAggregatesFilter<"JournalEntry"> | number
  }

  export type PostingBatchWhereInput = {
    AND?: PostingBatchWhereInput | PostingBatchWhereInput[]
    OR?: PostingBatchWhereInput[]
    NOT?: PostingBatchWhereInput | PostingBatchWhereInput[]
    id?: StringFilter<"PostingBatch"> | string
    tenantId?: StringFilter<"PostingBatch"> | string
    shopId?: StringFilter<"PostingBatch"> | string
    workPeriodId?: StringNullableFilter<"PostingBatch"> | string | null
    name?: StringFilter<"PostingBatch"> | string
    description?: StringNullableFilter<"PostingBatch"> | string | null
    status?: StringFilter<"PostingBatch"> | string
    postedBy?: StringNullableFilter<"PostingBatch"> | string | null
    postedAt?: DateTimeNullableFilter<"PostingBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"PostingBatch"> | Date | string
    createdBy?: StringNullableFilter<"PostingBatch"> | string | null
    updatedAt?: DateTimeFilter<"PostingBatch"> | Date | string
    updatedBy?: StringNullableFilter<"PostingBatch"> | string | null
    deletedAt?: DateTimeNullableFilter<"PostingBatch"> | Date | string | null
    deletedBy?: StringNullableFilter<"PostingBatch"> | string | null
    version?: IntFilter<"PostingBatch"> | number
    journalEntries?: JournalEntryListRelationFilter
  }

  export type PostingBatchOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    postedBy?: SortOrderInput | SortOrder
    postedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    journalEntries?: JournalEntryOrderByRelationAggregateInput
  }

  export type PostingBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostingBatchWhereInput | PostingBatchWhereInput[]
    OR?: PostingBatchWhereInput[]
    NOT?: PostingBatchWhereInput | PostingBatchWhereInput[]
    tenantId?: StringFilter<"PostingBatch"> | string
    shopId?: StringFilter<"PostingBatch"> | string
    workPeriodId?: StringNullableFilter<"PostingBatch"> | string | null
    name?: StringFilter<"PostingBatch"> | string
    description?: StringNullableFilter<"PostingBatch"> | string | null
    status?: StringFilter<"PostingBatch"> | string
    postedBy?: StringNullableFilter<"PostingBatch"> | string | null
    postedAt?: DateTimeNullableFilter<"PostingBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"PostingBatch"> | Date | string
    createdBy?: StringNullableFilter<"PostingBatch"> | string | null
    updatedAt?: DateTimeFilter<"PostingBatch"> | Date | string
    updatedBy?: StringNullableFilter<"PostingBatch"> | string | null
    deletedAt?: DateTimeNullableFilter<"PostingBatch"> | Date | string | null
    deletedBy?: StringNullableFilter<"PostingBatch"> | string | null
    version?: IntFilter<"PostingBatch"> | number
    journalEntries?: JournalEntryListRelationFilter
  }, "id">

  export type PostingBatchOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    postedBy?: SortOrderInput | SortOrder
    postedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: PostingBatchCountOrderByAggregateInput
    _avg?: PostingBatchAvgOrderByAggregateInput
    _max?: PostingBatchMaxOrderByAggregateInput
    _min?: PostingBatchMinOrderByAggregateInput
    _sum?: PostingBatchSumOrderByAggregateInput
  }

  export type PostingBatchScalarWhereWithAggregatesInput = {
    AND?: PostingBatchScalarWhereWithAggregatesInput | PostingBatchScalarWhereWithAggregatesInput[]
    OR?: PostingBatchScalarWhereWithAggregatesInput[]
    NOT?: PostingBatchScalarWhereWithAggregatesInput | PostingBatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostingBatch"> | string
    tenantId?: StringWithAggregatesFilter<"PostingBatch"> | string
    shopId?: StringWithAggregatesFilter<"PostingBatch"> | string
    workPeriodId?: StringNullableWithAggregatesFilter<"PostingBatch"> | string | null
    name?: StringWithAggregatesFilter<"PostingBatch"> | string
    description?: StringNullableWithAggregatesFilter<"PostingBatch"> | string | null
    status?: StringWithAggregatesFilter<"PostingBatch"> | string
    postedBy?: StringNullableWithAggregatesFilter<"PostingBatch"> | string | null
    postedAt?: DateTimeNullableWithAggregatesFilter<"PostingBatch"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PostingBatch"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"PostingBatch"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PostingBatch"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"PostingBatch"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PostingBatch"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"PostingBatch"> | string | null
    version?: IntWithAggregatesFilter<"PostingBatch"> | number
  }

  export type LedgerEntryWhereInput = {
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    journalEntryId?: StringFilter<"LedgerEntry"> | string
    accountId?: StringFilter<"LedgerEntry"> | string
    type?: StringFilter<"LedgerEntry"> | string
    amount?: FloatFilter<"LedgerEntry"> | number
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    account?: XOR<LedgerAccountRelationFilter, LedgerAccountWhereInput>
    journalEntry?: XOR<JournalEntryRelationFilter, JournalEntryWhereInput>
  }

  export type LedgerEntryOrderByWithRelationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    account?: LedgerAccountOrderByWithRelationInput
    journalEntry?: JournalEntryOrderByWithRelationInput
  }

  export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    journalEntryId?: StringFilter<"LedgerEntry"> | string
    accountId?: StringFilter<"LedgerEntry"> | string
    type?: StringFilter<"LedgerEntry"> | string
    amount?: FloatFilter<"LedgerEntry"> | number
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    account?: XOR<LedgerAccountRelationFilter, LedgerAccountWhereInput>
    journalEntry?: XOR<JournalEntryRelationFilter, JournalEntryWhereInput>
  }, "id">

  export type LedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: LedgerEntryCountOrderByAggregateInput
    _avg?: LedgerEntryAvgOrderByAggregateInput
    _max?: LedgerEntryMaxOrderByAggregateInput
    _min?: LedgerEntryMinOrderByAggregateInput
    _sum?: LedgerEntrySumOrderByAggregateInput
  }

  export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    OR?: LedgerEntryScalarWhereWithAggregatesInput[]
    NOT?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerEntry"> | string
    journalEntryId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    accountId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    type?: StringWithAggregatesFilter<"LedgerEntry"> | string
    amount?: FloatWithAggregatesFilter<"LedgerEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string
  }

  export type WorkPeriodWhereInput = {
    AND?: WorkPeriodWhereInput | WorkPeriodWhereInput[]
    OR?: WorkPeriodWhereInput[]
    NOT?: WorkPeriodWhereInput | WorkPeriodWhereInput[]
    id?: StringFilter<"WorkPeriod"> | string
    tenantId?: StringNullableFilter<"WorkPeriod"> | string | null
    shopId?: StringFilter<"WorkPeriod"> | string
    openedBy?: StringFilter<"WorkPeriod"> | string
    closedBy?: StringNullableFilter<"WorkPeriod"> | string | null
    openedAt?: DateTimeFilter<"WorkPeriod"> | Date | string
    closedAt?: DateTimeNullableFilter<"WorkPeriod"> | Date | string | null
    status?: StringFilter<"WorkPeriod"> | string
    totalRevenue?: FloatFilter<"WorkPeriod"> | number
    totalExpense?: FloatFilter<"WorkPeriod"> | number
    netProfit?: FloatFilter<"WorkPeriod"> | number
    grossProfit?: FloatFilter<"WorkPeriod"> | number
    createdAt?: DateTimeFilter<"WorkPeriod"> | Date | string
    createdBy?: StringNullableFilter<"WorkPeriod"> | string | null
    updatedAt?: DateTimeFilter<"WorkPeriod"> | Date | string
    updatedBy?: StringNullableFilter<"WorkPeriod"> | string | null
    version?: IntFilter<"WorkPeriod"> | number
  }

  export type WorkPeriodOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    shopId?: SortOrder
    openedBy?: SortOrder
    closedBy?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    version?: SortOrder
  }

  export type WorkPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkPeriodWhereInput | WorkPeriodWhereInput[]
    OR?: WorkPeriodWhereInput[]
    NOT?: WorkPeriodWhereInput | WorkPeriodWhereInput[]
    tenantId?: StringNullableFilter<"WorkPeriod"> | string | null
    shopId?: StringFilter<"WorkPeriod"> | string
    openedBy?: StringFilter<"WorkPeriod"> | string
    closedBy?: StringNullableFilter<"WorkPeriod"> | string | null
    openedAt?: DateTimeFilter<"WorkPeriod"> | Date | string
    closedAt?: DateTimeNullableFilter<"WorkPeriod"> | Date | string | null
    status?: StringFilter<"WorkPeriod"> | string
    totalRevenue?: FloatFilter<"WorkPeriod"> | number
    totalExpense?: FloatFilter<"WorkPeriod"> | number
    netProfit?: FloatFilter<"WorkPeriod"> | number
    grossProfit?: FloatFilter<"WorkPeriod"> | number
    createdAt?: DateTimeFilter<"WorkPeriod"> | Date | string
    createdBy?: StringNullableFilter<"WorkPeriod"> | string | null
    updatedAt?: DateTimeFilter<"WorkPeriod"> | Date | string
    updatedBy?: StringNullableFilter<"WorkPeriod"> | string | null
    version?: IntFilter<"WorkPeriod"> | number
  }, "id">

  export type WorkPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    shopId?: SortOrder
    openedBy?: SortOrder
    closedBy?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: WorkPeriodCountOrderByAggregateInput
    _avg?: WorkPeriodAvgOrderByAggregateInput
    _max?: WorkPeriodMaxOrderByAggregateInput
    _min?: WorkPeriodMinOrderByAggregateInput
    _sum?: WorkPeriodSumOrderByAggregateInput
  }

  export type WorkPeriodScalarWhereWithAggregatesInput = {
    AND?: WorkPeriodScalarWhereWithAggregatesInput | WorkPeriodScalarWhereWithAggregatesInput[]
    OR?: WorkPeriodScalarWhereWithAggregatesInput[]
    NOT?: WorkPeriodScalarWhereWithAggregatesInput | WorkPeriodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkPeriod"> | string
    tenantId?: StringNullableWithAggregatesFilter<"WorkPeriod"> | string | null
    shopId?: StringWithAggregatesFilter<"WorkPeriod"> | string
    openedBy?: StringWithAggregatesFilter<"WorkPeriod"> | string
    closedBy?: StringNullableWithAggregatesFilter<"WorkPeriod"> | string | null
    openedAt?: DateTimeWithAggregatesFilter<"WorkPeriod"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"WorkPeriod"> | Date | string | null
    status?: StringWithAggregatesFilter<"WorkPeriod"> | string
    totalRevenue?: FloatWithAggregatesFilter<"WorkPeriod"> | number
    totalExpense?: FloatWithAggregatesFilter<"WorkPeriod"> | number
    netProfit?: FloatWithAggregatesFilter<"WorkPeriod"> | number
    grossProfit?: FloatWithAggregatesFilter<"WorkPeriod"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkPeriod"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"WorkPeriod"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"WorkPeriod"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"WorkPeriod"> | string | null
    version?: IntWithAggregatesFilter<"WorkPeriod"> | number
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

  export type FinancialTransactionWhereInput = {
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    id?: StringFilter<"FinancialTransaction"> | string
    tenantId?: StringFilter<"FinancialTransaction"> | string
    shopId?: StringFilter<"FinancialTransaction"> | string
    type?: StringFilter<"FinancialTransaction"> | string
    occurredOn?: DateTimeFilter<"FinancialTransaction"> | Date | string
    occurredAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    actorUserId?: StringNullableFilter<"FinancialTransaction"> | string | null
    sourceDomain?: StringFilter<"FinancialTransaction"> | string
    sourceCommand?: StringFilter<"FinancialTransaction"> | string
    sourceId?: StringFilter<"FinancialTransaction"> | string
    idempotencyKey?: StringFilter<"FinancialTransaction"> | string
    amountMinor?: BigIntFilter<"FinancialTransaction"> | bigint | number
    currency?: StringFilter<"FinancialTransaction"> | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    reason?: StringNullableFilter<"FinancialTransaction"> | string | null
    originalTransactionId?: StringNullableFilter<"FinancialTransaction"> | string | null
    status?: StringFilter<"FinancialTransaction"> | string
    metadata?: JsonNullableFilter<"FinancialTransaction">
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    createdBy?: StringNullableFilter<"FinancialTransaction"> | string | null
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
  }

  export type FinancialTransactionOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    occurredOn?: SortOrder
    occurredAt?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    sourceDomain?: SortOrder
    sourceCommand?: SortOrder
    sourceId?: SortOrder
    idempotencyKey?: SortOrder
    amountMinor?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    originalTransactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_idempotencyKey?: FinancialTransactionTenantIdIdempotencyKeyCompoundUniqueInput
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    tenantId?: StringFilter<"FinancialTransaction"> | string
    shopId?: StringFilter<"FinancialTransaction"> | string
    type?: StringFilter<"FinancialTransaction"> | string
    occurredOn?: DateTimeFilter<"FinancialTransaction"> | Date | string
    occurredAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    actorUserId?: StringNullableFilter<"FinancialTransaction"> | string | null
    sourceDomain?: StringFilter<"FinancialTransaction"> | string
    sourceCommand?: StringFilter<"FinancialTransaction"> | string
    sourceId?: StringFilter<"FinancialTransaction"> | string
    idempotencyKey?: StringFilter<"FinancialTransaction"> | string
    amountMinor?: BigIntFilter<"FinancialTransaction"> | bigint | number
    currency?: StringFilter<"FinancialTransaction"> | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    reason?: StringNullableFilter<"FinancialTransaction"> | string | null
    originalTransactionId?: StringNullableFilter<"FinancialTransaction"> | string | null
    status?: StringFilter<"FinancialTransaction"> | string
    metadata?: JsonNullableFilter<"FinancialTransaction">
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    createdBy?: StringNullableFilter<"FinancialTransaction"> | string | null
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
  }, "id" | "tenantId_idempotencyKey">

  export type FinancialTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    occurredOn?: SortOrder
    occurredAt?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    sourceDomain?: SortOrder
    sourceCommand?: SortOrder
    sourceId?: SortOrder
    idempotencyKey?: SortOrder
    amountMinor?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    originalTransactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: FinancialTransactionCountOrderByAggregateInput
    _avg?: FinancialTransactionAvgOrderByAggregateInput
    _max?: FinancialTransactionMaxOrderByAggregateInput
    _min?: FinancialTransactionMinOrderByAggregateInput
    _sum?: FinancialTransactionSumOrderByAggregateInput
  }

  export type FinancialTransactionScalarWhereWithAggregatesInput = {
    AND?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    OR?: FinancialTransactionScalarWhereWithAggregatesInput[]
    NOT?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    tenantId?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    shopId?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    type?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    occurredOn?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    occurredAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    actorUserId?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    sourceDomain?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    sourceCommand?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    sourceId?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    idempotencyKey?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    amountMinor?: BigIntWithAggregatesFilter<"FinancialTransaction"> | bigint | number
    currency?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    description?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    reason?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    originalTransactionId?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    status?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    metadata?: JsonNullableWithAggregatesFilter<"FinancialTransaction">
    createdAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
  }

  export type ChartAccountWhereInput = {
    AND?: ChartAccountWhereInput | ChartAccountWhereInput[]
    OR?: ChartAccountWhereInput[]
    NOT?: ChartAccountWhereInput | ChartAccountWhereInput[]
    id?: StringFilter<"ChartAccount"> | string
    tenantId?: StringFilter<"ChartAccount"> | string
    shopId?: StringFilter<"ChartAccount"> | string
    code?: StringFilter<"ChartAccount"> | string
    name?: StringFilter<"ChartAccount"> | string
    type?: StringFilter<"ChartAccount"> | string
    fundCode?: StringNullableFilter<"ChartAccount"> | string | null
    createdAt?: DateTimeFilter<"ChartAccount"> | Date | string
    lines?: PostedJournalLineListRelationFilter
  }

  export type ChartAccountOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fundCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lines?: PostedJournalLineOrderByRelationAggregateInput
  }

  export type ChartAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_shopId_code?: ChartAccountTenantIdShopIdCodeCompoundUniqueInput
    AND?: ChartAccountWhereInput | ChartAccountWhereInput[]
    OR?: ChartAccountWhereInput[]
    NOT?: ChartAccountWhereInput | ChartAccountWhereInput[]
    tenantId?: StringFilter<"ChartAccount"> | string
    shopId?: StringFilter<"ChartAccount"> | string
    code?: StringFilter<"ChartAccount"> | string
    name?: StringFilter<"ChartAccount"> | string
    type?: StringFilter<"ChartAccount"> | string
    fundCode?: StringNullableFilter<"ChartAccount"> | string | null
    createdAt?: DateTimeFilter<"ChartAccount"> | Date | string
    lines?: PostedJournalLineListRelationFilter
  }, "id" | "tenantId_shopId_code">

  export type ChartAccountOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fundCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChartAccountCountOrderByAggregateInput
    _max?: ChartAccountMaxOrderByAggregateInput
    _min?: ChartAccountMinOrderByAggregateInput
  }

  export type ChartAccountScalarWhereWithAggregatesInput = {
    AND?: ChartAccountScalarWhereWithAggregatesInput | ChartAccountScalarWhereWithAggregatesInput[]
    OR?: ChartAccountScalarWhereWithAggregatesInput[]
    NOT?: ChartAccountScalarWhereWithAggregatesInput | ChartAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChartAccount"> | string
    tenantId?: StringWithAggregatesFilter<"ChartAccount"> | string
    shopId?: StringWithAggregatesFilter<"ChartAccount"> | string
    code?: StringWithAggregatesFilter<"ChartAccount"> | string
    name?: StringWithAggregatesFilter<"ChartAccount"> | string
    type?: StringWithAggregatesFilter<"ChartAccount"> | string
    fundCode?: StringNullableWithAggregatesFilter<"ChartAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChartAccount"> | Date | string
  }

  export type PostedJournalWhereInput = {
    AND?: PostedJournalWhereInput | PostedJournalWhereInput[]
    OR?: PostedJournalWhereInput[]
    NOT?: PostedJournalWhereInput | PostedJournalWhereInput[]
    id?: StringFilter<"PostedJournal"> | string
    tenantId?: StringFilter<"PostedJournal"> | string
    shopId?: StringFilter<"PostedJournal"> | string
    financialTransactionId?: StringFilter<"PostedJournal"> | string
    description?: StringFilter<"PostedJournal"> | string
    status?: StringFilter<"PostedJournal"> | string
    postedBy?: StringFilter<"PostedJournal"> | string
    occurredOn?: DateTimeFilter<"PostedJournal"> | Date | string
    createdAt?: DateTimeFilter<"PostedJournal"> | Date | string
    lines?: PostedJournalLineListRelationFilter
  }

  export type PostedJournalOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    financialTransactionId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    occurredOn?: SortOrder
    createdAt?: SortOrder
    lines?: PostedJournalLineOrderByRelationAggregateInput
  }

  export type PostedJournalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    financialTransactionId?: string
    AND?: PostedJournalWhereInput | PostedJournalWhereInput[]
    OR?: PostedJournalWhereInput[]
    NOT?: PostedJournalWhereInput | PostedJournalWhereInput[]
    tenantId?: StringFilter<"PostedJournal"> | string
    shopId?: StringFilter<"PostedJournal"> | string
    description?: StringFilter<"PostedJournal"> | string
    status?: StringFilter<"PostedJournal"> | string
    postedBy?: StringFilter<"PostedJournal"> | string
    occurredOn?: DateTimeFilter<"PostedJournal"> | Date | string
    createdAt?: DateTimeFilter<"PostedJournal"> | Date | string
    lines?: PostedJournalLineListRelationFilter
  }, "id" | "financialTransactionId">

  export type PostedJournalOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    financialTransactionId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    occurredOn?: SortOrder
    createdAt?: SortOrder
    _count?: PostedJournalCountOrderByAggregateInput
    _max?: PostedJournalMaxOrderByAggregateInput
    _min?: PostedJournalMinOrderByAggregateInput
  }

  export type PostedJournalScalarWhereWithAggregatesInput = {
    AND?: PostedJournalScalarWhereWithAggregatesInput | PostedJournalScalarWhereWithAggregatesInput[]
    OR?: PostedJournalScalarWhereWithAggregatesInput[]
    NOT?: PostedJournalScalarWhereWithAggregatesInput | PostedJournalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostedJournal"> | string
    tenantId?: StringWithAggregatesFilter<"PostedJournal"> | string
    shopId?: StringWithAggregatesFilter<"PostedJournal"> | string
    financialTransactionId?: StringWithAggregatesFilter<"PostedJournal"> | string
    description?: StringWithAggregatesFilter<"PostedJournal"> | string
    status?: StringWithAggregatesFilter<"PostedJournal"> | string
    postedBy?: StringWithAggregatesFilter<"PostedJournal"> | string
    occurredOn?: DateTimeWithAggregatesFilter<"PostedJournal"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PostedJournal"> | Date | string
  }

  export type PostedJournalLineWhereInput = {
    AND?: PostedJournalLineWhereInput | PostedJournalLineWhereInput[]
    OR?: PostedJournalLineWhereInput[]
    NOT?: PostedJournalLineWhereInput | PostedJournalLineWhereInput[]
    id?: StringFilter<"PostedJournalLine"> | string
    journalId?: StringFilter<"PostedJournalLine"> | string
    accountId?: StringFilter<"PostedJournalLine"> | string
    side?: StringFilter<"PostedJournalLine"> | string
    amountMinor?: BigIntFilter<"PostedJournalLine"> | bigint | number
    journal?: XOR<PostedJournalRelationFilter, PostedJournalWhereInput>
    account?: XOR<ChartAccountRelationFilter, ChartAccountWhereInput>
  }

  export type PostedJournalLineOrderByWithRelationInput = {
    id?: SortOrder
    journalId?: SortOrder
    accountId?: SortOrder
    side?: SortOrder
    amountMinor?: SortOrder
    journal?: PostedJournalOrderByWithRelationInput
    account?: ChartAccountOrderByWithRelationInput
  }

  export type PostedJournalLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostedJournalLineWhereInput | PostedJournalLineWhereInput[]
    OR?: PostedJournalLineWhereInput[]
    NOT?: PostedJournalLineWhereInput | PostedJournalLineWhereInput[]
    journalId?: StringFilter<"PostedJournalLine"> | string
    accountId?: StringFilter<"PostedJournalLine"> | string
    side?: StringFilter<"PostedJournalLine"> | string
    amountMinor?: BigIntFilter<"PostedJournalLine"> | bigint | number
    journal?: XOR<PostedJournalRelationFilter, PostedJournalWhereInput>
    account?: XOR<ChartAccountRelationFilter, ChartAccountWhereInput>
  }, "id">

  export type PostedJournalLineOrderByWithAggregationInput = {
    id?: SortOrder
    journalId?: SortOrder
    accountId?: SortOrder
    side?: SortOrder
    amountMinor?: SortOrder
    _count?: PostedJournalLineCountOrderByAggregateInput
    _avg?: PostedJournalLineAvgOrderByAggregateInput
    _max?: PostedJournalLineMaxOrderByAggregateInput
    _min?: PostedJournalLineMinOrderByAggregateInput
    _sum?: PostedJournalLineSumOrderByAggregateInput
  }

  export type PostedJournalLineScalarWhereWithAggregatesInput = {
    AND?: PostedJournalLineScalarWhereWithAggregatesInput | PostedJournalLineScalarWhereWithAggregatesInput[]
    OR?: PostedJournalLineScalarWhereWithAggregatesInput[]
    NOT?: PostedJournalLineScalarWhereWithAggregatesInput | PostedJournalLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostedJournalLine"> | string
    journalId?: StringWithAggregatesFilter<"PostedJournalLine"> | string
    accountId?: StringWithAggregatesFilter<"PostedJournalLine"> | string
    side?: StringWithAggregatesFilter<"PostedJournalLine"> | string
    amountMinor?: BigIntWithAggregatesFilter<"PostedJournalLine"> | bigint | number
  }

  export type ObligationWhereInput = {
    AND?: ObligationWhereInput | ObligationWhereInput[]
    OR?: ObligationWhereInput[]
    NOT?: ObligationWhereInput | ObligationWhereInput[]
    id?: StringFilter<"Obligation"> | string
    tenantId?: StringFilter<"Obligation"> | string
    shopId?: StringFilter<"Obligation"> | string
    kind?: StringFilter<"Obligation"> | string
    partyName?: StringFilter<"Obligation"> | string
    outstandingMinor?: BigIntFilter<"Obligation"> | bigint | number
    financialTransactionId?: StringFilter<"Obligation"> | string
    status?: StringFilter<"Obligation"> | string
    createdAt?: DateTimeFilter<"Obligation"> | Date | string
  }

  export type ObligationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    kind?: SortOrder
    partyName?: SortOrder
    outstandingMinor?: SortOrder
    financialTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ObligationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObligationWhereInput | ObligationWhereInput[]
    OR?: ObligationWhereInput[]
    NOT?: ObligationWhereInput | ObligationWhereInput[]
    tenantId?: StringFilter<"Obligation"> | string
    shopId?: StringFilter<"Obligation"> | string
    kind?: StringFilter<"Obligation"> | string
    partyName?: StringFilter<"Obligation"> | string
    outstandingMinor?: BigIntFilter<"Obligation"> | bigint | number
    financialTransactionId?: StringFilter<"Obligation"> | string
    status?: StringFilter<"Obligation"> | string
    createdAt?: DateTimeFilter<"Obligation"> | Date | string
  }, "id">

  export type ObligationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    kind?: SortOrder
    partyName?: SortOrder
    outstandingMinor?: SortOrder
    financialTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ObligationCountOrderByAggregateInput
    _avg?: ObligationAvgOrderByAggregateInput
    _max?: ObligationMaxOrderByAggregateInput
    _min?: ObligationMinOrderByAggregateInput
    _sum?: ObligationSumOrderByAggregateInput
  }

  export type ObligationScalarWhereWithAggregatesInput = {
    AND?: ObligationScalarWhereWithAggregatesInput | ObligationScalarWhereWithAggregatesInput[]
    OR?: ObligationScalarWhereWithAggregatesInput[]
    NOT?: ObligationScalarWhereWithAggregatesInput | ObligationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obligation"> | string
    tenantId?: StringWithAggregatesFilter<"Obligation"> | string
    shopId?: StringWithAggregatesFilter<"Obligation"> | string
    kind?: StringWithAggregatesFilter<"Obligation"> | string
    partyName?: StringWithAggregatesFilter<"Obligation"> | string
    outstandingMinor?: BigIntWithAggregatesFilter<"Obligation"> | bigint | number
    financialTransactionId?: StringWithAggregatesFilter<"Obligation"> | string
    status?: StringWithAggregatesFilter<"Obligation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Obligation"> | Date | string
  }

  export type ProfitAllocationWhereInput = {
    AND?: ProfitAllocationWhereInput | ProfitAllocationWhereInput[]
    OR?: ProfitAllocationWhereInput[]
    NOT?: ProfitAllocationWhereInput | ProfitAllocationWhereInput[]
    id?: StringFilter<"ProfitAllocation"> | string
    tenantId?: StringFilter<"ProfitAllocation"> | string
    shopId?: StringFilter<"ProfitAllocation"> | string
    earnedMinor?: BigIntFilter<"ProfitAllocation"> | bigint | number
    transferredMinor?: BigIntFilter<"ProfitAllocation"> | bigint | number
    updatedAt?: DateTimeFilter<"ProfitAllocation"> | Date | string
  }

  export type ProfitAllocationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_shopId?: ProfitAllocationTenantIdShopIdCompoundUniqueInput
    AND?: ProfitAllocationWhereInput | ProfitAllocationWhereInput[]
    OR?: ProfitAllocationWhereInput[]
    NOT?: ProfitAllocationWhereInput | ProfitAllocationWhereInput[]
    tenantId?: StringFilter<"ProfitAllocation"> | string
    shopId?: StringFilter<"ProfitAllocation"> | string
    earnedMinor?: BigIntFilter<"ProfitAllocation"> | bigint | number
    transferredMinor?: BigIntFilter<"ProfitAllocation"> | bigint | number
    updatedAt?: DateTimeFilter<"ProfitAllocation"> | Date | string
  }, "id" | "tenantId_shopId">

  export type ProfitAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfitAllocationCountOrderByAggregateInput
    _avg?: ProfitAllocationAvgOrderByAggregateInput
    _max?: ProfitAllocationMaxOrderByAggregateInput
    _min?: ProfitAllocationMinOrderByAggregateInput
    _sum?: ProfitAllocationSumOrderByAggregateInput
  }

  export type ProfitAllocationScalarWhereWithAggregatesInput = {
    AND?: ProfitAllocationScalarWhereWithAggregatesInput | ProfitAllocationScalarWhereWithAggregatesInput[]
    OR?: ProfitAllocationScalarWhereWithAggregatesInput[]
    NOT?: ProfitAllocationScalarWhereWithAggregatesInput | ProfitAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfitAllocation"> | string
    tenantId?: StringWithAggregatesFilter<"ProfitAllocation"> | string
    shopId?: StringWithAggregatesFilter<"ProfitAllocation"> | string
    earnedMinor?: BigIntWithAggregatesFilter<"ProfitAllocation"> | bigint | number
    transferredMinor?: BigIntWithAggregatesFilter<"ProfitAllocation"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"ProfitAllocation"> | Date | string
  }

  export type LedgerAccountCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    parent?: LedgerAccountCreateNestedOneWithoutChildrenInput
    children?: LedgerAccountCreateNestedManyWithoutParentInput
    entries?: LedgerEntryCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    children?: LedgerAccountUncheckedCreateNestedManyWithoutParentInput
    entries?: LedgerEntryUncheckedCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parent?: LedgerAccountUpdateOneWithoutChildrenNestedInput
    children?: LedgerAccountUpdateManyWithoutParentNestedInput
    entries?: LedgerEntryUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    children?: LedgerAccountUncheckedUpdateManyWithoutParentNestedInput
    entries?: LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type LedgerAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type LedgerAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type JournalEntryCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    batch?: PostingBatchCreateNestedOneWithoutJournalEntriesInput
    entries?: LedgerEntryCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    batchId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    entries?: LedgerEntryUncheckedCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    batch?: PostingBatchUpdateOneWithoutJournalEntriesNestedInput
    entries?: LedgerEntryUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    entries?: LedgerEntryUncheckedUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    batchId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type JournalEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type PostingBatchCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    name: string
    description?: string | null
    status?: string
    postedBy?: string | null
    postedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    journalEntries?: JournalEntryCreateNestedManyWithoutBatchInput
  }

  export type PostingBatchUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    name: string
    description?: string | null
    status?: string
    postedBy?: string | null
    postedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutBatchInput
  }

  export type PostingBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    journalEntries?: JournalEntryUpdateManyWithoutBatchNestedInput
  }

  export type PostingBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type PostingBatchCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    name: string
    description?: string | null
    status?: string
    postedBy?: string | null
    postedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type PostingBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type PostingBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type LedgerEntryCreateInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
    account: LedgerAccountCreateNestedOneWithoutEntriesInput
    journalEntry: JournalEntryCreateNestedOneWithoutEntriesInput
  }

  export type LedgerEntryUncheckedCreateInput = {
    id?: string
    journalEntryId: string
    accountId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: LedgerAccountUpdateOneRequiredWithoutEntriesNestedInput
    journalEntry?: JournalEntryUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalEntryId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyInput = {
    id?: string
    journalEntryId: string
    accountId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalEntryId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPeriodCreateInput = {
    id?: string
    tenantId?: string | null
    shopId: string
    openedBy: string
    closedBy?: string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    status?: string
    totalRevenue?: number
    totalExpense?: number
    netProfit?: number
    grossProfit?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    version?: number
  }

  export type WorkPeriodUncheckedCreateInput = {
    id?: string
    tenantId?: string | null
    shopId: string
    openedBy: string
    closedBy?: string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    status?: string
    totalRevenue?: number
    totalExpense?: number
    netProfit?: number
    grossProfit?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    version?: number
  }

  export type WorkPeriodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: StringFieldUpdateOperationsInput | string
    openedBy?: StringFieldUpdateOperationsInput | string
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalExpense?: FloatFieldUpdateOperationsInput | number
    netProfit?: FloatFieldUpdateOperationsInput | number
    grossProfit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type WorkPeriodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: StringFieldUpdateOperationsInput | string
    openedBy?: StringFieldUpdateOperationsInput | string
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalExpense?: FloatFieldUpdateOperationsInput | number
    netProfit?: FloatFieldUpdateOperationsInput | number
    grossProfit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type WorkPeriodCreateManyInput = {
    id?: string
    tenantId?: string | null
    shopId: string
    openedBy: string
    closedBy?: string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    status?: string
    totalRevenue?: number
    totalExpense?: number
    netProfit?: number
    grossProfit?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    version?: number
  }

  export type WorkPeriodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: StringFieldUpdateOperationsInput | string
    openedBy?: StringFieldUpdateOperationsInput | string
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalExpense?: FloatFieldUpdateOperationsInput | number
    netProfit?: FloatFieldUpdateOperationsInput | number
    grossProfit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type WorkPeriodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: StringFieldUpdateOperationsInput | string
    openedBy?: StringFieldUpdateOperationsInput | string
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalExpense?: FloatFieldUpdateOperationsInput | number
    netProfit?: FloatFieldUpdateOperationsInput | number
    grossProfit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
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

  export type FinancialTransactionCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    type: string
    occurredOn: Date | string
    occurredAt?: Date | string
    actorUserId?: string | null
    sourceDomain: string
    sourceCommand: string
    sourceId: string
    idempotencyKey: string
    amountMinor: bigint | number
    currency?: string
    description?: string | null
    reason?: string | null
    originalTransactionId?: string | null
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
  }

  export type FinancialTransactionUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    type: string
    occurredOn: Date | string
    occurredAt?: Date | string
    actorUserId?: string | null
    sourceDomain: string
    sourceCommand: string
    sourceId: string
    idempotencyKey: string
    amountMinor: bigint | number
    currency?: string
    description?: string | null
    reason?: string | null
    originalTransactionId?: string | null
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
  }

  export type FinancialTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDomain?: StringFieldUpdateOperationsInput | string
    sourceCommand?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    originalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDomain?: StringFieldUpdateOperationsInput | string
    sourceCommand?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    originalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    type: string
    occurredOn: Date | string
    occurredAt?: Date | string
    actorUserId?: string | null
    sourceDomain: string
    sourceCommand: string
    sourceId: string
    idempotencyKey: string
    amountMinor: bigint | number
    currency?: string
    description?: string | null
    reason?: string | null
    originalTransactionId?: string | null
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
  }

  export type FinancialTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDomain?: StringFieldUpdateOperationsInput | string
    sourceCommand?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    originalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceDomain?: StringFieldUpdateOperationsInput | string
    sourceCommand?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    originalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartAccountCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    fundCode?: string | null
    createdAt?: Date | string
    lines?: PostedJournalLineCreateNestedManyWithoutAccountInput
  }

  export type ChartAccountUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    fundCode?: string | null
    createdAt?: Date | string
    lines?: PostedJournalLineUncheckedCreateNestedManyWithoutAccountInput
  }

  export type ChartAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fundCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: PostedJournalLineUpdateManyWithoutAccountNestedInput
  }

  export type ChartAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fundCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: PostedJournalLineUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ChartAccountCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    fundCode?: string | null
    createdAt?: Date | string
  }

  export type ChartAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fundCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fundCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostedJournalCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    financialTransactionId: string
    description: string
    status?: string
    postedBy: string
    occurredOn: Date | string
    createdAt?: Date | string
    lines?: PostedJournalLineCreateNestedManyWithoutJournalInput
  }

  export type PostedJournalUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    financialTransactionId: string
    description: string
    status?: string
    postedBy: string
    occurredOn: Date | string
    createdAt?: Date | string
    lines?: PostedJournalLineUncheckedCreateNestedManyWithoutJournalInput
  }

  export type PostedJournalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: PostedJournalLineUpdateManyWithoutJournalNestedInput
  }

  export type PostedJournalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: PostedJournalLineUncheckedUpdateManyWithoutJournalNestedInput
  }

  export type PostedJournalCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    financialTransactionId: string
    description: string
    status?: string
    postedBy: string
    occurredOn: Date | string
    createdAt?: Date | string
  }

  export type PostedJournalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostedJournalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostedJournalLineCreateInput = {
    id?: string
    side: string
    amountMinor: bigint | number
    journal: PostedJournalCreateNestedOneWithoutLinesInput
    account: ChartAccountCreateNestedOneWithoutLinesInput
  }

  export type PostedJournalLineUncheckedCreateInput = {
    id?: string
    journalId: string
    accountId: string
    side: string
    amountMinor: bigint | number
  }

  export type PostedJournalLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    journal?: PostedJournalUpdateOneRequiredWithoutLinesNestedInput
    account?: ChartAccountUpdateOneRequiredWithoutLinesNestedInput
  }

  export type PostedJournalLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PostedJournalLineCreateManyInput = {
    id?: string
    journalId: string
    accountId: string
    side: string
    amountMinor: bigint | number
  }

  export type PostedJournalLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PostedJournalLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ObligationCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    kind: string
    partyName: string
    outstandingMinor: bigint | number
    financialTransactionId: string
    status?: string
    createdAt?: Date | string
  }

  export type ObligationUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    kind: string
    partyName: string
    outstandingMinor: bigint | number
    financialTransactionId: string
    status?: string
    createdAt?: Date | string
  }

  export type ObligationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    outstandingMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObligationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    outstandingMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObligationCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    kind: string
    partyName: string
    outstandingMinor: bigint | number
    financialTransactionId: string
    status?: string
    createdAt?: Date | string
  }

  export type ObligationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    outstandingMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObligationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    outstandingMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitAllocationCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    earnedMinor?: bigint | number
    transferredMinor?: bigint | number
    updatedAt?: Date | string
  }

  export type ProfitAllocationUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    earnedMinor?: bigint | number
    transferredMinor?: bigint | number
    updatedAt?: Date | string
  }

  export type ProfitAllocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    earnedMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    transferredMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitAllocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    earnedMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    transferredMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitAllocationCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    earnedMinor?: bigint | number
    transferredMinor?: bigint | number
    updatedAt?: Date | string
  }

  export type ProfitAllocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    earnedMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    transferredMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitAllocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    earnedMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    transferredMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LedgerAccountNullableRelationFilter = {
    is?: LedgerAccountWhereInput | null
    isNot?: LedgerAccountWhereInput | null
  }

  export type LedgerAccountListRelationFilter = {
    every?: LedgerAccountWhereInput
    some?: LedgerAccountWhereInput
    none?: LedgerAccountWhereInput
  }

  export type LedgerEntryListRelationFilter = {
    every?: LedgerEntryWhereInput
    some?: LedgerEntryWhereInput
    none?: LedgerEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LedgerAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerAccountCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type LedgerAccountAvgOrderByAggregateInput = {
    balance?: SortOrder
    version?: SortOrder
  }

  export type LedgerAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type LedgerAccountMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type LedgerAccountSumOrderByAggregateInput = {
    balance?: SortOrder
    version?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PostingBatchNullableRelationFilter = {
    is?: PostingBatchWhereInput | null
    isNot?: PostingBatchWhereInput | null
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    description?: SortOrder
    postedBy?: SortOrder
    status?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type JournalEntryAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    description?: SortOrder
    postedBy?: SortOrder
    status?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    description?: SortOrder
    postedBy?: SortOrder
    status?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type JournalEntrySumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type JournalEntryListRelationFilter = {
    every?: JournalEntryWhereInput
    some?: JournalEntryWhereInput
    none?: JournalEntryWhereInput
  }

  export type JournalEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostingBatchCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    postedAt?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type PostingBatchAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PostingBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    postedAt?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type PostingBatchMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    workPeriodId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    postedAt?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type PostingBatchSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type LedgerAccountRelationFilter = {
    is?: LedgerAccountWhereInput
    isNot?: LedgerAccountWhereInput
  }

  export type JournalEntryRelationFilter = {
    is?: JournalEntryWhereInput
    isNot?: JournalEntryWhereInput
  }

  export type LedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntrySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WorkPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    openedBy?: SortOrder
    closedBy?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    status?: SortOrder
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
  }

  export type WorkPeriodAvgOrderByAggregateInput = {
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    version?: SortOrder
  }

  export type WorkPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    openedBy?: SortOrder
    closedBy?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    status?: SortOrder
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
  }

  export type WorkPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    openedBy?: SortOrder
    closedBy?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    status?: SortOrder
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
  }

  export type WorkPeriodSumOrderByAggregateInput = {
    totalRevenue?: SortOrder
    totalExpense?: SortOrder
    netProfit?: SortOrder
    grossProfit?: SortOrder
    version?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FinancialTransactionTenantIdIdempotencyKeyCompoundUniqueInput = {
    tenantId: string
    idempotencyKey: string
  }

  export type FinancialTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    occurredOn?: SortOrder
    occurredAt?: SortOrder
    actorUserId?: SortOrder
    sourceDomain?: SortOrder
    sourceCommand?: SortOrder
    sourceId?: SortOrder
    idempotencyKey?: SortOrder
    amountMinor?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    reason?: SortOrder
    originalTransactionId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type FinancialTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    occurredOn?: SortOrder
    occurredAt?: SortOrder
    actorUserId?: SortOrder
    sourceDomain?: SortOrder
    sourceCommand?: SortOrder
    sourceId?: SortOrder
    idempotencyKey?: SortOrder
    amountMinor?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    reason?: SortOrder
    originalTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    occurredOn?: SortOrder
    occurredAt?: SortOrder
    actorUserId?: SortOrder
    sourceDomain?: SortOrder
    sourceCommand?: SortOrder
    sourceId?: SortOrder
    idempotencyKey?: SortOrder
    amountMinor?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    reason?: SortOrder
    originalTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PostedJournalLineListRelationFilter = {
    every?: PostedJournalLineWhereInput
    some?: PostedJournalLineWhereInput
    none?: PostedJournalLineWhereInput
  }

  export type PostedJournalLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChartAccountTenantIdShopIdCodeCompoundUniqueInput = {
    tenantId: string
    shopId: string
    code: string
  }

  export type ChartAccountCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fundCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ChartAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fundCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ChartAccountMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fundCode?: SortOrder
    createdAt?: SortOrder
  }

  export type PostedJournalCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    financialTransactionId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    occurredOn?: SortOrder
    createdAt?: SortOrder
  }

  export type PostedJournalMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    financialTransactionId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    occurredOn?: SortOrder
    createdAt?: SortOrder
  }

  export type PostedJournalMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    financialTransactionId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    postedBy?: SortOrder
    occurredOn?: SortOrder
    createdAt?: SortOrder
  }

  export type PostedJournalRelationFilter = {
    is?: PostedJournalWhereInput
    isNot?: PostedJournalWhereInput
  }

  export type ChartAccountRelationFilter = {
    is?: ChartAccountWhereInput
    isNot?: ChartAccountWhereInput
  }

  export type PostedJournalLineCountOrderByAggregateInput = {
    id?: SortOrder
    journalId?: SortOrder
    accountId?: SortOrder
    side?: SortOrder
    amountMinor?: SortOrder
  }

  export type PostedJournalLineAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type PostedJournalLineMaxOrderByAggregateInput = {
    id?: SortOrder
    journalId?: SortOrder
    accountId?: SortOrder
    side?: SortOrder
    amountMinor?: SortOrder
  }

  export type PostedJournalLineMinOrderByAggregateInput = {
    id?: SortOrder
    journalId?: SortOrder
    accountId?: SortOrder
    side?: SortOrder
    amountMinor?: SortOrder
  }

  export type PostedJournalLineSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type ObligationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    kind?: SortOrder
    partyName?: SortOrder
    outstandingMinor?: SortOrder
    financialTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ObligationAvgOrderByAggregateInput = {
    outstandingMinor?: SortOrder
  }

  export type ObligationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    kind?: SortOrder
    partyName?: SortOrder
    outstandingMinor?: SortOrder
    financialTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ObligationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    kind?: SortOrder
    partyName?: SortOrder
    outstandingMinor?: SortOrder
    financialTransactionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ObligationSumOrderByAggregateInput = {
    outstandingMinor?: SortOrder
  }

  export type ProfitAllocationTenantIdShopIdCompoundUniqueInput = {
    tenantId: string
    shopId: string
  }

  export type ProfitAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitAllocationAvgOrderByAggregateInput = {
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
  }

  export type ProfitAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitAllocationSumOrderByAggregateInput = {
    earnedMinor?: SortOrder
    transferredMinor?: SortOrder
  }

  export type LedgerAccountCreateNestedOneWithoutChildrenInput = {
    create?: XOR<LedgerAccountCreateWithoutChildrenInput, LedgerAccountUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutChildrenInput
    connect?: LedgerAccountWhereUniqueInput
  }

  export type LedgerAccountCreateNestedManyWithoutParentInput = {
    create?: XOR<LedgerAccountCreateWithoutParentInput, LedgerAccountUncheckedCreateWithoutParentInput> | LedgerAccountCreateWithoutParentInput[] | LedgerAccountUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutParentInput | LedgerAccountCreateOrConnectWithoutParentInput[]
    createMany?: LedgerAccountCreateManyParentInputEnvelope
    connect?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
  }

  export type LedgerEntryCreateNestedManyWithoutAccountInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type LedgerAccountUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<LedgerAccountCreateWithoutParentInput, LedgerAccountUncheckedCreateWithoutParentInput> | LedgerAccountCreateWithoutParentInput[] | LedgerAccountUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutParentInput | LedgerAccountCreateOrConnectWithoutParentInput[]
    createMany?: LedgerAccountCreateManyParentInputEnvelope
    connect?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
  }

  export type LedgerEntryUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LedgerAccountUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<LedgerAccountCreateWithoutChildrenInput, LedgerAccountUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutChildrenInput
    upsert?: LedgerAccountUpsertWithoutChildrenInput
    disconnect?: LedgerAccountWhereInput | boolean
    delete?: LedgerAccountWhereInput | boolean
    connect?: LedgerAccountWhereUniqueInput
    update?: XOR<XOR<LedgerAccountUpdateToOneWithWhereWithoutChildrenInput, LedgerAccountUpdateWithoutChildrenInput>, LedgerAccountUncheckedUpdateWithoutChildrenInput>
  }

  export type LedgerAccountUpdateManyWithoutParentNestedInput = {
    create?: XOR<LedgerAccountCreateWithoutParentInput, LedgerAccountUncheckedCreateWithoutParentInput> | LedgerAccountCreateWithoutParentInput[] | LedgerAccountUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutParentInput | LedgerAccountCreateOrConnectWithoutParentInput[]
    upsert?: LedgerAccountUpsertWithWhereUniqueWithoutParentInput | LedgerAccountUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: LedgerAccountCreateManyParentInputEnvelope
    set?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    disconnect?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    delete?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    connect?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    update?: LedgerAccountUpdateWithWhereUniqueWithoutParentInput | LedgerAccountUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: LedgerAccountUpdateManyWithWhereWithoutParentInput | LedgerAccountUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: LedgerAccountScalarWhereInput | LedgerAccountScalarWhereInput[]
  }

  export type LedgerEntryUpdateManyWithoutAccountNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutAccountInput | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutAccountInput | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutAccountInput | LedgerEntryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type LedgerAccountUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<LedgerAccountCreateWithoutParentInput, LedgerAccountUncheckedCreateWithoutParentInput> | LedgerAccountCreateWithoutParentInput[] | LedgerAccountUncheckedCreateWithoutParentInput[]
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutParentInput | LedgerAccountCreateOrConnectWithoutParentInput[]
    upsert?: LedgerAccountUpsertWithWhereUniqueWithoutParentInput | LedgerAccountUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: LedgerAccountCreateManyParentInputEnvelope
    set?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    disconnect?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    delete?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    connect?: LedgerAccountWhereUniqueInput | LedgerAccountWhereUniqueInput[]
    update?: LedgerAccountUpdateWithWhereUniqueWithoutParentInput | LedgerAccountUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: LedgerAccountUpdateManyWithWhereWithoutParentInput | LedgerAccountUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: LedgerAccountScalarWhereInput | LedgerAccountScalarWhereInput[]
  }

  export type LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutAccountInput | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutAccountInput | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutAccountInput | LedgerEntryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type PostingBatchCreateNestedOneWithoutJournalEntriesInput = {
    create?: XOR<PostingBatchCreateWithoutJournalEntriesInput, PostingBatchUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: PostingBatchCreateOrConnectWithoutJournalEntriesInput
    connect?: PostingBatchWhereUniqueInput
  }

  export type LedgerEntryCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<LedgerEntryCreateWithoutJournalEntryInput, LedgerEntryUncheckedCreateWithoutJournalEntryInput> | LedgerEntryCreateWithoutJournalEntryInput[] | LedgerEntryUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutJournalEntryInput | LedgerEntryCreateOrConnectWithoutJournalEntryInput[]
    createMany?: LedgerEntryCreateManyJournalEntryInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type LedgerEntryUncheckedCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<LedgerEntryCreateWithoutJournalEntryInput, LedgerEntryUncheckedCreateWithoutJournalEntryInput> | LedgerEntryCreateWithoutJournalEntryInput[] | LedgerEntryUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutJournalEntryInput | LedgerEntryCreateOrConnectWithoutJournalEntryInput[]
    createMany?: LedgerEntryCreateManyJournalEntryInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type PostingBatchUpdateOneWithoutJournalEntriesNestedInput = {
    create?: XOR<PostingBatchCreateWithoutJournalEntriesInput, PostingBatchUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: PostingBatchCreateOrConnectWithoutJournalEntriesInput
    upsert?: PostingBatchUpsertWithoutJournalEntriesInput
    disconnect?: PostingBatchWhereInput | boolean
    delete?: PostingBatchWhereInput | boolean
    connect?: PostingBatchWhereUniqueInput
    update?: XOR<XOR<PostingBatchUpdateToOneWithWhereWithoutJournalEntriesInput, PostingBatchUpdateWithoutJournalEntriesInput>, PostingBatchUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type LedgerEntryUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutJournalEntryInput, LedgerEntryUncheckedCreateWithoutJournalEntryInput> | LedgerEntryCreateWithoutJournalEntryInput[] | LedgerEntryUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutJournalEntryInput | LedgerEntryCreateOrConnectWithoutJournalEntryInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutJournalEntryInput | LedgerEntryUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: LedgerEntryCreateManyJournalEntryInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutJournalEntryInput | LedgerEntryUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutJournalEntryInput | LedgerEntryUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type LedgerEntryUncheckedUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutJournalEntryInput, LedgerEntryUncheckedCreateWithoutJournalEntryInput> | LedgerEntryCreateWithoutJournalEntryInput[] | LedgerEntryUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutJournalEntryInput | LedgerEntryCreateOrConnectWithoutJournalEntryInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutJournalEntryInput | LedgerEntryUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: LedgerEntryCreateManyJournalEntryInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutJournalEntryInput | LedgerEntryUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutJournalEntryInput | LedgerEntryUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type JournalEntryCreateNestedManyWithoutBatchInput = {
    create?: XOR<JournalEntryCreateWithoutBatchInput, JournalEntryUncheckedCreateWithoutBatchInput> | JournalEntryCreateWithoutBatchInput[] | JournalEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutBatchInput | JournalEntryCreateOrConnectWithoutBatchInput[]
    createMany?: JournalEntryCreateManyBatchInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type JournalEntryUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<JournalEntryCreateWithoutBatchInput, JournalEntryUncheckedCreateWithoutBatchInput> | JournalEntryCreateWithoutBatchInput[] | JournalEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutBatchInput | JournalEntryCreateOrConnectWithoutBatchInput[]
    createMany?: JournalEntryCreateManyBatchInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type JournalEntryUpdateManyWithoutBatchNestedInput = {
    create?: XOR<JournalEntryCreateWithoutBatchInput, JournalEntryUncheckedCreateWithoutBatchInput> | JournalEntryCreateWithoutBatchInput[] | JournalEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutBatchInput | JournalEntryCreateOrConnectWithoutBatchInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutBatchInput | JournalEntryUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: JournalEntryCreateManyBatchInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutBatchInput | JournalEntryUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutBatchInput | JournalEntryUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type JournalEntryUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<JournalEntryCreateWithoutBatchInput, JournalEntryUncheckedCreateWithoutBatchInput> | JournalEntryCreateWithoutBatchInput[] | JournalEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutBatchInput | JournalEntryCreateOrConnectWithoutBatchInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutBatchInput | JournalEntryUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: JournalEntryCreateManyBatchInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutBatchInput | JournalEntryUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutBatchInput | JournalEntryUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type LedgerAccountCreateNestedOneWithoutEntriesInput = {
    create?: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutEntriesInput
    connect?: LedgerAccountWhereUniqueInput
  }

  export type JournalEntryCreateNestedOneWithoutEntriesInput = {
    create?: XOR<JournalEntryCreateWithoutEntriesInput, JournalEntryUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutEntriesInput
    connect?: JournalEntryWhereUniqueInput
  }

  export type LedgerAccountUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutEntriesInput
    upsert?: LedgerAccountUpsertWithoutEntriesInput
    connect?: LedgerAccountWhereUniqueInput
    update?: XOR<XOR<LedgerAccountUpdateToOneWithWhereWithoutEntriesInput, LedgerAccountUpdateWithoutEntriesInput>, LedgerAccountUncheckedUpdateWithoutEntriesInput>
  }

  export type JournalEntryUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<JournalEntryCreateWithoutEntriesInput, JournalEntryUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutEntriesInput
    upsert?: JournalEntryUpsertWithoutEntriesInput
    connect?: JournalEntryWhereUniqueInput
    update?: XOR<XOR<JournalEntryUpdateToOneWithWhereWithoutEntriesInput, JournalEntryUpdateWithoutEntriesInput>, JournalEntryUncheckedUpdateWithoutEntriesInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PostedJournalLineCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostedJournalLineCreateWithoutAccountInput, PostedJournalLineUncheckedCreateWithoutAccountInput> | PostedJournalLineCreateWithoutAccountInput[] | PostedJournalLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutAccountInput | PostedJournalLineCreateOrConnectWithoutAccountInput[]
    createMany?: PostedJournalLineCreateManyAccountInputEnvelope
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
  }

  export type PostedJournalLineUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostedJournalLineCreateWithoutAccountInput, PostedJournalLineUncheckedCreateWithoutAccountInput> | PostedJournalLineCreateWithoutAccountInput[] | PostedJournalLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutAccountInput | PostedJournalLineCreateOrConnectWithoutAccountInput[]
    createMany?: PostedJournalLineCreateManyAccountInputEnvelope
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
  }

  export type PostedJournalLineUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostedJournalLineCreateWithoutAccountInput, PostedJournalLineUncheckedCreateWithoutAccountInput> | PostedJournalLineCreateWithoutAccountInput[] | PostedJournalLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutAccountInput | PostedJournalLineCreateOrConnectWithoutAccountInput[]
    upsert?: PostedJournalLineUpsertWithWhereUniqueWithoutAccountInput | PostedJournalLineUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostedJournalLineCreateManyAccountInputEnvelope
    set?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    disconnect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    delete?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    update?: PostedJournalLineUpdateWithWhereUniqueWithoutAccountInput | PostedJournalLineUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostedJournalLineUpdateManyWithWhereWithoutAccountInput | PostedJournalLineUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostedJournalLineScalarWhereInput | PostedJournalLineScalarWhereInput[]
  }

  export type PostedJournalLineUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostedJournalLineCreateWithoutAccountInput, PostedJournalLineUncheckedCreateWithoutAccountInput> | PostedJournalLineCreateWithoutAccountInput[] | PostedJournalLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutAccountInput | PostedJournalLineCreateOrConnectWithoutAccountInput[]
    upsert?: PostedJournalLineUpsertWithWhereUniqueWithoutAccountInput | PostedJournalLineUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostedJournalLineCreateManyAccountInputEnvelope
    set?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    disconnect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    delete?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    update?: PostedJournalLineUpdateWithWhereUniqueWithoutAccountInput | PostedJournalLineUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostedJournalLineUpdateManyWithWhereWithoutAccountInput | PostedJournalLineUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostedJournalLineScalarWhereInput | PostedJournalLineScalarWhereInput[]
  }

  export type PostedJournalLineCreateNestedManyWithoutJournalInput = {
    create?: XOR<PostedJournalLineCreateWithoutJournalInput, PostedJournalLineUncheckedCreateWithoutJournalInput> | PostedJournalLineCreateWithoutJournalInput[] | PostedJournalLineUncheckedCreateWithoutJournalInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutJournalInput | PostedJournalLineCreateOrConnectWithoutJournalInput[]
    createMany?: PostedJournalLineCreateManyJournalInputEnvelope
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
  }

  export type PostedJournalLineUncheckedCreateNestedManyWithoutJournalInput = {
    create?: XOR<PostedJournalLineCreateWithoutJournalInput, PostedJournalLineUncheckedCreateWithoutJournalInput> | PostedJournalLineCreateWithoutJournalInput[] | PostedJournalLineUncheckedCreateWithoutJournalInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutJournalInput | PostedJournalLineCreateOrConnectWithoutJournalInput[]
    createMany?: PostedJournalLineCreateManyJournalInputEnvelope
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
  }

  export type PostedJournalLineUpdateManyWithoutJournalNestedInput = {
    create?: XOR<PostedJournalLineCreateWithoutJournalInput, PostedJournalLineUncheckedCreateWithoutJournalInput> | PostedJournalLineCreateWithoutJournalInput[] | PostedJournalLineUncheckedCreateWithoutJournalInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutJournalInput | PostedJournalLineCreateOrConnectWithoutJournalInput[]
    upsert?: PostedJournalLineUpsertWithWhereUniqueWithoutJournalInput | PostedJournalLineUpsertWithWhereUniqueWithoutJournalInput[]
    createMany?: PostedJournalLineCreateManyJournalInputEnvelope
    set?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    disconnect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    delete?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    update?: PostedJournalLineUpdateWithWhereUniqueWithoutJournalInput | PostedJournalLineUpdateWithWhereUniqueWithoutJournalInput[]
    updateMany?: PostedJournalLineUpdateManyWithWhereWithoutJournalInput | PostedJournalLineUpdateManyWithWhereWithoutJournalInput[]
    deleteMany?: PostedJournalLineScalarWhereInput | PostedJournalLineScalarWhereInput[]
  }

  export type PostedJournalLineUncheckedUpdateManyWithoutJournalNestedInput = {
    create?: XOR<PostedJournalLineCreateWithoutJournalInput, PostedJournalLineUncheckedCreateWithoutJournalInput> | PostedJournalLineCreateWithoutJournalInput[] | PostedJournalLineUncheckedCreateWithoutJournalInput[]
    connectOrCreate?: PostedJournalLineCreateOrConnectWithoutJournalInput | PostedJournalLineCreateOrConnectWithoutJournalInput[]
    upsert?: PostedJournalLineUpsertWithWhereUniqueWithoutJournalInput | PostedJournalLineUpsertWithWhereUniqueWithoutJournalInput[]
    createMany?: PostedJournalLineCreateManyJournalInputEnvelope
    set?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    disconnect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    delete?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    connect?: PostedJournalLineWhereUniqueInput | PostedJournalLineWhereUniqueInput[]
    update?: PostedJournalLineUpdateWithWhereUniqueWithoutJournalInput | PostedJournalLineUpdateWithWhereUniqueWithoutJournalInput[]
    updateMany?: PostedJournalLineUpdateManyWithWhereWithoutJournalInput | PostedJournalLineUpdateManyWithWhereWithoutJournalInput[]
    deleteMany?: PostedJournalLineScalarWhereInput | PostedJournalLineScalarWhereInput[]
  }

  export type PostedJournalCreateNestedOneWithoutLinesInput = {
    create?: XOR<PostedJournalCreateWithoutLinesInput, PostedJournalUncheckedCreateWithoutLinesInput>
    connectOrCreate?: PostedJournalCreateOrConnectWithoutLinesInput
    connect?: PostedJournalWhereUniqueInput
  }

  export type ChartAccountCreateNestedOneWithoutLinesInput = {
    create?: XOR<ChartAccountCreateWithoutLinesInput, ChartAccountUncheckedCreateWithoutLinesInput>
    connectOrCreate?: ChartAccountCreateOrConnectWithoutLinesInput
    connect?: ChartAccountWhereUniqueInput
  }

  export type PostedJournalUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<PostedJournalCreateWithoutLinesInput, PostedJournalUncheckedCreateWithoutLinesInput>
    connectOrCreate?: PostedJournalCreateOrConnectWithoutLinesInput
    upsert?: PostedJournalUpsertWithoutLinesInput
    connect?: PostedJournalWhereUniqueInput
    update?: XOR<XOR<PostedJournalUpdateToOneWithWhereWithoutLinesInput, PostedJournalUpdateWithoutLinesInput>, PostedJournalUncheckedUpdateWithoutLinesInput>
  }

  export type ChartAccountUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<ChartAccountCreateWithoutLinesInput, ChartAccountUncheckedCreateWithoutLinesInput>
    connectOrCreate?: ChartAccountCreateOrConnectWithoutLinesInput
    upsert?: ChartAccountUpsertWithoutLinesInput
    connect?: ChartAccountWhereUniqueInput
    update?: XOR<XOR<ChartAccountUpdateToOneWithWhereWithoutLinesInput, ChartAccountUpdateWithoutLinesInput>, ChartAccountUncheckedUpdateWithoutLinesInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LedgerAccountCreateWithoutChildrenInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    parent?: LedgerAccountCreateNestedOneWithoutChildrenInput
    entries?: LedgerEntryCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountUncheckedCreateWithoutChildrenInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    entries?: LedgerEntryUncheckedCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountCreateOrConnectWithoutChildrenInput = {
    where: LedgerAccountWhereUniqueInput
    create: XOR<LedgerAccountCreateWithoutChildrenInput, LedgerAccountUncheckedCreateWithoutChildrenInput>
  }

  export type LedgerAccountCreateWithoutParentInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    children?: LedgerAccountCreateNestedManyWithoutParentInput
    entries?: LedgerEntryCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountUncheckedCreateWithoutParentInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    children?: LedgerAccountUncheckedCreateNestedManyWithoutParentInput
    entries?: LedgerEntryUncheckedCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountCreateOrConnectWithoutParentInput = {
    where: LedgerAccountWhereUniqueInput
    create: XOR<LedgerAccountCreateWithoutParentInput, LedgerAccountUncheckedCreateWithoutParentInput>
  }

  export type LedgerAccountCreateManyParentInputEnvelope = {
    data: LedgerAccountCreateManyParentInput | LedgerAccountCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type LedgerEntryCreateWithoutAccountInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
    journalEntry: JournalEntryCreateNestedOneWithoutEntriesInput
  }

  export type LedgerEntryUncheckedCreateWithoutAccountInput = {
    id?: string
    journalEntryId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type LedgerEntryCreateOrConnectWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput
    create: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput>
  }

  export type LedgerEntryCreateManyAccountInputEnvelope = {
    data: LedgerEntryCreateManyAccountInput | LedgerEntryCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type LedgerAccountUpsertWithoutChildrenInput = {
    update: XOR<LedgerAccountUpdateWithoutChildrenInput, LedgerAccountUncheckedUpdateWithoutChildrenInput>
    create: XOR<LedgerAccountCreateWithoutChildrenInput, LedgerAccountUncheckedCreateWithoutChildrenInput>
    where?: LedgerAccountWhereInput
  }

  export type LedgerAccountUpdateToOneWithWhereWithoutChildrenInput = {
    where?: LedgerAccountWhereInput
    data: XOR<LedgerAccountUpdateWithoutChildrenInput, LedgerAccountUncheckedUpdateWithoutChildrenInput>
  }

  export type LedgerAccountUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parent?: LedgerAccountUpdateOneWithoutChildrenNestedInput
    entries?: LedgerEntryUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    entries?: LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountUpsertWithWhereUniqueWithoutParentInput = {
    where: LedgerAccountWhereUniqueInput
    update: XOR<LedgerAccountUpdateWithoutParentInput, LedgerAccountUncheckedUpdateWithoutParentInput>
    create: XOR<LedgerAccountCreateWithoutParentInput, LedgerAccountUncheckedCreateWithoutParentInput>
  }

  export type LedgerAccountUpdateWithWhereUniqueWithoutParentInput = {
    where: LedgerAccountWhereUniqueInput
    data: XOR<LedgerAccountUpdateWithoutParentInput, LedgerAccountUncheckedUpdateWithoutParentInput>
  }

  export type LedgerAccountUpdateManyWithWhereWithoutParentInput = {
    where: LedgerAccountScalarWhereInput
    data: XOR<LedgerAccountUpdateManyMutationInput, LedgerAccountUncheckedUpdateManyWithoutParentInput>
  }

  export type LedgerAccountScalarWhereInput = {
    AND?: LedgerAccountScalarWhereInput | LedgerAccountScalarWhereInput[]
    OR?: LedgerAccountScalarWhereInput[]
    NOT?: LedgerAccountScalarWhereInput | LedgerAccountScalarWhereInput[]
    id?: StringFilter<"LedgerAccount"> | string
    tenantId?: StringFilter<"LedgerAccount"> | string
    shopId?: StringFilter<"LedgerAccount"> | string
    code?: StringFilter<"LedgerAccount"> | string
    name?: StringFilter<"LedgerAccount"> | string
    type?: StringFilter<"LedgerAccount"> | string
    balance?: FloatFilter<"LedgerAccount"> | number
    parentId?: StringNullableFilter<"LedgerAccount"> | string | null
    createdAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    createdBy?: StringNullableFilter<"LedgerAccount"> | string | null
    updatedAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    updatedBy?: StringNullableFilter<"LedgerAccount"> | string | null
    deletedAt?: DateTimeNullableFilter<"LedgerAccount"> | Date | string | null
    deletedBy?: StringNullableFilter<"LedgerAccount"> | string | null
    version?: IntFilter<"LedgerAccount"> | number
  }

  export type LedgerEntryUpsertWithWhereUniqueWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput
    update: XOR<LedgerEntryUpdateWithoutAccountInput, LedgerEntryUncheckedUpdateWithoutAccountInput>
    create: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput>
  }

  export type LedgerEntryUpdateWithWhereUniqueWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput
    data: XOR<LedgerEntryUpdateWithoutAccountInput, LedgerEntryUncheckedUpdateWithoutAccountInput>
  }

  export type LedgerEntryUpdateManyWithWhereWithoutAccountInput = {
    where: LedgerEntryScalarWhereInput
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyWithoutAccountInput>
  }

  export type LedgerEntryScalarWhereInput = {
    AND?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    OR?: LedgerEntryScalarWhereInput[]
    NOT?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    journalEntryId?: StringFilter<"LedgerEntry"> | string
    accountId?: StringFilter<"LedgerEntry"> | string
    type?: StringFilter<"LedgerEntry"> | string
    amount?: FloatFilter<"LedgerEntry"> | number
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
  }

  export type PostingBatchCreateWithoutJournalEntriesInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    name: string
    description?: string | null
    status?: string
    postedBy?: string | null
    postedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type PostingBatchUncheckedCreateWithoutJournalEntriesInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId?: string | null
    name: string
    description?: string | null
    status?: string
    postedBy?: string | null
    postedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type PostingBatchCreateOrConnectWithoutJournalEntriesInput = {
    where: PostingBatchWhereUniqueInput
    create: XOR<PostingBatchCreateWithoutJournalEntriesInput, PostingBatchUncheckedCreateWithoutJournalEntriesInput>
  }

  export type LedgerEntryCreateWithoutJournalEntryInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
    account: LedgerAccountCreateNestedOneWithoutEntriesInput
  }

  export type LedgerEntryUncheckedCreateWithoutJournalEntryInput = {
    id?: string
    accountId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type LedgerEntryCreateOrConnectWithoutJournalEntryInput = {
    where: LedgerEntryWhereUniqueInput
    create: XOR<LedgerEntryCreateWithoutJournalEntryInput, LedgerEntryUncheckedCreateWithoutJournalEntryInput>
  }

  export type LedgerEntryCreateManyJournalEntryInputEnvelope = {
    data: LedgerEntryCreateManyJournalEntryInput | LedgerEntryCreateManyJournalEntryInput[]
    skipDuplicates?: boolean
  }

  export type PostingBatchUpsertWithoutJournalEntriesInput = {
    update: XOR<PostingBatchUpdateWithoutJournalEntriesInput, PostingBatchUncheckedUpdateWithoutJournalEntriesInput>
    create: XOR<PostingBatchCreateWithoutJournalEntriesInput, PostingBatchUncheckedCreateWithoutJournalEntriesInput>
    where?: PostingBatchWhereInput
  }

  export type PostingBatchUpdateToOneWithWhereWithoutJournalEntriesInput = {
    where?: PostingBatchWhereInput
    data: XOR<PostingBatchUpdateWithoutJournalEntriesInput, PostingBatchUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type PostingBatchUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type PostingBatchUncheckedUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type LedgerEntryUpsertWithWhereUniqueWithoutJournalEntryInput = {
    where: LedgerEntryWhereUniqueInput
    update: XOR<LedgerEntryUpdateWithoutJournalEntryInput, LedgerEntryUncheckedUpdateWithoutJournalEntryInput>
    create: XOR<LedgerEntryCreateWithoutJournalEntryInput, LedgerEntryUncheckedCreateWithoutJournalEntryInput>
  }

  export type LedgerEntryUpdateWithWhereUniqueWithoutJournalEntryInput = {
    where: LedgerEntryWhereUniqueInput
    data: XOR<LedgerEntryUpdateWithoutJournalEntryInput, LedgerEntryUncheckedUpdateWithoutJournalEntryInput>
  }

  export type LedgerEntryUpdateManyWithWhereWithoutJournalEntryInput = {
    where: LedgerEntryScalarWhereInput
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyWithoutJournalEntryInput>
  }

  export type JournalEntryCreateWithoutBatchInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    entries?: LedgerEntryCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateWithoutBatchInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    entries?: LedgerEntryUncheckedCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryCreateOrConnectWithoutBatchInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutBatchInput, JournalEntryUncheckedCreateWithoutBatchInput>
  }

  export type JournalEntryCreateManyBatchInputEnvelope = {
    data: JournalEntryCreateManyBatchInput | JournalEntryCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryUpsertWithWhereUniqueWithoutBatchInput = {
    where: JournalEntryWhereUniqueInput
    update: XOR<JournalEntryUpdateWithoutBatchInput, JournalEntryUncheckedUpdateWithoutBatchInput>
    create: XOR<JournalEntryCreateWithoutBatchInput, JournalEntryUncheckedCreateWithoutBatchInput>
  }

  export type JournalEntryUpdateWithWhereUniqueWithoutBatchInput = {
    where: JournalEntryWhereUniqueInput
    data: XOR<JournalEntryUpdateWithoutBatchInput, JournalEntryUncheckedUpdateWithoutBatchInput>
  }

  export type JournalEntryUpdateManyWithWhereWithoutBatchInput = {
    where: JournalEntryScalarWhereInput
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyWithoutBatchInput>
  }

  export type JournalEntryScalarWhereInput = {
    AND?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    OR?: JournalEntryScalarWhereInput[]
    NOT?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    tenantId?: StringFilter<"JournalEntry"> | string
    shopId?: StringFilter<"JournalEntry"> | string
    workPeriodId?: StringFilter<"JournalEntry"> | string
    description?: StringFilter<"JournalEntry"> | string
    postedBy?: StringFilter<"JournalEntry"> | string
    status?: StringFilter<"JournalEntry"> | string
    batchId?: StringNullableFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    createdBy?: StringNullableFilter<"JournalEntry"> | string | null
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedBy?: StringNullableFilter<"JournalEntry"> | string | null
    deletedAt?: DateTimeNullableFilter<"JournalEntry"> | Date | string | null
    deletedBy?: StringNullableFilter<"JournalEntry"> | string | null
    version?: IntFilter<"JournalEntry"> | number
  }

  export type LedgerAccountCreateWithoutEntriesInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    parent?: LedgerAccountCreateNestedOneWithoutChildrenInput
    children?: LedgerAccountCreateNestedManyWithoutParentInput
  }

  export type LedgerAccountUncheckedCreateWithoutEntriesInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    children?: LedgerAccountUncheckedCreateNestedManyWithoutParentInput
  }

  export type LedgerAccountCreateOrConnectWithoutEntriesInput = {
    where: LedgerAccountWhereUniqueInput
    create: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
  }

  export type JournalEntryCreateWithoutEntriesInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    batch?: PostingBatchCreateNestedOneWithoutJournalEntriesInput
  }

  export type JournalEntryUncheckedCreateWithoutEntriesInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    batchId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type JournalEntryCreateOrConnectWithoutEntriesInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutEntriesInput, JournalEntryUncheckedCreateWithoutEntriesInput>
  }

  export type LedgerAccountUpsertWithoutEntriesInput = {
    update: XOR<LedgerAccountUpdateWithoutEntriesInput, LedgerAccountUncheckedUpdateWithoutEntriesInput>
    create: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
    where?: LedgerAccountWhereInput
  }

  export type LedgerAccountUpdateToOneWithWhereWithoutEntriesInput = {
    where?: LedgerAccountWhereInput
    data: XOR<LedgerAccountUpdateWithoutEntriesInput, LedgerAccountUncheckedUpdateWithoutEntriesInput>
  }

  export type LedgerAccountUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parent?: LedgerAccountUpdateOneWithoutChildrenNestedInput
    children?: LedgerAccountUpdateManyWithoutParentNestedInput
  }

  export type LedgerAccountUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    children?: LedgerAccountUncheckedUpdateManyWithoutParentNestedInput
  }

  export type JournalEntryUpsertWithoutEntriesInput = {
    update: XOR<JournalEntryUpdateWithoutEntriesInput, JournalEntryUncheckedUpdateWithoutEntriesInput>
    create: XOR<JournalEntryCreateWithoutEntriesInput, JournalEntryUncheckedCreateWithoutEntriesInput>
    where?: JournalEntryWhereInput
  }

  export type JournalEntryUpdateToOneWithWhereWithoutEntriesInput = {
    where?: JournalEntryWhereInput
    data: XOR<JournalEntryUpdateWithoutEntriesInput, JournalEntryUncheckedUpdateWithoutEntriesInput>
  }

  export type JournalEntryUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    batch?: PostingBatchUpdateOneWithoutJournalEntriesNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type PostedJournalLineCreateWithoutAccountInput = {
    id?: string
    side: string
    amountMinor: bigint | number
    journal: PostedJournalCreateNestedOneWithoutLinesInput
  }

  export type PostedJournalLineUncheckedCreateWithoutAccountInput = {
    id?: string
    journalId: string
    side: string
    amountMinor: bigint | number
  }

  export type PostedJournalLineCreateOrConnectWithoutAccountInput = {
    where: PostedJournalLineWhereUniqueInput
    create: XOR<PostedJournalLineCreateWithoutAccountInput, PostedJournalLineUncheckedCreateWithoutAccountInput>
  }

  export type PostedJournalLineCreateManyAccountInputEnvelope = {
    data: PostedJournalLineCreateManyAccountInput | PostedJournalLineCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PostedJournalLineUpsertWithWhereUniqueWithoutAccountInput = {
    where: PostedJournalLineWhereUniqueInput
    update: XOR<PostedJournalLineUpdateWithoutAccountInput, PostedJournalLineUncheckedUpdateWithoutAccountInput>
    create: XOR<PostedJournalLineCreateWithoutAccountInput, PostedJournalLineUncheckedCreateWithoutAccountInput>
  }

  export type PostedJournalLineUpdateWithWhereUniqueWithoutAccountInput = {
    where: PostedJournalLineWhereUniqueInput
    data: XOR<PostedJournalLineUpdateWithoutAccountInput, PostedJournalLineUncheckedUpdateWithoutAccountInput>
  }

  export type PostedJournalLineUpdateManyWithWhereWithoutAccountInput = {
    where: PostedJournalLineScalarWhereInput
    data: XOR<PostedJournalLineUpdateManyMutationInput, PostedJournalLineUncheckedUpdateManyWithoutAccountInput>
  }

  export type PostedJournalLineScalarWhereInput = {
    AND?: PostedJournalLineScalarWhereInput | PostedJournalLineScalarWhereInput[]
    OR?: PostedJournalLineScalarWhereInput[]
    NOT?: PostedJournalLineScalarWhereInput | PostedJournalLineScalarWhereInput[]
    id?: StringFilter<"PostedJournalLine"> | string
    journalId?: StringFilter<"PostedJournalLine"> | string
    accountId?: StringFilter<"PostedJournalLine"> | string
    side?: StringFilter<"PostedJournalLine"> | string
    amountMinor?: BigIntFilter<"PostedJournalLine"> | bigint | number
  }

  export type PostedJournalLineCreateWithoutJournalInput = {
    id?: string
    side: string
    amountMinor: bigint | number
    account: ChartAccountCreateNestedOneWithoutLinesInput
  }

  export type PostedJournalLineUncheckedCreateWithoutJournalInput = {
    id?: string
    accountId: string
    side: string
    amountMinor: bigint | number
  }

  export type PostedJournalLineCreateOrConnectWithoutJournalInput = {
    where: PostedJournalLineWhereUniqueInput
    create: XOR<PostedJournalLineCreateWithoutJournalInput, PostedJournalLineUncheckedCreateWithoutJournalInput>
  }

  export type PostedJournalLineCreateManyJournalInputEnvelope = {
    data: PostedJournalLineCreateManyJournalInput | PostedJournalLineCreateManyJournalInput[]
    skipDuplicates?: boolean
  }

  export type PostedJournalLineUpsertWithWhereUniqueWithoutJournalInput = {
    where: PostedJournalLineWhereUniqueInput
    update: XOR<PostedJournalLineUpdateWithoutJournalInput, PostedJournalLineUncheckedUpdateWithoutJournalInput>
    create: XOR<PostedJournalLineCreateWithoutJournalInput, PostedJournalLineUncheckedCreateWithoutJournalInput>
  }

  export type PostedJournalLineUpdateWithWhereUniqueWithoutJournalInput = {
    where: PostedJournalLineWhereUniqueInput
    data: XOR<PostedJournalLineUpdateWithoutJournalInput, PostedJournalLineUncheckedUpdateWithoutJournalInput>
  }

  export type PostedJournalLineUpdateManyWithWhereWithoutJournalInput = {
    where: PostedJournalLineScalarWhereInput
    data: XOR<PostedJournalLineUpdateManyMutationInput, PostedJournalLineUncheckedUpdateManyWithoutJournalInput>
  }

  export type PostedJournalCreateWithoutLinesInput = {
    id?: string
    tenantId: string
    shopId: string
    financialTransactionId: string
    description: string
    status?: string
    postedBy: string
    occurredOn: Date | string
    createdAt?: Date | string
  }

  export type PostedJournalUncheckedCreateWithoutLinesInput = {
    id?: string
    tenantId: string
    shopId: string
    financialTransactionId: string
    description: string
    status?: string
    postedBy: string
    occurredOn: Date | string
    createdAt?: Date | string
  }

  export type PostedJournalCreateOrConnectWithoutLinesInput = {
    where: PostedJournalWhereUniqueInput
    create: XOR<PostedJournalCreateWithoutLinesInput, PostedJournalUncheckedCreateWithoutLinesInput>
  }

  export type ChartAccountCreateWithoutLinesInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    fundCode?: string | null
    createdAt?: Date | string
  }

  export type ChartAccountUncheckedCreateWithoutLinesInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    fundCode?: string | null
    createdAt?: Date | string
  }

  export type ChartAccountCreateOrConnectWithoutLinesInput = {
    where: ChartAccountWhereUniqueInput
    create: XOR<ChartAccountCreateWithoutLinesInput, ChartAccountUncheckedCreateWithoutLinesInput>
  }

  export type PostedJournalUpsertWithoutLinesInput = {
    update: XOR<PostedJournalUpdateWithoutLinesInput, PostedJournalUncheckedUpdateWithoutLinesInput>
    create: XOR<PostedJournalCreateWithoutLinesInput, PostedJournalUncheckedCreateWithoutLinesInput>
    where?: PostedJournalWhereInput
  }

  export type PostedJournalUpdateToOneWithWhereWithoutLinesInput = {
    where?: PostedJournalWhereInput
    data: XOR<PostedJournalUpdateWithoutLinesInput, PostedJournalUncheckedUpdateWithoutLinesInput>
  }

  export type PostedJournalUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostedJournalUncheckedUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    financialTransactionId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    occurredOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartAccountUpsertWithoutLinesInput = {
    update: XOR<ChartAccountUpdateWithoutLinesInput, ChartAccountUncheckedUpdateWithoutLinesInput>
    create: XOR<ChartAccountCreateWithoutLinesInput, ChartAccountUncheckedCreateWithoutLinesInput>
    where?: ChartAccountWhereInput
  }

  export type ChartAccountUpdateToOneWithWhereWithoutLinesInput = {
    where?: ChartAccountWhereInput
    data: XOR<ChartAccountUpdateWithoutLinesInput, ChartAccountUncheckedUpdateWithoutLinesInput>
  }

  export type ChartAccountUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fundCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartAccountUncheckedUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fundCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerAccountCreateManyParentInput = {
    id?: string
    tenantId: string
    shopId: string
    code: string
    name: string
    type: string
    balance?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type LedgerEntryCreateManyAccountInput = {
    id?: string
    journalEntryId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type LedgerAccountUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    children?: LedgerAccountUpdateManyWithoutParentNestedInput
    entries?: LedgerEntryUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    children?: LedgerAccountUncheckedUpdateManyWithoutParentNestedInput
    entries?: LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type LedgerEntryUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journalEntry?: JournalEntryUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalEntryId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalEntryId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyJournalEntryInput = {
    id?: string
    accountId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateWithoutJournalEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: LedgerAccountUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateWithoutJournalEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyWithoutJournalEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateManyBatchInput = {
    id?: string
    tenantId: string
    shopId: string
    workPeriodId: string
    description: string
    postedBy: string
    status?: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type JournalEntryUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    entries?: LedgerEntryUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    entries?: LedgerEntryUncheckedUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workPeriodId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    postedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type PostedJournalLineCreateManyAccountInput = {
    id?: string
    journalId: string
    side: string
    amountMinor: bigint | number
  }

  export type PostedJournalLineUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    journal?: PostedJournalUpdateOneRequiredWithoutLinesNestedInput
  }

  export type PostedJournalLineUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PostedJournalLineUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    journalId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PostedJournalLineCreateManyJournalInput = {
    id?: string
    accountId: string
    side: string
    amountMinor: bigint | number
  }

  export type PostedJournalLineUpdateWithoutJournalInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
    account?: ChartAccountUpdateOneRequiredWithoutLinesNestedInput
  }

  export type PostedJournalLineUncheckedUpdateWithoutJournalInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PostedJournalLineUncheckedUpdateManyWithoutJournalInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    amountMinor?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LedgerAccountCountOutputTypeDefaultArgs instead
     */
    export type LedgerAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JournalEntryCountOutputTypeDefaultArgs instead
     */
    export type JournalEntryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostingBatchCountOutputTypeDefaultArgs instead
     */
    export type PostingBatchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostingBatchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChartAccountCountOutputTypeDefaultArgs instead
     */
    export type ChartAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChartAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostedJournalCountOutputTypeDefaultArgs instead
     */
    export type PostedJournalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostedJournalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LedgerAccountDefaultArgs instead
     */
    export type LedgerAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JournalEntryDefaultArgs instead
     */
    export type JournalEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JournalEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostingBatchDefaultArgs instead
     */
    export type PostingBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostingBatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LedgerEntryDefaultArgs instead
     */
    export type LedgerEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkPeriodDefaultArgs instead
     */
    export type WorkPeriodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkPeriodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinancialTransactionDefaultArgs instead
     */
    export type FinancialTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinancialTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChartAccountDefaultArgs instead
     */
    export type ChartAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChartAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostedJournalDefaultArgs instead
     */
    export type PostedJournalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostedJournalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostedJournalLineDefaultArgs instead
     */
    export type PostedJournalLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostedJournalLineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObligationDefaultArgs instead
     */
    export type ObligationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObligationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfitAllocationDefaultArgs instead
     */
    export type ProfitAllocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfitAllocationDefaultArgs<ExtArgs>

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