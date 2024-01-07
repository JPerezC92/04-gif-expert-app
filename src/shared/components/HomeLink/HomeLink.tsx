'use client';

import { Typography } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import styles from './HomeLink.module.css';

interface Props {
	children?: React.ReactNode;
}

export function HomeLink({ children }: Props) {
	const params = useSearchParams();

	return (
		<Typography
			variant='h1'
			component={Link}
			href={`/?${params.toString()}`}
			fontWeight='bold'
			letterSpacing='0.05rem'
			width='auto'
			className={styles.home_title}
			fontSize={{ xs: '3rem', md: '6rem' }}
		>
			{children}
		</Typography>
	);
}
