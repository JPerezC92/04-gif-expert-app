import { z } from 'zod';

export const trendingSearchesSchema = z.object({
	data: z.array(z.string()),
});
