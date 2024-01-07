import { Box, Typography } from '@mui/material';

import { Gif } from '@/gifs/components/Gif';
import { type GifsRepository } from '@/gifs/domain';
import { type PagePropis } from '@/shared/utils';

interface Props extends PagePropis {
	gifsRepository: GifsRepository;
}
export interface Params {
	detail: string;
}
export async function GifDetailPage({ params, gifsRepository }: Props) {
	const { detail } = params as Params;

	const gif = await gifsRepository.findById(detail);

	return (
		<>
			<Box marginBlock='2rem'>
				<Typography variant='h2' marginBlockEnd='1rem'>
					{gif.title} | {gif.rating.toUpperCase()}
				</Typography>

				<Gif gif={gif} sx={{ pointerEvents: 'none' }} />
			</Box>
		</>
	);
}
