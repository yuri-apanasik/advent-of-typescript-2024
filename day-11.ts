type Excuse<T> = new (obj: T) => T extends Record<infer K extends string, infer V extends string> ? `${K}: ${V}` : never;
