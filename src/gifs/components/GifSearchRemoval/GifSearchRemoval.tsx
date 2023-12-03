'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { SearchesParam } from '@/gifs/domain';
import { appRoutes } from '@/shared/routes';

interface Props {
	search: string;
}

export const GifSearchRemoval: React.FC<Props> = ({ search }) => {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();
	const searchesParam = SearchesParam.create(
		searchParams.get(SearchesParam.key),
	);

	const { query = '', rating = '' } = params;

	return (
		<button
			onClick={() => {
				const params = new URLSearchParams(searchParams);
				const newSearchesParam = searchesParam.removeSearch(search);
				params.set(SearchesParam.key, newSearchesParam.toString());
				const href = `${appRoutes.search}/${query as string}/${
					rating as string
				}?${params.toString()}`;
				router.push(href);
			}}
		>
			X
		</button>
	);
};
