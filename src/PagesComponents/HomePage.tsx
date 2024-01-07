import { Box, Button, List, ListItem, Typography } from '@mui/material';
import fontColorContrast from 'font-color-contrast';
import Link from 'next/link';

import { GifGrid, GifLatestSearch, GifSearch } from '@/gifs/components';
import { type GifsRepository, SearchesParam } from '@/gifs/domain';
import { type PagePropis, randomColor } from '@/shared/utils';

export interface Props extends Required<PagePropis> {
	gifsRepository: GifsRepository;
}

export async function HomePage({ searchParams, gifsRepository }: Props) {
	const gifList = await gifsRepository.trending();
	const trendingSearches = await gifsRepository.trendingSearches();
	const searches = SearchesParam.create(searchParams[SearchesParam.key]);

	return (
		<>
			<Box component='main' marginBlockEnd='2rem'>
				<GifSearch />

				<Typography variant='h2' fontWeight='600'>
					Trending
				</Typography>

				<Box
					display='grid'
					gridTemplateColumns={{ md: '1fr 20rem' }}
					gap='1rem'
				>
					<GifGrid gifList={gifList} />

					<Box marginInline='1rem'>
						<GifLatestSearch searchParams={searchParams} />

						<Typography variant='h6' fontWeight='600'>
							Trending Searches
						</Typography>

						<List
							sx={{
								display: 'flex',
								flexWrap: 'wrap-reverse',
								gap: '0.25rem',
							}}
						>
							{trendingSearches.map(search => {
								const color = randomColor();
								return (
									<ListItem
										key={search}
										sx={{ width: 'fit-content', padding: '0' }}
									>
										<Button
											sx={{
												bgcolor: color,
												color: fontColorContrast(color),
												transition: 'all 0.2s ease-in-out',
												':hover': {
													bgcolor: color,
													color: fontColorContrast(color),
													filter: 'brightness(0.8)',
												},
											}}
											component={Link}
											href={`/search/${search}/g?q=${searches
												.newSearch(search)
												.toString()}`}
										>
											{search}
										</Button>
									</ListItem>
								);
							})}
						</List>
					</Box>
				</Box>
			</Box>
		</>
	);
}
