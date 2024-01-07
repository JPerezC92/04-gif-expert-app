'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';

import { GifGrid } from '@/gifs/components/GifGrid/GifGrid';
import {
	type Gif as GifModel,
	gifFindCriteriaBehavior,
	type GifsRepository,
	type Rating,
} from '@/gifs/domain';
import { gifQueryKeys } from '@/gifs/domain/gif.queryKeys';
import { ProdGifsRepository } from '@/gifs/services';
import { useIsNearScreen } from '@/shared/hooks';
import { type PaginatedResponse } from '@/shared/models';

interface Props {
	initialData: PaginatedResponse<GifModel>;
	query: string;
	rating: Rating;
	gifsRepository?: GifsRepository;
}

export function GifSearchResult({
	initialData,
	query,
	rating,
	gifsRepository = ProdGifsRepository(),
}: Props) {
	const { fetchNextPage, data, isLoading, isFetching, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: gifQueryKeys.infinite({ query, rating }),
			queryFn: async ({ pageParam: offset }) => {
				const data = await gifsRepository.findByCriteria({
					query,
					rating,
					offset,
				});

				return data;
			},
			getNextPageParam: lastPage =>
				gifFindCriteriaBehavior.nextOffset({
					offset: lastPage.pagination.offset,
					limit: gifFindCriteriaBehavior.LIMIT,
				}),
			initialPageParam: gifFindCriteriaBehavior.nextOffset({
				offset: initialData.pagination.offset,
				limit: gifFindCriteriaBehavior.LIMIT,
			}),
			initialData: {
				pages: [initialData],
				pageParams: [initialData.pagination.offset],
			},
			enabled: !initialData.data.length,
		});

	const isNearScreen = useIsNearScreen(() => {
		if (!isLoading && !isFetching && !isFetchingNextPage) {
			fetchNextPage().catch(console.error);
		}
	});

	const gifList = data?.pages.reduce<GifModel[]>(
		(acc, page) => [...acc, ...page.data],
		[],
	);

	return (
		<>
			<GifGrid gifList={gifList} />

			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div ref={isNearScreen}>Don&apos;t look at me</div>
			)}
		</>
	);
}
