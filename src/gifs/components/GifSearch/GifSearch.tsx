'use client';

import { TextField } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface Props {
	example?: string;
}

export const GifSearch: React.FC<Props> = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const query = JSON.parse(searchParams.get('q') ?? '[]') ?? [];
	const gifSearchParams = new URLSearchParams();
	gifSearchParams.set('q', JSON.stringify(query));
	const lastQuery = query[0];

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const val = e.target as HTMLFormElement;
		const search = val.search as HTMLInputElement;
		const newQuery = search.value;

		if (newQuery.length > 0) {
			gifSearchParams.set('q', JSON.stringify([newQuery, ...query]));
		} else {
			gifSearchParams.delete('q');
		}

		console.log(gifSearchParams.toString().length, 'gifSearchParams');
		const href = `/search?${gifSearchParams.toString()}`;

		router.push(href);
	};
	return (
		<form className='' onSubmit={onSubmit}>
			<TextField
				id='outlined-basic'
				name='search'
				label='Search'
				variant='outlined'
				defaultValue={lastQuery ?? ''}
			/>
		</form>
	);
};
