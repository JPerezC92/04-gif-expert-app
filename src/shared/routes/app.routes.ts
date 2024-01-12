const base = 'http://localhost:3000';

export const appRoutes = {
	base,
	search: `${base}/search`,
	gifs: `${base}/gifs`,
} as const;
