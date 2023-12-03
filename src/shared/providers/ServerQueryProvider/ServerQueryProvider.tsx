'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

export interface ServerQueryProviderProps {
	children: React.ReactNode;
}

export function ServerQueryProvider({ children }: ServerQueryProviderProps) {
	const [queryClient] = React.useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
