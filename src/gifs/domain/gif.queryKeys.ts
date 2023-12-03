import { type GifFindCriteria } from '@/gifs/domain';

export const gifQueryKeys = {
	all: ['GIF'],
	infinite: (criteria: Omit<GifFindCriteria, 'offset'>) =>
		[...gifQueryKeys.all, criteria.rating, criteria.query] as const,
} as const;
