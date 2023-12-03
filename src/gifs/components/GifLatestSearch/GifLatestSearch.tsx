'use client';

import { Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { GifSearchRemoval } from '@/gifs/components/GifSearchRemoval';
import { SearchesParam } from '@/gifs/domain';
import { appRoutes } from '@/shared/routes';

interface Props {
	rating?: string;
}

export const GifLatestSearch: React.FC<Props> = ({ rating = 'g' }) => {
	const queryParams = useSearchParams();
	const s = SearchesParam.create(queryParams.get(SearchesParam.key));
	const latestSearches = s.toArray();

	return (
		<Box display={latestSearches.length ? 'block' : 'none'}>
			<h3>Latest Searches</h3>
			<ol>
				{latestSearches.map(search => (
					<li className='search' key={search}>
						<MuiLink
							component={Link}
							href={`${
								appRoutes.search
							}/${search}/${rating}?${queryParams.toString()}`}
						>
							{search}
						</MuiLink>
						- <GifSearchRemoval search={search} />
					</li>
				))}
			</ol>
		</Box>
	);
};
