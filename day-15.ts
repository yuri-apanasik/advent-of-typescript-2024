type Counter<T extends string, L extends string[] = [], S extends string = '', Accumulator extends [string, number][] = []> = 
  T extends `${infer First}${infer Rest}`
    ? First extends '-'
      ? S extends `${infer _}${infer _}`
			  ? Counter<Rest, ['-'], '', [...Accumulator, [S, Accumulator['length'] extends 0 ? 0 : L['length']]]>
				: Counter<Rest, [...L, '-'], '', Accumulator>
      : Counter<Rest, L, `${S}${First}`, Accumulator>
    : S extends `${infer _}${infer _}`
		  ? [...Accumulator, [S, L['length']]]
			: Accumulator;

type GetRoute<T extends string> = Counter<T>;
