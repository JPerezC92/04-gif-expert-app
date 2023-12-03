import { type GifFindCriteria } from '@/gifs/domain';
import { type PaginatedResponse } from '@/shared/models';

import { type Gif } from './gif.model';

export interface GifsRepository {
	findByCriteria: (
		gifFindCriteria: GifFindCriteria,
	) => Promise<PaginatedResponse<Gif>>;
	trending: () => Promise<Gif[]>;
}
