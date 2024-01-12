import type React from 'react';

export interface PagePros {
	params?: object | Record<string, string>;
	searchParams?: object & Record<string, string>;
}

export function Page(
	element: React.FC<Required<PagePros>>,
): React.FC<Required<PagePros>> {
	return (props: Required<PagePros>) => element(props);
}

export function PageAsync(
	element: <T extends Required<PagePros>>(p: T) => Promise<React.JSX.Element>,
) {
	return async (props: Required<PagePros>) => await element(props);
}
