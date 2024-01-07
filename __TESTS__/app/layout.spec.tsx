vi.mock('@/shared/providers/AppProviders/AppProviders', _ => ({
	AppProviders: () => <></>,
}));

import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import RootLayout from '@/src/app/layout';

describe('<RootLayout />', () => {
	it('should render the a header', () => {
		// Given
		render(
			<RootLayout>
				<div>test</div>
			</RootLayout>,
		);

		// When
		const header = screen.getByRole('banner');

		// Then
		expect(header).toBeInTheDocument();
		expect(header).toHaveTextContent(/Snap flicks/i);
	});
});
