import '@testing-library/jest-dom';

export const push = vi.fn();
vi.mock('next/navigation', () => ({
	...require('next-router-mock'),
	useSearchParams: () => ({ get: vi.fn() }),
	push,
}));

vi.stubEnv('NEXT_PUBLIC_GIPHY_API_URL', 'https://api.giphy.com/v1');

vi.mock('next/font/google', () => ({
	...require('next/font/google'),
	Roboto: vi.fn().mockReturnValue({
		style: {
			fontFamily: 'Roboto',
		},
	}),
}));
