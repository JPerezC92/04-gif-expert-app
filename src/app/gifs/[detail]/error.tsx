'use client'; // Error components must be Client Components

import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect } from 'react';

export default function GifDetailErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error.message, 'GifDetailError');
	}, [error]);

	return (
		<Box marginBlock='2rem'>
			<Typography
				variant='h2'
				fontSize={{
					xs: '2rem',
					sm: '2.5rem',
					md: '3rem',
					lg: '3.5rem',
					xl: '4rem',
				}}
				marginBlockEnd='1rem'
			>
				Hey, something went wrong 🤔!
			</Typography>

			<Box display='flex' flexDirection='column' gap='1rem' width='max-content'>
				<Button
					variant='outlined'
					color='warning'
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => {
							reset();
						}
					}
				>
					We can try to fix it 🛠️!
				</Button>

				<Button variant='contained' LinkComponent={Link} href='/'>
					Let&apos;s go back home 🏠!
				</Button>
			</Box>
		</Box>
	);
}
