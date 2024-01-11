import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { GifMother } from '@/__TESTS__/gifs';
import { type GifsRepository } from '@/gifs/domain';
import { HomePage } from '@/src/PagesComponents';

const gifsRepository = mock<GifsRepository>();

describe('Home', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it('should contain a list of gifs', async () => {
		// Given
		const gifsList = [GifMother.create(), GifMother.create()];
		gifsRepository.trending.mockResolvedValueOnce(gifsList);
		gifsRepository.trendingSearches.mockResolvedValueOnce(['cat', 'dog']);

		render(await HomePage({ params: {}, searchParams: {}, gifsRepository }));

		// When
		const gifs = await screen.findAllByRole('img');

		// Then
		expect(gifs.length).toBe(gifsList.length * 2);
	});

	it('should contain a list of latest searches', async () => {
		// Given
		const gifsList = [GifMother.create(), GifMother.create()];
		const searches: string[] = [];
		gifsRepository.trending.mockResolvedValueOnce(gifsList);
		gifsRepository.trendingSearches.mockResolvedValueOnce(searches);

		render(
			await HomePage({
				params: {},
				searchParams: {
					q: '["cat","dog"]',
				},
				gifsRepository,
			}),
		);

		// When
		const catSearch = await screen.findByRole('link', { name: 'cat' });
		const dogSearch = await screen.findByRole('link', { name: 'dog' });

		// Then
		expect(catSearch).toBeInTheDocument();
		expect(dogSearch).toBeInTheDocument();
	});

	it('should contain a list of trending searches', async () => {
		// Given
		const gifsList = [GifMother.create(), GifMother.create()];
		const trendingSearches = ['cat', 'dog'];
		gifsRepository.trending.mockResolvedValueOnce(gifsList);
		gifsRepository.trendingSearches.mockResolvedValueOnce(trendingSearches);

		render(await HomePage({ params: {}, searchParams: {}, gifsRepository }));

		// When
		const catSearch = await screen.findByTitle('cat');
		const dogSearch = await screen.findByTitle('dog');

		// Then
		expect(catSearch).toBeInTheDocument();
		expect(dogSearch).toBeInTheDocument();
	});

	it('should contain a search form', async () => {
		// Given
		const gifsList = [GifMother.create(), GifMother.create()];
		gifsRepository.trending.mockResolvedValueOnce(gifsList);
		gifsRepository.trendingSearches.mockResolvedValueOnce(['cat', 'dog']);

		render(await HomePage({ params: {}, searchParams: {}, gifsRepository }));

		// When
		const searchForm = await screen.findByRole('form');

		// Then
		expect(searchForm).toBeInTheDocument();
	});
});
