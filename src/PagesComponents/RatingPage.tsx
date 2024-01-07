import { Box, Typography } from '@mui/material';

import { GifSearch, GifSearchResult } from '@/gifs/components';
import { type GifsRepository, Ratings } from '@/gifs/domain';
import { type PagePropis } from '@/shared/utils';

interface Params {
	query: string;
	rating: string;
}

interface Props extends PagePropis {
	gifsRepository: GifsRepository;
}

export async function RatingPage({ params, gifsRepository }: Props) {
	let { query, rating } = params as Params;
	query = decodeURI(query);
	rating = decodeURI(rating);
	const _rating = Ratings.exists(rating) ? rating : Ratings.values.g;

	const result = await gifsRepository.findByCriteria({
		rating: _rating,
		query,
	});

	return (
		<>
			<Box display='flex' gap={2} flexWrap='wrap'>
				<GifSearch q={query} rating={rating} />

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
		</>
	);
}
