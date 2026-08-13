
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model InventoryUpgrade
 * 
 */
export type InventoryUpgrade = $Result.DefaultSelection<Prisma.$InventoryUpgradePayload>
/**
 * Model InventoryTransfer
 * 
 */
export type InventoryTransfer = $Result.DefaultSelection<Prisma.$InventoryTransferPayload>
/**
 * Model WarrantyClaim
 * 
 */
export type WarrantyClaim = $Result.DefaultSelection<Prisma.$WarrantyClaimPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model ProductPrice
 * 
 */
export type ProductPrice = $Result.DefaultSelection<Prisma.$ProductPricePayload>
/**
 * Model InventoryMovement
 * 
 */
export type InventoryMovement = $Result.DefaultSelection<Prisma.$InventoryMovementPayload>
/**
 * Model InventoryAdjustment
 * 
 */
export type InventoryAdjustment = $Result.DefaultSelection<Prisma.$InventoryAdjustmentPayload>
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
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs>;

  /**
   * `prisma.inventoryUpgrade`: Exposes CRUD operations for the **InventoryUpgrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryUpgrades
    * const inventoryUpgrades = await prisma.inventoryUpgrade.findMany()
    * ```
    */
  get inventoryUpgrade(): Prisma.InventoryUpgradeDelegate<ExtArgs>;

  /**
   * `prisma.inventoryTransfer`: Exposes CRUD operations for the **InventoryTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransfers
    * const inventoryTransfers = await prisma.inventoryTransfer.findMany()
    * ```
    */
  get inventoryTransfer(): Prisma.InventoryTransferDelegate<ExtArgs>;

  /**
   * `prisma.warrantyClaim`: Exposes CRUD operations for the **WarrantyClaim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarrantyClaims
    * const warrantyClaims = await prisma.warrantyClaim.findMany()
    * ```
    */
  get warrantyClaim(): Prisma.WarrantyClaimDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs>;

  /**
   * `prisma.productPrice`: Exposes CRUD operations for the **ProductPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPrices
    * const productPrices = await prisma.productPrice.findMany()
    * ```
    */
  get productPrice(): Prisma.ProductPriceDelegate<ExtArgs>;

  /**
   * `prisma.inventoryMovement`: Exposes CRUD operations for the **InventoryMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryMovements
    * const inventoryMovements = await prisma.inventoryMovement.findMany()
    * ```
    */
  get inventoryMovement(): Prisma.InventoryMovementDelegate<ExtArgs>;

  /**
   * `prisma.inventoryAdjustment`: Exposes CRUD operations for the **InventoryAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryAdjustments
    * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany()
    * ```
    */
  get inventoryAdjustment(): Prisma.InventoryAdjustmentDelegate<ExtArgs>;

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
    Product: 'Product',
    InventoryItem: 'InventoryItem',
    InventoryUpgrade: 'InventoryUpgrade',
    InventoryTransfer: 'InventoryTransfer',
    WarrantyClaim: 'WarrantyClaim',
    Category: 'Category',
    Brand: 'Brand',
    ProductPrice: 'ProductPrice',
    InventoryMovement: 'InventoryMovement',
    InventoryAdjustment: 'InventoryAdjustment',
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
      modelProps: "product" | "inventoryItem" | "inventoryUpgrade" | "inventoryTransfer" | "warrantyClaim" | "category" | "brand" | "productPrice" | "inventoryMovement" | "inventoryAdjustment" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      InventoryUpgrade: {
        payload: Prisma.$InventoryUpgradePayload<ExtArgs>
        fields: Prisma.InventoryUpgradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryUpgradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryUpgradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>
          }
          findFirst: {
            args: Prisma.InventoryUpgradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryUpgradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>
          }
          findMany: {
            args: Prisma.InventoryUpgradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>[]
          }
          create: {
            args: Prisma.InventoryUpgradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>
          }
          createMany: {
            args: Prisma.InventoryUpgradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryUpgradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>[]
          }
          delete: {
            args: Prisma.InventoryUpgradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>
          }
          update: {
            args: Prisma.InventoryUpgradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>
          }
          deleteMany: {
            args: Prisma.InventoryUpgradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpgradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpgradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryUpgradePayload>
          }
          aggregate: {
            args: Prisma.InventoryUpgradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryUpgrade>
          }
          groupBy: {
            args: Prisma.InventoryUpgradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryUpgradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryUpgradeCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryUpgradeCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransfer: {
        payload: Prisma.$InventoryTransferPayload<ExtArgs>
        fields: Prisma.InventoryTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>
          }
          findMany: {
            args: Prisma.InventoryTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>[]
          }
          create: {
            args: Prisma.InventoryTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>
          }
          createMany: {
            args: Prisma.InventoryTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>[]
          }
          delete: {
            args: Prisma.InventoryTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>
          }
          update: {
            args: Prisma.InventoryTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransferPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTransfer>
          }
          groupBy: {
            args: Prisma.InventoryTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransferCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransferCountAggregateOutputType> | number
          }
        }
      }
      WarrantyClaim: {
        payload: Prisma.$WarrantyClaimPayload<ExtArgs>
        fields: Prisma.WarrantyClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarrantyClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarrantyClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>
          }
          findFirst: {
            args: Prisma.WarrantyClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarrantyClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>
          }
          findMany: {
            args: Prisma.WarrantyClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>[]
          }
          create: {
            args: Prisma.WarrantyClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>
          }
          createMany: {
            args: Prisma.WarrantyClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarrantyClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>[]
          }
          delete: {
            args: Prisma.WarrantyClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>
          }
          update: {
            args: Prisma.WarrantyClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>
          }
          deleteMany: {
            args: Prisma.WarrantyClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarrantyClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarrantyClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyClaimPayload>
          }
          aggregate: {
            args: Prisma.WarrantyClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarrantyClaim>
          }
          groupBy: {
            args: Prisma.WarrantyClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarrantyClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarrantyClaimCountArgs<ExtArgs>
            result: $Utils.Optional<WarrantyClaimCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      ProductPrice: {
        payload: Prisma.$ProductPricePayload<ExtArgs>
        fields: Prisma.ProductPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findFirst: {
            args: Prisma.ProductPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          findMany: {
            args: Prisma.ProductPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          create: {
            args: Prisma.ProductPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          createMany: {
            args: Prisma.ProductPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>[]
          }
          delete: {
            args: Prisma.ProductPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          update: {
            args: Prisma.ProductPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricePayload>
          }
          aggregate: {
            args: Prisma.ProductPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPrice>
          }
          groupBy: {
            args: Prisma.ProductPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceCountAggregateOutputType> | number
          }
        }
      }
      InventoryMovement: {
        payload: Prisma.$InventoryMovementPayload<ExtArgs>
        fields: Prisma.InventoryMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findFirst: {
            args: Prisma.InventoryMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findMany: {
            args: Prisma.InventoryMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          create: {
            args: Prisma.InventoryMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          createMany: {
            args: Prisma.InventoryMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          delete: {
            args: Prisma.InventoryMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          update: {
            args: Prisma.InventoryMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          deleteMany: {
            args: Prisma.InventoryMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          aggregate: {
            args: Prisma.InventoryMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryMovement>
          }
          groupBy: {
            args: Prisma.InventoryMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryMovementCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementCountAggregateOutputType> | number
          }
        }
      }
      InventoryAdjustment: {
        payload: Prisma.$InventoryAdjustmentPayload<ExtArgs>
        fields: Prisma.InventoryAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.InventoryAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          findMany: {
            args: Prisma.InventoryAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          create: {
            args: Prisma.InventoryAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          createMany: {
            args: Prisma.InventoryAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          delete: {
            args: Prisma.InventoryAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          update: {
            args: Prisma.InventoryAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.InventoryAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.InventoryAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryAdjustment>
          }
          groupBy: {
            args: Prisma.InventoryAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryAdjustmentCountAggregateOutputType> | number
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    items: number
    prices: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProductCountOutputTypeCountItemsArgs
    prices?: boolean | ProductCountOutputTypeCountPricesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
  }


  /**
   * Count Type InventoryItemCountOutputType
   */

  export type InventoryItemCountOutputType = {
    upgrades: number
  }

  export type InventoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upgrades?: boolean | InventoryItemCountOutputTypeCountUpgradesArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemCountOutputType
     */
    select?: InventoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountUpgradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryUpgradeWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    version: number | null
  }

  export type ProductSumAggregateOutputType = {
    version: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    sku: string | null
    name: string | null
    description: string | null
    brandId: string | null
    categoryId: string | null
    productType: string | null
    trackingMethod: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    sku: string | null
    name: string | null
    description: string | null
    brandId: string | null
    categoryId: string | null
    productType: string | null
    trackingMethod: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    sharedShopIds: number
    sku: number
    name: number
    description: number
    brandId: number
    categoryId: number
    productType: number
    trackingMethod: number
    status: number
    specifications: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    version: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    version?: true
  }

  export type ProductSumAggregateInputType = {
    version?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    sku?: true
    name?: true
    description?: true
    brandId?: true
    categoryId?: true
    productType?: true
    trackingMethod?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    sku?: true
    name?: true
    description?: true
    brandId?: true
    categoryId?: true
    productType?: true
    trackingMethod?: true
    status?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    sharedShopIds?: true
    sku?: true
    name?: true
    description?: true
    brandId?: true
    categoryId?: true
    productType?: true
    trackingMethod?: true
    status?: true
    specifications?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string | null
    sharedShopIds: string[]
    sku: string
    name: string
    description: string | null
    brandId: string | null
    categoryId: string | null
    productType: string
    trackingMethod: string
    status: string
    specifications: JsonValue | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    sku?: boolean
    name?: boolean
    description?: boolean
    brandId?: boolean
    categoryId?: boolean
    productType?: boolean
    trackingMethod?: boolean
    status?: boolean
    specifications?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    brand?: boolean | Product$brandArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    items?: boolean | Product$itemsArgs<ExtArgs>
    prices?: boolean | Product$pricesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    sku?: boolean
    name?: boolean
    description?: boolean
    brandId?: boolean
    categoryId?: boolean
    productType?: boolean
    trackingMethod?: boolean
    status?: boolean
    specifications?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    brand?: boolean | Product$brandArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    sku?: boolean
    name?: boolean
    description?: boolean
    brandId?: boolean
    categoryId?: boolean
    productType?: boolean
    trackingMethod?: boolean
    status?: boolean
    specifications?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | Product$brandArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    items?: boolean | Product$itemsArgs<ExtArgs>
    prices?: boolean | Product$pricesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | Product$brandArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
      items: Prisma.$InventoryItemPayload<ExtArgs>[]
      prices: Prisma.$ProductPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string | null
      sharedShopIds: string[]
      sku: string
      name: string
      description: string | null
      brandId: string | null
      categoryId: string | null
      productType: string
      trackingMethod: string
      status: string
      specifications: Prisma.JsonValue | null
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
      version: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends Product$brandArgs<ExtArgs> = {}>(args?: Subset<T, Product$brandArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends Product$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany"> | Null>
    prices<T extends Product$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Product$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly tenantId: FieldRef<"Product", 'String'>
    readonly shopId: FieldRef<"Product", 'String'>
    readonly sharedShopIds: FieldRef<"Product", 'String[]'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly brandId: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly productType: FieldRef<"Product", 'String'>
    readonly trackingMethod: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly specifications: FieldRef<"Product", 'Json'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly createdBy: FieldRef<"Product", 'String'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly updatedBy: FieldRef<"Product", 'String'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
    readonly deletedBy: FieldRef<"Product", 'String'>
    readonly version: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.brand
   */
  export type Product$brandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.items
   */
  export type Product$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Product.prices
   */
  export type Product$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    cursor?: ProductPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    purchaseCost: number | null
    capitalizedCost: number | null
    version: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    purchaseCost: number | null
    capitalizedCost: number | null
    version: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    productId: string | null
    serialNumber: string | null
    purchaseCost: number | null
    status: string | null
    capitalizedCost: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    productId: string | null
    serialNumber: string | null
    purchaseCost: number | null
    status: string | null
    capitalizedCost: number | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    productId: number
    serialNumber: number
    purchaseCost: number
    status: number
    capitalizedCost: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    version: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    purchaseCost?: true
    capitalizedCost?: true
    version?: true
  }

  export type InventoryItemSumAggregateInputType = {
    purchaseCost?: true
    capitalizedCost?: true
    version?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    productId?: true
    serialNumber?: true
    purchaseCost?: true
    status?: true
    capitalizedCost?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    productId?: true
    serialNumber?: true
    purchaseCost?: true
    status?: true
    capitalizedCost?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    productId?: true
    serialNumber?: true
    purchaseCost?: true
    status?: true
    capitalizedCost?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    version?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    productId: string
    serialNumber: string
    purchaseCost: number
    status: string
    capitalizedCost: number
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    version: number
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    productId?: boolean
    serialNumber?: boolean
    purchaseCost?: boolean
    status?: boolean
    capitalizedCost?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    upgrades?: boolean | InventoryItem$upgradesArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    productId?: boolean
    serialNumber?: boolean
    purchaseCost?: boolean
    status?: boolean
    capitalizedCost?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    productId?: boolean
    serialNumber?: boolean
    purchaseCost?: boolean
    status?: boolean
    capitalizedCost?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    version?: boolean
  }

  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    upgrades?: boolean | InventoryItem$upgradesArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      upgrades: Prisma.$InventoryUpgradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      productId: string
      serialNumber: string
      purchaseCost: number
      status: string
      capitalizedCost: number
      createdAt: Date
      createdBy: string | null
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
      version: number
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
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
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    upgrades<T extends InventoryItem$upgradesArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$upgradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the InventoryItem model
   */ 
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly tenantId: FieldRef<"InventoryItem", 'String'>
    readonly shopId: FieldRef<"InventoryItem", 'String'>
    readonly productId: FieldRef<"InventoryItem", 'String'>
    readonly serialNumber: FieldRef<"InventoryItem", 'String'>
    readonly purchaseCost: FieldRef<"InventoryItem", 'Float'>
    readonly status: FieldRef<"InventoryItem", 'String'>
    readonly capitalizedCost: FieldRef<"InventoryItem", 'Float'>
    readonly createdAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly createdBy: FieldRef<"InventoryItem", 'String'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly updatedBy: FieldRef<"InventoryItem", 'String'>
    readonly deletedAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly deletedBy: FieldRef<"InventoryItem", 'String'>
    readonly version: FieldRef<"InventoryItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem.upgrades
   */
  export type InventoryItem$upgradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    where?: InventoryUpgradeWhereInput
    orderBy?: InventoryUpgradeOrderByWithRelationInput | InventoryUpgradeOrderByWithRelationInput[]
    cursor?: InventoryUpgradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryUpgradeScalarFieldEnum | InventoryUpgradeScalarFieldEnum[]
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model InventoryUpgrade
   */

  export type AggregateInventoryUpgrade = {
    _count: InventoryUpgradeCountAggregateOutputType | null
    _avg: InventoryUpgradeAvgAggregateOutputType | null
    _sum: InventoryUpgradeSumAggregateOutputType | null
    _min: InventoryUpgradeMinAggregateOutputType | null
    _max: InventoryUpgradeMaxAggregateOutputType | null
  }

  export type InventoryUpgradeAvgAggregateOutputType = {
    cost: number | null
  }

  export type InventoryUpgradeSumAggregateOutputType = {
    cost: number | null
  }

  export type InventoryUpgradeMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    inventoryItemId: string | null
    upgradeType: string | null
    description: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type InventoryUpgradeMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    inventoryItemId: string | null
    upgradeType: string | null
    description: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type InventoryUpgradeCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    inventoryItemId: number
    upgradeType: number
    description: number
    cost: number
    createdAt: number
    _all: number
  }


  export type InventoryUpgradeAvgAggregateInputType = {
    cost?: true
  }

  export type InventoryUpgradeSumAggregateInputType = {
    cost?: true
  }

  export type InventoryUpgradeMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    upgradeType?: true
    description?: true
    cost?: true
    createdAt?: true
  }

  export type InventoryUpgradeMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    upgradeType?: true
    description?: true
    cost?: true
    createdAt?: true
  }

  export type InventoryUpgradeCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    upgradeType?: true
    description?: true
    cost?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryUpgradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryUpgrade to aggregate.
     */
    where?: InventoryUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryUpgrades to fetch.
     */
    orderBy?: InventoryUpgradeOrderByWithRelationInput | InventoryUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryUpgrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryUpgrades
    **/
    _count?: true | InventoryUpgradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryUpgradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryUpgradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryUpgradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryUpgradeMaxAggregateInputType
  }

  export type GetInventoryUpgradeAggregateType<T extends InventoryUpgradeAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryUpgrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryUpgrade[P]>
      : GetScalarType<T[P], AggregateInventoryUpgrade[P]>
  }




  export type InventoryUpgradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryUpgradeWhereInput
    orderBy?: InventoryUpgradeOrderByWithAggregationInput | InventoryUpgradeOrderByWithAggregationInput[]
    by: InventoryUpgradeScalarFieldEnum[] | InventoryUpgradeScalarFieldEnum
    having?: InventoryUpgradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryUpgradeCountAggregateInputType | true
    _avg?: InventoryUpgradeAvgAggregateInputType
    _sum?: InventoryUpgradeSumAggregateInputType
    _min?: InventoryUpgradeMinAggregateInputType
    _max?: InventoryUpgradeMaxAggregateInputType
  }

  export type InventoryUpgradeGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    upgradeType: string
    description: string | null
    cost: number
    createdAt: Date
    _count: InventoryUpgradeCountAggregateOutputType | null
    _avg: InventoryUpgradeAvgAggregateOutputType | null
    _sum: InventoryUpgradeSumAggregateOutputType | null
    _min: InventoryUpgradeMinAggregateOutputType | null
    _max: InventoryUpgradeMaxAggregateOutputType | null
  }

  type GetInventoryUpgradeGroupByPayload<T extends InventoryUpgradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryUpgradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryUpgradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryUpgradeGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryUpgradeGroupByOutputType[P]>
        }
      >
    >


  export type InventoryUpgradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    upgradeType?: boolean
    description?: boolean
    cost?: boolean
    createdAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryUpgrade"]>

  export type InventoryUpgradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    upgradeType?: boolean
    description?: boolean
    cost?: boolean
    createdAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryUpgrade"]>

  export type InventoryUpgradeSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    upgradeType?: boolean
    description?: boolean
    cost?: boolean
    createdAt?: boolean
  }

  export type InventoryUpgradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }
  export type InventoryUpgradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }

  export type $InventoryUpgradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryUpgrade"
    objects: {
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      inventoryItemId: string
      upgradeType: string
      description: string | null
      cost: number
      createdAt: Date
    }, ExtArgs["result"]["inventoryUpgrade"]>
    composites: {}
  }

  type InventoryUpgradeGetPayload<S extends boolean | null | undefined | InventoryUpgradeDefaultArgs> = $Result.GetResult<Prisma.$InventoryUpgradePayload, S>

  type InventoryUpgradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryUpgradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryUpgradeCountAggregateInputType | true
    }

  export interface InventoryUpgradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryUpgrade'], meta: { name: 'InventoryUpgrade' } }
    /**
     * Find zero or one InventoryUpgrade that matches the filter.
     * @param {InventoryUpgradeFindUniqueArgs} args - Arguments to find a InventoryUpgrade
     * @example
     * // Get one InventoryUpgrade
     * const inventoryUpgrade = await prisma.inventoryUpgrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryUpgradeFindUniqueArgs>(args: SelectSubset<T, InventoryUpgradeFindUniqueArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryUpgrade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryUpgradeFindUniqueOrThrowArgs} args - Arguments to find a InventoryUpgrade
     * @example
     * // Get one InventoryUpgrade
     * const inventoryUpgrade = await prisma.inventoryUpgrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryUpgradeFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryUpgradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryUpgrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeFindFirstArgs} args - Arguments to find a InventoryUpgrade
     * @example
     * // Get one InventoryUpgrade
     * const inventoryUpgrade = await prisma.inventoryUpgrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryUpgradeFindFirstArgs>(args?: SelectSubset<T, InventoryUpgradeFindFirstArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryUpgrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeFindFirstOrThrowArgs} args - Arguments to find a InventoryUpgrade
     * @example
     * // Get one InventoryUpgrade
     * const inventoryUpgrade = await prisma.inventoryUpgrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryUpgradeFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryUpgradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryUpgrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryUpgrades
     * const inventoryUpgrades = await prisma.inventoryUpgrade.findMany()
     * 
     * // Get first 10 InventoryUpgrades
     * const inventoryUpgrades = await prisma.inventoryUpgrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryUpgradeWithIdOnly = await prisma.inventoryUpgrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryUpgradeFindManyArgs>(args?: SelectSubset<T, InventoryUpgradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryUpgrade.
     * @param {InventoryUpgradeCreateArgs} args - Arguments to create a InventoryUpgrade.
     * @example
     * // Create one InventoryUpgrade
     * const InventoryUpgrade = await prisma.inventoryUpgrade.create({
     *   data: {
     *     // ... data to create a InventoryUpgrade
     *   }
     * })
     * 
     */
    create<T extends InventoryUpgradeCreateArgs>(args: SelectSubset<T, InventoryUpgradeCreateArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryUpgrades.
     * @param {InventoryUpgradeCreateManyArgs} args - Arguments to create many InventoryUpgrades.
     * @example
     * // Create many InventoryUpgrades
     * const inventoryUpgrade = await prisma.inventoryUpgrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryUpgradeCreateManyArgs>(args?: SelectSubset<T, InventoryUpgradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryUpgrades and returns the data saved in the database.
     * @param {InventoryUpgradeCreateManyAndReturnArgs} args - Arguments to create many InventoryUpgrades.
     * @example
     * // Create many InventoryUpgrades
     * const inventoryUpgrade = await prisma.inventoryUpgrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryUpgrades and only return the `id`
     * const inventoryUpgradeWithIdOnly = await prisma.inventoryUpgrade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryUpgradeCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryUpgradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryUpgrade.
     * @param {InventoryUpgradeDeleteArgs} args - Arguments to delete one InventoryUpgrade.
     * @example
     * // Delete one InventoryUpgrade
     * const InventoryUpgrade = await prisma.inventoryUpgrade.delete({
     *   where: {
     *     // ... filter to delete one InventoryUpgrade
     *   }
     * })
     * 
     */
    delete<T extends InventoryUpgradeDeleteArgs>(args: SelectSubset<T, InventoryUpgradeDeleteArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryUpgrade.
     * @param {InventoryUpgradeUpdateArgs} args - Arguments to update one InventoryUpgrade.
     * @example
     * // Update one InventoryUpgrade
     * const inventoryUpgrade = await prisma.inventoryUpgrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpgradeUpdateArgs>(args: SelectSubset<T, InventoryUpgradeUpdateArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryUpgrades.
     * @param {InventoryUpgradeDeleteManyArgs} args - Arguments to filter InventoryUpgrades to delete.
     * @example
     * // Delete a few InventoryUpgrades
     * const { count } = await prisma.inventoryUpgrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryUpgradeDeleteManyArgs>(args?: SelectSubset<T, InventoryUpgradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryUpgrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryUpgrades
     * const inventoryUpgrade = await prisma.inventoryUpgrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpgradeUpdateManyArgs>(args: SelectSubset<T, InventoryUpgradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryUpgrade.
     * @param {InventoryUpgradeUpsertArgs} args - Arguments to update or create a InventoryUpgrade.
     * @example
     * // Update or create a InventoryUpgrade
     * const inventoryUpgrade = await prisma.inventoryUpgrade.upsert({
     *   create: {
     *     // ... data to create a InventoryUpgrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryUpgrade we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpgradeUpsertArgs>(args: SelectSubset<T, InventoryUpgradeUpsertArgs<ExtArgs>>): Prisma__InventoryUpgradeClient<$Result.GetResult<Prisma.$InventoryUpgradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryUpgrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeCountArgs} args - Arguments to filter InventoryUpgrades to count.
     * @example
     * // Count the number of InventoryUpgrades
     * const count = await prisma.inventoryUpgrade.count({
     *   where: {
     *     // ... the filter for the InventoryUpgrades we want to count
     *   }
     * })
    **/
    count<T extends InventoryUpgradeCountArgs>(
      args?: Subset<T, InventoryUpgradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryUpgradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryUpgrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryUpgradeAggregateArgs>(args: Subset<T, InventoryUpgradeAggregateArgs>): Prisma.PrismaPromise<GetInventoryUpgradeAggregateType<T>>

    /**
     * Group by InventoryUpgrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpgradeGroupByArgs} args - Group by arguments.
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
      T extends InventoryUpgradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryUpgradeGroupByArgs['orderBy'] }
        : { orderBy?: InventoryUpgradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryUpgradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryUpgradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryUpgrade model
   */
  readonly fields: InventoryUpgradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryUpgrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryUpgradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItem<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the InventoryUpgrade model
   */ 
  interface InventoryUpgradeFieldRefs {
    readonly id: FieldRef<"InventoryUpgrade", 'String'>
    readonly tenantId: FieldRef<"InventoryUpgrade", 'String'>
    readonly shopId: FieldRef<"InventoryUpgrade", 'String'>
    readonly inventoryItemId: FieldRef<"InventoryUpgrade", 'String'>
    readonly upgradeType: FieldRef<"InventoryUpgrade", 'String'>
    readonly description: FieldRef<"InventoryUpgrade", 'String'>
    readonly cost: FieldRef<"InventoryUpgrade", 'Float'>
    readonly createdAt: FieldRef<"InventoryUpgrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryUpgrade findUnique
   */
  export type InventoryUpgradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * Filter, which InventoryUpgrade to fetch.
     */
    where: InventoryUpgradeWhereUniqueInput
  }

  /**
   * InventoryUpgrade findUniqueOrThrow
   */
  export type InventoryUpgradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * Filter, which InventoryUpgrade to fetch.
     */
    where: InventoryUpgradeWhereUniqueInput
  }

  /**
   * InventoryUpgrade findFirst
   */
  export type InventoryUpgradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * Filter, which InventoryUpgrade to fetch.
     */
    where?: InventoryUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryUpgrades to fetch.
     */
    orderBy?: InventoryUpgradeOrderByWithRelationInput | InventoryUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryUpgrades.
     */
    cursor?: InventoryUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryUpgrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryUpgrades.
     */
    distinct?: InventoryUpgradeScalarFieldEnum | InventoryUpgradeScalarFieldEnum[]
  }

  /**
   * InventoryUpgrade findFirstOrThrow
   */
  export type InventoryUpgradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * Filter, which InventoryUpgrade to fetch.
     */
    where?: InventoryUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryUpgrades to fetch.
     */
    orderBy?: InventoryUpgradeOrderByWithRelationInput | InventoryUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryUpgrades.
     */
    cursor?: InventoryUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryUpgrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryUpgrades.
     */
    distinct?: InventoryUpgradeScalarFieldEnum | InventoryUpgradeScalarFieldEnum[]
  }

  /**
   * InventoryUpgrade findMany
   */
  export type InventoryUpgradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * Filter, which InventoryUpgrades to fetch.
     */
    where?: InventoryUpgradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryUpgrades to fetch.
     */
    orderBy?: InventoryUpgradeOrderByWithRelationInput | InventoryUpgradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryUpgrades.
     */
    cursor?: InventoryUpgradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryUpgrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryUpgrades.
     */
    skip?: number
    distinct?: InventoryUpgradeScalarFieldEnum | InventoryUpgradeScalarFieldEnum[]
  }

  /**
   * InventoryUpgrade create
   */
  export type InventoryUpgradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryUpgrade.
     */
    data: XOR<InventoryUpgradeCreateInput, InventoryUpgradeUncheckedCreateInput>
  }

  /**
   * InventoryUpgrade createMany
   */
  export type InventoryUpgradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryUpgrades.
     */
    data: InventoryUpgradeCreateManyInput | InventoryUpgradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryUpgrade createManyAndReturn
   */
  export type InventoryUpgradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryUpgrades.
     */
    data: InventoryUpgradeCreateManyInput | InventoryUpgradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryUpgrade update
   */
  export type InventoryUpgradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryUpgrade.
     */
    data: XOR<InventoryUpgradeUpdateInput, InventoryUpgradeUncheckedUpdateInput>
    /**
     * Choose, which InventoryUpgrade to update.
     */
    where: InventoryUpgradeWhereUniqueInput
  }

  /**
   * InventoryUpgrade updateMany
   */
  export type InventoryUpgradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryUpgrades.
     */
    data: XOR<InventoryUpgradeUpdateManyMutationInput, InventoryUpgradeUncheckedUpdateManyInput>
    /**
     * Filter which InventoryUpgrades to update
     */
    where?: InventoryUpgradeWhereInput
  }

  /**
   * InventoryUpgrade upsert
   */
  export type InventoryUpgradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryUpgrade to update in case it exists.
     */
    where: InventoryUpgradeWhereUniqueInput
    /**
     * In case the InventoryUpgrade found by the `where` argument doesn't exist, create a new InventoryUpgrade with this data.
     */
    create: XOR<InventoryUpgradeCreateInput, InventoryUpgradeUncheckedCreateInput>
    /**
     * In case the InventoryUpgrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpgradeUpdateInput, InventoryUpgradeUncheckedUpdateInput>
  }

  /**
   * InventoryUpgrade delete
   */
  export type InventoryUpgradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
    /**
     * Filter which InventoryUpgrade to delete.
     */
    where: InventoryUpgradeWhereUniqueInput
  }

  /**
   * InventoryUpgrade deleteMany
   */
  export type InventoryUpgradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryUpgrades to delete
     */
    where?: InventoryUpgradeWhereInput
  }

  /**
   * InventoryUpgrade without action
   */
  export type InventoryUpgradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryUpgrade
     */
    select?: InventoryUpgradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryUpgradeInclude<ExtArgs> | null
  }


  /**
   * Model InventoryTransfer
   */

  export type AggregateInventoryTransfer = {
    _count: InventoryTransferCountAggregateOutputType | null
    _min: InventoryTransferMinAggregateOutputType | null
    _max: InventoryTransferMaxAggregateOutputType | null
  }

  export type InventoryTransferMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    fromShopId: string | null
    toShopId: string | null
    transferNumber: string | null
    serialNumber: string | null
    status: string | null
    notes: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryTransferMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    fromShopId: string | null
    toShopId: string | null
    transferNumber: string | null
    serialNumber: string | null
    status: string | null
    notes: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryTransferCountAggregateOutputType = {
    id: number
    tenantId: number
    fromShopId: number
    toShopId: number
    transferNumber: number
    serialNumber: number
    status: number
    notes: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryTransferMinAggregateInputType = {
    id?: true
    tenantId?: true
    fromShopId?: true
    toShopId?: true
    transferNumber?: true
    serialNumber?: true
    status?: true
    notes?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryTransferMaxAggregateInputType = {
    id?: true
    tenantId?: true
    fromShopId?: true
    toShopId?: true
    transferNumber?: true
    serialNumber?: true
    status?: true
    notes?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryTransferCountAggregateInputType = {
    id?: true
    tenantId?: true
    fromShopId?: true
    toShopId?: true
    transferNumber?: true
    serialNumber?: true
    status?: true
    notes?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransfer to aggregate.
     */
    where?: InventoryTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransfers to fetch.
     */
    orderBy?: InventoryTransferOrderByWithRelationInput | InventoryTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTransfers
    **/
    _count?: true | InventoryTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransferMaxAggregateInputType
  }

  export type GetInventoryTransferAggregateType<T extends InventoryTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransfer[P]>
      : GetScalarType<T[P], AggregateInventoryTransfer[P]>
  }




  export type InventoryTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransferWhereInput
    orderBy?: InventoryTransferOrderByWithAggregationInput | InventoryTransferOrderByWithAggregationInput[]
    by: InventoryTransferScalarFieldEnum[] | InventoryTransferScalarFieldEnum
    having?: InventoryTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransferCountAggregateInputType | true
    _min?: InventoryTransferMinAggregateInputType
    _max?: InventoryTransferMaxAggregateInputType
  }

  export type InventoryTransferGroupByOutputType = {
    id: string
    tenantId: string
    fromShopId: string
    toShopId: string
    transferNumber: string
    serialNumber: string
    status: string
    notes: string | null
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryTransferCountAggregateOutputType | null
    _min: InventoryTransferMinAggregateOutputType | null
    _max: InventoryTransferMaxAggregateOutputType | null
  }

  type GetInventoryTransferGroupByPayload<T extends InventoryTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransferGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransferGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fromShopId?: boolean
    toShopId?: boolean
    transferNumber?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventoryTransfer"]>

  export type InventoryTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fromShopId?: boolean
    toShopId?: boolean
    transferNumber?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventoryTransfer"]>

  export type InventoryTransferSelectScalar = {
    id?: boolean
    tenantId?: boolean
    fromShopId?: boolean
    toShopId?: boolean
    transferNumber?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InventoryTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTransfer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      fromShopId: string
      toShopId: string
      transferNumber: string
      serialNumber: string
      status: string
      notes: string | null
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryTransfer"]>
    composites: {}
  }

  type InventoryTransferGetPayload<S extends boolean | null | undefined | InventoryTransferDefaultArgs> = $Result.GetResult<Prisma.$InventoryTransferPayload, S>

  type InventoryTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryTransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryTransferCountAggregateInputType | true
    }

  export interface InventoryTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransfer'], meta: { name: 'InventoryTransfer' } }
    /**
     * Find zero or one InventoryTransfer that matches the filter.
     * @param {InventoryTransferFindUniqueArgs} args - Arguments to find a InventoryTransfer
     * @example
     * // Get one InventoryTransfer
     * const inventoryTransfer = await prisma.inventoryTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTransferFindUniqueArgs>(args: SelectSubset<T, InventoryTransferFindUniqueArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryTransfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryTransferFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransfer
     * @example
     * // Get one InventoryTransfer
     * const inventoryTransfer = await prisma.inventoryTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferFindFirstArgs} args - Arguments to find a InventoryTransfer
     * @example
     * // Get one InventoryTransfer
     * const inventoryTransfer = await prisma.inventoryTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTransferFindFirstArgs>(args?: SelectSubset<T, InventoryTransferFindFirstArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferFindFirstOrThrowArgs} args - Arguments to find a InventoryTransfer
     * @example
     * // Get one InventoryTransfer
     * const inventoryTransfer = await prisma.inventoryTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransfers
     * const inventoryTransfers = await prisma.inventoryTransfer.findMany()
     * 
     * // Get first 10 InventoryTransfers
     * const inventoryTransfers = await prisma.inventoryTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryTransferWithIdOnly = await prisma.inventoryTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryTransferFindManyArgs>(args?: SelectSubset<T, InventoryTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryTransfer.
     * @param {InventoryTransferCreateArgs} args - Arguments to create a InventoryTransfer.
     * @example
     * // Create one InventoryTransfer
     * const InventoryTransfer = await prisma.inventoryTransfer.create({
     *   data: {
     *     // ... data to create a InventoryTransfer
     *   }
     * })
     * 
     */
    create<T extends InventoryTransferCreateArgs>(args: SelectSubset<T, InventoryTransferCreateArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryTransfers.
     * @param {InventoryTransferCreateManyArgs} args - Arguments to create many InventoryTransfers.
     * @example
     * // Create many InventoryTransfers
     * const inventoryTransfer = await prisma.inventoryTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTransferCreateManyArgs>(args?: SelectSubset<T, InventoryTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryTransfers and returns the data saved in the database.
     * @param {InventoryTransferCreateManyAndReturnArgs} args - Arguments to create many InventoryTransfers.
     * @example
     * // Create many InventoryTransfers
     * const inventoryTransfer = await prisma.inventoryTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryTransfers and only return the `id`
     * const inventoryTransferWithIdOnly = await prisma.inventoryTransfer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryTransfer.
     * @param {InventoryTransferDeleteArgs} args - Arguments to delete one InventoryTransfer.
     * @example
     * // Delete one InventoryTransfer
     * const InventoryTransfer = await prisma.inventoryTransfer.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransfer
     *   }
     * })
     * 
     */
    delete<T extends InventoryTransferDeleteArgs>(args: SelectSubset<T, InventoryTransferDeleteArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryTransfer.
     * @param {InventoryTransferUpdateArgs} args - Arguments to update one InventoryTransfer.
     * @example
     * // Update one InventoryTransfer
     * const inventoryTransfer = await prisma.inventoryTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTransferUpdateArgs>(args: SelectSubset<T, InventoryTransferUpdateArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryTransfers.
     * @param {InventoryTransferDeleteManyArgs} args - Arguments to filter InventoryTransfers to delete.
     * @example
     * // Delete a few InventoryTransfers
     * const { count } = await prisma.inventoryTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTransferDeleteManyArgs>(args?: SelectSubset<T, InventoryTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransfers
     * const inventoryTransfer = await prisma.inventoryTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTransferUpdateManyArgs>(args: SelectSubset<T, InventoryTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransfer.
     * @param {InventoryTransferUpsertArgs} args - Arguments to update or create a InventoryTransfer.
     * @example
     * // Update or create a InventoryTransfer
     * const inventoryTransfer = await prisma.inventoryTransfer.upsert({
     *   create: {
     *     // ... data to create a InventoryTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransfer we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTransferUpsertArgs>(args: SelectSubset<T, InventoryTransferUpsertArgs<ExtArgs>>): Prisma__InventoryTransferClient<$Result.GetResult<Prisma.$InventoryTransferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferCountArgs} args - Arguments to filter InventoryTransfers to count.
     * @example
     * // Count the number of InventoryTransfers
     * const count = await prisma.inventoryTransfer.count({
     *   where: {
     *     // ... the filter for the InventoryTransfers we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransferCountArgs>(
      args?: Subset<T, InventoryTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryTransferAggregateArgs>(args: Subset<T, InventoryTransferAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransferAggregateType<T>>

    /**
     * Group by InventoryTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransferGroupByArgs} args - Group by arguments.
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
      T extends InventoryTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransferGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTransfer model
   */
  readonly fields: InventoryTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InventoryTransfer model
   */ 
  interface InventoryTransferFieldRefs {
    readonly id: FieldRef<"InventoryTransfer", 'String'>
    readonly tenantId: FieldRef<"InventoryTransfer", 'String'>
    readonly fromShopId: FieldRef<"InventoryTransfer", 'String'>
    readonly toShopId: FieldRef<"InventoryTransfer", 'String'>
    readonly transferNumber: FieldRef<"InventoryTransfer", 'String'>
    readonly serialNumber: FieldRef<"InventoryTransfer", 'String'>
    readonly status: FieldRef<"InventoryTransfer", 'String'>
    readonly notes: FieldRef<"InventoryTransfer", 'String'>
    readonly createdById: FieldRef<"InventoryTransfer", 'String'>
    readonly createdAt: FieldRef<"InventoryTransfer", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTransfer findUnique
   */
  export type InventoryTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransfer to fetch.
     */
    where: InventoryTransferWhereUniqueInput
  }

  /**
   * InventoryTransfer findUniqueOrThrow
   */
  export type InventoryTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransfer to fetch.
     */
    where: InventoryTransferWhereUniqueInput
  }

  /**
   * InventoryTransfer findFirst
   */
  export type InventoryTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransfer to fetch.
     */
    where?: InventoryTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransfers to fetch.
     */
    orderBy?: InventoryTransferOrderByWithRelationInput | InventoryTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransfers.
     */
    cursor?: InventoryTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransfers.
     */
    distinct?: InventoryTransferScalarFieldEnum | InventoryTransferScalarFieldEnum[]
  }

  /**
   * InventoryTransfer findFirstOrThrow
   */
  export type InventoryTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransfer to fetch.
     */
    where?: InventoryTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransfers to fetch.
     */
    orderBy?: InventoryTransferOrderByWithRelationInput | InventoryTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransfers.
     */
    cursor?: InventoryTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransfers.
     */
    distinct?: InventoryTransferScalarFieldEnum | InventoryTransferScalarFieldEnum[]
  }

  /**
   * InventoryTransfer findMany
   */
  export type InventoryTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransfers to fetch.
     */
    where?: InventoryTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransfers to fetch.
     */
    orderBy?: InventoryTransferOrderByWithRelationInput | InventoryTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransfers.
     */
    cursor?: InventoryTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransfers.
     */
    skip?: number
    distinct?: InventoryTransferScalarFieldEnum | InventoryTransferScalarFieldEnum[]
  }

  /**
   * InventoryTransfer create
   */
  export type InventoryTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransfer.
     */
    data: XOR<InventoryTransferCreateInput, InventoryTransferUncheckedCreateInput>
  }

  /**
   * InventoryTransfer createMany
   */
  export type InventoryTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransfers.
     */
    data: InventoryTransferCreateManyInput | InventoryTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransfer createManyAndReturn
   */
  export type InventoryTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryTransfers.
     */
    data: InventoryTransferCreateManyInput | InventoryTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransfer update
   */
  export type InventoryTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransfer.
     */
    data: XOR<InventoryTransferUpdateInput, InventoryTransferUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransfer to update.
     */
    where: InventoryTransferWhereUniqueInput
  }

  /**
   * InventoryTransfer updateMany
   */
  export type InventoryTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransfers.
     */
    data: XOR<InventoryTransferUpdateManyMutationInput, InventoryTransferUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransfers to update
     */
    where?: InventoryTransferWhereInput
  }

  /**
   * InventoryTransfer upsert
   */
  export type InventoryTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransfer to update in case it exists.
     */
    where: InventoryTransferWhereUniqueInput
    /**
     * In case the InventoryTransfer found by the `where` argument doesn't exist, create a new InventoryTransfer with this data.
     */
    create: XOR<InventoryTransferCreateInput, InventoryTransferUncheckedCreateInput>
    /**
     * In case the InventoryTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransferUpdateInput, InventoryTransferUncheckedUpdateInput>
  }

  /**
   * InventoryTransfer delete
   */
  export type InventoryTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
    /**
     * Filter which InventoryTransfer to delete.
     */
    where: InventoryTransferWhereUniqueInput
  }

  /**
   * InventoryTransfer deleteMany
   */
  export type InventoryTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransfers to delete
     */
    where?: InventoryTransferWhereInput
  }

  /**
   * InventoryTransfer without action
   */
  export type InventoryTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransfer
     */
    select?: InventoryTransferSelect<ExtArgs> | null
  }


  /**
   * Model WarrantyClaim
   */

  export type AggregateWarrantyClaim = {
    _count: WarrantyClaimCountAggregateOutputType | null
    _min: WarrantyClaimMinAggregateOutputType | null
    _max: WarrantyClaimMaxAggregateOutputType | null
  }

  export type WarrantyClaimMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    serialNumber: string | null
    customerName: string | null
    issueDescription: string | null
    status: string | null
    resolution: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarrantyClaimMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    serialNumber: string | null
    customerName: string | null
    issueDescription: string | null
    status: string | null
    resolution: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarrantyClaimCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    serialNumber: number
    customerName: number
    issueDescription: number
    status: number
    resolution: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WarrantyClaimMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    serialNumber?: true
    customerName?: true
    issueDescription?: true
    status?: true
    resolution?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarrantyClaimMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    serialNumber?: true
    customerName?: true
    issueDescription?: true
    status?: true
    resolution?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarrantyClaimCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    serialNumber?: true
    customerName?: true
    issueDescription?: true
    status?: true
    resolution?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WarrantyClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarrantyClaim to aggregate.
     */
    where?: WarrantyClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarrantyClaims to fetch.
     */
    orderBy?: WarrantyClaimOrderByWithRelationInput | WarrantyClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarrantyClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarrantyClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarrantyClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarrantyClaims
    **/
    _count?: true | WarrantyClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarrantyClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarrantyClaimMaxAggregateInputType
  }

  export type GetWarrantyClaimAggregateType<T extends WarrantyClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateWarrantyClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarrantyClaim[P]>
      : GetScalarType<T[P], AggregateWarrantyClaim[P]>
  }




  export type WarrantyClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarrantyClaimWhereInput
    orderBy?: WarrantyClaimOrderByWithAggregationInput | WarrantyClaimOrderByWithAggregationInput[]
    by: WarrantyClaimScalarFieldEnum[] | WarrantyClaimScalarFieldEnum
    having?: WarrantyClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarrantyClaimCountAggregateInputType | true
    _min?: WarrantyClaimMinAggregateInputType
    _max?: WarrantyClaimMaxAggregateInputType
  }

  export type WarrantyClaimGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    serialNumber: string
    customerName: string | null
    issueDescription: string
    status: string
    resolution: string | null
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: WarrantyClaimCountAggregateOutputType | null
    _min: WarrantyClaimMinAggregateOutputType | null
    _max: WarrantyClaimMaxAggregateOutputType | null
  }

  type GetWarrantyClaimGroupByPayload<T extends WarrantyClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarrantyClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarrantyClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarrantyClaimGroupByOutputType[P]>
            : GetScalarType<T[P], WarrantyClaimGroupByOutputType[P]>
        }
      >
    >


  export type WarrantyClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    serialNumber?: boolean
    customerName?: boolean
    issueDescription?: boolean
    status?: boolean
    resolution?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warrantyClaim"]>

  export type WarrantyClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    serialNumber?: boolean
    customerName?: boolean
    issueDescription?: boolean
    status?: boolean
    resolution?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warrantyClaim"]>

  export type WarrantyClaimSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    serialNumber?: boolean
    customerName?: boolean
    issueDescription?: boolean
    status?: boolean
    resolution?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WarrantyClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarrantyClaim"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      serialNumber: string
      customerName: string | null
      issueDescription: string
      status: string
      resolution: string | null
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warrantyClaim"]>
    composites: {}
  }

  type WarrantyClaimGetPayload<S extends boolean | null | undefined | WarrantyClaimDefaultArgs> = $Result.GetResult<Prisma.$WarrantyClaimPayload, S>

  type WarrantyClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarrantyClaimFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarrantyClaimCountAggregateInputType | true
    }

  export interface WarrantyClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarrantyClaim'], meta: { name: 'WarrantyClaim' } }
    /**
     * Find zero or one WarrantyClaim that matches the filter.
     * @param {WarrantyClaimFindUniqueArgs} args - Arguments to find a WarrantyClaim
     * @example
     * // Get one WarrantyClaim
     * const warrantyClaim = await prisma.warrantyClaim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarrantyClaimFindUniqueArgs>(args: SelectSubset<T, WarrantyClaimFindUniqueArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WarrantyClaim that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarrantyClaimFindUniqueOrThrowArgs} args - Arguments to find a WarrantyClaim
     * @example
     * // Get one WarrantyClaim
     * const warrantyClaim = await prisma.warrantyClaim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarrantyClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, WarrantyClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WarrantyClaim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimFindFirstArgs} args - Arguments to find a WarrantyClaim
     * @example
     * // Get one WarrantyClaim
     * const warrantyClaim = await prisma.warrantyClaim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarrantyClaimFindFirstArgs>(args?: SelectSubset<T, WarrantyClaimFindFirstArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WarrantyClaim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimFindFirstOrThrowArgs} args - Arguments to find a WarrantyClaim
     * @example
     * // Get one WarrantyClaim
     * const warrantyClaim = await prisma.warrantyClaim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarrantyClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, WarrantyClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WarrantyClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarrantyClaims
     * const warrantyClaims = await prisma.warrantyClaim.findMany()
     * 
     * // Get first 10 WarrantyClaims
     * const warrantyClaims = await prisma.warrantyClaim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warrantyClaimWithIdOnly = await prisma.warrantyClaim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarrantyClaimFindManyArgs>(args?: SelectSubset<T, WarrantyClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WarrantyClaim.
     * @param {WarrantyClaimCreateArgs} args - Arguments to create a WarrantyClaim.
     * @example
     * // Create one WarrantyClaim
     * const WarrantyClaim = await prisma.warrantyClaim.create({
     *   data: {
     *     // ... data to create a WarrantyClaim
     *   }
     * })
     * 
     */
    create<T extends WarrantyClaimCreateArgs>(args: SelectSubset<T, WarrantyClaimCreateArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WarrantyClaims.
     * @param {WarrantyClaimCreateManyArgs} args - Arguments to create many WarrantyClaims.
     * @example
     * // Create many WarrantyClaims
     * const warrantyClaim = await prisma.warrantyClaim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarrantyClaimCreateManyArgs>(args?: SelectSubset<T, WarrantyClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarrantyClaims and returns the data saved in the database.
     * @param {WarrantyClaimCreateManyAndReturnArgs} args - Arguments to create many WarrantyClaims.
     * @example
     * // Create many WarrantyClaims
     * const warrantyClaim = await prisma.warrantyClaim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarrantyClaims and only return the `id`
     * const warrantyClaimWithIdOnly = await prisma.warrantyClaim.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarrantyClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, WarrantyClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WarrantyClaim.
     * @param {WarrantyClaimDeleteArgs} args - Arguments to delete one WarrantyClaim.
     * @example
     * // Delete one WarrantyClaim
     * const WarrantyClaim = await prisma.warrantyClaim.delete({
     *   where: {
     *     // ... filter to delete one WarrantyClaim
     *   }
     * })
     * 
     */
    delete<T extends WarrantyClaimDeleteArgs>(args: SelectSubset<T, WarrantyClaimDeleteArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WarrantyClaim.
     * @param {WarrantyClaimUpdateArgs} args - Arguments to update one WarrantyClaim.
     * @example
     * // Update one WarrantyClaim
     * const warrantyClaim = await prisma.warrantyClaim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarrantyClaimUpdateArgs>(args: SelectSubset<T, WarrantyClaimUpdateArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WarrantyClaims.
     * @param {WarrantyClaimDeleteManyArgs} args - Arguments to filter WarrantyClaims to delete.
     * @example
     * // Delete a few WarrantyClaims
     * const { count } = await prisma.warrantyClaim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarrantyClaimDeleteManyArgs>(args?: SelectSubset<T, WarrantyClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarrantyClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarrantyClaims
     * const warrantyClaim = await prisma.warrantyClaim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarrantyClaimUpdateManyArgs>(args: SelectSubset<T, WarrantyClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WarrantyClaim.
     * @param {WarrantyClaimUpsertArgs} args - Arguments to update or create a WarrantyClaim.
     * @example
     * // Update or create a WarrantyClaim
     * const warrantyClaim = await prisma.warrantyClaim.upsert({
     *   create: {
     *     // ... data to create a WarrantyClaim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarrantyClaim we want to update
     *   }
     * })
     */
    upsert<T extends WarrantyClaimUpsertArgs>(args: SelectSubset<T, WarrantyClaimUpsertArgs<ExtArgs>>): Prisma__WarrantyClaimClient<$Result.GetResult<Prisma.$WarrantyClaimPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WarrantyClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimCountArgs} args - Arguments to filter WarrantyClaims to count.
     * @example
     * // Count the number of WarrantyClaims
     * const count = await prisma.warrantyClaim.count({
     *   where: {
     *     // ... the filter for the WarrantyClaims we want to count
     *   }
     * })
    **/
    count<T extends WarrantyClaimCountArgs>(
      args?: Subset<T, WarrantyClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarrantyClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarrantyClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarrantyClaimAggregateArgs>(args: Subset<T, WarrantyClaimAggregateArgs>): Prisma.PrismaPromise<GetWarrantyClaimAggregateType<T>>

    /**
     * Group by WarrantyClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyClaimGroupByArgs} args - Group by arguments.
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
      T extends WarrantyClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarrantyClaimGroupByArgs['orderBy'] }
        : { orderBy?: WarrantyClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarrantyClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarrantyClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarrantyClaim model
   */
  readonly fields: WarrantyClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarrantyClaim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarrantyClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WarrantyClaim model
   */ 
  interface WarrantyClaimFieldRefs {
    readonly id: FieldRef<"WarrantyClaim", 'String'>
    readonly tenantId: FieldRef<"WarrantyClaim", 'String'>
    readonly shopId: FieldRef<"WarrantyClaim", 'String'>
    readonly serialNumber: FieldRef<"WarrantyClaim", 'String'>
    readonly customerName: FieldRef<"WarrantyClaim", 'String'>
    readonly issueDescription: FieldRef<"WarrantyClaim", 'String'>
    readonly status: FieldRef<"WarrantyClaim", 'String'>
    readonly resolution: FieldRef<"WarrantyClaim", 'String'>
    readonly createdById: FieldRef<"WarrantyClaim", 'String'>
    readonly createdAt: FieldRef<"WarrantyClaim", 'DateTime'>
    readonly updatedAt: FieldRef<"WarrantyClaim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WarrantyClaim findUnique
   */
  export type WarrantyClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * Filter, which WarrantyClaim to fetch.
     */
    where: WarrantyClaimWhereUniqueInput
  }

  /**
   * WarrantyClaim findUniqueOrThrow
   */
  export type WarrantyClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * Filter, which WarrantyClaim to fetch.
     */
    where: WarrantyClaimWhereUniqueInput
  }

  /**
   * WarrantyClaim findFirst
   */
  export type WarrantyClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * Filter, which WarrantyClaim to fetch.
     */
    where?: WarrantyClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarrantyClaims to fetch.
     */
    orderBy?: WarrantyClaimOrderByWithRelationInput | WarrantyClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarrantyClaims.
     */
    cursor?: WarrantyClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarrantyClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarrantyClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarrantyClaims.
     */
    distinct?: WarrantyClaimScalarFieldEnum | WarrantyClaimScalarFieldEnum[]
  }

  /**
   * WarrantyClaim findFirstOrThrow
   */
  export type WarrantyClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * Filter, which WarrantyClaim to fetch.
     */
    where?: WarrantyClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarrantyClaims to fetch.
     */
    orderBy?: WarrantyClaimOrderByWithRelationInput | WarrantyClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarrantyClaims.
     */
    cursor?: WarrantyClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarrantyClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarrantyClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarrantyClaims.
     */
    distinct?: WarrantyClaimScalarFieldEnum | WarrantyClaimScalarFieldEnum[]
  }

  /**
   * WarrantyClaim findMany
   */
  export type WarrantyClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * Filter, which WarrantyClaims to fetch.
     */
    where?: WarrantyClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarrantyClaims to fetch.
     */
    orderBy?: WarrantyClaimOrderByWithRelationInput | WarrantyClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarrantyClaims.
     */
    cursor?: WarrantyClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarrantyClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarrantyClaims.
     */
    skip?: number
    distinct?: WarrantyClaimScalarFieldEnum | WarrantyClaimScalarFieldEnum[]
  }

  /**
   * WarrantyClaim create
   */
  export type WarrantyClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * The data needed to create a WarrantyClaim.
     */
    data: XOR<WarrantyClaimCreateInput, WarrantyClaimUncheckedCreateInput>
  }

  /**
   * WarrantyClaim createMany
   */
  export type WarrantyClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarrantyClaims.
     */
    data: WarrantyClaimCreateManyInput | WarrantyClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarrantyClaim createManyAndReturn
   */
  export type WarrantyClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WarrantyClaims.
     */
    data: WarrantyClaimCreateManyInput | WarrantyClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarrantyClaim update
   */
  export type WarrantyClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * The data needed to update a WarrantyClaim.
     */
    data: XOR<WarrantyClaimUpdateInput, WarrantyClaimUncheckedUpdateInput>
    /**
     * Choose, which WarrantyClaim to update.
     */
    where: WarrantyClaimWhereUniqueInput
  }

  /**
   * WarrantyClaim updateMany
   */
  export type WarrantyClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarrantyClaims.
     */
    data: XOR<WarrantyClaimUpdateManyMutationInput, WarrantyClaimUncheckedUpdateManyInput>
    /**
     * Filter which WarrantyClaims to update
     */
    where?: WarrantyClaimWhereInput
  }

  /**
   * WarrantyClaim upsert
   */
  export type WarrantyClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * The filter to search for the WarrantyClaim to update in case it exists.
     */
    where: WarrantyClaimWhereUniqueInput
    /**
     * In case the WarrantyClaim found by the `where` argument doesn't exist, create a new WarrantyClaim with this data.
     */
    create: XOR<WarrantyClaimCreateInput, WarrantyClaimUncheckedCreateInput>
    /**
     * In case the WarrantyClaim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarrantyClaimUpdateInput, WarrantyClaimUncheckedUpdateInput>
  }

  /**
   * WarrantyClaim delete
   */
  export type WarrantyClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
    /**
     * Filter which WarrantyClaim to delete.
     */
    where: WarrantyClaimWhereUniqueInput
  }

  /**
   * WarrantyClaim deleteMany
   */
  export type WarrantyClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarrantyClaims to delete
     */
    where?: WarrantyClaimWhereInput
  }

  /**
   * WarrantyClaim without action
   */
  export type WarrantyClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarrantyClaim
     */
    select?: WarrantyClaimSelect<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    parentId: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    parentId: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    sharedShopIds: number
    name: number
    parentId: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    parentId?: true
    createdAt?: true
    createdBy?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    parentId?: true
    createdAt?: true
    createdBy?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    sharedShopIds?: true
    name?: true
    parentId?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string | null
    sharedShopIds: string[]
    name: string
    parentId: string | null
    createdAt: Date
    createdBy: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string | null
      sharedShopIds: string[]
      name: string
      parentId: string | null
      createdAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly tenantId: FieldRef<"Category", 'String'>
    readonly shopId: FieldRef<"Category", 'String'>
    readonly sharedShopIds: FieldRef<"Category", 'String[]'>
    readonly name: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly createdBy: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    sharedShopIds: number
    name: number
    description: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    sharedShopIds?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string | null
    sharedShopIds: string[]
    name: string
    description: string | null
    createdAt: Date
    createdBy: string | null
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    sharedShopIds?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string | null
      sharedShopIds: string[]
      name: string
      description: string | null
      createdAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Brand model
   */ 
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly tenantId: FieldRef<"Brand", 'String'>
    readonly shopId: FieldRef<"Brand", 'String'>
    readonly sharedShopIds: FieldRef<"Brand", 'String[]'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly description: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly createdBy: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model ProductPrice
   */

  export type AggregateProductPrice = {
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  export type ProductPriceAvgAggregateOutputType = {
    sellingPrice: number | null
  }

  export type ProductPriceSumAggregateOutputType = {
    sellingPrice: number | null
  }

  export type ProductPriceMinAggregateOutputType = {
    id: string | null
    productId: string | null
    tenantId: string | null
    sellingPrice: number | null
    validFrom: Date | null
    validTo: Date | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type ProductPriceMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    tenantId: string | null
    sellingPrice: number | null
    validFrom: Date | null
    validTo: Date | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type ProductPriceCountAggregateOutputType = {
    id: number
    productId: number
    tenantId: number
    sellingPrice: number
    validFrom: number
    validTo: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type ProductPriceAvgAggregateInputType = {
    sellingPrice?: true
  }

  export type ProductPriceSumAggregateInputType = {
    sellingPrice?: true
  }

  export type ProductPriceMinAggregateInputType = {
    id?: true
    productId?: true
    tenantId?: true
    sellingPrice?: true
    validFrom?: true
    validTo?: true
    createdAt?: true
    createdBy?: true
  }

  export type ProductPriceMaxAggregateInputType = {
    id?: true
    productId?: true
    tenantId?: true
    sellingPrice?: true
    validFrom?: true
    validTo?: true
    createdAt?: true
    createdBy?: true
  }

  export type ProductPriceCountAggregateInputType = {
    id?: true
    productId?: true
    tenantId?: true
    sellingPrice?: true
    validFrom?: true
    validTo?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type ProductPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrice to aggregate.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPrices
    **/
    _count?: true | ProductPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceMaxAggregateInputType
  }

  export type GetProductPriceAggregateType<T extends ProductPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPrice[P]>
      : GetScalarType<T[P], AggregateProductPrice[P]>
  }




  export type ProductPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceWhereInput
    orderBy?: ProductPriceOrderByWithAggregationInput | ProductPriceOrderByWithAggregationInput[]
    by: ProductPriceScalarFieldEnum[] | ProductPriceScalarFieldEnum
    having?: ProductPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceCountAggregateInputType | true
    _avg?: ProductPriceAvgAggregateInputType
    _sum?: ProductPriceSumAggregateInputType
    _min?: ProductPriceMinAggregateInputType
    _max?: ProductPriceMaxAggregateInputType
  }

  export type ProductPriceGroupByOutputType = {
    id: string
    productId: string
    tenantId: string
    sellingPrice: number
    validFrom: Date
    validTo: Date | null
    createdAt: Date
    createdBy: string | null
    _count: ProductPriceCountAggregateOutputType | null
    _avg: ProductPriceAvgAggregateOutputType | null
    _sum: ProductPriceSumAggregateOutputType | null
    _min: ProductPriceMinAggregateOutputType | null
    _max: ProductPriceMaxAggregateOutputType | null
  }

  type GetProductPriceGroupByPayload<T extends ProductPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tenantId?: boolean
    sellingPrice?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    createdBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tenantId?: boolean
    sellingPrice?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    createdBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPrice"]>

  export type ProductPriceSelectScalar = {
    id?: boolean
    productId?: boolean
    tenantId?: boolean
    sellingPrice?: boolean
    validFrom?: boolean
    validTo?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type ProductPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPrice"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      tenantId: string
      sellingPrice: number
      validFrom: Date
      validTo: Date | null
      createdAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["productPrice"]>
    composites: {}
  }

  type ProductPriceGetPayload<S extends boolean | null | undefined | ProductPriceDefaultArgs> = $Result.GetResult<Prisma.$ProductPricePayload, S>

  type ProductPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductPriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductPriceCountAggregateInputType | true
    }

  export interface ProductPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPrice'], meta: { name: 'ProductPrice' } }
    /**
     * Find zero or one ProductPrice that matches the filter.
     * @param {ProductPriceFindUniqueArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceFindUniqueArgs>(args: SelectSubset<T, ProductPriceFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductPrice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductPriceFindUniqueOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceFindFirstArgs>(args?: SelectSubset<T, ProductPriceFindFirstArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindFirstOrThrowArgs} args - Arguments to find a ProductPrice
     * @example
     * // Get one ProductPrice
     * const productPrice = await prisma.productPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPrices
     * const productPrices = await prisma.productPrice.findMany()
     * 
     * // Get first 10 ProductPrices
     * const productPrices = await prisma.productPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceFindManyArgs>(args?: SelectSubset<T, ProductPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductPrice.
     * @param {ProductPriceCreateArgs} args - Arguments to create a ProductPrice.
     * @example
     * // Create one ProductPrice
     * const ProductPrice = await prisma.productPrice.create({
     *   data: {
     *     // ... data to create a ProductPrice
     *   }
     * })
     * 
     */
    create<T extends ProductPriceCreateArgs>(args: SelectSubset<T, ProductPriceCreateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductPrices.
     * @param {ProductPriceCreateManyArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceCreateManyArgs>(args?: SelectSubset<T, ProductPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPrices and returns the data saved in the database.
     * @param {ProductPriceCreateManyAndReturnArgs} args - Arguments to create many ProductPrices.
     * @example
     * // Create many ProductPrices
     * const productPrice = await prisma.productPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPrices and only return the `id`
     * const productPriceWithIdOnly = await prisma.productPrice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductPrice.
     * @param {ProductPriceDeleteArgs} args - Arguments to delete one ProductPrice.
     * @example
     * // Delete one ProductPrice
     * const ProductPrice = await prisma.productPrice.delete({
     *   where: {
     *     // ... filter to delete one ProductPrice
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceDeleteArgs>(args: SelectSubset<T, ProductPriceDeleteArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductPrice.
     * @param {ProductPriceUpdateArgs} args - Arguments to update one ProductPrice.
     * @example
     * // Update one ProductPrice
     * const productPrice = await prisma.productPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceUpdateArgs>(args: SelectSubset<T, ProductPriceUpdateArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductPrices.
     * @param {ProductPriceDeleteManyArgs} args - Arguments to filter ProductPrices to delete.
     * @example
     * // Delete a few ProductPrices
     * const { count } = await prisma.productPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceDeleteManyArgs>(args?: SelectSubset<T, ProductPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPrices
     * const productPrice = await prisma.productPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceUpdateManyArgs>(args: SelectSubset<T, ProductPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPrice.
     * @param {ProductPriceUpsertArgs} args - Arguments to update or create a ProductPrice.
     * @example
     * // Update or create a ProductPrice
     * const productPrice = await prisma.productPrice.upsert({
     *   create: {
     *     // ... data to create a ProductPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPrice we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceUpsertArgs>(args: SelectSubset<T, ProductPriceUpsertArgs<ExtArgs>>): Prisma__ProductPriceClient<$Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceCountArgs} args - Arguments to filter ProductPrices to count.
     * @example
     * // Count the number of ProductPrices
     * const count = await prisma.productPrice.count({
     *   where: {
     *     // ... the filter for the ProductPrices we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceCountArgs>(
      args?: Subset<T, ProductPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPriceAggregateArgs>(args: Subset<T, ProductPriceAggregateArgs>): Prisma.PrismaPromise<GetProductPriceAggregateType<T>>

    /**
     * Group by ProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceGroupByArgs} args - Group by arguments.
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
      T extends ProductPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPrice model
   */
  readonly fields: ProductPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProductPrice model
   */ 
  interface ProductPriceFieldRefs {
    readonly id: FieldRef<"ProductPrice", 'String'>
    readonly productId: FieldRef<"ProductPrice", 'String'>
    readonly tenantId: FieldRef<"ProductPrice", 'String'>
    readonly sellingPrice: FieldRef<"ProductPrice", 'Float'>
    readonly validFrom: FieldRef<"ProductPrice", 'DateTime'>
    readonly validTo: FieldRef<"ProductPrice", 'DateTime'>
    readonly createdAt: FieldRef<"ProductPrice", 'DateTime'>
    readonly createdBy: FieldRef<"ProductPrice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductPrice findUnique
   */
  export type ProductPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findUniqueOrThrow
   */
  export type ProductPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice findFirst
   */
  export type ProductPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findFirstOrThrow
   */
  export type ProductPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrice to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPrices.
     */
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice findMany
   */
  export type ProductPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter, which ProductPrices to fetch.
     */
    where?: ProductPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPrices to fetch.
     */
    orderBy?: ProductPriceOrderByWithRelationInput | ProductPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPrices.
     */
    cursor?: ProductPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPrices.
     */
    skip?: number
    distinct?: ProductPriceScalarFieldEnum | ProductPriceScalarFieldEnum[]
  }

  /**
   * ProductPrice create
   */
  export type ProductPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPrice.
     */
    data: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
  }

  /**
   * ProductPrice createMany
   */
  export type ProductPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPrice createManyAndReturn
   */
  export type ProductPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductPrices.
     */
    data: ProductPriceCreateManyInput | ProductPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPrice update
   */
  export type ProductPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPrice.
     */
    data: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
    /**
     * Choose, which ProductPrice to update.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice updateMany
   */
  export type ProductPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPrices.
     */
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyInput>
    /**
     * Filter which ProductPrices to update
     */
    where?: ProductPriceWhereInput
  }

  /**
   * ProductPrice upsert
   */
  export type ProductPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPrice to update in case it exists.
     */
    where: ProductPriceWhereUniqueInput
    /**
     * In case the ProductPrice found by the `where` argument doesn't exist, create a new ProductPrice with this data.
     */
    create: XOR<ProductPriceCreateInput, ProductPriceUncheckedCreateInput>
    /**
     * In case the ProductPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceUpdateInput, ProductPriceUncheckedUpdateInput>
  }

  /**
   * ProductPrice delete
   */
  export type ProductPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
    /**
     * Filter which ProductPrice to delete.
     */
    where: ProductPriceWhereUniqueInput
  }

  /**
   * ProductPrice deleteMany
   */
  export type ProductPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPrices to delete
     */
    where?: ProductPriceWhereInput
  }

  /**
   * ProductPrice without action
   */
  export type ProductPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPrice
     */
    select?: ProductPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceInclude<ExtArgs> | null
  }


  /**
   * Model InventoryMovement
   */

  export type AggregateInventoryMovement = {
    _count: InventoryMovementCountAggregateOutputType | null
    _avg: InventoryMovementAvgAggregateOutputType | null
    _sum: InventoryMovementSumAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  export type InventoryMovementAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMovementSumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMovementMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    inventoryItemId: string | null
    movementType: string | null
    quantity: number | null
    referenceId: string | null
    referenceType: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type InventoryMovementMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    inventoryItemId: string | null
    movementType: string | null
    quantity: number | null
    referenceId: string | null
    referenceType: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type InventoryMovementCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    inventoryItemId: number
    movementType: number
    quantity: number
    referenceId: number
    referenceType: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type InventoryMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryMovementSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMovementMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    movementType?: true
    quantity?: true
    referenceId?: true
    referenceType?: true
    createdAt?: true
    createdBy?: true
  }

  export type InventoryMovementMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    movementType?: true
    quantity?: true
    referenceId?: true
    referenceType?: true
    createdAt?: true
    createdBy?: true
  }

  export type InventoryMovementCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    movementType?: true
    quantity?: true
    referenceId?: true
    referenceType?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type InventoryMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovement to aggregate.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryMovements
    **/
    _count?: true | InventoryMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type GetInventoryMovementAggregateType<T extends InventoryMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryMovement[P]>
      : GetScalarType<T[P], AggregateInventoryMovement[P]>
  }




  export type InventoryMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithAggregationInput | InventoryMovementOrderByWithAggregationInput[]
    by: InventoryMovementScalarFieldEnum[] | InventoryMovementScalarFieldEnum
    having?: InventoryMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryMovementCountAggregateInputType | true
    _avg?: InventoryMovementAvgAggregateInputType
    _sum?: InventoryMovementSumAggregateInputType
    _min?: InventoryMovementMinAggregateInputType
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type InventoryMovementGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    movementType: string
    quantity: number
    referenceId: string | null
    referenceType: string | null
    createdAt: Date
    createdBy: string | null
    _count: InventoryMovementCountAggregateOutputType | null
    _avg: InventoryMovementAvgAggregateOutputType | null
    _sum: InventoryMovementSumAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  type GetInventoryMovementGroupByPayload<T extends InventoryMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
        }
      >
    >


  export type InventoryMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }


  export type $InventoryMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryMovement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      inventoryItemId: string
      movementType: string
      quantity: number
      referenceId: string | null
      referenceType: string | null
      createdAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["inventoryMovement"]>
    composites: {}
  }

  type InventoryMovementGetPayload<S extends boolean | null | undefined | InventoryMovementDefaultArgs> = $Result.GetResult<Prisma.$InventoryMovementPayload, S>

  type InventoryMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryMovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryMovementCountAggregateInputType | true
    }

  export interface InventoryMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryMovement'], meta: { name: 'InventoryMovement' } }
    /**
     * Find zero or one InventoryMovement that matches the filter.
     * @param {InventoryMovementFindUniqueArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryMovementFindUniqueArgs>(args: SelectSubset<T, InventoryMovementFindUniqueArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryMovement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryMovementFindUniqueOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryMovementFindFirstArgs>(args?: SelectSubset<T, InventoryMovementFindFirstArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany()
     * 
     * // Get first 10 InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryMovementFindManyArgs>(args?: SelectSubset<T, InventoryMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryMovement.
     * @param {InventoryMovementCreateArgs} args - Arguments to create a InventoryMovement.
     * @example
     * // Create one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.create({
     *   data: {
     *     // ... data to create a InventoryMovement
     *   }
     * })
     * 
     */
    create<T extends InventoryMovementCreateArgs>(args: SelectSubset<T, InventoryMovementCreateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryMovements.
     * @param {InventoryMovementCreateManyArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryMovementCreateManyArgs>(args?: SelectSubset<T, InventoryMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryMovements and returns the data saved in the database.
     * @param {InventoryMovementCreateManyAndReturnArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryMovements and only return the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryMovement.
     * @param {InventoryMovementDeleteArgs} args - Arguments to delete one InventoryMovement.
     * @example
     * // Delete one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.delete({
     *   where: {
     *     // ... filter to delete one InventoryMovement
     *   }
     * })
     * 
     */
    delete<T extends InventoryMovementDeleteArgs>(args: SelectSubset<T, InventoryMovementDeleteArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryMovement.
     * @param {InventoryMovementUpdateArgs} args - Arguments to update one InventoryMovement.
     * @example
     * // Update one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryMovementUpdateArgs>(args: SelectSubset<T, InventoryMovementUpdateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryMovements.
     * @param {InventoryMovementDeleteManyArgs} args - Arguments to filter InventoryMovements to delete.
     * @example
     * // Delete a few InventoryMovements
     * const { count } = await prisma.inventoryMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryMovementDeleteManyArgs>(args?: SelectSubset<T, InventoryMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryMovementUpdateManyArgs>(args: SelectSubset<T, InventoryMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryMovement.
     * @param {InventoryMovementUpsertArgs} args - Arguments to update or create a InventoryMovement.
     * @example
     * // Update or create a InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.upsert({
     *   create: {
     *     // ... data to create a InventoryMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryMovement we want to update
     *   }
     * })
     */
    upsert<T extends InventoryMovementUpsertArgs>(args: SelectSubset<T, InventoryMovementUpsertArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementCountArgs} args - Arguments to filter InventoryMovements to count.
     * @example
     * // Count the number of InventoryMovements
     * const count = await prisma.inventoryMovement.count({
     *   where: {
     *     // ... the filter for the InventoryMovements we want to count
     *   }
     * })
    **/
    count<T extends InventoryMovementCountArgs>(
      args?: Subset<T, InventoryMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryMovementAggregateArgs>(args: Subset<T, InventoryMovementAggregateArgs>): Prisma.PrismaPromise<GetInventoryMovementAggregateType<T>>

    /**
     * Group by InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementGroupByArgs} args - Group by arguments.
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
      T extends InventoryMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryMovementGroupByArgs['orderBy'] }
        : { orderBy?: InventoryMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryMovement model
   */
  readonly fields: InventoryMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InventoryMovement model
   */ 
  interface InventoryMovementFieldRefs {
    readonly id: FieldRef<"InventoryMovement", 'String'>
    readonly tenantId: FieldRef<"InventoryMovement", 'String'>
    readonly shopId: FieldRef<"InventoryMovement", 'String'>
    readonly inventoryItemId: FieldRef<"InventoryMovement", 'String'>
    readonly movementType: FieldRef<"InventoryMovement", 'String'>
    readonly quantity: FieldRef<"InventoryMovement", 'Float'>
    readonly referenceId: FieldRef<"InventoryMovement", 'String'>
    readonly referenceType: FieldRef<"InventoryMovement", 'String'>
    readonly createdAt: FieldRef<"InventoryMovement", 'DateTime'>
    readonly createdBy: FieldRef<"InventoryMovement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryMovement findUnique
   */
  export type InventoryMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findUniqueOrThrow
   */
  export type InventoryMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findFirst
   */
  export type InventoryMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findFirstOrThrow
   */
  export type InventoryMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findMany
   */
  export type InventoryMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Filter, which InventoryMovements to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement create
   */
  export type InventoryMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryMovement.
     */
    data: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
  }

  /**
   * InventoryMovement createMany
   */
  export type InventoryMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryMovement createManyAndReturn
   */
  export type InventoryMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryMovement update
   */
  export type InventoryMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryMovement.
     */
    data: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
    /**
     * Choose, which InventoryMovement to update.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement updateMany
   */
  export type InventoryMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryMovements.
     */
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyInput>
    /**
     * Filter which InventoryMovements to update
     */
    where?: InventoryMovementWhereInput
  }

  /**
   * InventoryMovement upsert
   */
  export type InventoryMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryMovement to update in case it exists.
     */
    where: InventoryMovementWhereUniqueInput
    /**
     * In case the InventoryMovement found by the `where` argument doesn't exist, create a new InventoryMovement with this data.
     */
    create: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
    /**
     * In case the InventoryMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
  }

  /**
   * InventoryMovement delete
   */
  export type InventoryMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Filter which InventoryMovement to delete.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement deleteMany
   */
  export type InventoryMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovements to delete
     */
    where?: InventoryMovementWhereInput
  }

  /**
   * InventoryMovement without action
   */
  export type InventoryMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
  }


  /**
   * Model InventoryAdjustment
   */

  export type AggregateInventoryAdjustment = {
    _count: InventoryAdjustmentCountAggregateOutputType | null
    _avg: InventoryAdjustmentAvgAggregateOutputType | null
    _sum: InventoryAdjustmentSumAggregateOutputType | null
    _min: InventoryAdjustmentMinAggregateOutputType | null
    _max: InventoryAdjustmentMaxAggregateOutputType | null
  }

  export type InventoryAdjustmentAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryAdjustmentSumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryAdjustmentMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    inventoryItemId: string | null
    adjustmentType: string | null
    reason: string | null
    quantity: number | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type InventoryAdjustmentMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    shopId: string | null
    inventoryItemId: string | null
    adjustmentType: string | null
    reason: string | null
    quantity: number | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type InventoryAdjustmentCountAggregateOutputType = {
    id: number
    tenantId: number
    shopId: number
    inventoryItemId: number
    adjustmentType: number
    reason: number
    quantity: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type InventoryAdjustmentAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryAdjustmentSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryAdjustmentMinAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    adjustmentType?: true
    reason?: true
    quantity?: true
    createdAt?: true
    createdBy?: true
  }

  export type InventoryAdjustmentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    adjustmentType?: true
    reason?: true
    quantity?: true
    createdAt?: true
    createdBy?: true
  }

  export type InventoryAdjustmentCountAggregateInputType = {
    id?: true
    tenantId?: true
    shopId?: true
    inventoryItemId?: true
    adjustmentType?: true
    reason?: true
    quantity?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type InventoryAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryAdjustment to aggregate.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryAdjustments
    **/
    _count?: true | InventoryAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryAdjustmentMaxAggregateInputType
  }

  export type GetInventoryAdjustmentAggregateType<T extends InventoryAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryAdjustment[P]>
      : GetScalarType<T[P], AggregateInventoryAdjustment[P]>
  }




  export type InventoryAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryAdjustmentWhereInput
    orderBy?: InventoryAdjustmentOrderByWithAggregationInput | InventoryAdjustmentOrderByWithAggregationInput[]
    by: InventoryAdjustmentScalarFieldEnum[] | InventoryAdjustmentScalarFieldEnum
    having?: InventoryAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryAdjustmentCountAggregateInputType | true
    _avg?: InventoryAdjustmentAvgAggregateInputType
    _sum?: InventoryAdjustmentSumAggregateInputType
    _min?: InventoryAdjustmentMinAggregateInputType
    _max?: InventoryAdjustmentMaxAggregateInputType
  }

  export type InventoryAdjustmentGroupByOutputType = {
    id: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    adjustmentType: string
    reason: string | null
    quantity: number
    createdAt: Date
    createdBy: string | null
    _count: InventoryAdjustmentCountAggregateOutputType | null
    _avg: InventoryAdjustmentAvgAggregateOutputType | null
    _sum: InventoryAdjustmentSumAggregateOutputType | null
    _min: InventoryAdjustmentMinAggregateOutputType | null
    _max: InventoryAdjustmentMaxAggregateOutputType | null
  }

  type GetInventoryAdjustmentGroupByPayload<T extends InventoryAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type InventoryAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    adjustmentType?: boolean
    reason?: boolean
    quantity?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    adjustmentType?: boolean
    reason?: boolean
    quantity?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    shopId?: boolean
    inventoryItemId?: boolean
    adjustmentType?: boolean
    reason?: boolean
    quantity?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }


  export type $InventoryAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryAdjustment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      shopId: string
      inventoryItemId: string
      adjustmentType: string
      reason: string | null
      quantity: number
      createdAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["inventoryAdjustment"]>
    composites: {}
  }

  type InventoryAdjustmentGetPayload<S extends boolean | null | undefined | InventoryAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$InventoryAdjustmentPayload, S>

  type InventoryAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryAdjustmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryAdjustmentCountAggregateInputType | true
    }

  export interface InventoryAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryAdjustment'], meta: { name: 'InventoryAdjustment' } }
    /**
     * Find zero or one InventoryAdjustment that matches the filter.
     * @param {InventoryAdjustmentFindUniqueArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryAdjustmentFindUniqueArgs>(args: SelectSubset<T, InventoryAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryAdjustment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindFirstArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryAdjustmentFindFirstArgs>(args?: SelectSubset<T, InventoryAdjustmentFindFirstArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindFirstOrThrowArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryAdjustments
     * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany()
     * 
     * // Get first 10 InventoryAdjustments
     * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryAdjustmentFindManyArgs>(args?: SelectSubset<T, InventoryAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryAdjustment.
     * @param {InventoryAdjustmentCreateArgs} args - Arguments to create a InventoryAdjustment.
     * @example
     * // Create one InventoryAdjustment
     * const InventoryAdjustment = await prisma.inventoryAdjustment.create({
     *   data: {
     *     // ... data to create a InventoryAdjustment
     *   }
     * })
     * 
     */
    create<T extends InventoryAdjustmentCreateArgs>(args: SelectSubset<T, InventoryAdjustmentCreateArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryAdjustments.
     * @param {InventoryAdjustmentCreateManyArgs} args - Arguments to create many InventoryAdjustments.
     * @example
     * // Create many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryAdjustmentCreateManyArgs>(args?: SelectSubset<T, InventoryAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryAdjustments and returns the data saved in the database.
     * @param {InventoryAdjustmentCreateManyAndReturnArgs} args - Arguments to create many InventoryAdjustments.
     * @example
     * // Create many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryAdjustments and only return the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryAdjustmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryAdjustment.
     * @param {InventoryAdjustmentDeleteArgs} args - Arguments to delete one InventoryAdjustment.
     * @example
     * // Delete one InventoryAdjustment
     * const InventoryAdjustment = await prisma.inventoryAdjustment.delete({
     *   where: {
     *     // ... filter to delete one InventoryAdjustment
     *   }
     * })
     * 
     */
    delete<T extends InventoryAdjustmentDeleteArgs>(args: SelectSubset<T, InventoryAdjustmentDeleteArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryAdjustment.
     * @param {InventoryAdjustmentUpdateArgs} args - Arguments to update one InventoryAdjustment.
     * @example
     * // Update one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryAdjustmentUpdateArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryAdjustments.
     * @param {InventoryAdjustmentDeleteManyArgs} args - Arguments to filter InventoryAdjustments to delete.
     * @example
     * // Delete a few InventoryAdjustments
     * const { count } = await prisma.inventoryAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryAdjustmentDeleteManyArgs>(args?: SelectSubset<T, InventoryAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryAdjustmentUpdateManyArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryAdjustment.
     * @param {InventoryAdjustmentUpsertArgs} args - Arguments to update or create a InventoryAdjustment.
     * @example
     * // Update or create a InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.upsert({
     *   create: {
     *     // ... data to create a InventoryAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends InventoryAdjustmentUpsertArgs>(args: SelectSubset<T, InventoryAdjustmentUpsertArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentCountArgs} args - Arguments to filter InventoryAdjustments to count.
     * @example
     * // Count the number of InventoryAdjustments
     * const count = await prisma.inventoryAdjustment.count({
     *   where: {
     *     // ... the filter for the InventoryAdjustments we want to count
     *   }
     * })
    **/
    count<T extends InventoryAdjustmentCountArgs>(
      args?: Subset<T, InventoryAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAdjustmentAggregateArgs>(args: Subset<T, InventoryAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetInventoryAdjustmentAggregateType<T>>

    /**
     * Group by InventoryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentGroupByArgs} args - Group by arguments.
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
      T extends InventoryAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: InventoryAdjustmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryAdjustment model
   */
  readonly fields: InventoryAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InventoryAdjustment model
   */ 
  interface InventoryAdjustmentFieldRefs {
    readonly id: FieldRef<"InventoryAdjustment", 'String'>
    readonly tenantId: FieldRef<"InventoryAdjustment", 'String'>
    readonly shopId: FieldRef<"InventoryAdjustment", 'String'>
    readonly inventoryItemId: FieldRef<"InventoryAdjustment", 'String'>
    readonly adjustmentType: FieldRef<"InventoryAdjustment", 'String'>
    readonly reason: FieldRef<"InventoryAdjustment", 'String'>
    readonly quantity: FieldRef<"InventoryAdjustment", 'Float'>
    readonly createdAt: FieldRef<"InventoryAdjustment", 'DateTime'>
    readonly createdBy: FieldRef<"InventoryAdjustment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryAdjustment findUnique
   */
  export type InventoryAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment findUniqueOrThrow
   */
  export type InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment findFirst
   */
  export type InventoryAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment findFirstOrThrow
   */
  export type InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment findMany
   */
  export type InventoryAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustments to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment create
   */
  export type InventoryAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryAdjustment.
     */
    data: XOR<InventoryAdjustmentCreateInput, InventoryAdjustmentUncheckedCreateInput>
  }

  /**
   * InventoryAdjustment createMany
   */
  export type InventoryAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryAdjustments.
     */
    data: InventoryAdjustmentCreateManyInput | InventoryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryAdjustment createManyAndReturn
   */
  export type InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryAdjustments.
     */
    data: InventoryAdjustmentCreateManyInput | InventoryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryAdjustment update
   */
  export type InventoryAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryAdjustment.
     */
    data: XOR<InventoryAdjustmentUpdateInput, InventoryAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which InventoryAdjustment to update.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment updateMany
   */
  export type InventoryAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryAdjustments.
     */
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which InventoryAdjustments to update
     */
    where?: InventoryAdjustmentWhereInput
  }

  /**
   * InventoryAdjustment upsert
   */
  export type InventoryAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryAdjustment to update in case it exists.
     */
    where: InventoryAdjustmentWhereUniqueInput
    /**
     * In case the InventoryAdjustment found by the `where` argument doesn't exist, create a new InventoryAdjustment with this data.
     */
    create: XOR<InventoryAdjustmentCreateInput, InventoryAdjustmentUncheckedCreateInput>
    /**
     * In case the InventoryAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryAdjustmentUpdateInput, InventoryAdjustmentUncheckedUpdateInput>
  }

  /**
   * InventoryAdjustment delete
   */
  export type InventoryAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Filter which InventoryAdjustment to delete.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment deleteMany
   */
  export type InventoryAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryAdjustments to delete
     */
    where?: InventoryAdjustmentWhereInput
  }

  /**
   * InventoryAdjustment without action
   */
  export type InventoryAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    sharedShopIds: 'sharedShopIds',
    sku: 'sku',
    name: 'name',
    description: 'description',
    brandId: 'brandId',
    categoryId: 'categoryId',
    productType: 'productType',
    trackingMethod: 'trackingMethod',
    status: 'status',
    specifications: 'specifications',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    version: 'version'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    productId: 'productId',
    serialNumber: 'serialNumber',
    purchaseCost: 'purchaseCost',
    status: 'status',
    capitalizedCost: 'capitalizedCost',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    version: 'version'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const InventoryUpgradeScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    inventoryItemId: 'inventoryItemId',
    upgradeType: 'upgradeType',
    description: 'description',
    cost: 'cost',
    createdAt: 'createdAt'
  };

  export type InventoryUpgradeScalarFieldEnum = (typeof InventoryUpgradeScalarFieldEnum)[keyof typeof InventoryUpgradeScalarFieldEnum]


  export const InventoryTransferScalarFieldEnum: {
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

  export type InventoryTransferScalarFieldEnum = (typeof InventoryTransferScalarFieldEnum)[keyof typeof InventoryTransferScalarFieldEnum]


  export const WarrantyClaimScalarFieldEnum: {
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

  export type WarrantyClaimScalarFieldEnum = (typeof WarrantyClaimScalarFieldEnum)[keyof typeof WarrantyClaimScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    sharedShopIds: 'sharedShopIds',
    name: 'name',
    parentId: 'parentId',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    sharedShopIds: 'sharedShopIds',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductPriceScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    tenantId: 'tenantId',
    sellingPrice: 'sellingPrice',
    validFrom: 'validFrom',
    validTo: 'validTo',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type ProductPriceScalarFieldEnum = (typeof ProductPriceScalarFieldEnum)[keyof typeof ProductPriceScalarFieldEnum]


  export const InventoryMovementScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    shopId: 'shopId',
    inventoryItemId: 'inventoryItemId',
    movementType: 'movementType',
    quantity: 'quantity',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type InventoryMovementScalarFieldEnum = (typeof InventoryMovementScalarFieldEnum)[keyof typeof InventoryMovementScalarFieldEnum]


  export const InventoryAdjustmentScalarFieldEnum: {
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

  export type InventoryAdjustmentScalarFieldEnum = (typeof InventoryAdjustmentScalarFieldEnum)[keyof typeof InventoryAdjustmentScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    tenantId?: StringFilter<"Product"> | string
    shopId?: StringNullableFilter<"Product"> | string | null
    sharedShopIds?: StringNullableListFilter<"Product">
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    brandId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    productType?: StringFilter<"Product"> | string
    trackingMethod?: StringFilter<"Product"> | string
    status?: StringFilter<"Product"> | string
    specifications?: JsonNullableFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdBy?: StringNullableFilter<"Product"> | string | null
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: StringNullableFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableFilter<"Product"> | string | null
    version?: IntFilter<"Product"> | number
    brand?: XOR<BrandNullableRelationFilter, BrandWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    items?: InventoryItemListRelationFilter
    prices?: ProductPriceListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    brandId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    productType?: SortOrder
    trackingMethod?: SortOrder
    status?: SortOrder
    specifications?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    brand?: BrandOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    items?: InventoryItemOrderByRelationAggregateInput
    prices?: ProductPriceOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_sku?: ProductTenantIdSkuCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    tenantId?: StringFilter<"Product"> | string
    shopId?: StringNullableFilter<"Product"> | string | null
    sharedShopIds?: StringNullableListFilter<"Product">
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    brandId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    productType?: StringFilter<"Product"> | string
    trackingMethod?: StringFilter<"Product"> | string
    status?: StringFilter<"Product"> | string
    specifications?: JsonNullableFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdBy?: StringNullableFilter<"Product"> | string | null
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: StringNullableFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableFilter<"Product"> | string | null
    version?: IntFilter<"Product"> | number
    brand?: XOR<BrandNullableRelationFilter, BrandWhereInput> | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    items?: InventoryItemListRelationFilter
    prices?: ProductPriceListRelationFilter
  }, "id" | "tenantId_sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    brandId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    productType?: SortOrder
    trackingMethod?: SortOrder
    status?: SortOrder
    specifications?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    tenantId?: StringWithAggregatesFilter<"Product"> | string
    shopId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    sharedShopIds?: StringNullableListFilter<"Product">
    sku?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    brandId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productType?: StringWithAggregatesFilter<"Product"> | string
    trackingMethod?: StringWithAggregatesFilter<"Product"> | string
    status?: StringWithAggregatesFilter<"Product"> | string
    specifications?: JsonNullableWithAggregatesFilter<"Product">
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    version?: IntWithAggregatesFilter<"Product"> | number
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    tenantId?: StringFilter<"InventoryItem"> | string
    shopId?: StringFilter<"InventoryItem"> | string
    productId?: StringFilter<"InventoryItem"> | string
    serialNumber?: StringFilter<"InventoryItem"> | string
    purchaseCost?: FloatFilter<"InventoryItem"> | number
    status?: StringFilter<"InventoryItem"> | string
    capitalizedCost?: FloatFilter<"InventoryItem"> | number
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    createdBy?: StringNullableFilter<"InventoryItem"> | string | null
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedBy?: StringNullableFilter<"InventoryItem"> | string | null
    deletedAt?: DateTimeNullableFilter<"InventoryItem"> | Date | string | null
    deletedBy?: StringNullableFilter<"InventoryItem"> | string | null
    version?: IntFilter<"InventoryItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    upgrades?: InventoryUpgradeListRelationFilter
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    purchaseCost?: SortOrder
    status?: SortOrder
    capitalizedCost?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    product?: ProductOrderByWithRelationInput
    upgrades?: InventoryUpgradeOrderByRelationAggregateInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_serialNumber?: InventoryItemTenantIdSerialNumberCompoundUniqueInput
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    tenantId?: StringFilter<"InventoryItem"> | string
    shopId?: StringFilter<"InventoryItem"> | string
    productId?: StringFilter<"InventoryItem"> | string
    serialNumber?: StringFilter<"InventoryItem"> | string
    purchaseCost?: FloatFilter<"InventoryItem"> | number
    status?: StringFilter<"InventoryItem"> | string
    capitalizedCost?: FloatFilter<"InventoryItem"> | number
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    createdBy?: StringNullableFilter<"InventoryItem"> | string | null
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedBy?: StringNullableFilter<"InventoryItem"> | string | null
    deletedAt?: DateTimeNullableFilter<"InventoryItem"> | Date | string | null
    deletedBy?: StringNullableFilter<"InventoryItem"> | string | null
    version?: IntFilter<"InventoryItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    upgrades?: InventoryUpgradeListRelationFilter
  }, "id" | "tenantId_serialNumber">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    purchaseCost?: SortOrder
    status?: SortOrder
    capitalizedCost?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    tenantId?: StringWithAggregatesFilter<"InventoryItem"> | string
    shopId?: StringWithAggregatesFilter<"InventoryItem"> | string
    productId?: StringWithAggregatesFilter<"InventoryItem"> | string
    serialNumber?: StringWithAggregatesFilter<"InventoryItem"> | string
    purchaseCost?: FloatWithAggregatesFilter<"InventoryItem"> | number
    status?: StringWithAggregatesFilter<"InventoryItem"> | string
    capitalizedCost?: FloatWithAggregatesFilter<"InventoryItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"InventoryItem"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    version?: IntWithAggregatesFilter<"InventoryItem"> | number
  }

  export type InventoryUpgradeWhereInput = {
    AND?: InventoryUpgradeWhereInput | InventoryUpgradeWhereInput[]
    OR?: InventoryUpgradeWhereInput[]
    NOT?: InventoryUpgradeWhereInput | InventoryUpgradeWhereInput[]
    id?: StringFilter<"InventoryUpgrade"> | string
    tenantId?: StringFilter<"InventoryUpgrade"> | string
    shopId?: StringFilter<"InventoryUpgrade"> | string
    inventoryItemId?: StringFilter<"InventoryUpgrade"> | string
    upgradeType?: StringFilter<"InventoryUpgrade"> | string
    description?: StringNullableFilter<"InventoryUpgrade"> | string | null
    cost?: FloatFilter<"InventoryUpgrade"> | number
    createdAt?: DateTimeFilter<"InventoryUpgrade"> | Date | string
    inventoryItem?: XOR<InventoryItemRelationFilter, InventoryItemWhereInput>
  }

  export type InventoryUpgradeOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    upgradeType?: SortOrder
    description?: SortOrderInput | SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    inventoryItem?: InventoryItemOrderByWithRelationInput
  }

  export type InventoryUpgradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryUpgradeWhereInput | InventoryUpgradeWhereInput[]
    OR?: InventoryUpgradeWhereInput[]
    NOT?: InventoryUpgradeWhereInput | InventoryUpgradeWhereInput[]
    tenantId?: StringFilter<"InventoryUpgrade"> | string
    shopId?: StringFilter<"InventoryUpgrade"> | string
    inventoryItemId?: StringFilter<"InventoryUpgrade"> | string
    upgradeType?: StringFilter<"InventoryUpgrade"> | string
    description?: StringNullableFilter<"InventoryUpgrade"> | string | null
    cost?: FloatFilter<"InventoryUpgrade"> | number
    createdAt?: DateTimeFilter<"InventoryUpgrade"> | Date | string
    inventoryItem?: XOR<InventoryItemRelationFilter, InventoryItemWhereInput>
  }, "id">

  export type InventoryUpgradeOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    upgradeType?: SortOrder
    description?: SortOrderInput | SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryUpgradeCountOrderByAggregateInput
    _avg?: InventoryUpgradeAvgOrderByAggregateInput
    _max?: InventoryUpgradeMaxOrderByAggregateInput
    _min?: InventoryUpgradeMinOrderByAggregateInput
    _sum?: InventoryUpgradeSumOrderByAggregateInput
  }

  export type InventoryUpgradeScalarWhereWithAggregatesInput = {
    AND?: InventoryUpgradeScalarWhereWithAggregatesInput | InventoryUpgradeScalarWhereWithAggregatesInput[]
    OR?: InventoryUpgradeScalarWhereWithAggregatesInput[]
    NOT?: InventoryUpgradeScalarWhereWithAggregatesInput | InventoryUpgradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryUpgrade"> | string
    tenantId?: StringWithAggregatesFilter<"InventoryUpgrade"> | string
    shopId?: StringWithAggregatesFilter<"InventoryUpgrade"> | string
    inventoryItemId?: StringWithAggregatesFilter<"InventoryUpgrade"> | string
    upgradeType?: StringWithAggregatesFilter<"InventoryUpgrade"> | string
    description?: StringNullableWithAggregatesFilter<"InventoryUpgrade"> | string | null
    cost?: FloatWithAggregatesFilter<"InventoryUpgrade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryUpgrade"> | Date | string
  }

  export type InventoryTransferWhereInput = {
    AND?: InventoryTransferWhereInput | InventoryTransferWhereInput[]
    OR?: InventoryTransferWhereInput[]
    NOT?: InventoryTransferWhereInput | InventoryTransferWhereInput[]
    id?: StringFilter<"InventoryTransfer"> | string
    tenantId?: StringFilter<"InventoryTransfer"> | string
    fromShopId?: StringFilter<"InventoryTransfer"> | string
    toShopId?: StringFilter<"InventoryTransfer"> | string
    transferNumber?: StringFilter<"InventoryTransfer"> | string
    serialNumber?: StringFilter<"InventoryTransfer"> | string
    status?: StringFilter<"InventoryTransfer"> | string
    notes?: StringNullableFilter<"InventoryTransfer"> | string | null
    createdById?: StringNullableFilter<"InventoryTransfer"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransfer"> | Date | string
  }

  export type InventoryTransferOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fromShopId?: SortOrder
    toShopId?: SortOrder
    transferNumber?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transferNumber?: string
    AND?: InventoryTransferWhereInput | InventoryTransferWhereInput[]
    OR?: InventoryTransferWhereInput[]
    NOT?: InventoryTransferWhereInput | InventoryTransferWhereInput[]
    tenantId?: StringFilter<"InventoryTransfer"> | string
    fromShopId?: StringFilter<"InventoryTransfer"> | string
    toShopId?: StringFilter<"InventoryTransfer"> | string
    serialNumber?: StringFilter<"InventoryTransfer"> | string
    status?: StringFilter<"InventoryTransfer"> | string
    notes?: StringNullableFilter<"InventoryTransfer"> | string | null
    createdById?: StringNullableFilter<"InventoryTransfer"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransfer"> | Date | string
  }, "id" | "transferNumber">

  export type InventoryTransferOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fromShopId?: SortOrder
    toShopId?: SortOrder
    transferNumber?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryTransferCountOrderByAggregateInput
    _max?: InventoryTransferMaxOrderByAggregateInput
    _min?: InventoryTransferMinOrderByAggregateInput
  }

  export type InventoryTransferScalarWhereWithAggregatesInput = {
    AND?: InventoryTransferScalarWhereWithAggregatesInput | InventoryTransferScalarWhereWithAggregatesInput[]
    OR?: InventoryTransferScalarWhereWithAggregatesInput[]
    NOT?: InventoryTransferScalarWhereWithAggregatesInput | InventoryTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    tenantId?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    fromShopId?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    toShopId?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    transferNumber?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    serialNumber?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    status?: StringWithAggregatesFilter<"InventoryTransfer"> | string
    notes?: StringNullableWithAggregatesFilter<"InventoryTransfer"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"InventoryTransfer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryTransfer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryTransfer"> | Date | string
  }

  export type WarrantyClaimWhereInput = {
    AND?: WarrantyClaimWhereInput | WarrantyClaimWhereInput[]
    OR?: WarrantyClaimWhereInput[]
    NOT?: WarrantyClaimWhereInput | WarrantyClaimWhereInput[]
    id?: StringFilter<"WarrantyClaim"> | string
    tenantId?: StringFilter<"WarrantyClaim"> | string
    shopId?: StringFilter<"WarrantyClaim"> | string
    serialNumber?: StringFilter<"WarrantyClaim"> | string
    customerName?: StringNullableFilter<"WarrantyClaim"> | string | null
    issueDescription?: StringFilter<"WarrantyClaim"> | string
    status?: StringFilter<"WarrantyClaim"> | string
    resolution?: StringNullableFilter<"WarrantyClaim"> | string | null
    createdById?: StringNullableFilter<"WarrantyClaim"> | string | null
    createdAt?: DateTimeFilter<"WarrantyClaim"> | Date | string
    updatedAt?: DateTimeFilter<"WarrantyClaim"> | Date | string
  }

  export type WarrantyClaimOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    serialNumber?: SortOrder
    customerName?: SortOrderInput | SortOrder
    issueDescription?: SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarrantyClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarrantyClaimWhereInput | WarrantyClaimWhereInput[]
    OR?: WarrantyClaimWhereInput[]
    NOT?: WarrantyClaimWhereInput | WarrantyClaimWhereInput[]
    tenantId?: StringFilter<"WarrantyClaim"> | string
    shopId?: StringFilter<"WarrantyClaim"> | string
    serialNumber?: StringFilter<"WarrantyClaim"> | string
    customerName?: StringNullableFilter<"WarrantyClaim"> | string | null
    issueDescription?: StringFilter<"WarrantyClaim"> | string
    status?: StringFilter<"WarrantyClaim"> | string
    resolution?: StringNullableFilter<"WarrantyClaim"> | string | null
    createdById?: StringNullableFilter<"WarrantyClaim"> | string | null
    createdAt?: DateTimeFilter<"WarrantyClaim"> | Date | string
    updatedAt?: DateTimeFilter<"WarrantyClaim"> | Date | string
  }, "id">

  export type WarrantyClaimOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    serialNumber?: SortOrder
    customerName?: SortOrderInput | SortOrder
    issueDescription?: SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WarrantyClaimCountOrderByAggregateInput
    _max?: WarrantyClaimMaxOrderByAggregateInput
    _min?: WarrantyClaimMinOrderByAggregateInput
  }

  export type WarrantyClaimScalarWhereWithAggregatesInput = {
    AND?: WarrantyClaimScalarWhereWithAggregatesInput | WarrantyClaimScalarWhereWithAggregatesInput[]
    OR?: WarrantyClaimScalarWhereWithAggregatesInput[]
    NOT?: WarrantyClaimScalarWhereWithAggregatesInput | WarrantyClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WarrantyClaim"> | string
    tenantId?: StringWithAggregatesFilter<"WarrantyClaim"> | string
    shopId?: StringWithAggregatesFilter<"WarrantyClaim"> | string
    serialNumber?: StringWithAggregatesFilter<"WarrantyClaim"> | string
    customerName?: StringNullableWithAggregatesFilter<"WarrantyClaim"> | string | null
    issueDescription?: StringWithAggregatesFilter<"WarrantyClaim"> | string
    status?: StringWithAggregatesFilter<"WarrantyClaim"> | string
    resolution?: StringNullableWithAggregatesFilter<"WarrantyClaim"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"WarrantyClaim"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WarrantyClaim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WarrantyClaim"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    tenantId?: StringFilter<"Category"> | string
    shopId?: StringNullableFilter<"Category"> | string | null
    sharedShopIds?: StringNullableListFilter<"Category">
    name?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    createdBy?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    tenantId?: StringFilter<"Category"> | string
    shopId?: StringNullableFilter<"Category"> | string | null
    sharedShopIds?: StringNullableListFilter<"Category">
    name?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    createdBy?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    tenantId?: StringWithAggregatesFilter<"Category"> | string
    shopId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sharedShopIds?: StringNullableListFilter<"Category">
    name?: StringWithAggregatesFilter<"Category"> | string
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    tenantId?: StringFilter<"Brand"> | string
    shopId?: StringNullableFilter<"Brand"> | string | null
    sharedShopIds?: StringNullableListFilter<"Brand">
    name?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    createdBy?: StringNullableFilter<"Brand"> | string | null
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_name?: BrandTenantIdNameCompoundUniqueInput
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    tenantId?: StringFilter<"Brand"> | string
    shopId?: StringNullableFilter<"Brand"> | string | null
    sharedShopIds?: StringNullableListFilter<"Brand">
    name?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    createdBy?: StringNullableFilter<"Brand"> | string | null
    products?: ProductListRelationFilter
  }, "id" | "tenantId_name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrderInput | SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    tenantId?: StringWithAggregatesFilter<"Brand"> | string
    shopId?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    sharedShopIds?: StringNullableListFilter<"Brand">
    name?: StringWithAggregatesFilter<"Brand"> | string
    description?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Brand"> | string | null
  }

  export type ProductPriceWhereInput = {
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    id?: StringFilter<"ProductPrice"> | string
    productId?: StringFilter<"ProductPrice"> | string
    tenantId?: StringFilter<"ProductPrice"> | string
    sellingPrice?: FloatFilter<"ProductPrice"> | number
    validFrom?: DateTimeFilter<"ProductPrice"> | Date | string
    validTo?: DateTimeNullableFilter<"ProductPrice"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductPrice"> | Date | string
    createdBy?: StringNullableFilter<"ProductPrice"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductPriceOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    sellingPrice?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPriceWhereInput | ProductPriceWhereInput[]
    OR?: ProductPriceWhereInput[]
    NOT?: ProductPriceWhereInput | ProductPriceWhereInput[]
    productId?: StringFilter<"ProductPrice"> | string
    tenantId?: StringFilter<"ProductPrice"> | string
    sellingPrice?: FloatFilter<"ProductPrice"> | number
    validFrom?: DateTimeFilter<"ProductPrice"> | Date | string
    validTo?: DateTimeNullableFilter<"ProductPrice"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductPrice"> | Date | string
    createdBy?: StringNullableFilter<"ProductPrice"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductPriceOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    sellingPrice?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: ProductPriceCountOrderByAggregateInput
    _avg?: ProductPriceAvgOrderByAggregateInput
    _max?: ProductPriceMaxOrderByAggregateInput
    _min?: ProductPriceMinOrderByAggregateInput
    _sum?: ProductPriceSumOrderByAggregateInput
  }

  export type ProductPriceScalarWhereWithAggregatesInput = {
    AND?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    OR?: ProductPriceScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceScalarWhereWithAggregatesInput | ProductPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPrice"> | string
    productId?: StringWithAggregatesFilter<"ProductPrice"> | string
    tenantId?: StringWithAggregatesFilter<"ProductPrice"> | string
    sellingPrice?: FloatWithAggregatesFilter<"ProductPrice"> | number
    validFrom?: DateTimeWithAggregatesFilter<"ProductPrice"> | Date | string
    validTo?: DateTimeNullableWithAggregatesFilter<"ProductPrice"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductPrice"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"ProductPrice"> | string | null
  }

  export type InventoryMovementWhereInput = {
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    tenantId?: StringFilter<"InventoryMovement"> | string
    shopId?: StringFilter<"InventoryMovement"> | string
    inventoryItemId?: StringFilter<"InventoryMovement"> | string
    movementType?: StringFilter<"InventoryMovement"> | string
    quantity?: FloatFilter<"InventoryMovement"> | number
    referenceId?: StringNullableFilter<"InventoryMovement"> | string | null
    referenceType?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    createdBy?: StringNullableFilter<"InventoryMovement"> | string | null
  }

  export type InventoryMovementOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
  }

  export type InventoryMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    tenantId?: StringFilter<"InventoryMovement"> | string
    shopId?: StringFilter<"InventoryMovement"> | string
    inventoryItemId?: StringFilter<"InventoryMovement"> | string
    movementType?: StringFilter<"InventoryMovement"> | string
    quantity?: FloatFilter<"InventoryMovement"> | number
    referenceId?: StringNullableFilter<"InventoryMovement"> | string | null
    referenceType?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    createdBy?: StringNullableFilter<"InventoryMovement"> | string | null
  }, "id">

  export type InventoryMovementOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: InventoryMovementCountOrderByAggregateInput
    _avg?: InventoryMovementAvgOrderByAggregateInput
    _max?: InventoryMovementMaxOrderByAggregateInput
    _min?: InventoryMovementMinOrderByAggregateInput
    _sum?: InventoryMovementSumOrderByAggregateInput
  }

  export type InventoryMovementScalarWhereWithAggregatesInput = {
    AND?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    OR?: InventoryMovementScalarWhereWithAggregatesInput[]
    NOT?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryMovement"> | string
    tenantId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    shopId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    inventoryItemId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    movementType?: StringWithAggregatesFilter<"InventoryMovement"> | string
    quantity?: FloatWithAggregatesFilter<"InventoryMovement"> | number
    referenceId?: StringNullableWithAggregatesFilter<"InventoryMovement"> | string | null
    referenceType?: StringNullableWithAggregatesFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryMovement"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"InventoryMovement"> | string | null
  }

  export type InventoryAdjustmentWhereInput = {
    AND?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    OR?: InventoryAdjustmentWhereInput[]
    NOT?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    id?: StringFilter<"InventoryAdjustment"> | string
    tenantId?: StringFilter<"InventoryAdjustment"> | string
    shopId?: StringFilter<"InventoryAdjustment"> | string
    inventoryItemId?: StringFilter<"InventoryAdjustment"> | string
    adjustmentType?: StringFilter<"InventoryAdjustment"> | string
    reason?: StringNullableFilter<"InventoryAdjustment"> | string | null
    quantity?: FloatFilter<"InventoryAdjustment"> | number
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
    createdBy?: StringNullableFilter<"InventoryAdjustment"> | string | null
  }

  export type InventoryAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    adjustmentType?: SortOrder
    reason?: SortOrderInput | SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
  }

  export type InventoryAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    OR?: InventoryAdjustmentWhereInput[]
    NOT?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    tenantId?: StringFilter<"InventoryAdjustment"> | string
    shopId?: StringFilter<"InventoryAdjustment"> | string
    inventoryItemId?: StringFilter<"InventoryAdjustment"> | string
    adjustmentType?: StringFilter<"InventoryAdjustment"> | string
    reason?: StringNullableFilter<"InventoryAdjustment"> | string | null
    quantity?: FloatFilter<"InventoryAdjustment"> | number
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
    createdBy?: StringNullableFilter<"InventoryAdjustment"> | string | null
  }, "id">

  export type InventoryAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    adjustmentType?: SortOrder
    reason?: SortOrderInput | SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: InventoryAdjustmentCountOrderByAggregateInput
    _avg?: InventoryAdjustmentAvgOrderByAggregateInput
    _max?: InventoryAdjustmentMaxOrderByAggregateInput
    _min?: InventoryAdjustmentMinOrderByAggregateInput
    _sum?: InventoryAdjustmentSumOrderByAggregateInput
  }

  export type InventoryAdjustmentScalarWhereWithAggregatesInput = {
    AND?: InventoryAdjustmentScalarWhereWithAggregatesInput | InventoryAdjustmentScalarWhereWithAggregatesInput[]
    OR?: InventoryAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: InventoryAdjustmentScalarWhereWithAggregatesInput | InventoryAdjustmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    tenantId?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    shopId?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    inventoryItemId?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    adjustmentType?: StringWithAggregatesFilter<"InventoryAdjustment"> | string
    reason?: StringNullableWithAggregatesFilter<"InventoryAdjustment"> | string | null
    quantity?: FloatWithAggregatesFilter<"InventoryAdjustment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryAdjustment"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"InventoryAdjustment"> | string | null
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

  export type ProductCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    items?: InventoryItemCreateNestedManyWithoutProductInput
    prices?: ProductPriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    brandId?: string | null
    categoryId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutProductInput
    prices?: ProductPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    items?: InventoryItemUpdateManyWithoutProductNestedInput
    prices?: ProductPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutProductNestedInput
    prices?: ProductPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    brandId?: string | null
    categoryId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    product: ProductCreateNestedOneWithoutItemsInput
    upgrades?: InventoryUpgradeCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    productId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    upgrades?: InventoryUpgradeUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
    upgrades?: InventoryUpgradeUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    upgrades?: InventoryUpgradeUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    productId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUpgradeCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    upgradeType: string
    description?: string | null
    cost: number
    createdAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutUpgradesInput
  }

  export type InventoryUpgradeUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    upgradeType: string
    description?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type InventoryUpgradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutUpgradesNestedInput
  }

  export type InventoryUpgradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUpgradeCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    upgradeType: string
    description?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type InventoryUpgradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUpgradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransferCreateInput = {
    id?: string
    tenantId: string
    fromShopId: string
    toShopId: string
    transferNumber: string
    serialNumber: string
    status?: string
    notes?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransferUncheckedCreateInput = {
    id?: string
    tenantId: string
    fromShopId: string
    toShopId: string
    transferNumber: string
    serialNumber: string
    status?: string
    notes?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fromShopId?: StringFieldUpdateOperationsInput | string
    toShopId?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fromShopId?: StringFieldUpdateOperationsInput | string
    toShopId?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransferCreateManyInput = {
    id?: string
    tenantId: string
    fromShopId: string
    toShopId: string
    transferNumber: string
    serialNumber: string
    status?: string
    notes?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fromShopId?: StringFieldUpdateOperationsInput | string
    toShopId?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fromShopId?: StringFieldUpdateOperationsInput | string
    toShopId?: StringFieldUpdateOperationsInput | string
    transferNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyClaimCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    customerName?: string | null
    issueDescription: string
    status?: string
    resolution?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarrantyClaimUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    customerName?: string | null
    issueDescription: string
    status?: string
    resolution?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarrantyClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyClaimCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    customerName?: string | null
    issueDescription: string
    status?: string
    resolution?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarrantyClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    issueDescription?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: BrandCreatesharedShopIdsInput | string[]
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: BrandCreatesharedShopIdsInput | string[]
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: BrandUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: BrandUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: BrandCreatesharedShopIdsInput | string[]
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: BrandUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: BrandUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceCreateInput = {
    id?: string
    tenantId: string
    sellingPrice: number
    validFrom?: Date | string
    validTo?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
    product: ProductCreateNestedOneWithoutPricesInput
  }

  export type ProductPriceUncheckedCreateInput = {
    id?: string
    productId: string
    tenantId: string
    sellingPrice: number
    validFrom?: Date | string
    validTo?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type ProductPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutPricesNestedInput
  }

  export type ProductPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceCreateManyInput = {
    id?: string
    productId: string
    tenantId: string
    sellingPrice: number
    validFrom?: Date | string
    validTo?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type ProductPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryMovementCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    movementType: string
    quantity?: number
    referenceId?: string | null
    referenceType?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryMovementUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    movementType: string
    quantity?: number
    referenceId?: string | null
    referenceType?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryMovementCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    movementType: string
    quantity?: number
    referenceId?: string | null
    referenceType?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryAdjustmentCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    adjustmentType: string
    reason?: string | null
    quantity?: number
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryAdjustmentUncheckedCreateInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    adjustmentType: string
    reason?: string | null
    quantity?: number
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryAdjustmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    adjustmentType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryAdjustmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    adjustmentType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryAdjustmentCreateManyInput = {
    id?: string
    tenantId: string
    shopId: string
    inventoryItemId: string
    adjustmentType: string
    reason?: string | null
    quantity?: number
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryAdjustmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    adjustmentType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryAdjustmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    adjustmentType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BrandNullableRelationFilter = {
    is?: BrandWhereInput | null
    isNot?: BrandWhereInput | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type ProductPriceListRelationFilter = {
    every?: ProductPriceWhereInput
    some?: ProductPriceWhereInput
    none?: ProductPriceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductTenantIdSkuCompoundUniqueInput = {
    tenantId: string
    sku: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    sharedShopIds?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    productType?: SortOrder
    trackingMethod?: SortOrder
    status?: SortOrder
    specifications?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    productType?: SortOrder
    trackingMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    productType?: SortOrder
    trackingMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
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

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryUpgradeListRelationFilter = {
    every?: InventoryUpgradeWhereInput
    some?: InventoryUpgradeWhereInput
    none?: InventoryUpgradeWhereInput
  }

  export type InventoryUpgradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemTenantIdSerialNumberCompoundUniqueInput = {
    tenantId: string
    serialNumber: string
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    purchaseCost?: SortOrder
    status?: SortOrder
    capitalizedCost?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    purchaseCost?: SortOrder
    capitalizedCost?: SortOrder
    version?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    purchaseCost?: SortOrder
    status?: SortOrder
    capitalizedCost?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    serialNumber?: SortOrder
    purchaseCost?: SortOrder
    status?: SortOrder
    capitalizedCost?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    version?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    purchaseCost?: SortOrder
    capitalizedCost?: SortOrder
    version?: SortOrder
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

  export type InventoryItemRelationFilter = {
    is?: InventoryItemWhereInput
    isNot?: InventoryItemWhereInput
  }

  export type InventoryUpgradeCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    upgradeType?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryUpgradeAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type InventoryUpgradeMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    upgradeType?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryUpgradeMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    upgradeType?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryUpgradeSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type InventoryTransferCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fromShopId?: SortOrder
    toShopId?: SortOrder
    transferNumber?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fromShopId?: SortOrder
    toShopId?: SortOrder
    transferNumber?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransferMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fromShopId?: SortOrder
    toShopId?: SortOrder
    transferNumber?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarrantyClaimCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    serialNumber?: SortOrder
    customerName?: SortOrder
    issueDescription?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarrantyClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    serialNumber?: SortOrder
    customerName?: SortOrder
    issueDescription?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarrantyClaimMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    serialNumber?: SortOrder
    customerName?: SortOrder
    issueDescription?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type BrandTenantIdNameCompoundUniqueInput = {
    tenantId: string
    name: string
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    sharedShopIds?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductPriceCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    sellingPrice?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductPriceAvgOrderByAggregateInput = {
    sellingPrice?: SortOrder
  }

  export type ProductPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    sellingPrice?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductPriceMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tenantId?: SortOrder
    sellingPrice?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductPriceSumOrderByAggregateInput = {
    sellingPrice?: SortOrder
  }

  export type InventoryMovementCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventoryMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventoryMovementMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventoryMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    adjustmentType?: SortOrder
    reason?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventoryAdjustmentAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    adjustmentType?: SortOrder
    reason?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventoryAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    shopId?: SortOrder
    inventoryItemId?: SortOrder
    adjustmentType?: SortOrder
    reason?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventoryAdjustmentSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type ProductCreatesharedShopIdsInput = {
    set: string[]
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type InventoryItemCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryItemCreateWithoutProductInput, InventoryItemUncheckedCreateWithoutProductInput> | InventoryItemCreateWithoutProductInput[] | InventoryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProductInput | InventoryItemCreateOrConnectWithoutProductInput[]
    createMany?: InventoryItemCreateManyProductInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type ProductPriceCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryItemCreateWithoutProductInput, InventoryItemUncheckedCreateWithoutProductInput> | InventoryItemCreateWithoutProductInput[] | InventoryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProductInput | InventoryItemCreateOrConnectWithoutProductInput[]
    createMany?: InventoryItemCreateManyProductInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type ProductPriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdatesharedShopIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type BrandUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    disconnect?: BrandWhereInput | boolean
    delete?: BrandWhereInput | boolean
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type InventoryItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryItemCreateWithoutProductInput, InventoryItemUncheckedCreateWithoutProductInput> | InventoryItemCreateWithoutProductInput[] | InventoryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProductInput | InventoryItemCreateOrConnectWithoutProductInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutProductInput | InventoryItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryItemCreateManyProductInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutProductInput | InventoryItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutProductInput | InventoryItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type ProductPriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutProductInput | ProductPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutProductInput | ProductPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutProductInput | ProductPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryItemCreateWithoutProductInput, InventoryItemUncheckedCreateWithoutProductInput> | InventoryItemCreateWithoutProductInput[] | InventoryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProductInput | InventoryItemCreateOrConnectWithoutProductInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutProductInput | InventoryItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryItemCreateManyProductInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutProductInput | InventoryItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutProductInput | InventoryItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type ProductPriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput> | ProductPriceCreateWithoutProductInput[] | ProductPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceCreateOrConnectWithoutProductInput | ProductPriceCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceUpsertWithWhereUniqueWithoutProductInput | ProductPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceCreateManyProductInputEnvelope
    set?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    disconnect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    delete?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    connect?: ProductPriceWhereUniqueInput | ProductPriceWhereUniqueInput[]
    update?: ProductPriceUpdateWithWhereUniqueWithoutProductInput | ProductPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceUpdateManyWithWhereWithoutProductInput | ProductPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type InventoryUpgradeCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryUpgradeCreateWithoutInventoryItemInput, InventoryUpgradeUncheckedCreateWithoutInventoryItemInput> | InventoryUpgradeCreateWithoutInventoryItemInput[] | InventoryUpgradeUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryUpgradeCreateOrConnectWithoutInventoryItemInput | InventoryUpgradeCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryUpgradeCreateManyInventoryItemInputEnvelope
    connect?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
  }

  export type InventoryUpgradeUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryUpgradeCreateWithoutInventoryItemInput, InventoryUpgradeUncheckedCreateWithoutInventoryItemInput> | InventoryUpgradeCreateWithoutInventoryItemInput[] | InventoryUpgradeUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryUpgradeCreateOrConnectWithoutInventoryItemInput | InventoryUpgradeCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryUpgradeCreateManyInventoryItemInputEnvelope
    connect?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    upsert?: ProductUpsertWithoutItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutItemsInput, ProductUpdateWithoutItemsInput>, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type InventoryUpgradeUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryUpgradeCreateWithoutInventoryItemInput, InventoryUpgradeUncheckedCreateWithoutInventoryItemInput> | InventoryUpgradeCreateWithoutInventoryItemInput[] | InventoryUpgradeUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryUpgradeCreateOrConnectWithoutInventoryItemInput | InventoryUpgradeCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryUpgradeUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryUpgradeUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryUpgradeCreateManyInventoryItemInputEnvelope
    set?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    disconnect?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    delete?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    connect?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    update?: InventoryUpgradeUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryUpgradeUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryUpgradeUpdateManyWithWhereWithoutInventoryItemInput | InventoryUpgradeUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryUpgradeScalarWhereInput | InventoryUpgradeScalarWhereInput[]
  }

  export type InventoryUpgradeUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryUpgradeCreateWithoutInventoryItemInput, InventoryUpgradeUncheckedCreateWithoutInventoryItemInput> | InventoryUpgradeCreateWithoutInventoryItemInput[] | InventoryUpgradeUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryUpgradeCreateOrConnectWithoutInventoryItemInput | InventoryUpgradeCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryUpgradeUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryUpgradeUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryUpgradeCreateManyInventoryItemInputEnvelope
    set?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    disconnect?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    delete?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    connect?: InventoryUpgradeWhereUniqueInput | InventoryUpgradeWhereUniqueInput[]
    update?: InventoryUpgradeUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryUpgradeUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryUpgradeUpdateManyWithWhereWithoutInventoryItemInput | InventoryUpgradeUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryUpgradeScalarWhereInput | InventoryUpgradeScalarWhereInput[]
  }

  export type InventoryItemCreateNestedOneWithoutUpgradesInput = {
    create?: XOR<InventoryItemCreateWithoutUpgradesInput, InventoryItemUncheckedCreateWithoutUpgradesInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUpgradesInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type InventoryItemUpdateOneRequiredWithoutUpgradesNestedInput = {
    create?: XOR<InventoryItemCreateWithoutUpgradesInput, InventoryItemUncheckedCreateWithoutUpgradesInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUpgradesInput
    upsert?: InventoryItemUpsertWithoutUpgradesInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutUpgradesInput, InventoryItemUpdateWithoutUpgradesInput>, InventoryItemUncheckedUpdateWithoutUpgradesInput>
  }

  export type CategoryCreatesharedShopIdsInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUpdatesharedShopIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCreatesharedShopIdsInput = {
    set: string[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandUpdatesharedShopIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPricesInput = {
    create?: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
    upsert?: ProductUpsertWithoutPricesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPricesInput, ProductUpdateWithoutPricesInput>, ProductUncheckedUpdateWithoutPricesInput>
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

  export type BrandCreateWithoutProductsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: BrandCreatesharedShopIdsInput | string[]
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: BrandCreatesharedShopIdsInput | string[]
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type InventoryItemCreateWithoutProductInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    upgrades?: InventoryUpgradeCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutProductInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    upgrades?: InventoryUpgradeUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutProductInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutProductInput, InventoryItemUncheckedCreateWithoutProductInput>
  }

  export type InventoryItemCreateManyProductInputEnvelope = {
    data: InventoryItemCreateManyProductInput | InventoryItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductPriceCreateWithoutProductInput = {
    id?: string
    tenantId: string
    sellingPrice: number
    validFrom?: Date | string
    validTo?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type ProductPriceUncheckedCreateWithoutProductInput = {
    id?: string
    tenantId: string
    sellingPrice: number
    validFrom?: Date | string
    validTo?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type ProductPriceCreateOrConnectWithoutProductInput = {
    where: ProductPriceWhereUniqueInput
    create: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceCreateManyProductInputEnvelope = {
    data: ProductPriceCreateManyProductInput | ProductPriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: BrandUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: BrandUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutProductInput, InventoryItemUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryItemCreateWithoutProductInput, InventoryItemUncheckedCreateWithoutProductInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutProductInput, InventoryItemUncheckedUpdateWithoutProductInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutProductInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    tenantId?: StringFilter<"InventoryItem"> | string
    shopId?: StringFilter<"InventoryItem"> | string
    productId?: StringFilter<"InventoryItem"> | string
    serialNumber?: StringFilter<"InventoryItem"> | string
    purchaseCost?: FloatFilter<"InventoryItem"> | number
    status?: StringFilter<"InventoryItem"> | string
    capitalizedCost?: FloatFilter<"InventoryItem"> | number
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    createdBy?: StringNullableFilter<"InventoryItem"> | string | null
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedBy?: StringNullableFilter<"InventoryItem"> | string | null
    deletedAt?: DateTimeNullableFilter<"InventoryItem"> | Date | string | null
    deletedBy?: StringNullableFilter<"InventoryItem"> | string | null
    version?: IntFilter<"InventoryItem"> | number
  }

  export type ProductPriceUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPriceWhereUniqueInput
    update: XOR<ProductPriceUpdateWithoutProductInput, ProductPriceUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPriceCreateWithoutProductInput, ProductPriceUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPriceWhereUniqueInput
    data: XOR<ProductPriceUpdateWithoutProductInput, ProductPriceUncheckedUpdateWithoutProductInput>
  }

  export type ProductPriceUpdateManyWithWhereWithoutProductInput = {
    where: ProductPriceScalarWhereInput
    data: XOR<ProductPriceUpdateManyMutationInput, ProductPriceUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPriceScalarWhereInput = {
    AND?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    OR?: ProductPriceScalarWhereInput[]
    NOT?: ProductPriceScalarWhereInput | ProductPriceScalarWhereInput[]
    id?: StringFilter<"ProductPrice"> | string
    productId?: StringFilter<"ProductPrice"> | string
    tenantId?: StringFilter<"ProductPrice"> | string
    sellingPrice?: FloatFilter<"ProductPrice"> | number
    validFrom?: DateTimeFilter<"ProductPrice"> | Date | string
    validTo?: DateTimeNullableFilter<"ProductPrice"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductPrice"> | Date | string
    createdBy?: StringNullableFilter<"ProductPrice"> | string | null
  }

  export type ProductCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    prices?: ProductPriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutItemsInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    brandId?: string | null
    categoryId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    prices?: ProductPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
  }

  export type InventoryUpgradeCreateWithoutInventoryItemInput = {
    id?: string
    tenantId: string
    shopId: string
    upgradeType: string
    description?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type InventoryUpgradeUncheckedCreateWithoutInventoryItemInput = {
    id?: string
    tenantId: string
    shopId: string
    upgradeType: string
    description?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type InventoryUpgradeCreateOrConnectWithoutInventoryItemInput = {
    where: InventoryUpgradeWhereUniqueInput
    create: XOR<InventoryUpgradeCreateWithoutInventoryItemInput, InventoryUpgradeUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryUpgradeCreateManyInventoryItemInputEnvelope = {
    data: InventoryUpgradeCreateManyInventoryItemInput | InventoryUpgradeCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutItemsInput = {
    update: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    prices?: ProductPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    prices?: ProductPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type InventoryUpgradeUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryUpgradeWhereUniqueInput
    update: XOR<InventoryUpgradeUpdateWithoutInventoryItemInput, InventoryUpgradeUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<InventoryUpgradeCreateWithoutInventoryItemInput, InventoryUpgradeUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryUpgradeUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryUpgradeWhereUniqueInput
    data: XOR<InventoryUpgradeUpdateWithoutInventoryItemInput, InventoryUpgradeUncheckedUpdateWithoutInventoryItemInput>
  }

  export type InventoryUpgradeUpdateManyWithWhereWithoutInventoryItemInput = {
    where: InventoryUpgradeScalarWhereInput
    data: XOR<InventoryUpgradeUpdateManyMutationInput, InventoryUpgradeUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type InventoryUpgradeScalarWhereInput = {
    AND?: InventoryUpgradeScalarWhereInput | InventoryUpgradeScalarWhereInput[]
    OR?: InventoryUpgradeScalarWhereInput[]
    NOT?: InventoryUpgradeScalarWhereInput | InventoryUpgradeScalarWhereInput[]
    id?: StringFilter<"InventoryUpgrade"> | string
    tenantId?: StringFilter<"InventoryUpgrade"> | string
    shopId?: StringFilter<"InventoryUpgrade"> | string
    inventoryItemId?: StringFilter<"InventoryUpgrade"> | string
    upgradeType?: StringFilter<"InventoryUpgrade"> | string
    description?: StringNullableFilter<"InventoryUpgrade"> | string | null
    cost?: FloatFilter<"InventoryUpgrade"> | number
    createdAt?: DateTimeFilter<"InventoryUpgrade"> | Date | string
  }

  export type InventoryItemCreateWithoutUpgradesInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    product: ProductCreateNestedOneWithoutItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutUpgradesInput = {
    id?: string
    tenantId: string
    shopId: string
    productId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type InventoryItemCreateOrConnectWithoutUpgradesInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutUpgradesInput, InventoryItemUncheckedCreateWithoutUpgradesInput>
  }

  export type InventoryItemUpsertWithoutUpgradesInput = {
    update: XOR<InventoryItemUpdateWithoutUpgradesInput, InventoryItemUncheckedUpdateWithoutUpgradesInput>
    create: XOR<InventoryItemCreateWithoutUpgradesInput, InventoryItemUncheckedCreateWithoutUpgradesInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutUpgradesInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutUpgradesInput, InventoryItemUncheckedUpdateWithoutUpgradesInput>
  }

  export type InventoryItemUpdateWithoutUpgradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutUpgradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    parentId?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    brand?: BrandCreateNestedOneWithoutProductsInput
    items?: InventoryItemCreateNestedManyWithoutProductInput
    prices?: ProductPriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    brandId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutProductInput
    prices?: ProductPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    tenantId?: StringFilter<"Category"> | string
    shopId?: StringNullableFilter<"Category"> | string | null
    sharedShopIds?: StringNullableListFilter<"Category">
    name?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    createdBy?: StringNullableFilter<"Category"> | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    tenantId?: StringFilter<"Product"> | string
    shopId?: StringNullableFilter<"Product"> | string | null
    sharedShopIds?: StringNullableListFilter<"Product">
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    brandId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    productType?: StringFilter<"Product"> | string
    trackingMethod?: StringFilter<"Product"> | string
    status?: StringFilter<"Product"> | string
    specifications?: JsonNullableFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdBy?: StringNullableFilter<"Product"> | string | null
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: StringNullableFilter<"Product"> | string | null
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    deletedBy?: StringNullableFilter<"Product"> | string | null
    version?: IntFilter<"Product"> | number
  }

  export type ProductCreateWithoutBrandInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    category?: CategoryCreateNestedOneWithoutProductsInput
    items?: InventoryItemCreateNestedManyWithoutProductInput
    prices?: ProductPriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    categoryId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutProductInput
    prices?: ProductPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductCreateWithoutPricesInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    items?: InventoryItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPricesInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    brandId?: string | null
    categoryId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
    items?: InventoryItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPricesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
  }

  export type ProductUpsertWithoutPricesInput = {
    update: XOR<ProductUpdateWithoutPricesInput, ProductUncheckedUpdateWithoutPricesInput>
    create: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPricesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPricesInput, ProductUncheckedUpdateWithoutPricesInput>
  }

  export type ProductUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    items?: InventoryItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type InventoryItemCreateManyProductInput = {
    id?: string
    tenantId: string
    shopId: string
    serialNumber: string
    purchaseCost: number
    status?: string
    capitalizedCost?: number
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type ProductPriceCreateManyProductInput = {
    id?: string
    tenantId: string
    sellingPrice: number
    validFrom?: Date | string
    validTo?: Date | string | null
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type InventoryItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    upgrades?: InventoryUpgradeUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    upgrades?: InventoryUpgradeUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    purchaseCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitalizedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ProductPriceUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductPriceUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUpgradeCreateManyInventoryItemInput = {
    id?: string
    tenantId: string
    shopId: string
    upgradeType: string
    description?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type InventoryUpgradeUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUpgradeUncheckedUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUpgradeUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    upgradeType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: CategoryCreatesharedShopIdsInput | string[]
    name: string
    createdAt?: Date | string
    createdBy?: string | null
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    brandId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: CategoryUpdatesharedShopIdsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    brand?: BrandUpdateOneWithoutProductsNestedInput
    items?: InventoryItemUpdateManyWithoutProductNestedInput
    prices?: ProductPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutProductNestedInput
    prices?: ProductPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyBrandInput = {
    id?: string
    tenantId: string
    shopId?: string | null
    sharedShopIds?: ProductCreatesharedShopIdsInput | string[]
    sku: string
    name: string
    description?: string | null
    categoryId?: string | null
    productType?: string
    trackingMethod?: string
    status?: string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    version?: number
  }

  export type ProductUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutProductsNestedInput
    items?: InventoryItemUpdateManyWithoutProductNestedInput
    prices?: ProductPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    items?: InventoryItemUncheckedUpdateManyWithoutProductNestedInput
    prices?: ProductPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    sharedShopIds?: ProductUpdatesharedShopIdsInput | string[]
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: StringFieldUpdateOperationsInput | string
    trackingMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    specifications?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryItemCountOutputTypeDefaultArgs instead
     */
    export type InventoryItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandCountOutputTypeDefaultArgs instead
     */
    export type BrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryItemDefaultArgs instead
     */
    export type InventoryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryUpgradeDefaultArgs instead
     */
    export type InventoryUpgradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryUpgradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryTransferDefaultArgs instead
     */
    export type InventoryTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryTransferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarrantyClaimDefaultArgs instead
     */
    export type WarrantyClaimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarrantyClaimDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandDefaultArgs instead
     */
    export type BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductPriceDefaultArgs instead
     */
    export type ProductPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductPriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryMovementDefaultArgs instead
     */
    export type InventoryMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryMovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryAdjustmentDefaultArgs instead
     */
    export type InventoryAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryAdjustmentDefaultArgs<ExtArgs>
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