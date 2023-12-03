import { z } from 'zod';

export const imageEndpointSchema = z.object({
	height: z.string(),
	width: z.string(),
	url: z.string(),
});

export type ImageEndpointDto = z.infer<typeof imageEndpointSchema>;
