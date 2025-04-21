
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
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model ActivityDetail
 * 
 */
export type ActivityDetail = $Result.DefaultSelection<Prisma.$ActivityDetailPayload>
/**
 * Model WeeklyTarget
 * 
 */
export type WeeklyTarget = $Result.DefaultSelection<Prisma.$WeeklyTargetPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WeeklyTargetStatus: {
  pending: 'pending',
  started: 'started',
  completed: 'completed'
};

export type WeeklyTargetStatus = (typeof WeeklyTargetStatus)[keyof typeof WeeklyTargetStatus]


export const FriendshipStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]

}

export type WeeklyTargetStatus = $Enums.WeeklyTargetStatus

export const WeeklyTargetStatus: typeof $Enums.WeeklyTargetStatus

export type FriendshipStatus = $Enums.FriendshipStatus

export const FriendshipStatus: typeof $Enums.FriendshipStatus

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityDetail`: Exposes CRUD operations for the **ActivityDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityDetails
    * const activityDetails = await prisma.activityDetail.findMany()
    * ```
    */
  get activityDetail(): Prisma.ActivityDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyTarget`: Exposes CRUD operations for the **WeeklyTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyTargets
    * const weeklyTargets = await prisma.weeklyTarget.findMany()
    * ```
    */
  get weeklyTarget(): Prisma.WeeklyTargetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Activity: 'Activity',
    ActivityDetail: 'ActivityDetail',
    WeeklyTarget: 'WeeklyTarget',
    Friendship: 'Friendship'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "activity" | "activityDetail" | "weeklyTarget" | "friendship"
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
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      ActivityDetail: {
        payload: Prisma.$ActivityDetailPayload<ExtArgs>
        fields: Prisma.ActivityDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>
          }
          findFirst: {
            args: Prisma.ActivityDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>
          }
          findMany: {
            args: Prisma.ActivityDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>[]
          }
          create: {
            args: Prisma.ActivityDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>
          }
          createMany: {
            args: Prisma.ActivityDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>[]
          }
          delete: {
            args: Prisma.ActivityDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>
          }
          update: {
            args: Prisma.ActivityDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>[]
          }
          upsert: {
            args: Prisma.ActivityDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailPayload>
          }
          aggregate: {
            args: Prisma.ActivityDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityDetail>
          }
          groupBy: {
            args: Prisma.ActivityDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityDetailCountAggregateOutputType> | number
          }
        }
      }
      WeeklyTarget: {
        payload: Prisma.$WeeklyTargetPayload<ExtArgs>
        fields: Prisma.WeeklyTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyTargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyTargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>
          }
          findFirst: {
            args: Prisma.WeeklyTargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyTargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>
          }
          findMany: {
            args: Prisma.WeeklyTargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>[]
          }
          create: {
            args: Prisma.WeeklyTargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>
          }
          createMany: {
            args: Prisma.WeeklyTargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyTargetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>[]
          }
          delete: {
            args: Prisma.WeeklyTargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>
          }
          update: {
            args: Prisma.WeeklyTargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyTargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyTargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyTargetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyTargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTargetPayload>
          }
          aggregate: {
            args: Prisma.WeeklyTargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyTarget>
          }
          groupBy: {
            args: Prisma.WeeklyTargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyTargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyTargetCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyTargetCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
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
    activity?: ActivityOmit
    activityDetail?: ActivityDetailOmit
    weeklyTarget?: WeeklyTargetOmit
    friendship?: FriendshipOmit
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
    activities: number
    weekly_targets: number
    sent_friendships: number
    received_friendships: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    weekly_targets?: boolean | UserCountOutputTypeCountWeekly_targetsArgs
    sent_friendships?: boolean | UserCountOutputTypeCountSent_friendshipsArgs
    received_friendships?: boolean | UserCountOutputTypeCountReceived_friendshipsArgs
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
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeekly_targetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyTargetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSent_friendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceived_friendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    activity_details: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_details?: boolean | ActivityCountOutputTypeCountActivity_detailsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountActivity_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    display_name: string | null
    profile_image: string | null
    target: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    display_name: string | null
    profile_image: string | null
    target: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    display_name: number
    profile_image: number
    target: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    display_name?: true
    profile_image?: true
    target?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    display_name?: true
    profile_image?: true
    target?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    display_name?: true
    profile_image?: true
    target?: true
    is_active?: true
    created_at?: true
    updated_at?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    display_name: string
    profile_image: string
    target: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    display_name?: boolean
    profile_image?: boolean
    target?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    activities?: boolean | User$activitiesArgs<ExtArgs>
    weekly_targets?: boolean | User$weekly_targetsArgs<ExtArgs>
    sent_friendships?: boolean | User$sent_friendshipsArgs<ExtArgs>
    received_friendships?: boolean | User$received_friendshipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    profile_image?: boolean
    target?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    display_name?: boolean
    profile_image?: boolean
    target?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    display_name?: boolean
    profile_image?: boolean
    target?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "display_name" | "profile_image" | "target" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | User$activitiesArgs<ExtArgs>
    weekly_targets?: boolean | User$weekly_targetsArgs<ExtArgs>
    sent_friendships?: boolean | User$sent_friendshipsArgs<ExtArgs>
    received_friendships?: boolean | User$received_friendshipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      weekly_targets: Prisma.$WeeklyTargetPayload<ExtArgs>[]
      sent_friendships: Prisma.$FriendshipPayload<ExtArgs>[]
      received_friendships: Prisma.$FriendshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      display_name: string
      profile_image: string
      target: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weekly_targets<T extends User$weekly_targetsArgs<ExtArgs> = {}>(args?: Subset<T, User$weekly_targetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sent_friendships<T extends User$sent_friendshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$sent_friendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    received_friendships<T extends User$received_friendshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$received_friendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly display_name: FieldRef<"User", 'String'>
    readonly profile_image: FieldRef<"User", 'String'>
    readonly target: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.weekly_targets
   */
  export type User$weekly_targetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    where?: WeeklyTargetWhereInput
    orderBy?: WeeklyTargetOrderByWithRelationInput | WeeklyTargetOrderByWithRelationInput[]
    cursor?: WeeklyTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyTargetScalarFieldEnum | WeeklyTargetScalarFieldEnum[]
  }

  /**
   * User.sent_friendships
   */
  export type User$sent_friendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.received_friendships
   */
  export type User$received_friendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
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
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    activity_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    activity_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    user_id: number
    activity_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    user_id?: true
    activity_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    user_id?: true
    activity_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    user_id?: true
    activity_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    user_id: number
    activity_date: Date
    created_at: Date
    updated_at: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    activity_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    activity_details?: boolean | Activity$activity_detailsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    activity_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    activity_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    user_id?: boolean
    activity_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "activity_date" | "created_at" | "updated_at", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    activity_details?: boolean | Activity$activity_detailsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      activity_details: Prisma.$ActivityDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      activity_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity_details<T extends Activity$activity_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$activity_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly user_id: FieldRef<"Activity", 'Int'>
    readonly activity_date: FieldRef<"Activity", 'DateTime'>
    readonly created_at: FieldRef<"Activity", 'DateTime'>
    readonly updated_at: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.activity_details
   */
  export type Activity$activity_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    where?: ActivityDetailWhereInput
    orderBy?: ActivityDetailOrderByWithRelationInput | ActivityDetailOrderByWithRelationInput[]
    cursor?: ActivityDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDetailScalarFieldEnum | ActivityDetailScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model ActivityDetail
   */

  export type AggregateActivityDetail = {
    _count: ActivityDetailCountAggregateOutputType | null
    _avg: ActivityDetailAvgAggregateOutputType | null
    _sum: ActivityDetailSumAggregateOutputType | null
    _min: ActivityDetailMinAggregateOutputType | null
    _max: ActivityDetailMaxAggregateOutputType | null
  }

  export type ActivityDetailAvgAggregateOutputType = {
    id: number | null
    activity_id: number | null
    duration_minutes: number | null
  }

  export type ActivityDetailSumAggregateOutputType = {
    id: number | null
    activity_id: number | null
    duration_minutes: number | null
  }

  export type ActivityDetailMinAggregateOutputType = {
    id: number | null
    activity_id: number | null
    description: string | null
    duration_minutes: number | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityDetailMaxAggregateOutputType = {
    id: number | null
    activity_id: number | null
    description: string | null
    duration_minutes: number | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityDetailCountAggregateOutputType = {
    id: number
    activity_id: number
    description: number
    duration_minutes: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ActivityDetailAvgAggregateInputType = {
    id?: true
    activity_id?: true
    duration_minutes?: true
  }

  export type ActivityDetailSumAggregateInputType = {
    id?: true
    activity_id?: true
    duration_minutes?: true
  }

  export type ActivityDetailMinAggregateInputType = {
    id?: true
    activity_id?: true
    description?: true
    duration_minutes?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivityDetailMaxAggregateInputType = {
    id?: true
    activity_id?: true
    description?: true
    duration_minutes?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivityDetailCountAggregateInputType = {
    id?: true
    activity_id?: true
    description?: true
    duration_minutes?: true
    category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ActivityDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityDetail to aggregate.
     */
    where?: ActivityDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailOrderByWithRelationInput | ActivityDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityDetails
    **/
    _count?: true | ActivityDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityDetailMaxAggregateInputType
  }

  export type GetActivityDetailAggregateType<T extends ActivityDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityDetail[P]>
      : GetScalarType<T[P], AggregateActivityDetail[P]>
  }




  export type ActivityDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDetailWhereInput
    orderBy?: ActivityDetailOrderByWithAggregationInput | ActivityDetailOrderByWithAggregationInput[]
    by: ActivityDetailScalarFieldEnum[] | ActivityDetailScalarFieldEnum
    having?: ActivityDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityDetailCountAggregateInputType | true
    _avg?: ActivityDetailAvgAggregateInputType
    _sum?: ActivityDetailSumAggregateInputType
    _min?: ActivityDetailMinAggregateInputType
    _max?: ActivityDetailMaxAggregateInputType
  }

  export type ActivityDetailGroupByOutputType = {
    id: number
    activity_id: number
    description: string
    duration_minutes: number
    category: string
    created_at: Date
    updated_at: Date
    _count: ActivityDetailCountAggregateOutputType | null
    _avg: ActivityDetailAvgAggregateOutputType | null
    _sum: ActivityDetailSumAggregateOutputType | null
    _min: ActivityDetailMinAggregateOutputType | null
    _max: ActivityDetailMaxAggregateOutputType | null
  }

  type GetActivityDetailGroupByPayload<T extends ActivityDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityDetailGroupByOutputType[P]>
        }
      >
    >


  export type ActivityDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    description?: boolean
    duration_minutes?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDetail"]>

  export type ActivityDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    description?: boolean
    duration_minutes?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDetail"]>

  export type ActivityDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    description?: boolean
    duration_minutes?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDetail"]>

  export type ActivityDetailSelectScalar = {
    id?: boolean
    activity_id?: boolean
    description?: boolean
    duration_minutes?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ActivityDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activity_id" | "description" | "duration_minutes" | "category" | "created_at" | "updated_at", ExtArgs["result"]["activityDetail"]>
  export type ActivityDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type ActivityDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type ActivityDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $ActivityDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityDetail"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activity_id: number
      description: string
      duration_minutes: number
      category: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["activityDetail"]>
    composites: {}
  }

  type ActivityDetailGetPayload<S extends boolean | null | undefined | ActivityDetailDefaultArgs> = $Result.GetResult<Prisma.$ActivityDetailPayload, S>

  type ActivityDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityDetailCountAggregateInputType | true
    }

  export interface ActivityDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityDetail'], meta: { name: 'ActivityDetail' } }
    /**
     * Find zero or one ActivityDetail that matches the filter.
     * @param {ActivityDetailFindUniqueArgs} args - Arguments to find a ActivityDetail
     * @example
     * // Get one ActivityDetail
     * const activityDetail = await prisma.activityDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityDetailFindUniqueArgs>(args: SelectSubset<T, ActivityDetailFindUniqueArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityDetailFindUniqueOrThrowArgs} args - Arguments to find a ActivityDetail
     * @example
     * // Get one ActivityDetail
     * const activityDetail = await prisma.activityDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailFindFirstArgs} args - Arguments to find a ActivityDetail
     * @example
     * // Get one ActivityDetail
     * const activityDetail = await prisma.activityDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityDetailFindFirstArgs>(args?: SelectSubset<T, ActivityDetailFindFirstArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailFindFirstOrThrowArgs} args - Arguments to find a ActivityDetail
     * @example
     * // Get one ActivityDetail
     * const activityDetail = await prisma.activityDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityDetails
     * const activityDetails = await prisma.activityDetail.findMany()
     * 
     * // Get first 10 ActivityDetails
     * const activityDetails = await prisma.activityDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityDetailWithIdOnly = await prisma.activityDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityDetailFindManyArgs>(args?: SelectSubset<T, ActivityDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityDetail.
     * @param {ActivityDetailCreateArgs} args - Arguments to create a ActivityDetail.
     * @example
     * // Create one ActivityDetail
     * const ActivityDetail = await prisma.activityDetail.create({
     *   data: {
     *     // ... data to create a ActivityDetail
     *   }
     * })
     * 
     */
    create<T extends ActivityDetailCreateArgs>(args: SelectSubset<T, ActivityDetailCreateArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityDetails.
     * @param {ActivityDetailCreateManyArgs} args - Arguments to create many ActivityDetails.
     * @example
     * // Create many ActivityDetails
     * const activityDetail = await prisma.activityDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityDetailCreateManyArgs>(args?: SelectSubset<T, ActivityDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityDetails and returns the data saved in the database.
     * @param {ActivityDetailCreateManyAndReturnArgs} args - Arguments to create many ActivityDetails.
     * @example
     * // Create many ActivityDetails
     * const activityDetail = await prisma.activityDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityDetails and only return the `id`
     * const activityDetailWithIdOnly = await prisma.activityDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityDetail.
     * @param {ActivityDetailDeleteArgs} args - Arguments to delete one ActivityDetail.
     * @example
     * // Delete one ActivityDetail
     * const ActivityDetail = await prisma.activityDetail.delete({
     *   where: {
     *     // ... filter to delete one ActivityDetail
     *   }
     * })
     * 
     */
    delete<T extends ActivityDetailDeleteArgs>(args: SelectSubset<T, ActivityDetailDeleteArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityDetail.
     * @param {ActivityDetailUpdateArgs} args - Arguments to update one ActivityDetail.
     * @example
     * // Update one ActivityDetail
     * const activityDetail = await prisma.activityDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityDetailUpdateArgs>(args: SelectSubset<T, ActivityDetailUpdateArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityDetails.
     * @param {ActivityDetailDeleteManyArgs} args - Arguments to filter ActivityDetails to delete.
     * @example
     * // Delete a few ActivityDetails
     * const { count } = await prisma.activityDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDetailDeleteManyArgs>(args?: SelectSubset<T, ActivityDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityDetails
     * const activityDetail = await prisma.activityDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityDetailUpdateManyArgs>(args: SelectSubset<T, ActivityDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityDetails and returns the data updated in the database.
     * @param {ActivityDetailUpdateManyAndReturnArgs} args - Arguments to update many ActivityDetails.
     * @example
     * // Update many ActivityDetails
     * const activityDetail = await prisma.activityDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityDetails and only return the `id`
     * const activityDetailWithIdOnly = await prisma.activityDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityDetail.
     * @param {ActivityDetailUpsertArgs} args - Arguments to update or create a ActivityDetail.
     * @example
     * // Update or create a ActivityDetail
     * const activityDetail = await prisma.activityDetail.upsert({
     *   create: {
     *     // ... data to create a ActivityDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityDetail we want to update
     *   }
     * })
     */
    upsert<T extends ActivityDetailUpsertArgs>(args: SelectSubset<T, ActivityDetailUpsertArgs<ExtArgs>>): Prisma__ActivityDetailClient<$Result.GetResult<Prisma.$ActivityDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailCountArgs} args - Arguments to filter ActivityDetails to count.
     * @example
     * // Count the number of ActivityDetails
     * const count = await prisma.activityDetail.count({
     *   where: {
     *     // ... the filter for the ActivityDetails we want to count
     *   }
     * })
    **/
    count<T extends ActivityDetailCountArgs>(
      args?: Subset<T, ActivityDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityDetailAggregateArgs>(args: Subset<T, ActivityDetailAggregateArgs>): Prisma.PrismaPromise<GetActivityDetailAggregateType<T>>

    /**
     * Group by ActivityDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailGroupByArgs} args - Group by arguments.
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
      T extends ActivityDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityDetailGroupByArgs['orderBy'] }
        : { orderBy?: ActivityDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityDetail model
   */
  readonly fields: ActivityDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityDetail model
   */
  interface ActivityDetailFieldRefs {
    readonly id: FieldRef<"ActivityDetail", 'Int'>
    readonly activity_id: FieldRef<"ActivityDetail", 'Int'>
    readonly description: FieldRef<"ActivityDetail", 'String'>
    readonly duration_minutes: FieldRef<"ActivityDetail", 'Int'>
    readonly category: FieldRef<"ActivityDetail", 'String'>
    readonly created_at: FieldRef<"ActivityDetail", 'DateTime'>
    readonly updated_at: FieldRef<"ActivityDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityDetail findUnique
   */
  export type ActivityDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetail to fetch.
     */
    where: ActivityDetailWhereUniqueInput
  }

  /**
   * ActivityDetail findUniqueOrThrow
   */
  export type ActivityDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetail to fetch.
     */
    where: ActivityDetailWhereUniqueInput
  }

  /**
   * ActivityDetail findFirst
   */
  export type ActivityDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetail to fetch.
     */
    where?: ActivityDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailOrderByWithRelationInput | ActivityDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityDetails.
     */
    cursor?: ActivityDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDetails.
     */
    distinct?: ActivityDetailScalarFieldEnum | ActivityDetailScalarFieldEnum[]
  }

  /**
   * ActivityDetail findFirstOrThrow
   */
  export type ActivityDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetail to fetch.
     */
    where?: ActivityDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailOrderByWithRelationInput | ActivityDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityDetails.
     */
    cursor?: ActivityDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDetails.
     */
    distinct?: ActivityDetailScalarFieldEnum | ActivityDetailScalarFieldEnum[]
  }

  /**
   * ActivityDetail findMany
   */
  export type ActivityDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetails to fetch.
     */
    where?: ActivityDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailOrderByWithRelationInput | ActivityDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityDetails.
     */
    cursor?: ActivityDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    distinct?: ActivityDetailScalarFieldEnum | ActivityDetailScalarFieldEnum[]
  }

  /**
   * ActivityDetail create
   */
  export type ActivityDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityDetail.
     */
    data: XOR<ActivityDetailCreateInput, ActivityDetailUncheckedCreateInput>
  }

  /**
   * ActivityDetail createMany
   */
  export type ActivityDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityDetails.
     */
    data: ActivityDetailCreateManyInput | ActivityDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityDetail createManyAndReturn
   */
  export type ActivityDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityDetails.
     */
    data: ActivityDetailCreateManyInput | ActivityDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityDetail update
   */
  export type ActivityDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityDetail.
     */
    data: XOR<ActivityDetailUpdateInput, ActivityDetailUncheckedUpdateInput>
    /**
     * Choose, which ActivityDetail to update.
     */
    where: ActivityDetailWhereUniqueInput
  }

  /**
   * ActivityDetail updateMany
   */
  export type ActivityDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityDetails.
     */
    data: XOR<ActivityDetailUpdateManyMutationInput, ActivityDetailUncheckedUpdateManyInput>
    /**
     * Filter which ActivityDetails to update
     */
    where?: ActivityDetailWhereInput
    /**
     * Limit how many ActivityDetails to update.
     */
    limit?: number
  }

  /**
   * ActivityDetail updateManyAndReturn
   */
  export type ActivityDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * The data used to update ActivityDetails.
     */
    data: XOR<ActivityDetailUpdateManyMutationInput, ActivityDetailUncheckedUpdateManyInput>
    /**
     * Filter which ActivityDetails to update
     */
    where?: ActivityDetailWhereInput
    /**
     * Limit how many ActivityDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityDetail upsert
   */
  export type ActivityDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityDetail to update in case it exists.
     */
    where: ActivityDetailWhereUniqueInput
    /**
     * In case the ActivityDetail found by the `where` argument doesn't exist, create a new ActivityDetail with this data.
     */
    create: XOR<ActivityDetailCreateInput, ActivityDetailUncheckedCreateInput>
    /**
     * In case the ActivityDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityDetailUpdateInput, ActivityDetailUncheckedUpdateInput>
  }

  /**
   * ActivityDetail delete
   */
  export type ActivityDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
    /**
     * Filter which ActivityDetail to delete.
     */
    where: ActivityDetailWhereUniqueInput
  }

  /**
   * ActivityDetail deleteMany
   */
  export type ActivityDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityDetails to delete
     */
    where?: ActivityDetailWhereInput
    /**
     * Limit how many ActivityDetails to delete.
     */
    limit?: number
  }

  /**
   * ActivityDetail without action
   */
  export type ActivityDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetail
     */
    select?: ActivityDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDetail
     */
    omit?: ActivityDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyTarget
   */

  export type AggregateWeeklyTarget = {
    _count: WeeklyTargetCountAggregateOutputType | null
    _avg: WeeklyTargetAvgAggregateOutputType | null
    _sum: WeeklyTargetSumAggregateOutputType | null
    _min: WeeklyTargetMinAggregateOutputType | null
    _max: WeeklyTargetMaxAggregateOutputType | null
  }

  export type WeeklyTargetAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type WeeklyTargetSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type WeeklyTargetMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    target_start_date: Date | null
    target_end_date: Date | null
    actual_start_date: Date | null
    actual_end_date: Date | null
    status: $Enums.WeeklyTargetStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WeeklyTargetMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    target_start_date: Date | null
    target_end_date: Date | null
    actual_start_date: Date | null
    actual_end_date: Date | null
    status: $Enums.WeeklyTargetStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WeeklyTargetCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    target_start_date: number
    target_end_date: number
    actual_start_date: number
    actual_end_date: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WeeklyTargetAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type WeeklyTargetSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type WeeklyTargetMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    target_start_date?: true
    target_end_date?: true
    actual_start_date?: true
    actual_end_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type WeeklyTargetMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    target_start_date?: true
    target_end_date?: true
    actual_start_date?: true
    actual_end_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type WeeklyTargetCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    target_start_date?: true
    target_end_date?: true
    actual_start_date?: true
    actual_end_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WeeklyTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyTarget to aggregate.
     */
    where?: WeeklyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTargets to fetch.
     */
    orderBy?: WeeklyTargetOrderByWithRelationInput | WeeklyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyTargets
    **/
    _count?: true | WeeklyTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyTargetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyTargetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyTargetMaxAggregateInputType
  }

  export type GetWeeklyTargetAggregateType<T extends WeeklyTargetAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyTarget[P]>
      : GetScalarType<T[P], AggregateWeeklyTarget[P]>
  }




  export type WeeklyTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyTargetWhereInput
    orderBy?: WeeklyTargetOrderByWithAggregationInput | WeeklyTargetOrderByWithAggregationInput[]
    by: WeeklyTargetScalarFieldEnum[] | WeeklyTargetScalarFieldEnum
    having?: WeeklyTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyTargetCountAggregateInputType | true
    _avg?: WeeklyTargetAvgAggregateInputType
    _sum?: WeeklyTargetSumAggregateInputType
    _min?: WeeklyTargetMinAggregateInputType
    _max?: WeeklyTargetMaxAggregateInputType
  }

  export type WeeklyTargetGroupByOutputType = {
    id: number
    user_id: number
    title: string
    description: string
    target_start_date: Date
    target_end_date: Date
    actual_start_date: Date | null
    actual_end_date: Date | null
    status: $Enums.WeeklyTargetStatus
    created_at: Date
    updated_at: Date
    _count: WeeklyTargetCountAggregateOutputType | null
    _avg: WeeklyTargetAvgAggregateOutputType | null
    _sum: WeeklyTargetSumAggregateOutputType | null
    _min: WeeklyTargetMinAggregateOutputType | null
    _max: WeeklyTargetMaxAggregateOutputType | null
  }

  type GetWeeklyTargetGroupByPayload<T extends WeeklyTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyTargetGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyTargetGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    target_start_date?: boolean
    target_end_date?: boolean
    actual_start_date?: boolean
    actual_end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyTarget"]>

  export type WeeklyTargetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    target_start_date?: boolean
    target_end_date?: boolean
    actual_start_date?: boolean
    actual_end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyTarget"]>

  export type WeeklyTargetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    target_start_date?: boolean
    target_end_date?: boolean
    actual_start_date?: boolean
    actual_end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyTarget"]>

  export type WeeklyTargetSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    target_start_date?: boolean
    target_end_date?: boolean
    actual_start_date?: boolean
    actual_end_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WeeklyTargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "target_start_date" | "target_end_date" | "actual_start_date" | "actual_end_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["weeklyTarget"]>
  export type WeeklyTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyTargetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyTargetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyTarget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      description: string
      target_start_date: Date
      target_end_date: Date
      actual_start_date: Date | null
      actual_end_date: Date | null
      status: $Enums.WeeklyTargetStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["weeklyTarget"]>
    composites: {}
  }

  type WeeklyTargetGetPayload<S extends boolean | null | undefined | WeeklyTargetDefaultArgs> = $Result.GetResult<Prisma.$WeeklyTargetPayload, S>

  type WeeklyTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyTargetCountAggregateInputType | true
    }

  export interface WeeklyTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyTarget'], meta: { name: 'WeeklyTarget' } }
    /**
     * Find zero or one WeeklyTarget that matches the filter.
     * @param {WeeklyTargetFindUniqueArgs} args - Arguments to find a WeeklyTarget
     * @example
     * // Get one WeeklyTarget
     * const weeklyTarget = await prisma.weeklyTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyTargetFindUniqueArgs>(args: SelectSubset<T, WeeklyTargetFindUniqueArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyTarget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyTargetFindUniqueOrThrowArgs} args - Arguments to find a WeeklyTarget
     * @example
     * // Get one WeeklyTarget
     * const weeklyTarget = await prisma.weeklyTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyTargetFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetFindFirstArgs} args - Arguments to find a WeeklyTarget
     * @example
     * // Get one WeeklyTarget
     * const weeklyTarget = await prisma.weeklyTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyTargetFindFirstArgs>(args?: SelectSubset<T, WeeklyTargetFindFirstArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetFindFirstOrThrowArgs} args - Arguments to find a WeeklyTarget
     * @example
     * // Get one WeeklyTarget
     * const weeklyTarget = await prisma.weeklyTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyTargetFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyTargets
     * const weeklyTargets = await prisma.weeklyTarget.findMany()
     * 
     * // Get first 10 WeeklyTargets
     * const weeklyTargets = await prisma.weeklyTarget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyTargetWithIdOnly = await prisma.weeklyTarget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyTargetFindManyArgs>(args?: SelectSubset<T, WeeklyTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyTarget.
     * @param {WeeklyTargetCreateArgs} args - Arguments to create a WeeklyTarget.
     * @example
     * // Create one WeeklyTarget
     * const WeeklyTarget = await prisma.weeklyTarget.create({
     *   data: {
     *     // ... data to create a WeeklyTarget
     *   }
     * })
     * 
     */
    create<T extends WeeklyTargetCreateArgs>(args: SelectSubset<T, WeeklyTargetCreateArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyTargets.
     * @param {WeeklyTargetCreateManyArgs} args - Arguments to create many WeeklyTargets.
     * @example
     * // Create many WeeklyTargets
     * const weeklyTarget = await prisma.weeklyTarget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyTargetCreateManyArgs>(args?: SelectSubset<T, WeeklyTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyTargets and returns the data saved in the database.
     * @param {WeeklyTargetCreateManyAndReturnArgs} args - Arguments to create many WeeklyTargets.
     * @example
     * // Create many WeeklyTargets
     * const weeklyTarget = await prisma.weeklyTarget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyTargets and only return the `id`
     * const weeklyTargetWithIdOnly = await prisma.weeklyTarget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyTargetCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyTargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyTarget.
     * @param {WeeklyTargetDeleteArgs} args - Arguments to delete one WeeklyTarget.
     * @example
     * // Delete one WeeklyTarget
     * const WeeklyTarget = await prisma.weeklyTarget.delete({
     *   where: {
     *     // ... filter to delete one WeeklyTarget
     *   }
     * })
     * 
     */
    delete<T extends WeeklyTargetDeleteArgs>(args: SelectSubset<T, WeeklyTargetDeleteArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyTarget.
     * @param {WeeklyTargetUpdateArgs} args - Arguments to update one WeeklyTarget.
     * @example
     * // Update one WeeklyTarget
     * const weeklyTarget = await prisma.weeklyTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyTargetUpdateArgs>(args: SelectSubset<T, WeeklyTargetUpdateArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyTargets.
     * @param {WeeklyTargetDeleteManyArgs} args - Arguments to filter WeeklyTargets to delete.
     * @example
     * // Delete a few WeeklyTargets
     * const { count } = await prisma.weeklyTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyTargetDeleteManyArgs>(args?: SelectSubset<T, WeeklyTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyTargets
     * const weeklyTarget = await prisma.weeklyTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyTargetUpdateManyArgs>(args: SelectSubset<T, WeeklyTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyTargets and returns the data updated in the database.
     * @param {WeeklyTargetUpdateManyAndReturnArgs} args - Arguments to update many WeeklyTargets.
     * @example
     * // Update many WeeklyTargets
     * const weeklyTarget = await prisma.weeklyTarget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyTargets and only return the `id`
     * const weeklyTargetWithIdOnly = await prisma.weeklyTarget.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeeklyTargetUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyTargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyTarget.
     * @param {WeeklyTargetUpsertArgs} args - Arguments to update or create a WeeklyTarget.
     * @example
     * // Update or create a WeeklyTarget
     * const weeklyTarget = await prisma.weeklyTarget.upsert({
     *   create: {
     *     // ... data to create a WeeklyTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyTarget we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyTargetUpsertArgs>(args: SelectSubset<T, WeeklyTargetUpsertArgs<ExtArgs>>): Prisma__WeeklyTargetClient<$Result.GetResult<Prisma.$WeeklyTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetCountArgs} args - Arguments to filter WeeklyTargets to count.
     * @example
     * // Count the number of WeeklyTargets
     * const count = await prisma.weeklyTarget.count({
     *   where: {
     *     // ... the filter for the WeeklyTargets we want to count
     *   }
     * })
    **/
    count<T extends WeeklyTargetCountArgs>(
      args?: Subset<T, WeeklyTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyTargetAggregateArgs>(args: Subset<T, WeeklyTargetAggregateArgs>): Prisma.PrismaPromise<GetWeeklyTargetAggregateType<T>>

    /**
     * Group by WeeklyTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTargetGroupByArgs} args - Group by arguments.
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
      T extends WeeklyTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyTargetGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyTargetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyTarget model
   */
  readonly fields: WeeklyTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeeklyTarget model
   */
  interface WeeklyTargetFieldRefs {
    readonly id: FieldRef<"WeeklyTarget", 'Int'>
    readonly user_id: FieldRef<"WeeklyTarget", 'Int'>
    readonly title: FieldRef<"WeeklyTarget", 'String'>
    readonly description: FieldRef<"WeeklyTarget", 'String'>
    readonly target_start_date: FieldRef<"WeeklyTarget", 'DateTime'>
    readonly target_end_date: FieldRef<"WeeklyTarget", 'DateTime'>
    readonly actual_start_date: FieldRef<"WeeklyTarget", 'DateTime'>
    readonly actual_end_date: FieldRef<"WeeklyTarget", 'DateTime'>
    readonly status: FieldRef<"WeeklyTarget", 'WeeklyTargetStatus'>
    readonly created_at: FieldRef<"WeeklyTarget", 'DateTime'>
    readonly updated_at: FieldRef<"WeeklyTarget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyTarget findUnique
   */
  export type WeeklyTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTarget to fetch.
     */
    where: WeeklyTargetWhereUniqueInput
  }

  /**
   * WeeklyTarget findUniqueOrThrow
   */
  export type WeeklyTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTarget to fetch.
     */
    where: WeeklyTargetWhereUniqueInput
  }

  /**
   * WeeklyTarget findFirst
   */
  export type WeeklyTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTarget to fetch.
     */
    where?: WeeklyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTargets to fetch.
     */
    orderBy?: WeeklyTargetOrderByWithRelationInput | WeeklyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyTargets.
     */
    cursor?: WeeklyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyTargets.
     */
    distinct?: WeeklyTargetScalarFieldEnum | WeeklyTargetScalarFieldEnum[]
  }

  /**
   * WeeklyTarget findFirstOrThrow
   */
  export type WeeklyTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTarget to fetch.
     */
    where?: WeeklyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTargets to fetch.
     */
    orderBy?: WeeklyTargetOrderByWithRelationInput | WeeklyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyTargets.
     */
    cursor?: WeeklyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyTargets.
     */
    distinct?: WeeklyTargetScalarFieldEnum | WeeklyTargetScalarFieldEnum[]
  }

  /**
   * WeeklyTarget findMany
   */
  export type WeeklyTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTargets to fetch.
     */
    where?: WeeklyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTargets to fetch.
     */
    orderBy?: WeeklyTargetOrderByWithRelationInput | WeeklyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyTargets.
     */
    cursor?: WeeklyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTargets.
     */
    skip?: number
    distinct?: WeeklyTargetScalarFieldEnum | WeeklyTargetScalarFieldEnum[]
  }

  /**
   * WeeklyTarget create
   */
  export type WeeklyTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyTarget.
     */
    data: XOR<WeeklyTargetCreateInput, WeeklyTargetUncheckedCreateInput>
  }

  /**
   * WeeklyTarget createMany
   */
  export type WeeklyTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyTargets.
     */
    data: WeeklyTargetCreateManyInput | WeeklyTargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyTarget createManyAndReturn
   */
  export type WeeklyTargetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyTargets.
     */
    data: WeeklyTargetCreateManyInput | WeeklyTargetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyTarget update
   */
  export type WeeklyTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyTarget.
     */
    data: XOR<WeeklyTargetUpdateInput, WeeklyTargetUncheckedUpdateInput>
    /**
     * Choose, which WeeklyTarget to update.
     */
    where: WeeklyTargetWhereUniqueInput
  }

  /**
   * WeeklyTarget updateMany
   */
  export type WeeklyTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyTargets.
     */
    data: XOR<WeeklyTargetUpdateManyMutationInput, WeeklyTargetUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyTargets to update
     */
    where?: WeeklyTargetWhereInput
    /**
     * Limit how many WeeklyTargets to update.
     */
    limit?: number
  }

  /**
   * WeeklyTarget updateManyAndReturn
   */
  export type WeeklyTargetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyTargets.
     */
    data: XOR<WeeklyTargetUpdateManyMutationInput, WeeklyTargetUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyTargets to update
     */
    where?: WeeklyTargetWhereInput
    /**
     * Limit how many WeeklyTargets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyTarget upsert
   */
  export type WeeklyTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyTarget to update in case it exists.
     */
    where: WeeklyTargetWhereUniqueInput
    /**
     * In case the WeeklyTarget found by the `where` argument doesn't exist, create a new WeeklyTarget with this data.
     */
    create: XOR<WeeklyTargetCreateInput, WeeklyTargetUncheckedCreateInput>
    /**
     * In case the WeeklyTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyTargetUpdateInput, WeeklyTargetUncheckedUpdateInput>
  }

  /**
   * WeeklyTarget delete
   */
  export type WeeklyTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
    /**
     * Filter which WeeklyTarget to delete.
     */
    where: WeeklyTargetWhereUniqueInput
  }

  /**
   * WeeklyTarget deleteMany
   */
  export type WeeklyTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyTargets to delete
     */
    where?: WeeklyTargetWhereInput
    /**
     * Limit how many WeeklyTargets to delete.
     */
    limit?: number
  }

  /**
   * WeeklyTarget without action
   */
  export type WeeklyTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTarget
     */
    select?: WeeklyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTarget
     */
    omit?: WeeklyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTargetInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipAvgAggregateOutputType = {
    id: number | null
    sender_id: number | null
    receiver_id: number | null
  }

  export type FriendshipSumAggregateOutputType = {
    id: number | null
    sender_id: number | null
    receiver_id: number | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: number | null
    sender_id: number | null
    receiver_id: number | null
    status: $Enums.FriendshipStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: number | null
    sender_id: number | null
    receiver_id: number | null
    status: $Enums.FriendshipStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    sender_id: number
    receiver_id: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FriendshipAvgAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
  }

  export type FriendshipSumAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
  }

  export type FriendshipMinAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    sender_id?: true
    receiver_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _avg?: FriendshipAvgAggregateInputType
    _sum?: FriendshipSumAggregateInputType
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: number
    sender_id: number
    receiver_id: number
    status: $Enums.FriendshipStatus
    created_at: Date
    updated_at: Date
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender_id" | "receiver_id" | "status" | "created_at" | "updated_at", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender_id: number
      receiver_id: number
      status: $Enums.FriendshipStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'Int'>
    readonly sender_id: FieldRef<"Friendship", 'Int'>
    readonly receiver_id: FieldRef<"Friendship", 'Int'>
    readonly status: FieldRef<"Friendship", 'FriendshipStatus'>
    readonly created_at: FieldRef<"Friendship", 'DateTime'>
    readonly updated_at: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
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
    display_name: 'display_name',
    profile_image: 'profile_image',
    target: 'target',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    activity_date: 'activity_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const ActivityDetailScalarFieldEnum: {
    id: 'id',
    activity_id: 'activity_id',
    description: 'description',
    duration_minutes: 'duration_minutes',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ActivityDetailScalarFieldEnum = (typeof ActivityDetailScalarFieldEnum)[keyof typeof ActivityDetailScalarFieldEnum]


  export const WeeklyTargetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    target_start_date: 'target_start_date',
    target_end_date: 'target_end_date',
    actual_start_date: 'actual_start_date',
    actual_end_date: 'actual_end_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WeeklyTargetScalarFieldEnum = (typeof WeeklyTargetScalarFieldEnum)[keyof typeof WeeklyTargetScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'WeeklyTargetStatus'
   */
  export type EnumWeeklyTargetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeeklyTargetStatus'>
    


  /**
   * Reference to a field of type 'WeeklyTargetStatus[]'
   */
  export type ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeeklyTargetStatus[]'>
    


  /**
   * Reference to a field of type 'FriendshipStatus'
   */
  export type EnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus'>
    


  /**
   * Reference to a field of type 'FriendshipStatus[]'
   */
  export type ListEnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus[]'>
    


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
    id?: IntFilter<"User"> | number
    display_name?: StringFilter<"User"> | string
    profile_image?: StringFilter<"User"> | string
    target?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    activities?: ActivityListRelationFilter
    weekly_targets?: WeeklyTargetListRelationFilter
    sent_friendships?: FriendshipListRelationFilter
    received_friendships?: FriendshipListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    display_name?: SortOrder
    profile_image?: SortOrder
    target?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
    weekly_targets?: WeeklyTargetOrderByRelationAggregateInput
    sent_friendships?: FriendshipOrderByRelationAggregateInput
    received_friendships?: FriendshipOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    display_name?: StringFilter<"User"> | string
    profile_image?: StringFilter<"User"> | string
    target?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    activities?: ActivityListRelationFilter
    weekly_targets?: WeeklyTargetListRelationFilter
    sent_friendships?: FriendshipListRelationFilter
    received_friendships?: FriendshipListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    display_name?: SortOrder
    profile_image?: SortOrder
    target?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    display_name?: StringWithAggregatesFilter<"User"> | string
    profile_image?: StringWithAggregatesFilter<"User"> | string
    target?: StringWithAggregatesFilter<"User"> | string
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    user_id?: IntFilter<"Activity"> | number
    activity_date?: DateTimeFilter<"Activity"> | Date | string
    created_at?: DateTimeFilter<"Activity"> | Date | string
    updated_at?: DateTimeFilter<"Activity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activity_details?: ActivityDetailListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    activity_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    activity_details?: ActivityDetailOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    user_id?: IntFilter<"Activity"> | number
    activity_date?: DateTimeFilter<"Activity"> | Date | string
    created_at?: DateTimeFilter<"Activity"> | Date | string
    updated_at?: DateTimeFilter<"Activity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activity_details?: ActivityDetailListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    activity_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    user_id?: IntWithAggregatesFilter<"Activity"> | number
    activity_date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type ActivityDetailWhereInput = {
    AND?: ActivityDetailWhereInput | ActivityDetailWhereInput[]
    OR?: ActivityDetailWhereInput[]
    NOT?: ActivityDetailWhereInput | ActivityDetailWhereInput[]
    id?: IntFilter<"ActivityDetail"> | number
    activity_id?: IntFilter<"ActivityDetail"> | number
    description?: StringFilter<"ActivityDetail"> | string
    duration_minutes?: IntFilter<"ActivityDetail"> | number
    category?: StringFilter<"ActivityDetail"> | string
    created_at?: DateTimeFilter<"ActivityDetail"> | Date | string
    updated_at?: DateTimeFilter<"ActivityDetail"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type ActivityDetailOrderByWithRelationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    activity?: ActivityOrderByWithRelationInput
  }

  export type ActivityDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityDetailWhereInput | ActivityDetailWhereInput[]
    OR?: ActivityDetailWhereInput[]
    NOT?: ActivityDetailWhereInput | ActivityDetailWhereInput[]
    activity_id?: IntFilter<"ActivityDetail"> | number
    description?: StringFilter<"ActivityDetail"> | string
    duration_minutes?: IntFilter<"ActivityDetail"> | number
    category?: StringFilter<"ActivityDetail"> | string
    created_at?: DateTimeFilter<"ActivityDetail"> | Date | string
    updated_at?: DateTimeFilter<"ActivityDetail"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type ActivityDetailOrderByWithAggregationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ActivityDetailCountOrderByAggregateInput
    _avg?: ActivityDetailAvgOrderByAggregateInput
    _max?: ActivityDetailMaxOrderByAggregateInput
    _min?: ActivityDetailMinOrderByAggregateInput
    _sum?: ActivityDetailSumOrderByAggregateInput
  }

  export type ActivityDetailScalarWhereWithAggregatesInput = {
    AND?: ActivityDetailScalarWhereWithAggregatesInput | ActivityDetailScalarWhereWithAggregatesInput[]
    OR?: ActivityDetailScalarWhereWithAggregatesInput[]
    NOT?: ActivityDetailScalarWhereWithAggregatesInput | ActivityDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityDetail"> | number
    activity_id?: IntWithAggregatesFilter<"ActivityDetail"> | number
    description?: StringWithAggregatesFilter<"ActivityDetail"> | string
    duration_minutes?: IntWithAggregatesFilter<"ActivityDetail"> | number
    category?: StringWithAggregatesFilter<"ActivityDetail"> | string
    created_at?: DateTimeWithAggregatesFilter<"ActivityDetail"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ActivityDetail"> | Date | string
  }

  export type WeeklyTargetWhereInput = {
    AND?: WeeklyTargetWhereInput | WeeklyTargetWhereInput[]
    OR?: WeeklyTargetWhereInput[]
    NOT?: WeeklyTargetWhereInput | WeeklyTargetWhereInput[]
    id?: IntFilter<"WeeklyTarget"> | number
    user_id?: IntFilter<"WeeklyTarget"> | number
    title?: StringFilter<"WeeklyTarget"> | string
    description?: StringFilter<"WeeklyTarget"> | string
    target_start_date?: DateTimeFilter<"WeeklyTarget"> | Date | string
    target_end_date?: DateTimeFilter<"WeeklyTarget"> | Date | string
    actual_start_date?: DateTimeNullableFilter<"WeeklyTarget"> | Date | string | null
    actual_end_date?: DateTimeNullableFilter<"WeeklyTarget"> | Date | string | null
    status?: EnumWeeklyTargetStatusFilter<"WeeklyTarget"> | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFilter<"WeeklyTarget"> | Date | string
    updated_at?: DateTimeFilter<"WeeklyTarget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklyTargetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    target_start_date?: SortOrder
    target_end_date?: SortOrder
    actual_start_date?: SortOrderInput | SortOrder
    actual_end_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklyTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeeklyTargetWhereInput | WeeklyTargetWhereInput[]
    OR?: WeeklyTargetWhereInput[]
    NOT?: WeeklyTargetWhereInput | WeeklyTargetWhereInput[]
    user_id?: IntFilter<"WeeklyTarget"> | number
    title?: StringFilter<"WeeklyTarget"> | string
    description?: StringFilter<"WeeklyTarget"> | string
    target_start_date?: DateTimeFilter<"WeeklyTarget"> | Date | string
    target_end_date?: DateTimeFilter<"WeeklyTarget"> | Date | string
    actual_start_date?: DateTimeNullableFilter<"WeeklyTarget"> | Date | string | null
    actual_end_date?: DateTimeNullableFilter<"WeeklyTarget"> | Date | string | null
    status?: EnumWeeklyTargetStatusFilter<"WeeklyTarget"> | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFilter<"WeeklyTarget"> | Date | string
    updated_at?: DateTimeFilter<"WeeklyTarget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WeeklyTargetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    target_start_date?: SortOrder
    target_end_date?: SortOrder
    actual_start_date?: SortOrderInput | SortOrder
    actual_end_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WeeklyTargetCountOrderByAggregateInput
    _avg?: WeeklyTargetAvgOrderByAggregateInput
    _max?: WeeklyTargetMaxOrderByAggregateInput
    _min?: WeeklyTargetMinOrderByAggregateInput
    _sum?: WeeklyTargetSumOrderByAggregateInput
  }

  export type WeeklyTargetScalarWhereWithAggregatesInput = {
    AND?: WeeklyTargetScalarWhereWithAggregatesInput | WeeklyTargetScalarWhereWithAggregatesInput[]
    OR?: WeeklyTargetScalarWhereWithAggregatesInput[]
    NOT?: WeeklyTargetScalarWhereWithAggregatesInput | WeeklyTargetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklyTarget"> | number
    user_id?: IntWithAggregatesFilter<"WeeklyTarget"> | number
    title?: StringWithAggregatesFilter<"WeeklyTarget"> | string
    description?: StringWithAggregatesFilter<"WeeklyTarget"> | string
    target_start_date?: DateTimeWithAggregatesFilter<"WeeklyTarget"> | Date | string
    target_end_date?: DateTimeWithAggregatesFilter<"WeeklyTarget"> | Date | string
    actual_start_date?: DateTimeNullableWithAggregatesFilter<"WeeklyTarget"> | Date | string | null
    actual_end_date?: DateTimeNullableWithAggregatesFilter<"WeeklyTarget"> | Date | string | null
    status?: EnumWeeklyTargetStatusWithAggregatesFilter<"WeeklyTarget"> | $Enums.WeeklyTargetStatus
    created_at?: DateTimeWithAggregatesFilter<"WeeklyTarget"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WeeklyTarget"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: IntFilter<"Friendship"> | number
    sender_id?: IntFilter<"Friendship"> | number
    receiver_id?: IntFilter<"Friendship"> | number
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    created_at?: DateTimeFilter<"Friendship"> | Date | string
    updated_at?: DateTimeFilter<"Friendship"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sender_id_receiver_id?: FriendshipSender_idReceiver_idCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    sender_id?: IntFilter<"Friendship"> | number
    receiver_id?: IntFilter<"Friendship"> | number
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    created_at?: DateTimeFilter<"Friendship"> | Date | string
    updated_at?: DateTimeFilter<"Friendship"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sender_id_receiver_id">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _avg?: FriendshipAvgOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
    _sum?: FriendshipSumOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friendship"> | number
    sender_id?: IntWithAggregatesFilter<"Friendship"> | number
    receiver_id?: IntWithAggregatesFilter<"Friendship"> | number
    status?: EnumFriendshipStatusWithAggregatesFilter<"Friendship"> | $Enums.FriendshipStatus
    created_at?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type UserCreateInput = {
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityCreateNestedManyWithoutUserInput
    weekly_targets?: WeeklyTargetCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipCreateNestedManyWithoutSenderInput
    received_friendships?: FriendshipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    weekly_targets?: WeeklyTargetUncheckedCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipUncheckedCreateNestedManyWithoutSenderInput
    received_friendships?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutUserNestedInput
    weekly_targets?: WeeklyTargetUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUpdateManyWithoutSenderNestedInput
    received_friendships?: FriendshipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    weekly_targets?: WeeklyTargetUncheckedUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUncheckedUpdateManyWithoutSenderNestedInput
    received_friendships?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
    activity_details?: ActivityDetailCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    user_id: number
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    activity_details?: ActivityDetailUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    activity_details?: ActivityDetailUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activity_details?: ActivityDetailUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: number
    user_id: number
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailCreateInput = {
    description: string
    duration_minutes: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
    activity: ActivityCreateNestedOneWithoutActivity_detailsInput
  }

  export type ActivityDetailUncheckedCreateInput = {
    id?: number
    activity_id: number
    description: string
    duration_minutes: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityDetailUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutActivity_detailsNestedInput
  }

  export type ActivityDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailCreateManyInput = {
    id?: number
    activity_id: number
    description: string
    duration_minutes: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityDetailUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTargetCreateInput = {
    title: string
    description: string
    target_start_date: Date | string
    target_end_date: Date | string
    actual_start_date?: Date | string | null
    actual_end_date?: Date | string | null
    status?: $Enums.WeeklyTargetStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWeekly_targetsInput
  }

  export type WeeklyTargetUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    description: string
    target_start_date: Date | string
    target_end_date: Date | string
    actual_start_date?: Date | string | null
    actual_end_date?: Date | string | null
    status?: $Enums.WeeklyTargetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WeeklyTargetUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWeekly_targetsNestedInput
  }

  export type WeeklyTargetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTargetCreateManyInput = {
    id?: number
    user_id: number
    title: string
    description: string
    target_start_date: Date | string
    target_end_date: Date | string
    actual_start_date?: Date | string | null
    actual_end_date?: Date | string | null
    status?: $Enums.WeeklyTargetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WeeklyTargetUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTargetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_friendshipsInput
    receiver: UserCreateNestedOneWithoutReceived_friendshipsInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: number
    sender_id: number
    receiver_id: number
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FriendshipUpdateInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_friendshipsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceived_friendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: number
    sender_id: number
    receiver_id: number
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type WeeklyTargetListRelationFilter = {
    every?: WeeklyTargetWhereInput
    some?: WeeklyTargetWhereInput
    none?: WeeklyTargetWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyTargetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    profile_image?: SortOrder
    target?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    profile_image?: SortOrder
    target?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    display_name?: SortOrder
    profile_image?: SortOrder
    target?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActivityDetailListRelationFilter = {
    every?: ActivityDetailWhereInput
    some?: ActivityDetailWhereInput
    none?: ActivityDetailWhereInput
  }

  export type ActivityDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    activity_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    activity_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    activity_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type ActivityDetailCountOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    duration_minutes?: SortOrder
  }

  export type ActivityDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityDetailMinOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityDetailSumOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    duration_minutes?: SortOrder
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

  export type EnumWeeklyTargetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyTargetStatus | EnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyTargetStatusFilter<$PrismaModel> | $Enums.WeeklyTargetStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WeeklyTargetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    target_start_date?: SortOrder
    target_end_date?: SortOrder
    actual_start_date?: SortOrder
    actual_end_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WeeklyTargetAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type WeeklyTargetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    target_start_date?: SortOrder
    target_end_date?: SortOrder
    actual_start_date?: SortOrder
    actual_end_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WeeklyTargetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    target_start_date?: SortOrder
    target_end_date?: SortOrder
    actual_start_date?: SortOrder
    actual_end_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WeeklyTargetSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type EnumWeeklyTargetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyTargetStatus | EnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyTargetStatusWithAggregatesFilter<$PrismaModel> | $Enums.WeeklyTargetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeeklyTargetStatusFilter<$PrismaModel>
    _max?: NestedEnumWeeklyTargetStatusFilter<$PrismaModel>
  }

  export type EnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type FriendshipSender_idReceiver_idCompoundUniqueInput = {
    sender_id: number
    receiver_id: number
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FriendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FriendshipSumOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
  }

  export type EnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type WeeklyTargetCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyTargetCreateWithoutUserInput, WeeklyTargetUncheckedCreateWithoutUserInput> | WeeklyTargetCreateWithoutUserInput[] | WeeklyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyTargetCreateOrConnectWithoutUserInput | WeeklyTargetCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyTargetCreateManyUserInputEnvelope
    connect?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutSenderInput = {
    create?: XOR<FriendshipCreateWithoutSenderInput, FriendshipUncheckedCreateWithoutSenderInput> | FriendshipCreateWithoutSenderInput[] | FriendshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutSenderInput | FriendshipCreateOrConnectWithoutSenderInput[]
    createMany?: FriendshipCreateManySenderInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type WeeklyTargetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyTargetCreateWithoutUserInput, WeeklyTargetUncheckedCreateWithoutUserInput> | WeeklyTargetCreateWithoutUserInput[] | WeeklyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyTargetCreateOrConnectWithoutUserInput | WeeklyTargetCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyTargetCreateManyUserInputEnvelope
    connect?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<FriendshipCreateWithoutSenderInput, FriendshipUncheckedCreateWithoutSenderInput> | FriendshipCreateWithoutSenderInput[] | FriendshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutSenderInput | FriendshipCreateOrConnectWithoutSenderInput[]
    createMany?: FriendshipCreateManySenderInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
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

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type WeeklyTargetUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyTargetCreateWithoutUserInput, WeeklyTargetUncheckedCreateWithoutUserInput> | WeeklyTargetCreateWithoutUserInput[] | WeeklyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyTargetCreateOrConnectWithoutUserInput | WeeklyTargetCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyTargetUpsertWithWhereUniqueWithoutUserInput | WeeklyTargetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyTargetCreateManyUserInputEnvelope
    set?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    disconnect?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    delete?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    connect?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    update?: WeeklyTargetUpdateWithWhereUniqueWithoutUserInput | WeeklyTargetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyTargetUpdateManyWithWhereWithoutUserInput | WeeklyTargetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyTargetScalarWhereInput | WeeklyTargetScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutSenderNestedInput = {
    create?: XOR<FriendshipCreateWithoutSenderInput, FriendshipUncheckedCreateWithoutSenderInput> | FriendshipCreateWithoutSenderInput[] | FriendshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutSenderInput | FriendshipCreateOrConnectWithoutSenderInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutSenderInput | FriendshipUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: FriendshipCreateManySenderInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutSenderInput | FriendshipUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutSenderInput | FriendshipUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutReceiverInput | FriendshipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutReceiverInput | FriendshipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutReceiverInput | FriendshipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type WeeklyTargetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyTargetCreateWithoutUserInput, WeeklyTargetUncheckedCreateWithoutUserInput> | WeeklyTargetCreateWithoutUserInput[] | WeeklyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyTargetCreateOrConnectWithoutUserInput | WeeklyTargetCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyTargetUpsertWithWhereUniqueWithoutUserInput | WeeklyTargetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyTargetCreateManyUserInputEnvelope
    set?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    disconnect?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    delete?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    connect?: WeeklyTargetWhereUniqueInput | WeeklyTargetWhereUniqueInput[]
    update?: WeeklyTargetUpdateWithWhereUniqueWithoutUserInput | WeeklyTargetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyTargetUpdateManyWithWhereWithoutUserInput | WeeklyTargetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyTargetScalarWhereInput | WeeklyTargetScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<FriendshipCreateWithoutSenderInput, FriendshipUncheckedCreateWithoutSenderInput> | FriendshipCreateWithoutSenderInput[] | FriendshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutSenderInput | FriendshipCreateOrConnectWithoutSenderInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutSenderInput | FriendshipUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: FriendshipCreateManySenderInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutSenderInput | FriendshipUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutSenderInput | FriendshipUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput> | FriendshipCreateWithoutReceiverInput[] | FriendshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutReceiverInput | FriendshipCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutReceiverInput | FriendshipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendshipCreateManyReceiverInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutReceiverInput | FriendshipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutReceiverInput | FriendshipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityDetailCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDetailCreateWithoutActivityInput, ActivityDetailUncheckedCreateWithoutActivityInput> | ActivityDetailCreateWithoutActivityInput[] | ActivityDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailCreateOrConnectWithoutActivityInput | ActivityDetailCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDetailCreateManyActivityInputEnvelope
    connect?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
  }

  export type ActivityDetailUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDetailCreateWithoutActivityInput, ActivityDetailUncheckedCreateWithoutActivityInput> | ActivityDetailCreateWithoutActivityInput[] | ActivityDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailCreateOrConnectWithoutActivityInput | ActivityDetailCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDetailCreateManyActivityInputEnvelope
    connect?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type ActivityDetailUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDetailCreateWithoutActivityInput, ActivityDetailUncheckedCreateWithoutActivityInput> | ActivityDetailCreateWithoutActivityInput[] | ActivityDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailCreateOrConnectWithoutActivityInput | ActivityDetailCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDetailUpsertWithWhereUniqueWithoutActivityInput | ActivityDetailUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDetailCreateManyActivityInputEnvelope
    set?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    disconnect?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    delete?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    connect?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    update?: ActivityDetailUpdateWithWhereUniqueWithoutActivityInput | ActivityDetailUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDetailUpdateManyWithWhereWithoutActivityInput | ActivityDetailUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDetailScalarWhereInput | ActivityDetailScalarWhereInput[]
  }

  export type ActivityDetailUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDetailCreateWithoutActivityInput, ActivityDetailUncheckedCreateWithoutActivityInput> | ActivityDetailCreateWithoutActivityInput[] | ActivityDetailUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailCreateOrConnectWithoutActivityInput | ActivityDetailCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDetailUpsertWithWhereUniqueWithoutActivityInput | ActivityDetailUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDetailCreateManyActivityInputEnvelope
    set?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    disconnect?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    delete?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    connect?: ActivityDetailWhereUniqueInput | ActivityDetailWhereUniqueInput[]
    update?: ActivityDetailUpdateWithWhereUniqueWithoutActivityInput | ActivityDetailUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDetailUpdateManyWithWhereWithoutActivityInput | ActivityDetailUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDetailScalarWhereInput | ActivityDetailScalarWhereInput[]
  }

  export type ActivityCreateNestedOneWithoutActivity_detailsInput = {
    create?: XOR<ActivityCreateWithoutActivity_detailsInput, ActivityUncheckedCreateWithoutActivity_detailsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivity_detailsInput
    connect?: ActivityWhereUniqueInput
  }

  export type ActivityUpdateOneRequiredWithoutActivity_detailsNestedInput = {
    create?: XOR<ActivityCreateWithoutActivity_detailsInput, ActivityUncheckedCreateWithoutActivity_detailsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivity_detailsInput
    upsert?: ActivityUpsertWithoutActivity_detailsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutActivity_detailsInput, ActivityUpdateWithoutActivity_detailsInput>, ActivityUncheckedUpdateWithoutActivity_detailsInput>
  }

  export type UserCreateNestedOneWithoutWeekly_targetsInput = {
    create?: XOR<UserCreateWithoutWeekly_targetsInput, UserUncheckedCreateWithoutWeekly_targetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeekly_targetsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumWeeklyTargetStatusFieldUpdateOperationsInput = {
    set?: $Enums.WeeklyTargetStatus
  }

  export type UserUpdateOneRequiredWithoutWeekly_targetsNestedInput = {
    create?: XOR<UserCreateWithoutWeekly_targetsInput, UserUncheckedCreateWithoutWeekly_targetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeekly_targetsInput
    upsert?: UserUpsertWithoutWeekly_targetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeekly_targetsInput, UserUpdateWithoutWeekly_targetsInput>, UserUncheckedUpdateWithoutWeekly_targetsInput>
  }

  export type UserCreateNestedOneWithoutSent_friendshipsInput = {
    create?: XOR<UserCreateWithoutSent_friendshipsInput, UserUncheckedCreateWithoutSent_friendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSent_friendshipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceived_friendshipsInput = {
    create?: XOR<UserCreateWithoutReceived_friendshipsInput, UserUncheckedCreateWithoutReceived_friendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceived_friendshipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFriendshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendshipStatus
  }

  export type UserUpdateOneRequiredWithoutSent_friendshipsNestedInput = {
    create?: XOR<UserCreateWithoutSent_friendshipsInput, UserUncheckedCreateWithoutSent_friendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSent_friendshipsInput
    upsert?: UserUpsertWithoutSent_friendshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSent_friendshipsInput, UserUpdateWithoutSent_friendshipsInput>, UserUncheckedUpdateWithoutSent_friendshipsInput>
  }

  export type UserUpdateOneRequiredWithoutReceived_friendshipsNestedInput = {
    create?: XOR<UserCreateWithoutReceived_friendshipsInput, UserUncheckedCreateWithoutReceived_friendshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceived_friendshipsInput
    upsert?: UserUpsertWithoutReceived_friendshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceived_friendshipsInput, UserUpdateWithoutReceived_friendshipsInput>, UserUncheckedUpdateWithoutReceived_friendshipsInput>
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

  export type NestedEnumWeeklyTargetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyTargetStatus | EnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyTargetStatusFilter<$PrismaModel> | $Enums.WeeklyTargetStatus
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

  export type NestedEnumWeeklyTargetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyTargetStatus | EnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyTargetStatus[] | ListEnumWeeklyTargetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyTargetStatusWithAggregatesFilter<$PrismaModel> | $Enums.WeeklyTargetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeeklyTargetStatusFilter<$PrismaModel>
    _max?: NestedEnumWeeklyTargetStatusFilter<$PrismaModel>
  }

  export type NestedEnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type ActivityCreateWithoutUserInput = {
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    activity_details?: ActivityDetailCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: number
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    activity_details?: ActivityDetailUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyTargetCreateWithoutUserInput = {
    title: string
    description: string
    target_start_date: Date | string
    target_end_date: Date | string
    actual_start_date?: Date | string | null
    actual_end_date?: Date | string | null
    status?: $Enums.WeeklyTargetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WeeklyTargetUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    target_start_date: Date | string
    target_end_date: Date | string
    actual_start_date?: Date | string | null
    actual_end_date?: Date | string | null
    status?: $Enums.WeeklyTargetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WeeklyTargetCreateOrConnectWithoutUserInput = {
    where: WeeklyTargetWhereUniqueInput
    create: XOR<WeeklyTargetCreateWithoutUserInput, WeeklyTargetUncheckedCreateWithoutUserInput>
  }

  export type WeeklyTargetCreateManyUserInputEnvelope = {
    data: WeeklyTargetCreateManyUserInput | WeeklyTargetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutSenderInput = {
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
    receiver: UserCreateNestedOneWithoutReceived_friendshipsInput
  }

  export type FriendshipUncheckedCreateWithoutSenderInput = {
    id?: number
    receiver_id: number
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutSenderInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutSenderInput, FriendshipUncheckedCreateWithoutSenderInput>
  }

  export type FriendshipCreateManySenderInputEnvelope = {
    data: FriendshipCreateManySenderInput | FriendshipCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutReceiverInput = {
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
    sender: UserCreateNestedOneWithoutSent_friendshipsInput
  }

  export type FriendshipUncheckedCreateWithoutReceiverInput = {
    id?: number
    sender_id: number
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutReceiverInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput>
  }

  export type FriendshipCreateManyReceiverInputEnvelope = {
    data: FriendshipCreateManyReceiverInput | FriendshipCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: IntFilter<"Activity"> | number
    user_id?: IntFilter<"Activity"> | number
    activity_date?: DateTimeFilter<"Activity"> | Date | string
    created_at?: DateTimeFilter<"Activity"> | Date | string
    updated_at?: DateTimeFilter<"Activity"> | Date | string
  }

  export type WeeklyTargetUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklyTargetWhereUniqueInput
    update: XOR<WeeklyTargetUpdateWithoutUserInput, WeeklyTargetUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklyTargetCreateWithoutUserInput, WeeklyTargetUncheckedCreateWithoutUserInput>
  }

  export type WeeklyTargetUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklyTargetWhereUniqueInput
    data: XOR<WeeklyTargetUpdateWithoutUserInput, WeeklyTargetUncheckedUpdateWithoutUserInput>
  }

  export type WeeklyTargetUpdateManyWithWhereWithoutUserInput = {
    where: WeeklyTargetScalarWhereInput
    data: XOR<WeeklyTargetUpdateManyMutationInput, WeeklyTargetUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklyTargetScalarWhereInput = {
    AND?: WeeklyTargetScalarWhereInput | WeeklyTargetScalarWhereInput[]
    OR?: WeeklyTargetScalarWhereInput[]
    NOT?: WeeklyTargetScalarWhereInput | WeeklyTargetScalarWhereInput[]
    id?: IntFilter<"WeeklyTarget"> | number
    user_id?: IntFilter<"WeeklyTarget"> | number
    title?: StringFilter<"WeeklyTarget"> | string
    description?: StringFilter<"WeeklyTarget"> | string
    target_start_date?: DateTimeFilter<"WeeklyTarget"> | Date | string
    target_end_date?: DateTimeFilter<"WeeklyTarget"> | Date | string
    actual_start_date?: DateTimeNullableFilter<"WeeklyTarget"> | Date | string | null
    actual_end_date?: DateTimeNullableFilter<"WeeklyTarget"> | Date | string | null
    status?: EnumWeeklyTargetStatusFilter<"WeeklyTarget"> | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFilter<"WeeklyTarget"> | Date | string
    updated_at?: DateTimeFilter<"WeeklyTarget"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutSenderInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutSenderInput, FriendshipUncheckedUpdateWithoutSenderInput>
    create: XOR<FriendshipCreateWithoutSenderInput, FriendshipUncheckedCreateWithoutSenderInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutSenderInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutSenderInput, FriendshipUncheckedUpdateWithoutSenderInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutSenderInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutSenderInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: IntFilter<"Friendship"> | number
    sender_id?: IntFilter<"Friendship"> | number
    receiver_id?: IntFilter<"Friendship"> | number
    status?: EnumFriendshipStatusFilter<"Friendship"> | $Enums.FriendshipStatus
    created_at?: DateTimeFilter<"Friendship"> | Date | string
    updated_at?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutReceiverInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutReceiverInput, FriendshipUncheckedUpdateWithoutReceiverInput>
    create: XOR<FriendshipCreateWithoutReceiverInput, FriendshipUncheckedCreateWithoutReceiverInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutReceiverInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutReceiverInput, FriendshipUncheckedUpdateWithoutReceiverInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutReceiverInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutActivitiesInput = {
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    weekly_targets?: WeeklyTargetCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipCreateNestedManyWithoutSenderInput
    received_friendships?: FriendshipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: number
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    weekly_targets?: WeeklyTargetUncheckedCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipUncheckedCreateNestedManyWithoutSenderInput
    received_friendships?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type ActivityDetailCreateWithoutActivityInput = {
    description: string
    duration_minutes: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityDetailUncheckedCreateWithoutActivityInput = {
    id?: number
    description: string
    duration_minutes: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityDetailCreateOrConnectWithoutActivityInput = {
    where: ActivityDetailWhereUniqueInput
    create: XOR<ActivityDetailCreateWithoutActivityInput, ActivityDetailUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDetailCreateManyActivityInputEnvelope = {
    data: ActivityDetailCreateManyActivityInput | ActivityDetailCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    weekly_targets?: WeeklyTargetUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUpdateManyWithoutSenderNestedInput
    received_friendships?: FriendshipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    weekly_targets?: WeeklyTargetUncheckedUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUncheckedUpdateManyWithoutSenderNestedInput
    received_friendships?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ActivityDetailUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityDetailWhereUniqueInput
    update: XOR<ActivityDetailUpdateWithoutActivityInput, ActivityDetailUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityDetailCreateWithoutActivityInput, ActivityDetailUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDetailUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityDetailWhereUniqueInput
    data: XOR<ActivityDetailUpdateWithoutActivityInput, ActivityDetailUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityDetailUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityDetailScalarWhereInput
    data: XOR<ActivityDetailUpdateManyMutationInput, ActivityDetailUncheckedUpdateManyWithoutActivityInput>
  }

  export type ActivityDetailScalarWhereInput = {
    AND?: ActivityDetailScalarWhereInput | ActivityDetailScalarWhereInput[]
    OR?: ActivityDetailScalarWhereInput[]
    NOT?: ActivityDetailScalarWhereInput | ActivityDetailScalarWhereInput[]
    id?: IntFilter<"ActivityDetail"> | number
    activity_id?: IntFilter<"ActivityDetail"> | number
    description?: StringFilter<"ActivityDetail"> | string
    duration_minutes?: IntFilter<"ActivityDetail"> | number
    category?: StringFilter<"ActivityDetail"> | string
    created_at?: DateTimeFilter<"ActivityDetail"> | Date | string
    updated_at?: DateTimeFilter<"ActivityDetail"> | Date | string
  }

  export type ActivityCreateWithoutActivity_detailsInput = {
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutActivity_detailsInput = {
    id?: number
    user_id: number
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityCreateOrConnectWithoutActivity_detailsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutActivity_detailsInput, ActivityUncheckedCreateWithoutActivity_detailsInput>
  }

  export type ActivityUpsertWithoutActivity_detailsInput = {
    update: XOR<ActivityUpdateWithoutActivity_detailsInput, ActivityUncheckedUpdateWithoutActivity_detailsInput>
    create: XOR<ActivityCreateWithoutActivity_detailsInput, ActivityUncheckedCreateWithoutActivity_detailsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutActivity_detailsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutActivity_detailsInput, ActivityUncheckedUpdateWithoutActivity_detailsInput>
  }

  export type ActivityUpdateWithoutActivity_detailsInput = {
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutActivity_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWeekly_targetsInput = {
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipCreateNestedManyWithoutSenderInput
    received_friendships?: FriendshipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutWeekly_targetsInput = {
    id?: number
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipUncheckedCreateNestedManyWithoutSenderInput
    received_friendships?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutWeekly_targetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeekly_targetsInput, UserUncheckedCreateWithoutWeekly_targetsInput>
  }

  export type UserUpsertWithoutWeekly_targetsInput = {
    update: XOR<UserUpdateWithoutWeekly_targetsInput, UserUncheckedUpdateWithoutWeekly_targetsInput>
    create: XOR<UserCreateWithoutWeekly_targetsInput, UserUncheckedCreateWithoutWeekly_targetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeekly_targetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeekly_targetsInput, UserUncheckedUpdateWithoutWeekly_targetsInput>
  }

  export type UserUpdateWithoutWeekly_targetsInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUpdateManyWithoutSenderNestedInput
    received_friendships?: FriendshipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutWeekly_targetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUncheckedUpdateManyWithoutSenderNestedInput
    received_friendships?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSent_friendshipsInput = {
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityCreateNestedManyWithoutUserInput
    weekly_targets?: WeeklyTargetCreateNestedManyWithoutUserInput
    received_friendships?: FriendshipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSent_friendshipsInput = {
    id?: number
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    weekly_targets?: WeeklyTargetUncheckedCreateNestedManyWithoutUserInput
    received_friendships?: FriendshipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSent_friendshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSent_friendshipsInput, UserUncheckedCreateWithoutSent_friendshipsInput>
  }

  export type UserCreateWithoutReceived_friendshipsInput = {
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityCreateNestedManyWithoutUserInput
    weekly_targets?: WeeklyTargetCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceived_friendshipsInput = {
    id?: number
    display_name: string
    profile_image: string
    target: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    weekly_targets?: WeeklyTargetUncheckedCreateNestedManyWithoutUserInput
    sent_friendships?: FriendshipUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceived_friendshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceived_friendshipsInput, UserUncheckedCreateWithoutReceived_friendshipsInput>
  }

  export type UserUpsertWithoutSent_friendshipsInput = {
    update: XOR<UserUpdateWithoutSent_friendshipsInput, UserUncheckedUpdateWithoutSent_friendshipsInput>
    create: XOR<UserCreateWithoutSent_friendshipsInput, UserUncheckedCreateWithoutSent_friendshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSent_friendshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSent_friendshipsInput, UserUncheckedUpdateWithoutSent_friendshipsInput>
  }

  export type UserUpdateWithoutSent_friendshipsInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutUserNestedInput
    weekly_targets?: WeeklyTargetUpdateManyWithoutUserNestedInput
    received_friendships?: FriendshipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSent_friendshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    weekly_targets?: WeeklyTargetUncheckedUpdateManyWithoutUserNestedInput
    received_friendships?: FriendshipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceived_friendshipsInput = {
    update: XOR<UserUpdateWithoutReceived_friendshipsInput, UserUncheckedUpdateWithoutReceived_friendshipsInput>
    create: XOR<UserCreateWithoutReceived_friendshipsInput, UserUncheckedCreateWithoutReceived_friendshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceived_friendshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceived_friendshipsInput, UserUncheckedUpdateWithoutReceived_friendshipsInput>
  }

  export type UserUpdateWithoutReceived_friendshipsInput = {
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutUserNestedInput
    weekly_targets?: WeeklyTargetUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceived_friendshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    display_name?: StringFieldUpdateOperationsInput | string
    profile_image?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    weekly_targets?: WeeklyTargetUncheckedUpdateManyWithoutUserNestedInput
    sent_friendships?: FriendshipUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ActivityCreateManyUserInput = {
    id?: number
    activity_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WeeklyTargetCreateManyUserInput = {
    id?: number
    title: string
    description: string
    target_start_date: Date | string
    target_end_date: Date | string
    actual_start_date?: Date | string | null
    actual_end_date?: Date | string | null
    status?: $Enums.WeeklyTargetStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FriendshipCreateManySenderInput = {
    id?: number
    receiver_id: number
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FriendshipCreateManyReceiverInput = {
    id?: number
    sender_id: number
    status?: $Enums.FriendshipStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activity_details?: ActivityDetailUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activity_details?: ActivityDetailUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTargetUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTargetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTargetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    target_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    target_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    actual_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWeeklyTargetStatusFieldUpdateOperationsInput | $Enums.WeeklyTargetStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutSenderInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceived_friendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutReceiverInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSent_friendshipsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailCreateManyActivityInput = {
    id?: number
    description: string
    duration_minutes: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityDetailUpdateWithoutActivityInput = {
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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