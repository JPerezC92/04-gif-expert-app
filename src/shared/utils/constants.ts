export const environment = {
	GIPHY_API_KEY: process.env.NEXT_PUBLIC_GIPHY_API_KEY ?? 'YOUR_API_KEY',
	GIPHY_API_URL: process.env.NEXT_PUBLIC_GIPHY_API_URL ?? 'YOUR_API_URL',
} as const;
