import { z } from 'zod';

export const paginationSchema = z.object({
	count: z.number().int().nonnegative(),
	offset: z.number().int().nonnegative(),
	total_count: z.number().int().nonnegative(),
});

export type Pagination = z.infer<typeof paginationSchema>;
