import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import * as useRouter from 'next/navigation';
import { expect } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { GifSearch } from '@/gifs/components';
import { appRoutes } from '@/shared/routes';

describe('<GifSearch />', () => {
	it('should contain a form with a search input and a rating select', () => {
		// Given
		render(<GifSearch />);

		// When
		const searchForm = screen.getByRole('form');
		const searchInput = screen.getByRole('textbox');
		const ratingSelect = screen.getByRole('combobox');

		// Then
		expect(searchForm).toBeInTheDocument();
		expect(searchInput).toBeInTheDocument();
		expect(ratingSelect).toBeInTheDocument();
	});

	it('should trigger a search when the form is submitted', async () => {
		// Given
		const push = vi.fn();
		const routerMock = mock<AppRouterInstance>();
		routerMock.push.mockImplementation(push);
		vi.spyOn(useRouter, 'useRouter').mockReturnValue(routerMock);

		render(<GifSearch />);

		// When
		const searchInput = await screen.findByRole('textbox');
		const submitButton = await screen.findByRole('button', {
			name: 'Search',
		});
		await userEvent.type(searchInput, 'cat');
		await userEvent.click(submitButton);

		// Then
		expect(searchInput).toHaveValue('cat');
		expect(routerMock.push).toHaveBeenCalled();
		expect(routerMock.push).toHaveBeenCalledWith(
			expect.stringContaining(`${appRoutes.search}/cat/g`),
		);
	});
});
