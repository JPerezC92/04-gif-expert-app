import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { GifMother } from '@/__TESTS__/gifs';
import { type GifsRepository } from '@/gifs/domain';
import { GifDetailPage } from '@/src/PagesComponents';

const mockRepository = mock<GifsRepository>();

describe('<GifDetailPage />', () => {
	it('should render a gif', async () => {
		// Given
		mockRepository.findById.mockResolvedValueOnce(
			GifMother.create({ title: 'fluffy cat' }),
		);

		render(
			await GifDetailPage({
				params: { detail: 'cat' },
				gifsRepository: mockRepository,
			}),
		);

		// When
		const gif = await screen.findByTitle('fluffy cat');

		// Then
		expect(gif).toBeInTheDocument();
	});

	it('should have the gif title', async () => {
		// Given
		mockRepository.findById.mockResolvedValueOnce(
			GifMother.create({ title: 'fluffy cat' }),
		);

		render(
			await GifDetailPage({
				params: { detail: 'cat' },
				gifsRepository: mockRepository,
			}),
		);

		// When
		const title = await screen.findByRole('heading', { level: 2 });

		// Then
		expect(title).toBeInTheDocument();
	});
});
