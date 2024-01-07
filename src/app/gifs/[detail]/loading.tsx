import { Box, Skeleton } from '@mui/material';

export default function Loading() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				marginBlock: '2rem',
			}}
			role='alert'
			aria-busy='true'
		>
			<Skeleton height='72px' variant='rectangular' />
			<Skeleton height='800px' variant='rectangular' />
		</Box>
	);
}
