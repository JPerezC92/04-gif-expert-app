export type PageParams<T = void> = T extends object
	? T
	: Record<string, string>;
