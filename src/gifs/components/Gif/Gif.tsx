'use client';
import { Box } from '@mui/material';
import React from 'react';

import { type Gif as GifModel } from '@/gifs/domain';
import { randomColor } from '@/shared/utils';

interface Props {
	gif: GifModel;
	className?: string;
}

export const Gif = React.memo(function Gif({ gif, className }: Props) {
	const [color, setColor] = React.useState('');

	React.useEffect(() => {
		setColor(randomColor());
	}, []);

	return (
		<Box
			component='div'
			position='relative'
			className={className}
			sx={{
				height: '100%',
				border: '3px solid transparent',
				':before': {
					content: '""',
					position: 'absolute',
					width: '100%',
					height: '100%',
					inset: '0',
					zIndex: -1,
					backgroundColor: color,
				},
				':hover:before': {
					width: 'calc(100% + 12px)',
					height: 'calc(100% + 12px)',
					inset: '-6px',
				},
			}}
		>
			<Box
				component='img'
				loading='lazy'
				width='100%'
				height='100%'
				style={{ objectFit: 'contain', verticalAlign: 'middle' }}
				src={gif.imageOriginal.url}
				alt={gif.title}
				zIndex={1}
			/>
			<Box
				zIndex={-1}
				component='img'
				loading='lazy'
				width='100%'
				height='100%'
				sx={{ objectFit: 'cover', verticalAlign: 'middle', inset: 0 }}
				src={gif.imageOriginal.url}
				alt={gif.title}
				position='absolute'
			/>

			<Box
				width='100%'
				height='100%'
				bgcolor={'rgba(0,0,0,0.2)'}
				position='absolute'
				sx={{ inset: 0, backdropFilter: 'blur(5px)' }}
				zIndex={-1}
			/>

			<Box
				position='absolute'
				left='0'
				bottom='0'
				zIndex={1}
				fontWeight='bold'
				bgcolor='rgba(0,0,0,0.9)'
				padding='0 0.5rem'
				color='whitesmoke'
				sx={{ borderTopRightRadius: '0.5rem' }}
			>
				{gif.title}
			</Box>
		</Box>
	);
});
