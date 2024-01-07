import type React from 'react';

// import { type PageParams } from '@/shared/models';

export interface PagePropis {
	params?: object | Record<string, string>;
	searchParams?: object & Record<string, string>;
}

export function Page(
	element: React.FC<Required<PagePropis>>,
): React.FC<Required<PagePropis>> {
	return (props: Required<PagePropis>) => element(props);
}

export function PageAsync(
	element: <T extends Required<PagePropis>>(p: T) => Promise<React.JSX.Element>,
) {
	return async (props: Required<PagePropis>) => await element(props);
}
