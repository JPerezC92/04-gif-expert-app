import { faker } from '@faker-js/faker';

import { type Gif } from '@/gifs/domain';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GifMother {
	static create(params?: Partial<Gif>): Gif {
		return {
			id: faker.string.uuid(),
			title: faker.lorem.sentence(),
			imageFixedHeight: {
				height: faker.number.int(),
				width: faker.number.int(),
				url: faker.image.url(),
			},
			imageOriginal: {
				height: faker.number.int(),
				width: faker.number.int(),
				url: faker.image.url(),
			},
			rating: 'pg',
			slug: faker.lorem.slug(),
			type: 'gif',
			...params,
		};
	}
}
