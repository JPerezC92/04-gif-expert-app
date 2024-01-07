import { z } from 'zod';

import { gifEndpointSchema } from './gifEndpoint.schema';

export const gifGetEndpointResponseSchema = z.object({
	data: gifEndpointSchema,
});
