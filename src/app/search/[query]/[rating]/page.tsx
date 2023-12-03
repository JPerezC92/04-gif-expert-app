import { Box, Typography } from '@mui/material';

import { GifSearch, GifSearchResult } from '@/gifs/components';
import { Ratings } from '@/gifs/domain';
import { GifsProdRepository } from '@/gifs/services';

interface Props {
	params: Record<string, string>;
}

const gifsRepository = GifsProdRepository();
export default async function RatingPage({ params }: Props) {
	let { query, rating } = params;
	query = decodeURI(query);
	rating = decodeURI(rating);
	const _rating = Ratings.exists(rating) ? rating : Ratings.values.g;

	const result = await gifsRepository.findByCriteria({
		rating: _rating,
		query,
	});

	return (
		<Box display='flex' gap={2} flexWrap='wrap'>
			<Box width='100%' display='flex' justifyContent='center'>
				<GifSearch q={query} rating={rating} />
			</Box>

			<Box flexGrow='1'>
				<Box display='flex' flexDirection='column' marginBlockStart={4}>
					<Typography variant='h2' fontSize='2.5rem'>
						Searh{' '}
						<Box component='span' fontStyle='italic'>
							{query}
						</Box>
					</Typography>

					<GifSearchResult
						initialData={result}
						query={query}
						rating={_rating}
					/>
				</Box>
			</Box>
		</Box>
	);
}
