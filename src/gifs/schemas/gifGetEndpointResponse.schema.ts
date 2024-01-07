import { z } from 'zod';

import { paginationSchema } from '@/shared/schemas';

import { gifEndpointSchema } from './gifEndpoint.schema';

export const gifSearchGetEndpointResponseSchema = z.object({
	data: z.array(gifEndpointSchema),
	pagination: paginationSchema,
});
