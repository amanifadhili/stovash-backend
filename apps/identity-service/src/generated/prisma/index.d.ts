
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPermission
 * 
 */
export type UserPermission = $Result.DefaultSelection<Prisma.$UserPermissionPayload>
/**
 * Model PermissionTemplate
 * 
 */
export type PermissionTemplate = $Result.DefaultSelection<Prisma.$PermissionTemplatePayload>
/**
 * Model TemplatePermission
 * 
 */
export type TemplatePermission = $Result.DefaultSelection<Prisma.$TemplatePermissionPayload>
/**
 * Model UserTemplateAssignment
 * 
 */
export type UserTemplateAssignment = $Result.DefaultSelection<Prisma.$UserTemplateAssignmentPayload>
/**
 * Model PermissionAuditLog
 * 
 */
export type PermissionAuditLog = $Result.DefaultSelection<Prisma.$PermissionAuditLogPayload>
/**
 * Model Credential
 * 
 */
export type Credential = $Result.DefaultSelection<Prisma.$CredentialPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model MfaSecret
 * 
 */
export type MfaSecret = $Result.DefaultSelection<Prisma.$MfaSecretPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userPermission`: Exposes CRUD operations for the **UserPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPermissions
    * const userPermissions = await prisma.userPermission.findMany()
    * ```
    */
  get userPermission(): Prisma.UserPermissionDelegate<ExtArgs>;

  /**
   * `prisma.permissionTemplate`: Exposes CRUD operations for the **PermissionTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionTemplates
    * const permissionTemplates = await prisma.permissionTemplate.findMany()
    * ```
    */
  get permissionTemplate(): Prisma.PermissionTemplateDelegate<ExtArgs>;

  /**
   * `prisma.templatePermission`: Exposes CRUD operations for the **TemplatePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplatePermissions
    * const templatePermissions = await prisma.templatePermission.findMany()
    * ```
    */
  get templatePermission(): Prisma.TemplatePermissionDelegate<ExtArgs>;

  /**
   * `prisma.userTemplateAssignment`: Exposes CRUD operations for the **UserTemplateAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTemplateAssignments
    * const userTemplateAssignments = await prisma.userTemplateAssignment.findMany()
    * ```
    */
  get userTemplateAssignment(): Prisma.UserTemplateAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.permissionAuditLog`: Exposes CRUD operations for the **PermissionAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionAuditLogs
    * const permissionAuditLogs = await prisma.permissionAuditLog.findMany()
    * ```
    */
  get permissionAuditLog(): Prisma.PermissionAuditLogDelegate<ExtArgs>;

  /**
   * `prisma.credential`: Exposes CRUD operations for the **Credential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credential.findMany()
    * ```
    */
  get credential(): Prisma.CredentialDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;

  /**
   * `prisma.mfaSecret`: Exposes CRUD operations for the **MfaSecret** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MfaSecrets
    * const mfaSecrets = await prisma.mfaSecret.findMany()
    * ```
    */
  get mfaSecret(): Prisma.MfaSecretDelegate<ExtArgs>;
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
    User: 'User',
    UserPermission: 'UserPermission',
    PermissionTemplate: 'PermissionTemplate',
    TemplatePermission: 'TemplatePermission',
    UserTemplateAssignment: 'UserTemplateAssignment',
    PermissionAuditLog: 'PermissionAuditLog',
    Credential: 'Credential',
    Session: 'Session',
    Token: 'Token',
    MfaSecret: 'MfaSecret'
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
      modelProps: "user" | "userPermission" | "permissionTemplate" | "templatePermission" | "userTemplateAssignment" | "permissionAuditLog" | "credential" | "session" | "token" | "mfaSecret"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPermission: {
        payload: Prisma.$UserPermissionPayload<ExtArgs>
        fields: Prisma.UserPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findFirst: {
            args: Prisma.UserPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findMany: {
            args: Prisma.UserPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          create: {
            args: Prisma.UserPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          createMany: {
            args: Prisma.UserPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          delete: {
            args: Prisma.UserPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          update: {
            args: Prisma.UserPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          deleteMany: {
            args: Prisma.UserPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          aggregate: {
            args: Prisma.UserPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPermission>
          }
          groupBy: {
            args: Prisma.UserPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionCountAggregateOutputType> | number
          }
        }
      }
      PermissionTemplate: {
        payload: Prisma.$PermissionTemplatePayload<ExtArgs>
        fields: Prisma.PermissionTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>
          }
          findFirst: {
            args: Prisma.PermissionTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>
          }
          findMany: {
            args: Prisma.PermissionTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>[]
          }
          create: {
            args: Prisma.PermissionTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>
          }
          createMany: {
            args: Prisma.PermissionTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>[]
          }
          delete: {
            args: Prisma.PermissionTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>
          }
          update: {
            args: Prisma.PermissionTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PermissionTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionTemplatePayload>
          }
          aggregate: {
            args: Prisma.PermissionTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionTemplate>
          }
          groupBy: {
            args: Prisma.PermissionTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionTemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplatePermission: {
        payload: Prisma.$TemplatePermissionPayload<ExtArgs>
        fields: Prisma.TemplatePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplatePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplatePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>
          }
          findFirst: {
            args: Prisma.TemplatePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplatePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>
          }
          findMany: {
            args: Prisma.TemplatePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>[]
          }
          create: {
            args: Prisma.TemplatePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>
          }
          createMany: {
            args: Prisma.TemplatePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplatePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>[]
          }
          delete: {
            args: Prisma.TemplatePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>
          }
          update: {
            args: Prisma.TemplatePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>
          }
          deleteMany: {
            args: Prisma.TemplatePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplatePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplatePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePermissionPayload>
          }
          aggregate: {
            args: Prisma.TemplatePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplatePermission>
          }
          groupBy: {
            args: Prisma.TemplatePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplatePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplatePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<TemplatePermissionCountAggregateOutputType> | number
          }
        }
      }
      UserTemplateAssignment: {
        payload: Prisma.$UserTemplateAssignmentPayload<ExtArgs>
        fields: Prisma.UserTemplateAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTemplateAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTemplateAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>
          }
          findFirst: {
            args: Prisma.UserTemplateAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTemplateAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>
          }
          findMany: {
            args: Prisma.UserTemplateAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>[]
          }
          create: {
            args: Prisma.UserTemplateAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>
          }
          createMany: {
            args: Prisma.UserTemplateAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTemplateAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>[]
          }
          delete: {
            args: Prisma.UserTemplateAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>
          }
          update: {
            args: Prisma.UserTemplateAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.UserTemplateAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTemplateAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserTemplateAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplateAssignmentPayload>
          }
          aggregate: {
            args: Prisma.UserTemplateAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTemplateAssignment>
          }
          groupBy: {
            args: Prisma.UserTemplateAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTemplateAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTemplateAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<UserTemplateAssignmentCountAggregateOutputType> | number
          }
        }
      }
      PermissionAuditLog: {
        payload: Prisma.$PermissionAuditLogPayload<ExtArgs>
        fields: Prisma.PermissionAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>
          }
          findFirst: {
            args: Prisma.PermissionAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>
          }
          findMany: {
            args: Prisma.PermissionAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>[]
          }
          create: {
            args: Prisma.PermissionAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>
          }
          createMany: {
            args: Prisma.PermissionAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>[]
          }
          delete: {
            args: Prisma.PermissionAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>
          }
          update: {
            args: Prisma.PermissionAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.PermissionAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionAuditLogPayload>
          }
          aggregate: {
            args: Prisma.PermissionAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionAuditLog>
          }
          groupBy: {
            args: Prisma.PermissionAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionAuditLogCountAggregateOutputType> | number
          }
        }
      }
      Credential: {
        payload: Prisma.$CredentialPayload<ExtArgs>
        fields: Prisma.CredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findFirst: {
            args: Prisma.CredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findMany: {
            args: Prisma.CredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          create: {
            args: Prisma.CredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          createMany: {
            args: Prisma.CredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          delete: {
            args: Prisma.CredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          update: {
            args: Prisma.CredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          deleteMany: {
            args: Prisma.CredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          aggregate: {
            args: Prisma.CredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredential>
          }
          groupBy: {
            args: Prisma.CredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      MfaSecret: {
        payload: Prisma.$MfaSecretPayload<ExtArgs>
        fields: Prisma.MfaSecretFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MfaSecretFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MfaSecretFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>
          }
          findFirst: {
            args: Prisma.MfaSecretFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MfaSecretFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>
          }
          findMany: {
            args: Prisma.MfaSecretFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>[]
          }
          create: {
            args: Prisma.MfaSecretCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>
          }
          createMany: {
            args: Prisma.MfaSecretCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MfaSecretCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>[]
          }
          delete: {
            args: Prisma.MfaSecretDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>
          }
          update: {
            args: Prisma.MfaSecretUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>
          }
          deleteMany: {
            args: Prisma.MfaSecretDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MfaSecretUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MfaSecretUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfaSecretPayload>
          }
          aggregate: {
            args: Prisma.MfaSecretAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMfaSecret>
          }
          groupBy: {
            args: Prisma.MfaSecretGroupByArgs<ExtArgs>
            result: $Utils.Optional<MfaSecretGroupByOutputType>[]
          }
          count: {
            args: Prisma.MfaSecretCountArgs<ExtArgs>
            result: $Utils.Optional<MfaSecretCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userPermissions: number
    userTemplateAssignments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPermissions?: boolean | UserCountOutputTypeCountUserPermissionsArgs
    userTemplateAssignments?: boolean | UserCountOutputTypeCountUserTemplateAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTemplateAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTemplateAssignmentWhereInput
  }


  /**
   * Count Type PermissionTemplateCountOutputType
   */

  export type PermissionTemplateCountOutputType = {
    templatePermissions: number
    userTemplateAssignments: number
  }

  export type PermissionTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templatePermissions?: boolean | PermissionTemplateCountOutputTypeCountTemplatePermissionsArgs
    userTemplateAssignments?: boolean | PermissionTemplateCountOutputTypeCountUserTemplateAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * PermissionTemplateCountOutputType without action
   */
  export type PermissionTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplateCountOutputType
     */
    select?: PermissionTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionTemplateCountOutputType without action
   */
  export type PermissionTemplateCountOutputTypeCountTemplatePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplatePermissionWhereInput
  }

  /**
   * PermissionTemplateCountOutputType without action
   */
  export type PermissionTemplateCountOutputTypeCountUserTemplateAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTemplateAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userPermissions?: boolean | User$userPermissionsArgs<ExtArgs>
    userTemplateAssignments?: boolean | User$userTemplateAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPermissions?: boolean | User$userPermissionsArgs<ExtArgs>
    userTemplateAssignments?: boolean | User$userTemplateAssignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userPermissions: Prisma.$UserPermissionPayload<ExtArgs>[]
      userTemplateAssignments: Prisma.$UserTemplateAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPermissions<T extends User$userPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany"> | Null>
    userTemplateAssignments<T extends User$userTemplateAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$userTemplateAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.userPermissions
   */
  export type User$userPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * User.userTemplateAssignments
   */
  export type User$userTemplateAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    where?: UserTemplateAssignmentWhereInput
    orderBy?: UserTemplateAssignmentOrderByWithRelationInput | UserTemplateAssignmentOrderByWithRelationInput[]
    cursor?: UserTemplateAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTemplateAssignmentScalarFieldEnum | UserTemplateAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPermission
   */

  export type AggregateUserPermission = {
    _count: UserPermissionCountAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  export type UserPermissionMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    permissionKey: string | null
    isGranted: boolean | null
    scope: string | null
    grantedAt: Date | null
    expiresAt: Date | null
    grantedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPermissionMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    permissionKey: string | null
    isGranted: boolean | null
    scope: string | null
    grantedAt: Date | null
    expiresAt: Date | null
    grantedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPermissionCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    permissionKey: number
    isGranted: number
    scope: number
    allowedShopIds: number
    grantedAt: number
    expiresAt: number
    grantedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPermissionMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    permissionKey?: true
    isGranted?: true
    scope?: true
    grantedAt?: true
    expiresAt?: true
    grantedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPermissionMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    permissionKey?: true
    isGranted?: true
    scope?: true
    grantedAt?: true
    expiresAt?: true
    grantedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPermissionCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    permissionKey?: true
    isGranted?: true
    scope?: true
    allowedShopIds?: true
    grantedAt?: true
    expiresAt?: true
    grantedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermission to aggregate.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPermissions
    **/
    _count?: true | UserPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPermissionMaxAggregateInputType
  }

  export type GetUserPermissionAggregateType<T extends UserPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPermission[P]>
      : GetScalarType<T[P], AggregateUserPermission[P]>
  }




  export type UserPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithAggregationInput | UserPermissionOrderByWithAggregationInput[]
    by: UserPermissionScalarFieldEnum[] | UserPermissionScalarFieldEnum
    having?: UserPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPermissionCountAggregateInputType | true
    _min?: UserPermissionMinAggregateInputType
    _max?: UserPermissionMaxAggregateInputType
  }

  export type UserPermissionGroupByOutputType = {
    id: string
    tenantId: string
    userId: string
    permissionKey: string
    isGranted: boolean
    scope: string
    allowedShopIds: string[]
    grantedAt: Date
    expiresAt: Date | null
    grantedBy: string
    createdAt: Date
    updatedAt: Date
    _count: UserPermissionCountAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  type GetUserPermissionGroupByPayload<T extends UserPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    permissionKey?: boolean
    isGranted?: boolean
    scope?: boolean
    allowedShopIds?: boolean
    grantedAt?: boolean
    expiresAt?: boolean
    grantedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    permissionKey?: boolean
    isGranted?: boolean
    scope?: boolean
    allowedShopIds?: boolean
    grantedAt?: boolean
    expiresAt?: boolean
    grantedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    permissionKey?: boolean
    isGranted?: boolean
    scope?: boolean
    allowedShopIds?: boolean
    grantedAt?: boolean
    expiresAt?: boolean
    grantedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPermission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string
      permissionKey: string
      isGranted: boolean
      scope: string
      allowedShopIds: string[]
      grantedAt: Date
      expiresAt: Date | null
      grantedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPermission"]>
    composites: {}
  }

  type UserPermissionGetPayload<S extends boolean | null | undefined | UserPermissionDefaultArgs> = $Result.GetResult<Prisma.$UserPermissionPayload, S>

  type UserPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPermissionCountAggregateInputType | true
    }

  export interface UserPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPermission'], meta: { name: 'UserPermission' } }
    /**
     * Find zero or one UserPermission that matches the filter.
     * @param {UserPermissionFindUniqueArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPermissionFindUniqueArgs>(args: SelectSubset<T, UserPermissionFindUniqueArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPermissionFindUniqueOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPermissionFindFirstArgs>(args?: SelectSubset<T, UserPermissionFindFirstArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPermissions
     * const userPermissions = await prisma.userPermission.findMany()
     * 
     * // Get first 10 UserPermissions
     * const userPermissions = await prisma.userPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPermissionWithIdOnly = await prisma.userPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPermissionFindManyArgs>(args?: SelectSubset<T, UserPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPermission.
     * @param {UserPermissionCreateArgs} args - Arguments to create a UserPermission.
     * @example
     * // Create one UserPermission
     * const UserPermission = await prisma.userPermission.create({
     *   data: {
     *     // ... data to create a UserPermission
     *   }
     * })
     * 
     */
    create<T extends UserPermissionCreateArgs>(args: SelectSubset<T, UserPermissionCreateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPermissions.
     * @param {UserPermissionCreateManyArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPermissionCreateManyArgs>(args?: SelectSubset<T, UserPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPermissions and returns the data saved in the database.
     * @param {UserPermissionCreateManyAndReturnArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPermissions and only return the `id`
     * const userPermissionWithIdOnly = await prisma.userPermission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPermission.
     * @param {UserPermissionDeleteArgs} args - Arguments to delete one UserPermission.
     * @example
     * // Delete one UserPermission
     * const UserPermission = await prisma.userPermission.delete({
     *   where: {
     *     // ... filter to delete one UserPermission
     *   }
     * })
     * 
     */
    delete<T extends UserPermissionDeleteArgs>(args: SelectSubset<T, UserPermissionDeleteArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPermission.
     * @param {UserPermissionUpdateArgs} args - Arguments to update one UserPermission.
     * @example
     * // Update one UserPermission
     * const userPermission = await prisma.userPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPermissionUpdateArgs>(args: SelectSubset<T, UserPermissionUpdateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPermissions.
     * @param {UserPermissionDeleteManyArgs} args - Arguments to filter UserPermissions to delete.
     * @example
     * // Delete a few UserPermissions
     * const { count } = await prisma.userPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPermissionDeleteManyArgs>(args?: SelectSubset<T, UserPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPermissions
     * const userPermission = await prisma.userPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPermissionUpdateManyArgs>(args: SelectSubset<T, UserPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPermission.
     * @param {UserPermissionUpsertArgs} args - Arguments to update or create a UserPermission.
     * @example
     * // Update or create a UserPermission
     * const userPermission = await prisma.userPermission.upsert({
     *   create: {
     *     // ... data to create a UserPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPermission we want to update
     *   }
     * })
     */
    upsert<T extends UserPermissionUpsertArgs>(args: SelectSubset<T, UserPermissionUpsertArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionCountArgs} args - Arguments to filter UserPermissions to count.
     * @example
     * // Count the number of UserPermissions
     * const count = await prisma.userPermission.count({
     *   where: {
     *     // ... the filter for the UserPermissions we want to count
     *   }
     * })
    **/
    count<T extends UserPermissionCountArgs>(
      args?: Subset<T, UserPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPermissionAggregateArgs>(args: Subset<T, UserPermissionAggregateArgs>): Prisma.PrismaPromise<GetUserPermissionAggregateType<T>>

    /**
     * Group by UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionGroupByArgs} args - Group by arguments.
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
      T extends UserPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPermission model
   */
  readonly fields: UserPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserPermission model
   */ 
  interface UserPermissionFieldRefs {
    readonly id: FieldRef<"UserPermission", 'String'>
    readonly tenantId: FieldRef<"UserPermission", 'String'>
    readonly userId: FieldRef<"UserPermission", 'String'>
    readonly permissionKey: FieldRef<"UserPermission", 'String'>
    readonly isGranted: FieldRef<"UserPermission", 'Boolean'>
    readonly scope: FieldRef<"UserPermission", 'String'>
    readonly allowedShopIds: FieldRef<"UserPermission", 'String[]'>
    readonly grantedAt: FieldRef<"UserPermission", 'DateTime'>
    readonly expiresAt: FieldRef<"UserPermission", 'DateTime'>
    readonly grantedBy: FieldRef<"UserPermission", 'String'>
    readonly createdAt: FieldRef<"UserPermission", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPermission findUnique
   */
  export type UserPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findUniqueOrThrow
   */
  export type UserPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findFirst
   */
  export type UserPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findFirstOrThrow
   */
  export type UserPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findMany
   */
  export type UserPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermissions to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission create
   */
  export type UserPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPermission.
     */
    data: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
  }

  /**
   * UserPermission createMany
   */
  export type UserPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPermission createManyAndReturn
   */
  export type UserPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPermission update
   */
  export type UserPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPermission.
     */
    data: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
    /**
     * Choose, which UserPermission to update.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission updateMany
   */
  export type UserPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPermissions.
     */
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserPermissions to update
     */
    where?: UserPermissionWhereInput
  }

  /**
   * UserPermission upsert
   */
  export type UserPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPermission to update in case it exists.
     */
    where: UserPermissionWhereUniqueInput
    /**
     * In case the UserPermission found by the `where` argument doesn't exist, create a new UserPermission with this data.
     */
    create: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
    /**
     * In case the UserPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
  }

  /**
   * UserPermission delete
   */
  export type UserPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter which UserPermission to delete.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission deleteMany
   */
  export type UserPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermissions to delete
     */
    where?: UserPermissionWhereInput
  }

  /**
   * UserPermission without action
   */
  export type UserPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
  }


  /**
   * Model PermissionTemplate
   */

  export type AggregatePermissionTemplate = {
    _count: PermissionTemplateCountAggregateOutputType | null
    _min: PermissionTemplateMinAggregateOutputType | null
    _max: PermissionTemplateMaxAggregateOutputType | null
  }

  export type PermissionTemplateMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    isSystem: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionTemplateMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    isSystem: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionTemplateCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    description: number
    isSystem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionTemplateMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    isSystem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionTemplateMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    isSystem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionTemplateCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    isSystem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionTemplate to aggregate.
     */
    where?: PermissionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionTemplates to fetch.
     */
    orderBy?: PermissionTemplateOrderByWithRelationInput | PermissionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionTemplates
    **/
    _count?: true | PermissionTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionTemplateMaxAggregateInputType
  }

  export type GetPermissionTemplateAggregateType<T extends PermissionTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionTemplate[P]>
      : GetScalarType<T[P], AggregatePermissionTemplate[P]>
  }




  export type PermissionTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionTemplateWhereInput
    orderBy?: PermissionTemplateOrderByWithAggregationInput | PermissionTemplateOrderByWithAggregationInput[]
    by: PermissionTemplateScalarFieldEnum[] | PermissionTemplateScalarFieldEnum
    having?: PermissionTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionTemplateCountAggregateInputType | true
    _min?: PermissionTemplateMinAggregateInputType
    _max?: PermissionTemplateMaxAggregateInputType
  }

  export type PermissionTemplateGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    description: string | null
    isSystem: boolean
    createdAt: Date
    updatedAt: Date
    _count: PermissionTemplateCountAggregateOutputType | null
    _min: PermissionTemplateMinAggregateOutputType | null
    _max: PermissionTemplateMaxAggregateOutputType | null
  }

  type GetPermissionTemplateGroupByPayload<T extends PermissionTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PermissionTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    isSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templatePermissions?: boolean | PermissionTemplate$templatePermissionsArgs<ExtArgs>
    userTemplateAssignments?: boolean | PermissionTemplate$userTemplateAssignmentsArgs<ExtArgs>
    _count?: boolean | PermissionTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionTemplate"]>

  export type PermissionTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    isSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permissionTemplate"]>

  export type PermissionTemplateSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    isSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templatePermissions?: boolean | PermissionTemplate$templatePermissionsArgs<ExtArgs>
    userTemplateAssignments?: boolean | PermissionTemplate$userTemplateAssignmentsArgs<ExtArgs>
    _count?: boolean | PermissionTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionTemplate"
    objects: {
      templatePermissions: Prisma.$TemplatePermissionPayload<ExtArgs>[]
      userTemplateAssignments: Prisma.$UserTemplateAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      description: string | null
      isSystem: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permissionTemplate"]>
    composites: {}
  }

  type PermissionTemplateGetPayload<S extends boolean | null | undefined | PermissionTemplateDefaultArgs> = $Result.GetResult<Prisma.$PermissionTemplatePayload, S>

  type PermissionTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionTemplateCountAggregateInputType | true
    }

  export interface PermissionTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionTemplate'], meta: { name: 'PermissionTemplate' } }
    /**
     * Find zero or one PermissionTemplate that matches the filter.
     * @param {PermissionTemplateFindUniqueArgs} args - Arguments to find a PermissionTemplate
     * @example
     * // Get one PermissionTemplate
     * const permissionTemplate = await prisma.permissionTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionTemplateFindUniqueArgs>(args: SelectSubset<T, PermissionTemplateFindUniqueArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PermissionTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionTemplateFindUniqueOrThrowArgs} args - Arguments to find a PermissionTemplate
     * @example
     * // Get one PermissionTemplate
     * const permissionTemplate = await prisma.permissionTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PermissionTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateFindFirstArgs} args - Arguments to find a PermissionTemplate
     * @example
     * // Get one PermissionTemplate
     * const permissionTemplate = await prisma.permissionTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionTemplateFindFirstArgs>(args?: SelectSubset<T, PermissionTemplateFindFirstArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PermissionTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateFindFirstOrThrowArgs} args - Arguments to find a PermissionTemplate
     * @example
     * // Get one PermissionTemplate
     * const permissionTemplate = await prisma.permissionTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PermissionTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionTemplates
     * const permissionTemplates = await prisma.permissionTemplate.findMany()
     * 
     * // Get first 10 PermissionTemplates
     * const permissionTemplates = await prisma.permissionTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionTemplateWithIdOnly = await prisma.permissionTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionTemplateFindManyArgs>(args?: SelectSubset<T, PermissionTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PermissionTemplate.
     * @param {PermissionTemplateCreateArgs} args - Arguments to create a PermissionTemplate.
     * @example
     * // Create one PermissionTemplate
     * const PermissionTemplate = await prisma.permissionTemplate.create({
     *   data: {
     *     // ... data to create a PermissionTemplate
     *   }
     * })
     * 
     */
    create<T extends PermissionTemplateCreateArgs>(args: SelectSubset<T, PermissionTemplateCreateArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PermissionTemplates.
     * @param {PermissionTemplateCreateManyArgs} args - Arguments to create many PermissionTemplates.
     * @example
     * // Create many PermissionTemplates
     * const permissionTemplate = await prisma.permissionTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionTemplateCreateManyArgs>(args?: SelectSubset<T, PermissionTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionTemplates and returns the data saved in the database.
     * @param {PermissionTemplateCreateManyAndReturnArgs} args - Arguments to create many PermissionTemplates.
     * @example
     * // Create many PermissionTemplates
     * const permissionTemplate = await prisma.permissionTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionTemplates and only return the `id`
     * const permissionTemplateWithIdOnly = await prisma.permissionTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PermissionTemplate.
     * @param {PermissionTemplateDeleteArgs} args - Arguments to delete one PermissionTemplate.
     * @example
     * // Delete one PermissionTemplate
     * const PermissionTemplate = await prisma.permissionTemplate.delete({
     *   where: {
     *     // ... filter to delete one PermissionTemplate
     *   }
     * })
     * 
     */
    delete<T extends PermissionTemplateDeleteArgs>(args: SelectSubset<T, PermissionTemplateDeleteArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PermissionTemplate.
     * @param {PermissionTemplateUpdateArgs} args - Arguments to update one PermissionTemplate.
     * @example
     * // Update one PermissionTemplate
     * const permissionTemplate = await prisma.permissionTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionTemplateUpdateArgs>(args: SelectSubset<T, PermissionTemplateUpdateArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PermissionTemplates.
     * @param {PermissionTemplateDeleteManyArgs} args - Arguments to filter PermissionTemplates to delete.
     * @example
     * // Delete a few PermissionTemplates
     * const { count } = await prisma.permissionTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionTemplateDeleteManyArgs>(args?: SelectSubset<T, PermissionTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionTemplates
     * const permissionTemplate = await prisma.permissionTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionTemplateUpdateManyArgs>(args: SelectSubset<T, PermissionTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermissionTemplate.
     * @param {PermissionTemplateUpsertArgs} args - Arguments to update or create a PermissionTemplate.
     * @example
     * // Update or create a PermissionTemplate
     * const permissionTemplate = await prisma.permissionTemplate.upsert({
     *   create: {
     *     // ... data to create a PermissionTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PermissionTemplateUpsertArgs>(args: SelectSubset<T, PermissionTemplateUpsertArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PermissionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateCountArgs} args - Arguments to filter PermissionTemplates to count.
     * @example
     * // Count the number of PermissionTemplates
     * const count = await prisma.permissionTemplate.count({
     *   where: {
     *     // ... the filter for the PermissionTemplates we want to count
     *   }
     * })
    **/
    count<T extends PermissionTemplateCountArgs>(
      args?: Subset<T, PermissionTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionTemplateAggregateArgs>(args: Subset<T, PermissionTemplateAggregateArgs>): Prisma.PrismaPromise<GetPermissionTemplateAggregateType<T>>

    /**
     * Group by PermissionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionTemplateGroupByArgs} args - Group by arguments.
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
      T extends PermissionTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PermissionTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionTemplate model
   */
  readonly fields: PermissionTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templatePermissions<T extends PermissionTemplate$templatePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, PermissionTemplate$templatePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "findMany"> | Null>
    userTemplateAssignments<T extends PermissionTemplate$userTemplateAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, PermissionTemplate$userTemplateAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PermissionTemplate model
   */ 
  interface PermissionTemplateFieldRefs {
    readonly id: FieldRef<"PermissionTemplate", 'String'>
    readonly tenantId: FieldRef<"PermissionTemplate", 'String'>
    readonly name: FieldRef<"PermissionTemplate", 'String'>
    readonly description: FieldRef<"PermissionTemplate", 'String'>
    readonly isSystem: FieldRef<"PermissionTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"PermissionTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PermissionTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PermissionTemplate findUnique
   */
  export type PermissionTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PermissionTemplate to fetch.
     */
    where: PermissionTemplateWhereUniqueInput
  }

  /**
   * PermissionTemplate findUniqueOrThrow
   */
  export type PermissionTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PermissionTemplate to fetch.
     */
    where: PermissionTemplateWhereUniqueInput
  }

  /**
   * PermissionTemplate findFirst
   */
  export type PermissionTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PermissionTemplate to fetch.
     */
    where?: PermissionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionTemplates to fetch.
     */
    orderBy?: PermissionTemplateOrderByWithRelationInput | PermissionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionTemplates.
     */
    cursor?: PermissionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionTemplates.
     */
    distinct?: PermissionTemplateScalarFieldEnum | PermissionTemplateScalarFieldEnum[]
  }

  /**
   * PermissionTemplate findFirstOrThrow
   */
  export type PermissionTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PermissionTemplate to fetch.
     */
    where?: PermissionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionTemplates to fetch.
     */
    orderBy?: PermissionTemplateOrderByWithRelationInput | PermissionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionTemplates.
     */
    cursor?: PermissionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionTemplates.
     */
    distinct?: PermissionTemplateScalarFieldEnum | PermissionTemplateScalarFieldEnum[]
  }

  /**
   * PermissionTemplate findMany
   */
  export type PermissionTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PermissionTemplates to fetch.
     */
    where?: PermissionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionTemplates to fetch.
     */
    orderBy?: PermissionTemplateOrderByWithRelationInput | PermissionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionTemplates.
     */
    cursor?: PermissionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionTemplates.
     */
    skip?: number
    distinct?: PermissionTemplateScalarFieldEnum | PermissionTemplateScalarFieldEnum[]
  }

  /**
   * PermissionTemplate create
   */
  export type PermissionTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionTemplate.
     */
    data: XOR<PermissionTemplateCreateInput, PermissionTemplateUncheckedCreateInput>
  }

  /**
   * PermissionTemplate createMany
   */
  export type PermissionTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionTemplates.
     */
    data: PermissionTemplateCreateManyInput | PermissionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionTemplate createManyAndReturn
   */
  export type PermissionTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PermissionTemplates.
     */
    data: PermissionTemplateCreateManyInput | PermissionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionTemplate update
   */
  export type PermissionTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionTemplate.
     */
    data: XOR<PermissionTemplateUpdateInput, PermissionTemplateUncheckedUpdateInput>
    /**
     * Choose, which PermissionTemplate to update.
     */
    where: PermissionTemplateWhereUniqueInput
  }

  /**
   * PermissionTemplate updateMany
   */
  export type PermissionTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionTemplates.
     */
    data: XOR<PermissionTemplateUpdateManyMutationInput, PermissionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PermissionTemplates to update
     */
    where?: PermissionTemplateWhereInput
  }

  /**
   * PermissionTemplate upsert
   */
  export type PermissionTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionTemplate to update in case it exists.
     */
    where: PermissionTemplateWhereUniqueInput
    /**
     * In case the PermissionTemplate found by the `where` argument doesn't exist, create a new PermissionTemplate with this data.
     */
    create: XOR<PermissionTemplateCreateInput, PermissionTemplateUncheckedCreateInput>
    /**
     * In case the PermissionTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionTemplateUpdateInput, PermissionTemplateUncheckedUpdateInput>
  }

  /**
   * PermissionTemplate delete
   */
  export type PermissionTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
    /**
     * Filter which PermissionTemplate to delete.
     */
    where: PermissionTemplateWhereUniqueInput
  }

  /**
   * PermissionTemplate deleteMany
   */
  export type PermissionTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionTemplates to delete
     */
    where?: PermissionTemplateWhereInput
  }

  /**
   * PermissionTemplate.templatePermissions
   */
  export type PermissionTemplate$templatePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    where?: TemplatePermissionWhereInput
    orderBy?: TemplatePermissionOrderByWithRelationInput | TemplatePermissionOrderByWithRelationInput[]
    cursor?: TemplatePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplatePermissionScalarFieldEnum | TemplatePermissionScalarFieldEnum[]
  }

  /**
   * PermissionTemplate.userTemplateAssignments
   */
  export type PermissionTemplate$userTemplateAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    where?: UserTemplateAssignmentWhereInput
    orderBy?: UserTemplateAssignmentOrderByWithRelationInput | UserTemplateAssignmentOrderByWithRelationInput[]
    cursor?: UserTemplateAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTemplateAssignmentScalarFieldEnum | UserTemplateAssignmentScalarFieldEnum[]
  }

  /**
   * PermissionTemplate without action
   */
  export type PermissionTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionTemplate
     */
    select?: PermissionTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionTemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplatePermission
   */

  export type AggregateTemplatePermission = {
    _count: TemplatePermissionCountAggregateOutputType | null
    _min: TemplatePermissionMinAggregateOutputType | null
    _max: TemplatePermissionMaxAggregateOutputType | null
  }

  export type TemplatePermissionMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    permissionKey: string | null
    scope: string | null
    createdAt: Date | null
  }

  export type TemplatePermissionMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    permissionKey: string | null
    scope: string | null
    createdAt: Date | null
  }

  export type TemplatePermissionCountAggregateOutputType = {
    id: number
    templateId: number
    permissionKey: number
    scope: number
    allowedShopIds: number
    createdAt: number
    _all: number
  }


  export type TemplatePermissionMinAggregateInputType = {
    id?: true
    templateId?: true
    permissionKey?: true
    scope?: true
    createdAt?: true
  }

  export type TemplatePermissionMaxAggregateInputType = {
    id?: true
    templateId?: true
    permissionKey?: true
    scope?: true
    createdAt?: true
  }

  export type TemplatePermissionCountAggregateInputType = {
    id?: true
    templateId?: true
    permissionKey?: true
    scope?: true
    allowedShopIds?: true
    createdAt?: true
    _all?: true
  }

  export type TemplatePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplatePermission to aggregate.
     */
    where?: TemplatePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplatePermissions to fetch.
     */
    orderBy?: TemplatePermissionOrderByWithRelationInput | TemplatePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplatePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplatePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplatePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplatePermissions
    **/
    _count?: true | TemplatePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplatePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplatePermissionMaxAggregateInputType
  }

  export type GetTemplatePermissionAggregateType<T extends TemplatePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplatePermission[P]>
      : GetScalarType<T[P], AggregateTemplatePermission[P]>
  }




  export type TemplatePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplatePermissionWhereInput
    orderBy?: TemplatePermissionOrderByWithAggregationInput | TemplatePermissionOrderByWithAggregationInput[]
    by: TemplatePermissionScalarFieldEnum[] | TemplatePermissionScalarFieldEnum
    having?: TemplatePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplatePermissionCountAggregateInputType | true
    _min?: TemplatePermissionMinAggregateInputType
    _max?: TemplatePermissionMaxAggregateInputType
  }

  export type TemplatePermissionGroupByOutputType = {
    id: string
    templateId: string
    permissionKey: string
    scope: string
    allowedShopIds: string[]
    createdAt: Date
    _count: TemplatePermissionCountAggregateOutputType | null
    _min: TemplatePermissionMinAggregateOutputType | null
    _max: TemplatePermissionMaxAggregateOutputType | null
  }

  type GetTemplatePermissionGroupByPayload<T extends TemplatePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplatePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplatePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplatePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], TemplatePermissionGroupByOutputType[P]>
        }
      >
    >


  export type TemplatePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    permissionKey?: boolean
    scope?: boolean
    allowedShopIds?: boolean
    createdAt?: boolean
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templatePermission"]>

  export type TemplatePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    permissionKey?: boolean
    scope?: boolean
    allowedShopIds?: boolean
    createdAt?: boolean
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templatePermission"]>

  export type TemplatePermissionSelectScalar = {
    id?: boolean
    templateId?: boolean
    permissionKey?: boolean
    scope?: boolean
    allowedShopIds?: boolean
    createdAt?: boolean
  }

  export type TemplatePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }
  export type TemplatePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }

  export type $TemplatePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplatePermission"
    objects: {
      template: Prisma.$PermissionTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      permissionKey: string
      scope: string
      allowedShopIds: string[]
      createdAt: Date
    }, ExtArgs["result"]["templatePermission"]>
    composites: {}
  }

  type TemplatePermissionGetPayload<S extends boolean | null | undefined | TemplatePermissionDefaultArgs> = $Result.GetResult<Prisma.$TemplatePermissionPayload, S>

  type TemplatePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplatePermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplatePermissionCountAggregateInputType | true
    }

  export interface TemplatePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplatePermission'], meta: { name: 'TemplatePermission' } }
    /**
     * Find zero or one TemplatePermission that matches the filter.
     * @param {TemplatePermissionFindUniqueArgs} args - Arguments to find a TemplatePermission
     * @example
     * // Get one TemplatePermission
     * const templatePermission = await prisma.templatePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplatePermissionFindUniqueArgs>(args: SelectSubset<T, TemplatePermissionFindUniqueArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TemplatePermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplatePermissionFindUniqueOrThrowArgs} args - Arguments to find a TemplatePermission
     * @example
     * // Get one TemplatePermission
     * const templatePermission = await prisma.templatePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplatePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplatePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TemplatePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionFindFirstArgs} args - Arguments to find a TemplatePermission
     * @example
     * // Get one TemplatePermission
     * const templatePermission = await prisma.templatePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplatePermissionFindFirstArgs>(args?: SelectSubset<T, TemplatePermissionFindFirstArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TemplatePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionFindFirstOrThrowArgs} args - Arguments to find a TemplatePermission
     * @example
     * // Get one TemplatePermission
     * const templatePermission = await prisma.templatePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplatePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplatePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TemplatePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplatePermissions
     * const templatePermissions = await prisma.templatePermission.findMany()
     * 
     * // Get first 10 TemplatePermissions
     * const templatePermissions = await prisma.templatePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templatePermissionWithIdOnly = await prisma.templatePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplatePermissionFindManyArgs>(args?: SelectSubset<T, TemplatePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TemplatePermission.
     * @param {TemplatePermissionCreateArgs} args - Arguments to create a TemplatePermission.
     * @example
     * // Create one TemplatePermission
     * const TemplatePermission = await prisma.templatePermission.create({
     *   data: {
     *     // ... data to create a TemplatePermission
     *   }
     * })
     * 
     */
    create<T extends TemplatePermissionCreateArgs>(args: SelectSubset<T, TemplatePermissionCreateArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TemplatePermissions.
     * @param {TemplatePermissionCreateManyArgs} args - Arguments to create many TemplatePermissions.
     * @example
     * // Create many TemplatePermissions
     * const templatePermission = await prisma.templatePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplatePermissionCreateManyArgs>(args?: SelectSubset<T, TemplatePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplatePermissions and returns the data saved in the database.
     * @param {TemplatePermissionCreateManyAndReturnArgs} args - Arguments to create many TemplatePermissions.
     * @example
     * // Create many TemplatePermissions
     * const templatePermission = await prisma.templatePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplatePermissions and only return the `id`
     * const templatePermissionWithIdOnly = await prisma.templatePermission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplatePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplatePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TemplatePermission.
     * @param {TemplatePermissionDeleteArgs} args - Arguments to delete one TemplatePermission.
     * @example
     * // Delete one TemplatePermission
     * const TemplatePermission = await prisma.templatePermission.delete({
     *   where: {
     *     // ... filter to delete one TemplatePermission
     *   }
     * })
     * 
     */
    delete<T extends TemplatePermissionDeleteArgs>(args: SelectSubset<T, TemplatePermissionDeleteArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TemplatePermission.
     * @param {TemplatePermissionUpdateArgs} args - Arguments to update one TemplatePermission.
     * @example
     * // Update one TemplatePermission
     * const templatePermission = await prisma.templatePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplatePermissionUpdateArgs>(args: SelectSubset<T, TemplatePermissionUpdateArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TemplatePermissions.
     * @param {TemplatePermissionDeleteManyArgs} args - Arguments to filter TemplatePermissions to delete.
     * @example
     * // Delete a few TemplatePermissions
     * const { count } = await prisma.templatePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplatePermissionDeleteManyArgs>(args?: SelectSubset<T, TemplatePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplatePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplatePermissions
     * const templatePermission = await prisma.templatePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplatePermissionUpdateManyArgs>(args: SelectSubset<T, TemplatePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplatePermission.
     * @param {TemplatePermissionUpsertArgs} args - Arguments to update or create a TemplatePermission.
     * @example
     * // Update or create a TemplatePermission
     * const templatePermission = await prisma.templatePermission.upsert({
     *   create: {
     *     // ... data to create a TemplatePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplatePermission we want to update
     *   }
     * })
     */
    upsert<T extends TemplatePermissionUpsertArgs>(args: SelectSubset<T, TemplatePermissionUpsertArgs<ExtArgs>>): Prisma__TemplatePermissionClient<$Result.GetResult<Prisma.$TemplatePermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TemplatePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionCountArgs} args - Arguments to filter TemplatePermissions to count.
     * @example
     * // Count the number of TemplatePermissions
     * const count = await prisma.templatePermission.count({
     *   where: {
     *     // ... the filter for the TemplatePermissions we want to count
     *   }
     * })
    **/
    count<T extends TemplatePermissionCountArgs>(
      args?: Subset<T, TemplatePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplatePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplatePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplatePermissionAggregateArgs>(args: Subset<T, TemplatePermissionAggregateArgs>): Prisma.PrismaPromise<GetTemplatePermissionAggregateType<T>>

    /**
     * Group by TemplatePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatePermissionGroupByArgs} args - Group by arguments.
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
      T extends TemplatePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplatePermissionGroupByArgs['orderBy'] }
        : { orderBy?: TemplatePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplatePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplatePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplatePermission model
   */
  readonly fields: TemplatePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplatePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplatePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends PermissionTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionTemplateDefaultArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TemplatePermission model
   */ 
  interface TemplatePermissionFieldRefs {
    readonly id: FieldRef<"TemplatePermission", 'String'>
    readonly templateId: FieldRef<"TemplatePermission", 'String'>
    readonly permissionKey: FieldRef<"TemplatePermission", 'String'>
    readonly scope: FieldRef<"TemplatePermission", 'String'>
    readonly allowedShopIds: FieldRef<"TemplatePermission", 'String[]'>
    readonly createdAt: FieldRef<"TemplatePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplatePermission findUnique
   */
  export type TemplatePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * Filter, which TemplatePermission to fetch.
     */
    where: TemplatePermissionWhereUniqueInput
  }

  /**
   * TemplatePermission findUniqueOrThrow
   */
  export type TemplatePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * Filter, which TemplatePermission to fetch.
     */
    where: TemplatePermissionWhereUniqueInput
  }

  /**
   * TemplatePermission findFirst
   */
  export type TemplatePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * Filter, which TemplatePermission to fetch.
     */
    where?: TemplatePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplatePermissions to fetch.
     */
    orderBy?: TemplatePermissionOrderByWithRelationInput | TemplatePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplatePermissions.
     */
    cursor?: TemplatePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplatePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplatePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplatePermissions.
     */
    distinct?: TemplatePermissionScalarFieldEnum | TemplatePermissionScalarFieldEnum[]
  }

  /**
   * TemplatePermission findFirstOrThrow
   */
  export type TemplatePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * Filter, which TemplatePermission to fetch.
     */
    where?: TemplatePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplatePermissions to fetch.
     */
    orderBy?: TemplatePermissionOrderByWithRelationInput | TemplatePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplatePermissions.
     */
    cursor?: TemplatePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplatePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplatePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplatePermissions.
     */
    distinct?: TemplatePermissionScalarFieldEnum | TemplatePermissionScalarFieldEnum[]
  }

  /**
   * TemplatePermission findMany
   */
  export type TemplatePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * Filter, which TemplatePermissions to fetch.
     */
    where?: TemplatePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplatePermissions to fetch.
     */
    orderBy?: TemplatePermissionOrderByWithRelationInput | TemplatePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplatePermissions.
     */
    cursor?: TemplatePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplatePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplatePermissions.
     */
    skip?: number
    distinct?: TemplatePermissionScalarFieldEnum | TemplatePermissionScalarFieldEnum[]
  }

  /**
   * TemplatePermission create
   */
  export type TemplatePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplatePermission.
     */
    data: XOR<TemplatePermissionCreateInput, TemplatePermissionUncheckedCreateInput>
  }

  /**
   * TemplatePermission createMany
   */
  export type TemplatePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplatePermissions.
     */
    data: TemplatePermissionCreateManyInput | TemplatePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplatePermission createManyAndReturn
   */
  export type TemplatePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TemplatePermissions.
     */
    data: TemplatePermissionCreateManyInput | TemplatePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplatePermission update
   */
  export type TemplatePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplatePermission.
     */
    data: XOR<TemplatePermissionUpdateInput, TemplatePermissionUncheckedUpdateInput>
    /**
     * Choose, which TemplatePermission to update.
     */
    where: TemplatePermissionWhereUniqueInput
  }

  /**
   * TemplatePermission updateMany
   */
  export type TemplatePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplatePermissions.
     */
    data: XOR<TemplatePermissionUpdateManyMutationInput, TemplatePermissionUncheckedUpdateManyInput>
    /**
     * Filter which TemplatePermissions to update
     */
    where?: TemplatePermissionWhereInput
  }

  /**
   * TemplatePermission upsert
   */
  export type TemplatePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplatePermission to update in case it exists.
     */
    where: TemplatePermissionWhereUniqueInput
    /**
     * In case the TemplatePermission found by the `where` argument doesn't exist, create a new TemplatePermission with this data.
     */
    create: XOR<TemplatePermissionCreateInput, TemplatePermissionUncheckedCreateInput>
    /**
     * In case the TemplatePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplatePermissionUpdateInput, TemplatePermissionUncheckedUpdateInput>
  }

  /**
   * TemplatePermission delete
   */
  export type TemplatePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
    /**
     * Filter which TemplatePermission to delete.
     */
    where: TemplatePermissionWhereUniqueInput
  }

  /**
   * TemplatePermission deleteMany
   */
  export type TemplatePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplatePermissions to delete
     */
    where?: TemplatePermissionWhereInput
  }

  /**
   * TemplatePermission without action
   */
  export type TemplatePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatePermission
     */
    select?: TemplatePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplatePermissionInclude<ExtArgs> | null
  }


  /**
   * Model UserTemplateAssignment
   */

  export type AggregateUserTemplateAssignment = {
    _count: UserTemplateAssignmentCountAggregateOutputType | null
    _min: UserTemplateAssignmentMinAggregateOutputType | null
    _max: UserTemplateAssignmentMaxAggregateOutputType | null
  }

  export type UserTemplateAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    templateId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserTemplateAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    templateId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserTemplateAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    templateId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type UserTemplateAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserTemplateAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserTemplateAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type UserTemplateAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTemplateAssignment to aggregate.
     */
    where?: UserTemplateAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplateAssignments to fetch.
     */
    orderBy?: UserTemplateAssignmentOrderByWithRelationInput | UserTemplateAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTemplateAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplateAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplateAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTemplateAssignments
    **/
    _count?: true | UserTemplateAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTemplateAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTemplateAssignmentMaxAggregateInputType
  }

  export type GetUserTemplateAssignmentAggregateType<T extends UserTemplateAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTemplateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTemplateAssignment[P]>
      : GetScalarType<T[P], AggregateUserTemplateAssignment[P]>
  }




  export type UserTemplateAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTemplateAssignmentWhereInput
    orderBy?: UserTemplateAssignmentOrderByWithAggregationInput | UserTemplateAssignmentOrderByWithAggregationInput[]
    by: UserTemplateAssignmentScalarFieldEnum[] | UserTemplateAssignmentScalarFieldEnum
    having?: UserTemplateAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTemplateAssignmentCountAggregateInputType | true
    _min?: UserTemplateAssignmentMinAggregateInputType
    _max?: UserTemplateAssignmentMaxAggregateInputType
  }

  export type UserTemplateAssignmentGroupByOutputType = {
    id: string
    userId: string
    templateId: string
    assignedAt: Date
    assignedBy: string
    _count: UserTemplateAssignmentCountAggregateOutputType | null
    _min: UserTemplateAssignmentMinAggregateOutputType | null
    _max: UserTemplateAssignmentMaxAggregateOutputType | null
  }

  type GetUserTemplateAssignmentGroupByPayload<T extends UserTemplateAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTemplateAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTemplateAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTemplateAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], UserTemplateAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type UserTemplateAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    templateId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTemplateAssignment"]>

  export type UserTemplateAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    templateId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTemplateAssignment"]>

  export type UserTemplateAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    templateId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
  }

  export type UserTemplateAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }
  export type UserTemplateAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | PermissionTemplateDefaultArgs<ExtArgs>
  }

  export type $UserTemplateAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTemplateAssignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$PermissionTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      templateId: string
      assignedAt: Date
      assignedBy: string
    }, ExtArgs["result"]["userTemplateAssignment"]>
    composites: {}
  }

  type UserTemplateAssignmentGetPayload<S extends boolean | null | undefined | UserTemplateAssignmentDefaultArgs> = $Result.GetResult<Prisma.$UserTemplateAssignmentPayload, S>

  type UserTemplateAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserTemplateAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserTemplateAssignmentCountAggregateInputType | true
    }

  export interface UserTemplateAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTemplateAssignment'], meta: { name: 'UserTemplateAssignment' } }
    /**
     * Find zero or one UserTemplateAssignment that matches the filter.
     * @param {UserTemplateAssignmentFindUniqueArgs} args - Arguments to find a UserTemplateAssignment
     * @example
     * // Get one UserTemplateAssignment
     * const userTemplateAssignment = await prisma.userTemplateAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTemplateAssignmentFindUniqueArgs>(args: SelectSubset<T, UserTemplateAssignmentFindUniqueArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserTemplateAssignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserTemplateAssignmentFindUniqueOrThrowArgs} args - Arguments to find a UserTemplateAssignment
     * @example
     * // Get one UserTemplateAssignment
     * const userTemplateAssignment = await prisma.userTemplateAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTemplateAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTemplateAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserTemplateAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentFindFirstArgs} args - Arguments to find a UserTemplateAssignment
     * @example
     * // Get one UserTemplateAssignment
     * const userTemplateAssignment = await prisma.userTemplateAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTemplateAssignmentFindFirstArgs>(args?: SelectSubset<T, UserTemplateAssignmentFindFirstArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserTemplateAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentFindFirstOrThrowArgs} args - Arguments to find a UserTemplateAssignment
     * @example
     * // Get one UserTemplateAssignment
     * const userTemplateAssignment = await prisma.userTemplateAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTemplateAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTemplateAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserTemplateAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTemplateAssignments
     * const userTemplateAssignments = await prisma.userTemplateAssignment.findMany()
     * 
     * // Get first 10 UserTemplateAssignments
     * const userTemplateAssignments = await prisma.userTemplateAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTemplateAssignmentWithIdOnly = await prisma.userTemplateAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTemplateAssignmentFindManyArgs>(args?: SelectSubset<T, UserTemplateAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserTemplateAssignment.
     * @param {UserTemplateAssignmentCreateArgs} args - Arguments to create a UserTemplateAssignment.
     * @example
     * // Create one UserTemplateAssignment
     * const UserTemplateAssignment = await prisma.userTemplateAssignment.create({
     *   data: {
     *     // ... data to create a UserTemplateAssignment
     *   }
     * })
     * 
     */
    create<T extends UserTemplateAssignmentCreateArgs>(args: SelectSubset<T, UserTemplateAssignmentCreateArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserTemplateAssignments.
     * @param {UserTemplateAssignmentCreateManyArgs} args - Arguments to create many UserTemplateAssignments.
     * @example
     * // Create many UserTemplateAssignments
     * const userTemplateAssignment = await prisma.userTemplateAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTemplateAssignmentCreateManyArgs>(args?: SelectSubset<T, UserTemplateAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTemplateAssignments and returns the data saved in the database.
     * @param {UserTemplateAssignmentCreateManyAndReturnArgs} args - Arguments to create many UserTemplateAssignments.
     * @example
     * // Create many UserTemplateAssignments
     * const userTemplateAssignment = await prisma.userTemplateAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTemplateAssignments and only return the `id`
     * const userTemplateAssignmentWithIdOnly = await prisma.userTemplateAssignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTemplateAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTemplateAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserTemplateAssignment.
     * @param {UserTemplateAssignmentDeleteArgs} args - Arguments to delete one UserTemplateAssignment.
     * @example
     * // Delete one UserTemplateAssignment
     * const UserTemplateAssignment = await prisma.userTemplateAssignment.delete({
     *   where: {
     *     // ... filter to delete one UserTemplateAssignment
     *   }
     * })
     * 
     */
    delete<T extends UserTemplateAssignmentDeleteArgs>(args: SelectSubset<T, UserTemplateAssignmentDeleteArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserTemplateAssignment.
     * @param {UserTemplateAssignmentUpdateArgs} args - Arguments to update one UserTemplateAssignment.
     * @example
     * // Update one UserTemplateAssignment
     * const userTemplateAssignment = await prisma.userTemplateAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTemplateAssignmentUpdateArgs>(args: SelectSubset<T, UserTemplateAssignmentUpdateArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserTemplateAssignments.
     * @param {UserTemplateAssignmentDeleteManyArgs} args - Arguments to filter UserTemplateAssignments to delete.
     * @example
     * // Delete a few UserTemplateAssignments
     * const { count } = await prisma.userTemplateAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTemplateAssignmentDeleteManyArgs>(args?: SelectSubset<T, UserTemplateAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTemplateAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTemplateAssignments
     * const userTemplateAssignment = await prisma.userTemplateAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTemplateAssignmentUpdateManyArgs>(args: SelectSubset<T, UserTemplateAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTemplateAssignment.
     * @param {UserTemplateAssignmentUpsertArgs} args - Arguments to update or create a UserTemplateAssignment.
     * @example
     * // Update or create a UserTemplateAssignment
     * const userTemplateAssignment = await prisma.userTemplateAssignment.upsert({
     *   create: {
     *     // ... data to create a UserTemplateAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTemplateAssignment we want to update
     *   }
     * })
     */
    upsert<T extends UserTemplateAssignmentUpsertArgs>(args: SelectSubset<T, UserTemplateAssignmentUpsertArgs<ExtArgs>>): Prisma__UserTemplateAssignmentClient<$Result.GetResult<Prisma.$UserTemplateAssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserTemplateAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentCountArgs} args - Arguments to filter UserTemplateAssignments to count.
     * @example
     * // Count the number of UserTemplateAssignments
     * const count = await prisma.userTemplateAssignment.count({
     *   where: {
     *     // ... the filter for the UserTemplateAssignments we want to count
     *   }
     * })
    **/
    count<T extends UserTemplateAssignmentCountArgs>(
      args?: Subset<T, UserTemplateAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTemplateAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTemplateAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTemplateAssignmentAggregateArgs>(args: Subset<T, UserTemplateAssignmentAggregateArgs>): Prisma.PrismaPromise<GetUserTemplateAssignmentAggregateType<T>>

    /**
     * Group by UserTemplateAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAssignmentGroupByArgs} args - Group by arguments.
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
      T extends UserTemplateAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTemplateAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: UserTemplateAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTemplateAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTemplateAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTemplateAssignment model
   */
  readonly fields: UserTemplateAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTemplateAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTemplateAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    template<T extends PermissionTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionTemplateDefaultArgs<ExtArgs>>): Prisma__PermissionTemplateClient<$Result.GetResult<Prisma.$PermissionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserTemplateAssignment model
   */ 
  interface UserTemplateAssignmentFieldRefs {
    readonly id: FieldRef<"UserTemplateAssignment", 'String'>
    readonly userId: FieldRef<"UserTemplateAssignment", 'String'>
    readonly templateId: FieldRef<"UserTemplateAssignment", 'String'>
    readonly assignedAt: FieldRef<"UserTemplateAssignment", 'DateTime'>
    readonly assignedBy: FieldRef<"UserTemplateAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserTemplateAssignment findUnique
   */
  export type UserTemplateAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplateAssignment to fetch.
     */
    where: UserTemplateAssignmentWhereUniqueInput
  }

  /**
   * UserTemplateAssignment findUniqueOrThrow
   */
  export type UserTemplateAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplateAssignment to fetch.
     */
    where: UserTemplateAssignmentWhereUniqueInput
  }

  /**
   * UserTemplateAssignment findFirst
   */
  export type UserTemplateAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplateAssignment to fetch.
     */
    where?: UserTemplateAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplateAssignments to fetch.
     */
    orderBy?: UserTemplateAssignmentOrderByWithRelationInput | UserTemplateAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTemplateAssignments.
     */
    cursor?: UserTemplateAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplateAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplateAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTemplateAssignments.
     */
    distinct?: UserTemplateAssignmentScalarFieldEnum | UserTemplateAssignmentScalarFieldEnum[]
  }

  /**
   * UserTemplateAssignment findFirstOrThrow
   */
  export type UserTemplateAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplateAssignment to fetch.
     */
    where?: UserTemplateAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplateAssignments to fetch.
     */
    orderBy?: UserTemplateAssignmentOrderByWithRelationInput | UserTemplateAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTemplateAssignments.
     */
    cursor?: UserTemplateAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplateAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplateAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTemplateAssignments.
     */
    distinct?: UserTemplateAssignmentScalarFieldEnum | UserTemplateAssignmentScalarFieldEnum[]
  }

  /**
   * UserTemplateAssignment findMany
   */
  export type UserTemplateAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplateAssignments to fetch.
     */
    where?: UserTemplateAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplateAssignments to fetch.
     */
    orderBy?: UserTemplateAssignmentOrderByWithRelationInput | UserTemplateAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTemplateAssignments.
     */
    cursor?: UserTemplateAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplateAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplateAssignments.
     */
    skip?: number
    distinct?: UserTemplateAssignmentScalarFieldEnum | UserTemplateAssignmentScalarFieldEnum[]
  }

  /**
   * UserTemplateAssignment create
   */
  export type UserTemplateAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTemplateAssignment.
     */
    data: XOR<UserTemplateAssignmentCreateInput, UserTemplateAssignmentUncheckedCreateInput>
  }

  /**
   * UserTemplateAssignment createMany
   */
  export type UserTemplateAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTemplateAssignments.
     */
    data: UserTemplateAssignmentCreateManyInput | UserTemplateAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTemplateAssignment createManyAndReturn
   */
  export type UserTemplateAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserTemplateAssignments.
     */
    data: UserTemplateAssignmentCreateManyInput | UserTemplateAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTemplateAssignment update
   */
  export type UserTemplateAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTemplateAssignment.
     */
    data: XOR<UserTemplateAssignmentUpdateInput, UserTemplateAssignmentUncheckedUpdateInput>
    /**
     * Choose, which UserTemplateAssignment to update.
     */
    where: UserTemplateAssignmentWhereUniqueInput
  }

  /**
   * UserTemplateAssignment updateMany
   */
  export type UserTemplateAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTemplateAssignments.
     */
    data: XOR<UserTemplateAssignmentUpdateManyMutationInput, UserTemplateAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which UserTemplateAssignments to update
     */
    where?: UserTemplateAssignmentWhereInput
  }

  /**
   * UserTemplateAssignment upsert
   */
  export type UserTemplateAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTemplateAssignment to update in case it exists.
     */
    where: UserTemplateAssignmentWhereUniqueInput
    /**
     * In case the UserTemplateAssignment found by the `where` argument doesn't exist, create a new UserTemplateAssignment with this data.
     */
    create: XOR<UserTemplateAssignmentCreateInput, UserTemplateAssignmentUncheckedCreateInput>
    /**
     * In case the UserTemplateAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTemplateAssignmentUpdateInput, UserTemplateAssignmentUncheckedUpdateInput>
  }

  /**
   * UserTemplateAssignment delete
   */
  export type UserTemplateAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
    /**
     * Filter which UserTemplateAssignment to delete.
     */
    where: UserTemplateAssignmentWhereUniqueInput
  }

  /**
   * UserTemplateAssignment deleteMany
   */
  export type UserTemplateAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTemplateAssignments to delete
     */
    where?: UserTemplateAssignmentWhereInput
  }

  /**
   * UserTemplateAssignment without action
   */
  export type UserTemplateAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateAssignment
     */
    select?: UserTemplateAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model PermissionAuditLog
   */

  export type AggregatePermissionAuditLog = {
    _count: PermissionAuditLogCountAggregateOutputType | null
    _min: PermissionAuditLogMinAggregateOutputType | null
    _max: PermissionAuditLogMaxAggregateOutputType | null
  }

  export type PermissionAuditLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    actorId: string | null
    targetUserId: string | null
    action: string | null
    permissionKey: string | null
    oldValue: string | null
    newValue: string | null
    reason: string | null
    traceId: string | null
    createdAt: Date | null
  }

  export type PermissionAuditLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    actorId: string | null
    targetUserId: string | null
    action: string | null
    permissionKey: string | null
    oldValue: string | null
    newValue: string | null
    reason: string | null
    traceId: string | null
    createdAt: Date | null
  }

  export type PermissionAuditLogCountAggregateOutputType = {
    id: number
    tenantId: number
    actorId: number
    targetUserId: number
    action: number
    permissionKey: number
    oldValue: number
    newValue: number
    reason: number
    traceId: number
    createdAt: number
    _all: number
  }


  export type PermissionAuditLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    actorId?: true
    targetUserId?: true
    action?: true
    permissionKey?: true
    oldValue?: true
    newValue?: true
    reason?: true
    traceId?: true
    createdAt?: true
  }

  export type PermissionAuditLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    actorId?: true
    targetUserId?: true
    action?: true
    permissionKey?: true
    oldValue?: true
    newValue?: true
    reason?: true
    traceId?: true
    createdAt?: true
  }

  export type PermissionAuditLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    actorId?: true
    targetUserId?: true
    action?: true
    permissionKey?: true
    oldValue?: true
    newValue?: true
    reason?: true
    traceId?: true
    createdAt?: true
    _all?: true
  }

  export type PermissionAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionAuditLog to aggregate.
     */
    where?: PermissionAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionAuditLogs to fetch.
     */
    orderBy?: PermissionAuditLogOrderByWithRelationInput | PermissionAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionAuditLogs
    **/
    _count?: true | PermissionAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionAuditLogMaxAggregateInputType
  }

  export type GetPermissionAuditLogAggregateType<T extends PermissionAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionAuditLog[P]>
      : GetScalarType<T[P], AggregatePermissionAuditLog[P]>
  }




  export type PermissionAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionAuditLogWhereInput
    orderBy?: PermissionAuditLogOrderByWithAggregationInput | PermissionAuditLogOrderByWithAggregationInput[]
    by: PermissionAuditLogScalarFieldEnum[] | PermissionAuditLogScalarFieldEnum
    having?: PermissionAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionAuditLogCountAggregateInputType | true
    _min?: PermissionAuditLogMinAggregateInputType
    _max?: PermissionAuditLogMaxAggregateInputType
  }

  export type PermissionAuditLogGroupByOutputType = {
    id: string
    tenantId: string
    actorId: string
    targetUserId: string
    action: string
    permissionKey: string | null
    oldValue: string | null
    newValue: string | null
    reason: string | null
    traceId: string | null
    createdAt: Date
    _count: PermissionAuditLogCountAggregateOutputType | null
    _min: PermissionAuditLogMinAggregateOutputType | null
    _max: PermissionAuditLogMaxAggregateOutputType | null
  }

  type GetPermissionAuditLogGroupByPayload<T extends PermissionAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type PermissionAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    actorId?: boolean
    targetUserId?: boolean
    action?: boolean
    permissionKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    reason?: boolean
    traceId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["permissionAuditLog"]>

  export type PermissionAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    actorId?: boolean
    targetUserId?: boolean
    action?: boolean
    permissionKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    reason?: boolean
    traceId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["permissionAuditLog"]>

  export type PermissionAuditLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    actorId?: boolean
    targetUserId?: boolean
    action?: boolean
    permissionKey?: boolean
    oldValue?: boolean
    newValue?: boolean
    reason?: boolean
    traceId?: boolean
    createdAt?: boolean
  }


  export type $PermissionAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      actorId: string
      targetUserId: string
      action: string
      permissionKey: string | null
      oldValue: string | null
      newValue: string | null
      reason: string | null
      traceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["permissionAuditLog"]>
    composites: {}
  }

  type PermissionAuditLogGetPayload<S extends boolean | null | undefined | PermissionAuditLogDefaultArgs> = $Result.GetResult<Prisma.$PermissionAuditLogPayload, S>

  type PermissionAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionAuditLogCountAggregateInputType | true
    }

  export interface PermissionAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionAuditLog'], meta: { name: 'PermissionAuditLog' } }
    /**
     * Find zero or one PermissionAuditLog that matches the filter.
     * @param {PermissionAuditLogFindUniqueArgs} args - Arguments to find a PermissionAuditLog
     * @example
     * // Get one PermissionAuditLog
     * const permissionAuditLog = await prisma.permissionAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionAuditLogFindUniqueArgs>(args: SelectSubset<T, PermissionAuditLogFindUniqueArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PermissionAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionAuditLogFindUniqueOrThrowArgs} args - Arguments to find a PermissionAuditLog
     * @example
     * // Get one PermissionAuditLog
     * const permissionAuditLog = await prisma.permissionAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PermissionAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogFindFirstArgs} args - Arguments to find a PermissionAuditLog
     * @example
     * // Get one PermissionAuditLog
     * const permissionAuditLog = await prisma.permissionAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionAuditLogFindFirstArgs>(args?: SelectSubset<T, PermissionAuditLogFindFirstArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PermissionAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogFindFirstOrThrowArgs} args - Arguments to find a PermissionAuditLog
     * @example
     * // Get one PermissionAuditLog
     * const permissionAuditLog = await prisma.permissionAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PermissionAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionAuditLogs
     * const permissionAuditLogs = await prisma.permissionAuditLog.findMany()
     * 
     * // Get first 10 PermissionAuditLogs
     * const permissionAuditLogs = await prisma.permissionAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionAuditLogWithIdOnly = await prisma.permissionAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionAuditLogFindManyArgs>(args?: SelectSubset<T, PermissionAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PermissionAuditLog.
     * @param {PermissionAuditLogCreateArgs} args - Arguments to create a PermissionAuditLog.
     * @example
     * // Create one PermissionAuditLog
     * const PermissionAuditLog = await prisma.permissionAuditLog.create({
     *   data: {
     *     // ... data to create a PermissionAuditLog
     *   }
     * })
     * 
     */
    create<T extends PermissionAuditLogCreateArgs>(args: SelectSubset<T, PermissionAuditLogCreateArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PermissionAuditLogs.
     * @param {PermissionAuditLogCreateManyArgs} args - Arguments to create many PermissionAuditLogs.
     * @example
     * // Create many PermissionAuditLogs
     * const permissionAuditLog = await prisma.permissionAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionAuditLogCreateManyArgs>(args?: SelectSubset<T, PermissionAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionAuditLogs and returns the data saved in the database.
     * @param {PermissionAuditLogCreateManyAndReturnArgs} args - Arguments to create many PermissionAuditLogs.
     * @example
     * // Create many PermissionAuditLogs
     * const permissionAuditLog = await prisma.permissionAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionAuditLogs and only return the `id`
     * const permissionAuditLogWithIdOnly = await prisma.permissionAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PermissionAuditLog.
     * @param {PermissionAuditLogDeleteArgs} args - Arguments to delete one PermissionAuditLog.
     * @example
     * // Delete one PermissionAuditLog
     * const PermissionAuditLog = await prisma.permissionAuditLog.delete({
     *   where: {
     *     // ... filter to delete one PermissionAuditLog
     *   }
     * })
     * 
     */
    delete<T extends PermissionAuditLogDeleteArgs>(args: SelectSubset<T, PermissionAuditLogDeleteArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PermissionAuditLog.
     * @param {PermissionAuditLogUpdateArgs} args - Arguments to update one PermissionAuditLog.
     * @example
     * // Update one PermissionAuditLog
     * const permissionAuditLog = await prisma.permissionAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionAuditLogUpdateArgs>(args: SelectSubset<T, PermissionAuditLogUpdateArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PermissionAuditLogs.
     * @param {PermissionAuditLogDeleteManyArgs} args - Arguments to filter PermissionAuditLogs to delete.
     * @example
     * // Delete a few PermissionAuditLogs
     * const { count } = await prisma.permissionAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionAuditLogDeleteManyArgs>(args?: SelectSubset<T, PermissionAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionAuditLogs
     * const permissionAuditLog = await prisma.permissionAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionAuditLogUpdateManyArgs>(args: SelectSubset<T, PermissionAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermissionAuditLog.
     * @param {PermissionAuditLogUpsertArgs} args - Arguments to update or create a PermissionAuditLog.
     * @example
     * // Update or create a PermissionAuditLog
     * const permissionAuditLog = await prisma.permissionAuditLog.upsert({
     *   create: {
     *     // ... data to create a PermissionAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends PermissionAuditLogUpsertArgs>(args: SelectSubset<T, PermissionAuditLogUpsertArgs<ExtArgs>>): Prisma__PermissionAuditLogClient<$Result.GetResult<Prisma.$PermissionAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PermissionAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogCountArgs} args - Arguments to filter PermissionAuditLogs to count.
     * @example
     * // Count the number of PermissionAuditLogs
     * const count = await prisma.permissionAuditLog.count({
     *   where: {
     *     // ... the filter for the PermissionAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends PermissionAuditLogCountArgs>(
      args?: Subset<T, PermissionAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAuditLogAggregateArgs>(args: Subset<T, PermissionAuditLogAggregateArgs>): Prisma.PrismaPromise<GetPermissionAuditLogAggregateType<T>>

    /**
     * Group by PermissionAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAuditLogGroupByArgs} args - Group by arguments.
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
      T extends PermissionAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: PermissionAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionAuditLog model
   */
  readonly fields: PermissionAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PermissionAuditLog model
   */ 
  interface PermissionAuditLogFieldRefs {
    readonly id: FieldRef<"PermissionAuditLog", 'String'>
    readonly tenantId: FieldRef<"PermissionAuditLog", 'String'>
    readonly actorId: FieldRef<"PermissionAuditLog", 'String'>
    readonly targetUserId: FieldRef<"PermissionAuditLog", 'String'>
    readonly action: FieldRef<"PermissionAuditLog", 'String'>
    readonly permissionKey: FieldRef<"PermissionAuditLog", 'String'>
    readonly oldValue: FieldRef<"PermissionAuditLog", 'String'>
    readonly newValue: FieldRef<"PermissionAuditLog", 'String'>
    readonly reason: FieldRef<"PermissionAuditLog", 'String'>
    readonly traceId: FieldRef<"PermissionAuditLog", 'String'>
    readonly createdAt: FieldRef<"PermissionAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PermissionAuditLog findUnique
   */
  export type PermissionAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which PermissionAuditLog to fetch.
     */
    where: PermissionAuditLogWhereUniqueInput
  }

  /**
   * PermissionAuditLog findUniqueOrThrow
   */
  export type PermissionAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which PermissionAuditLog to fetch.
     */
    where: PermissionAuditLogWhereUniqueInput
  }

  /**
   * PermissionAuditLog findFirst
   */
  export type PermissionAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which PermissionAuditLog to fetch.
     */
    where?: PermissionAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionAuditLogs to fetch.
     */
    orderBy?: PermissionAuditLogOrderByWithRelationInput | PermissionAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionAuditLogs.
     */
    cursor?: PermissionAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionAuditLogs.
     */
    distinct?: PermissionAuditLogScalarFieldEnum | PermissionAuditLogScalarFieldEnum[]
  }

  /**
   * PermissionAuditLog findFirstOrThrow
   */
  export type PermissionAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which PermissionAuditLog to fetch.
     */
    where?: PermissionAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionAuditLogs to fetch.
     */
    orderBy?: PermissionAuditLogOrderByWithRelationInput | PermissionAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionAuditLogs.
     */
    cursor?: PermissionAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionAuditLogs.
     */
    distinct?: PermissionAuditLogScalarFieldEnum | PermissionAuditLogScalarFieldEnum[]
  }

  /**
   * PermissionAuditLog findMany
   */
  export type PermissionAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which PermissionAuditLogs to fetch.
     */
    where?: PermissionAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionAuditLogs to fetch.
     */
    orderBy?: PermissionAuditLogOrderByWithRelationInput | PermissionAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionAuditLogs.
     */
    cursor?: PermissionAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionAuditLogs.
     */
    skip?: number
    distinct?: PermissionAuditLogScalarFieldEnum | PermissionAuditLogScalarFieldEnum[]
  }

  /**
   * PermissionAuditLog create
   */
  export type PermissionAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a PermissionAuditLog.
     */
    data: XOR<PermissionAuditLogCreateInput, PermissionAuditLogUncheckedCreateInput>
  }

  /**
   * PermissionAuditLog createMany
   */
  export type PermissionAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionAuditLogs.
     */
    data: PermissionAuditLogCreateManyInput | PermissionAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionAuditLog createManyAndReturn
   */
  export type PermissionAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PermissionAuditLogs.
     */
    data: PermissionAuditLogCreateManyInput | PermissionAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionAuditLog update
   */
  export type PermissionAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a PermissionAuditLog.
     */
    data: XOR<PermissionAuditLogUpdateInput, PermissionAuditLogUncheckedUpdateInput>
    /**
     * Choose, which PermissionAuditLog to update.
     */
    where: PermissionAuditLogWhereUniqueInput
  }

  /**
   * PermissionAuditLog updateMany
   */
  export type PermissionAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionAuditLogs.
     */
    data: XOR<PermissionAuditLogUpdateManyMutationInput, PermissionAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which PermissionAuditLogs to update
     */
    where?: PermissionAuditLogWhereInput
  }

  /**
   * PermissionAuditLog upsert
   */
  export type PermissionAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the PermissionAuditLog to update in case it exists.
     */
    where: PermissionAuditLogWhereUniqueInput
    /**
     * In case the PermissionAuditLog found by the `where` argument doesn't exist, create a new PermissionAuditLog with this data.
     */
    create: XOR<PermissionAuditLogCreateInput, PermissionAuditLogUncheckedCreateInput>
    /**
     * In case the PermissionAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionAuditLogUpdateInput, PermissionAuditLogUncheckedUpdateInput>
  }

  /**
   * PermissionAuditLog delete
   */
  export type PermissionAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
    /**
     * Filter which PermissionAuditLog to delete.
     */
    where: PermissionAuditLogWhereUniqueInput
  }

  /**
   * PermissionAuditLog deleteMany
   */
  export type PermissionAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionAuditLogs to delete
     */
    where?: PermissionAuditLogWhereInput
  }

  /**
   * PermissionAuditLog without action
   */
  export type PermissionAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionAuditLog
     */
    select?: PermissionAuditLogSelect<ExtArgs> | null
  }


  /**
   * Model Credential
   */

  export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialCountAggregateOutputType = {
    id: number
    userId: number
    password: number
    salt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CredentialMinAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialCountAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credential to aggregate.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type CredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithAggregationInput | CredentialOrderByWithAggregationInput[]
    by: CredentialScalarFieldEnum[] | CredentialScalarFieldEnum
    having?: CredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }

  export type CredentialGroupByOutputType = {
    id: string
    userId: string
    password: string
    salt: string
    createdAt: Date
    updatedAt: Date
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends CredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type CredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      password: string
      salt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credential"]>
    composites: {}
  }

  type CredentialGetPayload<S extends boolean | null | undefined | CredentialDefaultArgs> = $Result.GetResult<Prisma.$CredentialPayload, S>

  type CredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CredentialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CredentialCountAggregateInputType | true
    }

  export interface CredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credential'], meta: { name: 'Credential' } }
    /**
     * Find zero or one Credential that matches the filter.
     * @param {CredentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialFindUniqueArgs>(args: SelectSubset<T, CredentialFindUniqueArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Credential that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CredentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialFindFirstArgs>(args?: SelectSubset<T, CredentialFindFirstArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Credential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialWithIdOnly = await prisma.credential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialFindManyArgs>(args?: SelectSubset<T, CredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Credential.
     * @param {CredentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
     */
    create<T extends CredentialCreateArgs>(args: SelectSubset<T, CredentialCreateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Credentials.
     * @param {CredentialCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialCreateManyArgs>(args?: SelectSubset<T, CredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Credential.
     * @param {CredentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
     */
    delete<T extends CredentialDeleteArgs>(args: SelectSubset<T, CredentialDeleteArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Credential.
     * @param {CredentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialUpdateArgs>(args: SelectSubset<T, CredentialUpdateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialDeleteManyArgs>(args?: SelectSubset<T, CredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialUpdateManyArgs>(args: SelectSubset<T, CredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Credential.
     * @param {CredentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
     */
    upsert<T extends CredentialUpsertArgs>(args: SelectSubset<T, CredentialUpsertArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialCountArgs>(
      args?: Subset<T, CredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): Prisma.PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialGroupByArgs} args - Group by arguments.
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
      T extends CredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialGroupByArgs['orderBy'] }
        : { orderBy?: CredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credential model
   */
  readonly fields: CredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Credential model
   */ 
  interface CredentialFieldRefs {
    readonly id: FieldRef<"Credential", 'String'>
    readonly userId: FieldRef<"Credential", 'String'>
    readonly password: FieldRef<"Credential", 'String'>
    readonly salt: FieldRef<"Credential", 'String'>
    readonly createdAt: FieldRef<"Credential", 'DateTime'>
    readonly updatedAt: FieldRef<"Credential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credential findUnique
   */
  export type CredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findUniqueOrThrow
   */
  export type CredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findFirst
   */
  export type CredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findFirstOrThrow
   */
  export type CredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findMany
   */
  export type CredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential create
   */
  export type CredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * The data needed to create a Credential.
     */
    data: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
  }

  /**
   * Credential createMany
   */
  export type CredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credential createManyAndReturn
   */
  export type CredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credential update
   */
  export type CredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * The data needed to update a Credential.
     */
    data: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
    /**
     * Choose, which Credential to update.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential updateMany
   */
  export type CredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
  }

  /**
   * Credential upsert
   */
  export type CredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * The filter to search for the Credential to update in case it exists.
     */
    where: CredentialWhereUniqueInput
    /**
     * In case the Credential found by the `where` argument doesn't exist, create a new Credential with this data.
     */
    create: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
    /**
     * In case the Credential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
  }

  /**
   * Credential delete
   */
  export type CredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Filter which Credential to delete.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential deleteMany
   */
  export type CredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialWhereInput
  }

  /**
   * Credential without action
   */
  export type CredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    type: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    type: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    type: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    type?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    type?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    type?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    type: string
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }


  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      type: string
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'String'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly used: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
  }


  /**
   * Model MfaSecret
   */

  export type AggregateMfaSecret = {
    _count: MfaSecretCountAggregateOutputType | null
    _min: MfaSecretMinAggregateOutputType | null
    _max: MfaSecretMaxAggregateOutputType | null
  }

  export type MfaSecretMinAggregateOutputType = {
    id: string | null
    userId: string | null
    secret: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MfaSecretMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    secret: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MfaSecretCountAggregateOutputType = {
    id: number
    userId: number
    secret: number
    enabled: number
    backupCodes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MfaSecretMinAggregateInputType = {
    id?: true
    userId?: true
    secret?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MfaSecretMaxAggregateInputType = {
    id?: true
    userId?: true
    secret?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MfaSecretCountAggregateInputType = {
    id?: true
    userId?: true
    secret?: true
    enabled?: true
    backupCodes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MfaSecretAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfaSecret to aggregate.
     */
    where?: MfaSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfaSecrets to fetch.
     */
    orderBy?: MfaSecretOrderByWithRelationInput | MfaSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MfaSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfaSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfaSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MfaSecrets
    **/
    _count?: true | MfaSecretCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MfaSecretMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MfaSecretMaxAggregateInputType
  }

  export type GetMfaSecretAggregateType<T extends MfaSecretAggregateArgs> = {
        [P in keyof T & keyof AggregateMfaSecret]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMfaSecret[P]>
      : GetScalarType<T[P], AggregateMfaSecret[P]>
  }




  export type MfaSecretGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfaSecretWhereInput
    orderBy?: MfaSecretOrderByWithAggregationInput | MfaSecretOrderByWithAggregationInput[]
    by: MfaSecretScalarFieldEnum[] | MfaSecretScalarFieldEnum
    having?: MfaSecretScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MfaSecretCountAggregateInputType | true
    _min?: MfaSecretMinAggregateInputType
    _max?: MfaSecretMaxAggregateInputType
  }

  export type MfaSecretGroupByOutputType = {
    id: string
    userId: string
    secret: string
    enabled: boolean
    backupCodes: string[]
    createdAt: Date
    updatedAt: Date
    _count: MfaSecretCountAggregateOutputType | null
    _min: MfaSecretMinAggregateOutputType | null
    _max: MfaSecretMaxAggregateOutputType | null
  }

  type GetMfaSecretGroupByPayload<T extends MfaSecretGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MfaSecretGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MfaSecretGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MfaSecretGroupByOutputType[P]>
            : GetScalarType<T[P], MfaSecretGroupByOutputType[P]>
        }
      >
    >


  export type MfaSecretSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    secret?: boolean
    enabled?: boolean
    backupCodes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mfaSecret"]>

  export type MfaSecretSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    secret?: boolean
    enabled?: boolean
    backupCodes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mfaSecret"]>

  export type MfaSecretSelectScalar = {
    id?: boolean
    userId?: boolean
    secret?: boolean
    enabled?: boolean
    backupCodes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MfaSecretPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MfaSecret"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      secret: string
      enabled: boolean
      backupCodes: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mfaSecret"]>
    composites: {}
  }

  type MfaSecretGetPayload<S extends boolean | null | undefined | MfaSecretDefaultArgs> = $Result.GetResult<Prisma.$MfaSecretPayload, S>

  type MfaSecretCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MfaSecretFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MfaSecretCountAggregateInputType | true
    }

  export interface MfaSecretDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MfaSecret'], meta: { name: 'MfaSecret' } }
    /**
     * Find zero or one MfaSecret that matches the filter.
     * @param {MfaSecretFindUniqueArgs} args - Arguments to find a MfaSecret
     * @example
     * // Get one MfaSecret
     * const mfaSecret = await prisma.mfaSecret.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MfaSecretFindUniqueArgs>(args: SelectSubset<T, MfaSecretFindUniqueArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MfaSecret that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MfaSecretFindUniqueOrThrowArgs} args - Arguments to find a MfaSecret
     * @example
     * // Get one MfaSecret
     * const mfaSecret = await prisma.mfaSecret.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MfaSecretFindUniqueOrThrowArgs>(args: SelectSubset<T, MfaSecretFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MfaSecret that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretFindFirstArgs} args - Arguments to find a MfaSecret
     * @example
     * // Get one MfaSecret
     * const mfaSecret = await prisma.mfaSecret.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MfaSecretFindFirstArgs>(args?: SelectSubset<T, MfaSecretFindFirstArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MfaSecret that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretFindFirstOrThrowArgs} args - Arguments to find a MfaSecret
     * @example
     * // Get one MfaSecret
     * const mfaSecret = await prisma.mfaSecret.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MfaSecretFindFirstOrThrowArgs>(args?: SelectSubset<T, MfaSecretFindFirstOrThrowArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MfaSecrets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MfaSecrets
     * const mfaSecrets = await prisma.mfaSecret.findMany()
     * 
     * // Get first 10 MfaSecrets
     * const mfaSecrets = await prisma.mfaSecret.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mfaSecretWithIdOnly = await prisma.mfaSecret.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MfaSecretFindManyArgs>(args?: SelectSubset<T, MfaSecretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MfaSecret.
     * @param {MfaSecretCreateArgs} args - Arguments to create a MfaSecret.
     * @example
     * // Create one MfaSecret
     * const MfaSecret = await prisma.mfaSecret.create({
     *   data: {
     *     // ... data to create a MfaSecret
     *   }
     * })
     * 
     */
    create<T extends MfaSecretCreateArgs>(args: SelectSubset<T, MfaSecretCreateArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MfaSecrets.
     * @param {MfaSecretCreateManyArgs} args - Arguments to create many MfaSecrets.
     * @example
     * // Create many MfaSecrets
     * const mfaSecret = await prisma.mfaSecret.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MfaSecretCreateManyArgs>(args?: SelectSubset<T, MfaSecretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MfaSecrets and returns the data saved in the database.
     * @param {MfaSecretCreateManyAndReturnArgs} args - Arguments to create many MfaSecrets.
     * @example
     * // Create many MfaSecrets
     * const mfaSecret = await prisma.mfaSecret.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MfaSecrets and only return the `id`
     * const mfaSecretWithIdOnly = await prisma.mfaSecret.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MfaSecretCreateManyAndReturnArgs>(args?: SelectSubset<T, MfaSecretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MfaSecret.
     * @param {MfaSecretDeleteArgs} args - Arguments to delete one MfaSecret.
     * @example
     * // Delete one MfaSecret
     * const MfaSecret = await prisma.mfaSecret.delete({
     *   where: {
     *     // ... filter to delete one MfaSecret
     *   }
     * })
     * 
     */
    delete<T extends MfaSecretDeleteArgs>(args: SelectSubset<T, MfaSecretDeleteArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MfaSecret.
     * @param {MfaSecretUpdateArgs} args - Arguments to update one MfaSecret.
     * @example
     * // Update one MfaSecret
     * const mfaSecret = await prisma.mfaSecret.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MfaSecretUpdateArgs>(args: SelectSubset<T, MfaSecretUpdateArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MfaSecrets.
     * @param {MfaSecretDeleteManyArgs} args - Arguments to filter MfaSecrets to delete.
     * @example
     * // Delete a few MfaSecrets
     * const { count } = await prisma.mfaSecret.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MfaSecretDeleteManyArgs>(args?: SelectSubset<T, MfaSecretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MfaSecrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MfaSecrets
     * const mfaSecret = await prisma.mfaSecret.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MfaSecretUpdateManyArgs>(args: SelectSubset<T, MfaSecretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MfaSecret.
     * @param {MfaSecretUpsertArgs} args - Arguments to update or create a MfaSecret.
     * @example
     * // Update or create a MfaSecret
     * const mfaSecret = await prisma.mfaSecret.upsert({
     *   create: {
     *     // ... data to create a MfaSecret
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MfaSecret we want to update
     *   }
     * })
     */
    upsert<T extends MfaSecretUpsertArgs>(args: SelectSubset<T, MfaSecretUpsertArgs<ExtArgs>>): Prisma__MfaSecretClient<$Result.GetResult<Prisma.$MfaSecretPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MfaSecrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretCountArgs} args - Arguments to filter MfaSecrets to count.
     * @example
     * // Count the number of MfaSecrets
     * const count = await prisma.mfaSecret.count({
     *   where: {
     *     // ... the filter for the MfaSecrets we want to count
     *   }
     * })
    **/
    count<T extends MfaSecretCountArgs>(
      args?: Subset<T, MfaSecretCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MfaSecretCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MfaSecret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MfaSecretAggregateArgs>(args: Subset<T, MfaSecretAggregateArgs>): Prisma.PrismaPromise<GetMfaSecretAggregateType<T>>

    /**
     * Group by MfaSecret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfaSecretGroupByArgs} args - Group by arguments.
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
      T extends MfaSecretGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MfaSecretGroupByArgs['orderBy'] }
        : { orderBy?: MfaSecretGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MfaSecretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaSecretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MfaSecret model
   */
  readonly fields: MfaSecretFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MfaSecret.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MfaSecretClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MfaSecret model
   */ 
  interface MfaSecretFieldRefs {
    readonly id: FieldRef<"MfaSecret", 'String'>
    readonly userId: FieldRef<"MfaSecret", 'String'>
    readonly secret: FieldRef<"MfaSecret", 'String'>
    readonly enabled: FieldRef<"MfaSecret", 'Boolean'>
    readonly backupCodes: FieldRef<"MfaSecret", 'String[]'>
    readonly createdAt: FieldRef<"MfaSecret", 'DateTime'>
    readonly updatedAt: FieldRef<"MfaSecret", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MfaSecret findUnique
   */
  export type MfaSecretFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * Filter, which MfaSecret to fetch.
     */
    where: MfaSecretWhereUniqueInput
  }

  /**
   * MfaSecret findUniqueOrThrow
   */
  export type MfaSecretFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * Filter, which MfaSecret to fetch.
     */
    where: MfaSecretWhereUniqueInput
  }

  /**
   * MfaSecret findFirst
   */
  export type MfaSecretFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * Filter, which MfaSecret to fetch.
     */
    where?: MfaSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfaSecrets to fetch.
     */
    orderBy?: MfaSecretOrderByWithRelationInput | MfaSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfaSecrets.
     */
    cursor?: MfaSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfaSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfaSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfaSecrets.
     */
    distinct?: MfaSecretScalarFieldEnum | MfaSecretScalarFieldEnum[]
  }

  /**
   * MfaSecret findFirstOrThrow
   */
  export type MfaSecretFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * Filter, which MfaSecret to fetch.
     */
    where?: MfaSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfaSecrets to fetch.
     */
    orderBy?: MfaSecretOrderByWithRelationInput | MfaSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfaSecrets.
     */
    cursor?: MfaSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfaSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfaSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfaSecrets.
     */
    distinct?: MfaSecretScalarFieldEnum | MfaSecretScalarFieldEnum[]
  }

  /**
   * MfaSecret findMany
   */
  export type MfaSecretFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * Filter, which MfaSecrets to fetch.
     */
    where?: MfaSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfaSecrets to fetch.
     */
    orderBy?: MfaSecretOrderByWithRelationInput | MfaSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MfaSecrets.
     */
    cursor?: MfaSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfaSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfaSecrets.
     */
    skip?: number
    distinct?: MfaSecretScalarFieldEnum | MfaSecretScalarFieldEnum[]
  }

  /**
   * MfaSecret create
   */
  export type MfaSecretCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * The data needed to create a MfaSecret.
     */
    data: XOR<MfaSecretCreateInput, MfaSecretUncheckedCreateInput>
  }

  /**
   * MfaSecret createMany
   */
  export type MfaSecretCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MfaSecrets.
     */
    data: MfaSecretCreateManyInput | MfaSecretCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MfaSecret createManyAndReturn
   */
  export type MfaSecretCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MfaSecrets.
     */
    data: MfaSecretCreateManyInput | MfaSecretCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MfaSecret update
   */
  export type MfaSecretUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * The data needed to update a MfaSecret.
     */
    data: XOR<MfaSecretUpdateInput, MfaSecretUncheckedUpdateInput>
    /**
     * Choose, which MfaSecret to update.
     */
    where: MfaSecretWhereUniqueInput
  }

  /**
   * MfaSecret updateMany
   */
  export type MfaSecretUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MfaSecrets.
     */
    data: XOR<MfaSecretUpdateManyMutationInput, MfaSecretUncheckedUpdateManyInput>
    /**
     * Filter which MfaSecrets to update
     */
    where?: MfaSecretWhereInput
  }

  /**
   * MfaSecret upsert
   */
  export type MfaSecretUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * The filter to search for the MfaSecret to update in case it exists.
     */
    where: MfaSecretWhereUniqueInput
    /**
     * In case the MfaSecret found by the `where` argument doesn't exist, create a new MfaSecret with this data.
     */
    create: XOR<MfaSecretCreateInput, MfaSecretUncheckedCreateInput>
    /**
     * In case the MfaSecret was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MfaSecretUpdateInput, MfaSecretUncheckedUpdateInput>
  }

  /**
   * MfaSecret delete
   */
  export type MfaSecretDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
    /**
     * Filter which MfaSecret to delete.
     */
    where: MfaSecretWhereUniqueInput
  }

  /**
   * MfaSecret deleteMany
   */
  export type MfaSecretDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfaSecrets to delete
     */
    where?: MfaSecretWhereInput
  }

  /**
   * MfaSecret without action
   */
  export type MfaSecretDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfaSecret
     */
    select?: MfaSecretSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPermissionScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    permissionKey: 'permissionKey',
    isGranted: 'isGranted',
    scope: 'scope',
    allowedShopIds: 'allowedShopIds',
    grantedAt: 'grantedAt',
    expiresAt: 'expiresAt',
    grantedBy: 'grantedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPermissionScalarFieldEnum = (typeof UserPermissionScalarFieldEnum)[keyof typeof UserPermissionScalarFieldEnum]


  export const PermissionTemplateScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description',
    isSystem: 'isSystem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionTemplateScalarFieldEnum = (typeof PermissionTemplateScalarFieldEnum)[keyof typeof PermissionTemplateScalarFieldEnum]


  export const TemplatePermissionScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    permissionKey: 'permissionKey',
    scope: 'scope',
    allowedShopIds: 'allowedShopIds',
    createdAt: 'createdAt'
  };

  export type TemplatePermissionScalarFieldEnum = (typeof TemplatePermissionScalarFieldEnum)[keyof typeof TemplatePermissionScalarFieldEnum]


  export const UserTemplateAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    templateId: 'templateId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type UserTemplateAssignmentScalarFieldEnum = (typeof UserTemplateAssignmentScalarFieldEnum)[keyof typeof UserTemplateAssignmentScalarFieldEnum]


  export const PermissionAuditLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    actorId: 'actorId',
    targetUserId: 'targetUserId',
    action: 'action',
    permissionKey: 'permissionKey',
    oldValue: 'oldValue',
    newValue: 'newValue',
    reason: 'reason',
    traceId: 'traceId',
    createdAt: 'createdAt'
  };

  export type PermissionAuditLogScalarFieldEnum = (typeof PermissionAuditLogScalarFieldEnum)[keyof typeof PermissionAuditLogScalarFieldEnum]


  export const CredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    password: 'password',
    salt: 'salt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    type: 'type',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const MfaSecretScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    secret: 'secret',
    enabled: 'enabled',
    backupCodes: 'backupCodes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MfaSecretScalarFieldEnum = (typeof MfaSecretScalarFieldEnum)[keyof typeof MfaSecretScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userPermissions?: UserPermissionListRelationFilter
    userTemplateAssignments?: UserTemplateAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userPermissions?: UserPermissionOrderByRelationAggregateInput
    userTemplateAssignments?: UserTemplateAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenantId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userPermissions?: UserPermissionListRelationFilter
    userTemplateAssignments?: UserTemplateAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserPermissionWhereInput = {
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    id?: StringFilter<"UserPermission"> | string
    tenantId?: StringFilter<"UserPermission"> | string
    userId?: StringFilter<"UserPermission"> | string
    permissionKey?: StringFilter<"UserPermission"> | string
    isGranted?: BoolFilter<"UserPermission"> | boolean
    scope?: StringFilter<"UserPermission"> | string
    allowedShopIds?: StringNullableListFilter<"UserPermission">
    grantedAt?: DateTimeFilter<"UserPermission"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserPermission"> | Date | string | null
    grantedBy?: StringFilter<"UserPermission"> | string
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserPermissionOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    permissionKey?: SortOrder
    isGranted?: SortOrder
    scope?: SortOrder
    allowedShopIds?: SortOrder
    grantedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    grantedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_permissionKey?: UserPermissionUserIdPermissionKeyCompoundUniqueInput
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    tenantId?: StringFilter<"UserPermission"> | string
    userId?: StringFilter<"UserPermission"> | string
    permissionKey?: StringFilter<"UserPermission"> | string
    isGranted?: BoolFilter<"UserPermission"> | boolean
    scope?: StringFilter<"UserPermission"> | string
    allowedShopIds?: StringNullableListFilter<"UserPermission">
    grantedAt?: DateTimeFilter<"UserPermission"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserPermission"> | Date | string | null
    grantedBy?: StringFilter<"UserPermission"> | string
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_permissionKey">

  export type UserPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    permissionKey?: SortOrder
    isGranted?: SortOrder
    scope?: SortOrder
    allowedShopIds?: SortOrder
    grantedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    grantedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPermissionCountOrderByAggregateInput
    _max?: UserPermissionMaxOrderByAggregateInput
    _min?: UserPermissionMinOrderByAggregateInput
  }

  export type UserPermissionScalarWhereWithAggregatesInput = {
    AND?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    OR?: UserPermissionScalarWhereWithAggregatesInput[]
    NOT?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPermission"> | string
    tenantId?: StringWithAggregatesFilter<"UserPermission"> | string
    userId?: StringWithAggregatesFilter<"UserPermission"> | string
    permissionKey?: StringWithAggregatesFilter<"UserPermission"> | string
    isGranted?: BoolWithAggregatesFilter<"UserPermission"> | boolean
    scope?: StringWithAggregatesFilter<"UserPermission"> | string
    allowedShopIds?: StringNullableListFilter<"UserPermission">
    grantedAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserPermission"> | Date | string | null
    grantedBy?: StringWithAggregatesFilter<"UserPermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
  }

  export type PermissionTemplateWhereInput = {
    AND?: PermissionTemplateWhereInput | PermissionTemplateWhereInput[]
    OR?: PermissionTemplateWhereInput[]
    NOT?: PermissionTemplateWhereInput | PermissionTemplateWhereInput[]
    id?: StringFilter<"PermissionTemplate"> | string
    tenantId?: StringFilter<"PermissionTemplate"> | string
    name?: StringFilter<"PermissionTemplate"> | string
    description?: StringNullableFilter<"PermissionTemplate"> | string | null
    isSystem?: BoolFilter<"PermissionTemplate"> | boolean
    createdAt?: DateTimeFilter<"PermissionTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PermissionTemplate"> | Date | string
    templatePermissions?: TemplatePermissionListRelationFilter
    userTemplateAssignments?: UserTemplateAssignmentListRelationFilter
  }

  export type PermissionTemplateOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templatePermissions?: TemplatePermissionOrderByRelationAggregateInput
    userTemplateAssignments?: UserTemplateAssignmentOrderByRelationAggregateInput
  }

  export type PermissionTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_name?: PermissionTemplateTenantIdNameCompoundUniqueInput
    AND?: PermissionTemplateWhereInput | PermissionTemplateWhereInput[]
    OR?: PermissionTemplateWhereInput[]
    NOT?: PermissionTemplateWhereInput | PermissionTemplateWhereInput[]
    tenantId?: StringFilter<"PermissionTemplate"> | string
    name?: StringFilter<"PermissionTemplate"> | string
    description?: StringNullableFilter<"PermissionTemplate"> | string | null
    isSystem?: BoolFilter<"PermissionTemplate"> | boolean
    createdAt?: DateTimeFilter<"PermissionTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PermissionTemplate"> | Date | string
    templatePermissions?: TemplatePermissionListRelationFilter
    userTemplateAssignments?: UserTemplateAssignmentListRelationFilter
  }, "id" | "tenantId_name">

  export type PermissionTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionTemplateCountOrderByAggregateInput
    _max?: PermissionTemplateMaxOrderByAggregateInput
    _min?: PermissionTemplateMinOrderByAggregateInput
  }

  export type PermissionTemplateScalarWhereWithAggregatesInput = {
    AND?: PermissionTemplateScalarWhereWithAggregatesInput | PermissionTemplateScalarWhereWithAggregatesInput[]
    OR?: PermissionTemplateScalarWhereWithAggregatesInput[]
    NOT?: PermissionTemplateScalarWhereWithAggregatesInput | PermissionTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PermissionTemplate"> | string
    tenantId?: StringWithAggregatesFilter<"PermissionTemplate"> | string
    name?: StringWithAggregatesFilter<"PermissionTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"PermissionTemplate"> | string | null
    isSystem?: BoolWithAggregatesFilter<"PermissionTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PermissionTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PermissionTemplate"> | Date | string
  }

  export type TemplatePermissionWhereInput = {
    AND?: TemplatePermissionWhereInput | TemplatePermissionWhereInput[]
    OR?: TemplatePermissionWhereInput[]
    NOT?: TemplatePermissionWhereInput | TemplatePermissionWhereInput[]
    id?: StringFilter<"TemplatePermission"> | string
    templateId?: StringFilter<"TemplatePermission"> | string
    permissionKey?: StringFilter<"TemplatePermission"> | string
    scope?: StringFilter<"TemplatePermission"> | string
    allowedShopIds?: StringNullableListFilter<"TemplatePermission">
    createdAt?: DateTimeFilter<"TemplatePermission"> | Date | string
    template?: XOR<PermissionTemplateRelationFilter, PermissionTemplateWhereInput>
  }

  export type TemplatePermissionOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    permissionKey?: SortOrder
    scope?: SortOrder
    allowedShopIds?: SortOrder
    createdAt?: SortOrder
    template?: PermissionTemplateOrderByWithRelationInput
  }

  export type TemplatePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    templateId_permissionKey?: TemplatePermissionTemplateIdPermissionKeyCompoundUniqueInput
    AND?: TemplatePermissionWhereInput | TemplatePermissionWhereInput[]
    OR?: TemplatePermissionWhereInput[]
    NOT?: TemplatePermissionWhereInput | TemplatePermissionWhereInput[]
    templateId?: StringFilter<"TemplatePermission"> | string
    permissionKey?: StringFilter<"TemplatePermission"> | string
    scope?: StringFilter<"TemplatePermission"> | string
    allowedShopIds?: StringNullableListFilter<"TemplatePermission">
    createdAt?: DateTimeFilter<"TemplatePermission"> | Date | string
    template?: XOR<PermissionTemplateRelationFilter, PermissionTemplateWhereInput>
  }, "id" | "templateId_permissionKey">

  export type TemplatePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    permissionKey?: SortOrder
    scope?: SortOrder
    allowedShopIds?: SortOrder
    createdAt?: SortOrder
    _count?: TemplatePermissionCountOrderByAggregateInput
    _max?: TemplatePermissionMaxOrderByAggregateInput
    _min?: TemplatePermissionMinOrderByAggregateInput
  }

  export type TemplatePermissionScalarWhereWithAggregatesInput = {
    AND?: TemplatePermissionScalarWhereWithAggregatesInput | TemplatePermissionScalarWhereWithAggregatesInput[]
    OR?: TemplatePermissionScalarWhereWithAggregatesInput[]
    NOT?: TemplatePermissionScalarWhereWithAggregatesInput | TemplatePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplatePermission"> | string
    templateId?: StringWithAggregatesFilter<"TemplatePermission"> | string
    permissionKey?: StringWithAggregatesFilter<"TemplatePermission"> | string
    scope?: StringWithAggregatesFilter<"TemplatePermission"> | string
    allowedShopIds?: StringNullableListFilter<"TemplatePermission">
    createdAt?: DateTimeWithAggregatesFilter<"TemplatePermission"> | Date | string
  }

  export type UserTemplateAssignmentWhereInput = {
    AND?: UserTemplateAssignmentWhereInput | UserTemplateAssignmentWhereInput[]
    OR?: UserTemplateAssignmentWhereInput[]
    NOT?: UserTemplateAssignmentWhereInput | UserTemplateAssignmentWhereInput[]
    id?: StringFilter<"UserTemplateAssignment"> | string
    userId?: StringFilter<"UserTemplateAssignment"> | string
    templateId?: StringFilter<"UserTemplateAssignment"> | string
    assignedAt?: DateTimeFilter<"UserTemplateAssignment"> | Date | string
    assignedBy?: StringFilter<"UserTemplateAssignment"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    template?: XOR<PermissionTemplateRelationFilter, PermissionTemplateWhereInput>
  }

  export type UserTemplateAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    user?: UserOrderByWithRelationInput
    template?: PermissionTemplateOrderByWithRelationInput
  }

  export type UserTemplateAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_templateId?: UserTemplateAssignmentUserIdTemplateIdCompoundUniqueInput
    AND?: UserTemplateAssignmentWhereInput | UserTemplateAssignmentWhereInput[]
    OR?: UserTemplateAssignmentWhereInput[]
    NOT?: UserTemplateAssignmentWhereInput | UserTemplateAssignmentWhereInput[]
    userId?: StringFilter<"UserTemplateAssignment"> | string
    templateId?: StringFilter<"UserTemplateAssignment"> | string
    assignedAt?: DateTimeFilter<"UserTemplateAssignment"> | Date | string
    assignedBy?: StringFilter<"UserTemplateAssignment"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    template?: XOR<PermissionTemplateRelationFilter, PermissionTemplateWhereInput>
  }, "id" | "userId_templateId">

  export type UserTemplateAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: UserTemplateAssignmentCountOrderByAggregateInput
    _max?: UserTemplateAssignmentMaxOrderByAggregateInput
    _min?: UserTemplateAssignmentMinOrderByAggregateInput
  }

  export type UserTemplateAssignmentScalarWhereWithAggregatesInput = {
    AND?: UserTemplateAssignmentScalarWhereWithAggregatesInput | UserTemplateAssignmentScalarWhereWithAggregatesInput[]
    OR?: UserTemplateAssignmentScalarWhereWithAggregatesInput[]
    NOT?: UserTemplateAssignmentScalarWhereWithAggregatesInput | UserTemplateAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTemplateAssignment"> | string
    userId?: StringWithAggregatesFilter<"UserTemplateAssignment"> | string
    templateId?: StringWithAggregatesFilter<"UserTemplateAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UserTemplateAssignment"> | Date | string
    assignedBy?: StringWithAggregatesFilter<"UserTemplateAssignment"> | string
  }

  export type PermissionAuditLogWhereInput = {
    AND?: PermissionAuditLogWhereInput | PermissionAuditLogWhereInput[]
    OR?: PermissionAuditLogWhereInput[]
    NOT?: PermissionAuditLogWhereInput | PermissionAuditLogWhereInput[]
    id?: StringFilter<"PermissionAuditLog"> | string
    tenantId?: StringFilter<"PermissionAuditLog"> | string
    actorId?: StringFilter<"PermissionAuditLog"> | string
    targetUserId?: StringFilter<"PermissionAuditLog"> | string
    action?: StringFilter<"PermissionAuditLog"> | string
    permissionKey?: StringNullableFilter<"PermissionAuditLog"> | string | null
    oldValue?: StringNullableFilter<"PermissionAuditLog"> | string | null
    newValue?: StringNullableFilter<"PermissionAuditLog"> | string | null
    reason?: StringNullableFilter<"PermissionAuditLog"> | string | null
    traceId?: StringNullableFilter<"PermissionAuditLog"> | string | null
    createdAt?: DateTimeFilter<"PermissionAuditLog"> | Date | string
  }

  export type PermissionAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    permissionKey?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    traceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PermissionAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissionAuditLogWhereInput | PermissionAuditLogWhereInput[]
    OR?: PermissionAuditLogWhereInput[]
    NOT?: PermissionAuditLogWhereInput | PermissionAuditLogWhereInput[]
    tenantId?: StringFilter<"PermissionAuditLog"> | string
    actorId?: StringFilter<"PermissionAuditLog"> | string
    targetUserId?: StringFilter<"PermissionAuditLog"> | string
    action?: StringFilter<"PermissionAuditLog"> | string
    permissionKey?: StringNullableFilter<"PermissionAuditLog"> | string | null
    oldValue?: StringNullableFilter<"PermissionAuditLog"> | string | null
    newValue?: StringNullableFilter<"PermissionAuditLog"> | string | null
    reason?: StringNullableFilter<"PermissionAuditLog"> | string | null
    traceId?: StringNullableFilter<"PermissionAuditLog"> | string | null
    createdAt?: DateTimeFilter<"PermissionAuditLog"> | Date | string
  }, "id">

  export type PermissionAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    permissionKey?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    traceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PermissionAuditLogCountOrderByAggregateInput
    _max?: PermissionAuditLogMaxOrderByAggregateInput
    _min?: PermissionAuditLogMinOrderByAggregateInput
  }

  export type PermissionAuditLogScalarWhereWithAggregatesInput = {
    AND?: PermissionAuditLogScalarWhereWithAggregatesInput | PermissionAuditLogScalarWhereWithAggregatesInput[]
    OR?: PermissionAuditLogScalarWhereWithAggregatesInput[]
    NOT?: PermissionAuditLogScalarWhereWithAggregatesInput | PermissionAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PermissionAuditLog"> | string
    tenantId?: StringWithAggregatesFilter<"PermissionAuditLog"> | string
    actorId?: StringWithAggregatesFilter<"PermissionAuditLog"> | string
    targetUserId?: StringWithAggregatesFilter<"PermissionAuditLog"> | string
    action?: StringWithAggregatesFilter<"PermissionAuditLog"> | string
    permissionKey?: StringNullableWithAggregatesFilter<"PermissionAuditLog"> | string | null
    oldValue?: StringNullableWithAggregatesFilter<"PermissionAuditLog"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"PermissionAuditLog"> | string | null
    reason?: StringNullableWithAggregatesFilter<"PermissionAuditLog"> | string | null
    traceId?: StringNullableWithAggregatesFilter<"PermissionAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PermissionAuditLog"> | Date | string
  }

  export type CredentialWhereInput = {
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    id?: StringFilter<"Credential"> | string
    userId?: StringFilter<"Credential"> | string
    password?: StringFilter<"Credential"> | string
    salt?: StringFilter<"Credential"> | string
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
  }

  export type CredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    password?: StringFilter<"Credential"> | string
    salt?: StringFilter<"Credential"> | string
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
  }, "id" | "userId">

  export type CredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CredentialCountOrderByAggregateInput
    _max?: CredentialMaxOrderByAggregateInput
    _min?: CredentialMinOrderByAggregateInput
  }

  export type CredentialScalarWhereWithAggregatesInput = {
    AND?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    OR?: CredentialScalarWhereWithAggregatesInput[]
    NOT?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credential"> | string
    userId?: StringWithAggregatesFilter<"Credential"> | string
    password?: StringWithAggregatesFilter<"Credential"> | string
    salt?: StringWithAggregatesFilter<"Credential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    used?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    userId?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    used?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: StringWithAggregatesFilter<"Token"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    used?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type MfaSecretWhereInput = {
    AND?: MfaSecretWhereInput | MfaSecretWhereInput[]
    OR?: MfaSecretWhereInput[]
    NOT?: MfaSecretWhereInput | MfaSecretWhereInput[]
    id?: StringFilter<"MfaSecret"> | string
    userId?: StringFilter<"MfaSecret"> | string
    secret?: StringFilter<"MfaSecret"> | string
    enabled?: BoolFilter<"MfaSecret"> | boolean
    backupCodes?: StringNullableListFilter<"MfaSecret">
    createdAt?: DateTimeFilter<"MfaSecret"> | Date | string
    updatedAt?: DateTimeFilter<"MfaSecret"> | Date | string
  }

  export type MfaSecretOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    secret?: SortOrder
    enabled?: SortOrder
    backupCodes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfaSecretWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MfaSecretWhereInput | MfaSecretWhereInput[]
    OR?: MfaSecretWhereInput[]
    NOT?: MfaSecretWhereInput | MfaSecretWhereInput[]
    secret?: StringFilter<"MfaSecret"> | string
    enabled?: BoolFilter<"MfaSecret"> | boolean
    backupCodes?: StringNullableListFilter<"MfaSecret">
    createdAt?: DateTimeFilter<"MfaSecret"> | Date | string
    updatedAt?: DateTimeFilter<"MfaSecret"> | Date | string
  }, "id" | "userId">

  export type MfaSecretOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    secret?: SortOrder
    enabled?: SortOrder
    backupCodes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MfaSecretCountOrderByAggregateInput
    _max?: MfaSecretMaxOrderByAggregateInput
    _min?: MfaSecretMinOrderByAggregateInput
  }

  export type MfaSecretScalarWhereWithAggregatesInput = {
    AND?: MfaSecretScalarWhereWithAggregatesInput | MfaSecretScalarWhereWithAggregatesInput[]
    OR?: MfaSecretScalarWhereWithAggregatesInput[]
    NOT?: MfaSecretScalarWhereWithAggregatesInput | MfaSecretScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MfaSecret"> | string
    userId?: StringWithAggregatesFilter<"MfaSecret"> | string
    secret?: StringWithAggregatesFilter<"MfaSecret"> | string
    enabled?: BoolWithAggregatesFilter<"MfaSecret"> | boolean
    backupCodes?: StringNullableListFilter<"MfaSecret">
    createdAt?: DateTimeWithAggregatesFilter<"MfaSecret"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MfaSecret"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userPermissions?: UserPermissionCreateNestedManyWithoutUserInput
    userTemplateAssignments?: UserTemplateAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userPermissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    userTemplateAssignments?: UserTemplateAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPermissions?: UserPermissionUpdateManyWithoutUserNestedInput
    userTemplateAssignments?: UserTemplateAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPermissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    userTemplateAssignments?: UserTemplateAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionCreateInput = {
    id?: string
    tenantId: string
    permissionKey: string
    isGranted?: boolean
    scope?: string
    allowedShopIds?: UserPermissionCreateallowedShopIdsInput | string[]
    grantedAt?: Date | string
    expiresAt?: Date | string | null
    grantedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPermissionsInput
  }

  export type UserPermissionUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId: string
    permissionKey: string
    isGranted?: boolean
    scope?: string
    allowedShopIds?: UserPermissionCreateallowedShopIdsInput | string[]
    grantedAt?: Date | string
    expiresAt?: Date | string | null
    grantedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPermissionsNestedInput
  }

  export type UserPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionCreateManyInput = {
    id?: string
    tenantId: string
    userId: string
    permissionKey: string
    isGranted?: boolean
    scope?: string
    allowedShopIds?: UserPermissionCreateallowedShopIdsInput | string[]
    grantedAt?: Date | string
    expiresAt?: Date | string | null
    grantedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionTemplateCreateInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templatePermissions?: TemplatePermissionCreateNestedManyWithoutTemplateInput
    userTemplateAssignments?: UserTemplateAssignmentCreateNestedManyWithoutTemplateInput
  }

  export type PermissionTemplateUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templatePermissions?: TemplatePermissionUncheckedCreateNestedManyWithoutTemplateInput
    userTemplateAssignments?: UserTemplateAssignmentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type PermissionTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templatePermissions?: TemplatePermissionUpdateManyWithoutTemplateNestedInput
    userTemplateAssignments?: UserTemplateAssignmentUpdateManyWithoutTemplateNestedInput
  }

  export type PermissionTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templatePermissions?: TemplatePermissionUncheckedUpdateManyWithoutTemplateNestedInput
    userTemplateAssignments?: UserTemplateAssignmentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type PermissionTemplateCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplatePermissionCreateInput = {
    id?: string
    permissionKey: string
    scope?: string
    allowedShopIds?: TemplatePermissionCreateallowedShopIdsInput | string[]
    createdAt?: Date | string
    template: PermissionTemplateCreateNestedOneWithoutTemplatePermissionsInput
  }

  export type TemplatePermissionUncheckedCreateInput = {
    id?: string
    templateId: string
    permissionKey: string
    scope?: string
    allowedShopIds?: TemplatePermissionCreateallowedShopIdsInput | string[]
    createdAt?: Date | string
  }

  export type TemplatePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: PermissionTemplateUpdateOneRequiredWithoutTemplatePermissionsNestedInput
  }

  export type TemplatePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplatePermissionCreateManyInput = {
    id?: string
    templateId: string
    permissionKey: string
    scope?: string
    allowedShopIds?: TemplatePermissionCreateallowedShopIdsInput | string[]
    createdAt?: Date | string
  }

  export type TemplatePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplatePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTemplateAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    assignedBy: string
    user: UserCreateNestedOneWithoutUserTemplateAssignmentsInput
    template: PermissionTemplateCreateNestedOneWithoutUserTemplateAssignmentsInput
  }

  export type UserTemplateAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    templateId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserTemplateAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserTemplateAssignmentsNestedInput
    template?: PermissionTemplateUpdateOneRequiredWithoutUserTemplateAssignmentsNestedInput
  }

  export type UserTemplateAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserTemplateAssignmentCreateManyInput = {
    id?: string
    userId: string
    templateId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserTemplateAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserTemplateAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionAuditLogCreateInput = {
    id?: string
    tenantId: string
    actorId: string
    targetUserId: string
    action: string
    permissionKey?: string | null
    oldValue?: string | null
    newValue?: string | null
    reason?: string | null
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PermissionAuditLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    actorId: string
    targetUserId: string
    action: string
    permissionKey?: string | null
    oldValue?: string | null
    newValue?: string | null
    reason?: string | null
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PermissionAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    permissionKey?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    permissionKey?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionAuditLogCreateManyInput = {
    id?: string
    tenantId: string
    actorId: string
    targetUserId: string
    action: string
    permissionKey?: string | null
    oldValue?: string | null
    newValue?: string | null
    reason?: string | null
    traceId?: string | null
    createdAt?: Date | string
  }

  export type PermissionAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    permissionKey?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    permissionKey?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateInput = {
    id?: string
    userId: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUncheckedCreateInput = {
    id?: string
    userId: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateManyInput = {
    id?: string
    userId: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    userId: string
    token: string
    type: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    type: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    type: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaSecretCreateInput = {
    id?: string
    userId: string
    secret: string
    enabled?: boolean
    backupCodes?: MfaSecretCreatebackupCodesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfaSecretUncheckedCreateInput = {
    id?: string
    userId: string
    secret: string
    enabled?: boolean
    backupCodes?: MfaSecretCreatebackupCodesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfaSecretUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    backupCodes?: MfaSecretUpdatebackupCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaSecretUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    backupCodes?: MfaSecretUpdatebackupCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaSecretCreateManyInput = {
    id?: string
    userId: string
    secret: string
    enabled?: boolean
    backupCodes?: MfaSecretCreatebackupCodesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfaSecretUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    backupCodes?: MfaSecretUpdatebackupCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfaSecretUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    backupCodes?: MfaSecretUpdatebackupCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserPermissionListRelationFilter = {
    every?: UserPermissionWhereInput
    some?: UserPermissionWhereInput
    none?: UserPermissionWhereInput
  }

  export type UserTemplateAssignmentListRelationFilter = {
    every?: UserTemplateAssignmentWhereInput
    some?: UserTemplateAssignmentWhereInput
    none?: UserTemplateAssignmentWhereInput
  }

  export type UserPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTemplateAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPermissionUserIdPermissionKeyCompoundUniqueInput = {
    userId: string
    permissionKey: string
  }

  export type UserPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    permissionKey?: SortOrder
    isGranted?: SortOrder
    scope?: SortOrder
    allowedShopIds?: SortOrder
    grantedAt?: SortOrder
    expiresAt?: SortOrder
    grantedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    permissionKey?: SortOrder
    isGranted?: SortOrder
    scope?: SortOrder
    grantedAt?: SortOrder
    expiresAt?: SortOrder
    grantedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    permissionKey?: SortOrder
    isGranted?: SortOrder
    scope?: SortOrder
    grantedAt?: SortOrder
    expiresAt?: SortOrder
    grantedBy?: SortOrder
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

  export type TemplatePermissionListRelationFilter = {
    every?: TemplatePermissionWhereInput
    some?: TemplatePermissionWhereInput
    none?: TemplatePermissionWhereInput
  }

  export type TemplatePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionTemplateTenantIdNameCompoundUniqueInput = {
    tenantId: string
    name: string
  }

  export type PermissionTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PermissionTemplateRelationFilter = {
    is?: PermissionTemplateWhereInput
    isNot?: PermissionTemplateWhereInput
  }

  export type TemplatePermissionTemplateIdPermissionKeyCompoundUniqueInput = {
    templateId: string
    permissionKey: string
  }

  export type TemplatePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    permissionKey?: SortOrder
    scope?: SortOrder
    allowedShopIds?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplatePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    permissionKey?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplatePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    permissionKey?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTemplateAssignmentUserIdTemplateIdCompoundUniqueInput = {
    userId: string
    templateId: string
  }

  export type UserTemplateAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserTemplateAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserTemplateAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type PermissionAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    permissionKey?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    reason?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PermissionAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    permissionKey?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    reason?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PermissionAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    actorId?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    permissionKey?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    reason?: SortOrder
    traceId?: SortOrder
    createdAt?: SortOrder
  }

  export type CredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type MfaSecretCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    secret?: SortOrder
    enabled?: SortOrder
    backupCodes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfaSecretMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    secret?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfaSecretMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    secret?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserTemplateAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutUserInput, UserTemplateAssignmentUncheckedCreateWithoutUserInput> | UserTemplateAssignmentCreateWithoutUserInput[] | UserTemplateAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutUserInput | UserTemplateAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: UserTemplateAssignmentCreateManyUserInputEnvelope
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserTemplateAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutUserInput, UserTemplateAssignmentUncheckedCreateWithoutUserInput> | UserTemplateAssignmentCreateWithoutUserInput[] | UserTemplateAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutUserInput | UserTemplateAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: UserTemplateAssignmentCreateManyUserInputEnvelope
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserTemplateAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutUserInput, UserTemplateAssignmentUncheckedCreateWithoutUserInput> | UserTemplateAssignmentCreateWithoutUserInput[] | UserTemplateAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutUserInput | UserTemplateAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: UserTemplateAssignmentUpsertWithWhereUniqueWithoutUserInput | UserTemplateAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTemplateAssignmentCreateManyUserInputEnvelope
    set?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    disconnect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    delete?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    update?: UserTemplateAssignmentUpdateWithWhereUniqueWithoutUserInput | UserTemplateAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTemplateAssignmentUpdateManyWithWhereWithoutUserInput | UserTemplateAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTemplateAssignmentScalarWhereInput | UserTemplateAssignmentScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserTemplateAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutUserInput, UserTemplateAssignmentUncheckedCreateWithoutUserInput> | UserTemplateAssignmentCreateWithoutUserInput[] | UserTemplateAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutUserInput | UserTemplateAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: UserTemplateAssignmentUpsertWithWhereUniqueWithoutUserInput | UserTemplateAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTemplateAssignmentCreateManyUserInputEnvelope
    set?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    disconnect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    delete?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    update?: UserTemplateAssignmentUpdateWithWhereUniqueWithoutUserInput | UserTemplateAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTemplateAssignmentUpdateManyWithWhereWithoutUserInput | UserTemplateAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTemplateAssignmentScalarWhereInput | UserTemplateAssignmentScalarWhereInput[]
  }

  export type UserPermissionCreateallowedShopIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutUserPermissionsInput = {
    create?: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserPermissionUpdateallowedShopIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionsInput
    upsert?: UserUpsertWithoutUserPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPermissionsInput, UserUpdateWithoutUserPermissionsInput>, UserUncheckedUpdateWithoutUserPermissionsInput>
  }

  export type TemplatePermissionCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplatePermissionCreateWithoutTemplateInput, TemplatePermissionUncheckedCreateWithoutTemplateInput> | TemplatePermissionCreateWithoutTemplateInput[] | TemplatePermissionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplatePermissionCreateOrConnectWithoutTemplateInput | TemplatePermissionCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplatePermissionCreateManyTemplateInputEnvelope
    connect?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
  }

  export type UserTemplateAssignmentCreateNestedManyWithoutTemplateInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutTemplateInput, UserTemplateAssignmentUncheckedCreateWithoutTemplateInput> | UserTemplateAssignmentCreateWithoutTemplateInput[] | UserTemplateAssignmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutTemplateInput | UserTemplateAssignmentCreateOrConnectWithoutTemplateInput[]
    createMany?: UserTemplateAssignmentCreateManyTemplateInputEnvelope
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
  }

  export type TemplatePermissionUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplatePermissionCreateWithoutTemplateInput, TemplatePermissionUncheckedCreateWithoutTemplateInput> | TemplatePermissionCreateWithoutTemplateInput[] | TemplatePermissionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplatePermissionCreateOrConnectWithoutTemplateInput | TemplatePermissionCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplatePermissionCreateManyTemplateInputEnvelope
    connect?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
  }

  export type UserTemplateAssignmentUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutTemplateInput, UserTemplateAssignmentUncheckedCreateWithoutTemplateInput> | UserTemplateAssignmentCreateWithoutTemplateInput[] | UserTemplateAssignmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutTemplateInput | UserTemplateAssignmentCreateOrConnectWithoutTemplateInput[]
    createMany?: UserTemplateAssignmentCreateManyTemplateInputEnvelope
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TemplatePermissionUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplatePermissionCreateWithoutTemplateInput, TemplatePermissionUncheckedCreateWithoutTemplateInput> | TemplatePermissionCreateWithoutTemplateInput[] | TemplatePermissionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplatePermissionCreateOrConnectWithoutTemplateInput | TemplatePermissionCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplatePermissionUpsertWithWhereUniqueWithoutTemplateInput | TemplatePermissionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplatePermissionCreateManyTemplateInputEnvelope
    set?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    disconnect?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    delete?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    connect?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    update?: TemplatePermissionUpdateWithWhereUniqueWithoutTemplateInput | TemplatePermissionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplatePermissionUpdateManyWithWhereWithoutTemplateInput | TemplatePermissionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplatePermissionScalarWhereInput | TemplatePermissionScalarWhereInput[]
  }

  export type UserTemplateAssignmentUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutTemplateInput, UserTemplateAssignmentUncheckedCreateWithoutTemplateInput> | UserTemplateAssignmentCreateWithoutTemplateInput[] | UserTemplateAssignmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutTemplateInput | UserTemplateAssignmentCreateOrConnectWithoutTemplateInput[]
    upsert?: UserTemplateAssignmentUpsertWithWhereUniqueWithoutTemplateInput | UserTemplateAssignmentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: UserTemplateAssignmentCreateManyTemplateInputEnvelope
    set?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    disconnect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    delete?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    update?: UserTemplateAssignmentUpdateWithWhereUniqueWithoutTemplateInput | UserTemplateAssignmentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: UserTemplateAssignmentUpdateManyWithWhereWithoutTemplateInput | UserTemplateAssignmentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: UserTemplateAssignmentScalarWhereInput | UserTemplateAssignmentScalarWhereInput[]
  }

  export type TemplatePermissionUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplatePermissionCreateWithoutTemplateInput, TemplatePermissionUncheckedCreateWithoutTemplateInput> | TemplatePermissionCreateWithoutTemplateInput[] | TemplatePermissionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplatePermissionCreateOrConnectWithoutTemplateInput | TemplatePermissionCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplatePermissionUpsertWithWhereUniqueWithoutTemplateInput | TemplatePermissionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplatePermissionCreateManyTemplateInputEnvelope
    set?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    disconnect?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    delete?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    connect?: TemplatePermissionWhereUniqueInput | TemplatePermissionWhereUniqueInput[]
    update?: TemplatePermissionUpdateWithWhereUniqueWithoutTemplateInput | TemplatePermissionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplatePermissionUpdateManyWithWhereWithoutTemplateInput | TemplatePermissionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplatePermissionScalarWhereInput | TemplatePermissionScalarWhereInput[]
  }

  export type UserTemplateAssignmentUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<UserTemplateAssignmentCreateWithoutTemplateInput, UserTemplateAssignmentUncheckedCreateWithoutTemplateInput> | UserTemplateAssignmentCreateWithoutTemplateInput[] | UserTemplateAssignmentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateAssignmentCreateOrConnectWithoutTemplateInput | UserTemplateAssignmentCreateOrConnectWithoutTemplateInput[]
    upsert?: UserTemplateAssignmentUpsertWithWhereUniqueWithoutTemplateInput | UserTemplateAssignmentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: UserTemplateAssignmentCreateManyTemplateInputEnvelope
    set?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    disconnect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    delete?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    connect?: UserTemplateAssignmentWhereUniqueInput | UserTemplateAssignmentWhereUniqueInput[]
    update?: UserTemplateAssignmentUpdateWithWhereUniqueWithoutTemplateInput | UserTemplateAssignmentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: UserTemplateAssignmentUpdateManyWithWhereWithoutTemplateInput | UserTemplateAssignmentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: UserTemplateAssignmentScalarWhereInput | UserTemplateAssignmentScalarWhereInput[]
  }

  export type TemplatePermissionCreateallowedShopIdsInput = {
    set: string[]
  }

  export type PermissionTemplateCreateNestedOneWithoutTemplatePermissionsInput = {
    create?: XOR<PermissionTemplateCreateWithoutTemplatePermissionsInput, PermissionTemplateUncheckedCreateWithoutTemplatePermissionsInput>
    connectOrCreate?: PermissionTemplateCreateOrConnectWithoutTemplatePermissionsInput
    connect?: PermissionTemplateWhereUniqueInput
  }

  export type TemplatePermissionUpdateallowedShopIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PermissionTemplateUpdateOneRequiredWithoutTemplatePermissionsNestedInput = {
    create?: XOR<PermissionTemplateCreateWithoutTemplatePermissionsInput, PermissionTemplateUncheckedCreateWithoutTemplatePermissionsInput>
    connectOrCreate?: PermissionTemplateCreateOrConnectWithoutTemplatePermissionsInput
    upsert?: PermissionTemplateUpsertWithoutTemplatePermissionsInput
    connect?: PermissionTemplateWhereUniqueInput
    update?: XOR<XOR<PermissionTemplateUpdateToOneWithWhereWithoutTemplatePermissionsInput, PermissionTemplateUpdateWithoutTemplatePermissionsInput>, PermissionTemplateUncheckedUpdateWithoutTemplatePermissionsInput>
  }

  export type UserCreateNestedOneWithoutUserTemplateAssignmentsInput = {
    create?: XOR<UserCreateWithoutUserTemplateAssignmentsInput, UserUncheckedCreateWithoutUserTemplateAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTemplateAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type PermissionTemplateCreateNestedOneWithoutUserTemplateAssignmentsInput = {
    create?: XOR<PermissionTemplateCreateWithoutUserTemplateAssignmentsInput, PermissionTemplateUncheckedCreateWithoutUserTemplateAssignmentsInput>
    connectOrCreate?: PermissionTemplateCreateOrConnectWithoutUserTemplateAssignmentsInput
    connect?: PermissionTemplateWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserTemplateAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutUserTemplateAssignmentsInput, UserUncheckedCreateWithoutUserTemplateAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTemplateAssignmentsInput
    upsert?: UserUpsertWithoutUserTemplateAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTemplateAssignmentsInput, UserUpdateWithoutUserTemplateAssignmentsInput>, UserUncheckedUpdateWithoutUserTemplateAssignmentsInput>
  }

  export type PermissionTemplateUpdateOneRequiredWithoutUserTemplateAssignmentsNestedInput = {
    create?: XOR<PermissionTemplateCreateWithoutUserTemplateAssignmentsInput, PermissionTemplateUncheckedCreateWithoutUserTemplateAssignmentsInput>
    connectOrCreate?: PermissionTemplateCreateOrConnectWithoutUserTemplateAssignmentsInput
    upsert?: PermissionTemplateUpsertWithoutUserTemplateAssignmentsInput
    connect?: PermissionTemplateWhereUniqueInput
    update?: XOR<XOR<PermissionTemplateUpdateToOneWithWhereWithoutUserTemplateAssignmentsInput, PermissionTemplateUpdateWithoutUserTemplateAssignmentsInput>, PermissionTemplateUncheckedUpdateWithoutUserTemplateAssignmentsInput>
  }

  export type MfaSecretCreatebackupCodesInput = {
    set: string[]
  }

  export type MfaSecretUpdatebackupCodesInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserPermissionCreateWithoutUserInput = {
    id?: string
    tenantId: string
    permissionKey: string
    isGranted?: boolean
    scope?: string
    allowedShopIds?: UserPermissionCreateallowedShopIdsInput | string[]
    grantedAt?: Date | string
    expiresAt?: Date | string | null
    grantedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    permissionKey: string
    isGranted?: boolean
    scope?: string
    allowedShopIds?: UserPermissionCreateallowedShopIdsInput | string[]
    grantedAt?: Date | string
    expiresAt?: Date | string | null
    grantedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionCreateOrConnectWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionCreateManyUserInputEnvelope = {
    data: UserPermissionCreateManyUserInput | UserPermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTemplateAssignmentCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    assignedBy: string
    template: PermissionTemplateCreateNestedOneWithoutUserTemplateAssignmentsInput
  }

  export type UserTemplateAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    templateId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserTemplateAssignmentCreateOrConnectWithoutUserInput = {
    where: UserTemplateAssignmentWhereUniqueInput
    create: XOR<UserTemplateAssignmentCreateWithoutUserInput, UserTemplateAssignmentUncheckedCreateWithoutUserInput>
  }

  export type UserTemplateAssignmentCreateManyUserInputEnvelope = {
    data: UserTemplateAssignmentCreateManyUserInput | UserTemplateAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutUserInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPermissionScalarWhereInput = {
    AND?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    OR?: UserPermissionScalarWhereInput[]
    NOT?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    id?: StringFilter<"UserPermission"> | string
    tenantId?: StringFilter<"UserPermission"> | string
    userId?: StringFilter<"UserPermission"> | string
    permissionKey?: StringFilter<"UserPermission"> | string
    isGranted?: BoolFilter<"UserPermission"> | boolean
    scope?: StringFilter<"UserPermission"> | string
    allowedShopIds?: StringNullableListFilter<"UserPermission">
    grantedAt?: DateTimeFilter<"UserPermission"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserPermission"> | Date | string | null
    grantedBy?: StringFilter<"UserPermission"> | string
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
  }

  export type UserTemplateAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTemplateAssignmentWhereUniqueInput
    update: XOR<UserTemplateAssignmentUpdateWithoutUserInput, UserTemplateAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<UserTemplateAssignmentCreateWithoutUserInput, UserTemplateAssignmentUncheckedCreateWithoutUserInput>
  }

  export type UserTemplateAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTemplateAssignmentWhereUniqueInput
    data: XOR<UserTemplateAssignmentUpdateWithoutUserInput, UserTemplateAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type UserTemplateAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: UserTemplateAssignmentScalarWhereInput
    data: XOR<UserTemplateAssignmentUpdateManyMutationInput, UserTemplateAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTemplateAssignmentScalarWhereInput = {
    AND?: UserTemplateAssignmentScalarWhereInput | UserTemplateAssignmentScalarWhereInput[]
    OR?: UserTemplateAssignmentScalarWhereInput[]
    NOT?: UserTemplateAssignmentScalarWhereInput | UserTemplateAssignmentScalarWhereInput[]
    id?: StringFilter<"UserTemplateAssignment"> | string
    userId?: StringFilter<"UserTemplateAssignment"> | string
    templateId?: StringFilter<"UserTemplateAssignment"> | string
    assignedAt?: DateTimeFilter<"UserTemplateAssignment"> | Date | string
    assignedBy?: StringFilter<"UserTemplateAssignment"> | string
  }

  export type UserCreateWithoutUserPermissionsInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userTemplateAssignments?: UserTemplateAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPermissionsInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userTemplateAssignments?: UserTemplateAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
  }

  export type UserUpsertWithoutUserPermissionsInput = {
    update: XOR<UserUpdateWithoutUserPermissionsInput, UserUncheckedUpdateWithoutUserPermissionsInput>
    create: XOR<UserCreateWithoutUserPermissionsInput, UserUncheckedCreateWithoutUserPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPermissionsInput, UserUncheckedUpdateWithoutUserPermissionsInput>
  }

  export type UserUpdateWithoutUserPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplateAssignments?: UserTemplateAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplateAssignments?: UserTemplateAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplatePermissionCreateWithoutTemplateInput = {
    id?: string
    permissionKey: string
    scope?: string
    allowedShopIds?: TemplatePermissionCreateallowedShopIdsInput | string[]
    createdAt?: Date | string
  }

  export type TemplatePermissionUncheckedCreateWithoutTemplateInput = {
    id?: string
    permissionKey: string
    scope?: string
    allowedShopIds?: TemplatePermissionCreateallowedShopIdsInput | string[]
    createdAt?: Date | string
  }

  export type TemplatePermissionCreateOrConnectWithoutTemplateInput = {
    where: TemplatePermissionWhereUniqueInput
    create: XOR<TemplatePermissionCreateWithoutTemplateInput, TemplatePermissionUncheckedCreateWithoutTemplateInput>
  }

  export type TemplatePermissionCreateManyTemplateInputEnvelope = {
    data: TemplatePermissionCreateManyTemplateInput | TemplatePermissionCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserTemplateAssignmentCreateWithoutTemplateInput = {
    id?: string
    assignedAt?: Date | string
    assignedBy: string
    user: UserCreateNestedOneWithoutUserTemplateAssignmentsInput
  }

  export type UserTemplateAssignmentUncheckedCreateWithoutTemplateInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserTemplateAssignmentCreateOrConnectWithoutTemplateInput = {
    where: UserTemplateAssignmentWhereUniqueInput
    create: XOR<UserTemplateAssignmentCreateWithoutTemplateInput, UserTemplateAssignmentUncheckedCreateWithoutTemplateInput>
  }

  export type UserTemplateAssignmentCreateManyTemplateInputEnvelope = {
    data: UserTemplateAssignmentCreateManyTemplateInput | UserTemplateAssignmentCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplatePermissionUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplatePermissionWhereUniqueInput
    update: XOR<TemplatePermissionUpdateWithoutTemplateInput, TemplatePermissionUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplatePermissionCreateWithoutTemplateInput, TemplatePermissionUncheckedCreateWithoutTemplateInput>
  }

  export type TemplatePermissionUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplatePermissionWhereUniqueInput
    data: XOR<TemplatePermissionUpdateWithoutTemplateInput, TemplatePermissionUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplatePermissionUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplatePermissionScalarWhereInput
    data: XOR<TemplatePermissionUpdateManyMutationInput, TemplatePermissionUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplatePermissionScalarWhereInput = {
    AND?: TemplatePermissionScalarWhereInput | TemplatePermissionScalarWhereInput[]
    OR?: TemplatePermissionScalarWhereInput[]
    NOT?: TemplatePermissionScalarWhereInput | TemplatePermissionScalarWhereInput[]
    id?: StringFilter<"TemplatePermission"> | string
    templateId?: StringFilter<"TemplatePermission"> | string
    permissionKey?: StringFilter<"TemplatePermission"> | string
    scope?: StringFilter<"TemplatePermission"> | string
    allowedShopIds?: StringNullableListFilter<"TemplatePermission">
    createdAt?: DateTimeFilter<"TemplatePermission"> | Date | string
  }

  export type UserTemplateAssignmentUpsertWithWhereUniqueWithoutTemplateInput = {
    where: UserTemplateAssignmentWhereUniqueInput
    update: XOR<UserTemplateAssignmentUpdateWithoutTemplateInput, UserTemplateAssignmentUncheckedUpdateWithoutTemplateInput>
    create: XOR<UserTemplateAssignmentCreateWithoutTemplateInput, UserTemplateAssignmentUncheckedCreateWithoutTemplateInput>
  }

  export type UserTemplateAssignmentUpdateWithWhereUniqueWithoutTemplateInput = {
    where: UserTemplateAssignmentWhereUniqueInput
    data: XOR<UserTemplateAssignmentUpdateWithoutTemplateInput, UserTemplateAssignmentUncheckedUpdateWithoutTemplateInput>
  }

  export type UserTemplateAssignmentUpdateManyWithWhereWithoutTemplateInput = {
    where: UserTemplateAssignmentScalarWhereInput
    data: XOR<UserTemplateAssignmentUpdateManyMutationInput, UserTemplateAssignmentUncheckedUpdateManyWithoutTemplateInput>
  }

  export type PermissionTemplateCreateWithoutTemplatePermissionsInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTemplateAssignments?: UserTemplateAssignmentCreateNestedManyWithoutTemplateInput
  }

  export type PermissionTemplateUncheckedCreateWithoutTemplatePermissionsInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTemplateAssignments?: UserTemplateAssignmentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type PermissionTemplateCreateOrConnectWithoutTemplatePermissionsInput = {
    where: PermissionTemplateWhereUniqueInput
    create: XOR<PermissionTemplateCreateWithoutTemplatePermissionsInput, PermissionTemplateUncheckedCreateWithoutTemplatePermissionsInput>
  }

  export type PermissionTemplateUpsertWithoutTemplatePermissionsInput = {
    update: XOR<PermissionTemplateUpdateWithoutTemplatePermissionsInput, PermissionTemplateUncheckedUpdateWithoutTemplatePermissionsInput>
    create: XOR<PermissionTemplateCreateWithoutTemplatePermissionsInput, PermissionTemplateUncheckedCreateWithoutTemplatePermissionsInput>
    where?: PermissionTemplateWhereInput
  }

  export type PermissionTemplateUpdateToOneWithWhereWithoutTemplatePermissionsInput = {
    where?: PermissionTemplateWhereInput
    data: XOR<PermissionTemplateUpdateWithoutTemplatePermissionsInput, PermissionTemplateUncheckedUpdateWithoutTemplatePermissionsInput>
  }

  export type PermissionTemplateUpdateWithoutTemplatePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplateAssignments?: UserTemplateAssignmentUpdateManyWithoutTemplateNestedInput
  }

  export type PermissionTemplateUncheckedUpdateWithoutTemplatePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplateAssignments?: UserTemplateAssignmentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type UserCreateWithoutUserTemplateAssignmentsInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userPermissions?: UserPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTemplateAssignmentsInput = {
    id?: string
    tenantId: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userPermissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTemplateAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTemplateAssignmentsInput, UserUncheckedCreateWithoutUserTemplateAssignmentsInput>
  }

  export type PermissionTemplateCreateWithoutUserTemplateAssignmentsInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templatePermissions?: TemplatePermissionCreateNestedManyWithoutTemplateInput
  }

  export type PermissionTemplateUncheckedCreateWithoutUserTemplateAssignmentsInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    isSystem?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templatePermissions?: TemplatePermissionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type PermissionTemplateCreateOrConnectWithoutUserTemplateAssignmentsInput = {
    where: PermissionTemplateWhereUniqueInput
    create: XOR<PermissionTemplateCreateWithoutUserTemplateAssignmentsInput, PermissionTemplateUncheckedCreateWithoutUserTemplateAssignmentsInput>
  }

  export type UserUpsertWithoutUserTemplateAssignmentsInput = {
    update: XOR<UserUpdateWithoutUserTemplateAssignmentsInput, UserUncheckedUpdateWithoutUserTemplateAssignmentsInput>
    create: XOR<UserCreateWithoutUserTemplateAssignmentsInput, UserUncheckedCreateWithoutUserTemplateAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTemplateAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTemplateAssignmentsInput, UserUncheckedUpdateWithoutUserTemplateAssignmentsInput>
  }

  export type UserUpdateWithoutUserTemplateAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPermissions?: UserPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTemplateAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPermissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PermissionTemplateUpsertWithoutUserTemplateAssignmentsInput = {
    update: XOR<PermissionTemplateUpdateWithoutUserTemplateAssignmentsInput, PermissionTemplateUncheckedUpdateWithoutUserTemplateAssignmentsInput>
    create: XOR<PermissionTemplateCreateWithoutUserTemplateAssignmentsInput, PermissionTemplateUncheckedCreateWithoutUserTemplateAssignmentsInput>
    where?: PermissionTemplateWhereInput
  }

  export type PermissionTemplateUpdateToOneWithWhereWithoutUserTemplateAssignmentsInput = {
    where?: PermissionTemplateWhereInput
    data: XOR<PermissionTemplateUpdateWithoutUserTemplateAssignmentsInput, PermissionTemplateUncheckedUpdateWithoutUserTemplateAssignmentsInput>
  }

  export type PermissionTemplateUpdateWithoutUserTemplateAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templatePermissions?: TemplatePermissionUpdateManyWithoutTemplateNestedInput
  }

  export type PermissionTemplateUncheckedUpdateWithoutUserTemplateAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templatePermissions?: TemplatePermissionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type UserPermissionCreateManyUserInput = {
    id?: string
    tenantId: string
    permissionKey: string
    isGranted?: boolean
    scope?: string
    allowedShopIds?: UserPermissionCreateallowedShopIdsInput | string[]
    grantedAt?: Date | string
    expiresAt?: Date | string | null
    grantedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTemplateAssignmentCreateManyUserInput = {
    id?: string
    templateId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserPermissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    isGranted?: BoolFieldUpdateOperationsInput | boolean
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: UserPermissionUpdateallowedShopIdsInput | string[]
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grantedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTemplateAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    template?: PermissionTemplateUpdateOneRequiredWithoutUserTemplateAssignmentsNestedInput
  }

  export type UserTemplateAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserTemplateAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TemplatePermissionCreateManyTemplateInput = {
    id?: string
    permissionKey: string
    scope?: string
    allowedShopIds?: TemplatePermissionCreateallowedShopIdsInput | string[]
    createdAt?: Date | string
  }

  export type UserTemplateAssignmentCreateManyTemplateInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type TemplatePermissionUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplatePermissionUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplatePermissionUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionKey?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    allowedShopIds?: TemplatePermissionUpdateallowedShopIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTemplateAssignmentUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserTemplateAssignmentsNestedInput
  }

  export type UserTemplateAssignmentUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserTemplateAssignmentUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionTemplateCountOutputTypeDefaultArgs instead
     */
    export type PermissionTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPermissionDefaultArgs instead
     */
    export type UserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionTemplateDefaultArgs instead
     */
    export type PermissionTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplatePermissionDefaultArgs instead
     */
    export type TemplatePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplatePermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserTemplateAssignmentDefaultArgs instead
     */
    export type UserTemplateAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserTemplateAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionAuditLogDefaultArgs instead
     */
    export type PermissionAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionAuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CredentialDefaultArgs instead
     */
    export type CredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CredentialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MfaSecretDefaultArgs instead
     */
    export type MfaSecretArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MfaSecretDefaultArgs<ExtArgs>

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