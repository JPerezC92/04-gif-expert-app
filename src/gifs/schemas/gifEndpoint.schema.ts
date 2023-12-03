import { z } from 'zod';

import { Ratings } from '@/gifs/domain';

import { imageEndpointSchema } from './imageEndpoint.schema';

export const gifEndpointSchema = z.object({
	type: z.string(),
	id: z.string(),
	slug: z.string(),
	title: z.string(),
	rating: z.enum(Ratings.iterable),
	images: z.object({
		original: imageEndpointSchema,
		fixed_height: imageEndpointSchema,
	}),
});

export type GifEndpointDto = z.infer<typeof gifEndpointSchema>;
