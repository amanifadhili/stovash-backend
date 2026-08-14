
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
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model Transfer
 * 
 */
export type Transfer = $Result.DefaultSelection<Prisma.$TransferPayload>
/**
 * Model PhysicalConfirmation
 * 
 */
export type PhysicalConfirmation = $Result.DefaultSelection<Prisma.$PhysicalConfirmationPayload>
/**
 * Model OperationalDeposit
 * 
 */
export type OperationalDeposit = $Result.DefaultSelection<Prisma.$OperationalDepositPayload>
/**
 * Model Reconciliation
 * 
 */
export type Reconciliation = $Result.DefaultSelection<Prisma.$ReconciliationPayload>
/**
 * Model TreasuryLoan
 * 
 */
export type TreasuryLoan = $Result.DefaultSelection<Prisma.$TreasuryLoanPayload>
/**
 * Model TreasuryLoanRepayment
 * 
 */
export type TreasuryLoanRepayment = $Result.DefaultSelection<Prisma.$TreasuryLoanRepaymentPayload>
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
 * // Fetch zero or more PaymentMethods
 * const paymentMethods = await prisma.paymentMethod.findMany()
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
   * // Fetch zero or more PaymentMethods
   * const paymentMethods = await prisma.paymentMethod.findMany()
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
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs>;

  /**
   * `prisma.transfer`: Exposes CRUD operations for the **Transfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transfers
    * const transfers = await prisma.transfer.findMany()
    * ```
    */
  get transfer(): Prisma.TransferDelegate<ExtArgs>;

  /**
   * `prisma.physicalConfirmation`: Exposes CRUD operations for the **PhysicalConfirmation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalConfirmations
    * const physicalConfirmations = await prisma.physicalConfirmation.findMany()
    * ```
    */
  get physicalConfirmation(): Prisma.PhysicalConfirmationDelegate<ExtArgs>;

  /**
   * `prisma.operationalDeposit`: Exposes CRUD operations for the **OperationalDeposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperationalDeposits
    * const operationalDeposits = await prisma.operationalDeposit.findMany()
    * ```
    */
  get operationalDeposit(): Prisma.OperationalDepositDelegate<ExtArgs>;

  /**
   * `prisma.reconciliation`: Exposes CRUD operations for the **Reconciliation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reconciliations
    * const reconciliations = await prisma.reconciliation.findMany()
    * ```
    */
  get reconciliation(): Prisma.ReconciliationDelegate<ExtArgs>;

  /**
   * `prisma.treasuryLoan`: Exposes CRUD operations for the **TreasuryLoan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreasuryLoans
    * const treasuryLoans = await prisma.treasuryLoan.findMany()
    * ```
    */
  get treasuryLoan(): Prisma.TreasuryLoanDelegate<ExtArgs>;

  /**
   * `prisma.treasuryLoanRepayment`: Exposes CRUD operations for the **TreasuryLoanRepayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreasuryLoanRepayments
    * const treasuryLoanRepayments = await prisma.treasuryLoanRepayment.findMany()
    * ```
    */
  get treasuryLoanRepayment(): Prisma.TreasuryLoanRepaymentDelegate<ExtArgs>;

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
    PaymentMethod: 'PaymentMethod',
    Transfer: 'Transfer',
    PhysicalConfirmation: 'PhysicalConfirmation',
    OperationalDeposit: 'OperationalDeposit',
    Reconciliation: 'Reconciliation',
    TreasuryLoan: 'TreasuryLoan',
    TreasuryLoanRepayment: 'TreasuryLoanRepayment',
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
      modelProps: "paymentMethod" | "transfer" | "physicalConfirmation" | "operationalDeposit" | "reconciliation" | "treasuryLoan" | "treasuryLoanRepayment" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      Transfer: {
        payload: Prisma.$TransferPayload<ExtArgs>
        fields: Prisma.TransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          findFirst: {
            args: Prisma.TransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          findMany: {
            args: Prisma.TransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>[]
          }
          create: {
            args: Prisma.TransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          createMany: {
            args: Prisma.TransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>[]
          }
          delete: {
            args: Prisma.TransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          update: {
            args: Prisma.TransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          deleteMany: {
            args: Prisma.TransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          aggregate: {
            args: Prisma.TransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransfer>
          }
          groupBy: {
            args: Prisma.TransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferCountArgs<ExtArgs>
            result: $Utils.Optional<TransferCountAggregateOutputType> | number
          }
        }
      }
      PhysicalConfirmation: {
        payload: Prisma.$PhysicalConfirmationPayload<ExtArgs>
        fields: Prisma.PhysicalConfirmationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalConfirmationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalConfirmationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>
          }
          findFirst: {
            args: Prisma.PhysicalConfirmationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalConfirmationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>
          }
          findMany: {
            args: Prisma.PhysicalConfirmationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>[]
          }
          create: {
            args: Prisma.PhysicalConfirmationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>
          }
          createMany: {
            args: Prisma.PhysicalConfirmationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhysicalConfirmationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>[]
          }
          delete: {
            args: Prisma.PhysicalConfirmationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>
          }
          update: {
            args: Prisma.PhysicalConfirmationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalConfirmationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalConfirmationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhysicalConfirmationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalConfirmationPayload>
          }
          aggregate: {
            args: Prisma.PhysicalConfirmationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhysicalConfirmation>
          }
          groupBy: {
            args: Prisma.PhysicalConfirmationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhysicalConfirmationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalConfirmationCountArgs<ExtArgs>
            result: $Utils.Optional<PhysicalConfirmationCountAggregateOutputType> | number
          }
        }
      }
      OperationalDeposit: {
        payload: Prisma.$OperationalDepositPayload<ExtArgs>
        fields: Prisma.OperationalDepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationalDepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationalDepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>
          }
          findFirst: {
            args: Prisma.OperationalDepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationalDepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>
          }
          findMany: {
            args: Prisma.OperationalDepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>[]
          }
          create: {
            args: Prisma.OperationalDepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>
          }
          createMany: {
            args: Prisma.OperationalDepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationalDepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>[]
          }
          delete: {
            args: Prisma.OperationalDepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>
          }
          update: {
            args: Prisma.OperationalDepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>
          }
          deleteMany: {
            args: Prisma.OperationalDepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationalDepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperationalDepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationalDepositPayload>
          }
          aggregate: {
            args: Prisma.OperationalDepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperationalDeposit>
          }
          groupBy: {
            args: Prisma.OperationalDepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationalDepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationalDepositCountArgs<ExtArgs>
            result: $Utils.Optional<OperationalDepositCountAggregateOutputType> | number
          }
        }
      }
      Reconciliation: {
        payload: Prisma.$ReconciliationPayload<ExtArgs>
        fields: Prisma.ReconciliationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReconciliationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReconciliationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>
          }
          findFirst: {
            args: Prisma.ReconciliationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReconciliationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>
          }
          findMany: {
            args: Prisma.ReconciliationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>[]
          }
          create: {
            args: Prisma.ReconciliationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>
          }
          createMany: {
            args: Prisma.ReconciliationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReconciliationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>[]
          }
          delete: {
            args: Prisma.ReconciliationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>
          }
          update: {
            args: Prisma.ReconciliationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>
          }
          deleteMany: {
            args: Prisma.ReconciliationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReconciliationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReconciliationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationPayload>
          }
          aggregate: {
            args: Prisma.ReconciliationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReconciliation>
          }
          groupBy: {
            args: Prisma.ReconciliationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReconciliationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReconciliationCountArgs<ExtArgs>
            result: $Utils.Optional<ReconciliationCountAggregateOutputType> | number
          }
        }
      }
      TreasuryLoan: {
        payload: Prisma.$TreasuryLoanPayload<ExtArgs>
        fields: Prisma.TreasuryLoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreasuryLoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreasuryLoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>
          }
          findFirst: {
            args: Prisma.TreasuryLoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreasuryLoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>
          }
          findMany: {
            args: Prisma.TreasuryLoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>[]
          }
          create: {
            args: Prisma.TreasuryLoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>
          }
          createMany: {
            args: Prisma.TreasuryLoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreasuryLoanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>[]
          }
          delete: {
            args: Prisma.TreasuryLoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>
          }
          update: {
            args: Prisma.TreasuryLoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>
          }
          deleteMany: {
            args: Prisma.TreasuryLoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreasuryLoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreasuryLoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanPayload>
          }
          aggregate: {
            args: Prisma.TreasuryLoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreasuryLoan>
          }
          groupBy: {
            args: Prisma.TreasuryLoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreasuryLoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreasuryLoanCountArgs<ExtArgs>
            result: $Utils.Optional<TreasuryLoanCountAggregateOutputType> | number
          }
        }
      }
      TreasuryLoanRepayment: {
        payload: Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>
        fields: Prisma.TreasuryLoanRepaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreasuryLoanRepaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreasuryLoanRepaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>
          }
          findFirst: {
            args: Prisma.TreasuryLoanRepaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreasuryLoanRepaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>
          }
          findMany: {
            args: Prisma.TreasuryLoanRepaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>[]
          }
          create: {
            args: Prisma.TreasuryLoanRepaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>
          }
          createMany: {
            args: Prisma.TreasuryLoanRepaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreasuryLoanRepaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>[]
          }
          delete: {
            args: Prisma.TreasuryLoanRepaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>
          }
          update: {
            args: Prisma.TreasuryLoanRepaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>
          }
          deleteMany: {
            args: Prisma.TreasuryLoanRepaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreasuryLoanRepaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreasuryLoanRepaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreasuryLoanRepaymentPayload>
          }
          aggregate: {
            args: Prisma.TreasuryLoanRepaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreasuryLoanRepayment>
          }
          groupBy: {
            args: Prisma.TreasuryLoanRepaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreasuryLoanRepaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreasuryLoanRepaymentCountArgs<ExtArgs>
            result: $Utils.Optional<TreasuryLoanRepaymentCountAggregateOutputType> | number
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
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    outgoingTransfers: number
    incomingTransfers: number
    confirmations: number
    deposits: number
    reconciliations: number
    loans: number
    loanRepayments: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingTransfers?: boolean | PaymentMethodCountOutputTypeCountOutgoingTransfersArgs
    incomingTransfers?: boolean | PaymentMethodCountOutputTypeCountIncomingTransfersArgs
    confirmations?: boolean | PaymentMethodCountOutputTypeCountConfirmationsArgs
    deposits?: boolean | PaymentMethodCountOutputTypeCountDepositsArgs
    reconciliations?: boolean | PaymentMethodCountOutputTypeCountReconciliationsArgs
    loans?: boolean | PaymentMethodCountOutputTypeCountLoansArgs
    loanRepayments?: boolean | PaymentMethodCountOutputTypeCountLoanRepaymentsArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountOutgoingTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountIncomingTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountConfirmationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalConfirmationWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationalDepositWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountReconciliationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReconciliationWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryLoanWhereInput
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountLoanRepaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryLoanRepaymentWhereInput
  }


  /**
   * Count Type TreasuryLoanCountOutputType
   */

  export type TreasuryLoanCountOutputType = {
    repayments: number
  }

  export type TreasuryLoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repayments?: boolean | TreasuryLoanCountOutputTypeCountRepaymentsArgs
  }

  // Custom InputTypes
  /**
   * TreasuryLoanCountOutputType without action
   */
  export type TreasuryLoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanCountOutputType
     */
    select?: TreasuryLoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreasuryLoanCountOutputType without action
   */
  export type TreasuryLoanCountOutputTypeCountRepaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryLoanRepaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    balance: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    balance: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    type: string | null
    accountNumber: string | null
    bankName: string | null
    balance: number | null
    currency: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    type: string | null
    accountNumber: string | null
    bankName: string | null
    balance: number | null
    currency: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    name: number
    type: number
    accountNumber: number
    bankName: number
    balance: number
    currency: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    balance?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    balance?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    type?: true
    accountNumber?: true
    bankName?: true
    balance?: true
    currency?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    type?: true
    accountNumber?: true
    bankName?: true
    balance?: true
    currency?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    type?: true
    accountNumber?: true
    bankName?: true
    balance?: true
    currency?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber: string | null
    bankName: string | null
    balance: number
    currency: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    name?: boolean
    type?: boolean
    accountNumber?: boolean
    bankName?: boolean
    balance?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outgoingTransfers?: boolean | PaymentMethod$outgoingTransfersArgs<ExtArgs>
    incomingTransfers?: boolean | PaymentMethod$incomingTransfersArgs<ExtArgs>
    confirmations?: boolean | PaymentMethod$confirmationsArgs<ExtArgs>
    deposits?: boolean | PaymentMethod$depositsArgs<ExtArgs>
    reconciliations?: boolean | PaymentMethod$reconciliationsArgs<ExtArgs>
    loans?: boolean | PaymentMethod$loansArgs<ExtArgs>
    loanRepayments?: boolean | PaymentMethod$loanRepaymentsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    name?: boolean
    type?: boolean
    accountNumber?: boolean
    bankName?: boolean
    balance?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    name?: boolean
    type?: boolean
    accountNumber?: boolean
    bankName?: boolean
    balance?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingTransfers?: boolean | PaymentMethod$outgoingTransfersArgs<ExtArgs>
    incomingTransfers?: boolean | PaymentMethod$incomingTransfersArgs<ExtArgs>
    confirmations?: boolean | PaymentMethod$confirmationsArgs<ExtArgs>
    deposits?: boolean | PaymentMethod$depositsArgs<ExtArgs>
    reconciliations?: boolean | PaymentMethod$reconciliationsArgs<ExtArgs>
    loans?: boolean | PaymentMethod$loansArgs<ExtArgs>
    loanRepayments?: boolean | PaymentMethod$loanRepaymentsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      outgoingTransfers: Prisma.$TransferPayload<ExtArgs>[]
      incomingTransfers: Prisma.$TransferPayload<ExtArgs>[]
      confirmations: Prisma.$PhysicalConfirmationPayload<ExtArgs>[]
      deposits: Prisma.$OperationalDepositPayload<ExtArgs>[]
      reconciliations: Prisma.$ReconciliationPayload<ExtArgs>[]
      loans: Prisma.$TreasuryLoanPayload<ExtArgs>[]
      loanRepayments: Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      name: string
      type: string
      accountNumber: string | null
      bankName: string | null
      balance: number
      currency: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outgoingTransfers<T extends PaymentMethod$outgoingTransfersArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$outgoingTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany"> | Null>
    incomingTransfers<T extends PaymentMethod$incomingTransfersArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$incomingTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany"> | Null>
    confirmations<T extends PaymentMethod$confirmationsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$confirmationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "findMany"> | Null>
    deposits<T extends PaymentMethod$depositsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "findMany"> | Null>
    reconciliations<T extends PaymentMethod$reconciliationsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$reconciliationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "findMany"> | Null>
    loans<T extends PaymentMethod$loansArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findMany"> | Null>
    loanRepayments<T extends PaymentMethod$loanRepaymentsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$loanRepaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PaymentMethod model
   */ 
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly tenantId: FieldRef<"PaymentMethod", 'String'>
    readonly shopId: FieldRef<"PaymentMethod", 'String'>
    readonly name: FieldRef<"PaymentMethod", 'String'>
    readonly type: FieldRef<"PaymentMethod", 'String'>
    readonly accountNumber: FieldRef<"PaymentMethod", 'String'>
    readonly bankName: FieldRef<"PaymentMethod", 'String'>
    readonly balance: FieldRef<"PaymentMethod", 'Float'>
    readonly currency: FieldRef<"PaymentMethod", 'String'>
    readonly isActive: FieldRef<"PaymentMethod", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
  }

  /**
   * PaymentMethod.outgoingTransfers
   */
  export type PaymentMethod$outgoingTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * PaymentMethod.incomingTransfers
   */
  export type PaymentMethod$incomingTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * PaymentMethod.confirmations
   */
  export type PaymentMethod$confirmationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    where?: PhysicalConfirmationWhereInput
    orderBy?: PhysicalConfirmationOrderByWithRelationInput | PhysicalConfirmationOrderByWithRelationInput[]
    cursor?: PhysicalConfirmationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhysicalConfirmationScalarFieldEnum | PhysicalConfirmationScalarFieldEnum[]
  }

  /**
   * PaymentMethod.deposits
   */
  export type PaymentMethod$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    where?: OperationalDepositWhereInput
    orderBy?: OperationalDepositOrderByWithRelationInput | OperationalDepositOrderByWithRelationInput[]
    cursor?: OperationalDepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationalDepositScalarFieldEnum | OperationalDepositScalarFieldEnum[]
  }

  /**
   * PaymentMethod.reconciliations
   */
  export type PaymentMethod$reconciliationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    where?: ReconciliationWhereInput
    orderBy?: ReconciliationOrderByWithRelationInput | ReconciliationOrderByWithRelationInput[]
    cursor?: ReconciliationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReconciliationScalarFieldEnum | ReconciliationScalarFieldEnum[]
  }

  /**
   * PaymentMethod.loans
   */
  export type PaymentMethod$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    where?: TreasuryLoanWhereInput
    orderBy?: TreasuryLoanOrderByWithRelationInput | TreasuryLoanOrderByWithRelationInput[]
    cursor?: TreasuryLoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreasuryLoanScalarFieldEnum | TreasuryLoanScalarFieldEnum[]
  }

  /**
   * PaymentMethod.loanRepayments
   */
  export type PaymentMethod$loanRepaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    where?: TreasuryLoanRepaymentWhereInput
    orderBy?: TreasuryLoanRepaymentOrderByWithRelationInput | TreasuryLoanRepaymentOrderByWithRelationInput[]
    cursor?: TreasuryLoanRepaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreasuryLoanRepaymentScalarFieldEnum | TreasuryLoanRepaymentScalarFieldEnum[]
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model Transfer
   */

  export type AggregateTransfer = {
    _count: TransferCountAggregateOutputType | null
    _avg: TransferAvgAggregateOutputType | null
    _sum: TransferSumAggregateOutputType | null
    _min: TransferMinAggregateOutputType | null
    _max: TransferMaxAggregateOutputType | null
  }

  export type TransferAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransferSumAggregateOutputType = {
    amount: number | null
  }

  export type TransferMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    fromMethodId: string | null
    toMethodId: string | null
    amount: number | null
    reference: string | null
    status: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransferMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    fromMethodId: string | null
    toMethodId: string | null
    amount: number | null
    reference: string | null
    status: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransferCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    fromMethodId: number
    toMethodId: number
    amount: number
    reference: number
    status: number
    approvedBy: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransferAvgAggregateInputType = {
    amount?: true
  }

  export type TransferSumAggregateInputType = {
    amount?: true
  }

  export type TransferMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    fromMethodId?: true
    toMethodId?: true
    amount?: true
    reference?: true
    status?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransferMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    fromMethodId?: true
    toMethodId?: true
    amount?: true
    reference?: true
    status?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransferCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    fromMethodId?: true
    toMethodId?: true
    amount?: true
    reference?: true
    status?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transfer to aggregate.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transfers
    **/
    _count?: true | TransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferMaxAggregateInputType
  }

  export type GetTransferAggregateType<T extends TransferAggregateArgs> = {
        [P in keyof T & keyof AggregateTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransfer[P]>
      : GetScalarType<T[P], AggregateTransfer[P]>
  }




  export type TransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithAggregationInput | TransferOrderByWithAggregationInput[]
    by: TransferScalarFieldEnum[] | TransferScalarFieldEnum
    having?: TransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferCountAggregateInputType | true
    _avg?: TransferAvgAggregateInputType
    _sum?: TransferSumAggregateInputType
    _min?: TransferMinAggregateInputType
    _max?: TransferMaxAggregateInputType
  }

  export type TransferGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    fromMethodId: string
    toMethodId: string
    amount: number
    reference: string | null
    status: string
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TransferCountAggregateOutputType | null
    _avg: TransferAvgAggregateOutputType | null
    _sum: TransferSumAggregateOutputType | null
    _min: TransferMinAggregateOutputType | null
    _max: TransferMaxAggregateOutputType | null
  }

  type GetTransferGroupByPayload<T extends TransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferGroupByOutputType[P]>
            : GetScalarType<T[P], TransferGroupByOutputType[P]>
        }
      >
    >


  export type TransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    fromMethodId?: boolean
    toMethodId?: boolean
    amount?: boolean
    reference?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    toMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transfer"]>

  export type TransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    fromMethodId?: boolean
    toMethodId?: boolean
    amount?: boolean
    reference?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    toMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transfer"]>

  export type TransferSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    fromMethodId?: boolean
    toMethodId?: boolean
    amount?: boolean
    reference?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    toMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }
  export type TransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    toMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $TransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transfer"
    objects: {
      fromMethod: Prisma.$PaymentMethodPayload<ExtArgs>
      toMethod: Prisma.$PaymentMethodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      fromMethodId: string
      toMethodId: string
      amount: number
      reference: string | null
      status: string
      approvedBy: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transfer"]>
    composites: {}
  }

  type TransferGetPayload<S extends boolean | null | undefined | TransferDefaultArgs> = $Result.GetResult<Prisma.$TransferPayload, S>

  type TransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransferCountAggregateInputType | true
    }

  export interface TransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transfer'], meta: { name: 'Transfer' } }
    /**
     * Find zero or one Transfer that matches the filter.
     * @param {TransferFindUniqueArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferFindUniqueArgs>(args: SelectSubset<T, TransferFindUniqueArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransferFindUniqueOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferFindUniqueOrThrowArgs>(args: SelectSubset<T, TransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferFindFirstArgs>(args?: SelectSubset<T, TransferFindFirstArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferFindFirstOrThrowArgs>(args?: SelectSubset<T, TransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfers
     * const transfers = await prisma.transfer.findMany()
     * 
     * // Get first 10 Transfers
     * const transfers = await prisma.transfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferWithIdOnly = await prisma.transfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransferFindManyArgs>(args?: SelectSubset<T, TransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transfer.
     * @param {TransferCreateArgs} args - Arguments to create a Transfer.
     * @example
     * // Create one Transfer
     * const Transfer = await prisma.transfer.create({
     *   data: {
     *     // ... data to create a Transfer
     *   }
     * })
     * 
     */
    create<T extends TransferCreateArgs>(args: SelectSubset<T, TransferCreateArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transfers.
     * @param {TransferCreateManyArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransferCreateManyArgs>(args?: SelectSubset<T, TransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transfers and returns the data saved in the database.
     * @param {TransferCreateManyAndReturnArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transfers and only return the `id`
     * const transferWithIdOnly = await prisma.transfer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransferCreateManyAndReturnArgs>(args?: SelectSubset<T, TransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transfer.
     * @param {TransferDeleteArgs} args - Arguments to delete one Transfer.
     * @example
     * // Delete one Transfer
     * const Transfer = await prisma.transfer.delete({
     *   where: {
     *     // ... filter to delete one Transfer
     *   }
     * })
     * 
     */
    delete<T extends TransferDeleteArgs>(args: SelectSubset<T, TransferDeleteArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transfer.
     * @param {TransferUpdateArgs} args - Arguments to update one Transfer.
     * @example
     * // Update one Transfer
     * const transfer = await prisma.transfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransferUpdateArgs>(args: SelectSubset<T, TransferUpdateArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transfers.
     * @param {TransferDeleteManyArgs} args - Arguments to filter Transfers to delete.
     * @example
     * // Delete a few Transfers
     * const { count } = await prisma.transfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransferDeleteManyArgs>(args?: SelectSubset<T, TransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfers
     * const transfer = await prisma.transfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransferUpdateManyArgs>(args: SelectSubset<T, TransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transfer.
     * @param {TransferUpsertArgs} args - Arguments to update or create a Transfer.
     * @example
     * // Update or create a Transfer
     * const transfer = await prisma.transfer.upsert({
     *   create: {
     *     // ... data to create a Transfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfer we want to update
     *   }
     * })
     */
    upsert<T extends TransferUpsertArgs>(args: SelectSubset<T, TransferUpsertArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferCountArgs} args - Arguments to filter Transfers to count.
     * @example
     * // Count the number of Transfers
     * const count = await prisma.transfer.count({
     *   where: {
     *     // ... the filter for the Transfers we want to count
     *   }
     * })
    **/
    count<T extends TransferCountArgs>(
      args?: Subset<T, TransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferAggregateArgs>(args: Subset<T, TransferAggregateArgs>): Prisma.PrismaPromise<GetTransferAggregateType<T>>

    /**
     * Group by Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferGroupByArgs} args - Group by arguments.
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
      T extends TransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferGroupByArgs['orderBy'] }
        : { orderBy?: TransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transfer model
   */
  readonly fields: TransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromMethod<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toMethod<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Transfer model
   */ 
  interface TransferFieldRefs {
    readonly id: FieldRef<"Transfer", 'String'>
    readonly tenantId: FieldRef<"Transfer", 'String'>
    readonly shopId: FieldRef<"Transfer", 'String'>
    readonly fromMethodId: FieldRef<"Transfer", 'String'>
    readonly toMethodId: FieldRef<"Transfer", 'String'>
    readonly amount: FieldRef<"Transfer", 'Float'>
    readonly reference: FieldRef<"Transfer", 'String'>
    readonly status: FieldRef<"Transfer", 'String'>
    readonly approvedBy: FieldRef<"Transfer", 'String'>
    readonly approvedAt: FieldRef<"Transfer", 'DateTime'>
    readonly createdAt: FieldRef<"Transfer", 'DateTime'>
    readonly updatedAt: FieldRef<"Transfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transfer findUnique
   */
  export type TransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer findUniqueOrThrow
   */
  export type TransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer findFirst
   */
  export type TransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transfers.
     */
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer findFirstOrThrow
   */
  export type TransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transfers.
     */
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer findMany
   */
  export type TransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfers to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer create
   */
  export type TransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The data needed to create a Transfer.
     */
    data: XOR<TransferCreateInput, TransferUncheckedCreateInput>
  }

  /**
   * Transfer createMany
   */
  export type TransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transfers.
     */
    data: TransferCreateManyInput | TransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transfer createManyAndReturn
   */
  export type TransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transfers.
     */
    data: TransferCreateManyInput | TransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transfer update
   */
  export type TransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The data needed to update a Transfer.
     */
    data: XOR<TransferUpdateInput, TransferUncheckedUpdateInput>
    /**
     * Choose, which Transfer to update.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer updateMany
   */
  export type TransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transfers.
     */
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyInput>
    /**
     * Filter which Transfers to update
     */
    where?: TransferWhereInput
  }

  /**
   * Transfer upsert
   */
  export type TransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The filter to search for the Transfer to update in case it exists.
     */
    where: TransferWhereUniqueInput
    /**
     * In case the Transfer found by the `where` argument doesn't exist, create a new Transfer with this data.
     */
    create: XOR<TransferCreateInput, TransferUncheckedCreateInput>
    /**
     * In case the Transfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferUpdateInput, TransferUncheckedUpdateInput>
  }

  /**
   * Transfer delete
   */
  export type TransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter which Transfer to delete.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer deleteMany
   */
  export type TransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transfers to delete
     */
    where?: TransferWhereInput
  }

  /**
   * Transfer without action
   */
  export type TransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
  }


  /**
   * Model PhysicalConfirmation
   */

  export type AggregatePhysicalConfirmation = {
    _count: PhysicalConfirmationCountAggregateOutputType | null
    _avg: PhysicalConfirmationAvgAggregateOutputType | null
    _sum: PhysicalConfirmationSumAggregateOutputType | null
    _min: PhysicalConfirmationMinAggregateOutputType | null
    _max: PhysicalConfirmationMaxAggregateOutputType | null
  }

  export type PhysicalConfirmationAvgAggregateOutputType = {
    amount: number | null
  }

  export type PhysicalConfirmationSumAggregateOutputType = {
    amount: number | null
  }

  export type PhysicalConfirmationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    methodId: string | null
    confirmedBy: string | null
    amount: number | null
    notes: string | null
    confirmedAt: Date | null
  }

  export type PhysicalConfirmationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    methodId: string | null
    confirmedBy: string | null
    amount: number | null
    notes: string | null
    confirmedAt: Date | null
  }

  export type PhysicalConfirmationCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    methodId: number
    confirmedBy: number
    amount: number
    notes: number
    confirmedAt: number
    _all: number
  }


  export type PhysicalConfirmationAvgAggregateInputType = {
    amount?: true
  }

  export type PhysicalConfirmationSumAggregateInputType = {
    amount?: true
  }

  export type PhysicalConfirmationMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    confirmedBy?: true
    amount?: true
    notes?: true
    confirmedAt?: true
  }

  export type PhysicalConfirmationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    confirmedBy?: true
    amount?: true
    notes?: true
    confirmedAt?: true
  }

  export type PhysicalConfirmationCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    confirmedBy?: true
    amount?: true
    notes?: true
    confirmedAt?: true
    _all?: true
  }

  export type PhysicalConfirmationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalConfirmation to aggregate.
     */
    where?: PhysicalConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalConfirmations to fetch.
     */
    orderBy?: PhysicalConfirmationOrderByWithRelationInput | PhysicalConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalConfirmations
    **/
    _count?: true | PhysicalConfirmationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhysicalConfirmationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhysicalConfirmationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalConfirmationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalConfirmationMaxAggregateInputType
  }

  export type GetPhysicalConfirmationAggregateType<T extends PhysicalConfirmationAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalConfirmation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalConfirmation[P]>
      : GetScalarType<T[P], AggregatePhysicalConfirmation[P]>
  }




  export type PhysicalConfirmationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalConfirmationWhereInput
    orderBy?: PhysicalConfirmationOrderByWithAggregationInput | PhysicalConfirmationOrderByWithAggregationInput[]
    by: PhysicalConfirmationScalarFieldEnum[] | PhysicalConfirmationScalarFieldEnum
    having?: PhysicalConfirmationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalConfirmationCountAggregateInputType | true
    _avg?: PhysicalConfirmationAvgAggregateInputType
    _sum?: PhysicalConfirmationSumAggregateInputType
    _min?: PhysicalConfirmationMinAggregateInputType
    _max?: PhysicalConfirmationMaxAggregateInputType
  }

  export type PhysicalConfirmationGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    methodId: string
    confirmedBy: string
    amount: number
    notes: string | null
    confirmedAt: Date
    _count: PhysicalConfirmationCountAggregateOutputType | null
    _avg: PhysicalConfirmationAvgAggregateOutputType | null
    _sum: PhysicalConfirmationSumAggregateOutputType | null
    _min: PhysicalConfirmationMinAggregateOutputType | null
    _max: PhysicalConfirmationMaxAggregateOutputType | null
  }

  type GetPhysicalConfirmationGroupByPayload<T extends PhysicalConfirmationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalConfirmationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalConfirmationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalConfirmationGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalConfirmationGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalConfirmationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    confirmedBy?: boolean
    amount?: boolean
    notes?: boolean
    confirmedAt?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalConfirmation"]>

  export type PhysicalConfirmationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    confirmedBy?: boolean
    amount?: boolean
    notes?: boolean
    confirmedAt?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalConfirmation"]>

  export type PhysicalConfirmationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    confirmedBy?: boolean
    amount?: boolean
    notes?: boolean
    confirmedAt?: boolean
  }

  export type PhysicalConfirmationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }
  export type PhysicalConfirmationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $PhysicalConfirmationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalConfirmation"
    objects: {
      method: Prisma.$PaymentMethodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      methodId: string
      confirmedBy: string
      amount: number
      notes: string | null
      confirmedAt: Date
    }, ExtArgs["result"]["physicalConfirmation"]>
    composites: {}
  }

  type PhysicalConfirmationGetPayload<S extends boolean | null | undefined | PhysicalConfirmationDefaultArgs> = $Result.GetResult<Prisma.$PhysicalConfirmationPayload, S>

  type PhysicalConfirmationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhysicalConfirmationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhysicalConfirmationCountAggregateInputType | true
    }

  export interface PhysicalConfirmationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalConfirmation'], meta: { name: 'PhysicalConfirmation' } }
    /**
     * Find zero or one PhysicalConfirmation that matches the filter.
     * @param {PhysicalConfirmationFindUniqueArgs} args - Arguments to find a PhysicalConfirmation
     * @example
     * // Get one PhysicalConfirmation
     * const physicalConfirmation = await prisma.physicalConfirmation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhysicalConfirmationFindUniqueArgs>(args: SelectSubset<T, PhysicalConfirmationFindUniqueArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhysicalConfirmation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhysicalConfirmationFindUniqueOrThrowArgs} args - Arguments to find a PhysicalConfirmation
     * @example
     * // Get one PhysicalConfirmation
     * const physicalConfirmation = await prisma.physicalConfirmation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhysicalConfirmationFindUniqueOrThrowArgs>(args: SelectSubset<T, PhysicalConfirmationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhysicalConfirmation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationFindFirstArgs} args - Arguments to find a PhysicalConfirmation
     * @example
     * // Get one PhysicalConfirmation
     * const physicalConfirmation = await prisma.physicalConfirmation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhysicalConfirmationFindFirstArgs>(args?: SelectSubset<T, PhysicalConfirmationFindFirstArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhysicalConfirmation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationFindFirstOrThrowArgs} args - Arguments to find a PhysicalConfirmation
     * @example
     * // Get one PhysicalConfirmation
     * const physicalConfirmation = await prisma.physicalConfirmation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhysicalConfirmationFindFirstOrThrowArgs>(args?: SelectSubset<T, PhysicalConfirmationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhysicalConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalConfirmations
     * const physicalConfirmations = await prisma.physicalConfirmation.findMany()
     * 
     * // Get first 10 PhysicalConfirmations
     * const physicalConfirmations = await prisma.physicalConfirmation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalConfirmationWithIdOnly = await prisma.physicalConfirmation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhysicalConfirmationFindManyArgs>(args?: SelectSubset<T, PhysicalConfirmationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhysicalConfirmation.
     * @param {PhysicalConfirmationCreateArgs} args - Arguments to create a PhysicalConfirmation.
     * @example
     * // Create one PhysicalConfirmation
     * const PhysicalConfirmation = await prisma.physicalConfirmation.create({
     *   data: {
     *     // ... data to create a PhysicalConfirmation
     *   }
     * })
     * 
     */
    create<T extends PhysicalConfirmationCreateArgs>(args: SelectSubset<T, PhysicalConfirmationCreateArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhysicalConfirmations.
     * @param {PhysicalConfirmationCreateManyArgs} args - Arguments to create many PhysicalConfirmations.
     * @example
     * // Create many PhysicalConfirmations
     * const physicalConfirmation = await prisma.physicalConfirmation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhysicalConfirmationCreateManyArgs>(args?: SelectSubset<T, PhysicalConfirmationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhysicalConfirmations and returns the data saved in the database.
     * @param {PhysicalConfirmationCreateManyAndReturnArgs} args - Arguments to create many PhysicalConfirmations.
     * @example
     * // Create many PhysicalConfirmations
     * const physicalConfirmation = await prisma.physicalConfirmation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhysicalConfirmations and only return the `id`
     * const physicalConfirmationWithIdOnly = await prisma.physicalConfirmation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhysicalConfirmationCreateManyAndReturnArgs>(args?: SelectSubset<T, PhysicalConfirmationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhysicalConfirmation.
     * @param {PhysicalConfirmationDeleteArgs} args - Arguments to delete one PhysicalConfirmation.
     * @example
     * // Delete one PhysicalConfirmation
     * const PhysicalConfirmation = await prisma.physicalConfirmation.delete({
     *   where: {
     *     // ... filter to delete one PhysicalConfirmation
     *   }
     * })
     * 
     */
    delete<T extends PhysicalConfirmationDeleteArgs>(args: SelectSubset<T, PhysicalConfirmationDeleteArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhysicalConfirmation.
     * @param {PhysicalConfirmationUpdateArgs} args - Arguments to update one PhysicalConfirmation.
     * @example
     * // Update one PhysicalConfirmation
     * const physicalConfirmation = await prisma.physicalConfirmation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhysicalConfirmationUpdateArgs>(args: SelectSubset<T, PhysicalConfirmationUpdateArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhysicalConfirmations.
     * @param {PhysicalConfirmationDeleteManyArgs} args - Arguments to filter PhysicalConfirmations to delete.
     * @example
     * // Delete a few PhysicalConfirmations
     * const { count } = await prisma.physicalConfirmation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhysicalConfirmationDeleteManyArgs>(args?: SelectSubset<T, PhysicalConfirmationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalConfirmations
     * const physicalConfirmation = await prisma.physicalConfirmation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhysicalConfirmationUpdateManyArgs>(args: SelectSubset<T, PhysicalConfirmationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhysicalConfirmation.
     * @param {PhysicalConfirmationUpsertArgs} args - Arguments to update or create a PhysicalConfirmation.
     * @example
     * // Update or create a PhysicalConfirmation
     * const physicalConfirmation = await prisma.physicalConfirmation.upsert({
     *   create: {
     *     // ... data to create a PhysicalConfirmation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalConfirmation we want to update
     *   }
     * })
     */
    upsert<T extends PhysicalConfirmationUpsertArgs>(args: SelectSubset<T, PhysicalConfirmationUpsertArgs<ExtArgs>>): Prisma__PhysicalConfirmationClient<$Result.GetResult<Prisma.$PhysicalConfirmationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhysicalConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationCountArgs} args - Arguments to filter PhysicalConfirmations to count.
     * @example
     * // Count the number of PhysicalConfirmations
     * const count = await prisma.physicalConfirmation.count({
     *   where: {
     *     // ... the filter for the PhysicalConfirmations we want to count
     *   }
     * })
    **/
    count<T extends PhysicalConfirmationCountArgs>(
      args?: Subset<T, PhysicalConfirmationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalConfirmationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhysicalConfirmationAggregateArgs>(args: Subset<T, PhysicalConfirmationAggregateArgs>): Prisma.PrismaPromise<GetPhysicalConfirmationAggregateType<T>>

    /**
     * Group by PhysicalConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalConfirmationGroupByArgs} args - Group by arguments.
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
      T extends PhysicalConfirmationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalConfirmationGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalConfirmationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhysicalConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalConfirmation model
   */
  readonly fields: PhysicalConfirmationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalConfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalConfirmationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    method<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PhysicalConfirmation model
   */ 
  interface PhysicalConfirmationFieldRefs {
    readonly id: FieldRef<"PhysicalConfirmation", 'String'>
    readonly tenantId: FieldRef<"PhysicalConfirmation", 'String'>
    readonly shopId: FieldRef<"PhysicalConfirmation", 'String'>
    readonly methodId: FieldRef<"PhysicalConfirmation", 'String'>
    readonly confirmedBy: FieldRef<"PhysicalConfirmation", 'String'>
    readonly amount: FieldRef<"PhysicalConfirmation", 'Float'>
    readonly notes: FieldRef<"PhysicalConfirmation", 'String'>
    readonly confirmedAt: FieldRef<"PhysicalConfirmation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhysicalConfirmation findUnique
   */
  export type PhysicalConfirmationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalConfirmation to fetch.
     */
    where: PhysicalConfirmationWhereUniqueInput
  }

  /**
   * PhysicalConfirmation findUniqueOrThrow
   */
  export type PhysicalConfirmationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalConfirmation to fetch.
     */
    where: PhysicalConfirmationWhereUniqueInput
  }

  /**
   * PhysicalConfirmation findFirst
   */
  export type PhysicalConfirmationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalConfirmation to fetch.
     */
    where?: PhysicalConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalConfirmations to fetch.
     */
    orderBy?: PhysicalConfirmationOrderByWithRelationInput | PhysicalConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalConfirmations.
     */
    cursor?: PhysicalConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalConfirmations.
     */
    distinct?: PhysicalConfirmationScalarFieldEnum | PhysicalConfirmationScalarFieldEnum[]
  }

  /**
   * PhysicalConfirmation findFirstOrThrow
   */
  export type PhysicalConfirmationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalConfirmation to fetch.
     */
    where?: PhysicalConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalConfirmations to fetch.
     */
    orderBy?: PhysicalConfirmationOrderByWithRelationInput | PhysicalConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalConfirmations.
     */
    cursor?: PhysicalConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalConfirmations.
     */
    distinct?: PhysicalConfirmationScalarFieldEnum | PhysicalConfirmationScalarFieldEnum[]
  }

  /**
   * PhysicalConfirmation findMany
   */
  export type PhysicalConfirmationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalConfirmations to fetch.
     */
    where?: PhysicalConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalConfirmations to fetch.
     */
    orderBy?: PhysicalConfirmationOrderByWithRelationInput | PhysicalConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalConfirmations.
     */
    cursor?: PhysicalConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalConfirmations.
     */
    skip?: number
    distinct?: PhysicalConfirmationScalarFieldEnum | PhysicalConfirmationScalarFieldEnum[]
  }

  /**
   * PhysicalConfirmation create
   */
  export type PhysicalConfirmationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to create a PhysicalConfirmation.
     */
    data: XOR<PhysicalConfirmationCreateInput, PhysicalConfirmationUncheckedCreateInput>
  }

  /**
   * PhysicalConfirmation createMany
   */
  export type PhysicalConfirmationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalConfirmations.
     */
    data: PhysicalConfirmationCreateManyInput | PhysicalConfirmationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhysicalConfirmation createManyAndReturn
   */
  export type PhysicalConfirmationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhysicalConfirmations.
     */
    data: PhysicalConfirmationCreateManyInput | PhysicalConfirmationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalConfirmation update
   */
  export type PhysicalConfirmationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to update a PhysicalConfirmation.
     */
    data: XOR<PhysicalConfirmationUpdateInput, PhysicalConfirmationUncheckedUpdateInput>
    /**
     * Choose, which PhysicalConfirmation to update.
     */
    where: PhysicalConfirmationWhereUniqueInput
  }

  /**
   * PhysicalConfirmation updateMany
   */
  export type PhysicalConfirmationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalConfirmations.
     */
    data: XOR<PhysicalConfirmationUpdateManyMutationInput, PhysicalConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalConfirmations to update
     */
    where?: PhysicalConfirmationWhereInput
  }

  /**
   * PhysicalConfirmation upsert
   */
  export type PhysicalConfirmationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * The filter to search for the PhysicalConfirmation to update in case it exists.
     */
    where: PhysicalConfirmationWhereUniqueInput
    /**
     * In case the PhysicalConfirmation found by the `where` argument doesn't exist, create a new PhysicalConfirmation with this data.
     */
    create: XOR<PhysicalConfirmationCreateInput, PhysicalConfirmationUncheckedCreateInput>
    /**
     * In case the PhysicalConfirmation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalConfirmationUpdateInput, PhysicalConfirmationUncheckedUpdateInput>
  }

  /**
   * PhysicalConfirmation delete
   */
  export type PhysicalConfirmationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
    /**
     * Filter which PhysicalConfirmation to delete.
     */
    where: PhysicalConfirmationWhereUniqueInput
  }

  /**
   * PhysicalConfirmation deleteMany
   */
  export type PhysicalConfirmationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalConfirmations to delete
     */
    where?: PhysicalConfirmationWhereInput
  }

  /**
   * PhysicalConfirmation without action
   */
  export type PhysicalConfirmationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalConfirmation
     */
    select?: PhysicalConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalConfirmationInclude<ExtArgs> | null
  }


  /**
   * Model OperationalDeposit
   */

  export type AggregateOperationalDeposit = {
    _count: OperationalDepositCountAggregateOutputType | null
    _avg: OperationalDepositAvgAggregateOutputType | null
    _sum: OperationalDepositSumAggregateOutputType | null
    _min: OperationalDepositMinAggregateOutputType | null
    _max: OperationalDepositMaxAggregateOutputType | null
  }

  export type OperationalDepositAvgAggregateOutputType = {
    amount: number | null
  }

  export type OperationalDepositSumAggregateOutputType = {
    amount: number | null
  }

  export type OperationalDepositMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    methodId: string | null
    amount: number | null
    depositedBy: string | null
    notes: string | null
    depositedAt: Date | null
  }

  export type OperationalDepositMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    methodId: string | null
    amount: number | null
    depositedBy: string | null
    notes: string | null
    depositedAt: Date | null
  }

  export type OperationalDepositCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    methodId: number
    amount: number
    depositedBy: number
    notes: number
    depositedAt: number
    _all: number
  }


  export type OperationalDepositAvgAggregateInputType = {
    amount?: true
  }

  export type OperationalDepositSumAggregateInputType = {
    amount?: true
  }

  export type OperationalDepositMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    amount?: true
    depositedBy?: true
    notes?: true
    depositedAt?: true
  }

  export type OperationalDepositMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    amount?: true
    depositedBy?: true
    notes?: true
    depositedAt?: true
  }

  export type OperationalDepositCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    amount?: true
    depositedBy?: true
    notes?: true
    depositedAt?: true
    _all?: true
  }

  export type OperationalDepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperationalDeposit to aggregate.
     */
    where?: OperationalDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperationalDeposits to fetch.
     */
    orderBy?: OperationalDepositOrderByWithRelationInput | OperationalDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationalDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperationalDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperationalDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperationalDeposits
    **/
    _count?: true | OperationalDepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationalDepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationalDepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationalDepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationalDepositMaxAggregateInputType
  }

  export type GetOperationalDepositAggregateType<T extends OperationalDepositAggregateArgs> = {
        [P in keyof T & keyof AggregateOperationalDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperationalDeposit[P]>
      : GetScalarType<T[P], AggregateOperationalDeposit[P]>
  }




  export type OperationalDepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationalDepositWhereInput
    orderBy?: OperationalDepositOrderByWithAggregationInput | OperationalDepositOrderByWithAggregationInput[]
    by: OperationalDepositScalarFieldEnum[] | OperationalDepositScalarFieldEnum
    having?: OperationalDepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationalDepositCountAggregateInputType | true
    _avg?: OperationalDepositAvgAggregateInputType
    _sum?: OperationalDepositSumAggregateInputType
    _min?: OperationalDepositMinAggregateInputType
    _max?: OperationalDepositMaxAggregateInputType
  }

  export type OperationalDepositGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    methodId: string
    amount: number
    depositedBy: string
    notes: string | null
    depositedAt: Date
    _count: OperationalDepositCountAggregateOutputType | null
    _avg: OperationalDepositAvgAggregateOutputType | null
    _sum: OperationalDepositSumAggregateOutputType | null
    _min: OperationalDepositMinAggregateOutputType | null
    _max: OperationalDepositMaxAggregateOutputType | null
  }

  type GetOperationalDepositGroupByPayload<T extends OperationalDepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationalDepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationalDepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationalDepositGroupByOutputType[P]>
            : GetScalarType<T[P], OperationalDepositGroupByOutputType[P]>
        }
      >
    >


  export type OperationalDepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    amount?: boolean
    depositedBy?: boolean
    notes?: boolean
    depositedAt?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operationalDeposit"]>

  export type OperationalDepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    amount?: boolean
    depositedBy?: boolean
    notes?: boolean
    depositedAt?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operationalDeposit"]>

  export type OperationalDepositSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    amount?: boolean
    depositedBy?: boolean
    notes?: boolean
    depositedAt?: boolean
  }

  export type OperationalDepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }
  export type OperationalDepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $OperationalDepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperationalDeposit"
    objects: {
      method: Prisma.$PaymentMethodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      methodId: string
      amount: number
      depositedBy: string
      notes: string | null
      depositedAt: Date
    }, ExtArgs["result"]["operationalDeposit"]>
    composites: {}
  }

  type OperationalDepositGetPayload<S extends boolean | null | undefined | OperationalDepositDefaultArgs> = $Result.GetResult<Prisma.$OperationalDepositPayload, S>

  type OperationalDepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OperationalDepositFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperationalDepositCountAggregateInputType | true
    }

  export interface OperationalDepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperationalDeposit'], meta: { name: 'OperationalDeposit' } }
    /**
     * Find zero or one OperationalDeposit that matches the filter.
     * @param {OperationalDepositFindUniqueArgs} args - Arguments to find a OperationalDeposit
     * @example
     * // Get one OperationalDeposit
     * const operationalDeposit = await prisma.operationalDeposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationalDepositFindUniqueArgs>(args: SelectSubset<T, OperationalDepositFindUniqueArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OperationalDeposit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OperationalDepositFindUniqueOrThrowArgs} args - Arguments to find a OperationalDeposit
     * @example
     * // Get one OperationalDeposit
     * const operationalDeposit = await prisma.operationalDeposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationalDepositFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationalDepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OperationalDeposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositFindFirstArgs} args - Arguments to find a OperationalDeposit
     * @example
     * // Get one OperationalDeposit
     * const operationalDeposit = await prisma.operationalDeposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationalDepositFindFirstArgs>(args?: SelectSubset<T, OperationalDepositFindFirstArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OperationalDeposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositFindFirstOrThrowArgs} args - Arguments to find a OperationalDeposit
     * @example
     * // Get one OperationalDeposit
     * const operationalDeposit = await prisma.operationalDeposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationalDepositFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationalDepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OperationalDeposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperationalDeposits
     * const operationalDeposits = await prisma.operationalDeposit.findMany()
     * 
     * // Get first 10 OperationalDeposits
     * const operationalDeposits = await prisma.operationalDeposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationalDepositWithIdOnly = await prisma.operationalDeposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationalDepositFindManyArgs>(args?: SelectSubset<T, OperationalDepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OperationalDeposit.
     * @param {OperationalDepositCreateArgs} args - Arguments to create a OperationalDeposit.
     * @example
     * // Create one OperationalDeposit
     * const OperationalDeposit = await prisma.operationalDeposit.create({
     *   data: {
     *     // ... data to create a OperationalDeposit
     *   }
     * })
     * 
     */
    create<T extends OperationalDepositCreateArgs>(args: SelectSubset<T, OperationalDepositCreateArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OperationalDeposits.
     * @param {OperationalDepositCreateManyArgs} args - Arguments to create many OperationalDeposits.
     * @example
     * // Create many OperationalDeposits
     * const operationalDeposit = await prisma.operationalDeposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationalDepositCreateManyArgs>(args?: SelectSubset<T, OperationalDepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OperationalDeposits and returns the data saved in the database.
     * @param {OperationalDepositCreateManyAndReturnArgs} args - Arguments to create many OperationalDeposits.
     * @example
     * // Create many OperationalDeposits
     * const operationalDeposit = await prisma.operationalDeposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OperationalDeposits and only return the `id`
     * const operationalDepositWithIdOnly = await prisma.operationalDeposit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationalDepositCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationalDepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OperationalDeposit.
     * @param {OperationalDepositDeleteArgs} args - Arguments to delete one OperationalDeposit.
     * @example
     * // Delete one OperationalDeposit
     * const OperationalDeposit = await prisma.operationalDeposit.delete({
     *   where: {
     *     // ... filter to delete one OperationalDeposit
     *   }
     * })
     * 
     */
    delete<T extends OperationalDepositDeleteArgs>(args: SelectSubset<T, OperationalDepositDeleteArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OperationalDeposit.
     * @param {OperationalDepositUpdateArgs} args - Arguments to update one OperationalDeposit.
     * @example
     * // Update one OperationalDeposit
     * const operationalDeposit = await prisma.operationalDeposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationalDepositUpdateArgs>(args: SelectSubset<T, OperationalDepositUpdateArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OperationalDeposits.
     * @param {OperationalDepositDeleteManyArgs} args - Arguments to filter OperationalDeposits to delete.
     * @example
     * // Delete a few OperationalDeposits
     * const { count } = await prisma.operationalDeposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationalDepositDeleteManyArgs>(args?: SelectSubset<T, OperationalDepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperationalDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperationalDeposits
     * const operationalDeposit = await prisma.operationalDeposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationalDepositUpdateManyArgs>(args: SelectSubset<T, OperationalDepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OperationalDeposit.
     * @param {OperationalDepositUpsertArgs} args - Arguments to update or create a OperationalDeposit.
     * @example
     * // Update or create a OperationalDeposit
     * const operationalDeposit = await prisma.operationalDeposit.upsert({
     *   create: {
     *     // ... data to create a OperationalDeposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperationalDeposit we want to update
     *   }
     * })
     */
    upsert<T extends OperationalDepositUpsertArgs>(args: SelectSubset<T, OperationalDepositUpsertArgs<ExtArgs>>): Prisma__OperationalDepositClient<$Result.GetResult<Prisma.$OperationalDepositPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OperationalDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositCountArgs} args - Arguments to filter OperationalDeposits to count.
     * @example
     * // Count the number of OperationalDeposits
     * const count = await prisma.operationalDeposit.count({
     *   where: {
     *     // ... the filter for the OperationalDeposits we want to count
     *   }
     * })
    **/
    count<T extends OperationalDepositCountArgs>(
      args?: Subset<T, OperationalDepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationalDepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperationalDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperationalDepositAggregateArgs>(args: Subset<T, OperationalDepositAggregateArgs>): Prisma.PrismaPromise<GetOperationalDepositAggregateType<T>>

    /**
     * Group by OperationalDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationalDepositGroupByArgs} args - Group by arguments.
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
      T extends OperationalDepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationalDepositGroupByArgs['orderBy'] }
        : { orderBy?: OperationalDepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperationalDepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationalDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperationalDeposit model
   */
  readonly fields: OperationalDepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperationalDeposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationalDepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    method<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OperationalDeposit model
   */ 
  interface OperationalDepositFieldRefs {
    readonly id: FieldRef<"OperationalDeposit", 'String'>
    readonly tenantId: FieldRef<"OperationalDeposit", 'String'>
    readonly shopId: FieldRef<"OperationalDeposit", 'String'>
    readonly methodId: FieldRef<"OperationalDeposit", 'String'>
    readonly amount: FieldRef<"OperationalDeposit", 'Float'>
    readonly depositedBy: FieldRef<"OperationalDeposit", 'String'>
    readonly notes: FieldRef<"OperationalDeposit", 'String'>
    readonly depositedAt: FieldRef<"OperationalDeposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OperationalDeposit findUnique
   */
  export type OperationalDepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * Filter, which OperationalDeposit to fetch.
     */
    where: OperationalDepositWhereUniqueInput
  }

  /**
   * OperationalDeposit findUniqueOrThrow
   */
  export type OperationalDepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * Filter, which OperationalDeposit to fetch.
     */
    where: OperationalDepositWhereUniqueInput
  }

  /**
   * OperationalDeposit findFirst
   */
  export type OperationalDepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * Filter, which OperationalDeposit to fetch.
     */
    where?: OperationalDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperationalDeposits to fetch.
     */
    orderBy?: OperationalDepositOrderByWithRelationInput | OperationalDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperationalDeposits.
     */
    cursor?: OperationalDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperationalDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperationalDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperationalDeposits.
     */
    distinct?: OperationalDepositScalarFieldEnum | OperationalDepositScalarFieldEnum[]
  }

  /**
   * OperationalDeposit findFirstOrThrow
   */
  export type OperationalDepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * Filter, which OperationalDeposit to fetch.
     */
    where?: OperationalDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperationalDeposits to fetch.
     */
    orderBy?: OperationalDepositOrderByWithRelationInput | OperationalDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperationalDeposits.
     */
    cursor?: OperationalDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperationalDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperationalDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperationalDeposits.
     */
    distinct?: OperationalDepositScalarFieldEnum | OperationalDepositScalarFieldEnum[]
  }

  /**
   * OperationalDeposit findMany
   */
  export type OperationalDepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * Filter, which OperationalDeposits to fetch.
     */
    where?: OperationalDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperationalDeposits to fetch.
     */
    orderBy?: OperationalDepositOrderByWithRelationInput | OperationalDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperationalDeposits.
     */
    cursor?: OperationalDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperationalDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperationalDeposits.
     */
    skip?: number
    distinct?: OperationalDepositScalarFieldEnum | OperationalDepositScalarFieldEnum[]
  }

  /**
   * OperationalDeposit create
   */
  export type OperationalDepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * The data needed to create a OperationalDeposit.
     */
    data: XOR<OperationalDepositCreateInput, OperationalDepositUncheckedCreateInput>
  }

  /**
   * OperationalDeposit createMany
   */
  export type OperationalDepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperationalDeposits.
     */
    data: OperationalDepositCreateManyInput | OperationalDepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperationalDeposit createManyAndReturn
   */
  export type OperationalDepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OperationalDeposits.
     */
    data: OperationalDepositCreateManyInput | OperationalDepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperationalDeposit update
   */
  export type OperationalDepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * The data needed to update a OperationalDeposit.
     */
    data: XOR<OperationalDepositUpdateInput, OperationalDepositUncheckedUpdateInput>
    /**
     * Choose, which OperationalDeposit to update.
     */
    where: OperationalDepositWhereUniqueInput
  }

  /**
   * OperationalDeposit updateMany
   */
  export type OperationalDepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperationalDeposits.
     */
    data: XOR<OperationalDepositUpdateManyMutationInput, OperationalDepositUncheckedUpdateManyInput>
    /**
     * Filter which OperationalDeposits to update
     */
    where?: OperationalDepositWhereInput
  }

  /**
   * OperationalDeposit upsert
   */
  export type OperationalDepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * The filter to search for the OperationalDeposit to update in case it exists.
     */
    where: OperationalDepositWhereUniqueInput
    /**
     * In case the OperationalDeposit found by the `where` argument doesn't exist, create a new OperationalDeposit with this data.
     */
    create: XOR<OperationalDepositCreateInput, OperationalDepositUncheckedCreateInput>
    /**
     * In case the OperationalDeposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationalDepositUpdateInput, OperationalDepositUncheckedUpdateInput>
  }

  /**
   * OperationalDeposit delete
   */
  export type OperationalDepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
    /**
     * Filter which OperationalDeposit to delete.
     */
    where: OperationalDepositWhereUniqueInput
  }

  /**
   * OperationalDeposit deleteMany
   */
  export type OperationalDepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperationalDeposits to delete
     */
    where?: OperationalDepositWhereInput
  }

  /**
   * OperationalDeposit without action
   */
  export type OperationalDepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperationalDeposit
     */
    select?: OperationalDepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationalDepositInclude<ExtArgs> | null
  }


  /**
   * Model Reconciliation
   */

  export type AggregateReconciliation = {
    _count: ReconciliationCountAggregateOutputType | null
    _avg: ReconciliationAvgAggregateOutputType | null
    _sum: ReconciliationSumAggregateOutputType | null
    _min: ReconciliationMinAggregateOutputType | null
    _max: ReconciliationMaxAggregateOutputType | null
  }

  export type ReconciliationAvgAggregateOutputType = {
    systemBalance: number | null
    physicalBalance: number | null
    difference: number | null
  }

  export type ReconciliationSumAggregateOutputType = {
    systemBalance: number | null
    physicalBalance: number | null
    difference: number | null
  }

  export type ReconciliationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    methodId: string | null
    systemBalance: number | null
    physicalBalance: number | null
    difference: number | null
    reconciledBy: string | null
    reconciledAt: Date | null
    notes: string | null
  }

  export type ReconciliationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    methodId: string | null
    systemBalance: number | null
    physicalBalance: number | null
    difference: number | null
    reconciledBy: string | null
    reconciledAt: Date | null
    notes: string | null
  }

  export type ReconciliationCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    methodId: number
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: number
    reconciledAt: number
    notes: number
    _all: number
  }


  export type ReconciliationAvgAggregateInputType = {
    systemBalance?: true
    physicalBalance?: true
    difference?: true
  }

  export type ReconciliationSumAggregateInputType = {
    systemBalance?: true
    physicalBalance?: true
    difference?: true
  }

  export type ReconciliationMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    systemBalance?: true
    physicalBalance?: true
    difference?: true
    reconciledBy?: true
    reconciledAt?: true
    notes?: true
  }

  export type ReconciliationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    systemBalance?: true
    physicalBalance?: true
    difference?: true
    reconciledBy?: true
    reconciledAt?: true
    notes?: true
  }

  export type ReconciliationCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    methodId?: true
    systemBalance?: true
    physicalBalance?: true
    difference?: true
    reconciledBy?: true
    reconciledAt?: true
    notes?: true
    _all?: true
  }

  export type ReconciliationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reconciliation to aggregate.
     */
    where?: ReconciliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reconciliations to fetch.
     */
    orderBy?: ReconciliationOrderByWithRelationInput | ReconciliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReconciliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reconciliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reconciliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reconciliations
    **/
    _count?: true | ReconciliationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReconciliationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReconciliationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReconciliationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReconciliationMaxAggregateInputType
  }

  export type GetReconciliationAggregateType<T extends ReconciliationAggregateArgs> = {
        [P in keyof T & keyof AggregateReconciliation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReconciliation[P]>
      : GetScalarType<T[P], AggregateReconciliation[P]>
  }




  export type ReconciliationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReconciliationWhereInput
    orderBy?: ReconciliationOrderByWithAggregationInput | ReconciliationOrderByWithAggregationInput[]
    by: ReconciliationScalarFieldEnum[] | ReconciliationScalarFieldEnum
    having?: ReconciliationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReconciliationCountAggregateInputType | true
    _avg?: ReconciliationAvgAggregateInputType
    _sum?: ReconciliationSumAggregateInputType
    _min?: ReconciliationMinAggregateInputType
    _max?: ReconciliationMaxAggregateInputType
  }

  export type ReconciliationGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    methodId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt: Date
    notes: string | null
    _count: ReconciliationCountAggregateOutputType | null
    _avg: ReconciliationAvgAggregateOutputType | null
    _sum: ReconciliationSumAggregateOutputType | null
    _min: ReconciliationMinAggregateOutputType | null
    _max: ReconciliationMaxAggregateOutputType | null
  }

  type GetReconciliationGroupByPayload<T extends ReconciliationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReconciliationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReconciliationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReconciliationGroupByOutputType[P]>
            : GetScalarType<T[P], ReconciliationGroupByOutputType[P]>
        }
      >
    >


  export type ReconciliationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    systemBalance?: boolean
    physicalBalance?: boolean
    difference?: boolean
    reconciledBy?: boolean
    reconciledAt?: boolean
    notes?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reconciliation"]>

  export type ReconciliationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    systemBalance?: boolean
    physicalBalance?: boolean
    difference?: boolean
    reconciledBy?: boolean
    reconciledAt?: boolean
    notes?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reconciliation"]>

  export type ReconciliationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    methodId?: boolean
    systemBalance?: boolean
    physicalBalance?: boolean
    difference?: boolean
    reconciledBy?: boolean
    reconciledAt?: boolean
    notes?: boolean
  }

  export type ReconciliationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }
  export type ReconciliationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $ReconciliationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reconciliation"
    objects: {
      method: Prisma.$PaymentMethodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      methodId: string
      systemBalance: number
      physicalBalance: number
      difference: number
      reconciledBy: string
      reconciledAt: Date
      notes: string | null
    }, ExtArgs["result"]["reconciliation"]>
    composites: {}
  }

  type ReconciliationGetPayload<S extends boolean | null | undefined | ReconciliationDefaultArgs> = $Result.GetResult<Prisma.$ReconciliationPayload, S>

  type ReconciliationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReconciliationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReconciliationCountAggregateInputType | true
    }

  export interface ReconciliationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reconciliation'], meta: { name: 'Reconciliation' } }
    /**
     * Find zero or one Reconciliation that matches the filter.
     * @param {ReconciliationFindUniqueArgs} args - Arguments to find a Reconciliation
     * @example
     * // Get one Reconciliation
     * const reconciliation = await prisma.reconciliation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReconciliationFindUniqueArgs>(args: SelectSubset<T, ReconciliationFindUniqueArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reconciliation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReconciliationFindUniqueOrThrowArgs} args - Arguments to find a Reconciliation
     * @example
     * // Get one Reconciliation
     * const reconciliation = await prisma.reconciliation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReconciliationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReconciliationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reconciliation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationFindFirstArgs} args - Arguments to find a Reconciliation
     * @example
     * // Get one Reconciliation
     * const reconciliation = await prisma.reconciliation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReconciliationFindFirstArgs>(args?: SelectSubset<T, ReconciliationFindFirstArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reconciliation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationFindFirstOrThrowArgs} args - Arguments to find a Reconciliation
     * @example
     * // Get one Reconciliation
     * const reconciliation = await prisma.reconciliation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReconciliationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReconciliationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reconciliations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reconciliations
     * const reconciliations = await prisma.reconciliation.findMany()
     * 
     * // Get first 10 Reconciliations
     * const reconciliations = await prisma.reconciliation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reconciliationWithIdOnly = await prisma.reconciliation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReconciliationFindManyArgs>(args?: SelectSubset<T, ReconciliationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reconciliation.
     * @param {ReconciliationCreateArgs} args - Arguments to create a Reconciliation.
     * @example
     * // Create one Reconciliation
     * const Reconciliation = await prisma.reconciliation.create({
     *   data: {
     *     // ... data to create a Reconciliation
     *   }
     * })
     * 
     */
    create<T extends ReconciliationCreateArgs>(args: SelectSubset<T, ReconciliationCreateArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reconciliations.
     * @param {ReconciliationCreateManyArgs} args - Arguments to create many Reconciliations.
     * @example
     * // Create many Reconciliations
     * const reconciliation = await prisma.reconciliation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReconciliationCreateManyArgs>(args?: SelectSubset<T, ReconciliationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reconciliations and returns the data saved in the database.
     * @param {ReconciliationCreateManyAndReturnArgs} args - Arguments to create many Reconciliations.
     * @example
     * // Create many Reconciliations
     * const reconciliation = await prisma.reconciliation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reconciliations and only return the `id`
     * const reconciliationWithIdOnly = await prisma.reconciliation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReconciliationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReconciliationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reconciliation.
     * @param {ReconciliationDeleteArgs} args - Arguments to delete one Reconciliation.
     * @example
     * // Delete one Reconciliation
     * const Reconciliation = await prisma.reconciliation.delete({
     *   where: {
     *     // ... filter to delete one Reconciliation
     *   }
     * })
     * 
     */
    delete<T extends ReconciliationDeleteArgs>(args: SelectSubset<T, ReconciliationDeleteArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reconciliation.
     * @param {ReconciliationUpdateArgs} args - Arguments to update one Reconciliation.
     * @example
     * // Update one Reconciliation
     * const reconciliation = await prisma.reconciliation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReconciliationUpdateArgs>(args: SelectSubset<T, ReconciliationUpdateArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reconciliations.
     * @param {ReconciliationDeleteManyArgs} args - Arguments to filter Reconciliations to delete.
     * @example
     * // Delete a few Reconciliations
     * const { count } = await prisma.reconciliation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReconciliationDeleteManyArgs>(args?: SelectSubset<T, ReconciliationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reconciliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reconciliations
     * const reconciliation = await prisma.reconciliation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReconciliationUpdateManyArgs>(args: SelectSubset<T, ReconciliationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reconciliation.
     * @param {ReconciliationUpsertArgs} args - Arguments to update or create a Reconciliation.
     * @example
     * // Update or create a Reconciliation
     * const reconciliation = await prisma.reconciliation.upsert({
     *   create: {
     *     // ... data to create a Reconciliation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reconciliation we want to update
     *   }
     * })
     */
    upsert<T extends ReconciliationUpsertArgs>(args: SelectSubset<T, ReconciliationUpsertArgs<ExtArgs>>): Prisma__ReconciliationClient<$Result.GetResult<Prisma.$ReconciliationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reconciliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationCountArgs} args - Arguments to filter Reconciliations to count.
     * @example
     * // Count the number of Reconciliations
     * const count = await prisma.reconciliation.count({
     *   where: {
     *     // ... the filter for the Reconciliations we want to count
     *   }
     * })
    **/
    count<T extends ReconciliationCountArgs>(
      args?: Subset<T, ReconciliationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReconciliationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reconciliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReconciliationAggregateArgs>(args: Subset<T, ReconciliationAggregateArgs>): Prisma.PrismaPromise<GetReconciliationAggregateType<T>>

    /**
     * Group by Reconciliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationGroupByArgs} args - Group by arguments.
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
      T extends ReconciliationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReconciliationGroupByArgs['orderBy'] }
        : { orderBy?: ReconciliationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReconciliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReconciliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reconciliation model
   */
  readonly fields: ReconciliationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reconciliation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReconciliationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    method<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reconciliation model
   */ 
  interface ReconciliationFieldRefs {
    readonly id: FieldRef<"Reconciliation", 'String'>
    readonly tenantId: FieldRef<"Reconciliation", 'String'>
    readonly shopId: FieldRef<"Reconciliation", 'String'>
    readonly methodId: FieldRef<"Reconciliation", 'String'>
    readonly systemBalance: FieldRef<"Reconciliation", 'Float'>
    readonly physicalBalance: FieldRef<"Reconciliation", 'Float'>
    readonly difference: FieldRef<"Reconciliation", 'Float'>
    readonly reconciledBy: FieldRef<"Reconciliation", 'String'>
    readonly reconciledAt: FieldRef<"Reconciliation", 'DateTime'>
    readonly notes: FieldRef<"Reconciliation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reconciliation findUnique
   */
  export type ReconciliationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * Filter, which Reconciliation to fetch.
     */
    where: ReconciliationWhereUniqueInput
  }

  /**
   * Reconciliation findUniqueOrThrow
   */
  export type ReconciliationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * Filter, which Reconciliation to fetch.
     */
    where: ReconciliationWhereUniqueInput
  }

  /**
   * Reconciliation findFirst
   */
  export type ReconciliationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * Filter, which Reconciliation to fetch.
     */
    where?: ReconciliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reconciliations to fetch.
     */
    orderBy?: ReconciliationOrderByWithRelationInput | ReconciliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reconciliations.
     */
    cursor?: ReconciliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reconciliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reconciliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reconciliations.
     */
    distinct?: ReconciliationScalarFieldEnum | ReconciliationScalarFieldEnum[]
  }

  /**
   * Reconciliation findFirstOrThrow
   */
  export type ReconciliationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * Filter, which Reconciliation to fetch.
     */
    where?: ReconciliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reconciliations to fetch.
     */
    orderBy?: ReconciliationOrderByWithRelationInput | ReconciliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reconciliations.
     */
    cursor?: ReconciliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reconciliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reconciliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reconciliations.
     */
    distinct?: ReconciliationScalarFieldEnum | ReconciliationScalarFieldEnum[]
  }

  /**
   * Reconciliation findMany
   */
  export type ReconciliationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * Filter, which Reconciliations to fetch.
     */
    where?: ReconciliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reconciliations to fetch.
     */
    orderBy?: ReconciliationOrderByWithRelationInput | ReconciliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reconciliations.
     */
    cursor?: ReconciliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reconciliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reconciliations.
     */
    skip?: number
    distinct?: ReconciliationScalarFieldEnum | ReconciliationScalarFieldEnum[]
  }

  /**
   * Reconciliation create
   */
  export type ReconciliationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reconciliation.
     */
    data: XOR<ReconciliationCreateInput, ReconciliationUncheckedCreateInput>
  }

  /**
   * Reconciliation createMany
   */
  export type ReconciliationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reconciliations.
     */
    data: ReconciliationCreateManyInput | ReconciliationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reconciliation createManyAndReturn
   */
  export type ReconciliationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reconciliations.
     */
    data: ReconciliationCreateManyInput | ReconciliationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reconciliation update
   */
  export type ReconciliationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reconciliation.
     */
    data: XOR<ReconciliationUpdateInput, ReconciliationUncheckedUpdateInput>
    /**
     * Choose, which Reconciliation to update.
     */
    where: ReconciliationWhereUniqueInput
  }

  /**
   * Reconciliation updateMany
   */
  export type ReconciliationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reconciliations.
     */
    data: XOR<ReconciliationUpdateManyMutationInput, ReconciliationUncheckedUpdateManyInput>
    /**
     * Filter which Reconciliations to update
     */
    where?: ReconciliationWhereInput
  }

  /**
   * Reconciliation upsert
   */
  export type ReconciliationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reconciliation to update in case it exists.
     */
    where: ReconciliationWhereUniqueInput
    /**
     * In case the Reconciliation found by the `where` argument doesn't exist, create a new Reconciliation with this data.
     */
    create: XOR<ReconciliationCreateInput, ReconciliationUncheckedCreateInput>
    /**
     * In case the Reconciliation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReconciliationUpdateInput, ReconciliationUncheckedUpdateInput>
  }

  /**
   * Reconciliation delete
   */
  export type ReconciliationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
    /**
     * Filter which Reconciliation to delete.
     */
    where: ReconciliationWhereUniqueInput
  }

  /**
   * Reconciliation deleteMany
   */
  export type ReconciliationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reconciliations to delete
     */
    where?: ReconciliationWhereInput
  }

  /**
   * Reconciliation without action
   */
  export type ReconciliationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reconciliation
     */
    select?: ReconciliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReconciliationInclude<ExtArgs> | null
  }


  /**
   * Model TreasuryLoan
   */

  export type AggregateTreasuryLoan = {
    _count: TreasuryLoanCountAggregateOutputType | null
    _avg: TreasuryLoanAvgAggregateOutputType | null
    _sum: TreasuryLoanSumAggregateOutputType | null
    _min: TreasuryLoanMinAggregateOutputType | null
    _max: TreasuryLoanMaxAggregateOutputType | null
  }

  export type TreasuryLoanAvgAggregateOutputType = {
    principal: number | null
    outstanding: number | null
  }

  export type TreasuryLoanSumAggregateOutputType = {
    principal: number | null
    outstanding: number | null
  }

  export type TreasuryLoanMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    direction: string | null
    counterparty: string | null
    principal: number | null
    outstanding: number | null
    methodId: string | null
    status: string | null
    notes: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreasuryLoanMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    direction: string | null
    counterparty: string | null
    principal: number | null
    outstanding: number | null
    methodId: string | null
    status: string | null
    notes: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreasuryLoanCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    direction: number
    counterparty: number
    principal: number
    outstanding: number
    methodId: number
    status: number
    notes: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreasuryLoanAvgAggregateInputType = {
    principal?: true
    outstanding?: true
  }

  export type TreasuryLoanSumAggregateInputType = {
    principal?: true
    outstanding?: true
  }

  export type TreasuryLoanMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    direction?: true
    counterparty?: true
    principal?: true
    outstanding?: true
    methodId?: true
    status?: true
    notes?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreasuryLoanMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    direction?: true
    counterparty?: true
    principal?: true
    outstanding?: true
    methodId?: true
    status?: true
    notes?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreasuryLoanCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    direction?: true
    counterparty?: true
    principal?: true
    outstanding?: true
    methodId?: true
    status?: true
    notes?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreasuryLoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryLoan to aggregate.
     */
    where?: TreasuryLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoans to fetch.
     */
    orderBy?: TreasuryLoanOrderByWithRelationInput | TreasuryLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreasuryLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreasuryLoans
    **/
    _count?: true | TreasuryLoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreasuryLoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreasuryLoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreasuryLoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreasuryLoanMaxAggregateInputType
  }

  export type GetTreasuryLoanAggregateType<T extends TreasuryLoanAggregateArgs> = {
        [P in keyof T & keyof AggregateTreasuryLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreasuryLoan[P]>
      : GetScalarType<T[P], AggregateTreasuryLoan[P]>
  }




  export type TreasuryLoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryLoanWhereInput
    orderBy?: TreasuryLoanOrderByWithAggregationInput | TreasuryLoanOrderByWithAggregationInput[]
    by: TreasuryLoanScalarFieldEnum[] | TreasuryLoanScalarFieldEnum
    having?: TreasuryLoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreasuryLoanCountAggregateInputType | true
    _avg?: TreasuryLoanAvgAggregateInputType
    _sum?: TreasuryLoanSumAggregateInputType
    _min?: TreasuryLoanMinAggregateInputType
    _max?: TreasuryLoanMaxAggregateInputType
  }

  export type TreasuryLoanGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    methodId: string
    status: string
    notes: string | null
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TreasuryLoanCountAggregateOutputType | null
    _avg: TreasuryLoanAvgAggregateOutputType | null
    _sum: TreasuryLoanSumAggregateOutputType | null
    _min: TreasuryLoanMinAggregateOutputType | null
    _max: TreasuryLoanMaxAggregateOutputType | null
  }

  type GetTreasuryLoanGroupByPayload<T extends TreasuryLoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreasuryLoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreasuryLoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreasuryLoanGroupByOutputType[P]>
            : GetScalarType<T[P], TreasuryLoanGroupByOutputType[P]>
        }
      >
    >


  export type TreasuryLoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    direction?: boolean
    counterparty?: boolean
    principal?: boolean
    outstanding?: boolean
    methodId?: boolean
    status?: boolean
    notes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    repayments?: boolean | TreasuryLoan$repaymentsArgs<ExtArgs>
    _count?: boolean | TreasuryLoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treasuryLoan"]>

  export type TreasuryLoanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    direction?: boolean
    counterparty?: boolean
    principal?: boolean
    outstanding?: boolean
    methodId?: boolean
    status?: boolean
    notes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treasuryLoan"]>

  export type TreasuryLoanSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    direction?: boolean
    counterparty?: boolean
    principal?: boolean
    outstanding?: boolean
    methodId?: boolean
    status?: boolean
    notes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreasuryLoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    repayments?: boolean | TreasuryLoan$repaymentsArgs<ExtArgs>
    _count?: boolean | TreasuryLoanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreasuryLoanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $TreasuryLoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreasuryLoan"
    objects: {
      method: Prisma.$PaymentMethodPayload<ExtArgs>
      repayments: Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      direction: string
      counterparty: string
      principal: number
      outstanding: number
      methodId: string
      status: string
      notes: string | null
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["treasuryLoan"]>
    composites: {}
  }

  type TreasuryLoanGetPayload<S extends boolean | null | undefined | TreasuryLoanDefaultArgs> = $Result.GetResult<Prisma.$TreasuryLoanPayload, S>

  type TreasuryLoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TreasuryLoanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TreasuryLoanCountAggregateInputType | true
    }

  export interface TreasuryLoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreasuryLoan'], meta: { name: 'TreasuryLoan' } }
    /**
     * Find zero or one TreasuryLoan that matches the filter.
     * @param {TreasuryLoanFindUniqueArgs} args - Arguments to find a TreasuryLoan
     * @example
     * // Get one TreasuryLoan
     * const treasuryLoan = await prisma.treasuryLoan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreasuryLoanFindUniqueArgs>(args: SelectSubset<T, TreasuryLoanFindUniqueArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TreasuryLoan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TreasuryLoanFindUniqueOrThrowArgs} args - Arguments to find a TreasuryLoan
     * @example
     * // Get one TreasuryLoan
     * const treasuryLoan = await prisma.treasuryLoan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreasuryLoanFindUniqueOrThrowArgs>(args: SelectSubset<T, TreasuryLoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TreasuryLoan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanFindFirstArgs} args - Arguments to find a TreasuryLoan
     * @example
     * // Get one TreasuryLoan
     * const treasuryLoan = await prisma.treasuryLoan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreasuryLoanFindFirstArgs>(args?: SelectSubset<T, TreasuryLoanFindFirstArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TreasuryLoan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanFindFirstOrThrowArgs} args - Arguments to find a TreasuryLoan
     * @example
     * // Get one TreasuryLoan
     * const treasuryLoan = await prisma.treasuryLoan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreasuryLoanFindFirstOrThrowArgs>(args?: SelectSubset<T, TreasuryLoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TreasuryLoans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreasuryLoans
     * const treasuryLoans = await prisma.treasuryLoan.findMany()
     * 
     * // Get first 10 TreasuryLoans
     * const treasuryLoans = await prisma.treasuryLoan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treasuryLoanWithIdOnly = await prisma.treasuryLoan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreasuryLoanFindManyArgs>(args?: SelectSubset<T, TreasuryLoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TreasuryLoan.
     * @param {TreasuryLoanCreateArgs} args - Arguments to create a TreasuryLoan.
     * @example
     * // Create one TreasuryLoan
     * const TreasuryLoan = await prisma.treasuryLoan.create({
     *   data: {
     *     // ... data to create a TreasuryLoan
     *   }
     * })
     * 
     */
    create<T extends TreasuryLoanCreateArgs>(args: SelectSubset<T, TreasuryLoanCreateArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TreasuryLoans.
     * @param {TreasuryLoanCreateManyArgs} args - Arguments to create many TreasuryLoans.
     * @example
     * // Create many TreasuryLoans
     * const treasuryLoan = await prisma.treasuryLoan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreasuryLoanCreateManyArgs>(args?: SelectSubset<T, TreasuryLoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreasuryLoans and returns the data saved in the database.
     * @param {TreasuryLoanCreateManyAndReturnArgs} args - Arguments to create many TreasuryLoans.
     * @example
     * // Create many TreasuryLoans
     * const treasuryLoan = await prisma.treasuryLoan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreasuryLoans and only return the `id`
     * const treasuryLoanWithIdOnly = await prisma.treasuryLoan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreasuryLoanCreateManyAndReturnArgs>(args?: SelectSubset<T, TreasuryLoanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TreasuryLoan.
     * @param {TreasuryLoanDeleteArgs} args - Arguments to delete one TreasuryLoan.
     * @example
     * // Delete one TreasuryLoan
     * const TreasuryLoan = await prisma.treasuryLoan.delete({
     *   where: {
     *     // ... filter to delete one TreasuryLoan
     *   }
     * })
     * 
     */
    delete<T extends TreasuryLoanDeleteArgs>(args: SelectSubset<T, TreasuryLoanDeleteArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TreasuryLoan.
     * @param {TreasuryLoanUpdateArgs} args - Arguments to update one TreasuryLoan.
     * @example
     * // Update one TreasuryLoan
     * const treasuryLoan = await prisma.treasuryLoan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreasuryLoanUpdateArgs>(args: SelectSubset<T, TreasuryLoanUpdateArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TreasuryLoans.
     * @param {TreasuryLoanDeleteManyArgs} args - Arguments to filter TreasuryLoans to delete.
     * @example
     * // Delete a few TreasuryLoans
     * const { count } = await prisma.treasuryLoan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreasuryLoanDeleteManyArgs>(args?: SelectSubset<T, TreasuryLoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreasuryLoans
     * const treasuryLoan = await prisma.treasuryLoan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreasuryLoanUpdateManyArgs>(args: SelectSubset<T, TreasuryLoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreasuryLoan.
     * @param {TreasuryLoanUpsertArgs} args - Arguments to update or create a TreasuryLoan.
     * @example
     * // Update or create a TreasuryLoan
     * const treasuryLoan = await prisma.treasuryLoan.upsert({
     *   create: {
     *     // ... data to create a TreasuryLoan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreasuryLoan we want to update
     *   }
     * })
     */
    upsert<T extends TreasuryLoanUpsertArgs>(args: SelectSubset<T, TreasuryLoanUpsertArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TreasuryLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanCountArgs} args - Arguments to filter TreasuryLoans to count.
     * @example
     * // Count the number of TreasuryLoans
     * const count = await prisma.treasuryLoan.count({
     *   where: {
     *     // ... the filter for the TreasuryLoans we want to count
     *   }
     * })
    **/
    count<T extends TreasuryLoanCountArgs>(
      args?: Subset<T, TreasuryLoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreasuryLoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreasuryLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreasuryLoanAggregateArgs>(args: Subset<T, TreasuryLoanAggregateArgs>): Prisma.PrismaPromise<GetTreasuryLoanAggregateType<T>>

    /**
     * Group by TreasuryLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanGroupByArgs} args - Group by arguments.
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
      T extends TreasuryLoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreasuryLoanGroupByArgs['orderBy'] }
        : { orderBy?: TreasuryLoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreasuryLoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreasuryLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreasuryLoan model
   */
  readonly fields: TreasuryLoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreasuryLoan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreasuryLoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    method<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    repayments<T extends TreasuryLoan$repaymentsArgs<ExtArgs> = {}>(args?: Subset<T, TreasuryLoan$repaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the TreasuryLoan model
   */ 
  interface TreasuryLoanFieldRefs {
    readonly id: FieldRef<"TreasuryLoan", 'String'>
    readonly tenantId: FieldRef<"TreasuryLoan", 'String'>
    readonly shopId: FieldRef<"TreasuryLoan", 'String'>
    readonly direction: FieldRef<"TreasuryLoan", 'String'>
    readonly counterparty: FieldRef<"TreasuryLoan", 'String'>
    readonly principal: FieldRef<"TreasuryLoan", 'Float'>
    readonly outstanding: FieldRef<"TreasuryLoan", 'Float'>
    readonly methodId: FieldRef<"TreasuryLoan", 'String'>
    readonly status: FieldRef<"TreasuryLoan", 'String'>
    readonly notes: FieldRef<"TreasuryLoan", 'String'>
    readonly createdBy: FieldRef<"TreasuryLoan", 'String'>
    readonly createdAt: FieldRef<"TreasuryLoan", 'DateTime'>
    readonly updatedAt: FieldRef<"TreasuryLoan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreasuryLoan findUnique
   */
  export type TreasuryLoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoan to fetch.
     */
    where: TreasuryLoanWhereUniqueInput
  }

  /**
   * TreasuryLoan findUniqueOrThrow
   */
  export type TreasuryLoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoan to fetch.
     */
    where: TreasuryLoanWhereUniqueInput
  }

  /**
   * TreasuryLoan findFirst
   */
  export type TreasuryLoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoan to fetch.
     */
    where?: TreasuryLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoans to fetch.
     */
    orderBy?: TreasuryLoanOrderByWithRelationInput | TreasuryLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryLoans.
     */
    cursor?: TreasuryLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryLoans.
     */
    distinct?: TreasuryLoanScalarFieldEnum | TreasuryLoanScalarFieldEnum[]
  }

  /**
   * TreasuryLoan findFirstOrThrow
   */
  export type TreasuryLoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoan to fetch.
     */
    where?: TreasuryLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoans to fetch.
     */
    orderBy?: TreasuryLoanOrderByWithRelationInput | TreasuryLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryLoans.
     */
    cursor?: TreasuryLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryLoans.
     */
    distinct?: TreasuryLoanScalarFieldEnum | TreasuryLoanScalarFieldEnum[]
  }

  /**
   * TreasuryLoan findMany
   */
  export type TreasuryLoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoans to fetch.
     */
    where?: TreasuryLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoans to fetch.
     */
    orderBy?: TreasuryLoanOrderByWithRelationInput | TreasuryLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreasuryLoans.
     */
    cursor?: TreasuryLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoans.
     */
    skip?: number
    distinct?: TreasuryLoanScalarFieldEnum | TreasuryLoanScalarFieldEnum[]
  }

  /**
   * TreasuryLoan create
   */
  export type TreasuryLoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * The data needed to create a TreasuryLoan.
     */
    data: XOR<TreasuryLoanCreateInput, TreasuryLoanUncheckedCreateInput>
  }

  /**
   * TreasuryLoan createMany
   */
  export type TreasuryLoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreasuryLoans.
     */
    data: TreasuryLoanCreateManyInput | TreasuryLoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryLoan createManyAndReturn
   */
  export type TreasuryLoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TreasuryLoans.
     */
    data: TreasuryLoanCreateManyInput | TreasuryLoanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreasuryLoan update
   */
  export type TreasuryLoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * The data needed to update a TreasuryLoan.
     */
    data: XOR<TreasuryLoanUpdateInput, TreasuryLoanUncheckedUpdateInput>
    /**
     * Choose, which TreasuryLoan to update.
     */
    where: TreasuryLoanWhereUniqueInput
  }

  /**
   * TreasuryLoan updateMany
   */
  export type TreasuryLoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreasuryLoans.
     */
    data: XOR<TreasuryLoanUpdateManyMutationInput, TreasuryLoanUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryLoans to update
     */
    where?: TreasuryLoanWhereInput
  }

  /**
   * TreasuryLoan upsert
   */
  export type TreasuryLoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * The filter to search for the TreasuryLoan to update in case it exists.
     */
    where: TreasuryLoanWhereUniqueInput
    /**
     * In case the TreasuryLoan found by the `where` argument doesn't exist, create a new TreasuryLoan with this data.
     */
    create: XOR<TreasuryLoanCreateInput, TreasuryLoanUncheckedCreateInput>
    /**
     * In case the TreasuryLoan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreasuryLoanUpdateInput, TreasuryLoanUncheckedUpdateInput>
  }

  /**
   * TreasuryLoan delete
   */
  export type TreasuryLoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
    /**
     * Filter which TreasuryLoan to delete.
     */
    where: TreasuryLoanWhereUniqueInput
  }

  /**
   * TreasuryLoan deleteMany
   */
  export type TreasuryLoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryLoans to delete
     */
    where?: TreasuryLoanWhereInput
  }

  /**
   * TreasuryLoan.repayments
   */
  export type TreasuryLoan$repaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    where?: TreasuryLoanRepaymentWhereInput
    orderBy?: TreasuryLoanRepaymentOrderByWithRelationInput | TreasuryLoanRepaymentOrderByWithRelationInput[]
    cursor?: TreasuryLoanRepaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreasuryLoanRepaymentScalarFieldEnum | TreasuryLoanRepaymentScalarFieldEnum[]
  }

  /**
   * TreasuryLoan without action
   */
  export type TreasuryLoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoan
     */
    select?: TreasuryLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanInclude<ExtArgs> | null
  }


  /**
   * Model TreasuryLoanRepayment
   */

  export type AggregateTreasuryLoanRepayment = {
    _count: TreasuryLoanRepaymentCountAggregateOutputType | null
    _avg: TreasuryLoanRepaymentAvgAggregateOutputType | null
    _sum: TreasuryLoanRepaymentSumAggregateOutputType | null
    _min: TreasuryLoanRepaymentMinAggregateOutputType | null
    _max: TreasuryLoanRepaymentMaxAggregateOutputType | null
  }

  export type TreasuryLoanRepaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type TreasuryLoanRepaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type TreasuryLoanRepaymentMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    loanId: string | null
    methodId: string | null
    amount: number | null
    notes: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type TreasuryLoanRepaymentMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    loanId: string | null
    methodId: string | null
    amount: number | null
    notes: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type TreasuryLoanRepaymentCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    loanId: number
    methodId: number
    amount: number
    notes: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type TreasuryLoanRepaymentAvgAggregateInputType = {
    amount?: true
  }

  export type TreasuryLoanRepaymentSumAggregateInputType = {
    amount?: true
  }

  export type TreasuryLoanRepaymentMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    loanId?: true
    methodId?: true
    amount?: true
    notes?: true
    createdBy?: true
    createdAt?: true
  }

  export type TreasuryLoanRepaymentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    loanId?: true
    methodId?: true
    amount?: true
    notes?: true
    createdBy?: true
    createdAt?: true
  }

  export type TreasuryLoanRepaymentCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    loanId?: true
    methodId?: true
    amount?: true
    notes?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type TreasuryLoanRepaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryLoanRepayment to aggregate.
     */
    where?: TreasuryLoanRepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoanRepayments to fetch.
     */
    orderBy?: TreasuryLoanRepaymentOrderByWithRelationInput | TreasuryLoanRepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreasuryLoanRepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoanRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoanRepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreasuryLoanRepayments
    **/
    _count?: true | TreasuryLoanRepaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreasuryLoanRepaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreasuryLoanRepaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreasuryLoanRepaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreasuryLoanRepaymentMaxAggregateInputType
  }

  export type GetTreasuryLoanRepaymentAggregateType<T extends TreasuryLoanRepaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateTreasuryLoanRepayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreasuryLoanRepayment[P]>
      : GetScalarType<T[P], AggregateTreasuryLoanRepayment[P]>
  }




  export type TreasuryLoanRepaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreasuryLoanRepaymentWhereInput
    orderBy?: TreasuryLoanRepaymentOrderByWithAggregationInput | TreasuryLoanRepaymentOrderByWithAggregationInput[]
    by: TreasuryLoanRepaymentScalarFieldEnum[] | TreasuryLoanRepaymentScalarFieldEnum
    having?: TreasuryLoanRepaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreasuryLoanRepaymentCountAggregateInputType | true
    _avg?: TreasuryLoanRepaymentAvgAggregateInputType
    _sum?: TreasuryLoanRepaymentSumAggregateInputType
    _min?: TreasuryLoanRepaymentMinAggregateInputType
    _max?: TreasuryLoanRepaymentMaxAggregateInputType
  }

  export type TreasuryLoanRepaymentGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    loanId: string
    methodId: string
    amount: number
    notes: string | null
    createdBy: string | null
    createdAt: Date
    _count: TreasuryLoanRepaymentCountAggregateOutputType | null
    _avg: TreasuryLoanRepaymentAvgAggregateOutputType | null
    _sum: TreasuryLoanRepaymentSumAggregateOutputType | null
    _min: TreasuryLoanRepaymentMinAggregateOutputType | null
    _max: TreasuryLoanRepaymentMaxAggregateOutputType | null
  }

  type GetTreasuryLoanRepaymentGroupByPayload<T extends TreasuryLoanRepaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreasuryLoanRepaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreasuryLoanRepaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreasuryLoanRepaymentGroupByOutputType[P]>
            : GetScalarType<T[P], TreasuryLoanRepaymentGroupByOutputType[P]>
        }
      >
    >


  export type TreasuryLoanRepaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    loanId?: boolean
    methodId?: boolean
    amount?: boolean
    notes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    loan?: boolean | TreasuryLoanDefaultArgs<ExtArgs>
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treasuryLoanRepayment"]>

  export type TreasuryLoanRepaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    loanId?: boolean
    methodId?: boolean
    amount?: boolean
    notes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    loan?: boolean | TreasuryLoanDefaultArgs<ExtArgs>
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treasuryLoanRepayment"]>

  export type TreasuryLoanRepaymentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    loanId?: boolean
    methodId?: boolean
    amount?: boolean
    notes?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type TreasuryLoanRepaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | TreasuryLoanDefaultArgs<ExtArgs>
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }
  export type TreasuryLoanRepaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | TreasuryLoanDefaultArgs<ExtArgs>
    method?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $TreasuryLoanRepaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreasuryLoanRepayment"
    objects: {
      loan: Prisma.$TreasuryLoanPayload<ExtArgs>
      method: Prisma.$PaymentMethodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      loanId: string
      methodId: string
      amount: number
      notes: string | null
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["treasuryLoanRepayment"]>
    composites: {}
  }

  type TreasuryLoanRepaymentGetPayload<S extends boolean | null | undefined | TreasuryLoanRepaymentDefaultArgs> = $Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload, S>

  type TreasuryLoanRepaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TreasuryLoanRepaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TreasuryLoanRepaymentCountAggregateInputType | true
    }

  export interface TreasuryLoanRepaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreasuryLoanRepayment'], meta: { name: 'TreasuryLoanRepayment' } }
    /**
     * Find zero or one TreasuryLoanRepayment that matches the filter.
     * @param {TreasuryLoanRepaymentFindUniqueArgs} args - Arguments to find a TreasuryLoanRepayment
     * @example
     * // Get one TreasuryLoanRepayment
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreasuryLoanRepaymentFindUniqueArgs>(args: SelectSubset<T, TreasuryLoanRepaymentFindUniqueArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TreasuryLoanRepayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TreasuryLoanRepaymentFindUniqueOrThrowArgs} args - Arguments to find a TreasuryLoanRepayment
     * @example
     * // Get one TreasuryLoanRepayment
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreasuryLoanRepaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, TreasuryLoanRepaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TreasuryLoanRepayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentFindFirstArgs} args - Arguments to find a TreasuryLoanRepayment
     * @example
     * // Get one TreasuryLoanRepayment
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreasuryLoanRepaymentFindFirstArgs>(args?: SelectSubset<T, TreasuryLoanRepaymentFindFirstArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TreasuryLoanRepayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentFindFirstOrThrowArgs} args - Arguments to find a TreasuryLoanRepayment
     * @example
     * // Get one TreasuryLoanRepayment
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreasuryLoanRepaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, TreasuryLoanRepaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TreasuryLoanRepayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreasuryLoanRepayments
     * const treasuryLoanRepayments = await prisma.treasuryLoanRepayment.findMany()
     * 
     * // Get first 10 TreasuryLoanRepayments
     * const treasuryLoanRepayments = await prisma.treasuryLoanRepayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treasuryLoanRepaymentWithIdOnly = await prisma.treasuryLoanRepayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreasuryLoanRepaymentFindManyArgs>(args?: SelectSubset<T, TreasuryLoanRepaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TreasuryLoanRepayment.
     * @param {TreasuryLoanRepaymentCreateArgs} args - Arguments to create a TreasuryLoanRepayment.
     * @example
     * // Create one TreasuryLoanRepayment
     * const TreasuryLoanRepayment = await prisma.treasuryLoanRepayment.create({
     *   data: {
     *     // ... data to create a TreasuryLoanRepayment
     *   }
     * })
     * 
     */
    create<T extends TreasuryLoanRepaymentCreateArgs>(args: SelectSubset<T, TreasuryLoanRepaymentCreateArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TreasuryLoanRepayments.
     * @param {TreasuryLoanRepaymentCreateManyArgs} args - Arguments to create many TreasuryLoanRepayments.
     * @example
     * // Create many TreasuryLoanRepayments
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreasuryLoanRepaymentCreateManyArgs>(args?: SelectSubset<T, TreasuryLoanRepaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreasuryLoanRepayments and returns the data saved in the database.
     * @param {TreasuryLoanRepaymentCreateManyAndReturnArgs} args - Arguments to create many TreasuryLoanRepayments.
     * @example
     * // Create many TreasuryLoanRepayments
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreasuryLoanRepayments and only return the `id`
     * const treasuryLoanRepaymentWithIdOnly = await prisma.treasuryLoanRepayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreasuryLoanRepaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, TreasuryLoanRepaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TreasuryLoanRepayment.
     * @param {TreasuryLoanRepaymentDeleteArgs} args - Arguments to delete one TreasuryLoanRepayment.
     * @example
     * // Delete one TreasuryLoanRepayment
     * const TreasuryLoanRepayment = await prisma.treasuryLoanRepayment.delete({
     *   where: {
     *     // ... filter to delete one TreasuryLoanRepayment
     *   }
     * })
     * 
     */
    delete<T extends TreasuryLoanRepaymentDeleteArgs>(args: SelectSubset<T, TreasuryLoanRepaymentDeleteArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TreasuryLoanRepayment.
     * @param {TreasuryLoanRepaymentUpdateArgs} args - Arguments to update one TreasuryLoanRepayment.
     * @example
     * // Update one TreasuryLoanRepayment
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreasuryLoanRepaymentUpdateArgs>(args: SelectSubset<T, TreasuryLoanRepaymentUpdateArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TreasuryLoanRepayments.
     * @param {TreasuryLoanRepaymentDeleteManyArgs} args - Arguments to filter TreasuryLoanRepayments to delete.
     * @example
     * // Delete a few TreasuryLoanRepayments
     * const { count } = await prisma.treasuryLoanRepayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreasuryLoanRepaymentDeleteManyArgs>(args?: SelectSubset<T, TreasuryLoanRepaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreasuryLoanRepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreasuryLoanRepayments
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreasuryLoanRepaymentUpdateManyArgs>(args: SelectSubset<T, TreasuryLoanRepaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreasuryLoanRepayment.
     * @param {TreasuryLoanRepaymentUpsertArgs} args - Arguments to update or create a TreasuryLoanRepayment.
     * @example
     * // Update or create a TreasuryLoanRepayment
     * const treasuryLoanRepayment = await prisma.treasuryLoanRepayment.upsert({
     *   create: {
     *     // ... data to create a TreasuryLoanRepayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreasuryLoanRepayment we want to update
     *   }
     * })
     */
    upsert<T extends TreasuryLoanRepaymentUpsertArgs>(args: SelectSubset<T, TreasuryLoanRepaymentUpsertArgs<ExtArgs>>): Prisma__TreasuryLoanRepaymentClient<$Result.GetResult<Prisma.$TreasuryLoanRepaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TreasuryLoanRepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentCountArgs} args - Arguments to filter TreasuryLoanRepayments to count.
     * @example
     * // Count the number of TreasuryLoanRepayments
     * const count = await prisma.treasuryLoanRepayment.count({
     *   where: {
     *     // ... the filter for the TreasuryLoanRepayments we want to count
     *   }
     * })
    **/
    count<T extends TreasuryLoanRepaymentCountArgs>(
      args?: Subset<T, TreasuryLoanRepaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreasuryLoanRepaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreasuryLoanRepayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreasuryLoanRepaymentAggregateArgs>(args: Subset<T, TreasuryLoanRepaymentAggregateArgs>): Prisma.PrismaPromise<GetTreasuryLoanRepaymentAggregateType<T>>

    /**
     * Group by TreasuryLoanRepayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreasuryLoanRepaymentGroupByArgs} args - Group by arguments.
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
      T extends TreasuryLoanRepaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreasuryLoanRepaymentGroupByArgs['orderBy'] }
        : { orderBy?: TreasuryLoanRepaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreasuryLoanRepaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreasuryLoanRepaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreasuryLoanRepayment model
   */
  readonly fields: TreasuryLoanRepaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreasuryLoanRepayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreasuryLoanRepaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends TreasuryLoanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreasuryLoanDefaultArgs<ExtArgs>>): Prisma__TreasuryLoanClient<$Result.GetResult<Prisma.$TreasuryLoanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    method<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TreasuryLoanRepayment model
   */ 
  interface TreasuryLoanRepaymentFieldRefs {
    readonly id: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly tenantId: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly shopId: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly loanId: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly methodId: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly amount: FieldRef<"TreasuryLoanRepayment", 'Float'>
    readonly notes: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly createdBy: FieldRef<"TreasuryLoanRepayment", 'String'>
    readonly createdAt: FieldRef<"TreasuryLoanRepayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreasuryLoanRepayment findUnique
   */
  export type TreasuryLoanRepaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoanRepayment to fetch.
     */
    where: TreasuryLoanRepaymentWhereUniqueInput
  }

  /**
   * TreasuryLoanRepayment findUniqueOrThrow
   */
  export type TreasuryLoanRepaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoanRepayment to fetch.
     */
    where: TreasuryLoanRepaymentWhereUniqueInput
  }

  /**
   * TreasuryLoanRepayment findFirst
   */
  export type TreasuryLoanRepaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoanRepayment to fetch.
     */
    where?: TreasuryLoanRepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoanRepayments to fetch.
     */
    orderBy?: TreasuryLoanRepaymentOrderByWithRelationInput | TreasuryLoanRepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryLoanRepayments.
     */
    cursor?: TreasuryLoanRepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoanRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoanRepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryLoanRepayments.
     */
    distinct?: TreasuryLoanRepaymentScalarFieldEnum | TreasuryLoanRepaymentScalarFieldEnum[]
  }

  /**
   * TreasuryLoanRepayment findFirstOrThrow
   */
  export type TreasuryLoanRepaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoanRepayment to fetch.
     */
    where?: TreasuryLoanRepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoanRepayments to fetch.
     */
    orderBy?: TreasuryLoanRepaymentOrderByWithRelationInput | TreasuryLoanRepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreasuryLoanRepayments.
     */
    cursor?: TreasuryLoanRepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoanRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoanRepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreasuryLoanRepayments.
     */
    distinct?: TreasuryLoanRepaymentScalarFieldEnum | TreasuryLoanRepaymentScalarFieldEnum[]
  }

  /**
   * TreasuryLoanRepayment findMany
   */
  export type TreasuryLoanRepaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * Filter, which TreasuryLoanRepayments to fetch.
     */
    where?: TreasuryLoanRepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreasuryLoanRepayments to fetch.
     */
    orderBy?: TreasuryLoanRepaymentOrderByWithRelationInput | TreasuryLoanRepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreasuryLoanRepayments.
     */
    cursor?: TreasuryLoanRepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreasuryLoanRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreasuryLoanRepayments.
     */
    skip?: number
    distinct?: TreasuryLoanRepaymentScalarFieldEnum | TreasuryLoanRepaymentScalarFieldEnum[]
  }

  /**
   * TreasuryLoanRepayment create
   */
  export type TreasuryLoanRepaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a TreasuryLoanRepayment.
     */
    data: XOR<TreasuryLoanRepaymentCreateInput, TreasuryLoanRepaymentUncheckedCreateInput>
  }

  /**
   * TreasuryLoanRepayment createMany
   */
  export type TreasuryLoanRepaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreasuryLoanRepayments.
     */
    data: TreasuryLoanRepaymentCreateManyInput | TreasuryLoanRepaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreasuryLoanRepayment createManyAndReturn
   */
  export type TreasuryLoanRepaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TreasuryLoanRepayments.
     */
    data: TreasuryLoanRepaymentCreateManyInput | TreasuryLoanRepaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreasuryLoanRepayment update
   */
  export type TreasuryLoanRepaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a TreasuryLoanRepayment.
     */
    data: XOR<TreasuryLoanRepaymentUpdateInput, TreasuryLoanRepaymentUncheckedUpdateInput>
    /**
     * Choose, which TreasuryLoanRepayment to update.
     */
    where: TreasuryLoanRepaymentWhereUniqueInput
  }

  /**
   * TreasuryLoanRepayment updateMany
   */
  export type TreasuryLoanRepaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreasuryLoanRepayments.
     */
    data: XOR<TreasuryLoanRepaymentUpdateManyMutationInput, TreasuryLoanRepaymentUncheckedUpdateManyInput>
    /**
     * Filter which TreasuryLoanRepayments to update
     */
    where?: TreasuryLoanRepaymentWhereInput
  }

  /**
   * TreasuryLoanRepayment upsert
   */
  export type TreasuryLoanRepaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the TreasuryLoanRepayment to update in case it exists.
     */
    where: TreasuryLoanRepaymentWhereUniqueInput
    /**
     * In case the TreasuryLoanRepayment found by the `where` argument doesn't exist, create a new TreasuryLoanRepayment with this data.
     */
    create: XOR<TreasuryLoanRepaymentCreateInput, TreasuryLoanRepaymentUncheckedCreateInput>
    /**
     * In case the TreasuryLoanRepayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreasuryLoanRepaymentUpdateInput, TreasuryLoanRepaymentUncheckedUpdateInput>
  }

  /**
   * TreasuryLoanRepayment delete
   */
  export type TreasuryLoanRepaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
    /**
     * Filter which TreasuryLoanRepayment to delete.
     */
    where: TreasuryLoanRepaymentWhereUniqueInput
  }

  /**
   * TreasuryLoanRepayment deleteMany
   */
  export type TreasuryLoanRepaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreasuryLoanRepayments to delete
     */
    where?: TreasuryLoanRepaymentWhereInput
  }

  /**
   * TreasuryLoanRepayment without action
   */
  export type TreasuryLoanRepaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreasuryLoanRepayment
     */
    select?: TreasuryLoanRepaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreasuryLoanRepaymentInclude<ExtArgs> | null
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


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    name: 'name',
    type: 'type',
    accountNumber: 'accountNumber',
    bankName: 'bankName',
    balance: 'balance',
    currency: 'currency',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const TransferScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    fromMethodId: 'fromMethodId',
    toMethodId: 'toMethodId',
    amount: 'amount',
    reference: 'reference',
    status: 'status',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransferScalarFieldEnum = (typeof TransferScalarFieldEnum)[keyof typeof TransferScalarFieldEnum]


  export const PhysicalConfirmationScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    methodId: 'methodId',
    confirmedBy: 'confirmedBy',
    amount: 'amount',
    notes: 'notes',
    confirmedAt: 'confirmedAt'
  };

  export type PhysicalConfirmationScalarFieldEnum = (typeof PhysicalConfirmationScalarFieldEnum)[keyof typeof PhysicalConfirmationScalarFieldEnum]


  export const OperationalDepositScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    methodId: 'methodId',
    amount: 'amount',
    depositedBy: 'depositedBy',
    notes: 'notes',
    depositedAt: 'depositedAt'
  };

  export type OperationalDepositScalarFieldEnum = (typeof OperationalDepositScalarFieldEnum)[keyof typeof OperationalDepositScalarFieldEnum]


  export const ReconciliationScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    methodId: 'methodId',
    systemBalance: 'systemBalance',
    physicalBalance: 'physicalBalance',
    difference: 'difference',
    reconciledBy: 'reconciledBy',
    reconciledAt: 'reconciledAt',
    notes: 'notes'
  };

  export type ReconciliationScalarFieldEnum = (typeof ReconciliationScalarFieldEnum)[keyof typeof ReconciliationScalarFieldEnum]


  export const TreasuryLoanScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    direction: 'direction',
    counterparty: 'counterparty',
    principal: 'principal',
    outstanding: 'outstanding',
    methodId: 'methodId',
    status: 'status',
    notes: 'notes',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreasuryLoanScalarFieldEnum = (typeof TreasuryLoanScalarFieldEnum)[keyof typeof TreasuryLoanScalarFieldEnum]


  export const TreasuryLoanRepaymentScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    loanId: 'loanId',
    methodId: 'methodId',
    amount: 'amount',
    notes: 'notes',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type TreasuryLoanRepaymentScalarFieldEnum = (typeof TreasuryLoanRepaymentScalarFieldEnum)[keyof typeof TreasuryLoanRepaymentScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    tenantId?: StringFilter<"PaymentMethod"> | string
    shopId?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    accountNumber?: StringNullableFilter<"PaymentMethod"> | string | null
    bankName?: StringNullableFilter<"PaymentMethod"> | string | null
    balance?: FloatFilter<"PaymentMethod"> | number
    currency?: StringFilter<"PaymentMethod"> | string
    isActive?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    outgoingTransfers?: TransferListRelationFilter
    incomingTransfers?: TransferListRelationFilter
    confirmations?: PhysicalConfirmationListRelationFilter
    deposits?: OperationalDepositListRelationFilter
    reconciliations?: ReconciliationListRelationFilter
    loans?: TreasuryLoanListRelationFilter
    loanRepayments?: TreasuryLoanRepaymentListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    balance?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outgoingTransfers?: TransferOrderByRelationAggregateInput
    incomingTransfers?: TransferOrderByRelationAggregateInput
    confirmations?: PhysicalConfirmationOrderByRelationAggregateInput
    deposits?: OperationalDepositOrderByRelationAggregateInput
    reconciliations?: ReconciliationOrderByRelationAggregateInput
    loans?: TreasuryLoanOrderByRelationAggregateInput
    loanRepayments?: TreasuryLoanRepaymentOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    tenantId?: StringFilter<"PaymentMethod"> | string
    shopId?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    accountNumber?: StringNullableFilter<"PaymentMethod"> | string | null
    bankName?: StringNullableFilter<"PaymentMethod"> | string | null
    balance?: FloatFilter<"PaymentMethod"> | number
    currency?: StringFilter<"PaymentMethod"> | string
    isActive?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    outgoingTransfers?: TransferListRelationFilter
    incomingTransfers?: TransferListRelationFilter
    confirmations?: PhysicalConfirmationListRelationFilter
    deposits?: OperationalDepositListRelationFilter
    reconciliations?: ReconciliationListRelationFilter
    loans?: TreasuryLoanListRelationFilter
    loanRepayments?: TreasuryLoanRepaymentListRelationFilter
  }, "id">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    balance?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    tenantId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    shopId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    name?: StringWithAggregatesFilter<"PaymentMethod"> | string
    type?: StringWithAggregatesFilter<"PaymentMethod"> | string
    accountNumber?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    balance?: FloatWithAggregatesFilter<"PaymentMethod"> | number
    currency?: StringWithAggregatesFilter<"PaymentMethod"> | string
    isActive?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type TransferWhereInput = {
    AND?: TransferWhereInput | TransferWhereInput[]
    OR?: TransferWhereInput[]
    NOT?: TransferWhereInput | TransferWhereInput[]
    id?: StringFilter<"Transfer"> | string
    tenantId?: StringFilter<"Transfer"> | string
    shopId?: StringFilter<"Transfer"> | string
    fromMethodId?: StringFilter<"Transfer"> | string
    toMethodId?: StringFilter<"Transfer"> | string
    amount?: FloatFilter<"Transfer"> | number
    reference?: StringNullableFilter<"Transfer"> | string | null
    status?: StringFilter<"Transfer"> | string
    approvedBy?: StringNullableFilter<"Transfer"> | string | null
    approvedAt?: DateTimeNullableFilter<"Transfer"> | Date | string | null
    createdAt?: DateTimeFilter<"Transfer"> | Date | string
    updatedAt?: DateTimeFilter<"Transfer"> | Date | string
    fromMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    toMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }

  export type TransferOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    fromMethodId?: SortOrder
    toMethodId?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromMethod?: PaymentMethodOrderByWithRelationInput
    toMethod?: PaymentMethodOrderByWithRelationInput
  }

  export type TransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransferWhereInput | TransferWhereInput[]
    OR?: TransferWhereInput[]
    NOT?: TransferWhereInput | TransferWhereInput[]
    tenantId?: StringFilter<"Transfer"> | string
    shopId?: StringFilter<"Transfer"> | string
    fromMethodId?: StringFilter<"Transfer"> | string
    toMethodId?: StringFilter<"Transfer"> | string
    amount?: FloatFilter<"Transfer"> | number
    reference?: StringNullableFilter<"Transfer"> | string | null
    status?: StringFilter<"Transfer"> | string
    approvedBy?: StringNullableFilter<"Transfer"> | string | null
    approvedAt?: DateTimeNullableFilter<"Transfer"> | Date | string | null
    createdAt?: DateTimeFilter<"Transfer"> | Date | string
    updatedAt?: DateTimeFilter<"Transfer"> | Date | string
    fromMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    toMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }, "id">

  export type TransferOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    fromMethodId?: SortOrder
    toMethodId?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransferCountOrderByAggregateInput
    _avg?: TransferAvgOrderByAggregateInput
    _max?: TransferMaxOrderByAggregateInput
    _min?: TransferMinOrderByAggregateInput
    _sum?: TransferSumOrderByAggregateInput
  }

  export type TransferScalarWhereWithAggregatesInput = {
    AND?: TransferScalarWhereWithAggregatesInput | TransferScalarWhereWithAggregatesInput[]
    OR?: TransferScalarWhereWithAggregatesInput[]
    NOT?: TransferScalarWhereWithAggregatesInput | TransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transfer"> | string
    tenantId?: StringWithAggregatesFilter<"Transfer"> | string
    shopId?: StringWithAggregatesFilter<"Transfer"> | string
    fromMethodId?: StringWithAggregatesFilter<"Transfer"> | string
    toMethodId?: StringWithAggregatesFilter<"Transfer"> | string
    amount?: FloatWithAggregatesFilter<"Transfer"> | number
    reference?: StringNullableWithAggregatesFilter<"Transfer"> | string | null
    status?: StringWithAggregatesFilter<"Transfer"> | string
    approvedBy?: StringNullableWithAggregatesFilter<"Transfer"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Transfer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transfer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transfer"> | Date | string
  }

  export type PhysicalConfirmationWhereInput = {
    AND?: PhysicalConfirmationWhereInput | PhysicalConfirmationWhereInput[]
    OR?: PhysicalConfirmationWhereInput[]
    NOT?: PhysicalConfirmationWhereInput | PhysicalConfirmationWhereInput[]
    id?: StringFilter<"PhysicalConfirmation"> | string
    tenantId?: StringFilter<"PhysicalConfirmation"> | string
    shopId?: StringFilter<"PhysicalConfirmation"> | string
    methodId?: StringFilter<"PhysicalConfirmation"> | string
    confirmedBy?: StringFilter<"PhysicalConfirmation"> | string
    amount?: FloatFilter<"PhysicalConfirmation"> | number
    notes?: StringNullableFilter<"PhysicalConfirmation"> | string | null
    confirmedAt?: DateTimeFilter<"PhysicalConfirmation"> | Date | string
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }

  export type PhysicalConfirmationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    confirmedBy?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    confirmedAt?: SortOrder
    method?: PaymentMethodOrderByWithRelationInput
  }

  export type PhysicalConfirmationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhysicalConfirmationWhereInput | PhysicalConfirmationWhereInput[]
    OR?: PhysicalConfirmationWhereInput[]
    NOT?: PhysicalConfirmationWhereInput | PhysicalConfirmationWhereInput[]
    tenantId?: StringFilter<"PhysicalConfirmation"> | string
    shopId?: StringFilter<"PhysicalConfirmation"> | string
    methodId?: StringFilter<"PhysicalConfirmation"> | string
    confirmedBy?: StringFilter<"PhysicalConfirmation"> | string
    amount?: FloatFilter<"PhysicalConfirmation"> | number
    notes?: StringNullableFilter<"PhysicalConfirmation"> | string | null
    confirmedAt?: DateTimeFilter<"PhysicalConfirmation"> | Date | string
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }, "id">

  export type PhysicalConfirmationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    confirmedBy?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    confirmedAt?: SortOrder
    _count?: PhysicalConfirmationCountOrderByAggregateInput
    _avg?: PhysicalConfirmationAvgOrderByAggregateInput
    _max?: PhysicalConfirmationMaxOrderByAggregateInput
    _min?: PhysicalConfirmationMinOrderByAggregateInput
    _sum?: PhysicalConfirmationSumOrderByAggregateInput
  }

  export type PhysicalConfirmationScalarWhereWithAggregatesInput = {
    AND?: PhysicalConfirmationScalarWhereWithAggregatesInput | PhysicalConfirmationScalarWhereWithAggregatesInput[]
    OR?: PhysicalConfirmationScalarWhereWithAggregatesInput[]
    NOT?: PhysicalConfirmationScalarWhereWithAggregatesInput | PhysicalConfirmationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhysicalConfirmation"> | string
    tenantId?: StringWithAggregatesFilter<"PhysicalConfirmation"> | string
    shopId?: StringWithAggregatesFilter<"PhysicalConfirmation"> | string
    methodId?: StringWithAggregatesFilter<"PhysicalConfirmation"> | string
    confirmedBy?: StringWithAggregatesFilter<"PhysicalConfirmation"> | string
    amount?: FloatWithAggregatesFilter<"PhysicalConfirmation"> | number
    notes?: StringNullableWithAggregatesFilter<"PhysicalConfirmation"> | string | null
    confirmedAt?: DateTimeWithAggregatesFilter<"PhysicalConfirmation"> | Date | string
  }

  export type OperationalDepositWhereInput = {
    AND?: OperationalDepositWhereInput | OperationalDepositWhereInput[]
    OR?: OperationalDepositWhereInput[]
    NOT?: OperationalDepositWhereInput | OperationalDepositWhereInput[]
    id?: StringFilter<"OperationalDeposit"> | string
    tenantId?: StringFilter<"OperationalDeposit"> | string
    shopId?: StringFilter<"OperationalDeposit"> | string
    methodId?: StringFilter<"OperationalDeposit"> | string
    amount?: FloatFilter<"OperationalDeposit"> | number
    depositedBy?: StringFilter<"OperationalDeposit"> | string
    notes?: StringNullableFilter<"OperationalDeposit"> | string | null
    depositedAt?: DateTimeFilter<"OperationalDeposit"> | Date | string
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }

  export type OperationalDepositOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    depositedBy?: SortOrder
    notes?: SortOrderInput | SortOrder
    depositedAt?: SortOrder
    method?: PaymentMethodOrderByWithRelationInput
  }

  export type OperationalDepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperationalDepositWhereInput | OperationalDepositWhereInput[]
    OR?: OperationalDepositWhereInput[]
    NOT?: OperationalDepositWhereInput | OperationalDepositWhereInput[]
    tenantId?: StringFilter<"OperationalDeposit"> | string
    shopId?: StringFilter<"OperationalDeposit"> | string
    methodId?: StringFilter<"OperationalDeposit"> | string
    amount?: FloatFilter<"OperationalDeposit"> | number
    depositedBy?: StringFilter<"OperationalDeposit"> | string
    notes?: StringNullableFilter<"OperationalDeposit"> | string | null
    depositedAt?: DateTimeFilter<"OperationalDeposit"> | Date | string
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }, "id">

  export type OperationalDepositOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    depositedBy?: SortOrder
    notes?: SortOrderInput | SortOrder
    depositedAt?: SortOrder
    _count?: OperationalDepositCountOrderByAggregateInput
    _avg?: OperationalDepositAvgOrderByAggregateInput
    _max?: OperationalDepositMaxOrderByAggregateInput
    _min?: OperationalDepositMinOrderByAggregateInput
    _sum?: OperationalDepositSumOrderByAggregateInput
  }

  export type OperationalDepositScalarWhereWithAggregatesInput = {
    AND?: OperationalDepositScalarWhereWithAggregatesInput | OperationalDepositScalarWhereWithAggregatesInput[]
    OR?: OperationalDepositScalarWhereWithAggregatesInput[]
    NOT?: OperationalDepositScalarWhereWithAggregatesInput | OperationalDepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OperationalDeposit"> | string
    tenantId?: StringWithAggregatesFilter<"OperationalDeposit"> | string
    shopId?: StringWithAggregatesFilter<"OperationalDeposit"> | string
    methodId?: StringWithAggregatesFilter<"OperationalDeposit"> | string
    amount?: FloatWithAggregatesFilter<"OperationalDeposit"> | number
    depositedBy?: StringWithAggregatesFilter<"OperationalDeposit"> | string
    notes?: StringNullableWithAggregatesFilter<"OperationalDeposit"> | string | null
    depositedAt?: DateTimeWithAggregatesFilter<"OperationalDeposit"> | Date | string
  }

  export type ReconciliationWhereInput = {
    AND?: ReconciliationWhereInput | ReconciliationWhereInput[]
    OR?: ReconciliationWhereInput[]
    NOT?: ReconciliationWhereInput | ReconciliationWhereInput[]
    id?: StringFilter<"Reconciliation"> | string
    tenantId?: StringFilter<"Reconciliation"> | string
    shopId?: StringFilter<"Reconciliation"> | string
    methodId?: StringFilter<"Reconciliation"> | string
    systemBalance?: FloatFilter<"Reconciliation"> | number
    physicalBalance?: FloatFilter<"Reconciliation"> | number
    difference?: FloatFilter<"Reconciliation"> | number
    reconciledBy?: StringFilter<"Reconciliation"> | string
    reconciledAt?: DateTimeFilter<"Reconciliation"> | Date | string
    notes?: StringNullableFilter<"Reconciliation"> | string | null
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }

  export type ReconciliationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
    reconciledBy?: SortOrder
    reconciledAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    method?: PaymentMethodOrderByWithRelationInput
  }

  export type ReconciliationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReconciliationWhereInput | ReconciliationWhereInput[]
    OR?: ReconciliationWhereInput[]
    NOT?: ReconciliationWhereInput | ReconciliationWhereInput[]
    tenantId?: StringFilter<"Reconciliation"> | string
    shopId?: StringFilter<"Reconciliation"> | string
    methodId?: StringFilter<"Reconciliation"> | string
    systemBalance?: FloatFilter<"Reconciliation"> | number
    physicalBalance?: FloatFilter<"Reconciliation"> | number
    difference?: FloatFilter<"Reconciliation"> | number
    reconciledBy?: StringFilter<"Reconciliation"> | string
    reconciledAt?: DateTimeFilter<"Reconciliation"> | Date | string
    notes?: StringNullableFilter<"Reconciliation"> | string | null
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }, "id">

  export type ReconciliationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
    reconciledBy?: SortOrder
    reconciledAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ReconciliationCountOrderByAggregateInput
    _avg?: ReconciliationAvgOrderByAggregateInput
    _max?: ReconciliationMaxOrderByAggregateInput
    _min?: ReconciliationMinOrderByAggregateInput
    _sum?: ReconciliationSumOrderByAggregateInput
  }

  export type ReconciliationScalarWhereWithAggregatesInput = {
    AND?: ReconciliationScalarWhereWithAggregatesInput | ReconciliationScalarWhereWithAggregatesInput[]
    OR?: ReconciliationScalarWhereWithAggregatesInput[]
    NOT?: ReconciliationScalarWhereWithAggregatesInput | ReconciliationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reconciliation"> | string
    tenantId?: StringWithAggregatesFilter<"Reconciliation"> | string
    shopId?: StringWithAggregatesFilter<"Reconciliation"> | string
    methodId?: StringWithAggregatesFilter<"Reconciliation"> | string
    systemBalance?: FloatWithAggregatesFilter<"Reconciliation"> | number
    physicalBalance?: FloatWithAggregatesFilter<"Reconciliation"> | number
    difference?: FloatWithAggregatesFilter<"Reconciliation"> | number
    reconciledBy?: StringWithAggregatesFilter<"Reconciliation"> | string
    reconciledAt?: DateTimeWithAggregatesFilter<"Reconciliation"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Reconciliation"> | string | null
  }

  export type TreasuryLoanWhereInput = {
    AND?: TreasuryLoanWhereInput | TreasuryLoanWhereInput[]
    OR?: TreasuryLoanWhereInput[]
    NOT?: TreasuryLoanWhereInput | TreasuryLoanWhereInput[]
    id?: StringFilter<"TreasuryLoan"> | string
    tenantId?: StringFilter<"TreasuryLoan"> | string
    shopId?: StringFilter<"TreasuryLoan"> | string
    direction?: StringFilter<"TreasuryLoan"> | string
    counterparty?: StringFilter<"TreasuryLoan"> | string
    principal?: FloatFilter<"TreasuryLoan"> | number
    outstanding?: FloatFilter<"TreasuryLoan"> | number
    methodId?: StringFilter<"TreasuryLoan"> | string
    status?: StringFilter<"TreasuryLoan"> | string
    notes?: StringNullableFilter<"TreasuryLoan"> | string | null
    createdBy?: StringNullableFilter<"TreasuryLoan"> | string | null
    createdAt?: DateTimeFilter<"TreasuryLoan"> | Date | string
    updatedAt?: DateTimeFilter<"TreasuryLoan"> | Date | string
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    repayments?: TreasuryLoanRepaymentListRelationFilter
  }

  export type TreasuryLoanOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    direction?: SortOrder
    counterparty?: SortOrder
    principal?: SortOrder
    outstanding?: SortOrder
    methodId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    method?: PaymentMethodOrderByWithRelationInput
    repayments?: TreasuryLoanRepaymentOrderByRelationAggregateInput
  }

  export type TreasuryLoanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreasuryLoanWhereInput | TreasuryLoanWhereInput[]
    OR?: TreasuryLoanWhereInput[]
    NOT?: TreasuryLoanWhereInput | TreasuryLoanWhereInput[]
    tenantId?: StringFilter<"TreasuryLoan"> | string
    shopId?: StringFilter<"TreasuryLoan"> | string
    direction?: StringFilter<"TreasuryLoan"> | string
    counterparty?: StringFilter<"TreasuryLoan"> | string
    principal?: FloatFilter<"TreasuryLoan"> | number
    outstanding?: FloatFilter<"TreasuryLoan"> | number
    methodId?: StringFilter<"TreasuryLoan"> | string
    status?: StringFilter<"TreasuryLoan"> | string
    notes?: StringNullableFilter<"TreasuryLoan"> | string | null
    createdBy?: StringNullableFilter<"TreasuryLoan"> | string | null
    createdAt?: DateTimeFilter<"TreasuryLoan"> | Date | string
    updatedAt?: DateTimeFilter<"TreasuryLoan"> | Date | string
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
    repayments?: TreasuryLoanRepaymentListRelationFilter
  }, "id">

  export type TreasuryLoanOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    direction?: SortOrder
    counterparty?: SortOrder
    principal?: SortOrder
    outstanding?: SortOrder
    methodId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreasuryLoanCountOrderByAggregateInput
    _avg?: TreasuryLoanAvgOrderByAggregateInput
    _max?: TreasuryLoanMaxOrderByAggregateInput
    _min?: TreasuryLoanMinOrderByAggregateInput
    _sum?: TreasuryLoanSumOrderByAggregateInput
  }

  export type TreasuryLoanScalarWhereWithAggregatesInput = {
    AND?: TreasuryLoanScalarWhereWithAggregatesInput | TreasuryLoanScalarWhereWithAggregatesInput[]
    OR?: TreasuryLoanScalarWhereWithAggregatesInput[]
    NOT?: TreasuryLoanScalarWhereWithAggregatesInput | TreasuryLoanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    tenantId?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    shopId?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    direction?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    counterparty?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    principal?: FloatWithAggregatesFilter<"TreasuryLoan"> | number
    outstanding?: FloatWithAggregatesFilter<"TreasuryLoan"> | number
    methodId?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    status?: StringWithAggregatesFilter<"TreasuryLoan"> | string
    notes?: StringNullableWithAggregatesFilter<"TreasuryLoan"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"TreasuryLoan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TreasuryLoan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TreasuryLoan"> | Date | string
  }

  export type TreasuryLoanRepaymentWhereInput = {
    AND?: TreasuryLoanRepaymentWhereInput | TreasuryLoanRepaymentWhereInput[]
    OR?: TreasuryLoanRepaymentWhereInput[]
    NOT?: TreasuryLoanRepaymentWhereInput | TreasuryLoanRepaymentWhereInput[]
    id?: StringFilter<"TreasuryLoanRepayment"> | string
    tenantId?: StringFilter<"TreasuryLoanRepayment"> | string
    shopId?: StringFilter<"TreasuryLoanRepayment"> | string
    loanId?: StringFilter<"TreasuryLoanRepayment"> | string
    methodId?: StringFilter<"TreasuryLoanRepayment"> | string
    amount?: FloatFilter<"TreasuryLoanRepayment"> | number
    notes?: StringNullableFilter<"TreasuryLoanRepayment"> | string | null
    createdBy?: StringNullableFilter<"TreasuryLoanRepayment"> | string | null
    createdAt?: DateTimeFilter<"TreasuryLoanRepayment"> | Date | string
    loan?: XOR<TreasuryLoanRelationFilter, TreasuryLoanWhereInput>
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }

  export type TreasuryLoanRepaymentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    loanId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    loan?: TreasuryLoanOrderByWithRelationInput
    method?: PaymentMethodOrderByWithRelationInput
  }

  export type TreasuryLoanRepaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreasuryLoanRepaymentWhereInput | TreasuryLoanRepaymentWhereInput[]
    OR?: TreasuryLoanRepaymentWhereInput[]
    NOT?: TreasuryLoanRepaymentWhereInput | TreasuryLoanRepaymentWhereInput[]
    tenantId?: StringFilter<"TreasuryLoanRepayment"> | string
    shopId?: StringFilter<"TreasuryLoanRepayment"> | string
    loanId?: StringFilter<"TreasuryLoanRepayment"> | string
    methodId?: StringFilter<"TreasuryLoanRepayment"> | string
    amount?: FloatFilter<"TreasuryLoanRepayment"> | number
    notes?: StringNullableFilter<"TreasuryLoanRepayment"> | string | null
    createdBy?: StringNullableFilter<"TreasuryLoanRepayment"> | string | null
    createdAt?: DateTimeFilter<"TreasuryLoanRepayment"> | Date | string
    loan?: XOR<TreasuryLoanRelationFilter, TreasuryLoanWhereInput>
    method?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput>
  }, "id">

  export type TreasuryLoanRepaymentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    loanId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TreasuryLoanRepaymentCountOrderByAggregateInput
    _avg?: TreasuryLoanRepaymentAvgOrderByAggregateInput
    _max?: TreasuryLoanRepaymentMaxOrderByAggregateInput
    _min?: TreasuryLoanRepaymentMinOrderByAggregateInput
    _sum?: TreasuryLoanRepaymentSumOrderByAggregateInput
  }

  export type TreasuryLoanRepaymentScalarWhereWithAggregatesInput = {
    AND?: TreasuryLoanRepaymentScalarWhereWithAggregatesInput | TreasuryLoanRepaymentScalarWhereWithAggregatesInput[]
    OR?: TreasuryLoanRepaymentScalarWhereWithAggregatesInput[]
    NOT?: TreasuryLoanRepaymentScalarWhereWithAggregatesInput | TreasuryLoanRepaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreasuryLoanRepayment"> | string
    tenantId?: StringWithAggregatesFilter<"TreasuryLoanRepayment"> | string
    shopId?: StringWithAggregatesFilter<"TreasuryLoanRepayment"> | string
    loanId?: StringWithAggregatesFilter<"TreasuryLoanRepayment"> | string
    methodId?: StringWithAggregatesFilter<"TreasuryLoanRepayment"> | string
    amount?: FloatWithAggregatesFilter<"TreasuryLoanRepayment"> | number
    notes?: StringNullableWithAggregatesFilter<"TreasuryLoanRepayment"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"TreasuryLoanRepayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TreasuryLoanRepayment"> | Date | string
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

  export type PaymentMethodCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMethod: PaymentMethodCreateNestedOneWithoutOutgoingTransfersInput
    toMethod: PaymentMethodCreateNestedOneWithoutIncomingTransfersInput
  }

  export type TransferUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    fromMethodId: string
    toMethodId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMethod?: PaymentMethodUpdateOneRequiredWithoutOutgoingTransfersNestedInput
    toMethod?: PaymentMethodUpdateOneRequiredWithoutIncomingTransfersNestedInput
  }

  export type TransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    fromMethodId?: StringFieldUpdateOperationsInput | string
    toMethodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    fromMethodId: string
    toMethodId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    fromMethodId?: StringFieldUpdateOperationsInput | string
    toMethodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalConfirmationCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    confirmedBy: string
    amount: number
    notes?: string | null
    confirmedAt?: Date | string
    method: PaymentMethodCreateNestedOneWithoutConfirmationsInput
  }

  export type PhysicalConfirmationUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    confirmedBy: string
    amount: number
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type PhysicalConfirmationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: PaymentMethodUpdateOneRequiredWithoutConfirmationsNestedInput
  }

  export type PhysicalConfirmationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalConfirmationCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    confirmedBy: string
    amount: number
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type PhysicalConfirmationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalConfirmationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationalDepositCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    depositedBy: string
    notes?: string | null
    depositedAt?: Date | string
    method: PaymentMethodCreateNestedOneWithoutDepositsInput
  }

  export type OperationalDepositUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    amount: number
    depositedBy: string
    notes?: string | null
    depositedAt?: Date | string
  }

  export type OperationalDepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: PaymentMethodUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type OperationalDepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationalDepositCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    amount: number
    depositedBy: string
    notes?: string | null
    depositedAt?: Date | string
  }

  export type OperationalDepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationalDepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt?: Date | string
    notes?: string | null
    method: PaymentMethodCreateNestedOneWithoutReconciliationsInput
  }

  export type ReconciliationUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt?: Date | string
    notes?: string | null
  }

  export type ReconciliationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    method?: PaymentMethodUpdateOneRequiredWithoutReconciliationsNestedInput
  }

  export type ReconciliationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReconciliationCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt?: Date | string
    notes?: string | null
  }

  export type ReconciliationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReconciliationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TreasuryLoanCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    method: PaymentMethodCreateNestedOneWithoutLoansInput
    repayments?: TreasuryLoanRepaymentCreateNestedManyWithoutLoanInput
  }

  export type TreasuryLoanUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    methodId: string
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type TreasuryLoanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: PaymentMethodUpdateOneRequiredWithoutLoansNestedInput
    repayments?: TreasuryLoanRepaymentUpdateManyWithoutLoanNestedInput
  }

  export type TreasuryLoanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    methodId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type TreasuryLoanCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    methodId: string
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreasuryLoanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    methodId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    loan: TreasuryLoanCreateNestedOneWithoutRepaymentsInput
    method: PaymentMethodCreateNestedOneWithoutLoanRepaymentsInput
  }

  export type TreasuryLoanRepaymentUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    loanId: string
    methodId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryLoanRepaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: TreasuryLoanUpdateOneRequiredWithoutRepaymentsNestedInput
    method?: PaymentMethodUpdateOneRequiredWithoutLoanRepaymentsNestedInput
  }

  export type TreasuryLoanRepaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    loanId: string
    methodId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryLoanRepaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TransferListRelationFilter = {
    every?: TransferWhereInput
    some?: TransferWhereInput
    none?: TransferWhereInput
  }

  export type PhysicalConfirmationListRelationFilter = {
    every?: PhysicalConfirmationWhereInput
    some?: PhysicalConfirmationWhereInput
    none?: PhysicalConfirmationWhereInput
  }

  export type OperationalDepositListRelationFilter = {
    every?: OperationalDepositWhereInput
    some?: OperationalDepositWhereInput
    none?: OperationalDepositWhereInput
  }

  export type ReconciliationListRelationFilter = {
    every?: ReconciliationWhereInput
    some?: ReconciliationWhereInput
    none?: ReconciliationWhereInput
  }

  export type TreasuryLoanListRelationFilter = {
    every?: TreasuryLoanWhereInput
    some?: TreasuryLoanWhereInput
    none?: TreasuryLoanWhereInput
  }

  export type TreasuryLoanRepaymentListRelationFilter = {
    every?: TreasuryLoanRepaymentWhereInput
    some?: TreasuryLoanRepaymentWhereInput
    none?: TreasuryLoanRepaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhysicalConfirmationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperationalDepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReconciliationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreasuryLoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreasuryLoanRepaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PaymentMethodRelationFilter = {
    is?: PaymentMethodWhereInput
    isNot?: PaymentMethodWhereInput
  }

  export type TransferCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    fromMethodId?: SortOrder
    toMethodId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransferMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    fromMethodId?: SortOrder
    toMethodId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    fromMethodId?: SortOrder
    toMethodId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type PhysicalConfirmationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    confirmedBy?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
  }

  export type PhysicalConfirmationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PhysicalConfirmationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    confirmedBy?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
  }

  export type PhysicalConfirmationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    confirmedBy?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
  }

  export type PhysicalConfirmationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OperationalDepositCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    depositedBy?: SortOrder
    notes?: SortOrder
    depositedAt?: SortOrder
  }

  export type OperationalDepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OperationalDepositMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    depositedBy?: SortOrder
    notes?: SortOrder
    depositedAt?: SortOrder
  }

  export type OperationalDepositMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    depositedBy?: SortOrder
    notes?: SortOrder
    depositedAt?: SortOrder
  }

  export type OperationalDepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ReconciliationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
    reconciledBy?: SortOrder
    reconciledAt?: SortOrder
    notes?: SortOrder
  }

  export type ReconciliationAvgOrderByAggregateInput = {
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
  }

  export type ReconciliationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
    reconciledBy?: SortOrder
    reconciledAt?: SortOrder
    notes?: SortOrder
  }

  export type ReconciliationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    methodId?: SortOrder
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
    reconciledBy?: SortOrder
    reconciledAt?: SortOrder
    notes?: SortOrder
  }

  export type ReconciliationSumOrderByAggregateInput = {
    systemBalance?: SortOrder
    physicalBalance?: SortOrder
    difference?: SortOrder
  }

  export type TreasuryLoanCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    direction?: SortOrder
    counterparty?: SortOrder
    principal?: SortOrder
    outstanding?: SortOrder
    methodId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryLoanAvgOrderByAggregateInput = {
    principal?: SortOrder
    outstanding?: SortOrder
  }

  export type TreasuryLoanMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    direction?: SortOrder
    counterparty?: SortOrder
    principal?: SortOrder
    outstanding?: SortOrder
    methodId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryLoanMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    direction?: SortOrder
    counterparty?: SortOrder
    principal?: SortOrder
    outstanding?: SortOrder
    methodId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreasuryLoanSumOrderByAggregateInput = {
    principal?: SortOrder
    outstanding?: SortOrder
  }

  export type TreasuryLoanRelationFilter = {
    is?: TreasuryLoanWhereInput
    isNot?: TreasuryLoanWhereInput
  }

  export type TreasuryLoanRepaymentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    loanId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryLoanRepaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TreasuryLoanRepaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    loanId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryLoanRepaymentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    loanId?: SortOrder
    methodId?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TreasuryLoanRepaymentSumOrderByAggregateInput = {
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

  export type TransferCreateNestedManyWithoutFromMethodInput = {
    create?: XOR<TransferCreateWithoutFromMethodInput, TransferUncheckedCreateWithoutFromMethodInput> | TransferCreateWithoutFromMethodInput[] | TransferUncheckedCreateWithoutFromMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromMethodInput | TransferCreateOrConnectWithoutFromMethodInput[]
    createMany?: TransferCreateManyFromMethodInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferCreateNestedManyWithoutToMethodInput = {
    create?: XOR<TransferCreateWithoutToMethodInput, TransferUncheckedCreateWithoutToMethodInput> | TransferCreateWithoutToMethodInput[] | TransferUncheckedCreateWithoutToMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToMethodInput | TransferCreateOrConnectWithoutToMethodInput[]
    createMany?: TransferCreateManyToMethodInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type PhysicalConfirmationCreateNestedManyWithoutMethodInput = {
    create?: XOR<PhysicalConfirmationCreateWithoutMethodInput, PhysicalConfirmationUncheckedCreateWithoutMethodInput> | PhysicalConfirmationCreateWithoutMethodInput[] | PhysicalConfirmationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: PhysicalConfirmationCreateOrConnectWithoutMethodInput | PhysicalConfirmationCreateOrConnectWithoutMethodInput[]
    createMany?: PhysicalConfirmationCreateManyMethodInputEnvelope
    connect?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
  }

  export type OperationalDepositCreateNestedManyWithoutMethodInput = {
    create?: XOR<OperationalDepositCreateWithoutMethodInput, OperationalDepositUncheckedCreateWithoutMethodInput> | OperationalDepositCreateWithoutMethodInput[] | OperationalDepositUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: OperationalDepositCreateOrConnectWithoutMethodInput | OperationalDepositCreateOrConnectWithoutMethodInput[]
    createMany?: OperationalDepositCreateManyMethodInputEnvelope
    connect?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
  }

  export type ReconciliationCreateNestedManyWithoutMethodInput = {
    create?: XOR<ReconciliationCreateWithoutMethodInput, ReconciliationUncheckedCreateWithoutMethodInput> | ReconciliationCreateWithoutMethodInput[] | ReconciliationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: ReconciliationCreateOrConnectWithoutMethodInput | ReconciliationCreateOrConnectWithoutMethodInput[]
    createMany?: ReconciliationCreateManyMethodInputEnvelope
    connect?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
  }

  export type TreasuryLoanCreateNestedManyWithoutMethodInput = {
    create?: XOR<TreasuryLoanCreateWithoutMethodInput, TreasuryLoanUncheckedCreateWithoutMethodInput> | TreasuryLoanCreateWithoutMethodInput[] | TreasuryLoanUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanCreateOrConnectWithoutMethodInput | TreasuryLoanCreateOrConnectWithoutMethodInput[]
    createMany?: TreasuryLoanCreateManyMethodInputEnvelope
    connect?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
  }

  export type TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutMethodInput, TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput> | TreasuryLoanRepaymentCreateWithoutMethodInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput | TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput[]
    createMany?: TreasuryLoanRepaymentCreateManyMethodInputEnvelope
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutFromMethodInput = {
    create?: XOR<TransferCreateWithoutFromMethodInput, TransferUncheckedCreateWithoutFromMethodInput> | TransferCreateWithoutFromMethodInput[] | TransferUncheckedCreateWithoutFromMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromMethodInput | TransferCreateOrConnectWithoutFromMethodInput[]
    createMany?: TransferCreateManyFromMethodInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutToMethodInput = {
    create?: XOR<TransferCreateWithoutToMethodInput, TransferUncheckedCreateWithoutToMethodInput> | TransferCreateWithoutToMethodInput[] | TransferUncheckedCreateWithoutToMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToMethodInput | TransferCreateOrConnectWithoutToMethodInput[]
    createMany?: TransferCreateManyToMethodInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput = {
    create?: XOR<PhysicalConfirmationCreateWithoutMethodInput, PhysicalConfirmationUncheckedCreateWithoutMethodInput> | PhysicalConfirmationCreateWithoutMethodInput[] | PhysicalConfirmationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: PhysicalConfirmationCreateOrConnectWithoutMethodInput | PhysicalConfirmationCreateOrConnectWithoutMethodInput[]
    createMany?: PhysicalConfirmationCreateManyMethodInputEnvelope
    connect?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
  }

  export type OperationalDepositUncheckedCreateNestedManyWithoutMethodInput = {
    create?: XOR<OperationalDepositCreateWithoutMethodInput, OperationalDepositUncheckedCreateWithoutMethodInput> | OperationalDepositCreateWithoutMethodInput[] | OperationalDepositUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: OperationalDepositCreateOrConnectWithoutMethodInput | OperationalDepositCreateOrConnectWithoutMethodInput[]
    createMany?: OperationalDepositCreateManyMethodInputEnvelope
    connect?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
  }

  export type ReconciliationUncheckedCreateNestedManyWithoutMethodInput = {
    create?: XOR<ReconciliationCreateWithoutMethodInput, ReconciliationUncheckedCreateWithoutMethodInput> | ReconciliationCreateWithoutMethodInput[] | ReconciliationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: ReconciliationCreateOrConnectWithoutMethodInput | ReconciliationCreateOrConnectWithoutMethodInput[]
    createMany?: ReconciliationCreateManyMethodInputEnvelope
    connect?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
  }

  export type TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput = {
    create?: XOR<TreasuryLoanCreateWithoutMethodInput, TreasuryLoanUncheckedCreateWithoutMethodInput> | TreasuryLoanCreateWithoutMethodInput[] | TreasuryLoanUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanCreateOrConnectWithoutMethodInput | TreasuryLoanCreateOrConnectWithoutMethodInput[]
    createMany?: TreasuryLoanCreateManyMethodInputEnvelope
    connect?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
  }

  export type TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutMethodInput, TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput> | TreasuryLoanRepaymentCreateWithoutMethodInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput | TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput[]
    createMany?: TreasuryLoanRepaymentCreateManyMethodInputEnvelope
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransferUpdateManyWithoutFromMethodNestedInput = {
    create?: XOR<TransferCreateWithoutFromMethodInput, TransferUncheckedCreateWithoutFromMethodInput> | TransferCreateWithoutFromMethodInput[] | TransferUncheckedCreateWithoutFromMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromMethodInput | TransferCreateOrConnectWithoutFromMethodInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutFromMethodInput | TransferUpsertWithWhereUniqueWithoutFromMethodInput[]
    createMany?: TransferCreateManyFromMethodInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutFromMethodInput | TransferUpdateWithWhereUniqueWithoutFromMethodInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutFromMethodInput | TransferUpdateManyWithWhereWithoutFromMethodInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUpdateManyWithoutToMethodNestedInput = {
    create?: XOR<TransferCreateWithoutToMethodInput, TransferUncheckedCreateWithoutToMethodInput> | TransferCreateWithoutToMethodInput[] | TransferUncheckedCreateWithoutToMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToMethodInput | TransferCreateOrConnectWithoutToMethodInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutToMethodInput | TransferUpsertWithWhereUniqueWithoutToMethodInput[]
    createMany?: TransferCreateManyToMethodInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutToMethodInput | TransferUpdateWithWhereUniqueWithoutToMethodInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutToMethodInput | TransferUpdateManyWithWhereWithoutToMethodInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type PhysicalConfirmationUpdateManyWithoutMethodNestedInput = {
    create?: XOR<PhysicalConfirmationCreateWithoutMethodInput, PhysicalConfirmationUncheckedCreateWithoutMethodInput> | PhysicalConfirmationCreateWithoutMethodInput[] | PhysicalConfirmationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: PhysicalConfirmationCreateOrConnectWithoutMethodInput | PhysicalConfirmationCreateOrConnectWithoutMethodInput[]
    upsert?: PhysicalConfirmationUpsertWithWhereUniqueWithoutMethodInput | PhysicalConfirmationUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: PhysicalConfirmationCreateManyMethodInputEnvelope
    set?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    disconnect?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    delete?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    connect?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    update?: PhysicalConfirmationUpdateWithWhereUniqueWithoutMethodInput | PhysicalConfirmationUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: PhysicalConfirmationUpdateManyWithWhereWithoutMethodInput | PhysicalConfirmationUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: PhysicalConfirmationScalarWhereInput | PhysicalConfirmationScalarWhereInput[]
  }

  export type OperationalDepositUpdateManyWithoutMethodNestedInput = {
    create?: XOR<OperationalDepositCreateWithoutMethodInput, OperationalDepositUncheckedCreateWithoutMethodInput> | OperationalDepositCreateWithoutMethodInput[] | OperationalDepositUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: OperationalDepositCreateOrConnectWithoutMethodInput | OperationalDepositCreateOrConnectWithoutMethodInput[]
    upsert?: OperationalDepositUpsertWithWhereUniqueWithoutMethodInput | OperationalDepositUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: OperationalDepositCreateManyMethodInputEnvelope
    set?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    disconnect?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    delete?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    connect?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    update?: OperationalDepositUpdateWithWhereUniqueWithoutMethodInput | OperationalDepositUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: OperationalDepositUpdateManyWithWhereWithoutMethodInput | OperationalDepositUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: OperationalDepositScalarWhereInput | OperationalDepositScalarWhereInput[]
  }

  export type ReconciliationUpdateManyWithoutMethodNestedInput = {
    create?: XOR<ReconciliationCreateWithoutMethodInput, ReconciliationUncheckedCreateWithoutMethodInput> | ReconciliationCreateWithoutMethodInput[] | ReconciliationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: ReconciliationCreateOrConnectWithoutMethodInput | ReconciliationCreateOrConnectWithoutMethodInput[]
    upsert?: ReconciliationUpsertWithWhereUniqueWithoutMethodInput | ReconciliationUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: ReconciliationCreateManyMethodInputEnvelope
    set?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    disconnect?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    delete?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    connect?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    update?: ReconciliationUpdateWithWhereUniqueWithoutMethodInput | ReconciliationUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: ReconciliationUpdateManyWithWhereWithoutMethodInput | ReconciliationUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: ReconciliationScalarWhereInput | ReconciliationScalarWhereInput[]
  }

  export type TreasuryLoanUpdateManyWithoutMethodNestedInput = {
    create?: XOR<TreasuryLoanCreateWithoutMethodInput, TreasuryLoanUncheckedCreateWithoutMethodInput> | TreasuryLoanCreateWithoutMethodInput[] | TreasuryLoanUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanCreateOrConnectWithoutMethodInput | TreasuryLoanCreateOrConnectWithoutMethodInput[]
    upsert?: TreasuryLoanUpsertWithWhereUniqueWithoutMethodInput | TreasuryLoanUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: TreasuryLoanCreateManyMethodInputEnvelope
    set?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    disconnect?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    delete?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    connect?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    update?: TreasuryLoanUpdateWithWhereUniqueWithoutMethodInput | TreasuryLoanUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: TreasuryLoanUpdateManyWithWhereWithoutMethodInput | TreasuryLoanUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: TreasuryLoanScalarWhereInput | TreasuryLoanScalarWhereInput[]
  }

  export type TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutMethodInput, TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput> | TreasuryLoanRepaymentCreateWithoutMethodInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput | TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput[]
    upsert?: TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutMethodInput | TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: TreasuryLoanRepaymentCreateManyMethodInputEnvelope
    set?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    disconnect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    delete?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    update?: TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutMethodInput | TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: TreasuryLoanRepaymentUpdateManyWithWhereWithoutMethodInput | TreasuryLoanRepaymentUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: TreasuryLoanRepaymentScalarWhereInput | TreasuryLoanRepaymentScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutFromMethodNestedInput = {
    create?: XOR<TransferCreateWithoutFromMethodInput, TransferUncheckedCreateWithoutFromMethodInput> | TransferCreateWithoutFromMethodInput[] | TransferUncheckedCreateWithoutFromMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutFromMethodInput | TransferCreateOrConnectWithoutFromMethodInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutFromMethodInput | TransferUpsertWithWhereUniqueWithoutFromMethodInput[]
    createMany?: TransferCreateManyFromMethodInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutFromMethodInput | TransferUpdateWithWhereUniqueWithoutFromMethodInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutFromMethodInput | TransferUpdateManyWithWhereWithoutFromMethodInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutToMethodNestedInput = {
    create?: XOR<TransferCreateWithoutToMethodInput, TransferUncheckedCreateWithoutToMethodInput> | TransferCreateWithoutToMethodInput[] | TransferUncheckedCreateWithoutToMethodInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutToMethodInput | TransferCreateOrConnectWithoutToMethodInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutToMethodInput | TransferUpsertWithWhereUniqueWithoutToMethodInput[]
    createMany?: TransferCreateManyToMethodInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutToMethodInput | TransferUpdateWithWhereUniqueWithoutToMethodInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutToMethodInput | TransferUpdateManyWithWhereWithoutToMethodInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput = {
    create?: XOR<PhysicalConfirmationCreateWithoutMethodInput, PhysicalConfirmationUncheckedCreateWithoutMethodInput> | PhysicalConfirmationCreateWithoutMethodInput[] | PhysicalConfirmationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: PhysicalConfirmationCreateOrConnectWithoutMethodInput | PhysicalConfirmationCreateOrConnectWithoutMethodInput[]
    upsert?: PhysicalConfirmationUpsertWithWhereUniqueWithoutMethodInput | PhysicalConfirmationUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: PhysicalConfirmationCreateManyMethodInputEnvelope
    set?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    disconnect?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    delete?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    connect?: PhysicalConfirmationWhereUniqueInput | PhysicalConfirmationWhereUniqueInput[]
    update?: PhysicalConfirmationUpdateWithWhereUniqueWithoutMethodInput | PhysicalConfirmationUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: PhysicalConfirmationUpdateManyWithWhereWithoutMethodInput | PhysicalConfirmationUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: PhysicalConfirmationScalarWhereInput | PhysicalConfirmationScalarWhereInput[]
  }

  export type OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput = {
    create?: XOR<OperationalDepositCreateWithoutMethodInput, OperationalDepositUncheckedCreateWithoutMethodInput> | OperationalDepositCreateWithoutMethodInput[] | OperationalDepositUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: OperationalDepositCreateOrConnectWithoutMethodInput | OperationalDepositCreateOrConnectWithoutMethodInput[]
    upsert?: OperationalDepositUpsertWithWhereUniqueWithoutMethodInput | OperationalDepositUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: OperationalDepositCreateManyMethodInputEnvelope
    set?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    disconnect?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    delete?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    connect?: OperationalDepositWhereUniqueInput | OperationalDepositWhereUniqueInput[]
    update?: OperationalDepositUpdateWithWhereUniqueWithoutMethodInput | OperationalDepositUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: OperationalDepositUpdateManyWithWhereWithoutMethodInput | OperationalDepositUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: OperationalDepositScalarWhereInput | OperationalDepositScalarWhereInput[]
  }

  export type ReconciliationUncheckedUpdateManyWithoutMethodNestedInput = {
    create?: XOR<ReconciliationCreateWithoutMethodInput, ReconciliationUncheckedCreateWithoutMethodInput> | ReconciliationCreateWithoutMethodInput[] | ReconciliationUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: ReconciliationCreateOrConnectWithoutMethodInput | ReconciliationCreateOrConnectWithoutMethodInput[]
    upsert?: ReconciliationUpsertWithWhereUniqueWithoutMethodInput | ReconciliationUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: ReconciliationCreateManyMethodInputEnvelope
    set?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    disconnect?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    delete?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    connect?: ReconciliationWhereUniqueInput | ReconciliationWhereUniqueInput[]
    update?: ReconciliationUpdateWithWhereUniqueWithoutMethodInput | ReconciliationUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: ReconciliationUpdateManyWithWhereWithoutMethodInput | ReconciliationUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: ReconciliationScalarWhereInput | ReconciliationScalarWhereInput[]
  }

  export type TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput = {
    create?: XOR<TreasuryLoanCreateWithoutMethodInput, TreasuryLoanUncheckedCreateWithoutMethodInput> | TreasuryLoanCreateWithoutMethodInput[] | TreasuryLoanUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanCreateOrConnectWithoutMethodInput | TreasuryLoanCreateOrConnectWithoutMethodInput[]
    upsert?: TreasuryLoanUpsertWithWhereUniqueWithoutMethodInput | TreasuryLoanUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: TreasuryLoanCreateManyMethodInputEnvelope
    set?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    disconnect?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    delete?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    connect?: TreasuryLoanWhereUniqueInput | TreasuryLoanWhereUniqueInput[]
    update?: TreasuryLoanUpdateWithWhereUniqueWithoutMethodInput | TreasuryLoanUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: TreasuryLoanUpdateManyWithWhereWithoutMethodInput | TreasuryLoanUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: TreasuryLoanScalarWhereInput | TreasuryLoanScalarWhereInput[]
  }

  export type TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutMethodInput, TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput> | TreasuryLoanRepaymentCreateWithoutMethodInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput | TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput[]
    upsert?: TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutMethodInput | TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutMethodInput[]
    createMany?: TreasuryLoanRepaymentCreateManyMethodInputEnvelope
    set?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    disconnect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    delete?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    update?: TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutMethodInput | TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutMethodInput[]
    updateMany?: TreasuryLoanRepaymentUpdateManyWithWhereWithoutMethodInput | TreasuryLoanRepaymentUpdateManyWithWhereWithoutMethodInput[]
    deleteMany?: TreasuryLoanRepaymentScalarWhereInput | TreasuryLoanRepaymentScalarWhereInput[]
  }

  export type PaymentMethodCreateNestedOneWithoutOutgoingTransfersInput = {
    create?: XOR<PaymentMethodCreateWithoutOutgoingTransfersInput, PaymentMethodUncheckedCreateWithoutOutgoingTransfersInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutOutgoingTransfersInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutIncomingTransfersInput = {
    create?: XOR<PaymentMethodCreateWithoutIncomingTransfersInput, PaymentMethodUncheckedCreateWithoutIncomingTransfersInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutIncomingTransfersInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PaymentMethodUpdateOneRequiredWithoutOutgoingTransfersNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutOutgoingTransfersInput, PaymentMethodUncheckedCreateWithoutOutgoingTransfersInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutOutgoingTransfersInput
    upsert?: PaymentMethodUpsertWithoutOutgoingTransfersInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutOutgoingTransfersInput, PaymentMethodUpdateWithoutOutgoingTransfersInput>, PaymentMethodUncheckedUpdateWithoutOutgoingTransfersInput>
  }

  export type PaymentMethodUpdateOneRequiredWithoutIncomingTransfersNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutIncomingTransfersInput, PaymentMethodUncheckedCreateWithoutIncomingTransfersInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutIncomingTransfersInput
    upsert?: PaymentMethodUpsertWithoutIncomingTransfersInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutIncomingTransfersInput, PaymentMethodUpdateWithoutIncomingTransfersInput>, PaymentMethodUncheckedUpdateWithoutIncomingTransfersInput>
  }

  export type PaymentMethodCreateNestedOneWithoutConfirmationsInput = {
    create?: XOR<PaymentMethodCreateWithoutConfirmationsInput, PaymentMethodUncheckedCreateWithoutConfirmationsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutConfirmationsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type PaymentMethodUpdateOneRequiredWithoutConfirmationsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutConfirmationsInput, PaymentMethodUncheckedCreateWithoutConfirmationsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutConfirmationsInput
    upsert?: PaymentMethodUpsertWithoutConfirmationsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutConfirmationsInput, PaymentMethodUpdateWithoutConfirmationsInput>, PaymentMethodUncheckedUpdateWithoutConfirmationsInput>
  }

  export type PaymentMethodCreateNestedOneWithoutDepositsInput = {
    create?: XOR<PaymentMethodCreateWithoutDepositsInput, PaymentMethodUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutDepositsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type PaymentMethodUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutDepositsInput, PaymentMethodUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutDepositsInput
    upsert?: PaymentMethodUpsertWithoutDepositsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutDepositsInput, PaymentMethodUpdateWithoutDepositsInput>, PaymentMethodUncheckedUpdateWithoutDepositsInput>
  }

  export type PaymentMethodCreateNestedOneWithoutReconciliationsInput = {
    create?: XOR<PaymentMethodCreateWithoutReconciliationsInput, PaymentMethodUncheckedCreateWithoutReconciliationsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutReconciliationsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type PaymentMethodUpdateOneRequiredWithoutReconciliationsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutReconciliationsInput, PaymentMethodUncheckedCreateWithoutReconciliationsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutReconciliationsInput
    upsert?: PaymentMethodUpsertWithoutReconciliationsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutReconciliationsInput, PaymentMethodUpdateWithoutReconciliationsInput>, PaymentMethodUncheckedUpdateWithoutReconciliationsInput>
  }

  export type PaymentMethodCreateNestedOneWithoutLoansInput = {
    create?: XOR<PaymentMethodCreateWithoutLoansInput, PaymentMethodUncheckedCreateWithoutLoansInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutLoansInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type TreasuryLoanRepaymentCreateNestedManyWithoutLoanInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutLoanInput, TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput> | TreasuryLoanRepaymentCreateWithoutLoanInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput | TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput[]
    createMany?: TreasuryLoanRepaymentCreateManyLoanInputEnvelope
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
  }

  export type TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutLoanInput, TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput> | TreasuryLoanRepaymentCreateWithoutLoanInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput | TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput[]
    createMany?: TreasuryLoanRepaymentCreateManyLoanInputEnvelope
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
  }

  export type PaymentMethodUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutLoansInput, PaymentMethodUncheckedCreateWithoutLoansInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutLoansInput
    upsert?: PaymentMethodUpsertWithoutLoansInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutLoansInput, PaymentMethodUpdateWithoutLoansInput>, PaymentMethodUncheckedUpdateWithoutLoansInput>
  }

  export type TreasuryLoanRepaymentUpdateManyWithoutLoanNestedInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutLoanInput, TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput> | TreasuryLoanRepaymentCreateWithoutLoanInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput | TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput[]
    upsert?: TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutLoanInput | TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: TreasuryLoanRepaymentCreateManyLoanInputEnvelope
    set?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    disconnect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    delete?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    update?: TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutLoanInput | TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: TreasuryLoanRepaymentUpdateManyWithWhereWithoutLoanInput | TreasuryLoanRepaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: TreasuryLoanRepaymentScalarWhereInput | TreasuryLoanRepaymentScalarWhereInput[]
  }

  export type TreasuryLoanRepaymentUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<TreasuryLoanRepaymentCreateWithoutLoanInput, TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput> | TreasuryLoanRepaymentCreateWithoutLoanInput[] | TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput | TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput[]
    upsert?: TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutLoanInput | TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: TreasuryLoanRepaymentCreateManyLoanInputEnvelope
    set?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    disconnect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    delete?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    connect?: TreasuryLoanRepaymentWhereUniqueInput | TreasuryLoanRepaymentWhereUniqueInput[]
    update?: TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutLoanInput | TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: TreasuryLoanRepaymentUpdateManyWithWhereWithoutLoanInput | TreasuryLoanRepaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: TreasuryLoanRepaymentScalarWhereInput | TreasuryLoanRepaymentScalarWhereInput[]
  }

  export type TreasuryLoanCreateNestedOneWithoutRepaymentsInput = {
    create?: XOR<TreasuryLoanCreateWithoutRepaymentsInput, TreasuryLoanUncheckedCreateWithoutRepaymentsInput>
    connectOrCreate?: TreasuryLoanCreateOrConnectWithoutRepaymentsInput
    connect?: TreasuryLoanWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutLoanRepaymentsInput = {
    create?: XOR<PaymentMethodCreateWithoutLoanRepaymentsInput, PaymentMethodUncheckedCreateWithoutLoanRepaymentsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutLoanRepaymentsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type TreasuryLoanUpdateOneRequiredWithoutRepaymentsNestedInput = {
    create?: XOR<TreasuryLoanCreateWithoutRepaymentsInput, TreasuryLoanUncheckedCreateWithoutRepaymentsInput>
    connectOrCreate?: TreasuryLoanCreateOrConnectWithoutRepaymentsInput
    upsert?: TreasuryLoanUpsertWithoutRepaymentsInput
    connect?: TreasuryLoanWhereUniqueInput
    update?: XOR<XOR<TreasuryLoanUpdateToOneWithWhereWithoutRepaymentsInput, TreasuryLoanUpdateWithoutRepaymentsInput>, TreasuryLoanUncheckedUpdateWithoutRepaymentsInput>
  }

  export type PaymentMethodUpdateOneRequiredWithoutLoanRepaymentsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutLoanRepaymentsInput, PaymentMethodUncheckedCreateWithoutLoanRepaymentsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutLoanRepaymentsInput
    upsert?: PaymentMethodUpsertWithoutLoanRepaymentsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutLoanRepaymentsInput, PaymentMethodUpdateWithoutLoanRepaymentsInput>, PaymentMethodUncheckedUpdateWithoutLoanRepaymentsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TransferCreateWithoutFromMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    toMethod: PaymentMethodCreateNestedOneWithoutIncomingTransfersInput
  }

  export type TransferUncheckedCreateWithoutFromMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    toMethodId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferCreateOrConnectWithoutFromMethodInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutFromMethodInput, TransferUncheckedCreateWithoutFromMethodInput>
  }

  export type TransferCreateManyFromMethodInputEnvelope = {
    data: TransferCreateManyFromMethodInput | TransferCreateManyFromMethodInput[]
    skipDuplicates?: boolean
  }

  export type TransferCreateWithoutToMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMethod: PaymentMethodCreateNestedOneWithoutOutgoingTransfersInput
  }

  export type TransferUncheckedCreateWithoutToMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    fromMethodId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferCreateOrConnectWithoutToMethodInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutToMethodInput, TransferUncheckedCreateWithoutToMethodInput>
  }

  export type TransferCreateManyToMethodInputEnvelope = {
    data: TransferCreateManyToMethodInput | TransferCreateManyToMethodInput[]
    skipDuplicates?: boolean
  }

  export type PhysicalConfirmationCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    confirmedBy: string
    amount: number
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type PhysicalConfirmationUncheckedCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    confirmedBy: string
    amount: number
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type PhysicalConfirmationCreateOrConnectWithoutMethodInput = {
    where: PhysicalConfirmationWhereUniqueInput
    create: XOR<PhysicalConfirmationCreateWithoutMethodInput, PhysicalConfirmationUncheckedCreateWithoutMethodInput>
  }

  export type PhysicalConfirmationCreateManyMethodInputEnvelope = {
    data: PhysicalConfirmationCreateManyMethodInput | PhysicalConfirmationCreateManyMethodInput[]
    skipDuplicates?: boolean
  }

  export type OperationalDepositCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    depositedBy: string
    notes?: string | null
    depositedAt?: Date | string
  }

  export type OperationalDepositUncheckedCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    depositedBy: string
    notes?: string | null
    depositedAt?: Date | string
  }

  export type OperationalDepositCreateOrConnectWithoutMethodInput = {
    where: OperationalDepositWhereUniqueInput
    create: XOR<OperationalDepositCreateWithoutMethodInput, OperationalDepositUncheckedCreateWithoutMethodInput>
  }

  export type OperationalDepositCreateManyMethodInputEnvelope = {
    data: OperationalDepositCreateManyMethodInput | OperationalDepositCreateManyMethodInput[]
    skipDuplicates?: boolean
  }

  export type ReconciliationCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt?: Date | string
    notes?: string | null
  }

  export type ReconciliationUncheckedCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt?: Date | string
    notes?: string | null
  }

  export type ReconciliationCreateOrConnectWithoutMethodInput = {
    where: ReconciliationWhereUniqueInput
    create: XOR<ReconciliationCreateWithoutMethodInput, ReconciliationUncheckedCreateWithoutMethodInput>
  }

  export type ReconciliationCreateManyMethodInputEnvelope = {
    data: ReconciliationCreateManyMethodInput | ReconciliationCreateManyMethodInput[]
    skipDuplicates?: boolean
  }

  export type TreasuryLoanCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repayments?: TreasuryLoanRepaymentCreateNestedManyWithoutLoanInput
  }

  export type TreasuryLoanUncheckedCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type TreasuryLoanCreateOrConnectWithoutMethodInput = {
    where: TreasuryLoanWhereUniqueInput
    create: XOR<TreasuryLoanCreateWithoutMethodInput, TreasuryLoanUncheckedCreateWithoutMethodInput>
  }

  export type TreasuryLoanCreateManyMethodInputEnvelope = {
    data: TreasuryLoanCreateManyMethodInput | TreasuryLoanCreateManyMethodInput[]
    skipDuplicates?: boolean
  }

  export type TreasuryLoanRepaymentCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    loan: TreasuryLoanCreateNestedOneWithoutRepaymentsInput
  }

  export type TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    loanId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryLoanRepaymentCreateOrConnectWithoutMethodInput = {
    where: TreasuryLoanRepaymentWhereUniqueInput
    create: XOR<TreasuryLoanRepaymentCreateWithoutMethodInput, TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput>
  }

  export type TreasuryLoanRepaymentCreateManyMethodInputEnvelope = {
    data: TreasuryLoanRepaymentCreateManyMethodInput | TreasuryLoanRepaymentCreateManyMethodInput[]
    skipDuplicates?: boolean
  }

  export type TransferUpsertWithWhereUniqueWithoutFromMethodInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutFromMethodInput, TransferUncheckedUpdateWithoutFromMethodInput>
    create: XOR<TransferCreateWithoutFromMethodInput, TransferUncheckedCreateWithoutFromMethodInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutFromMethodInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutFromMethodInput, TransferUncheckedUpdateWithoutFromMethodInput>
  }

  export type TransferUpdateManyWithWhereWithoutFromMethodInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutFromMethodInput>
  }

  export type TransferScalarWhereInput = {
    AND?: TransferScalarWhereInput | TransferScalarWhereInput[]
    OR?: TransferScalarWhereInput[]
    NOT?: TransferScalarWhereInput | TransferScalarWhereInput[]
    id?: StringFilter<"Transfer"> | string
    tenantId?: StringFilter<"Transfer"> | string
    shopId?: StringFilter<"Transfer"> | string
    fromMethodId?: StringFilter<"Transfer"> | string
    toMethodId?: StringFilter<"Transfer"> | string
    amount?: FloatFilter<"Transfer"> | number
    reference?: StringNullableFilter<"Transfer"> | string | null
    status?: StringFilter<"Transfer"> | string
    approvedBy?: StringNullableFilter<"Transfer"> | string | null
    approvedAt?: DateTimeNullableFilter<"Transfer"> | Date | string | null
    createdAt?: DateTimeFilter<"Transfer"> | Date | string
    updatedAt?: DateTimeFilter<"Transfer"> | Date | string
  }

  export type TransferUpsertWithWhereUniqueWithoutToMethodInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutToMethodInput, TransferUncheckedUpdateWithoutToMethodInput>
    create: XOR<TransferCreateWithoutToMethodInput, TransferUncheckedCreateWithoutToMethodInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutToMethodInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutToMethodInput, TransferUncheckedUpdateWithoutToMethodInput>
  }

  export type TransferUpdateManyWithWhereWithoutToMethodInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutToMethodInput>
  }

  export type PhysicalConfirmationUpsertWithWhereUniqueWithoutMethodInput = {
    where: PhysicalConfirmationWhereUniqueInput
    update: XOR<PhysicalConfirmationUpdateWithoutMethodInput, PhysicalConfirmationUncheckedUpdateWithoutMethodInput>
    create: XOR<PhysicalConfirmationCreateWithoutMethodInput, PhysicalConfirmationUncheckedCreateWithoutMethodInput>
  }

  export type PhysicalConfirmationUpdateWithWhereUniqueWithoutMethodInput = {
    where: PhysicalConfirmationWhereUniqueInput
    data: XOR<PhysicalConfirmationUpdateWithoutMethodInput, PhysicalConfirmationUncheckedUpdateWithoutMethodInput>
  }

  export type PhysicalConfirmationUpdateManyWithWhereWithoutMethodInput = {
    where: PhysicalConfirmationScalarWhereInput
    data: XOR<PhysicalConfirmationUpdateManyMutationInput, PhysicalConfirmationUncheckedUpdateManyWithoutMethodInput>
  }

  export type PhysicalConfirmationScalarWhereInput = {
    AND?: PhysicalConfirmationScalarWhereInput | PhysicalConfirmationScalarWhereInput[]
    OR?: PhysicalConfirmationScalarWhereInput[]
    NOT?: PhysicalConfirmationScalarWhereInput | PhysicalConfirmationScalarWhereInput[]
    id?: StringFilter<"PhysicalConfirmation"> | string
    tenantId?: StringFilter<"PhysicalConfirmation"> | string
    shopId?: StringFilter<"PhysicalConfirmation"> | string
    methodId?: StringFilter<"PhysicalConfirmation"> | string
    confirmedBy?: StringFilter<"PhysicalConfirmation"> | string
    amount?: FloatFilter<"PhysicalConfirmation"> | number
    notes?: StringNullableFilter<"PhysicalConfirmation"> | string | null
    confirmedAt?: DateTimeFilter<"PhysicalConfirmation"> | Date | string
  }

  export type OperationalDepositUpsertWithWhereUniqueWithoutMethodInput = {
    where: OperationalDepositWhereUniqueInput
    update: XOR<OperationalDepositUpdateWithoutMethodInput, OperationalDepositUncheckedUpdateWithoutMethodInput>
    create: XOR<OperationalDepositCreateWithoutMethodInput, OperationalDepositUncheckedCreateWithoutMethodInput>
  }

  export type OperationalDepositUpdateWithWhereUniqueWithoutMethodInput = {
    where: OperationalDepositWhereUniqueInput
    data: XOR<OperationalDepositUpdateWithoutMethodInput, OperationalDepositUncheckedUpdateWithoutMethodInput>
  }

  export type OperationalDepositUpdateManyWithWhereWithoutMethodInput = {
    where: OperationalDepositScalarWhereInput
    data: XOR<OperationalDepositUpdateManyMutationInput, OperationalDepositUncheckedUpdateManyWithoutMethodInput>
  }

  export type OperationalDepositScalarWhereInput = {
    AND?: OperationalDepositScalarWhereInput | OperationalDepositScalarWhereInput[]
    OR?: OperationalDepositScalarWhereInput[]
    NOT?: OperationalDepositScalarWhereInput | OperationalDepositScalarWhereInput[]
    id?: StringFilter<"OperationalDeposit"> | string
    tenantId?: StringFilter<"OperationalDeposit"> | string
    shopId?: StringFilter<"OperationalDeposit"> | string
    methodId?: StringFilter<"OperationalDeposit"> | string
    amount?: FloatFilter<"OperationalDeposit"> | number
    depositedBy?: StringFilter<"OperationalDeposit"> | string
    notes?: StringNullableFilter<"OperationalDeposit"> | string | null
    depositedAt?: DateTimeFilter<"OperationalDeposit"> | Date | string
  }

  export type ReconciliationUpsertWithWhereUniqueWithoutMethodInput = {
    where: ReconciliationWhereUniqueInput
    update: XOR<ReconciliationUpdateWithoutMethodInput, ReconciliationUncheckedUpdateWithoutMethodInput>
    create: XOR<ReconciliationCreateWithoutMethodInput, ReconciliationUncheckedCreateWithoutMethodInput>
  }

  export type ReconciliationUpdateWithWhereUniqueWithoutMethodInput = {
    where: ReconciliationWhereUniqueInput
    data: XOR<ReconciliationUpdateWithoutMethodInput, ReconciliationUncheckedUpdateWithoutMethodInput>
  }

  export type ReconciliationUpdateManyWithWhereWithoutMethodInput = {
    where: ReconciliationScalarWhereInput
    data: XOR<ReconciliationUpdateManyMutationInput, ReconciliationUncheckedUpdateManyWithoutMethodInput>
  }

  export type ReconciliationScalarWhereInput = {
    AND?: ReconciliationScalarWhereInput | ReconciliationScalarWhereInput[]
    OR?: ReconciliationScalarWhereInput[]
    NOT?: ReconciliationScalarWhereInput | ReconciliationScalarWhereInput[]
    id?: StringFilter<"Reconciliation"> | string
    tenantId?: StringFilter<"Reconciliation"> | string
    shopId?: StringFilter<"Reconciliation"> | string
    methodId?: StringFilter<"Reconciliation"> | string
    systemBalance?: FloatFilter<"Reconciliation"> | number
    physicalBalance?: FloatFilter<"Reconciliation"> | number
    difference?: FloatFilter<"Reconciliation"> | number
    reconciledBy?: StringFilter<"Reconciliation"> | string
    reconciledAt?: DateTimeFilter<"Reconciliation"> | Date | string
    notes?: StringNullableFilter<"Reconciliation"> | string | null
  }

  export type TreasuryLoanUpsertWithWhereUniqueWithoutMethodInput = {
    where: TreasuryLoanWhereUniqueInput
    update: XOR<TreasuryLoanUpdateWithoutMethodInput, TreasuryLoanUncheckedUpdateWithoutMethodInput>
    create: XOR<TreasuryLoanCreateWithoutMethodInput, TreasuryLoanUncheckedCreateWithoutMethodInput>
  }

  export type TreasuryLoanUpdateWithWhereUniqueWithoutMethodInput = {
    where: TreasuryLoanWhereUniqueInput
    data: XOR<TreasuryLoanUpdateWithoutMethodInput, TreasuryLoanUncheckedUpdateWithoutMethodInput>
  }

  export type TreasuryLoanUpdateManyWithWhereWithoutMethodInput = {
    where: TreasuryLoanScalarWhereInput
    data: XOR<TreasuryLoanUpdateManyMutationInput, TreasuryLoanUncheckedUpdateManyWithoutMethodInput>
  }

  export type TreasuryLoanScalarWhereInput = {
    AND?: TreasuryLoanScalarWhereInput | TreasuryLoanScalarWhereInput[]
    OR?: TreasuryLoanScalarWhereInput[]
    NOT?: TreasuryLoanScalarWhereInput | TreasuryLoanScalarWhereInput[]
    id?: StringFilter<"TreasuryLoan"> | string
    tenantId?: StringFilter<"TreasuryLoan"> | string
    shopId?: StringFilter<"TreasuryLoan"> | string
    direction?: StringFilter<"TreasuryLoan"> | string
    counterparty?: StringFilter<"TreasuryLoan"> | string
    principal?: FloatFilter<"TreasuryLoan"> | number
    outstanding?: FloatFilter<"TreasuryLoan"> | number
    methodId?: StringFilter<"TreasuryLoan"> | string
    status?: StringFilter<"TreasuryLoan"> | string
    notes?: StringNullableFilter<"TreasuryLoan"> | string | null
    createdBy?: StringNullableFilter<"TreasuryLoan"> | string | null
    createdAt?: DateTimeFilter<"TreasuryLoan"> | Date | string
    updatedAt?: DateTimeFilter<"TreasuryLoan"> | Date | string
  }

  export type TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutMethodInput = {
    where: TreasuryLoanRepaymentWhereUniqueInput
    update: XOR<TreasuryLoanRepaymentUpdateWithoutMethodInput, TreasuryLoanRepaymentUncheckedUpdateWithoutMethodInput>
    create: XOR<TreasuryLoanRepaymentCreateWithoutMethodInput, TreasuryLoanRepaymentUncheckedCreateWithoutMethodInput>
  }

  export type TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutMethodInput = {
    where: TreasuryLoanRepaymentWhereUniqueInput
    data: XOR<TreasuryLoanRepaymentUpdateWithoutMethodInput, TreasuryLoanRepaymentUncheckedUpdateWithoutMethodInput>
  }

  export type TreasuryLoanRepaymentUpdateManyWithWhereWithoutMethodInput = {
    where: TreasuryLoanRepaymentScalarWhereInput
    data: XOR<TreasuryLoanRepaymentUpdateManyMutationInput, TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodInput>
  }

  export type TreasuryLoanRepaymentScalarWhereInput = {
    AND?: TreasuryLoanRepaymentScalarWhereInput | TreasuryLoanRepaymentScalarWhereInput[]
    OR?: TreasuryLoanRepaymentScalarWhereInput[]
    NOT?: TreasuryLoanRepaymentScalarWhereInput | TreasuryLoanRepaymentScalarWhereInput[]
    id?: StringFilter<"TreasuryLoanRepayment"> | string
    tenantId?: StringFilter<"TreasuryLoanRepayment"> | string
    shopId?: StringFilter<"TreasuryLoanRepayment"> | string
    loanId?: StringFilter<"TreasuryLoanRepayment"> | string
    methodId?: StringFilter<"TreasuryLoanRepayment"> | string
    amount?: FloatFilter<"TreasuryLoanRepayment"> | number
    notes?: StringNullableFilter<"TreasuryLoanRepayment"> | string | null
    createdBy?: StringNullableFilter<"TreasuryLoanRepayment"> | string | null
    createdAt?: DateTimeFilter<"TreasuryLoanRepayment"> | Date | string
  }

  export type PaymentMethodCreateWithoutOutgoingTransfersInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutOutgoingTransfersInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutOutgoingTransfersInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutOutgoingTransfersInput, PaymentMethodUncheckedCreateWithoutOutgoingTransfersInput>
  }

  export type PaymentMethodCreateWithoutIncomingTransfersInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutIncomingTransfersInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutIncomingTransfersInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutIncomingTransfersInput, PaymentMethodUncheckedCreateWithoutIncomingTransfersInput>
  }

  export type PaymentMethodUpsertWithoutOutgoingTransfersInput = {
    update: XOR<PaymentMethodUpdateWithoutOutgoingTransfersInput, PaymentMethodUncheckedUpdateWithoutOutgoingTransfersInput>
    create: XOR<PaymentMethodCreateWithoutOutgoingTransfersInput, PaymentMethodUncheckedCreateWithoutOutgoingTransfersInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutOutgoingTransfersInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutOutgoingTransfersInput, PaymentMethodUncheckedUpdateWithoutOutgoingTransfersInput>
  }

  export type PaymentMethodUpdateWithoutOutgoingTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutOutgoingTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUpsertWithoutIncomingTransfersInput = {
    update: XOR<PaymentMethodUpdateWithoutIncomingTransfersInput, PaymentMethodUncheckedUpdateWithoutIncomingTransfersInput>
    create: XOR<PaymentMethodCreateWithoutIncomingTransfersInput, PaymentMethodUncheckedCreateWithoutIncomingTransfersInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutIncomingTransfersInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutIncomingTransfersInput, PaymentMethodUncheckedUpdateWithoutIncomingTransfersInput>
  }

  export type PaymentMethodUpdateWithoutIncomingTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutIncomingTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodCreateWithoutConfirmationsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutConfirmationsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutConfirmationsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutConfirmationsInput, PaymentMethodUncheckedCreateWithoutConfirmationsInput>
  }

  export type PaymentMethodUpsertWithoutConfirmationsInput = {
    update: XOR<PaymentMethodUpdateWithoutConfirmationsInput, PaymentMethodUncheckedUpdateWithoutConfirmationsInput>
    create: XOR<PaymentMethodCreateWithoutConfirmationsInput, PaymentMethodUncheckedCreateWithoutConfirmationsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutConfirmationsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutConfirmationsInput, PaymentMethodUncheckedUpdateWithoutConfirmationsInput>
  }

  export type PaymentMethodUpdateWithoutConfirmationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutConfirmationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodCreateWithoutDepositsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutDepositsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutDepositsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutDepositsInput, PaymentMethodUncheckedCreateWithoutDepositsInput>
  }

  export type PaymentMethodUpsertWithoutDepositsInput = {
    update: XOR<PaymentMethodUpdateWithoutDepositsInput, PaymentMethodUncheckedUpdateWithoutDepositsInput>
    create: XOR<PaymentMethodCreateWithoutDepositsInput, PaymentMethodUncheckedCreateWithoutDepositsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutDepositsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutDepositsInput, PaymentMethodUncheckedUpdateWithoutDepositsInput>
  }

  export type PaymentMethodUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodCreateWithoutReconciliationsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutReconciliationsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutReconciliationsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutReconciliationsInput, PaymentMethodUncheckedCreateWithoutReconciliationsInput>
  }

  export type PaymentMethodUpsertWithoutReconciliationsInput = {
    update: XOR<PaymentMethodUpdateWithoutReconciliationsInput, PaymentMethodUncheckedUpdateWithoutReconciliationsInput>
    create: XOR<PaymentMethodCreateWithoutReconciliationsInput, PaymentMethodUncheckedCreateWithoutReconciliationsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutReconciliationsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutReconciliationsInput, PaymentMethodUncheckedUpdateWithoutReconciliationsInput>
  }

  export type PaymentMethodUpdateWithoutReconciliationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutReconciliationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodCreateWithoutLoansInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutLoansInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutLoansInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutLoansInput, PaymentMethodUncheckedCreateWithoutLoansInput>
  }

  export type TreasuryLoanRepaymentCreateWithoutLoanInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    method: PaymentMethodCreateNestedOneWithoutLoanRepaymentsInput
  }

  export type TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryLoanRepaymentCreateOrConnectWithoutLoanInput = {
    where: TreasuryLoanRepaymentWhereUniqueInput
    create: XOR<TreasuryLoanRepaymentCreateWithoutLoanInput, TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput>
  }

  export type TreasuryLoanRepaymentCreateManyLoanInputEnvelope = {
    data: TreasuryLoanRepaymentCreateManyLoanInput | TreasuryLoanRepaymentCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type PaymentMethodUpsertWithoutLoansInput = {
    update: XOR<PaymentMethodUpdateWithoutLoansInput, PaymentMethodUncheckedUpdateWithoutLoansInput>
    create: XOR<PaymentMethodCreateWithoutLoansInput, PaymentMethodUncheckedCreateWithoutLoansInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutLoansInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutLoansInput, PaymentMethodUncheckedUpdateWithoutLoansInput>
  }

  export type PaymentMethodUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loanRepayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type TreasuryLoanRepaymentUpsertWithWhereUniqueWithoutLoanInput = {
    where: TreasuryLoanRepaymentWhereUniqueInput
    update: XOR<TreasuryLoanRepaymentUpdateWithoutLoanInput, TreasuryLoanRepaymentUncheckedUpdateWithoutLoanInput>
    create: XOR<TreasuryLoanRepaymentCreateWithoutLoanInput, TreasuryLoanRepaymentUncheckedCreateWithoutLoanInput>
  }

  export type TreasuryLoanRepaymentUpdateWithWhereUniqueWithoutLoanInput = {
    where: TreasuryLoanRepaymentWhereUniqueInput
    data: XOR<TreasuryLoanRepaymentUpdateWithoutLoanInput, TreasuryLoanRepaymentUncheckedUpdateWithoutLoanInput>
  }

  export type TreasuryLoanRepaymentUpdateManyWithWhereWithoutLoanInput = {
    where: TreasuryLoanRepaymentScalarWhereInput
    data: XOR<TreasuryLoanRepaymentUpdateManyMutationInput, TreasuryLoanRepaymentUncheckedUpdateManyWithoutLoanInput>
  }

  export type TreasuryLoanCreateWithoutRepaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    method: PaymentMethodCreateNestedOneWithoutLoansInput
  }

  export type TreasuryLoanUncheckedCreateWithoutRepaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    methodId: string
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreasuryLoanCreateOrConnectWithoutRepaymentsInput = {
    where: TreasuryLoanWhereUniqueInput
    create: XOR<TreasuryLoanCreateWithoutRepaymentsInput, TreasuryLoanUncheckedCreateWithoutRepaymentsInput>
  }

  export type PaymentMethodCreateWithoutLoanRepaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutLoanRepaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    type: string
    accountNumber?: string | null
    bankName?: string | null
    balance?: number
    currency?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingTransfers?: TransferUncheckedCreateNestedManyWithoutFromMethodInput
    incomingTransfers?: TransferUncheckedCreateNestedManyWithoutToMethodInput
    confirmations?: PhysicalConfirmationUncheckedCreateNestedManyWithoutMethodInput
    deposits?: OperationalDepositUncheckedCreateNestedManyWithoutMethodInput
    reconciliations?: ReconciliationUncheckedCreateNestedManyWithoutMethodInput
    loans?: TreasuryLoanUncheckedCreateNestedManyWithoutMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutLoanRepaymentsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutLoanRepaymentsInput, PaymentMethodUncheckedCreateWithoutLoanRepaymentsInput>
  }

  export type TreasuryLoanUpsertWithoutRepaymentsInput = {
    update: XOR<TreasuryLoanUpdateWithoutRepaymentsInput, TreasuryLoanUncheckedUpdateWithoutRepaymentsInput>
    create: XOR<TreasuryLoanCreateWithoutRepaymentsInput, TreasuryLoanUncheckedCreateWithoutRepaymentsInput>
    where?: TreasuryLoanWhereInput
  }

  export type TreasuryLoanUpdateToOneWithWhereWithoutRepaymentsInput = {
    where?: TreasuryLoanWhereInput
    data: XOR<TreasuryLoanUpdateWithoutRepaymentsInput, TreasuryLoanUncheckedUpdateWithoutRepaymentsInput>
  }

  export type TreasuryLoanUpdateWithoutRepaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: PaymentMethodUpdateOneRequiredWithoutLoansNestedInput
  }

  export type TreasuryLoanUncheckedUpdateWithoutRepaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    methodId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUpsertWithoutLoanRepaymentsInput = {
    update: XOR<PaymentMethodUpdateWithoutLoanRepaymentsInput, PaymentMethodUncheckedUpdateWithoutLoanRepaymentsInput>
    create: XOR<PaymentMethodCreateWithoutLoanRepaymentsInput, PaymentMethodUncheckedCreateWithoutLoanRepaymentsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutLoanRepaymentsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutLoanRepaymentsInput, PaymentMethodUncheckedUpdateWithoutLoanRepaymentsInput>
  }

  export type PaymentMethodUpdateWithoutLoanRepaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUpdateManyWithoutMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutLoanRepaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingTransfers?: TransferUncheckedUpdateManyWithoutFromMethodNestedInput
    incomingTransfers?: TransferUncheckedUpdateManyWithoutToMethodNestedInput
    confirmations?: PhysicalConfirmationUncheckedUpdateManyWithoutMethodNestedInput
    deposits?: OperationalDepositUncheckedUpdateManyWithoutMethodNestedInput
    reconciliations?: ReconciliationUncheckedUpdateManyWithoutMethodNestedInput
    loans?: TreasuryLoanUncheckedUpdateManyWithoutMethodNestedInput
  }

  export type TransferCreateManyFromMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    toMethodId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferCreateManyToMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    fromMethodId: string
    amount: number
    reference?: string | null
    status?: string
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhysicalConfirmationCreateManyMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    confirmedBy: string
    amount: number
    notes?: string | null
    confirmedAt?: Date | string
  }

  export type OperationalDepositCreateManyMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    depositedBy: string
    notes?: string | null
    depositedAt?: Date | string
  }

  export type ReconciliationCreateManyMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    systemBalance: number
    physicalBalance: number
    difference: number
    reconciledBy: string
    reconciledAt?: Date | string
    notes?: string | null
  }

  export type TreasuryLoanCreateManyMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    direction: string
    counterparty: string
    principal: number
    outstanding: number
    status?: string
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreasuryLoanRepaymentCreateManyMethodInput = {
    id?: string
    tenantId: string
    shopId: string
    loanId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type TransferUpdateWithoutFromMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toMethod?: PaymentMethodUpdateOneRequiredWithoutIncomingTransfersNestedInput
  }

  export type TransferUncheckedUpdateWithoutFromMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    toMethodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUncheckedUpdateManyWithoutFromMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    toMethodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUpdateWithoutToMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMethod?: PaymentMethodUpdateOneRequiredWithoutOutgoingTransfersNestedInput
  }

  export type TransferUncheckedUpdateWithoutToMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    fromMethodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUncheckedUpdateManyWithoutToMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    fromMethodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalConfirmationUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalConfirmationUncheckedUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalConfirmationUncheckedUpdateManyWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    confirmedBy?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationalDepositUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationalDepositUncheckedUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationalDepositUncheckedUpdateManyWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    depositedBy?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    depositedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReconciliationUncheckedUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReconciliationUncheckedUpdateManyWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    systemBalance?: FloatFieldUpdateOperationsInput | number
    physicalBalance?: FloatFieldUpdateOperationsInput | number
    difference?: FloatFieldUpdateOperationsInput | number
    reconciledBy?: StringFieldUpdateOperationsInput | string
    reconciledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TreasuryLoanUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repayments?: TreasuryLoanRepaymentUpdateManyWithoutLoanNestedInput
  }

  export type TreasuryLoanUncheckedUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repayments?: TreasuryLoanRepaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type TreasuryLoanUncheckedUpdateManyWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    counterparty?: StringFieldUpdateOperationsInput | string
    principal?: FloatFieldUpdateOperationsInput | number
    outstanding?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: TreasuryLoanUpdateOneRequiredWithoutRepaymentsNestedInput
  }

  export type TreasuryLoanRepaymentUncheckedUpdateWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentUncheckedUpdateManyWithoutMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentCreateManyLoanInput = {
    id?: string
    tenantId: string
    shopId: string
    methodId: string
    amount: number
    notes?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type TreasuryLoanRepaymentUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: PaymentMethodUpdateOneRequiredWithoutLoanRepaymentsNestedInput
  }

  export type TreasuryLoanRepaymentUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreasuryLoanRepaymentUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    methodId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PaymentMethodCountOutputTypeDefaultArgs instead
     */
    export type PaymentMethodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreasuryLoanCountOutputTypeDefaultArgs instead
     */
    export type TreasuryLoanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreasuryLoanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentMethodDefaultArgs instead
     */
    export type PaymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransferDefaultArgs instead
     */
    export type TransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhysicalConfirmationDefaultArgs instead
     */
    export type PhysicalConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhysicalConfirmationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperationalDepositDefaultArgs instead
     */
    export type OperationalDepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperationalDepositDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReconciliationDefaultArgs instead
     */
    export type ReconciliationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReconciliationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreasuryLoanDefaultArgs instead
     */
    export type TreasuryLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreasuryLoanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreasuryLoanRepaymentDefaultArgs instead
     */
    export type TreasuryLoanRepaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreasuryLoanRepaymentDefaultArgs<ExtArgs>
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