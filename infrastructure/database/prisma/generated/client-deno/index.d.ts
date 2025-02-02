
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
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Maintenance
 * 
 */
export type Maintenance = $Result.DefaultSelection<Prisma.$MaintenancePayload>
/**
 * Model Motorbike
 * 
 */
export type Motorbike = $Result.DefaultSelection<Prisma.$MotorbikePayload>
/**
 * Model Breakdown
 * 
 */
export type Breakdown = $Result.DefaultSelection<Prisma.$BreakdownPayload>
/**
 * Model Warranty
 * 
 */
export type Warranty = $Result.DefaultSelection<Prisma.$WarrantyPayload>
/**
 * Model Fleet
 * 
 */
export type Fleet = $Result.DefaultSelection<Prisma.$FleetPayload>
/**
 * Model ModelMotorbike
 * 
 */
export type ModelMotorbike = $Result.DefaultSelection<Prisma.$ModelMotorbikePayload>

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **Maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.MaintenanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motorbike`: Exposes CRUD operations for the **Motorbike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motorbikes
    * const motorbikes = await prisma.motorbike.findMany()
    * ```
    */
  get motorbike(): Prisma.MotorbikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breakdown`: Exposes CRUD operations for the **Breakdown** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breakdowns
    * const breakdowns = await prisma.breakdown.findMany()
    * ```
    */
  get breakdown(): Prisma.BreakdownDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warranty`: Exposes CRUD operations for the **Warranty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warranties
    * const warranties = await prisma.warranty.findMany()
    * ```
    */
  get warranty(): Prisma.WarrantyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fleet`: Exposes CRUD operations for the **Fleet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fleets
    * const fleets = await prisma.fleet.findMany()
    * ```
    */
  get fleet(): Prisma.FleetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelMotorbike`: Exposes CRUD operations for the **ModelMotorbike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelMotorbikes
    * const modelMotorbikes = await prisma.modelMotorbike.findMany()
    * ```
    */
  get modelMotorbike(): Prisma.ModelMotorbikeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    VerificationCode: 'VerificationCode',
    Session: 'Session',
    Maintenance: 'Maintenance',
    Motorbike: 'Motorbike',
    Breakdown: 'Breakdown',
    Warranty: 'Warranty',
    Fleet: 'Fleet',
    ModelMotorbike: 'ModelMotorbike'
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
      modelProps: "user" | "verificationCode" | "session" | "maintenance" | "motorbike" | "breakdown" | "warranty" | "fleet" | "modelMotorbike"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
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
      Maintenance: {
        payload: Prisma.$MaintenancePayload<ExtArgs>
        fields: Prisma.MaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findMany: {
            args: Prisma.MaintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          create: {
            args: Prisma.MaintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          createMany: {
            args: Prisma.MaintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.MaintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
      Motorbike: {
        payload: Prisma.$MotorbikePayload<ExtArgs>
        fields: Prisma.MotorbikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotorbikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotorbikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>
          }
          findFirst: {
            args: Prisma.MotorbikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotorbikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>
          }
          findMany: {
            args: Prisma.MotorbikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>[]
          }
          create: {
            args: Prisma.MotorbikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>
          }
          createMany: {
            args: Prisma.MotorbikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotorbikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>[]
          }
          delete: {
            args: Prisma.MotorbikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>
          }
          update: {
            args: Prisma.MotorbikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>
          }
          deleteMany: {
            args: Prisma.MotorbikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotorbikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotorbikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>[]
          }
          upsert: {
            args: Prisma.MotorbikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorbikePayload>
          }
          aggregate: {
            args: Prisma.MotorbikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotorbike>
          }
          groupBy: {
            args: Prisma.MotorbikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotorbikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotorbikeCountArgs<ExtArgs>
            result: $Utils.Optional<MotorbikeCountAggregateOutputType> | number
          }
        }
      }
      Breakdown: {
        payload: Prisma.$BreakdownPayload<ExtArgs>
        fields: Prisma.BreakdownFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreakdownFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreakdownFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>
          }
          findFirst: {
            args: Prisma.BreakdownFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreakdownFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>
          }
          findMany: {
            args: Prisma.BreakdownFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>[]
          }
          create: {
            args: Prisma.BreakdownCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>
          }
          createMany: {
            args: Prisma.BreakdownCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreakdownCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>[]
          }
          delete: {
            args: Prisma.BreakdownDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>
          }
          update: {
            args: Prisma.BreakdownUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>
          }
          deleteMany: {
            args: Prisma.BreakdownDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreakdownUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreakdownUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>[]
          }
          upsert: {
            args: Prisma.BreakdownUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakdownPayload>
          }
          aggregate: {
            args: Prisma.BreakdownAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreakdown>
          }
          groupBy: {
            args: Prisma.BreakdownGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreakdownGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreakdownCountArgs<ExtArgs>
            result: $Utils.Optional<BreakdownCountAggregateOutputType> | number
          }
        }
      }
      Warranty: {
        payload: Prisma.$WarrantyPayload<ExtArgs>
        fields: Prisma.WarrantyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarrantyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarrantyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>
          }
          findFirst: {
            args: Prisma.WarrantyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarrantyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>
          }
          findMany: {
            args: Prisma.WarrantyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>[]
          }
          create: {
            args: Prisma.WarrantyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>
          }
          createMany: {
            args: Prisma.WarrantyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarrantyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>[]
          }
          delete: {
            args: Prisma.WarrantyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>
          }
          update: {
            args: Prisma.WarrantyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>
          }
          deleteMany: {
            args: Prisma.WarrantyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarrantyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarrantyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>[]
          }
          upsert: {
            args: Prisma.WarrantyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarrantyPayload>
          }
          aggregate: {
            args: Prisma.WarrantyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarranty>
          }
          groupBy: {
            args: Prisma.WarrantyGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarrantyGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarrantyCountArgs<ExtArgs>
            result: $Utils.Optional<WarrantyCountAggregateOutputType> | number
          }
        }
      }
      Fleet: {
        payload: Prisma.$FleetPayload<ExtArgs>
        fields: Prisma.FleetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FleetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FleetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          findFirst: {
            args: Prisma.FleetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FleetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          findMany: {
            args: Prisma.FleetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>[]
          }
          create: {
            args: Prisma.FleetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          createMany: {
            args: Prisma.FleetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FleetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>[]
          }
          delete: {
            args: Prisma.FleetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          update: {
            args: Prisma.FleetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          deleteMany: {
            args: Prisma.FleetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FleetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FleetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>[]
          }
          upsert: {
            args: Prisma.FleetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FleetPayload>
          }
          aggregate: {
            args: Prisma.FleetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFleet>
          }
          groupBy: {
            args: Prisma.FleetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FleetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FleetCountArgs<ExtArgs>
            result: $Utils.Optional<FleetCountAggregateOutputType> | number
          }
        }
      }
      ModelMotorbike: {
        payload: Prisma.$ModelMotorbikePayload<ExtArgs>
        fields: Prisma.ModelMotorbikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelMotorbikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelMotorbikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>
          }
          findFirst: {
            args: Prisma.ModelMotorbikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelMotorbikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>
          }
          findMany: {
            args: Prisma.ModelMotorbikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>[]
          }
          create: {
            args: Prisma.ModelMotorbikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>
          }
          createMany: {
            args: Prisma.ModelMotorbikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelMotorbikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>[]
          }
          delete: {
            args: Prisma.ModelMotorbikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>
          }
          update: {
            args: Prisma.ModelMotorbikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>
          }
          deleteMany: {
            args: Prisma.ModelMotorbikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelMotorbikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelMotorbikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>[]
          }
          upsert: {
            args: Prisma.ModelMotorbikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelMotorbikePayload>
          }
          aggregate: {
            args: Prisma.ModelMotorbikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelMotorbike>
          }
          groupBy: {
            args: Prisma.ModelMotorbikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelMotorbikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelMotorbikeCountArgs<ExtArgs>
            result: $Utils.Optional<ModelMotorbikeCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationCode?: VerificationCodeOmit
    session?: SessionOmit
    maintenance?: MaintenanceOmit
    motorbike?: MotorbikeOmit
    breakdown?: BreakdownOmit
    warranty?: WarrantyOmit
    fleet?: FleetOmit
    modelMotorbike?: ModelMotorbikeOmit
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
    | 'updateManyAndReturn'
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
    breakdowns: number
    maintenances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breakdowns?: boolean | UserCountOutputTypeCountBreakdownsArgs
    maintenances?: boolean | UserCountOutputTypeCountMaintenancesArgs
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
  export type UserCountOutputTypeCountBreakdownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakdownWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Count Type MotorbikeCountOutputType
   */

  export type MotorbikeCountOutputType = {
    maintenances: number
  }

  export type MotorbikeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | MotorbikeCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes
  /**
   * MotorbikeCountOutputType without action
   */
  export type MotorbikeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorbikeCountOutputType
     */
    select?: MotorbikeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotorbikeCountOutputType without action
   */
  export type MotorbikeCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Count Type FleetCountOutputType
   */

  export type FleetCountOutputType = {
    motorbikes: number
  }

  export type FleetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorbikes?: boolean | FleetCountOutputTypeCountMotorbikesArgs
  }

  // Custom InputTypes
  /**
   * FleetCountOutputType without action
   */
  export type FleetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FleetCountOutputType
     */
    select?: FleetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FleetCountOutputType without action
   */
  export type FleetCountOutputTypeCountMotorbikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorbikeWhereInput
  }


  /**
   * Count Type ModelMotorbikeCountOutputType
   */

  export type ModelMotorbikeCountOutputType = {
    motorbikes: number
  }

  export type ModelMotorbikeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorbikes?: boolean | ModelMotorbikeCountOutputTypeCountMotorbikesArgs
  }

  // Custom InputTypes
  /**
   * ModelMotorbikeCountOutputType without action
   */
  export type ModelMotorbikeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbikeCountOutputType
     */
    select?: ModelMotorbikeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelMotorbikeCountOutputType without action
   */
  export type ModelMotorbikeCountOutputTypeCountMotorbikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorbikeWhereInput
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
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    passwordHash: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
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
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified: boolean
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    breakdowns?: boolean | User$breakdownsArgs<ExtArgs>
    maintenances?: boolean | User$maintenancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "passwordHash" | "role" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breakdowns?: boolean | User$breakdownsArgs<ExtArgs>
    maintenances?: boolean | User$maintenancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      breakdowns: Prisma.$BreakdownPayload<ExtArgs>[]
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      passwordHash: string
      role: string
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    breakdowns<T extends User$breakdownsArgs<ExtArgs> = {}>(args?: Subset<T, User$breakdownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    maintenances<T extends User$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, User$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.breakdowns
   */
  export type User$breakdownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    where?: BreakdownWhereInput
    orderBy?: BreakdownOrderByWithRelationInput | BreakdownOrderByWithRelationInput[]
    cursor?: BreakdownWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreakdownScalarFieldEnum | BreakdownScalarFieldEnum[]
  }

  /**
   * User.maintenances
   */
  export type User$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationCodeMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    userId: string
    type: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationCode"]>

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationCode model
   */ 
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly userId: FieldRef<"VerificationCode", 'String'>
    readonly type: FieldRef<"VerificationCode", 'String'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
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
    expiresAt: Date | null
    createdAt: Date | null
    userAgent: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userAgent: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    userAgent: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    userAgent?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    userAgent?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    userAgent?: true
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
    expiresAt: Date
    createdAt: Date
    userAgent: string | null
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
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userAgent?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt" | "userAgent", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      createdAt: Date
      userAgent: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly userAgent: FieldRef<"Session", 'String'>
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceAvgAggregateOutputType = {
    mileageAtMaintenance: number | null
    maintenanceCost: number | null
  }

  export type MaintenanceSumAggregateOutputType = {
    mileageAtMaintenance: number | null
    maintenanceCost: number | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: string | null
    motorbikeId: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    maintenanceDate: Date | null
    mileageAtMaintenance: number | null
    maintenanceType: string | null
    maintenanceCost: number | null
    maintenanceDescription: string | null
    breakdownId: string | null
    warrantyId: string | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null
    motorbikeId: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    maintenanceDate: Date | null
    mileageAtMaintenance: number | null
    maintenanceType: string | null
    maintenanceCost: number | null
    maintenanceDescription: string | null
    breakdownId: string | null
    warrantyId: string | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    motorbikeId: number
    clientId: number
    createdAt: number
    updatedAt: number
    maintenanceDate: number
    mileageAtMaintenance: number
    maintenanceType: number
    maintenanceCost: number
    maintenanceDescription: number
    breakdownId: number
    warrantyId: number
    _all: number
  }


  export type MaintenanceAvgAggregateInputType = {
    mileageAtMaintenance?: true
    maintenanceCost?: true
  }

  export type MaintenanceSumAggregateInputType = {
    mileageAtMaintenance?: true
    maintenanceCost?: true
  }

  export type MaintenanceMinAggregateInputType = {
    id?: true
    motorbikeId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    maintenanceDate?: true
    mileageAtMaintenance?: true
    maintenanceType?: true
    maintenanceCost?: true
    maintenanceDescription?: true
    breakdownId?: true
    warrantyId?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    motorbikeId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    maintenanceDate?: true
    mileageAtMaintenance?: true
    maintenanceType?: true
    maintenanceCost?: true
    maintenanceDescription?: true
    breakdownId?: true
    warrantyId?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    motorbikeId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    maintenanceDate?: true
    mileageAtMaintenance?: true
    maintenanceType?: true
    maintenanceCost?: true
    maintenanceDescription?: true
    breakdownId?: true
    warrantyId?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance to aggregate.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type MaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithAggregationInput | MaintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: MaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _avg?: MaintenanceAvgAggregateInputType
    _sum?: MaintenanceSumAggregateInputType
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: string
    motorbikeId: string
    clientId: string
    createdAt: Date
    updatedAt: Date
    maintenanceDate: Date
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId: string | null
    warrantyId: string | null
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends MaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motorbikeId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceDate?: boolean
    mileageAtMaintenance?: boolean
    maintenanceType?: boolean
    maintenanceCost?: boolean
    maintenanceDescription?: boolean
    breakdownId?: boolean
    warrantyId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    motorbike?: boolean | MotorbikeDefaultArgs<ExtArgs>
    breakdown?: boolean | Maintenance$breakdownArgs<ExtArgs>
    warranty?: boolean | Maintenance$warrantyArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motorbikeId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceDate?: boolean
    mileageAtMaintenance?: boolean
    maintenanceType?: boolean
    maintenanceCost?: boolean
    maintenanceDescription?: boolean
    breakdownId?: boolean
    warrantyId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    motorbike?: boolean | MotorbikeDefaultArgs<ExtArgs>
    breakdown?: boolean | Maintenance$breakdownArgs<ExtArgs>
    warranty?: boolean | Maintenance$warrantyArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motorbikeId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceDate?: boolean
    mileageAtMaintenance?: boolean
    maintenanceType?: boolean
    maintenanceCost?: boolean
    maintenanceDescription?: boolean
    breakdownId?: boolean
    warrantyId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    motorbike?: boolean | MotorbikeDefaultArgs<ExtArgs>
    breakdown?: boolean | Maintenance$breakdownArgs<ExtArgs>
    warranty?: boolean | Maintenance$warrantyArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectScalar = {
    id?: boolean
    motorbikeId?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceDate?: boolean
    mileageAtMaintenance?: boolean
    maintenanceType?: boolean
    maintenanceCost?: boolean
    maintenanceDescription?: boolean
    breakdownId?: boolean
    warrantyId?: boolean
  }

  export type MaintenanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "motorbikeId" | "clientId" | "createdAt" | "updatedAt" | "maintenanceDate" | "mileageAtMaintenance" | "maintenanceType" | "maintenanceCost" | "maintenanceDescription" | "breakdownId" | "warrantyId", ExtArgs["result"]["maintenance"]>
  export type MaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    motorbike?: boolean | MotorbikeDefaultArgs<ExtArgs>
    breakdown?: boolean | Maintenance$breakdownArgs<ExtArgs>
    warranty?: boolean | Maintenance$warrantyArgs<ExtArgs>
  }
  export type MaintenanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    motorbike?: boolean | MotorbikeDefaultArgs<ExtArgs>
    breakdown?: boolean | Maintenance$breakdownArgs<ExtArgs>
    warranty?: boolean | Maintenance$warrantyArgs<ExtArgs>
  }
  export type MaintenanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    motorbike?: boolean | MotorbikeDefaultArgs<ExtArgs>
    breakdown?: boolean | Maintenance$breakdownArgs<ExtArgs>
    warranty?: boolean | Maintenance$warrantyArgs<ExtArgs>
  }

  export type $MaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      motorbike: Prisma.$MotorbikePayload<ExtArgs>
      breakdown: Prisma.$BreakdownPayload<ExtArgs> | null
      warranty: Prisma.$WarrantyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      motorbikeId: string
      clientId: string
      createdAt: Date
      updatedAt: Date
      maintenanceDate: Date
      mileageAtMaintenance: number
      maintenanceType: string
      maintenanceCost: number
      maintenanceDescription: string
      breakdownId: string | null
      warrantyId: string | null
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type MaintenanceGetPayload<S extends boolean | null | undefined | MaintenanceDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePayload, S>

  type MaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface MaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance'], meta: { name: 'Maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {MaintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceFindUniqueArgs>(args: SelectSubset<T, MaintenanceFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceFindFirstArgs>(args?: SelectSubset<T, MaintenanceFindFirstArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceFindManyArgs>(args?: SelectSubset<T, MaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Maintenance.
     * @param {MaintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends MaintenanceCreateArgs>(args: SelectSubset<T, MaintenanceCreateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Maintenances.
     * @param {MaintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceCreateManyArgs>(args?: SelectSubset<T, MaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenances and returns the data saved in the database.
     * @param {MaintenanceCreateManyAndReturnArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Maintenance.
     * @param {MaintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceDeleteArgs>(args: SelectSubset<T, MaintenanceDeleteArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Maintenance.
     * @param {MaintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceUpdateArgs>(args: SelectSubset<T, MaintenanceUpdateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Maintenances.
     * @param {MaintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceDeleteManyArgs>(args?: SelectSubset<T, MaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceUpdateManyArgs>(args: SelectSubset<T, MaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances and returns the data updated in the database.
     * @param {MaintenanceUpdateManyAndReturnArgs} args - Arguments to update many Maintenances.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Maintenance.
     * @param {MaintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceUpsertArgs>(args: SelectSubset<T, MaintenanceUpsertArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceCountArgs>(
      args?: Subset<T, MaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance model
   */
  readonly fields: MaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    motorbike<T extends MotorbikeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MotorbikeDefaultArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    breakdown<T extends Maintenance$breakdownArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$breakdownArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    warranty<T extends Maintenance$warrantyArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$warrantyArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Maintenance model
   */ 
  interface MaintenanceFieldRefs {
    readonly id: FieldRef<"Maintenance", 'String'>
    readonly motorbikeId: FieldRef<"Maintenance", 'String'>
    readonly clientId: FieldRef<"Maintenance", 'String'>
    readonly createdAt: FieldRef<"Maintenance", 'DateTime'>
    readonly updatedAt: FieldRef<"Maintenance", 'DateTime'>
    readonly maintenanceDate: FieldRef<"Maintenance", 'DateTime'>
    readonly mileageAtMaintenance: FieldRef<"Maintenance", 'Int'>
    readonly maintenanceType: FieldRef<"Maintenance", 'String'>
    readonly maintenanceCost: FieldRef<"Maintenance", 'Float'>
    readonly maintenanceDescription: FieldRef<"Maintenance", 'String'>
    readonly breakdownId: FieldRef<"Maintenance", 'String'>
    readonly warrantyId: FieldRef<"Maintenance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance findUnique
   */
  export type MaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findUniqueOrThrow
   */
  export type MaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findFirst
   */
  export type MaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findFirstOrThrow
   */
  export type MaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findMany
   */
  export type MaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenances to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance create
   */
  export type MaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance.
     */
    data: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
  }

  /**
   * Maintenance createMany
   */
  export type MaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance createManyAndReturn
   */
  export type MaintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance update
   */
  export type MaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance.
     */
    data: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
    /**
     * Choose, which Maintenance to update.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance updateMany
   */
  export type MaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
  }

  /**
   * Maintenance updateManyAndReturn
   */
  export type MaintenanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance upsert
   */
  export type MaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance to update in case it exists.
     */
    where: MaintenanceWhereUniqueInput
    /**
     * In case the Maintenance found by the `where` argument doesn't exist, create a new Maintenance with this data.
     */
    create: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
    /**
     * In case the Maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
  }

  /**
   * Maintenance delete
   */
  export type MaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter which Maintenance to delete.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance deleteMany
   */
  export type MaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenances to delete
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to delete.
     */
    limit?: number
  }

  /**
   * Maintenance.breakdown
   */
  export type Maintenance$breakdownArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    where?: BreakdownWhereInput
  }

  /**
   * Maintenance.warranty
   */
  export type Maintenance$warrantyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    where?: WarrantyWhereInput
  }

  /**
   * Maintenance without action
   */
  export type MaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
  }


  /**
   * Model Motorbike
   */

  export type AggregateMotorbike = {
    _count: MotorbikeCountAggregateOutputType | null
    _avg: MotorbikeAvgAggregateOutputType | null
    _sum: MotorbikeSumAggregateOutputType | null
    _min: MotorbikeMinAggregateOutputType | null
    _max: MotorbikeMaxAggregateOutputType | null
  }

  export type MotorbikeAvgAggregateOutputType = {
    mileage: number | null
  }

  export type MotorbikeSumAggregateOutputType = {
    mileage: number | null
  }

  export type MotorbikeMinAggregateOutputType = {
    id: string | null
    modelMotorbikeId: string | null
    fleetId: string | null
    clientId: string | null
    licensePlate: string | null
    vehicleIdentificationNumber: string | null
    color: string | null
    mileage: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MotorbikeMaxAggregateOutputType = {
    id: string | null
    modelMotorbikeId: string | null
    fleetId: string | null
    clientId: string | null
    licensePlate: string | null
    vehicleIdentificationNumber: string | null
    color: string | null
    mileage: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MotorbikeCountAggregateOutputType = {
    id: number
    modelMotorbikeId: number
    fleetId: number
    clientId: number
    licensePlate: number
    vehicleIdentificationNumber: number
    color: number
    mileage: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MotorbikeAvgAggregateInputType = {
    mileage?: true
  }

  export type MotorbikeSumAggregateInputType = {
    mileage?: true
  }

  export type MotorbikeMinAggregateInputType = {
    id?: true
    modelMotorbikeId?: true
    fleetId?: true
    clientId?: true
    licensePlate?: true
    vehicleIdentificationNumber?: true
    color?: true
    mileage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MotorbikeMaxAggregateInputType = {
    id?: true
    modelMotorbikeId?: true
    fleetId?: true
    clientId?: true
    licensePlate?: true
    vehicleIdentificationNumber?: true
    color?: true
    mileage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MotorbikeCountAggregateInputType = {
    id?: true
    modelMotorbikeId?: true
    fleetId?: true
    clientId?: true
    licensePlate?: true
    vehicleIdentificationNumber?: true
    color?: true
    mileage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MotorbikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motorbike to aggregate.
     */
    where?: MotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorbikes to fetch.
     */
    orderBy?: MotorbikeOrderByWithRelationInput | MotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorbikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motorbikes
    **/
    _count?: true | MotorbikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotorbikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotorbikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotorbikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotorbikeMaxAggregateInputType
  }

  export type GetMotorbikeAggregateType<T extends MotorbikeAggregateArgs> = {
        [P in keyof T & keyof AggregateMotorbike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotorbike[P]>
      : GetScalarType<T[P], AggregateMotorbike[P]>
  }




  export type MotorbikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorbikeWhereInput
    orderBy?: MotorbikeOrderByWithAggregationInput | MotorbikeOrderByWithAggregationInput[]
    by: MotorbikeScalarFieldEnum[] | MotorbikeScalarFieldEnum
    having?: MotorbikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotorbikeCountAggregateInputType | true
    _avg?: MotorbikeAvgAggregateInputType
    _sum?: MotorbikeSumAggregateInputType
    _min?: MotorbikeMinAggregateInputType
    _max?: MotorbikeMaxAggregateInputType
  }

  export type MotorbikeGroupByOutputType = {
    id: string
    modelMotorbikeId: string
    fleetId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: MotorbikeCountAggregateOutputType | null
    _avg: MotorbikeAvgAggregateOutputType | null
    _sum: MotorbikeSumAggregateOutputType | null
    _min: MotorbikeMinAggregateOutputType | null
    _max: MotorbikeMaxAggregateOutputType | null
  }

  type GetMotorbikeGroupByPayload<T extends MotorbikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotorbikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotorbikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotorbikeGroupByOutputType[P]>
            : GetScalarType<T[P], MotorbikeGroupByOutputType[P]>
        }
      >
    >


  export type MotorbikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelMotorbikeId?: boolean
    fleetId?: boolean
    clientId?: boolean
    licensePlate?: boolean
    vehicleIdentificationNumber?: boolean
    color?: boolean
    mileage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelMotorbike?: boolean | ModelMotorbikeDefaultArgs<ExtArgs>
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    maintenances?: boolean | Motorbike$maintenancesArgs<ExtArgs>
    _count?: boolean | MotorbikeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorbike"]>

  export type MotorbikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelMotorbikeId?: boolean
    fleetId?: boolean
    clientId?: boolean
    licensePlate?: boolean
    vehicleIdentificationNumber?: boolean
    color?: boolean
    mileage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelMotorbike?: boolean | ModelMotorbikeDefaultArgs<ExtArgs>
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorbike"]>

  export type MotorbikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelMotorbikeId?: boolean
    fleetId?: boolean
    clientId?: boolean
    licensePlate?: boolean
    vehicleIdentificationNumber?: boolean
    color?: boolean
    mileage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelMotorbike?: boolean | ModelMotorbikeDefaultArgs<ExtArgs>
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motorbike"]>

  export type MotorbikeSelectScalar = {
    id?: boolean
    modelMotorbikeId?: boolean
    fleetId?: boolean
    clientId?: boolean
    licensePlate?: boolean
    vehicleIdentificationNumber?: boolean
    color?: boolean
    mileage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MotorbikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelMotorbikeId" | "fleetId" | "clientId" | "licensePlate" | "vehicleIdentificationNumber" | "color" | "mileage" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["motorbike"]>
  export type MotorbikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelMotorbike?: boolean | ModelMotorbikeDefaultArgs<ExtArgs>
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
    maintenances?: boolean | Motorbike$maintenancesArgs<ExtArgs>
    _count?: boolean | MotorbikeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotorbikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelMotorbike?: boolean | ModelMotorbikeDefaultArgs<ExtArgs>
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
  }
  export type MotorbikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelMotorbike?: boolean | ModelMotorbikeDefaultArgs<ExtArgs>
    fleet?: boolean | FleetDefaultArgs<ExtArgs>
  }

  export type $MotorbikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motorbike"
    objects: {
      modelMotorbike: Prisma.$ModelMotorbikePayload<ExtArgs>
      fleet: Prisma.$FleetPayload<ExtArgs>
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelMotorbikeId: string
      fleetId: string
      clientId: string
      licensePlate: string
      vehicleIdentificationNumber: string
      color: string
      mileage: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["motorbike"]>
    composites: {}
  }

  type MotorbikeGetPayload<S extends boolean | null | undefined | MotorbikeDefaultArgs> = $Result.GetResult<Prisma.$MotorbikePayload, S>

  type MotorbikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotorbikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotorbikeCountAggregateInputType | true
    }

  export interface MotorbikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motorbike'], meta: { name: 'Motorbike' } }
    /**
     * Find zero or one Motorbike that matches the filter.
     * @param {MotorbikeFindUniqueArgs} args - Arguments to find a Motorbike
     * @example
     * // Get one Motorbike
     * const motorbike = await prisma.motorbike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotorbikeFindUniqueArgs>(args: SelectSubset<T, MotorbikeFindUniqueArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Motorbike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotorbikeFindUniqueOrThrowArgs} args - Arguments to find a Motorbike
     * @example
     * // Get one Motorbike
     * const motorbike = await prisma.motorbike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotorbikeFindUniqueOrThrowArgs>(args: SelectSubset<T, MotorbikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Motorbike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeFindFirstArgs} args - Arguments to find a Motorbike
     * @example
     * // Get one Motorbike
     * const motorbike = await prisma.motorbike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotorbikeFindFirstArgs>(args?: SelectSubset<T, MotorbikeFindFirstArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Motorbike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeFindFirstOrThrowArgs} args - Arguments to find a Motorbike
     * @example
     * // Get one Motorbike
     * const motorbike = await prisma.motorbike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotorbikeFindFirstOrThrowArgs>(args?: SelectSubset<T, MotorbikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Motorbikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motorbikes
     * const motorbikes = await prisma.motorbike.findMany()
     * 
     * // Get first 10 Motorbikes
     * const motorbikes = await prisma.motorbike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motorbikeWithIdOnly = await prisma.motorbike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotorbikeFindManyArgs>(args?: SelectSubset<T, MotorbikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Motorbike.
     * @param {MotorbikeCreateArgs} args - Arguments to create a Motorbike.
     * @example
     * // Create one Motorbike
     * const Motorbike = await prisma.motorbike.create({
     *   data: {
     *     // ... data to create a Motorbike
     *   }
     * })
     * 
     */
    create<T extends MotorbikeCreateArgs>(args: SelectSubset<T, MotorbikeCreateArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Motorbikes.
     * @param {MotorbikeCreateManyArgs} args - Arguments to create many Motorbikes.
     * @example
     * // Create many Motorbikes
     * const motorbike = await prisma.motorbike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotorbikeCreateManyArgs>(args?: SelectSubset<T, MotorbikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motorbikes and returns the data saved in the database.
     * @param {MotorbikeCreateManyAndReturnArgs} args - Arguments to create many Motorbikes.
     * @example
     * // Create many Motorbikes
     * const motorbike = await prisma.motorbike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motorbikes and only return the `id`
     * const motorbikeWithIdOnly = await prisma.motorbike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotorbikeCreateManyAndReturnArgs>(args?: SelectSubset<T, MotorbikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Motorbike.
     * @param {MotorbikeDeleteArgs} args - Arguments to delete one Motorbike.
     * @example
     * // Delete one Motorbike
     * const Motorbike = await prisma.motorbike.delete({
     *   where: {
     *     // ... filter to delete one Motorbike
     *   }
     * })
     * 
     */
    delete<T extends MotorbikeDeleteArgs>(args: SelectSubset<T, MotorbikeDeleteArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Motorbike.
     * @param {MotorbikeUpdateArgs} args - Arguments to update one Motorbike.
     * @example
     * // Update one Motorbike
     * const motorbike = await prisma.motorbike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotorbikeUpdateArgs>(args: SelectSubset<T, MotorbikeUpdateArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Motorbikes.
     * @param {MotorbikeDeleteManyArgs} args - Arguments to filter Motorbikes to delete.
     * @example
     * // Delete a few Motorbikes
     * const { count } = await prisma.motorbike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotorbikeDeleteManyArgs>(args?: SelectSubset<T, MotorbikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motorbikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motorbikes
     * const motorbike = await prisma.motorbike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotorbikeUpdateManyArgs>(args: SelectSubset<T, MotorbikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motorbikes and returns the data updated in the database.
     * @param {MotorbikeUpdateManyAndReturnArgs} args - Arguments to update many Motorbikes.
     * @example
     * // Update many Motorbikes
     * const motorbike = await prisma.motorbike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motorbikes and only return the `id`
     * const motorbikeWithIdOnly = await prisma.motorbike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotorbikeUpdateManyAndReturnArgs>(args: SelectSubset<T, MotorbikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Motorbike.
     * @param {MotorbikeUpsertArgs} args - Arguments to update or create a Motorbike.
     * @example
     * // Update or create a Motorbike
     * const motorbike = await prisma.motorbike.upsert({
     *   create: {
     *     // ... data to create a Motorbike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motorbike we want to update
     *   }
     * })
     */
    upsert<T extends MotorbikeUpsertArgs>(args: SelectSubset<T, MotorbikeUpsertArgs<ExtArgs>>): Prisma__MotorbikeClient<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Motorbikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeCountArgs} args - Arguments to filter Motorbikes to count.
     * @example
     * // Count the number of Motorbikes
     * const count = await prisma.motorbike.count({
     *   where: {
     *     // ... the filter for the Motorbikes we want to count
     *   }
     * })
    **/
    count<T extends MotorbikeCountArgs>(
      args?: Subset<T, MotorbikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotorbikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motorbike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MotorbikeAggregateArgs>(args: Subset<T, MotorbikeAggregateArgs>): Prisma.PrismaPromise<GetMotorbikeAggregateType<T>>

    /**
     * Group by Motorbike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorbikeGroupByArgs} args - Group by arguments.
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
      T extends MotorbikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotorbikeGroupByArgs['orderBy'] }
        : { orderBy?: MotorbikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MotorbikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotorbikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motorbike model
   */
  readonly fields: MotorbikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motorbike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotorbikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modelMotorbike<T extends ModelMotorbikeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelMotorbikeDefaultArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    fleet<T extends FleetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FleetDefaultArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    maintenances<T extends Motorbike$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Motorbike$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Motorbike model
   */ 
  interface MotorbikeFieldRefs {
    readonly id: FieldRef<"Motorbike", 'String'>
    readonly modelMotorbikeId: FieldRef<"Motorbike", 'String'>
    readonly fleetId: FieldRef<"Motorbike", 'String'>
    readonly clientId: FieldRef<"Motorbike", 'String'>
    readonly licensePlate: FieldRef<"Motorbike", 'String'>
    readonly vehicleIdentificationNumber: FieldRef<"Motorbike", 'String'>
    readonly color: FieldRef<"Motorbike", 'String'>
    readonly mileage: FieldRef<"Motorbike", 'Int'>
    readonly status: FieldRef<"Motorbike", 'String'>
    readonly createdAt: FieldRef<"Motorbike", 'DateTime'>
    readonly updatedAt: FieldRef<"Motorbike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Motorbike findUnique
   */
  export type MotorbikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which Motorbike to fetch.
     */
    where: MotorbikeWhereUniqueInput
  }

  /**
   * Motorbike findUniqueOrThrow
   */
  export type MotorbikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which Motorbike to fetch.
     */
    where: MotorbikeWhereUniqueInput
  }

  /**
   * Motorbike findFirst
   */
  export type MotorbikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which Motorbike to fetch.
     */
    where?: MotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorbikes to fetch.
     */
    orderBy?: MotorbikeOrderByWithRelationInput | MotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motorbikes.
     */
    cursor?: MotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorbikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motorbikes.
     */
    distinct?: MotorbikeScalarFieldEnum | MotorbikeScalarFieldEnum[]
  }

  /**
   * Motorbike findFirstOrThrow
   */
  export type MotorbikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which Motorbike to fetch.
     */
    where?: MotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorbikes to fetch.
     */
    orderBy?: MotorbikeOrderByWithRelationInput | MotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motorbikes.
     */
    cursor?: MotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorbikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motorbikes.
     */
    distinct?: MotorbikeScalarFieldEnum | MotorbikeScalarFieldEnum[]
  }

  /**
   * Motorbike findMany
   */
  export type MotorbikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which Motorbikes to fetch.
     */
    where?: MotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motorbikes to fetch.
     */
    orderBy?: MotorbikeOrderByWithRelationInput | MotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motorbikes.
     */
    cursor?: MotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motorbikes.
     */
    skip?: number
    distinct?: MotorbikeScalarFieldEnum | MotorbikeScalarFieldEnum[]
  }

  /**
   * Motorbike create
   */
  export type MotorbikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Motorbike.
     */
    data: XOR<MotorbikeCreateInput, MotorbikeUncheckedCreateInput>
  }

  /**
   * Motorbike createMany
   */
  export type MotorbikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motorbikes.
     */
    data: MotorbikeCreateManyInput | MotorbikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motorbike createManyAndReturn
   */
  export type MotorbikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * The data used to create many Motorbikes.
     */
    data: MotorbikeCreateManyInput | MotorbikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motorbike update
   */
  export type MotorbikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Motorbike.
     */
    data: XOR<MotorbikeUpdateInput, MotorbikeUncheckedUpdateInput>
    /**
     * Choose, which Motorbike to update.
     */
    where: MotorbikeWhereUniqueInput
  }

  /**
   * Motorbike updateMany
   */
  export type MotorbikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motorbikes.
     */
    data: XOR<MotorbikeUpdateManyMutationInput, MotorbikeUncheckedUpdateManyInput>
    /**
     * Filter which Motorbikes to update
     */
    where?: MotorbikeWhereInput
    /**
     * Limit how many Motorbikes to update.
     */
    limit?: number
  }

  /**
   * Motorbike updateManyAndReturn
   */
  export type MotorbikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * The data used to update Motorbikes.
     */
    data: XOR<MotorbikeUpdateManyMutationInput, MotorbikeUncheckedUpdateManyInput>
    /**
     * Filter which Motorbikes to update
     */
    where?: MotorbikeWhereInput
    /**
     * Limit how many Motorbikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motorbike upsert
   */
  export type MotorbikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Motorbike to update in case it exists.
     */
    where: MotorbikeWhereUniqueInput
    /**
     * In case the Motorbike found by the `where` argument doesn't exist, create a new Motorbike with this data.
     */
    create: XOR<MotorbikeCreateInput, MotorbikeUncheckedCreateInput>
    /**
     * In case the Motorbike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotorbikeUpdateInput, MotorbikeUncheckedUpdateInput>
  }

  /**
   * Motorbike delete
   */
  export type MotorbikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    /**
     * Filter which Motorbike to delete.
     */
    where: MotorbikeWhereUniqueInput
  }

  /**
   * Motorbike deleteMany
   */
  export type MotorbikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motorbikes to delete
     */
    where?: MotorbikeWhereInput
    /**
     * Limit how many Motorbikes to delete.
     */
    limit?: number
  }

  /**
   * Motorbike.maintenances
   */
  export type Motorbike$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Motorbike without action
   */
  export type MotorbikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
  }


  /**
   * Model Breakdown
   */

  export type AggregateBreakdown = {
    _count: BreakdownCountAggregateOutputType | null
    _min: BreakdownMinAggregateOutputType | null
    _max: BreakdownMaxAggregateOutputType | null
  }

  export type BreakdownMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    description: string | null
    actionTaken: string | null
    resolved: boolean | null
    resolutionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BreakdownMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    description: string | null
    actionTaken: string | null
    resolved: boolean | null
    resolutionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BreakdownCountAggregateOutputType = {
    id: number
    clientId: number
    description: number
    actionTaken: number
    resolved: number
    resolutionDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BreakdownMinAggregateInputType = {
    id?: true
    clientId?: true
    description?: true
    actionTaken?: true
    resolved?: true
    resolutionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BreakdownMaxAggregateInputType = {
    id?: true
    clientId?: true
    description?: true
    actionTaken?: true
    resolved?: true
    resolutionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BreakdownCountAggregateInputType = {
    id?: true
    clientId?: true
    description?: true
    actionTaken?: true
    resolved?: true
    resolutionDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BreakdownAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breakdown to aggregate.
     */
    where?: BreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakdowns to fetch.
     */
    orderBy?: BreakdownOrderByWithRelationInput | BreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breakdowns
    **/
    _count?: true | BreakdownCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreakdownMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreakdownMaxAggregateInputType
  }

  export type GetBreakdownAggregateType<T extends BreakdownAggregateArgs> = {
        [P in keyof T & keyof AggregateBreakdown]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreakdown[P]>
      : GetScalarType<T[P], AggregateBreakdown[P]>
  }




  export type BreakdownGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakdownWhereInput
    orderBy?: BreakdownOrderByWithAggregationInput | BreakdownOrderByWithAggregationInput[]
    by: BreakdownScalarFieldEnum[] | BreakdownScalarFieldEnum
    having?: BreakdownScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreakdownCountAggregateInputType | true
    _min?: BreakdownMinAggregateInputType
    _max?: BreakdownMaxAggregateInputType
  }

  export type BreakdownGroupByOutputType = {
    id: string
    clientId: string
    description: string
    actionTaken: string
    resolved: boolean
    resolutionDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BreakdownCountAggregateOutputType | null
    _min: BreakdownMinAggregateOutputType | null
    _max: BreakdownMaxAggregateOutputType | null
  }

  type GetBreakdownGroupByPayload<T extends BreakdownGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreakdownGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreakdownGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreakdownGroupByOutputType[P]>
            : GetScalarType<T[P], BreakdownGroupByOutputType[P]>
        }
      >
    >


  export type BreakdownSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    description?: boolean
    actionTaken?: boolean
    resolved?: boolean
    resolutionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    maintenance?: boolean | Breakdown$maintenanceArgs<ExtArgs>
  }, ExtArgs["result"]["breakdown"]>

  export type BreakdownSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    description?: boolean
    actionTaken?: boolean
    resolved?: boolean
    resolutionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breakdown"]>

  export type BreakdownSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    description?: boolean
    actionTaken?: boolean
    resolved?: boolean
    resolutionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breakdown"]>

  export type BreakdownSelectScalar = {
    id?: boolean
    clientId?: boolean
    description?: boolean
    actionTaken?: boolean
    resolved?: boolean
    resolutionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BreakdownOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "description" | "actionTaken" | "resolved" | "resolutionDate" | "createdAt" | "updatedAt", ExtArgs["result"]["breakdown"]>
  export type BreakdownInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    maintenance?: boolean | Breakdown$maintenanceArgs<ExtArgs>
  }
  export type BreakdownIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BreakdownIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BreakdownPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breakdown"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      maintenance: Prisma.$MaintenancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      description: string
      actionTaken: string
      resolved: boolean
      resolutionDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["breakdown"]>
    composites: {}
  }

  type BreakdownGetPayload<S extends boolean | null | undefined | BreakdownDefaultArgs> = $Result.GetResult<Prisma.$BreakdownPayload, S>

  type BreakdownCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreakdownFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreakdownCountAggregateInputType | true
    }

  export interface BreakdownDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Breakdown'], meta: { name: 'Breakdown' } }
    /**
     * Find zero or one Breakdown that matches the filter.
     * @param {BreakdownFindUniqueArgs} args - Arguments to find a Breakdown
     * @example
     * // Get one Breakdown
     * const breakdown = await prisma.breakdown.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreakdownFindUniqueArgs>(args: SelectSubset<T, BreakdownFindUniqueArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Breakdown that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreakdownFindUniqueOrThrowArgs} args - Arguments to find a Breakdown
     * @example
     * // Get one Breakdown
     * const breakdown = await prisma.breakdown.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreakdownFindUniqueOrThrowArgs>(args: SelectSubset<T, BreakdownFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Breakdown that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownFindFirstArgs} args - Arguments to find a Breakdown
     * @example
     * // Get one Breakdown
     * const breakdown = await prisma.breakdown.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreakdownFindFirstArgs>(args?: SelectSubset<T, BreakdownFindFirstArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Breakdown that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownFindFirstOrThrowArgs} args - Arguments to find a Breakdown
     * @example
     * // Get one Breakdown
     * const breakdown = await prisma.breakdown.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreakdownFindFirstOrThrowArgs>(args?: SelectSubset<T, BreakdownFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Breakdowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breakdowns
     * const breakdowns = await prisma.breakdown.findMany()
     * 
     * // Get first 10 Breakdowns
     * const breakdowns = await prisma.breakdown.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breakdownWithIdOnly = await prisma.breakdown.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreakdownFindManyArgs>(args?: SelectSubset<T, BreakdownFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Breakdown.
     * @param {BreakdownCreateArgs} args - Arguments to create a Breakdown.
     * @example
     * // Create one Breakdown
     * const Breakdown = await prisma.breakdown.create({
     *   data: {
     *     // ... data to create a Breakdown
     *   }
     * })
     * 
     */
    create<T extends BreakdownCreateArgs>(args: SelectSubset<T, BreakdownCreateArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Breakdowns.
     * @param {BreakdownCreateManyArgs} args - Arguments to create many Breakdowns.
     * @example
     * // Create many Breakdowns
     * const breakdown = await prisma.breakdown.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreakdownCreateManyArgs>(args?: SelectSubset<T, BreakdownCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Breakdowns and returns the data saved in the database.
     * @param {BreakdownCreateManyAndReturnArgs} args - Arguments to create many Breakdowns.
     * @example
     * // Create many Breakdowns
     * const breakdown = await prisma.breakdown.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Breakdowns and only return the `id`
     * const breakdownWithIdOnly = await prisma.breakdown.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreakdownCreateManyAndReturnArgs>(args?: SelectSubset<T, BreakdownCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Breakdown.
     * @param {BreakdownDeleteArgs} args - Arguments to delete one Breakdown.
     * @example
     * // Delete one Breakdown
     * const Breakdown = await prisma.breakdown.delete({
     *   where: {
     *     // ... filter to delete one Breakdown
     *   }
     * })
     * 
     */
    delete<T extends BreakdownDeleteArgs>(args: SelectSubset<T, BreakdownDeleteArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Breakdown.
     * @param {BreakdownUpdateArgs} args - Arguments to update one Breakdown.
     * @example
     * // Update one Breakdown
     * const breakdown = await prisma.breakdown.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreakdownUpdateArgs>(args: SelectSubset<T, BreakdownUpdateArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Breakdowns.
     * @param {BreakdownDeleteManyArgs} args - Arguments to filter Breakdowns to delete.
     * @example
     * // Delete a few Breakdowns
     * const { count } = await prisma.breakdown.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreakdownDeleteManyArgs>(args?: SelectSubset<T, BreakdownDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breakdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breakdowns
     * const breakdown = await prisma.breakdown.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreakdownUpdateManyArgs>(args: SelectSubset<T, BreakdownUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breakdowns and returns the data updated in the database.
     * @param {BreakdownUpdateManyAndReturnArgs} args - Arguments to update many Breakdowns.
     * @example
     * // Update many Breakdowns
     * const breakdown = await prisma.breakdown.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Breakdowns and only return the `id`
     * const breakdownWithIdOnly = await prisma.breakdown.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BreakdownUpdateManyAndReturnArgs>(args: SelectSubset<T, BreakdownUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Breakdown.
     * @param {BreakdownUpsertArgs} args - Arguments to update or create a Breakdown.
     * @example
     * // Update or create a Breakdown
     * const breakdown = await prisma.breakdown.upsert({
     *   create: {
     *     // ... data to create a Breakdown
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Breakdown we want to update
     *   }
     * })
     */
    upsert<T extends BreakdownUpsertArgs>(args: SelectSubset<T, BreakdownUpsertArgs<ExtArgs>>): Prisma__BreakdownClient<$Result.GetResult<Prisma.$BreakdownPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Breakdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownCountArgs} args - Arguments to filter Breakdowns to count.
     * @example
     * // Count the number of Breakdowns
     * const count = await prisma.breakdown.count({
     *   where: {
     *     // ... the filter for the Breakdowns we want to count
     *   }
     * })
    **/
    count<T extends BreakdownCountArgs>(
      args?: Subset<T, BreakdownCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreakdownCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Breakdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BreakdownAggregateArgs>(args: Subset<T, BreakdownAggregateArgs>): Prisma.PrismaPromise<GetBreakdownAggregateType<T>>

    /**
     * Group by Breakdown.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakdownGroupByArgs} args - Group by arguments.
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
      T extends BreakdownGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreakdownGroupByArgs['orderBy'] }
        : { orderBy?: BreakdownGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BreakdownGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakdownGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Breakdown model
   */
  readonly fields: BreakdownFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Breakdown.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreakdownClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    maintenance<T extends Breakdown$maintenanceArgs<ExtArgs> = {}>(args?: Subset<T, Breakdown$maintenanceArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Breakdown model
   */ 
  interface BreakdownFieldRefs {
    readonly id: FieldRef<"Breakdown", 'String'>
    readonly clientId: FieldRef<"Breakdown", 'String'>
    readonly description: FieldRef<"Breakdown", 'String'>
    readonly actionTaken: FieldRef<"Breakdown", 'String'>
    readonly resolved: FieldRef<"Breakdown", 'Boolean'>
    readonly resolutionDate: FieldRef<"Breakdown", 'DateTime'>
    readonly createdAt: FieldRef<"Breakdown", 'DateTime'>
    readonly updatedAt: FieldRef<"Breakdown", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Breakdown findUnique
   */
  export type BreakdownFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * Filter, which Breakdown to fetch.
     */
    where: BreakdownWhereUniqueInput
  }

  /**
   * Breakdown findUniqueOrThrow
   */
  export type BreakdownFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * Filter, which Breakdown to fetch.
     */
    where: BreakdownWhereUniqueInput
  }

  /**
   * Breakdown findFirst
   */
  export type BreakdownFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * Filter, which Breakdown to fetch.
     */
    where?: BreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakdowns to fetch.
     */
    orderBy?: BreakdownOrderByWithRelationInput | BreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breakdowns.
     */
    cursor?: BreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breakdowns.
     */
    distinct?: BreakdownScalarFieldEnum | BreakdownScalarFieldEnum[]
  }

  /**
   * Breakdown findFirstOrThrow
   */
  export type BreakdownFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * Filter, which Breakdown to fetch.
     */
    where?: BreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakdowns to fetch.
     */
    orderBy?: BreakdownOrderByWithRelationInput | BreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breakdowns.
     */
    cursor?: BreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breakdowns.
     */
    distinct?: BreakdownScalarFieldEnum | BreakdownScalarFieldEnum[]
  }

  /**
   * Breakdown findMany
   */
  export type BreakdownFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * Filter, which Breakdowns to fetch.
     */
    where?: BreakdownWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breakdowns to fetch.
     */
    orderBy?: BreakdownOrderByWithRelationInput | BreakdownOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breakdowns.
     */
    cursor?: BreakdownWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breakdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breakdowns.
     */
    skip?: number
    distinct?: BreakdownScalarFieldEnum | BreakdownScalarFieldEnum[]
  }

  /**
   * Breakdown create
   */
  export type BreakdownCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * The data needed to create a Breakdown.
     */
    data: XOR<BreakdownCreateInput, BreakdownUncheckedCreateInput>
  }

  /**
   * Breakdown createMany
   */
  export type BreakdownCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breakdowns.
     */
    data: BreakdownCreateManyInput | BreakdownCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Breakdown createManyAndReturn
   */
  export type BreakdownCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * The data used to create many Breakdowns.
     */
    data: BreakdownCreateManyInput | BreakdownCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Breakdown update
   */
  export type BreakdownUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * The data needed to update a Breakdown.
     */
    data: XOR<BreakdownUpdateInput, BreakdownUncheckedUpdateInput>
    /**
     * Choose, which Breakdown to update.
     */
    where: BreakdownWhereUniqueInput
  }

  /**
   * Breakdown updateMany
   */
  export type BreakdownUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breakdowns.
     */
    data: XOR<BreakdownUpdateManyMutationInput, BreakdownUncheckedUpdateManyInput>
    /**
     * Filter which Breakdowns to update
     */
    where?: BreakdownWhereInput
    /**
     * Limit how many Breakdowns to update.
     */
    limit?: number
  }

  /**
   * Breakdown updateManyAndReturn
   */
  export type BreakdownUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * The data used to update Breakdowns.
     */
    data: XOR<BreakdownUpdateManyMutationInput, BreakdownUncheckedUpdateManyInput>
    /**
     * Filter which Breakdowns to update
     */
    where?: BreakdownWhereInput
    /**
     * Limit how many Breakdowns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Breakdown upsert
   */
  export type BreakdownUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * The filter to search for the Breakdown to update in case it exists.
     */
    where: BreakdownWhereUniqueInput
    /**
     * In case the Breakdown found by the `where` argument doesn't exist, create a new Breakdown with this data.
     */
    create: XOR<BreakdownCreateInput, BreakdownUncheckedCreateInput>
    /**
     * In case the Breakdown was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreakdownUpdateInput, BreakdownUncheckedUpdateInput>
  }

  /**
   * Breakdown delete
   */
  export type BreakdownDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
    /**
     * Filter which Breakdown to delete.
     */
    where: BreakdownWhereUniqueInput
  }

  /**
   * Breakdown deleteMany
   */
  export type BreakdownDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breakdowns to delete
     */
    where?: BreakdownWhereInput
    /**
     * Limit how many Breakdowns to delete.
     */
    limit?: number
  }

  /**
   * Breakdown.maintenance
   */
  export type Breakdown$maintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
  }

  /**
   * Breakdown without action
   */
  export type BreakdownDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breakdown
     */
    select?: BreakdownSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breakdown
     */
    omit?: BreakdownOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakdownInclude<ExtArgs> | null
  }


  /**
   * Model Warranty
   */

  export type AggregateWarranty = {
    _count: WarrantyCountAggregateOutputType | null
    _min: WarrantyMinAggregateOutputType | null
    _max: WarrantyMaxAggregateOutputType | null
  }

  export type WarrantyMinAggregateOutputType = {
    id: string | null
    validFrom: Date | null
    validUntil: Date | null
    providerName: string | null
    warrantyDetails: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarrantyMaxAggregateOutputType = {
    id: string | null
    validFrom: Date | null
    validUntil: Date | null
    providerName: string | null
    warrantyDetails: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarrantyCountAggregateOutputType = {
    id: number
    validFrom: number
    validUntil: number
    providerName: number
    warrantyDetails: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WarrantyMinAggregateInputType = {
    id?: true
    validFrom?: true
    validUntil?: true
    providerName?: true
    warrantyDetails?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarrantyMaxAggregateInputType = {
    id?: true
    validFrom?: true
    validUntil?: true
    providerName?: true
    warrantyDetails?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarrantyCountAggregateInputType = {
    id?: true
    validFrom?: true
    validUntil?: true
    providerName?: true
    warrantyDetails?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WarrantyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warranty to aggregate.
     */
    where?: WarrantyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warranties to fetch.
     */
    orderBy?: WarrantyOrderByWithRelationInput | WarrantyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarrantyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warranties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warranties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warranties
    **/
    _count?: true | WarrantyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarrantyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarrantyMaxAggregateInputType
  }

  export type GetWarrantyAggregateType<T extends WarrantyAggregateArgs> = {
        [P in keyof T & keyof AggregateWarranty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarranty[P]>
      : GetScalarType<T[P], AggregateWarranty[P]>
  }




  export type WarrantyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarrantyWhereInput
    orderBy?: WarrantyOrderByWithAggregationInput | WarrantyOrderByWithAggregationInput[]
    by: WarrantyScalarFieldEnum[] | WarrantyScalarFieldEnum
    having?: WarrantyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarrantyCountAggregateInputType | true
    _min?: WarrantyMinAggregateInputType
    _max?: WarrantyMaxAggregateInputType
  }

  export type WarrantyGroupByOutputType = {
    id: string
    validFrom: Date
    validUntil: Date
    providerName: string
    warrantyDetails: string
    createdAt: Date
    updatedAt: Date
    _count: WarrantyCountAggregateOutputType | null
    _min: WarrantyMinAggregateOutputType | null
    _max: WarrantyMaxAggregateOutputType | null
  }

  type GetWarrantyGroupByPayload<T extends WarrantyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarrantyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarrantyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarrantyGroupByOutputType[P]>
            : GetScalarType<T[P], WarrantyGroupByOutputType[P]>
        }
      >
    >


  export type WarrantySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validFrom?: boolean
    validUntil?: boolean
    providerName?: boolean
    warrantyDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenance?: boolean | Warranty$maintenanceArgs<ExtArgs>
  }, ExtArgs["result"]["warranty"]>

  export type WarrantySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validFrom?: boolean
    validUntil?: boolean
    providerName?: boolean
    warrantyDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warranty"]>

  export type WarrantySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validFrom?: boolean
    validUntil?: boolean
    providerName?: boolean
    warrantyDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warranty"]>

  export type WarrantySelectScalar = {
    id?: boolean
    validFrom?: boolean
    validUntil?: boolean
    providerName?: boolean
    warrantyDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WarrantyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "validFrom" | "validUntil" | "providerName" | "warrantyDetails" | "createdAt" | "updatedAt", ExtArgs["result"]["warranty"]>
  export type WarrantyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenance?: boolean | Warranty$maintenanceArgs<ExtArgs>
  }
  export type WarrantyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WarrantyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarrantyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warranty"
    objects: {
      maintenance: Prisma.$MaintenancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      validFrom: Date
      validUntil: Date
      providerName: string
      warrantyDetails: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warranty"]>
    composites: {}
  }

  type WarrantyGetPayload<S extends boolean | null | undefined | WarrantyDefaultArgs> = $Result.GetResult<Prisma.$WarrantyPayload, S>

  type WarrantyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarrantyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarrantyCountAggregateInputType | true
    }

  export interface WarrantyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warranty'], meta: { name: 'Warranty' } }
    /**
     * Find zero or one Warranty that matches the filter.
     * @param {WarrantyFindUniqueArgs} args - Arguments to find a Warranty
     * @example
     * // Get one Warranty
     * const warranty = await prisma.warranty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarrantyFindUniqueArgs>(args: SelectSubset<T, WarrantyFindUniqueArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Warranty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarrantyFindUniqueOrThrowArgs} args - Arguments to find a Warranty
     * @example
     * // Get one Warranty
     * const warranty = await prisma.warranty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarrantyFindUniqueOrThrowArgs>(args: SelectSubset<T, WarrantyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Warranty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyFindFirstArgs} args - Arguments to find a Warranty
     * @example
     * // Get one Warranty
     * const warranty = await prisma.warranty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarrantyFindFirstArgs>(args?: SelectSubset<T, WarrantyFindFirstArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Warranty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyFindFirstOrThrowArgs} args - Arguments to find a Warranty
     * @example
     * // Get one Warranty
     * const warranty = await prisma.warranty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarrantyFindFirstOrThrowArgs>(args?: SelectSubset<T, WarrantyFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Warranties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warranties
     * const warranties = await prisma.warranty.findMany()
     * 
     * // Get first 10 Warranties
     * const warranties = await prisma.warranty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warrantyWithIdOnly = await prisma.warranty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarrantyFindManyArgs>(args?: SelectSubset<T, WarrantyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Warranty.
     * @param {WarrantyCreateArgs} args - Arguments to create a Warranty.
     * @example
     * // Create one Warranty
     * const Warranty = await prisma.warranty.create({
     *   data: {
     *     // ... data to create a Warranty
     *   }
     * })
     * 
     */
    create<T extends WarrantyCreateArgs>(args: SelectSubset<T, WarrantyCreateArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Warranties.
     * @param {WarrantyCreateManyArgs} args - Arguments to create many Warranties.
     * @example
     * // Create many Warranties
     * const warranty = await prisma.warranty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarrantyCreateManyArgs>(args?: SelectSubset<T, WarrantyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warranties and returns the data saved in the database.
     * @param {WarrantyCreateManyAndReturnArgs} args - Arguments to create many Warranties.
     * @example
     * // Create many Warranties
     * const warranty = await prisma.warranty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warranties and only return the `id`
     * const warrantyWithIdOnly = await prisma.warranty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarrantyCreateManyAndReturnArgs>(args?: SelectSubset<T, WarrantyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Warranty.
     * @param {WarrantyDeleteArgs} args - Arguments to delete one Warranty.
     * @example
     * // Delete one Warranty
     * const Warranty = await prisma.warranty.delete({
     *   where: {
     *     // ... filter to delete one Warranty
     *   }
     * })
     * 
     */
    delete<T extends WarrantyDeleteArgs>(args: SelectSubset<T, WarrantyDeleteArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Warranty.
     * @param {WarrantyUpdateArgs} args - Arguments to update one Warranty.
     * @example
     * // Update one Warranty
     * const warranty = await prisma.warranty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarrantyUpdateArgs>(args: SelectSubset<T, WarrantyUpdateArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Warranties.
     * @param {WarrantyDeleteManyArgs} args - Arguments to filter Warranties to delete.
     * @example
     * // Delete a few Warranties
     * const { count } = await prisma.warranty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarrantyDeleteManyArgs>(args?: SelectSubset<T, WarrantyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warranties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warranties
     * const warranty = await prisma.warranty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarrantyUpdateManyArgs>(args: SelectSubset<T, WarrantyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warranties and returns the data updated in the database.
     * @param {WarrantyUpdateManyAndReturnArgs} args - Arguments to update many Warranties.
     * @example
     * // Update many Warranties
     * const warranty = await prisma.warranty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warranties and only return the `id`
     * const warrantyWithIdOnly = await prisma.warranty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarrantyUpdateManyAndReturnArgs>(args: SelectSubset<T, WarrantyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Warranty.
     * @param {WarrantyUpsertArgs} args - Arguments to update or create a Warranty.
     * @example
     * // Update or create a Warranty
     * const warranty = await prisma.warranty.upsert({
     *   create: {
     *     // ... data to create a Warranty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warranty we want to update
     *   }
     * })
     */
    upsert<T extends WarrantyUpsertArgs>(args: SelectSubset<T, WarrantyUpsertArgs<ExtArgs>>): Prisma__WarrantyClient<$Result.GetResult<Prisma.$WarrantyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Warranties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyCountArgs} args - Arguments to filter Warranties to count.
     * @example
     * // Count the number of Warranties
     * const count = await prisma.warranty.count({
     *   where: {
     *     // ... the filter for the Warranties we want to count
     *   }
     * })
    **/
    count<T extends WarrantyCountArgs>(
      args?: Subset<T, WarrantyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarrantyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warranty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarrantyAggregateArgs>(args: Subset<T, WarrantyAggregateArgs>): Prisma.PrismaPromise<GetWarrantyAggregateType<T>>

    /**
     * Group by Warranty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarrantyGroupByArgs} args - Group by arguments.
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
      T extends WarrantyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarrantyGroupByArgs['orderBy'] }
        : { orderBy?: WarrantyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarrantyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarrantyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warranty model
   */
  readonly fields: WarrantyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warranty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarrantyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenance<T extends Warranty$maintenanceArgs<ExtArgs> = {}>(args?: Subset<T, Warranty$maintenanceArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Warranty model
   */ 
  interface WarrantyFieldRefs {
    readonly id: FieldRef<"Warranty", 'String'>
    readonly validFrom: FieldRef<"Warranty", 'DateTime'>
    readonly validUntil: FieldRef<"Warranty", 'DateTime'>
    readonly providerName: FieldRef<"Warranty", 'String'>
    readonly warrantyDetails: FieldRef<"Warranty", 'String'>
    readonly createdAt: FieldRef<"Warranty", 'DateTime'>
    readonly updatedAt: FieldRef<"Warranty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warranty findUnique
   */
  export type WarrantyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * Filter, which Warranty to fetch.
     */
    where: WarrantyWhereUniqueInput
  }

  /**
   * Warranty findUniqueOrThrow
   */
  export type WarrantyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * Filter, which Warranty to fetch.
     */
    where: WarrantyWhereUniqueInput
  }

  /**
   * Warranty findFirst
   */
  export type WarrantyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * Filter, which Warranty to fetch.
     */
    where?: WarrantyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warranties to fetch.
     */
    orderBy?: WarrantyOrderByWithRelationInput | WarrantyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warranties.
     */
    cursor?: WarrantyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warranties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warranties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warranties.
     */
    distinct?: WarrantyScalarFieldEnum | WarrantyScalarFieldEnum[]
  }

  /**
   * Warranty findFirstOrThrow
   */
  export type WarrantyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * Filter, which Warranty to fetch.
     */
    where?: WarrantyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warranties to fetch.
     */
    orderBy?: WarrantyOrderByWithRelationInput | WarrantyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warranties.
     */
    cursor?: WarrantyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warranties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warranties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warranties.
     */
    distinct?: WarrantyScalarFieldEnum | WarrantyScalarFieldEnum[]
  }

  /**
   * Warranty findMany
   */
  export type WarrantyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * Filter, which Warranties to fetch.
     */
    where?: WarrantyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warranties to fetch.
     */
    orderBy?: WarrantyOrderByWithRelationInput | WarrantyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warranties.
     */
    cursor?: WarrantyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warranties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warranties.
     */
    skip?: number
    distinct?: WarrantyScalarFieldEnum | WarrantyScalarFieldEnum[]
  }

  /**
   * Warranty create
   */
  export type WarrantyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * The data needed to create a Warranty.
     */
    data: XOR<WarrantyCreateInput, WarrantyUncheckedCreateInput>
  }

  /**
   * Warranty createMany
   */
  export type WarrantyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warranties.
     */
    data: WarrantyCreateManyInput | WarrantyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warranty createManyAndReturn
   */
  export type WarrantyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * The data used to create many Warranties.
     */
    data: WarrantyCreateManyInput | WarrantyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warranty update
   */
  export type WarrantyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * The data needed to update a Warranty.
     */
    data: XOR<WarrantyUpdateInput, WarrantyUncheckedUpdateInput>
    /**
     * Choose, which Warranty to update.
     */
    where: WarrantyWhereUniqueInput
  }

  /**
   * Warranty updateMany
   */
  export type WarrantyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warranties.
     */
    data: XOR<WarrantyUpdateManyMutationInput, WarrantyUncheckedUpdateManyInput>
    /**
     * Filter which Warranties to update
     */
    where?: WarrantyWhereInput
    /**
     * Limit how many Warranties to update.
     */
    limit?: number
  }

  /**
   * Warranty updateManyAndReturn
   */
  export type WarrantyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * The data used to update Warranties.
     */
    data: XOR<WarrantyUpdateManyMutationInput, WarrantyUncheckedUpdateManyInput>
    /**
     * Filter which Warranties to update
     */
    where?: WarrantyWhereInput
    /**
     * Limit how many Warranties to update.
     */
    limit?: number
  }

  /**
   * Warranty upsert
   */
  export type WarrantyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * The filter to search for the Warranty to update in case it exists.
     */
    where: WarrantyWhereUniqueInput
    /**
     * In case the Warranty found by the `where` argument doesn't exist, create a new Warranty with this data.
     */
    create: XOR<WarrantyCreateInput, WarrantyUncheckedCreateInput>
    /**
     * In case the Warranty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarrantyUpdateInput, WarrantyUncheckedUpdateInput>
  }

  /**
   * Warranty delete
   */
  export type WarrantyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
    /**
     * Filter which Warranty to delete.
     */
    where: WarrantyWhereUniqueInput
  }

  /**
   * Warranty deleteMany
   */
  export type WarrantyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warranties to delete
     */
    where?: WarrantyWhereInput
    /**
     * Limit how many Warranties to delete.
     */
    limit?: number
  }

  /**
   * Warranty.maintenance
   */
  export type Warranty$maintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
  }

  /**
   * Warranty without action
   */
  export type WarrantyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warranty
     */
    select?: WarrantySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warranty
     */
    omit?: WarrantyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarrantyInclude<ExtArgs> | null
  }


  /**
   * Model Fleet
   */

  export type AggregateFleet = {
    _count: FleetCountAggregateOutputType | null
    _min: FleetMinAggregateOutputType | null
    _max: FleetMaxAggregateOutputType | null
  }

  export type FleetMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    managerId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FleetMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    managerId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FleetCountAggregateOutputType = {
    id: number
    clientId: number
    managerId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FleetMinAggregateInputType = {
    id?: true
    clientId?: true
    managerId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FleetMaxAggregateInputType = {
    id?: true
    clientId?: true
    managerId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FleetCountAggregateInputType = {
    id?: true
    clientId?: true
    managerId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FleetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fleet to aggregate.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fleets
    **/
    _count?: true | FleetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FleetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FleetMaxAggregateInputType
  }

  export type GetFleetAggregateType<T extends FleetAggregateArgs> = {
        [P in keyof T & keyof AggregateFleet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFleet[P]>
      : GetScalarType<T[P], AggregateFleet[P]>
  }




  export type FleetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FleetWhereInput
    orderBy?: FleetOrderByWithAggregationInput | FleetOrderByWithAggregationInput[]
    by: FleetScalarFieldEnum[] | FleetScalarFieldEnum
    having?: FleetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FleetCountAggregateInputType | true
    _min?: FleetMinAggregateInputType
    _max?: FleetMaxAggregateInputType
  }

  export type FleetGroupByOutputType = {
    id: string
    clientId: string
    managerId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FleetCountAggregateOutputType | null
    _min: FleetMinAggregateOutputType | null
    _max: FleetMaxAggregateOutputType | null
  }

  type GetFleetGroupByPayload<T extends FleetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FleetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FleetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FleetGroupByOutputType[P]>
            : GetScalarType<T[P], FleetGroupByOutputType[P]>
        }
      >
    >


  export type FleetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    managerId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    motorbikes?: boolean | Fleet$motorbikesArgs<ExtArgs>
    _count?: boolean | FleetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fleet"]>

  export type FleetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    managerId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fleet"]>

  export type FleetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    managerId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fleet"]>

  export type FleetSelectScalar = {
    id?: boolean
    clientId?: boolean
    managerId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FleetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "managerId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["fleet"]>
  export type FleetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorbikes?: boolean | Fleet$motorbikesArgs<ExtArgs>
    _count?: boolean | FleetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FleetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FleetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FleetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fleet"
    objects: {
      motorbikes: Prisma.$MotorbikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      managerId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fleet"]>
    composites: {}
  }

  type FleetGetPayload<S extends boolean | null | undefined | FleetDefaultArgs> = $Result.GetResult<Prisma.$FleetPayload, S>

  type FleetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FleetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FleetCountAggregateInputType | true
    }

  export interface FleetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fleet'], meta: { name: 'Fleet' } }
    /**
     * Find zero or one Fleet that matches the filter.
     * @param {FleetFindUniqueArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FleetFindUniqueArgs>(args: SelectSubset<T, FleetFindUniqueArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Fleet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FleetFindUniqueOrThrowArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FleetFindUniqueOrThrowArgs>(args: SelectSubset<T, FleetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Fleet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetFindFirstArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FleetFindFirstArgs>(args?: SelectSubset<T, FleetFindFirstArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Fleet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetFindFirstOrThrowArgs} args - Arguments to find a Fleet
     * @example
     * // Get one Fleet
     * const fleet = await prisma.fleet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FleetFindFirstOrThrowArgs>(args?: SelectSubset<T, FleetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Fleets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fleets
     * const fleets = await prisma.fleet.findMany()
     * 
     * // Get first 10 Fleets
     * const fleets = await prisma.fleet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fleetWithIdOnly = await prisma.fleet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FleetFindManyArgs>(args?: SelectSubset<T, FleetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Fleet.
     * @param {FleetCreateArgs} args - Arguments to create a Fleet.
     * @example
     * // Create one Fleet
     * const Fleet = await prisma.fleet.create({
     *   data: {
     *     // ... data to create a Fleet
     *   }
     * })
     * 
     */
    create<T extends FleetCreateArgs>(args: SelectSubset<T, FleetCreateArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Fleets.
     * @param {FleetCreateManyArgs} args - Arguments to create many Fleets.
     * @example
     * // Create many Fleets
     * const fleet = await prisma.fleet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FleetCreateManyArgs>(args?: SelectSubset<T, FleetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fleets and returns the data saved in the database.
     * @param {FleetCreateManyAndReturnArgs} args - Arguments to create many Fleets.
     * @example
     * // Create many Fleets
     * const fleet = await prisma.fleet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fleets and only return the `id`
     * const fleetWithIdOnly = await prisma.fleet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FleetCreateManyAndReturnArgs>(args?: SelectSubset<T, FleetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Fleet.
     * @param {FleetDeleteArgs} args - Arguments to delete one Fleet.
     * @example
     * // Delete one Fleet
     * const Fleet = await prisma.fleet.delete({
     *   where: {
     *     // ... filter to delete one Fleet
     *   }
     * })
     * 
     */
    delete<T extends FleetDeleteArgs>(args: SelectSubset<T, FleetDeleteArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Fleet.
     * @param {FleetUpdateArgs} args - Arguments to update one Fleet.
     * @example
     * // Update one Fleet
     * const fleet = await prisma.fleet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FleetUpdateArgs>(args: SelectSubset<T, FleetUpdateArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Fleets.
     * @param {FleetDeleteManyArgs} args - Arguments to filter Fleets to delete.
     * @example
     * // Delete a few Fleets
     * const { count } = await prisma.fleet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FleetDeleteManyArgs>(args?: SelectSubset<T, FleetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fleets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fleets
     * const fleet = await prisma.fleet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FleetUpdateManyArgs>(args: SelectSubset<T, FleetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fleets and returns the data updated in the database.
     * @param {FleetUpdateManyAndReturnArgs} args - Arguments to update many Fleets.
     * @example
     * // Update many Fleets
     * const fleet = await prisma.fleet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fleets and only return the `id`
     * const fleetWithIdOnly = await prisma.fleet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FleetUpdateManyAndReturnArgs>(args: SelectSubset<T, FleetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Fleet.
     * @param {FleetUpsertArgs} args - Arguments to update or create a Fleet.
     * @example
     * // Update or create a Fleet
     * const fleet = await prisma.fleet.upsert({
     *   create: {
     *     // ... data to create a Fleet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fleet we want to update
     *   }
     * })
     */
    upsert<T extends FleetUpsertArgs>(args: SelectSubset<T, FleetUpsertArgs<ExtArgs>>): Prisma__FleetClient<$Result.GetResult<Prisma.$FleetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Fleets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetCountArgs} args - Arguments to filter Fleets to count.
     * @example
     * // Count the number of Fleets
     * const count = await prisma.fleet.count({
     *   where: {
     *     // ... the filter for the Fleets we want to count
     *   }
     * })
    **/
    count<T extends FleetCountArgs>(
      args?: Subset<T, FleetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FleetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fleet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FleetAggregateArgs>(args: Subset<T, FleetAggregateArgs>): Prisma.PrismaPromise<GetFleetAggregateType<T>>

    /**
     * Group by Fleet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FleetGroupByArgs} args - Group by arguments.
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
      T extends FleetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FleetGroupByArgs['orderBy'] }
        : { orderBy?: FleetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FleetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFleetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fleet model
   */
  readonly fields: FleetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fleet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FleetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    motorbikes<T extends Fleet$motorbikesArgs<ExtArgs> = {}>(args?: Subset<T, Fleet$motorbikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Fleet model
   */ 
  interface FleetFieldRefs {
    readonly id: FieldRef<"Fleet", 'String'>
    readonly clientId: FieldRef<"Fleet", 'String'>
    readonly managerId: FieldRef<"Fleet", 'String'>
    readonly name: FieldRef<"Fleet", 'String'>
    readonly createdAt: FieldRef<"Fleet", 'DateTime'>
    readonly updatedAt: FieldRef<"Fleet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fleet findUnique
   */
  export type FleetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet findUniqueOrThrow
   */
  export type FleetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet findFirst
   */
  export type FleetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fleets.
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fleets.
     */
    distinct?: FleetScalarFieldEnum | FleetScalarFieldEnum[]
  }

  /**
   * Fleet findFirstOrThrow
   */
  export type FleetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleet to fetch.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fleets.
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fleets.
     */
    distinct?: FleetScalarFieldEnum | FleetScalarFieldEnum[]
  }

  /**
   * Fleet findMany
   */
  export type FleetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter, which Fleets to fetch.
     */
    where?: FleetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fleets to fetch.
     */
    orderBy?: FleetOrderByWithRelationInput | FleetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fleets.
     */
    cursor?: FleetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fleets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fleets.
     */
    skip?: number
    distinct?: FleetScalarFieldEnum | FleetScalarFieldEnum[]
  }

  /**
   * Fleet create
   */
  export type FleetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * The data needed to create a Fleet.
     */
    data: XOR<FleetCreateInput, FleetUncheckedCreateInput>
  }

  /**
   * Fleet createMany
   */
  export type FleetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fleets.
     */
    data: FleetCreateManyInput | FleetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fleet createManyAndReturn
   */
  export type FleetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * The data used to create many Fleets.
     */
    data: FleetCreateManyInput | FleetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fleet update
   */
  export type FleetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * The data needed to update a Fleet.
     */
    data: XOR<FleetUpdateInput, FleetUncheckedUpdateInput>
    /**
     * Choose, which Fleet to update.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet updateMany
   */
  export type FleetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fleets.
     */
    data: XOR<FleetUpdateManyMutationInput, FleetUncheckedUpdateManyInput>
    /**
     * Filter which Fleets to update
     */
    where?: FleetWhereInput
    /**
     * Limit how many Fleets to update.
     */
    limit?: number
  }

  /**
   * Fleet updateManyAndReturn
   */
  export type FleetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * The data used to update Fleets.
     */
    data: XOR<FleetUpdateManyMutationInput, FleetUncheckedUpdateManyInput>
    /**
     * Filter which Fleets to update
     */
    where?: FleetWhereInput
    /**
     * Limit how many Fleets to update.
     */
    limit?: number
  }

  /**
   * Fleet upsert
   */
  export type FleetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * The filter to search for the Fleet to update in case it exists.
     */
    where: FleetWhereUniqueInput
    /**
     * In case the Fleet found by the `where` argument doesn't exist, create a new Fleet with this data.
     */
    create: XOR<FleetCreateInput, FleetUncheckedCreateInput>
    /**
     * In case the Fleet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FleetUpdateInput, FleetUncheckedUpdateInput>
  }

  /**
   * Fleet delete
   */
  export type FleetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
    /**
     * Filter which Fleet to delete.
     */
    where: FleetWhereUniqueInput
  }

  /**
   * Fleet deleteMany
   */
  export type FleetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fleets to delete
     */
    where?: FleetWhereInput
    /**
     * Limit how many Fleets to delete.
     */
    limit?: number
  }

  /**
   * Fleet.motorbikes
   */
  export type Fleet$motorbikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    where?: MotorbikeWhereInput
    orderBy?: MotorbikeOrderByWithRelationInput | MotorbikeOrderByWithRelationInput[]
    cursor?: MotorbikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotorbikeScalarFieldEnum | MotorbikeScalarFieldEnum[]
  }

  /**
   * Fleet without action
   */
  export type FleetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fleet
     */
    select?: FleetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fleet
     */
    omit?: FleetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FleetInclude<ExtArgs> | null
  }


  /**
   * Model ModelMotorbike
   */

  export type AggregateModelMotorbike = {
    _count: ModelMotorbikeCountAggregateOutputType | null
    _avg: ModelMotorbikeAvgAggregateOutputType | null
    _sum: ModelMotorbikeSumAggregateOutputType | null
    _min: ModelMotorbikeMinAggregateOutputType | null
    _max: ModelMotorbikeMaxAggregateOutputType | null
  }

  export type ModelMotorbikeAvgAggregateOutputType = {
    maintenanceIntervalKm: number | null
    maintenanceIntervalTimeMonths: number | null
  }

  export type ModelMotorbikeSumAggregateOutputType = {
    maintenanceIntervalKm: number | null
    maintenanceIntervalTimeMonths: number | null
  }

  export type ModelMotorbikeMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    maintenanceIntervalKm: number | null
    maintenanceIntervalTimeMonths: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMotorbikeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    maintenanceIntervalKm: number | null
    maintenanceIntervalTimeMonths: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMotorbikeCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelMotorbikeAvgAggregateInputType = {
    maintenanceIntervalKm?: true
    maintenanceIntervalTimeMonths?: true
  }

  export type ModelMotorbikeSumAggregateInputType = {
    maintenanceIntervalKm?: true
    maintenanceIntervalTimeMonths?: true
  }

  export type ModelMotorbikeMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    maintenanceIntervalKm?: true
    maintenanceIntervalTimeMonths?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelMotorbikeMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    maintenanceIntervalKm?: true
    maintenanceIntervalTimeMonths?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelMotorbikeCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    maintenanceIntervalKm?: true
    maintenanceIntervalTimeMonths?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelMotorbikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelMotorbike to aggregate.
     */
    where?: ModelMotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelMotorbikes to fetch.
     */
    orderBy?: ModelMotorbikeOrderByWithRelationInput | ModelMotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelMotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelMotorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelMotorbikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelMotorbikes
    **/
    _count?: true | ModelMotorbikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelMotorbikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelMotorbikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMotorbikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMotorbikeMaxAggregateInputType
  }

  export type GetModelMotorbikeAggregateType<T extends ModelMotorbikeAggregateArgs> = {
        [P in keyof T & keyof AggregateModelMotorbike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelMotorbike[P]>
      : GetScalarType<T[P], AggregateModelMotorbike[P]>
  }




  export type ModelMotorbikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelMotorbikeWhereInput
    orderBy?: ModelMotorbikeOrderByWithAggregationInput | ModelMotorbikeOrderByWithAggregationInput[]
    by: ModelMotorbikeScalarFieldEnum[] | ModelMotorbikeScalarFieldEnum
    having?: ModelMotorbikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelMotorbikeCountAggregateInputType | true
    _avg?: ModelMotorbikeAvgAggregateInputType
    _sum?: ModelMotorbikeSumAggregateInputType
    _min?: ModelMotorbikeMinAggregateInputType
    _max?: ModelMotorbikeMaxAggregateInputType
  }

  export type ModelMotorbikeGroupByOutputType = {
    id: string
    name: string
    brand: string
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt: Date
    updatedAt: Date
    _count: ModelMotorbikeCountAggregateOutputType | null
    _avg: ModelMotorbikeAvgAggregateOutputType | null
    _sum: ModelMotorbikeSumAggregateOutputType | null
    _min: ModelMotorbikeMinAggregateOutputType | null
    _max: ModelMotorbikeMaxAggregateOutputType | null
  }

  type GetModelMotorbikeGroupByPayload<T extends ModelMotorbikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelMotorbikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelMotorbikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelMotorbikeGroupByOutputType[P]>
            : GetScalarType<T[P], ModelMotorbikeGroupByOutputType[P]>
        }
      >
    >


  export type ModelMotorbikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    maintenanceIntervalKm?: boolean
    maintenanceIntervalTimeMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    motorbikes?: boolean | ModelMotorbike$motorbikesArgs<ExtArgs>
    _count?: boolean | ModelMotorbikeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelMotorbike"]>

  export type ModelMotorbikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    maintenanceIntervalKm?: boolean
    maintenanceIntervalTimeMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modelMotorbike"]>

  export type ModelMotorbikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    maintenanceIntervalKm?: boolean
    maintenanceIntervalTimeMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modelMotorbike"]>

  export type ModelMotorbikeSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    maintenanceIntervalKm?: boolean
    maintenanceIntervalTimeMonths?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelMotorbikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "maintenanceIntervalKm" | "maintenanceIntervalTimeMonths" | "createdAt" | "updatedAt", ExtArgs["result"]["modelMotorbike"]>
  export type ModelMotorbikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motorbikes?: boolean | ModelMotorbike$motorbikesArgs<ExtArgs>
    _count?: boolean | ModelMotorbikeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelMotorbikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelMotorbikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelMotorbikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelMotorbike"
    objects: {
      motorbikes: Prisma.$MotorbikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string
      maintenanceIntervalKm: number
      maintenanceIntervalTimeMonths: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelMotorbike"]>
    composites: {}
  }

  type ModelMotorbikeGetPayload<S extends boolean | null | undefined | ModelMotorbikeDefaultArgs> = $Result.GetResult<Prisma.$ModelMotorbikePayload, S>

  type ModelMotorbikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelMotorbikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelMotorbikeCountAggregateInputType | true
    }

  export interface ModelMotorbikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelMotorbike'], meta: { name: 'ModelMotorbike' } }
    /**
     * Find zero or one ModelMotorbike that matches the filter.
     * @param {ModelMotorbikeFindUniqueArgs} args - Arguments to find a ModelMotorbike
     * @example
     * // Get one ModelMotorbike
     * const modelMotorbike = await prisma.modelMotorbike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelMotorbikeFindUniqueArgs>(args: SelectSubset<T, ModelMotorbikeFindUniqueArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ModelMotorbike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelMotorbikeFindUniqueOrThrowArgs} args - Arguments to find a ModelMotorbike
     * @example
     * // Get one ModelMotorbike
     * const modelMotorbike = await prisma.modelMotorbike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelMotorbikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelMotorbikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ModelMotorbike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeFindFirstArgs} args - Arguments to find a ModelMotorbike
     * @example
     * // Get one ModelMotorbike
     * const modelMotorbike = await prisma.modelMotorbike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelMotorbikeFindFirstArgs>(args?: SelectSubset<T, ModelMotorbikeFindFirstArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ModelMotorbike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeFindFirstOrThrowArgs} args - Arguments to find a ModelMotorbike
     * @example
     * // Get one ModelMotorbike
     * const modelMotorbike = await prisma.modelMotorbike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelMotorbikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelMotorbikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ModelMotorbikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelMotorbikes
     * const modelMotorbikes = await prisma.modelMotorbike.findMany()
     * 
     * // Get first 10 ModelMotorbikes
     * const modelMotorbikes = await prisma.modelMotorbike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelMotorbikeWithIdOnly = await prisma.modelMotorbike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelMotorbikeFindManyArgs>(args?: SelectSubset<T, ModelMotorbikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ModelMotorbike.
     * @param {ModelMotorbikeCreateArgs} args - Arguments to create a ModelMotorbike.
     * @example
     * // Create one ModelMotorbike
     * const ModelMotorbike = await prisma.modelMotorbike.create({
     *   data: {
     *     // ... data to create a ModelMotorbike
     *   }
     * })
     * 
     */
    create<T extends ModelMotorbikeCreateArgs>(args: SelectSubset<T, ModelMotorbikeCreateArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ModelMotorbikes.
     * @param {ModelMotorbikeCreateManyArgs} args - Arguments to create many ModelMotorbikes.
     * @example
     * // Create many ModelMotorbikes
     * const modelMotorbike = await prisma.modelMotorbike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelMotorbikeCreateManyArgs>(args?: SelectSubset<T, ModelMotorbikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelMotorbikes and returns the data saved in the database.
     * @param {ModelMotorbikeCreateManyAndReturnArgs} args - Arguments to create many ModelMotorbikes.
     * @example
     * // Create many ModelMotorbikes
     * const modelMotorbike = await prisma.modelMotorbike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelMotorbikes and only return the `id`
     * const modelMotorbikeWithIdOnly = await prisma.modelMotorbike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelMotorbikeCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelMotorbikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ModelMotorbike.
     * @param {ModelMotorbikeDeleteArgs} args - Arguments to delete one ModelMotorbike.
     * @example
     * // Delete one ModelMotorbike
     * const ModelMotorbike = await prisma.modelMotorbike.delete({
     *   where: {
     *     // ... filter to delete one ModelMotorbike
     *   }
     * })
     * 
     */
    delete<T extends ModelMotorbikeDeleteArgs>(args: SelectSubset<T, ModelMotorbikeDeleteArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ModelMotorbike.
     * @param {ModelMotorbikeUpdateArgs} args - Arguments to update one ModelMotorbike.
     * @example
     * // Update one ModelMotorbike
     * const modelMotorbike = await prisma.modelMotorbike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelMotorbikeUpdateArgs>(args: SelectSubset<T, ModelMotorbikeUpdateArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ModelMotorbikes.
     * @param {ModelMotorbikeDeleteManyArgs} args - Arguments to filter ModelMotorbikes to delete.
     * @example
     * // Delete a few ModelMotorbikes
     * const { count } = await prisma.modelMotorbike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelMotorbikeDeleteManyArgs>(args?: SelectSubset<T, ModelMotorbikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelMotorbikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelMotorbikes
     * const modelMotorbike = await prisma.modelMotorbike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelMotorbikeUpdateManyArgs>(args: SelectSubset<T, ModelMotorbikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelMotorbikes and returns the data updated in the database.
     * @param {ModelMotorbikeUpdateManyAndReturnArgs} args - Arguments to update many ModelMotorbikes.
     * @example
     * // Update many ModelMotorbikes
     * const modelMotorbike = await prisma.modelMotorbike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelMotorbikes and only return the `id`
     * const modelMotorbikeWithIdOnly = await prisma.modelMotorbike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelMotorbikeUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelMotorbikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ModelMotorbike.
     * @param {ModelMotorbikeUpsertArgs} args - Arguments to update or create a ModelMotorbike.
     * @example
     * // Update or create a ModelMotorbike
     * const modelMotorbike = await prisma.modelMotorbike.upsert({
     *   create: {
     *     // ... data to create a ModelMotorbike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelMotorbike we want to update
     *   }
     * })
     */
    upsert<T extends ModelMotorbikeUpsertArgs>(args: SelectSubset<T, ModelMotorbikeUpsertArgs<ExtArgs>>): Prisma__ModelMotorbikeClient<$Result.GetResult<Prisma.$ModelMotorbikePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ModelMotorbikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeCountArgs} args - Arguments to filter ModelMotorbikes to count.
     * @example
     * // Count the number of ModelMotorbikes
     * const count = await prisma.modelMotorbike.count({
     *   where: {
     *     // ... the filter for the ModelMotorbikes we want to count
     *   }
     * })
    **/
    count<T extends ModelMotorbikeCountArgs>(
      args?: Subset<T, ModelMotorbikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelMotorbikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelMotorbike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelMotorbikeAggregateArgs>(args: Subset<T, ModelMotorbikeAggregateArgs>): Prisma.PrismaPromise<GetModelMotorbikeAggregateType<T>>

    /**
     * Group by ModelMotorbike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelMotorbikeGroupByArgs} args - Group by arguments.
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
      T extends ModelMotorbikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelMotorbikeGroupByArgs['orderBy'] }
        : { orderBy?: ModelMotorbikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelMotorbikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelMotorbikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelMotorbike model
   */
  readonly fields: ModelMotorbikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelMotorbike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelMotorbikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    motorbikes<T extends ModelMotorbike$motorbikesArgs<ExtArgs> = {}>(args?: Subset<T, ModelMotorbike$motorbikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorbikePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the ModelMotorbike model
   */ 
  interface ModelMotorbikeFieldRefs {
    readonly id: FieldRef<"ModelMotorbike", 'String'>
    readonly name: FieldRef<"ModelMotorbike", 'String'>
    readonly brand: FieldRef<"ModelMotorbike", 'String'>
    readonly maintenanceIntervalKm: FieldRef<"ModelMotorbike", 'Int'>
    readonly maintenanceIntervalTimeMonths: FieldRef<"ModelMotorbike", 'Int'>
    readonly createdAt: FieldRef<"ModelMotorbike", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelMotorbike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelMotorbike findUnique
   */
  export type ModelMotorbikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which ModelMotorbike to fetch.
     */
    where: ModelMotorbikeWhereUniqueInput
  }

  /**
   * ModelMotorbike findUniqueOrThrow
   */
  export type ModelMotorbikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which ModelMotorbike to fetch.
     */
    where: ModelMotorbikeWhereUniqueInput
  }

  /**
   * ModelMotorbike findFirst
   */
  export type ModelMotorbikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which ModelMotorbike to fetch.
     */
    where?: ModelMotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelMotorbikes to fetch.
     */
    orderBy?: ModelMotorbikeOrderByWithRelationInput | ModelMotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelMotorbikes.
     */
    cursor?: ModelMotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelMotorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelMotorbikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelMotorbikes.
     */
    distinct?: ModelMotorbikeScalarFieldEnum | ModelMotorbikeScalarFieldEnum[]
  }

  /**
   * ModelMotorbike findFirstOrThrow
   */
  export type ModelMotorbikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which ModelMotorbike to fetch.
     */
    where?: ModelMotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelMotorbikes to fetch.
     */
    orderBy?: ModelMotorbikeOrderByWithRelationInput | ModelMotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelMotorbikes.
     */
    cursor?: ModelMotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelMotorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelMotorbikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelMotorbikes.
     */
    distinct?: ModelMotorbikeScalarFieldEnum | ModelMotorbikeScalarFieldEnum[]
  }

  /**
   * ModelMotorbike findMany
   */
  export type ModelMotorbikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * Filter, which ModelMotorbikes to fetch.
     */
    where?: ModelMotorbikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelMotorbikes to fetch.
     */
    orderBy?: ModelMotorbikeOrderByWithRelationInput | ModelMotorbikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelMotorbikes.
     */
    cursor?: ModelMotorbikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelMotorbikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelMotorbikes.
     */
    skip?: number
    distinct?: ModelMotorbikeScalarFieldEnum | ModelMotorbikeScalarFieldEnum[]
  }

  /**
   * ModelMotorbike create
   */
  export type ModelMotorbikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelMotorbike.
     */
    data: XOR<ModelMotorbikeCreateInput, ModelMotorbikeUncheckedCreateInput>
  }

  /**
   * ModelMotorbike createMany
   */
  export type ModelMotorbikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelMotorbikes.
     */
    data: ModelMotorbikeCreateManyInput | ModelMotorbikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelMotorbike createManyAndReturn
   */
  export type ModelMotorbikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * The data used to create many ModelMotorbikes.
     */
    data: ModelMotorbikeCreateManyInput | ModelMotorbikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelMotorbike update
   */
  export type ModelMotorbikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelMotorbike.
     */
    data: XOR<ModelMotorbikeUpdateInput, ModelMotorbikeUncheckedUpdateInput>
    /**
     * Choose, which ModelMotorbike to update.
     */
    where: ModelMotorbikeWhereUniqueInput
  }

  /**
   * ModelMotorbike updateMany
   */
  export type ModelMotorbikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelMotorbikes.
     */
    data: XOR<ModelMotorbikeUpdateManyMutationInput, ModelMotorbikeUncheckedUpdateManyInput>
    /**
     * Filter which ModelMotorbikes to update
     */
    where?: ModelMotorbikeWhereInput
    /**
     * Limit how many ModelMotorbikes to update.
     */
    limit?: number
  }

  /**
   * ModelMotorbike updateManyAndReturn
   */
  export type ModelMotorbikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * The data used to update ModelMotorbikes.
     */
    data: XOR<ModelMotorbikeUpdateManyMutationInput, ModelMotorbikeUncheckedUpdateManyInput>
    /**
     * Filter which ModelMotorbikes to update
     */
    where?: ModelMotorbikeWhereInput
    /**
     * Limit how many ModelMotorbikes to update.
     */
    limit?: number
  }

  /**
   * ModelMotorbike upsert
   */
  export type ModelMotorbikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelMotorbike to update in case it exists.
     */
    where: ModelMotorbikeWhereUniqueInput
    /**
     * In case the ModelMotorbike found by the `where` argument doesn't exist, create a new ModelMotorbike with this data.
     */
    create: XOR<ModelMotorbikeCreateInput, ModelMotorbikeUncheckedCreateInput>
    /**
     * In case the ModelMotorbike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelMotorbikeUpdateInput, ModelMotorbikeUncheckedUpdateInput>
  }

  /**
   * ModelMotorbike delete
   */
  export type ModelMotorbikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
    /**
     * Filter which ModelMotorbike to delete.
     */
    where: ModelMotorbikeWhereUniqueInput
  }

  /**
   * ModelMotorbike deleteMany
   */
  export type ModelMotorbikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelMotorbikes to delete
     */
    where?: ModelMotorbikeWhereInput
    /**
     * Limit how many ModelMotorbikes to delete.
     */
    limit?: number
  }

  /**
   * ModelMotorbike.motorbikes
   */
  export type ModelMotorbike$motorbikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motorbike
     */
    select?: MotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motorbike
     */
    omit?: MotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorbikeInclude<ExtArgs> | null
    where?: MotorbikeWhereInput
    orderBy?: MotorbikeOrderByWithRelationInput | MotorbikeOrderByWithRelationInput[]
    cursor?: MotorbikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotorbikeScalarFieldEnum | MotorbikeScalarFieldEnum[]
  }

  /**
   * ModelMotorbike without action
   */
  export type ModelMotorbikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelMotorbike
     */
    select?: ModelMotorbikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelMotorbike
     */
    omit?: ModelMotorbikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelMotorbikeInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userAgent: 'userAgent'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    motorbikeId: 'motorbikeId',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    maintenanceDate: 'maintenanceDate',
    mileageAtMaintenance: 'mileageAtMaintenance',
    maintenanceType: 'maintenanceType',
    maintenanceCost: 'maintenanceCost',
    maintenanceDescription: 'maintenanceDescription',
    breakdownId: 'breakdownId',
    warrantyId: 'warrantyId'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const MotorbikeScalarFieldEnum: {
    id: 'id',
    modelMotorbikeId: 'modelMotorbikeId',
    fleetId: 'fleetId',
    clientId: 'clientId',
    licensePlate: 'licensePlate',
    vehicleIdentificationNumber: 'vehicleIdentificationNumber',
    color: 'color',
    mileage: 'mileage',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MotorbikeScalarFieldEnum = (typeof MotorbikeScalarFieldEnum)[keyof typeof MotorbikeScalarFieldEnum]


  export const BreakdownScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    description: 'description',
    actionTaken: 'actionTaken',
    resolved: 'resolved',
    resolutionDate: 'resolutionDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BreakdownScalarFieldEnum = (typeof BreakdownScalarFieldEnum)[keyof typeof BreakdownScalarFieldEnum]


  export const WarrantyScalarFieldEnum: {
    id: 'id',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    providerName: 'providerName',
    warrantyDetails: 'warrantyDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WarrantyScalarFieldEnum = (typeof WarrantyScalarFieldEnum)[keyof typeof WarrantyScalarFieldEnum]


  export const FleetScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    managerId: 'managerId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FleetScalarFieldEnum = (typeof FleetScalarFieldEnum)[keyof typeof FleetScalarFieldEnum]


  export const ModelMotorbikeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    maintenanceIntervalKm: 'maintenanceIntervalKm',
    maintenanceIntervalTimeMonths: 'maintenanceIntervalTimeMonths',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelMotorbikeScalarFieldEnum = (typeof ModelMotorbikeScalarFieldEnum)[keyof typeof ModelMotorbikeScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    breakdowns?: BreakdownListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    breakdowns?: BreakdownOrderByRelationAggregateInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    breakdowns?: BreakdownListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    userId?: StringFilter<"VerificationCode"> | string
    type?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    userId?: StringFilter<"VerificationCode"> | string
    type?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }, "id">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    userId?: StringWithAggregatesFilter<"VerificationCode"> | string
    type?: StringWithAggregatesFilter<"VerificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    userAgent?: StringNullableFilter<"Session"> | string | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrderInput | SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    userAgent?: StringNullableFilter<"Session"> | string | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrderInput | SortOrder
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
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type MaintenanceWhereInput = {
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    motorbikeId?: StringFilter<"Maintenance"> | string
    clientId?: StringFilter<"Maintenance"> | string
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"Maintenance"> | Date | string
    maintenanceDate?: DateTimeFilter<"Maintenance"> | Date | string
    mileageAtMaintenance?: IntFilter<"Maintenance"> | number
    maintenanceType?: StringFilter<"Maintenance"> | string
    maintenanceCost?: FloatFilter<"Maintenance"> | number
    maintenanceDescription?: StringFilter<"Maintenance"> | string
    breakdownId?: StringNullableFilter<"Maintenance"> | string | null
    warrantyId?: StringNullableFilter<"Maintenance"> | string | null
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    motorbike?: XOR<MotorbikeScalarRelationFilter, MotorbikeWhereInput>
    breakdown?: XOR<BreakdownNullableScalarRelationFilter, BreakdownWhereInput> | null
    warranty?: XOR<WarrantyNullableScalarRelationFilter, WarrantyWhereInput> | null
  }

  export type MaintenanceOrderByWithRelationInput = {
    id?: SortOrder
    motorbikeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceDate?: SortOrder
    mileageAtMaintenance?: SortOrder
    maintenanceType?: SortOrder
    maintenanceCost?: SortOrder
    maintenanceDescription?: SortOrder
    breakdownId?: SortOrderInput | SortOrder
    warrantyId?: SortOrderInput | SortOrder
    client?: UserOrderByWithRelationInput
    motorbike?: MotorbikeOrderByWithRelationInput
    breakdown?: BreakdownOrderByWithRelationInput
    warranty?: WarrantyOrderByWithRelationInput
  }

  export type MaintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    breakdownId?: string
    warrantyId?: string
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    motorbikeId?: StringFilter<"Maintenance"> | string
    clientId?: StringFilter<"Maintenance"> | string
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"Maintenance"> | Date | string
    maintenanceDate?: DateTimeFilter<"Maintenance"> | Date | string
    mileageAtMaintenance?: IntFilter<"Maintenance"> | number
    maintenanceType?: StringFilter<"Maintenance"> | string
    maintenanceCost?: FloatFilter<"Maintenance"> | number
    maintenanceDescription?: StringFilter<"Maintenance"> | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    motorbike?: XOR<MotorbikeScalarRelationFilter, MotorbikeWhereInput>
    breakdown?: XOR<BreakdownNullableScalarRelationFilter, BreakdownWhereInput> | null
    warranty?: XOR<WarrantyNullableScalarRelationFilter, WarrantyWhereInput> | null
  }, "id" | "breakdownId" | "warrantyId">

  export type MaintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    motorbikeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceDate?: SortOrder
    mileageAtMaintenance?: SortOrder
    maintenanceType?: SortOrder
    maintenanceCost?: SortOrder
    maintenanceDescription?: SortOrder
    breakdownId?: SortOrderInput | SortOrder
    warrantyId?: SortOrderInput | SortOrder
    _count?: MaintenanceCountOrderByAggregateInput
    _avg?: MaintenanceAvgOrderByAggregateInput
    _max?: MaintenanceMaxOrderByAggregateInput
    _min?: MaintenanceMinOrderByAggregateInput
    _sum?: MaintenanceSumOrderByAggregateInput
  }

  export type MaintenanceScalarWhereWithAggregatesInput = {
    AND?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    OR?: MaintenanceScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Maintenance"> | string
    motorbikeId?: StringWithAggregatesFilter<"Maintenance"> | string
    clientId?: StringWithAggregatesFilter<"Maintenance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    maintenanceDate?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    mileageAtMaintenance?: IntWithAggregatesFilter<"Maintenance"> | number
    maintenanceType?: StringWithAggregatesFilter<"Maintenance"> | string
    maintenanceCost?: FloatWithAggregatesFilter<"Maintenance"> | number
    maintenanceDescription?: StringWithAggregatesFilter<"Maintenance"> | string
    breakdownId?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    warrantyId?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
  }

  export type MotorbikeWhereInput = {
    AND?: MotorbikeWhereInput | MotorbikeWhereInput[]
    OR?: MotorbikeWhereInput[]
    NOT?: MotorbikeWhereInput | MotorbikeWhereInput[]
    id?: StringFilter<"Motorbike"> | string
    modelMotorbikeId?: StringFilter<"Motorbike"> | string
    fleetId?: StringFilter<"Motorbike"> | string
    clientId?: StringFilter<"Motorbike"> | string
    licensePlate?: StringFilter<"Motorbike"> | string
    vehicleIdentificationNumber?: StringFilter<"Motorbike"> | string
    color?: StringFilter<"Motorbike"> | string
    mileage?: IntFilter<"Motorbike"> | number
    status?: StringFilter<"Motorbike"> | string
    createdAt?: DateTimeFilter<"Motorbike"> | Date | string
    updatedAt?: DateTimeFilter<"Motorbike"> | Date | string
    modelMotorbike?: XOR<ModelMotorbikeScalarRelationFilter, ModelMotorbikeWhereInput>
    fleet?: XOR<FleetScalarRelationFilter, FleetWhereInput>
    maintenances?: MaintenanceListRelationFilter
  }

  export type MotorbikeOrderByWithRelationInput = {
    id?: SortOrder
    modelMotorbikeId?: SortOrder
    fleetId?: SortOrder
    clientId?: SortOrder
    licensePlate?: SortOrder
    vehicleIdentificationNumber?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelMotorbike?: ModelMotorbikeOrderByWithRelationInput
    fleet?: FleetOrderByWithRelationInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type MotorbikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licensePlate?: string
    vehicleIdentificationNumber?: string
    AND?: MotorbikeWhereInput | MotorbikeWhereInput[]
    OR?: MotorbikeWhereInput[]
    NOT?: MotorbikeWhereInput | MotorbikeWhereInput[]
    modelMotorbikeId?: StringFilter<"Motorbike"> | string
    fleetId?: StringFilter<"Motorbike"> | string
    clientId?: StringFilter<"Motorbike"> | string
    color?: StringFilter<"Motorbike"> | string
    mileage?: IntFilter<"Motorbike"> | number
    status?: StringFilter<"Motorbike"> | string
    createdAt?: DateTimeFilter<"Motorbike"> | Date | string
    updatedAt?: DateTimeFilter<"Motorbike"> | Date | string
    modelMotorbike?: XOR<ModelMotorbikeScalarRelationFilter, ModelMotorbikeWhereInput>
    fleet?: XOR<FleetScalarRelationFilter, FleetWhereInput>
    maintenances?: MaintenanceListRelationFilter
  }, "id" | "licensePlate" | "vehicleIdentificationNumber">

  export type MotorbikeOrderByWithAggregationInput = {
    id?: SortOrder
    modelMotorbikeId?: SortOrder
    fleetId?: SortOrder
    clientId?: SortOrder
    licensePlate?: SortOrder
    vehicleIdentificationNumber?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MotorbikeCountOrderByAggregateInput
    _avg?: MotorbikeAvgOrderByAggregateInput
    _max?: MotorbikeMaxOrderByAggregateInput
    _min?: MotorbikeMinOrderByAggregateInput
    _sum?: MotorbikeSumOrderByAggregateInput
  }

  export type MotorbikeScalarWhereWithAggregatesInput = {
    AND?: MotorbikeScalarWhereWithAggregatesInput | MotorbikeScalarWhereWithAggregatesInput[]
    OR?: MotorbikeScalarWhereWithAggregatesInput[]
    NOT?: MotorbikeScalarWhereWithAggregatesInput | MotorbikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Motorbike"> | string
    modelMotorbikeId?: StringWithAggregatesFilter<"Motorbike"> | string
    fleetId?: StringWithAggregatesFilter<"Motorbike"> | string
    clientId?: StringWithAggregatesFilter<"Motorbike"> | string
    licensePlate?: StringWithAggregatesFilter<"Motorbike"> | string
    vehicleIdentificationNumber?: StringWithAggregatesFilter<"Motorbike"> | string
    color?: StringWithAggregatesFilter<"Motorbike"> | string
    mileage?: IntWithAggregatesFilter<"Motorbike"> | number
    status?: StringWithAggregatesFilter<"Motorbike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Motorbike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Motorbike"> | Date | string
  }

  export type BreakdownWhereInput = {
    AND?: BreakdownWhereInput | BreakdownWhereInput[]
    OR?: BreakdownWhereInput[]
    NOT?: BreakdownWhereInput | BreakdownWhereInput[]
    id?: StringFilter<"Breakdown"> | string
    clientId?: StringFilter<"Breakdown"> | string
    description?: StringFilter<"Breakdown"> | string
    actionTaken?: StringFilter<"Breakdown"> | string
    resolved?: BoolFilter<"Breakdown"> | boolean
    resolutionDate?: DateTimeNullableFilter<"Breakdown"> | Date | string | null
    createdAt?: DateTimeFilter<"Breakdown"> | Date | string
    updatedAt?: DateTimeFilter<"Breakdown"> | Date | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    maintenance?: XOR<MaintenanceNullableScalarRelationFilter, MaintenanceWhereInput> | null
  }

  export type BreakdownOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    description?: SortOrder
    actionTaken?: SortOrder
    resolved?: SortOrder
    resolutionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: UserOrderByWithRelationInput
    maintenance?: MaintenanceOrderByWithRelationInput
  }

  export type BreakdownWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BreakdownWhereInput | BreakdownWhereInput[]
    OR?: BreakdownWhereInput[]
    NOT?: BreakdownWhereInput | BreakdownWhereInput[]
    clientId?: StringFilter<"Breakdown"> | string
    description?: StringFilter<"Breakdown"> | string
    actionTaken?: StringFilter<"Breakdown"> | string
    resolved?: BoolFilter<"Breakdown"> | boolean
    resolutionDate?: DateTimeNullableFilter<"Breakdown"> | Date | string | null
    createdAt?: DateTimeFilter<"Breakdown"> | Date | string
    updatedAt?: DateTimeFilter<"Breakdown"> | Date | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    maintenance?: XOR<MaintenanceNullableScalarRelationFilter, MaintenanceWhereInput> | null
  }, "id">

  export type BreakdownOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    description?: SortOrder
    actionTaken?: SortOrder
    resolved?: SortOrder
    resolutionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BreakdownCountOrderByAggregateInput
    _max?: BreakdownMaxOrderByAggregateInput
    _min?: BreakdownMinOrderByAggregateInput
  }

  export type BreakdownScalarWhereWithAggregatesInput = {
    AND?: BreakdownScalarWhereWithAggregatesInput | BreakdownScalarWhereWithAggregatesInput[]
    OR?: BreakdownScalarWhereWithAggregatesInput[]
    NOT?: BreakdownScalarWhereWithAggregatesInput | BreakdownScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Breakdown"> | string
    clientId?: StringWithAggregatesFilter<"Breakdown"> | string
    description?: StringWithAggregatesFilter<"Breakdown"> | string
    actionTaken?: StringWithAggregatesFilter<"Breakdown"> | string
    resolved?: BoolWithAggregatesFilter<"Breakdown"> | boolean
    resolutionDate?: DateTimeNullableWithAggregatesFilter<"Breakdown"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Breakdown"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Breakdown"> | Date | string
  }

  export type WarrantyWhereInput = {
    AND?: WarrantyWhereInput | WarrantyWhereInput[]
    OR?: WarrantyWhereInput[]
    NOT?: WarrantyWhereInput | WarrantyWhereInput[]
    id?: StringFilter<"Warranty"> | string
    validFrom?: DateTimeFilter<"Warranty"> | Date | string
    validUntil?: DateTimeFilter<"Warranty"> | Date | string
    providerName?: StringFilter<"Warranty"> | string
    warrantyDetails?: StringFilter<"Warranty"> | string
    createdAt?: DateTimeFilter<"Warranty"> | Date | string
    updatedAt?: DateTimeFilter<"Warranty"> | Date | string
    maintenance?: XOR<MaintenanceNullableScalarRelationFilter, MaintenanceWhereInput> | null
  }

  export type WarrantyOrderByWithRelationInput = {
    id?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    providerName?: SortOrder
    warrantyDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenance?: MaintenanceOrderByWithRelationInput
  }

  export type WarrantyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarrantyWhereInput | WarrantyWhereInput[]
    OR?: WarrantyWhereInput[]
    NOT?: WarrantyWhereInput | WarrantyWhereInput[]
    validFrom?: DateTimeFilter<"Warranty"> | Date | string
    validUntil?: DateTimeFilter<"Warranty"> | Date | string
    providerName?: StringFilter<"Warranty"> | string
    warrantyDetails?: StringFilter<"Warranty"> | string
    createdAt?: DateTimeFilter<"Warranty"> | Date | string
    updatedAt?: DateTimeFilter<"Warranty"> | Date | string
    maintenance?: XOR<MaintenanceNullableScalarRelationFilter, MaintenanceWhereInput> | null
  }, "id">

  export type WarrantyOrderByWithAggregationInput = {
    id?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    providerName?: SortOrder
    warrantyDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WarrantyCountOrderByAggregateInput
    _max?: WarrantyMaxOrderByAggregateInput
    _min?: WarrantyMinOrderByAggregateInput
  }

  export type WarrantyScalarWhereWithAggregatesInput = {
    AND?: WarrantyScalarWhereWithAggregatesInput | WarrantyScalarWhereWithAggregatesInput[]
    OR?: WarrantyScalarWhereWithAggregatesInput[]
    NOT?: WarrantyScalarWhereWithAggregatesInput | WarrantyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warranty"> | string
    validFrom?: DateTimeWithAggregatesFilter<"Warranty"> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<"Warranty"> | Date | string
    providerName?: StringWithAggregatesFilter<"Warranty"> | string
    warrantyDetails?: StringWithAggregatesFilter<"Warranty"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warranty"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warranty"> | Date | string
  }

  export type FleetWhereInput = {
    AND?: FleetWhereInput | FleetWhereInput[]
    OR?: FleetWhereInput[]
    NOT?: FleetWhereInput | FleetWhereInput[]
    id?: StringFilter<"Fleet"> | string
    clientId?: StringFilter<"Fleet"> | string
    managerId?: StringFilter<"Fleet"> | string
    name?: StringFilter<"Fleet"> | string
    createdAt?: DateTimeFilter<"Fleet"> | Date | string
    updatedAt?: DateTimeFilter<"Fleet"> | Date | string
    motorbikes?: MotorbikeListRelationFilter
  }

  export type FleetOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    managerId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    motorbikes?: MotorbikeOrderByRelationAggregateInput
  }

  export type FleetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FleetWhereInput | FleetWhereInput[]
    OR?: FleetWhereInput[]
    NOT?: FleetWhereInput | FleetWhereInput[]
    clientId?: StringFilter<"Fleet"> | string
    managerId?: StringFilter<"Fleet"> | string
    name?: StringFilter<"Fleet"> | string
    createdAt?: DateTimeFilter<"Fleet"> | Date | string
    updatedAt?: DateTimeFilter<"Fleet"> | Date | string
    motorbikes?: MotorbikeListRelationFilter
  }, "id">

  export type FleetOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    managerId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FleetCountOrderByAggregateInput
    _max?: FleetMaxOrderByAggregateInput
    _min?: FleetMinOrderByAggregateInput
  }

  export type FleetScalarWhereWithAggregatesInput = {
    AND?: FleetScalarWhereWithAggregatesInput | FleetScalarWhereWithAggregatesInput[]
    OR?: FleetScalarWhereWithAggregatesInput[]
    NOT?: FleetScalarWhereWithAggregatesInput | FleetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fleet"> | string
    clientId?: StringWithAggregatesFilter<"Fleet"> | string
    managerId?: StringWithAggregatesFilter<"Fleet"> | string
    name?: StringWithAggregatesFilter<"Fleet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fleet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fleet"> | Date | string
  }

  export type ModelMotorbikeWhereInput = {
    AND?: ModelMotorbikeWhereInput | ModelMotorbikeWhereInput[]
    OR?: ModelMotorbikeWhereInput[]
    NOT?: ModelMotorbikeWhereInput | ModelMotorbikeWhereInput[]
    id?: StringFilter<"ModelMotorbike"> | string
    name?: StringFilter<"ModelMotorbike"> | string
    brand?: StringFilter<"ModelMotorbike"> | string
    maintenanceIntervalKm?: IntFilter<"ModelMotorbike"> | number
    maintenanceIntervalTimeMonths?: IntFilter<"ModelMotorbike"> | number
    createdAt?: DateTimeFilter<"ModelMotorbike"> | Date | string
    updatedAt?: DateTimeFilter<"ModelMotorbike"> | Date | string
    motorbikes?: MotorbikeListRelationFilter
  }

  export type ModelMotorbikeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    motorbikes?: MotorbikeOrderByRelationAggregateInput
  }

  export type ModelMotorbikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModelMotorbikeWhereInput | ModelMotorbikeWhereInput[]
    OR?: ModelMotorbikeWhereInput[]
    NOT?: ModelMotorbikeWhereInput | ModelMotorbikeWhereInput[]
    name?: StringFilter<"ModelMotorbike"> | string
    brand?: StringFilter<"ModelMotorbike"> | string
    maintenanceIntervalKm?: IntFilter<"ModelMotorbike"> | number
    maintenanceIntervalTimeMonths?: IntFilter<"ModelMotorbike"> | number
    createdAt?: DateTimeFilter<"ModelMotorbike"> | Date | string
    updatedAt?: DateTimeFilter<"ModelMotorbike"> | Date | string
    motorbikes?: MotorbikeListRelationFilter
  }, "id">

  export type ModelMotorbikeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelMotorbikeCountOrderByAggregateInput
    _avg?: ModelMotorbikeAvgOrderByAggregateInput
    _max?: ModelMotorbikeMaxOrderByAggregateInput
    _min?: ModelMotorbikeMinOrderByAggregateInput
    _sum?: ModelMotorbikeSumOrderByAggregateInput
  }

  export type ModelMotorbikeScalarWhereWithAggregatesInput = {
    AND?: ModelMotorbikeScalarWhereWithAggregatesInput | ModelMotorbikeScalarWhereWithAggregatesInput[]
    OR?: ModelMotorbikeScalarWhereWithAggregatesInput[]
    NOT?: ModelMotorbikeScalarWhereWithAggregatesInput | ModelMotorbikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelMotorbike"> | string
    name?: StringWithAggregatesFilter<"ModelMotorbike"> | string
    brand?: StringWithAggregatesFilter<"ModelMotorbike"> | string
    maintenanceIntervalKm?: IntWithAggregatesFilter<"ModelMotorbike"> | number
    maintenanceIntervalTimeMonths?: IntWithAggregatesFilter<"ModelMotorbike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ModelMotorbike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModelMotorbike"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    breakdowns?: BreakdownCreateNestedManyWithoutClientInput
    maintenances?: MaintenanceCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    breakdowns?: BreakdownUncheckedCreateNestedManyWithoutClientInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breakdowns?: BreakdownUpdateManyWithoutClientNestedInput
    maintenances?: MaintenanceUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breakdowns?: BreakdownUncheckedUpdateManyWithoutClientNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    id?: string
    userId: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyInput = {
    id?: string
    userId: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    userAgent?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    client: UserCreateNestedOneWithoutMaintenancesInput
    motorbike: MotorbikeCreateNestedOneWithoutMaintenancesInput
    breakdown?: BreakdownCreateNestedOneWithoutMaintenanceInput
    warranty?: WarrantyCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateInput = {
    id?: string
    motorbikeId: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
    warrantyId?: string | null
  }

  export type MaintenanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    motorbike?: MotorbikeUpdateOneRequiredWithoutMaintenancesNestedInput
    breakdown?: BreakdownUpdateOneWithoutMaintenanceNestedInput
    warranty?: WarrantyUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    motorbikeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateManyInput = {
    id?: string
    motorbikeId: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
    warrantyId?: string | null
  }

  export type MaintenanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    motorbikeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotorbikeCreateInput = {
    id?: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelMotorbike: ModelMotorbikeCreateNestedOneWithoutMotorbikesInput
    fleet: FleetCreateNestedOneWithoutMotorbikesInput
    maintenances?: MaintenanceCreateNestedManyWithoutMotorbikeInput
  }

  export type MotorbikeUncheckedCreateInput = {
    id?: string
    modelMotorbikeId: string
    fleetId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutMotorbikeInput
  }

  export type MotorbikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelMotorbike?: ModelMotorbikeUpdateOneRequiredWithoutMotorbikesNestedInput
    fleet?: FleetUpdateOneRequiredWithoutMotorbikesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutMotorbikeNestedInput
  }

  export type MotorbikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelMotorbikeId?: StringFieldUpdateOperationsInput | string
    fleetId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutMotorbikeNestedInput
  }

  export type MotorbikeCreateManyInput = {
    id?: string
    modelMotorbikeId: string
    fleetId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MotorbikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorbikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelMotorbikeId?: StringFieldUpdateOperationsInput | string
    fleetId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakdownCreateInput = {
    id?: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutBreakdownsInput
    maintenance?: MaintenanceCreateNestedOneWithoutBreakdownInput
  }

  export type BreakdownUncheckedCreateInput = {
    id?: string
    clientId: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenance?: MaintenanceUncheckedCreateNestedOneWithoutBreakdownInput
  }

  export type BreakdownUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutBreakdownsNestedInput
    maintenance?: MaintenanceUpdateOneWithoutBreakdownNestedInput
  }

  export type BreakdownUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance?: MaintenanceUncheckedUpdateOneWithoutBreakdownNestedInput
  }

  export type BreakdownCreateManyInput = {
    id?: string
    clientId: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreakdownUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakdownUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyCreateInput = {
    id?: string
    validFrom: Date | string
    validUntil: Date | string
    providerName: string
    warrantyDetails: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenance?: MaintenanceCreateNestedOneWithoutWarrantyInput
  }

  export type WarrantyUncheckedCreateInput = {
    id?: string
    validFrom: Date | string
    validUntil: Date | string
    providerName: string
    warrantyDetails: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenance?: MaintenanceUncheckedCreateNestedOneWithoutWarrantyInput
  }

  export type WarrantyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    providerName?: StringFieldUpdateOperationsInput | string
    warrantyDetails?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance?: MaintenanceUpdateOneWithoutWarrantyNestedInput
  }

  export type WarrantyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    providerName?: StringFieldUpdateOperationsInput | string
    warrantyDetails?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance?: MaintenanceUncheckedUpdateOneWithoutWarrantyNestedInput
  }

  export type WarrantyCreateManyInput = {
    id?: string
    validFrom: Date | string
    validUntil: Date | string
    providerName: string
    warrantyDetails: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarrantyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    providerName?: StringFieldUpdateOperationsInput | string
    warrantyDetails?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    providerName?: StringFieldUpdateOperationsInput | string
    warrantyDetails?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FleetCreateInput = {
    id?: string
    clientId: string
    managerId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    motorbikes?: MotorbikeCreateNestedManyWithoutFleetInput
  }

  export type FleetUncheckedCreateInput = {
    id?: string
    clientId: string
    managerId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    motorbikes?: MotorbikeUncheckedCreateNestedManyWithoutFleetInput
  }

  export type FleetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motorbikes?: MotorbikeUpdateManyWithoutFleetNestedInput
  }

  export type FleetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motorbikes?: MotorbikeUncheckedUpdateManyWithoutFleetNestedInput
  }

  export type FleetCreateManyInput = {
    id?: string
    clientId: string
    managerId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FleetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FleetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelMotorbikeCreateInput = {
    id?: string
    name: string
    brand: string
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt?: Date | string
    updatedAt?: Date | string
    motorbikes?: MotorbikeCreateNestedManyWithoutModelMotorbikeInput
  }

  export type ModelMotorbikeUncheckedCreateInput = {
    id?: string
    name: string
    brand: string
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt?: Date | string
    updatedAt?: Date | string
    motorbikes?: MotorbikeUncheckedCreateNestedManyWithoutModelMotorbikeInput
  }

  export type ModelMotorbikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    maintenanceIntervalKm?: IntFieldUpdateOperationsInput | number
    maintenanceIntervalTimeMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motorbikes?: MotorbikeUpdateManyWithoutModelMotorbikeNestedInput
  }

  export type ModelMotorbikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    maintenanceIntervalKm?: IntFieldUpdateOperationsInput | number
    maintenanceIntervalTimeMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    motorbikes?: MotorbikeUncheckedUpdateManyWithoutModelMotorbikeNestedInput
  }

  export type ModelMotorbikeCreateManyInput = {
    id?: string
    name: string
    brand: string
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelMotorbikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    maintenanceIntervalKm?: IntFieldUpdateOperationsInput | number
    maintenanceIntervalTimeMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelMotorbikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    maintenanceIntervalKm?: IntFieldUpdateOperationsInput | number
    maintenanceIntervalTimeMonths?: IntFieldUpdateOperationsInput | number
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

  export type BreakdownListRelationFilter = {
    every?: BreakdownWhereInput
    some?: BreakdownWhereInput
    none?: BreakdownWhereInput
  }

  export type MaintenanceListRelationFilter = {
    every?: MaintenanceWhereInput
    some?: MaintenanceWhereInput
    none?: MaintenanceWhereInput
  }

  export type BreakdownOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
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

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userAgent?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MotorbikeScalarRelationFilter = {
    is?: MotorbikeWhereInput
    isNot?: MotorbikeWhereInput
  }

  export type BreakdownNullableScalarRelationFilter = {
    is?: BreakdownWhereInput | null
    isNot?: BreakdownWhereInput | null
  }

  export type WarrantyNullableScalarRelationFilter = {
    is?: WarrantyWhereInput | null
    isNot?: WarrantyWhereInput | null
  }

  export type MaintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    motorbikeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceDate?: SortOrder
    mileageAtMaintenance?: SortOrder
    maintenanceType?: SortOrder
    maintenanceCost?: SortOrder
    maintenanceDescription?: SortOrder
    breakdownId?: SortOrder
    warrantyId?: SortOrder
  }

  export type MaintenanceAvgOrderByAggregateInput = {
    mileageAtMaintenance?: SortOrder
    maintenanceCost?: SortOrder
  }

  export type MaintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    motorbikeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceDate?: SortOrder
    mileageAtMaintenance?: SortOrder
    maintenanceType?: SortOrder
    maintenanceCost?: SortOrder
    maintenanceDescription?: SortOrder
    breakdownId?: SortOrder
    warrantyId?: SortOrder
  }

  export type MaintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    motorbikeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceDate?: SortOrder
    mileageAtMaintenance?: SortOrder
    maintenanceType?: SortOrder
    maintenanceCost?: SortOrder
    maintenanceDescription?: SortOrder
    breakdownId?: SortOrder
    warrantyId?: SortOrder
  }

  export type MaintenanceSumOrderByAggregateInput = {
    mileageAtMaintenance?: SortOrder
    maintenanceCost?: SortOrder
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

  export type ModelMotorbikeScalarRelationFilter = {
    is?: ModelMotorbikeWhereInput
    isNot?: ModelMotorbikeWhereInput
  }

  export type FleetScalarRelationFilter = {
    is?: FleetWhereInput
    isNot?: FleetWhereInput
  }

  export type MotorbikeCountOrderByAggregateInput = {
    id?: SortOrder
    modelMotorbikeId?: SortOrder
    fleetId?: SortOrder
    clientId?: SortOrder
    licensePlate?: SortOrder
    vehicleIdentificationNumber?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorbikeAvgOrderByAggregateInput = {
    mileage?: SortOrder
  }

  export type MotorbikeMaxOrderByAggregateInput = {
    id?: SortOrder
    modelMotorbikeId?: SortOrder
    fleetId?: SortOrder
    clientId?: SortOrder
    licensePlate?: SortOrder
    vehicleIdentificationNumber?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorbikeMinOrderByAggregateInput = {
    id?: SortOrder
    modelMotorbikeId?: SortOrder
    fleetId?: SortOrder
    clientId?: SortOrder
    licensePlate?: SortOrder
    vehicleIdentificationNumber?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorbikeSumOrderByAggregateInput = {
    mileage?: SortOrder
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

  export type MaintenanceNullableScalarRelationFilter = {
    is?: MaintenanceWhereInput | null
    isNot?: MaintenanceWhereInput | null
  }

  export type BreakdownCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    description?: SortOrder
    actionTaken?: SortOrder
    resolved?: SortOrder
    resolutionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreakdownMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    description?: SortOrder
    actionTaken?: SortOrder
    resolved?: SortOrder
    resolutionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreakdownMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    description?: SortOrder
    actionTaken?: SortOrder
    resolved?: SortOrder
    resolutionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type WarrantyCountOrderByAggregateInput = {
    id?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    providerName?: SortOrder
    warrantyDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarrantyMaxOrderByAggregateInput = {
    id?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    providerName?: SortOrder
    warrantyDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarrantyMinOrderByAggregateInput = {
    id?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    providerName?: SortOrder
    warrantyDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MotorbikeListRelationFilter = {
    every?: MotorbikeWhereInput
    some?: MotorbikeWhereInput
    none?: MotorbikeWhereInput
  }

  export type MotorbikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FleetCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    managerId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FleetMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    managerId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FleetMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    managerId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMotorbikeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMotorbikeAvgOrderByAggregateInput = {
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
  }

  export type ModelMotorbikeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMotorbikeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMotorbikeSumOrderByAggregateInput = {
    maintenanceIntervalKm?: SortOrder
    maintenanceIntervalTimeMonths?: SortOrder
  }

  export type BreakdownCreateNestedManyWithoutClientInput = {
    create?: XOR<BreakdownCreateWithoutClientInput, BreakdownUncheckedCreateWithoutClientInput> | BreakdownCreateWithoutClientInput[] | BreakdownUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BreakdownCreateOrConnectWithoutClientInput | BreakdownCreateOrConnectWithoutClientInput[]
    createMany?: BreakdownCreateManyClientInputEnvelope
    connect?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
  }

  export type MaintenanceCreateNestedManyWithoutClientInput = {
    create?: XOR<MaintenanceCreateWithoutClientInput, MaintenanceUncheckedCreateWithoutClientInput> | MaintenanceCreateWithoutClientInput[] | MaintenanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutClientInput | MaintenanceCreateOrConnectWithoutClientInput[]
    createMany?: MaintenanceCreateManyClientInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type BreakdownUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BreakdownCreateWithoutClientInput, BreakdownUncheckedCreateWithoutClientInput> | BreakdownCreateWithoutClientInput[] | BreakdownUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BreakdownCreateOrConnectWithoutClientInput | BreakdownCreateOrConnectWithoutClientInput[]
    createMany?: BreakdownCreateManyClientInputEnvelope
    connect?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MaintenanceCreateWithoutClientInput, MaintenanceUncheckedCreateWithoutClientInput> | MaintenanceCreateWithoutClientInput[] | MaintenanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutClientInput | MaintenanceCreateOrConnectWithoutClientInput[]
    createMany?: MaintenanceCreateManyClientInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BreakdownUpdateManyWithoutClientNestedInput = {
    create?: XOR<BreakdownCreateWithoutClientInput, BreakdownUncheckedCreateWithoutClientInput> | BreakdownCreateWithoutClientInput[] | BreakdownUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BreakdownCreateOrConnectWithoutClientInput | BreakdownCreateOrConnectWithoutClientInput[]
    upsert?: BreakdownUpsertWithWhereUniqueWithoutClientInput | BreakdownUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BreakdownCreateManyClientInputEnvelope
    set?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    disconnect?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    delete?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    connect?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    update?: BreakdownUpdateWithWhereUniqueWithoutClientInput | BreakdownUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BreakdownUpdateManyWithWhereWithoutClientInput | BreakdownUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BreakdownScalarWhereInput | BreakdownScalarWhereInput[]
  }

  export type MaintenanceUpdateManyWithoutClientNestedInput = {
    create?: XOR<MaintenanceCreateWithoutClientInput, MaintenanceUncheckedCreateWithoutClientInput> | MaintenanceCreateWithoutClientInput[] | MaintenanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutClientInput | MaintenanceCreateOrConnectWithoutClientInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutClientInput | MaintenanceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MaintenanceCreateManyClientInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutClientInput | MaintenanceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutClientInput | MaintenanceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type BreakdownUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BreakdownCreateWithoutClientInput, BreakdownUncheckedCreateWithoutClientInput> | BreakdownCreateWithoutClientInput[] | BreakdownUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BreakdownCreateOrConnectWithoutClientInput | BreakdownCreateOrConnectWithoutClientInput[]
    upsert?: BreakdownUpsertWithWhereUniqueWithoutClientInput | BreakdownUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BreakdownCreateManyClientInputEnvelope
    set?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    disconnect?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    delete?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    connect?: BreakdownWhereUniqueInput | BreakdownWhereUniqueInput[]
    update?: BreakdownUpdateWithWhereUniqueWithoutClientInput | BreakdownUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BreakdownUpdateManyWithWhereWithoutClientInput | BreakdownUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BreakdownScalarWhereInput | BreakdownScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MaintenanceCreateWithoutClientInput, MaintenanceUncheckedCreateWithoutClientInput> | MaintenanceCreateWithoutClientInput[] | MaintenanceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutClientInput | MaintenanceCreateOrConnectWithoutClientInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutClientInput | MaintenanceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MaintenanceCreateManyClientInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutClientInput | MaintenanceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutClientInput | MaintenanceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancesInput
    connect?: UserWhereUniqueInput
  }

  export type MotorbikeCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<MotorbikeCreateWithoutMaintenancesInput, MotorbikeUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: MotorbikeCreateOrConnectWithoutMaintenancesInput
    connect?: MotorbikeWhereUniqueInput
  }

  export type BreakdownCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<BreakdownCreateWithoutMaintenanceInput, BreakdownUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: BreakdownCreateOrConnectWithoutMaintenanceInput
    connect?: BreakdownWhereUniqueInput
  }

  export type WarrantyCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<WarrantyCreateWithoutMaintenanceInput, WarrantyUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: WarrantyCreateOrConnectWithoutMaintenanceInput
    connect?: WarrantyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancesInput
    upsert?: UserUpsertWithoutMaintenancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenancesInput, UserUpdateWithoutMaintenancesInput>, UserUncheckedUpdateWithoutMaintenancesInput>
  }

  export type MotorbikeUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<MotorbikeCreateWithoutMaintenancesInput, MotorbikeUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: MotorbikeCreateOrConnectWithoutMaintenancesInput
    upsert?: MotorbikeUpsertWithoutMaintenancesInput
    connect?: MotorbikeWhereUniqueInput
    update?: XOR<XOR<MotorbikeUpdateToOneWithWhereWithoutMaintenancesInput, MotorbikeUpdateWithoutMaintenancesInput>, MotorbikeUncheckedUpdateWithoutMaintenancesInput>
  }

  export type BreakdownUpdateOneWithoutMaintenanceNestedInput = {
    create?: XOR<BreakdownCreateWithoutMaintenanceInput, BreakdownUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: BreakdownCreateOrConnectWithoutMaintenanceInput
    upsert?: BreakdownUpsertWithoutMaintenanceInput
    disconnect?: BreakdownWhereInput | boolean
    delete?: BreakdownWhereInput | boolean
    connect?: BreakdownWhereUniqueInput
    update?: XOR<XOR<BreakdownUpdateToOneWithWhereWithoutMaintenanceInput, BreakdownUpdateWithoutMaintenanceInput>, BreakdownUncheckedUpdateWithoutMaintenanceInput>
  }

  export type WarrantyUpdateOneWithoutMaintenanceNestedInput = {
    create?: XOR<WarrantyCreateWithoutMaintenanceInput, WarrantyUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: WarrantyCreateOrConnectWithoutMaintenanceInput
    upsert?: WarrantyUpsertWithoutMaintenanceInput
    disconnect?: WarrantyWhereInput | boolean
    delete?: WarrantyWhereInput | boolean
    connect?: WarrantyWhereUniqueInput
    update?: XOR<XOR<WarrantyUpdateToOneWithWhereWithoutMaintenanceInput, WarrantyUpdateWithoutMaintenanceInput>, WarrantyUncheckedUpdateWithoutMaintenanceInput>
  }

  export type ModelMotorbikeCreateNestedOneWithoutMotorbikesInput = {
    create?: XOR<ModelMotorbikeCreateWithoutMotorbikesInput, ModelMotorbikeUncheckedCreateWithoutMotorbikesInput>
    connectOrCreate?: ModelMotorbikeCreateOrConnectWithoutMotorbikesInput
    connect?: ModelMotorbikeWhereUniqueInput
  }

  export type FleetCreateNestedOneWithoutMotorbikesInput = {
    create?: XOR<FleetCreateWithoutMotorbikesInput, FleetUncheckedCreateWithoutMotorbikesInput>
    connectOrCreate?: FleetCreateOrConnectWithoutMotorbikesInput
    connect?: FleetWhereUniqueInput
  }

  export type MaintenanceCreateNestedManyWithoutMotorbikeInput = {
    create?: XOR<MaintenanceCreateWithoutMotorbikeInput, MaintenanceUncheckedCreateWithoutMotorbikeInput> | MaintenanceCreateWithoutMotorbikeInput[] | MaintenanceUncheckedCreateWithoutMotorbikeInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutMotorbikeInput | MaintenanceCreateOrConnectWithoutMotorbikeInput[]
    createMany?: MaintenanceCreateManyMotorbikeInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutMotorbikeInput = {
    create?: XOR<MaintenanceCreateWithoutMotorbikeInput, MaintenanceUncheckedCreateWithoutMotorbikeInput> | MaintenanceCreateWithoutMotorbikeInput[] | MaintenanceUncheckedCreateWithoutMotorbikeInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutMotorbikeInput | MaintenanceCreateOrConnectWithoutMotorbikeInput[]
    createMany?: MaintenanceCreateManyMotorbikeInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type ModelMotorbikeUpdateOneRequiredWithoutMotorbikesNestedInput = {
    create?: XOR<ModelMotorbikeCreateWithoutMotorbikesInput, ModelMotorbikeUncheckedCreateWithoutMotorbikesInput>
    connectOrCreate?: ModelMotorbikeCreateOrConnectWithoutMotorbikesInput
    upsert?: ModelMotorbikeUpsertWithoutMotorbikesInput
    connect?: ModelMotorbikeWhereUniqueInput
    update?: XOR<XOR<ModelMotorbikeUpdateToOneWithWhereWithoutMotorbikesInput, ModelMotorbikeUpdateWithoutMotorbikesInput>, ModelMotorbikeUncheckedUpdateWithoutMotorbikesInput>
  }

  export type FleetUpdateOneRequiredWithoutMotorbikesNestedInput = {
    create?: XOR<FleetCreateWithoutMotorbikesInput, FleetUncheckedCreateWithoutMotorbikesInput>
    connectOrCreate?: FleetCreateOrConnectWithoutMotorbikesInput
    upsert?: FleetUpsertWithoutMotorbikesInput
    connect?: FleetWhereUniqueInput
    update?: XOR<XOR<FleetUpdateToOneWithWhereWithoutMotorbikesInput, FleetUpdateWithoutMotorbikesInput>, FleetUncheckedUpdateWithoutMotorbikesInput>
  }

  export type MaintenanceUpdateManyWithoutMotorbikeNestedInput = {
    create?: XOR<MaintenanceCreateWithoutMotorbikeInput, MaintenanceUncheckedCreateWithoutMotorbikeInput> | MaintenanceCreateWithoutMotorbikeInput[] | MaintenanceUncheckedCreateWithoutMotorbikeInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutMotorbikeInput | MaintenanceCreateOrConnectWithoutMotorbikeInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutMotorbikeInput | MaintenanceUpsertWithWhereUniqueWithoutMotorbikeInput[]
    createMany?: MaintenanceCreateManyMotorbikeInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutMotorbikeInput | MaintenanceUpdateWithWhereUniqueWithoutMotorbikeInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutMotorbikeInput | MaintenanceUpdateManyWithWhereWithoutMotorbikeInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutMotorbikeNestedInput = {
    create?: XOR<MaintenanceCreateWithoutMotorbikeInput, MaintenanceUncheckedCreateWithoutMotorbikeInput> | MaintenanceCreateWithoutMotorbikeInput[] | MaintenanceUncheckedCreateWithoutMotorbikeInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutMotorbikeInput | MaintenanceCreateOrConnectWithoutMotorbikeInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutMotorbikeInput | MaintenanceUpsertWithWhereUniqueWithoutMotorbikeInput[]
    createMany?: MaintenanceCreateManyMotorbikeInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutMotorbikeInput | MaintenanceUpdateWithWhereUniqueWithoutMotorbikeInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutMotorbikeInput | MaintenanceUpdateManyWithWhereWithoutMotorbikeInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBreakdownsInput = {
    create?: XOR<UserCreateWithoutBreakdownsInput, UserUncheckedCreateWithoutBreakdownsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBreakdownsInput
    connect?: UserWhereUniqueInput
  }

  export type MaintenanceCreateNestedOneWithoutBreakdownInput = {
    create?: XOR<MaintenanceCreateWithoutBreakdownInput, MaintenanceUncheckedCreateWithoutBreakdownInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBreakdownInput
    connect?: MaintenanceWhereUniqueInput
  }

  export type MaintenanceUncheckedCreateNestedOneWithoutBreakdownInput = {
    create?: XOR<MaintenanceCreateWithoutBreakdownInput, MaintenanceUncheckedCreateWithoutBreakdownInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBreakdownInput
    connect?: MaintenanceWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBreakdownsNestedInput = {
    create?: XOR<UserCreateWithoutBreakdownsInput, UserUncheckedCreateWithoutBreakdownsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBreakdownsInput
    upsert?: UserUpsertWithoutBreakdownsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBreakdownsInput, UserUpdateWithoutBreakdownsInput>, UserUncheckedUpdateWithoutBreakdownsInput>
  }

  export type MaintenanceUpdateOneWithoutBreakdownNestedInput = {
    create?: XOR<MaintenanceCreateWithoutBreakdownInput, MaintenanceUncheckedCreateWithoutBreakdownInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBreakdownInput
    upsert?: MaintenanceUpsertWithoutBreakdownInput
    disconnect?: MaintenanceWhereInput | boolean
    delete?: MaintenanceWhereInput | boolean
    connect?: MaintenanceWhereUniqueInput
    update?: XOR<XOR<MaintenanceUpdateToOneWithWhereWithoutBreakdownInput, MaintenanceUpdateWithoutBreakdownInput>, MaintenanceUncheckedUpdateWithoutBreakdownInput>
  }

  export type MaintenanceUncheckedUpdateOneWithoutBreakdownNestedInput = {
    create?: XOR<MaintenanceCreateWithoutBreakdownInput, MaintenanceUncheckedCreateWithoutBreakdownInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutBreakdownInput
    upsert?: MaintenanceUpsertWithoutBreakdownInput
    disconnect?: MaintenanceWhereInput | boolean
    delete?: MaintenanceWhereInput | boolean
    connect?: MaintenanceWhereUniqueInput
    update?: XOR<XOR<MaintenanceUpdateToOneWithWhereWithoutBreakdownInput, MaintenanceUpdateWithoutBreakdownInput>, MaintenanceUncheckedUpdateWithoutBreakdownInput>
  }

  export type MaintenanceCreateNestedOneWithoutWarrantyInput = {
    create?: XOR<MaintenanceCreateWithoutWarrantyInput, MaintenanceUncheckedCreateWithoutWarrantyInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutWarrantyInput
    connect?: MaintenanceWhereUniqueInput
  }

  export type MaintenanceUncheckedCreateNestedOneWithoutWarrantyInput = {
    create?: XOR<MaintenanceCreateWithoutWarrantyInput, MaintenanceUncheckedCreateWithoutWarrantyInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutWarrantyInput
    connect?: MaintenanceWhereUniqueInput
  }

  export type MaintenanceUpdateOneWithoutWarrantyNestedInput = {
    create?: XOR<MaintenanceCreateWithoutWarrantyInput, MaintenanceUncheckedCreateWithoutWarrantyInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutWarrantyInput
    upsert?: MaintenanceUpsertWithoutWarrantyInput
    disconnect?: MaintenanceWhereInput | boolean
    delete?: MaintenanceWhereInput | boolean
    connect?: MaintenanceWhereUniqueInput
    update?: XOR<XOR<MaintenanceUpdateToOneWithWhereWithoutWarrantyInput, MaintenanceUpdateWithoutWarrantyInput>, MaintenanceUncheckedUpdateWithoutWarrantyInput>
  }

  export type MaintenanceUncheckedUpdateOneWithoutWarrantyNestedInput = {
    create?: XOR<MaintenanceCreateWithoutWarrantyInput, MaintenanceUncheckedCreateWithoutWarrantyInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutWarrantyInput
    upsert?: MaintenanceUpsertWithoutWarrantyInput
    disconnect?: MaintenanceWhereInput | boolean
    delete?: MaintenanceWhereInput | boolean
    connect?: MaintenanceWhereUniqueInput
    update?: XOR<XOR<MaintenanceUpdateToOneWithWhereWithoutWarrantyInput, MaintenanceUpdateWithoutWarrantyInput>, MaintenanceUncheckedUpdateWithoutWarrantyInput>
  }

  export type MotorbikeCreateNestedManyWithoutFleetInput = {
    create?: XOR<MotorbikeCreateWithoutFleetInput, MotorbikeUncheckedCreateWithoutFleetInput> | MotorbikeCreateWithoutFleetInput[] | MotorbikeUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutFleetInput | MotorbikeCreateOrConnectWithoutFleetInput[]
    createMany?: MotorbikeCreateManyFleetInputEnvelope
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
  }

  export type MotorbikeUncheckedCreateNestedManyWithoutFleetInput = {
    create?: XOR<MotorbikeCreateWithoutFleetInput, MotorbikeUncheckedCreateWithoutFleetInput> | MotorbikeCreateWithoutFleetInput[] | MotorbikeUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutFleetInput | MotorbikeCreateOrConnectWithoutFleetInput[]
    createMany?: MotorbikeCreateManyFleetInputEnvelope
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
  }

  export type MotorbikeUpdateManyWithoutFleetNestedInput = {
    create?: XOR<MotorbikeCreateWithoutFleetInput, MotorbikeUncheckedCreateWithoutFleetInput> | MotorbikeCreateWithoutFleetInput[] | MotorbikeUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutFleetInput | MotorbikeCreateOrConnectWithoutFleetInput[]
    upsert?: MotorbikeUpsertWithWhereUniqueWithoutFleetInput | MotorbikeUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: MotorbikeCreateManyFleetInputEnvelope
    set?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    disconnect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    delete?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    update?: MotorbikeUpdateWithWhereUniqueWithoutFleetInput | MotorbikeUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: MotorbikeUpdateManyWithWhereWithoutFleetInput | MotorbikeUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: MotorbikeScalarWhereInput | MotorbikeScalarWhereInput[]
  }

  export type MotorbikeUncheckedUpdateManyWithoutFleetNestedInput = {
    create?: XOR<MotorbikeCreateWithoutFleetInput, MotorbikeUncheckedCreateWithoutFleetInput> | MotorbikeCreateWithoutFleetInput[] | MotorbikeUncheckedCreateWithoutFleetInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutFleetInput | MotorbikeCreateOrConnectWithoutFleetInput[]
    upsert?: MotorbikeUpsertWithWhereUniqueWithoutFleetInput | MotorbikeUpsertWithWhereUniqueWithoutFleetInput[]
    createMany?: MotorbikeCreateManyFleetInputEnvelope
    set?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    disconnect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    delete?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    update?: MotorbikeUpdateWithWhereUniqueWithoutFleetInput | MotorbikeUpdateWithWhereUniqueWithoutFleetInput[]
    updateMany?: MotorbikeUpdateManyWithWhereWithoutFleetInput | MotorbikeUpdateManyWithWhereWithoutFleetInput[]
    deleteMany?: MotorbikeScalarWhereInput | MotorbikeScalarWhereInput[]
  }

  export type MotorbikeCreateNestedManyWithoutModelMotorbikeInput = {
    create?: XOR<MotorbikeCreateWithoutModelMotorbikeInput, MotorbikeUncheckedCreateWithoutModelMotorbikeInput> | MotorbikeCreateWithoutModelMotorbikeInput[] | MotorbikeUncheckedCreateWithoutModelMotorbikeInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutModelMotorbikeInput | MotorbikeCreateOrConnectWithoutModelMotorbikeInput[]
    createMany?: MotorbikeCreateManyModelMotorbikeInputEnvelope
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
  }

  export type MotorbikeUncheckedCreateNestedManyWithoutModelMotorbikeInput = {
    create?: XOR<MotorbikeCreateWithoutModelMotorbikeInput, MotorbikeUncheckedCreateWithoutModelMotorbikeInput> | MotorbikeCreateWithoutModelMotorbikeInput[] | MotorbikeUncheckedCreateWithoutModelMotorbikeInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutModelMotorbikeInput | MotorbikeCreateOrConnectWithoutModelMotorbikeInput[]
    createMany?: MotorbikeCreateManyModelMotorbikeInputEnvelope
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
  }

  export type MotorbikeUpdateManyWithoutModelMotorbikeNestedInput = {
    create?: XOR<MotorbikeCreateWithoutModelMotorbikeInput, MotorbikeUncheckedCreateWithoutModelMotorbikeInput> | MotorbikeCreateWithoutModelMotorbikeInput[] | MotorbikeUncheckedCreateWithoutModelMotorbikeInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutModelMotorbikeInput | MotorbikeCreateOrConnectWithoutModelMotorbikeInput[]
    upsert?: MotorbikeUpsertWithWhereUniqueWithoutModelMotorbikeInput | MotorbikeUpsertWithWhereUniqueWithoutModelMotorbikeInput[]
    createMany?: MotorbikeCreateManyModelMotorbikeInputEnvelope
    set?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    disconnect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    delete?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    update?: MotorbikeUpdateWithWhereUniqueWithoutModelMotorbikeInput | MotorbikeUpdateWithWhereUniqueWithoutModelMotorbikeInput[]
    updateMany?: MotorbikeUpdateManyWithWhereWithoutModelMotorbikeInput | MotorbikeUpdateManyWithWhereWithoutModelMotorbikeInput[]
    deleteMany?: MotorbikeScalarWhereInput | MotorbikeScalarWhereInput[]
  }

  export type MotorbikeUncheckedUpdateManyWithoutModelMotorbikeNestedInput = {
    create?: XOR<MotorbikeCreateWithoutModelMotorbikeInput, MotorbikeUncheckedCreateWithoutModelMotorbikeInput> | MotorbikeCreateWithoutModelMotorbikeInput[] | MotorbikeUncheckedCreateWithoutModelMotorbikeInput[]
    connectOrCreate?: MotorbikeCreateOrConnectWithoutModelMotorbikeInput | MotorbikeCreateOrConnectWithoutModelMotorbikeInput[]
    upsert?: MotorbikeUpsertWithWhereUniqueWithoutModelMotorbikeInput | MotorbikeUpsertWithWhereUniqueWithoutModelMotorbikeInput[]
    createMany?: MotorbikeCreateManyModelMotorbikeInputEnvelope
    set?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    disconnect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    delete?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    connect?: MotorbikeWhereUniqueInput | MotorbikeWhereUniqueInput[]
    update?: MotorbikeUpdateWithWhereUniqueWithoutModelMotorbikeInput | MotorbikeUpdateWithWhereUniqueWithoutModelMotorbikeInput[]
    updateMany?: MotorbikeUpdateManyWithWhereWithoutModelMotorbikeInput | MotorbikeUpdateManyWithWhereWithoutModelMotorbikeInput[]
    deleteMany?: MotorbikeScalarWhereInput | MotorbikeScalarWhereInput[]
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

  export type BreakdownCreateWithoutClientInput = {
    id?: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenance?: MaintenanceCreateNestedOneWithoutBreakdownInput
  }

  export type BreakdownUncheckedCreateWithoutClientInput = {
    id?: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenance?: MaintenanceUncheckedCreateNestedOneWithoutBreakdownInput
  }

  export type BreakdownCreateOrConnectWithoutClientInput = {
    where: BreakdownWhereUniqueInput
    create: XOR<BreakdownCreateWithoutClientInput, BreakdownUncheckedCreateWithoutClientInput>
  }

  export type BreakdownCreateManyClientInputEnvelope = {
    data: BreakdownCreateManyClientInput | BreakdownCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    motorbike: MotorbikeCreateNestedOneWithoutMaintenancesInput
    breakdown?: BreakdownCreateNestedOneWithoutMaintenanceInput
    warranty?: WarrantyCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutClientInput = {
    id?: string
    motorbikeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
    warrantyId?: string | null
  }

  export type MaintenanceCreateOrConnectWithoutClientInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutClientInput, MaintenanceUncheckedCreateWithoutClientInput>
  }

  export type MaintenanceCreateManyClientInputEnvelope = {
    data: MaintenanceCreateManyClientInput | MaintenanceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BreakdownUpsertWithWhereUniqueWithoutClientInput = {
    where: BreakdownWhereUniqueInput
    update: XOR<BreakdownUpdateWithoutClientInput, BreakdownUncheckedUpdateWithoutClientInput>
    create: XOR<BreakdownCreateWithoutClientInput, BreakdownUncheckedCreateWithoutClientInput>
  }

  export type BreakdownUpdateWithWhereUniqueWithoutClientInput = {
    where: BreakdownWhereUniqueInput
    data: XOR<BreakdownUpdateWithoutClientInput, BreakdownUncheckedUpdateWithoutClientInput>
  }

  export type BreakdownUpdateManyWithWhereWithoutClientInput = {
    where: BreakdownScalarWhereInput
    data: XOR<BreakdownUpdateManyMutationInput, BreakdownUncheckedUpdateManyWithoutClientInput>
  }

  export type BreakdownScalarWhereInput = {
    AND?: BreakdownScalarWhereInput | BreakdownScalarWhereInput[]
    OR?: BreakdownScalarWhereInput[]
    NOT?: BreakdownScalarWhereInput | BreakdownScalarWhereInput[]
    id?: StringFilter<"Breakdown"> | string
    clientId?: StringFilter<"Breakdown"> | string
    description?: StringFilter<"Breakdown"> | string
    actionTaken?: StringFilter<"Breakdown"> | string
    resolved?: BoolFilter<"Breakdown"> | boolean
    resolutionDate?: DateTimeNullableFilter<"Breakdown"> | Date | string | null
    createdAt?: DateTimeFilter<"Breakdown"> | Date | string
    updatedAt?: DateTimeFilter<"Breakdown"> | Date | string
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutClientInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutClientInput, MaintenanceUncheckedUpdateWithoutClientInput>
    create: XOR<MaintenanceCreateWithoutClientInput, MaintenanceUncheckedCreateWithoutClientInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutClientInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutClientInput, MaintenanceUncheckedUpdateWithoutClientInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutClientInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutClientInput>
  }

  export type MaintenanceScalarWhereInput = {
    AND?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    OR?: MaintenanceScalarWhereInput[]
    NOT?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    motorbikeId?: StringFilter<"Maintenance"> | string
    clientId?: StringFilter<"Maintenance"> | string
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    updatedAt?: DateTimeFilter<"Maintenance"> | Date | string
    maintenanceDate?: DateTimeFilter<"Maintenance"> | Date | string
    mileageAtMaintenance?: IntFilter<"Maintenance"> | number
    maintenanceType?: StringFilter<"Maintenance"> | string
    maintenanceCost?: FloatFilter<"Maintenance"> | number
    maintenanceDescription?: StringFilter<"Maintenance"> | string
    breakdownId?: StringNullableFilter<"Maintenance"> | string | null
    warrantyId?: StringNullableFilter<"Maintenance"> | string | null
  }

  export type UserCreateWithoutMaintenancesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    breakdowns?: BreakdownCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    breakdowns?: BreakdownUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutMaintenancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
  }

  export type MotorbikeCreateWithoutMaintenancesInput = {
    id?: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelMotorbike: ModelMotorbikeCreateNestedOneWithoutMotorbikesInput
    fleet: FleetCreateNestedOneWithoutMotorbikesInput
  }

  export type MotorbikeUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    modelMotorbikeId: string
    fleetId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MotorbikeCreateOrConnectWithoutMaintenancesInput = {
    where: MotorbikeWhereUniqueInput
    create: XOR<MotorbikeCreateWithoutMaintenancesInput, MotorbikeUncheckedCreateWithoutMaintenancesInput>
  }

  export type BreakdownCreateWithoutMaintenanceInput = {
    id?: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutBreakdownsInput
  }

  export type BreakdownUncheckedCreateWithoutMaintenanceInput = {
    id?: string
    clientId: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BreakdownCreateOrConnectWithoutMaintenanceInput = {
    where: BreakdownWhereUniqueInput
    create: XOR<BreakdownCreateWithoutMaintenanceInput, BreakdownUncheckedCreateWithoutMaintenanceInput>
  }

  export type WarrantyCreateWithoutMaintenanceInput = {
    id?: string
    validFrom: Date | string
    validUntil: Date | string
    providerName: string
    warrantyDetails: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarrantyUncheckedCreateWithoutMaintenanceInput = {
    id?: string
    validFrom: Date | string
    validUntil: Date | string
    providerName: string
    warrantyDetails: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarrantyCreateOrConnectWithoutMaintenanceInput = {
    where: WarrantyWhereUniqueInput
    create: XOR<WarrantyCreateWithoutMaintenanceInput, WarrantyUncheckedCreateWithoutMaintenanceInput>
  }

  export type UserUpsertWithoutMaintenancesInput = {
    update: XOR<UserUpdateWithoutMaintenancesInput, UserUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<UserCreateWithoutMaintenancesInput, UserUncheckedCreateWithoutMaintenancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenancesInput, UserUncheckedUpdateWithoutMaintenancesInput>
  }

  export type UserUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breakdowns?: BreakdownUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breakdowns?: BreakdownUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MotorbikeUpsertWithoutMaintenancesInput = {
    update: XOR<MotorbikeUpdateWithoutMaintenancesInput, MotorbikeUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<MotorbikeCreateWithoutMaintenancesInput, MotorbikeUncheckedCreateWithoutMaintenancesInput>
    where?: MotorbikeWhereInput
  }

  export type MotorbikeUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: MotorbikeWhereInput
    data: XOR<MotorbikeUpdateWithoutMaintenancesInput, MotorbikeUncheckedUpdateWithoutMaintenancesInput>
  }

  export type MotorbikeUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelMotorbike?: ModelMotorbikeUpdateOneRequiredWithoutMotorbikesNestedInput
    fleet?: FleetUpdateOneRequiredWithoutMotorbikesNestedInput
  }

  export type MotorbikeUncheckedUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelMotorbikeId?: StringFieldUpdateOperationsInput | string
    fleetId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakdownUpsertWithoutMaintenanceInput = {
    update: XOR<BreakdownUpdateWithoutMaintenanceInput, BreakdownUncheckedUpdateWithoutMaintenanceInput>
    create: XOR<BreakdownCreateWithoutMaintenanceInput, BreakdownUncheckedCreateWithoutMaintenanceInput>
    where?: BreakdownWhereInput
  }

  export type BreakdownUpdateToOneWithWhereWithoutMaintenanceInput = {
    where?: BreakdownWhereInput
    data: XOR<BreakdownUpdateWithoutMaintenanceInput, BreakdownUncheckedUpdateWithoutMaintenanceInput>
  }

  export type BreakdownUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutBreakdownsNestedInput
  }

  export type BreakdownUncheckedUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyUpsertWithoutMaintenanceInput = {
    update: XOR<WarrantyUpdateWithoutMaintenanceInput, WarrantyUncheckedUpdateWithoutMaintenanceInput>
    create: XOR<WarrantyCreateWithoutMaintenanceInput, WarrantyUncheckedCreateWithoutMaintenanceInput>
    where?: WarrantyWhereInput
  }

  export type WarrantyUpdateToOneWithWhereWithoutMaintenanceInput = {
    where?: WarrantyWhereInput
    data: XOR<WarrantyUpdateWithoutMaintenanceInput, WarrantyUncheckedUpdateWithoutMaintenanceInput>
  }

  export type WarrantyUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    providerName?: StringFieldUpdateOperationsInput | string
    warrantyDetails?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarrantyUncheckedUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    providerName?: StringFieldUpdateOperationsInput | string
    warrantyDetails?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelMotorbikeCreateWithoutMotorbikesInput = {
    id?: string
    name: string
    brand: string
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelMotorbikeUncheckedCreateWithoutMotorbikesInput = {
    id?: string
    name: string
    brand: string
    maintenanceIntervalKm: number
    maintenanceIntervalTimeMonths: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelMotorbikeCreateOrConnectWithoutMotorbikesInput = {
    where: ModelMotorbikeWhereUniqueInput
    create: XOR<ModelMotorbikeCreateWithoutMotorbikesInput, ModelMotorbikeUncheckedCreateWithoutMotorbikesInput>
  }

  export type FleetCreateWithoutMotorbikesInput = {
    id?: string
    clientId: string
    managerId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FleetUncheckedCreateWithoutMotorbikesInput = {
    id?: string
    clientId: string
    managerId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FleetCreateOrConnectWithoutMotorbikesInput = {
    where: FleetWhereUniqueInput
    create: XOR<FleetCreateWithoutMotorbikesInput, FleetUncheckedCreateWithoutMotorbikesInput>
  }

  export type MaintenanceCreateWithoutMotorbikeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    client: UserCreateNestedOneWithoutMaintenancesInput
    breakdown?: BreakdownCreateNestedOneWithoutMaintenanceInput
    warranty?: WarrantyCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutMotorbikeInput = {
    id?: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
    warrantyId?: string | null
  }

  export type MaintenanceCreateOrConnectWithoutMotorbikeInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutMotorbikeInput, MaintenanceUncheckedCreateWithoutMotorbikeInput>
  }

  export type MaintenanceCreateManyMotorbikeInputEnvelope = {
    data: MaintenanceCreateManyMotorbikeInput | MaintenanceCreateManyMotorbikeInput[]
    skipDuplicates?: boolean
  }

  export type ModelMotorbikeUpsertWithoutMotorbikesInput = {
    update: XOR<ModelMotorbikeUpdateWithoutMotorbikesInput, ModelMotorbikeUncheckedUpdateWithoutMotorbikesInput>
    create: XOR<ModelMotorbikeCreateWithoutMotorbikesInput, ModelMotorbikeUncheckedCreateWithoutMotorbikesInput>
    where?: ModelMotorbikeWhereInput
  }

  export type ModelMotorbikeUpdateToOneWithWhereWithoutMotorbikesInput = {
    where?: ModelMotorbikeWhereInput
    data: XOR<ModelMotorbikeUpdateWithoutMotorbikesInput, ModelMotorbikeUncheckedUpdateWithoutMotorbikesInput>
  }

  export type ModelMotorbikeUpdateWithoutMotorbikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    maintenanceIntervalKm?: IntFieldUpdateOperationsInput | number
    maintenanceIntervalTimeMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelMotorbikeUncheckedUpdateWithoutMotorbikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    maintenanceIntervalKm?: IntFieldUpdateOperationsInput | number
    maintenanceIntervalTimeMonths?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FleetUpsertWithoutMotorbikesInput = {
    update: XOR<FleetUpdateWithoutMotorbikesInput, FleetUncheckedUpdateWithoutMotorbikesInput>
    create: XOR<FleetCreateWithoutMotorbikesInput, FleetUncheckedCreateWithoutMotorbikesInput>
    where?: FleetWhereInput
  }

  export type FleetUpdateToOneWithWhereWithoutMotorbikesInput = {
    where?: FleetWhereInput
    data: XOR<FleetUpdateWithoutMotorbikesInput, FleetUncheckedUpdateWithoutMotorbikesInput>
  }

  export type FleetUpdateWithoutMotorbikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FleetUncheckedUpdateWithoutMotorbikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutMotorbikeInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutMotorbikeInput, MaintenanceUncheckedUpdateWithoutMotorbikeInput>
    create: XOR<MaintenanceCreateWithoutMotorbikeInput, MaintenanceUncheckedCreateWithoutMotorbikeInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutMotorbikeInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutMotorbikeInput, MaintenanceUncheckedUpdateWithoutMotorbikeInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutMotorbikeInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutMotorbikeInput>
  }

  export type UserCreateWithoutBreakdownsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutBreakdownsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutBreakdownsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBreakdownsInput, UserUncheckedCreateWithoutBreakdownsInput>
  }

  export type MaintenanceCreateWithoutBreakdownInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    client: UserCreateNestedOneWithoutMaintenancesInput
    motorbike: MotorbikeCreateNestedOneWithoutMaintenancesInput
    warranty?: WarrantyCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutBreakdownInput = {
    id?: string
    motorbikeId: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    warrantyId?: string | null
  }

  export type MaintenanceCreateOrConnectWithoutBreakdownInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutBreakdownInput, MaintenanceUncheckedCreateWithoutBreakdownInput>
  }

  export type UserUpsertWithoutBreakdownsInput = {
    update: XOR<UserUpdateWithoutBreakdownsInput, UserUncheckedUpdateWithoutBreakdownsInput>
    create: XOR<UserCreateWithoutBreakdownsInput, UserUncheckedCreateWithoutBreakdownsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBreakdownsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBreakdownsInput, UserUncheckedUpdateWithoutBreakdownsInput>
  }

  export type UserUpdateWithoutBreakdownsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutBreakdownsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MaintenanceUpsertWithoutBreakdownInput = {
    update: XOR<MaintenanceUpdateWithoutBreakdownInput, MaintenanceUncheckedUpdateWithoutBreakdownInput>
    create: XOR<MaintenanceCreateWithoutBreakdownInput, MaintenanceUncheckedCreateWithoutBreakdownInput>
    where?: MaintenanceWhereInput
  }

  export type MaintenanceUpdateToOneWithWhereWithoutBreakdownInput = {
    where?: MaintenanceWhereInput
    data: XOR<MaintenanceUpdateWithoutBreakdownInput, MaintenanceUncheckedUpdateWithoutBreakdownInput>
  }

  export type MaintenanceUpdateWithoutBreakdownInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    motorbike?: MotorbikeUpdateOneRequiredWithoutMaintenancesNestedInput
    warranty?: WarrantyUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutBreakdownInput = {
    id?: StringFieldUpdateOperationsInput | string
    motorbikeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateWithoutWarrantyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    client: UserCreateNestedOneWithoutMaintenancesInput
    motorbike: MotorbikeCreateNestedOneWithoutMaintenancesInput
    breakdown?: BreakdownCreateNestedOneWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutWarrantyInput = {
    id?: string
    motorbikeId: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
  }

  export type MaintenanceCreateOrConnectWithoutWarrantyInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutWarrantyInput, MaintenanceUncheckedCreateWithoutWarrantyInput>
  }

  export type MaintenanceUpsertWithoutWarrantyInput = {
    update: XOR<MaintenanceUpdateWithoutWarrantyInput, MaintenanceUncheckedUpdateWithoutWarrantyInput>
    create: XOR<MaintenanceCreateWithoutWarrantyInput, MaintenanceUncheckedCreateWithoutWarrantyInput>
    where?: MaintenanceWhereInput
  }

  export type MaintenanceUpdateToOneWithWhereWithoutWarrantyInput = {
    where?: MaintenanceWhereInput
    data: XOR<MaintenanceUpdateWithoutWarrantyInput, MaintenanceUncheckedUpdateWithoutWarrantyInput>
  }

  export type MaintenanceUpdateWithoutWarrantyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    motorbike?: MotorbikeUpdateOneRequiredWithoutMaintenancesNestedInput
    breakdown?: BreakdownUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutWarrantyInput = {
    id?: StringFieldUpdateOperationsInput | string
    motorbikeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotorbikeCreateWithoutFleetInput = {
    id?: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelMotorbike: ModelMotorbikeCreateNestedOneWithoutMotorbikesInput
    maintenances?: MaintenanceCreateNestedManyWithoutMotorbikeInput
  }

  export type MotorbikeUncheckedCreateWithoutFleetInput = {
    id?: string
    modelMotorbikeId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutMotorbikeInput
  }

  export type MotorbikeCreateOrConnectWithoutFleetInput = {
    where: MotorbikeWhereUniqueInput
    create: XOR<MotorbikeCreateWithoutFleetInput, MotorbikeUncheckedCreateWithoutFleetInput>
  }

  export type MotorbikeCreateManyFleetInputEnvelope = {
    data: MotorbikeCreateManyFleetInput | MotorbikeCreateManyFleetInput[]
    skipDuplicates?: boolean
  }

  export type MotorbikeUpsertWithWhereUniqueWithoutFleetInput = {
    where: MotorbikeWhereUniqueInput
    update: XOR<MotorbikeUpdateWithoutFleetInput, MotorbikeUncheckedUpdateWithoutFleetInput>
    create: XOR<MotorbikeCreateWithoutFleetInput, MotorbikeUncheckedCreateWithoutFleetInput>
  }

  export type MotorbikeUpdateWithWhereUniqueWithoutFleetInput = {
    where: MotorbikeWhereUniqueInput
    data: XOR<MotorbikeUpdateWithoutFleetInput, MotorbikeUncheckedUpdateWithoutFleetInput>
  }

  export type MotorbikeUpdateManyWithWhereWithoutFleetInput = {
    where: MotorbikeScalarWhereInput
    data: XOR<MotorbikeUpdateManyMutationInput, MotorbikeUncheckedUpdateManyWithoutFleetInput>
  }

  export type MotorbikeScalarWhereInput = {
    AND?: MotorbikeScalarWhereInput | MotorbikeScalarWhereInput[]
    OR?: MotorbikeScalarWhereInput[]
    NOT?: MotorbikeScalarWhereInput | MotorbikeScalarWhereInput[]
    id?: StringFilter<"Motorbike"> | string
    modelMotorbikeId?: StringFilter<"Motorbike"> | string
    fleetId?: StringFilter<"Motorbike"> | string
    clientId?: StringFilter<"Motorbike"> | string
    licensePlate?: StringFilter<"Motorbike"> | string
    vehicleIdentificationNumber?: StringFilter<"Motorbike"> | string
    color?: StringFilter<"Motorbike"> | string
    mileage?: IntFilter<"Motorbike"> | number
    status?: StringFilter<"Motorbike"> | string
    createdAt?: DateTimeFilter<"Motorbike"> | Date | string
    updatedAt?: DateTimeFilter<"Motorbike"> | Date | string
  }

  export type MotorbikeCreateWithoutModelMotorbikeInput = {
    id?: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fleet: FleetCreateNestedOneWithoutMotorbikesInput
    maintenances?: MaintenanceCreateNestedManyWithoutMotorbikeInput
  }

  export type MotorbikeUncheckedCreateWithoutModelMotorbikeInput = {
    id?: string
    fleetId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutMotorbikeInput
  }

  export type MotorbikeCreateOrConnectWithoutModelMotorbikeInput = {
    where: MotorbikeWhereUniqueInput
    create: XOR<MotorbikeCreateWithoutModelMotorbikeInput, MotorbikeUncheckedCreateWithoutModelMotorbikeInput>
  }

  export type MotorbikeCreateManyModelMotorbikeInputEnvelope = {
    data: MotorbikeCreateManyModelMotorbikeInput | MotorbikeCreateManyModelMotorbikeInput[]
    skipDuplicates?: boolean
  }

  export type MotorbikeUpsertWithWhereUniqueWithoutModelMotorbikeInput = {
    where: MotorbikeWhereUniqueInput
    update: XOR<MotorbikeUpdateWithoutModelMotorbikeInput, MotorbikeUncheckedUpdateWithoutModelMotorbikeInput>
    create: XOR<MotorbikeCreateWithoutModelMotorbikeInput, MotorbikeUncheckedCreateWithoutModelMotorbikeInput>
  }

  export type MotorbikeUpdateWithWhereUniqueWithoutModelMotorbikeInput = {
    where: MotorbikeWhereUniqueInput
    data: XOR<MotorbikeUpdateWithoutModelMotorbikeInput, MotorbikeUncheckedUpdateWithoutModelMotorbikeInput>
  }

  export type MotorbikeUpdateManyWithWhereWithoutModelMotorbikeInput = {
    where: MotorbikeScalarWhereInput
    data: XOR<MotorbikeUpdateManyMutationInput, MotorbikeUncheckedUpdateManyWithoutModelMotorbikeInput>
  }

  export type BreakdownCreateManyClientInput = {
    id?: string
    description: string
    actionTaken: string
    resolved?: boolean
    resolutionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceCreateManyClientInput = {
    id?: string
    motorbikeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
    warrantyId?: string | null
  }

  export type BreakdownUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance?: MaintenanceUpdateOneWithoutBreakdownNestedInput
  }

  export type BreakdownUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenance?: MaintenanceUncheckedUpdateOneWithoutBreakdownNestedInput
  }

  export type BreakdownUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    actionTaken?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolutionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    motorbike?: MotorbikeUpdateOneRequiredWithoutMaintenancesNestedInput
    breakdown?: BreakdownUpdateOneWithoutMaintenanceNestedInput
    warranty?: WarrantyUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    motorbikeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    motorbikeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateManyMotorbikeInput = {
    id?: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceDate: Date | string
    mileageAtMaintenance: number
    maintenanceType: string
    maintenanceCost: number
    maintenanceDescription: string
    breakdownId?: string | null
    warrantyId?: string | null
  }

  export type MaintenanceUpdateWithoutMotorbikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutMaintenancesNestedInput
    breakdown?: BreakdownUpdateOneWithoutMaintenanceNestedInput
    warranty?: WarrantyUpdateOneWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutMotorbikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUncheckedUpdateManyWithoutMotorbikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    mileageAtMaintenance?: IntFieldUpdateOperationsInput | number
    maintenanceType?: StringFieldUpdateOperationsInput | string
    maintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceDescription?: StringFieldUpdateOperationsInput | string
    breakdownId?: NullableStringFieldUpdateOperationsInput | string | null
    warrantyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MotorbikeCreateManyFleetInput = {
    id?: string
    modelMotorbikeId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MotorbikeUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelMotorbike?: ModelMotorbikeUpdateOneRequiredWithoutMotorbikesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutMotorbikeNestedInput
  }

  export type MotorbikeUncheckedUpdateWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelMotorbikeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutMotorbikeNestedInput
  }

  export type MotorbikeUncheckedUpdateManyWithoutFleetInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelMotorbikeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotorbikeCreateManyModelMotorbikeInput = {
    id?: string
    fleetId: string
    clientId: string
    licensePlate: string
    vehicleIdentificationNumber: string
    color: string
    mileage: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MotorbikeUpdateWithoutModelMotorbikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fleet?: FleetUpdateOneRequiredWithoutMotorbikesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutMotorbikeNestedInput
  }

  export type MotorbikeUncheckedUpdateWithoutModelMotorbikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenances?: MaintenanceUncheckedUpdateManyWithoutMotorbikeNestedInput
  }

  export type MotorbikeUncheckedUpdateManyWithoutModelMotorbikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    vehicleIdentificationNumber?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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