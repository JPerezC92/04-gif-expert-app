'use client';

import {
	Box,
	Button,
	ButtonGroup,
	List,
	ListItem,
	Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { GifSearchRemoval } from '@/gifs/components/GifSearchRemoval';
import { SearchesParam } from '@/gifs/domain';
import { appRoutes } from '@/shared/routes';
import { type PagePros } from '@/shared/utils';

interface Props extends Pick<Required<PagePros>, 'searchParams'> {
	rating?: string;
}

export const GifLatestSearch: React.FC<Props> = ({
	rating = 'g',
	searchParams,
}) => {
	const s = SearchesParam.create(searchParams[SearchesParam.key]);
	const latestSearches = s.toArray();

	return (
		<Box display={latestSearches.length ? 'block' : 'none'}>
			<Typography variant='h6' fontWeight='600'>
				Latest Searches{' '}
			</Typography>

			<List>
				{latestSearches.map(search => (
					<ListItem
						className='search'
						key={search}
						sx={{ display: 'inline-flex', padding: '0', gap: '0.5rem' }}
					>
						<ButtonGroup>
							<GifSearchRemoval search={search} searchParams={searchParams} />
							<Button
								component={Link}
								variant='text'
								href={`${appRoutes.search}/${search}/${rating}?q=${s
									.newSearch(search)
									.toString()}`}
							>
								{search}
							</Button>
						</ButtonGroup>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
