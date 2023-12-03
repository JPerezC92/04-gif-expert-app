import { type Rating } from '@/gifs/domain';

export interface GifFindCriteria {
	query: string;
	rating: Rating;
	offset?: number;
	limit?: number;
}

export const gifFindCriteriaBehavior = {
	LIMIT: 15,
	nextOffset: ({
		offset,
		limit,
	}: Required<Pick<GifFindCriteria, 'limit' | 'offset'>>) => offset + limit + 1,
};
