import { createEnum, type EnumInfer } from '@/shared/utils';

export const Ratings = createEnum('g', 'pg', 'pg-13', 'r');

export type Rating = EnumInfer<typeof Ratings>;

export class RatingParam {
	static key = 'rating' as const;
	value: Rating | '' = '';

	constructor(value?: (Rating | null) | string) {
		if (value && typeof value === 'string' && Ratings.exists(value)) {
			this.value = value;
		}
	}

	static create(v?: (Rating | null) | string): RatingParam {
		return new RatingParam(v);
	}

	setRating(rating: Rating) {
		this.value = rating;
		return rating;
	}
}
