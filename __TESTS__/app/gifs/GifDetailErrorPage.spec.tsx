import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import GifDetailErrorPage from '@/src/app/gifs/[detail]/error';

describe('<GifDetailErrorPage />', () => {
	it('should contain the error message', async () => {
		// Given
		render(
			<GifDetailErrorPage
				error={new Error('something went wrong')}
				reset={vi.fn()}
			/>,
		);

		// When
		const error = await screen.findByText(/something went wrong/i);

		// Then
		expect(error).toBeInTheDocument();
	});

	it('should contain the reset button', async () => {
		// Given
		render(
			<GifDetailErrorPage
				error={new Error('something went wrong')}
				reset={vi.fn()}
			/>,
		);

		// When
		const button = await screen.findByRole('button');

		// Then
		expect(button).toBeInTheDocument();
	});

	it('should call reset when the button is clicked', async () => {
		// Given
		const reset = vi.fn();
		render(
			<GifDetailErrorPage
				error={new Error('something went wrong')}
				reset={reset}
			/>,
		);

		// When
		const button = await screen.findByRole('button');
		button.click();

		// Then
		expect(reset).toHaveBeenCalled();
	});

	it('should contain the home link', async () => {
		// Given
		render(
			<GifDetailErrorPage
				error={new Error('something went wrong')}
				reset={vi.fn()}
			/>,
		);

		// When
		const button = await screen.findByRole('link', { name: /home/i });

		// Then
		expect(button).toBeInTheDocument();
	});

	it('should link to the home page', async () => {
		// Given
		render(
			<GifDetailErrorPage
				error={new Error('something went wrong')}
				reset={vi.fn()}
			/>,
		);

		// When
		const link = await screen.findByRole('link', { name: /home/i });

		// Then
		expect(link).toHaveAttribute('href', '/');
	});
});
