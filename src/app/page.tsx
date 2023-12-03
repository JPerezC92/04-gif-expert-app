import { Box, Typography } from '@mui/material';

import { GifGrid, GifLatestSearch, GifSearch } from '@/gifs/components';
import { GifsProdRepository } from '@/gifs/services';

export default async function Home() {
	const gif = await GifsProdRepository().trending();

	return (
		<main>
			<Box width='100%' display='flex' justifyContent='center'>
				<GifSearch />
			</Box>

			<Typography variant='h3'>Home</Typography>

			<Box maxWidth='1280px' margin='auto'>
				<GifGrid gifList={gif} />
			</Box>

			<GifLatestSearch />
		</main>
	);
}
