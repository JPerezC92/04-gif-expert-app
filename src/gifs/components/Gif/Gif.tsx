'use client';
import { Box, type SxProps, Typography } from '@mui/material';
import fontColorContrast from 'font-color-contrast';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { type Gif as GifModel } from '@/gifs/domain';
import { appRoutes } from '@/shared/routes';
import { randomColor } from '@/shared/utils';

interface Props {
	className?: string;
	sx?: SxProps;
	gif: GifModel;
}

export const Gif = React.memo(function Gif({ gif, className, sx }: Props) {
	const [color, setColor] = React.useState('');
	const searchParams = useSearchParams();

	React.useEffect(() => {
		setColor(randomColor());
	}, []);

	return (
		<Box
			component={Link}
			href={`${appRoutes.gifs}/${gif.id}?${searchParams.toString()}`}
			className={className}
			display='block'
			position='relative'
			sx={{
				...sx,
				height: '100%',
				border: '3px solid transparent',
				':before': {
					content: '""',
					borderRadius: '0.1rem',
					position: 'absolute',
					zIndex: -1,
					backgroundColor: 'transparent',
					opacity: 0,
					inset: '-6px',
					width: 'calc(100% + 12px)',
					height: 'calc(100% + 12px)',
				},
				':hover:before': {
					backgroundColor: color,
					opacity: 1,
					transition: 'all 0.2s ease-in-out',
				},
			}}
		>
			<Box
				component='img'
				title={gif.title}
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

			<Typography
				fontSize='0.85rem'
				position='absolute'
				left='0'
				bottom='0'
				zIndex={1}
				fontWeight='bold'
				padding='0 0.5rem'
				bgcolor={color}
				sx={{ borderTopRightRadius: '0.5rem', letterSpacing: '0.02rem' }}
				color={fontColorContrast(color)}
			>
				{gif.title}
			</Typography>
		</Box>
	);
});
