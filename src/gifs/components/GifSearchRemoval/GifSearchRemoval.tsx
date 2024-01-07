import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import { SearchesParam } from '@/gifs/domain';
import { type PageParams } from '@/shared/models';
import { appRoutes } from '@/shared/routes';

interface Props {
	search: string;
	searchParams: PageParams;
}

export const GifSearchRemoval: React.FC<Props> = ({ search, searchParams }) => {
	const searchesParam = SearchesParam.create(searchParams[SearchesParam.key]);
	const newSearchesParam = searchesParam.removeSearch(search);
	const params = new URLSearchParams(searchParams);
	params.set(SearchesParam.key, newSearchesParam.toString());

	const isJustOneSearch = searchesParam.toArray().length === 1;
	const href = isJustOneSearch
		? appRoutes.base
		: `${appRoutes.base}/?${
				searchesParam.toArray().length ? params.toString() : ''
		  }`;

	return (
		<Button
			sx={{ paddingInline: '0.25rem' }}
			variant='text'
			LinkComponent={Link}
			startIcon={<FaRegTrashAlt />}
			href={href}
		/>
	);
};
