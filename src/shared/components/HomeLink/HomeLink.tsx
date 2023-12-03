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
			marginBlockEnd={4}
			fontWeight='bold'
			letterSpacing='0.05rem'
			className={styles.home_title}
		>
			{children}
		</Typography>
	);
}
