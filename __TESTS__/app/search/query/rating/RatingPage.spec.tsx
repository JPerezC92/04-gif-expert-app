import { render, screen, within } from '@testing-library/react';
import { expect } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { GifMother } from '@/__TESTS__/gifs';
import { AppWrapper } from '@/__TESTS__/utils';
import { type GifsRepository } from '@/gifs/domain';
import { RatingPage } from '@/src/PagesComponents';

const gifsRepositoryMock = mock<GifsRepository>();
gifsRepositoryMock.findByCriteria.mockResolvedValue({
	data: [
		GifMother.create({ title: 'gif1' }),
		GifMother.create({ title: 'gif2' }),
		GifMother.create({ title: 'gif3' }),
		GifMother.create({ title: 'gif4' }),
		GifMother.create({ title: 'gif5' }),
		GifMother.create({ title: 'gif6' }),
		GifMother.create({ title: 'gif7' }),
		GifMother.create({ title: 'gif8' }),
		GifMother.create({ title: 'gif9' }),
		GifMother.create({ title: 'gif10' }),
		GifMother.create({ title: 'gif11' }),
		GifMother.create({ title: 'gif12' }),
		GifMother.create({ title: 'gif13' }),
		GifMother.create({ title: 'gif14' }),
		GifMother.create({ title: 'gif15' }),
	],
	pagination: { totalCount: 0, count: 0, offset: 0 },
});
const IntersectionObserverMock = mock<IntersectionObserver>();

describe('<RatingPage />', () => {
	beforeEach(() => {
		IntersectionObserverMock.observe.mockImplementation(() => vi.fn());
		IntersectionObserverMock.disconnect.mockImplementation(vi.fn());
		window.IntersectionObserver = vi.fn(() => IntersectionObserverMock);
	});

	it('should contain a search form', async () => {
		// Given
		render(
			await RatingPage({
				gifsRepository: gifsRepositoryMock,
				params: { query: '', rating: '' },
			}),
			{ wrapper: AppWrapper() },
		);

		// When
		const searchForm = document.querySelector('form');

		// Then
		expect(searchForm).toBeInTheDocument();
	});

	it('should contain a search text as a title', async () => {
		// Given
		render(
			await RatingPage({
				gifsRepository: gifsRepositoryMock,
				params: { query: 'my-gif-search', rating: '' },
			}),
			{ wrapper: AppWrapper() },
		);

		// When
		const title = screen.getByRole('heading', { level: 2 });

		// Then
		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('my-gif-search');
	});

	it('should contain a search result', async () => {
		// Given
		render(
			await RatingPage({
				gifsRepository: gifsRepositoryMock,
				params: { query: '', rating: '' },
			}),
			{ wrapper: AppWrapper() },
		);

		// When
		const searchResult = screen.getByRole('list');

		// Then
		expect(searchResult).toBeInTheDocument();
		expect(within(searchResult).getByTitle('gif1')).toBeInTheDocument();
		expect(within(searchResult).getByTitle('gif2')).toBeInTheDocument();
	});

	it('should contain a search result with 15 gifs', async () => {
		// Given
		render(
			await RatingPage({
				gifsRepository: gifsRepositoryMock,
				params: { query: '', rating: '' },
			}),
			{ wrapper: AppWrapper() },
		);

		// When
		const searchResult = screen.getByRole('list');

		// Then
		expect(searchResult).toBeInTheDocument();
		expect(within(searchResult).getAllByRole('listitem')).toHaveLength(15);
	});

	
});
