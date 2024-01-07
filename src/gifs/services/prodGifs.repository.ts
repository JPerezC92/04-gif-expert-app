import { GifEndpointToDomainAdapter } from '@/gifs/adapters';
import { gifFindCriteriaBehavior, type GifsRepository } from '@/gifs/domain';
import {
	gifGetEndpointResponseSchema,
	gifSearchGetEndpointResponseSchema,
} from '@/gifs/schemas';
import { trendingSearchesSchema } from '@/gifs/schemas/trendingSearchesSchema';
import { environment } from '@/shared/utils';

export function ProdGifsRepository(): GifsRepository {
	return {
		findByCriteria: async ({
			query,
			rating,
			offset = 0,
			limit = gifFindCriteriaBehavior.LIMIT,
		}) => {
			const params = new URLSearchParams();
			params.set('api_key', environment.GIPHY_API_KEY);
			params.set('q', query);
			params.set('limit', limit.toString());
			params.set('rating', rating);
			params.set('offset', offset.toString());
			params.set('lang', 'en');

			const res = await fetch(
				`${environment.GIPHY_API_URL}/gifs/search?${params.toString()}`,
			);

			const json = await res.json();

			if (!res.ok) {
				throw new Error(json);
			}

			const validated = gifSearchGetEndpointResponseSchema.parse(json);

			return {
				data: validated.data.map(GifEndpointToDomainAdapter),
				pagination: {
					count: validated.pagination.count,
					offset: validated.pagination.offset,
					totalCount: validated.pagination.total_count,
				},
			};
		},

		trending: async () => {
			const params = new URLSearchParams();
			const limit = 21;
			params.set('api_key', environment.GIPHY_API_KEY);
			params.set('limit', limit.toString());
			params.set('rating', 'g');
			params.set('lang', 'en');

			const res = await fetch(
				`${environment.GIPHY_API_URL}/gifs/trending?${params.toString()}`,
			);

			const json = await res.json();

			if (!res.ok) {
				throw new Error(json);
			}

			const validated = gifSearchGetEndpointResponseSchema.parse(json);

			return validated.data.map(GifEndpointToDomainAdapter);
		},

		findById: async id => {
			const params = new URLSearchParams();
			params.set('api_key', environment.GIPHY_API_KEY);

			const res = await fetch(
				`${environment.GIPHY_API_URL}/gifs/${id}?${params.toString()}`,
			);

			const json = await res.json();

			if (!res.ok) {
				throw new Error('Gif not found');
			}

			const validated = gifGetEndpointResponseSchema.parse(json);

			return GifEndpointToDomainAdapter(validated.data);
		},

		trendingSearches: async () => {
			const res = await fetch(
				`${environment.GIPHY_API_URL}/trending/searches?api_key=${environment.GIPHY_API_KEY}`,
			);

			const json = await res.json();

			if (!res.ok) {
				throw new Error(json);
			}

			const validated = trendingSearchesSchema.parse(json);

			return validated.data;
		},
	};
}
