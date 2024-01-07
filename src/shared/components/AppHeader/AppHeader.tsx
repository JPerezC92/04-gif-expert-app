import './AppHeader.css';

import { Box } from '@mui/material';
import React from 'react';

import { HomeLink } from '@/shared/components/HomeLink';

interface Props {
	example?: string;
}

export const AppHeader: React.FC<Props> = () => {
	return (
		<Box component='header' marginTop='1rem'>
			<Box sx={{ marginInline: 'auto', textAlign: 'center' }}>
				<HomeLink>Snap flicks</HomeLink>
			</Box>
		</Box>
	);
};
