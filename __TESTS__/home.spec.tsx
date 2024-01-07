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

	it('should render correctly', async () => {
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
});
