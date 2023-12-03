import { type Rating } from '@/gifs/domain';

import { type Image } from './image.model';

export interface Gif {
	readonly id: string;
	readonly type: string;
	readonly slug: string;
	readonly title: string;
	readonly rating: Rating;
	readonly imageOriginal: Image;
	readonly imageFixedHeight: Image;
}
