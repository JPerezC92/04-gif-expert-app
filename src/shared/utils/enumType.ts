export function createEnum<T extends Readonly<string[]>>(...args: T) {
	return {
		iterable: args,
		values: Object.freeze(args.reduce((a, b) => ({ ...a, [b]: b }), {})) as {
			[key in T[number]]: key;
		},
		exists: (value: string): value is T[number] => args.includes(value),
	} as const;
}

export type EnumInfer<T> = T extends { iterable: infer U }
	? U extends Readonly<Array<infer V>>
		? V
		: never
	: never;
