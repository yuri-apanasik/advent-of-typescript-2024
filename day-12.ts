type NaughtyOrNice<T extends string, L extends number, Accumulator extends string[] = []> = 
  Accumulator['length'] extends L
    ? false
    : T extends `${infer First}${infer Rest}`
      ? NaughtyOrNice<Rest, L, ['', ...Accumulator]>
      : true;

type FormatNames<T extends [string, string, string][]> = {
  [K in Exclude<keyof T, keyof []>]: T[K] extends [string, string, string] ? {
    name: T[K][0],
    count: T[K][2] extends `${infer TCount extends number}` ? TCount : never,
    rating: NaughtyOrNice<T[K][0], 5> extends true ? 'naughty' : 'nice',
  } : never;
} & { 'length': T['length'] };
