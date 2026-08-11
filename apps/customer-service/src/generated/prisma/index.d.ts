
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerAddress
 * 
 */
export type CustomerAddress = $Result.DefaultSelection<Prisma.$CustomerAddressPayload>
/**
 * Model CustomerContact
 * 
 */
export type CustomerContact = $Result.DefaultSelection<Prisma.$CustomerContactPayload>
/**
 * Model CustomerLoan
 * 
 */
export type CustomerLoan = $Result.DefaultSelection<Prisma.$CustomerLoanPayload>
/**
 * Model CustomerPayment
 * 
 */
export type CustomerPayment = $Result.DefaultSelection<Prisma.$CustomerPaymentPayload>
/**
 * Model CustomerStatement
 * 
 */
export type CustomerStatement = $Result.DefaultSelection<Prisma.$CustomerStatementPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.customerAddress`: Exposes CRUD operations for the **CustomerAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerAddresses
    * const customerAddresses = await prisma.customerAddress.findMany()
    * ```
    */
  get customerAddress(): Prisma.CustomerAddressDelegate<ExtArgs>;

  /**
   * `prisma.customerContact`: Exposes CRUD operations for the **CustomerContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerContacts
    * const customerContacts = await prisma.customerContact.findMany()
    * ```
    */
  get customerContact(): Prisma.CustomerContactDelegate<ExtArgs>;

  /**
   * `prisma.customerLoan`: Exposes CRUD operations for the **CustomerLoan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerLoans
    * const customerLoans = await prisma.customerLoan.findMany()
    * ```
    */
  get customerLoan(): Prisma.CustomerLoanDelegate<ExtArgs>;

  /**
   * `prisma.customerPayment`: Exposes CRUD operations for the **CustomerPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerPayments
    * const customerPayments = await prisma.customerPayment.findMany()
    * ```
    */
  get customerPayment(): Prisma.CustomerPaymentDelegate<ExtArgs>;

  /**
   * `prisma.customerStatement`: Exposes CRUD operations for the **CustomerStatement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerStatements
    * const customerStatements = await prisma.customerStatement.findMany()
    * ```
    */
  get customerStatement(): Prisma.CustomerStatementDelegate<ExtArgs>;
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
    Customer: 'Customer',
    CustomerAddress: 'CustomerAddress',
    CustomerContact: 'CustomerContact',
    CustomerLoan: 'CustomerLoan',
    CustomerPayment: 'CustomerPayment',
    CustomerStatement: 'CustomerStatement'
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
      modelProps: "customer" | "customerAddress" | "customerContact" | "customerLoan" | "customerPayment" | "customerStatement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerAddress: {
        payload: Prisma.$CustomerAddressPayload<ExtArgs>
        fields: Prisma.CustomerAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          findFirst: {
            args: Prisma.CustomerAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          findMany: {
            args: Prisma.CustomerAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          create: {
            args: Prisma.CustomerAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          createMany: {
            args: Prisma.CustomerAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[]
          }
          delete: {
            args: Prisma.CustomerAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          update: {
            args: Prisma.CustomerAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          deleteMany: {
            args: Prisma.CustomerAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerAddressPayload>
          }
          aggregate: {
            args: Prisma.CustomerAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerAddress>
          }
          groupBy: {
            args: Prisma.CustomerAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerAddressCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerAddressCountAggregateOutputType> | number
          }
        }
      }
      CustomerContact: {
        payload: Prisma.$CustomerContactPayload<ExtArgs>
        fields: Prisma.CustomerContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>
          }
          findFirst: {
            args: Prisma.CustomerContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>
          }
          findMany: {
            args: Prisma.CustomerContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>[]
          }
          create: {
            args: Prisma.CustomerContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>
          }
          createMany: {
            args: Prisma.CustomerContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>[]
          }
          delete: {
            args: Prisma.CustomerContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>
          }
          update: {
            args: Prisma.CustomerContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>
          }
          deleteMany: {
            args: Prisma.CustomerContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerContactPayload>
          }
          aggregate: {
            args: Prisma.CustomerContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerContact>
          }
          groupBy: {
            args: Prisma.CustomerContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerContactCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerContactCountAggregateOutputType> | number
          }
        }
      }
      CustomerLoan: {
        payload: Prisma.$CustomerLoanPayload<ExtArgs>
        fields: Prisma.CustomerLoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerLoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerLoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>
          }
          findFirst: {
            args: Prisma.CustomerLoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerLoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>
          }
          findMany: {
            args: Prisma.CustomerLoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>[]
          }
          create: {
            args: Prisma.CustomerLoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>
          }
          createMany: {
            args: Prisma.CustomerLoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerLoanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>[]
          }
          delete: {
            args: Prisma.CustomerLoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>
          }
          update: {
            args: Prisma.CustomerLoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>
          }
          deleteMany: {
            args: Prisma.CustomerLoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerLoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerLoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLoanPayload>
          }
          aggregate: {
            args: Prisma.CustomerLoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerLoan>
          }
          groupBy: {
            args: Prisma.CustomerLoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerLoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerLoanCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerLoanCountAggregateOutputType> | number
          }
        }
      }
      CustomerPayment: {
        payload: Prisma.$CustomerPaymentPayload<ExtArgs>
        fields: Prisma.CustomerPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          findFirst: {
            args: Prisma.CustomerPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          findMany: {
            args: Prisma.CustomerPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>[]
          }
          create: {
            args: Prisma.CustomerPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          createMany: {
            args: Prisma.CustomerPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>[]
          }
          delete: {
            args: Prisma.CustomerPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          update: {
            args: Prisma.CustomerPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          deleteMany: {
            args: Prisma.CustomerPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPaymentPayload>
          }
          aggregate: {
            args: Prisma.CustomerPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerPayment>
          }
          groupBy: {
            args: Prisma.CustomerPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerPaymentCountAggregateOutputType> | number
          }
        }
      }
      CustomerStatement: {
        payload: Prisma.$CustomerStatementPayload<ExtArgs>
        fields: Prisma.CustomerStatementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerStatementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerStatementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>
          }
          findFirst: {
            args: Prisma.CustomerStatementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerStatementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>
          }
          findMany: {
            args: Prisma.CustomerStatementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>[]
          }
          create: {
            args: Prisma.CustomerStatementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>
          }
          createMany: {
            args: Prisma.CustomerStatementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerStatementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>[]
          }
          delete: {
            args: Prisma.CustomerStatementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>
          }
          update: {
            args: Prisma.CustomerStatementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>
          }
          deleteMany: {
            args: Prisma.CustomerStatementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerStatementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerStatementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerStatementPayload>
          }
          aggregate: {
            args: Prisma.CustomerStatementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerStatement>
          }
          groupBy: {
            args: Prisma.CustomerStatementGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerStatementGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerStatementCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerStatementCountAggregateOutputType> | number
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    addresses: number
    contacts: number
    loans: number
    payments: number
    statements: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | CustomerCountOutputTypeCountAddressesArgs
    contacts?: boolean | CustomerCountOutputTypeCountContactsArgs
    loans?: boolean | CustomerCountOutputTypeCountLoansArgs
    payments?: boolean | CustomerCountOutputTypeCountPaymentsArgs
    statements?: boolean | CustomerCountOutputTypeCountStatementsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerAddressWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerContactWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLoanWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPaymentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountStatementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerStatementWhereInput
  }


  /**
   * Count Type CustomerLoanCountOutputType
   */

  export type CustomerLoanCountOutputType = {
    payments: number
  }

  export type CustomerLoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | CustomerLoanCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CustomerLoanCountOutputType without action
   */
  export type CustomerLoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoanCountOutputType
     */
    select?: CustomerLoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerLoanCountOutputType without action
   */
  export type CustomerLoanCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    balance: number | null
  }

  export type CustomerSumAggregateOutputType = {
    balance: number | null
  }

  export type CustomerMinAggregateOutputType = {
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

  export type CustomerMaxAggregateOutputType = {
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

  export type CustomerCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
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


  export type CustomerAvgAggregateInputType = {
    balance?: true
  }

  export type CustomerSumAggregateInputType = {
    balance?: true
  }

  export type CustomerMinAggregateInputType = {
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

  export type CustomerMaxAggregateInputType = {
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

  export type CustomerCountAggregateInputType = {
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
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    name: string
    email: string | null
    phone: string | null
    address: string | null
    balance: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    balance?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    contacts?: boolean | Customer$contactsArgs<ExtArgs>
    loans?: boolean | Customer$loansArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    statements?: boolean | Customer$statementsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    balance?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    balance?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    contacts?: boolean | Customer$contactsArgs<ExtArgs>
    loans?: boolean | Customer$loansArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    statements?: boolean | Customer$statementsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      addresses: Prisma.$CustomerAddressPayload<ExtArgs>[]
      contacts: Prisma.$CustomerContactPayload<ExtArgs>[]
      loans: Prisma.$CustomerLoanPayload<ExtArgs>[]
      payments: Prisma.$CustomerPaymentPayload<ExtArgs>[]
      statements: Prisma.$CustomerStatementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      name: string
      email: string | null
      phone: string | null
      address: string | null
      balance: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Customer$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany"> | Null>
    contacts<T extends Customer$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "findMany"> | Null>
    loans<T extends Customer$loansArgs<ExtArgs> = {}>(args?: Subset<T, Customer$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Customer$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findMany"> | Null>
    statements<T extends Customer$statementsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$statementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly tenantId: FieldRef<"Customer", 'String'>
    readonly shopId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly balance: FieldRef<"Customer", 'Float'>
    readonly status: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.addresses
   */
  export type Customer$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    where?: CustomerAddressWhereInput
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    cursor?: CustomerAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * Customer.contacts
   */
  export type Customer$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    where?: CustomerContactWhereInput
    orderBy?: CustomerContactOrderByWithRelationInput | CustomerContactOrderByWithRelationInput[]
    cursor?: CustomerContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerContactScalarFieldEnum | CustomerContactScalarFieldEnum[]
  }

  /**
   * Customer.loans
   */
  export type Customer$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    where?: CustomerLoanWhereInput
    orderBy?: CustomerLoanOrderByWithRelationInput | CustomerLoanOrderByWithRelationInput[]
    cursor?: CustomerLoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerLoanScalarFieldEnum | CustomerLoanScalarFieldEnum[]
  }

  /**
   * Customer.payments
   */
  export type Customer$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    where?: CustomerPaymentWhereInput
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    cursor?: CustomerPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * Customer.statements
   */
  export type Customer$statementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    where?: CustomerStatementWhereInput
    orderBy?: CustomerStatementOrderByWithRelationInput | CustomerStatementOrderByWithRelationInput[]
    cursor?: CustomerStatementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerStatementScalarFieldEnum | CustomerStatementScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerAddress
   */

  export type AggregateCustomerAddress = {
    _count: CustomerAddressCountAggregateOutputType | null
    _min: CustomerAddressMinAggregateOutputType | null
    _max: CustomerAddressMaxAggregateOutputType | null
  }

  export type CustomerAddressMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerAddressMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerAddressCountAggregateOutputType = {
    id: number
    customerId: number
    street: number
    city: number
    state: number
    postalCode: number
    country: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAddressMinAggregateInputType = {
    id?: true
    customerId?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerAddressMaxAggregateInputType = {
    id?: true
    customerId?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerAddressCountAggregateInputType = {
    id?: true
    customerId?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerAddress to aggregate.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerAddresses
    **/
    _count?: true | CustomerAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerAddressMaxAggregateInputType
  }

  export type GetCustomerAddressAggregateType<T extends CustomerAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerAddress[P]>
      : GetScalarType<T[P], AggregateCustomerAddress[P]>
  }




  export type CustomerAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerAddressWhereInput
    orderBy?: CustomerAddressOrderByWithAggregationInput | CustomerAddressOrderByWithAggregationInput[]
    by: CustomerAddressScalarFieldEnum[] | CustomerAddressScalarFieldEnum
    having?: CustomerAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerAddressCountAggregateInputType | true
    _min?: CustomerAddressMinAggregateInputType
    _max?: CustomerAddressMaxAggregateInputType
  }

  export type CustomerAddressGroupByOutputType = {
    id: string
    customerId: string
    street: string
    city: string
    state: string | null
    postalCode: string | null
    country: string | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: CustomerAddressCountAggregateOutputType | null
    _min: CustomerAddressMinAggregateOutputType | null
    _max: CustomerAddressMaxAggregateOutputType | null
  }

  type GetCustomerAddressGroupByPayload<T extends CustomerAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>
        }
      >
    >


  export type CustomerAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerAddress"]>

  export type CustomerAddressSelectScalar = {
    id?: boolean
    customerId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerAddress"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      street: string
      city: string
      state: string | null
      postalCode: string | null
      country: string | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerAddress"]>
    composites: {}
  }

  type CustomerAddressGetPayload<S extends boolean | null | undefined | CustomerAddressDefaultArgs> = $Result.GetResult<Prisma.$CustomerAddressPayload, S>

  type CustomerAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerAddressCountAggregateInputType | true
    }

  export interface CustomerAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerAddress'], meta: { name: 'CustomerAddress' } }
    /**
     * Find zero or one CustomerAddress that matches the filter.
     * @param {CustomerAddressFindUniqueArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerAddressFindUniqueArgs>(args: SelectSubset<T, CustomerAddressFindUniqueArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerAddress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerAddressFindUniqueOrThrowArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindFirstArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerAddressFindFirstArgs>(args?: SelectSubset<T, CustomerAddressFindFirstArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindFirstOrThrowArgs} args - Arguments to find a CustomerAddress
     * @example
     * // Get one CustomerAddress
     * const customerAddress = await prisma.customerAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerAddresses
     * const customerAddresses = await prisma.customerAddress.findMany()
     * 
     * // Get first 10 CustomerAddresses
     * const customerAddresses = await prisma.customerAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerAddressFindManyArgs>(args?: SelectSubset<T, CustomerAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerAddress.
     * @param {CustomerAddressCreateArgs} args - Arguments to create a CustomerAddress.
     * @example
     * // Create one CustomerAddress
     * const CustomerAddress = await prisma.customerAddress.create({
     *   data: {
     *     // ... data to create a CustomerAddress
     *   }
     * })
     * 
     */
    create<T extends CustomerAddressCreateArgs>(args: SelectSubset<T, CustomerAddressCreateArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerAddresses.
     * @param {CustomerAddressCreateManyArgs} args - Arguments to create many CustomerAddresses.
     * @example
     * // Create many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerAddressCreateManyArgs>(args?: SelectSubset<T, CustomerAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerAddresses and returns the data saved in the database.
     * @param {CustomerAddressCreateManyAndReturnArgs} args - Arguments to create many CustomerAddresses.
     * @example
     * // Create many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerAddresses and only return the `id`
     * const customerAddressWithIdOnly = await prisma.customerAddress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerAddress.
     * @param {CustomerAddressDeleteArgs} args - Arguments to delete one CustomerAddress.
     * @example
     * // Delete one CustomerAddress
     * const CustomerAddress = await prisma.customerAddress.delete({
     *   where: {
     *     // ... filter to delete one CustomerAddress
     *   }
     * })
     * 
     */
    delete<T extends CustomerAddressDeleteArgs>(args: SelectSubset<T, CustomerAddressDeleteArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerAddress.
     * @param {CustomerAddressUpdateArgs} args - Arguments to update one CustomerAddress.
     * @example
     * // Update one CustomerAddress
     * const customerAddress = await prisma.customerAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerAddressUpdateArgs>(args: SelectSubset<T, CustomerAddressUpdateArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerAddresses.
     * @param {CustomerAddressDeleteManyArgs} args - Arguments to filter CustomerAddresses to delete.
     * @example
     * // Delete a few CustomerAddresses
     * const { count } = await prisma.customerAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerAddressDeleteManyArgs>(args?: SelectSubset<T, CustomerAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerAddresses
     * const customerAddress = await prisma.customerAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerAddressUpdateManyArgs>(args: SelectSubset<T, CustomerAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerAddress.
     * @param {CustomerAddressUpsertArgs} args - Arguments to update or create a CustomerAddress.
     * @example
     * // Update or create a CustomerAddress
     * const customerAddress = await prisma.customerAddress.upsert({
     *   create: {
     *     // ... data to create a CustomerAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerAddress we want to update
     *   }
     * })
     */
    upsert<T extends CustomerAddressUpsertArgs>(args: SelectSubset<T, CustomerAddressUpsertArgs<ExtArgs>>): Prisma__CustomerAddressClient<$Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressCountArgs} args - Arguments to filter CustomerAddresses to count.
     * @example
     * // Count the number of CustomerAddresses
     * const count = await prisma.customerAddress.count({
     *   where: {
     *     // ... the filter for the CustomerAddresses we want to count
     *   }
     * })
    **/
    count<T extends CustomerAddressCountArgs>(
      args?: Subset<T, CustomerAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAddressAggregateArgs>(args: Subset<T, CustomerAddressAggregateArgs>): Prisma.PrismaPromise<GetCustomerAddressAggregateType<T>>

    /**
     * Group by CustomerAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAddressGroupByArgs} args - Group by arguments.
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
      T extends CustomerAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerAddressGroupByArgs['orderBy'] }
        : { orderBy?: CustomerAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerAddress model
   */
  readonly fields: CustomerAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomerAddress model
   */ 
  interface CustomerAddressFieldRefs {
    readonly id: FieldRef<"CustomerAddress", 'String'>
    readonly customerId: FieldRef<"CustomerAddress", 'String'>
    readonly street: FieldRef<"CustomerAddress", 'String'>
    readonly city: FieldRef<"CustomerAddress", 'String'>
    readonly state: FieldRef<"CustomerAddress", 'String'>
    readonly postalCode: FieldRef<"CustomerAddress", 'String'>
    readonly country: FieldRef<"CustomerAddress", 'String'>
    readonly isDefault: FieldRef<"CustomerAddress", 'Boolean'>
    readonly createdAt: FieldRef<"CustomerAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerAddress findUnique
   */
  export type CustomerAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress findUniqueOrThrow
   */
  export type CustomerAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress findFirst
   */
  export type CustomerAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerAddresses.
     */
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress findFirstOrThrow
   */
  export type CustomerAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddress to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerAddresses.
     */
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress findMany
   */
  export type CustomerAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter, which CustomerAddresses to fetch.
     */
    where?: CustomerAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerAddresses to fetch.
     */
    orderBy?: CustomerAddressOrderByWithRelationInput | CustomerAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerAddresses.
     */
    cursor?: CustomerAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerAddresses.
     */
    skip?: number
    distinct?: CustomerAddressScalarFieldEnum | CustomerAddressScalarFieldEnum[]
  }

  /**
   * CustomerAddress create
   */
  export type CustomerAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerAddress.
     */
    data: XOR<CustomerAddressCreateInput, CustomerAddressUncheckedCreateInput>
  }

  /**
   * CustomerAddress createMany
   */
  export type CustomerAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerAddresses.
     */
    data: CustomerAddressCreateManyInput | CustomerAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerAddress createManyAndReturn
   */
  export type CustomerAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerAddresses.
     */
    data: CustomerAddressCreateManyInput | CustomerAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerAddress update
   */
  export type CustomerAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerAddress.
     */
    data: XOR<CustomerAddressUpdateInput, CustomerAddressUncheckedUpdateInput>
    /**
     * Choose, which CustomerAddress to update.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress updateMany
   */
  export type CustomerAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerAddresses.
     */
    data: XOR<CustomerAddressUpdateManyMutationInput, CustomerAddressUncheckedUpdateManyInput>
    /**
     * Filter which CustomerAddresses to update
     */
    where?: CustomerAddressWhereInput
  }

  /**
   * CustomerAddress upsert
   */
  export type CustomerAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerAddress to update in case it exists.
     */
    where: CustomerAddressWhereUniqueInput
    /**
     * In case the CustomerAddress found by the `where` argument doesn't exist, create a new CustomerAddress with this data.
     */
    create: XOR<CustomerAddressCreateInput, CustomerAddressUncheckedCreateInput>
    /**
     * In case the CustomerAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerAddressUpdateInput, CustomerAddressUncheckedUpdateInput>
  }

  /**
   * CustomerAddress delete
   */
  export type CustomerAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
    /**
     * Filter which CustomerAddress to delete.
     */
    where: CustomerAddressWhereUniqueInput
  }

  /**
   * CustomerAddress deleteMany
   */
  export type CustomerAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerAddresses to delete
     */
    where?: CustomerAddressWhereInput
  }

  /**
   * CustomerAddress without action
   */
  export type CustomerAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerAddress
     */
    select?: CustomerAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerAddressInclude<ExtArgs> | null
  }


  /**
   * Model CustomerContact
   */

  export type AggregateCustomerContact = {
    _count: CustomerContactCountAggregateOutputType | null
    _min: CustomerContactMinAggregateOutputType | null
    _max: CustomerContactMaxAggregateOutputType | null
  }

  export type CustomerContactMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    type: string | null
    value: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerContactMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    type: string | null
    value: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerContactCountAggregateOutputType = {
    id: number
    customerId: number
    type: number
    value: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerContactMinAggregateInputType = {
    id?: true
    customerId?: true
    type?: true
    value?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerContactMaxAggregateInputType = {
    id?: true
    customerId?: true
    type?: true
    value?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerContactCountAggregateInputType = {
    id?: true
    customerId?: true
    type?: true
    value?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerContact to aggregate.
     */
    where?: CustomerContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerContacts to fetch.
     */
    orderBy?: CustomerContactOrderByWithRelationInput | CustomerContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerContacts
    **/
    _count?: true | CustomerContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerContactMaxAggregateInputType
  }

  export type GetCustomerContactAggregateType<T extends CustomerContactAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerContact[P]>
      : GetScalarType<T[P], AggregateCustomerContact[P]>
  }




  export type CustomerContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerContactWhereInput
    orderBy?: CustomerContactOrderByWithAggregationInput | CustomerContactOrderByWithAggregationInput[]
    by: CustomerContactScalarFieldEnum[] | CustomerContactScalarFieldEnum
    having?: CustomerContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerContactCountAggregateInputType | true
    _min?: CustomerContactMinAggregateInputType
    _max?: CustomerContactMaxAggregateInputType
  }

  export type CustomerContactGroupByOutputType = {
    id: string
    customerId: string
    type: string
    value: string
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: CustomerContactCountAggregateOutputType | null
    _min: CustomerContactMinAggregateOutputType | null
    _max: CustomerContactMaxAggregateOutputType | null
  }

  type GetCustomerContactGroupByPayload<T extends CustomerContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerContactGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerContactGroupByOutputType[P]>
        }
      >
    >


  export type CustomerContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    type?: boolean
    value?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerContact"]>

  export type CustomerContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    type?: boolean
    value?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerContact"]>

  export type CustomerContactSelectScalar = {
    id?: boolean
    customerId?: boolean
    type?: boolean
    value?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerContact"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      type: string
      value: string
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerContact"]>
    composites: {}
  }

  type CustomerContactGetPayload<S extends boolean | null | undefined | CustomerContactDefaultArgs> = $Result.GetResult<Prisma.$CustomerContactPayload, S>

  type CustomerContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerContactCountAggregateInputType | true
    }

  export interface CustomerContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerContact'], meta: { name: 'CustomerContact' } }
    /**
     * Find zero or one CustomerContact that matches the filter.
     * @param {CustomerContactFindUniqueArgs} args - Arguments to find a CustomerContact
     * @example
     * // Get one CustomerContact
     * const customerContact = await prisma.customerContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerContactFindUniqueArgs>(args: SelectSubset<T, CustomerContactFindUniqueArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerContact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerContactFindUniqueOrThrowArgs} args - Arguments to find a CustomerContact
     * @example
     * // Get one CustomerContact
     * const customerContact = await prisma.customerContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerContactFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactFindFirstArgs} args - Arguments to find a CustomerContact
     * @example
     * // Get one CustomerContact
     * const customerContact = await prisma.customerContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerContactFindFirstArgs>(args?: SelectSubset<T, CustomerContactFindFirstArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactFindFirstOrThrowArgs} args - Arguments to find a CustomerContact
     * @example
     * // Get one CustomerContact
     * const customerContact = await prisma.customerContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerContactFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerContacts
     * const customerContacts = await prisma.customerContact.findMany()
     * 
     * // Get first 10 CustomerContacts
     * const customerContacts = await prisma.customerContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerContactWithIdOnly = await prisma.customerContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerContactFindManyArgs>(args?: SelectSubset<T, CustomerContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerContact.
     * @param {CustomerContactCreateArgs} args - Arguments to create a CustomerContact.
     * @example
     * // Create one CustomerContact
     * const CustomerContact = await prisma.customerContact.create({
     *   data: {
     *     // ... data to create a CustomerContact
     *   }
     * })
     * 
     */
    create<T extends CustomerContactCreateArgs>(args: SelectSubset<T, CustomerContactCreateArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerContacts.
     * @param {CustomerContactCreateManyArgs} args - Arguments to create many CustomerContacts.
     * @example
     * // Create many CustomerContacts
     * const customerContact = await prisma.customerContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerContactCreateManyArgs>(args?: SelectSubset<T, CustomerContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerContacts and returns the data saved in the database.
     * @param {CustomerContactCreateManyAndReturnArgs} args - Arguments to create many CustomerContacts.
     * @example
     * // Create many CustomerContacts
     * const customerContact = await prisma.customerContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerContacts and only return the `id`
     * const customerContactWithIdOnly = await prisma.customerContact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerContactCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerContact.
     * @param {CustomerContactDeleteArgs} args - Arguments to delete one CustomerContact.
     * @example
     * // Delete one CustomerContact
     * const CustomerContact = await prisma.customerContact.delete({
     *   where: {
     *     // ... filter to delete one CustomerContact
     *   }
     * })
     * 
     */
    delete<T extends CustomerContactDeleteArgs>(args: SelectSubset<T, CustomerContactDeleteArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerContact.
     * @param {CustomerContactUpdateArgs} args - Arguments to update one CustomerContact.
     * @example
     * // Update one CustomerContact
     * const customerContact = await prisma.customerContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerContactUpdateArgs>(args: SelectSubset<T, CustomerContactUpdateArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerContacts.
     * @param {CustomerContactDeleteManyArgs} args - Arguments to filter CustomerContacts to delete.
     * @example
     * // Delete a few CustomerContacts
     * const { count } = await prisma.customerContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerContactDeleteManyArgs>(args?: SelectSubset<T, CustomerContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerContacts
     * const customerContact = await prisma.customerContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerContactUpdateManyArgs>(args: SelectSubset<T, CustomerContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerContact.
     * @param {CustomerContactUpsertArgs} args - Arguments to update or create a CustomerContact.
     * @example
     * // Update or create a CustomerContact
     * const customerContact = await prisma.customerContact.upsert({
     *   create: {
     *     // ... data to create a CustomerContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerContact we want to update
     *   }
     * })
     */
    upsert<T extends CustomerContactUpsertArgs>(args: SelectSubset<T, CustomerContactUpsertArgs<ExtArgs>>): Prisma__CustomerContactClient<$Result.GetResult<Prisma.$CustomerContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactCountArgs} args - Arguments to filter CustomerContacts to count.
     * @example
     * // Count the number of CustomerContacts
     * const count = await prisma.customerContact.count({
     *   where: {
     *     // ... the filter for the CustomerContacts we want to count
     *   }
     * })
    **/
    count<T extends CustomerContactCountArgs>(
      args?: Subset<T, CustomerContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerContactAggregateArgs>(args: Subset<T, CustomerContactAggregateArgs>): Prisma.PrismaPromise<GetCustomerContactAggregateType<T>>

    /**
     * Group by CustomerContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerContactGroupByArgs} args - Group by arguments.
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
      T extends CustomerContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerContactGroupByArgs['orderBy'] }
        : { orderBy?: CustomerContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerContact model
   */
  readonly fields: CustomerContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomerContact model
   */ 
  interface CustomerContactFieldRefs {
    readonly id: FieldRef<"CustomerContact", 'String'>
    readonly customerId: FieldRef<"CustomerContact", 'String'>
    readonly type: FieldRef<"CustomerContact", 'String'>
    readonly value: FieldRef<"CustomerContact", 'String'>
    readonly isPrimary: FieldRef<"CustomerContact", 'Boolean'>
    readonly createdAt: FieldRef<"CustomerContact", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerContact findUnique
   */
  export type CustomerContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * Filter, which CustomerContact to fetch.
     */
    where: CustomerContactWhereUniqueInput
  }

  /**
   * CustomerContact findUniqueOrThrow
   */
  export type CustomerContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * Filter, which CustomerContact to fetch.
     */
    where: CustomerContactWhereUniqueInput
  }

  /**
   * CustomerContact findFirst
   */
  export type CustomerContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * Filter, which CustomerContact to fetch.
     */
    where?: CustomerContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerContacts to fetch.
     */
    orderBy?: CustomerContactOrderByWithRelationInput | CustomerContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerContacts.
     */
    cursor?: CustomerContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerContacts.
     */
    distinct?: CustomerContactScalarFieldEnum | CustomerContactScalarFieldEnum[]
  }

  /**
   * CustomerContact findFirstOrThrow
   */
  export type CustomerContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * Filter, which CustomerContact to fetch.
     */
    where?: CustomerContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerContacts to fetch.
     */
    orderBy?: CustomerContactOrderByWithRelationInput | CustomerContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerContacts.
     */
    cursor?: CustomerContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerContacts.
     */
    distinct?: CustomerContactScalarFieldEnum | CustomerContactScalarFieldEnum[]
  }

  /**
   * CustomerContact findMany
   */
  export type CustomerContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * Filter, which CustomerContacts to fetch.
     */
    where?: CustomerContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerContacts to fetch.
     */
    orderBy?: CustomerContactOrderByWithRelationInput | CustomerContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerContacts.
     */
    cursor?: CustomerContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerContacts.
     */
    skip?: number
    distinct?: CustomerContactScalarFieldEnum | CustomerContactScalarFieldEnum[]
  }

  /**
   * CustomerContact create
   */
  export type CustomerContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerContact.
     */
    data: XOR<CustomerContactCreateInput, CustomerContactUncheckedCreateInput>
  }

  /**
   * CustomerContact createMany
   */
  export type CustomerContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerContacts.
     */
    data: CustomerContactCreateManyInput | CustomerContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerContact createManyAndReturn
   */
  export type CustomerContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerContacts.
     */
    data: CustomerContactCreateManyInput | CustomerContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerContact update
   */
  export type CustomerContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerContact.
     */
    data: XOR<CustomerContactUpdateInput, CustomerContactUncheckedUpdateInput>
    /**
     * Choose, which CustomerContact to update.
     */
    where: CustomerContactWhereUniqueInput
  }

  /**
   * CustomerContact updateMany
   */
  export type CustomerContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerContacts.
     */
    data: XOR<CustomerContactUpdateManyMutationInput, CustomerContactUncheckedUpdateManyInput>
    /**
     * Filter which CustomerContacts to update
     */
    where?: CustomerContactWhereInput
  }

  /**
   * CustomerContact upsert
   */
  export type CustomerContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerContact to update in case it exists.
     */
    where: CustomerContactWhereUniqueInput
    /**
     * In case the CustomerContact found by the `where` argument doesn't exist, create a new CustomerContact with this data.
     */
    create: XOR<CustomerContactCreateInput, CustomerContactUncheckedCreateInput>
    /**
     * In case the CustomerContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerContactUpdateInput, CustomerContactUncheckedUpdateInput>
  }

  /**
   * CustomerContact delete
   */
  export type CustomerContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
    /**
     * Filter which CustomerContact to delete.
     */
    where: CustomerContactWhereUniqueInput
  }

  /**
   * CustomerContact deleteMany
   */
  export type CustomerContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerContacts to delete
     */
    where?: CustomerContactWhereInput
  }

  /**
   * CustomerContact without action
   */
  export type CustomerContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerContact
     */
    select?: CustomerContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerContactInclude<ExtArgs> | null
  }


  /**
   * Model CustomerLoan
   */

  export type AggregateCustomerLoan = {
    _count: CustomerLoanCountAggregateOutputType | null
    _avg: CustomerLoanAvgAggregateOutputType | null
    _sum: CustomerLoanSumAggregateOutputType | null
    _min: CustomerLoanMinAggregateOutputType | null
    _max: CustomerLoanMaxAggregateOutputType | null
  }

  export type CustomerLoanAvgAggregateOutputType = {
    amount: number | null
    interestRate: number | null
  }

  export type CustomerLoanSumAggregateOutputType = {
    amount: number | null
    interestRate: number | null
  }

  export type CustomerLoanMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    tenantId: string | null
    shopId: string | null
    amount: number | null
    interestRate: number | null
    dueDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerLoanMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    tenantId: string | null
    shopId: string | null
    amount: number | null
    interestRate: number | null
    dueDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerLoanCountAggregateOutputType = {
    id: number
    customerId: number
    tenantId: number
    shopId: number
    amount: number
    interestRate: number
    dueDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerLoanAvgAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type CustomerLoanSumAggregateInputType = {
    amount?: true
    interestRate?: true
  }

  export type CustomerLoanMinAggregateInputType = {
    id?: true
    customerId?: true
    tenantId?: true
    shopId?: true
    amount?: true
    interestRate?: true
    dueDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerLoanMaxAggregateInputType = {
    id?: true
    customerId?: true
    tenantId?: true
    shopId?: true
    amount?: true
    interestRate?: true
    dueDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerLoanCountAggregateInputType = {
    id?: true
    customerId?: true
    tenantId?: true
    shopId?: true
    amount?: true
    interestRate?: true
    dueDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerLoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerLoan to aggregate.
     */
    where?: CustomerLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLoans to fetch.
     */
    orderBy?: CustomerLoanOrderByWithRelationInput | CustomerLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerLoans
    **/
    _count?: true | CustomerLoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerLoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerLoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerLoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerLoanMaxAggregateInputType
  }

  export type GetCustomerLoanAggregateType<T extends CustomerLoanAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerLoan[P]>
      : GetScalarType<T[P], AggregateCustomerLoan[P]>
  }




  export type CustomerLoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLoanWhereInput
    orderBy?: CustomerLoanOrderByWithAggregationInput | CustomerLoanOrderByWithAggregationInput[]
    by: CustomerLoanScalarFieldEnum[] | CustomerLoanScalarFieldEnum
    having?: CustomerLoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerLoanCountAggregateInputType | true
    _avg?: CustomerLoanAvgAggregateInputType
    _sum?: CustomerLoanSumAggregateInputType
    _min?: CustomerLoanMinAggregateInputType
    _max?: CustomerLoanMaxAggregateInputType
  }

  export type CustomerLoanGroupByOutputType = {
    id: string
    customerId: string
    tenantId: string
    shopId: string
    amount: number
    interestRate: number
    dueDate: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerLoanCountAggregateOutputType | null
    _avg: CustomerLoanAvgAggregateOutputType | null
    _sum: CustomerLoanSumAggregateOutputType | null
    _min: CustomerLoanMinAggregateOutputType | null
    _max: CustomerLoanMaxAggregateOutputType | null
  }

  type GetCustomerLoanGroupByPayload<T extends CustomerLoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerLoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerLoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerLoanGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerLoanGroupByOutputType[P]>
        }
      >
    >


  export type CustomerLoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    tenantId?: boolean
    shopId?: boolean
    amount?: boolean
    interestRate?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payments?: boolean | CustomerLoan$paymentsArgs<ExtArgs>
    _count?: boolean | CustomerLoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerLoan"]>

  export type CustomerLoanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    tenantId?: boolean
    shopId?: boolean
    amount?: boolean
    interestRate?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerLoan"]>

  export type CustomerLoanSelectScalar = {
    id?: boolean
    customerId?: boolean
    tenantId?: boolean
    shopId?: boolean
    amount?: boolean
    interestRate?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerLoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payments?: boolean | CustomerLoan$paymentsArgs<ExtArgs>
    _count?: boolean | CustomerLoanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerLoanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerLoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerLoan"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      payments: Prisma.$CustomerPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      tenantId: string
      shopId: string
      amount: number
      interestRate: number
      dueDate: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerLoan"]>
    composites: {}
  }

  type CustomerLoanGetPayload<S extends boolean | null | undefined | CustomerLoanDefaultArgs> = $Result.GetResult<Prisma.$CustomerLoanPayload, S>

  type CustomerLoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerLoanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerLoanCountAggregateInputType | true
    }

  export interface CustomerLoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerLoan'], meta: { name: 'CustomerLoan' } }
    /**
     * Find zero or one CustomerLoan that matches the filter.
     * @param {CustomerLoanFindUniqueArgs} args - Arguments to find a CustomerLoan
     * @example
     * // Get one CustomerLoan
     * const customerLoan = await prisma.customerLoan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerLoanFindUniqueArgs>(args: SelectSubset<T, CustomerLoanFindUniqueArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerLoan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerLoanFindUniqueOrThrowArgs} args - Arguments to find a CustomerLoan
     * @example
     * // Get one CustomerLoan
     * const customerLoan = await prisma.customerLoan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerLoanFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerLoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerLoan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanFindFirstArgs} args - Arguments to find a CustomerLoan
     * @example
     * // Get one CustomerLoan
     * const customerLoan = await prisma.customerLoan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerLoanFindFirstArgs>(args?: SelectSubset<T, CustomerLoanFindFirstArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerLoan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanFindFirstOrThrowArgs} args - Arguments to find a CustomerLoan
     * @example
     * // Get one CustomerLoan
     * const customerLoan = await prisma.customerLoan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerLoanFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerLoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerLoans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerLoans
     * const customerLoans = await prisma.customerLoan.findMany()
     * 
     * // Get first 10 CustomerLoans
     * const customerLoans = await prisma.customerLoan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerLoanWithIdOnly = await prisma.customerLoan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerLoanFindManyArgs>(args?: SelectSubset<T, CustomerLoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerLoan.
     * @param {CustomerLoanCreateArgs} args - Arguments to create a CustomerLoan.
     * @example
     * // Create one CustomerLoan
     * const CustomerLoan = await prisma.customerLoan.create({
     *   data: {
     *     // ... data to create a CustomerLoan
     *   }
     * })
     * 
     */
    create<T extends CustomerLoanCreateArgs>(args: SelectSubset<T, CustomerLoanCreateArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerLoans.
     * @param {CustomerLoanCreateManyArgs} args - Arguments to create many CustomerLoans.
     * @example
     * // Create many CustomerLoans
     * const customerLoan = await prisma.customerLoan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerLoanCreateManyArgs>(args?: SelectSubset<T, CustomerLoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerLoans and returns the data saved in the database.
     * @param {CustomerLoanCreateManyAndReturnArgs} args - Arguments to create many CustomerLoans.
     * @example
     * // Create many CustomerLoans
     * const customerLoan = await prisma.customerLoan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerLoans and only return the `id`
     * const customerLoanWithIdOnly = await prisma.customerLoan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerLoanCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerLoanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerLoan.
     * @param {CustomerLoanDeleteArgs} args - Arguments to delete one CustomerLoan.
     * @example
     * // Delete one CustomerLoan
     * const CustomerLoan = await prisma.customerLoan.delete({
     *   where: {
     *     // ... filter to delete one CustomerLoan
     *   }
     * })
     * 
     */
    delete<T extends CustomerLoanDeleteArgs>(args: SelectSubset<T, CustomerLoanDeleteArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerLoan.
     * @param {CustomerLoanUpdateArgs} args - Arguments to update one CustomerLoan.
     * @example
     * // Update one CustomerLoan
     * const customerLoan = await prisma.customerLoan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerLoanUpdateArgs>(args: SelectSubset<T, CustomerLoanUpdateArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerLoans.
     * @param {CustomerLoanDeleteManyArgs} args - Arguments to filter CustomerLoans to delete.
     * @example
     * // Delete a few CustomerLoans
     * const { count } = await prisma.customerLoan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerLoanDeleteManyArgs>(args?: SelectSubset<T, CustomerLoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerLoans
     * const customerLoan = await prisma.customerLoan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerLoanUpdateManyArgs>(args: SelectSubset<T, CustomerLoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerLoan.
     * @param {CustomerLoanUpsertArgs} args - Arguments to update or create a CustomerLoan.
     * @example
     * // Update or create a CustomerLoan
     * const customerLoan = await prisma.customerLoan.upsert({
     *   create: {
     *     // ... data to create a CustomerLoan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerLoan we want to update
     *   }
     * })
     */
    upsert<T extends CustomerLoanUpsertArgs>(args: SelectSubset<T, CustomerLoanUpsertArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanCountArgs} args - Arguments to filter CustomerLoans to count.
     * @example
     * // Count the number of CustomerLoans
     * const count = await prisma.customerLoan.count({
     *   where: {
     *     // ... the filter for the CustomerLoans we want to count
     *   }
     * })
    **/
    count<T extends CustomerLoanCountArgs>(
      args?: Subset<T, CustomerLoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerLoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerLoanAggregateArgs>(args: Subset<T, CustomerLoanAggregateArgs>): Prisma.PrismaPromise<GetCustomerLoanAggregateType<T>>

    /**
     * Group by CustomerLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLoanGroupByArgs} args - Group by arguments.
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
      T extends CustomerLoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerLoanGroupByArgs['orderBy'] }
        : { orderBy?: CustomerLoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerLoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerLoan model
   */
  readonly fields: CustomerLoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerLoan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerLoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payments<T extends CustomerLoan$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, CustomerLoan$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CustomerLoan model
   */ 
  interface CustomerLoanFieldRefs {
    readonly id: FieldRef<"CustomerLoan", 'String'>
    readonly customerId: FieldRef<"CustomerLoan", 'String'>
    readonly tenantId: FieldRef<"CustomerLoan", 'String'>
    readonly shopId: FieldRef<"CustomerLoan", 'String'>
    readonly amount: FieldRef<"CustomerLoan", 'Float'>
    readonly interestRate: FieldRef<"CustomerLoan", 'Float'>
    readonly dueDate: FieldRef<"CustomerLoan", 'DateTime'>
    readonly status: FieldRef<"CustomerLoan", 'String'>
    readonly createdAt: FieldRef<"CustomerLoan", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerLoan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerLoan findUnique
   */
  export type CustomerLoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLoan to fetch.
     */
    where: CustomerLoanWhereUniqueInput
  }

  /**
   * CustomerLoan findUniqueOrThrow
   */
  export type CustomerLoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLoan to fetch.
     */
    where: CustomerLoanWhereUniqueInput
  }

  /**
   * CustomerLoan findFirst
   */
  export type CustomerLoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLoan to fetch.
     */
    where?: CustomerLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLoans to fetch.
     */
    orderBy?: CustomerLoanOrderByWithRelationInput | CustomerLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerLoans.
     */
    cursor?: CustomerLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerLoans.
     */
    distinct?: CustomerLoanScalarFieldEnum | CustomerLoanScalarFieldEnum[]
  }

  /**
   * CustomerLoan findFirstOrThrow
   */
  export type CustomerLoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLoan to fetch.
     */
    where?: CustomerLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLoans to fetch.
     */
    orderBy?: CustomerLoanOrderByWithRelationInput | CustomerLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerLoans.
     */
    cursor?: CustomerLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerLoans.
     */
    distinct?: CustomerLoanScalarFieldEnum | CustomerLoanScalarFieldEnum[]
  }

  /**
   * CustomerLoan findMany
   */
  export type CustomerLoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLoans to fetch.
     */
    where?: CustomerLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLoans to fetch.
     */
    orderBy?: CustomerLoanOrderByWithRelationInput | CustomerLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerLoans.
     */
    cursor?: CustomerLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLoans.
     */
    skip?: number
    distinct?: CustomerLoanScalarFieldEnum | CustomerLoanScalarFieldEnum[]
  }

  /**
   * CustomerLoan create
   */
  export type CustomerLoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerLoan.
     */
    data: XOR<CustomerLoanCreateInput, CustomerLoanUncheckedCreateInput>
  }

  /**
   * CustomerLoan createMany
   */
  export type CustomerLoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerLoans.
     */
    data: CustomerLoanCreateManyInput | CustomerLoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerLoan createManyAndReturn
   */
  export type CustomerLoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerLoans.
     */
    data: CustomerLoanCreateManyInput | CustomerLoanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerLoan update
   */
  export type CustomerLoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerLoan.
     */
    data: XOR<CustomerLoanUpdateInput, CustomerLoanUncheckedUpdateInput>
    /**
     * Choose, which CustomerLoan to update.
     */
    where: CustomerLoanWhereUniqueInput
  }

  /**
   * CustomerLoan updateMany
   */
  export type CustomerLoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerLoans.
     */
    data: XOR<CustomerLoanUpdateManyMutationInput, CustomerLoanUncheckedUpdateManyInput>
    /**
     * Filter which CustomerLoans to update
     */
    where?: CustomerLoanWhereInput
  }

  /**
   * CustomerLoan upsert
   */
  export type CustomerLoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerLoan to update in case it exists.
     */
    where: CustomerLoanWhereUniqueInput
    /**
     * In case the CustomerLoan found by the `where` argument doesn't exist, create a new CustomerLoan with this data.
     */
    create: XOR<CustomerLoanCreateInput, CustomerLoanUncheckedCreateInput>
    /**
     * In case the CustomerLoan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerLoanUpdateInput, CustomerLoanUncheckedUpdateInput>
  }

  /**
   * CustomerLoan delete
   */
  export type CustomerLoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    /**
     * Filter which CustomerLoan to delete.
     */
    where: CustomerLoanWhereUniqueInput
  }

  /**
   * CustomerLoan deleteMany
   */
  export type CustomerLoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerLoans to delete
     */
    where?: CustomerLoanWhereInput
  }

  /**
   * CustomerLoan.payments
   */
  export type CustomerLoan$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    where?: CustomerPaymentWhereInput
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    cursor?: CustomerPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerLoan without action
   */
  export type CustomerLoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
  }


  /**
   * Model CustomerPayment
   */

  export type AggregateCustomerPayment = {
    _count: CustomerPaymentCountAggregateOutputType | null
    _avg: CustomerPaymentAvgAggregateOutputType | null
    _sum: CustomerPaymentSumAggregateOutputType | null
    _min: CustomerPaymentMinAggregateOutputType | null
    _max: CustomerPaymentMaxAggregateOutputType | null
  }

  export type CustomerPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type CustomerPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type CustomerPaymentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    loanId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type CustomerPaymentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    loanId: string | null
    amount: number | null
    method: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type CustomerPaymentCountAggregateOutputType = {
    id: number
    customerId: number
    loanId: number
    amount: number
    method: number
    reference: number
    createdAt: number
    _all: number
  }


  export type CustomerPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type CustomerPaymentSumAggregateInputType = {
    amount?: true
  }

  export type CustomerPaymentMinAggregateInputType = {
    id?: true
    customerId?: true
    loanId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type CustomerPaymentMaxAggregateInputType = {
    id?: true
    customerId?: true
    loanId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
  }

  export type CustomerPaymentCountAggregateInputType = {
    id?: true
    customerId?: true
    loanId?: true
    amount?: true
    method?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerPayment to aggregate.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerPayments
    **/
    _count?: true | CustomerPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerPaymentMaxAggregateInputType
  }

  export type GetCustomerPaymentAggregateType<T extends CustomerPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerPayment[P]>
      : GetScalarType<T[P], AggregateCustomerPayment[P]>
  }




  export type CustomerPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerPaymentWhereInput
    orderBy?: CustomerPaymentOrderByWithAggregationInput | CustomerPaymentOrderByWithAggregationInput[]
    by: CustomerPaymentScalarFieldEnum[] | CustomerPaymentScalarFieldEnum
    having?: CustomerPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerPaymentCountAggregateInputType | true
    _avg?: CustomerPaymentAvgAggregateInputType
    _sum?: CustomerPaymentSumAggregateInputType
    _min?: CustomerPaymentMinAggregateInputType
    _max?: CustomerPaymentMaxAggregateInputType
  }

  export type CustomerPaymentGroupByOutputType = {
    id: string
    customerId: string
    loanId: string | null
    amount: number
    method: string
    reference: string | null
    createdAt: Date
    _count: CustomerPaymentCountAggregateOutputType | null
    _avg: CustomerPaymentAvgAggregateOutputType | null
    _sum: CustomerPaymentSumAggregateOutputType | null
    _min: CustomerPaymentMinAggregateOutputType | null
    _max: CustomerPaymentMaxAggregateOutputType | null
  }

  type GetCustomerPaymentGroupByPayload<T extends CustomerPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerPaymentGroupByOutputType[P]>
        }
      >
    >


  export type CustomerPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    loanId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    loan?: boolean | CustomerPayment$loanArgs<ExtArgs>
  }, ExtArgs["result"]["customerPayment"]>

  export type CustomerPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    loanId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    loan?: boolean | CustomerPayment$loanArgs<ExtArgs>
  }, ExtArgs["result"]["customerPayment"]>

  export type CustomerPaymentSelectScalar = {
    id?: boolean
    customerId?: boolean
    loanId?: boolean
    amount?: boolean
    method?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type CustomerPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    loan?: boolean | CustomerPayment$loanArgs<ExtArgs>
  }
  export type CustomerPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    loan?: boolean | CustomerPayment$loanArgs<ExtArgs>
  }

  export type $CustomerPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerPayment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      loan: Prisma.$CustomerLoanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      loanId: string | null
      amount: number
      method: string
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["customerPayment"]>
    composites: {}
  }

  type CustomerPaymentGetPayload<S extends boolean | null | undefined | CustomerPaymentDefaultArgs> = $Result.GetResult<Prisma.$CustomerPaymentPayload, S>

  type CustomerPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerPaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerPaymentCountAggregateInputType | true
    }

  export interface CustomerPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerPayment'], meta: { name: 'CustomerPayment' } }
    /**
     * Find zero or one CustomerPayment that matches the filter.
     * @param {CustomerPaymentFindUniqueArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerPaymentFindUniqueArgs>(args: SelectSubset<T, CustomerPaymentFindUniqueArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerPayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerPaymentFindUniqueOrThrowArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentFindFirstArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerPaymentFindFirstArgs>(args?: SelectSubset<T, CustomerPaymentFindFirstArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentFindFirstOrThrowArgs} args - Arguments to find a CustomerPayment
     * @example
     * // Get one CustomerPayment
     * const customerPayment = await prisma.customerPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerPayments
     * const customerPayments = await prisma.customerPayment.findMany()
     * 
     * // Get first 10 CustomerPayments
     * const customerPayments = await prisma.customerPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerPaymentWithIdOnly = await prisma.customerPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerPaymentFindManyArgs>(args?: SelectSubset<T, CustomerPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerPayment.
     * @param {CustomerPaymentCreateArgs} args - Arguments to create a CustomerPayment.
     * @example
     * // Create one CustomerPayment
     * const CustomerPayment = await prisma.customerPayment.create({
     *   data: {
     *     // ... data to create a CustomerPayment
     *   }
     * })
     * 
     */
    create<T extends CustomerPaymentCreateArgs>(args: SelectSubset<T, CustomerPaymentCreateArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerPayments.
     * @param {CustomerPaymentCreateManyArgs} args - Arguments to create many CustomerPayments.
     * @example
     * // Create many CustomerPayments
     * const customerPayment = await prisma.customerPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerPaymentCreateManyArgs>(args?: SelectSubset<T, CustomerPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerPayments and returns the data saved in the database.
     * @param {CustomerPaymentCreateManyAndReturnArgs} args - Arguments to create many CustomerPayments.
     * @example
     * // Create many CustomerPayments
     * const customerPayment = await prisma.customerPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerPayments and only return the `id`
     * const customerPaymentWithIdOnly = await prisma.customerPayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerPayment.
     * @param {CustomerPaymentDeleteArgs} args - Arguments to delete one CustomerPayment.
     * @example
     * // Delete one CustomerPayment
     * const CustomerPayment = await prisma.customerPayment.delete({
     *   where: {
     *     // ... filter to delete one CustomerPayment
     *   }
     * })
     * 
     */
    delete<T extends CustomerPaymentDeleteArgs>(args: SelectSubset<T, CustomerPaymentDeleteArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerPayment.
     * @param {CustomerPaymentUpdateArgs} args - Arguments to update one CustomerPayment.
     * @example
     * // Update one CustomerPayment
     * const customerPayment = await prisma.customerPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerPaymentUpdateArgs>(args: SelectSubset<T, CustomerPaymentUpdateArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerPayments.
     * @param {CustomerPaymentDeleteManyArgs} args - Arguments to filter CustomerPayments to delete.
     * @example
     * // Delete a few CustomerPayments
     * const { count } = await prisma.customerPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerPaymentDeleteManyArgs>(args?: SelectSubset<T, CustomerPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerPayments
     * const customerPayment = await prisma.customerPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerPaymentUpdateManyArgs>(args: SelectSubset<T, CustomerPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerPayment.
     * @param {CustomerPaymentUpsertArgs} args - Arguments to update or create a CustomerPayment.
     * @example
     * // Update or create a CustomerPayment
     * const customerPayment = await prisma.customerPayment.upsert({
     *   create: {
     *     // ... data to create a CustomerPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerPayment we want to update
     *   }
     * })
     */
    upsert<T extends CustomerPaymentUpsertArgs>(args: SelectSubset<T, CustomerPaymentUpsertArgs<ExtArgs>>): Prisma__CustomerPaymentClient<$Result.GetResult<Prisma.$CustomerPaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentCountArgs} args - Arguments to filter CustomerPayments to count.
     * @example
     * // Count the number of CustomerPayments
     * const count = await prisma.customerPayment.count({
     *   where: {
     *     // ... the filter for the CustomerPayments we want to count
     *   }
     * })
    **/
    count<T extends CustomerPaymentCountArgs>(
      args?: Subset<T, CustomerPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerPaymentAggregateArgs>(args: Subset<T, CustomerPaymentAggregateArgs>): Prisma.PrismaPromise<GetCustomerPaymentAggregateType<T>>

    /**
     * Group by CustomerPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerPaymentGroupByArgs} args - Group by arguments.
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
      T extends CustomerPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerPaymentGroupByArgs['orderBy'] }
        : { orderBy?: CustomerPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerPayment model
   */
  readonly fields: CustomerPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    loan<T extends CustomerPayment$loanArgs<ExtArgs> = {}>(args?: Subset<T, CustomerPayment$loanArgs<ExtArgs>>): Prisma__CustomerLoanClient<$Result.GetResult<Prisma.$CustomerLoanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the CustomerPayment model
   */ 
  interface CustomerPaymentFieldRefs {
    readonly id: FieldRef<"CustomerPayment", 'String'>
    readonly customerId: FieldRef<"CustomerPayment", 'String'>
    readonly loanId: FieldRef<"CustomerPayment", 'String'>
    readonly amount: FieldRef<"CustomerPayment", 'Float'>
    readonly method: FieldRef<"CustomerPayment", 'String'>
    readonly reference: FieldRef<"CustomerPayment", 'String'>
    readonly createdAt: FieldRef<"CustomerPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerPayment findUnique
   */
  export type CustomerPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment findUniqueOrThrow
   */
  export type CustomerPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment findFirst
   */
  export type CustomerPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerPayments.
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerPayments.
     */
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerPayment findFirstOrThrow
   */
  export type CustomerPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayment to fetch.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerPayments.
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerPayments.
     */
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerPayment findMany
   */
  export type CustomerPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CustomerPayments to fetch.
     */
    where?: CustomerPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerPayments to fetch.
     */
    orderBy?: CustomerPaymentOrderByWithRelationInput | CustomerPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerPayments.
     */
    cursor?: CustomerPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerPayments.
     */
    skip?: number
    distinct?: CustomerPaymentScalarFieldEnum | CustomerPaymentScalarFieldEnum[]
  }

  /**
   * CustomerPayment create
   */
  export type CustomerPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerPayment.
     */
    data: XOR<CustomerPaymentCreateInput, CustomerPaymentUncheckedCreateInput>
  }

  /**
   * CustomerPayment createMany
   */
  export type CustomerPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerPayments.
     */
    data: CustomerPaymentCreateManyInput | CustomerPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerPayment createManyAndReturn
   */
  export type CustomerPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerPayments.
     */
    data: CustomerPaymentCreateManyInput | CustomerPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerPayment update
   */
  export type CustomerPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerPayment.
     */
    data: XOR<CustomerPaymentUpdateInput, CustomerPaymentUncheckedUpdateInput>
    /**
     * Choose, which CustomerPayment to update.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment updateMany
   */
  export type CustomerPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerPayments.
     */
    data: XOR<CustomerPaymentUpdateManyMutationInput, CustomerPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CustomerPayments to update
     */
    where?: CustomerPaymentWhereInput
  }

  /**
   * CustomerPayment upsert
   */
  export type CustomerPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerPayment to update in case it exists.
     */
    where: CustomerPaymentWhereUniqueInput
    /**
     * In case the CustomerPayment found by the `where` argument doesn't exist, create a new CustomerPayment with this data.
     */
    create: XOR<CustomerPaymentCreateInput, CustomerPaymentUncheckedCreateInput>
    /**
     * In case the CustomerPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerPaymentUpdateInput, CustomerPaymentUncheckedUpdateInput>
  }

  /**
   * CustomerPayment delete
   */
  export type CustomerPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
    /**
     * Filter which CustomerPayment to delete.
     */
    where: CustomerPaymentWhereUniqueInput
  }

  /**
   * CustomerPayment deleteMany
   */
  export type CustomerPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerPayments to delete
     */
    where?: CustomerPaymentWhereInput
  }

  /**
   * CustomerPayment.loan
   */
  export type CustomerPayment$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLoan
     */
    select?: CustomerLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLoanInclude<ExtArgs> | null
    where?: CustomerLoanWhereInput
  }

  /**
   * CustomerPayment without action
   */
  export type CustomerPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerPayment
     */
    select?: CustomerPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerPaymentInclude<ExtArgs> | null
  }


  /**
   * Model CustomerStatement
   */

  export type AggregateCustomerStatement = {
    _count: CustomerStatementCountAggregateOutputType | null
    _avg: CustomerStatementAvgAggregateOutputType | null
    _sum: CustomerStatementSumAggregateOutputType | null
    _min: CustomerStatementMinAggregateOutputType | null
    _max: CustomerStatementMaxAggregateOutputType | null
  }

  export type CustomerStatementAvgAggregateOutputType = {
    balance: number | null
  }

  export type CustomerStatementSumAggregateOutputType = {
    balance: number | null
  }

  export type CustomerStatementMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    period: string | null
    balance: number | null
    generatedAt: Date | null
  }

  export type CustomerStatementMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    period: string | null
    balance: number | null
    generatedAt: Date | null
  }

  export type CustomerStatementCountAggregateOutputType = {
    id: number
    customerId: number
    period: number
    balance: number
    generatedAt: number
    _all: number
  }


  export type CustomerStatementAvgAggregateInputType = {
    balance?: true
  }

  export type CustomerStatementSumAggregateInputType = {
    balance?: true
  }

  export type CustomerStatementMinAggregateInputType = {
    id?: true
    customerId?: true
    period?: true
    balance?: true
    generatedAt?: true
  }

  export type CustomerStatementMaxAggregateInputType = {
    id?: true
    customerId?: true
    period?: true
    balance?: true
    generatedAt?: true
  }

  export type CustomerStatementCountAggregateInputType = {
    id?: true
    customerId?: true
    period?: true
    balance?: true
    generatedAt?: true
    _all?: true
  }

  export type CustomerStatementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerStatement to aggregate.
     */
    where?: CustomerStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerStatements to fetch.
     */
    orderBy?: CustomerStatementOrderByWithRelationInput | CustomerStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerStatements
    **/
    _count?: true | CustomerStatementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerStatementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerStatementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerStatementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerStatementMaxAggregateInputType
  }

  export type GetCustomerStatementAggregateType<T extends CustomerStatementAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerStatement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerStatement[P]>
      : GetScalarType<T[P], AggregateCustomerStatement[P]>
  }




  export type CustomerStatementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerStatementWhereInput
    orderBy?: CustomerStatementOrderByWithAggregationInput | CustomerStatementOrderByWithAggregationInput[]
    by: CustomerStatementScalarFieldEnum[] | CustomerStatementScalarFieldEnum
    having?: CustomerStatementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerStatementCountAggregateInputType | true
    _avg?: CustomerStatementAvgAggregateInputType
    _sum?: CustomerStatementSumAggregateInputType
    _min?: CustomerStatementMinAggregateInputType
    _max?: CustomerStatementMaxAggregateInputType
  }

  export type CustomerStatementGroupByOutputType = {
    id: string
    customerId: string
    period: string
    balance: number
    generatedAt: Date
    _count: CustomerStatementCountAggregateOutputType | null
    _avg: CustomerStatementAvgAggregateOutputType | null
    _sum: CustomerStatementSumAggregateOutputType | null
    _min: CustomerStatementMinAggregateOutputType | null
    _max: CustomerStatementMaxAggregateOutputType | null
  }

  type GetCustomerStatementGroupByPayload<T extends CustomerStatementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerStatementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerStatementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerStatementGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerStatementGroupByOutputType[P]>
        }
      >
    >


  export type CustomerStatementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    period?: boolean
    balance?: boolean
    generatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerStatement"]>

  export type CustomerStatementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    period?: boolean
    balance?: boolean
    generatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerStatement"]>

  export type CustomerStatementSelectScalar = {
    id?: boolean
    customerId?: boolean
    period?: boolean
    balance?: boolean
    generatedAt?: boolean
  }

  export type CustomerStatementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerStatementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerStatementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerStatement"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      period: string
      balance: number
      generatedAt: Date
    }, ExtArgs["result"]["customerStatement"]>
    composites: {}
  }

  type CustomerStatementGetPayload<S extends boolean | null | undefined | CustomerStatementDefaultArgs> = $Result.GetResult<Prisma.$CustomerStatementPayload, S>

  type CustomerStatementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerStatementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerStatementCountAggregateInputType | true
    }

  export interface CustomerStatementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerStatement'], meta: { name: 'CustomerStatement' } }
    /**
     * Find zero or one CustomerStatement that matches the filter.
     * @param {CustomerStatementFindUniqueArgs} args - Arguments to find a CustomerStatement
     * @example
     * // Get one CustomerStatement
     * const customerStatement = await prisma.customerStatement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerStatementFindUniqueArgs>(args: SelectSubset<T, CustomerStatementFindUniqueArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerStatement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerStatementFindUniqueOrThrowArgs} args - Arguments to find a CustomerStatement
     * @example
     * // Get one CustomerStatement
     * const customerStatement = await prisma.customerStatement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerStatementFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerStatementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerStatement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementFindFirstArgs} args - Arguments to find a CustomerStatement
     * @example
     * // Get one CustomerStatement
     * const customerStatement = await prisma.customerStatement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerStatementFindFirstArgs>(args?: SelectSubset<T, CustomerStatementFindFirstArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerStatement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementFindFirstOrThrowArgs} args - Arguments to find a CustomerStatement
     * @example
     * // Get one CustomerStatement
     * const customerStatement = await prisma.customerStatement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerStatementFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerStatementFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerStatements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerStatements
     * const customerStatements = await prisma.customerStatement.findMany()
     * 
     * // Get first 10 CustomerStatements
     * const customerStatements = await prisma.customerStatement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerStatementWithIdOnly = await prisma.customerStatement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerStatementFindManyArgs>(args?: SelectSubset<T, CustomerStatementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerStatement.
     * @param {CustomerStatementCreateArgs} args - Arguments to create a CustomerStatement.
     * @example
     * // Create one CustomerStatement
     * const CustomerStatement = await prisma.customerStatement.create({
     *   data: {
     *     // ... data to create a CustomerStatement
     *   }
     * })
     * 
     */
    create<T extends CustomerStatementCreateArgs>(args: SelectSubset<T, CustomerStatementCreateArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerStatements.
     * @param {CustomerStatementCreateManyArgs} args - Arguments to create many CustomerStatements.
     * @example
     * // Create many CustomerStatements
     * const customerStatement = await prisma.customerStatement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerStatementCreateManyArgs>(args?: SelectSubset<T, CustomerStatementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerStatements and returns the data saved in the database.
     * @param {CustomerStatementCreateManyAndReturnArgs} args - Arguments to create many CustomerStatements.
     * @example
     * // Create many CustomerStatements
     * const customerStatement = await prisma.customerStatement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerStatements and only return the `id`
     * const customerStatementWithIdOnly = await prisma.customerStatement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerStatementCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerStatementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerStatement.
     * @param {CustomerStatementDeleteArgs} args - Arguments to delete one CustomerStatement.
     * @example
     * // Delete one CustomerStatement
     * const CustomerStatement = await prisma.customerStatement.delete({
     *   where: {
     *     // ... filter to delete one CustomerStatement
     *   }
     * })
     * 
     */
    delete<T extends CustomerStatementDeleteArgs>(args: SelectSubset<T, CustomerStatementDeleteArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerStatement.
     * @param {CustomerStatementUpdateArgs} args - Arguments to update one CustomerStatement.
     * @example
     * // Update one CustomerStatement
     * const customerStatement = await prisma.customerStatement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerStatementUpdateArgs>(args: SelectSubset<T, CustomerStatementUpdateArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerStatements.
     * @param {CustomerStatementDeleteManyArgs} args - Arguments to filter CustomerStatements to delete.
     * @example
     * // Delete a few CustomerStatements
     * const { count } = await prisma.customerStatement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerStatementDeleteManyArgs>(args?: SelectSubset<T, CustomerStatementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerStatements
     * const customerStatement = await prisma.customerStatement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerStatementUpdateManyArgs>(args: SelectSubset<T, CustomerStatementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerStatement.
     * @param {CustomerStatementUpsertArgs} args - Arguments to update or create a CustomerStatement.
     * @example
     * // Update or create a CustomerStatement
     * const customerStatement = await prisma.customerStatement.upsert({
     *   create: {
     *     // ... data to create a CustomerStatement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerStatement we want to update
     *   }
     * })
     */
    upsert<T extends CustomerStatementUpsertArgs>(args: SelectSubset<T, CustomerStatementUpsertArgs<ExtArgs>>): Prisma__CustomerStatementClient<$Result.GetResult<Prisma.$CustomerStatementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementCountArgs} args - Arguments to filter CustomerStatements to count.
     * @example
     * // Count the number of CustomerStatements
     * const count = await prisma.customerStatement.count({
     *   where: {
     *     // ... the filter for the CustomerStatements we want to count
     *   }
     * })
    **/
    count<T extends CustomerStatementCountArgs>(
      args?: Subset<T, CustomerStatementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerStatementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerStatementAggregateArgs>(args: Subset<T, CustomerStatementAggregateArgs>): Prisma.PrismaPromise<GetCustomerStatementAggregateType<T>>

    /**
     * Group by CustomerStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerStatementGroupByArgs} args - Group by arguments.
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
      T extends CustomerStatementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerStatementGroupByArgs['orderBy'] }
        : { orderBy?: CustomerStatementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerStatementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerStatement model
   */
  readonly fields: CustomerStatementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerStatement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerStatementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CustomerStatement model
   */ 
  interface CustomerStatementFieldRefs {
    readonly id: FieldRef<"CustomerStatement", 'String'>
    readonly customerId: FieldRef<"CustomerStatement", 'String'>
    readonly period: FieldRef<"CustomerStatement", 'String'>
    readonly balance: FieldRef<"CustomerStatement", 'Float'>
    readonly generatedAt: FieldRef<"CustomerStatement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerStatement findUnique
   */
  export type CustomerStatementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * Filter, which CustomerStatement to fetch.
     */
    where: CustomerStatementWhereUniqueInput
  }

  /**
   * CustomerStatement findUniqueOrThrow
   */
  export type CustomerStatementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * Filter, which CustomerStatement to fetch.
     */
    where: CustomerStatementWhereUniqueInput
  }

  /**
   * CustomerStatement findFirst
   */
  export type CustomerStatementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * Filter, which CustomerStatement to fetch.
     */
    where?: CustomerStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerStatements to fetch.
     */
    orderBy?: CustomerStatementOrderByWithRelationInput | CustomerStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerStatements.
     */
    cursor?: CustomerStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerStatements.
     */
    distinct?: CustomerStatementScalarFieldEnum | CustomerStatementScalarFieldEnum[]
  }

  /**
   * CustomerStatement findFirstOrThrow
   */
  export type CustomerStatementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * Filter, which CustomerStatement to fetch.
     */
    where?: CustomerStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerStatements to fetch.
     */
    orderBy?: CustomerStatementOrderByWithRelationInput | CustomerStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerStatements.
     */
    cursor?: CustomerStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerStatements.
     */
    distinct?: CustomerStatementScalarFieldEnum | CustomerStatementScalarFieldEnum[]
  }

  /**
   * CustomerStatement findMany
   */
  export type CustomerStatementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * Filter, which CustomerStatements to fetch.
     */
    where?: CustomerStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerStatements to fetch.
     */
    orderBy?: CustomerStatementOrderByWithRelationInput | CustomerStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerStatements.
     */
    cursor?: CustomerStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerStatements.
     */
    skip?: number
    distinct?: CustomerStatementScalarFieldEnum | CustomerStatementScalarFieldEnum[]
  }

  /**
   * CustomerStatement create
   */
  export type CustomerStatementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerStatement.
     */
    data: XOR<CustomerStatementCreateInput, CustomerStatementUncheckedCreateInput>
  }

  /**
   * CustomerStatement createMany
   */
  export type CustomerStatementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerStatements.
     */
    data: CustomerStatementCreateManyInput | CustomerStatementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerStatement createManyAndReturn
   */
  export type CustomerStatementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerStatements.
     */
    data: CustomerStatementCreateManyInput | CustomerStatementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerStatement update
   */
  export type CustomerStatementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerStatement.
     */
    data: XOR<CustomerStatementUpdateInput, CustomerStatementUncheckedUpdateInput>
    /**
     * Choose, which CustomerStatement to update.
     */
    where: CustomerStatementWhereUniqueInput
  }

  /**
   * CustomerStatement updateMany
   */
  export type CustomerStatementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerStatements.
     */
    data: XOR<CustomerStatementUpdateManyMutationInput, CustomerStatementUncheckedUpdateManyInput>
    /**
     * Filter which CustomerStatements to update
     */
    where?: CustomerStatementWhereInput
  }

  /**
   * CustomerStatement upsert
   */
  export type CustomerStatementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerStatement to update in case it exists.
     */
    where: CustomerStatementWhereUniqueInput
    /**
     * In case the CustomerStatement found by the `where` argument doesn't exist, create a new CustomerStatement with this data.
     */
    create: XOR<CustomerStatementCreateInput, CustomerStatementUncheckedCreateInput>
    /**
     * In case the CustomerStatement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerStatementUpdateInput, CustomerStatementUncheckedUpdateInput>
  }

  /**
   * CustomerStatement delete
   */
  export type CustomerStatementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
    /**
     * Filter which CustomerStatement to delete.
     */
    where: CustomerStatementWhereUniqueInput
  }

  /**
   * CustomerStatement deleteMany
   */
  export type CustomerStatementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerStatements to delete
     */
    where?: CustomerStatementWhereInput
  }

  /**
   * CustomerStatement without action
   */
  export type CustomerStatementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerStatement
     */
    select?: CustomerStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerStatementInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    balance: 'balance',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerAddressScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    street: 'street',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerAddressScalarFieldEnum = (typeof CustomerAddressScalarFieldEnum)[keyof typeof CustomerAddressScalarFieldEnum]


  export const CustomerContactScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    type: 'type',
    value: 'value',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerContactScalarFieldEnum = (typeof CustomerContactScalarFieldEnum)[keyof typeof CustomerContactScalarFieldEnum]


  export const CustomerLoanScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    tenantId: 'tenantId',
    shopId: 'shopId',
    amount: 'amount',
    interestRate: 'interestRate',
    dueDate: 'dueDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerLoanScalarFieldEnum = (typeof CustomerLoanScalarFieldEnum)[keyof typeof CustomerLoanScalarFieldEnum]


  export const CustomerPaymentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    loanId: 'loanId',
    amount: 'amount',
    method: 'method',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type CustomerPaymentScalarFieldEnum = (typeof CustomerPaymentScalarFieldEnum)[keyof typeof CustomerPaymentScalarFieldEnum]


  export const CustomerStatementScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    period: 'period',
    balance: 'balance',
    generatedAt: 'generatedAt'
  };

  export type CustomerStatementScalarFieldEnum = (typeof CustomerStatementScalarFieldEnum)[keyof typeof CustomerStatementScalarFieldEnum]


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


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    tenantId?: StringFilter<"Customer"> | string
    shopId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    balance?: FloatFilter<"Customer"> | number
    status?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    addresses?: CustomerAddressListRelationFilter
    contacts?: CustomerContactListRelationFilter
    loans?: CustomerLoanListRelationFilter
    payments?: CustomerPaymentListRelationFilter
    statements?: CustomerStatementListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addresses?: CustomerAddressOrderByRelationAggregateInput
    contacts?: CustomerContactOrderByRelationAggregateInput
    loans?: CustomerLoanOrderByRelationAggregateInput
    payments?: CustomerPaymentOrderByRelationAggregateInput
    statements?: CustomerStatementOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    tenantId?: StringFilter<"Customer"> | string
    shopId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    balance?: FloatFilter<"Customer"> | number
    status?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    addresses?: CustomerAddressListRelationFilter
    contacts?: CustomerContactListRelationFilter
    loans?: CustomerLoanListRelationFilter
    payments?: CustomerPaymentListRelationFilter
    statements?: CustomerStatementListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    balance?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    tenantId?: StringWithAggregatesFilter<"Customer"> | string
    shopId?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    balance?: FloatWithAggregatesFilter<"Customer"> | number
    status?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CustomerAddressWhereInput = {
    AND?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    OR?: CustomerAddressWhereInput[]
    NOT?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    id?: StringFilter<"CustomerAddress"> | string
    customerId?: StringFilter<"CustomerAddress"> | string
    street?: StringFilter<"CustomerAddress"> | string
    city?: StringFilter<"CustomerAddress"> | string
    state?: StringNullableFilter<"CustomerAddress"> | string | null
    postalCode?: StringNullableFilter<"CustomerAddress"> | string | null
    country?: StringNullableFilter<"CustomerAddress"> | string | null
    isDefault?: BoolFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type CustomerAddressOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    OR?: CustomerAddressWhereInput[]
    NOT?: CustomerAddressWhereInput | CustomerAddressWhereInput[]
    customerId?: StringFilter<"CustomerAddress"> | string
    street?: StringFilter<"CustomerAddress"> | string
    city?: StringFilter<"CustomerAddress"> | string
    state?: StringNullableFilter<"CustomerAddress"> | string | null
    postalCode?: StringNullableFilter<"CustomerAddress"> | string | null
    country?: StringNullableFilter<"CustomerAddress"> | string | null
    isDefault?: BoolFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerAddressOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerAddressCountOrderByAggregateInput
    _max?: CustomerAddressMaxOrderByAggregateInput
    _min?: CustomerAddressMinOrderByAggregateInput
  }

  export type CustomerAddressScalarWhereWithAggregatesInput = {
    AND?: CustomerAddressScalarWhereWithAggregatesInput | CustomerAddressScalarWhereWithAggregatesInput[]
    OR?: CustomerAddressScalarWhereWithAggregatesInput[]
    NOT?: CustomerAddressScalarWhereWithAggregatesInput | CustomerAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerAddress"> | string
    customerId?: StringWithAggregatesFilter<"CustomerAddress"> | string
    street?: StringWithAggregatesFilter<"CustomerAddress"> | string
    city?: StringWithAggregatesFilter<"CustomerAddress"> | string
    state?: StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null
    country?: StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null
    isDefault?: BoolWithAggregatesFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string
  }

  export type CustomerContactWhereInput = {
    AND?: CustomerContactWhereInput | CustomerContactWhereInput[]
    OR?: CustomerContactWhereInput[]
    NOT?: CustomerContactWhereInput | CustomerContactWhereInput[]
    id?: StringFilter<"CustomerContact"> | string
    customerId?: StringFilter<"CustomerContact"> | string
    type?: StringFilter<"CustomerContact"> | string
    value?: StringFilter<"CustomerContact"> | string
    isPrimary?: BoolFilter<"CustomerContact"> | boolean
    createdAt?: DateTimeFilter<"CustomerContact"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerContact"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type CustomerContactOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerContactWhereInput | CustomerContactWhereInput[]
    OR?: CustomerContactWhereInput[]
    NOT?: CustomerContactWhereInput | CustomerContactWhereInput[]
    customerId?: StringFilter<"CustomerContact"> | string
    type?: StringFilter<"CustomerContact"> | string
    value?: StringFilter<"CustomerContact"> | string
    isPrimary?: BoolFilter<"CustomerContact"> | boolean
    createdAt?: DateTimeFilter<"CustomerContact"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerContact"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerContactOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerContactCountOrderByAggregateInput
    _max?: CustomerContactMaxOrderByAggregateInput
    _min?: CustomerContactMinOrderByAggregateInput
  }

  export type CustomerContactScalarWhereWithAggregatesInput = {
    AND?: CustomerContactScalarWhereWithAggregatesInput | CustomerContactScalarWhereWithAggregatesInput[]
    OR?: CustomerContactScalarWhereWithAggregatesInput[]
    NOT?: CustomerContactScalarWhereWithAggregatesInput | CustomerContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerContact"> | string
    customerId?: StringWithAggregatesFilter<"CustomerContact"> | string
    type?: StringWithAggregatesFilter<"CustomerContact"> | string
    value?: StringWithAggregatesFilter<"CustomerContact"> | string
    isPrimary?: BoolWithAggregatesFilter<"CustomerContact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CustomerContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerContact"> | Date | string
  }

  export type CustomerLoanWhereInput = {
    AND?: CustomerLoanWhereInput | CustomerLoanWhereInput[]
    OR?: CustomerLoanWhereInput[]
    NOT?: CustomerLoanWhereInput | CustomerLoanWhereInput[]
    id?: StringFilter<"CustomerLoan"> | string
    customerId?: StringFilter<"CustomerLoan"> | string
    tenantId?: StringFilter<"CustomerLoan"> | string
    shopId?: StringFilter<"CustomerLoan"> | string
    amount?: FloatFilter<"CustomerLoan"> | number
    interestRate?: FloatFilter<"CustomerLoan"> | number
    dueDate?: DateTimeNullableFilter<"CustomerLoan"> | Date | string | null
    status?: StringFilter<"CustomerLoan"> | string
    createdAt?: DateTimeFilter<"CustomerLoan"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerLoan"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    payments?: CustomerPaymentListRelationFilter
  }

  export type CustomerLoanOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    payments?: CustomerPaymentOrderByRelationAggregateInput
  }

  export type CustomerLoanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerLoanWhereInput | CustomerLoanWhereInput[]
    OR?: CustomerLoanWhereInput[]
    NOT?: CustomerLoanWhereInput | CustomerLoanWhereInput[]
    customerId?: StringFilter<"CustomerLoan"> | string
    tenantId?: StringFilter<"CustomerLoan"> | string
    shopId?: StringFilter<"CustomerLoan"> | string
    amount?: FloatFilter<"CustomerLoan"> | number
    interestRate?: FloatFilter<"CustomerLoan"> | number
    dueDate?: DateTimeNullableFilter<"CustomerLoan"> | Date | string | null
    status?: StringFilter<"CustomerLoan"> | string
    createdAt?: DateTimeFilter<"CustomerLoan"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerLoan"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    payments?: CustomerPaymentListRelationFilter
  }, "id">

  export type CustomerLoanOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerLoanCountOrderByAggregateInput
    _avg?: CustomerLoanAvgOrderByAggregateInput
    _max?: CustomerLoanMaxOrderByAggregateInput
    _min?: CustomerLoanMinOrderByAggregateInput
    _sum?: CustomerLoanSumOrderByAggregateInput
  }

  export type CustomerLoanScalarWhereWithAggregatesInput = {
    AND?: CustomerLoanScalarWhereWithAggregatesInput | CustomerLoanScalarWhereWithAggregatesInput[]
    OR?: CustomerLoanScalarWhereWithAggregatesInput[]
    NOT?: CustomerLoanScalarWhereWithAggregatesInput | CustomerLoanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerLoan"> | string
    customerId?: StringWithAggregatesFilter<"CustomerLoan"> | string
    tenantId?: StringWithAggregatesFilter<"CustomerLoan"> | string
    shopId?: StringWithAggregatesFilter<"CustomerLoan"> | string
    amount?: FloatWithAggregatesFilter<"CustomerLoan"> | number
    interestRate?: FloatWithAggregatesFilter<"CustomerLoan"> | number
    dueDate?: DateTimeNullableWithAggregatesFilter<"CustomerLoan"> | Date | string | null
    status?: StringWithAggregatesFilter<"CustomerLoan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerLoan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerLoan"> | Date | string
  }

  export type CustomerPaymentWhereInput = {
    AND?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    OR?: CustomerPaymentWhereInput[]
    NOT?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    id?: StringFilter<"CustomerPayment"> | string
    customerId?: StringFilter<"CustomerPayment"> | string
    loanId?: StringNullableFilter<"CustomerPayment"> | string | null
    amount?: FloatFilter<"CustomerPayment"> | number
    method?: StringFilter<"CustomerPayment"> | string
    reference?: StringNullableFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    loan?: XOR<CustomerLoanNullableRelationFilter, CustomerLoanWhereInput> | null
  }

  export type CustomerPaymentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanId?: SortOrderInput | SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    loan?: CustomerLoanOrderByWithRelationInput
  }

  export type CustomerPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    OR?: CustomerPaymentWhereInput[]
    NOT?: CustomerPaymentWhereInput | CustomerPaymentWhereInput[]
    customerId?: StringFilter<"CustomerPayment"> | string
    loanId?: StringNullableFilter<"CustomerPayment"> | string | null
    amount?: FloatFilter<"CustomerPayment"> | number
    method?: StringFilter<"CustomerPayment"> | string
    reference?: StringNullableFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeFilter<"CustomerPayment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    loan?: XOR<CustomerLoanNullableRelationFilter, CustomerLoanWhereInput> | null
  }, "id">

  export type CustomerPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanId?: SortOrderInput | SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerPaymentCountOrderByAggregateInput
    _avg?: CustomerPaymentAvgOrderByAggregateInput
    _max?: CustomerPaymentMaxOrderByAggregateInput
    _min?: CustomerPaymentMinOrderByAggregateInput
    _sum?: CustomerPaymentSumOrderByAggregateInput
  }

  export type CustomerPaymentScalarWhereWithAggregatesInput = {
    AND?: CustomerPaymentScalarWhereWithAggregatesInput | CustomerPaymentScalarWhereWithAggregatesInput[]
    OR?: CustomerPaymentScalarWhereWithAggregatesInput[]
    NOT?: CustomerPaymentScalarWhereWithAggregatesInput | CustomerPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerPayment"> | string
    customerId?: StringWithAggregatesFilter<"CustomerPayment"> | string
    loanId?: StringNullableWithAggregatesFilter<"CustomerPayment"> | string | null
    amount?: FloatWithAggregatesFilter<"CustomerPayment"> | number
    method?: StringWithAggregatesFilter<"CustomerPayment"> | string
    reference?: StringNullableWithAggregatesFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerPayment"> | Date | string
  }

  export type CustomerStatementWhereInput = {
    AND?: CustomerStatementWhereInput | CustomerStatementWhereInput[]
    OR?: CustomerStatementWhereInput[]
    NOT?: CustomerStatementWhereInput | CustomerStatementWhereInput[]
    id?: StringFilter<"CustomerStatement"> | string
    customerId?: StringFilter<"CustomerStatement"> | string
    period?: StringFilter<"CustomerStatement"> | string
    balance?: FloatFilter<"CustomerStatement"> | number
    generatedAt?: DateTimeFilter<"CustomerStatement"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type CustomerStatementOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerStatementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId_period?: CustomerStatementCustomerIdPeriodCompoundUniqueInput
    AND?: CustomerStatementWhereInput | CustomerStatementWhereInput[]
    OR?: CustomerStatementWhereInput[]
    NOT?: CustomerStatementWhereInput | CustomerStatementWhereInput[]
    customerId?: StringFilter<"CustomerStatement"> | string
    period?: StringFilter<"CustomerStatement"> | string
    balance?: FloatFilter<"CustomerStatement"> | number
    generatedAt?: DateTimeFilter<"CustomerStatement"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id" | "customerId_period">

  export type CustomerStatementOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
    _count?: CustomerStatementCountOrderByAggregateInput
    _avg?: CustomerStatementAvgOrderByAggregateInput
    _max?: CustomerStatementMaxOrderByAggregateInput
    _min?: CustomerStatementMinOrderByAggregateInput
    _sum?: CustomerStatementSumOrderByAggregateInput
  }

  export type CustomerStatementScalarWhereWithAggregatesInput = {
    AND?: CustomerStatementScalarWhereWithAggregatesInput | CustomerStatementScalarWhereWithAggregatesInput[]
    OR?: CustomerStatementScalarWhereWithAggregatesInput[]
    NOT?: CustomerStatementScalarWhereWithAggregatesInput | CustomerStatementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerStatement"> | string
    customerId?: StringWithAggregatesFilter<"CustomerStatement"> | string
    period?: StringWithAggregatesFilter<"CustomerStatement"> | string
    balance?: FloatWithAggregatesFilter<"CustomerStatement"> | number
    generatedAt?: DateTimeWithAggregatesFilter<"CustomerStatement"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactUncheckedCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanUncheckedCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressCreateInput = {
    id?: string
    street: string
    city: string
    state?: string | null
    postalCode?: string | null
    country?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAddressesInput
  }

  export type CustomerAddressUncheckedCreateInput = {
    id?: string
    customerId: string
    street: string
    city: string
    state?: string | null
    postalCode?: string | null
    country?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type CustomerAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressCreateManyInput = {
    id?: string
    customerId: string
    street: string
    city: string
    state?: string | null
    postalCode?: string | null
    country?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerContactCreateInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutContactsInput
  }

  export type CustomerContactUncheckedCreateInput = {
    id?: string
    customerId: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutContactsNestedInput
  }

  export type CustomerContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerContactCreateManyInput = {
    id?: string
    customerId: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerLoanCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLoansInput
    payments?: CustomerPaymentCreateNestedManyWithoutLoanInput
  }

  export type CustomerLoanUncheckedCreateInput = {
    id?: string
    customerId: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type CustomerLoanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLoansNestedInput
    payments?: CustomerPaymentUpdateManyWithoutLoanNestedInput
  }

  export type CustomerLoanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: CustomerPaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type CustomerLoanCreateManyInput = {
    id?: string
    customerId: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerLoanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerLoanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentCreateInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
    loan?: CustomerLoanCreateNestedOneWithoutPaymentsInput
  }

  export type CustomerPaymentUncheckedCreateInput = {
    id?: string
    customerId: string
    loanId?: string | null
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type CustomerPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
    loan?: CustomerLoanUpdateOneWithoutPaymentsNestedInput
  }

  export type CustomerPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentCreateManyInput = {
    id?: string
    customerId: string
    loanId?: string | null
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type CustomerPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerStatementCreateInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutStatementsInput
  }

  export type CustomerStatementUncheckedCreateInput = {
    id?: string
    customerId: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type CustomerStatementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutStatementsNestedInput
  }

  export type CustomerStatementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerStatementCreateManyInput = {
    id?: string
    customerId: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type CustomerStatementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerStatementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
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

  export type CustomerAddressListRelationFilter = {
    every?: CustomerAddressWhereInput
    some?: CustomerAddressWhereInput
    none?: CustomerAddressWhereInput
  }

  export type CustomerContactListRelationFilter = {
    every?: CustomerContactWhereInput
    some?: CustomerContactWhereInput
    none?: CustomerContactWhereInput
  }

  export type CustomerLoanListRelationFilter = {
    every?: CustomerLoanWhereInput
    some?: CustomerLoanWhereInput
    none?: CustomerLoanWhereInput
  }

  export type CustomerPaymentListRelationFilter = {
    every?: CustomerPaymentWhereInput
    some?: CustomerPaymentWhereInput
    none?: CustomerPaymentWhereInput
  }

  export type CustomerStatementListRelationFilter = {
    every?: CustomerStatementWhereInput
    some?: CustomerStatementWhereInput
    none?: CustomerStatementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerLoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerStatementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
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

  export type CustomerAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
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

  export type CustomerMinOrderByAggregateInput = {
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

  export type CustomerSumOrderByAggregateInput = {
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

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerAddressCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAddressMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    isDefault?: SortOrder
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

  export type CustomerContactCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerContactMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerContactMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CustomerLoanCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerLoanAvgOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
  }

  export type CustomerLoanMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerLoanMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerLoanSumOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
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

  export type CustomerLoanNullableRelationFilter = {
    is?: CustomerLoanWhereInput | null
    isNot?: CustomerLoanWhereInput | null
  }

  export type CustomerPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CustomerPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CustomerStatementCustomerIdPeriodCompoundUniqueInput = {
    customerId: string
    period: string
  }

  export type CustomerStatementCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
  }

  export type CustomerStatementAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CustomerStatementMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
  }

  export type CustomerStatementMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    period?: SortOrder
    balance?: SortOrder
    generatedAt?: SortOrder
  }

  export type CustomerStatementSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CustomerAddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerAddressCreateWithoutCustomerInput, CustomerAddressUncheckedCreateWithoutCustomerInput> | CustomerAddressCreateWithoutCustomerInput[] | CustomerAddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput | CustomerAddressCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerAddressCreateManyCustomerInputEnvelope
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
  }

  export type CustomerContactCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerContactCreateWithoutCustomerInput, CustomerContactUncheckedCreateWithoutCustomerInput> | CustomerContactCreateWithoutCustomerInput[] | CustomerContactUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerContactCreateOrConnectWithoutCustomerInput | CustomerContactCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerContactCreateManyCustomerInputEnvelope
    connect?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
  }

  export type CustomerLoanCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerLoanCreateWithoutCustomerInput, CustomerLoanUncheckedCreateWithoutCustomerInput> | CustomerLoanCreateWithoutCustomerInput[] | CustomerLoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLoanCreateOrConnectWithoutCustomerInput | CustomerLoanCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerLoanCreateManyCustomerInputEnvelope
    connect?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
  }

  export type CustomerPaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
  }

  export type CustomerStatementCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerStatementCreateWithoutCustomerInput, CustomerStatementUncheckedCreateWithoutCustomerInput> | CustomerStatementCreateWithoutCustomerInput[] | CustomerStatementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerStatementCreateOrConnectWithoutCustomerInput | CustomerStatementCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerStatementCreateManyCustomerInputEnvelope
    connect?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
  }

  export type CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerAddressCreateWithoutCustomerInput, CustomerAddressUncheckedCreateWithoutCustomerInput> | CustomerAddressCreateWithoutCustomerInput[] | CustomerAddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput | CustomerAddressCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerAddressCreateManyCustomerInputEnvelope
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
  }

  export type CustomerContactUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerContactCreateWithoutCustomerInput, CustomerContactUncheckedCreateWithoutCustomerInput> | CustomerContactCreateWithoutCustomerInput[] | CustomerContactUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerContactCreateOrConnectWithoutCustomerInput | CustomerContactCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerContactCreateManyCustomerInputEnvelope
    connect?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
  }

  export type CustomerLoanUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerLoanCreateWithoutCustomerInput, CustomerLoanUncheckedCreateWithoutCustomerInput> | CustomerLoanCreateWithoutCustomerInput[] | CustomerLoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLoanCreateOrConnectWithoutCustomerInput | CustomerLoanCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerLoanCreateManyCustomerInputEnvelope
    connect?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
  }

  export type CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
  }

  export type CustomerStatementUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerStatementCreateWithoutCustomerInput, CustomerStatementUncheckedCreateWithoutCustomerInput> | CustomerStatementCreateWithoutCustomerInput[] | CustomerStatementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerStatementCreateOrConnectWithoutCustomerInput | CustomerStatementCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerStatementCreateManyCustomerInputEnvelope
    connect?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
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

  export type CustomerAddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerAddressCreateWithoutCustomerInput, CustomerAddressUncheckedCreateWithoutCustomerInput> | CustomerAddressCreateWithoutCustomerInput[] | CustomerAddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput | CustomerAddressCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput | CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerAddressCreateManyCustomerInputEnvelope
    set?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    disconnect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    delete?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    update?: CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput | CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerAddressUpdateManyWithWhereWithoutCustomerInput | CustomerAddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
  }

  export type CustomerContactUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerContactCreateWithoutCustomerInput, CustomerContactUncheckedCreateWithoutCustomerInput> | CustomerContactCreateWithoutCustomerInput[] | CustomerContactUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerContactCreateOrConnectWithoutCustomerInput | CustomerContactCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerContactUpsertWithWhereUniqueWithoutCustomerInput | CustomerContactUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerContactCreateManyCustomerInputEnvelope
    set?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    disconnect?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    delete?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    connect?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    update?: CustomerContactUpdateWithWhereUniqueWithoutCustomerInput | CustomerContactUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerContactUpdateManyWithWhereWithoutCustomerInput | CustomerContactUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerContactScalarWhereInput | CustomerContactScalarWhereInput[]
  }

  export type CustomerLoanUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerLoanCreateWithoutCustomerInput, CustomerLoanUncheckedCreateWithoutCustomerInput> | CustomerLoanCreateWithoutCustomerInput[] | CustomerLoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLoanCreateOrConnectWithoutCustomerInput | CustomerLoanCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerLoanUpsertWithWhereUniqueWithoutCustomerInput | CustomerLoanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerLoanCreateManyCustomerInputEnvelope
    set?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    disconnect?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    delete?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    connect?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    update?: CustomerLoanUpdateWithWhereUniqueWithoutCustomerInput | CustomerLoanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerLoanUpdateManyWithWhereWithoutCustomerInput | CustomerLoanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerLoanScalarWhereInput | CustomerLoanScalarWhereInput[]
  }

  export type CustomerPaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    set?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    disconnect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    delete?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    update?: CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerPaymentUpdateManyWithWhereWithoutCustomerInput | CustomerPaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
  }

  export type CustomerStatementUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerStatementCreateWithoutCustomerInput, CustomerStatementUncheckedCreateWithoutCustomerInput> | CustomerStatementCreateWithoutCustomerInput[] | CustomerStatementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerStatementCreateOrConnectWithoutCustomerInput | CustomerStatementCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerStatementUpsertWithWhereUniqueWithoutCustomerInput | CustomerStatementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerStatementCreateManyCustomerInputEnvelope
    set?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    disconnect?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    delete?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    connect?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    update?: CustomerStatementUpdateWithWhereUniqueWithoutCustomerInput | CustomerStatementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerStatementUpdateManyWithWhereWithoutCustomerInput | CustomerStatementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerStatementScalarWhereInput | CustomerStatementScalarWhereInput[]
  }

  export type CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerAddressCreateWithoutCustomerInput, CustomerAddressUncheckedCreateWithoutCustomerInput> | CustomerAddressCreateWithoutCustomerInput[] | CustomerAddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerAddressCreateOrConnectWithoutCustomerInput | CustomerAddressCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput | CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerAddressCreateManyCustomerInputEnvelope
    set?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    disconnect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    delete?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    connect?: CustomerAddressWhereUniqueInput | CustomerAddressWhereUniqueInput[]
    update?: CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput | CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerAddressUpdateManyWithWhereWithoutCustomerInput | CustomerAddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
  }

  export type CustomerContactUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerContactCreateWithoutCustomerInput, CustomerContactUncheckedCreateWithoutCustomerInput> | CustomerContactCreateWithoutCustomerInput[] | CustomerContactUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerContactCreateOrConnectWithoutCustomerInput | CustomerContactCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerContactUpsertWithWhereUniqueWithoutCustomerInput | CustomerContactUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerContactCreateManyCustomerInputEnvelope
    set?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    disconnect?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    delete?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    connect?: CustomerContactWhereUniqueInput | CustomerContactWhereUniqueInput[]
    update?: CustomerContactUpdateWithWhereUniqueWithoutCustomerInput | CustomerContactUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerContactUpdateManyWithWhereWithoutCustomerInput | CustomerContactUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerContactScalarWhereInput | CustomerContactScalarWhereInput[]
  }

  export type CustomerLoanUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerLoanCreateWithoutCustomerInput, CustomerLoanUncheckedCreateWithoutCustomerInput> | CustomerLoanCreateWithoutCustomerInput[] | CustomerLoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLoanCreateOrConnectWithoutCustomerInput | CustomerLoanCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerLoanUpsertWithWhereUniqueWithoutCustomerInput | CustomerLoanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerLoanCreateManyCustomerInputEnvelope
    set?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    disconnect?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    delete?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    connect?: CustomerLoanWhereUniqueInput | CustomerLoanWhereUniqueInput[]
    update?: CustomerLoanUpdateWithWhereUniqueWithoutCustomerInput | CustomerLoanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerLoanUpdateManyWithWhereWithoutCustomerInput | CustomerLoanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerLoanScalarWhereInput | CustomerLoanScalarWhereInput[]
  }

  export type CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput> | CustomerPaymentCreateWithoutCustomerInput[] | CustomerPaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutCustomerInput | CustomerPaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerPaymentCreateManyCustomerInputEnvelope
    set?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    disconnect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    delete?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    update?: CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput | CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerPaymentUpdateManyWithWhereWithoutCustomerInput | CustomerPaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
  }

  export type CustomerStatementUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerStatementCreateWithoutCustomerInput, CustomerStatementUncheckedCreateWithoutCustomerInput> | CustomerStatementCreateWithoutCustomerInput[] | CustomerStatementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerStatementCreateOrConnectWithoutCustomerInput | CustomerStatementCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerStatementUpsertWithWhereUniqueWithoutCustomerInput | CustomerStatementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerStatementCreateManyCustomerInputEnvelope
    set?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    disconnect?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    delete?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    connect?: CustomerStatementWhereUniqueInput | CustomerStatementWhereUniqueInput[]
    update?: CustomerStatementUpdateWithWhereUniqueWithoutCustomerInput | CustomerStatementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerStatementUpdateManyWithWhereWithoutCustomerInput | CustomerStatementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerStatementScalarWhereInput | CustomerStatementScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutAddressesInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    upsert?: CustomerUpsertWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAddressesInput, CustomerUpdateWithoutAddressesInput>, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomerCreateNestedOneWithoutContactsInput = {
    create?: XOR<CustomerCreateWithoutContactsInput, CustomerUncheckedCreateWithoutContactsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContactsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<CustomerCreateWithoutContactsInput, CustomerUncheckedCreateWithoutContactsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContactsInput
    upsert?: CustomerUpsertWithoutContactsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutContactsInput, CustomerUpdateWithoutContactsInput>, CustomerUncheckedUpdateWithoutContactsInput>
  }

  export type CustomerCreateNestedOneWithoutLoansInput = {
    create?: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLoansInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerPaymentCreateNestedManyWithoutLoanInput = {
    create?: XOR<CustomerPaymentCreateWithoutLoanInput, CustomerPaymentUncheckedCreateWithoutLoanInput> | CustomerPaymentCreateWithoutLoanInput[] | CustomerPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutLoanInput | CustomerPaymentCreateOrConnectWithoutLoanInput[]
    createMany?: CustomerPaymentCreateManyLoanInputEnvelope
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
  }

  export type CustomerPaymentUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<CustomerPaymentCreateWithoutLoanInput, CustomerPaymentUncheckedCreateWithoutLoanInput> | CustomerPaymentCreateWithoutLoanInput[] | CustomerPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutLoanInput | CustomerPaymentCreateOrConnectWithoutLoanInput[]
    createMany?: CustomerPaymentCreateManyLoanInputEnvelope
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLoansInput
    upsert?: CustomerUpsertWithoutLoansInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLoansInput, CustomerUpdateWithoutLoansInput>, CustomerUncheckedUpdateWithoutLoansInput>
  }

  export type CustomerPaymentUpdateManyWithoutLoanNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutLoanInput, CustomerPaymentUncheckedCreateWithoutLoanInput> | CustomerPaymentCreateWithoutLoanInput[] | CustomerPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutLoanInput | CustomerPaymentCreateOrConnectWithoutLoanInput[]
    upsert?: CustomerPaymentUpsertWithWhereUniqueWithoutLoanInput | CustomerPaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: CustomerPaymentCreateManyLoanInputEnvelope
    set?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    disconnect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    delete?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    update?: CustomerPaymentUpdateWithWhereUniqueWithoutLoanInput | CustomerPaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: CustomerPaymentUpdateManyWithWhereWithoutLoanInput | CustomerPaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
  }

  export type CustomerPaymentUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<CustomerPaymentCreateWithoutLoanInput, CustomerPaymentUncheckedCreateWithoutLoanInput> | CustomerPaymentCreateWithoutLoanInput[] | CustomerPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: CustomerPaymentCreateOrConnectWithoutLoanInput | CustomerPaymentCreateOrConnectWithoutLoanInput[]
    upsert?: CustomerPaymentUpsertWithWhereUniqueWithoutLoanInput | CustomerPaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: CustomerPaymentCreateManyLoanInputEnvelope
    set?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    disconnect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    delete?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    connect?: CustomerPaymentWhereUniqueInput | CustomerPaymentWhereUniqueInput[]
    update?: CustomerPaymentUpdateWithWhereUniqueWithoutLoanInput | CustomerPaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: CustomerPaymentUpdateManyWithWhereWithoutLoanInput | CustomerPaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerLoanCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CustomerLoanCreateWithoutPaymentsInput, CustomerLoanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerLoanCreateOrConnectWithoutPaymentsInput
    connect?: CustomerLoanWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    upsert?: CustomerUpsertWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaymentsInput, CustomerUpdateWithoutPaymentsInput>, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerLoanUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<CustomerLoanCreateWithoutPaymentsInput, CustomerLoanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerLoanCreateOrConnectWithoutPaymentsInput
    upsert?: CustomerLoanUpsertWithoutPaymentsInput
    disconnect?: CustomerLoanWhereInput | boolean
    delete?: CustomerLoanWhereInput | boolean
    connect?: CustomerLoanWhereUniqueInput
    update?: XOR<XOR<CustomerLoanUpdateToOneWithWhereWithoutPaymentsInput, CustomerLoanUpdateWithoutPaymentsInput>, CustomerLoanUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerCreateNestedOneWithoutStatementsInput = {
    create?: XOR<CustomerCreateWithoutStatementsInput, CustomerUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutStatementsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutStatementsNestedInput = {
    create?: XOR<CustomerCreateWithoutStatementsInput, CustomerUncheckedCreateWithoutStatementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutStatementsInput
    upsert?: CustomerUpsertWithoutStatementsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutStatementsInput, CustomerUpdateWithoutStatementsInput>, CustomerUncheckedUpdateWithoutStatementsInput>
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

  export type CustomerAddressCreateWithoutCustomerInput = {
    id?: string
    street: string
    city: string
    state?: string | null
    postalCode?: string | null
    country?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressUncheckedCreateWithoutCustomerInput = {
    id?: string
    street: string
    city: string
    state?: string | null
    postalCode?: string | null
    country?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerAddressCreateOrConnectWithoutCustomerInput = {
    where: CustomerAddressWhereUniqueInput
    create: XOR<CustomerAddressCreateWithoutCustomerInput, CustomerAddressUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerAddressCreateManyCustomerInputEnvelope = {
    data: CustomerAddressCreateManyCustomerInput | CustomerAddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerContactCreateWithoutCustomerInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerContactUncheckedCreateWithoutCustomerInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerContactCreateOrConnectWithoutCustomerInput = {
    where: CustomerContactWhereUniqueInput
    create: XOR<CustomerContactCreateWithoutCustomerInput, CustomerContactUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerContactCreateManyCustomerInputEnvelope = {
    data: CustomerContactCreateManyCustomerInput | CustomerContactCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerLoanCreateWithoutCustomerInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: CustomerPaymentCreateNestedManyWithoutLoanInput
  }

  export type CustomerLoanUncheckedCreateWithoutCustomerInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type CustomerLoanCreateOrConnectWithoutCustomerInput = {
    where: CustomerLoanWhereUniqueInput
    create: XOR<CustomerLoanCreateWithoutCustomerInput, CustomerLoanUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerLoanCreateManyCustomerInputEnvelope = {
    data: CustomerLoanCreateManyCustomerInput | CustomerLoanCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerPaymentCreateWithoutCustomerInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    loan?: CustomerLoanCreateNestedOneWithoutPaymentsInput
  }

  export type CustomerPaymentUncheckedCreateWithoutCustomerInput = {
    id?: string
    loanId?: string | null
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type CustomerPaymentCreateOrConnectWithoutCustomerInput = {
    where: CustomerPaymentWhereUniqueInput
    create: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPaymentCreateManyCustomerInputEnvelope = {
    data: CustomerPaymentCreateManyCustomerInput | CustomerPaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerStatementCreateWithoutCustomerInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type CustomerStatementUncheckedCreateWithoutCustomerInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type CustomerStatementCreateOrConnectWithoutCustomerInput = {
    where: CustomerStatementWhereUniqueInput
    create: XOR<CustomerStatementCreateWithoutCustomerInput, CustomerStatementUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerStatementCreateManyCustomerInputEnvelope = {
    data: CustomerStatementCreateManyCustomerInput | CustomerStatementCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerAddressWhereUniqueInput
    update: XOR<CustomerAddressUpdateWithoutCustomerInput, CustomerAddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerAddressCreateWithoutCustomerInput, CustomerAddressUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerAddressWhereUniqueInput
    data: XOR<CustomerAddressUpdateWithoutCustomerInput, CustomerAddressUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerAddressUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerAddressScalarWhereInput
    data: XOR<CustomerAddressUpdateManyMutationInput, CustomerAddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerAddressScalarWhereInput = {
    AND?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
    OR?: CustomerAddressScalarWhereInput[]
    NOT?: CustomerAddressScalarWhereInput | CustomerAddressScalarWhereInput[]
    id?: StringFilter<"CustomerAddress"> | string
    customerId?: StringFilter<"CustomerAddress"> | string
    street?: StringFilter<"CustomerAddress"> | string
    city?: StringFilter<"CustomerAddress"> | string
    state?: StringNullableFilter<"CustomerAddress"> | string | null
    postalCode?: StringNullableFilter<"CustomerAddress"> | string | null
    country?: StringNullableFilter<"CustomerAddress"> | string | null
    isDefault?: BoolFilter<"CustomerAddress"> | boolean
    createdAt?: DateTimeFilter<"CustomerAddress"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerAddress"> | Date | string
  }

  export type CustomerContactUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerContactWhereUniqueInput
    update: XOR<CustomerContactUpdateWithoutCustomerInput, CustomerContactUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerContactCreateWithoutCustomerInput, CustomerContactUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerContactUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerContactWhereUniqueInput
    data: XOR<CustomerContactUpdateWithoutCustomerInput, CustomerContactUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerContactUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerContactScalarWhereInput
    data: XOR<CustomerContactUpdateManyMutationInput, CustomerContactUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerContactScalarWhereInput = {
    AND?: CustomerContactScalarWhereInput | CustomerContactScalarWhereInput[]
    OR?: CustomerContactScalarWhereInput[]
    NOT?: CustomerContactScalarWhereInput | CustomerContactScalarWhereInput[]
    id?: StringFilter<"CustomerContact"> | string
    customerId?: StringFilter<"CustomerContact"> | string
    type?: StringFilter<"CustomerContact"> | string
    value?: StringFilter<"CustomerContact"> | string
    isPrimary?: BoolFilter<"CustomerContact"> | boolean
    createdAt?: DateTimeFilter<"CustomerContact"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerContact"> | Date | string
  }

  export type CustomerLoanUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerLoanWhereUniqueInput
    update: XOR<CustomerLoanUpdateWithoutCustomerInput, CustomerLoanUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerLoanCreateWithoutCustomerInput, CustomerLoanUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerLoanUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerLoanWhereUniqueInput
    data: XOR<CustomerLoanUpdateWithoutCustomerInput, CustomerLoanUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerLoanUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerLoanScalarWhereInput
    data: XOR<CustomerLoanUpdateManyMutationInput, CustomerLoanUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerLoanScalarWhereInput = {
    AND?: CustomerLoanScalarWhereInput | CustomerLoanScalarWhereInput[]
    OR?: CustomerLoanScalarWhereInput[]
    NOT?: CustomerLoanScalarWhereInput | CustomerLoanScalarWhereInput[]
    id?: StringFilter<"CustomerLoan"> | string
    customerId?: StringFilter<"CustomerLoan"> | string
    tenantId?: StringFilter<"CustomerLoan"> | string
    shopId?: StringFilter<"CustomerLoan"> | string
    amount?: FloatFilter<"CustomerLoan"> | number
    interestRate?: FloatFilter<"CustomerLoan"> | number
    dueDate?: DateTimeNullableFilter<"CustomerLoan"> | Date | string | null
    status?: StringFilter<"CustomerLoan"> | string
    createdAt?: DateTimeFilter<"CustomerLoan"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerLoan"> | Date | string
  }

  export type CustomerPaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerPaymentWhereUniqueInput
    update: XOR<CustomerPaymentUpdateWithoutCustomerInput, CustomerPaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerPaymentCreateWithoutCustomerInput, CustomerPaymentUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerPaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerPaymentWhereUniqueInput
    data: XOR<CustomerPaymentUpdateWithoutCustomerInput, CustomerPaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerPaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerPaymentScalarWhereInput
    data: XOR<CustomerPaymentUpdateManyMutationInput, CustomerPaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerPaymentScalarWhereInput = {
    AND?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
    OR?: CustomerPaymentScalarWhereInput[]
    NOT?: CustomerPaymentScalarWhereInput | CustomerPaymentScalarWhereInput[]
    id?: StringFilter<"CustomerPayment"> | string
    customerId?: StringFilter<"CustomerPayment"> | string
    loanId?: StringNullableFilter<"CustomerPayment"> | string | null
    amount?: FloatFilter<"CustomerPayment"> | number
    method?: StringFilter<"CustomerPayment"> | string
    reference?: StringNullableFilter<"CustomerPayment"> | string | null
    createdAt?: DateTimeFilter<"CustomerPayment"> | Date | string
  }

  export type CustomerStatementUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerStatementWhereUniqueInput
    update: XOR<CustomerStatementUpdateWithoutCustomerInput, CustomerStatementUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerStatementCreateWithoutCustomerInput, CustomerStatementUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerStatementUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerStatementWhereUniqueInput
    data: XOR<CustomerStatementUpdateWithoutCustomerInput, CustomerStatementUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerStatementUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerStatementScalarWhereInput
    data: XOR<CustomerStatementUpdateManyMutationInput, CustomerStatementUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerStatementScalarWhereInput = {
    AND?: CustomerStatementScalarWhereInput | CustomerStatementScalarWhereInput[]
    OR?: CustomerStatementScalarWhereInput[]
    NOT?: CustomerStatementScalarWhereInput | CustomerStatementScalarWhereInput[]
    id?: StringFilter<"CustomerStatement"> | string
    customerId?: StringFilter<"CustomerStatement"> | string
    period?: StringFilter<"CustomerStatement"> | string
    balance?: FloatFilter<"CustomerStatement"> | number
    generatedAt?: DateTimeFilter<"CustomerStatement"> | Date | string
  }

  export type CustomerCreateWithoutAddressesInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: CustomerContactCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAddressesInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: CustomerContactUncheckedCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanUncheckedCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAddressesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
  }

  export type CustomerUpsertWithoutAddressesInput = {
    update: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAddressesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomerUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: CustomerContactUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: CustomerContactUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutContactsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutContactsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanUncheckedCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutContactsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContactsInput, CustomerUncheckedCreateWithoutContactsInput>
  }

  export type CustomerUpsertWithoutContactsInput = {
    update: XOR<CustomerUpdateWithoutContactsInput, CustomerUncheckedUpdateWithoutContactsInput>
    create: XOR<CustomerCreateWithoutContactsInput, CustomerUncheckedCreateWithoutContactsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutContactsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutContactsInput, CustomerUncheckedUpdateWithoutContactsInput>
  }

  export type CustomerUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutLoansInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutLoansInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactUncheckedCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutLoansInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
  }

  export type CustomerPaymentCreateWithoutLoanInput = {
    id?: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
  }

  export type CustomerPaymentUncheckedCreateWithoutLoanInput = {
    id?: string
    customerId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type CustomerPaymentCreateOrConnectWithoutLoanInput = {
    where: CustomerPaymentWhereUniqueInput
    create: XOR<CustomerPaymentCreateWithoutLoanInput, CustomerPaymentUncheckedCreateWithoutLoanInput>
  }

  export type CustomerPaymentCreateManyLoanInputEnvelope = {
    data: CustomerPaymentCreateManyLoanInput | CustomerPaymentCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutLoansInput = {
    update: XOR<CustomerUpdateWithoutLoansInput, CustomerUncheckedUpdateWithoutLoansInput>
    create: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLoansInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLoansInput, CustomerUncheckedUpdateWithoutLoansInput>
  }

  export type CustomerUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerPaymentUpsertWithWhereUniqueWithoutLoanInput = {
    where: CustomerPaymentWhereUniqueInput
    update: XOR<CustomerPaymentUpdateWithoutLoanInput, CustomerPaymentUncheckedUpdateWithoutLoanInput>
    create: XOR<CustomerPaymentCreateWithoutLoanInput, CustomerPaymentUncheckedCreateWithoutLoanInput>
  }

  export type CustomerPaymentUpdateWithWhereUniqueWithoutLoanInput = {
    where: CustomerPaymentWhereUniqueInput
    data: XOR<CustomerPaymentUpdateWithoutLoanInput, CustomerPaymentUncheckedUpdateWithoutLoanInput>
  }

  export type CustomerPaymentUpdateManyWithWhereWithoutLoanInput = {
    where: CustomerPaymentScalarWhereInput
    data: XOR<CustomerPaymentUpdateManyMutationInput, CustomerPaymentUncheckedUpdateManyWithoutLoanInput>
  }

  export type CustomerCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactUncheckedCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanUncheckedCreateNestedManyWithoutCustomerInput
    statements?: CustomerStatementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaymentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
  }

  export type CustomerLoanCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLoansInput
  }

  export type CustomerLoanUncheckedCreateWithoutPaymentsInput = {
    id?: string
    customerId: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerLoanCreateOrConnectWithoutPaymentsInput = {
    where: CustomerLoanWhereUniqueInput
    create: XOR<CustomerLoanCreateWithoutPaymentsInput, CustomerLoanUncheckedCreateWithoutPaymentsInput>
  }

  export type CustomerUpsertWithoutPaymentsInput = {
    update: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUncheckedUpdateManyWithoutCustomerNestedInput
    statements?: CustomerStatementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerLoanUpsertWithoutPaymentsInput = {
    update: XOR<CustomerLoanUpdateWithoutPaymentsInput, CustomerLoanUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CustomerLoanCreateWithoutPaymentsInput, CustomerLoanUncheckedCreateWithoutPaymentsInput>
    where?: CustomerLoanWhereInput
  }

  export type CustomerLoanUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CustomerLoanWhereInput
    data: XOR<CustomerLoanUpdateWithoutPaymentsInput, CustomerLoanUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerLoanUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLoansNestedInput
  }

  export type CustomerLoanUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutStatementsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutStatementsInput = {
    id?: string
    tenantId: string
    shopId: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    balance?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput
    contacts?: CustomerContactUncheckedCreateNestedManyWithoutCustomerInput
    loans?: CustomerLoanUncheckedCreateNestedManyWithoutCustomerInput
    payments?: CustomerPaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutStatementsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutStatementsInput, CustomerUncheckedCreateWithoutStatementsInput>
  }

  export type CustomerUpsertWithoutStatementsInput = {
    update: XOR<CustomerUpdateWithoutStatementsInput, CustomerUncheckedUpdateWithoutStatementsInput>
    create: XOR<CustomerCreateWithoutStatementsInput, CustomerUncheckedCreateWithoutStatementsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutStatementsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutStatementsInput, CustomerUncheckedUpdateWithoutStatementsInput>
  }

  export type CustomerUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutStatementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput
    contacts?: CustomerContactUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: CustomerLoanUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: CustomerPaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerAddressCreateManyCustomerInput = {
    id?: string
    street: string
    city: string
    state?: string | null
    postalCode?: string | null
    country?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerContactCreateManyCustomerInput = {
    id?: string
    type: string
    value: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerLoanCreateManyCustomerInput = {
    id?: string
    tenantId: string
    shopId: string
    amount: number
    interestRate?: number
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerPaymentCreateManyCustomerInput = {
    id?: string
    loanId?: string | null
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type CustomerStatementCreateManyCustomerInput = {
    id?: string
    period: string
    balance: number
    generatedAt?: Date | string
  }

  export type CustomerAddressUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerAddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerContactUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerContactUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerContactUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerLoanUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: CustomerPaymentUpdateManyWithoutLoanNestedInput
  }

  export type CustomerLoanUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: CustomerPaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type CustomerLoanUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: CustomerLoanUpdateOneWithoutPaymentsNestedInput
  }

  export type CustomerPaymentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerStatementUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerStatementUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerStatementUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentCreateManyLoanInput = {
    id?: string
    customerId: string
    amount: number
    method: string
    reference?: string | null
    createdAt?: Date | string
  }

  export type CustomerPaymentUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type CustomerPaymentUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerPaymentUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerLoanCountOutputTypeDefaultArgs instead
     */
    export type CustomerLoanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerLoanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerAddressDefaultArgs instead
     */
    export type CustomerAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerAddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerContactDefaultArgs instead
     */
    export type CustomerContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerLoanDefaultArgs instead
     */
    export type CustomerLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerLoanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerPaymentDefaultArgs instead
     */
    export type CustomerPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerPaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerStatementDefaultArgs instead
     */
    export type CustomerStatementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerStatementDefaultArgs<ExtArgs>

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