
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
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model despesas
 * 
 */
export type despesas = $Result.DefaultSelection<Prisma.$despesasPayload>
/**
 * Model valortotal
 * 
 */
export type valortotal = $Result.DefaultSelection<Prisma.$valortotalPayload>
/**
 * Model calculos
 * 
 */
export type calculos = $Result.DefaultSelection<Prisma.$calculosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs>;

  /**
   * `prisma.despesas`: Exposes CRUD operations for the **despesas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Despesas
    * const despesas = await prisma.despesas.findMany()
    * ```
    */
  get despesas(): Prisma.despesasDelegate<ExtArgs>;

  /**
   * `prisma.valortotal`: Exposes CRUD operations for the **valortotal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Valortotals
    * const valortotals = await prisma.valortotal.findMany()
    * ```
    */
  get valortotal(): Prisma.valortotalDelegate<ExtArgs>;

  /**
   * `prisma.calculos`: Exposes CRUD operations for the **calculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calculos
    * const calculos = await prisma.calculos.findMany()
    * ```
    */
  get calculos(): Prisma.calculosDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
    usuario: 'usuario',
    despesas: 'despesas',
    valortotal: 'valortotal',
    calculos: 'calculos'
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
      modelProps: "usuario" | "despesas" | "valortotal" | "calculos"
      txIsolationLevel: never
    }
    model: {
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.usuarioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.usuarioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      despesas: {
        payload: Prisma.$despesasPayload<ExtArgs>
        fields: Prisma.despesasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.despesasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.despesasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>
          }
          findFirst: {
            args: Prisma.despesasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.despesasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>
          }
          findMany: {
            args: Prisma.despesasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>[]
          }
          create: {
            args: Prisma.despesasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>
          }
          createMany: {
            args: Prisma.despesasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.despesasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>
          }
          update: {
            args: Prisma.despesasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>
          }
          deleteMany: {
            args: Prisma.despesasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.despesasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.despesasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despesasPayload>
          }
          aggregate: {
            args: Prisma.DespesasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDespesas>
          }
          groupBy: {
            args: Prisma.despesasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DespesasGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.despesasFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.despesasAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.despesasCountArgs<ExtArgs>
            result: $Utils.Optional<DespesasCountAggregateOutputType> | number
          }
        }
      }
      valortotal: {
        payload: Prisma.$valortotalPayload<ExtArgs>
        fields: Prisma.valortotalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.valortotalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.valortotalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>
          }
          findFirst: {
            args: Prisma.valortotalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.valortotalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>
          }
          findMany: {
            args: Prisma.valortotalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>[]
          }
          create: {
            args: Prisma.valortotalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>
          }
          createMany: {
            args: Prisma.valortotalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.valortotalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>
          }
          update: {
            args: Prisma.valortotalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>
          }
          deleteMany: {
            args: Prisma.valortotalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.valortotalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.valortotalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valortotalPayload>
          }
          aggregate: {
            args: Prisma.ValortotalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValortotal>
          }
          groupBy: {
            args: Prisma.valortotalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValortotalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.valortotalFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.valortotalAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.valortotalCountArgs<ExtArgs>
            result: $Utils.Optional<ValortotalCountAggregateOutputType> | number
          }
        }
      }
      calculos: {
        payload: Prisma.$calculosPayload<ExtArgs>
        fields: Prisma.calculosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calculosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calculosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>
          }
          findFirst: {
            args: Prisma.calculosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calculosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>
          }
          findMany: {
            args: Prisma.calculosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>[]
          }
          create: {
            args: Prisma.calculosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>
          }
          createMany: {
            args: Prisma.calculosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.calculosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>
          }
          update: {
            args: Prisma.calculosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>
          }
          deleteMany: {
            args: Prisma.calculosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calculosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.calculosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calculosPayload>
          }
          aggregate: {
            args: Prisma.CalculosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalculos>
          }
          groupBy: {
            args: Prisma.calculosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalculosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.calculosFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.calculosAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.calculosCountArgs<ExtArgs>
            result: $Utils.Optional<CalculosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Models
   */

  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    registro: string | null
    tenantid: string | null
    ativo: boolean | null
    recuperacodigo: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    registro: string | null
    tenantid: string | null
    ativo: boolean | null
    recuperacodigo: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    registro: number
    tenantid: number
    ativo: number
    recuperacodigo: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    registro?: true
    tenantid?: true
    ativo?: true
    recuperacodigo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    registro?: true
    tenantid?: true
    ativo?: true
    recuperacodigo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    registro?: true
    tenantid?: true
    ativo?: true
    recuperacodigo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    senha: string
    registro: string
    tenantid: string
    ativo: boolean
    recuperacodigo: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    registro?: boolean
    tenantid?: boolean
    ativo?: boolean
    recuperacodigo?: boolean
  }, ExtArgs["result"]["usuario"]>


  export type usuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    registro?: boolean
    tenantid?: boolean
    ativo?: boolean
    recuperacodigo?: boolean
  }


  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      senha: string
      registro: string
      tenantid: string
      ativo: boolean
      recuperacodigo: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {usuarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuario = await prisma.usuario.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: usuarioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuario.
     * @param {usuarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuario = await prisma.usuario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: usuarioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuario model
   */ 
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly registro: FieldRef<"usuario", 'String'>
    readonly tenantid: FieldRef<"usuario", 'String'>
    readonly ativo: FieldRef<"usuario", 'Boolean'>
    readonly recuperacodigo: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario findRaw
   */
  export type usuarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * usuario aggregateRaw
   */
  export type usuarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
  }


  /**
   * Model despesas
   */

  export type AggregateDespesas = {
    _count: DespesasCountAggregateOutputType | null
    _min: DespesasMinAggregateOutputType | null
    _max: DespesasMaxAggregateOutputType | null
  }

  export type DespesasMinAggregateOutputType = {
    id: string | null
    nome: string | null
    data: string | null
    observacao: string | null
    tenantid: string | null
    valor: string | null
  }

  export type DespesasMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    data: string | null
    observacao: string | null
    tenantid: string | null
    valor: string | null
  }

  export type DespesasCountAggregateOutputType = {
    id: number
    nome: number
    data: number
    observacao: number
    tenantid: number
    valor: number
    _all: number
  }


  export type DespesasMinAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    observacao?: true
    tenantid?: true
    valor?: true
  }

  export type DespesasMaxAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    observacao?: true
    tenantid?: true
    valor?: true
  }

  export type DespesasCountAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    observacao?: true
    tenantid?: true
    valor?: true
    _all?: true
  }

  export type DespesasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which despesas to aggregate.
     */
    where?: despesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesasOrderByWithRelationInput | despesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: despesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned despesas
    **/
    _count?: true | DespesasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DespesasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DespesasMaxAggregateInputType
  }

  export type GetDespesasAggregateType<T extends DespesasAggregateArgs> = {
        [P in keyof T & keyof AggregateDespesas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDespesas[P]>
      : GetScalarType<T[P], AggregateDespesas[P]>
  }




  export type despesasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: despesasWhereInput
    orderBy?: despesasOrderByWithAggregationInput | despesasOrderByWithAggregationInput[]
    by: DespesasScalarFieldEnum[] | DespesasScalarFieldEnum
    having?: despesasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DespesasCountAggregateInputType | true
    _min?: DespesasMinAggregateInputType
    _max?: DespesasMaxAggregateInputType
  }

  export type DespesasGroupByOutputType = {
    id: string
    nome: string
    data: string
    observacao: string
    tenantid: string
    valor: string
    _count: DespesasCountAggregateOutputType | null
    _min: DespesasMinAggregateOutputType | null
    _max: DespesasMaxAggregateOutputType | null
  }

  type GetDespesasGroupByPayload<T extends despesasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DespesasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DespesasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DespesasGroupByOutputType[P]>
            : GetScalarType<T[P], DespesasGroupByOutputType[P]>
        }
      >
    >


  export type despesasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    observacao?: boolean
    tenantid?: boolean
    valor?: boolean
  }, ExtArgs["result"]["despesas"]>


  export type despesasSelectScalar = {
    id?: boolean
    nome?: boolean
    data?: boolean
    observacao?: boolean
    tenantid?: boolean
    valor?: boolean
  }


  export type $despesasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "despesas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      data: string
      observacao: string
      tenantid: string
      valor: string
    }, ExtArgs["result"]["despesas"]>
    composites: {}
  }

  type despesasGetPayload<S extends boolean | null | undefined | despesasDefaultArgs> = $Result.GetResult<Prisma.$despesasPayload, S>

  type despesasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<despesasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DespesasCountAggregateInputType | true
    }

  export interface despesasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['despesas'], meta: { name: 'despesas' } }
    /**
     * Find zero or one Despesas that matches the filter.
     * @param {despesasFindUniqueArgs} args - Arguments to find a Despesas
     * @example
     * // Get one Despesas
     * const despesas = await prisma.despesas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends despesasFindUniqueArgs>(args: SelectSubset<T, despesasFindUniqueArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Despesas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {despesasFindUniqueOrThrowArgs} args - Arguments to find a Despesas
     * @example
     * // Get one Despesas
     * const despesas = await prisma.despesas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends despesasFindUniqueOrThrowArgs>(args: SelectSubset<T, despesasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Despesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesasFindFirstArgs} args - Arguments to find a Despesas
     * @example
     * // Get one Despesas
     * const despesas = await prisma.despesas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends despesasFindFirstArgs>(args?: SelectSubset<T, despesasFindFirstArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Despesas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesasFindFirstOrThrowArgs} args - Arguments to find a Despesas
     * @example
     * // Get one Despesas
     * const despesas = await prisma.despesas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends despesasFindFirstOrThrowArgs>(args?: SelectSubset<T, despesasFindFirstOrThrowArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Despesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Despesas
     * const despesas = await prisma.despesas.findMany()
     * 
     * // Get first 10 Despesas
     * const despesas = await prisma.despesas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const despesasWithIdOnly = await prisma.despesas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends despesasFindManyArgs>(args?: SelectSubset<T, despesasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Despesas.
     * @param {despesasCreateArgs} args - Arguments to create a Despesas.
     * @example
     * // Create one Despesas
     * const Despesas = await prisma.despesas.create({
     *   data: {
     *     // ... data to create a Despesas
     *   }
     * })
     * 
     */
    create<T extends despesasCreateArgs>(args: SelectSubset<T, despesasCreateArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Despesas.
     * @param {despesasCreateManyArgs} args - Arguments to create many Despesas.
     * @example
     * // Create many Despesas
     * const despesas = await prisma.despesas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends despesasCreateManyArgs>(args?: SelectSubset<T, despesasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Despesas.
     * @param {despesasDeleteArgs} args - Arguments to delete one Despesas.
     * @example
     * // Delete one Despesas
     * const Despesas = await prisma.despesas.delete({
     *   where: {
     *     // ... filter to delete one Despesas
     *   }
     * })
     * 
     */
    delete<T extends despesasDeleteArgs>(args: SelectSubset<T, despesasDeleteArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Despesas.
     * @param {despesasUpdateArgs} args - Arguments to update one Despesas.
     * @example
     * // Update one Despesas
     * const despesas = await prisma.despesas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends despesasUpdateArgs>(args: SelectSubset<T, despesasUpdateArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Despesas.
     * @param {despesasDeleteManyArgs} args - Arguments to filter Despesas to delete.
     * @example
     * // Delete a few Despesas
     * const { count } = await prisma.despesas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends despesasDeleteManyArgs>(args?: SelectSubset<T, despesasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Despesas
     * const despesas = await prisma.despesas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends despesasUpdateManyArgs>(args: SelectSubset<T, despesasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Despesas.
     * @param {despesasUpsertArgs} args - Arguments to update or create a Despesas.
     * @example
     * // Update or create a Despesas
     * const despesas = await prisma.despesas.upsert({
     *   create: {
     *     // ... data to create a Despesas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Despesas we want to update
     *   }
     * })
     */
    upsert<T extends despesasUpsertArgs>(args: SelectSubset<T, despesasUpsertArgs<ExtArgs>>): Prisma__despesasClient<$Result.GetResult<Prisma.$despesasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Despesas that matches the filter.
     * @param {despesasFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const despesas = await prisma.despesas.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: despesasFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Despesas.
     * @param {despesasAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const despesas = await prisma.despesas.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: despesasAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesasCountArgs} args - Arguments to filter Despesas to count.
     * @example
     * // Count the number of Despesas
     * const count = await prisma.despesas.count({
     *   where: {
     *     // ... the filter for the Despesas we want to count
     *   }
     * })
    **/
    count<T extends despesasCountArgs>(
      args?: Subset<T, despesasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DespesasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DespesasAggregateArgs>(args: Subset<T, DespesasAggregateArgs>): Prisma.PrismaPromise<GetDespesasAggregateType<T>>

    /**
     * Group by Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despesasGroupByArgs} args - Group by arguments.
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
      T extends despesasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: despesasGroupByArgs['orderBy'] }
        : { orderBy?: despesasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, despesasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDespesasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the despesas model
   */
  readonly fields: despesasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for despesas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__despesasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the despesas model
   */ 
  interface despesasFieldRefs {
    readonly id: FieldRef<"despesas", 'String'>
    readonly nome: FieldRef<"despesas", 'String'>
    readonly data: FieldRef<"despesas", 'String'>
    readonly observacao: FieldRef<"despesas", 'String'>
    readonly tenantid: FieldRef<"despesas", 'String'>
    readonly valor: FieldRef<"despesas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * despesas findUnique
   */
  export type despesasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * Filter, which despesas to fetch.
     */
    where: despesasWhereUniqueInput
  }

  /**
   * despesas findUniqueOrThrow
   */
  export type despesasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * Filter, which despesas to fetch.
     */
    where: despesasWhereUniqueInput
  }

  /**
   * despesas findFirst
   */
  export type despesasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * Filter, which despesas to fetch.
     */
    where?: despesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesasOrderByWithRelationInput | despesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for despesas.
     */
    cursor?: despesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despesas.
     */
    distinct?: DespesasScalarFieldEnum | DespesasScalarFieldEnum[]
  }

  /**
   * despesas findFirstOrThrow
   */
  export type despesasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * Filter, which despesas to fetch.
     */
    where?: despesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesasOrderByWithRelationInput | despesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for despesas.
     */
    cursor?: despesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despesas.
     */
    distinct?: DespesasScalarFieldEnum | DespesasScalarFieldEnum[]
  }

  /**
   * despesas findMany
   */
  export type despesasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * Filter, which despesas to fetch.
     */
    where?: despesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despesas to fetch.
     */
    orderBy?: despesasOrderByWithRelationInput | despesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing despesas.
     */
    cursor?: despesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despesas.
     */
    skip?: number
    distinct?: DespesasScalarFieldEnum | DespesasScalarFieldEnum[]
  }

  /**
   * despesas create
   */
  export type despesasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * The data needed to create a despesas.
     */
    data: XOR<despesasCreateInput, despesasUncheckedCreateInput>
  }

  /**
   * despesas createMany
   */
  export type despesasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many despesas.
     */
    data: despesasCreateManyInput | despesasCreateManyInput[]
  }

  /**
   * despesas update
   */
  export type despesasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * The data needed to update a despesas.
     */
    data: XOR<despesasUpdateInput, despesasUncheckedUpdateInput>
    /**
     * Choose, which despesas to update.
     */
    where: despesasWhereUniqueInput
  }

  /**
   * despesas updateMany
   */
  export type despesasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update despesas.
     */
    data: XOR<despesasUpdateManyMutationInput, despesasUncheckedUpdateManyInput>
    /**
     * Filter which despesas to update
     */
    where?: despesasWhereInput
  }

  /**
   * despesas upsert
   */
  export type despesasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * The filter to search for the despesas to update in case it exists.
     */
    where: despesasWhereUniqueInput
    /**
     * In case the despesas found by the `where` argument doesn't exist, create a new despesas with this data.
     */
    create: XOR<despesasCreateInput, despesasUncheckedCreateInput>
    /**
     * In case the despesas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<despesasUpdateInput, despesasUncheckedUpdateInput>
  }

  /**
   * despesas delete
   */
  export type despesasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
    /**
     * Filter which despesas to delete.
     */
    where: despesasWhereUniqueInput
  }

  /**
   * despesas deleteMany
   */
  export type despesasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which despesas to delete
     */
    where?: despesasWhereInput
  }

  /**
   * despesas findRaw
   */
  export type despesasFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * despesas aggregateRaw
   */
  export type despesasAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * despesas without action
   */
  export type despesasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despesas
     */
    select?: despesasSelect<ExtArgs> | null
  }


  /**
   * Model valortotal
   */

  export type AggregateValortotal = {
    _count: ValortotalCountAggregateOutputType | null
    _min: ValortotalMinAggregateOutputType | null
    _max: ValortotalMaxAggregateOutputType | null
  }

  export type ValortotalMinAggregateOutputType = {
    id: string | null
    valor: string | null
    tenantid: string | null
    registro: string | null
  }

  export type ValortotalMaxAggregateOutputType = {
    id: string | null
    valor: string | null
    tenantid: string | null
    registro: string | null
  }

  export type ValortotalCountAggregateOutputType = {
    id: number
    valor: number
    tenantid: number
    registro: number
    _all: number
  }


  export type ValortotalMinAggregateInputType = {
    id?: true
    valor?: true
    tenantid?: true
    registro?: true
  }

  export type ValortotalMaxAggregateInputType = {
    id?: true
    valor?: true
    tenantid?: true
    registro?: true
  }

  export type ValortotalCountAggregateInputType = {
    id?: true
    valor?: true
    tenantid?: true
    registro?: true
    _all?: true
  }

  export type ValortotalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which valortotal to aggregate.
     */
    where?: valortotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valortotals to fetch.
     */
    orderBy?: valortotalOrderByWithRelationInput | valortotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: valortotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valortotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valortotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned valortotals
    **/
    _count?: true | ValortotalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValortotalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValortotalMaxAggregateInputType
  }

  export type GetValortotalAggregateType<T extends ValortotalAggregateArgs> = {
        [P in keyof T & keyof AggregateValortotal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValortotal[P]>
      : GetScalarType<T[P], AggregateValortotal[P]>
  }




  export type valortotalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valortotalWhereInput
    orderBy?: valortotalOrderByWithAggregationInput | valortotalOrderByWithAggregationInput[]
    by: ValortotalScalarFieldEnum[] | ValortotalScalarFieldEnum
    having?: valortotalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValortotalCountAggregateInputType | true
    _min?: ValortotalMinAggregateInputType
    _max?: ValortotalMaxAggregateInputType
  }

  export type ValortotalGroupByOutputType = {
    id: string
    valor: string
    tenantid: string
    registro: string
    _count: ValortotalCountAggregateOutputType | null
    _min: ValortotalMinAggregateOutputType | null
    _max: ValortotalMaxAggregateOutputType | null
  }

  type GetValortotalGroupByPayload<T extends valortotalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValortotalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValortotalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValortotalGroupByOutputType[P]>
            : GetScalarType<T[P], ValortotalGroupByOutputType[P]>
        }
      >
    >


  export type valortotalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    tenantid?: boolean
    registro?: boolean
  }, ExtArgs["result"]["valortotal"]>


  export type valortotalSelectScalar = {
    id?: boolean
    valor?: boolean
    tenantid?: boolean
    registro?: boolean
  }


  export type $valortotalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "valortotal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      valor: string
      tenantid: string
      registro: string
    }, ExtArgs["result"]["valortotal"]>
    composites: {}
  }

  type valortotalGetPayload<S extends boolean | null | undefined | valortotalDefaultArgs> = $Result.GetResult<Prisma.$valortotalPayload, S>

  type valortotalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<valortotalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ValortotalCountAggregateInputType | true
    }

  export interface valortotalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['valortotal'], meta: { name: 'valortotal' } }
    /**
     * Find zero or one Valortotal that matches the filter.
     * @param {valortotalFindUniqueArgs} args - Arguments to find a Valortotal
     * @example
     * // Get one Valortotal
     * const valortotal = await prisma.valortotal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends valortotalFindUniqueArgs>(args: SelectSubset<T, valortotalFindUniqueArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Valortotal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {valortotalFindUniqueOrThrowArgs} args - Arguments to find a Valortotal
     * @example
     * // Get one Valortotal
     * const valortotal = await prisma.valortotal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends valortotalFindUniqueOrThrowArgs>(args: SelectSubset<T, valortotalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Valortotal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valortotalFindFirstArgs} args - Arguments to find a Valortotal
     * @example
     * // Get one Valortotal
     * const valortotal = await prisma.valortotal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends valortotalFindFirstArgs>(args?: SelectSubset<T, valortotalFindFirstArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Valortotal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valortotalFindFirstOrThrowArgs} args - Arguments to find a Valortotal
     * @example
     * // Get one Valortotal
     * const valortotal = await prisma.valortotal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends valortotalFindFirstOrThrowArgs>(args?: SelectSubset<T, valortotalFindFirstOrThrowArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Valortotals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valortotalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Valortotals
     * const valortotals = await prisma.valortotal.findMany()
     * 
     * // Get first 10 Valortotals
     * const valortotals = await prisma.valortotal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valortotalWithIdOnly = await prisma.valortotal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends valortotalFindManyArgs>(args?: SelectSubset<T, valortotalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Valortotal.
     * @param {valortotalCreateArgs} args - Arguments to create a Valortotal.
     * @example
     * // Create one Valortotal
     * const Valortotal = await prisma.valortotal.create({
     *   data: {
     *     // ... data to create a Valortotal
     *   }
     * })
     * 
     */
    create<T extends valortotalCreateArgs>(args: SelectSubset<T, valortotalCreateArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Valortotals.
     * @param {valortotalCreateManyArgs} args - Arguments to create many Valortotals.
     * @example
     * // Create many Valortotals
     * const valortotal = await prisma.valortotal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends valortotalCreateManyArgs>(args?: SelectSubset<T, valortotalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Valortotal.
     * @param {valortotalDeleteArgs} args - Arguments to delete one Valortotal.
     * @example
     * // Delete one Valortotal
     * const Valortotal = await prisma.valortotal.delete({
     *   where: {
     *     // ... filter to delete one Valortotal
     *   }
     * })
     * 
     */
    delete<T extends valortotalDeleteArgs>(args: SelectSubset<T, valortotalDeleteArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Valortotal.
     * @param {valortotalUpdateArgs} args - Arguments to update one Valortotal.
     * @example
     * // Update one Valortotal
     * const valortotal = await prisma.valortotal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends valortotalUpdateArgs>(args: SelectSubset<T, valortotalUpdateArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Valortotals.
     * @param {valortotalDeleteManyArgs} args - Arguments to filter Valortotals to delete.
     * @example
     * // Delete a few Valortotals
     * const { count } = await prisma.valortotal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends valortotalDeleteManyArgs>(args?: SelectSubset<T, valortotalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valortotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valortotalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Valortotals
     * const valortotal = await prisma.valortotal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends valortotalUpdateManyArgs>(args: SelectSubset<T, valortotalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Valortotal.
     * @param {valortotalUpsertArgs} args - Arguments to update or create a Valortotal.
     * @example
     * // Update or create a Valortotal
     * const valortotal = await prisma.valortotal.upsert({
     *   create: {
     *     // ... data to create a Valortotal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Valortotal we want to update
     *   }
     * })
     */
    upsert<T extends valortotalUpsertArgs>(args: SelectSubset<T, valortotalUpsertArgs<ExtArgs>>): Prisma__valortotalClient<$Result.GetResult<Prisma.$valortotalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Valortotals that matches the filter.
     * @param {valortotalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const valortotal = await prisma.valortotal.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: valortotalFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Valortotal.
     * @param {valortotalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const valortotal = await prisma.valortotal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: valortotalAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Valortotals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valortotalCountArgs} args - Arguments to filter Valortotals to count.
     * @example
     * // Count the number of Valortotals
     * const count = await prisma.valortotal.count({
     *   where: {
     *     // ... the filter for the Valortotals we want to count
     *   }
     * })
    **/
    count<T extends valortotalCountArgs>(
      args?: Subset<T, valortotalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValortotalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Valortotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValortotalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValortotalAggregateArgs>(args: Subset<T, ValortotalAggregateArgs>): Prisma.PrismaPromise<GetValortotalAggregateType<T>>

    /**
     * Group by Valortotal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valortotalGroupByArgs} args - Group by arguments.
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
      T extends valortotalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: valortotalGroupByArgs['orderBy'] }
        : { orderBy?: valortotalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, valortotalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValortotalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the valortotal model
   */
  readonly fields: valortotalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for valortotal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__valortotalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the valortotal model
   */ 
  interface valortotalFieldRefs {
    readonly id: FieldRef<"valortotal", 'String'>
    readonly valor: FieldRef<"valortotal", 'String'>
    readonly tenantid: FieldRef<"valortotal", 'String'>
    readonly registro: FieldRef<"valortotal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * valortotal findUnique
   */
  export type valortotalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * Filter, which valortotal to fetch.
     */
    where: valortotalWhereUniqueInput
  }

  /**
   * valortotal findUniqueOrThrow
   */
  export type valortotalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * Filter, which valortotal to fetch.
     */
    where: valortotalWhereUniqueInput
  }

  /**
   * valortotal findFirst
   */
  export type valortotalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * Filter, which valortotal to fetch.
     */
    where?: valortotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valortotals to fetch.
     */
    orderBy?: valortotalOrderByWithRelationInput | valortotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for valortotals.
     */
    cursor?: valortotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valortotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valortotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of valortotals.
     */
    distinct?: ValortotalScalarFieldEnum | ValortotalScalarFieldEnum[]
  }

  /**
   * valortotal findFirstOrThrow
   */
  export type valortotalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * Filter, which valortotal to fetch.
     */
    where?: valortotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valortotals to fetch.
     */
    orderBy?: valortotalOrderByWithRelationInput | valortotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for valortotals.
     */
    cursor?: valortotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valortotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valortotals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of valortotals.
     */
    distinct?: ValortotalScalarFieldEnum | ValortotalScalarFieldEnum[]
  }

  /**
   * valortotal findMany
   */
  export type valortotalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * Filter, which valortotals to fetch.
     */
    where?: valortotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valortotals to fetch.
     */
    orderBy?: valortotalOrderByWithRelationInput | valortotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing valortotals.
     */
    cursor?: valortotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valortotals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valortotals.
     */
    skip?: number
    distinct?: ValortotalScalarFieldEnum | ValortotalScalarFieldEnum[]
  }

  /**
   * valortotal create
   */
  export type valortotalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * The data needed to create a valortotal.
     */
    data: XOR<valortotalCreateInput, valortotalUncheckedCreateInput>
  }

  /**
   * valortotal createMany
   */
  export type valortotalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many valortotals.
     */
    data: valortotalCreateManyInput | valortotalCreateManyInput[]
  }

  /**
   * valortotal update
   */
  export type valortotalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * The data needed to update a valortotal.
     */
    data: XOR<valortotalUpdateInput, valortotalUncheckedUpdateInput>
    /**
     * Choose, which valortotal to update.
     */
    where: valortotalWhereUniqueInput
  }

  /**
   * valortotal updateMany
   */
  export type valortotalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update valortotals.
     */
    data: XOR<valortotalUpdateManyMutationInput, valortotalUncheckedUpdateManyInput>
    /**
     * Filter which valortotals to update
     */
    where?: valortotalWhereInput
  }

  /**
   * valortotal upsert
   */
  export type valortotalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * The filter to search for the valortotal to update in case it exists.
     */
    where: valortotalWhereUniqueInput
    /**
     * In case the valortotal found by the `where` argument doesn't exist, create a new valortotal with this data.
     */
    create: XOR<valortotalCreateInput, valortotalUncheckedCreateInput>
    /**
     * In case the valortotal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<valortotalUpdateInput, valortotalUncheckedUpdateInput>
  }

  /**
   * valortotal delete
   */
  export type valortotalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
    /**
     * Filter which valortotal to delete.
     */
    where: valortotalWhereUniqueInput
  }

  /**
   * valortotal deleteMany
   */
  export type valortotalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which valortotals to delete
     */
    where?: valortotalWhereInput
  }

  /**
   * valortotal findRaw
   */
  export type valortotalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * valortotal aggregateRaw
   */
  export type valortotalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * valortotal without action
   */
  export type valortotalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valortotal
     */
    select?: valortotalSelect<ExtArgs> | null
  }


  /**
   * Model calculos
   */

  export type AggregateCalculos = {
    _count: CalculosCountAggregateOutputType | null
    _min: CalculosMinAggregateOutputType | null
    _max: CalculosMaxAggregateOutputType | null
  }

  export type CalculosMinAggregateOutputType = {
    id: string | null
    valortotal: string | null
    valordespesa: string | null
    valorresultado: string | null
    tenantid: string | null
  }

  export type CalculosMaxAggregateOutputType = {
    id: string | null
    valortotal: string | null
    valordespesa: string | null
    valorresultado: string | null
    tenantid: string | null
  }

  export type CalculosCountAggregateOutputType = {
    id: number
    valortotal: number
    valordespesa: number
    valorresultado: number
    tenantid: number
    _all: number
  }


  export type CalculosMinAggregateInputType = {
    id?: true
    valortotal?: true
    valordespesa?: true
    valorresultado?: true
    tenantid?: true
  }

  export type CalculosMaxAggregateInputType = {
    id?: true
    valortotal?: true
    valordespesa?: true
    valorresultado?: true
    tenantid?: true
  }

  export type CalculosCountAggregateInputType = {
    id?: true
    valortotal?: true
    valordespesa?: true
    valorresultado?: true
    tenantid?: true
    _all?: true
  }

  export type CalculosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calculos to aggregate.
     */
    where?: calculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calculos to fetch.
     */
    orderBy?: calculosOrderByWithRelationInput | calculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calculos
    **/
    _count?: true | CalculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalculosMaxAggregateInputType
  }

  export type GetCalculosAggregateType<T extends CalculosAggregateArgs> = {
        [P in keyof T & keyof AggregateCalculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalculos[P]>
      : GetScalarType<T[P], AggregateCalculos[P]>
  }




  export type calculosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calculosWhereInput
    orderBy?: calculosOrderByWithAggregationInput | calculosOrderByWithAggregationInput[]
    by: CalculosScalarFieldEnum[] | CalculosScalarFieldEnum
    having?: calculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalculosCountAggregateInputType | true
    _min?: CalculosMinAggregateInputType
    _max?: CalculosMaxAggregateInputType
  }

  export type CalculosGroupByOutputType = {
    id: string
    valortotal: string
    valordespesa: string
    valorresultado: string
    tenantid: string
    _count: CalculosCountAggregateOutputType | null
    _min: CalculosMinAggregateOutputType | null
    _max: CalculosMaxAggregateOutputType | null
  }

  type GetCalculosGroupByPayload<T extends calculosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalculosGroupByOutputType[P]>
            : GetScalarType<T[P], CalculosGroupByOutputType[P]>
        }
      >
    >


  export type calculosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valortotal?: boolean
    valordespesa?: boolean
    valorresultado?: boolean
    tenantid?: boolean
  }, ExtArgs["result"]["calculos"]>


  export type calculosSelectScalar = {
    id?: boolean
    valortotal?: boolean
    valordespesa?: boolean
    valorresultado?: boolean
    tenantid?: boolean
  }


  export type $calculosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calculos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      valortotal: string
      valordespesa: string
      valorresultado: string
      tenantid: string
    }, ExtArgs["result"]["calculos"]>
    composites: {}
  }

  type calculosGetPayload<S extends boolean | null | undefined | calculosDefaultArgs> = $Result.GetResult<Prisma.$calculosPayload, S>

  type calculosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<calculosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CalculosCountAggregateInputType | true
    }

  export interface calculosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calculos'], meta: { name: 'calculos' } }
    /**
     * Find zero or one Calculos that matches the filter.
     * @param {calculosFindUniqueArgs} args - Arguments to find a Calculos
     * @example
     * // Get one Calculos
     * const calculos = await prisma.calculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calculosFindUniqueArgs>(args: SelectSubset<T, calculosFindUniqueArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Calculos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {calculosFindUniqueOrThrowArgs} args - Arguments to find a Calculos
     * @example
     * // Get one Calculos
     * const calculos = await prisma.calculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calculosFindUniqueOrThrowArgs>(args: SelectSubset<T, calculosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Calculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calculosFindFirstArgs} args - Arguments to find a Calculos
     * @example
     * // Get one Calculos
     * const calculos = await prisma.calculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calculosFindFirstArgs>(args?: SelectSubset<T, calculosFindFirstArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Calculos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calculosFindFirstOrThrowArgs} args - Arguments to find a Calculos
     * @example
     * // Get one Calculos
     * const calculos = await prisma.calculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calculosFindFirstOrThrowArgs>(args?: SelectSubset<T, calculosFindFirstOrThrowArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Calculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calculosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calculos
     * const calculos = await prisma.calculos.findMany()
     * 
     * // Get first 10 Calculos
     * const calculos = await prisma.calculos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calculosWithIdOnly = await prisma.calculos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends calculosFindManyArgs>(args?: SelectSubset<T, calculosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Calculos.
     * @param {calculosCreateArgs} args - Arguments to create a Calculos.
     * @example
     * // Create one Calculos
     * const Calculos = await prisma.calculos.create({
     *   data: {
     *     // ... data to create a Calculos
     *   }
     * })
     * 
     */
    create<T extends calculosCreateArgs>(args: SelectSubset<T, calculosCreateArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Calculos.
     * @param {calculosCreateManyArgs} args - Arguments to create many Calculos.
     * @example
     * // Create many Calculos
     * const calculos = await prisma.calculos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calculosCreateManyArgs>(args?: SelectSubset<T, calculosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calculos.
     * @param {calculosDeleteArgs} args - Arguments to delete one Calculos.
     * @example
     * // Delete one Calculos
     * const Calculos = await prisma.calculos.delete({
     *   where: {
     *     // ... filter to delete one Calculos
     *   }
     * })
     * 
     */
    delete<T extends calculosDeleteArgs>(args: SelectSubset<T, calculosDeleteArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Calculos.
     * @param {calculosUpdateArgs} args - Arguments to update one Calculos.
     * @example
     * // Update one Calculos
     * const calculos = await prisma.calculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calculosUpdateArgs>(args: SelectSubset<T, calculosUpdateArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Calculos.
     * @param {calculosDeleteManyArgs} args - Arguments to filter Calculos to delete.
     * @example
     * // Delete a few Calculos
     * const { count } = await prisma.calculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calculosDeleteManyArgs>(args?: SelectSubset<T, calculosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calculos
     * const calculos = await prisma.calculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calculosUpdateManyArgs>(args: SelectSubset<T, calculosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calculos.
     * @param {calculosUpsertArgs} args - Arguments to update or create a Calculos.
     * @example
     * // Update or create a Calculos
     * const calculos = await prisma.calculos.upsert({
     *   create: {
     *     // ... data to create a Calculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calculos we want to update
     *   }
     * })
     */
    upsert<T extends calculosUpsertArgs>(args: SelectSubset<T, calculosUpsertArgs<ExtArgs>>): Prisma__calculosClient<$Result.GetResult<Prisma.$calculosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Calculos that matches the filter.
     * @param {calculosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const calculos = await prisma.calculos.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: calculosFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Calculos.
     * @param {calculosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const calculos = await prisma.calculos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: calculosAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Calculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calculosCountArgs} args - Arguments to filter Calculos to count.
     * @example
     * // Count the number of Calculos
     * const count = await prisma.calculos.count({
     *   where: {
     *     // ... the filter for the Calculos we want to count
     *   }
     * })
    **/
    count<T extends calculosCountArgs>(
      args?: Subset<T, calculosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalculosAggregateArgs>(args: Subset<T, CalculosAggregateArgs>): Prisma.PrismaPromise<GetCalculosAggregateType<T>>

    /**
     * Group by Calculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calculosGroupByArgs} args - Group by arguments.
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
      T extends calculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calculosGroupByArgs['orderBy'] }
        : { orderBy?: calculosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, calculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalculosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calculos model
   */
  readonly fields: calculosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calculosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the calculos model
   */ 
  interface calculosFieldRefs {
    readonly id: FieldRef<"calculos", 'String'>
    readonly valortotal: FieldRef<"calculos", 'String'>
    readonly valordespesa: FieldRef<"calculos", 'String'>
    readonly valorresultado: FieldRef<"calculos", 'String'>
    readonly tenantid: FieldRef<"calculos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * calculos findUnique
   */
  export type calculosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * Filter, which calculos to fetch.
     */
    where: calculosWhereUniqueInput
  }

  /**
   * calculos findUniqueOrThrow
   */
  export type calculosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * Filter, which calculos to fetch.
     */
    where: calculosWhereUniqueInput
  }

  /**
   * calculos findFirst
   */
  export type calculosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * Filter, which calculos to fetch.
     */
    where?: calculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calculos to fetch.
     */
    orderBy?: calculosOrderByWithRelationInput | calculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calculos.
     */
    cursor?: calculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calculos.
     */
    distinct?: CalculosScalarFieldEnum | CalculosScalarFieldEnum[]
  }

  /**
   * calculos findFirstOrThrow
   */
  export type calculosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * Filter, which calculos to fetch.
     */
    where?: calculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calculos to fetch.
     */
    orderBy?: calculosOrderByWithRelationInput | calculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calculos.
     */
    cursor?: calculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calculos.
     */
    distinct?: CalculosScalarFieldEnum | CalculosScalarFieldEnum[]
  }

  /**
   * calculos findMany
   */
  export type calculosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * Filter, which calculos to fetch.
     */
    where?: calculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calculos to fetch.
     */
    orderBy?: calculosOrderByWithRelationInput | calculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calculos.
     */
    cursor?: calculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calculos.
     */
    skip?: number
    distinct?: CalculosScalarFieldEnum | CalculosScalarFieldEnum[]
  }

  /**
   * calculos create
   */
  export type calculosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * The data needed to create a calculos.
     */
    data: XOR<calculosCreateInput, calculosUncheckedCreateInput>
  }

  /**
   * calculos createMany
   */
  export type calculosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calculos.
     */
    data: calculosCreateManyInput | calculosCreateManyInput[]
  }

  /**
   * calculos update
   */
  export type calculosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * The data needed to update a calculos.
     */
    data: XOR<calculosUpdateInput, calculosUncheckedUpdateInput>
    /**
     * Choose, which calculos to update.
     */
    where: calculosWhereUniqueInput
  }

  /**
   * calculos updateMany
   */
  export type calculosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calculos.
     */
    data: XOR<calculosUpdateManyMutationInput, calculosUncheckedUpdateManyInput>
    /**
     * Filter which calculos to update
     */
    where?: calculosWhereInput
  }

  /**
   * calculos upsert
   */
  export type calculosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * The filter to search for the calculos to update in case it exists.
     */
    where: calculosWhereUniqueInput
    /**
     * In case the calculos found by the `where` argument doesn't exist, create a new calculos with this data.
     */
    create: XOR<calculosCreateInput, calculosUncheckedCreateInput>
    /**
     * In case the calculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calculosUpdateInput, calculosUncheckedUpdateInput>
  }

  /**
   * calculos delete
   */
  export type calculosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
    /**
     * Filter which calculos to delete.
     */
    where: calculosWhereUniqueInput
  }

  /**
   * calculos deleteMany
   */
  export type calculosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calculos to delete
     */
    where?: calculosWhereInput
  }

  /**
   * calculos findRaw
   */
  export type calculosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * calculos aggregateRaw
   */
  export type calculosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * calculos without action
   */
  export type calculosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calculos
     */
    select?: calculosSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    registro: 'registro',
    tenantid: 'tenantid',
    ativo: 'ativo',
    recuperacodigo: 'recuperacodigo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const DespesasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data: 'data',
    observacao: 'observacao',
    tenantid: 'tenantid',
    valor: 'valor'
  };

  export type DespesasScalarFieldEnum = (typeof DespesasScalarFieldEnum)[keyof typeof DespesasScalarFieldEnum]


  export const ValortotalScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    tenantid: 'tenantid',
    registro: 'registro'
  };

  export type ValortotalScalarFieldEnum = (typeof ValortotalScalarFieldEnum)[keyof typeof ValortotalScalarFieldEnum]


  export const CalculosScalarFieldEnum: {
    id: 'id',
    valortotal: 'valortotal',
    valordespesa: 'valordespesa',
    valorresultado: 'valorresultado',
    tenantid: 'tenantid'
  };

  export type CalculosScalarFieldEnum = (typeof CalculosScalarFieldEnum)[keyof typeof CalculosScalarFieldEnum]


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


  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    registro?: StringFilter<"usuario"> | string
    tenantid?: StringFilter<"usuario"> | string
    ativo?: BoolFilter<"usuario"> | boolean
    recuperacodigo?: StringFilter<"usuario"> | string
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    registro?: SortOrder
    tenantid?: SortOrder
    ativo?: SortOrder
    recuperacodigo?: SortOrder
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    senha?: StringFilter<"usuario"> | string
    registro?: StringFilter<"usuario"> | string
    tenantid?: StringFilter<"usuario"> | string
    ativo?: BoolFilter<"usuario"> | boolean
    recuperacodigo?: StringFilter<"usuario"> | string
  }, "id" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    registro?: SortOrder
    tenantid?: SortOrder
    ativo?: SortOrder
    recuperacodigo?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    registro?: StringWithAggregatesFilter<"usuario"> | string
    tenantid?: StringWithAggregatesFilter<"usuario"> | string
    ativo?: BoolWithAggregatesFilter<"usuario"> | boolean
    recuperacodigo?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type despesasWhereInput = {
    AND?: despesasWhereInput | despesasWhereInput[]
    OR?: despesasWhereInput[]
    NOT?: despesasWhereInput | despesasWhereInput[]
    id?: StringFilter<"despesas"> | string
    nome?: StringFilter<"despesas"> | string
    data?: StringFilter<"despesas"> | string
    observacao?: StringFilter<"despesas"> | string
    tenantid?: StringFilter<"despesas"> | string
    valor?: StringFilter<"despesas"> | string
  }

  export type despesasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    tenantid?: SortOrder
    valor?: SortOrder
  }

  export type despesasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: despesasWhereInput | despesasWhereInput[]
    OR?: despesasWhereInput[]
    NOT?: despesasWhereInput | despesasWhereInput[]
    nome?: StringFilter<"despesas"> | string
    data?: StringFilter<"despesas"> | string
    observacao?: StringFilter<"despesas"> | string
    tenantid?: StringFilter<"despesas"> | string
    valor?: StringFilter<"despesas"> | string
  }, "id">

  export type despesasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    tenantid?: SortOrder
    valor?: SortOrder
    _count?: despesasCountOrderByAggregateInput
    _max?: despesasMaxOrderByAggregateInput
    _min?: despesasMinOrderByAggregateInput
  }

  export type despesasScalarWhereWithAggregatesInput = {
    AND?: despesasScalarWhereWithAggregatesInput | despesasScalarWhereWithAggregatesInput[]
    OR?: despesasScalarWhereWithAggregatesInput[]
    NOT?: despesasScalarWhereWithAggregatesInput | despesasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"despesas"> | string
    nome?: StringWithAggregatesFilter<"despesas"> | string
    data?: StringWithAggregatesFilter<"despesas"> | string
    observacao?: StringWithAggregatesFilter<"despesas"> | string
    tenantid?: StringWithAggregatesFilter<"despesas"> | string
    valor?: StringWithAggregatesFilter<"despesas"> | string
  }

  export type valortotalWhereInput = {
    AND?: valortotalWhereInput | valortotalWhereInput[]
    OR?: valortotalWhereInput[]
    NOT?: valortotalWhereInput | valortotalWhereInput[]
    id?: StringFilter<"valortotal"> | string
    valor?: StringFilter<"valortotal"> | string
    tenantid?: StringFilter<"valortotal"> | string
    registro?: StringFilter<"valortotal"> | string
  }

  export type valortotalOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    tenantid?: SortOrder
    registro?: SortOrder
  }

  export type valortotalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: valortotalWhereInput | valortotalWhereInput[]
    OR?: valortotalWhereInput[]
    NOT?: valortotalWhereInput | valortotalWhereInput[]
    valor?: StringFilter<"valortotal"> | string
    tenantid?: StringFilter<"valortotal"> | string
    registro?: StringFilter<"valortotal"> | string
  }, "id">

  export type valortotalOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    tenantid?: SortOrder
    registro?: SortOrder
    _count?: valortotalCountOrderByAggregateInput
    _max?: valortotalMaxOrderByAggregateInput
    _min?: valortotalMinOrderByAggregateInput
  }

  export type valortotalScalarWhereWithAggregatesInput = {
    AND?: valortotalScalarWhereWithAggregatesInput | valortotalScalarWhereWithAggregatesInput[]
    OR?: valortotalScalarWhereWithAggregatesInput[]
    NOT?: valortotalScalarWhereWithAggregatesInput | valortotalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"valortotal"> | string
    valor?: StringWithAggregatesFilter<"valortotal"> | string
    tenantid?: StringWithAggregatesFilter<"valortotal"> | string
    registro?: StringWithAggregatesFilter<"valortotal"> | string
  }

  export type calculosWhereInput = {
    AND?: calculosWhereInput | calculosWhereInput[]
    OR?: calculosWhereInput[]
    NOT?: calculosWhereInput | calculosWhereInput[]
    id?: StringFilter<"calculos"> | string
    valortotal?: StringFilter<"calculos"> | string
    valordespesa?: StringFilter<"calculos"> | string
    valorresultado?: StringFilter<"calculos"> | string
    tenantid?: StringFilter<"calculos"> | string
  }

  export type calculosOrderByWithRelationInput = {
    id?: SortOrder
    valortotal?: SortOrder
    valordespesa?: SortOrder
    valorresultado?: SortOrder
    tenantid?: SortOrder
  }

  export type calculosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: calculosWhereInput | calculosWhereInput[]
    OR?: calculosWhereInput[]
    NOT?: calculosWhereInput | calculosWhereInput[]
    valortotal?: StringFilter<"calculos"> | string
    valordespesa?: StringFilter<"calculos"> | string
    valorresultado?: StringFilter<"calculos"> | string
    tenantid?: StringFilter<"calculos"> | string
  }, "id">

  export type calculosOrderByWithAggregationInput = {
    id?: SortOrder
    valortotal?: SortOrder
    valordespesa?: SortOrder
    valorresultado?: SortOrder
    tenantid?: SortOrder
    _count?: calculosCountOrderByAggregateInput
    _max?: calculosMaxOrderByAggregateInput
    _min?: calculosMinOrderByAggregateInput
  }

  export type calculosScalarWhereWithAggregatesInput = {
    AND?: calculosScalarWhereWithAggregatesInput | calculosScalarWhereWithAggregatesInput[]
    OR?: calculosScalarWhereWithAggregatesInput[]
    NOT?: calculosScalarWhereWithAggregatesInput | calculosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"calculos"> | string
    valortotal?: StringWithAggregatesFilter<"calculos"> | string
    valordespesa?: StringWithAggregatesFilter<"calculos"> | string
    valorresultado?: StringWithAggregatesFilter<"calculos"> | string
    tenantid?: StringWithAggregatesFilter<"calculos"> | string
  }

  export type usuarioCreateInput = {
    id?: string
    email: string
    senha: string
    registro: string
    tenantid: string
    ativo: boolean
    recuperacodigo: string
  }

  export type usuarioUncheckedCreateInput = {
    id?: string
    email: string
    senha: string
    registro: string
    tenantid: string
    ativo: boolean
    recuperacodigo: string
  }

  export type usuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    recuperacodigo?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    recuperacodigo?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateManyInput = {
    id?: string
    email: string
    senha: string
    registro: string
    tenantid: string
    ativo: boolean
    recuperacodigo: string
  }

  export type usuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    recuperacodigo?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    recuperacodigo?: StringFieldUpdateOperationsInput | string
  }

  export type despesasCreateInput = {
    id?: string
    nome: string
    data: string
    observacao: string
    tenantid: string
    valor: string
  }

  export type despesasUncheckedCreateInput = {
    id?: string
    nome: string
    data: string
    observacao: string
    tenantid: string
    valor: string
  }

  export type despesasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type despesasUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type despesasCreateManyInput = {
    id?: string
    nome: string
    data: string
    observacao: string
    tenantid: string
    valor: string
  }

  export type despesasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type despesasUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    observacao?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type valortotalCreateInput = {
    id?: string
    valor: string
    tenantid: string
    registro: string
  }

  export type valortotalUncheckedCreateInput = {
    id?: string
    valor: string
    tenantid: string
    registro: string
  }

  export type valortotalUpdateInput = {
    valor?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
  }

  export type valortotalUncheckedUpdateInput = {
    valor?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
  }

  export type valortotalCreateManyInput = {
    id?: string
    valor: string
    tenantid: string
    registro: string
  }

  export type valortotalUpdateManyMutationInput = {
    valor?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
  }

  export type valortotalUncheckedUpdateManyInput = {
    valor?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
    registro?: StringFieldUpdateOperationsInput | string
  }

  export type calculosCreateInput = {
    id?: string
    valortotal: string
    valordespesa: string
    valorresultado: string
    tenantid: string
  }

  export type calculosUncheckedCreateInput = {
    id?: string
    valortotal: string
    valordespesa: string
    valorresultado: string
    tenantid: string
  }

  export type calculosUpdateInput = {
    valortotal?: StringFieldUpdateOperationsInput | string
    valordespesa?: StringFieldUpdateOperationsInput | string
    valorresultado?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
  }

  export type calculosUncheckedUpdateInput = {
    valortotal?: StringFieldUpdateOperationsInput | string
    valordespesa?: StringFieldUpdateOperationsInput | string
    valorresultado?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
  }

  export type calculosCreateManyInput = {
    id?: string
    valortotal: string
    valordespesa: string
    valorresultado: string
    tenantid: string
  }

  export type calculosUpdateManyMutationInput = {
    valortotal?: StringFieldUpdateOperationsInput | string
    valordespesa?: StringFieldUpdateOperationsInput | string
    valorresultado?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
  }

  export type calculosUncheckedUpdateManyInput = {
    valortotal?: StringFieldUpdateOperationsInput | string
    valordespesa?: StringFieldUpdateOperationsInput | string
    valorresultado?: StringFieldUpdateOperationsInput | string
    tenantid?: StringFieldUpdateOperationsInput | string
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

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    registro?: SortOrder
    tenantid?: SortOrder
    ativo?: SortOrder
    recuperacodigo?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    registro?: SortOrder
    tenantid?: SortOrder
    ativo?: SortOrder
    recuperacodigo?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    registro?: SortOrder
    tenantid?: SortOrder
    ativo?: SortOrder
    recuperacodigo?: SortOrder
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

  export type despesasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    tenantid?: SortOrder
    valor?: SortOrder
  }

  export type despesasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    tenantid?: SortOrder
    valor?: SortOrder
  }

  export type despesasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    tenantid?: SortOrder
    valor?: SortOrder
  }

  export type valortotalCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tenantid?: SortOrder
    registro?: SortOrder
  }

  export type valortotalMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tenantid?: SortOrder
    registro?: SortOrder
  }

  export type valortotalMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tenantid?: SortOrder
    registro?: SortOrder
  }

  export type calculosCountOrderByAggregateInput = {
    id?: SortOrder
    valortotal?: SortOrder
    valordespesa?: SortOrder
    valorresultado?: SortOrder
    tenantid?: SortOrder
  }

  export type calculosMaxOrderByAggregateInput = {
    id?: SortOrder
    valortotal?: SortOrder
    valordespesa?: SortOrder
    valorresultado?: SortOrder
    tenantid?: SortOrder
  }

  export type calculosMinOrderByAggregateInput = {
    id?: SortOrder
    valortotal?: SortOrder
    valordespesa?: SortOrder
    valorresultado?: SortOrder
    tenantid?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use usuarioDefaultArgs instead
     */
    export type usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use despesasDefaultArgs instead
     */
    export type despesasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = despesasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use valortotalDefaultArgs instead
     */
    export type valortotalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = valortotalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use calculosDefaultArgs instead
     */
    export type calculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = calculosDefaultArgs<ExtArgs>

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