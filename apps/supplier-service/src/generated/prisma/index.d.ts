
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
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model SupplierContact
 * 
 */
export type SupplierContact = $Result.DefaultSelection<Prisma.$SupplierContactPayload>
/**
 * Model SupplierBalance
 * 
 */
export type SupplierBalance = $Result.DefaultSelection<Prisma.$SupplierBalancePayload>
/**
 * Model SupplierPayment
 * 
 */
export type SupplierPayment = $Result.DefaultSelection<Prisma.$SupplierPaymentPayload>
/**
 * Model SupplierStatement
 * 
 */
export type SupplierStatement = $Result.DefaultSelection<Prisma.$SupplierStatementPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Suppliers
 * const suppliers = await prisma.supplier.findMany()
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
   * // Fetch zero or more Suppliers
   * const suppliers = await prisma.supplier.findMany()
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
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs>;

  /**
   * `prisma.supplierContact`: Exposes CRUD operations for the **SupplierContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierContacts
    * const supplierContacts = await prisma.supplierContact.findMany()
    * ```
    */
  get supplierContact(): Prisma.SupplierContactDelegate<ExtArgs>;

  /**
   * `prisma.supplierBalance`: Exposes CRUD operations for the **SupplierBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierBalances
    * const supplierBalances = await prisma.supplierBalance.findMany()
    * ```
    */
  get supplierBalance(): Prisma.SupplierBalanceDelegate<ExtArgs>;

  /**
   * `prisma.supplierPayment`: Exposes CRUD operations for the **SupplierPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierPayments
    * const supplierPayments = await prisma.supplierPayment.findMany()
    * ```
    */
  get supplierPayment(): Prisma.SupplierPaymentDelegate<ExtArgs>;

  /**
   * `prisma.supplierStatement`: Exposes CRUD operations for the **SupplierStatement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierStatements
    * const supplierStatements = await prisma.supplierStatement.findMany()
    * ```
    */
  get supplierStatement(): Prisma.SupplierStatementDelegate<ExtArgs>;
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
    Supplier: 'Supplier',
    SupplierContact: 'SupplierContact',
    SupplierBalance: 'SupplierBalance',
    SupplierPayment: 'SupplierPayment',
    SupplierStatement: 'SupplierStatement'
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
      modelProps: "supplier" | "supplierContact" | "supplierBalance" | "supplierPayment" | "supplierStatement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      SupplierContact: {
        payload: Prisma.$SupplierContactPayload<ExtArgs>
        fields: Prisma.SupplierContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>
          }
          findFirst: {
            args: Prisma.SupplierContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>
          }
          findMany: {
            args: Prisma.SupplierContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>[]
          }
          create: {
            args: Prisma.SupplierContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>
          }
          createMany: {
            args: Prisma.SupplierContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>[]
          }
          delete: {
            args: Prisma.SupplierContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>
          }
          update: {
            args: Prisma.SupplierContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>
          }
          deleteMany: {
            args: Prisma.SupplierContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierContactPayload>
          }
          aggregate: {
            args: Prisma.SupplierContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierContact>
          }
          groupBy: {
            args: Prisma.SupplierContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierContactCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierContactCountAggregateOutputType> | number
          }
        }
      }
      SupplierBalance: {
        payload: Prisma.$SupplierBalancePayload<ExtArgs>
        fields: Prisma.SupplierBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>
          }
          findFirst: {
            args: Prisma.SupplierBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>
          }
          findMany: {
            args: Prisma.SupplierBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>[]
          }
          create: {
            args: Prisma.SupplierBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>
          }
          createMany: {
            args: Prisma.SupplierBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>[]
          }
          delete: {
            args: Prisma.SupplierBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>
          }
          update: {
            args: Prisma.SupplierBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>
          }
          deleteMany: {
            args: Prisma.SupplierBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierBalancePayload>
          }
          aggregate: {
            args: Prisma.SupplierBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierBalance>
          }
          groupBy: {
            args: Prisma.SupplierBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierBalanceCountAggregateOutputType> | number
          }
        }
      }
      SupplierPayment: {
        payload: Prisma.$SupplierPaymentPayload<ExtArgs>
        fields: Prisma.SupplierPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          findFirst: {
            args: Prisma.SupplierPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          findMany: {
            args: Prisma.SupplierPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          create: {
            args: Prisma.SupplierPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          createMany: {
            args: Prisma.SupplierPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          delete: {
            args: Prisma.SupplierPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          update: {
            args: Prisma.SupplierPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          deleteMany: {
            args: Prisma.SupplierPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          aggregate: {
            args: Prisma.SupplierPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierPayment>
          }
          groupBy: {
            args: Prisma.SupplierPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierPaymentCountAggregateOutputType> | number
          }
        }
      }
      SupplierStatement: {
        payload: Prisma.$SupplierStatementPayload<ExtArgs>
        fields: Prisma.SupplierStatementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierStatementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierStatementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>
          }
          findFirst: {
            args: Prisma.SupplierStatementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierStatementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>
          }
          findMany: {
            args: Prisma.SupplierStatementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>[]
          }
          create: {
            args: Prisma.SupplierStatementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>
          }
          createMany: {
            args: Prisma.SupplierStatementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierStatementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>[]
          }
          delete: {
            args: Prisma.SupplierStatementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>
          }
          update: {
            args: Prisma.SupplierStatementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>
          }
          deleteMany: {
            args: Prisma.SupplierStatementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierStatementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierStatementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierStatementPayload>
          }
          aggregate: {
            args: Prisma.SupplierStatementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierStatement>
          }
          groupBy: {
            args: Prisma.SupplierStatementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierStatementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierStatementCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierStatementCountAggregateOutputType> | number
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
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    contacts: number
    balances: number
    payments: number
    statements: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | SupplierCountOutputTypeCountContactsArgs
    balances?: boolean | SupplierCountOutputTypeCountBalancesArgs
    payments?: boolean | SupplierCountOutputTypeCountPaymentsArgs
    statements?: boolean | SupplierCountOutputTypeCountStatementsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierContactWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierBalanceWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountStatementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierStatementWhereInput
  }


  /**
   * Count Type SupplierBalanceCountOutputType
   */

  export type SupplierBalanceCountOutputType = {
    payments: number
  }

  export type SupplierBalanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SupplierBalanceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SupplierBalanceCountOutputType without action
   */
  export type SupplierBalanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalanceCountOutputType
     */
    select?: SupplierBalanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierBalanceCountOutputType without action
   */
  export type SupplierBalanceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    balance: number | null
  }

  export type SupplierSumAggregateOutputType = {
    balance: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    balance: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    balance: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    sharedShopIds: number
    name: number
    email: number
    phone: number
    address: number
    balance: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    balance?: true
  }

  export type SupplierSumAggregateInputType = {
    balance?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    balance?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    balance?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    sharedShopIds?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    balance?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string | null
    sharedShopIds: string[]
    name: string
    email: string | null
    phone: string | null
    address: string | null
    balance: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    balance?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contacts?: boolean | Supplier$contactsArgs<ExtArgs>
    balances?: boolean | Supplier$balancesArgs<ExtArgs>
    payments?: boolean | Supplier$paymentsArgs<ExtArgs>
    statements?: boolean | Supplier$statementsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    balance?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    balance?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | Supplier$contactsArgs<ExtArgs>
    balances?: boolean | Supplier$balancesArgs<ExtArgs>
    payments?: boolean | Supplier$paymentsArgs<ExtArgs>
    statements?: boolean | Supplier$statementsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      contacts: Prisma.$SupplierContactPayload<ExtArgs>[]
      balances: Prisma.$SupplierBalancePayload<ExtArgs>[]
      payments: Prisma.$SupplierPaymentPayload<ExtArgs>[]
      statements: Prisma.$SupplierStatementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string | null
      sharedShopIds: string[]
      name: string
      email: string | null
      phone: string | null
      address: string | null
      balance: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends Supplier$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "findMany"> | Null>
    balances<T extends Supplier$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Supplier$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany"> | Null>
    statements<T extends Supplier$statementsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$statementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Supplier model
   */ 
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly tenantId: FieldRef<"Supplier", 'String'>
    readonly shopId: FieldRef<"Supplier", 'String'>
    readonly sharedShopIds: FieldRef<"Supplier", 'String[]'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly balance: FieldRef<"Supplier", 'Float'>
    readonly status: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier.contacts
   */
  export type Supplier$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    where?: SupplierContactWhereInput
    orderBy?: SupplierContactOrderByWithRelationInput | SupplierContactOrderByWithRelationInput[]
    cursor?: SupplierContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierContactScalarFieldEnum | SupplierContactScalarFieldEnum[]
  }

  /**
   * Supplier.balances
   */
  export type Supplier$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    where?: SupplierBalanceWhereInput
    orderBy?: SupplierBalanceOrderByWithRelationInput | SupplierBalanceOrderByWithRelationInput[]
    cursor?: SupplierBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierBalanceScalarFieldEnum | SupplierBalanceScalarFieldEnum[]
  }

  /**
   * Supplier.payments
   */
  export type Supplier$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    cursor?: SupplierPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * Supplier.statements
   */
  export type Supplier$statementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    where?: SupplierStatementWhereInput
    orderBy?: SupplierStatementOrderByWithRelationInput | SupplierStatementOrderByWithRelationInput[]
    cursor?: SupplierStatementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierStatementScalarFieldEnum | SupplierStatementScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model SupplierContact
   */

  export type AggregateSupplierContact = {
    _count: SupplierContactCountAggregateOutputType | null
    _min: SupplierContactMinAggregateOutputType | null
    _max: SupplierContactMaxAggregateOutputType | null
  }

  export type SupplierContactMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    type: string | null
    value: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierContactMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    type: string | null
    value: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierContactCountAggregateOutputType = {
    id: number
    supplierId: number
    type: number
    value: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierContactMinAggregateInputType = {
    id?: true
    supplierId?: true
    type?: true
    value?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierContactMaxAggregateInputType = {
    id?: true
    supplierId?: true
    type?: true
    value?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierContactCountAggregateInputType = {
    id?: true
    supplierId?: true
    type?: true
    value?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierContact to aggregate.
     */
    where?: SupplierContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierContacts to fetch.
     */
    orderBy?: SupplierContactOrderByWithRelationInput | SupplierContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierContacts
    **/
    _count?: true | SupplierContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierContactMaxAggregateInputType
  }

  export type GetSupplierContactAggregateType<T extends SupplierContactAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierContact[P]>
      : GetScalarType<T[P], AggregateSupplierContact[P]>
  }




  export type SupplierContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierContactWhereInput
    orderBy?: SupplierContactOrderByWithAggregationInput | SupplierContactOrderByWithAggregationInput[]
    by: SupplierContactScalarFieldEnum[] | SupplierContactScalarFieldEnum
    having?: SupplierContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierContactCountAggregateInputType | true
    _min?: SupplierContactMinAggregateInputType
    _max?: SupplierContactMaxAggregateInputType
  }

  export type SupplierContactGroupByOutputType = {
    id: string
    supplierId: string
    type: string
    value: string
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: SupplierContactCountAggregateOutputType | null
    _min: SupplierContactMinAggregateOutputType | null
    _max: SupplierContactMaxAggregateOutputType | null
  }

  type GetSupplierContactGroupByPayload<T extends SupplierContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierContactGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierContactGroupByOutputType[P]>
        }
      >
    >


  export type SupplierContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    type?: boolean
    value?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierContact"]>

  export type SupplierContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    type?: boolean
    value?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierContact"]>

  export type SupplierContactSelectScalar = {
    id?: boolean
    supplierId?: boolean
    type?: boolean
    value?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierContact"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      type: string
      value: string
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplierContact"]>
    composites: {}
  }

  type SupplierContactGetPayload<S extends boolean | null | undefined | SupplierContactDefaultArgs> = $Result.GetResult<Prisma.$SupplierContactPayload, S>

  type SupplierContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierContactCountAggregateInputType | true
    }

  export interface SupplierContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierContact'], meta: { name: 'SupplierContact' } }
    /**
     * Find zero or one SupplierContact that matches the filter.
     * @param {SupplierContactFindUniqueArgs} args - Arguments to find a SupplierContact
     * @example
     * // Get one SupplierContact
     * const supplierContact = await prisma.supplierContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierContactFindUniqueArgs>(args: SelectSubset<T, SupplierContactFindUniqueArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierContact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierContactFindUniqueOrThrowArgs} args - Arguments to find a SupplierContact
     * @example
     * // Get one SupplierContact
     * const supplierContact = await prisma.supplierContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierContactFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactFindFirstArgs} args - Arguments to find a SupplierContact
     * @example
     * // Get one SupplierContact
     * const supplierContact = await prisma.supplierContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierContactFindFirstArgs>(args?: SelectSubset<T, SupplierContactFindFirstArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactFindFirstOrThrowArgs} args - Arguments to find a SupplierContact
     * @example
     * // Get one SupplierContact
     * const supplierContact = await prisma.supplierContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierContactFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierContacts
     * const supplierContacts = await prisma.supplierContact.findMany()
     * 
     * // Get first 10 SupplierContacts
     * const supplierContacts = await prisma.supplierContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierContactWithIdOnly = await prisma.supplierContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierContactFindManyArgs>(args?: SelectSubset<T, SupplierContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierContact.
     * @param {SupplierContactCreateArgs} args - Arguments to create a SupplierContact.
     * @example
     * // Create one SupplierContact
     * const SupplierContact = await prisma.supplierContact.create({
     *   data: {
     *     // ... data to create a SupplierContact
     *   }
     * })
     * 
     */
    create<T extends SupplierContactCreateArgs>(args: SelectSubset<T, SupplierContactCreateArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierContacts.
     * @param {SupplierContactCreateManyArgs} args - Arguments to create many SupplierContacts.
     * @example
     * // Create many SupplierContacts
     * const supplierContact = await prisma.supplierContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierContactCreateManyArgs>(args?: SelectSubset<T, SupplierContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierContacts and returns the data saved in the database.
     * @param {SupplierContactCreateManyAndReturnArgs} args - Arguments to create many SupplierContacts.
     * @example
     * // Create many SupplierContacts
     * const supplierContact = await prisma.supplierContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierContacts and only return the `id`
     * const supplierContactWithIdOnly = await prisma.supplierContact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierContactCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierContact.
     * @param {SupplierContactDeleteArgs} args - Arguments to delete one SupplierContact.
     * @example
     * // Delete one SupplierContact
     * const SupplierContact = await prisma.supplierContact.delete({
     *   where: {
     *     // ... filter to delete one SupplierContact
     *   }
     * })
     * 
     */
    delete<T extends SupplierContactDeleteArgs>(args: SelectSubset<T, SupplierContactDeleteArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierContact.
     * @param {SupplierContactUpdateArgs} args - Arguments to update one SupplierContact.
     * @example
     * // Update one SupplierContact
     * const supplierContact = await prisma.supplierContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierContactUpdateArgs>(args: SelectSubset<T, SupplierContactUpdateArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierContacts.
     * @param {SupplierContactDeleteManyArgs} args - Arguments to filter SupplierContacts to delete.
     * @example
     * // Delete a few SupplierContacts
     * const { count } = await prisma.supplierContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierContactDeleteManyArgs>(args?: SelectSubset<T, SupplierContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierContacts
     * const supplierContact = await prisma.supplierContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierContactUpdateManyArgs>(args: SelectSubset<T, SupplierContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierContact.
     * @param {SupplierContactUpsertArgs} args - Arguments to update or create a SupplierContact.
     * @example
     * // Update or create a SupplierContact
     * const supplierContact = await prisma.supplierContact.upsert({
     *   create: {
     *     // ... data to create a SupplierContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierContact we want to update
     *   }
     * })
     */
    upsert<T extends SupplierContactUpsertArgs>(args: SelectSubset<T, SupplierContactUpsertArgs<ExtArgs>>): Prisma__SupplierContactClient<$Result.GetResult<Prisma.$SupplierContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactCountArgs} args - Arguments to filter SupplierContacts to count.
     * @example
     * // Count the number of SupplierContacts
     * const count = await prisma.supplierContact.count({
     *   where: {
     *     // ... the filter for the SupplierContacts we want to count
     *   }
     * })
    **/
    count<T extends SupplierContactCountArgs>(
      args?: Subset<T, SupplierContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierContactAggregateArgs>(args: Subset<T, SupplierContactAggregateArgs>): Prisma.PrismaPromise<GetSupplierContactAggregateType<T>>

    /**
     * Group by SupplierContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactGroupByArgs} args - Group by arguments.
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
      T extends SupplierContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierContactGroupByArgs['orderBy'] }
        : { orderBy?: SupplierContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierContact model
   */
  readonly fields: SupplierContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SupplierContact model
   */ 
  interface SupplierContactFieldRefs {
    readonly id: FieldRef<"SupplierContact", 'String'>
    readonly supplierId: FieldRef<"SupplierContact", 'String'>
    readonly type: FieldRef<"SupplierContact", 'String'>
    readonly value: FieldRef<"SupplierContact", 'String'>
    readonly isPrimary: FieldRef<"SupplierContact", 'Boolean'>
    readonly createdAt: FieldRef<"SupplierContact", 'DateTime'>
    readonly updatedAt: FieldRef<"SupplierContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierContact findUnique
   */
  export type SupplierContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * Filter, which SupplierContact to fetch.
     */
    where: SupplierContactWhereUniqueInput
  }

  /**
   * SupplierContact findUniqueOrThrow
   */
  export type SupplierContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * Filter, which SupplierContact to fetch.
     */
    where: SupplierContactWhereUniqueInput
  }

  /**
   * SupplierContact findFirst
   */
  export type SupplierContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * Filter, which SupplierContact to fetch.
     */
    where?: SupplierContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierContacts to fetch.
     */
    orderBy?: SupplierContactOrderByWithRelationInput | SupplierContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierContacts.
     */
    cursor?: SupplierContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierContacts.
     */
    distinct?: SupplierContactScalarFieldEnum | SupplierContactScalarFieldEnum[]
  }

  /**
   * SupplierContact findFirstOrThrow
   */
  export type SupplierContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * Filter, which SupplierContact to fetch.
     */
    where?: SupplierContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierContacts to fetch.
     */
    orderBy?: SupplierContactOrderByWithRelationInput | SupplierContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierContacts.
     */
    cursor?: SupplierContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierContacts.
     */
    distinct?: SupplierContactScalarFieldEnum | SupplierContactScalarFieldEnum[]
  }

  /**
   * SupplierContact findMany
   */
  export type SupplierContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * Filter, which SupplierContacts to fetch.
     */
    where?: SupplierContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierContacts to fetch.
     */
    orderBy?: SupplierContactOrderByWithRelationInput | SupplierContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierContacts.
     */
    cursor?: SupplierContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierContacts.
     */
    skip?: number
    distinct?: SupplierContactScalarFieldEnum | SupplierContactScalarFieldEnum[]
  }

  /**
   * SupplierContact create
   */
  export type SupplierContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierContact.
     */
    data: XOR<SupplierContactCreateInput, SupplierContactUncheckedCreateInput>
  }

  /**
   * SupplierContact createMany
   */
  export type SupplierContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierContacts.
     */
    data: SupplierContactCreateManyInput | SupplierContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierContact createManyAndReturn
   */
  export type SupplierContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierContacts.
     */
    data: SupplierContactCreateManyInput | SupplierContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierContact update
   */
  export type SupplierContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierContact.
     */
    data: XOR<SupplierContactUpdateInput, SupplierContactUncheckedUpdateInput>
    /**
     * Choose, which SupplierContact to update.
     */
    where: SupplierContactWhereUniqueInput
  }

  /**
   * SupplierContact updateMany
   */
  export type SupplierContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierContacts.
     */
    data: XOR<SupplierContactUpdateManyMutationInput, SupplierContactUncheckedUpdateManyInput>
    /**
     * Filter which SupplierContacts to update
     */
    where?: SupplierContactWhereInput
  }

  /**
   * SupplierContact upsert
   */
  export type SupplierContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierContact to update in case it exists.
     */
    where: SupplierContactWhereUniqueInput
    /**
     * In case the SupplierContact found by the `where` argument doesn't exist, create a new SupplierContact with this data.
     */
    create: XOR<SupplierContactCreateInput, SupplierContactUncheckedCreateInput>
    /**
     * In case the SupplierContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierContactUpdateInput, SupplierContactUncheckedUpdateInput>
  }

  /**
   * SupplierContact delete
   */
  export type SupplierContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
    /**
     * Filter which SupplierContact to delete.
     */
    where: SupplierContactWhereUniqueInput
  }

  /**
   * SupplierContact deleteMany
   */
  export type SupplierContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierContacts to delete
     */
    where?: SupplierContactWhereInput
  }

  /**
   * SupplierContact without action
   */
  export type SupplierContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContact
     */
    select?: SupplierContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierContactInclude<ExtArgs> | null
  }


  /**
   * Model SupplierBalance
   */

  export type AggregateSupplierBalance = {
    _count: SupplierBalanceCountAggregateOutputType | null
    _avg: SupplierBalanceAvgAggregateOutputType | null
    _sum: SupplierBalanceSumAggregateOutputType | null
    _min: SupplierBalanceMinAggregateOutputType | null
    _max: SupplierBalanceMaxAggregateOutputType | null
  }

  export type SupplierBalanceAvgAggregateOutputType = {
    amount: number | null
  }

  export type SupplierBalanceSumAggregateOutputType = {
    amount: number | null
  }

  export type SupplierBalanceMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    tenantId: string | null
    amount: number | null
    currency: string | null
    updatedAt: Date | null
  }

  export type SupplierBalanceMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    tenantId: string | null
    amount: number | null
    currency: string | null
    updatedAt: Date | null
  }

  export type SupplierBalanceCountAggregateOutputType = {
    id: number
    supplierId: number
    tenantId: number
    amount: number
    currency: number
    updatedAt: number
    _all: number
  }


  export type SupplierBalanceAvgAggregateInputType = {
    amount?: true
  }

  export type SupplierBalanceSumAggregateInputType = {
    amount?: true
  }

  export type SupplierBalanceMinAggregateInputType = {
    id?: true
    supplierId?: true
    tenantId?: true
    amount?: true
    currency?: true
    updatedAt?: true
  }

  export type SupplierBalanceMaxAggregateInputType = {
    id?: true
    supplierId?: true
    tenantId?: true
    amount?: true
    currency?: true
    updatedAt?: true
  }

  export type SupplierBalanceCountAggregateInputType = {
    id?: true
    supplierId?: true
    tenantId?: true
    amount?: true
    currency?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierBalance to aggregate.
     */
    where?: SupplierBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierBalances to fetch.
     */
    orderBy?: SupplierBalanceOrderByWithRelationInput | SupplierBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierBalances
    **/
    _count?: true | SupplierBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierBalanceMaxAggregateInputType
  }

  export type GetSupplierBalanceAggregateType<T extends SupplierBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierBalance[P]>
      : GetScalarType<T[P], AggregateSupplierBalance[P]>
  }




  export type SupplierBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierBalanceWhereInput
    orderBy?: SupplierBalanceOrderByWithAggregationInput | SupplierBalanceOrderByWithAggregationInput[]
    by: SupplierBalanceScalarFieldEnum[] | SupplierBalanceScalarFieldEnum
    having?: SupplierBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierBalanceCountAggregateInputType | true
    _avg?: SupplierBalanceAvgAggregateInputType
    _sum?: SupplierBalanceSumAggregateInputType
    _min?: SupplierBalanceMinAggregateInputType
    _max?: SupplierBalanceMaxAggregateInputType
  }

  export type SupplierBalanceGroupByOutputType = {
    id: string
    supplierId: string
    tenantId: string
    amount: number
    currency: string
    updatedAt: Date
    _count: SupplierBalanceCountAggregateOutputType | null
    _avg: SupplierBalanceAvgAggregateOutputType | null
    _sum: SupplierBalanceSumAggregateOutputType | null
    _min: SupplierBalanceMinAggregateOutputType | null
    _max: SupplierBalanceMaxAggregateOutputType | null
  }

  type GetSupplierBalanceGroupByPayload<T extends SupplierBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierBalanceGroupByOutputType[P]>
        }
      >
    >


  export type SupplierBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    payments?: boolean | SupplierBalance$paymentsArgs<ExtArgs>
    _count?: boolean | SupplierBalanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierBalance"]>

  export type SupplierBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierBalance"]>

  export type SupplierBalanceSelectScalar = {
    id?: boolean
    supplierId?: boolean
    tenantId?: boolean
    amount?: boolean
    currency?: boolean
    updatedAt?: boolean
  }

  export type SupplierBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    payments?: boolean | SupplierBalance$paymentsArgs<ExtArgs>
    _count?: boolean | SupplierBalanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierBalance"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      payments: Prisma.$SupplierPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      tenantId: string
      amount: number
      currency: string
      updatedAt: Date
    }, ExtArgs["result"]["supplierBalance"]>
    composites: {}
  }

  type SupplierBalanceGetPayload<S extends boolean | null | undefined | SupplierBalanceDefaultArgs> = $Result.GetResult<Prisma.$SupplierBalancePayload, S>

  type SupplierBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierBalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierBalanceCountAggregateInputType | true
    }

  export interface SupplierBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierBalance'], meta: { name: 'SupplierBalance' } }
    /**
     * Find zero or one SupplierBalance that matches the filter.
     * @param {SupplierBalanceFindUniqueArgs} args - Arguments to find a SupplierBalance
     * @example
     * // Get one SupplierBalance
     * const supplierBalance = await prisma.supplierBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierBalanceFindUniqueArgs>(args: SelectSubset<T, SupplierBalanceFindUniqueArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierBalance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierBalanceFindUniqueOrThrowArgs} args - Arguments to find a SupplierBalance
     * @example
     * // Get one SupplierBalance
     * const supplierBalance = await prisma.supplierBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceFindFirstArgs} args - Arguments to find a SupplierBalance
     * @example
     * // Get one SupplierBalance
     * const supplierBalance = await prisma.supplierBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierBalanceFindFirstArgs>(args?: SelectSubset<T, SupplierBalanceFindFirstArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceFindFirstOrThrowArgs} args - Arguments to find a SupplierBalance
     * @example
     * // Get one SupplierBalance
     * const supplierBalance = await prisma.supplierBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierBalances
     * const supplierBalances = await prisma.supplierBalance.findMany()
     * 
     * // Get first 10 SupplierBalances
     * const supplierBalances = await prisma.supplierBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierBalanceWithIdOnly = await prisma.supplierBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierBalanceFindManyArgs>(args?: SelectSubset<T, SupplierBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierBalance.
     * @param {SupplierBalanceCreateArgs} args - Arguments to create a SupplierBalance.
     * @example
     * // Create one SupplierBalance
     * const SupplierBalance = await prisma.supplierBalance.create({
     *   data: {
     *     // ... data to create a SupplierBalance
     *   }
     * })
     * 
     */
    create<T extends SupplierBalanceCreateArgs>(args: SelectSubset<T, SupplierBalanceCreateArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierBalances.
     * @param {SupplierBalanceCreateManyArgs} args - Arguments to create many SupplierBalances.
     * @example
     * // Create many SupplierBalances
     * const supplierBalance = await prisma.supplierBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierBalanceCreateManyArgs>(args?: SelectSubset<T, SupplierBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierBalances and returns the data saved in the database.
     * @param {SupplierBalanceCreateManyAndReturnArgs} args - Arguments to create many SupplierBalances.
     * @example
     * // Create many SupplierBalances
     * const supplierBalance = await prisma.supplierBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierBalances and only return the `id`
     * const supplierBalanceWithIdOnly = await prisma.supplierBalance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierBalance.
     * @param {SupplierBalanceDeleteArgs} args - Arguments to delete one SupplierBalance.
     * @example
     * // Delete one SupplierBalance
     * const SupplierBalance = await prisma.supplierBalance.delete({
     *   where: {
     *     // ... filter to delete one SupplierBalance
     *   }
     * })
     * 
     */
    delete<T extends SupplierBalanceDeleteArgs>(args: SelectSubset<T, SupplierBalanceDeleteArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierBalance.
     * @param {SupplierBalanceUpdateArgs} args - Arguments to update one SupplierBalance.
     * @example
     * // Update one SupplierBalance
     * const supplierBalance = await prisma.supplierBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierBalanceUpdateArgs>(args: SelectSubset<T, SupplierBalanceUpdateArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierBalances.
     * @param {SupplierBalanceDeleteManyArgs} args - Arguments to filter SupplierBalances to delete.
     * @example
     * // Delete a few SupplierBalances
     * const { count } = await prisma.supplierBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierBalanceDeleteManyArgs>(args?: SelectSubset<T, SupplierBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierBalances
     * const supplierBalance = await prisma.supplierBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierBalanceUpdateManyArgs>(args: SelectSubset<T, SupplierBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierBalance.
     * @param {SupplierBalanceUpsertArgs} args - Arguments to update or create a SupplierBalance.
     * @example
     * // Update or create a SupplierBalance
     * const supplierBalance = await prisma.supplierBalance.upsert({
     *   create: {
     *     // ... data to create a SupplierBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierBalance we want to update
     *   }
     * })
     */
    upsert<T extends SupplierBalanceUpsertArgs>(args: SelectSubset<T, SupplierBalanceUpsertArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceCountArgs} args - Arguments to filter SupplierBalances to count.
     * @example
     * // Count the number of SupplierBalances
     * const count = await prisma.supplierBalance.count({
     *   where: {
     *     // ... the filter for the SupplierBalances we want to count
     *   }
     * })
    **/
    count<T extends SupplierBalanceCountArgs>(
      args?: Subset<T, SupplierBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierBalanceAggregateArgs>(args: Subset<T, SupplierBalanceAggregateArgs>): Prisma.PrismaPromise<GetSupplierBalanceAggregateType<T>>

    /**
     * Group by SupplierBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBalanceGroupByArgs} args - Group by arguments.
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
      T extends SupplierBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierBalanceGroupByArgs['orderBy'] }
        : { orderBy?: SupplierBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierBalance model
   */
  readonly fields: SupplierBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payments<T extends SupplierBalance$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, SupplierBalance$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SupplierBalance model
   */ 
  interface SupplierBalanceFieldRefs {
    readonly id: FieldRef<"SupplierBalance", 'String'>
    readonly supplierId: FieldRef<"SupplierBalance", 'String'>
    readonly tenantId: FieldRef<"SupplierBalance", 'String'>
    readonly amount: FieldRef<"SupplierBalance", 'Float'>
    readonly currency: FieldRef<"SupplierBalance", 'String'>
    readonly updatedAt: FieldRef<"SupplierBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierBalance findUnique
   */
  export type SupplierBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierBalance to fetch.
     */
    where: SupplierBalanceWhereUniqueInput
  }

  /**
   * SupplierBalance findUniqueOrThrow
   */
  export type SupplierBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierBalance to fetch.
     */
    where: SupplierBalanceWhereUniqueInput
  }

  /**
   * SupplierBalance findFirst
   */
  export type SupplierBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierBalance to fetch.
     */
    where?: SupplierBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierBalances to fetch.
     */
    orderBy?: SupplierBalanceOrderByWithRelationInput | SupplierBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierBalances.
     */
    cursor?: SupplierBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierBalances.
     */
    distinct?: SupplierBalanceScalarFieldEnum | SupplierBalanceScalarFieldEnum[]
  }

  /**
   * SupplierBalance findFirstOrThrow
   */
  export type SupplierBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierBalance to fetch.
     */
    where?: SupplierBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierBalances to fetch.
     */
    orderBy?: SupplierBalanceOrderByWithRelationInput | SupplierBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierBalances.
     */
    cursor?: SupplierBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierBalances.
     */
    distinct?: SupplierBalanceScalarFieldEnum | SupplierBalanceScalarFieldEnum[]
  }

  /**
   * SupplierBalance findMany
   */
  export type SupplierBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierBalances to fetch.
     */
    where?: SupplierBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierBalances to fetch.
     */
    orderBy?: SupplierBalanceOrderByWithRelationInput | SupplierBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierBalances.
     */
    cursor?: SupplierBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierBalances.
     */
    skip?: number
    distinct?: SupplierBalanceScalarFieldEnum | SupplierBalanceScalarFieldEnum[]
  }

  /**
   * SupplierBalance create
   */
  export type SupplierBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierBalance.
     */
    data: XOR<SupplierBalanceCreateInput, SupplierBalanceUncheckedCreateInput>
  }

  /**
   * SupplierBalance createMany
   */
  export type SupplierBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierBalances.
     */
    data: SupplierBalanceCreateManyInput | SupplierBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierBalance createManyAndReturn
   */
  export type SupplierBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierBalances.
     */
    data: SupplierBalanceCreateManyInput | SupplierBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierBalance update
   */
  export type SupplierBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierBalance.
     */
    data: XOR<SupplierBalanceUpdateInput, SupplierBalanceUncheckedUpdateInput>
    /**
     * Choose, which SupplierBalance to update.
     */
    where: SupplierBalanceWhereUniqueInput
  }

  /**
   * SupplierBalance updateMany
   */
  export type SupplierBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierBalances.
     */
    data: XOR<SupplierBalanceUpdateManyMutationInput, SupplierBalanceUncheckedUpdateManyInput>
    /**
     * Filter which SupplierBalances to update
     */
    where?: SupplierBalanceWhereInput
  }

  /**
   * SupplierBalance upsert
   */
  export type SupplierBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierBalance to update in case it exists.
     */
    where: SupplierBalanceWhereUniqueInput
    /**
     * In case the SupplierBalance found by the `where` argument doesn't exist, create a new SupplierBalance with this data.
     */
    create: XOR<SupplierBalanceCreateInput, SupplierBalanceUncheckedCreateInput>
    /**
     * In case the SupplierBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierBalanceUpdateInput, SupplierBalanceUncheckedUpdateInput>
  }

  /**
   * SupplierBalance delete
   */
  export type SupplierBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
    /**
     * Filter which SupplierBalance to delete.
     */
    where: SupplierBalanceWhereUniqueInput
  }

  /**
   * SupplierBalance deleteMany
   */
  export type SupplierBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierBalances to delete
     */
    where?: SupplierBalanceWhereInput
  }

  /**
   * SupplierBalance.payments
   */
  export type SupplierBalance$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    cursor?: SupplierPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierBalance without action
   */
  export type SupplierBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBalance
     */
    select?: SupplierBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierBalanceInclude<ExtArgs> | null
  }


  /**
   * Model SupplierPayment
   */

  export type AggregateSupplierPayment = {
    _count: SupplierPaymentCountAggregateOutputType | null
    _avg: SupplierPaymentAvgAggregateOutputType | null
    _sum: SupplierPaymentSumAggregateOutputType | null
    _min: SupplierPaymentMinAggregateOutputType | null
    _max: SupplierPaymentMaxAggregateOutputType | null
  }

  export type SupplierPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type SupplierPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type SupplierPaymentMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    balanceId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type SupplierPaymentMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    balanceId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type SupplierPaymentCountAggregateOutputType = {
    id: number
    supplierId: number
    balanceId: number
    amount: number
    method: number
    reference: number
    createdAt: number
    _all: number
  }


  export type SupplierPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type SupplierPaymentSumAggregateInputType = {
    amount?: true
  }

  export type SupplierPaymentMinAggregateInputType = {
    id?: true
    supplierId?: true
    balanceId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type SupplierPaymentMaxAggregateInputType = {
    id?: true
    supplierId?: true
    balanceId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type SupplierPaymentCountAggregateInputType = {
    id?: true
    supplierId?: true
    balanceId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPayment to aggregate.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierPayments
    **/
    _count?: true | SupplierPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierPaymentMaxAggregateInputType
  }

  export type GetSupplierPaymentAggregateType<T extends SupplierPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierPayment[P]>
      : GetScalarType<T[P], AggregateSupplierPayment[P]>
  }




  export type SupplierPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithAggregationInput | SupplierPaymentOrderByWithAggregationInput[]
    by: SupplierPaymentScalarFieldEnum[] | SupplierPaymentScalarFieldEnum
    having?: SupplierPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierPaymentCountAggregateInputType | true
    _avg?: SupplierPaymentAvgAggregateInputType
    _sum?: SupplierPaymentSumAggregateInputType
    _min?: SupplierPaymentMinAggregateInputType
    _max?: SupplierPaymentMaxAggregateInputType
  }

  export type SupplierPaymentGroupByOutputType = {
    id: string
    supplierId: string
    balanceId: string
    amount: number
    method: string
    reference: string | null
    createdAt: Date
    _count: SupplierPaymentCountAggregateOutputType | null
    _avg: SupplierPaymentAvgAggregateOutputType | null
    _sum: SupplierPaymentSumAggregateOutputType | null
    _min: SupplierPaymentMinAggregateOutputType | null
    _max: SupplierPaymentMaxAggregateOutputType | null
  }

  type GetSupplierPaymentGroupByPayload<T extends SupplierPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierPaymentGroupByOutputType[P]>
        }
      >
    >


  export type SupplierPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    balanceId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    balance?: boolean | SupplierBalanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    balanceId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    balance?: boolean | SupplierBalanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectScalar = {
    id?: boolean
    supplierId?: boolean
    balanceId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type SupplierPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    balance?: boolean | SupplierBalanceDefaultArgs<ExtArgs>
  }
  export type SupplierPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    balance?: boolean | SupplierBalanceDefaultArgs<ExtArgs>
  }

  export type $SupplierPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierPayment"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      balance: Prisma.$SupplierBalancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      balanceId: string
      amount: number
      method: string
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplierPayment"]>
    composites: {}
  }

  type SupplierPaymentGetPayload<S extends boolean | null | undefined | SupplierPaymentDefaultArgs> = $Result.GetResult<Prisma.$SupplierPaymentPayload, S>

  type SupplierPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierPaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierPaymentCountAggregateInputType | true
    }

  export interface SupplierPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierPayment'], meta: { name: 'SupplierPayment' } }
    /**
     * Find zero or one SupplierPayment that matches the filter.
     * @param {SupplierPaymentFindUniqueArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierPaymentFindUniqueArgs>(args: SelectSubset<T, SupplierPaymentFindUniqueArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierPayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierPaymentFindUniqueOrThrowArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindFirstArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierPaymentFindFirstArgs>(args?: SelectSubset<T, SupplierPaymentFindFirstArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindFirstOrThrowArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierPayments
     * const supplierPayments = await prisma.supplierPayment.findMany()
     * 
     * // Get first 10 SupplierPayments
     * const supplierPayments = await prisma.supplierPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierPaymentFindManyArgs>(args?: SelectSubset<T, SupplierPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierPayment.
     * @param {SupplierPaymentCreateArgs} args - Arguments to create a SupplierPayment.
     * @example
     * // Create one SupplierPayment
     * const SupplierPayment = await prisma.supplierPayment.create({
     *   data: {
     *     // ... data to create a SupplierPayment
     *   }
     * })
     * 
     */
    create<T extends SupplierPaymentCreateArgs>(args: SelectSubset<T, SupplierPaymentCreateArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierPayments.
     * @param {SupplierPaymentCreateManyArgs} args - Arguments to create many SupplierPayments.
     * @example
     * // Create many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierPaymentCreateManyArgs>(args?: SelectSubset<T, SupplierPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierPayments and returns the data saved in the database.
     * @param {SupplierPaymentCreateManyAndReturnArgs} args - Arguments to create many SupplierPayments.
     * @example
     * // Create many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierPayments and only return the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierPayment.
     * @param {SupplierPaymentDeleteArgs} args - Arguments to delete one SupplierPayment.
     * @example
     * // Delete one SupplierPayment
     * const SupplierPayment = await prisma.supplierPayment.delete({
     *   where: {
     *     // ... filter to delete one SupplierPayment
     *   }
     * })
     * 
     */
    delete<T extends SupplierPaymentDeleteArgs>(args: SelectSubset<T, SupplierPaymentDeleteArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierPayment.
     * @param {SupplierPaymentUpdateArgs} args - Arguments to update one SupplierPayment.
     * @example
     * // Update one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierPaymentUpdateArgs>(args: SelectSubset<T, SupplierPaymentUpdateArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierPayments.
     * @param {SupplierPaymentDeleteManyArgs} args - Arguments to filter SupplierPayments to delete.
     * @example
     * // Delete a few SupplierPayments
     * const { count } = await prisma.supplierPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierPaymentDeleteManyArgs>(args?: SelectSubset<T, SupplierPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierPaymentUpdateManyArgs>(args: SelectSubset<T, SupplierPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierPayment.
     * @param {SupplierPaymentUpsertArgs} args - Arguments to update or create a SupplierPayment.
     * @example
     * // Update or create a SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.upsert({
     *   create: {
     *     // ... data to create a SupplierPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierPayment we want to update
     *   }
     * })
     */
    upsert<T extends SupplierPaymentUpsertArgs>(args: SelectSubset<T, SupplierPaymentUpsertArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentCountArgs} args - Arguments to filter SupplierPayments to count.
     * @example
     * // Count the number of SupplierPayments
     * const count = await prisma.supplierPayment.count({
     *   where: {
     *     // ... the filter for the SupplierPayments we want to count
     *   }
     * })
    **/
    count<T extends SupplierPaymentCountArgs>(
      args?: Subset<T, SupplierPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierPaymentAggregateArgs>(args: Subset<T, SupplierPaymentAggregateArgs>): Prisma.PrismaPromise<GetSupplierPaymentAggregateType<T>>

    /**
     * Group by SupplierPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentGroupByArgs} args - Group by arguments.
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
      T extends SupplierPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierPaymentGroupByArgs['orderBy'] }
        : { orderBy?: SupplierPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierPayment model
   */
  readonly fields: SupplierPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    balance<T extends SupplierBalanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierBalanceDefaultArgs<ExtArgs>>): Prisma__SupplierBalanceClient<$Result.GetResult<Prisma.$SupplierBalancePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SupplierPayment model
   */ 
  interface SupplierPaymentFieldRefs {
    readonly id: FieldRef<"SupplierPayment", 'String'>
    readonly supplierId: FieldRef<"SupplierPayment", 'String'>
    readonly balanceId: FieldRef<"SupplierPayment", 'String'>
    readonly amount: FieldRef<"SupplierPayment", 'Float'>
    readonly method: FieldRef<"SupplierPayment", 'String'>
    readonly reference: FieldRef<"SupplierPayment", 'String'>
    readonly createdAt: FieldRef<"SupplierPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierPayment findUnique
   */
  export type SupplierPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment findUniqueOrThrow
   */
  export type SupplierPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment findFirst
   */
  export type SupplierPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment findFirstOrThrow
   */
  export type SupplierPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment findMany
   */
  export type SupplierPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayments to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment create
   */
  export type SupplierPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierPayment.
     */
    data: XOR<SupplierPaymentCreateInput, SupplierPaymentUncheckedCreateInput>
  }

  /**
   * SupplierPayment createMany
   */
  export type SupplierPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierPayments.
     */
    data: SupplierPaymentCreateManyInput | SupplierPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierPayment createManyAndReturn
   */
  export type SupplierPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierPayments.
     */
    data: SupplierPaymentCreateManyInput | SupplierPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierPayment update
   */
  export type SupplierPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierPayment.
     */
    data: XOR<SupplierPaymentUpdateInput, SupplierPaymentUncheckedUpdateInput>
    /**
     * Choose, which SupplierPayment to update.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment updateMany
   */
  export type SupplierPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierPayments.
     */
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPayments to update
     */
    where?: SupplierPaymentWhereInput
  }

  /**
   * SupplierPayment upsert
   */
  export type SupplierPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierPayment to update in case it exists.
     */
    where: SupplierPaymentWhereUniqueInput
    /**
     * In case the SupplierPayment found by the `where` argument doesn't exist, create a new SupplierPayment with this data.
     */
    create: XOR<SupplierPaymentCreateInput, SupplierPaymentUncheckedCreateInput>
    /**
     * In case the SupplierPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierPaymentUpdateInput, SupplierPaymentUncheckedUpdateInput>
  }

  /**
   * SupplierPayment delete
   */
  export type SupplierPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter which SupplierPayment to delete.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment deleteMany
   */
  export type SupplierPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPayments to delete
     */
    where?: SupplierPaymentWhereInput
  }

  /**
   * SupplierPayment without action
   */
  export type SupplierPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
  }


  /**
   * Model SupplierStatement
   */

  export type AggregateSupplierStatement = {
    _count: SupplierStatementCountAggregateOutputType | null
    _avg: SupplierStatementAvgAggregateOutputType | null
    _sum: SupplierStatementSumAggregateOutputType | null
    _min: SupplierStatementMinAggregateOutputType | null
    _max: SupplierStatementMaxAggregateOutputType | null
  }

  export type SupplierStatementAvgAggregateOutputType = {
    balance: number | null
  }

  export type SupplierStatementSumAggregateOutputType = {
    balance: number | null
  }

  export type SupplierStatementMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    period: string | null
    balance: number | null
    generatedAt: Date | null
  }

  export type SupplierStatementMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    period: string | null
    balance: number | null
    generatedAt: Date | null
  }

  export type SupplierStatementCountAggregateOutputType = {
    id: number
    supplierId: number
    period: number
    balance: number
    generatedAt: number
    _all: number
  }


  export type SupplierStatementAvgAggregateInputType = {
    balance?: true
  }

  export type SupplierStatementSumAggregateInputType = {
    balance?: true
  }

  export type SupplierStatementMinAggregateInputType = {
    id?: true
    supplierId?: true
    period?: true
    balance?: true
    generatedAt?: true
  }

  export type SupplierStatementMaxAggregateInputType = {
    id?: true
    supplierId?: true
    period?: true
    balance?: true
    generatedAt?: true
  }

  export type SupplierStatementCountAggregateInputType = {
    id?: true
    supplierId?: true
    period?: true
    balance?: true
    generatedAt?: true
    _all?: true
  }

  export type SupplierStatementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierStatement to aggregate.
     */
    where?: SupplierStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierStatements to fetch.
     */
    orderBy?: SupplierStatementOrderByWithRelationInput | SupplierStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierStatements
    **/
    _count?: true | SupplierStatementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierStatementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierStatementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierStatementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierStatementMaxAggregateInputType
  }

  export type GetSupplierStatementAggregateType<T extends SupplierStatementAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierStatement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierStatement[P]>
      : GetScalarType<T[P], AggregateSupplierStatement[P]>
  }




  export type SupplierStatementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierStatementWhereInput
    orderBy?: SupplierStatementOrderByWithAggregationInput | SupplierStatementOrderByWithAggregationInput[]
    by: SupplierStatementScalarFieldEnum[] | SupplierStatementScalarFieldEnum
    having?: SupplierStatementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierStatementCountAggregateInputType | true
    _avg?: SupplierStatementAvgAggregateInputType
    _sum?: SupplierStatementSumAggregateInputType
    _min?: SupplierStatementMinAggregateInputType
    _max?: SupplierStatementMaxAggregateInputType
  }

  export type SupplierStatementGroupByOutputType = {
    id: string
    supplierId: string
    period: string
    balance: number
    generatedAt: Date
    _count: SupplierStatementCountAggregateOutputType | null
    _avg: SupplierStatementAvgAggregateOutputType | null
    _sum: SupplierStatementSumAggregateOutputType | null
    _min: SupplierStatementMinAggregateOutputType | null
    _max: SupplierStatementMaxAggregateOutputType | null
  }

  type GetSupplierStatementGroupByPayload<T extends SupplierStatementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierStatementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierStatementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierStatementGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierStatementGroupByOutputType[P]>
        }
      >
    >


  export type SupplierStatementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    period?: boolean
    balance?: boolean
    generatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierStatement"]>

  export type SupplierStatementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    period?: boolean
    balance?: boolean
    generatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierStatement"]>

  export type SupplierStatementSelectScalar = {
    id?: boolean
    supplierId?: boolean
    period?: boolean
    balance?: boolean
    generatedAt?: boolean
  }

  export type SupplierStatementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierStatementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierStatementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierStatement"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      period: string
      balance: number
      generatedAt: Date
    }, ExtArgs["result"]["supplierStatement"]>
    composites: {}
  }

  type SupplierStatementGetPayload<S extends boolean | null | undefined | SupplierStatementDefaultArgs> = $Result.GetResult<Prisma.$SupplierStatementPayload, S>

  type SupplierStatementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierStatementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierStatementCountAggregateInputType | true
    }

  export interface SupplierStatementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierStatement'], meta: { name: 'SupplierStatement' } }
    /**
     * Find zero or one SupplierStatement that matches the filter.
     * @param {SupplierStatementFindUniqueArgs} args - Arguments to find a SupplierStatement
     * @example
     * // Get one SupplierStatement
     * const supplierStatement = await prisma.supplierStatement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierStatementFindUniqueArgs>(args: SelectSubset<T, SupplierStatementFindUniqueArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierStatement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierStatementFindUniqueOrThrowArgs} args - Arguments to find a SupplierStatement
     * @example
     * // Get one SupplierStatement
     * const supplierStatement = await prisma.supplierStatement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierStatementFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierStatementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierStatement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementFindFirstArgs} args - Arguments to find a SupplierStatement
     * @example
     * // Get one SupplierStatement
     * const supplierStatement = await prisma.supplierStatement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierStatementFindFirstArgs>(args?: SelectSubset<T, SupplierStatementFindFirstArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierStatement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementFindFirstOrThrowArgs} args - Arguments to find a SupplierStatement
     * @example
     * // Get one SupplierStatement
     * const supplierStatement = await prisma.supplierStatement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierStatementFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierStatementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierStatements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierStatements
     * const supplierStatements = await prisma.supplierStatement.findMany()
     * 
     * // Get first 10 SupplierStatements
     * const supplierStatements = await prisma.supplierStatement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierStatementWithIdOnly = await prisma.supplierStatement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierStatementFindManyArgs>(args?: SelectSubset<T, SupplierStatementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierStatement.
     * @param {SupplierStatementCreateArgs} args - Arguments to create a SupplierStatement.
     * @example
     * // Create one SupplierStatement
     * const SupplierStatement = await prisma.supplierStatement.create({
     *   data: {
     *     // ... data to create a SupplierStatement
     *   }
     * })
     * 
     */
    create<T extends SupplierStatementCreateArgs>(args: SelectSubset<T, SupplierStatementCreateArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierStatements.
     * @param {SupplierStatementCreateManyArgs} args - Arguments to create many SupplierStatements.
     * @example
     * // Create many SupplierStatements
     * const supplierStatement = await prisma.supplierStatement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierStatementCreateManyArgs>(args?: SelectSubset<T, SupplierStatementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierStatements and returns the data saved in the database.
     * @param {SupplierStatementCreateManyAndReturnArgs} args - Arguments to create many SupplierStatements.
     * @example
     * // Create many SupplierStatements
     * const supplierStatement = await prisma.supplierStatement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierStatements and only return the `id`
     * const supplierStatementWithIdOnly = await prisma.supplierStatement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierStatementCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierStatementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierStatement.
     * @param {SupplierStatementDeleteArgs} args - Arguments to delete one SupplierStatement.
     * @example
     * // Delete one SupplierStatement
     * const SupplierStatement = await prisma.supplierStatement.delete({
     *   where: {
     *     // ... filter to delete one SupplierStatement
     *   }
     * })
     * 
     */
    delete<T extends SupplierStatementDeleteArgs>(args: SelectSubset<T, SupplierStatementDeleteArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierStatement.
     * @param {SupplierStatementUpdateArgs} args - Arguments to update one SupplierStatement.
     * @example
     * // Update one SupplierStatement
     * const supplierStatement = await prisma.supplierStatement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierStatementUpdateArgs>(args: SelectSubset<T, SupplierStatementUpdateArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierStatements.
     * @param {SupplierStatementDeleteManyArgs} args - Arguments to filter SupplierStatements to delete.
     * @example
     * // Delete a few SupplierStatements
     * const { count } = await prisma.supplierStatement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierStatementDeleteManyArgs>(args?: SelectSubset<T, SupplierStatementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierStatements
     * const supplierStatement = await prisma.supplierStatement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierStatementUpdateManyArgs>(args: SelectSubset<T, SupplierStatementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierStatement.
     * @param {SupplierStatementUpsertArgs} args - Arguments to update or create a SupplierStatement.
     * @example
     * // Update or create a SupplierStatement
     * const supplierStatement = await prisma.supplierStatement.upsert({
     *   create: {
     *     // ... data to create a SupplierStatement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierStatement we want to update
     *   }
     * })
     */
    upsert<T extends SupplierStatementUpsertArgs>(args: SelectSubset<T, SupplierStatementUpsertArgs<ExtArgs>>): Prisma__SupplierStatementClient<$Result.GetResult<Prisma.$SupplierStatementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementCountArgs} args - Arguments to filter SupplierStatements to count.
     * @example
     * // Count the number of SupplierStatements
     * const count = await prisma.supplierStatement.count({
     *   where: {
     *     // ... the filter for the SupplierStatements we want to count
     *   }
     * })
    **/
    count<T extends SupplierStatementCountArgs>(
      args?: Subset<T, SupplierStatementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierStatementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierStatementAggregateArgs>(args: Subset<T, SupplierStatementAggregateArgs>): Prisma.PrismaPromise<GetSupplierStatementAggregateType<T>>

    /**
     * Group by SupplierStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatementGroupByArgs} args - Group by arguments.
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
      T extends SupplierStatementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierStatementGroupByArgs['orderBy'] }
        : { orderBy?: SupplierStatementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierStatementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierStatement model
   */
  readonly fields: SupplierStatementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierStatement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierStatementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SupplierStatement model
   */ 
  interface SupplierStatementFieldRefs {
    readonly id: FieldRef<"SupplierStatement", 'String'>
    readonly supplierId: FieldRef<"SupplierStatement", 'String'>
    readonly period: FieldRef<"SupplierStatement", 'String'>
    readonly balance: FieldRef<"SupplierStatement", 'Float'>
    readonly generatedAt: FieldRef<"SupplierStatement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierStatement findUnique
   */
  export type SupplierStatementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * Filter, which SupplierStatement to fetch.
     */
    where: SupplierStatementWhereUniqueInput
  }

  /**
   * SupplierStatement findUniqueOrThrow
   */
  export type SupplierStatementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * Filter, which SupplierStatement to fetch.
     */
    where: SupplierStatementWhereUniqueInput
  }

  /**
   * SupplierStatement findFirst
   */
  export type SupplierStatementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * Filter, which SupplierStatement to fetch.
     */
    where?: SupplierStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierStatements to fetch.
     */
    orderBy?: SupplierStatementOrderByWithRelationInput | SupplierStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierStatements.
     */
    cursor?: SupplierStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierStatements.
     */
    distinct?: SupplierStatementScalarFieldEnum | SupplierStatementScalarFieldEnum[]
  }

  /**
   * SupplierStatement findFirstOrThrow
   */
  export type SupplierStatementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * Filter, which SupplierStatement to fetch.
     */
    where?: SupplierStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierStatements to fetch.
     */
    orderBy?: SupplierStatementOrderByWithRelationInput | SupplierStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierStatements.
     */
    cursor?: SupplierStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierStatements.
     */
    distinct?: SupplierStatementScalarFieldEnum | SupplierStatementScalarFieldEnum[]
  }

  /**
   * SupplierStatement findMany
   */
  export type SupplierStatementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * Filter, which SupplierStatements to fetch.
     */
    where?: SupplierStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierStatements to fetch.
     */
    orderBy?: SupplierStatementOrderByWithRelationInput | SupplierStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierStatements.
     */
    cursor?: SupplierStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierStatements.
     */
    skip?: number
    distinct?: SupplierStatementScalarFieldEnum | SupplierStatementScalarFieldEnum[]
  }

  /**
   * SupplierStatement create
   */
  export type SupplierStatementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierStatement.
     */
    data: XOR<SupplierStatementCreateInput, SupplierStatementUncheckedCreateInput>
  }

  /**
   * SupplierStatement createMany
   */
  export type SupplierStatementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierStatements.
     */
    data: SupplierStatementCreateManyInput | SupplierStatementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierStatement createManyAndReturn
   */
  export type SupplierStatementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierStatements.
     */
    data: SupplierStatementCreateManyInput | SupplierStatementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierStatement update
   */
  export type SupplierStatementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierStatement.
     */
    data: XOR<SupplierStatementUpdateInput, SupplierStatementUncheckedUpdateInput>
    /**
     * Choose, which SupplierStatement to update.
     */
    where: SupplierStatementWhereUniqueInput
  }

  /**
   * SupplierStatement updateMany
   */
  export type SupplierStatementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierStatements.
     */
    data: XOR<SupplierStatementUpdateManyMutationInput, SupplierStatementUncheckedUpdateManyInput>
    /**
     * Filter which SupplierStatements to update
     */
    where?: SupplierStatementWhereInput
  }

  /**
   * SupplierStatement upsert
   */
  export type SupplierStatementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierStatement to update in case it exists.
     */
    where: SupplierStatementWhereUniqueInput
    /**
     * In case the SupplierStatement found by the `where` argument doesn't exist, create a new SupplierStatement with this data.
     */
    create: XOR<SupplierStatementCreateInput, SupplierStatementUncheckedCreateInput>
    /**
     * In case the SupplierStatement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierStatementUpdateInput, SupplierStatementUncheckedUpdateInput>
  }

  /**
   * SupplierStatement delete
   */
  export type SupplierStatementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
    /**
     * Filter which SupplierStatement to delete.
     */
    where: SupplierStatementWhereUniqueInput
  }

  /**
   * SupplierStatement deleteMany
   */
  export type SupplierStatementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierStatements to delete
     */
    where?: SupplierStatementWhereInput
  }

  /**
   * SupplierStatement without action
   */
  export type SupplierStatementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatement
     */
    select?: SupplierStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierStatementInclude<ExtArgs> | null
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


  export const SupplierScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    sharedShopIds: 'sharedShopIds',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    balance: 'balance',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplierContactScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    type: 'type',
    value: 'value',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierContactScalarFieldEnum = (typeof SupplierContactScalarFieldEnum)[keyof typeof SupplierContactScalarFieldEnum]


  export const SupplierBalanceScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    tenantId: 'tenantId',
    amount: 'amount',
    currency: 'currency',
    updatedAt: 'updatedAt'
  };

  export type SupplierBalanceScalarFieldEnum = (typeof SupplierBalanceScalarFieldEnum)[keyof typeof SupplierBalanceScalarFieldEnum]


  export const SupplierPaymentScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    balanceId: 'balanceId',
    amount: 'amount',
    method: 'method',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type SupplierPaymentScalarFieldEnum = (typeof SupplierPaymentScalarFieldEnum)[keyof typeof SupplierPaymentScalarFieldEnum]


  export const SupplierStatementScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    period: 'period',
    balance: 'balance',
    generatedAt: 'generatedAt'
  };

  export type SupplierStatementScalarFieldEnum = (typeof SupplierStatementScalarFieldEnum)[keyof typeof SupplierStatementScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    tenantId?: StringFilter<"Supplier"> | string
    shopId?: StringNullableFilter<"Supplier"> | string | null
    sharedShopIds?: StringNullableListFilter<"Supplier">
    name?: StringFilter<"Supplier"> | string
    email?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    balance?: FloatFilter<"Supplier"> | number
    status?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    contacts?: SupplierContactListRelationFilter
    balances?: SupplierBalanceListRelationFilter
    payments?: SupplierPaymentListRelationFilter
    statements?: SupplierStatementListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contacts?: SupplierContactOrderByRelationAggregateInput
    balances?: SupplierBalanceOrderByRelationAggregateInput
    payments?: SupplierPaymentOrderByRelationAggregateInput
    statements?: SupplierStatementOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    tenantId?: StringFilter<"Supplier"> | string
    shopId?: StringNullableFilter<"Supplier"> | string | null
    sharedShopIds?: StringNullableListFilter<"Supplier">
    name?: StringFilter<"Supplier"> | string
    email?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    balance?: FloatFilter<"Supplier"> | number
    status?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    contacts?: SupplierContactListRelationFilter
    balances?: SupplierBalanceListRelationFilter
    payments?: SupplierPaymentListRelationFilter
    statements?: SupplierStatementListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    tenantId?: StringWithAggregatesFilter<"Supplier"> | string
    shopId?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    sharedShopIds?: StringNullableListFilter<"Supplier">
    name?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    balance?: FloatWithAggregatesFilter<"Supplier"> | number
    status?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type SupplierContactWhereInput = {
    AND?: SupplierContactWhereInput | SupplierContactWhereInput[]
    OR?: SupplierContactWhereInput[]
    NOT?: SupplierContactWhereInput | SupplierContactWhereInput[]
    id?: StringFilter<"SupplierContact"> | string
    supplierId?: StringFilter<"SupplierContact"> | string
    type?: StringFilter<"SupplierContact"> | string
    value?: StringFilter<"SupplierContact"> | string
    isPrimary?: BoolFilter<"SupplierContact"> | boolean
    createdAt?: DateTimeFilter<"SupplierContact"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierContact"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }

  export type SupplierContactOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierContactWhereInput | SupplierContactWhereInput[]
    OR?: SupplierContactWhereInput[]
    NOT?: SupplierContactWhereInput | SupplierContactWhereInput[]
    supplierId?: StringFilter<"SupplierContact"> | string
    type?: StringFilter<"SupplierContact"> | string
    value?: StringFilter<"SupplierContact"> | string
    isPrimary?: BoolFilter<"SupplierContact"> | boolean
    createdAt?: DateTimeFilter<"SupplierContact"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierContact"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }, "id">

  export type SupplierContactOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierContactCountOrderByAggregateInput
    _max?: SupplierContactMaxOrderByAggregateInput
    _min?: SupplierContactMinOrderByAggregateInput
  }

  export type SupplierContactScalarWhereWithAggregatesInput = {
    AND?: SupplierContactScalarWhereWithAggregatesInput | SupplierContactScalarWhereWithAggregatesInput[]
    OR?: SupplierContactScalarWhereWithAggregatesInput[]
    NOT?: SupplierContactScalarWhereWithAggregatesInput | SupplierContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierContact"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierContact"> | string
    type?: StringWithAggregatesFilter<"SupplierContact"> | string
    value?: StringWithAggregatesFilter<"SupplierContact"> | string
    isPrimary?: BoolWithAggregatesFilter<"SupplierContact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SupplierContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierContact"> | Date | string
  }

  export type SupplierBalanceWhereInput = {
    AND?: SupplierBalanceWhereInput | SupplierBalanceWhereInput[]
    OR?: SupplierBalanceWhereInput[]
    NOT?: SupplierBalanceWhereInput | SupplierBalanceWhereInput[]
    id?: StringFilter<"SupplierBalance"> | string
    supplierId?: StringFilter<"SupplierBalance"> | string
    tenantId?: StringFilter<"SupplierBalance"> | string
    amount?: FloatFilter<"SupplierBalance"> | number
    currency?: StringFilter<"SupplierBalance"> | string
    updatedAt?: DateTimeFilter<"SupplierBalance"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    payments?: SupplierPaymentListRelationFilter
  }

  export type SupplierBalanceOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    payments?: SupplierPaymentOrderByRelationAggregateInput
  }

  export type SupplierBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supplierId_tenantId?: SupplierBalanceSupplierIdTenantIdCompoundUniqueInput
    AND?: SupplierBalanceWhereInput | SupplierBalanceWhereInput[]
    OR?: SupplierBalanceWhereInput[]
    NOT?: SupplierBalanceWhereInput | SupplierBalanceWhereInput[]
    supplierId?: StringFilter<"SupplierBalance"> | string
    tenantId?: StringFilter<"SupplierBalance"> | string
    amount?: FloatFilter<"SupplierBalance"> | number
    currency?: StringFilter<"SupplierBalance"> | string
    updatedAt?: DateTimeFilter<"SupplierBalance"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    payments?: SupplierPaymentListRelationFilter
  }, "id" | "supplierId_tenantId">

  export type SupplierBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierBalanceCountOrderByAggregateInput
    _avg?: SupplierBalanceAvgOrderByAggregateInput
    _max?: SupplierBalanceMaxOrderByAggregateInput
    _min?: SupplierBalanceMinOrderByAggregateInput
    _sum?: SupplierBalanceSumOrderByAggregateInput
  }

  export type SupplierBalanceScalarWhereWithAggregatesInput = {
    AND?: SupplierBalanceScalarWhereWithAggregatesInput | SupplierBalanceScalarWhereWithAggregatesInput[]
    OR?: SupplierBalanceScalarWhereWithAggregatesInput[]
    NOT?: SupplierBalanceScalarWhereWithAggregatesInput | SupplierBalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierBalance"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierBalance"> | string
    tenantId?: StringWithAggregatesFilter<"SupplierBalance"> | string
    amount?: FloatWithAggregatesFilter<"SupplierBalance"> | number
    currency?: StringWithAggregatesFilter<"SupplierBalance"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierBalance"> | Date | string
  }

  export type SupplierPaymentWhereInput = {
    AND?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    OR?: SupplierPaymentWhereInput[]
    NOT?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    id?: StringFilter<"SupplierPayment"> | string
    supplierId?: StringFilter<"SupplierPayment"> | string
    balanceId?: StringFilter<"SupplierPayment"> | string
    amount?: FloatFilter<"SupplierPayment"> | number
    method?: StringFilter<"SupplierPayment"> | string
    reference?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    balance?: XOR<SupplierBalanceRelationFilter, SupplierBalanceWhereInput>
  }

  export type SupplierPaymentOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    balanceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    balance?: SupplierBalanceOrderByWithRelationInput
  }

  export type SupplierPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    OR?: SupplierPaymentWhereInput[]
    NOT?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    supplierId?: StringFilter<"SupplierPayment"> | string
    balanceId?: StringFilter<"SupplierPayment"> | string
    amount?: FloatFilter<"SupplierPayment"> | number
    method?: StringFilter<"SupplierPayment"> | string
    reference?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    balance?: XOR<SupplierBalanceRelationFilter, SupplierBalanceWhereInput>
  }, "id">

  export type SupplierPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    balanceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierPaymentCountOrderByAggregateInput
    _avg?: SupplierPaymentAvgOrderByAggregateInput
    _max?: SupplierPaymentMaxOrderByAggregateInput
    _min?: SupplierPaymentMinOrderByAggregateInput
    _sum?: SupplierPaymentSumOrderByAggregateInput
  }

  export type SupplierPaymentScalarWhereWithAggregatesInput = {
    AND?: SupplierPaymentScalarWhereWithAggregatesInput | SupplierPaymentScalarWhereWithAggregatesInput[]
    OR?: SupplierPaymentScalarWhereWithAggregatesInput[]
    NOT?: SupplierPaymentScalarWhereWithAggregatesInput | SupplierPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierPayment"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierPayment"> | string
    balanceId?: StringWithAggregatesFilter<"SupplierPayment"> | string
    amount?: FloatWithAggregatesFilter<"SupplierPayment"> | number
    method?: StringWithAggregatesFilter<"SupplierPayment"> | string
    reference?: StringNullableWithAggregatesFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierPayment"> | Date | string
  }

  export type SupplierStatementWhereInput = {
    AND?: SupplierStatementWhereInput | SupplierStatementWhereInput[]
    OR?: SupplierStatementWhereInput[]
    NOT?: SupplierStatementWhereInput | SupplierStatementWhereInput[]
    id?: StringFilter<"SupplierStatement"> | string
    supplierId?: StringFilter<"SupplierStatement"> | string
    period?: StringFilter<"SupplierStatement"> | string
    balance?: FloatFilter<"SupplierStatement"> | number
    generatedAt?: DateTimeFilter<"SupplierStatement"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }

  export type SupplierStatementOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierStatementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supplierId_period?: SupplierStatementSupplierIdPeriodCompoundUniqueInput
    AND?: SupplierStatementWhereInput | SupplierStatementWhereInput[]
    OR?: SupplierStatementWhereInput[]
    NOT?: SupplierStatementWhereInput | SupplierStatementWhereInput[]
    supplierId?: StringFilter<"SupplierStatement"> | string
    period?: StringFilter<"SupplierStatement"> | string
    balance?: FloatFilter<"SupplierStatement"> | number
    generatedAt?: DateTimeFilter<"SupplierStatement"> | Date | string
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }, "id" | "supplierId_period">

  export type SupplierStatementOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
    _count?: SupplierStatementCountOrderByAggregateInput
    _avg?: SupplierStatementAvgOrderByAggregateInput
    _max?: SupplierStatementMaxOrderByAggregateInput
    _min?: SupplierStatementMinOrderByAggregateInput
    _sum?: SupplierStatementSumOrderByAggregateInput
  }

  export type SupplierStatementScalarWhereWithAggregatesInput = {
    AND?: SupplierStatementScalarWhereWithAggregatesInput | SupplierStatementScalarWhereWithAggregatesInput[]
    OR?: SupplierStatementScalarWhereWithAggregatesInput[]
    NOT?: SupplierStatementScalarWhereWithAggregatesInput | SupplierStatementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierStatement"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierStatement"> | string
    period?: StringWithAggregatesFilter<"SupplierStatement"> | string
    balance?: FloatWithAggregatesFilter<"SupplierStatement"> | number
    generatedAt?: DateTimeWithAggregatesFilter<"SupplierStatement"> | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactCreateNestedManyWithoutSupplierInput
    balances?: SupplierBalanceCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactUncheckedCreateNestedManyWithoutSupplierInput
    balances?: SupplierBalanceUncheckedCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUpdateManyWithoutSupplierNestedInput
    balances?: SupplierBalanceUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUncheckedUpdateManyWithoutSupplierNestedInput
    balances?: SupplierBalanceUncheckedUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierContactCreateInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutContactsInput
  }

  export type SupplierContactUncheckedCreateInput = {
    id?: string
    supplierId: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutContactsNestedInput
  }

  export type SupplierContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierContactCreateManyInput = {
    id?: string
    supplierId: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierBalanceCreateInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutBalancesInput
    payments?: SupplierPaymentCreateNestedManyWithoutBalanceInput
  }

  export type SupplierBalanceUncheckedCreateInput = {
    id?: string
    supplierId: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutBalanceInput
  }

  export type SupplierBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutBalancesNestedInput
    payments?: SupplierPaymentUpdateManyWithoutBalanceNestedInput
  }

  export type SupplierBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SupplierPaymentUncheckedUpdateManyWithoutBalanceNestedInput
  }

  export type SupplierBalanceCreateManyInput = {
    id?: string
    supplierId: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
  }

  export type SupplierBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentCreateInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPaymentsInput
    balance: SupplierBalanceCreateNestedOneWithoutPaymentsInput
  }

  export type SupplierPaymentUncheckedCreateInput = {
    id?: string
    supplierId: string
    balanceId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPaymentsNestedInput
    balance?: SupplierBalanceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SupplierPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentCreateManyInput = {
    id?: string
    supplierId: string
    balanceId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierStatementCreateInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutStatementsInput
  }

  export type SupplierStatementUncheckedCreateInput = {
    id?: string
    supplierId: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type SupplierStatementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutStatementsNestedInput
  }

  export type SupplierStatementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierStatementCreateManyInput = {
    id?: string
    supplierId: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type SupplierStatementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierStatementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SupplierContactListRelationFilter = {
    every?: SupplierContactWhereInput
    some?: SupplierContactWhereInput
    none?: SupplierContactWhereInput
  }

  export type SupplierBalanceListRelationFilter = {
    every?: SupplierBalanceWhereInput
    some?: SupplierBalanceWhereInput
    none?: SupplierBalanceWhereInput
  }

  export type SupplierPaymentListRelationFilter = {
    every?: SupplierPaymentWhereInput
    some?: SupplierPaymentWhereInput
    none?: SupplierPaymentWhereInput
  }

  export type SupplierStatementListRelationFilter = {
    every?: SupplierStatementWhereInput
    some?: SupplierStatementWhereInput
    none?: SupplierStatementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupplierContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierStatementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SupplierRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type SupplierContactCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierContactMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierContactMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SupplierBalanceSupplierIdTenantIdCompoundUniqueInput = {
    supplierId: string
    tenantId: string
  }

  export type SupplierBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierBalanceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierBalanceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierBalanceRelationFilter = {
    is?: SupplierBalanceWhereInput
    isNot?: SupplierBalanceWhereInput
  }

  export type SupplierPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    balanceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    balanceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    balanceId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierStatementSupplierIdPeriodCompoundUniqueInput = {
    supplierId: string
    period: string
  }

  export type SupplierStatementCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
  }

  export type SupplierStatementAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type SupplierStatementMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
  }

  export type SupplierStatementMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
  }

  export type SupplierStatementSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type SupplierCreatesharedShopIdsInput = {
    set: string[]
  }

  export type SupplierContactCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierContactCreateWithoutSupplierInput, SupplierContactUncheckedCreateWithoutSupplierInput> | SupplierContactCreateWithoutSupplierInput[] | SupplierContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierContactCreateOrConnectWithoutSupplierInput | SupplierContactCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierContactCreateManySupplierInputEnvelope
    connect?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
  }

  export type SupplierBalanceCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierBalanceCreateWithoutSupplierInput, SupplierBalanceUncheckedCreateWithoutSupplierInput> | SupplierBalanceCreateWithoutSupplierInput[] | SupplierBalanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierBalanceCreateOrConnectWithoutSupplierInput | SupplierBalanceCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierBalanceCreateManySupplierInputEnvelope
    connect?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
  }

  export type SupplierPaymentCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type SupplierStatementCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierStatementCreateWithoutSupplierInput, SupplierStatementUncheckedCreateWithoutSupplierInput> | SupplierStatementCreateWithoutSupplierInput[] | SupplierStatementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierStatementCreateOrConnectWithoutSupplierInput | SupplierStatementCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierStatementCreateManySupplierInputEnvelope
    connect?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
  }

  export type SupplierContactUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierContactCreateWithoutSupplierInput, SupplierContactUncheckedCreateWithoutSupplierInput> | SupplierContactCreateWithoutSupplierInput[] | SupplierContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierContactCreateOrConnectWithoutSupplierInput | SupplierContactCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierContactCreateManySupplierInputEnvelope
    connect?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
  }

  export type SupplierBalanceUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierBalanceCreateWithoutSupplierInput, SupplierBalanceUncheckedCreateWithoutSupplierInput> | SupplierBalanceCreateWithoutSupplierInput[] | SupplierBalanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierBalanceCreateOrConnectWithoutSupplierInput | SupplierBalanceCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierBalanceCreateManySupplierInputEnvelope
    connect?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
  }

  export type SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type SupplierStatementUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierStatementCreateWithoutSupplierInput, SupplierStatementUncheckedCreateWithoutSupplierInput> | SupplierStatementCreateWithoutSupplierInput[] | SupplierStatementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierStatementCreateOrConnectWithoutSupplierInput | SupplierStatementCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierStatementCreateManySupplierInputEnvelope
    connect?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SupplierUpdatesharedShopIdsInput = {
    set?: string[]
    push?: string | string[]
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

  export type SupplierContactUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierContactCreateWithoutSupplierInput, SupplierContactUncheckedCreateWithoutSupplierInput> | SupplierContactCreateWithoutSupplierInput[] | SupplierContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierContactCreateOrConnectWithoutSupplierInput | SupplierContactCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierContactUpsertWithWhereUniqueWithoutSupplierInput | SupplierContactUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierContactCreateManySupplierInputEnvelope
    set?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    disconnect?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    delete?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    connect?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    update?: SupplierContactUpdateWithWhereUniqueWithoutSupplierInput | SupplierContactUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierContactUpdateManyWithWhereWithoutSupplierInput | SupplierContactUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierContactScalarWhereInput | SupplierContactScalarWhereInput[]
  }

  export type SupplierBalanceUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierBalanceCreateWithoutSupplierInput, SupplierBalanceUncheckedCreateWithoutSupplierInput> | SupplierBalanceCreateWithoutSupplierInput[] | SupplierBalanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierBalanceCreateOrConnectWithoutSupplierInput | SupplierBalanceCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierBalanceUpsertWithWhereUniqueWithoutSupplierInput | SupplierBalanceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierBalanceCreateManySupplierInputEnvelope
    set?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    disconnect?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    delete?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    connect?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    update?: SupplierBalanceUpdateWithWhereUniqueWithoutSupplierInput | SupplierBalanceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierBalanceUpdateManyWithWhereWithoutSupplierInput | SupplierBalanceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierBalanceScalarWhereInput | SupplierBalanceScalarWhereInput[]
  }

  export type SupplierPaymentUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutSupplierInput | SupplierPaymentUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type SupplierStatementUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierStatementCreateWithoutSupplierInput, SupplierStatementUncheckedCreateWithoutSupplierInput> | SupplierStatementCreateWithoutSupplierInput[] | SupplierStatementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierStatementCreateOrConnectWithoutSupplierInput | SupplierStatementCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierStatementUpsertWithWhereUniqueWithoutSupplierInput | SupplierStatementUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierStatementCreateManySupplierInputEnvelope
    set?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    disconnect?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    delete?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    connect?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    update?: SupplierStatementUpdateWithWhereUniqueWithoutSupplierInput | SupplierStatementUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierStatementUpdateManyWithWhereWithoutSupplierInput | SupplierStatementUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierStatementScalarWhereInput | SupplierStatementScalarWhereInput[]
  }

  export type SupplierContactUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierContactCreateWithoutSupplierInput, SupplierContactUncheckedCreateWithoutSupplierInput> | SupplierContactCreateWithoutSupplierInput[] | SupplierContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierContactCreateOrConnectWithoutSupplierInput | SupplierContactCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierContactUpsertWithWhereUniqueWithoutSupplierInput | SupplierContactUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierContactCreateManySupplierInputEnvelope
    set?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    disconnect?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    delete?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    connect?: SupplierContactWhereUniqueInput | SupplierContactWhereUniqueInput[]
    update?: SupplierContactUpdateWithWhereUniqueWithoutSupplierInput | SupplierContactUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierContactUpdateManyWithWhereWithoutSupplierInput | SupplierContactUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierContactScalarWhereInput | SupplierContactScalarWhereInput[]
  }

  export type SupplierBalanceUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierBalanceCreateWithoutSupplierInput, SupplierBalanceUncheckedCreateWithoutSupplierInput> | SupplierBalanceCreateWithoutSupplierInput[] | SupplierBalanceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierBalanceCreateOrConnectWithoutSupplierInput | SupplierBalanceCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierBalanceUpsertWithWhereUniqueWithoutSupplierInput | SupplierBalanceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierBalanceCreateManySupplierInputEnvelope
    set?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    disconnect?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    delete?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    connect?: SupplierBalanceWhereUniqueInput | SupplierBalanceWhereUniqueInput[]
    update?: SupplierBalanceUpdateWithWhereUniqueWithoutSupplierInput | SupplierBalanceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierBalanceUpdateManyWithWhereWithoutSupplierInput | SupplierBalanceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierBalanceScalarWhereInput | SupplierBalanceScalarWhereInput[]
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput> | SupplierPaymentCreateWithoutSupplierInput[] | SupplierPaymentUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutSupplierInput | SupplierPaymentCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierPaymentCreateManySupplierInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput | SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutSupplierInput | SupplierPaymentUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type SupplierStatementUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierStatementCreateWithoutSupplierInput, SupplierStatementUncheckedCreateWithoutSupplierInput> | SupplierStatementCreateWithoutSupplierInput[] | SupplierStatementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierStatementCreateOrConnectWithoutSupplierInput | SupplierStatementCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierStatementUpsertWithWhereUniqueWithoutSupplierInput | SupplierStatementUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierStatementCreateManySupplierInputEnvelope
    set?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    disconnect?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    delete?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    connect?: SupplierStatementWhereUniqueInput | SupplierStatementWhereUniqueInput[]
    update?: SupplierStatementUpdateWithWhereUniqueWithoutSupplierInput | SupplierStatementUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierStatementUpdateManyWithWhereWithoutSupplierInput | SupplierStatementUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierStatementScalarWhereInput | SupplierStatementScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutContactsInput = {
    create?: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutContactsInput
    connect?: SupplierWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SupplierUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutContactsInput
    upsert?: SupplierUpsertWithoutContactsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutContactsInput, SupplierUpdateWithoutContactsInput>, SupplierUncheckedUpdateWithoutContactsInput>
  }

  export type SupplierCreateNestedOneWithoutBalancesInput = {
    create?: XOR<SupplierCreateWithoutBalancesInput, SupplierUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutBalancesInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierPaymentCreateNestedManyWithoutBalanceInput = {
    create?: XOR<SupplierPaymentCreateWithoutBalanceInput, SupplierPaymentUncheckedCreateWithoutBalanceInput> | SupplierPaymentCreateWithoutBalanceInput[] | SupplierPaymentUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutBalanceInput | SupplierPaymentCreateOrConnectWithoutBalanceInput[]
    createMany?: SupplierPaymentCreateManyBalanceInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type SupplierPaymentUncheckedCreateNestedManyWithoutBalanceInput = {
    create?: XOR<SupplierPaymentCreateWithoutBalanceInput, SupplierPaymentUncheckedCreateWithoutBalanceInput> | SupplierPaymentCreateWithoutBalanceInput[] | SupplierPaymentUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutBalanceInput | SupplierPaymentCreateOrConnectWithoutBalanceInput[]
    createMany?: SupplierPaymentCreateManyBalanceInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type SupplierUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<SupplierCreateWithoutBalancesInput, SupplierUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutBalancesInput
    upsert?: SupplierUpsertWithoutBalancesInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutBalancesInput, SupplierUpdateWithoutBalancesInput>, SupplierUncheckedUpdateWithoutBalancesInput>
  }

  export type SupplierPaymentUpdateManyWithoutBalanceNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutBalanceInput, SupplierPaymentUncheckedCreateWithoutBalanceInput> | SupplierPaymentCreateWithoutBalanceInput[] | SupplierPaymentUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutBalanceInput | SupplierPaymentCreateOrConnectWithoutBalanceInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutBalanceInput | SupplierPaymentUpsertWithWhereUniqueWithoutBalanceInput[]
    createMany?: SupplierPaymentCreateManyBalanceInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutBalanceInput | SupplierPaymentUpdateWithWhereUniqueWithoutBalanceInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutBalanceInput | SupplierPaymentUpdateManyWithWhereWithoutBalanceInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutBalanceNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutBalanceInput, SupplierPaymentUncheckedCreateWithoutBalanceInput> | SupplierPaymentCreateWithoutBalanceInput[] | SupplierPaymentUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutBalanceInput | SupplierPaymentCreateOrConnectWithoutBalanceInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutBalanceInput | SupplierPaymentUpsertWithWhereUniqueWithoutBalanceInput[]
    createMany?: SupplierPaymentCreateManyBalanceInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutBalanceInput | SupplierPaymentUpdateWithWhereUniqueWithoutBalanceInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutBalanceInput | SupplierPaymentUpdateManyWithWhereWithoutBalanceInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPaymentsInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierBalanceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SupplierBalanceCreateWithoutPaymentsInput, SupplierBalanceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SupplierBalanceCreateOrConnectWithoutPaymentsInput
    connect?: SupplierBalanceWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPaymentsInput
    upsert?: SupplierUpsertWithoutPaymentsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPaymentsInput, SupplierUpdateWithoutPaymentsInput>, SupplierUncheckedUpdateWithoutPaymentsInput>
  }

  export type SupplierBalanceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SupplierBalanceCreateWithoutPaymentsInput, SupplierBalanceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SupplierBalanceCreateOrConnectWithoutPaymentsInput
    upsert?: SupplierBalanceUpsertWithoutPaymentsInput
    connect?: SupplierBalanceWhereUniqueInput
    update?: XOR<XOR<SupplierBalanceUpdateToOneWithWhereWithoutPaymentsInput, SupplierBalanceUpdateWithoutPaymentsInput>, SupplierBalanceUncheckedUpdateWithoutPaymentsInput>
  }

  export type SupplierCreateNestedOneWithoutStatementsInput = {
    create?: XOR<SupplierCreateWithoutStatementsInput, SupplierUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStatementsInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutStatementsNestedInput = {
    create?: XOR<SupplierCreateWithoutStatementsInput, SupplierUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStatementsInput
    upsert?: SupplierUpsertWithoutStatementsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutStatementsInput, SupplierUpdateWithoutStatementsInput>, SupplierUncheckedUpdateWithoutStatementsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SupplierContactCreateWithoutSupplierInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierContactUncheckedCreateWithoutSupplierInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierContactCreateOrConnectWithoutSupplierInput = {
    where: SupplierContactWhereUniqueInput
    create: XOR<SupplierContactCreateWithoutSupplierInput, SupplierContactUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierContactCreateManySupplierInputEnvelope = {
    data: SupplierContactCreateManySupplierInput | SupplierContactCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierBalanceCreateWithoutSupplierInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
    payments?: SupplierPaymentCreateNestedManyWithoutBalanceInput
  }

  export type SupplierBalanceUncheckedCreateWithoutSupplierInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutBalanceInput
  }

  export type SupplierBalanceCreateOrConnectWithoutSupplierInput = {
    where: SupplierBalanceWhereUniqueInput
    create: XOR<SupplierBalanceCreateWithoutSupplierInput, SupplierBalanceUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierBalanceCreateManySupplierInputEnvelope = {
    data: SupplierBalanceCreateManySupplierInput | SupplierBalanceCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierPaymentCreateWithoutSupplierInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    balance: SupplierBalanceCreateNestedOneWithoutPaymentsInput
  }

  export type SupplierPaymentUncheckedCreateWithoutSupplierInput = {
    id?: string
    balanceId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentCreateOrConnectWithoutSupplierInput = {
    where: SupplierPaymentWhereUniqueInput
    create: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierPaymentCreateManySupplierInputEnvelope = {
    data: SupplierPaymentCreateManySupplierInput | SupplierPaymentCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierStatementCreateWithoutSupplierInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type SupplierStatementUncheckedCreateWithoutSupplierInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type SupplierStatementCreateOrConnectWithoutSupplierInput = {
    where: SupplierStatementWhereUniqueInput
    create: XOR<SupplierStatementCreateWithoutSupplierInput, SupplierStatementUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierStatementCreateManySupplierInputEnvelope = {
    data: SupplierStatementCreateManySupplierInput | SupplierStatementCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierContactUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierContactWhereUniqueInput
    update: XOR<SupplierContactUpdateWithoutSupplierInput, SupplierContactUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierContactCreateWithoutSupplierInput, SupplierContactUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierContactUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierContactWhereUniqueInput
    data: XOR<SupplierContactUpdateWithoutSupplierInput, SupplierContactUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierContactUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierContactScalarWhereInput
    data: XOR<SupplierContactUpdateManyMutationInput, SupplierContactUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierContactScalarWhereInput = {
    AND?: SupplierContactScalarWhereInput | SupplierContactScalarWhereInput[]
    OR?: SupplierContactScalarWhereInput[]
    NOT?: SupplierContactScalarWhereInput | SupplierContactScalarWhereInput[]
    id?: StringFilter<"SupplierContact"> | string
    supplierId?: StringFilter<"SupplierContact"> | string
    type?: StringFilter<"SupplierContact"> | string
    value?: StringFilter<"SupplierContact"> | string
    isPrimary?: BoolFilter<"SupplierContact"> | boolean
    createdAt?: DateTimeFilter<"SupplierContact"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierContact"> | Date | string
  }

  export type SupplierBalanceUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierBalanceWhereUniqueInput
    update: XOR<SupplierBalanceUpdateWithoutSupplierInput, SupplierBalanceUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierBalanceCreateWithoutSupplierInput, SupplierBalanceUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierBalanceUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierBalanceWhereUniqueInput
    data: XOR<SupplierBalanceUpdateWithoutSupplierInput, SupplierBalanceUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierBalanceUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierBalanceScalarWhereInput
    data: XOR<SupplierBalanceUpdateManyMutationInput, SupplierBalanceUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierBalanceScalarWhereInput = {
    AND?: SupplierBalanceScalarWhereInput | SupplierBalanceScalarWhereInput[]
    OR?: SupplierBalanceScalarWhereInput[]
    NOT?: SupplierBalanceScalarWhereInput | SupplierBalanceScalarWhereInput[]
    id?: StringFilter<"SupplierBalance"> | string
    supplierId?: StringFilter<"SupplierBalance"> | string
    tenantId?: StringFilter<"SupplierBalance"> | string
    amount?: FloatFilter<"SupplierBalance"> | number
    currency?: StringFilter<"SupplierBalance"> | string
    updatedAt?: DateTimeFilter<"SupplierBalance"> | Date | string
  }

  export type SupplierPaymentUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierPaymentWhereUniqueInput
    update: XOR<SupplierPaymentUpdateWithoutSupplierInput, SupplierPaymentUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierPaymentCreateWithoutSupplierInput, SupplierPaymentUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierPaymentUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierPaymentWhereUniqueInput
    data: XOR<SupplierPaymentUpdateWithoutSupplierInput, SupplierPaymentUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierPaymentUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierPaymentScalarWhereInput
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierPaymentScalarWhereInput = {
    AND?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
    OR?: SupplierPaymentScalarWhereInput[]
    NOT?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
    id?: StringFilter<"SupplierPayment"> | string
    supplierId?: StringFilter<"SupplierPayment"> | string
    balanceId?: StringFilter<"SupplierPayment"> | string
    amount?: FloatFilter<"SupplierPayment"> | number
    method?: StringFilter<"SupplierPayment"> | string
    reference?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
  }

  export type SupplierStatementUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierStatementWhereUniqueInput
    update: XOR<SupplierStatementUpdateWithoutSupplierInput, SupplierStatementUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierStatementCreateWithoutSupplierInput, SupplierStatementUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierStatementUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierStatementWhereUniqueInput
    data: XOR<SupplierStatementUpdateWithoutSupplierInput, SupplierStatementUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierStatementUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierStatementScalarWhereInput
    data: XOR<SupplierStatementUpdateManyMutationInput, SupplierStatementUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierStatementScalarWhereInput = {
    AND?: SupplierStatementScalarWhereInput | SupplierStatementScalarWhereInput[]
    OR?: SupplierStatementScalarWhereInput[]
    NOT?: SupplierStatementScalarWhereInput | SupplierStatementScalarWhereInput[]
    id?: StringFilter<"SupplierStatement"> | string
    supplierId?: StringFilter<"SupplierStatement"> | string
    period?: StringFilter<"SupplierStatement"> | string
    balance?: FloatFilter<"SupplierStatement"> | number
    generatedAt?: DateTimeFilter<"SupplierStatement"> | Date | string
  }

  export type SupplierCreateWithoutContactsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balances?: SupplierBalanceCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutContactsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balances?: SupplierBalanceUncheckedCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutContactsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
  }

  export type SupplierUpsertWithoutContactsInput = {
    update: XOR<SupplierUpdateWithoutContactsInput, SupplierUncheckedUpdateWithoutContactsInput>
    create: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutContactsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutContactsInput, SupplierUncheckedUpdateWithoutContactsInput>
  }

  export type SupplierUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: SupplierBalanceUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: SupplierBalanceUncheckedUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutBalancesInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutBalancesInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactUncheckedCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutBalancesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutBalancesInput, SupplierUncheckedCreateWithoutBalancesInput>
  }

  export type SupplierPaymentCreateWithoutBalanceInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPaymentsInput
  }

  export type SupplierPaymentUncheckedCreateWithoutBalanceInput = {
    id?: string
    supplierId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentCreateOrConnectWithoutBalanceInput = {
    where: SupplierPaymentWhereUniqueInput
    create: XOR<SupplierPaymentCreateWithoutBalanceInput, SupplierPaymentUncheckedCreateWithoutBalanceInput>
  }

  export type SupplierPaymentCreateManyBalanceInputEnvelope = {
    data: SupplierPaymentCreateManyBalanceInput | SupplierPaymentCreateManyBalanceInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutBalancesInput = {
    update: XOR<SupplierUpdateWithoutBalancesInput, SupplierUncheckedUpdateWithoutBalancesInput>
    create: XOR<SupplierCreateWithoutBalancesInput, SupplierUncheckedCreateWithoutBalancesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutBalancesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutBalancesInput, SupplierUncheckedUpdateWithoutBalancesInput>
  }

  export type SupplierUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUncheckedUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierPaymentUpsertWithWhereUniqueWithoutBalanceInput = {
    where: SupplierPaymentWhereUniqueInput
    update: XOR<SupplierPaymentUpdateWithoutBalanceInput, SupplierPaymentUncheckedUpdateWithoutBalanceInput>
    create: XOR<SupplierPaymentCreateWithoutBalanceInput, SupplierPaymentUncheckedCreateWithoutBalanceInput>
  }

  export type SupplierPaymentUpdateWithWhereUniqueWithoutBalanceInput = {
    where: SupplierPaymentWhereUniqueInput
    data: XOR<SupplierPaymentUpdateWithoutBalanceInput, SupplierPaymentUncheckedUpdateWithoutBalanceInput>
  }

  export type SupplierPaymentUpdateManyWithWhereWithoutBalanceInput = {
    where: SupplierPaymentScalarWhereInput
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyWithoutBalanceInput>
  }

  export type SupplierCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactCreateNestedManyWithoutSupplierInput
    balances?: SupplierBalanceCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactUncheckedCreateNestedManyWithoutSupplierInput
    balances?: SupplierBalanceUncheckedCreateNestedManyWithoutSupplierInput
    statements?: SupplierStatementUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPaymentsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
  }

  export type SupplierBalanceCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutBalancesInput
  }

  export type SupplierBalanceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    supplierId: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
  }

  export type SupplierBalanceCreateOrConnectWithoutPaymentsInput = {
    where: SupplierBalanceWhereUniqueInput
    create: XOR<SupplierBalanceCreateWithoutPaymentsInput, SupplierBalanceUncheckedCreateWithoutPaymentsInput>
  }

  export type SupplierUpsertWithoutPaymentsInput = {
    update: XOR<SupplierUpdateWithoutPaymentsInput, SupplierUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SupplierCreateWithoutPaymentsInput, SupplierUncheckedCreateWithoutPaymentsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPaymentsInput, SupplierUncheckedUpdateWithoutPaymentsInput>
  }

  export type SupplierUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUpdateManyWithoutSupplierNestedInput
    balances?: SupplierBalanceUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUncheckedUpdateManyWithoutSupplierNestedInput
    balances?: SupplierBalanceUncheckedUpdateManyWithoutSupplierNestedInput
    statements?: SupplierStatementUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierBalanceUpsertWithoutPaymentsInput = {
    update: XOR<SupplierBalanceUpdateWithoutPaymentsInput, SupplierBalanceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SupplierBalanceCreateWithoutPaymentsInput, SupplierBalanceUncheckedCreateWithoutPaymentsInput>
    where?: SupplierBalanceWhereInput
  }

  export type SupplierBalanceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SupplierBalanceWhereInput
    data: XOR<SupplierBalanceUpdateWithoutPaymentsInput, SupplierBalanceUncheckedUpdateWithoutPaymentsInput>
  }

  export type SupplierBalanceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type SupplierBalanceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateWithoutStatementsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactCreateNestedManyWithoutSupplierInput
    balances?: SupplierBalanceCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutStatementsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: SupplierCreatesharedShopIdsInput | string[]
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: SupplierContactUncheckedCreateNestedManyWithoutSupplierInput
    balances?: SupplierBalanceUncheckedCreateNestedManyWithoutSupplierInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutStatementsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutStatementsInput, SupplierUncheckedCreateWithoutStatementsInput>
  }

  export type SupplierUpsertWithoutStatementsInput = {
    update: XOR<SupplierUpdateWithoutStatementsInput, SupplierUncheckedUpdateWithoutStatementsInput>
    create: XOR<SupplierCreateWithoutStatementsInput, SupplierUncheckedCreateWithoutStatementsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutStatementsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutStatementsInput, SupplierUncheckedUpdateWithoutStatementsInput>
  }

  export type SupplierUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUpdateManyWithoutSupplierNestedInput
    balances?: SupplierBalanceUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: SupplierUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: SupplierContactUncheckedUpdateManyWithoutSupplierNestedInput
    balances?: SupplierBalanceUncheckedUpdateManyWithoutSupplierNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierContactCreateManySupplierInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierBalanceCreateManySupplierInput = {
    id?: string
    tenantId: string
    amount: number
    currency?: string
    updatedAt?: Date | string
  }

  export type SupplierPaymentCreateManySupplierInput = {
    id?: string
    balanceId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SupplierStatementCreateManySupplierInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type SupplierContactUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierContactUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierContactUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierBalanceUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SupplierPaymentUpdateManyWithoutBalanceNestedInput
  }

  export type SupplierBalanceUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: SupplierPaymentUncheckedUpdateManyWithoutBalanceNestedInput
  }

  export type SupplierBalanceUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balance?: SupplierBalanceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SupplierPaymentUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierStatementUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierStatementUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierStatementUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentCreateManyBalanceInput = {
    id?: string
    supplierId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SupplierPaymentUncheckedUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SupplierCountOutputTypeDefaultArgs instead
     */
    export type SupplierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierBalanceCountOutputTypeDefaultArgs instead
     */
    export type SupplierBalanceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierBalanceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierDefaultArgs instead
     */
    export type SupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierContactDefaultArgs instead
     */
    export type SupplierContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierBalanceDefaultArgs instead
     */
    export type SupplierBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierBalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierPaymentDefaultArgs instead
     */
    export type SupplierPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierPaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierStatementDefaultArgs instead
     */
    export type SupplierStatementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierStatementDefaultArgs<ExtArgs>

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