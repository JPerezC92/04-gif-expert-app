import { z } from 'zod';

import { paginationSchema } from '@/shared/schemas';

import { gifEndpointSchema } from './gifEndpoint.schema';

export const gifGetEndpointResponseSchema = z.object({
	data: z.array(gifEndpointSchema),
	pagination: paginationSchema,
});
