import { type GifEndpointDto } from '@/gifs/schemas';

export function GifEndpointToDomainAdapter(gifEndpointDto: GifEndpointDto) {
	return {
		id: gifEndpointDto.id,
		type: gifEndpointDto.type,
		slug: gifEndpointDto.slug,
		title: gifEndpointDto.title,
		rating: gifEndpointDto.rating,
		imageOriginal: {
			height: parseInt(gifEndpointDto.images.original.height),
			width: parseInt(gifEndpointDto.images.original.width),
			url: gifEndpointDto.images.original.url,
		},
		imageFixedHeight: {
			height: parseInt(gifEndpointDto.images.fixed_height.height),
			width: parseInt(gifEndpointDto.images.fixed_height.width),
			url: gifEndpointDto.images.fixed_height.url,
		},
	};
}
