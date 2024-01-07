import '@testing-library/jest-dom';

vi.mock('next/navigation', () => ({
	...require('next-router-mock'),
	useSearchParams: () => ({ get: vi.fn() }),
}));
vi.stubEnv('NEXT_PUBLIC_GIPHY_API_URL', 'https://api.giphy.com/v1');

vi.mock('next/font/google', () => ({
	...require('next-router-mock'),
	Roboto: vi.fn().mockReturnValue({
		style: {
			fontFamily: 'Roboto',
		},
	}),
}));
