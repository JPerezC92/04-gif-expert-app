'use client';
import { Box, IconButton, MenuItem, Paper, TextField } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

import { Ratings, SearchesParam } from '@/gifs/domain';
import { appRoutes } from '@/shared/routes';
import { theme } from '@/ui/ThemeRegistry';

interface Props {
	q?: string;
	rating?: string;
}

export function GifSearch({ q = '', rating = Ratings.values.g }: Props) {
	const router = useRouter();
	const params = useSearchParams();
	const searchesParam = SearchesParam.create(params.get(SearchesParam.key));

	const [search, setSearch] = React.useState(q);
	const [_rating, setRating] = React.useState(rating);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const newSearch = search || 'You must enter a search term';
		const newRating = _rating;
		const searchParams = new URLSearchParams(params);

		searchParams.set(
			SearchesParam.key,
			searchesParam.newSearch(newSearch).toString(),
		);

		const href = `${
			appRoutes.search
		}/${newSearch}/${newRating}?${searchParams.toString()}`;

		router.push(href);
	};

	return (
		<Box
			width='100%'
			display='flex'
			justifyContent='center'
			marginBottom='1rem'
			position='sticky'
			paddingBlock='1.5rem'
			zIndex={2}
			top='0'
			sx={{
				':before': {
					content: '""',
					position: 'absolute',
					top: '0',
					left: '0',
					width: 'calc(100% + 2px)',
					height: '100%',
					backgroundColor: theme.palette.background.default,
					zIndex: '-1',
					transform: 'translateX(-1px)',
				},
			}}
		>
			<Paper
				role='form'
				sx={{ padding: '1rem 2rem' }}
				component='form'
				onSubmit={onSubmit}
			>
				<TextField
					id='outlined-basic'
					label='Rating'
					name='rating'
					onChange={e => {
						setRating(e.target.value);
					}}
					value={_rating}
					select
					sx={{ minWidth: '10ch' }}
					variant='outlined'
				>
					<MenuItem value='1'>Ratings</MenuItem>
					{Ratings.iterable.map(rating => (
						<MenuItem key={rating} value={rating}>
							{rating}
						</MenuItem>
					))}
				</TextField>

				<TextField
					InputProps={{
						endAdornment: (
							<IconButton type='submit' title='Search'>
								<IoIosSearch />
							</IconButton>
						),
					}}
					id='outlined-basic'
					name='search'
					title='Search field'
					label='Search'
					onChange={e => {
						setSearch(e.target.value);
					}}
					value={search}
					variant='outlined'
				/>
			</Paper>
		</Box>
	);
}
