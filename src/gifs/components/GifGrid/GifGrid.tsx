import { Box } from '@mui/material';
import React from 'react';

import { Gif } from '@/gifs/components/Gif';
import { type Gif as GifModel } from '@/gifs/domain';

import styles from './GifGrid.module.css';

interface Props {
	gifList: GifModel[];
}

export function GifGrid({ gifList }: Props) {
	return (
		<Box
			component='ol'
			paddingInlineStart={0}
			margin={0}
			marginInline='2px'
			marginBlockStart={2}
			display='grid'
			gridTemplateColumns='repeat(auto-fit, minmax(min(15rem,100%),1fr))'
			gridAutoRows='250px'
			gridAutoFlow='row dense'
			gridTemplateRows='masonry'
		>
			{gifList?.map(gif => (
				<Box
					key={gif.id}
					component='li'
					sx={{ listStyle: 'none' }}
					className={styles.Gif}
				>
					<Gif gif={gif} />
				</Box>
			))}
		</Box>
	);
}
